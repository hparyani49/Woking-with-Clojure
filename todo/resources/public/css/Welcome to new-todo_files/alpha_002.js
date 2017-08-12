// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__33062__auto__,writer__33063__auto__,opt__33064__auto__){
return cljs.core._write.call(null,writer__33063__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41476 = arguments.length;
var i__33602__auto___41477 = (0);
while(true){
if((i__33602__auto___41477 < len__33601__auto___41476)){
args__33608__auto__.push((arguments[i__33602__auto___41477]));

var G__41478 = (i__33602__auto___41477 + (1));
i__33602__auto___41477 = G__41478;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq41475){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41475));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41480 = arguments.length;
var i__33602__auto___41481 = (0);
while(true){
if((i__33602__auto___41481 < len__33601__auto___41480)){
args__33608__auto__.push((arguments[i__33602__auto___41481]));

var G__41482 = (i__33602__auto___41481 + (1));
i__33602__auto___41481 = G__41482;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq41479){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41479));
});

var g_QMARK__41483 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_41484 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__41483){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__41483))
,null));
var mkg_41485 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__41483,g_41484){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__41483,g_41484))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__41483,g_41484,mkg_41485){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__41483).call(null,x);
});})(g_QMARK__41483,g_41484,mkg_41485))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__41483,g_41484,mkg_41485){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_41485).call(null,gfn);
});})(g_QMARK__41483,g_41484,mkg_41485))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__41483,g_41484,mkg_41485){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_41484).call(null,generator);
});})(g_QMARK__41483,g_41484,mkg_41485))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__33694__auto___41505 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__33694__auto___41505){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41506 = arguments.length;
var i__33602__auto___41507 = (0);
while(true){
if((i__33602__auto___41507 < len__33601__auto___41506)){
args__33608__auto__.push((arguments[i__33602__auto___41507]));

var G__41508 = (i__33602__auto___41507 + (1));
i__33602__auto___41507 = G__41508;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41505))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41505){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41505),args);
});})(g__33694__auto___41505))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__33694__auto___41505){
return (function (seq41486){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41486));
});})(g__33694__auto___41505))
;


var g__33694__auto___41509 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__33694__auto___41509){
return (function cljs$spec$gen$alpha$list(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41510 = arguments.length;
var i__33602__auto___41511 = (0);
while(true){
if((i__33602__auto___41511 < len__33601__auto___41510)){
args__33608__auto__.push((arguments[i__33602__auto___41511]));

var G__41512 = (i__33602__auto___41511 + (1));
i__33602__auto___41511 = G__41512;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41509))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41509){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41509),args);
});})(g__33694__auto___41509))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__33694__auto___41509){
return (function (seq41487){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41487));
});})(g__33694__auto___41509))
;


var g__33694__auto___41513 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__33694__auto___41513){
return (function cljs$spec$gen$alpha$map(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41514 = arguments.length;
var i__33602__auto___41515 = (0);
while(true){
if((i__33602__auto___41515 < len__33601__auto___41514)){
args__33608__auto__.push((arguments[i__33602__auto___41515]));

var G__41516 = (i__33602__auto___41515 + (1));
i__33602__auto___41515 = G__41516;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41513))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41513){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41513),args);
});})(g__33694__auto___41513))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__33694__auto___41513){
return (function (seq41488){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41488));
});})(g__33694__auto___41513))
;


var g__33694__auto___41517 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__33694__auto___41517){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41518 = arguments.length;
var i__33602__auto___41519 = (0);
while(true){
if((i__33602__auto___41519 < len__33601__auto___41518)){
args__33608__auto__.push((arguments[i__33602__auto___41519]));

var G__41520 = (i__33602__auto___41519 + (1));
i__33602__auto___41519 = G__41520;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41517))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41517){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41517),args);
});})(g__33694__auto___41517))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__33694__auto___41517){
return (function (seq41489){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41489));
});})(g__33694__auto___41517))
;


