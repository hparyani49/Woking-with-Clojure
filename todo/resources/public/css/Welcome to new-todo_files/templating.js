// Compiled by ClojureScript 1.9.854 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x36827_36828 = value;
x36827_36828.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x36830_36831 = value;
x36830_36831.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x36833_36834 = value;
x36833_36834.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__32425__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__32425__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__32425__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__33608__auto__ = [];
var len__33601__auto___36841 = arguments.length;
var i__33602__auto___36842 = (0);
while(true){
if((i__33602__auto___36842 < len__33601__auto___36841)){
args__33608__auto__.push((arguments[i__33602__auto___36842]));

var G__36843 = (i__33602__auto___36842 + (1));
i__33602__auto___36842 = G__36843;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((0) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__33609__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__36837_36844 = cljs.core.seq.call(null,items);
var chunk__36838_36845 = null;
var count__36839_36846 = (0);
var i__36840_36847 = (0);
while(true){
if((i__36840_36847 < count__36839_36846)){
var item_36848 = cljs.core._nth.call(null,chunk__36838_36845,i__36840_36847);
if(!((item_36848 == null))){
if(cljs.core.coll_QMARK_.call(null,item_36848)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_36848)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_36848));
}
} else {
}

var G__36849 = seq__36837_36844;
var G__36850 = chunk__36838_36845;
var G__36851 = count__36839_36846;
var G__36852 = (i__36840_36847 + (1));
seq__36837_36844 = G__36849;
chunk__36838_36845 = G__36850;
count__36839_36846 = G__36851;
i__36840_36847 = G__36852;
continue;
} else {
var temp__4657__auto___36853 = cljs.core.seq.call(null,seq__36837_36844);
if(temp__4657__auto___36853){
var seq__36837_36854__$1 = temp__4657__auto___36853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36837_36854__$1)){
var c__33271__auto___36855 = cljs.core.chunk_first.call(null,seq__36837_36854__$1);
var G__36856 = cljs.core.chunk_rest.call(null,seq__36837_36854__$1);
var G__36857 = c__33271__auto___36855;
var G__36858 = cljs.core.count.call(null,c__33271__auto___36855);
var G__36859 = (0);
seq__36837_36844 = G__36856;
chunk__36838_36845 = G__36857;
count__36839_36846 = G__36858;
i__36840_36847 = G__36859;
continue;
} else {
var item_36860 = cljs.core.first.call(null,seq__36837_36854__$1);
if(!((item_36860 == null))){
if(cljs.core.coll_QMARK_.call(null,item_36860)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_36860)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_36860));
}
} else {
}

var G__36861 = cljs.core.next.call(null,seq__36837_36854__$1);
var G__36862 = null;
var G__36863 = (0);
var G__36864 = (0);
seq__36837_36844 = G__36861;
chunk__36838_36845 = G__36862;
count__36839_36846 = G__36863;
i__36840_36847 = G__36864;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq36836){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36836));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__33608__auto__ = [];
var len__33601__auto___36872 = arguments.length;
var i__33602__auto___36873 = (0);
while(true){
if((i__33602__auto___36873 < len__33601__auto___36872)){
args__33608__auto__.push((arguments[i__33602__auto___36873]));

var G__36874 = (i__33602__auto___36873 + (1));
i__33602__auto___36873 = G__36874;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((2) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__33609__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__36868_36875 = cljs.core.seq.call(null,children);
var chunk__36869_36876 = null;
var count__36870_36877 = (0);
var i__36871_36878 = (0);
while(true){
if((i__36871_36878 < count__36870_36877)){
var child_36879 = cljs.core._nth.call(null,chunk__36869_36876,i__36871_36878);
if(!((child_36879 == null))){
if(cljs.core.coll_QMARK_.call(null,child_36879)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_36879))));
} else {
var temp__4655__auto___36880 = devtools.formatters.helpers.pref.call(null,child_36879);
if(cljs.core.truth_(temp__4655__auto___36880)){
var child_value_36881 = temp__4655__auto___36880;
template.push(child_value_36881);
} else {
}
}
} else {
}

var G__36882 = seq__36868_36875;
var G__36883 = chunk__36869_36876;
var G__36884 = count__36870_36877;
var G__36885 = (i__36871_36878 + (1));
seq__36868_36875 = G__36882;
chunk__36869_36876 = G__36883;
count__36870_36877 = G__36884;
i__36871_36878 = G__36885;
continue;
} else {
var temp__4657__auto___36886 = cljs.core.seq.call(null,seq__36868_36875);
if(temp__4657__auto___36886){
var seq__36868_36887__$1 = temp__4657__auto___36886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36868_36887__$1)){
var c__33271__auto___36888 = cljs.core.chunk_first.call(null,seq__36868_36887__$1);
var G__36889 = cljs.core.chunk_rest.call(null,seq__36868_36887__$1);
var G__36890 = c__33271__auto___36888;
var G__36891 = cljs.core.count.call(null,c__33271__auto___36888);
var G__36892 = (0);
seq__36868_36875 = G__36889;
chunk__36869_36876 = G__36890;
count__36870_36877 = G__36891;
i__36871_36878 = G__36892;
continue;
} else {
var child_36893 = cljs.core.first.call(null,seq__36868_36887__$1);
if(!((child_36893 == null))){
if(cljs.core.coll_QMARK_.call(null,child_36893)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_36893))));
} else {
var temp__4655__auto___36894 = devtools.formatters.helpers.pref.call(null,child_36893);
if(cljs.core.truth_(temp__4655__auto___36894)){
var child_value_36895 = temp__4655__auto___36894;
template.push(child_value_36895);
} else {
}
}
} else {
}

