(ns rkh.view
  (:require [rkh.layout :as layout]
            [rkh.db.core :as db]
            [clojure.data.csv :as csv]
            [clojure.java.io :as io]))


(defn check-login [user pass]
  (layout/render-json (map #(select-keys % [:name :email]) (db/get-user-login user pass))))

(defn create [name user pass]
  (if (db/new-user? user)
    (do (db/create-user name user pass)
        (layout/render-json (map #(select-keys % [:name :email])
                                 (db/get-user-login user pass))))
    (layout/render-json {})))

#_(defn read-csv []
  (with-open [reader (io/reader "/home/hitesh/hamara-game/rkh/resources/docs/data.csv")]
    (doall (csv/read-csv reader))))

#_(defn read-csv1 []
  (with-open [reader (io/reader "/home/hitesh/hamara-game/rkh/resources/docs/question.csv")]
    (doall (csv/read-csv reader))))

#_(defn write-csv []
  (with-open [writer (io/writer "/home/radhakrishna/demo/resources/out-file.csv")]
    (csv/write-csv writer [["abc" "def"] ["ghi" "jkl"]])))

#_(defn csv-data->maps [csv-data]
  (map zipmap       (->> (first csv-data) ;; First row is the header
                         (map keyword) ;; Drop if you want string keys instead
                         repeat)
       (rest csv-data)))
#_(defn enter-activity [] (doall (map #(db/create-activity %) (csv-data->maps (read-csv)))))

#_(defn enter-question [] (doall (map #(db/create-question %) (csv-data->maps (read-csv1)))))

(defn get-activity [arc level]
  (layout/render-json (map #(into %1 {:key %2})
                           (map #(select-keys % [:activity :quest :opt1 :opt2 :opt3 :opt4 :ans])
                                (if (= arc "grammar")
                                  (condp = level
                                    "1" (db/get-activity "gram1")
                                    "2" (db/get-activity "gram2")
                                    "3" (db/get-activity "gram3"))
                                  (condp = level
                                    "1" (db/get-activity "vocab1")
                                    "2" (db/get-activity "vocab2")
                                    "3" (db/get-activity "vocab3"))))
                           (range 5))))
