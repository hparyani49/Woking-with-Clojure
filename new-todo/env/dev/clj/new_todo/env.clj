(ns new-todo.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [new-todo.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[new-todo started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[new-todo has shut down successfully]=-"))
   :middleware wrap-dev})
