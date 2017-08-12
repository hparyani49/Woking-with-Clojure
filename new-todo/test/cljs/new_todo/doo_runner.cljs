(ns new-todo.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [new-todo.core-test]))

(doo-tests 'new-todo.core-test)

