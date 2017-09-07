(ns user
  (:require [mount.core :as mount]
            [rkh.figwheel :refer [start-fw stop-fw cljs]]
            rkh.core))

(defn start []
  (mount/start-without #'rkh.core/repl-server))

(defn stop []
  (mount/stop-except #'rkh.core/repl-server))

(defn restart []
  (stop)
  (start))