var g__33694__auto___41521 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__33694__auto___41521){
return (function cljs$spec$gen$alpha$set(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41522 = arguments.length;
var i__33602__auto___41523 = (0);
while(true){
if((i__33602__auto___41523 < len__33601__auto___41522)){
args__33608__auto__.push((arguments[i__33602__auto___41523]));

var G__41524 = (i__33602__auto___41523 + (1));
i__33602__auto___41523 = G__41524;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41521))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41521){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41521),args);
});})(g__33694__auto___41521))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__33694__auto___41521){
return (function (seq41490){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41490));
});})(g__33694__auto___41521))
;


var g__33694__auto___41525 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__33694__auto___41525){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41526 = arguments.length;
var i__33602__auto___41527 = (0);
while(true){
if((i__33602__auto___41527 < len__33601__auto___41526)){
args__33608__auto__.push((arguments[i__33602__auto___41527]));

var G__41528 = (i__33602__auto___41527 + (1));
i__33602__auto___41527 = G__41528;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41525))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41525){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41525),args);
});})(g__33694__auto___41525))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__33694__auto___41525){
return (function (seq41491){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41491));
});})(g__33694__auto___41525))
;


var g__33694__auto___41529 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__33694__auto___41529){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41530 = arguments.length;
var i__33602__auto___41531 = (0);
while(true){
if((i__33602__auto___41531 < len__33601__auto___41530)){
args__33608__auto__.push((arguments[i__33602__auto___41531]));

var G__41532 = (i__33602__auto___41531 + (1));
i__33602__auto___41531 = G__41532;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41529))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41529){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41529),args);
});})(g__33694__auto___41529))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__33694__auto___41529){
return (function (seq41492){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41492));
});})(g__33694__auto___41529))
;


var g__33694__auto___41533 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__33694__auto___41533){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41534 = arguments.length;
var i__33602__auto___41535 = (0);
while(true){
if((i__33602__auto___41535 < len__33601__auto___41534)){
args__33608__auto__.push((arguments[i__33602__auto___41535]));

var G__41536 = (i__33602__auto___41535 + (1));
i__33602__auto___41535 = G__41536;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41533))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41533){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41533),args);
});})(g__33694__auto___41533))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__33694__auto___41533){
return (function (seq41493){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41493));
});})(g__33694__auto___41533))
;


var g__33694__auto___41537 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__33694__auto___41537){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41538 = arguments.length;
var i__33602__auto___41539 = (0);
while(true){
if((i__33602__auto___41539 < len__33601__auto___41538)){
args__33608__auto__.push((arguments[i__33602__auto___41539]));

var G__41540 = (i__33602__auto___41539 + (1));
i__33602__auto___41539 = G__41540;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41537))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41537){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41537),args);
});})(g__33694__auto___41537))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__33694__auto___41537){
return (function (seq41494){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41494));
});})(g__33694__auto___41537))
;


var g__33694__auto___41541 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__33694__auto___41541){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41542 = arguments.length;
var i__33602__auto___41543 = (0);
while(true){
if((i__33602__auto___41543 < len__33601__auto___41542)){
args__33608__auto__.push((arguments[i__33602__auto___41543]));

var G__41544 = (i__33602__auto___41543 + (1));
i__33602__auto___41543 = G__41544;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41541))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41541){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41541),args);
});})(g__33694__auto___41541))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__33694__auto___41541){
return (function (seq41495){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41495));
});})(g__33694__auto___41541))
;


var g__33694__auto___41545 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__33694__auto___41545){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41546 = arguments.length;
var i__33602__auto___41547 = (0);
while(true){
if((i__33602__auto___41547 < len__33601__auto___41546)){
args__33608__auto__.push((arguments[i__33602__auto___41547]));

var G__41548 = (i__33602__auto___41547 + (1));
i__33602__auto___41547 = G__41548;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41545))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41545){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41545),args);
});})(g__33694__auto___41545))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__33694__auto___41545){
return (function (seq41496){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41496));
});})(g__33694__auto___41545))
;


var g__33694__auto___41549 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__33694__auto___41549){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41550 = arguments.length;
var i__33602__auto___41551 = (0);
while(true){
if((i__33602__auto___41551 < len__33601__auto___41550)){
args__33608__auto__.push((arguments[i__33602__auto___41551]));

var G__41552 = (i__33602__auto___41551 + (1));
i__33602__auto___41551 = G__41552;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41549))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41549){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41549),args);
});})(g__33694__auto___41549))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__33694__auto___41549){
return (function (seq41497){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41497));
});})(g__33694__auto___41549))
;


