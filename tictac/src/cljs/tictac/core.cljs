(ns tictac.core
    (:require [reagent.core :as r]))

;; -------------------------
;; Views

(def board (r/atom [["" "" ""]["" "" ""]["" "" ""]]))
(def counter (r/atom 0))


(defn XorO?
  "Checks which value to put"
  []
  (if (even? @counter)
    "X"
    "O"))

(defn make-move
  "Performs the move"
  [a b]
  (when (= "" (get-in @board [a b]))
    (swap! board assoc-in [a b] (XorO?))))

(defn check-row?
  "Checks in row for win"
  [i]
  (and (= (get-in @board [i 0])
          (get-in @board [i 1])
          (get-in @board [i 2]))
       (not= "" (get-in @board [i 0]))))


(defn check-col?
  "Checks in col for win"
  [i]
  (and (= (get-in @board [0 i])
          (get-in @board [1 i])
          (get-in @board [2 i]))
       (not= "" (get-in @board [0 i]))))


(defn check-diag?
  "Checks for win by diag"
  []
  (and (or (= (get-in @board [0 0])
              (get-in @board [1 1])
              (get-in @board [2 2]))
           (= (get-in @board [0 2])
              (get-in @board [1 1])
              (get-in @board [2 0])))
       (not= "" (get-in @board [1 1]))))


(defn check
  "Checks game finished or anybody won!!"
  [a b]
  (make-move a b)
  (if (check-finish?)
    (do (js/alert "Kripiya fir shuru kare")
        (reset! board [["" "" ""]["" "" ""]["" "" ""]]))
    (doall (for [i (range 3)]
             (when (or (check-row? i) (check-col? i) (check-diag?))
               (js/alert (str "Player " (XorO?) " Win"))
               (reset! board [["" "" ""]["" "" ""]["" "" ""]])))))
  (swap! counter inc))


(defn check-finish?
  "Checks if the game is finish or not"
  []
  (= 9 (count (remove empty? (flatten @board)))))


(defn home-page []
  [:div
   [:table
    [:tbody
     (doall
      (for [i (range 3)]
        ^{:key i} [:tr
                   (doall
                    (for [j (range 3)]
                      ^{:key j} [:td {:on-click #(check i j)} (get-in @board [i j])]))]))]]])







;; ---------------------------

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
