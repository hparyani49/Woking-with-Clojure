(ns new-todo.views
  (:require [new-todo.db.core :as db]
            [new-todo.layout :as layout]))

(defn addpin [user task desc assign]
  (db/create-pin user task desc assign)
  (layout/render-json (mapv #(dissoc % :_id) (db/get-undone-pins))))

(defn update-pin [task assign]
  (db/update-status task assign)
  (layout/render-json (mapv #(dissoc % :_id) (db/get-done-pins))))

(defn get-pins []
  (layout/render-json (mapv #(dissoc % :_id) (db/get-undone-pins))))
