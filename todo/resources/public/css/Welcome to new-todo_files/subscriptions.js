// Compiled by ClojureScript 1.9.854 {}
goog.provide('new_todo.subscriptions');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"page","page",849072397),(function (db,_){
return new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"docs","docs",-1974280502),(function (db,_){
return new cljs.core.Keyword(null,"docs","docs",-1974280502).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"count","count",2139924085),(function (db,_){
var or__40192__auto__ = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__40192__auto__)){
return or__40192__auto__;
} else {
return (1);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"get-pinboard","get-pinboard",-903511389),(function (db,_){
var or__40192__auto__ = new cljs.core.Keyword(null,"pins","pins",1725193285).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__40192__auto__)){
return or__40192__auto__;
} else {
return (0);
}
}));

//# sourceMappingURL=subscriptions.js.map?rel=1502520519505
