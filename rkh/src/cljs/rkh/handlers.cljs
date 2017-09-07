(ns rkh.handlers
  (:require [rkh.db :as db]
            [re-frame.core :refer [dispatch reg-event-db]]))

(reg-event-db
  :initialize-db
  (fn [_ _]
    db/default-db))

(reg-event-db
  :set-active-page
  (fn [db [_ page]]
    (assoc db :page page)))

(reg-event-db
 :set-docs
 (fn [db [_ docs]]
   (assoc db :docs docs)))

(reg-event-db
 :set-inner-page
 (fn [db [_ inner-page]]
   (assoc db :inner-page inner-page)))

(reg-event-db
 :set-act
 (fn [db [_ activity]]
   (assoc db :activities activity)))

(reg-event-db
 :set-count
 (fn [db [_ count]]
   (assoc db :count count)))

(reg-event-db
 :change-count
 (fn [db _]
   (update db :count inc)))

(reg-event-db
 :set-user
 (fn [db [_ user]]
   (assoc db :user user)))

(reg-event-db
 :set-vl1-score
 (fn [db _]
   (update db :vl1-score inc)))

(reg-event-db
 :set-vl2-score
 (fn [db _]
   (update db :vl2-score inc)))

(reg-event-db
 :set-vl3-score
 (fn [db _]
   (update db :vl3-score inc)))

(reg-event-db
 :set-gl1-score
 (fn [db _]
   (update db :gl1-score inc)))

(reg-event-db
 :set-gl2-score
 (fn [db _]
   (update db :gl2-score inc)))

(reg-event-db
 :set-gl3-score
 (fn [db _]
   (update db :gl3-score inc)))
