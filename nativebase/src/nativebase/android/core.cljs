(ns nativebase.android.core
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [nativebase.events]
            [nativebase.subs]))

(def ReactNative (js/require "react-native"))
(def native (js/require "native-base"))
(def exp (js/require "expo"))

(def app-registry (.-AppRegistry ReactNative))
(def text (r/adapt-react-class (.-Text ReactNative)))
(def view (r/adapt-react-class (.-View ReactNative)))
(def image (r/adapt-react-class (.-Image ReactNative)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight ReactNative)))
(def button (r/adapt-react-class (.-Button native)))
(def text1 (r/adapt-react-class (.-Text native)))
(def icon (r/adapt-react-class (.-Icon native)))

(def logo-img (js/require "./images/cljs.png"))

(defn alert [title]
      (.alert (.-Alert ReactNative) title))

(defn app-root []
  (let [greeting (subscribe [:get-greeting])]
    (fn []
      [view {:style {:flex-direction "column" :margin 40 :align-items "center"}}
       [text {:style {:font-size 30 :font-weight "100" :margin-bottom 20 :text-align "center"}} @greeting]
       [image {:source logo-img
               :style  {:width 80 :height 80 :margin-bottom 30}}]
       [touchable-highlight {:style {:background-color "#999" :padding 10 :border-radius 5}
                             :on-press #(alert "HELLO!")}
        [text {:style {:color "white" :text-align "center" :font-weight "bold"}} "press me"]]
       [button {:iconLeft true} [icon {:name "home"}] [text "Kyo"]]])))

(defn init []
      (dispatch-sync [:initialize-db])
      (.registerComponent app-registry "nativebase" #(r/reactify-component app-root)))
