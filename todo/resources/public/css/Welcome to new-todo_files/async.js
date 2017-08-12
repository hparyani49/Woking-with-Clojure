// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__38525 = arguments.length;
switch (G__38525) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async38526 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38526 = (function (f,blockable,meta38527){
this.f = f;
this.blockable = blockable;
this.meta38527 = meta38527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38528,meta38527__$1){
var self__ = this;
var _38528__$1 = this;
return (new cljs.core.async.t_cljs$core$async38526(self__.f,self__.blockable,meta38527__$1));
});

cljs.core.async.t_cljs$core$async38526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38528){
var self__ = this;
var _38528__$1 = this;
return self__.meta38527;
});

cljs.core.async.t_cljs$core$async38526.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38526.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async38526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38527","meta38527",1352741886,null)], null);
});

cljs.core.async.t_cljs$core$async38526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38526";

cljs.core.async.t_cljs$core$async38526.cljs$lang$ctorPrWriter = (function (this__33062__auto__,writer__33063__auto__,opt__33064__auto__){
return cljs.core._write.call(null,writer__33063__auto__,"cljs.core.async/t_cljs$core$async38526");
});

cljs.core.async.__GT_t_cljs$core$async38526 = (function cljs$core$async$__GT_t_cljs$core$async38526(f__$1,blockable__$1,meta38527){
return (new cljs.core.async.t_cljs$core$async38526(f__$1,blockable__$1,meta38527));
});

}

return (new cljs.core.async.t_cljs$core$async38526(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__38532 = arguments.length;
switch (G__38532) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__38535 = arguments.length;
switch (G__38535) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__38538 = arguments.length;
switch (G__38538) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_38540 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_38540);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_38540,ret){
return (function (){
return fn1.call(null,val_38540);
});})(val_38540,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__38542 = arguments.length;
switch (G__38542) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__33377__auto___38544 = n;
var x_38545 = (0);
while(true){
if((x_38545 < n__33377__auto___38544)){
(a[x_38545] = (0));

var G__38546 = (x_38545 + (1));
x_38545 = G__38546;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__38547 = (i + (1));
i = G__38547;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async38548 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38548 = (function (flag,meta38549){
this.flag = flag;
this.meta38549 = meta38549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38550,meta38549__$1){
var self__ = this;
var _38550__$1 = this;
return (new cljs.core.async.t_cljs$core$async38548(self__.flag,meta38549__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async38548.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38550){
var self__ = this;
var _38550__$1 = this;
return self__.meta38549;
});})(flag))
;

cljs.core.async.t_cljs$core$async38548.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38548.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async38548.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38548.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38548.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38549","meta38549",151903663,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async38548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38548";

cljs.core.async.t_cljs$core$async38548.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__33062__auto__,writer__33063__auto__,opt__33064__auto__){
return cljs.core._write.call(null,writer__33063__auto__,"cljs.core.async/t_cljs$core$async38548");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async38548 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38548(flag__$1,meta38549){
return (new cljs.core.async.t_cljs$core$async38548(flag__$1,meta38549));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async38548(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async38551 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38551 = (function (flag,cb,meta38552){
this.flag = flag;
this.cb = cb;
this.meta38552 = meta38552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38553,meta38552__$1){
var self__ = this;
var _38553__$1 = this;
return (new cljs.core.async.t_cljs$core$async38551(self__.flag,self__.cb,meta38552__$1));
});

cljs.core.async.t_cljs$core$async38551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38553){
var self__ = this;
var _38553__$1 = this;
return self__.meta38552;
});

cljs.core.async.t_cljs$core$async38551.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38551.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async38551.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38551.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async38551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38552","meta38552",1993823749,null)], null);
});

cljs.core.async.t_cljs$core$async38551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38551";

cljs.core.async.t_cljs$core$async38551.cljs$lang$ctorPrWriter = (function (this__33062__auto__,writer__33063__auto__,opt__33064__auto__){
return cljs.core._write.call(null,writer__33063__auto__,"cljs.core.async/t_cljs$core$async38551");
});

cljs.core.async.__GT_t_cljs$core$async38551 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38551(flag__$1,cb__$1,meta38552){
return (new cljs.core.async.t_cljs$core$async38551(flag__$1,cb__$1,meta38552));
});

}

