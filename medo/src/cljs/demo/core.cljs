(ns demo.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [secretary.core :as secretary]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST]]
            [demo.ajax :refer [load-interceptors!]]
            [demo.handlers]
            [demo.subscriptions]
            [cljs.core.async :refer [put! chan <! >! buffer]])
  (:import goog.History))


(defn nav-link [uri title page collapsed?]
  (let [selected-page (rf/subscribe [:page])]
    [:li.nav-item
     {:class (when (= page @selected-page) "active")}
     [:a.nav-link
      {:href uri
       :on-click #(reset! collapsed? true)} title]]))

(defn navbar []
  (r/with-let [collapsed? (r/atom true)]
    [:nav.navbar.navbar-dark.bg-primary
     [:button.navbar-toggler.hidden-sm-up
      {:on-click #(swap! collapsed? not)} "☰"]
     [:div.collapse.navbar-toggleable-xs
      (when-not @collapsed? {:class "in"})
      [:a.navbar-brand {:href "#/"} "demo"]
      [:ul.nav.navbar-nav
       [nav-link "#/" "Home" :home collapsed?]
       [nav-link "#/about" "About" :about collapsed?]]]]))

(defn about-page []
  [:div.container
   [:div.row
    [:div.col-md-12
     [:img {:src (str js/context "/img/warning_clojure.png")}]]]])

(enable-console-print!)
(def user (r/atom {}))

(defn load-gapi-auth2 []
  (let [c (chan)]
    (.load js/gapi "auth2" #(go (>! c true)))
    c))

(defn auth-instance []
  (.getAuthInstance js/gapi.auth2))

(defn get-google-token []
  (-> (auth-instance) .-currentUser .get .getAuthResponse .-id_token))

(defn handle-user-change
  [u]
  (let [profile (.getBasicProfile u)]
    (reset! user
            {:name       (if profile (.getName profile) nil)
             :image-url  (if profile (.getImageUrl profile) nil)
             :token      (get-google-token)
             :signed-in? (.isSignedIn u)})))

(defonce _ (go
             (<! (load-gapi-auth2))
             (.init js/gapi.auth2
                    (clj->js {"client_id"  "453911432796-dt7bnrb1hlqhu1ejh6dpak2f6bvo7h2r.apps.googleusercontent.com"
                              "scope"     "profile"}))
             (let [current-user (.-currentUser (auth-instance))]
               (.listen current-user handle-user-change))))

(defn signout []
  (.signOut (auth-instance)))

(defn home-page []
  [:div
   (if-not (:signed-in? @user) [:a {:href "#" :on-click #(.signIn (auth-instance))} "Sign in with Google"]
           [:div
            [:p
             [:strong (:name @user)]
             [:br]
             [:img {:src (:image-url @user)}]]
            [:a {:href "#" :on-click #(signout) } "Sign Out"]])])


(def pages
  {:home #'home-page
   :about #'about-page})

(defn page []
  [:div
   [navbar]
   [(pages @(rf/subscribe [:page]))]])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (rf/dispatch [:set-active-page :home]))

(secretary/defroute "/about" []
  (rf/dispatch [:set-active-page :about]))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
      HistoryEventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn fetch-docs! []
  (GET "/docs" {:handler #(rf/dispatch [:set-docs %])}))

(defn mount-components []
  (rf/clear-subscription-cache!)
  (r/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (rf/dispatch-sync [:initialize-db])
  (load-interceptors!)
  (fetch-docs!)
  (hook-browser-navigation!)
  (mount-components))