var G__36896 = cljs.core.next.call(null,seq__36868_36887__$1);
var G__36897 = null;
var G__36898 = (0);
var G__36899 = (0);
seq__36868_36875 = G__36896;
chunk__36869_36876 = G__36897;
count__36870_36877 = G__36898;
i__36871_36878 = G__36899;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq36865){
var G__36866 = cljs.core.first.call(null,seq36865);
var seq36865__$1 = cljs.core.next.call(null,seq36865);
var G__36867 = cljs.core.first.call(null,seq36865__$1);
var seq36865__$2 = cljs.core.next.call(null,seq36865__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__36866,G__36867,seq36865__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__33608__auto__ = [];
var len__33601__auto___36902 = arguments.length;
var i__33602__auto___36903 = (0);
while(true){
if((i__33602__auto___36903 < len__33601__auto___36902)){
args__33608__auto__.push((arguments[i__33602__auto___36903]));

var G__36904 = (i__33602__auto___36903 + (1));
i__33602__auto___36903 = G__36904;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((1) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33609__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq36900){
var G__36901 = cljs.core.first.call(null,seq36900);
var seq36900__$1 = cljs.core.next.call(null,seq36900);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36901,seq36900__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__33608__auto__ = [];
var len__33601__auto___36907 = arguments.length;
var i__33602__auto___36908 = (0);
while(true){
if((i__33602__auto___36908 < len__33601__auto___36907)){
args__33608__auto__.push((arguments[i__33602__auto___36908]));

var G__36909 = (i__33602__auto___36908 + (1));
i__33602__auto___36908 = G__36909;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((1) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33609__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq36905){
var G__36906 = cljs.core.first.call(null,seq36905);
var seq36905__$1 = cljs.core.next.call(null,seq36905);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36906,seq36905__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__36911 = arguments.length;
switch (G__36911) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj36913 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__32437__auto__ = start_index;
if(cljs.core.truth_(or__32437__auto__)){
return or__32437__auto__;
} else {
return (0);
}
})()};
return obj36913;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__33608__auto__ = [];
var len__33601__auto___36921 = arguments.length;
var i__33602__auto___36922 = (0);
while(true){
if((i__33602__auto___36922 < len__33601__auto___36921)){
args__33608__auto__.push((arguments[i__33602__auto___36922]));

var G__36923 = (i__33602__auto___36922 + (1));
i__33602__auto___36922 = G__36923;
continue;
} else {
}
break;
}

var argseq__33609__auto__ = ((((1) < args__33608__auto__.length))?(new cljs.core.IndexedSeq(args__33608__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33609__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__36917){
var vec__36918 = p__36917;
var state_override_fn = cljs.core.nth.call(null,vec__36918,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq36915){
var G__36916 = cljs.core.first.call(null,seq36915);
var seq36915__$1 = cljs.core.next.call(null,seq36915);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__36916,seq36915__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_36924 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_36924;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render path: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render stack:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__36925 = name;
switch (G__36925) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("no matching special tag name: '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__36927 = tag;
var html_tag = cljs.core.nth.call(null,vec__36927,(0),null);
var style = cljs.core.nth.call(null,vec__36927,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_36930 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid json-ml markup at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_36930;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_36931 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_36932 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_36932;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_36931;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__36933 = initial_value;
var G__36934 = value.call(null);
initial_value = G__36933;
value = G__36934;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__36935 = initial_value;
var G__36936 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__36935;
value = G__36936;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__36937 = initial_value;
var G__36938 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__36937;
value = G__36938;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1502190263022
