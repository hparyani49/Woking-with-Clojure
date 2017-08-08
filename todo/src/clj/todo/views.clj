(ns todo.views
  (:require [todo.db.core :as db]
            [todo.layout :as layout]))


(defn add-todo
  "Adds a new todo"
  [user name desc status]
  (if-not (= "" name)
    (do (db/create-task user name desc status)
        (layout/render-json
         (cons true (mapv #(select-keys % [:name :status]) (db/get-tasks user)))))
    (do (db/create-task user name desc status)
        (layout/render-json
         (cons false (mapv #(select-keys % [:name :status]) (db/get-tasks user)))))))

(defn get-todo
  "Gets the To-Dos of a User"
  [user]
  (layout/render-json (map #(select-keys % [:name :status]) (db/get-tasks user))))

(defn validate
  "Checks if the credentials are valid or not"
  [userid paswd]
  (layout/render-json (mapv #(select-keys % [:username :password]) (db/get-user userid paswd))))


(defn change-status
  "Changes the status of a task to done"
  [username task-name]
  (db/change-status username task-name)
  (layout/render-json (mapv #(select-keys % [:name :status]) (db/get-tasks username))))


(defn update-task
  "Updates the description of a task"
  [username task-name new-desc]
  (db/update-task username task-name new-desc)
  (layout/render-json (mapv #(select-keys % [:name :status]) (db/get-tasks username))))
