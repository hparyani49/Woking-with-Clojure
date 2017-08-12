(ns ^:figwheel-no-load new-todo.app
  (:require [new-todo.core :as core]
            [devtools.core :as devtools]))

(enable-console-print!)

(devtools/install!)

(core/init!)
