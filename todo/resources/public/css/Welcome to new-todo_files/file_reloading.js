// Compiled by ClojureScript 1.9.854 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__40192__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__40192__auto__){
return or__40192__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__40192__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__40192__auto__)){
return or__40192__auto__;
} else {
var or__40192__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__40192__auto____$1)){
return or__40192__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__51388_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__51388_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__51389 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__51390 = null;
var count__51391 = (0);
var i__51392 = (0);
while(true){
if((i__51392 < count__51391)){
var n = cljs.core._nth.call(null,chunk__51390,i__51392);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51393 = seq__51389;
var G__51394 = chunk__51390;
var G__51395 = count__51391;
var G__51396 = (i__51392 + (1));
seq__51389 = G__51393;
chunk__51390 = G__51394;
count__51391 = G__51395;
i__51392 = G__51396;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51389);
if(temp__4657__auto__){
var seq__51389__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51389__$1)){
var c__41026__auto__ = cljs.core.chunk_first.call(null,seq__51389__$1);
var G__51397 = cljs.core.chunk_rest.call(null,seq__51389__$1);
var G__51398 = c__41026__auto__;
var G__51399 = cljs.core.count.call(null,c__41026__auto__);
var G__51400 = (0);
seq__51389 = G__51397;
chunk__51390 = G__51398;
count__51391 = G__51399;
i__51392 = G__51400;
continue;
} else {
var n = cljs.core.first.call(null,seq__51389__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51401 = cljs.core.next.call(null,seq__51389__$1);
var G__51402 = null;
var G__51403 = (0);
var G__51404 = (0);
seq__51389 = G__51401;
chunk__51390 = G__51402;
count__51391 = G__51403;
i__51392 = G__51404;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__51414_51422 = cljs.core.seq.call(null,deps);
var chunk__51415_51423 = null;
var count__51416_51424 = (0);
var i__51417_51425 = (0);
while(true){
if((i__51417_51425 < count__51416_51424)){
var dep_51426 = cljs.core._nth.call(null,chunk__51415_51423,i__51417_51425);
topo_sort_helper_STAR_.call(null,dep_51426,(depth + (1)),state);

var G__51427 = seq__51414_51422;
var G__51428 = chunk__51415_51423;
var G__51429 = count__51416_51424;
var G__51430 = (i__51417_51425 + (1));
seq__51414_51422 = G__51427;
chunk__51415_51423 = G__51428;
count__51416_51424 = G__51429;
i__51417_51425 = G__51430;
continue;
} else {
var temp__4657__auto___51431 = cljs.core.seq.call(null,seq__51414_51422);
if(temp__4657__auto___51431){
var seq__51414_51432__$1 = temp__4657__auto___51431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51414_51432__$1)){
var c__41026__auto___51433 = cljs.core.chunk_first.call(null,seq__51414_51432__$1);
var G__51434 = cljs.core.chunk_rest.call(null,seq__51414_51432__$1);
var G__51435 = c__41026__auto___51433;
var G__51436 = cljs.core.count.call(null,c__41026__auto___51433);
var G__51437 = (0);
seq__51414_51422 = G__51434;
chunk__51415_51423 = G__51435;
count__51416_51424 = G__51436;
i__51417_51425 = G__51437;
continue;
} else {
var dep_51438 = cljs.core.first.call(null,seq__51414_51432__$1);
topo_sort_helper_STAR_.call(null,dep_51438,(depth + (1)),state);

var G__51439 = cljs.core.next.call(null,seq__51414_51432__$1);
var G__51440 = null;
var G__51441 = (0);
var G__51442 = (0);
seq__51414_51422 = G__51439;
chunk__51415_51423 = G__51440;
count__51416_51424 = G__51441;
i__51417_51425 = G__51442;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__51418){
var vec__51419 = p__51418;
var seq__51420 = cljs.core.seq.call(null,vec__51419);
var first__51421 = cljs.core.first.call(null,seq__51420);
var seq__51420__$1 = cljs.core.next.call(null,seq__51420);
var x = first__51421;
var xs = seq__51420__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__51419,seq__51420,first__51421,seq__51420__$1,x,xs,get_deps__$1){
return (function (p1__51405_SHARP_){
return clojure.set.difference.call(null,p1__51405_SHARP_,x);
});})(vec__51419,seq__51420,first__51421,seq__51420__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__51443 = cljs.core.seq.call(null,provides);
var chunk__51444 = null;
var count__51445 = (0);
var i__51446 = (0);
while(true){
if((i__51446 < count__51445)){
var prov = cljs.core._nth.call(null,chunk__51444,i__51446);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51447_51455 = cljs.core.seq.call(null,requires);
var chunk__51448_51456 = null;
var count__51449_51457 = (0);
var i__51450_51458 = (0);
while(true){
if((i__51450_51458 < count__51449_51457)){
var req_51459 = cljs.core._nth.call(null,chunk__51448_51456,i__51450_51458);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51459,prov);

var G__51460 = seq__51447_51455;
var G__51461 = chunk__51448_51456;
var G__51462 = count__51449_51457;
var G__51463 = (i__51450_51458 + (1));
seq__51447_51455 = G__51460;
chunk__51448_51456 = G__51461;
count__51449_51457 = G__51462;
i__51450_51458 = G__51463;
continue;
} else {
var temp__4657__auto___51464 = cljs.core.seq.call(null,seq__51447_51455);
if(temp__4657__auto___51464){
var seq__51447_51465__$1 = temp__4657__auto___51464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51447_51465__$1)){
var c__41026__auto___51466 = cljs.core.chunk_first.call(null,seq__51447_51465__$1);
var G__51467 = cljs.core.chunk_rest.call(null,seq__51447_51465__$1);
var G__51468 = c__41026__auto___51466;
var G__51469 = cljs.core.count.call(null,c__41026__auto___51466);
var G__51470 = (0);
seq__51447_51455 = G__51467;
chunk__51448_51456 = G__51468;
count__51449_51457 = G__51469;
i__51450_51458 = G__51470;
continue;
} else {
var req_51471 = cljs.core.first.call(null,seq__51447_51465__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51471,prov);

var G__51472 = cljs.core.next.call(null,seq__51447_51465__$1);
var G__51473 = null;
var G__51474 = (0);
var G__51475 = (0);
seq__51447_51455 = G__51472;
chunk__51448_51456 = G__51473;
count__51449_51457 = G__51474;
i__51450_51458 = G__51475;
continue;
}
} else {
}
}
break;
}

var G__51476 = seq__51443;
var G__51477 = chunk__51444;
var G__51478 = count__51445;
var G__51479 = (i__51446 + (1));
seq__51443 = G__51476;
chunk__51444 = G__51477;
count__51445 = G__51478;
i__51446 = G__51479;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51443);
if(temp__4657__auto__){
var seq__51443__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51443__$1)){
var c__41026__auto__ = cljs.core.chunk_first.call(null,seq__51443__$1);
var G__51480 = cljs.core.chunk_rest.call(null,seq__51443__$1);
var G__51481 = c__41026__auto__;
var G__51482 = cljs.core.count.call(null,c__41026__auto__);
var G__51483 = (0);
seq__51443 = G__51480;
chunk__51444 = G__51481;
count__51445 = G__51482;
i__51446 = G__51483;
continue;
} else {
var prov = cljs.core.first.call(null,seq__51443__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51451_51484 = cljs.core.seq.call(null,requires);
var chunk__51452_51485 = null;
var count__51453_51486 = (0);
var i__51454_51487 = (0);
while(true){
if((i__51454_51487 < count__51453_51486)){
var req_51488 = cljs.core._nth.call(null,chunk__51452_51485,i__51454_51487);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51488,prov);

var G__51489 = seq__51451_51484;
var G__51490 = chunk__51452_51485;
var G__51491 = count__51453_51486;
var G__51492 = (i__51454_51487 + (1));
seq__51451_51484 = G__51489;
chunk__51452_51485 = G__51490;
count__51453_51486 = G__51491;
i__51454_51487 = G__51492;
continue;
} else {
var temp__4657__auto___51493__$1 = cljs.core.seq.call(null,seq__51451_51484);
if(temp__4657__auto___51493__$1){
var seq__51451_51494__$1 = temp__4657__auto___51493__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51451_51494__$1)){
var c__41026__auto___51495 = cljs.core.chunk_first.call(null,seq__51451_51494__$1);
var G__51496 = cljs.core.chunk_rest.call(null,seq__51451_51494__$1);
var G__51497 = c__41026__auto___51495;
var G__51498 = cljs.core.count.call(null,c__41026__auto___51495);
var G__51499 = (0);
seq__51451_51484 = G__51496;
chunk__51452_51485 = G__51497;
count__51453_51486 = G__51498;
i__51454_51487 = G__51499;
continue;
} else {
var req_51500 = cljs.core.first.call(null,seq__51451_51494__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51500,prov);

var G__51501 = cljs.core.next.call(null,seq__51451_51494__$1);
var G__51502 = null;
var G__51503 = (0);
var G__51504 = (0);
seq__51451_51484 = G__51501;
chunk__51452_51485 = G__51502;
count__51453_51486 = G__51503;
i__51454_51487 = G__51504;
continue;
}
} else {
}
}
break;
}

