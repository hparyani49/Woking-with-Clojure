// Compiled by ClojureScript 1.9.854 {}
goog.provide('new_todo.handlers');
goog.require('cljs.core');
goog.require('new_todo.db');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new_todo.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),(function (db,p__55293){
var vec__55294 = p__55293;
var _ = cljs.core.nth.call(null,vec__55294,(0),null);
var page = cljs.core.nth.call(null,vec__55294,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page","page",849072397),page);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-docs","set-docs",405672054),(function (db,p__55297){
var vec__55298 = p__55297;
var _ = cljs.core.nth.call(null,vec__55298,(0),null);
var docs = cljs.core.nth.call(null,vec__55298,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"docs","docs",-1974280502),docs);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-count","set-count",-686115399),(function (db,p__55301){
var vec__55302 = p__55301;
var _ = cljs.core.nth.call(null,vec__55302,(0),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-count","reset-count",-738707320),(function (db,p__55305){
var vec__55306 = p__55305;
var _ = cljs.core.nth.call(null,vec__55306,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"count","count",2139924085),(1));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-pinboard","set-pinboard",-1040674308),(function (db,p__55309){
var vec__55310 = p__55309;
var _ = cljs.core.nth.call(null,vec__55310,(0),null);
var response = cljs.core.nth.call(null,vec__55310,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pins","pins",1725193285),response);
}));

//# sourceMappingURL=handlers.js.map?rel=1502520424335
