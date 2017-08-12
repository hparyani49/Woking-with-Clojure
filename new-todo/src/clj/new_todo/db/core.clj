(ns new-todo.db.core
    (:require [monger.core :as mg]
              [monger.collection :as mc]
              [monger.operators :refer :all]
              [mount.core :refer [defstate]]
              [new-todo.config :refer [env]]))

(defstate db*
  :start (-> env :database-url mg/connect-via-uri)
  :stop (-> db* :conn mg/disconnect))

(defstate db
  :start (:db db*))

(defn create-user [user]
  (mc/insert db "users" user))

(defn update-user [id first-name last-name email]
  (mc/update db "users" {:_id id}
             {$set {:first_name first-name
                    :last_name last-name
                    :email email}}))

(defn get-user [id]
  (mc/find-one-as-map db "users" {:_id id}))

(defn create-pin [user name desc assign]
  (mc/insert db "pins" {:author user :task name :desc desc :assign assign :status "undone"}))

(defn update-status [tname assign]
  (mc/update db "pins" {:task tname :assign assign}
             {$set {:status "done"}}
             {:multi true}))

(defn get-undone-pins []
  (mc/find-maps db "pins" {:status "undone"}))

(defn get-done-pins []
  (mc/find-maps db "pins" {:status "done"}))
