// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42271){
var map__42272 = p__42271;
var map__42272__$1 = ((((!((map__42272 == null)))?((((map__42272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42272):map__42272);
var m = map__42272__$1;
var n = cljs.core.get.call(null,map__42272__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__42272__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42274_42296 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42275_42297 = null;
var count__42276_42298 = (0);
var i__42277_42299 = (0);
while(true){
if((i__42277_42299 < count__42276_42298)){
var f_42300 = cljs.core._nth.call(null,chunk__42275_42297,i__42277_42299);
cljs.core.println.call(null,"  ",f_42300);

var G__42301 = seq__42274_42296;
var G__42302 = chunk__42275_42297;
var G__42303 = count__42276_42298;
var G__42304 = (i__42277_42299 + (1));
seq__42274_42296 = G__42301;
chunk__42275_42297 = G__42302;
count__42276_42298 = G__42303;
i__42277_42299 = G__42304;
continue;
} else {
var temp__4657__auto___42305 = cljs.core.seq.call(null,seq__42274_42296);
if(temp__4657__auto___42305){
var seq__42274_42306__$1 = temp__4657__auto___42305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42274_42306__$1)){
var c__33271__auto___42307 = cljs.core.chunk_first.call(null,seq__42274_42306__$1);
var G__42308 = cljs.core.chunk_rest.call(null,seq__42274_42306__$1);
var G__42309 = c__33271__auto___42307;
var G__42310 = cljs.core.count.call(null,c__33271__auto___42307);
var G__42311 = (0);
seq__42274_42296 = G__42308;
chunk__42275_42297 = G__42309;
count__42276_42298 = G__42310;
i__42277_42299 = G__42311;
continue;
} else {
var f_42312 = cljs.core.first.call(null,seq__42274_42306__$1);
cljs.core.println.call(null,"  ",f_42312);

var G__42313 = cljs.core.next.call(null,seq__42274_42306__$1);
var G__42314 = null;
var G__42315 = (0);
var G__42316 = (0);
seq__42274_42296 = G__42313;
chunk__42275_42297 = G__42314;
count__42276_42298 = G__42315;
i__42277_42299 = G__42316;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42317 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__32437__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__32437__auto__)){
return or__32437__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42317);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42317)))?cljs.core.second.call(null,arglists_42317):arglists_42317));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42278_42318 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42279_42319 = null;
var count__42280_42320 = (0);
var i__42281_42321 = (0);
while(true){
if((i__42281_42321 < count__42280_42320)){
var vec__42282_42322 = cljs.core._nth.call(null,chunk__42279_42319,i__42281_42321);
var name_42323 = cljs.core.nth.call(null,vec__42282_42322,(0),null);
var map__42285_42324 = cljs.core.nth.call(null,vec__42282_42322,(1),null);
var map__42285_42325__$1 = ((((!((map__42285_42324 == null)))?((((map__42285_42324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42285_42324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42285_42324):map__42285_42324);
var doc_42326 = cljs.core.get.call(null,map__42285_42325__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42327 = cljs.core.get.call(null,map__42285_42325__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42323);

cljs.core.println.call(null," ",arglists_42327);

if(cljs.core.truth_(doc_42326)){
cljs.core.println.call(null," ",doc_42326);
} else {
}

var G__42328 = seq__42278_42318;
var G__42329 = chunk__42279_42319;
var G__42330 = count__42280_42320;
var G__42331 = (i__42281_42321 + (1));
seq__42278_42318 = G__42328;
chunk__42279_42319 = G__42329;
count__42280_42320 = G__42330;
i__42281_42321 = G__42331;
continue;
} else {
var temp__4657__auto___42332 = cljs.core.seq.call(null,seq__42278_42318);
if(temp__4657__auto___42332){
var seq__42278_42333__$1 = temp__4657__auto___42332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42278_42333__$1)){
var c__33271__auto___42334 = cljs.core.chunk_first.call(null,seq__42278_42333__$1);
var G__42335 = cljs.core.chunk_rest.call(null,seq__42278_42333__$1);
var G__42336 = c__33271__auto___42334;
var G__42337 = cljs.core.count.call(null,c__33271__auto___42334);
var G__42338 = (0);
seq__42278_42318 = G__42335;
chunk__42279_42319 = G__42336;
count__42280_42320 = G__42337;
i__42281_42321 = G__42338;
continue;
} else {
var vec__42287_42339 = cljs.core.first.call(null,seq__42278_42333__$1);
var name_42340 = cljs.core.nth.call(null,vec__42287_42339,(0),null);
var map__42290_42341 = cljs.core.nth.call(null,vec__42287_42339,(1),null);
var map__42290_42342__$1 = ((((!((map__42290_42341 == null)))?((((map__42290_42341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42290_42341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42290_42341):map__42290_42341);
var doc_42343 = cljs.core.get.call(null,map__42290_42342__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42344 = cljs.core.get.call(null,map__42290_42342__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42340);

cljs.core.println.call(null," ",arglists_42344);

if(cljs.core.truth_(doc_42343)){
cljs.core.println.call(null," ",doc_42343);
} else {
}

var G__42345 = cljs.core.next.call(null,seq__42278_42333__$1);
var G__42346 = null;
var G__42347 = (0);
var G__42348 = (0);
seq__42278_42318 = G__42345;
chunk__42279_42319 = G__42346;
count__42280_42320 = G__42347;
i__42281_42321 = G__42348;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__42292 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42293 = null;
var count__42294 = (0);
var i__42295 = (0);
while(true){
if((i__42295 < count__42294)){
var role = cljs.core._nth.call(null,chunk__42293,i__42295);
var temp__4657__auto___42349__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42349__$1)){
var spec_42350 = temp__4657__auto___42349__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_42350));
} else {
}

var G__42351 = seq__42292;
var G__42352 = chunk__42293;
var G__42353 = count__42294;
var G__42354 = (i__42295 + (1));
seq__42292 = G__42351;
chunk__42293 = G__42352;
count__42294 = G__42353;
i__42295 = G__42354;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__42292);
if(temp__4657__auto____$1){
var seq__42292__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42292__$1)){
var c__33271__auto__ = cljs.core.chunk_first.call(null,seq__42292__$1);
var G__42355 = cljs.core.chunk_rest.call(null,seq__42292__$1);
var G__42356 = c__33271__auto__;
var G__42357 = cljs.core.count.call(null,c__33271__auto__);
var G__42358 = (0);
seq__42292 = G__42355;
chunk__42293 = G__42356;
count__42294 = G__42357;
i__42295 = G__42358;
continue;
} else {
var role = cljs.core.first.call(null,seq__42292__$1);
var temp__4657__auto___42359__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42359__$2)){
var spec_42360 = temp__4657__auto___42359__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_42360));
} else {
}

var G__42361 = cljs.core.next.call(null,seq__42292__$1);
var G__42362 = null;
var G__42363 = (0);
var G__42364 = (0);
seq__42292 = G__42361;
chunk__42293 = G__42362;
count__42294 = G__42363;
i__42295 = G__42364;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1502190269879
