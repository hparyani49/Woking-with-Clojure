(ns new-todo.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [secretary.core :as secretary]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST]]
            [new-todo.ajax :refer [load-interceptors!]]
            [new-todo.handlers]
            [new-todo.subscriptions])
  (:import goog.History))

(defn log [& params]
  (.log js/console (apply str params)))

(defn get-value [id]
  (.-value (.getElementById js/document id)))

(def server "http://localhost:3000/")

(defn error-handler [params]
  (log "###########" params))

(defn nav-link [uri title page collapsed?]
  (let [selected-page (rf/subscribe [:page])]
    (when (= @selected-page :update)
      (rf/dispatch [:reset-count]))
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
      [:a.navbar-brand {:href "#/"} "Pinboard"]
      [:ul.nav.navbar-nav
       [nav-link "#/" "Home" :home collapsed?]
       [nav-link "#/about" "Pending pins" :about collapsed?]
       [nav-link "#/update" "Done pins" :update collapsed?]]]]))

(defn get-handler [response]
  (rf/dispatch [:set-pinboard response]))

(defn about-handler [response]
  (js/alert "Updated the task status")
  (rf/dispatch [:set-done-pinboard response])
  (GET (str server "update-status")
       {:params { }
        :format :json
        :response-format :json
        :keywords? true
        :handler get-handler
        :error-handler error-handler}))

(defn about-page []
  [:div.container
   (let [pins @(rf/subscribe [:get-pinboard])]
     [:h3  "Your pending pins are"]
     [:div
      [:ul.list-group.pin-board
       (map (fn [x] [:li.list-group-item
                     [:ul.list-group
                      [:li {:class "list-group-item list-group-item-success"}
                       (str "Author: " (:author x))]
                      [:li {:class "list-group-item list-group-item-info"}
                       (str "Task: " (:task x))]
                      [:li {:class "list-group-item list-group-item-info"}
                       (str "Description: " (:desc x))]
                      [:li {:class "list-group-item list-group-item-danger"}
                       (str "Assigned to: " (:assign x))]
                      [:img {:src (str js/context "/img/check-circle.png")
                             :on-click (fn [e]
                                     (GET (str server "update")
                                          {:params {:t (:task x)
                                                    :a (:assign x)}
                                           :format :json
                                           :response-format :json
                                           :keywords? true
                                           :handler about-handler
                                           :error-handler error-handler}))}]
                      [:a {:href "www.facebook.com"}
                       [:img {:src (str js/context "/img/facebook-box.png")}]]]]) pins)]])])

(defn update-page []
  [:div.container
   (let [pins @(rf/subscribe [:get-done-pinboard])]
     [:div [:h3  "Your completed pins are"]
      [:ul.list-group.pin-board
       (map (fn [x] [:li.list-group-item
                     [:ul.list-group
                      [:li {:class "list-group-item list-group-item-success"}
                       (str "Author: " (:author x))]
                      [:li {:class "list-group-item list-group-item-info"}
                       (str "Task: " (:task x))]
                      [:li {:class "list-group-item list-group-item-info"}
                       (str "Description: " (:desc x))]
                      [:li {:class "list-group-item list-group-item-danger"}
                       (str "Assigned to: " (:assign x))]]])
            pins)]])])

(defn home-handler [response]
  (js/alert "Added to your pinboard")
  (rf/dispatch [:set-pinboard response])
  (rf/dispatch [:set-active-page :about]))

(defn home-page []
  [:div.container
   [:h2 "Welcome to your Pinboard"]
   [:form {:action "#"
           :on-submit (fn [e]
                        (let [u (get-value "auth")
                              t (get-value "tname")
                              d (get-value "desc")
                              a (get-value "assign")]
                          (GET (str server "addpin")
                               {:params {:u u
                                         :t t
                                         :d d
                                         :a a}
                                :format :json
                                :response-format :json
                                :keywords? true
                                :handler home-handler
                                :error-handler error-handler})))}
    [:div [:input {:class "form-control"
                   :type "text"
                   :placeholder "Author's Name"
                   :id "auth"}]]
    [:div [:input {:class "form-control"
                   :type "text"
                   :placeholder "Task-name"
                   :id "tname"}]]
    [:div [:textarea {:class "form-control"
                      :placeholder "Task-details"
                      :id "desc"}]]
    [:div [:input {:class "form-control"
                   :type "text"
                   :placeholder "Assigned To?"
                   :id "assign"}]]
    [:div [:input {:class "btn btn-success"
                   :type "submit"
                   :value "Submit"}]]]])

(def pages
  {:home #'home-page
   :about #'about-page
   :update #'update-page})

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

(secretary/defroute "/update" []
  (rf/dispatch [:set-active-page :update]))

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
