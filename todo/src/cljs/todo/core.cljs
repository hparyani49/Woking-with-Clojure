(ns todo.core
  (:require [ajax.core :refer [GET POST]]
            [secretary.core :as secretary :refer-macros [defroute]]
            [reagent.core :as r]
            [reagent.session :as session]
            [accountant.core :as accountant]))

(accountant/configure-navigation!
   {:nav-handler
    (fn [path] (secretary/dispatch! path))
    :path-exists?
    (fn [path] (secretary/locate-route path))})

(def todo-list (r/atom []))
(def user-name (r/atom ""))
#_(def page (r/atom :login))
(def server "http://localhost:3000/")

(defn page []
  [(session/get :current-page)])

(defn get-by-id [id] (.getElementById js/document id))

(defn log [& params] (.log js/console (apply str params)))

(defn error-handler [params]
  (log "###########" params))

(defn update-task []
  (js/alert "Updated")
  (secretary/dispatch! "/addtodo"))

(defn update-page []
  [:div
   [:h2 "Update your To-Do"]
   [:form {:action "#"
           :on-submit (fn [e]
                        (let [u @user-name
                              n (.-value (get-by-id "name"))
                              d (.-value (get-by-id "desc"))]
                          (GET (str server "update-task")
                                {:params {:u u
                                          :n n
                                          :d d}
                                 :format :json
                                 :response-format :json
                                 :keywords? true
                                 :handler update-task
                                 :error-handler error-handler})))}
    [:div [:input {:type "text"
                   :id "user"
                   :placeholder @user-name
                   :disabled true}]]
    [:div [:input {:type "text"
                   :id "name"
                   :placeholder "Task-Name"}]]
    [:div [:input {:type "text"
                   :id "desc"
                   :placeholder "Description"}]]
    [:input {:type "submit" :value "Submit"}]]])


(defn validate-user
  "Handles the response for login-page"
  [response]
  (if (= 1 (count response))
    (do (reset! user-name (get-in response [0 :username]))
        (secretary/dispatch! "/addtodo")
        (log @user-name))
    (js/alert "Invalid Credentials")))

(defn login-page []
  [:div
   [:h2  "Welcome to your To-Do"]
   #_[:h3  "Please login to continue"]
   [:form {:action "#"
           :on-submit (fn [e]
                        (let [uid (.-value (get-by-id "username"))
                              paswd (.-value (get-by-id "password"))]
                          (GET (str server "login-user")
                               {:params {:uid uid
                                         :paswd paswd}
                                :format :json
                                :response-format :json
                                :keywords? true
                                :handler validate-user
                                :error-handler error-handler})))}
    [:div [:input {:id "username"
                   :type "text"
                   :placeholder "Username"}]]
    [:div [:input {:id "password"
                   :type "password"
                   :placeholder "Password"}]]
    [:div [:input {:type "submit"
                   :value "Login"}]]]])


(defn show-output
  "Handles the response of home-page"
  [response]
  (if (true? (first response))
    (do (set! (.-value (.getElementById js/document "str1")) "Added Successfully")
        (reset! todo-list (rest response)))
    (do (set! (.-value (.getElementById js/document "str1")) "Nothing New Added")
        (reset! todo-list (rest response)))))

(defn change-status-alert
  "Handles the response of task-list"
  [response]
  (reset! todo-list response)
  (js/alert "Status updated"))

(defn task-list
  "Component which shows a list of task"
  []
  [:div [:h3 "Your Tasks Are, Click over them to mark them done"]
   [:ul
    (doall (map (fn [x] ^{:key x} [:li {:on-click (fn [e]
                                                     (let [u @user-name
                                                           n (:name x)]
                                                       (GET (str server "change-status")
                                                            {:params {:u u
                                                                      :n n}
                                                             :format :json
                                                             :response-format :json
                                                             :keywords? true
                                                             :handler change-status-alert
                                                             :error-handler error-handler})))}
                                   (:name x)])
                @todo-list))]])

(defn home-page []
  [:div
   [:h2 "Welcome to your To-Do"]
   [:form {:action "#"
           :on-submit (fn [e]
                        (let [u @user-name
                              n (.-value (get-by-id "name"))
                              d (.-value (get-by-id "desc"))
                              s (.-value (get-by-id "status"))]
                          (GET (str server "addtodo")
                                {:params {:u u
                                          :n n
                                          :d d
                                          :s s}
                                 :format :json
                                 :response-format :json
                                 :keywords? true
                                 :handler show-output
                                 :error-handler error-handler})))}
    [:div  [:input {:type "text"
                      :id "user"
                      :placeholder @user-name
                      :disabled true
                      :class "input1"}]]
    [:div [:input {:type "text"
                   :id "name"
                   :placeholder "Task-Name"}]]
    [:div [:input {:type "text"
                   :id "desc"
                   :placeholder "Description"}]]
    [:div [:input {:type "text"
                   :id "status"
                   :placeholder "Status?"}]
     [:input {:type "submit" :value "Submit or Get-Tasks"}]]
    [:div [:input {:disabled true :type "text" :id "str1"}]]]
   [:button {:on-click #(secretary/dispatch! "/")} "Logout"]
   [:button {:on-click #(secretary/dispatch! "/update-todo")} "Update"]
   [task-list]])

#_(defn show-page
  "Selects which page to show"
  []
  [:div.container
   (condp = @page
     :login [login-page]
     :home [home-page]
     :update [update-page])])

;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Secretary

(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :current-page login-page))

(secretary/defroute "/addtodo" []
  (session/put! :current-page home-page))

(secretary/defroute "/update-todo" []
  (session/put! :current-page update-page))

;; -------------------------
;; Initialize app

(defn mount-components []
  (session/put! :current-page login-page)
  (r/render [page] (.getElementById js/document "app")))

(defn init! []
  (mount-components))
