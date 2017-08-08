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

(defn make-move
  "Pushes the player to new position"
  [score]
  (.log js/console (type (:color-arr @game)))
  (if (zero? (mod (:turn @game) 2))
    (do
      (reset! dice score)
      (let [arz (doall (drop score (:a-path @game)))]
        (.log js/console arz)
        (swap! game assoc-in [:a-pos] (first (first arz)))
        (swap! game assoc-in [:a-path] arz))
      (let [i (quot (:a-pos @game) 10)
            j (rem (:a-pos @game) 10)
            merged-idx (+ (* i 6) j)]
        (swap! game assoc-in [:color-arr merged-idx] [0 "blue"]))
      (swap! game update-in [:turn] inc)
      (.log js/console "MADE MOVE A"))
    (do
      (reset! dice score)
      (swap! game assoc :b-pos (first (first (drop score (:b-path @game)))))
      (swap! game assoc :b-path (drop score (:b-path @game)))
      (let [i (quot (:b-pos @game) 10)
            j (rem (:b-pos @game) 10)]
        (swap! game assoc-in [:color-arr (+ (* i 6) j)] [0 "cyan"]))
      (swap! game update-in [:turn] inc)
      (.log js/console "MADE MOVE A"))))


(defn get-color
  "Switches the color"
  [i j]
  (if (empty? (:color-arr @game ))
    "yellow"
    (second (nth (:color-arr @game) (+ (* i 6) j)))))

(defn travel
  "Travelling the array to find path of a and b"
  [arr counter]
  (if (zero? counter)
    (flatten arr)
    (let [[x y] (:curr @game)]
      (condp = (:dir @game)
        "r" (let [newa (conj arr (for [j (range y (- 6 y))]
                                   (get-in @game [:board x j])))]
              (swap! game assoc-in [:curr] [(inc x) (dec (- 6 y))])
              (swap! game assoc-in [:dir] "d")
              (travel newa (dec counter)))

        "d" (let [newa (conj arr (for [i (range x (- 6 x))]
                                   (get-in @game [:board i y])))]
              (swap! game assoc-in [:curr] [(dec (- 6 x)) (dec y)])
              (swap! game assoc-in [:dir] "l")
              (travel newa (dec counter)))

        "l" (let [newa  (conj arr (for [j (reverse (range (- 6 (inc y)) (inc y)))]
                                    (get-in @game [:board x j])))]
              (swap! game assoc-in [:curr] [(dec x) (- 6 (inc y))])
              (swap! game assoc-in [:dir] "u")
              (travel newa (dec counter)))

        "u" (let [newa (conj arr (for [i (reverse (range (- 6 (inc x)) (inc x)))]
                                   (get-in @game [:board i y])))]
              (swap! game assoc-in [:curr] [(- 6 (inc x)) (inc y)])
              (swap! game assoc-in [:dir] "r")
              (travel newa (dec counter)))))))


(defn get-paths
  "Gets paths for a and b"
  []
  (swap! game assoc :a-path (travel [] 5))
  (swap! game assoc :a-path (doall (mapv (fn [x] [x "yellow"]) (:a-path @game))))
  (swap! game assoc :curr [5 5] :dir "l")
  (swap! game assoc :b-path (travel [] 5))
  (swap! game assoc :b-path (doall (mapv (fn [x] [x "red"]) (:b-path @game))))
  (swap! game assoc :color-arr  (into [] (sort (into (:a-path @game) (:b-path @game)))
                                      ) ))

(defn show []
  (.log js/console (clj->js (:color-arr @game)  ) ))

(defn home-page []
  [:div [:table
         [:tbody
          (doall
           (for [i (range 6)]
             ^{:key i} [:tr
                        (doall
                         (for [j (range 6)]
                           ^{:key j} [:td {:style {:background-color (get-color i j)}}]))]))]]
   [:button {:on-click #(get-paths)} "Start"]
   [:button {:on-click #(make-move (rand-int 7)) } @dice]])



;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
