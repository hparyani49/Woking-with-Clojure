// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37437 = (function (val,meta37438){
this.val = val;
this.meta37438 = meta37438;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37439,meta37438__$1){
var self__ = this;
var _37439__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37437(self__.val,meta37438__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37439){
var self__ = this;
var _37439__$1 = this;
return self__.meta37438;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37437.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta37438","meta37438",1307660212,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37437.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37437.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels37437";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37437.cljs$lang$ctorPrWriter = (function (this__33062__auto__,writer__33063__auto__,opt__33064__auto__){
return cljs.core._write.call(null,writer__33063__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels37437");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels37437 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels37437(val__$1,meta37438){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37437(val__$1,meta37438));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37437(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__33062__auto__,writer__33063__auto__,opt__33064__auto__){
return cljs.core._write.call(null,writer__33063__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__33120__auto__ = (((this$ == null))?null:this$);
var m__33121__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__33120__auto__)]);
if(!((m__33121__auto__ == null))){
return m__33121__auto__.call(null,this$);
} else {
var m__33121__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__33121__auto____$1 == null))){
return m__33121__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_37451 = self__.puts.pop();
if((putter_37451 == null)){
} else {
var put_handler_37452 = putter_37451.handler;
var val_37453 = putter_37451.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_37452)){
var put_cb_37454 = cljs.core.async.impl.protocols.commit.call(null,put_handler_37452);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_37454,put_handler_37452,val_37453,putter_37451,this$__$1){
return (function (){
return put_cb_37454.call(null,true);
});})(put_cb_37454,put_handler_37452,val_37453,putter_37451,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't put nil in on a channel"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(not (nil? val))")].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__32425__auto__ = self__.buf;
if(cljs.core.truth_(and__32425__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__32425__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__37455 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__37455;
continue;
} else {
var G__37456 = takers;
takers = G__37456;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__37440_37457 = cljs.core.seq.call(null,take_cbs);
var chunk__37441_37458 = null;
var count__37442_37459 = (0);
var i__37443_37460 = (0);
while(true){
if((i__37443_37460 < count__37442_37459)){
var f_37461 = cljs.core._nth.call(null,chunk__37441_37458,i__37443_37460);
cljs.core.async.impl.dispatch.run.call(null,f_37461);

var G__37462 = seq__37440_37457;
var G__37463 = chunk__37441_37458;
var G__37464 = count__37442_37459;
var G__37465 = (i__37443_37460 + (1));
seq__37440_37457 = G__37462;
chunk__37441_37458 = G__37463;
count__37442_37459 = G__37464;
i__37443_37460 = G__37465;
continue;
} else {
var temp__4657__auto___37466 = cljs.core.seq.call(null,seq__37440_37457);
if(temp__4657__auto___37466){
var seq__37440_37467__$1 = temp__4657__auto___37466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37440_37467__$1)){
var c__33271__auto___37468 = cljs.core.chunk_first.call(null,seq__37440_37467__$1);
var G__37469 = cljs.core.chunk_rest.call(null,seq__37440_37467__$1);
var G__37470 = c__33271__auto___37468;
var G__37471 = cljs.core.count.call(null,c__33271__auto___37468);
var G__37472 = (0);
seq__37440_37457 = G__37469;
chunk__37441_37458 = G__37470;
count__37442_37459 = G__37471;
i__37443_37460 = G__37472;
continue;
} else {
var f_37473 = cljs.core.first.call(null,seq__37440_37467__$1);
cljs.core.async.impl.dispatch.run.call(null,f_37473);

var G__37474 = cljs.core.next.call(null,seq__37440_37467__$1);
var G__37475 = null;
var G__37476 = (0);
var G__37477 = (0);
seq__37440_37457 = G__37474;
chunk__37441_37458 = G__37475;
count__37442_37459 = G__37476;
i__37443_37460 = G__37477;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No more than "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" pending puts are allowed on a single channel."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" Consider using a windowed buffer.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(< (.-length puts) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__4655__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__4655__auto__)){
var take_cb = temp__4655__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__37444 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__32425__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__32425__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__32425__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__37478 = cbs__$1;
cbs = G__37478;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__37444,(0),null);
var cbs = cljs.core.nth.call(null,vec__37444,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__37447_37479 = cljs.core.seq.call(null,cbs);
var chunk__37448_37480 = null;
var count__37449_37481 = (0);
var i__37450_37482 = (0);
while(true){
if((i__37450_37482 < count__37449_37481)){
var cb_37483 = cljs.core._nth.call(null,chunk__37448_37480,i__37450_37482);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__37447_37479,chunk__37448_37480,count__37449_37481,i__37450_37482,cb_37483,val,vec__37444,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1){
return (function (){
return cb_37483.call(null,true);
});})(seq__37447_37479,chunk__37448_37480,count__37449_37481,i__37450_37482,cb_37483,val,vec__37444,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1))
);

var G__37484 = seq__37447_37479;
var G__37485 = chunk__37448_37480;
var G__37486 = count__37449_37481;
var G__37487 = (i__37450_37482 + (1));
seq__37447_37479 = G__37484;
chunk__37448_37480 = G__37485;
count__37449_37481 = G__37486;
i__37450_37482 = G__37487;
continue;
} else {
var temp__4657__auto___37488 = cljs.core.seq.call(null,seq__37447_37479);
if(temp__4657__auto___37488){
var seq__37447_37489__$1 = temp__4657__auto___37488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37447_37489__$1)){
var c__33271__auto___37490 = cljs.core.chunk_first.call(null,seq__37447_37489__$1);
var G__37491 = cljs.core.chunk_rest.call(null,seq__37447_37489__$1);
var G__37492 = c__33271__auto___37490;
var G__37493 = cljs.core.count.call(null,c__33271__auto___37490);
var G__37494 = (0);
seq__37447_37479 = G__37491;
chunk__37448_37480 = G__37492;
count__37449_37481 = G__37493;
i__37450_37482 = G__37494;
continue;
} else {
var cb_37495 = cljs.core.first.call(null,seq__37447_37489__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__37447_37479,chunk__37448_37480,count__37449_37481,i__37450_37482,cb_37495,seq__37447_37489__$1,temp__4657__auto___37488,val,vec__37444,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1){
return (function (){
return cb_37495.call(null,true);
});})(seq__37447_37479,chunk__37448_37480,count__37449_37481,i__37450_37482,cb_37495,seq__37447_37489__$1,temp__4657__auto___37488,val,vec__37444,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1))
);

