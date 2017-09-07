(ns rkh.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [secretary.core :as secretary]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST]]
            [rkh.ajax :refer [load-interceptors!]]
            [rkh.handlers]
            [rkh.subscriptions]
            [reagent-material-ui.core :as ui]
            [cljsjs.chartjs])
  (:import goog.History))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;Material UI

(def server "http://localhost:3000/")

(defn log [& msg]
  (.log js/console (apply str msg)))

(defn get-by-id [id] (.getElementById js/document id))

(def el r/as-element)
(defn icon [nme val] [:div [ui/FontIcon {:className "material-icons"} nme] " " val])
(defn color [nme] (aget ui/colors nme))

;; create a new theme based on the dark theme from Material UI
(defonce theme-defaults {:muiTheme (ui/getMuiTheme
                                    (-> ui/lightBaseTheme
                                        (js->clj :keywordize-keys true)
                                        (update :palette merge {:primary1Color (color "amber500")
                                                                :primary2Color (color "amber700")})
                                        clj->js))})
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;Charts

(defn progress-chart
  []
  (let [vs1 @(rf/subscribe [:get-vl1-score])
        vs2 @(rf/subscribe [:get-vl2-score])
        vs3 @(rf/subscribe [:get-vl3-score])
        gs1 @(rf/subscribe [:get-gl1-score])
        gs2 @(rf/subscribe [:get-gl2-score])
        gs3 @(rf/subscribe [:get-gl3-score])
        context (.getContext (.getElementById js/document "rev-chartjs1") "2d")
        chart-data {:type "line"
                    :data {:labels ["Initial" "Level1" "Level2" "Level3"]
                           :datasets [{:data [0 vs1 vs2 vs3]
                                       :label "Vocabulary"
                                       :backgroundColor "#90EE90"}
                                      {:data [0 gs1 gs2 gs3]
                                       :label "Grammar"
                                       :backgroundColor "#F08080"}]}}]
    (js/Chart. context (clj->js chart-data))))

(defn v-chart
  []
  (let [val1 @(rf/subscribe [:get-vl1-score])
        val2 @(rf/subscribe [:get-vl2-score])
        val3 @(rf/subscribe [:get-vl3-score])
        context (.getContext (.getElementById js/document "rev-chartjs2") "2d")
        chart-data {:type "line"
                    :data {:labels ["Initial" "Level1" "Level2" "Level3"]
                           :datasets [{:data [0 val1 val2 val3]
                                       :label "Vocabulary"
                                       :backgroundColor "#90EE90"}]}}]
    (js/Chart. context (clj->js chart-data))))

(defn g-chart
  []
  (let [val1 @(rf/subscribe [:get-gl1-score])
        val2 @(rf/subscribe [:get-gl2-score])
        val3 @(rf/subscribe [:get-gl3-score])
        context (.getContext (.getElementById js/document "rev-chartjs3") "2d")
        chart-data {:type "line"
                    :data {:labels ["Initial" "Level1" "Level2" "Level3"]
                           :datasets [{:data [0 val1 val2 val3]
                                       :label "Grammar"
                                       :backgroundColor "#F08080"}]}}]
    (js/Chart. context (clj->js chart-data))))

(defn show-v
  []
  (r/create-class
   {:component-did-mount #(v-chart)
    :display-name        "chartjs-component"
    :reagent-render      (fn []
                           [:canvas {:id "rev-chartjs2" :width "700" :height "380"}])}))

(defn show-g
  []
  (r/create-class
   {:component-did-mount #(g-chart)
    :display-name        "chartjs-component"
    :reagent-render      (fn []
                           [:canvas {:id "rev-chartjs3" :width "700" :height "380"}])}))

