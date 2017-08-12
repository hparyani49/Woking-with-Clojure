(ns new-todo.handlers
  (:require [new-todo.db :as db]
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
 :set-count
 (fn [db [_]]
   (update-in db [:count] inc)))

(reg-event-db
 :reset-count
 (fn [db [_]]
   (assoc db :count 1)))

(reg-event-db
 :set-pinboard
 (fn [db [_ response]]
   (assoc db :pins response)))

(reg-event-db
 :set-done-pinboard
 (fn [db [_ response]]
   (assoc db :done-pins response)))
