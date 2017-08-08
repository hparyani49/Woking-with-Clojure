(ns myapp.db.core
    (:require [monger.core :as mg]
              [monger.collection :as mc]
              [monger.operators :refer :all]
              [mount.core :refer [defstate]]
              [myapp.config :refer [env]]
              [clojure.string :as string]))

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


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;My To-Do List



(defn create-helper
  "Takes input and convert into values"
  [arr]
  (zipmap [:id :task :desc :status] arr))



(defn create-task
  "Inserts a new task into database"
  [task]
  (mc/insert db "To-Do-List_Hitesh" (create-helper task)))


(defn update-task
  "Updates the task with new values"
  [arr]
  (mc/update db "To-Do-List_Hitesh" {:id (get arr 0)}
             {$set {:task-name (get arr 1)
                    :description (get arr 2)
                    :status (get arr 3)}}))


(defn update-status
  "Changes the status of task to done"
  [id]
  (mc/update db "To-Do-List_Hitesh" {:id id}
             {$set {:status "done"}}))


(defn get-task
  "Displays all the tasks"
  []
  (clojure.pprint/pprint (mc/find-maps db "To-Do-List_Hitesh")))


(defn options
  "Displays the options to perform"
  []
  (println "1.Add a new task\n2.Update a task \n3.View all the tasks\n4.Change Status to done"))


(defn To-Do
  "Takes a input from user and performs the specific operation"
  []
  (do (options)
      (condp = (read-line)
        "1" (do (println "Enter the task id, name, description and status")
                (create-task (string/split (read-line) #",")))
        "2" (do (println "Enter the id and new values of task")
                (update-task (string/split (read-line) #",")))
        "3" (get-task)
        "4" (do (println "Enter the id of status")
                (update-status (read-line))))))
