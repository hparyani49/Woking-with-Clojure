(ns rkh.routes.home
  (:require [rkh.layout :as layout]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]
            [rkh.view :as view]
            [postal.core :as p]))

(def email "aanjal.joshi@gmail.com")
(def pass "01studyleague")

(def conn {:host "smtp.gmail.com"
           :ssl true
           :user email
           :pass pass})

(defn welcome [user name]
  (p/send-message conn {:from email
                        :to user
                        :subject "Welcome to RKH"
                        :body (str "Hi " name " Congratulations on starting a new phase of learning!! We the team of RKH wish you all the best")}))

(defn home-page []
  (layout/render "home.html"))

(defn add-user [name user pass]
  (welcome user name)
  (view/create name user pass))

(defroutes home-routes
  (GET "/" []
       (home-page))
  (GET "/docs" []
       (-> (response/ok (-> "docs/docs.md" io/resource slurp))
           (response/header "Content-Type" "text/plain; charset=utf-8")))
  (POST "/login" [user pass]
        (view/check-login user pass))
  (POST "/sign-up" [name user pass]
        (add-user name user pass))
  (GET "/gram" [level]
       (view/get-activity "grammar" level))
  (GET "/vocab" [level]
       (view/get-activity "vocab" level)))
