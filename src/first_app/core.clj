(ns first-app.core  (:gen-class))

(defn error [diff]
 (str "this is"
 (if (= diff "very")
 "very diff"
 "easy")))

(defn add
  [a b]
  (+ a b))


(defn app [a b]
  (if true
    (do (+ a b))))


(defn -main
  "I Don't Do a whole lot ... yet."
  [& args]
  (println "Hello, World!" (add 1 2)))


(defn mult
  ([arr1 arr2]  (+ arr1 arr2))
  ([] 0))

(defn crazy [arr]
  (str "Hello " arr))

(defn odd [arr]
  (if (odd? arr)
    true
    false))



;;map

(defn mymap [f arr]
  (when-not (empty? arr)
    (cons (f (first arr)) (mymap f (rest arr)))))



;;reduce

(defn myreduce
  ([f arr]
  (if-not (empty? arr)
      (f (first arr) (myreduce f (rest arr)))
      (f)))

  ([f arr acc]
   (if-not (empty? arr)
       (myreduce f (rest arr) (f acc (first arr)))
       acc)))




;;filter

(defn myfilter [f arr]
  (when-not (empty? arr)
    (if (f (first arr))
      (cons (first arr) (myfilter f (rest arr)))
      (myfilter f (rest arr)))))



;;take

(defn mytake [n arr]
  (when-not (zero? n)
    (cons (first arr) (mytake (dec n) (rest arr)))))



;;drop

(defn mydrop [n arr]
  (if (zero? n)
    arr
    (mydrop (dec n) (rest arr))))



;;take-while

(defn mytakewhile [f arr]
  (if (f (first arr))
    (cons (first arr) (mytakewhile f  (rest arr)))))




;;drop-while

(defn mydropwhile [f arr]
  (if (= (f (first arr)) false)
    arr
    (mydropwhile f (rest arr))))



;;some

(defn mysome [f arr]
  (if (empty? arr)
    false
  (if (f (first arr))
    true
    (mysome f (rest arr)))))



;;sort


(defn my-remove-helper [f arr new] (if (or (empty? arr) (f (first arr)))
                                     (concat new (rest arr))
                                     (my-remove-helper f (rest arr) (conj new  (first arr)))))

(defn my-remove [f arr] (my-remove-helper f arr []))
(defn my-sort [arr new] (if (empty? arr)
                          new
                          (do (let [min-arr (apply min arr)]
                                (recur (my-remove (fn [x] (= x min-arr)) arr)
                                       (conj new min-arr))))))




;;concat

(defn myconcat-helper [new old]
 (into new old) )
(defn myconcat [& more]
  (myconcat-helper [] more ))


;;min
(defn mymin-helper [a b]
  (if (empty? b)
    a
    (mymin-helper (if (< a (first b))
                    a
                    (first b))
                  (rest b))))

(defn mymin [& arr]
  (if (empty? (rest arr))
    (first arr)
    (mymin-helper (first arr) (rest arr))))



;;into

(defn my-into  [new arr]
  (apply conj new arr))


;;partial

(defn my-partial [f & args]
  (fn
    [& arr]
    (apply  f (into args arr))))

(def mypartial (my-partial + 10))


;;complement

(defn my-comp [])


;;sort-by




(defn mod-decider [a b]
  (if (<= (second a) (second b))
    a
    b))


(defn mod-min-helper-helper [acc arr]
  (if (empty? arr)
    acc
    (recur (mod-decider acc (first arr)) (rest arr))))


#_(defn mod-min-helper [arr]
  (mod-min-helper-helper (first arr)
                         (rest arr)))
(defn mod-min [& args]
 (if (empty? (rest args))
   (first args)
   (mod-min-helper-helper (first args) (rest args))))


(defn hash-map-helper [f arr new]
 (if (empty? arr)
   new
   (hash-map-helper f
                    (rest arr)
                    (into new {(first arr) (f (first arr))}))))

(defn my-hash-map [f arr]
  (hash-map-helper f arr {}))

(defn mod-remove-helper [f arr new]
  (if (or (empty? arr) (f (first arr)))
    (concat new
            (rest arr))
    (mod-remove-helper f
                       (rest arr) (conj new
                                        (first arr)))))


(defn mod-remove [f arr] (mod-remove-helper f arr []))

(defn cust-sort-helper [map arr]
  (if (empty? map)
    arr
    (let [min-guy (apply mod-min map)]
      (recur (mod-remove (fn [x] (= x min-guy))
                         map)
             (conj arr
                   (first min-guy))) )))


(defn cust-sort [map] (cust-sort-helper map []))

(defn my-sort-by [f arr]
  (cust-sort (my-hash-map f arr)))
