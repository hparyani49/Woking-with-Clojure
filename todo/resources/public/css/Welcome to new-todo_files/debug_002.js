// Compiled by ClojureScript 1.9.854 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__34800__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__34800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34801__i = 0, G__34801__a = new Array(arguments.length -  0);
while (G__34801__i < G__34801__a.length) {G__34801__a[G__34801__i] = arguments[G__34801__i + 0]; ++G__34801__i;}
  args = new cljs.core.IndexedSeq(G__34801__a,0,null);
} 
return G__34800__delegate.call(this,args);};
G__34800.cljs$lang$maxFixedArity = 0;
G__34800.cljs$lang$applyTo = (function (arglist__34802){
var args = cljs.core.seq(arglist__34802);
return G__34800__delegate(args);
});
G__34800.cljs$core$IFn$_invoke$arity$variadic = G__34800__delegate;
return G__34800;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__34803__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__34803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34804__i = 0, G__34804__a = new Array(arguments.length -  0);
while (G__34804__i < G__34804__a.length) {G__34804__a[G__34804__i] = arguments[G__34804__i + 0]; ++G__34804__i;}
  args = new cljs.core.IndexedSeq(G__34804__a,0,null);
} 
return G__34803__delegate.call(this,args);};
G__34803.cljs$lang$maxFixedArity = 0;
G__34803.cljs$lang$applyTo = (function (arglist__34805){
var args = cljs.core.seq(arglist__34805);
return G__34803__delegate(args);
});
G__34803.cljs$core$IFn$_invoke$arity$variadic = G__34803__delegate;
return G__34803;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1502190258037