var g__33694__auto___41553 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__33694__auto___41553){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41554 = arguments.length;
var i__33602__auto___41555 = (0);
while(true){
if((i__33602__auto___41555 < len__33601__auto___41554)){
args__33608__auto__.push((arguments[i__33602__auto___41555]));

var G__41556 = (i__33602__auto___41555 + (1));
i__33602__auto___41555 = G__41556;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41553))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41553){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41553),args);
});})(g__33694__auto___41553))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__33694__auto___41553){
return (function (seq41498){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41498));
});})(g__33694__auto___41553))
;


var g__33694__auto___41557 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__33694__auto___41557){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41558 = arguments.length;
var i__33602__auto___41559 = (0);
while(true){
if((i__33602__auto___41559 < len__33601__auto___41558)){
args__33608__auto__.push((arguments[i__33602__auto___41559]));

var G__41560 = (i__33602__auto___41559 + (1));
i__33602__auto___41559 = G__41560;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41557))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41557){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41557),args);
});})(g__33694__auto___41557))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__33694__auto___41557){
return (function (seq41499){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41499));
});})(g__33694__auto___41557))
;


var g__33694__auto___41561 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__33694__auto___41561){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41562 = arguments.length;
var i__33602__auto___41563 = (0);
while(true){
if((i__33602__auto___41563 < len__33601__auto___41562)){
args__33608__auto__.push((arguments[i__33602__auto___41563]));

var G__41564 = (i__33602__auto___41563 + (1));
i__33602__auto___41563 = G__41564;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41561))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41561){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41561),args);
});})(g__33694__auto___41561))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__33694__auto___41561){
return (function (seq41500){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41500));
});})(g__33694__auto___41561))
;


var g__33694__auto___41565 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__33694__auto___41565){
return (function cljs$spec$gen$alpha$return(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41566 = arguments.length;
var i__33602__auto___41567 = (0);
while(true){
if((i__33602__auto___41567 < len__33601__auto___41566)){
args__33608__auto__.push((arguments[i__33602__auto___41567]));

var G__41568 = (i__33602__auto___41567 + (1));
i__33602__auto___41567 = G__41568;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41565))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41565){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41565),args);
});})(g__33694__auto___41565))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__33694__auto___41565){
return (function (seq41501){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41501));
});})(g__33694__auto___41565))
;


var g__33694__auto___41569 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__33694__auto___41569){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41570 = arguments.length;
var i__33602__auto___41571 = (0);
while(true){
if((i__33602__auto___41571 < len__33601__auto___41570)){
args__33608__auto__.push((arguments[i__33602__auto___41571]));

var G__41572 = (i__33602__auto___41571 + (1));
i__33602__auto___41571 = G__41572;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41569))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41569){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41569),args);
});})(g__33694__auto___41569))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__33694__auto___41569){
return (function (seq41502){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41502));
});})(g__33694__auto___41569))
;


var g__33694__auto___41573 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__33694__auto___41573){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41574 = arguments.length;
var i__33602__auto___41575 = (0);
while(true){
if((i__33602__auto___41575 < len__33601__auto___41574)){
args__33608__auto__.push((arguments[i__33602__auto___41575]));

var G__41576 = (i__33602__auto___41575 + (1));
i__33602__auto___41575 = G__41576;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41573))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41573){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41573),args);
});})(g__33694__auto___41573))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__33694__auto___41573){
return (function (seq41503){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41503));
});})(g__33694__auto___41573))
;


var g__33694__auto___41577 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__33694__auto___41577){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41578 = arguments.length;
var i__33602__auto___41579 = (0);
while(true){
if((i__33602__auto___41579 < len__33601__auto___41578)){
args__33608__auto__.push((arguments[i__33602__auto___41579]));

var G__41580 = (i__33602__auto___41579 + (1));
i__33602__auto___41579 = G__41580;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33694__auto___41577))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33694__auto___41577){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33694__auto___41577),args);
});})(g__33694__auto___41577))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__33694__auto___41577){
return (function (seq41504){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41504));
});})(g__33694__auto___41577))
;

