(ns rkh.subscriptions
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
 :get-inner-page
 (fn [db _]
   (:inner-page db)))

(reg-sub
 :get-vl1-score
 (fn [db _]
   (:vl1-score db)))

(reg-sub
 :get-vl2-score
 (fn [db _]
   (:vl2-score db)))

(reg-sub
 :get-vl3-score
 (fn [db _]
   (:vl3-score db)))

(reg-sub
 :get-gl1-score
 (fn [db _]
   (:gl1-score db)))

(reg-sub
 :get-gl2-score
 (fn [db _]
   (:gl2-score db)))

(reg-sub
 :get-gl3-score
 (fn [db _]
   (:gl3-score db)))

(reg-sub
 :get-act
 (fn [db _]
   (:activities db)))

(reg-sub
 :get-count
 (fn [db _]
   (:count db)))

(reg-sub
 :get-user
 (fn [db _]
   (:user db)))
