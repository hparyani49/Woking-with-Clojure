(ns new-todo.subscriptions
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
  :page
  (fn [db _]
    (:page db)))

(reg-sub
 :docs
 (fn [db _]
   (:docs db)))

(reg-sub
 :count
 (fn [db _]
   (or (:count db) 1)))

(reg-sub
 :get-pinboard
 (fn [db _]
   (or (:pins db) 0)))

(reg-sub
 :get-done-pinboard
 (fn [db _]
   (:done-pins db)))
