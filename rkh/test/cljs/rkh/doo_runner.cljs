(ns rkh.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [rkh.core-test]))

(doo-tests 'rkh.core-test)

