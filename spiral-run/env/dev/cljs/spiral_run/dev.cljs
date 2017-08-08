(ns ^:figwheel-no-load spiral-run.dev
  (:require
    [spiral-run.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
