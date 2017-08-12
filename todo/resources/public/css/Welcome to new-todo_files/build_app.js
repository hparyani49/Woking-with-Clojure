// Compiled by ClojureScript 1.9.854 {}
goog.provide('figwheel.connect.build_app');
goog.require('cljs.core');
goog.require('new_todo.app');
goog.require('figwheel.client');
goog.require('new_todo.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__44248__delegate = function (x){
if(cljs.core.truth_(new_todo.core.mount_components)){
return cljs.core.apply.call(null,new_todo.core.mount_components,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'new-todo.core/mount-components' is missing");
}
};
var G__44248 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__44249__i = 0, G__44249__a = new Array(arguments.length -  0);
while (G__44249__i < G__44249__a.length) {G__44249__a[G__44249__i] = arguments[G__44249__i + 0]; ++G__44249__i;}
  x = new cljs.core.IndexedSeq(G__44249__a,0,null);
} 
return G__44248__delegate.call(this,x);};
G__44248.cljs$lang$maxFixedArity = 0;
G__44248.cljs$lang$applyTo = (function (arglist__44250){
var x = cljs.core.seq(arglist__44250);
return G__44248__delegate(x);
});
G__44248.cljs$core$IFn$_invoke$arity$variadic = G__44248__delegate;
return G__44248;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_app.js.map?rel=1502520733249
