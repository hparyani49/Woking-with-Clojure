(ns ^:figwheel-no-load rkh.app
  (:require [rkh.core :as core]
            [devtools.core :as devtools]))

(enable-console-print!)

(devtools/install!)

(core/init!)