var G__37496 = cljs.core.next.call(null,seq__37447_37489__$1);
var G__37497 = null;
var G__37498 = (0);
var G__37499 = (0);
seq__37447_37479 = G__37496;
chunk__37448_37480 = G__37497;
count__37449_37481 = G__37498;
i__37450_37482 = G__37499;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__32425__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__32425__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__32425__auto__;
}
})())){
var has_val = (function (){var and__32425__auto__ = self__.buf;
if(cljs.core.truth_(and__32425__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__32425__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No more than "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" pending takes are allowed on a single channel.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(< (.-length takes) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__32425__auto__ = self__.buf;
if(cljs.core.truth_(and__32425__auto__)){
return (self__.puts.length === (0));
} else {
return and__32425__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_37500 = self__.takes.pop();
if((taker_37500 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_37500)){
var take_cb_37501 = cljs.core.async.impl.protocols.commit.call(null,taker_37500);
var val_37502 = (cljs.core.truth_((function (){var and__32425__auto__ = self__.buf;
if(cljs.core.truth_(and__32425__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__32425__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_37501,val_37502,taker_37500,this$__$1){
return (function (){
return take_cb_37501.call(null,val_37502);
});})(take_cb_37501,val_37502,taker_37500,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__33062__auto__,writer__33063__auto__,opt__33064__auto__){
return cljs.core._write.call(null,writer__33063__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__32437__auto__ = exh;
if(cljs.core.truth_(or__32437__auto__)){
return or__32437__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__37504 = arguments.length;
switch (G__37504) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__37508 = null;
var G__37508__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e37505){var t = e37505;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__37508__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e37506){var t = e37506;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__37508 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__37508__1.call(this,buf__$1);
case 2:
return G__37508__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__37508.cljs$core$IFn$_invoke$arity$1 = G__37508__1;
G__37508.cljs$core$IFn$_invoke$arity$2 = G__37508__2;
return G__37508;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map?rel=1502190264187