var g__33707__auto___41602 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__33707__auto___41602){
return (function cljs$spec$gen$alpha$any(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41603 = arguments.length;
var i__33602__auto___41604 = (0);
while(true){
if((i__33602__auto___41604 < len__33601__auto___41603)){
args__33608__auto__.push((arguments[i__33602__auto___41604]));

var G__41605 = (i__33602__auto___41604 + (1));
i__33602__auto___41604 = G__41605;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41602))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41602){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41602);
});})(g__33707__auto___41602))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__33707__auto___41602){
return (function (seq41581){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41581));
});})(g__33707__auto___41602))
;


var g__33707__auto___41606 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__33707__auto___41606){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41607 = arguments.length;
var i__33602__auto___41608 = (0);
while(true){
if((i__33602__auto___41608 < len__33601__auto___41607)){
args__33608__auto__.push((arguments[i__33602__auto___41608]));

var G__41609 = (i__33602__auto___41608 + (1));
i__33602__auto___41608 = G__41609;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41606))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41606){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41606);
});})(g__33707__auto___41606))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__33707__auto___41606){
return (function (seq41582){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41582));
});})(g__33707__auto___41606))
;


var g__33707__auto___41610 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__33707__auto___41610){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41611 = arguments.length;
var i__33602__auto___41612 = (0);
while(true){
if((i__33602__auto___41612 < len__33601__auto___41611)){
args__33608__auto__.push((arguments[i__33602__auto___41612]));

var G__41613 = (i__33602__auto___41612 + (1));
i__33602__auto___41612 = G__41613;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41610))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41610){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41610);
});})(g__33707__auto___41610))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__33707__auto___41610){
return (function (seq41583){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41583));
});})(g__33707__auto___41610))
;


var g__33707__auto___41614 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__33707__auto___41614){
return (function cljs$spec$gen$alpha$char(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41615 = arguments.length;
var i__33602__auto___41616 = (0);
while(true){
if((i__33602__auto___41616 < len__33601__auto___41615)){
args__33608__auto__.push((arguments[i__33602__auto___41616]));

var G__41617 = (i__33602__auto___41616 + (1));
i__33602__auto___41616 = G__41617;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41614))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41614){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41614);
});})(g__33707__auto___41614))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__33707__auto___41614){
return (function (seq41584){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41584));
});})(g__33707__auto___41614))
;


var g__33707__auto___41618 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__33707__auto___41618){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41619 = arguments.length;
var i__33602__auto___41620 = (0);
while(true){
if((i__33602__auto___41620 < len__33601__auto___41619)){
args__33608__auto__.push((arguments[i__33602__auto___41620]));

var G__41621 = (i__33602__auto___41620 + (1));
i__33602__auto___41620 = G__41621;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41618))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41618){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41618);
});})(g__33707__auto___41618))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__33707__auto___41618){
return (function (seq41585){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41585));
});})(g__33707__auto___41618))
;


var g__33707__auto___41622 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__33707__auto___41622){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41623 = arguments.length;
var i__33602__auto___41624 = (0);
while(true){
if((i__33602__auto___41624 < len__33601__auto___41623)){
args__33608__auto__.push((arguments[i__33602__auto___41624]));

var G__41625 = (i__33602__auto___41624 + (1));
i__33602__auto___41624 = G__41625;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41622))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41622){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41622);
});})(g__33707__auto___41622))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__33707__auto___41622){
return (function (seq41586){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41586));
});})(g__33707__auto___41622))
;


var g__33707__auto___41626 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__33707__auto___41626){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41627 = arguments.length;
var i__33602__auto___41628 = (0);
while(true){
if((i__33602__auto___41628 < len__33601__auto___41627)){
args__33608__auto__.push((arguments[i__33602__auto___41628]));

var G__41629 = (i__33602__auto___41628 + (1));
i__33602__auto___41628 = G__41629;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41626))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41626){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41626);
});})(g__33707__auto___41626))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__33707__auto___41626){
return (function (seq41587){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41587));
});})(g__33707__auto___41626))
;


