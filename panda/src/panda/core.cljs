(ns panda.core
    (:require [reagent.core :as r :refer [atom]]
              [re-frame.core :refer [subscribe dispatch dispatch-sync]]
              [panda.handlers]
              [panda.subs]))

(def ReactNative (js/require "react-native"))
(def expo (js/require "exponent"))

(def app-registry (.-AppRegistry ReactNative))
(def text (r/adapt-react-class (.-Text ReactNative)))
(def view (r/adapt-react-class (.-View ReactNative)))
(def image (r/adapt-react-class (.-Image ReactNative)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight ReactNative)))
(def Alert (.-Alert ReactNative))
(def facebook (aget expo "Facebook"))

(defn alert [title]
  (.alert Alert title))

(defn pay []
  [view {:style {:flex-direction "column" :marginTop 20}}
   [touchable-highlight {:style {:background-color "#999" :padding 10 :border-radius 5}
                         :on-press #(dispatch [:set-page :home])}
    [text {:style {:color "white" :text-align "center" :font-weight "bold"}} "Buy Radha for Rs 1"]]
   [view {:style {:marginTop 25  :height 640}}
    #_[wv {:source {:uri "https://www.payumoney.com/paybypayumoney/#/353711"}}]]])

(defn app-root []
  (let [page (subscribe [:get-page])]
    (fn []
      (if (= :pay @page)
        [pay]
        [home]))))

(defn home []
  (let [greeting (subscribe [:get-greeting])]
    (fn []
      [view {:style {:flex-direction "column" :marginTop 25 :height 640}}
       [image {:source (js/require "./assets/images/cljs.png")
               :style {:width 200
                       :height 200
                       :align-self "center"}}]
       [text {:style {:font-size 30 :font-weight "100" :margin-bottom 20 :text-align "center"}} @greeting]
       [touchable-highlight {:style {:background-color "#999" :padding 10 :border-radius 5}
                             :on-press #(js/alert "Hello")}
        [text {:style {:color "white" :text-align "center" :font-weight "bold"}} "Buy Radha for Rs 1"]]])))

(defn init []
  (dispatch-sync [:initialize-db])
  (.registerComponent app-registry "main" #(r/reactify-component app-root)))
