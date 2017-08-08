(ns todo.routes.home
  (:require [todo.layout :as layout]
            [todo.db.core :as db]
            [todo.views :as views]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]
            [clojure.string :as string]))

(defn home-page []
  (layout/render "home.html"))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/addtodo" [u n d s] (views/add-todo u n d s))
  (GET "/login-user" [uid paswd] (views/validate uid paswd))
  (GET "/change-status" [u n] (views/change-status u n))
  (GET "/update-task" [u n d] (views/update-task u n d)))