var G__51505 = cljs.core.next.call(null,seq__51443__$1);
var G__51506 = null;
var G__51507 = (0);
var G__51508 = (0);
seq__51443 = G__51505;
chunk__51444 = G__51506;
count__51445 = G__51507;
i__51446 = G__51508;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__51509_51513 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__51510_51514 = null;
var count__51511_51515 = (0);
var i__51512_51516 = (0);
while(true){
if((i__51512_51516 < count__51511_51515)){
var ns_51517 = cljs.core._nth.call(null,chunk__51510_51514,i__51512_51516);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51517);

var G__51518 = seq__51509_51513;
var G__51519 = chunk__51510_51514;
var G__51520 = count__51511_51515;
var G__51521 = (i__51512_51516 + (1));
seq__51509_51513 = G__51518;
chunk__51510_51514 = G__51519;
count__51511_51515 = G__51520;
i__51512_51516 = G__51521;
continue;
} else {
var temp__4657__auto___51522 = cljs.core.seq.call(null,seq__51509_51513);
if(temp__4657__auto___51522){
var seq__51509_51523__$1 = temp__4657__auto___51522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51509_51523__$1)){
var c__41026__auto___51524 = cljs.core.chunk_first.call(null,seq__51509_51523__$1);
var G__51525 = cljs.core.chunk_rest.call(null,seq__51509_51523__$1);
var G__51526 = c__41026__auto___51524;
var G__51527 = cljs.core.count.call(null,c__41026__auto___51524);
var G__51528 = (0);
seq__51509_51513 = G__51525;
chunk__51510_51514 = G__51526;
count__51511_51515 = G__51527;
i__51512_51516 = G__51528;
continue;
} else {
var ns_51529 = cljs.core.first.call(null,seq__51509_51523__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51529);

var G__51530 = cljs.core.next.call(null,seq__51509_51523__$1);
var G__51531 = null;
var G__51532 = (0);
var G__51533 = (0);
seq__51509_51513 = G__51530;
chunk__51510_51514 = G__51531;
count__51511_51515 = G__51532;
i__51512_51516 = G__51533;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__40192__auto__ = goog.require__;
if(cljs.core.truth_(or__40192__auto__)){
return or__40192__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__51534__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__51534 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51535__i = 0, G__51535__a = new Array(arguments.length -  0);
while (G__51535__i < G__51535__a.length) {G__51535__a[G__51535__i] = arguments[G__51535__i + 0]; ++G__51535__i;}
  args = new cljs.core.IndexedSeq(G__51535__a,0,null);
} 
return G__51534__delegate.call(this,args);};
G__51534.cljs$lang$maxFixedArity = 0;
G__51534.cljs$lang$applyTo = (function (arglist__51536){
var args = cljs.core.seq(arglist__51536);
return G__51534__delegate(args);
});
G__51534.cljs$core$IFn$_invoke$arity$variadic = G__51534__delegate;
return G__51534;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__51537 = cljs.core._EQ_;
var expr__51538 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__51537.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__51538))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__51537,expr__51538){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__51537,expr__51538))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__51537,expr__51538){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e51540){if((e51540 instanceof Error)){
var e = e51540;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51540;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__51537,expr__51538))
} else {
if(cljs.core.truth_(pred__51537.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__51538))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__51537.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__51538))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__51537.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__51538))){
return ((function (pred__51537,expr__51538){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e51541){if((e51541 instanceof Error)){
var e = e51541;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51541;

}
}})());
});
;})(pred__51537,expr__51538))
} else {
return ((function (pred__51537,expr__51538){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__51537,expr__51538))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__51542,callback){
var map__51543 = p__51542;
var map__51543__$1 = ((((!((map__51543 == null)))?((((map__51543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51543):map__51543);
var file_msg = map__51543__$1;
var request_url = cljs.core.get.call(null,map__51543__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__51543,map__51543__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__51543,map__51543__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__49012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49012__auto__){
return (function (){
var f__49013__auto__ = (function (){var switch__48924__auto__ = ((function (c__49012__auto__){
return (function (state_51567){
var state_val_51568 = (state_51567[(1)]);
if((state_val_51568 === (7))){
var inst_51563 = (state_51567[(2)]);
var state_51567__$1 = state_51567;
var statearr_51569_51586 = state_51567__$1;
(statearr_51569_51586[(2)] = inst_51563);

(statearr_51569_51586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51568 === (1))){
var state_51567__$1 = state_51567;
var statearr_51570_51587 = state_51567__$1;
(statearr_51570_51587[(2)] = null);

(statearr_51570_51587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51568 === (4))){
var inst_51547 = (state_51567[(7)]);
var inst_51547__$1 = (state_51567[(2)]);
var state_51567__$1 = (function (){var statearr_51571 = state_51567;
(statearr_51571[(7)] = inst_51547__$1);

return statearr_51571;
})();
if(cljs.core.truth_(inst_51547__$1)){
var statearr_51572_51588 = state_51567__$1;
(statearr_51572_51588[(1)] = (5));

} else {
var statearr_51573_51589 = state_51567__$1;
(statearr_51573_51589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51568 === (6))){
var state_51567__$1 = state_51567;
var statearr_51574_51590 = state_51567__$1;
(statearr_51574_51590[(2)] = null);

(statearr_51574_51590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51568 === (3))){
var inst_51565 = (state_51567[(2)]);
var state_51567__$1 = state_51567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51567__$1,inst_51565);
} else {
if((state_val_51568 === (2))){
var state_51567__$1 = state_51567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51567__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_51568 === (11))){
var inst_51559 = (state_51567[(2)]);
var state_51567__$1 = (function (){var statearr_51575 = state_51567;
(statearr_51575[(8)] = inst_51559);

return statearr_51575;
})();
var statearr_51576_51591 = state_51567__$1;
(statearr_51576_51591[(2)] = null);

(statearr_51576_51591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51568 === (9))){
var inst_51553 = (state_51567[(9)]);
var inst_51551 = (state_51567[(10)]);
var inst_51555 = inst_51553.call(null,inst_51551);
var state_51567__$1 = state_51567;
var statearr_51577_51592 = state_51567__$1;
(statearr_51577_51592[(2)] = inst_51555);

(statearr_51577_51592[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51568 === (5))){
var inst_51547 = (state_51567[(7)]);
var inst_51549 = figwheel.client.file_reloading.blocking_load.call(null,inst_51547);
var state_51567__$1 = state_51567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51567__$1,(8),inst_51549);
} else {
if((state_val_51568 === (10))){
var inst_51551 = (state_51567[(10)]);
var inst_51557 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_51551);
var state_51567__$1 = state_51567;
var statearr_51578_51593 = state_51567__$1;
(statearr_51578_51593[(2)] = inst_51557);

(statearr_51578_51593[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51568 === (8))){
var inst_51547 = (state_51567[(7)]);
var inst_51553 = (state_51567[(9)]);
var inst_51551 = (state_51567[(2)]);
var inst_51552 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_51553__$1 = cljs.core.get.call(null,inst_51552,inst_51547);
var state_51567__$1 = (function (){var statearr_51579 = state_51567;
(statearr_51579[(9)] = inst_51553__$1);

(statearr_51579[(10)] = inst_51551);

return statearr_51579;
})();
if(cljs.core.truth_(inst_51553__$1)){
var statearr_51580_51594 = state_51567__$1;
(statearr_51580_51594[(1)] = (9));

} else {
var statearr_51581_51595 = state_51567__$1;
(statearr_51581_51595[(1)] = (10));

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
});})(c__49012__auto__))
;
return ((function (switch__48924__auto__,c__49012__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__48925__auto__ = null;
var figwheel$client$file_reloading$state_machine__48925__auto____0 = (function (){
var statearr_51582 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51582[(0)] = figwheel$client$file_reloading$state_machine__48925__auto__);

(statearr_51582[(1)] = (1));

return statearr_51582;
});
var figwheel$client$file_reloading$state_machine__48925__auto____1 = (function (state_51567){
while(true){
var ret_value__48926__auto__ = (function (){try{while(true){
var result__48927__auto__ = switch__48924__auto__.call(null,state_51567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48927__auto__;
}
break;
}
}catch (e51583){if((e51583 instanceof Object)){
var ex__48928__auto__ = e51583;
var statearr_51584_51596 = state_51567;
(statearr_51584_51596[(5)] = ex__48928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51597 = state_51567;
state_51567 = G__51597;
continue;
} else {
return ret_value__48926__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__48925__auto__ = function(state_51567){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__48925__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__48925__auto____1.call(this,state_51567);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__48925__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__48925__auto____0;
figwheel$client$file_reloading$state_machine__48925__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__48925__auto____1;
return figwheel$client$file_reloading$state_machine__48925__auto__;
})()
;})(switch__48924__auto__,c__49012__auto__))
})();
var state__49014__auto__ = (function (){var statearr_51585 = f__49013__auto__.call(null);
(statearr_51585[(6)] = c__49012__auto__);

return statearr_51585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49014__auto__);
});})(c__49012__auto__))
);

return c__49012__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__51598,callback){
var map__51599 = p__51598;
var map__51599__$1 = ((((!((map__51599 == null)))?((((map__51599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51599):map__51599);
var file_msg = map__51599__$1;
var namespace = cljs.core.get.call(null,map__51599__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__51599,map__51599__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__51599,map__51599__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__51601){
var map__51602 = p__51601;
var map__51602__$1 = ((((!((map__51602 == null)))?((((map__51602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51602):map__51602);
var file_msg = map__51602__$1;
var namespace = cljs.core.get.call(null,map__51602__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__51604){
var map__51605 = p__51604;
var map__51605__$1 = ((((!((map__51605 == null)))?((((map__51605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51605):map__51605);
var file_msg = map__51605__$1;
var namespace = cljs.core.get.call(null,map__51605__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__40180__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__40180__auto__){
var or__40192__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__40192__auto__)){
return or__40192__auto__;
} else {
var or__40192__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__40192__auto____$1)){
return or__40192__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__40180__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__51607,callback){
var map__51608 = p__51607;
var map__51608__$1 = ((((!((map__51608 == null)))?((((map__51608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51608):map__51608);
var file_msg = map__51608__$1;
var request_url = cljs.core.get.call(null,map__51608__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__51608__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__49012__auto___51658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49012__auto___51658,out){
return (function (){
var f__49013__auto__ = (function (){var switch__48924__auto__ = ((function (c__49012__auto___51658,out){
return (function (state_51643){
var state_val_51644 = (state_51643[(1)]);
if((state_val_51644 === (1))){
var inst_51617 = cljs.core.seq.call(null,files);
var inst_51618 = cljs.core.first.call(null,inst_51617);
var inst_51619 = cljs.core.next.call(null,inst_51617);
var inst_51620 = files;
var state_51643__$1 = (function (){var statearr_51645 = state_51643;
(statearr_51645[(7)] = inst_51618);

(statearr_51645[(8)] = inst_51620);

(statearr_51645[(9)] = inst_51619);

return statearr_51645;
})();
var statearr_51646_51659 = state_51643__$1;
(statearr_51646_51659[(2)] = null);

(statearr_51646_51659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51644 === (2))){
var inst_51626 = (state_51643[(10)]);
var inst_51620 = (state_51643[(8)]);
var inst_51625 = cljs.core.seq.call(null,inst_51620);
var inst_51626__$1 = cljs.core.first.call(null,inst_51625);
var inst_51627 = cljs.core.next.call(null,inst_51625);
var inst_51628 = (inst_51626__$1 == null);
var inst_51629 = cljs.core.not.call(null,inst_51628);
var state_51643__$1 = (function (){var statearr_51647 = state_51643;
(statearr_51647[(11)] = inst_51627);

(statearr_51647[(10)] = inst_51626__$1);

return statearr_51647;
})();
if(inst_51629){
var statearr_51648_51660 = state_51643__$1;
(statearr_51648_51660[(1)] = (4));

} else {
var statearr_51649_51661 = state_51643__$1;
(statearr_51649_51661[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51644 === (3))){
var inst_51641 = (state_51643[(2)]);
var state_51643__$1 = state_51643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51643__$1,inst_51641);
} else {
if((state_val_51644 === (4))){
var inst_51626 = (state_51643[(10)]);
var inst_51631 = figwheel.client.file_reloading.reload_js_file.call(null,inst_51626);
var state_51643__$1 = state_51643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51643__$1,(7),inst_51631);
} else {
if((state_val_51644 === (5))){
var inst_51637 = cljs.core.async.close_BANG_.call(null,out);
var state_51643__$1 = state_51643;
var statearr_51650_51662 = state_51643__$1;
(statearr_51650_51662[(2)] = inst_51637);

(statearr_51650_51662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51644 === (6))){
var inst_51639 = (state_51643[(2)]);
var state_51643__$1 = state_51643;
var statearr_51651_51663 = state_51643__$1;
(statearr_51651_51663[(2)] = inst_51639);

(statearr_51651_51663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51644 === (7))){
var inst_51627 = (state_51643[(11)]);
var inst_51633 = (state_51643[(2)]);
var inst_51634 = cljs.core.async.put_BANG_.call(null,out,inst_51633);
var inst_51620 = inst_51627;
var state_51643__$1 = (function (){var statearr_51652 = state_51643;
(statearr_51652[(8)] = inst_51620);

(statearr_51652[(12)] = inst_51634);

return statearr_51652;
})();
var statearr_51653_51664 = state_51643__$1;
(statearr_51653_51664[(2)] = null);

(statearr_51653_51664[(1)] = (2));


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
});})(c__49012__auto___51658,out))
;
return ((function (switch__48924__auto__,c__49012__auto___51658,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48925__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48925__auto____0 = (function (){
var statearr_51654 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51654[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48925__auto__);

(statearr_51654[(1)] = (1));

return statearr_51654;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48925__auto____1 = (function (state_51643){
while(true){
var ret_value__48926__auto__ = (function (){try{while(true){
var result__48927__auto__ = switch__48924__auto__.call(null,state_51643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48927__auto__;
}
break;
}
}catch (e51655){if((e51655 instanceof Object)){
var ex__48928__auto__ = e51655;
var statearr_51656_51665 = state_51643;
(statearr_51656_51665[(5)] = ex__48928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51666 = state_51643;
state_51643 = G__51666;
continue;
} else {
return ret_value__48926__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48925__auto__ = function(state_51643){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48925__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48925__auto____1.call(this,state_51643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48925__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48925__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48925__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48925__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48925__auto__;
})()
;})(switch__48924__auto__,c__49012__auto___51658,out))
})();
var state__49014__auto__ = (function (){var statearr_51657 = f__49013__auto__.call(null);
(statearr_51657[(6)] = c__49012__auto___51658);

return statearr_51657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49014__auto__);
});})(c__49012__auto___51658,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__51667,opts){
var map__51668 = p__51667;
var map__51668__$1 = ((((!((map__51668 == null)))?((((map__51668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51668):map__51668);
var eval_body = cljs.core.get.call(null,map__51668__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__51668__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__40180__auto__ = eval_body;
if(cljs.core.truth_(and__40180__auto__)){
return typeof eval_body === 'string';
} else {
return and__40180__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e51670){var e = e51670;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__51671_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51671_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__51672){
var vec__51673 = p__51672;
var k = cljs.core.nth.call(null,vec__51673,(0),null);
var v = cljs.core.nth.call(null,vec__51673,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__51676){
var vec__51677 = p__51676;
var k = cljs.core.nth.call(null,vec__51677,(0),null);
var v = cljs.core.nth.call(null,vec__51677,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__51683,p__51684){
var map__51685 = p__51683;
var map__51685__$1 = ((((!((map__51685 == null)))?((((map__51685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51685):map__51685);
var opts = map__51685__$1;
var before_jsload = cljs.core.get.call(null,map__51685__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__51685__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__51685__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__51686 = p__51684;
var map__51686__$1 = ((((!((map__51686 == null)))?((((map__51686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51686):map__51686);
var msg = map__51686__$1;
var files = cljs.core.get.call(null,map__51686__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__51686__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__51686__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__49012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__49013__auto__ = (function (){var switch__48924__auto__ = ((function (c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_51840){
var state_val_51841 = (state_51840[(1)]);
if((state_val_51841 === (7))){
var inst_51702 = (state_51840[(7)]);
var inst_51700 = (state_51840[(8)]);
var inst_51701 = (state_51840[(9)]);
var inst_51703 = (state_51840[(10)]);
var inst_51708 = cljs.core._nth.call(null,inst_51701,inst_51703);
var inst_51709 = figwheel.client.file_reloading.eval_body.call(null,inst_51708,opts);
var inst_51710 = (inst_51703 + (1));
var tmp51842 = inst_51702;
var tmp51843 = inst_51700;
var tmp51844 = inst_51701;
var inst_51700__$1 = tmp51843;
var inst_51701__$1 = tmp51844;
var inst_51702__$1 = tmp51842;
var inst_51703__$1 = inst_51710;
var state_51840__$1 = (function (){var statearr_51845 = state_51840;
(statearr_51845[(11)] = inst_51709);

(statearr_51845[(7)] = inst_51702__$1);

(statearr_51845[(8)] = inst_51700__$1);

(statearr_51845[(9)] = inst_51701__$1);

(statearr_51845[(10)] = inst_51703__$1);

return statearr_51845;
})();
var statearr_51846_51929 = state_51840__$1;
(statearr_51846_51929[(2)] = null);

(statearr_51846_51929[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (20))){
var inst_51743 = (state_51840[(12)]);
var inst_51751 = figwheel.client.file_reloading.sort_files.call(null,inst_51743);
var state_51840__$1 = state_51840;
var statearr_51847_51930 = state_51840__$1;
(statearr_51847_51930[(2)] = inst_51751);

(statearr_51847_51930[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (27))){
var state_51840__$1 = state_51840;
var statearr_51848_51931 = state_51840__$1;
(statearr_51848_51931[(2)] = null);

(statearr_51848_51931[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (1))){
var inst_51692 = (state_51840[(13)]);
var inst_51689 = before_jsload.call(null,files);
var inst_51690 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_51691 = (function (){return ((function (inst_51692,inst_51689,inst_51690,state_val_51841,c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51680_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51680_SHARP_);
});
;})(inst_51692,inst_51689,inst_51690,state_val_51841,c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51692__$1 = cljs.core.filter.call(null,inst_51691,files);
var inst_51693 = cljs.core.not_empty.call(null,inst_51692__$1);
var state_51840__$1 = (function (){var statearr_51849 = state_51840;
(statearr_51849[(13)] = inst_51692__$1);

(statearr_51849[(14)] = inst_51689);

(statearr_51849[(15)] = inst_51690);

return statearr_51849;
})();
if(cljs.core.truth_(inst_51693)){
var statearr_51850_51932 = state_51840__$1;
(statearr_51850_51932[(1)] = (2));

} else {
var statearr_51851_51933 = state_51840__$1;
(statearr_51851_51933[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (24))){
var state_51840__$1 = state_51840;
var statearr_51852_51934 = state_51840__$1;
(statearr_51852_51934[(2)] = null);

(statearr_51852_51934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (39))){
var inst_51793 = (state_51840[(16)]);
var state_51840__$1 = state_51840;
var statearr_51853_51935 = state_51840__$1;
(statearr_51853_51935[(2)] = inst_51793);

(statearr_51853_51935[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (46))){
var inst_51835 = (state_51840[(2)]);
var state_51840__$1 = state_51840;
var statearr_51854_51936 = state_51840__$1;
(statearr_51854_51936[(2)] = inst_51835);

(statearr_51854_51936[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (4))){
var inst_51737 = (state_51840[(2)]);
var inst_51738 = cljs.core.List.EMPTY;
var inst_51739 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_51738);
var inst_51740 = (function (){return ((function (inst_51737,inst_51738,inst_51739,state_val_51841,c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51681_SHARP_){
var and__40180__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51681_SHARP_);
if(cljs.core.truth_(and__40180__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51681_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__51681_SHARP_)));
} else {
return and__40180__auto__;
}
});
;})(inst_51737,inst_51738,inst_51739,state_val_51841,c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51741 = cljs.core.filter.call(null,inst_51740,files);
var inst_51742 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_51743 = cljs.core.concat.call(null,inst_51741,inst_51742);
var state_51840__$1 = (function (){var statearr_51855 = state_51840;
(statearr_51855[(17)] = inst_51739);

(statearr_51855[(12)] = inst_51743);

(statearr_51855[(18)] = inst_51737);

return statearr_51855;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_51856_51937 = state_51840__$1;
(statearr_51856_51937[(1)] = (16));

} else {
var statearr_51857_51938 = state_51840__$1;
(statearr_51857_51938[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (15))){
var inst_51727 = (state_51840[(2)]);
var state_51840__$1 = state_51840;
var statearr_51858_51939 = state_51840__$1;
(statearr_51858_51939[(2)] = inst_51727);

(statearr_51858_51939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (21))){
var inst_51753 = (state_51840[(19)]);
var inst_51753__$1 = (state_51840[(2)]);
var inst_51754 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_51753__$1);
var state_51840__$1 = (function (){var statearr_51859 = state_51840;
(statearr_51859[(19)] = inst_51753__$1);

return statearr_51859;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51840__$1,(22),inst_51754);
} else {
if((state_val_51841 === (31))){
var inst_51838 = (state_51840[(2)]);
var state_51840__$1 = state_51840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51840__$1,inst_51838);
} else {
if((state_val_51841 === (32))){
var inst_51793 = (state_51840[(16)]);
var inst_51798 = inst_51793.cljs$lang$protocol_mask$partition0$;
var inst_51799 = (inst_51798 & (64));
var inst_51800 = inst_51793.cljs$core$ISeq$;
var inst_51801 = (cljs.core.PROTOCOL_SENTINEL === inst_51800);
var inst_51802 = (inst_51799) || (inst_51801);
var state_51840__$1 = state_51840;
if(cljs.core.truth_(inst_51802)){
var statearr_51860_51940 = state_51840__$1;
(statearr_51860_51940[(1)] = (35));

} else {
var statearr_51861_51941 = state_51840__$1;
(statearr_51861_51941[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (40))){
var inst_51815 = (state_51840[(20)]);
var inst_51814 = (state_51840[(2)]);
var inst_51815__$1 = cljs.core.get.call(null,inst_51814,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_51816 = cljs.core.get.call(null,inst_51814,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_51817 = cljs.core.not_empty.call(null,inst_51815__$1);
var state_51840__$1 = (function (){var statearr_51862 = state_51840;
(statearr_51862[(21)] = inst_51816);

(statearr_51862[(20)] = inst_51815__$1);

return statearr_51862;
})();
if(cljs.core.truth_(inst_51817)){
var statearr_51863_51942 = state_51840__$1;
(statearr_51863_51942[(1)] = (41));

} else {
var statearr_51864_51943 = state_51840__$1;
(statearr_51864_51943[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (33))){
var state_51840__$1 = state_51840;
var statearr_51865_51944 = state_51840__$1;
(statearr_51865_51944[(2)] = false);

(statearr_51865_51944[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (13))){
var inst_51713 = (state_51840[(22)]);
var inst_51717 = cljs.core.chunk_first.call(null,inst_51713);
var inst_51718 = cljs.core.chunk_rest.call(null,inst_51713);
var inst_51719 = cljs.core.count.call(null,inst_51717);
var inst_51700 = inst_51718;
var inst_51701 = inst_51717;
var inst_51702 = inst_51719;
var inst_51703 = (0);
var state_51840__$1 = (function (){var statearr_51866 = state_51840;
(statearr_51866[(7)] = inst_51702);

(statearr_51866[(8)] = inst_51700);

(statearr_51866[(9)] = inst_51701);

(statearr_51866[(10)] = inst_51703);

return statearr_51866;
})();
var statearr_51867_51945 = state_51840__$1;
(statearr_51867_51945[(2)] = null);

(statearr_51867_51945[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (22))){
var inst_51756 = (state_51840[(23)]);
var inst_51753 = (state_51840[(19)]);
var inst_51757 = (state_51840[(24)]);
var inst_51761 = (state_51840[(25)]);
var inst_51756__$1 = (state_51840[(2)]);
var inst_51757__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_51756__$1);
var inst_51758 = (function (){var all_files = inst_51753;
var res_SINGLEQUOTE_ = inst_51756__$1;
var res = inst_51757__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_51756,inst_51753,inst_51757,inst_51761,inst_51756__$1,inst_51757__$1,state_val_51841,c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51682_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__51682_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_51756,inst_51753,inst_51757,inst_51761,inst_51756__$1,inst_51757__$1,state_val_51841,c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51759 = cljs.core.filter.call(null,inst_51758,inst_51756__$1);
var inst_51760 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_51761__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_51760);
var inst_51762 = cljs.core.not_empty.call(null,inst_51761__$1);
var state_51840__$1 = (function (){var statearr_51868 = state_51840;
(statearr_51868[(23)] = inst_51756__$1);

(statearr_51868[(24)] = inst_51757__$1);

(statearr_51868[(25)] = inst_51761__$1);

(statearr_51868[(26)] = inst_51759);

return statearr_51868;
})();
if(cljs.core.truth_(inst_51762)){
var statearr_51869_51946 = state_51840__$1;
(statearr_51869_51946[(1)] = (23));

} else {
var statearr_51870_51947 = state_51840__$1;
(statearr_51870_51947[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (36))){
var state_51840__$1 = state_51840;
var statearr_51871_51948 = state_51840__$1;
(statearr_51871_51948[(2)] = false);

(statearr_51871_51948[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (41))){
var inst_51815 = (state_51840[(20)]);
var inst_51819 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_51820 = cljs.core.map.call(null,inst_51819,inst_51815);
var inst_51821 = cljs.core.pr_str.call(null,inst_51820);
var inst_51822 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51821)].join('');
var inst_51823 = figwheel.client.utils.log.call(null,inst_51822);
var state_51840__$1 = state_51840;
var statearr_51872_51949 = state_51840__$1;
(statearr_51872_51949[(2)] = inst_51823);

(statearr_51872_51949[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (43))){
var inst_51816 = (state_51840[(21)]);
var inst_51826 = (state_51840[(2)]);
var inst_51827 = cljs.core.not_empty.call(null,inst_51816);
var state_51840__$1 = (function (){var statearr_51873 = state_51840;
(statearr_51873[(27)] = inst_51826);

return statearr_51873;
})();
if(cljs.core.truth_(inst_51827)){
var statearr_51874_51950 = state_51840__$1;
(statearr_51874_51950[(1)] = (44));

} else {
var statearr_51875_51951 = state_51840__$1;
(statearr_51875_51951[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (29))){
var inst_51756 = (state_51840[(23)]);
var inst_51753 = (state_51840[(19)]);
var inst_51757 = (state_51840[(24)]);
var inst_51761 = (state_51840[(25)]);
var inst_51793 = (state_51840[(16)]);
var inst_51759 = (state_51840[(26)]);
var inst_51789 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_51792 = (function (){var all_files = inst_51753;
var res_SINGLEQUOTE_ = inst_51756;
var res = inst_51757;
var files_not_loaded = inst_51759;
var dependencies_that_loaded = inst_51761;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51756,inst_51753,inst_51757,inst_51761,inst_51793,inst_51759,inst_51789,state_val_51841,c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__51791){
var map__51876 = p__51791;
var map__51876__$1 = ((((!((map__51876 == null)))?((((map__51876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51876):map__51876);
var namespace = cljs.core.get.call(null,map__51876__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51756,inst_51753,inst_51757,inst_51761,inst_51793,inst_51759,inst_51789,state_val_51841,c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51793__$1 = cljs.core.group_by.call(null,inst_51792,inst_51759);
var inst_51795 = (inst_51793__$1 == null);
var inst_51796 = cljs.core.not.call(null,inst_51795);
var state_51840__$1 = (function (){var statearr_51878 = state_51840;
(statearr_51878[(16)] = inst_51793__$1);

(statearr_51878[(28)] = inst_51789);

return statearr_51878;
})();
if(inst_51796){
var statearr_51879_51952 = state_51840__$1;
(statearr_51879_51952[(1)] = (32));

} else {
var statearr_51880_51953 = state_51840__$1;
(statearr_51880_51953[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (44))){
var inst_51816 = (state_51840[(21)]);
var inst_51829 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51816);
var inst_51830 = cljs.core.pr_str.call(null,inst_51829);
var inst_51831 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51830)].join('');
var inst_51832 = figwheel.client.utils.log.call(null,inst_51831);
var state_51840__$1 = state_51840;
var statearr_51881_51954 = state_51840__$1;
(statearr_51881_51954[(2)] = inst_51832);

(statearr_51881_51954[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (6))){
var inst_51734 = (state_51840[(2)]);
var state_51840__$1 = state_51840;
var statearr_51882_51955 = state_51840__$1;
(statearr_51882_51955[(2)] = inst_51734);

(statearr_51882_51955[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (28))){
var inst_51759 = (state_51840[(26)]);
var inst_51786 = (state_51840[(2)]);
var inst_51787 = cljs.core.not_empty.call(null,inst_51759);
var state_51840__$1 = (function (){var statearr_51883 = state_51840;
(statearr_51883[(29)] = inst_51786);

return statearr_51883;
})();
if(cljs.core.truth_(inst_51787)){
var statearr_51884_51956 = state_51840__$1;
(statearr_51884_51956[(1)] = (29));

} else {
var statearr_51885_51957 = state_51840__$1;
(statearr_51885_51957[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (25))){
var inst_51757 = (state_51840[(24)]);
var inst_51773 = (state_51840[(2)]);
var inst_51774 = cljs.core.not_empty.call(null,inst_51757);
var state_51840__$1 = (function (){var statearr_51886 = state_51840;
(statearr_51886[(30)] = inst_51773);

return statearr_51886;
})();
if(cljs.core.truth_(inst_51774)){
var statearr_51887_51958 = state_51840__$1;
(statearr_51887_51958[(1)] = (26));

} else {
var statearr_51888_51959 = state_51840__$1;
(statearr_51888_51959[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (34))){
var inst_51809 = (state_51840[(2)]);
var state_51840__$1 = state_51840;
if(cljs.core.truth_(inst_51809)){
var statearr_51889_51960 = state_51840__$1;
(statearr_51889_51960[(1)] = (38));

} else {
var statearr_51890_51961 = state_51840__$1;
(statearr_51890_51961[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (17))){
var state_51840__$1 = state_51840;
var statearr_51891_51962 = state_51840__$1;
(statearr_51891_51962[(2)] = recompile_dependents);

(statearr_51891_51962[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (3))){
var state_51840__$1 = state_51840;
var statearr_51892_51963 = state_51840__$1;
(statearr_51892_51963[(2)] = null);

(statearr_51892_51963[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (12))){
var inst_51730 = (state_51840[(2)]);
var state_51840__$1 = state_51840;
var statearr_51893_51964 = state_51840__$1;
(statearr_51893_51964[(2)] = inst_51730);

(statearr_51893_51964[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (2))){
var inst_51692 = (state_51840[(13)]);
var inst_51699 = cljs.core.seq.call(null,inst_51692);
var inst_51700 = inst_51699;
var inst_51701 = null;
var inst_51702 = (0);
var inst_51703 = (0);
var state_51840__$1 = (function (){var statearr_51894 = state_51840;
(statearr_51894[(7)] = inst_51702);

(statearr_51894[(8)] = inst_51700);

(statearr_51894[(9)] = inst_51701);

(statearr_51894[(10)] = inst_51703);

return statearr_51894;
})();
var statearr_51895_51965 = state_51840__$1;
(statearr_51895_51965[(2)] = null);

(statearr_51895_51965[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (23))){
var inst_51756 = (state_51840[(23)]);
var inst_51753 = (state_51840[(19)]);
var inst_51757 = (state_51840[(24)]);
var inst_51761 = (state_51840[(25)]);
var inst_51759 = (state_51840[(26)]);
var inst_51764 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_51766 = (function (){var all_files = inst_51753;
var res_SINGLEQUOTE_ = inst_51756;
var res = inst_51757;
var files_not_loaded = inst_51759;
var dependencies_that_loaded = inst_51761;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51756,inst_51753,inst_51757,inst_51761,inst_51759,inst_51764,state_val_51841,c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__51765){
var map__51896 = p__51765;
var map__51896__$1 = ((((!((map__51896 == null)))?((((map__51896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51896):map__51896);
var request_url = cljs.core.get.call(null,map__51896__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51756,inst_51753,inst_51757,inst_51761,inst_51759,inst_51764,state_val_51841,c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51767 = cljs.core.reverse.call(null,inst_51761);
var inst_51768 = cljs.core.map.call(null,inst_51766,inst_51767);
var inst_51769 = cljs.core.pr_str.call(null,inst_51768);
var inst_51770 = figwheel.client.utils.log.call(null,inst_51769);
var state_51840__$1 = (function (){var statearr_51898 = state_51840;
(statearr_51898[(31)] = inst_51764);

return statearr_51898;
})();
var statearr_51899_51966 = state_51840__$1;
(statearr_51899_51966[(2)] = inst_51770);

(statearr_51899_51966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (35))){
var state_51840__$1 = state_51840;
var statearr_51900_51967 = state_51840__$1;
(statearr_51900_51967[(2)] = true);

(statearr_51900_51967[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (19))){
var inst_51743 = (state_51840[(12)]);
var inst_51749 = figwheel.client.file_reloading.expand_files.call(null,inst_51743);
var state_51840__$1 = state_51840;
var statearr_51901_51968 = state_51840__$1;
(statearr_51901_51968[(2)] = inst_51749);

(statearr_51901_51968[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (11))){
var state_51840__$1 = state_51840;
var statearr_51902_51969 = state_51840__$1;
(statearr_51902_51969[(2)] = null);

(statearr_51902_51969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (9))){
var inst_51732 = (state_51840[(2)]);
var state_51840__$1 = state_51840;
var statearr_51903_51970 = state_51840__$1;
(statearr_51903_51970[(2)] = inst_51732);

(statearr_51903_51970[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (5))){
var inst_51702 = (state_51840[(7)]);
var inst_51703 = (state_51840[(10)]);
var inst_51705 = (inst_51703 < inst_51702);
var inst_51706 = inst_51705;
var state_51840__$1 = state_51840;
if(cljs.core.truth_(inst_51706)){
var statearr_51904_51971 = state_51840__$1;
(statearr_51904_51971[(1)] = (7));

} else {
var statearr_51905_51972 = state_51840__$1;
(statearr_51905_51972[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (14))){
var inst_51713 = (state_51840[(22)]);
var inst_51722 = cljs.core.first.call(null,inst_51713);
var inst_51723 = figwheel.client.file_reloading.eval_body.call(null,inst_51722,opts);
var inst_51724 = cljs.core.next.call(null,inst_51713);
var inst_51700 = inst_51724;
var inst_51701 = null;
var inst_51702 = (0);
var inst_51703 = (0);
var state_51840__$1 = (function (){var statearr_51906 = state_51840;
(statearr_51906[(7)] = inst_51702);

(statearr_51906[(32)] = inst_51723);

(statearr_51906[(8)] = inst_51700);

(statearr_51906[(9)] = inst_51701);

(statearr_51906[(10)] = inst_51703);

return statearr_51906;
})();
var statearr_51907_51973 = state_51840__$1;
(statearr_51907_51973[(2)] = null);

(statearr_51907_51973[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (45))){
var state_51840__$1 = state_51840;
var statearr_51908_51974 = state_51840__$1;
(statearr_51908_51974[(2)] = null);

(statearr_51908_51974[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (26))){
var inst_51756 = (state_51840[(23)]);
var inst_51753 = (state_51840[(19)]);
var inst_51757 = (state_51840[(24)]);
var inst_51761 = (state_51840[(25)]);
var inst_51759 = (state_51840[(26)]);
var inst_51776 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_51778 = (function (){var all_files = inst_51753;
var res_SINGLEQUOTE_ = inst_51756;
var res = inst_51757;
var files_not_loaded = inst_51759;
var dependencies_that_loaded = inst_51761;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51756,inst_51753,inst_51757,inst_51761,inst_51759,inst_51776,state_val_51841,c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__51777){
var map__51909 = p__51777;
var map__51909__$1 = ((((!((map__51909 == null)))?((((map__51909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51909):map__51909);
var namespace = cljs.core.get.call(null,map__51909__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__51909__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51756,inst_51753,inst_51757,inst_51761,inst_51759,inst_51776,state_val_51841,c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51779 = cljs.core.map.call(null,inst_51778,inst_51757);
var inst_51780 = cljs.core.pr_str.call(null,inst_51779);
var inst_51781 = figwheel.client.utils.log.call(null,inst_51780);
var inst_51782 = (function (){var all_files = inst_51753;
var res_SINGLEQUOTE_ = inst_51756;
var res = inst_51757;
var files_not_loaded = inst_51759;
var dependencies_that_loaded = inst_51761;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51756,inst_51753,inst_51757,inst_51761,inst_51759,inst_51776,inst_51778,inst_51779,inst_51780,inst_51781,state_val_51841,c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51756,inst_51753,inst_51757,inst_51761,inst_51759,inst_51776,inst_51778,inst_51779,inst_51780,inst_51781,state_val_51841,c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51783 = setTimeout(inst_51782,(10));
var state_51840__$1 = (function (){var statearr_51911 = state_51840;
(statearr_51911[(33)] = inst_51781);

(statearr_51911[(34)] = inst_51776);

return statearr_51911;
})();
var statearr_51912_51975 = state_51840__$1;
(statearr_51912_51975[(2)] = inst_51783);

(statearr_51912_51975[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (16))){
var state_51840__$1 = state_51840;
var statearr_51913_51976 = state_51840__$1;
(statearr_51913_51976[(2)] = reload_dependents);

(statearr_51913_51976[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (38))){
var inst_51793 = (state_51840[(16)]);
var inst_51811 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51793);
var state_51840__$1 = state_51840;
var statearr_51914_51977 = state_51840__$1;
(statearr_51914_51977[(2)] = inst_51811);

(statearr_51914_51977[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (30))){
var state_51840__$1 = state_51840;
var statearr_51915_51978 = state_51840__$1;
(statearr_51915_51978[(2)] = null);

(statearr_51915_51978[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (10))){
var inst_51713 = (state_51840[(22)]);
var inst_51715 = cljs.core.chunked_seq_QMARK_.call(null,inst_51713);
var state_51840__$1 = state_51840;
if(inst_51715){
var statearr_51916_51979 = state_51840__$1;
(statearr_51916_51979[(1)] = (13));

} else {
var statearr_51917_51980 = state_51840__$1;
(statearr_51917_51980[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (18))){
var inst_51747 = (state_51840[(2)]);
var state_51840__$1 = state_51840;
if(cljs.core.truth_(inst_51747)){
var statearr_51918_51981 = state_51840__$1;
(statearr_51918_51981[(1)] = (19));

} else {
var statearr_51919_51982 = state_51840__$1;
(statearr_51919_51982[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (42))){
var state_51840__$1 = state_51840;
var statearr_51920_51983 = state_51840__$1;
(statearr_51920_51983[(2)] = null);

(statearr_51920_51983[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (37))){
var inst_51806 = (state_51840[(2)]);
var state_51840__$1 = state_51840;
var statearr_51921_51984 = state_51840__$1;
(statearr_51921_51984[(2)] = inst_51806);

(statearr_51921_51984[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (8))){
var inst_51713 = (state_51840[(22)]);
var inst_51700 = (state_51840[(8)]);
var inst_51713__$1 = cljs.core.seq.call(null,inst_51700);
var state_51840__$1 = (function (){var statearr_51922 = state_51840;
(statearr_51922[(22)] = inst_51713__$1);

return statearr_51922;
})();
if(inst_51713__$1){
var statearr_51923_51985 = state_51840__$1;
(statearr_51923_51985[(1)] = (10));

} else {
var statearr_51924_51986 = state_51840__$1;
(statearr_51924_51986[(1)] = (11));

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
}
});})(c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__48924__auto__,c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48925__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48925__auto____0 = (function (){
var statearr_51925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51925[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__48925__auto__);

(statearr_51925[(1)] = (1));

return statearr_51925;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48925__auto____1 = (function (state_51840){
while(true){
var ret_value__48926__auto__ = (function (){try{while(true){
var result__48927__auto__ = switch__48924__auto__.call(null,state_51840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48927__auto__;
}
break;
}
}catch (e51926){if((e51926 instanceof Object)){
var ex__48928__auto__ = e51926;
var statearr_51927_51987 = state_51840;
(statearr_51927_51987[(5)] = ex__48928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51988 = state_51840;
state_51840 = G__51988;
continue;
} else {
return ret_value__48926__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__48925__auto__ = function(state_51840){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48925__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48925__auto____1.call(this,state_51840);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__48925__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48925__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__48925__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48925__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48925__auto__;
})()
;})(switch__48924__auto__,c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__49014__auto__ = (function (){var statearr_51928 = f__49013__auto__.call(null);
(statearr_51928[(6)] = c__49012__auto__);

return statearr_51928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49014__auto__);
});})(c__49012__auto__,map__51685,map__51685__$1,opts,before_jsload,on_jsload,reload_dependents,map__51686,map__51686__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__49012__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__51991,link){
var map__51992 = p__51991;
var map__51992__$1 = ((((!((map__51992 == null)))?((((map__51992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51992):map__51992);
var file = cljs.core.get.call(null,map__51992__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__51992,map__51992__$1,file){
return (function (p1__51989_SHARP_,p2__51990_SHARP_){
if(cljs.core._EQ_.call(null,p1__51989_SHARP_,p2__51990_SHARP_)){
return p1__51989_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__51992,map__51992__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__51995){
var map__51996 = p__51995;
var map__51996__$1 = ((((!((map__51996 == null)))?((((map__51996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51996):map__51996);
var match_length = cljs.core.get.call(null,map__51996__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__51996__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__51994_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__51994_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__51998_SHARP_,p2__51999_SHARP_){
return cljs.core.assoc.call(null,p1__51998_SHARP_,cljs.core.get.call(null,p2__51999_SHARP_,key),p2__51999_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_52000 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_52000);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_52000);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__52001,p__52002){
var map__52003 = p__52001;
var map__52003__$1 = ((((!((map__52003 == null)))?((((map__52003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52003):map__52003);
var on_cssload = cljs.core.get.call(null,map__52003__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__52004 = p__52002;
var map__52004__$1 = ((((!((map__52004 == null)))?((((map__52004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52004):map__52004);
var files_msg = map__52004__$1;
var files = cljs.core.get.call(null,map__52004__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1502518468115
