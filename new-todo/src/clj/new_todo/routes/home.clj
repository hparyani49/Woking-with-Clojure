(ns new-todo.routes.home
  (:require [new-todo.layout :as layout]
            [compojure.core :refer [defroutes GET]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]
            [new-todo.views :as views]))

(defn home-page []
  (layout/render "home.html"))

(defroutes home-routes
  (GET "/" []
       (home-page))
  (GET "/docs" []
       (-> (response/ok (-> "docs/docs.md" io/resource slurp))
           (response/header "Content-Type" "text/plain; charset=utf-8")))
  (GET "/addpin" [u t d a]
       (views/addpin u t d a))
  (GET "/update" [t a]
       (views/update-pin t a))
  (GET "/update-status" []
       (views/get-pins)))
