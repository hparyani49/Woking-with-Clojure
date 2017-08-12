(ns user
  (:require [mount.core :as mount]
            [new-todo.figwheel :refer [start-fw stop-fw cljs]]
            new-todo.core))

(defn start []
  (mount/start-without #'new-todo.core/repl-server))

(defn stop []
  (mount/stop-except #'new-todo.core/repl-server))

(defn restart []
  (stop)
  (start))


