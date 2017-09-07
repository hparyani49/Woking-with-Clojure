(ns danpa.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [danpa.handlers]
            [danpa.subs]
            [cljs.core.async :refer [<!]]
            [cljs.core.async :refer [put! promise-chan]]))

(def ReactNative (js/require "react-native"))
(def expo (js/require "expo"))


(def app-registry (.-AppRegistry ReactNative))
(def text (r/adapt-react-class (.-Text ReactNative)))
(def view (r/adapt-react-class (.-View ReactNative)))
(def image (r/adapt-react-class (.-Image ReactNative)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight ReactNative)))
(def Alert (.-Alert ReactNative))

(def fb (.-Facebook expo))
(defn alert [title]
  (.alert Alert title))


(defn login []
  (->(.logInWithReadPermissionsAsync fb
                                    "288798091602264"
                                    {:permissions ["public_profile"]
                                     :behavior "native"})
     (.then (fn [resp] (println resp)))
     (.catch (fn [resp] (println resp)))))

(defn app-root []
  (let [greeting (subscribe [:get-greeting])]
    (fn []
      [view {:style {:flex-direction "column" :margin 40 :align-items "center"}}
       [image {:source (js/require "./assets/images/cljs.png")
               :style {:width 200
                       :height 200}}]
       [text {:style {:font-size 30 :font-weight "100" :margin-bottom 20 :text-align "center"}} @greeting]
       [touchable-highlight {:style {:background-color "#999" :padding 10 :border-radius 5}
                             :on-press #(login)}
        [text {:style {:color "white" :text-align "center" :font-weight "bold"}} "press me"]]])))

(defn init []
  (dispatch-sync [:initialize-db])
  (.registerComponent app-registry "main" #(r/reactify-component app-root)))