(defn vvsg
  []
  (r/create-class
   {:component-did-mount #(progress-chart)
    :display-name        "chartjs-component"
    :reagent-render      (fn []
                           [:canvas {:id "rev-chartjs1" :width "700" :height "380"}])}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;Pages

(defn simple-nav []
  (let [is-open? (r/atom 1)]
    (fn []
      [:div
       [ui/AppBar {:title "Random Knowledge House"
                   :onLeftIconButtonTouchTap #(swap! is-open? inc)}]
       [ui/Drawer {:docked false
                   :width "30%"
                   :open (even? @is-open?)
                   :onRequestChange #(swap! is-open? inc)}
        [ui/AppBar {:title "Menu"
                    :onLeftIconButtonTouchTap #(swap! is-open? inc)}]
        [ui/List
         [ui/ListItem {:onClick #(rf/dispatch [:set-inner-page :dash])
                       :leftIcon (el [icon "timeline" "Progress Chart"])}]
         [ui/ListItem {:initiallyOpen false
                       :primaryTogglesNestedList true
                       :leftIcon (el [icon "accessibility" "Arcs"])
                       :nestedItems
                       [(el [ui/ListItem {:onClick #(rf/dispatch [:set-inner-page :activity])
                                          :leftIcon (el [icon "done_all" "Vocabulary"])}])
                        (el [ui/ListItem {:onClick #(rf/dispatch [:set-inner-page :grammar])
                                          :leftIcon (el [icon "language" "Grammar"])}])]}]
         [ui/ListItem {:onClick #(rf/dispatch [:set-inner-page :about])
                       :leftIcon (el [icon "help" "About Us"])}]
         [ui/ListItem {:onClick #(.reload js/location true)
                       :leftIcon (el [icon "power_settings_new" "Logout"])}]]]])))

(defn dashboard []
  [:div [simple-nav]
   [ui/Paper {:style {:height "350"
                      :width "500"
                      :margin "50"
                      :textAlign "center"
                      :display "inline-block"}
              :zDepth "5"}
    [:h2 "Vocabulary vs Grammar"]
    [vvsg]]
   [ui/Paper {:style {:height "350"
                      :width "500"
                      :margin "50"
                      :textAlign "center"
                      :display "inline-block"}
              :zDepth "5"}
    [:h2 "Vocabulary ki pragati"]
    [show-v]]
   [ui/Paper {:style {:height "350"
                      :width "500"
                      :margin "50"
                      :textAlign "center"
                      :display "inline-block"}
              :zDepth "5"}
    [:h2 "Grammar ki pragati"]
    [show-g]]])

(defn about-us []
  [:div [simple-nav]
   [:h2 "Team RKH me apka swagat hai"]
   [ui/Subheader "Jyada kuch batane ke liye nahi hai, bas ek vinanti hai ki hume ache number dekar hausla afzahi kare!! Chutkule ek taraf, Ye app unki madad karta hai jo angrezi seekhna chahte hai"]
   [:h3 "Developers se mile"]
   [ui/Paper {:style {:height "200"
                      :width "200"
                      :margin "50"
                      :textAlign "center"
                      :display "inline-block"
                      :rounded true}
              :zDepth "5"}
    [ui/Avatar {:src (str js/context "img/tyrion.jpeg")
                :size "150"}]
    [:div [:p "HITESH"]]]
   [ui/Paper {:style {:height "200"
                      :width "200"
                      :margin "50"
                      :textAlign "center"
                      :display "inline-block"
                      :rounded true}
              :zDepth "5"}
    [ui/Avatar {:src (str js/context "img/rad.png")
                :size "150"}]
    [:div [:p "RADHA"]]]])

;;;;;;;;;;;;;;;;Activity-pages
(defn show-gram [params]
  (log params)
  (rf/dispatch [:set-inner-page :rem-act])
  (rf/dispatch [:set-act params])
  (rf/dispatch [:set-count 0]))

(defn error-gram [params]
  (log "gram/vocab" params))

(defn grammar []
  [:div
   [simple-nav]
   [ui/Card
    [ui/CardHeader {:title "Hello!"
                    :subtitle "Welcome to Grammar arc"
                    :avatar (str js/context "img/human.png")}]
    [ui/CardMedia
     {:overlay [(el [ui/CardTitle
                     {:title "Correct please sentence this, after learning grammar and probably clojure"}])]}
     [:img {:src (str js/context "img/gram.jpg") :height "400px"}]]]
   [ui/Paper {:style {:height "91"
                      :width "200"
                      :margin "50"
                      :textAlign "center"
                      :display "inline-block"}
              :zDepth "5"} "Naam Pehchano"
    [:div [ui/Subheader "Level 1"]]
    [:div [ui/RaisedButton {:primary true :onClick (fn [e]
                                                     (GET (str server "gram")
                                                          {:params {:level "1"}
                                                           :format :json
                                                           :response-format :json
                                                           :keywords? true
                                                           :handler show-gram
                                                           :error-handler error-gram}))} "Start"]]]
   [ui/Paper {:style {:height "91"
                      :width "200"
                      :margin "50"
                      :textAlign "center"
                      :display "inline-block"
                      :margin-top "10px"}
              :zDepth "5"}
    [:span.title  "Rikt Sthan Bhare"]
    [:div [ui/Subheader "Level 2"]]
    [:div [ui/RaisedButton {:primary true :onClick (fn [e]
                                                     (GET (str server "gram")
                                                          {:params {:level "2"}
                                                           :format :json
                                                           :response-format :json
                                                           :keywords? true
                                                           :handler show-gram
                                                           :error-handler error-gram}))} "Start"]]]
   [ui/Paper {:style {:height "91"
                      :width "200"
                      :margin "50"
                      :textAlign "center"
                      :display "inline-block"}
              :zDepth "5"} "Anuvaad ka vivaad"
    [:div [ui/Subheader "Level 3"]]
    [:div [ui/RaisedButton {:primary true :onClick (fn [e]
                                                     (GET (str server "gram")
                                                          {:params {:level "3"}
                                                           :format :json
                                                           :response-format :json
                                                           :keywords? true
                                                           :handler show-gram
                                                           :error-handler error-gram}))} "Start"]]]])

(defn vocab []
  [:div
   [simple-nav]
   [ui/Card
    [ui/CardHeader {:title "Hello!"
                    :subtitle "Welcome to vocabulary arc"
                    :avatar (str js/context "img/human.png")}]
    [ui/CardMedia
     {:overlay [(el [ui/CardTitle
                     {:title "You will understand the quote after completing these activities"}])]}
     [:img {:src (str js/context "img/activity.jpg") :height "400px"}]]]
   [ui/Paper {:style {:height "91"
                      :width "200"
                      :margin "50"
                      :textAlign "center"
                      :display "inline-block"}
              :zDepth "5"} "Shabd Pehchano"
    [:div [ui/Subheader "Level 1"]]
    [:div [ui/RaisedButton {:primary true :onClick (fn [e]
                                                     (GET (str server "vocab")
                                                          {:params {:level "1"}
                                                           :format :json
                                                           :response-format :json
                                                           :keywords? true
                                                           :handler show-gram
                                                           :error-handler error-gram}))}
           "Start"]]]
   [ui/Paper {:style {:height "91"
                      :width "200"
                      :margin "50"
                      :textAlign "center"
                      :display "inline-block"
                      :margin-top "10px"}
              :zDepth "5"}
    [:span.title  "Jodi Banao"]
    [:div [ui/Subheader "Level 2"]]
    [:div [ui/RaisedButton {:primary true :onClick (fn [e]
                                                     (GET (str server "vocab")
                                                          {:params {:level "2"}
                                                           :format :json
                                                           :response-format :json
                                                           :keywords? true
                                                           :handler show-gram
                                                           :error-handler error-gram}))} "Start"]]]
   [ui/Paper {:style {:height "91"
                      :width "200"
                      :margin "50"
                      :textAlign "center"
                      :display "inline-block"}
              :zDepth "5"} "Angrezi me"
    [:div [ui/Subheader "Level 3"]]
    [:div [ui/RaisedButton {:primary true :onClick (fn [e]
                                                     (GET (str server "vocab")
                                                          {:params {:level "3"}
                                                           :format :json
                                                           :response-format :json
                                                           :keywords? true
                                                           :handler show-gram
                                                           :error-handler error-gram}))} "Start"]]]])

(defn activity-rem []
  (let [c (rf/subscribe [:get-count])
        activities (rf/subscribe [:get-act])
        rat (r/atom "dog")
        on-radio-change (fn [e value]
                          (reset! rat value))]
    (fn []
      (let [name (nth @activities @c)]
        [:div [simple-nav]
         [:div
          [ui/Paper {:style {:height "280"
                             :width "250"
                             :margin "50"
                             :textAlign "left"
                             :display "inline-block"}
                     :zDepth "5"}
           [:h5 {:style {:margin "20px 0px 10px 10px"}} (:quest name)]
           [ui/RadioButtonGroup {:name "shipSpeed"
                                 :valueSelected @rat
                                 :onChange on-radio-change}
            [ui/RadioButton {:label (:opt1 name) :value (:opt1 name)}]
            [ui/RadioButton {:label (:opt2 name) :value (:opt2 name)}]
            [ui/RadioButton {:label (:opt3 name) :value (:opt3 name)}]
            [ui/RadioButton {:label (:opt4 name) :value (:opt4 name)}]]
           [ui/RaisedButton {:label "Next"
                             :primary true
                             :onClick #(if (= (inc @c)5)
                                         (do
                                           (js/alert "Congratulations!!You Completed the activity")
                                           (rf/dispatch [:set-inner-page :dash]))
                                         (do (println name @rat)
                                             (if (= (:ans name) @rat)
                                               (condp = (:activity name)
                                                 "vocab1" (rf/dispatch [:set-vl1-score])
                                                 "vocab2" (rf/dispatch [:set-vl2-score])
                                                 "vocab3" (rf/dispatch [:set-vl3-score])
                                                 "gram1" (rf/dispatch [:set-gl1-score])
                                                 "gram2" (rf/dispatch [:set-gl2-score])
                                                 "gram3" (rf/dispatch [:set-gl3-score])))
                                             (rf/dispatch [:change-count])))}]]]]))))

;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn show-signup [params]
  (if (empty? params)
    (do (log params)
     (js/alert "Email already exists"))
    (rf/dispatch [:set-inner-page :dash])))

(defn error-signup [params]
  (log "error: " params))

(defn sign-up []
  [:div.card.centerposition
   [:div [ui/TextField {:hintText "Enter Your Name" :floatingLabelText "Name" :id "name"}]]
   [:div [ui/TextField {:hintText "Enter Your Email Id" :floatingLabelText "Email Id" :id "email"}]]
   [:div [ui/TextField {:hintText "Enter Your Password"
                        :floatingLabelText "Password"
                        :id "password"
                        :type "password"}]]
   [:div [ui/TextField {:hintText "Enter Your Password Again"
                        :floatingLabelText "Repeat Password"
                        :id "password-repeat"
                        :type "password"}]]
   [:div [ui/RaisedButton {:label "Sign Up" :primary true
                           :onClick (fn [e]
                                      (let
                                          [user-name (.-value (get-by-id "email"))
                                           password (.-value (get-by-id "password"))
                                           name (.-value (get-by-id "name"))
                                           password-repeat (.-value (get-by-id "password-repeat"))]
                                        (if (= password password-repeat)
                                          (POST (str server "sign-up")
                                                {:params {:name name
                                                          :user user-name
                                                          :pass password}
                                                 :format :json
                                                 :response-format :json
                                                 :keywords? true
                                                 :handler show-signup
                                                 :error-handler error-signup}))))}]]])

(defn show-login [params]
  (if (empty? params)
      (js/alert "Invalid Credentials! Try signing up")
      (rf/dispatch [:set-inner-page :dash])))

(defn error-login [params]
  (log "@@@@@ error: " params))

(defn log-in []
  [:div.card
   [:div [ui/TextField {:hintText "Enter Your Email Id"
                        :floatingLabelText "Email Id"
                        :id "email"}]]
   [:div [ui/TextField {:hintText "Enter Your Password"
                        :floatingLabelText "Password"
                        :id "password"
                        :type "password"}]]
   [:div.spacer
    [ui/RaisedButton {:label "Log In" :primary true :onClick (fn [e]
                                                               (let [user-name (.-value (get-by-id "email"))
                                                                     password (.-value (get-by-id "password"))]
                                                                 (POST (str server "login")
                                                                       {:params {:user user-name
                                                                                 :pass password}
                                                                        :format :json
                                                                        :response-format :json
                                                                        :keywords? true
                                                                        :handler show-login
                                                                        :error-handler error-login})))}]
    [ui/RaisedButton {:label "Register" :primary true :onClick #(rf/dispatch [:set-inner-page :sign-up])}]]])

(def inner-pages
  {:sign-up sign-up
   :log-in log-in
   :dash  dashboard
   :activity vocab
   :grammar grammar
   :about about-us
   :rem-act activity-rem})

(defn home-page []
  [ui/MuiThemeProvider theme-defaults
   [:div
    [(inner-pages @(rf/subscribe [:get-inner-page]))]]])


(defn about-page []
  [:div.container
   [:div.row
    [:div.col-md-12
     [:img {:src (str js/context "/img/warning_clojure.png")}]]]])

(def pages
  {:home #'home-page
   :about #'about-page})

(defn page []
  [:div
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
  (r/render [page] (.getElementById js/document "app")))

(defn init! []
  (rf/dispatch-sync [:initialize-db])
  (rf/dispatch-sync [:set-inner-page :log-in])
  (load-interceptors!)
  (fetch-docs!)
  (hook-browser-navigation!)
  (mount-components))
