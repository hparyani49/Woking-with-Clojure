(ns todo.db.core
    (:require [monger.core :as mg]
              [monger.collection :as mc]
              [monger.operators :refer :all]
              [mount.core :refer [defstate]]
              [todo.config :refer [env]]))

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

(defn get-user [id paswd]
  (mc/find-maps db "users" {:username id :password paswd}))

(defn create-task [u n d s]
  (mc/insert db "To-Dos" {:user u :name n :desc d :status s }))

(defn get-tasks [u]
  (mc/find-maps db "To-Dos" {:user u :status "undone"}))

(defn change-status [username task-name]
  (mc/update db "To-Dos" {:user username :name task-name}
             {$set {:status "done"}}
             {:multi true}))

(defn update-task [username task-name new-desc]
  (mc/update db "To-Dos" {:user username :name task-name}
             {$set {:desc new-desc}}
             {:multi true}))
