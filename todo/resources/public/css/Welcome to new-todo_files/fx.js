// Compiled by ClojureScript 1.9.854 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__45212 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__45213 = null;
var count__45214 = (0);
var i__45215 = (0);
while(true){
if((i__45215 < count__45214)){
var vec__45216 = cljs.core._nth.call(null,chunk__45213,i__45215);
var effect_k = cljs.core.nth.call(null,vec__45216,(0),null);
var value = cljs.core.nth.call(null,vec__45216,(1),null);
var temp__4655__auto___45222 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___45222)){
var effect_fn_45223 = temp__4655__auto___45222;
effect_fn_45223.call(null,value);
} else {
}

var G__45224 = seq__45212;
var G__45225 = chunk__45213;
var G__45226 = count__45214;
var G__45227 = (i__45215 + (1));
seq__45212 = G__45224;
chunk__45213 = G__45225;
count__45214 = G__45226;
i__45215 = G__45227;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45212);
if(temp__4657__auto__){
var seq__45212__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45212__$1)){
var c__41026__auto__ = cljs.core.chunk_first.call(null,seq__45212__$1);
var G__45228 = cljs.core.chunk_rest.call(null,seq__45212__$1);
var G__45229 = c__41026__auto__;
var G__45230 = cljs.core.count.call(null,c__41026__auto__);
var G__45231 = (0);
seq__45212 = G__45228;
chunk__45213 = G__45229;
count__45214 = G__45230;
i__45215 = G__45231;
continue;
} else {
var vec__45219 = cljs.core.first.call(null,seq__45212__$1);
var effect_k = cljs.core.nth.call(null,vec__45219,(0),null);
var value = cljs.core.nth.call(null,vec__45219,(1),null);
var temp__4655__auto___45232 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___45232)){
var effect_fn_45233 = temp__4655__auto___45232;
effect_fn_45233.call(null,value);
} else {
}

var G__45234 = cljs.core.next.call(null,seq__45212__$1);
var G__45235 = null;
var G__45236 = (0);
var G__45237 = (0);
seq__45212 = G__45234;
chunk__45213 = G__45235;
count__45214 = G__45236;
i__45215 = G__45237;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__45238 = cljs.core.seq.call(null,value);
var chunk__45239 = null;
var count__45240 = (0);
var i__45241 = (0);
while(true){
if((i__45241 < count__45240)){
var map__45242 = cljs.core._nth.call(null,chunk__45239,i__45241);
var map__45242__$1 = ((((!((map__45242 == null)))?((((map__45242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45242):map__45242);
var effect = map__45242__$1;
var ms = cljs.core.get.call(null,map__45242__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45242__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45238,chunk__45239,count__45240,i__45241,map__45242,map__45242__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45238,chunk__45239,count__45240,i__45241,map__45242,map__45242__$1,effect,ms,dispatch))
,ms);
}

var G__45246 = seq__45238;
var G__45247 = chunk__45239;
var G__45248 = count__45240;
var G__45249 = (i__45241 + (1));
seq__45238 = G__45246;
chunk__45239 = G__45247;
count__45240 = G__45248;
i__45241 = G__45249;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45238);
if(temp__4657__auto__){
var seq__45238__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45238__$1)){
var c__41026__auto__ = cljs.core.chunk_first.call(null,seq__45238__$1);
var G__45250 = cljs.core.chunk_rest.call(null,seq__45238__$1);
var G__45251 = c__41026__auto__;
var G__45252 = cljs.core.count.call(null,c__41026__auto__);
var G__45253 = (0);
seq__45238 = G__45250;
chunk__45239 = G__45251;
count__45240 = G__45252;
i__45241 = G__45253;
continue;
} else {
var map__45244 = cljs.core.first.call(null,seq__45238__$1);
var map__45244__$1 = ((((!((map__45244 == null)))?((((map__45244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45244):map__45244);
var effect = map__45244__$1;
var ms = cljs.core.get.call(null,map__45244__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45244__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45238,chunk__45239,count__45240,i__45241,map__45244,map__45244__$1,effect,ms,dispatch,seq__45238__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45238,chunk__45239,count__45240,i__45241,map__45244,map__45244__$1,effect,ms,dispatch,seq__45238__$1,temp__4657__auto__))
,ms);
}

var G__45254 = cljs.core.next.call(null,seq__45238__$1);
var G__45255 = null;
var G__45256 = (0);
var G__45257 = (0);
seq__45238 = G__45254;
chunk__45239 = G__45255;
count__45240 = G__45256;
i__45241 = G__45257;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__45258 = cljs.core.seq.call(null,value);
var chunk__45259 = null;
var count__45260 = (0);
var i__45261 = (0);
while(true){
if((i__45261 < count__45260)){
var event = cljs.core._nth.call(null,chunk__45259,i__45261);
re_frame.router.dispatch.call(null,event);

var G__45262 = seq__45258;
var G__45263 = chunk__45259;
var G__45264 = count__45260;
var G__45265 = (i__45261 + (1));
seq__45258 = G__45262;
chunk__45259 = G__45263;
count__45260 = G__45264;
i__45261 = G__45265;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45258);
if(temp__4657__auto__){
var seq__45258__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45258__$1)){
var c__41026__auto__ = cljs.core.chunk_first.call(null,seq__45258__$1);
var G__45266 = cljs.core.chunk_rest.call(null,seq__45258__$1);
var G__45267 = c__41026__auto__;
var G__45268 = cljs.core.count.call(null,c__41026__auto__);
var G__45269 = (0);
seq__45258 = G__45266;
chunk__45259 = G__45267;
count__45260 = G__45268;
i__45261 = G__45269;
continue;
} else {
var event = cljs.core.first.call(null,seq__45258__$1);
re_frame.router.dispatch.call(null,event);

var G__45270 = cljs.core.next.call(null,seq__45258__$1);
var G__45271 = null;
var G__45272 = (0);
var G__45273 = (0);
seq__45258 = G__45270;
chunk__45259 = G__45271;
count__45260 = G__45272;
i__45261 = G__45273;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__45274 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__45275 = null;
var count__45276 = (0);
var i__45277 = (0);
while(true){
if((i__45277 < count__45276)){
var event = cljs.core._nth.call(null,chunk__45275,i__45277);
clear_event.call(null,event);

var G__45278 = seq__45274;
var G__45279 = chunk__45275;
var G__45280 = count__45276;
var G__45281 = (i__45277 + (1));
seq__45274 = G__45278;
chunk__45275 = G__45279;
count__45276 = G__45280;
i__45277 = G__45281;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45274);
if(temp__4657__auto__){
var seq__45274__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45274__$1)){
var c__41026__auto__ = cljs.core.chunk_first.call(null,seq__45274__$1);
var G__45282 = cljs.core.chunk_rest.call(null,seq__45274__$1);
var G__45283 = c__41026__auto__;
var G__45284 = cljs.core.count.call(null,c__41026__auto__);
var G__45285 = (0);
seq__45274 = G__45282;
chunk__45275 = G__45283;
count__45276 = G__45284;
i__45277 = G__45285;
continue;
} else {
var event = cljs.core.first.call(null,seq__45274__$1);
clear_event.call(null,event);

var G__45286 = cljs.core.next.call(null,seq__45274__$1);
var G__45287 = null;
var G__45288 = (0);
var G__45289 = (0);
seq__45274 = G__45286;
chunk__45275 = G__45287;
count__45276 = G__45288;
i__45277 = G__45289;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1502518460055
