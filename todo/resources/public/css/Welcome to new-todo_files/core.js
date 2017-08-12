// Compiled by ClojureScript 1.9.854 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__44212){
var map__44213 = p__44212;
var map__44213__$1 = ((((!((map__44213 == null)))?((((map__44213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44213):map__44213);
var replacement_transformers = cljs.core.get.call(null,map__44213__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__44213__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__44213__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__44213,map__44213__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_44215 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__44216 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR_44215,map__44213,map__44213__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__44219,transformer){
var vec__44220 = p__44219;
var text = cljs.core.nth.call(null,vec__44220,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__44220,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR_44215,map__44213,map__44213__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__40192__auto__ = replacement_transformers;
if(cljs.core.truth_(or__40192__auto__)){
return or__40192__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__44216,(0),null);
var new_state = cljs.core.nth.call(null,vec__44216,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_44215;
}});
;})(map__44213,map__44213__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__41363__auto__ = [];
var len__41356__auto___44225 = arguments.length;
var i__41357__auto___44226 = (0);
while(true){
if((i__41357__auto___44226 < len__41356__auto___44225)){
args__41363__auto__.push((arguments[i__41357__auto___44226]));

var G__44227 = (i__41357__auto___44226 + (1));
i__41357__auto___44226 = G__44227;
continue;
} else {
}
break;
}

var argseq__41364__auto__ = ((((1) < args__41363__auto__.length))?(new cljs.core.IndexedSeq(args__41363__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41364__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq44223){
var G__44224 = cljs.core.first.call(null,seq44223);
var seq44223__$1 = cljs.core.next.call(null,seq44223);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__44224,seq44223__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__44228_44232 = cljs.core.seq.call(null,lines);
var chunk__44229_44233 = null;
var count__44230_44234 = (0);
var i__44231_44235 = (0);
while(true){
if((i__44231_44235 < count__44230_44234)){
var line_44236 = cljs.core._nth.call(null,chunk__44229_44233,i__44231_44235);
markdown.links.parse_reference_link.call(null,line_44236,references);

var G__44237 = seq__44228_44232;
var G__44238 = chunk__44229_44233;
var G__44239 = count__44230_44234;
var G__44240 = (i__44231_44235 + (1));
seq__44228_44232 = G__44237;
chunk__44229_44233 = G__44238;
count__44230_44234 = G__44239;
i__44231_44235 = G__44240;
continue;
} else {
var temp__4657__auto___44241 = cljs.core.seq.call(null,seq__44228_44232);
if(temp__4657__auto___44241){
var seq__44228_44242__$1 = temp__4657__auto___44241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44228_44242__$1)){
var c__41026__auto___44243 = cljs.core.chunk_first.call(null,seq__44228_44242__$1);
var G__44244 = cljs.core.chunk_rest.call(null,seq__44228_44242__$1);
var G__44245 = c__41026__auto___44243;
var G__44246 = cljs.core.count.call(null,c__41026__auto___44243);
var G__44247 = (0);
seq__44228_44232 = G__44244;
chunk__44229_44233 = G__44245;
count__44230_44234 = G__44246;
i__44231_44235 = G__44247;
continue;
} else {
var line_44248 = cljs.core.first.call(null,seq__44228_44242__$1);
markdown.links.parse_reference_link.call(null,line_44248,references);

var G__44249 = cljs.core.next.call(null,seq__44228_44242__$1);
var G__44250 = null;
var G__44251 = (0);
var G__44252 = (0);
seq__44228_44232 = G__44249;
chunk__44229_44233 = G__44250;
count__44230_44234 = G__44251;
i__44231_44235 = G__44252;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__44253_44257 = cljs.core.seq.call(null,lines);
var chunk__44254_44258 = null;
var count__44255_44259 = (0);
var i__44256_44260 = (0);
while(true){
if((i__44256_44260 < count__44255_44259)){
var line_44261 = cljs.core._nth.call(null,chunk__44254_44258,i__44256_44260);
markdown.links.parse_footnote_link.call(null,line_44261,footnotes);

var G__44262 = seq__44253_44257;
var G__44263 = chunk__44254_44258;
var G__44264 = count__44255_44259;
var G__44265 = (i__44256_44260 + (1));
seq__44253_44257 = G__44262;
chunk__44254_44258 = G__44263;
count__44255_44259 = G__44264;
i__44256_44260 = G__44265;
continue;
} else {
var temp__4657__auto___44266 = cljs.core.seq.call(null,seq__44253_44257);
if(temp__4657__auto___44266){
var seq__44253_44267__$1 = temp__4657__auto___44266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44253_44267__$1)){
var c__41026__auto___44268 = cljs.core.chunk_first.call(null,seq__44253_44267__$1);
var G__44269 = cljs.core.chunk_rest.call(null,seq__44253_44267__$1);
var G__44270 = c__41026__auto___44268;
var G__44271 = cljs.core.count.call(null,c__41026__auto___44268);
var G__44272 = (0);
seq__44253_44257 = G__44269;
chunk__44254_44258 = G__44270;
count__44255_44259 = G__44271;
i__44256_44260 = G__44272;
continue;
} else {
var line_44273 = cljs.core.first.call(null,seq__44253_44267__$1);
markdown.links.parse_footnote_link.call(null,line_44273,footnotes);

var G__44274 = cljs.core.next.call(null,seq__44253_44267__$1);
var G__44275 = null;
var G__44276 = (0);
var G__44277 = (0);
seq__44253_44257 = G__44274;
chunk__44254_44258 = G__44275;
count__44255_44259 = G__44276;
i__44256_44260 = G__44277;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__44279 = cljs.core.split_with.call(null,(function (p1__44278_SHARP_){
return cljs.core.not_empty.call(null,p1__44278_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__44279,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__44279,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_44282 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_44283 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_44282,_STAR_formatter_STAR_44283){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_44282,_STAR_formatter_STAR_44283))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__44284 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__44284,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__44284,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__44290_44297 = lines__$1;
var vec__44291_44298 = G__44290_44297;
var seq__44292_44299 = cljs.core.seq.call(null,vec__44291_44298);
var first__44293_44300 = cljs.core.first.call(null,seq__44292_44299);
var seq__44292_44301__$1 = cljs.core.next.call(null,seq__44292_44299);
var line_44302 = first__44293_44300;
var more_44303 = seq__44292_44301__$1;
var state_44304 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__44290_44305__$1 = G__44290_44297;
var state_44306__$1 = state_44304;
while(true){
var vec__44294_44307 = G__44290_44305__$1;
var seq__44295_44308 = cljs.core.seq.call(null,vec__44294_44307);
var first__44296_44309 = cljs.core.first.call(null,seq__44295_44308);
var seq__44295_44310__$1 = cljs.core.next.call(null,seq__44295_44308);
var line_44311__$1 = first__44296_44309;
var more_44312__$1 = seq__44295_44310__$1;
var state_44313__$2 = state_44306__$1;
var line_44314__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_44313__$2))?"":line_44311__$1);
var state_44315__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_44313__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_44313__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_44313__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_44313__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_44313__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_44312__$1))){
var G__44316 = more_44312__$1;
var G__44317 = cljs.core.assoc.call(null,transformer.call(null,html,line_44314__$2,cljs.core.first.call(null,more_44312__$1),cljs.core.dissoc.call(null,state_44315__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_44314__$2));
G__44290_44305__$1 = G__44316;
state_44306__$1 = G__44317;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_44315__$3))),line_44314__$2,"",cljs.core.assoc.call(null,state_44315__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_44283;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_44282;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__41363__auto__ = [];
var len__41356__auto___44320 = arguments.length;
var i__41357__auto___44321 = (0);
while(true){
if((i__41357__auto___44321 < len__41356__auto___44320)){
args__41363__auto__.push((arguments[i__41357__auto___44321]));

var G__44322 = (i__41357__auto___44321 + (1));
i__41357__auto___44321 = G__44322;
continue;
} else {
}
break;
}

var argseq__41364__auto__ = ((((1) < args__41363__auto__.length))?(new cljs.core.IndexedSeq(args__41363__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41364__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq44318){
var G__44319 = cljs.core.first.call(null,seq44318);
var seq44318__$1 = cljs.core.next.call(null,seq44318);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__44319,seq44318__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__41363__auto__ = [];
var len__41356__auto___44325 = arguments.length;
var i__41357__auto___44326 = (0);
while(true){
if((i__41357__auto___44326 < len__41356__auto___44325)){
args__41363__auto__.push((arguments[i__41357__auto___44326]));

var G__44327 = (i__41357__auto___44326 + (1));
i__41357__auto___44326 = G__44327;
continue;
} else {
}
break;
}

var argseq__41364__auto__ = ((((1) < args__41363__auto__.length))?(new cljs.core.IndexedSeq(args__41363__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__41364__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq44323){
var G__44324 = cljs.core.first.call(null,seq44323);
var seq44323__$1 = cljs.core.next.call(null,seq44323);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__44324,seq44323__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__41363__auto__ = [];
var len__41356__auto___44329 = arguments.length;
var i__41357__auto___44330 = (0);
while(true){
if((i__41357__auto___44330 < len__41356__auto___44329)){
args__41363__auto__.push((arguments[i__41357__auto___44330]));

var G__44331 = (i__41357__auto___44330 + (1));
i__41357__auto___44330 = G__44331;
continue;
} else {
}
break;
}

var argseq__41364__auto__ = ((((0) < args__41363__auto__.length))?(new cljs.core.IndexedSeq(args__41363__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__41364__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq44328){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44328));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__41363__auto__ = [];
var len__41356__auto___44333 = arguments.length;
var i__41357__auto___44334 = (0);
while(true){
if((i__41357__auto___44334 < len__41356__auto___44333)){
args__41363__auto__.push((arguments[i__41357__auto___44334]));

var G__44335 = (i__41357__auto___44334 + (1));
i__41357__auto___44334 = G__44335;
continue;
} else {
}
break;
}

var argseq__41364__auto__ = ((((0) < args__41363__auto__.length))?(new cljs.core.IndexedSeq(args__41363__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__41364__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq44332){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44332));
});


//# sourceMappingURL=core.js.map?rel=1502518457992