var g__33707__auto___41630 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__33707__auto___41630){
return (function cljs$spec$gen$alpha$double(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41631 = arguments.length;
var i__33602__auto___41632 = (0);
while(true){
if((i__33602__auto___41632 < len__33601__auto___41631)){
args__33608__auto__.push((arguments[i__33602__auto___41632]));

var G__41633 = (i__33602__auto___41632 + (1));
i__33602__auto___41632 = G__41633;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41630))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41630){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41630);
});})(g__33707__auto___41630))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__33707__auto___41630){
return (function (seq41588){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41588));
});})(g__33707__auto___41630))
;


var g__33707__auto___41634 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__33707__auto___41634){
return (function cljs$spec$gen$alpha$int(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41635 = arguments.length;
var i__33602__auto___41636 = (0);
while(true){
if((i__33602__auto___41636 < len__33601__auto___41635)){
args__33608__auto__.push((arguments[i__33602__auto___41636]));

var G__41637 = (i__33602__auto___41636 + (1));
i__33602__auto___41636 = G__41637;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41634))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41634){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41634);
});})(g__33707__auto___41634))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__33707__auto___41634){
return (function (seq41589){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41589));
});})(g__33707__auto___41634))
;


var g__33707__auto___41638 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__33707__auto___41638){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41639 = arguments.length;
var i__33602__auto___41640 = (0);
while(true){
if((i__33602__auto___41640 < len__33601__auto___41639)){
args__33608__auto__.push((arguments[i__33602__auto___41640]));

var G__41641 = (i__33602__auto___41640 + (1));
i__33602__auto___41640 = G__41641;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41638))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41638){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41638);
});})(g__33707__auto___41638))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__33707__auto___41638){
return (function (seq41590){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41590));
});})(g__33707__auto___41638))
;


var g__33707__auto___41642 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__33707__auto___41642){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41643 = arguments.length;
var i__33602__auto___41644 = (0);
while(true){
if((i__33602__auto___41644 < len__33601__auto___41643)){
args__33608__auto__.push((arguments[i__33602__auto___41644]));

var G__41645 = (i__33602__auto___41644 + (1));
i__33602__auto___41644 = G__41645;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41642))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41642){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41642);
});})(g__33707__auto___41642))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__33707__auto___41642){
return (function (seq41591){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41591));
});})(g__33707__auto___41642))
;


var g__33707__auto___41646 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__33707__auto___41646){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41647 = arguments.length;
var i__33602__auto___41648 = (0);
while(true){
if((i__33602__auto___41648 < len__33601__auto___41647)){
args__33608__auto__.push((arguments[i__33602__auto___41648]));

var G__41649 = (i__33602__auto___41648 + (1));
i__33602__auto___41648 = G__41649;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41646))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41646){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41646);
});})(g__33707__auto___41646))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__33707__auto___41646){
return (function (seq41592){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41592));
});})(g__33707__auto___41646))
;


var g__33707__auto___41650 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__33707__auto___41650){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41651 = arguments.length;
var i__33602__auto___41652 = (0);
while(true){
if((i__33602__auto___41652 < len__33601__auto___41651)){
args__33608__auto__.push((arguments[i__33602__auto___41652]));

var G__41653 = (i__33602__auto___41652 + (1));
i__33602__auto___41652 = G__41653;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41650))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41650){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41650);
});})(g__33707__auto___41650))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__33707__auto___41650){
return (function (seq41593){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41593));
});})(g__33707__auto___41650))
;


var g__33707__auto___41654 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__33707__auto___41654){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41655 = arguments.length;
var i__33602__auto___41656 = (0);
while(true){
if((i__33602__auto___41656 < len__33601__auto___41655)){
args__33608__auto__.push((arguments[i__33602__auto___41656]));

var G__41657 = (i__33602__auto___41656 + (1));
i__33602__auto___41656 = G__41657;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41654))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41654){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41654);
});})(g__33707__auto___41654))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__33707__auto___41654){
return (function (seq41594){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41594));
});})(g__33707__auto___41654))
;


var g__33707__auto___41658 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__33707__auto___41658){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41659 = arguments.length;
var i__33602__auto___41660 = (0);
while(true){
if((i__33602__auto___41660 < len__33601__auto___41659)){
args__33608__auto__.push((arguments[i__33602__auto___41660]));

var G__41661 = (i__33602__auto___41660 + (1));
i__33602__auto___41660 = G__41661;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41658))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41658){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41658);
});})(g__33707__auto___41658))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__33707__auto___41658){
return (function (seq41595){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41595));
});})(g__33707__auto___41658))
;