return (new cljs.core.async.t_cljs$core$async38551(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38554_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38554_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38555_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38555_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__32437__auto__ = wport;
if(cljs.core.truth_(or__32437__auto__)){
return or__32437__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38556 = (i + (1));
i = G__38556;
continue;
}
} else {
return null;
}
break;
}
})();
var or__32437__auto__ = ret;
if(cljs.core.truth_(or__32437__auto__)){
return or__32437__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__32425__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__32425__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__32425__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__33608__auto__ = [];
var len__33601__auto___38562 = arguments.length;
var i__33602__auto___38563 = (0);
while(true){
if((i__33602__auto___38563 < len__33601__auto___38562)){
args__33608__auto__.push((arguments[i__33602__auto___38563]));

var G__38564 = (i__33602__auto___38563 + (1));
i__33602__auto___38563 = G__38564;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((1) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33609__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38559){
var map__38560 = p__38559;
var map__38560__$1 = ((((!((map__38560 == null)))?((((map__38560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38560):map__38560);
var opts = map__38560__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38557){
var G__38558 = cljs.core.first.call(null,seq38557);
var seq38557__$1 = cljs.core.next.call(null,seq38557);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38558,seq38557__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__38566 = arguments.length;
switch (G__38566) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38479__auto___38612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto___38612){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto___38612){
return (function (state_38590){
var state_val_38591 = (state_38590[(1)]);
if((state_val_38591 === (7))){
var inst_38586 = (state_38590[(2)]);
var state_38590__$1 = state_38590;
var statearr_38592_38613 = state_38590__$1;
(statearr_38592_38613[(2)] = inst_38586);

(statearr_38592_38613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (1))){
var state_38590__$1 = state_38590;
var statearr_38593_38614 = state_38590__$1;
(statearr_38593_38614[(2)] = null);

(statearr_38593_38614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (4))){
var inst_38569 = (state_38590[(7)]);
var inst_38569__$1 = (state_38590[(2)]);
var inst_38570 = (inst_38569__$1 == null);
var state_38590__$1 = (function (){var statearr_38594 = state_38590;
(statearr_38594[(7)] = inst_38569__$1);

return statearr_38594;
})();
if(cljs.core.truth_(inst_38570)){
var statearr_38595_38615 = state_38590__$1;
(statearr_38595_38615[(1)] = (5));

} else {
var statearr_38596_38616 = state_38590__$1;
(statearr_38596_38616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (13))){
var state_38590__$1 = state_38590;
var statearr_38597_38617 = state_38590__$1;
(statearr_38597_38617[(2)] = null);

(statearr_38597_38617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (6))){
var inst_38569 = (state_38590[(7)]);
var state_38590__$1 = state_38590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38590__$1,(11),to,inst_38569);
} else {
if((state_val_38591 === (3))){
var inst_38588 = (state_38590[(2)]);
var state_38590__$1 = state_38590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38590__$1,inst_38588);
} else {
if((state_val_38591 === (12))){
var state_38590__$1 = state_38590;
var statearr_38598_38618 = state_38590__$1;
(statearr_38598_38618[(2)] = null);

(statearr_38598_38618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (2))){
var state_38590__$1 = state_38590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38590__$1,(4),from);
} else {
if((state_val_38591 === (11))){
var inst_38579 = (state_38590[(2)]);
var state_38590__$1 = state_38590;
if(cljs.core.truth_(inst_38579)){
var statearr_38599_38619 = state_38590__$1;
(statearr_38599_38619[(1)] = (12));

} else {
var statearr_38600_38620 = state_38590__$1;
(statearr_38600_38620[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (9))){
var state_38590__$1 = state_38590;
var statearr_38601_38621 = state_38590__$1;
(statearr_38601_38621[(2)] = null);

(statearr_38601_38621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (5))){
var state_38590__$1 = state_38590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38602_38622 = state_38590__$1;
(statearr_38602_38622[(1)] = (8));

} else {
var statearr_38603_38623 = state_38590__$1;
(statearr_38603_38623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (14))){
var inst_38584 = (state_38590[(2)]);
var state_38590__$1 = state_38590;
var statearr_38604_38624 = state_38590__$1;
(statearr_38604_38624[(2)] = inst_38584);

(statearr_38604_38624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (10))){
var inst_38576 = (state_38590[(2)]);
var state_38590__$1 = state_38590;
var statearr_38605_38625 = state_38590__$1;
(statearr_38605_38625[(2)] = inst_38576);

(statearr_38605_38625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (8))){
var inst_38573 = cljs.core.async.close_BANG_.call(null,to);
var state_38590__$1 = state_38590;
var statearr_38606_38626 = state_38590__$1;
(statearr_38606_38626[(2)] = inst_38573);

(statearr_38606_38626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38479__auto___38612))
;
return ((function (switch__38391__auto__,c__38479__auto___38612){
return (function() {
var cljs$core$async$state_machine__38392__auto__ = null;
var cljs$core$async$state_machine__38392__auto____0 = (function (){
var statearr_38607 = [null,null,null,null,null,null,null,null];
(statearr_38607[(0)] = cljs$core$async$state_machine__38392__auto__);

(statearr_38607[(1)] = (1));

return statearr_38607;
});
var cljs$core$async$state_machine__38392__auto____1 = (function (state_38590){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_38590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e38608){if((e38608 instanceof Object)){
var ex__38395__auto__ = e38608;
var statearr_38609_38627 = state_38590;
(statearr_38609_38627[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38628 = state_38590;
state_38590 = G__38628;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$state_machine__38392__auto__ = function(state_38590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38392__auto____1.call(this,state_38590);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38392__auto____0;
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38392__auto____1;
return cljs$core$async$state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto___38612))
})();
var state__38481__auto__ = (function (){var statearr_38610 = f__38480__auto__.call(null);
(statearr_38610[(6)] = c__38479__auto___38612);

return statearr_38610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto___38612))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__38629){
var vec__38630 = p__38629;
var v = cljs.core.nth.call(null,vec__38630,(0),null);
var p = cljs.core.nth.call(null,vec__38630,(1),null);
var job = vec__38630;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38479__auto___38801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto___38801,res,vec__38630,v,p,job,jobs,results){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto___38801,res,vec__38630,v,p,job,jobs,results){
return (function (state_38637){
var state_val_38638 = (state_38637[(1)]);
if((state_val_38638 === (1))){
var state_38637__$1 = state_38637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38637__$1,(2),res,v);
} else {
if((state_val_38638 === (2))){
var inst_38634 = (state_38637[(2)]);
var inst_38635 = cljs.core.async.close_BANG_.call(null,res);
var state_38637__$1 = (function (){var statearr_38639 = state_38637;
(statearr_38639[(7)] = inst_38634);

return statearr_38639;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38637__$1,inst_38635);
} else {
return null;
}
}
});})(c__38479__auto___38801,res,vec__38630,v,p,job,jobs,results))
;
return ((function (switch__38391__auto__,c__38479__auto___38801,res,vec__38630,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____0 = (function (){
var statearr_38640 = [null,null,null,null,null,null,null,null];
(statearr_38640[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__);

(statearr_38640[(1)] = (1));

return statearr_38640;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____1 = (function (state_38637){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_38637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e38641){if((e38641 instanceof Object)){
var ex__38395__auto__ = e38641;
var statearr_38642_38802 = state_38637;
(statearr_38642_38802[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38803 = state_38637;
state_38637 = G__38803;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__ = function(state_38637){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____1.call(this,state_38637);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto___38801,res,vec__38630,v,p,job,jobs,results))
})();
var state__38481__auto__ = (function (){var statearr_38643 = f__38480__auto__.call(null);
(statearr_38643[(6)] = c__38479__auto___38801);

return statearr_38643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto___38801,res,vec__38630,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38644){
var vec__38645 = p__38644;
var v = cljs.core.nth.call(null,vec__38645,(0),null);
var p = cljs.core.nth.call(null,vec__38645,(1),null);
var job = vec__38645;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__33377__auto___38804 = n;
var __38805 = (0);
while(true){
if((__38805 < n__33377__auto___38804)){
var G__38648_38806 = type;
var G__38648_38807__$1 = (((G__38648_38806 instanceof cljs.core.Keyword))?G__38648_38806.fqn:null);
switch (G__38648_38807__$1) {
case "compute":
var c__38479__auto___38809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38805,c__38479__auto___38809,G__38648_38806,G__38648_38807__$1,n__33377__auto___38804,jobs,results,process,async){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (__38805,c__38479__auto___38809,G__38648_38806,G__38648_38807__$1,n__33377__auto___38804,jobs,results,process,async){
return (function (state_38661){
var state_val_38662 = (state_38661[(1)]);
if((state_val_38662 === (1))){
var state_38661__$1 = state_38661;
var statearr_38663_38810 = state_38661__$1;
(statearr_38663_38810[(2)] = null);

(statearr_38663_38810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (2))){
var state_38661__$1 = state_38661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38661__$1,(4),jobs);
} else {
if((state_val_38662 === (3))){
var inst_38659 = (state_38661[(2)]);
var state_38661__$1 = state_38661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38661__$1,inst_38659);
} else {
if((state_val_38662 === (4))){
var inst_38651 = (state_38661[(2)]);
var inst_38652 = process.call(null,inst_38651);
var state_38661__$1 = state_38661;
if(cljs.core.truth_(inst_38652)){
var statearr_38664_38811 = state_38661__$1;
(statearr_38664_38811[(1)] = (5));

} else {
var statearr_38665_38812 = state_38661__$1;
(statearr_38665_38812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (5))){
var state_38661__$1 = state_38661;
var statearr_38666_38813 = state_38661__$1;
(statearr_38666_38813[(2)] = null);

(statearr_38666_38813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (6))){
var state_38661__$1 = state_38661;
var statearr_38667_38814 = state_38661__$1;
(statearr_38667_38814[(2)] = null);

(statearr_38667_38814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (7))){
var inst_38657 = (state_38661[(2)]);
var state_38661__$1 = state_38661;
var statearr_38668_38815 = state_38661__$1;
(statearr_38668_38815[(2)] = inst_38657);

(statearr_38668_38815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38805,c__38479__auto___38809,G__38648_38806,G__38648_38807__$1,n__33377__auto___38804,jobs,results,process,async))
;
return ((function (__38805,switch__38391__auto__,c__38479__auto___38809,G__38648_38806,G__38648_38807__$1,n__33377__auto___38804,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____0 = (function (){
var statearr_38669 = [null,null,null,null,null,null,null];
(statearr_38669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__);

(statearr_38669[(1)] = (1));

return statearr_38669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____1 = (function (state_38661){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_38661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e38670){if((e38670 instanceof Object)){
var ex__38395__auto__ = e38670;
var statearr_38671_38816 = state_38661;
(statearr_38671_38816[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38817 = state_38661;
state_38661 = G__38817;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__ = function(state_38661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____1.call(this,state_38661);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__;
})()
;})(__38805,switch__38391__auto__,c__38479__auto___38809,G__38648_38806,G__38648_38807__$1,n__33377__auto___38804,jobs,results,process,async))
})();
var state__38481__auto__ = (function (){var statearr_38672 = f__38480__auto__.call(null);
(statearr_38672[(6)] = c__38479__auto___38809);

return statearr_38672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(__38805,c__38479__auto___38809,G__38648_38806,G__38648_38807__$1,n__33377__auto___38804,jobs,results,process,async))
);


break;
case "async":
var c__38479__auto___38818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38805,c__38479__auto___38818,G__38648_38806,G__38648_38807__$1,n__33377__auto___38804,jobs,results,process,async){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (__38805,c__38479__auto___38818,G__38648_38806,G__38648_38807__$1,n__33377__auto___38804,jobs,results,process,async){
return (function (state_38685){
var state_val_38686 = (state_38685[(1)]);
if((state_val_38686 === (1))){
var state_38685__$1 = state_38685;
var statearr_38687_38819 = state_38685__$1;
(statearr_38687_38819[(2)] = null);

(statearr_38687_38819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38686 === (2))){
var state_38685__$1 = state_38685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38685__$1,(4),jobs);
} else {
if((state_val_38686 === (3))){
var inst_38683 = (state_38685[(2)]);
var state_38685__$1 = state_38685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38685__$1,inst_38683);
} else {
if((state_val_38686 === (4))){
var inst_38675 = (state_38685[(2)]);
var inst_38676 = async.call(null,inst_38675);
var state_38685__$1 = state_38685;
if(cljs.core.truth_(inst_38676)){
var statearr_38688_38820 = state_38685__$1;
(statearr_38688_38820[(1)] = (5));

} else {
var statearr_38689_38821 = state_38685__$1;
(statearr_38689_38821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38686 === (5))){
var state_38685__$1 = state_38685;
var statearr_38690_38822 = state_38685__$1;
(statearr_38690_38822[(2)] = null);

(statearr_38690_38822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38686 === (6))){
var state_38685__$1 = state_38685;
var statearr_38691_38823 = state_38685__$1;
(statearr_38691_38823[(2)] = null);

(statearr_38691_38823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38686 === (7))){
var inst_38681 = (state_38685[(2)]);
var state_38685__$1 = state_38685;
var statearr_38692_38824 = state_38685__$1;
(statearr_38692_38824[(2)] = inst_38681);

(statearr_38692_38824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38805,c__38479__auto___38818,G__38648_38806,G__38648_38807__$1,n__33377__auto___38804,jobs,results,process,async))
;
return ((function (__38805,switch__38391__auto__,c__38479__auto___38818,G__38648_38806,G__38648_38807__$1,n__33377__auto___38804,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____0 = (function (){
var statearr_38693 = [null,null,null,null,null,null,null];
(statearr_38693[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__);

(statearr_38693[(1)] = (1));

return statearr_38693;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____1 = (function (state_38685){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_38685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e38694){if((e38694 instanceof Object)){
var ex__38395__auto__ = e38694;
var statearr_38695_38825 = state_38685;
(statearr_38695_38825[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38826 = state_38685;
state_38685 = G__38826;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__ = function(state_38685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____1.call(this,state_38685);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__;
})()
;})(__38805,switch__38391__auto__,c__38479__auto___38818,G__38648_38806,G__38648_38807__$1,n__33377__auto___38804,jobs,results,process,async))
})();
var state__38481__auto__ = (function (){var statearr_38696 = f__38480__auto__.call(null);
(statearr_38696[(6)] = c__38479__auto___38818);

return statearr_38696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(__38805,c__38479__auto___38818,G__38648_38806,G__38648_38807__$1,n__33377__auto___38804,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38648_38807__$1)].join('')));

}

var G__38827 = (__38805 + (1));
__38805 = G__38827;
continue;
} else {
}
break;
}

var c__38479__auto___38828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto___38828,jobs,results,process,async){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto___38828,jobs,results,process,async){
return (function (state_38718){
var state_val_38719 = (state_38718[(1)]);
if((state_val_38719 === (1))){
var state_38718__$1 = state_38718;
var statearr_38720_38829 = state_38718__$1;
(statearr_38720_38829[(2)] = null);

(statearr_38720_38829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38719 === (2))){
var state_38718__$1 = state_38718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38718__$1,(4),from);
} else {
if((state_val_38719 === (3))){
var inst_38716 = (state_38718[(2)]);
var state_38718__$1 = state_38718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38718__$1,inst_38716);
} else {
if((state_val_38719 === (4))){
var inst_38699 = (state_38718[(7)]);
var inst_38699__$1 = (state_38718[(2)]);
var inst_38700 = (inst_38699__$1 == null);
var state_38718__$1 = (function (){var statearr_38721 = state_38718;
(statearr_38721[(7)] = inst_38699__$1);

return statearr_38721;
})();
if(cljs.core.truth_(inst_38700)){
var statearr_38722_38830 = state_38718__$1;
(statearr_38722_38830[(1)] = (5));

} else {
var statearr_38723_38831 = state_38718__$1;
(statearr_38723_38831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38719 === (5))){
var inst_38702 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38718__$1 = state_38718;
var statearr_38724_38832 = state_38718__$1;
(statearr_38724_38832[(2)] = inst_38702);

(statearr_38724_38832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38719 === (6))){
var inst_38699 = (state_38718[(7)]);
var inst_38704 = (state_38718[(8)]);
var inst_38704__$1 = cljs.core.async.chan.call(null,(1));
var inst_38705 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38706 = [inst_38699,inst_38704__$1];
var inst_38707 = (new cljs.core.PersistentVector(null,2,(5),inst_38705,inst_38706,null));
var state_38718__$1 = (function (){var statearr_38725 = state_38718;
(statearr_38725[(8)] = inst_38704__$1);

return statearr_38725;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38718__$1,(8),jobs,inst_38707);
} else {
if((state_val_38719 === (7))){
var inst_38714 = (state_38718[(2)]);
var state_38718__$1 = state_38718;
var statearr_38726_38833 = state_38718__$1;
(statearr_38726_38833[(2)] = inst_38714);

(statearr_38726_38833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38719 === (8))){
var inst_38704 = (state_38718[(8)]);
var inst_38709 = (state_38718[(2)]);
var state_38718__$1 = (function (){var statearr_38727 = state_38718;
(statearr_38727[(9)] = inst_38709);

return statearr_38727;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38718__$1,(9),results,inst_38704);
} else {
if((state_val_38719 === (9))){
var inst_38711 = (state_38718[(2)]);
var state_38718__$1 = (function (){var statearr_38728 = state_38718;
(statearr_38728[(10)] = inst_38711);

return statearr_38728;
})();
var statearr_38729_38834 = state_38718__$1;
(statearr_38729_38834[(2)] = null);

(statearr_38729_38834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__38479__auto___38828,jobs,results,process,async))
;
return ((function (switch__38391__auto__,c__38479__auto___38828,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____0 = (function (){
var statearr_38730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38730[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__);

(statearr_38730[(1)] = (1));

return statearr_38730;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____1 = (function (state_38718){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_38718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e38731){if((e38731 instanceof Object)){
var ex__38395__auto__ = e38731;
var statearr_38732_38835 = state_38718;
(statearr_38732_38835[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38836 = state_38718;
state_38718 = G__38836;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__ = function(state_38718){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____1.call(this,state_38718);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto___38828,jobs,results,process,async))
})();
var state__38481__auto__ = (function (){var statearr_38733 = f__38480__auto__.call(null);
(statearr_38733[(6)] = c__38479__auto___38828);

return statearr_38733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto___38828,jobs,results,process,async))
);


var c__38479__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto__,jobs,results,process,async){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto__,jobs,results,process,async){
return (function (state_38771){
var state_val_38772 = (state_38771[(1)]);
if((state_val_38772 === (7))){
var inst_38767 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
var statearr_38773_38837 = state_38771__$1;
(statearr_38773_38837[(2)] = inst_38767);

(statearr_38773_38837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (20))){
var state_38771__$1 = state_38771;
var statearr_38774_38838 = state_38771__$1;
(statearr_38774_38838[(2)] = null);

(statearr_38774_38838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (1))){
var state_38771__$1 = state_38771;
var statearr_38775_38839 = state_38771__$1;
(statearr_38775_38839[(2)] = null);

(statearr_38775_38839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (4))){
var inst_38736 = (state_38771[(7)]);
var inst_38736__$1 = (state_38771[(2)]);
var inst_38737 = (inst_38736__$1 == null);
var state_38771__$1 = (function (){var statearr_38776 = state_38771;
(statearr_38776[(7)] = inst_38736__$1);

return statearr_38776;
})();
if(cljs.core.truth_(inst_38737)){
var statearr_38777_38840 = state_38771__$1;
(statearr_38777_38840[(1)] = (5));

} else {
var statearr_38778_38841 = state_38771__$1;
(statearr_38778_38841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (15))){
var inst_38749 = (state_38771[(8)]);
var state_38771__$1 = state_38771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38771__$1,(18),to,inst_38749);
} else {
if((state_val_38772 === (21))){
var inst_38762 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
var statearr_38779_38842 = state_38771__$1;
(statearr_38779_38842[(2)] = inst_38762);

(statearr_38779_38842[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (13))){
var inst_38764 = (state_38771[(2)]);
var state_38771__$1 = (function (){var statearr_38780 = state_38771;
(statearr_38780[(9)] = inst_38764);

return statearr_38780;
})();
var statearr_38781_38843 = state_38771__$1;
(statearr_38781_38843[(2)] = null);

(statearr_38781_38843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (6))){
var inst_38736 = (state_38771[(7)]);
var state_38771__$1 = state_38771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38771__$1,(11),inst_38736);
} else {
if((state_val_38772 === (17))){
var inst_38757 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
if(cljs.core.truth_(inst_38757)){
var statearr_38782_38844 = state_38771__$1;
(statearr_38782_38844[(1)] = (19));

} else {
var statearr_38783_38845 = state_38771__$1;
(statearr_38783_38845[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (3))){
var inst_38769 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38771__$1,inst_38769);
} else {
if((state_val_38772 === (12))){
var inst_38746 = (state_38771[(10)]);
var state_38771__$1 = state_38771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38771__$1,(14),inst_38746);
} else {
if((state_val_38772 === (2))){
var state_38771__$1 = state_38771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38771__$1,(4),results);
} else {
if((state_val_38772 === (19))){
var state_38771__$1 = state_38771;
var statearr_38784_38846 = state_38771__$1;
(statearr_38784_38846[(2)] = null);

(statearr_38784_38846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (11))){
var inst_38746 = (state_38771[(2)]);
var state_38771__$1 = (function (){var statearr_38785 = state_38771;
(statearr_38785[(10)] = inst_38746);

return statearr_38785;
})();
var statearr_38786_38847 = state_38771__$1;
(statearr_38786_38847[(2)] = null);

(statearr_38786_38847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (9))){
var state_38771__$1 = state_38771;
var statearr_38787_38848 = state_38771__$1;
(statearr_38787_38848[(2)] = null);

(statearr_38787_38848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (5))){
var state_38771__$1 = state_38771;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38788_38849 = state_38771__$1;
(statearr_38788_38849[(1)] = (8));

} else {
var statearr_38789_38850 = state_38771__$1;
(statearr_38789_38850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (14))){
var inst_38749 = (state_38771[(8)]);
var inst_38751 = (state_38771[(11)]);
var inst_38749__$1 = (state_38771[(2)]);
var inst_38750 = (inst_38749__$1 == null);
var inst_38751__$1 = cljs.core.not.call(null,inst_38750);
var state_38771__$1 = (function (){var statearr_38790 = state_38771;
(statearr_38790[(8)] = inst_38749__$1);

(statearr_38790[(11)] = inst_38751__$1);

return statearr_38790;
})();
if(inst_38751__$1){
var statearr_38791_38851 = state_38771__$1;
(statearr_38791_38851[(1)] = (15));

} else {
var statearr_38792_38852 = state_38771__$1;
(statearr_38792_38852[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (16))){
var inst_38751 = (state_38771[(11)]);
var state_38771__$1 = state_38771;
var statearr_38793_38853 = state_38771__$1;
(statearr_38793_38853[(2)] = inst_38751);

(statearr_38793_38853[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (10))){
var inst_38743 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
var statearr_38794_38854 = state_38771__$1;
(statearr_38794_38854[(2)] = inst_38743);

(statearr_38794_38854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (18))){
var inst_38754 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
var statearr_38795_38855 = state_38771__$1;
(statearr_38795_38855[(2)] = inst_38754);

(statearr_38795_38855[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (8))){
var inst_38740 = cljs.core.async.close_BANG_.call(null,to);
var state_38771__$1 = state_38771;
var statearr_38796_38856 = state_38771__$1;
(statearr_38796_38856[(2)] = inst_38740);

(statearr_38796_38856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38479__auto__,jobs,results,process,async))
;
return ((function (switch__38391__auto__,c__38479__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____0 = (function (){
var statearr_38797 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38797[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__);

(statearr_38797[(1)] = (1));

return statearr_38797;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____1 = (function (state_38771){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_38771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e38798){if((e38798 instanceof Object)){
var ex__38395__auto__ = e38798;
var statearr_38799_38857 = state_38771;
(statearr_38799_38857[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38858 = state_38771;
state_38771 = G__38858;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__ = function(state_38771){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____1.call(this,state_38771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38392__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto__,jobs,results,process,async))
})();
var state__38481__auto__ = (function (){var statearr_38800 = f__38480__auto__.call(null);
(statearr_38800[(6)] = c__38479__auto__);

return statearr_38800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto__,jobs,results,process,async))
);

return c__38479__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__38860 = arguments.length;
switch (G__38860) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__38863 = arguments.length;
switch (G__38863) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__38866 = arguments.length;
switch (G__38866) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38479__auto___38915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto___38915,tc,fc){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto___38915,tc,fc){
return (function (state_38892){
var state_val_38893 = (state_38892[(1)]);
if((state_val_38893 === (7))){
var inst_38888 = (state_38892[(2)]);
var state_38892__$1 = state_38892;
var statearr_38894_38916 = state_38892__$1;
(statearr_38894_38916[(2)] = inst_38888);

(statearr_38894_38916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38893 === (1))){
var state_38892__$1 = state_38892;
var statearr_38895_38917 = state_38892__$1;
(statearr_38895_38917[(2)] = null);

(statearr_38895_38917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38893 === (4))){
var inst_38869 = (state_38892[(7)]);
var inst_38869__$1 = (state_38892[(2)]);
var inst_38870 = (inst_38869__$1 == null);
var state_38892__$1 = (function (){var statearr_38896 = state_38892;
(statearr_38896[(7)] = inst_38869__$1);

return statearr_38896;
})();
if(cljs.core.truth_(inst_38870)){
var statearr_38897_38918 = state_38892__$1;
(statearr_38897_38918[(1)] = (5));

} else {
var statearr_38898_38919 = state_38892__$1;
(statearr_38898_38919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38893 === (13))){
var state_38892__$1 = state_38892;
var statearr_38899_38920 = state_38892__$1;
(statearr_38899_38920[(2)] = null);

(statearr_38899_38920[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38893 === (6))){
var inst_38869 = (state_38892[(7)]);
var inst_38875 = p.call(null,inst_38869);
var state_38892__$1 = state_38892;
if(cljs.core.truth_(inst_38875)){
var statearr_38900_38921 = state_38892__$1;
(statearr_38900_38921[(1)] = (9));

} else {
var statearr_38901_38922 = state_38892__$1;
(statearr_38901_38922[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38893 === (3))){
var inst_38890 = (state_38892[(2)]);
var state_38892__$1 = state_38892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38892__$1,inst_38890);
} else {
if((state_val_38893 === (12))){
var state_38892__$1 = state_38892;
var statearr_38902_38923 = state_38892__$1;
(statearr_38902_38923[(2)] = null);

(statearr_38902_38923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38893 === (2))){
var state_38892__$1 = state_38892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38892__$1,(4),ch);
} else {
if((state_val_38893 === (11))){
var inst_38869 = (state_38892[(7)]);
var inst_38879 = (state_38892[(2)]);
var state_38892__$1 = state_38892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38892__$1,(8),inst_38879,inst_38869);
} else {
if((state_val_38893 === (9))){
var state_38892__$1 = state_38892;
var statearr_38903_38924 = state_38892__$1;
(statearr_38903_38924[(2)] = tc);

(statearr_38903_38924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38893 === (5))){
var inst_38872 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38873 = cljs.core.async.close_BANG_.call(null,fc);
var state_38892__$1 = (function (){var statearr_38904 = state_38892;
(statearr_38904[(8)] = inst_38872);

return statearr_38904;
})();
var statearr_38905_38925 = state_38892__$1;
(statearr_38905_38925[(2)] = inst_38873);

(statearr_38905_38925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38893 === (14))){
var inst_38886 = (state_38892[(2)]);
var state_38892__$1 = state_38892;
var statearr_38906_38926 = state_38892__$1;
(statearr_38906_38926[(2)] = inst_38886);

(statearr_38906_38926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38893 === (10))){
var state_38892__$1 = state_38892;
var statearr_38907_38927 = state_38892__$1;
(statearr_38907_38927[(2)] = fc);

(statearr_38907_38927[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38893 === (8))){
var inst_38881 = (state_38892[(2)]);
var state_38892__$1 = state_38892;
if(cljs.core.truth_(inst_38881)){
var statearr_38908_38928 = state_38892__$1;
(statearr_38908_38928[(1)] = (12));

} else {
var statearr_38909_38929 = state_38892__$1;
(statearr_38909_38929[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38479__auto___38915,tc,fc))
;
return ((function (switch__38391__auto__,c__38479__auto___38915,tc,fc){
return (function() {
var cljs$core$async$state_machine__38392__auto__ = null;
var cljs$core$async$state_machine__38392__auto____0 = (function (){
var statearr_38910 = [null,null,null,null,null,null,null,null,null];
(statearr_38910[(0)] = cljs$core$async$state_machine__38392__auto__);

(statearr_38910[(1)] = (1));

return statearr_38910;
});
var cljs$core$async$state_machine__38392__auto____1 = (function (state_38892){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_38892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e38911){if((e38911 instanceof Object)){
var ex__38395__auto__ = e38911;
var statearr_38912_38930 = state_38892;
(statearr_38912_38930[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38931 = state_38892;
state_38892 = G__38931;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$state_machine__38392__auto__ = function(state_38892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38392__auto____1.call(this,state_38892);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38392__auto____0;
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38392__auto____1;
return cljs$core$async$state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto___38915,tc,fc))
})();
var state__38481__auto__ = (function (){var statearr_38913 = f__38480__auto__.call(null);
(statearr_38913[(6)] = c__38479__auto___38915);

return statearr_38913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto___38915,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38479__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto__){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto__){
return (function (state_38952){
var state_val_38953 = (state_38952[(1)]);
if((state_val_38953 === (7))){
var inst_38948 = (state_38952[(2)]);
var state_38952__$1 = state_38952;
var statearr_38954_38972 = state_38952__$1;
(statearr_38954_38972[(2)] = inst_38948);

(statearr_38954_38972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (1))){
var inst_38932 = init;
var state_38952__$1 = (function (){var statearr_38955 = state_38952;
(statearr_38955[(7)] = inst_38932);

return statearr_38955;
})();
var statearr_38956_38973 = state_38952__$1;
(statearr_38956_38973[(2)] = null);

(statearr_38956_38973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (4))){
var inst_38935 = (state_38952[(8)]);
var inst_38935__$1 = (state_38952[(2)]);
var inst_38936 = (inst_38935__$1 == null);
var state_38952__$1 = (function (){var statearr_38957 = state_38952;
(statearr_38957[(8)] = inst_38935__$1);

return statearr_38957;
})();
if(cljs.core.truth_(inst_38936)){
var statearr_38958_38974 = state_38952__$1;
(statearr_38958_38974[(1)] = (5));

} else {
var statearr_38959_38975 = state_38952__$1;
(statearr_38959_38975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (6))){
var inst_38935 = (state_38952[(8)]);
var inst_38932 = (state_38952[(7)]);
var inst_38939 = (state_38952[(9)]);
var inst_38939__$1 = f.call(null,inst_38932,inst_38935);
var inst_38940 = cljs.core.reduced_QMARK_.call(null,inst_38939__$1);
var state_38952__$1 = (function (){var statearr_38960 = state_38952;
(statearr_38960[(9)] = inst_38939__$1);

return statearr_38960;
})();
if(inst_38940){
var statearr_38961_38976 = state_38952__$1;
(statearr_38961_38976[(1)] = (8));

} else {
var statearr_38962_38977 = state_38952__$1;
(statearr_38962_38977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (3))){
var inst_38950 = (state_38952[(2)]);
var state_38952__$1 = state_38952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38952__$1,inst_38950);
} else {
if((state_val_38953 === (2))){
var state_38952__$1 = state_38952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38952__$1,(4),ch);
} else {
if((state_val_38953 === (9))){
var inst_38939 = (state_38952[(9)]);
var inst_38932 = inst_38939;
var state_38952__$1 = (function (){var statearr_38963 = state_38952;
(statearr_38963[(7)] = inst_38932);

return statearr_38963;
})();
var statearr_38964_38978 = state_38952__$1;
(statearr_38964_38978[(2)] = null);

(statearr_38964_38978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (5))){
var inst_38932 = (state_38952[(7)]);
var state_38952__$1 = state_38952;
var statearr_38965_38979 = state_38952__$1;
(statearr_38965_38979[(2)] = inst_38932);

(statearr_38965_38979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (10))){
var inst_38946 = (state_38952[(2)]);
var state_38952__$1 = state_38952;
var statearr_38966_38980 = state_38952__$1;
(statearr_38966_38980[(2)] = inst_38946);

(statearr_38966_38980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38953 === (8))){
var inst_38939 = (state_38952[(9)]);
var inst_38942 = cljs.core.deref.call(null,inst_38939);
var state_38952__$1 = state_38952;
var statearr_38967_38981 = state_38952__$1;
(statearr_38967_38981[(2)] = inst_38942);

(statearr_38967_38981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__38479__auto__))
;
return ((function (switch__38391__auto__,c__38479__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38392__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38392__auto____0 = (function (){
var statearr_38968 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38968[(0)] = cljs$core$async$reduce_$_state_machine__38392__auto__);

(statearr_38968[(1)] = (1));

return statearr_38968;
});
var cljs$core$async$reduce_$_state_machine__38392__auto____1 = (function (state_38952){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_38952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e38969){if((e38969 instanceof Object)){
var ex__38395__auto__ = e38969;
var statearr_38970_38982 = state_38952;
(statearr_38970_38982[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38983 = state_38952;
state_38952 = G__38983;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38392__auto__ = function(state_38952){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38392__auto____1.call(this,state_38952);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38392__auto____0;
cljs$core$async$reduce_$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38392__auto____1;
return cljs$core$async$reduce_$_state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto__))
})();
var state__38481__auto__ = (function (){var statearr_38971 = f__38480__auto__.call(null);
(statearr_38971[(6)] = c__38479__auto__);

return statearr_38971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto__))
);

return c__38479__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__38479__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto__,f__$1){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto__,f__$1){
return (function (state_38989){
var state_val_38990 = (state_38989[(1)]);
if((state_val_38990 === (1))){
var inst_38984 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_38989__$1 = state_38989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38989__$1,(2),inst_38984);
} else {
if((state_val_38990 === (2))){
var inst_38986 = (state_38989[(2)]);
var inst_38987 = f__$1.call(null,inst_38986);
var state_38989__$1 = state_38989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38989__$1,inst_38987);
} else {
return null;
}
}
});})(c__38479__auto__,f__$1))
;
return ((function (switch__38391__auto__,c__38479__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__38392__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38392__auto____0 = (function (){
var statearr_38991 = [null,null,null,null,null,null,null];
(statearr_38991[(0)] = cljs$core$async$transduce_$_state_machine__38392__auto__);

(statearr_38991[(1)] = (1));

return statearr_38991;
});
var cljs$core$async$transduce_$_state_machine__38392__auto____1 = (function (state_38989){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_38989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e38992){if((e38992 instanceof Object)){
var ex__38395__auto__ = e38992;
var statearr_38993_38995 = state_38989;
(statearr_38993_38995[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38996 = state_38989;
state_38989 = G__38996;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38392__auto__ = function(state_38989){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38392__auto____1.call(this,state_38989);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38392__auto____0;
cljs$core$async$transduce_$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38392__auto____1;
return cljs$core$async$transduce_$_state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto__,f__$1))
})();
var state__38481__auto__ = (function (){var statearr_38994 = f__38480__auto__.call(null);
(statearr_38994[(6)] = c__38479__auto__);

return statearr_38994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto__,f__$1))
);

return c__38479__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38998 = arguments.length;
switch (G__38998) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38479__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto__){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto__){
return (function (state_39023){
var state_val_39024 = (state_39023[(1)]);
if((state_val_39024 === (7))){
var inst_39005 = (state_39023[(2)]);
var state_39023__$1 = state_39023;
var statearr_39025_39046 = state_39023__$1;
(statearr_39025_39046[(2)] = inst_39005);

(statearr_39025_39046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (1))){
var inst_38999 = cljs.core.seq.call(null,coll);
var inst_39000 = inst_38999;
var state_39023__$1 = (function (){var statearr_39026 = state_39023;
(statearr_39026[(7)] = inst_39000);

return statearr_39026;
})();
var statearr_39027_39047 = state_39023__$1;
(statearr_39027_39047[(2)] = null);

(statearr_39027_39047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (4))){
var inst_39000 = (state_39023[(7)]);
var inst_39003 = cljs.core.first.call(null,inst_39000);
var state_39023__$1 = state_39023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39023__$1,(7),ch,inst_39003);
} else {
if((state_val_39024 === (13))){
var inst_39017 = (state_39023[(2)]);
var state_39023__$1 = state_39023;
var statearr_39028_39048 = state_39023__$1;
(statearr_39028_39048[(2)] = inst_39017);

(statearr_39028_39048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (6))){
var inst_39008 = (state_39023[(2)]);
var state_39023__$1 = state_39023;
if(cljs.core.truth_(inst_39008)){
var statearr_39029_39049 = state_39023__$1;
(statearr_39029_39049[(1)] = (8));

} else {
var statearr_39030_39050 = state_39023__$1;
(statearr_39030_39050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (3))){
var inst_39021 = (state_39023[(2)]);
var state_39023__$1 = state_39023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39023__$1,inst_39021);
} else {
if((state_val_39024 === (12))){
var state_39023__$1 = state_39023;
var statearr_39031_39051 = state_39023__$1;
(statearr_39031_39051[(2)] = null);

(statearr_39031_39051[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (2))){
var inst_39000 = (state_39023[(7)]);
var state_39023__$1 = state_39023;
if(cljs.core.truth_(inst_39000)){
var statearr_39032_39052 = state_39023__$1;
(statearr_39032_39052[(1)] = (4));

} else {
var statearr_39033_39053 = state_39023__$1;
(statearr_39033_39053[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (11))){
var inst_39014 = cljs.core.async.close_BANG_.call(null,ch);
var state_39023__$1 = state_39023;
var statearr_39034_39054 = state_39023__$1;
(statearr_39034_39054[(2)] = inst_39014);

(statearr_39034_39054[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (9))){
var state_39023__$1 = state_39023;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39035_39055 = state_39023__$1;
(statearr_39035_39055[(1)] = (11));

} else {
var statearr_39036_39056 = state_39023__$1;
(statearr_39036_39056[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (5))){
var inst_39000 = (state_39023[(7)]);
var state_39023__$1 = state_39023;
var statearr_39037_39057 = state_39023__$1;
(statearr_39037_39057[(2)] = inst_39000);

(statearr_39037_39057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (10))){
var inst_39019 = (state_39023[(2)]);
var state_39023__$1 = state_39023;
var statearr_39038_39058 = state_39023__$1;
(statearr_39038_39058[(2)] = inst_39019);

(statearr_39038_39058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (8))){
var inst_39000 = (state_39023[(7)]);
var inst_39010 = cljs.core.next.call(null,inst_39000);
var inst_39000__$1 = inst_39010;
var state_39023__$1 = (function (){var statearr_39039 = state_39023;
(statearr_39039[(7)] = inst_39000__$1);

return statearr_39039;
})();
var statearr_39040_39059 = state_39023__$1;
(statearr_39040_39059[(2)] = null);

(statearr_39040_39059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38479__auto__))
;
return ((function (switch__38391__auto__,c__38479__auto__){
return (function() {
var cljs$core$async$state_machine__38392__auto__ = null;
var cljs$core$async$state_machine__38392__auto____0 = (function (){
var statearr_39041 = [null,null,null,null,null,null,null,null];
(statearr_39041[(0)] = cljs$core$async$state_machine__38392__auto__);

(statearr_39041[(1)] = (1));

return statearr_39041;
});
var cljs$core$async$state_machine__38392__auto____1 = (function (state_39023){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_39023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e39042){if((e39042 instanceof Object)){
var ex__38395__auto__ = e39042;
var statearr_39043_39060 = state_39023;
(statearr_39043_39060[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39061 = state_39023;
state_39023 = G__39061;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$state_machine__38392__auto__ = function(state_39023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38392__auto____1.call(this,state_39023);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38392__auto____0;
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38392__auto____1;
return cljs$core$async$state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto__))
})();
var state__38481__auto__ = (function (){var statearr_39044 = f__38480__auto__.call(null);
(statearr_39044[(6)] = c__38479__auto__);

return statearr_39044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto__))
);

return c__38479__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__33120__auto__ = (((_ == null))?null:_);
var m__33121__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__33120__auto__)]);
if(!((m__33121__auto__ == null))){
return m__33121__auto__.call(null,_);
} else {
var m__33121__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__33121__auto____$1 == null))){
return m__33121__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__33120__auto__ = (((m == null))?null:m);
var m__33121__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__33120__auto__)]);
if(!((m__33121__auto__ == null))){
return m__33121__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__33121__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__33121__auto____$1 == null))){
return m__33121__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__33120__auto__ = (((m == null))?null:m);
var m__33121__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__33120__auto__)]);
if(!((m__33121__auto__ == null))){
return m__33121__auto__.call(null,m,ch);
} else {
var m__33121__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__33121__auto____$1 == null))){
return m__33121__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__33120__auto__ = (((m == null))?null:m);
var m__33121__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__33120__auto__)]);
if(!((m__33121__auto__ == null))){
return m__33121__auto__.call(null,m);
} else {
var m__33121__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__33121__auto____$1 == null))){
return m__33121__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39062 = (function (ch,cs,meta39063){
this.ch = ch;
this.cs = cs;
this.meta39063 = meta39063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39064,meta39063__$1){
var self__ = this;
var _39064__$1 = this;
return (new cljs.core.async.t_cljs$core$async39062(self__.ch,self__.cs,meta39063__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39062.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39064){
var self__ = this;
var _39064__$1 = this;
return self__.meta39063;
});})(cs))
;

cljs.core.async.t_cljs$core$async39062.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39062.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39062.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39062.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39062.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39062.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39062.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39063","meta39063",1463380061,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39062";

cljs.core.async.t_cljs$core$async39062.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__33062__auto__,writer__33063__auto__,opt__33064__auto__){
return cljs.core._write.call(null,writer__33063__auto__,"cljs.core.async/t_cljs$core$async39062");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async39062 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39062(ch__$1,cs__$1,meta39063){
return (new cljs.core.async.t_cljs$core$async39062(ch__$1,cs__$1,meta39063));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39062(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__38479__auto___39284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto___39284,cs,m,dchan,dctr,done){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto___39284,cs,m,dchan,dctr,done){
return (function (state_39199){
var state_val_39200 = (state_39199[(1)]);
if((state_val_39200 === (7))){
var inst_39195 = (state_39199[(2)]);
var state_39199__$1 = state_39199;
var statearr_39201_39285 = state_39199__$1;
(statearr_39201_39285[(2)] = inst_39195);

(statearr_39201_39285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (20))){
var inst_39098 = (state_39199[(7)]);
var inst_39110 = cljs.core.first.call(null,inst_39098);
var inst_39111 = cljs.core.nth.call(null,inst_39110,(0),null);
var inst_39112 = cljs.core.nth.call(null,inst_39110,(1),null);
var state_39199__$1 = (function (){var statearr_39202 = state_39199;
(statearr_39202[(8)] = inst_39111);

return statearr_39202;
})();
if(cljs.core.truth_(inst_39112)){
var statearr_39203_39286 = state_39199__$1;
(statearr_39203_39286[(1)] = (22));

} else {
var statearr_39204_39287 = state_39199__$1;
(statearr_39204_39287[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (27))){
var inst_39140 = (state_39199[(9)]);
var inst_39067 = (state_39199[(10)]);
var inst_39142 = (state_39199[(11)]);
var inst_39147 = (state_39199[(12)]);
var inst_39147__$1 = cljs.core._nth.call(null,inst_39140,inst_39142);
var inst_39148 = cljs.core.async.put_BANG_.call(null,inst_39147__$1,inst_39067,done);
var state_39199__$1 = (function (){var statearr_39205 = state_39199;
(statearr_39205[(12)] = inst_39147__$1);

return statearr_39205;
})();
if(cljs.core.truth_(inst_39148)){
var statearr_39206_39288 = state_39199__$1;
(statearr_39206_39288[(1)] = (30));

} else {
var statearr_39207_39289 = state_39199__$1;
(statearr_39207_39289[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (1))){
var state_39199__$1 = state_39199;
var statearr_39208_39290 = state_39199__$1;
(statearr_39208_39290[(2)] = null);

(statearr_39208_39290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (24))){
var inst_39098 = (state_39199[(7)]);
var inst_39117 = (state_39199[(2)]);
var inst_39118 = cljs.core.next.call(null,inst_39098);
var inst_39076 = inst_39118;
var inst_39077 = null;
var inst_39078 = (0);
var inst_39079 = (0);
var state_39199__$1 = (function (){var statearr_39209 = state_39199;
(statearr_39209[(13)] = inst_39079);

(statearr_39209[(14)] = inst_39117);

(statearr_39209[(15)] = inst_39078);

(statearr_39209[(16)] = inst_39076);

(statearr_39209[(17)] = inst_39077);

return statearr_39209;
})();
var statearr_39210_39291 = state_39199__$1;
(statearr_39210_39291[(2)] = null);

(statearr_39210_39291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (39))){
var state_39199__$1 = state_39199;
var statearr_39214_39292 = state_39199__$1;
(statearr_39214_39292[(2)] = null);

(statearr_39214_39292[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (4))){
var inst_39067 = (state_39199[(10)]);
var inst_39067__$1 = (state_39199[(2)]);
var inst_39068 = (inst_39067__$1 == null);
var state_39199__$1 = (function (){var statearr_39215 = state_39199;
(statearr_39215[(10)] = inst_39067__$1);

return statearr_39215;
})();
if(cljs.core.truth_(inst_39068)){
var statearr_39216_39293 = state_39199__$1;
(statearr_39216_39293[(1)] = (5));

} else {
var statearr_39217_39294 = state_39199__$1;
(statearr_39217_39294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (15))){
var inst_39079 = (state_39199[(13)]);
var inst_39078 = (state_39199[(15)]);
var inst_39076 = (state_39199[(16)]);
var inst_39077 = (state_39199[(17)]);
var inst_39094 = (state_39199[(2)]);
var inst_39095 = (inst_39079 + (1));
var tmp39211 = inst_39078;
var tmp39212 = inst_39076;
var tmp39213 = inst_39077;
var inst_39076__$1 = tmp39212;
var inst_39077__$1 = tmp39213;
var inst_39078__$1 = tmp39211;
var inst_39079__$1 = inst_39095;
var state_39199__$1 = (function (){var statearr_39218 = state_39199;
(statearr_39218[(13)] = inst_39079__$1);

(statearr_39218[(18)] = inst_39094);

(statearr_39218[(15)] = inst_39078__$1);

(statearr_39218[(16)] = inst_39076__$1);

(statearr_39218[(17)] = inst_39077__$1);

return statearr_39218;
})();
var statearr_39219_39295 = state_39199__$1;
(statearr_39219_39295[(2)] = null);

(statearr_39219_39295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (21))){
var inst_39121 = (state_39199[(2)]);
var state_39199__$1 = state_39199;
var statearr_39223_39296 = state_39199__$1;
(statearr_39223_39296[(2)] = inst_39121);

(statearr_39223_39296[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (31))){
var inst_39147 = (state_39199[(12)]);
var inst_39151 = done.call(null,null);
var inst_39152 = cljs.core.async.untap_STAR_.call(null,m,inst_39147);
var state_39199__$1 = (function (){var statearr_39224 = state_39199;
(statearr_39224[(19)] = inst_39151);

return statearr_39224;
})();
var statearr_39225_39297 = state_39199__$1;
(statearr_39225_39297[(2)] = inst_39152);

(statearr_39225_39297[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (32))){
var inst_39140 = (state_39199[(9)]);
var inst_39139 = (state_39199[(20)]);
var inst_39142 = (state_39199[(11)]);
var inst_39141 = (state_39199[(21)]);
var inst_39154 = (state_39199[(2)]);
var inst_39155 = (inst_39142 + (1));
var tmp39220 = inst_39140;
var tmp39221 = inst_39139;
var tmp39222 = inst_39141;
var inst_39139__$1 = tmp39221;
var inst_39140__$1 = tmp39220;
var inst_39141__$1 = tmp39222;
var inst_39142__$1 = inst_39155;
var state_39199__$1 = (function (){var statearr_39226 = state_39199;
(statearr_39226[(9)] = inst_39140__$1);

(statearr_39226[(20)] = inst_39139__$1);

(statearr_39226[(11)] = inst_39142__$1);

(statearr_39226[(22)] = inst_39154);

(statearr_39226[(21)] = inst_39141__$1);

return statearr_39226;
})();
var statearr_39227_39298 = state_39199__$1;
(statearr_39227_39298[(2)] = null);

(statearr_39227_39298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (40))){
var inst_39167 = (state_39199[(23)]);
var inst_39171 = done.call(null,null);
var inst_39172 = cljs.core.async.untap_STAR_.call(null,m,inst_39167);
var state_39199__$1 = (function (){var statearr_39228 = state_39199;
(statearr_39228[(24)] = inst_39171);

return statearr_39228;
})();
var statearr_39229_39299 = state_39199__$1;
(statearr_39229_39299[(2)] = inst_39172);

(statearr_39229_39299[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (33))){
var inst_39158 = (state_39199[(25)]);
var inst_39160 = cljs.core.chunked_seq_QMARK_.call(null,inst_39158);
var state_39199__$1 = state_39199;
if(inst_39160){
var statearr_39230_39300 = state_39199__$1;
(statearr_39230_39300[(1)] = (36));

} else {
var statearr_39231_39301 = state_39199__$1;
(statearr_39231_39301[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (13))){
var inst_39088 = (state_39199[(26)]);
var inst_39091 = cljs.core.async.close_BANG_.call(null,inst_39088);
var state_39199__$1 = state_39199;
var statearr_39232_39302 = state_39199__$1;
(statearr_39232_39302[(2)] = inst_39091);

(statearr_39232_39302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (22))){
var inst_39111 = (state_39199[(8)]);
var inst_39114 = cljs.core.async.close_BANG_.call(null,inst_39111);
var state_39199__$1 = state_39199;
var statearr_39233_39303 = state_39199__$1;
(statearr_39233_39303[(2)] = inst_39114);

(statearr_39233_39303[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (36))){
var inst_39158 = (state_39199[(25)]);
var inst_39162 = cljs.core.chunk_first.call(null,inst_39158);
var inst_39163 = cljs.core.chunk_rest.call(null,inst_39158);
var inst_39164 = cljs.core.count.call(null,inst_39162);
var inst_39139 = inst_39163;
var inst_39140 = inst_39162;
var inst_39141 = inst_39164;
var inst_39142 = (0);
var state_39199__$1 = (function (){var statearr_39234 = state_39199;
(statearr_39234[(9)] = inst_39140);

(statearr_39234[(20)] = inst_39139);

(statearr_39234[(11)] = inst_39142);

(statearr_39234[(21)] = inst_39141);

return statearr_39234;
})();
var statearr_39235_39304 = state_39199__$1;
(statearr_39235_39304[(2)] = null);

(statearr_39235_39304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (41))){
var inst_39158 = (state_39199[(25)]);
var inst_39174 = (state_39199[(2)]);
var inst_39175 = cljs.core.next.call(null,inst_39158);
var inst_39139 = inst_39175;
var inst_39140 = null;
var inst_39141 = (0);
var inst_39142 = (0);
var state_39199__$1 = (function (){var statearr_39236 = state_39199;
(statearr_39236[(9)] = inst_39140);

(statearr_39236[(27)] = inst_39174);

(statearr_39236[(20)] = inst_39139);

(statearr_39236[(11)] = inst_39142);

(statearr_39236[(21)] = inst_39141);

return statearr_39236;
})();
var statearr_39237_39305 = state_39199__$1;
(statearr_39237_39305[(2)] = null);

(statearr_39237_39305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (43))){
var state_39199__$1 = state_39199;
var statearr_39238_39306 = state_39199__$1;
(statearr_39238_39306[(2)] = null);

(statearr_39238_39306[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (29))){
var inst_39183 = (state_39199[(2)]);
var state_39199__$1 = state_39199;
var statearr_39239_39307 = state_39199__$1;
(statearr_39239_39307[(2)] = inst_39183);

(statearr_39239_39307[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (44))){
var inst_39192 = (state_39199[(2)]);
var state_39199__$1 = (function (){var statearr_39240 = state_39199;
(statearr_39240[(28)] = inst_39192);

return statearr_39240;
})();
var statearr_39241_39308 = state_39199__$1;
(statearr_39241_39308[(2)] = null);

(statearr_39241_39308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (6))){
var inst_39131 = (state_39199[(29)]);
var inst_39130 = cljs.core.deref.call(null,cs);
var inst_39131__$1 = cljs.core.keys.call(null,inst_39130);
var inst_39132 = cljs.core.count.call(null,inst_39131__$1);
var inst_39133 = cljs.core.reset_BANG_.call(null,dctr,inst_39132);
var inst_39138 = cljs.core.seq.call(null,inst_39131__$1);
var inst_39139 = inst_39138;
var inst_39140 = null;
var inst_39141 = (0);
var inst_39142 = (0);
var state_39199__$1 = (function (){var statearr_39242 = state_39199;
(statearr_39242[(29)] = inst_39131__$1);

(statearr_39242[(9)] = inst_39140);

(statearr_39242[(30)] = inst_39133);

(statearr_39242[(20)] = inst_39139);

(statearr_39242[(11)] = inst_39142);

(statearr_39242[(21)] = inst_39141);

return statearr_39242;
})();
var statearr_39243_39309 = state_39199__$1;
(statearr_39243_39309[(2)] = null);

(statearr_39243_39309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (28))){
var inst_39158 = (state_39199[(25)]);
var inst_39139 = (state_39199[(20)]);
var inst_39158__$1 = cljs.core.seq.call(null,inst_39139);
var state_39199__$1 = (function (){var statearr_39244 = state_39199;
(statearr_39244[(25)] = inst_39158__$1);

return statearr_39244;
})();
if(inst_39158__$1){
var statearr_39245_39310 = state_39199__$1;
(statearr_39245_39310[(1)] = (33));

} else {
var statearr_39246_39311 = state_39199__$1;
(statearr_39246_39311[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (25))){
var inst_39142 = (state_39199[(11)]);
var inst_39141 = (state_39199[(21)]);
var inst_39144 = (inst_39142 < inst_39141);
var inst_39145 = inst_39144;
var state_39199__$1 = state_39199;
if(cljs.core.truth_(inst_39145)){
var statearr_39247_39312 = state_39199__$1;
(statearr_39247_39312[(1)] = (27));

} else {
var statearr_39248_39313 = state_39199__$1;
(statearr_39248_39313[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (34))){
var state_39199__$1 = state_39199;
var statearr_39249_39314 = state_39199__$1;
(statearr_39249_39314[(2)] = null);

(statearr_39249_39314[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (17))){
var state_39199__$1 = state_39199;
var statearr_39250_39315 = state_39199__$1;
(statearr_39250_39315[(2)] = null);

(statearr_39250_39315[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (3))){
var inst_39197 = (state_39199[(2)]);
var state_39199__$1 = state_39199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39199__$1,inst_39197);
} else {
if((state_val_39200 === (12))){
var inst_39126 = (state_39199[(2)]);
var state_39199__$1 = state_39199;
var statearr_39251_39316 = state_39199__$1;
(statearr_39251_39316[(2)] = inst_39126);

(statearr_39251_39316[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (2))){
var state_39199__$1 = state_39199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39199__$1,(4),ch);
} else {
if((state_val_39200 === (23))){
var state_39199__$1 = state_39199;
var statearr_39252_39317 = state_39199__$1;
(statearr_39252_39317[(2)] = null);

(statearr_39252_39317[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (35))){
var inst_39181 = (state_39199[(2)]);
var state_39199__$1 = state_39199;
var statearr_39253_39318 = state_39199__$1;
(statearr_39253_39318[(2)] = inst_39181);

(statearr_39253_39318[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (19))){
var inst_39098 = (state_39199[(7)]);
var inst_39102 = cljs.core.chunk_first.call(null,inst_39098);
var inst_39103 = cljs.core.chunk_rest.call(null,inst_39098);
var inst_39104 = cljs.core.count.call(null,inst_39102);
var inst_39076 = inst_39103;
var inst_39077 = inst_39102;
var inst_39078 = inst_39104;
var inst_39079 = (0);
var state_39199__$1 = (function (){var statearr_39254 = state_39199;
(statearr_39254[(13)] = inst_39079);

(statearr_39254[(15)] = inst_39078);

(statearr_39254[(16)] = inst_39076);

(statearr_39254[(17)] = inst_39077);

return statearr_39254;
})();
var statearr_39255_39319 = state_39199__$1;
(statearr_39255_39319[(2)] = null);

(statearr_39255_39319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (11))){
var inst_39098 = (state_39199[(7)]);
var inst_39076 = (state_39199[(16)]);
var inst_39098__$1 = cljs.core.seq.call(null,inst_39076);
var state_39199__$1 = (function (){var statearr_39256 = state_39199;
(statearr_39256[(7)] = inst_39098__$1);

return statearr_39256;
})();
if(inst_39098__$1){
var statearr_39257_39320 = state_39199__$1;
(statearr_39257_39320[(1)] = (16));

} else {
var statearr_39258_39321 = state_39199__$1;
(statearr_39258_39321[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (9))){
var inst_39128 = (state_39199[(2)]);
var state_39199__$1 = state_39199;
var statearr_39259_39322 = state_39199__$1;
(statearr_39259_39322[(2)] = inst_39128);

(statearr_39259_39322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (5))){
var inst_39074 = cljs.core.deref.call(null,cs);
var inst_39075 = cljs.core.seq.call(null,inst_39074);
var inst_39076 = inst_39075;
var inst_39077 = null;
var inst_39078 = (0);
var inst_39079 = (0);
var state_39199__$1 = (function (){var statearr_39260 = state_39199;
(statearr_39260[(13)] = inst_39079);

(statearr_39260[(15)] = inst_39078);

(statearr_39260[(16)] = inst_39076);

(statearr_39260[(17)] = inst_39077);

return statearr_39260;
})();
var statearr_39261_39323 = state_39199__$1;
(statearr_39261_39323[(2)] = null);

(statearr_39261_39323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (14))){
var state_39199__$1 = state_39199;
var statearr_39262_39324 = state_39199__$1;
(statearr_39262_39324[(2)] = null);

(statearr_39262_39324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (45))){
var inst_39189 = (state_39199[(2)]);
var state_39199__$1 = state_39199;
var statearr_39263_39325 = state_39199__$1;
(statearr_39263_39325[(2)] = inst_39189);

(statearr_39263_39325[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (26))){
var inst_39131 = (state_39199[(29)]);
var inst_39185 = (state_39199[(2)]);
var inst_39186 = cljs.core.seq.call(null,inst_39131);
var state_39199__$1 = (function (){var statearr_39264 = state_39199;
(statearr_39264[(31)] = inst_39185);

return statearr_39264;
})();
if(inst_39186){
var statearr_39265_39326 = state_39199__$1;
(statearr_39265_39326[(1)] = (42));

} else {
var statearr_39266_39327 = state_39199__$1;
(statearr_39266_39327[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (16))){
var inst_39098 = (state_39199[(7)]);
var inst_39100 = cljs.core.chunked_seq_QMARK_.call(null,inst_39098);
var state_39199__$1 = state_39199;
if(inst_39100){
var statearr_39267_39328 = state_39199__$1;
(statearr_39267_39328[(1)] = (19));

} else {
var statearr_39268_39329 = state_39199__$1;
(statearr_39268_39329[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (38))){
var inst_39178 = (state_39199[(2)]);
var state_39199__$1 = state_39199;
var statearr_39269_39330 = state_39199__$1;
(statearr_39269_39330[(2)] = inst_39178);

(statearr_39269_39330[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (30))){
var state_39199__$1 = state_39199;
var statearr_39270_39331 = state_39199__$1;
(statearr_39270_39331[(2)] = null);

(statearr_39270_39331[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (10))){
var inst_39079 = (state_39199[(13)]);
var inst_39077 = (state_39199[(17)]);
var inst_39087 = cljs.core._nth.call(null,inst_39077,inst_39079);
var inst_39088 = cljs.core.nth.call(null,inst_39087,(0),null);
var inst_39089 = cljs.core.nth.call(null,inst_39087,(1),null);
var state_39199__$1 = (function (){var statearr_39271 = state_39199;
(statearr_39271[(26)] = inst_39088);

return statearr_39271;
})();
if(cljs.core.truth_(inst_39089)){
var statearr_39272_39332 = state_39199__$1;
(statearr_39272_39332[(1)] = (13));

} else {
var statearr_39273_39333 = state_39199__$1;
(statearr_39273_39333[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (18))){
var inst_39124 = (state_39199[(2)]);
var state_39199__$1 = state_39199;
var statearr_39274_39334 = state_39199__$1;
(statearr_39274_39334[(2)] = inst_39124);

(statearr_39274_39334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (42))){
var state_39199__$1 = state_39199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39199__$1,(45),dchan);
} else {
if((state_val_39200 === (37))){
var inst_39167 = (state_39199[(23)]);
var inst_39067 = (state_39199[(10)]);
var inst_39158 = (state_39199[(25)]);
var inst_39167__$1 = cljs.core.first.call(null,inst_39158);
var inst_39168 = cljs.core.async.put_BANG_.call(null,inst_39167__$1,inst_39067,done);
var state_39199__$1 = (function (){var statearr_39275 = state_39199;
(statearr_39275[(23)] = inst_39167__$1);

return statearr_39275;
})();
if(cljs.core.truth_(inst_39168)){
var statearr_39276_39335 = state_39199__$1;
(statearr_39276_39335[(1)] = (39));

} else {
var statearr_39277_39336 = state_39199__$1;
(statearr_39277_39336[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39200 === (8))){
var inst_39079 = (state_39199[(13)]);
var inst_39078 = (state_39199[(15)]);
var inst_39081 = (inst_39079 < inst_39078);
var inst_39082 = inst_39081;
var state_39199__$1 = state_39199;
if(cljs.core.truth_(inst_39082)){
var statearr_39278_39337 = state_39199__$1;
(statearr_39278_39337[(1)] = (10));

} else {
var statearr_39279_39338 = state_39199__$1;
(statearr_39279_39338[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38479__auto___39284,cs,m,dchan,dctr,done))
;
return ((function (switch__38391__auto__,c__38479__auto___39284,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38392__auto__ = null;
var cljs$core$async$mult_$_state_machine__38392__auto____0 = (function (){
var statearr_39280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39280[(0)] = cljs$core$async$mult_$_state_machine__38392__auto__);

(statearr_39280[(1)] = (1));

return statearr_39280;
});
var cljs$core$async$mult_$_state_machine__38392__auto____1 = (function (state_39199){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_39199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e39281){if((e39281 instanceof Object)){
var ex__38395__auto__ = e39281;
var statearr_39282_39339 = state_39199;
(statearr_39282_39339[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39340 = state_39199;
state_39199 = G__39340;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38392__auto__ = function(state_39199){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38392__auto____1.call(this,state_39199);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38392__auto____0;
cljs$core$async$mult_$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38392__auto____1;
return cljs$core$async$mult_$_state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto___39284,cs,m,dchan,dctr,done))
})();
var state__38481__auto__ = (function (){var statearr_39283 = f__38480__auto__.call(null);
(statearr_39283[(6)] = c__38479__auto___39284);

return statearr_39283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto___39284,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__39342 = arguments.length;
switch (G__39342) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__33120__auto__ = (((m == null))?null:m);
var m__33121__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__33120__auto__)]);
if(!((m__33121__auto__ == null))){
return m__33121__auto__.call(null,m,ch);
} else {
var m__33121__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__33121__auto____$1 == null))){
return m__33121__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__33120__auto__ = (((m == null))?null:m);
var m__33121__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__33120__auto__)]);
if(!((m__33121__auto__ == null))){
return m__33121__auto__.call(null,m,ch);
} else {
var m__33121__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__33121__auto____$1 == null))){
return m__33121__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__33120__auto__ = (((m == null))?null:m);
var m__33121__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__33120__auto__)]);
if(!((m__33121__auto__ == null))){
return m__33121__auto__.call(null,m);
} else {
var m__33121__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__33121__auto____$1 == null))){
return m__33121__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__33120__auto__ = (((m == null))?null:m);
var m__33121__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__33120__auto__)]);
if(!((m__33121__auto__ == null))){
return m__33121__auto__.call(null,m,state_map);
} else {
var m__33121__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__33121__auto____$1 == null))){
return m__33121__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__33120__auto__ = (((m == null))?null:m);
var m__33121__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__33120__auto__)]);
if(!((m__33121__auto__ == null))){
return m__33121__auto__.call(null,m,mode);
} else {
var m__33121__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__33121__auto____$1 == null))){
return m__33121__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__33608__auto__ = [];
var len__33601__auto___39354 = arguments.length;
var i__33602__auto___39355 = (0);
while(true){
if((i__33602__auto___39355 < len__33601__auto___39354)){
args__33608__auto__.push((arguments[i__33602__auto___39355]));

var G__39356 = (i__33602__auto___39355 + (1));
i__33602__auto___39355 = G__39356;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((3) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__33609__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39348){
var map__39349 = p__39348;
var map__39349__$1 = ((((!((map__39349 == null)))?((((map__39349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39349):map__39349);
var opts = map__39349__$1;
var statearr_39351_39357 = state;
(statearr_39351_39357[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__39349,map__39349__$1,opts){
return (function (val){
var statearr_39352_39358 = state;
(statearr_39352_39358[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39349,map__39349__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_39353_39359 = state;
(statearr_39353_39359[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39344){
var G__39345 = cljs.core.first.call(null,seq39344);
var seq39344__$1 = cljs.core.next.call(null,seq39344);
var G__39346 = cljs.core.first.call(null,seq39344__$1);
var seq39344__$2 = cljs.core.next.call(null,seq39344__$1);
var G__39347 = cljs.core.first.call(null,seq39344__$2);
var seq39344__$3 = cljs.core.next.call(null,seq39344__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39345,G__39346,G__39347,seq39344__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39360 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39360 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta39361){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta39361 = meta39361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39362,meta39361__$1){
var self__ = this;
var _39362__$1 = this;
return (new cljs.core.async.t_cljs$core$async39360(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta39361__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39362){
var self__ = this;
var _39362__$1 = this;
return self__.meta39361;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39360.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39360.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta39361","meta39361",277407772,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39360.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39360";

cljs.core.async.t_cljs$core$async39360.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__33062__auto__,writer__33063__auto__,opt__33064__auto__){
return cljs.core._write.call(null,writer__33063__auto__,"cljs.core.async/t_cljs$core$async39360");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async39360 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39360(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta39361){
return (new cljs.core.async.t_cljs$core$async39360(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta39361));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39360(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38479__auto___39524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto___39524,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto___39524,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39464){
var state_val_39465 = (state_39464[(1)]);
if((state_val_39465 === (7))){
var inst_39379 = (state_39464[(2)]);
var state_39464__$1 = state_39464;
var statearr_39466_39525 = state_39464__$1;
(statearr_39466_39525[(2)] = inst_39379);

(statearr_39466_39525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (20))){
var inst_39391 = (state_39464[(7)]);
var state_39464__$1 = state_39464;
var statearr_39467_39526 = state_39464__$1;
(statearr_39467_39526[(2)] = inst_39391);

(statearr_39467_39526[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (27))){
var state_39464__$1 = state_39464;
var statearr_39468_39527 = state_39464__$1;
(statearr_39468_39527[(2)] = null);

(statearr_39468_39527[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (1))){
var inst_39366 = (state_39464[(8)]);
var inst_39366__$1 = calc_state.call(null);
var inst_39368 = (inst_39366__$1 == null);
var inst_39369 = cljs.core.not.call(null,inst_39368);
var state_39464__$1 = (function (){var statearr_39469 = state_39464;
(statearr_39469[(8)] = inst_39366__$1);

return statearr_39469;
})();
if(inst_39369){
var statearr_39470_39528 = state_39464__$1;
(statearr_39470_39528[(1)] = (2));

} else {
var statearr_39471_39529 = state_39464__$1;
(statearr_39471_39529[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (24))){
var inst_39415 = (state_39464[(9)]);
var inst_39438 = (state_39464[(10)]);
var inst_39424 = (state_39464[(11)]);
var inst_39438__$1 = inst_39415.call(null,inst_39424);
var state_39464__$1 = (function (){var statearr_39472 = state_39464;
(statearr_39472[(10)] = inst_39438__$1);

return statearr_39472;
})();
if(cljs.core.truth_(inst_39438__$1)){
var statearr_39473_39530 = state_39464__$1;
(statearr_39473_39530[(1)] = (29));

} else {
var statearr_39474_39531 = state_39464__$1;
(statearr_39474_39531[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (4))){
var inst_39382 = (state_39464[(2)]);
var state_39464__$1 = state_39464;
if(cljs.core.truth_(inst_39382)){
var statearr_39475_39532 = state_39464__$1;
(statearr_39475_39532[(1)] = (8));

} else {
var statearr_39476_39533 = state_39464__$1;
(statearr_39476_39533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (15))){
var inst_39409 = (state_39464[(2)]);
var state_39464__$1 = state_39464;
if(cljs.core.truth_(inst_39409)){
var statearr_39477_39534 = state_39464__$1;
(statearr_39477_39534[(1)] = (19));

} else {
var statearr_39478_39535 = state_39464__$1;
(statearr_39478_39535[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (21))){
var inst_39414 = (state_39464[(12)]);
var inst_39414__$1 = (state_39464[(2)]);
var inst_39415 = cljs.core.get.call(null,inst_39414__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39416 = cljs.core.get.call(null,inst_39414__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39417 = cljs.core.get.call(null,inst_39414__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39464__$1 = (function (){var statearr_39479 = state_39464;
(statearr_39479[(9)] = inst_39415);

(statearr_39479[(13)] = inst_39416);

(statearr_39479[(12)] = inst_39414__$1);

return statearr_39479;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39464__$1,(22),inst_39417);
} else {
if((state_val_39465 === (31))){
var inst_39446 = (state_39464[(2)]);
var state_39464__$1 = state_39464;
if(cljs.core.truth_(inst_39446)){
var statearr_39480_39536 = state_39464__$1;
(statearr_39480_39536[(1)] = (32));

} else {
var statearr_39481_39537 = state_39464__$1;
(statearr_39481_39537[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (32))){
var inst_39423 = (state_39464[(14)]);
var state_39464__$1 = state_39464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39464__$1,(35),out,inst_39423);
} else {
if((state_val_39465 === (33))){
var inst_39414 = (state_39464[(12)]);
var inst_39391 = inst_39414;
var state_39464__$1 = (function (){var statearr_39482 = state_39464;
(statearr_39482[(7)] = inst_39391);

return statearr_39482;
})();
var statearr_39483_39538 = state_39464__$1;
(statearr_39483_39538[(2)] = null);

(statearr_39483_39538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (13))){
var inst_39391 = (state_39464[(7)]);
var inst_39398 = inst_39391.cljs$lang$protocol_mask$partition0$;
var inst_39399 = (inst_39398 & (64));
var inst_39400 = inst_39391.cljs$core$ISeq$;
var inst_39401 = (cljs.core.PROTOCOL_SENTINEL === inst_39400);
var inst_39402 = (inst_39399) || (inst_39401);
var state_39464__$1 = state_39464;
if(cljs.core.truth_(inst_39402)){
var statearr_39484_39539 = state_39464__$1;
(statearr_39484_39539[(1)] = (16));

} else {
var statearr_39485_39540 = state_39464__$1;
(statearr_39485_39540[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (22))){
var inst_39423 = (state_39464[(14)]);
var inst_39424 = (state_39464[(11)]);
var inst_39422 = (state_39464[(2)]);
var inst_39423__$1 = cljs.core.nth.call(null,inst_39422,(0),null);
var inst_39424__$1 = cljs.core.nth.call(null,inst_39422,(1),null);
var inst_39425 = (inst_39423__$1 == null);
var inst_39426 = cljs.core._EQ_.call(null,inst_39424__$1,change);
var inst_39427 = (inst_39425) || (inst_39426);
var state_39464__$1 = (function (){var statearr_39486 = state_39464;
(statearr_39486[(14)] = inst_39423__$1);

(statearr_39486[(11)] = inst_39424__$1);

return statearr_39486;
})();
if(cljs.core.truth_(inst_39427)){
var statearr_39487_39541 = state_39464__$1;
(statearr_39487_39541[(1)] = (23));

} else {
var statearr_39488_39542 = state_39464__$1;
(statearr_39488_39542[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (36))){
var inst_39414 = (state_39464[(12)]);
var inst_39391 = inst_39414;
var state_39464__$1 = (function (){var statearr_39489 = state_39464;
(statearr_39489[(7)] = inst_39391);

return statearr_39489;
})();
var statearr_39490_39543 = state_39464__$1;
(statearr_39490_39543[(2)] = null);

(statearr_39490_39543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (29))){
var inst_39438 = (state_39464[(10)]);
var state_39464__$1 = state_39464;
var statearr_39491_39544 = state_39464__$1;
(statearr_39491_39544[(2)] = inst_39438);

(statearr_39491_39544[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (6))){
var state_39464__$1 = state_39464;
var statearr_39492_39545 = state_39464__$1;
(statearr_39492_39545[(2)] = false);

(statearr_39492_39545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (28))){
var inst_39434 = (state_39464[(2)]);
var inst_39435 = calc_state.call(null);
var inst_39391 = inst_39435;
var state_39464__$1 = (function (){var statearr_39493 = state_39464;
(statearr_39493[(15)] = inst_39434);

(statearr_39493[(7)] = inst_39391);

return statearr_39493;
})();
var statearr_39494_39546 = state_39464__$1;
(statearr_39494_39546[(2)] = null);

(statearr_39494_39546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (25))){
var inst_39460 = (state_39464[(2)]);
var state_39464__$1 = state_39464;
var statearr_39495_39547 = state_39464__$1;
(statearr_39495_39547[(2)] = inst_39460);

(statearr_39495_39547[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (34))){
var inst_39458 = (state_39464[(2)]);
var state_39464__$1 = state_39464;
var statearr_39496_39548 = state_39464__$1;
(statearr_39496_39548[(2)] = inst_39458);

(statearr_39496_39548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (17))){
var state_39464__$1 = state_39464;
var statearr_39497_39549 = state_39464__$1;
(statearr_39497_39549[(2)] = false);

(statearr_39497_39549[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (3))){
var state_39464__$1 = state_39464;
var statearr_39498_39550 = state_39464__$1;
(statearr_39498_39550[(2)] = false);

(statearr_39498_39550[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (12))){
var inst_39462 = (state_39464[(2)]);
var state_39464__$1 = state_39464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39464__$1,inst_39462);
} else {
if((state_val_39465 === (2))){
var inst_39366 = (state_39464[(8)]);
var inst_39371 = inst_39366.cljs$lang$protocol_mask$partition0$;
var inst_39372 = (inst_39371 & (64));
var inst_39373 = inst_39366.cljs$core$ISeq$;
var inst_39374 = (cljs.core.PROTOCOL_SENTINEL === inst_39373);
var inst_39375 = (inst_39372) || (inst_39374);
var state_39464__$1 = state_39464;
if(cljs.core.truth_(inst_39375)){
var statearr_39499_39551 = state_39464__$1;
(statearr_39499_39551[(1)] = (5));

} else {
var statearr_39500_39552 = state_39464__$1;
(statearr_39500_39552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (23))){
var inst_39423 = (state_39464[(14)]);
var inst_39429 = (inst_39423 == null);
var state_39464__$1 = state_39464;
if(cljs.core.truth_(inst_39429)){
var statearr_39501_39553 = state_39464__$1;
(statearr_39501_39553[(1)] = (26));

} else {
var statearr_39502_39554 = state_39464__$1;
(statearr_39502_39554[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (35))){
var inst_39449 = (state_39464[(2)]);
var state_39464__$1 = state_39464;
if(cljs.core.truth_(inst_39449)){
var statearr_39503_39555 = state_39464__$1;
(statearr_39503_39555[(1)] = (36));

} else {
var statearr_39504_39556 = state_39464__$1;
(statearr_39504_39556[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (19))){
var inst_39391 = (state_39464[(7)]);
var inst_39411 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39391);
var state_39464__$1 = state_39464;
var statearr_39505_39557 = state_39464__$1;
(statearr_39505_39557[(2)] = inst_39411);

(statearr_39505_39557[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (11))){
var inst_39391 = (state_39464[(7)]);
var inst_39395 = (inst_39391 == null);
var inst_39396 = cljs.core.not.call(null,inst_39395);
var state_39464__$1 = state_39464;
if(inst_39396){
var statearr_39506_39558 = state_39464__$1;
(statearr_39506_39558[(1)] = (13));

} else {
var statearr_39507_39559 = state_39464__$1;
(statearr_39507_39559[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (9))){
var inst_39366 = (state_39464[(8)]);
var state_39464__$1 = state_39464;
var statearr_39508_39560 = state_39464__$1;
(statearr_39508_39560[(2)] = inst_39366);

(statearr_39508_39560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (5))){
var state_39464__$1 = state_39464;
var statearr_39509_39561 = state_39464__$1;
(statearr_39509_39561[(2)] = true);

(statearr_39509_39561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (14))){
var state_39464__$1 = state_39464;
var statearr_39510_39562 = state_39464__$1;
(statearr_39510_39562[(2)] = false);

(statearr_39510_39562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (26))){
var inst_39424 = (state_39464[(11)]);
var inst_39431 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39424);
var state_39464__$1 = state_39464;
var statearr_39511_39563 = state_39464__$1;
(statearr_39511_39563[(2)] = inst_39431);

(statearr_39511_39563[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (16))){
var state_39464__$1 = state_39464;
var statearr_39512_39564 = state_39464__$1;
(statearr_39512_39564[(2)] = true);

(statearr_39512_39564[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (38))){
var inst_39454 = (state_39464[(2)]);
var state_39464__$1 = state_39464;
var statearr_39513_39565 = state_39464__$1;
(statearr_39513_39565[(2)] = inst_39454);

(statearr_39513_39565[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (30))){
var inst_39415 = (state_39464[(9)]);
var inst_39416 = (state_39464[(13)]);
var inst_39424 = (state_39464[(11)]);
var inst_39441 = cljs.core.empty_QMARK_.call(null,inst_39415);
var inst_39442 = inst_39416.call(null,inst_39424);
var inst_39443 = cljs.core.not.call(null,inst_39442);
var inst_39444 = (inst_39441) && (inst_39443);
var state_39464__$1 = state_39464;
var statearr_39514_39566 = state_39464__$1;
(statearr_39514_39566[(2)] = inst_39444);

(statearr_39514_39566[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (10))){
var inst_39366 = (state_39464[(8)]);
var inst_39387 = (state_39464[(2)]);
var inst_39388 = cljs.core.get.call(null,inst_39387,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39389 = cljs.core.get.call(null,inst_39387,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39390 = cljs.core.get.call(null,inst_39387,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39391 = inst_39366;
var state_39464__$1 = (function (){var statearr_39515 = state_39464;
(statearr_39515[(16)] = inst_39390);

(statearr_39515[(17)] = inst_39389);

(statearr_39515[(18)] = inst_39388);

(statearr_39515[(7)] = inst_39391);

return statearr_39515;
})();
var statearr_39516_39567 = state_39464__$1;
(statearr_39516_39567[(2)] = null);

(statearr_39516_39567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (18))){
var inst_39406 = (state_39464[(2)]);
var state_39464__$1 = state_39464;
var statearr_39517_39568 = state_39464__$1;
(statearr_39517_39568[(2)] = inst_39406);

(statearr_39517_39568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (37))){
var state_39464__$1 = state_39464;
var statearr_39518_39569 = state_39464__$1;
(statearr_39518_39569[(2)] = null);

(statearr_39518_39569[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (8))){
var inst_39366 = (state_39464[(8)]);
var inst_39384 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39366);
var state_39464__$1 = state_39464;
var statearr_39519_39570 = state_39464__$1;
(statearr_39519_39570[(2)] = inst_39384);

(statearr_39519_39570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38479__auto___39524,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38391__auto__,c__38479__auto___39524,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38392__auto__ = null;
var cljs$core$async$mix_$_state_machine__38392__auto____0 = (function (){
var statearr_39520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39520[(0)] = cljs$core$async$mix_$_state_machine__38392__auto__);

(statearr_39520[(1)] = (1));

return statearr_39520;
});
var cljs$core$async$mix_$_state_machine__38392__auto____1 = (function (state_39464){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_39464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e39521){if((e39521 instanceof Object)){
var ex__38395__auto__ = e39521;
var statearr_39522_39571 = state_39464;
(statearr_39522_39571[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39572 = state_39464;
state_39464 = G__39572;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38392__auto__ = function(state_39464){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38392__auto____1.call(this,state_39464);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38392__auto____0;
cljs$core$async$mix_$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38392__auto____1;
return cljs$core$async$mix_$_state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto___39524,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38481__auto__ = (function (){var statearr_39523 = f__38480__auto__.call(null);
(statearr_39523[(6)] = c__38479__auto___39524);

return statearr_39523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto___39524,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__33120__auto__ = (((p == null))?null:p);
var m__33121__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__33120__auto__)]);
if(!((m__33121__auto__ == null))){
return m__33121__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__33121__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__33121__auto____$1 == null))){
return m__33121__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__33120__auto__ = (((p == null))?null:p);
var m__33121__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__33120__auto__)]);
if(!((m__33121__auto__ == null))){
return m__33121__auto__.call(null,p,v,ch);
} else {
var m__33121__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__33121__auto____$1 == null))){
return m__33121__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__39574 = arguments.length;
switch (G__39574) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__33120__auto__ = (((p == null))?null:p);
var m__33121__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__33120__auto__)]);
if(!((m__33121__auto__ == null))){
return m__33121__auto__.call(null,p);
} else {
var m__33121__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__33121__auto____$1 == null))){
return m__33121__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__33120__auto__ = (((p == null))?null:p);
var m__33121__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__33120__auto__)]);
if(!((m__33121__auto__ == null))){
return m__33121__auto__.call(null,p,v);
} else {
var m__33121__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__33121__auto____$1 == null))){
return m__33121__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__39578 = arguments.length;
switch (G__39578) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__32437__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__32437__auto__)){
return or__32437__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__32437__auto__,mults){
return (function (p1__39576_SHARP_){
if(cljs.core.truth_(p1__39576_SHARP_.call(null,topic))){
return p1__39576_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39576_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__32437__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async39579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39579 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39580){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39580 = meta39580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39581,meta39580__$1){
var self__ = this;
var _39581__$1 = this;
return (new cljs.core.async.t_cljs$core$async39579(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39580__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39581){
var self__ = this;
var _39581__$1 = this;
return self__.meta39580;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39579.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39579.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39579.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39579.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39579.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39580","meta39580",2102501025,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39579";

cljs.core.async.t_cljs$core$async39579.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__33062__auto__,writer__33063__auto__,opt__33064__auto__){
return cljs.core._write.call(null,writer__33063__auto__,"cljs.core.async/t_cljs$core$async39579");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async39579 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39579(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39580){
return (new cljs.core.async.t_cljs$core$async39579(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39580));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39579(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38479__auto___39699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto___39699,mults,ensure_mult,p){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto___39699,mults,ensure_mult,p){
return (function (state_39653){
var state_val_39654 = (state_39653[(1)]);
if((state_val_39654 === (7))){
var inst_39649 = (state_39653[(2)]);
var state_39653__$1 = state_39653;
var statearr_39655_39700 = state_39653__$1;
(statearr_39655_39700[(2)] = inst_39649);

(statearr_39655_39700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (20))){
var state_39653__$1 = state_39653;
var statearr_39656_39701 = state_39653__$1;
(statearr_39656_39701[(2)] = null);

(statearr_39656_39701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (1))){
var state_39653__$1 = state_39653;
var statearr_39657_39702 = state_39653__$1;
(statearr_39657_39702[(2)] = null);

(statearr_39657_39702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (24))){
var inst_39632 = (state_39653[(7)]);
var inst_39641 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39632);
var state_39653__$1 = state_39653;
var statearr_39658_39703 = state_39653__$1;
(statearr_39658_39703[(2)] = inst_39641);

(statearr_39658_39703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (4))){
var inst_39584 = (state_39653[(8)]);
var inst_39584__$1 = (state_39653[(2)]);
var inst_39585 = (inst_39584__$1 == null);
var state_39653__$1 = (function (){var statearr_39659 = state_39653;
(statearr_39659[(8)] = inst_39584__$1);

return statearr_39659;
})();
if(cljs.core.truth_(inst_39585)){
var statearr_39660_39704 = state_39653__$1;
(statearr_39660_39704[(1)] = (5));

} else {
var statearr_39661_39705 = state_39653__$1;
(statearr_39661_39705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (15))){
var inst_39626 = (state_39653[(2)]);
var state_39653__$1 = state_39653;
var statearr_39662_39706 = state_39653__$1;
(statearr_39662_39706[(2)] = inst_39626);

(statearr_39662_39706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (21))){
var inst_39646 = (state_39653[(2)]);
var state_39653__$1 = (function (){var statearr_39663 = state_39653;
(statearr_39663[(9)] = inst_39646);

return statearr_39663;
})();
var statearr_39664_39707 = state_39653__$1;
(statearr_39664_39707[(2)] = null);

(statearr_39664_39707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (13))){
var inst_39608 = (state_39653[(10)]);
var inst_39610 = cljs.core.chunked_seq_QMARK_.call(null,inst_39608);
var state_39653__$1 = state_39653;
if(inst_39610){
var statearr_39665_39708 = state_39653__$1;
(statearr_39665_39708[(1)] = (16));

} else {
var statearr_39666_39709 = state_39653__$1;
(statearr_39666_39709[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (22))){
var inst_39638 = (state_39653[(2)]);
var state_39653__$1 = state_39653;
if(cljs.core.truth_(inst_39638)){
var statearr_39667_39710 = state_39653__$1;
(statearr_39667_39710[(1)] = (23));

} else {
var statearr_39668_39711 = state_39653__$1;
(statearr_39668_39711[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (6))){
var inst_39584 = (state_39653[(8)]);
var inst_39632 = (state_39653[(7)]);
var inst_39634 = (state_39653[(11)]);
var inst_39632__$1 = topic_fn.call(null,inst_39584);
var inst_39633 = cljs.core.deref.call(null,mults);
var inst_39634__$1 = cljs.core.get.call(null,inst_39633,inst_39632__$1);
var state_39653__$1 = (function (){var statearr_39669 = state_39653;
(statearr_39669[(7)] = inst_39632__$1);

(statearr_39669[(11)] = inst_39634__$1);

return statearr_39669;
})();
if(cljs.core.truth_(inst_39634__$1)){
var statearr_39670_39712 = state_39653__$1;
(statearr_39670_39712[(1)] = (19));

} else {
var statearr_39671_39713 = state_39653__$1;
(statearr_39671_39713[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (25))){
var inst_39643 = (state_39653[(2)]);
var state_39653__$1 = state_39653;
var statearr_39672_39714 = state_39653__$1;
(statearr_39672_39714[(2)] = inst_39643);

(statearr_39672_39714[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (17))){
var inst_39608 = (state_39653[(10)]);
var inst_39617 = cljs.core.first.call(null,inst_39608);
var inst_39618 = cljs.core.async.muxch_STAR_.call(null,inst_39617);
var inst_39619 = cljs.core.async.close_BANG_.call(null,inst_39618);
var inst_39620 = cljs.core.next.call(null,inst_39608);
var inst_39594 = inst_39620;
var inst_39595 = null;
var inst_39596 = (0);
var inst_39597 = (0);
var state_39653__$1 = (function (){var statearr_39673 = state_39653;
(statearr_39673[(12)] = inst_39619);

(statearr_39673[(13)] = inst_39597);

(statearr_39673[(14)] = inst_39594);

(statearr_39673[(15)] = inst_39595);

(statearr_39673[(16)] = inst_39596);

return statearr_39673;
})();
var statearr_39674_39715 = state_39653__$1;
(statearr_39674_39715[(2)] = null);

(statearr_39674_39715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (3))){
var inst_39651 = (state_39653[(2)]);
var state_39653__$1 = state_39653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39653__$1,inst_39651);
} else {
if((state_val_39654 === (12))){
var inst_39628 = (state_39653[(2)]);
var state_39653__$1 = state_39653;
var statearr_39675_39716 = state_39653__$1;
(statearr_39675_39716[(2)] = inst_39628);

(statearr_39675_39716[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (2))){
var state_39653__$1 = state_39653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39653__$1,(4),ch);
} else {
if((state_val_39654 === (23))){
var state_39653__$1 = state_39653;
var statearr_39676_39717 = state_39653__$1;
(statearr_39676_39717[(2)] = null);

(statearr_39676_39717[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (19))){
var inst_39584 = (state_39653[(8)]);
var inst_39634 = (state_39653[(11)]);
var inst_39636 = cljs.core.async.muxch_STAR_.call(null,inst_39634);
var state_39653__$1 = state_39653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39653__$1,(22),inst_39636,inst_39584);
} else {
if((state_val_39654 === (11))){
var inst_39594 = (state_39653[(14)]);
var inst_39608 = (state_39653[(10)]);
var inst_39608__$1 = cljs.core.seq.call(null,inst_39594);
var state_39653__$1 = (function (){var statearr_39677 = state_39653;
(statearr_39677[(10)] = inst_39608__$1);

return statearr_39677;
})();
if(inst_39608__$1){
var statearr_39678_39718 = state_39653__$1;
(statearr_39678_39718[(1)] = (13));

} else {
var statearr_39679_39719 = state_39653__$1;
(statearr_39679_39719[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (9))){
var inst_39630 = (state_39653[(2)]);
var state_39653__$1 = state_39653;
var statearr_39680_39720 = state_39653__$1;
(statearr_39680_39720[(2)] = inst_39630);

(statearr_39680_39720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (5))){
var inst_39591 = cljs.core.deref.call(null,mults);
var inst_39592 = cljs.core.vals.call(null,inst_39591);
var inst_39593 = cljs.core.seq.call(null,inst_39592);
var inst_39594 = inst_39593;
var inst_39595 = null;
var inst_39596 = (0);
var inst_39597 = (0);
var state_39653__$1 = (function (){var statearr_39681 = state_39653;
(statearr_39681[(13)] = inst_39597);

(statearr_39681[(14)] = inst_39594);

(statearr_39681[(15)] = inst_39595);

(statearr_39681[(16)] = inst_39596);

return statearr_39681;
})();
var statearr_39682_39721 = state_39653__$1;
(statearr_39682_39721[(2)] = null);

(statearr_39682_39721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (14))){
var state_39653__$1 = state_39653;
var statearr_39686_39722 = state_39653__$1;
(statearr_39686_39722[(2)] = null);

(statearr_39686_39722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (16))){
var inst_39608 = (state_39653[(10)]);
var inst_39612 = cljs.core.chunk_first.call(null,inst_39608);
var inst_39613 = cljs.core.chunk_rest.call(null,inst_39608);
var inst_39614 = cljs.core.count.call(null,inst_39612);
var inst_39594 = inst_39613;
var inst_39595 = inst_39612;
var inst_39596 = inst_39614;
var inst_39597 = (0);
var state_39653__$1 = (function (){var statearr_39687 = state_39653;
(statearr_39687[(13)] = inst_39597);

(statearr_39687[(14)] = inst_39594);

(statearr_39687[(15)] = inst_39595);

(statearr_39687[(16)] = inst_39596);

return statearr_39687;
})();
var statearr_39688_39723 = state_39653__$1;
(statearr_39688_39723[(2)] = null);

(statearr_39688_39723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (10))){
var inst_39597 = (state_39653[(13)]);
var inst_39594 = (state_39653[(14)]);
var inst_39595 = (state_39653[(15)]);
var inst_39596 = (state_39653[(16)]);
var inst_39602 = cljs.core._nth.call(null,inst_39595,inst_39597);
var inst_39603 = cljs.core.async.muxch_STAR_.call(null,inst_39602);
var inst_39604 = cljs.core.async.close_BANG_.call(null,inst_39603);
var inst_39605 = (inst_39597 + (1));
var tmp39683 = inst_39594;
var tmp39684 = inst_39595;
var tmp39685 = inst_39596;
var inst_39594__$1 = tmp39683;
var inst_39595__$1 = tmp39684;
var inst_39596__$1 = tmp39685;
var inst_39597__$1 = inst_39605;
var state_39653__$1 = (function (){var statearr_39689 = state_39653;
(statearr_39689[(13)] = inst_39597__$1);

(statearr_39689[(14)] = inst_39594__$1);

(statearr_39689[(17)] = inst_39604);

(statearr_39689[(15)] = inst_39595__$1);

(statearr_39689[(16)] = inst_39596__$1);

return statearr_39689;
})();
var statearr_39690_39724 = state_39653__$1;
(statearr_39690_39724[(2)] = null);

(statearr_39690_39724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (18))){
var inst_39623 = (state_39653[(2)]);
var state_39653__$1 = state_39653;
var statearr_39691_39725 = state_39653__$1;
(statearr_39691_39725[(2)] = inst_39623);

(statearr_39691_39725[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (8))){
var inst_39597 = (state_39653[(13)]);
var inst_39596 = (state_39653[(16)]);
var inst_39599 = (inst_39597 < inst_39596);
var inst_39600 = inst_39599;
var state_39653__$1 = state_39653;
if(cljs.core.truth_(inst_39600)){
var statearr_39692_39726 = state_39653__$1;
(statearr_39692_39726[(1)] = (10));

} else {
var statearr_39693_39727 = state_39653__$1;
(statearr_39693_39727[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38479__auto___39699,mults,ensure_mult,p))
;
return ((function (switch__38391__auto__,c__38479__auto___39699,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38392__auto__ = null;
var cljs$core$async$state_machine__38392__auto____0 = (function (){
var statearr_39694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39694[(0)] = cljs$core$async$state_machine__38392__auto__);

(statearr_39694[(1)] = (1));

return statearr_39694;
});
var cljs$core$async$state_machine__38392__auto____1 = (function (state_39653){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_39653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e39695){if((e39695 instanceof Object)){
var ex__38395__auto__ = e39695;
var statearr_39696_39728 = state_39653;
(statearr_39696_39728[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39729 = state_39653;
state_39653 = G__39729;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$state_machine__38392__auto__ = function(state_39653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38392__auto____1.call(this,state_39653);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38392__auto____0;
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38392__auto____1;
return cljs$core$async$state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto___39699,mults,ensure_mult,p))
})();
var state__38481__auto__ = (function (){var statearr_39697 = f__38480__auto__.call(null);
(statearr_39697[(6)] = c__38479__auto___39699);

return statearr_39697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto___39699,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39731 = arguments.length;
switch (G__39731) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39734 = arguments.length;
switch (G__39734) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__39737 = arguments.length;
switch (G__39737) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__38479__auto___39804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto___39804,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto___39804,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39776){
var state_val_39777 = (state_39776[(1)]);
if((state_val_39777 === (7))){
var state_39776__$1 = state_39776;
var statearr_39778_39805 = state_39776__$1;
(statearr_39778_39805[(2)] = null);

(statearr_39778_39805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39777 === (1))){
var state_39776__$1 = state_39776;
var statearr_39779_39806 = state_39776__$1;
(statearr_39779_39806[(2)] = null);

(statearr_39779_39806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39777 === (4))){
var inst_39740 = (state_39776[(7)]);
var inst_39742 = (inst_39740 < cnt);
var state_39776__$1 = state_39776;
if(cljs.core.truth_(inst_39742)){
var statearr_39780_39807 = state_39776__$1;
(statearr_39780_39807[(1)] = (6));

} else {
var statearr_39781_39808 = state_39776__$1;
(statearr_39781_39808[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39777 === (15))){
var inst_39772 = (state_39776[(2)]);
var state_39776__$1 = state_39776;
var statearr_39782_39809 = state_39776__$1;
(statearr_39782_39809[(2)] = inst_39772);

(statearr_39782_39809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39777 === (13))){
var inst_39765 = cljs.core.async.close_BANG_.call(null,out);
var state_39776__$1 = state_39776;
var statearr_39783_39810 = state_39776__$1;
(statearr_39783_39810[(2)] = inst_39765);

(statearr_39783_39810[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39777 === (6))){
var state_39776__$1 = state_39776;
var statearr_39784_39811 = state_39776__$1;
(statearr_39784_39811[(2)] = null);

(statearr_39784_39811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39777 === (3))){
var inst_39774 = (state_39776[(2)]);
var state_39776__$1 = state_39776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39776__$1,inst_39774);
} else {
if((state_val_39777 === (12))){
var inst_39762 = (state_39776[(8)]);
var inst_39762__$1 = (state_39776[(2)]);
var inst_39763 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39762__$1);
var state_39776__$1 = (function (){var statearr_39785 = state_39776;
(statearr_39785[(8)] = inst_39762__$1);

return statearr_39785;
})();
if(cljs.core.truth_(inst_39763)){
var statearr_39786_39812 = state_39776__$1;
(statearr_39786_39812[(1)] = (13));

} else {
var statearr_39787_39813 = state_39776__$1;
(statearr_39787_39813[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39777 === (2))){
var inst_39739 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39740 = (0);
var state_39776__$1 = (function (){var statearr_39788 = state_39776;
(statearr_39788[(7)] = inst_39740);

(statearr_39788[(9)] = inst_39739);

return statearr_39788;
})();
var statearr_39789_39814 = state_39776__$1;
(statearr_39789_39814[(2)] = null);

(statearr_39789_39814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39777 === (11))){
var inst_39740 = (state_39776[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39776,(10),Object,null,(9));
var inst_39749 = chs__$1.call(null,inst_39740);
var inst_39750 = done.call(null,inst_39740);
var inst_39751 = cljs.core.async.take_BANG_.call(null,inst_39749,inst_39750);
var state_39776__$1 = state_39776;
var statearr_39790_39815 = state_39776__$1;
(statearr_39790_39815[(2)] = inst_39751);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39776__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39777 === (9))){
var inst_39740 = (state_39776[(7)]);
var inst_39753 = (state_39776[(2)]);
var inst_39754 = (inst_39740 + (1));
var inst_39740__$1 = inst_39754;
var state_39776__$1 = (function (){var statearr_39791 = state_39776;
(statearr_39791[(7)] = inst_39740__$1);

(statearr_39791[(10)] = inst_39753);

return statearr_39791;
})();
var statearr_39792_39816 = state_39776__$1;
(statearr_39792_39816[(2)] = null);

(statearr_39792_39816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39777 === (5))){
var inst_39760 = (state_39776[(2)]);
var state_39776__$1 = (function (){var statearr_39793 = state_39776;
(statearr_39793[(11)] = inst_39760);

return statearr_39793;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39776__$1,(12),dchan);
} else {
if((state_val_39777 === (14))){
var inst_39762 = (state_39776[(8)]);
var inst_39767 = cljs.core.apply.call(null,f,inst_39762);
var state_39776__$1 = state_39776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39776__$1,(16),out,inst_39767);
} else {
if((state_val_39777 === (16))){
var inst_39769 = (state_39776[(2)]);
var state_39776__$1 = (function (){var statearr_39794 = state_39776;
(statearr_39794[(12)] = inst_39769);

return statearr_39794;
})();
var statearr_39795_39817 = state_39776__$1;
(statearr_39795_39817[(2)] = null);

(statearr_39795_39817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39777 === (10))){
var inst_39744 = (state_39776[(2)]);
var inst_39745 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39776__$1 = (function (){var statearr_39796 = state_39776;
(statearr_39796[(13)] = inst_39744);

return statearr_39796;
})();
var statearr_39797_39818 = state_39776__$1;
(statearr_39797_39818[(2)] = inst_39745);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39776__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39777 === (8))){
var inst_39758 = (state_39776[(2)]);
var state_39776__$1 = state_39776;
var statearr_39798_39819 = state_39776__$1;
(statearr_39798_39819[(2)] = inst_39758);

(statearr_39798_39819[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38479__auto___39804,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38391__auto__,c__38479__auto___39804,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38392__auto__ = null;
var cljs$core$async$state_machine__38392__auto____0 = (function (){
var statearr_39799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39799[(0)] = cljs$core$async$state_machine__38392__auto__);

(statearr_39799[(1)] = (1));

return statearr_39799;
});
var cljs$core$async$state_machine__38392__auto____1 = (function (state_39776){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_39776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e39800){if((e39800 instanceof Object)){
var ex__38395__auto__ = e39800;
var statearr_39801_39820 = state_39776;
(statearr_39801_39820[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39821 = state_39776;
state_39776 = G__39821;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$state_machine__38392__auto__ = function(state_39776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38392__auto____1.call(this,state_39776);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38392__auto____0;
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38392__auto____1;
return cljs$core$async$state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto___39804,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38481__auto__ = (function (){var statearr_39802 = f__38480__auto__.call(null);
(statearr_39802[(6)] = c__38479__auto___39804);

return statearr_39802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto___39804,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39824 = arguments.length;
switch (G__39824) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38479__auto___39878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto___39878,out){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto___39878,out){
return (function (state_39856){
var state_val_39857 = (state_39856[(1)]);
if((state_val_39857 === (7))){
var inst_39836 = (state_39856[(7)]);
var inst_39835 = (state_39856[(8)]);
var inst_39835__$1 = (state_39856[(2)]);
var inst_39836__$1 = cljs.core.nth.call(null,inst_39835__$1,(0),null);
var inst_39837 = cljs.core.nth.call(null,inst_39835__$1,(1),null);
var inst_39838 = (inst_39836__$1 == null);
var state_39856__$1 = (function (){var statearr_39858 = state_39856;
(statearr_39858[(7)] = inst_39836__$1);

(statearr_39858[(8)] = inst_39835__$1);

(statearr_39858[(9)] = inst_39837);

return statearr_39858;
})();
if(cljs.core.truth_(inst_39838)){
var statearr_39859_39879 = state_39856__$1;
(statearr_39859_39879[(1)] = (8));

} else {
var statearr_39860_39880 = state_39856__$1;
(statearr_39860_39880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39857 === (1))){
var inst_39825 = cljs.core.vec.call(null,chs);
var inst_39826 = inst_39825;
var state_39856__$1 = (function (){var statearr_39861 = state_39856;
(statearr_39861[(10)] = inst_39826);

return statearr_39861;
})();
var statearr_39862_39881 = state_39856__$1;
(statearr_39862_39881[(2)] = null);

(statearr_39862_39881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39857 === (4))){
var inst_39826 = (state_39856[(10)]);
var state_39856__$1 = state_39856;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39856__$1,(7),inst_39826);
} else {
if((state_val_39857 === (6))){
var inst_39852 = (state_39856[(2)]);
var state_39856__$1 = state_39856;
var statearr_39863_39882 = state_39856__$1;
(statearr_39863_39882[(2)] = inst_39852);

(statearr_39863_39882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39857 === (3))){
var inst_39854 = (state_39856[(2)]);
var state_39856__$1 = state_39856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39856__$1,inst_39854);
} else {
if((state_val_39857 === (2))){
var inst_39826 = (state_39856[(10)]);
var inst_39828 = cljs.core.count.call(null,inst_39826);
var inst_39829 = (inst_39828 > (0));
var state_39856__$1 = state_39856;
if(cljs.core.truth_(inst_39829)){
var statearr_39865_39883 = state_39856__$1;
(statearr_39865_39883[(1)] = (4));

} else {
var statearr_39866_39884 = state_39856__$1;
(statearr_39866_39884[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39857 === (11))){
var inst_39826 = (state_39856[(10)]);
var inst_39845 = (state_39856[(2)]);
var tmp39864 = inst_39826;
var inst_39826__$1 = tmp39864;
var state_39856__$1 = (function (){var statearr_39867 = state_39856;
(statearr_39867[(10)] = inst_39826__$1);

(statearr_39867[(11)] = inst_39845);

return statearr_39867;
})();
var statearr_39868_39885 = state_39856__$1;
(statearr_39868_39885[(2)] = null);

(statearr_39868_39885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39857 === (9))){
var inst_39836 = (state_39856[(7)]);
var state_39856__$1 = state_39856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39856__$1,(11),out,inst_39836);
} else {
if((state_val_39857 === (5))){
var inst_39850 = cljs.core.async.close_BANG_.call(null,out);
var state_39856__$1 = state_39856;
var statearr_39869_39886 = state_39856__$1;
(statearr_39869_39886[(2)] = inst_39850);

(statearr_39869_39886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39857 === (10))){
var inst_39848 = (state_39856[(2)]);
var state_39856__$1 = state_39856;
var statearr_39870_39887 = state_39856__$1;
(statearr_39870_39887[(2)] = inst_39848);

(statearr_39870_39887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39857 === (8))){
var inst_39826 = (state_39856[(10)]);
var inst_39836 = (state_39856[(7)]);
var inst_39835 = (state_39856[(8)]);
var inst_39837 = (state_39856[(9)]);
var inst_39840 = (function (){var cs = inst_39826;
var vec__39831 = inst_39835;
var v = inst_39836;
var c = inst_39837;
return ((function (cs,vec__39831,v,c,inst_39826,inst_39836,inst_39835,inst_39837,state_val_39857,c__38479__auto___39878,out){
return (function (p1__39822_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39822_SHARP_);
});
;})(cs,vec__39831,v,c,inst_39826,inst_39836,inst_39835,inst_39837,state_val_39857,c__38479__auto___39878,out))
})();
var inst_39841 = cljs.core.filterv.call(null,inst_39840,inst_39826);
var inst_39826__$1 = inst_39841;
var state_39856__$1 = (function (){var statearr_39871 = state_39856;
(statearr_39871[(10)] = inst_39826__$1);

return statearr_39871;
})();
var statearr_39872_39888 = state_39856__$1;
(statearr_39872_39888[(2)] = null);

(statearr_39872_39888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38479__auto___39878,out))
;
return ((function (switch__38391__auto__,c__38479__auto___39878,out){
return (function() {
var cljs$core$async$state_machine__38392__auto__ = null;
var cljs$core$async$state_machine__38392__auto____0 = (function (){
var statearr_39873 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39873[(0)] = cljs$core$async$state_machine__38392__auto__);

(statearr_39873[(1)] = (1));

return statearr_39873;
});
var cljs$core$async$state_machine__38392__auto____1 = (function (state_39856){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_39856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e39874){if((e39874 instanceof Object)){
var ex__38395__auto__ = e39874;
var statearr_39875_39889 = state_39856;
(statearr_39875_39889[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39890 = state_39856;
state_39856 = G__39890;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$state_machine__38392__auto__ = function(state_39856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38392__auto____1.call(this,state_39856);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38392__auto____0;
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38392__auto____1;
return cljs$core$async$state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto___39878,out))
})();
var state__38481__auto__ = (function (){var statearr_39876 = f__38480__auto__.call(null);
(statearr_39876[(6)] = c__38479__auto___39878);

return statearr_39876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto___39878,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__39892 = arguments.length;
switch (G__39892) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38479__auto___39937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto___39937,out){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto___39937,out){
return (function (state_39916){
var state_val_39917 = (state_39916[(1)]);
if((state_val_39917 === (7))){
var inst_39898 = (state_39916[(7)]);
var inst_39898__$1 = (state_39916[(2)]);
var inst_39899 = (inst_39898__$1 == null);
var inst_39900 = cljs.core.not.call(null,inst_39899);
var state_39916__$1 = (function (){var statearr_39918 = state_39916;
(statearr_39918[(7)] = inst_39898__$1);

return statearr_39918;
})();
if(inst_39900){
var statearr_39919_39938 = state_39916__$1;
(statearr_39919_39938[(1)] = (8));

} else {
var statearr_39920_39939 = state_39916__$1;
(statearr_39920_39939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39917 === (1))){
var inst_39893 = (0);
var state_39916__$1 = (function (){var statearr_39921 = state_39916;
(statearr_39921[(8)] = inst_39893);

return statearr_39921;
})();
var statearr_39922_39940 = state_39916__$1;
(statearr_39922_39940[(2)] = null);

(statearr_39922_39940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39917 === (4))){
var state_39916__$1 = state_39916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39916__$1,(7),ch);
} else {
if((state_val_39917 === (6))){
var inst_39911 = (state_39916[(2)]);
var state_39916__$1 = state_39916;
var statearr_39923_39941 = state_39916__$1;
(statearr_39923_39941[(2)] = inst_39911);

(statearr_39923_39941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39917 === (3))){
var inst_39913 = (state_39916[(2)]);
var inst_39914 = cljs.core.async.close_BANG_.call(null,out);
var state_39916__$1 = (function (){var statearr_39924 = state_39916;
(statearr_39924[(9)] = inst_39913);

return statearr_39924;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39916__$1,inst_39914);
} else {
if((state_val_39917 === (2))){
var inst_39893 = (state_39916[(8)]);
var inst_39895 = (inst_39893 < n);
var state_39916__$1 = state_39916;
if(cljs.core.truth_(inst_39895)){
var statearr_39925_39942 = state_39916__$1;
(statearr_39925_39942[(1)] = (4));

} else {
var statearr_39926_39943 = state_39916__$1;
(statearr_39926_39943[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39917 === (11))){
var inst_39893 = (state_39916[(8)]);
var inst_39903 = (state_39916[(2)]);
var inst_39904 = (inst_39893 + (1));
var inst_39893__$1 = inst_39904;
var state_39916__$1 = (function (){var statearr_39927 = state_39916;
(statearr_39927[(10)] = inst_39903);

(statearr_39927[(8)] = inst_39893__$1);

return statearr_39927;
})();
var statearr_39928_39944 = state_39916__$1;
(statearr_39928_39944[(2)] = null);

(statearr_39928_39944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39917 === (9))){
var state_39916__$1 = state_39916;
var statearr_39929_39945 = state_39916__$1;
(statearr_39929_39945[(2)] = null);

(statearr_39929_39945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39917 === (5))){
var state_39916__$1 = state_39916;
var statearr_39930_39946 = state_39916__$1;
(statearr_39930_39946[(2)] = null);

(statearr_39930_39946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39917 === (10))){
var inst_39908 = (state_39916[(2)]);
var state_39916__$1 = state_39916;
var statearr_39931_39947 = state_39916__$1;
(statearr_39931_39947[(2)] = inst_39908);

(statearr_39931_39947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39917 === (8))){
var inst_39898 = (state_39916[(7)]);
var state_39916__$1 = state_39916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39916__$1,(11),out,inst_39898);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38479__auto___39937,out))
;
return ((function (switch__38391__auto__,c__38479__auto___39937,out){
return (function() {
var cljs$core$async$state_machine__38392__auto__ = null;
var cljs$core$async$state_machine__38392__auto____0 = (function (){
var statearr_39932 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39932[(0)] = cljs$core$async$state_machine__38392__auto__);

(statearr_39932[(1)] = (1));

return statearr_39932;
});
var cljs$core$async$state_machine__38392__auto____1 = (function (state_39916){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_39916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e39933){if((e39933 instanceof Object)){
var ex__38395__auto__ = e39933;
var statearr_39934_39948 = state_39916;
(statearr_39934_39948[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39949 = state_39916;
state_39916 = G__39949;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$state_machine__38392__auto__ = function(state_39916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38392__auto____1.call(this,state_39916);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38392__auto____0;
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38392__auto____1;
return cljs$core$async$state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto___39937,out))
})();
var state__38481__auto__ = (function (){var statearr_39935 = f__38480__auto__.call(null);
(statearr_39935[(6)] = c__38479__auto___39937);

return statearr_39935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto___39937,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39951 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39951 = (function (f,ch,meta39952){
this.f = f;
this.ch = ch;
this.meta39952 = meta39952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39953,meta39952__$1){
var self__ = this;
var _39953__$1 = this;
return (new cljs.core.async.t_cljs$core$async39951(self__.f,self__.ch,meta39952__$1));
});

cljs.core.async.t_cljs$core$async39951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39953){
var self__ = this;
var _39953__$1 = this;
return self__.meta39952;
});

cljs.core.async.t_cljs$core$async39951.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39951.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39951.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39951.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39951.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39954 = (function (f,ch,meta39952,_,fn1,meta39955){
this.f = f;
this.ch = ch;
this.meta39952 = meta39952;
this._ = _;
this.fn1 = fn1;
this.meta39955 = meta39955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39956,meta39955__$1){
var self__ = this;
var _39956__$1 = this;
return (new cljs.core.async.t_cljs$core$async39954(self__.f,self__.ch,self__.meta39952,self__._,self__.fn1,meta39955__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39956){
var self__ = this;
var _39956__$1 = this;
return self__.meta39955;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39954.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39954.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39950_SHARP_){
return f1.call(null,(((p1__39950_SHARP_ == null))?null:self__.f.call(null,p1__39950_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39954.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39952","meta39952",-2118535376,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39951","cljs.core.async/t_cljs$core$async39951",1654457058,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39955","meta39955",-1988485841,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39954.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39954";

cljs.core.async.t_cljs$core$async39954.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__33062__auto__,writer__33063__auto__,opt__33064__auto__){
return cljs.core._write.call(null,writer__33063__auto__,"cljs.core.async/t_cljs$core$async39954");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39954 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39954(f__$1,ch__$1,meta39952__$1,___$2,fn1__$1,meta39955){
return (new cljs.core.async.t_cljs$core$async39954(f__$1,ch__$1,meta39952__$1,___$2,fn1__$1,meta39955));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39954(self__.f,self__.ch,self__.meta39952,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__32425__auto__ = ret;
if(cljs.core.truth_(and__32425__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__32425__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async39951.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39951.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39951.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39952","meta39952",-2118535376,null)], null);
});

cljs.core.async.t_cljs$core$async39951.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39951";

cljs.core.async.t_cljs$core$async39951.cljs$lang$ctorPrWriter = (function (this__33062__auto__,writer__33063__auto__,opt__33064__auto__){
return cljs.core._write.call(null,writer__33063__auto__,"cljs.core.async/t_cljs$core$async39951");
});

cljs.core.async.__GT_t_cljs$core$async39951 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39951(f__$1,ch__$1,meta39952){
return (new cljs.core.async.t_cljs$core$async39951(f__$1,ch__$1,meta39952));
});

}

return (new cljs.core.async.t_cljs$core$async39951(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39957 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39957 = (function (f,ch,meta39958){
this.f = f;
this.ch = ch;
this.meta39958 = meta39958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39959,meta39958__$1){
var self__ = this;
var _39959__$1 = this;
return (new cljs.core.async.t_cljs$core$async39957(self__.f,self__.ch,meta39958__$1));
});

cljs.core.async.t_cljs$core$async39957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39959){
var self__ = this;
var _39959__$1 = this;
return self__.meta39958;
});

cljs.core.async.t_cljs$core$async39957.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39957.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39957.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39957.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39957.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39957.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39958","meta39958",13341630,null)], null);
});

cljs.core.async.t_cljs$core$async39957.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39957";

cljs.core.async.t_cljs$core$async39957.cljs$lang$ctorPrWriter = (function (this__33062__auto__,writer__33063__auto__,opt__33064__auto__){
return cljs.core._write.call(null,writer__33063__auto__,"cljs.core.async/t_cljs$core$async39957");
});

cljs.core.async.__GT_t_cljs$core$async39957 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39957(f__$1,ch__$1,meta39958){
return (new cljs.core.async.t_cljs$core$async39957(f__$1,ch__$1,meta39958));
});

}

return (new cljs.core.async.t_cljs$core$async39957(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39960 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39960 = (function (p,ch,meta39961){
this.p = p;
this.ch = ch;
this.meta39961 = meta39961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39962,meta39961__$1){
var self__ = this;
var _39962__$1 = this;
return (new cljs.core.async.t_cljs$core$async39960(self__.p,self__.ch,meta39961__$1));
});

cljs.core.async.t_cljs$core$async39960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39962){
var self__ = this;
var _39962__$1 = this;
return self__.meta39961;
});

cljs.core.async.t_cljs$core$async39960.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39960.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39960.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39960.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39960.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39960.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39960.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39961","meta39961",-815367474,null)], null);
});

cljs.core.async.t_cljs$core$async39960.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39960";

cljs.core.async.t_cljs$core$async39960.cljs$lang$ctorPrWriter = (function (this__33062__auto__,writer__33063__auto__,opt__33064__auto__){
return cljs.core._write.call(null,writer__33063__auto__,"cljs.core.async/t_cljs$core$async39960");
});

cljs.core.async.__GT_t_cljs$core$async39960 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39960(p__$1,ch__$1,meta39961){
return (new cljs.core.async.t_cljs$core$async39960(p__$1,ch__$1,meta39961));
});

}

return (new cljs.core.async.t_cljs$core$async39960(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__39964 = arguments.length;
switch (G__39964) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38479__auto___40004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto___40004,out){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto___40004,out){
return (function (state_39985){
var state_val_39986 = (state_39985[(1)]);
if((state_val_39986 === (7))){
var inst_39981 = (state_39985[(2)]);
var state_39985__$1 = state_39985;
var statearr_39987_40005 = state_39985__$1;
(statearr_39987_40005[(2)] = inst_39981);

(statearr_39987_40005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39986 === (1))){
var state_39985__$1 = state_39985;
var statearr_39988_40006 = state_39985__$1;
(statearr_39988_40006[(2)] = null);

(statearr_39988_40006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39986 === (4))){
var inst_39967 = (state_39985[(7)]);
var inst_39967__$1 = (state_39985[(2)]);
var inst_39968 = (inst_39967__$1 == null);
var state_39985__$1 = (function (){var statearr_39989 = state_39985;
(statearr_39989[(7)] = inst_39967__$1);

return statearr_39989;
})();
if(cljs.core.truth_(inst_39968)){
var statearr_39990_40007 = state_39985__$1;
(statearr_39990_40007[(1)] = (5));

} else {
var statearr_39991_40008 = state_39985__$1;
(statearr_39991_40008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39986 === (6))){
var inst_39967 = (state_39985[(7)]);
var inst_39972 = p.call(null,inst_39967);
var state_39985__$1 = state_39985;
if(cljs.core.truth_(inst_39972)){
var statearr_39992_40009 = state_39985__$1;
(statearr_39992_40009[(1)] = (8));

} else {
var statearr_39993_40010 = state_39985__$1;
(statearr_39993_40010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39986 === (3))){
var inst_39983 = (state_39985[(2)]);
var state_39985__$1 = state_39985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39985__$1,inst_39983);
} else {
if((state_val_39986 === (2))){
var state_39985__$1 = state_39985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39985__$1,(4),ch);
} else {
if((state_val_39986 === (11))){
var inst_39975 = (state_39985[(2)]);
var state_39985__$1 = state_39985;
var statearr_39994_40011 = state_39985__$1;
(statearr_39994_40011[(2)] = inst_39975);

(statearr_39994_40011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39986 === (9))){
var state_39985__$1 = state_39985;
var statearr_39995_40012 = state_39985__$1;
(statearr_39995_40012[(2)] = null);

(statearr_39995_40012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39986 === (5))){
var inst_39970 = cljs.core.async.close_BANG_.call(null,out);
var state_39985__$1 = state_39985;
var statearr_39996_40013 = state_39985__$1;
(statearr_39996_40013[(2)] = inst_39970);

(statearr_39996_40013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39986 === (10))){
var inst_39978 = (state_39985[(2)]);
var state_39985__$1 = (function (){var statearr_39997 = state_39985;
(statearr_39997[(8)] = inst_39978);

return statearr_39997;
})();
var statearr_39998_40014 = state_39985__$1;
(statearr_39998_40014[(2)] = null);

(statearr_39998_40014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39986 === (8))){
var inst_39967 = (state_39985[(7)]);
var state_39985__$1 = state_39985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39985__$1,(11),out,inst_39967);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38479__auto___40004,out))
;
return ((function (switch__38391__auto__,c__38479__auto___40004,out){
return (function() {
var cljs$core$async$state_machine__38392__auto__ = null;
var cljs$core$async$state_machine__38392__auto____0 = (function (){
var statearr_39999 = [null,null,null,null,null,null,null,null,null];
(statearr_39999[(0)] = cljs$core$async$state_machine__38392__auto__);

(statearr_39999[(1)] = (1));

return statearr_39999;
});
var cljs$core$async$state_machine__38392__auto____1 = (function (state_39985){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_39985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e40000){if((e40000 instanceof Object)){
var ex__38395__auto__ = e40000;
var statearr_40001_40015 = state_39985;
(statearr_40001_40015[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40016 = state_39985;
state_39985 = G__40016;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$state_machine__38392__auto__ = function(state_39985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38392__auto____1.call(this,state_39985);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38392__auto____0;
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38392__auto____1;
return cljs$core$async$state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto___40004,out))
})();
var state__38481__auto__ = (function (){var statearr_40002 = f__38480__auto__.call(null);
(statearr_40002[(6)] = c__38479__auto___40004);

return statearr_40002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto___40004,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40018 = arguments.length;
switch (G__40018) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38479__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto__){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto__){
return (function (state_40081){
var state_val_40082 = (state_40081[(1)]);
if((state_val_40082 === (7))){
var inst_40077 = (state_40081[(2)]);
var state_40081__$1 = state_40081;
var statearr_40083_40121 = state_40081__$1;
(statearr_40083_40121[(2)] = inst_40077);

(statearr_40083_40121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (20))){
var inst_40047 = (state_40081[(7)]);
var inst_40058 = (state_40081[(2)]);
var inst_40059 = cljs.core.next.call(null,inst_40047);
var inst_40033 = inst_40059;
var inst_40034 = null;
var inst_40035 = (0);
var inst_40036 = (0);
var state_40081__$1 = (function (){var statearr_40084 = state_40081;
(statearr_40084[(8)] = inst_40035);

(statearr_40084[(9)] = inst_40033);

(statearr_40084[(10)] = inst_40058);

(statearr_40084[(11)] = inst_40034);

(statearr_40084[(12)] = inst_40036);

return statearr_40084;
})();
var statearr_40085_40122 = state_40081__$1;
(statearr_40085_40122[(2)] = null);

(statearr_40085_40122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (1))){
var state_40081__$1 = state_40081;
var statearr_40086_40123 = state_40081__$1;
(statearr_40086_40123[(2)] = null);

(statearr_40086_40123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (4))){
var inst_40022 = (state_40081[(13)]);
var inst_40022__$1 = (state_40081[(2)]);
var inst_40023 = (inst_40022__$1 == null);
var state_40081__$1 = (function (){var statearr_40087 = state_40081;
(statearr_40087[(13)] = inst_40022__$1);

return statearr_40087;
})();
if(cljs.core.truth_(inst_40023)){
var statearr_40088_40124 = state_40081__$1;
(statearr_40088_40124[(1)] = (5));

} else {
var statearr_40089_40125 = state_40081__$1;
(statearr_40089_40125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (15))){
var state_40081__$1 = state_40081;
var statearr_40093_40126 = state_40081__$1;
(statearr_40093_40126[(2)] = null);

(statearr_40093_40126[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (21))){
var state_40081__$1 = state_40081;
var statearr_40094_40127 = state_40081__$1;
(statearr_40094_40127[(2)] = null);

(statearr_40094_40127[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (13))){
var inst_40035 = (state_40081[(8)]);
var inst_40033 = (state_40081[(9)]);
var inst_40034 = (state_40081[(11)]);
var inst_40036 = (state_40081[(12)]);
var inst_40043 = (state_40081[(2)]);
var inst_40044 = (inst_40036 + (1));
var tmp40090 = inst_40035;
var tmp40091 = inst_40033;
var tmp40092 = inst_40034;
var inst_40033__$1 = tmp40091;
var inst_40034__$1 = tmp40092;
var inst_40035__$1 = tmp40090;
var inst_40036__$1 = inst_40044;
var state_40081__$1 = (function (){var statearr_40095 = state_40081;
(statearr_40095[(8)] = inst_40035__$1);

(statearr_40095[(9)] = inst_40033__$1);

(statearr_40095[(11)] = inst_40034__$1);

(statearr_40095[(12)] = inst_40036__$1);

(statearr_40095[(14)] = inst_40043);

return statearr_40095;
})();
var statearr_40096_40128 = state_40081__$1;
(statearr_40096_40128[(2)] = null);

(statearr_40096_40128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (22))){
var state_40081__$1 = state_40081;
var statearr_40097_40129 = state_40081__$1;
(statearr_40097_40129[(2)] = null);

(statearr_40097_40129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (6))){
var inst_40022 = (state_40081[(13)]);
var inst_40031 = f.call(null,inst_40022);
var inst_40032 = cljs.core.seq.call(null,inst_40031);
var inst_40033 = inst_40032;
var inst_40034 = null;
var inst_40035 = (0);
var inst_40036 = (0);
var state_40081__$1 = (function (){var statearr_40098 = state_40081;
(statearr_40098[(8)] = inst_40035);

(statearr_40098[(9)] = inst_40033);

(statearr_40098[(11)] = inst_40034);

(statearr_40098[(12)] = inst_40036);

return statearr_40098;
})();
var statearr_40099_40130 = state_40081__$1;
(statearr_40099_40130[(2)] = null);

(statearr_40099_40130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (17))){
var inst_40047 = (state_40081[(7)]);
var inst_40051 = cljs.core.chunk_first.call(null,inst_40047);
var inst_40052 = cljs.core.chunk_rest.call(null,inst_40047);
var inst_40053 = cljs.core.count.call(null,inst_40051);
var inst_40033 = inst_40052;
var inst_40034 = inst_40051;
var inst_40035 = inst_40053;
var inst_40036 = (0);
var state_40081__$1 = (function (){var statearr_40100 = state_40081;
(statearr_40100[(8)] = inst_40035);

(statearr_40100[(9)] = inst_40033);

(statearr_40100[(11)] = inst_40034);

(statearr_40100[(12)] = inst_40036);

return statearr_40100;
})();
var statearr_40101_40131 = state_40081__$1;
(statearr_40101_40131[(2)] = null);

(statearr_40101_40131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (3))){
var inst_40079 = (state_40081[(2)]);
var state_40081__$1 = state_40081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40081__$1,inst_40079);
} else {
if((state_val_40082 === (12))){
var inst_40067 = (state_40081[(2)]);
var state_40081__$1 = state_40081;
var statearr_40102_40132 = state_40081__$1;
(statearr_40102_40132[(2)] = inst_40067);

(statearr_40102_40132[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (2))){
var state_40081__$1 = state_40081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40081__$1,(4),in$);
} else {
if((state_val_40082 === (23))){
var inst_40075 = (state_40081[(2)]);
var state_40081__$1 = state_40081;
var statearr_40103_40133 = state_40081__$1;
(statearr_40103_40133[(2)] = inst_40075);

(statearr_40103_40133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (19))){
var inst_40062 = (state_40081[(2)]);
var state_40081__$1 = state_40081;
var statearr_40104_40134 = state_40081__$1;
(statearr_40104_40134[(2)] = inst_40062);

(statearr_40104_40134[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (11))){
var inst_40033 = (state_40081[(9)]);
var inst_40047 = (state_40081[(7)]);
var inst_40047__$1 = cljs.core.seq.call(null,inst_40033);
var state_40081__$1 = (function (){var statearr_40105 = state_40081;
(statearr_40105[(7)] = inst_40047__$1);

return statearr_40105;
})();
if(inst_40047__$1){
var statearr_40106_40135 = state_40081__$1;
(statearr_40106_40135[(1)] = (14));

} else {
var statearr_40107_40136 = state_40081__$1;
(statearr_40107_40136[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (9))){
var inst_40069 = (state_40081[(2)]);
var inst_40070 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40081__$1 = (function (){var statearr_40108 = state_40081;
(statearr_40108[(15)] = inst_40069);

return statearr_40108;
})();
if(cljs.core.truth_(inst_40070)){
var statearr_40109_40137 = state_40081__$1;
(statearr_40109_40137[(1)] = (21));

} else {
var statearr_40110_40138 = state_40081__$1;
(statearr_40110_40138[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (5))){
var inst_40025 = cljs.core.async.close_BANG_.call(null,out);
var state_40081__$1 = state_40081;
var statearr_40111_40139 = state_40081__$1;
(statearr_40111_40139[(2)] = inst_40025);

(statearr_40111_40139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (14))){
var inst_40047 = (state_40081[(7)]);
var inst_40049 = cljs.core.chunked_seq_QMARK_.call(null,inst_40047);
var state_40081__$1 = state_40081;
if(inst_40049){
var statearr_40112_40140 = state_40081__$1;
(statearr_40112_40140[(1)] = (17));

} else {
var statearr_40113_40141 = state_40081__$1;
(statearr_40113_40141[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (16))){
var inst_40065 = (state_40081[(2)]);
var state_40081__$1 = state_40081;
var statearr_40114_40142 = state_40081__$1;
(statearr_40114_40142[(2)] = inst_40065);

(statearr_40114_40142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (10))){
var inst_40034 = (state_40081[(11)]);
var inst_40036 = (state_40081[(12)]);
var inst_40041 = cljs.core._nth.call(null,inst_40034,inst_40036);
var state_40081__$1 = state_40081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40081__$1,(13),out,inst_40041);
} else {
if((state_val_40082 === (18))){
var inst_40047 = (state_40081[(7)]);
var inst_40056 = cljs.core.first.call(null,inst_40047);
var state_40081__$1 = state_40081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40081__$1,(20),out,inst_40056);
} else {
if((state_val_40082 === (8))){
var inst_40035 = (state_40081[(8)]);
var inst_40036 = (state_40081[(12)]);
var inst_40038 = (inst_40036 < inst_40035);
var inst_40039 = inst_40038;
var state_40081__$1 = state_40081;
if(cljs.core.truth_(inst_40039)){
var statearr_40115_40143 = state_40081__$1;
(statearr_40115_40143[(1)] = (10));

} else {
var statearr_40116_40144 = state_40081__$1;
(statearr_40116_40144[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38479__auto__))
;
return ((function (switch__38391__auto__,c__38479__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38392__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38392__auto____0 = (function (){
var statearr_40117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40117[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38392__auto__);

(statearr_40117[(1)] = (1));

return statearr_40117;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38392__auto____1 = (function (state_40081){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_40081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e40118){if((e40118 instanceof Object)){
var ex__38395__auto__ = e40118;
var statearr_40119_40145 = state_40081;
(statearr_40119_40145[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40146 = state_40081;
state_40081 = G__40146;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38392__auto__ = function(state_40081){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38392__auto____1.call(this,state_40081);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38392__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38392__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto__))
})();
var state__38481__auto__ = (function (){var statearr_40120 = f__38480__auto__.call(null);
(statearr_40120[(6)] = c__38479__auto__);

return statearr_40120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto__))
);

return c__38479__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40148 = arguments.length;
switch (G__40148) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__40151 = arguments.length;
switch (G__40151) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__40154 = arguments.length;
switch (G__40154) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38479__auto___40201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto___40201,out){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto___40201,out){
return (function (state_40178){
var state_val_40179 = (state_40178[(1)]);
if((state_val_40179 === (7))){
var inst_40173 = (state_40178[(2)]);
var state_40178__$1 = state_40178;
var statearr_40180_40202 = state_40178__$1;
(statearr_40180_40202[(2)] = inst_40173);

(statearr_40180_40202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40179 === (1))){
var inst_40155 = null;
var state_40178__$1 = (function (){var statearr_40181 = state_40178;
(statearr_40181[(7)] = inst_40155);

return statearr_40181;
})();
var statearr_40182_40203 = state_40178__$1;
(statearr_40182_40203[(2)] = null);

(statearr_40182_40203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40179 === (4))){
var inst_40158 = (state_40178[(8)]);
var inst_40158__$1 = (state_40178[(2)]);
var inst_40159 = (inst_40158__$1 == null);
var inst_40160 = cljs.core.not.call(null,inst_40159);
var state_40178__$1 = (function (){var statearr_40183 = state_40178;
(statearr_40183[(8)] = inst_40158__$1);

return statearr_40183;
})();
if(inst_40160){
var statearr_40184_40204 = state_40178__$1;
(statearr_40184_40204[(1)] = (5));

} else {
var statearr_40185_40205 = state_40178__$1;
(statearr_40185_40205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40179 === (6))){
var state_40178__$1 = state_40178;
var statearr_40186_40206 = state_40178__$1;
(statearr_40186_40206[(2)] = null);

(statearr_40186_40206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40179 === (3))){
var inst_40175 = (state_40178[(2)]);
var inst_40176 = cljs.core.async.close_BANG_.call(null,out);
var state_40178__$1 = (function (){var statearr_40187 = state_40178;
(statearr_40187[(9)] = inst_40175);

return statearr_40187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40178__$1,inst_40176);
} else {
if((state_val_40179 === (2))){
var state_40178__$1 = state_40178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40178__$1,(4),ch);
} else {
if((state_val_40179 === (11))){
var inst_40158 = (state_40178[(8)]);
var inst_40167 = (state_40178[(2)]);
var inst_40155 = inst_40158;
var state_40178__$1 = (function (){var statearr_40188 = state_40178;
(statearr_40188[(7)] = inst_40155);

(statearr_40188[(10)] = inst_40167);

return statearr_40188;
})();
var statearr_40189_40207 = state_40178__$1;
(statearr_40189_40207[(2)] = null);

(statearr_40189_40207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40179 === (9))){
var inst_40158 = (state_40178[(8)]);
var state_40178__$1 = state_40178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40178__$1,(11),out,inst_40158);
} else {
if((state_val_40179 === (5))){
var inst_40155 = (state_40178[(7)]);
var inst_40158 = (state_40178[(8)]);
var inst_40162 = cljs.core._EQ_.call(null,inst_40158,inst_40155);
var state_40178__$1 = state_40178;
if(inst_40162){
var statearr_40191_40208 = state_40178__$1;
(statearr_40191_40208[(1)] = (8));

} else {
var statearr_40192_40209 = state_40178__$1;
(statearr_40192_40209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40179 === (10))){
var inst_40170 = (state_40178[(2)]);
var state_40178__$1 = state_40178;
var statearr_40193_40210 = state_40178__$1;
(statearr_40193_40210[(2)] = inst_40170);

(statearr_40193_40210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40179 === (8))){
var inst_40155 = (state_40178[(7)]);
var tmp40190 = inst_40155;
var inst_40155__$1 = tmp40190;
var state_40178__$1 = (function (){var statearr_40194 = state_40178;
(statearr_40194[(7)] = inst_40155__$1);

return statearr_40194;
})();
var statearr_40195_40211 = state_40178__$1;
(statearr_40195_40211[(2)] = null);

(statearr_40195_40211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38479__auto___40201,out))
;
return ((function (switch__38391__auto__,c__38479__auto___40201,out){
return (function() {
var cljs$core$async$state_machine__38392__auto__ = null;
var cljs$core$async$state_machine__38392__auto____0 = (function (){
var statearr_40196 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40196[(0)] = cljs$core$async$state_machine__38392__auto__);

(statearr_40196[(1)] = (1));

return statearr_40196;
});
var cljs$core$async$state_machine__38392__auto____1 = (function (state_40178){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_40178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e40197){if((e40197 instanceof Object)){
var ex__38395__auto__ = e40197;
var statearr_40198_40212 = state_40178;
(statearr_40198_40212[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40213 = state_40178;
state_40178 = G__40213;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$state_machine__38392__auto__ = function(state_40178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38392__auto____1.call(this,state_40178);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38392__auto____0;
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38392__auto____1;
return cljs$core$async$state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto___40201,out))
})();
var state__38481__auto__ = (function (){var statearr_40199 = f__38480__auto__.call(null);
(statearr_40199[(6)] = c__38479__auto___40201);

return statearr_40199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto___40201,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40215 = arguments.length;
switch (G__40215) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38479__auto___40281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto___40281,out){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto___40281,out){
return (function (state_40253){
var state_val_40254 = (state_40253[(1)]);
if((state_val_40254 === (7))){
var inst_40249 = (state_40253[(2)]);
var state_40253__$1 = state_40253;
var statearr_40255_40282 = state_40253__$1;
(statearr_40255_40282[(2)] = inst_40249);

(statearr_40255_40282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40254 === (1))){
var inst_40216 = (new Array(n));
var inst_40217 = inst_40216;
var inst_40218 = (0);
var state_40253__$1 = (function (){var statearr_40256 = state_40253;
(statearr_40256[(7)] = inst_40218);

(statearr_40256[(8)] = inst_40217);

return statearr_40256;
})();
var statearr_40257_40283 = state_40253__$1;
(statearr_40257_40283[(2)] = null);

(statearr_40257_40283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40254 === (4))){
var inst_40221 = (state_40253[(9)]);
var inst_40221__$1 = (state_40253[(2)]);
var inst_40222 = (inst_40221__$1 == null);
var inst_40223 = cljs.core.not.call(null,inst_40222);
var state_40253__$1 = (function (){var statearr_40258 = state_40253;
(statearr_40258[(9)] = inst_40221__$1);

return statearr_40258;
})();
if(inst_40223){
var statearr_40259_40284 = state_40253__$1;
(statearr_40259_40284[(1)] = (5));

} else {
var statearr_40260_40285 = state_40253__$1;
(statearr_40260_40285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40254 === (15))){
var inst_40243 = (state_40253[(2)]);
var state_40253__$1 = state_40253;
var statearr_40261_40286 = state_40253__$1;
(statearr_40261_40286[(2)] = inst_40243);

(statearr_40261_40286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40254 === (13))){
var state_40253__$1 = state_40253;
var statearr_40262_40287 = state_40253__$1;
(statearr_40262_40287[(2)] = null);

(statearr_40262_40287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40254 === (6))){
var inst_40218 = (state_40253[(7)]);
var inst_40239 = (inst_40218 > (0));
var state_40253__$1 = state_40253;
if(cljs.core.truth_(inst_40239)){
var statearr_40263_40288 = state_40253__$1;
(statearr_40263_40288[(1)] = (12));

} else {
var statearr_40264_40289 = state_40253__$1;
(statearr_40264_40289[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40254 === (3))){
var inst_40251 = (state_40253[(2)]);
var state_40253__$1 = state_40253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40253__$1,inst_40251);
} else {
if((state_val_40254 === (12))){
var inst_40217 = (state_40253[(8)]);
var inst_40241 = cljs.core.vec.call(null,inst_40217);
var state_40253__$1 = state_40253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40253__$1,(15),out,inst_40241);
} else {
if((state_val_40254 === (2))){
var state_40253__$1 = state_40253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40253__$1,(4),ch);
} else {
if((state_val_40254 === (11))){
var inst_40233 = (state_40253[(2)]);
var inst_40234 = (new Array(n));
var inst_40217 = inst_40234;
var inst_40218 = (0);
var state_40253__$1 = (function (){var statearr_40265 = state_40253;
(statearr_40265[(10)] = inst_40233);

(statearr_40265[(7)] = inst_40218);

(statearr_40265[(8)] = inst_40217);

return statearr_40265;
})();
var statearr_40266_40290 = state_40253__$1;
(statearr_40266_40290[(2)] = null);

(statearr_40266_40290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40254 === (9))){
var inst_40217 = (state_40253[(8)]);
var inst_40231 = cljs.core.vec.call(null,inst_40217);
var state_40253__$1 = state_40253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40253__$1,(11),out,inst_40231);
} else {
if((state_val_40254 === (5))){
var inst_40221 = (state_40253[(9)]);
var inst_40218 = (state_40253[(7)]);
var inst_40226 = (state_40253[(11)]);
var inst_40217 = (state_40253[(8)]);
var inst_40225 = (inst_40217[inst_40218] = inst_40221);
var inst_40226__$1 = (inst_40218 + (1));
var inst_40227 = (inst_40226__$1 < n);
var state_40253__$1 = (function (){var statearr_40267 = state_40253;
(statearr_40267[(11)] = inst_40226__$1);

(statearr_40267[(12)] = inst_40225);

return statearr_40267;
})();
if(cljs.core.truth_(inst_40227)){
var statearr_40268_40291 = state_40253__$1;
(statearr_40268_40291[(1)] = (8));

} else {
var statearr_40269_40292 = state_40253__$1;
(statearr_40269_40292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40254 === (14))){
var inst_40246 = (state_40253[(2)]);
var inst_40247 = cljs.core.async.close_BANG_.call(null,out);
var state_40253__$1 = (function (){var statearr_40271 = state_40253;
(statearr_40271[(13)] = inst_40246);

return statearr_40271;
})();
var statearr_40272_40293 = state_40253__$1;
(statearr_40272_40293[(2)] = inst_40247);

(statearr_40272_40293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40254 === (10))){
var inst_40237 = (state_40253[(2)]);
var state_40253__$1 = state_40253;
var statearr_40273_40294 = state_40253__$1;
(statearr_40273_40294[(2)] = inst_40237);

(statearr_40273_40294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40254 === (8))){
var inst_40226 = (state_40253[(11)]);
var inst_40217 = (state_40253[(8)]);
var tmp40270 = inst_40217;
var inst_40217__$1 = tmp40270;
var inst_40218 = inst_40226;
var state_40253__$1 = (function (){var statearr_40274 = state_40253;
(statearr_40274[(7)] = inst_40218);

(statearr_40274[(8)] = inst_40217__$1);

return statearr_40274;
})();
var statearr_40275_40295 = state_40253__$1;
(statearr_40275_40295[(2)] = null);

(statearr_40275_40295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38479__auto___40281,out))
;
return ((function (switch__38391__auto__,c__38479__auto___40281,out){
return (function() {
var cljs$core$async$state_machine__38392__auto__ = null;
var cljs$core$async$state_machine__38392__auto____0 = (function (){
var statearr_40276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40276[(0)] = cljs$core$async$state_machine__38392__auto__);

(statearr_40276[(1)] = (1));

return statearr_40276;
});
var cljs$core$async$state_machine__38392__auto____1 = (function (state_40253){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_40253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e40277){if((e40277 instanceof Object)){
var ex__38395__auto__ = e40277;
var statearr_40278_40296 = state_40253;
(statearr_40278_40296[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40297 = state_40253;
state_40253 = G__40297;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$state_machine__38392__auto__ = function(state_40253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38392__auto____1.call(this,state_40253);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38392__auto____0;
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38392__auto____1;
return cljs$core$async$state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto___40281,out))
})();
var state__38481__auto__ = (function (){var statearr_40279 = f__38480__auto__.call(null);
(statearr_40279[(6)] = c__38479__auto___40281);

return statearr_40279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto___40281,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40299 = arguments.length;
switch (G__40299) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38479__auto___40369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38479__auto___40369,out){
return (function (){
var f__38480__auto__ = (function (){var switch__38391__auto__ = ((function (c__38479__auto___40369,out){
return (function (state_40341){
var state_val_40342 = (state_40341[(1)]);
if((state_val_40342 === (7))){
var inst_40337 = (state_40341[(2)]);
var state_40341__$1 = state_40341;
var statearr_40343_40370 = state_40341__$1;
(statearr_40343_40370[(2)] = inst_40337);

(statearr_40343_40370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40342 === (1))){
var inst_40300 = [];
var inst_40301 = inst_40300;
var inst_40302 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40341__$1 = (function (){var statearr_40344 = state_40341;
(statearr_40344[(7)] = inst_40302);

(statearr_40344[(8)] = inst_40301);

return statearr_40344;
})();
var statearr_40345_40371 = state_40341__$1;
(statearr_40345_40371[(2)] = null);

(statearr_40345_40371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40342 === (4))){
var inst_40305 = (state_40341[(9)]);
var inst_40305__$1 = (state_40341[(2)]);
var inst_40306 = (inst_40305__$1 == null);
var inst_40307 = cljs.core.not.call(null,inst_40306);
var state_40341__$1 = (function (){var statearr_40346 = state_40341;
(statearr_40346[(9)] = inst_40305__$1);

return statearr_40346;
})();
if(inst_40307){
var statearr_40347_40372 = state_40341__$1;
(statearr_40347_40372[(1)] = (5));

} else {
var statearr_40348_40373 = state_40341__$1;
(statearr_40348_40373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40342 === (15))){
var inst_40331 = (state_40341[(2)]);
var state_40341__$1 = state_40341;
var statearr_40349_40374 = state_40341__$1;
(statearr_40349_40374[(2)] = inst_40331);

(statearr_40349_40374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40342 === (13))){
var state_40341__$1 = state_40341;
var statearr_40350_40375 = state_40341__$1;
(statearr_40350_40375[(2)] = null);

(statearr_40350_40375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40342 === (6))){
var inst_40301 = (state_40341[(8)]);
var inst_40326 = inst_40301.length;
var inst_40327 = (inst_40326 > (0));
var state_40341__$1 = state_40341;
if(cljs.core.truth_(inst_40327)){
var statearr_40351_40376 = state_40341__$1;
(statearr_40351_40376[(1)] = (12));

} else {
var statearr_40352_40377 = state_40341__$1;
(statearr_40352_40377[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40342 === (3))){
var inst_40339 = (state_40341[(2)]);
var state_40341__$1 = state_40341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40341__$1,inst_40339);
} else {
if((state_val_40342 === (12))){
var inst_40301 = (state_40341[(8)]);
var inst_40329 = cljs.core.vec.call(null,inst_40301);
var state_40341__$1 = state_40341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40341__$1,(15),out,inst_40329);
} else {
if((state_val_40342 === (2))){
var state_40341__$1 = state_40341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40341__$1,(4),ch);
} else {
if((state_val_40342 === (11))){
var inst_40305 = (state_40341[(9)]);
var inst_40309 = (state_40341[(10)]);
var inst_40319 = (state_40341[(2)]);
var inst_40320 = [];
var inst_40321 = inst_40320.push(inst_40305);
var inst_40301 = inst_40320;
var inst_40302 = inst_40309;
var state_40341__$1 = (function (){var statearr_40353 = state_40341;
(statearr_40353[(11)] = inst_40321);

(statearr_40353[(7)] = inst_40302);

(statearr_40353[(12)] = inst_40319);

(statearr_40353[(8)] = inst_40301);

return statearr_40353;
})();
var statearr_40354_40378 = state_40341__$1;
(statearr_40354_40378[(2)] = null);

(statearr_40354_40378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40342 === (9))){
var inst_40301 = (state_40341[(8)]);
var inst_40317 = cljs.core.vec.call(null,inst_40301);
var state_40341__$1 = state_40341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40341__$1,(11),out,inst_40317);
} else {
if((state_val_40342 === (5))){
var inst_40305 = (state_40341[(9)]);
var inst_40309 = (state_40341[(10)]);
var inst_40302 = (state_40341[(7)]);
var inst_40309__$1 = f.call(null,inst_40305);
var inst_40310 = cljs.core._EQ_.call(null,inst_40309__$1,inst_40302);
var inst_40311 = cljs.core.keyword_identical_QMARK_.call(null,inst_40302,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40312 = (inst_40310) || (inst_40311);
var state_40341__$1 = (function (){var statearr_40355 = state_40341;
(statearr_40355[(10)] = inst_40309__$1);

return statearr_40355;
})();
if(cljs.core.truth_(inst_40312)){
var statearr_40356_40379 = state_40341__$1;
(statearr_40356_40379[(1)] = (8));

} else {
var statearr_40357_40380 = state_40341__$1;
(statearr_40357_40380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40342 === (14))){
var inst_40334 = (state_40341[(2)]);
var inst_40335 = cljs.core.async.close_BANG_.call(null,out);
var state_40341__$1 = (function (){var statearr_40359 = state_40341;
(statearr_40359[(13)] = inst_40334);

return statearr_40359;
})();
var statearr_40360_40381 = state_40341__$1;
(statearr_40360_40381[(2)] = inst_40335);

(statearr_40360_40381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40342 === (10))){
var inst_40324 = (state_40341[(2)]);
var state_40341__$1 = state_40341;
var statearr_40361_40382 = state_40341__$1;
(statearr_40361_40382[(2)] = inst_40324);

(statearr_40361_40382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40342 === (8))){
var inst_40305 = (state_40341[(9)]);
var inst_40309 = (state_40341[(10)]);
var inst_40301 = (state_40341[(8)]);
var inst_40314 = inst_40301.push(inst_40305);
var tmp40358 = inst_40301;
var inst_40301__$1 = tmp40358;
var inst_40302 = inst_40309;
var state_40341__$1 = (function (){var statearr_40362 = state_40341;
(statearr_40362[(7)] = inst_40302);

(statearr_40362[(14)] = inst_40314);

(statearr_40362[(8)] = inst_40301__$1);

return statearr_40362;
})();
var statearr_40363_40383 = state_40341__$1;
(statearr_40363_40383[(2)] = null);

(statearr_40363_40383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38479__auto___40369,out))
;
return ((function (switch__38391__auto__,c__38479__auto___40369,out){
return (function() {
var cljs$core$async$state_machine__38392__auto__ = null;
var cljs$core$async$state_machine__38392__auto____0 = (function (){
var statearr_40364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40364[(0)] = cljs$core$async$state_machine__38392__auto__);

(statearr_40364[(1)] = (1));

return statearr_40364;
});
var cljs$core$async$state_machine__38392__auto____1 = (function (state_40341){
while(true){
var ret_value__38393__auto__ = (function (){try{while(true){
var result__38394__auto__ = switch__38391__auto__.call(null,state_40341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38394__auto__;
}
break;
}
}catch (e40365){if((e40365 instanceof Object)){
var ex__38395__auto__ = e40365;
var statearr_40366_40384 = state_40341;
(statearr_40366_40384[(5)] = ex__38395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40385 = state_40341;
state_40341 = G__40385;
continue;
} else {
return ret_value__38393__auto__;
}
break;
}
});
cljs$core$async$state_machine__38392__auto__ = function(state_40341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38392__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38392__auto____1.call(this,state_40341);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38392__auto____0;
cljs$core$async$state_machine__38392__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38392__auto____1;
return cljs$core$async$state_machine__38392__auto__;
})()
;})(switch__38391__auto__,c__38479__auto___40369,out))
})();
var state__38481__auto__ = (function (){var statearr_40367 = f__38480__auto__.call(null);
(statearr_40367[(6)] = c__38479__auto___40369);

return statearr_40367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38481__auto__);
});})(c__38479__auto___40369,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1502190266101
