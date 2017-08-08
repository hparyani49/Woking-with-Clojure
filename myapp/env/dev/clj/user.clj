(ns user
  (:require [mount.core :as mount]
            myapp.core))

(defn start []
  (mount/start-without #'myapp.core/repl-server))

(defn stop []
  (mount/stop-except #'myapp.core/repl-server))

(defn restart []
  (stop)
  (start))


