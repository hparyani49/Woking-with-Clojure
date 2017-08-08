(ns spiral-run.core
  (:require [reagent.core :as r]
            [clojure.string :as string]))

;; -------------------------
;; Views

(def game (r/atom {:turn 0
                   :curr [0 0]
                   :dir "r"
                   :a-path []
                   :b-path []
                   :a-pos 00
                   :b-pos 55
                   :board [[00 01 02 03 04 05]
                           [10 11 12 13 14 15]
                           [20 21 22 23 24 25]
                           [30 31 32 33 34 35]
                           [40 41 42 43 44 45]
                           [50 51 52 53 54 55]]
                   :color-arr []}))

(def dice (r/atom 0))
(def size (r/atom 6))

(defn get-pos-a [val]
  (let [i (quot (:a-pos @game) 10)
        j (rem (:a-pos @game) 10)]
    (+ (* i @size) j)))

(defn get-pos-b [val]
  (let [i (quot (:b-pos @game) 10)
        j (rem (:b-pos @game) 10)]
    (+ (* i @size) j)))

(defn make-move
  "Pushes the player to new position"
  [score]
  (if (zero? (mod (:turn @game) 2))
    (do
      (reset! dice score)
      (swap! game assoc-in [:color-arr (get-pos-a (:a-pos @game))] [0 "yellow"])
      (swap! game assoc-in [:a-path] (drop score (:a-path @game)))
      (swap! game assoc-in [:a-pos] (first (first (:a-path @game))))
      (if (empty? (:a-path @game))
        (do (js/alert "A won")
            (.reload js/location true))
        (swap! game assoc-in [:color-arr (get-pos-a (:a-pos @game))] [0 "blue"]))
      (swap! game update-in [:turn] inc))
    (do
      (reset! dice score)
      (swap! game assoc-in [:color-arr (get-pos-b (:b-pos @game))] [0 "red"])
      (swap! game assoc :b-pos (first (first (drop score (:b-path @game)))))
      (swap! game assoc :b-path (drop score (:b-path @game)))
      (if (empty? (:b-path @game))
        (do (js/alert "B won")
            (.reload js/location true))
        (swap! game assoc-in [:color-arr (get-pos-b (:b-pos @game))] [0 "cyan"]))
      (swap! game update-in [:turn] inc))))


(defn get-color
  "Switches the color"
  [i j]
  (if (empty? (:color-arr @game ))
    "yellow"
    (second (nth (:color-arr @game) (+ (* i @size) j)))))

(defn travel
  "Travelling the array to find path of a and b"
  [arr counter]
  (if (zero? counter)
    (flatten arr)
    (let [[x y] (:curr @game)]
      (condp = (:dir @game)
        "r" (let [newa (conj arr (for [j (range y (- @size y))]
                                   (get-in @game [:board x j])))]
              (swap! game assoc-in [:curr] [(inc x) (dec (- @size y))])
              (swap! game assoc-in [:dir] "d")
              (travel newa (dec counter)))

        "d" (let [newa (conj arr (for [i (range x (- @size x))]
                                   (get-in @game [:board i y])))]
              (swap! game assoc-in [:curr] [(dec (- @size x)) (dec y)])
              (swap! game assoc-in [:dir] "l")
              (travel newa (dec counter)))

        "l" (let [newa  (conj arr (for [j (reverse (range (- @size (inc y)) (inc y)))]
                                    (get-in @game [:board x j])))]
              (swap! game assoc-in [:curr] [(dec x) (- @size (inc y))])
              (swap! game assoc-in [:dir] "u")
              (travel newa (dec counter)))

        "u" (let [newa (conj arr (for [i (reverse (range (- @size (inc x)) (inc x)))]
                                   (get-in @game [:board i y])))]
              (swap! game assoc-in [:curr] [(- @size (inc x)) (inc y)])
              (swap! game assoc-in [:dir] "r")
              (travel newa (dec counter)))))))


(defn get-paths
  "Gets paths for a and b"
  []
  (swap! game assoc :a-path (travel [] (- @size 1)))
  (swap! game assoc :a-path (doall (mapv (fn [x] [x "yellow"]) (:a-path @game))))
  (swap! game assoc :curr [(- @size 1) (- @size 1)] :dir "l")
  (swap! game assoc :b-path (travel [] (- @size 1)))
  (swap! game assoc :b-path (doall (mapv (fn [x] [x "red"]) (:b-path @game))))
  (swap! game assoc :color-arr  (into [] (sort (into (:a-path @game) (:b-path @game))))))


(defn home-page []
  [:div [:h2 "Welcome to espiral game"] [:table
            [:tbody
             (doall
              (for [i (range @size)]
                ^{:key i} [:tr
                           (doall
                            (for [j (range @size)]
                              ^{:key j} [:td {:style {:background-color (get-color i j)}}]))]))]]
   [:button {:on-click #(get-paths)} "Start"]
   [:button {:on-click #(make-move (rand-int 7))} @dice]])



;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
