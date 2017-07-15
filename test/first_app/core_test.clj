(ns first-app.core-test
  (:require [clojure.test :refer :all]
            [first-app.core :refer :all]
            [expectations :as expect]))

#_(deftest a-test
  (testing "FIXME, I fail."
   (is (= 1 1))))

(expect/expect nil? nil)

;;add
(expect/expect (= 3 (add 1 2)))
(expect/expect (= 4 (add 1 3)))

;;error
(expect/expect true (= "this iseasy" (error "yes")))
(expect/expect "this isvery diff" (error "very"))

;;app
(expect/expect 3 (app 1 2))
(expect/expect 6 (app 1 5))


;;mult
(expect/expect 5 (mult 2 3))
(expect/expect 5 (mult 2 3))

;;crazy
(expect/expect "Hello Hitesh" (crazy "Hitesh"))
(expect/expect "Hello Paryani" (crazy "Paryani"))


;;odd
(expect/expect true (odd 3))
(expect/expect true (odd 5))

;;mymap
(expect/expect '(2 3 4) (mymap inc [1 2 3]))
(expect/expect '(0 1 2) (mymap dec [1 2 3]))

;;myreduce

(expect/expect 6 (myreduce + [1 2 3]))
(expect/expect 16 (myreduce mult [1 2 3] 10))


;;filter
(expect/expect '(1 3) (myfilter odd [1 2 3]))
(expect/expect nil (myfilter empty [1 2 3]))

;;take
(expect/expect '(1 2) (mytake 2 [1 2 3]))
(expect/expect '(1 2 3) (mytake 3 [1 2 3]))

;;drop
(expect/expect '(3) (mydrop 2 [1 2 3]))
(expect/expect '(2 3) (mydrop 1 [1 2 3]))


;;take-while

(expect/expect '(1) (mytakewhile #(= 1 %) [1 2 3]))
(expect/expect [1] (mytakewhile odd? [1 2 3]))

;;drop-while

(expect/expect [2 3] (mydropwhile odd? [1 2 3]))
(expect/expect [ 2 3] (mydropwhile #(= 1 %) [1 1 1 1 1 2 3]))


;;some

(expect/expect true (mysome even? [1 2 3]))
(expect/expect false (mysome #(= 5 %) [1 2 3]))


;;sort

(expect/expect [2 3 3] (my-sort [3 2 3] []))
(expect/expect [0 1 2 2 3 3 4 5 5 7 7 8 9 9 9] (my-sort [7 5 4 3 2 8 9 0 1 2 3 5 7 9 9] []))


;;min

(expect/expect 0 (mymin 1 2 3  5 6 70 0))
(expect/expect nil (mymin ))


;;into

(expect/expect [1 2 3 4] (my-into [1 2] [3 4]))
(expect/expect [1 2] (my-into [1 2 ] []))


;;concat

(expect/expect ["hitesh" "paryani"] (myconcat "hitesh" "paryani"))


;;partial

(expect/expect 13 (mypartial 3))
(expect/expect 23 (mypartial 13))

;;my-hash-map

(expect/expect {"a" 1 "bb" 2 } (my-hash-map count ["a" "bb"]))

;;sort-by

(expect/expect ["a" "bb" "ccc"] (my-sort-by count ["bb" "ccc" "a"]))
;;(expect/expect ["a" "bb" "dd" "ccc"] (my-sort-by count ["bb" "ccc" "a" "dd"]))

;;decide

(expect/expect [1 2] (mod-decider [1 2] [3 2]))
(expect/expect [2 3] (mod-decider [2 3] [1 3]))

;;mod-min

(expect/expect ["a" 1] (mod-min ["a" 1] ["bb" 2]))


;;mod-helper

(expect/expect ["a" 1] (mod-min-helper-helper ["a" 1] [["bb" 2 ] ["ccc" 3]]))

;;mod-remove

(expect/expect [2 3 1] (mod-remove #(= 1 %) [1 2 3 1]))

;;rem-helper

(expect/expect [2 3 4 1] (mod-remove-helper #(= 1 %) [1 2 3 4 1] []))

;;cust-helper

(expect/expect ["a" "bb"] (cust-sort-helper {"a" 1 ,"bb" 2} []))

;;cust-sort

(expect/expect ["a" "bb"] (cust-sort {"a" 1 "bb" 2}))



;;comp

(expect/expect 6 (mycomp-helper [inc] 5))
(expect/expect 6 ((mycomp inc +) 5))
