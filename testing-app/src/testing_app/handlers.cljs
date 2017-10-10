(ns testing-app.handlers
  (:require
    [re-frame.core :refer [reg-event-db ->interceptor reg-event-fx reg-fx]]
    [clojure.spec.alpha :as s]
    [testing-app.db :as db :refer [app-db]]))

;; -- Interceptors ----------------------------------------------------------
;;
;; See https://github.com/Day8/re-frame/blob/develop/docs/Interceptors.md
;;
(defn check-and-throw
  "Throw an exception if db doesn't have a valid spec."
  [spec db]
  (when-not (s/valid? spec db)
    (let [explain-data (s/explain-data spec db)]
      (throw (ex-info (str "Spec check failed: " explain-data) explain-data)))))

(defn validate-spec
  (if goog.DEBUG
    (->interceptor
        :id :validate-spec
        :after (fn [context]
                 (let [db (-> context :effects :db)]
                   (check-and-throw ::db/app-db db)
                   context)))
    ->interceptor))

(defn http-get
  ([url on-success on-error]
   (http-get url nil on-success on-error))
  ([url valid-response? on-success on-error]
   (-> (.fetch js/window url (clj->js {:method  "GET"
                                       :headers {"Cache-Control" "no-cache"}}))
       (.then (fn [response]
                (let [ok?  (.-ok response)
                      ok?' (if valid-response?
                             (and ok? (valid-response? response))
                             ok?)]
                  [(.-_bodyText response) ok?'])))
       (.then (fn [[response ok?]]
                (cond
                  ok? (let [json (.parse js/JSON response)
                            obj (js->clj json :keywordize-keys true)]
                        (on-success obj))

                  (and on-error (not ok?))
                  (on-error response)

                  :else false)))
       (.catch (or on-error
                   (fn [error]
                     (js/alert "Error" (str error))))))))

   (http-post action data on-success headers

              nil))
  ([action data on-success headers on-error]
   (-> (.fetch js/window
               (str action)
               (clj->js {:method "POST"
                         :headers (merge {:accept "application/json"
                                          :content-type "application/json"}
                                         headers)
                         :body (.stringify js/JSON (clj->js data))}))
       (.then (fn [response]
                (.text response)))
       (.then (fn [text]
                (let [json (.parse js/JSON text)
                      obj (js->clj json :keywordize-keys true)]
                  (on-success obj))))
       (.catch (or on-error
                   (fn [error]
                     (js/alert "Error" (str error))))))))

;; -- Handlers --------------------------------------------------------------

(reg-event-db
  :initialize-db
  [validate-spec]
  (fn [_ _]
    app-db))

(reg-event-db
  :set-greeting
  [validate-spec]
  (fn [db [_ value]]
    (assoc db :greeting value)))

(reg-fx
 :get-books
 (fn [params]
   (http-post "http://22802d53.ngrok.io/act-lvl" {:book "No David"} #(js/alert %) #(js/alert %))))

(reg-event-fx
 :get-books
 (fn [cofx [_]]
   {:get-books nil}))