var g__33707__auto___41662 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__33707__auto___41662){
return (function cljs$spec$gen$alpha$string(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41663 = arguments.length;
var i__33602__auto___41664 = (0);
while(true){
if((i__33602__auto___41664 < len__33601__auto___41663)){
args__33608__auto__.push((arguments[i__33602__auto___41664]));

var G__41665 = (i__33602__auto___41664 + (1));
i__33602__auto___41664 = G__41665;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41662))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41662){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41662);
});})(g__33707__auto___41662))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__33707__auto___41662){
return (function (seq41596){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41596));
});})(g__33707__auto___41662))
;


var g__33707__auto___41666 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__33707__auto___41666){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41667 = arguments.length;
var i__33602__auto___41668 = (0);
while(true){
if((i__33602__auto___41668 < len__33601__auto___41667)){
args__33608__auto__.push((arguments[i__33602__auto___41668]));

var G__41669 = (i__33602__auto___41668 + (1));
i__33602__auto___41668 = G__41669;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41666))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41666){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41666);
});})(g__33707__auto___41666))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__33707__auto___41666){
return (function (seq41597){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41597));
});})(g__33707__auto___41666))
;


var g__33707__auto___41670 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__33707__auto___41670){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41671 = arguments.length;
var i__33602__auto___41672 = (0);
while(true){
if((i__33602__auto___41672 < len__33601__auto___41671)){
args__33608__auto__.push((arguments[i__33602__auto___41672]));

var G__41673 = (i__33602__auto___41672 + (1));
i__33602__auto___41672 = G__41673;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41670))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41670){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41670);
});})(g__33707__auto___41670))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__33707__auto___41670){
return (function (seq41598){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41598));
});})(g__33707__auto___41670))
;


var g__33707__auto___41674 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__33707__auto___41674){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41675 = arguments.length;
var i__33602__auto___41676 = (0);
while(true){
if((i__33602__auto___41676 < len__33601__auto___41675)){
args__33608__auto__.push((arguments[i__33602__auto___41676]));

var G__41677 = (i__33602__auto___41676 + (1));
i__33602__auto___41676 = G__41677;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41674))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41674){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41674);
});})(g__33707__auto___41674))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__33707__auto___41674){
return (function (seq41599){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41599));
});})(g__33707__auto___41674))
;


var g__33707__auto___41678 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__33707__auto___41678){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41679 = arguments.length;
var i__33602__auto___41680 = (0);
while(true){
if((i__33602__auto___41680 < len__33601__auto___41679)){
args__33608__auto__.push((arguments[i__33602__auto___41680]));

var G__41681 = (i__33602__auto___41680 + (1));
i__33602__auto___41680 = G__41681;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41678))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41678){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41678);
});})(g__33707__auto___41678))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__33707__auto___41678){
return (function (seq41600){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41600));
});})(g__33707__auto___41678))
;


var g__33707__auto___41682 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__33707__auto___41682){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41683 = arguments.length;
var i__33602__auto___41684 = (0);
while(true){
if((i__33602__auto___41684 < len__33601__auto___41683)){
args__33608__auto__.push((arguments[i__33602__auto___41684]));

var G__41685 = (i__33602__auto___41684 + (1));
i__33602__auto___41684 = G__41685;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});})(g__33707__auto___41682))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33707__auto___41682){
return (function (args){
return cljs.core.deref.call(null,g__33707__auto___41682);
});})(g__33707__auto___41682))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__33707__auto___41682){
return (function (seq41601){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41601));
});})(g__33707__auto___41682))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__33608__auto__ = [];
var len__33601__auto___41688 = arguments.length;
var i__33602__auto___41689 = (0);
while(true){
if((i__33602__auto___41689 < len__33601__auto___41688)){
args__33608__auto__.push((arguments[i__33602__auto___41689]));

var G__41690 = (i__33602__auto___41689 + (1));
i__33602__auto___41689 = G__41690;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__41686_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__41686_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq41687){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41687));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__41691_SHARP_){
return (new Date(p1__41691_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1502190268484
