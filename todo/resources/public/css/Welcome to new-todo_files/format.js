// Compiled by ClojureScript 1.9.854 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__33120__auto__ = (((value == null))?null:value);
var m__33121__auto__ = (devtools.format._header[goog.typeOf(x__33120__auto__)]);
if(!((m__33121__auto__ == null))){
return m__33121__auto__.call(null,value);
} else {
var m__33121__auto____$1 = (devtools.format._header["_"]);
if(!((m__33121__auto____$1 == null))){
return m__33121__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__33120__auto__ = (((value == null))?null:value);
var m__33121__auto__ = (devtools.format._has_body[goog.typeOf(x__33120__auto__)]);
if(!((m__33121__auto__ == null))){
return m__33121__auto__.call(null,value);
} else {
var m__33121__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__33121__auto____$1 == null))){
return m__33121__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__33120__auto__ = (((value == null))?null:value);
var m__33121__auto__ = (devtools.format._body[goog.typeOf(x__33120__auto__)]);
if(!((m__33121__auto__ == null))){
return m__33121__auto__.call(null,value);
} else {
var m__33121__auto____$1 = (devtools.format._body["_"]);
if(!((m__33121__auto____$1 == null))){
return m__33121__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o35362 = temp__4655__auto__;
var temp__4655__auto____$1 = (o35362["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o35363 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o35363["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o35364 = temp__4655__auto____$2;
return (o35364["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o35365 = temp__4655__auto__;
var temp__4655__auto____$1 = (o35365["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o35366 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o35366["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o35367 = temp__4655__auto____$2;
return (o35367["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o35368 = temp__4655__auto__;
var temp__4655__auto____$1 = (o35368["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o35369 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o35369["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o35370 = temp__4655__auto____$2;
return (o35370["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o35371 = temp__4655__auto__;
var temp__4655__auto____$1 = (o35371["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o35372 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o35372["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o35373 = temp__4655__auto____$2;
return (o35373["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o35374 = temp__4655__auto__;
var temp__4655__auto____$1 = (o35374["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o35375 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o35375["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o35376 = temp__4655__auto____$2;
return (o35376["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o35377 = temp__4655__auto__;
var temp__4655__auto____$1 = (o35377["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o35378 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o35378["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o35379 = temp__4655__auto____$2;
return (o35379["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o35380 = temp__4655__auto__;
var temp__4655__auto____$1 = (o35380["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o35381 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o35381["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o35382 = temp__4655__auto____$2;
return (o35382["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__33608__auto__ = [];
var len__33601__auto___35384 = arguments.length;
var i__33602__auto___35385 = (0);
while(true){
if((i__33602__auto___35385 < len__33601__auto___35384)){
args__33608__auto__.push((arguments[i__33602__auto___35385]));

var G__35386 = (i__33602__auto___35385 + (1));
i__33602__auto___35385 = G__35386;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq35383){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35383));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__33608__auto__ = [];
var len__33601__auto___35388 = arguments.length;
var i__33602__auto___35389 = (0);
while(true){
if((i__33602__auto___35389 < len__33601__auto___35388)){
args__33608__auto__.push((arguments[i__33602__auto___35389]));

var G__35390 = (i__33602__auto___35389 + (1));
i__33602__auto___35389 = G__35390;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq35387){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35387));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__33608__auto__ = [];
var len__33601__auto___35392 = arguments.length;
var i__33602__auto___35393 = (0);
while(true){
if((i__33602__auto___35393 < len__33601__auto___35392)){
args__33608__auto__.push((arguments[i__33602__auto___35393]));

var G__35394 = (i__33602__auto___35393 + (1));
i__33602__auto___35393 = G__35394;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq35391){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35391));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__33608__auto__ = [];
var len__33601__auto___35396 = arguments.length;
var i__33602__auto___35397 = (0);
while(true){
if((i__33602__auto___35397 < len__33601__auto___35396)){
args__33608__auto__.push((arguments[i__33602__auto___35397]));

var G__35398 = (i__33602__auto___35397 + (1));
i__33602__auto___35397 = G__35398;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq35395){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35395));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__33608__auto__ = [];
var len__33601__auto___35400 = arguments.length;
var i__33602__auto___35401 = (0);
while(true){
if((i__33602__auto___35401 < len__33601__auto___35400)){
args__33608__auto__.push((arguments[i__33602__auto___35401]));

var G__35402 = (i__33602__auto___35401 + (1));
i__33602__auto___35401 = G__35402;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq35399){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35399));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__33608__auto__ = [];
var len__33601__auto___35404 = arguments.length;
var i__33602__auto___35405 = (0);
while(true){
if((i__33602__auto___35405 < len__33601__auto___35404)){
args__33608__auto__.push((arguments[i__33602__auto___35405]));

var G__35406 = (i__33602__auto___35405 + (1));
i__33602__auto___35405 = G__35406;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq35403){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35403));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__33608__auto__ = [];
var len__33601__auto___35408 = arguments.length;
var i__33602__auto___35409 = (0);
while(true){
if((i__33602__auto___35409 < len__33601__auto___35408)){
args__33608__auto__.push((arguments[i__33602__auto___35409]));

var G__35410 = (i__33602__auto___35409 + (1));
i__33602__auto___35409 = G__35410;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq35407){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35407));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__33608__auto__ = [];
var len__33601__auto___35418 = arguments.length;
var i__33602__auto___35419 = (0);
while(true){
if((i__33602__auto___35419 < len__33601__auto___35418)){
args__33608__auto__.push((arguments[i__33602__auto___35419]));

var G__35420 = (i__33602__auto___35419 + (1));
i__33602__auto___35419 = G__35420;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((1) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33609__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__35414){
var vec__35415 = p__35414;
var state_override = cljs.core.nth.call(null,vec__35415,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__35415,state_override){
return (function (p1__35411_SHARP_){
return cljs.core.merge.call(null,p1__35411_SHARP_,state_override);
});})(vec__35415,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq35412){
var G__35413 = cljs.core.first.call(null,seq35412);
var seq35412__$1 = cljs.core.next.call(null,seq35412);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__35413,seq35412__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__33608__auto__ = [];
var len__33601__auto___35422 = arguments.length;
var i__33602__auto___35423 = (0);
while(true){
if((i__33602__auto___35423 < len__33601__auto___35422)){
args__33608__auto__.push((arguments[i__33602__auto___35423]));

var G__35424 = (i__33602__auto___35423 + (1));
i__33602__auto___35423 = G__35424;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq35421){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35421));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__33608__auto__ = [];
var len__33601__auto___35427 = arguments.length;
var i__33602__auto___35428 = (0);
while(true){
if((i__33602__auto___35428 < len__33601__auto___35427)){
args__33608__auto__.push((arguments[i__33602__auto___35428]));

var G__35429 = (i__33602__auto___35428 + (1));
i__33602__auto___35428 = G__35429;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((1) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33609__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq35425){
var G__35426 = cljs.core.first.call(null,seq35425);
var seq35425__$1 = cljs.core.next.call(null,seq35425);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__35426,seq35425__$1);
});


//# sourceMappingURL=format.js.map?rel=1502190260011
