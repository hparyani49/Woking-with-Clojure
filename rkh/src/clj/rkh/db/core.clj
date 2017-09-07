(ns rkh.db.core
    (:require [monger.core :as mg]
              [monger.collection :as mc]
              [monger.operators :refer :all]
              [mount.core :refer [defstate]]
              [rkh.config :refer [env]]))

(defstate db*
  :start (-> env :database-url mg/connect-via-uri)
  :stop (-> db* :conn mg/disconnect))

(defstate db
  :start (:db db*))

(defn create-user [name email pswd]
  (mc/insert db "users" {:name name :email email :password pswd}))

(defn get-user [email]
  (mc/find-maps db "users" {:email email}))

(defn get-user-login [email password]
  (mc/find-maps db "users" {:email email :password password}))

(defn new-user? [email]
  (empty? (get-user email)))

(defn update-user [email pswd]
  (mc/update db "users" {:email email}
             {$set {:password pswd}}))

(defn add-activity [arc name rules ideal-score]
  (mc/insert db "Activity" {:arc arc :name name :rules rules :ideal-score ideal-score}))

(defn create-activity [act-arc-map]
  (mc/insert db "activity" act-arc-map))

(defn create-question [question]
  (mc/insert db "question" question))

(defn get-activity [activity]
  (mc/find-maps db "question" {:activity activity}))
