(ns boots.core
  (:require [reagent.core :as reagent]
            [cljs-http.client :as http]
            [reagent.crypt :as utils]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [boots.ajax :refer [load-interceptors!]]
            [ajax.core :refer [GET POST]]
            [cljs.core.async :refer (<!)]
            [soda-ash.core :as sa]
            [boots.calendar :as cal]
            [reagent-material-ui.core :as ui])
  (:import [goog.events EventType]))

(def el reagent/as-element)
(defn icon [nme] [ui/FontIcon {:className "material-icons"} nme])
(defn color [nme] (aget ui/colors nme))

(defonce theme-defaults {:muiTheme (ui/getMuiTheme
                                    (-> ui/darkBaseTheme
                                        (js->clj :keywordize-keys true)
                                        (update :palette merge {:primary1Color (color "amber500")
                                                                :primary2Color (color "amber700")})
                                        clj->js))})

(defn simple-nav []
  (let [is-open? (atom false)
        close #(reset! is-open? false)]
    (fn []
      [:div
       [ui/AppBar {:title "yipgo" :onLeftIconButtonTouchTap #(reset! is-open? true)}]
       [ui/Drawer {:open @is-open? :docked false}
        [ui/List
         [ui/ListItem {:leftIcon (el [:i.material-icons "home"])
                       :on-click (fn []
                                   (accountant/navigate! "/")
                                   (close))}
          "Home"]
         [ui/Divider]
         (for [[doc details] @(rf/subscribe [:docs.list.by-name])]
           ^{:key doc} [ui/ListItem {:secondaryText "Something something"
                                     :rightIconButton (el [ui/IconMenu {:iconButtonElement (el [ui/IconButton {:touch true} [icon "more_vert"]])}
                                                           [ui/MenuItem "Delete"]])
                                     :onTouchTap (fn []
                                                   ;; some action or another, then close the menu
                                                   (close))}
                        doc])]
        [new-doc-modal close]]])))

(defn ui-page []
  [ui/MuiThemeProvider theme-defaults
   [:div
    [simple-nav]
    [:div
     [:h2 "Welcome to a simple, example application."]]]])



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;Draggable Button
(enable-console-print!)

(def black-hole-pos {:x 400 :y 400})

(def draggable (reagent/atom {:x 100 :y 100 :alive? true}))

#_(defn nav-link [uri title page collapsed?]
  [:li.nav-item
   {:class (when (= page (session/get :page)) "active")}
   [:a.nav-link
    {:href uri
     :on-click #(reset! collapsed? true)} title]])

#_(defn navbar []
  (let [collapsed? (reagent/atom true)]
    (fn []
      [:nav.navbar.navbar-dark.bg-primary
       [:button.navbar-toggler.hidden-sm-up
        {:on-click #(swap! collapsed? not)} "☰"]
       [:div.collapse.navbar-toggleable-xs
        (when-not @collapsed? {:class "in"})
        [:a.navbar-brand {:href "#/"} "boots"]
        [:ul.nav.navbar-nav
         [nav-link "#/" "Home" :home collapsed?]
         [nav-link "#/about" "About" :about collapsed?]]]])))

(defn about-page []
  [:div.container
   [:div.row
    [:div.col-md-12
     [:img {:src (str js/context "/img/warning_clojure.png")}]]]])

;; Utility functions

(defn close? [x y]
  (< (Math/abs (- x (:x black-hole-pos))) 200)
  #_(and (< (Math/abs (- x (:x black-hole-pos))) 50)
       (< (Math/abs (- y (:y black-hole-pos))) 50)))


(defn get-client-rect [evt]
  (let [r (.getBoundingClientRect (.-target evt))]
    {:left (.-left r), :top (.-top r)}))


;; Event handlers

(defn mouse-move-handler [offset]
  (fn [evt]
    (let [x (- (.-clientX evt) (:x offset))
          y (- (.-clientY evt) (:y offset))]
      (if (close? x y)
        (reset! draggable {:alive? false})
        (reset! draggable {:x      x
                           :y      y
                           :alive? true})))))


(defn mouse-up-handler [on-move]
  (fn me [evt]
    (.log js/console "#######")
    (events/unlisten js/window EventType.MOUSEMOVE
                     on-move)))


(defn mouse-down-handler [e]
  (let [{:keys [left top]} (get-client-rect e)
        offset             {:x (- (.-clientX e) left)
                            :y (- (.-clientY e) top)}
        on-move            (mouse-move-handler offset)]
    (.log js/console "!!!!!!!")
    (events/listen js/window EventType.MOUSEMOVE
                   on-move)
    (events/listen js/window EventType.MOUSEUP
                   (mouse-up-handler on-move))))

;; Rea[ct|gent] components

(defn draggable-button []
  [:div
   [:h1 (pr-str @draggable)]
   [:button.btn.btn-default
    {:style {:position   "absolute"
             :left       (str (:x black-hole-pos) "px") ;
             :top        (str (:y black-hole-pos) "px")
             :background "color: black;"}}
    "Not here please"]
   (if (:alive? @draggable)
     [:button.btn.btn-default
      {:style         {:position "absolute"
                       :left     (str (:x @draggable) "px") ;
                       :top      (str (:y @draggable) "px")}
       :on-mouse-down mouse-down-handler}
      "Drag me"])])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(defn home-page []
  [sa/Table
   [sa/TableHeader
    [sa/TableRow
     [sa/TableHeaderCell {:colSpan 1 :collapsing true}
      [sa/Button {:on-click "#"} "<"]]
     [sa/TableHeaderCell {:colSpan 10 :textAlign "center" :collapsing true}
      "August"]
     [sa/TableHeaderCell {:colSpan 1 :collapsing true}
      [sa/Button {:on-click "#"} ">"]]]]
   #_[sa/TableBody
    [sa/TableRow
     [sa/TableCell {:collapsing true}
      [sa/Icon {:name "folder"} " Node Modules"]]]]])

(defn calendar []
  [:div [cal/calendar]])



(def pages
  {:home #'draggable-button
   :about #'about-page})

(defn page []
  [(pages (session/get :page))])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :page :home))

(secretary/defroute "/about" []
  (session/put! :page :about))
;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  #_(doto (History.)
        (events/listen
          HistoryEventType/NAVIGATE
          (fn [event]
              (secretary/dispatch! (.-token event))))
        (.setEnabled true)))

;; -------------------------
;; Initialize app
#_(defn fetch-docs! []
  (GET "/docs" {:handler #(session/put! :docs %)}))

(defn mount-components []
  #_(reagent/render [#'navbar] (.getElementById js/document "navbar"))
  (reagent/render [ui-page] (.getElementById js/document "app")))

(defn init! []
  (load-interceptors!)
  #_(fetch-docs!)
  (hook-browser-navigation!)
  (mount-components))
