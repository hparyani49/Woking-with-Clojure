(ns new-todo.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[new-todo started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[new-todo has shut down successfully]=-"))
   :middleware identity})
