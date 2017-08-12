// Compiled by ClojureScript 1.9.854 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.12";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#js "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e53093){if((e53093 instanceof Error)){
var e = e53093;
return "Error: Unable to stringify";
} else {
throw e53093;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__53096 = arguments.length;
switch (G__53096) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__53094_SHARP_){
if(typeof p1__53094_SHARP_ === 'string'){
return p1__53094_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__53094_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__41363__auto__ = [];
var len__41356__auto___53099 = arguments.length;
var i__41357__auto___53100 = (0);
while(true){
if((i__41357__auto___53100 < len__41356__auto___53099)){
args__41363__auto__.push((arguments[i__41357__auto___53100]));

var G__53101 = (i__41357__auto___53100 + (1));
i__41357__auto___53100 = G__53101;
continue;
} else {
}
break;
}

var argseq__41364__auto__ = ((((0) < args__41363__auto__.length))?(new cljs.core.IndexedSeq(args__41363__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__41364__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq53098){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53098));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__41363__auto__ = [];
var len__41356__auto___53103 = arguments.length;
var i__41357__auto___53104 = (0);
while(true){
if((i__41357__auto___53104 < len__41356__auto___53103)){
args__41363__auto__.push((arguments[i__41357__auto___53104]));

var G__53105 = (i__41357__auto___53104 + (1));
i__41357__auto___53104 = G__53105;
continue;
} else {
}
break;
}

var argseq__41364__auto__ = ((((0) < args__41363__auto__.length))?(new cljs.core.IndexedSeq(args__41363__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__41364__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq53102){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53102));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__53106){
var map__53107 = p__53106;
var map__53107__$1 = ((((!((map__53107 == null)))?((((map__53107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53107):map__53107);
var message = cljs.core.get.call(null,map__53107__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__53107__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__40192__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__40192__auto__)){
return or__40192__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__40180__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__40180__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__40180__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__49012__auto___53186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49012__auto___53186,ch){
return (function (){
var f__49013__auto__ = (function (){var switch__48924__auto__ = ((function (c__49012__auto___53186,ch){
return (function (state_53158){
var state_val_53159 = (state_53158[(1)]);
if((state_val_53159 === (7))){
var inst_53154 = (state_53158[(2)]);
var state_53158__$1 = state_53158;
var statearr_53160_53187 = state_53158__$1;
(statearr_53160_53187[(2)] = inst_53154);

(statearr_53160_53187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53159 === (1))){
var state_53158__$1 = state_53158;
var statearr_53161_53188 = state_53158__$1;
(statearr_53161_53188[(2)] = null);

(statearr_53161_53188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53159 === (4))){
var inst_53111 = (state_53158[(7)]);
var inst_53111__$1 = (state_53158[(2)]);
var state_53158__$1 = (function (){var statearr_53162 = state_53158;
(statearr_53162[(7)] = inst_53111__$1);

return statearr_53162;
})();
if(cljs.core.truth_(inst_53111__$1)){
var statearr_53163_53189 = state_53158__$1;
(statearr_53163_53189[(1)] = (5));

} else {
var statearr_53164_53190 = state_53158__$1;
(statearr_53164_53190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53159 === (15))){
var inst_53118 = (state_53158[(8)]);
var inst_53133 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_53118);
var inst_53134 = cljs.core.first.call(null,inst_53133);
var inst_53135 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_53134);
var inst_53136 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53135)].join('');
var inst_53137 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_53136);
var state_53158__$1 = state_53158;
var statearr_53165_53191 = state_53158__$1;
(statearr_53165_53191[(2)] = inst_53137);

(statearr_53165_53191[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53159 === (13))){
var inst_53142 = (state_53158[(2)]);
var state_53158__$1 = state_53158;
var statearr_53166_53192 = state_53158__$1;
(statearr_53166_53192[(2)] = inst_53142);

(statearr_53166_53192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53159 === (6))){
var state_53158__$1 = state_53158;
var statearr_53167_53193 = state_53158__$1;
(statearr_53167_53193[(2)] = null);

(statearr_53167_53193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53159 === (17))){
var inst_53140 = (state_53158[(2)]);
var state_53158__$1 = state_53158;
var statearr_53168_53194 = state_53158__$1;
(statearr_53168_53194[(2)] = inst_53140);

(statearr_53168_53194[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53159 === (3))){
var inst_53156 = (state_53158[(2)]);
var state_53158__$1 = state_53158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53158__$1,inst_53156);
} else {
if((state_val_53159 === (12))){
var inst_53117 = (state_53158[(9)]);
var inst_53131 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_53117,opts);
var state_53158__$1 = state_53158;
if(cljs.core.truth_(inst_53131)){
var statearr_53169_53195 = state_53158__$1;
(statearr_53169_53195[(1)] = (15));

} else {
var statearr_53170_53196 = state_53158__$1;
(statearr_53170_53196[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53159 === (2))){
var state_53158__$1 = state_53158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53158__$1,(4),ch);
} else {
if((state_val_53159 === (11))){
var inst_53118 = (state_53158[(8)]);
var inst_53123 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53124 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_53118);
var inst_53125 = cljs.core.async.timeout.call(null,(1000));
var inst_53126 = [inst_53124,inst_53125];
var inst_53127 = (new cljs.core.PersistentVector(null,2,(5),inst_53123,inst_53126,null));
var state_53158__$1 = state_53158;
return cljs.core.async.ioc_alts_BANG_.call(null,state_53158__$1,(14),inst_53127);
} else {
if((state_val_53159 === (9))){
var inst_53118 = (state_53158[(8)]);
var inst_53144 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_53145 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_53118);
var inst_53146 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_53145);
var inst_53147 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53146)].join('');
var inst_53148 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_53147);
var state_53158__$1 = (function (){var statearr_53171 = state_53158;
(statearr_53171[(10)] = inst_53144);

return statearr_53171;
})();
var statearr_53172_53197 = state_53158__$1;
(statearr_53172_53197[(2)] = inst_53148);

(statearr_53172_53197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53159 === (5))){
var inst_53111 = (state_53158[(7)]);
var inst_53113 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_53114 = (new cljs.core.PersistentArrayMap(null,2,inst_53113,null));
var inst_53115 = (new cljs.core.PersistentHashSet(null,inst_53114,null));
var inst_53116 = figwheel.client.focus_msgs.call(null,inst_53115,inst_53111);
var inst_53117 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_53116);
var inst_53118 = cljs.core.first.call(null,inst_53116);
var inst_53119 = figwheel.client.autoload_QMARK_.call(null);
var state_53158__$1 = (function (){var statearr_53173 = state_53158;
(statearr_53173[(8)] = inst_53118);

(statearr_53173[(9)] = inst_53117);

return statearr_53173;
})();
if(cljs.core.truth_(inst_53119)){
var statearr_53174_53198 = state_53158__$1;
(statearr_53174_53198[(1)] = (8));

} else {
var statearr_53175_53199 = state_53158__$1;
(statearr_53175_53199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53159 === (14))){
var inst_53129 = (state_53158[(2)]);
var state_53158__$1 = state_53158;
var statearr_53176_53200 = state_53158__$1;
(statearr_53176_53200[(2)] = inst_53129);

(statearr_53176_53200[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53159 === (16))){
var state_53158__$1 = state_53158;
var statearr_53177_53201 = state_53158__$1;
(statearr_53177_53201[(2)] = null);

(statearr_53177_53201[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53159 === (10))){
var inst_53150 = (state_53158[(2)]);
var state_53158__$1 = (function (){var statearr_53178 = state_53158;
(statearr_53178[(11)] = inst_53150);

return statearr_53178;
})();
var statearr_53179_53202 = state_53158__$1;
(statearr_53179_53202[(2)] = null);

(statearr_53179_53202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53159 === (8))){
var inst_53117 = (state_53158[(9)]);
var inst_53121 = figwheel.client.reload_file_state_QMARK_.call(null,inst_53117,opts);
var state_53158__$1 = state_53158;
if(cljs.core.truth_(inst_53121)){
var statearr_53180_53203 = state_53158__$1;
(statearr_53180_53203[(1)] = (11));

} else {
var statearr_53181_53204 = state_53158__$1;
(statearr_53181_53204[(1)] = (12));

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
});})(c__49012__auto___53186,ch))
;
return ((function (switch__48924__auto__,c__49012__auto___53186,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__48925__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__48925__auto____0 = (function (){
var statearr_53182 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53182[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__48925__auto__);

(statearr_53182[(1)] = (1));

return statearr_53182;
});
var figwheel$client$file_reloader_plugin_$_state_machine__48925__auto____1 = (function (state_53158){
while(true){
var ret_value__48926__auto__ = (function (){try{while(true){
var result__48927__auto__ = switch__48924__auto__.call(null,state_53158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48927__auto__;
}
break;
}
}catch (e53183){if((e53183 instanceof Object)){
var ex__48928__auto__ = e53183;
var statearr_53184_53205 = state_53158;
(statearr_53184_53205[(5)] = ex__48928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53206 = state_53158;
state_53158 = G__53206;
continue;
} else {
return ret_value__48926__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__48925__auto__ = function(state_53158){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__48925__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__48925__auto____1.call(this,state_53158);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__48925__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__48925__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__48925__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__48925__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__48925__auto__;
})()
;})(switch__48924__auto__,c__49012__auto___53186,ch))
})();
var state__49014__auto__ = (function (){var statearr_53185 = f__49013__auto__.call(null);
(statearr_53185[(6)] = c__49012__auto___53186);

return statearr_53185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49014__auto__);
});})(c__49012__auto___53186,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__53207_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__53207_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_53209 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_53209){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e53208){if((e53208 instanceof Error)){
var e = e53208;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_53209], null));
} else {
var e = e53208;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_53209))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__53210){
var map__53211 = p__53210;
var map__53211__$1 = ((((!((map__53211 == null)))?((((map__53211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53211.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53211):map__53211);
var opts = map__53211__$1;
var build_id = cljs.core.get.call(null,map__53211__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__53211,map__53211__$1,opts,build_id){
return (function (p__53213){
var vec__53214 = p__53213;
var seq__53215 = cljs.core.seq.call(null,vec__53214);
var first__53216 = cljs.core.first.call(null,seq__53215);
var seq__53215__$1 = cljs.core.next.call(null,seq__53215);
var map__53217 = first__53216;
var map__53217__$1 = ((((!((map__53217 == null)))?((((map__53217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53217):map__53217);
var msg = map__53217__$1;
var msg_name = cljs.core.get.call(null,map__53217__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__53215__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__53214,seq__53215,first__53216,seq__53215__$1,map__53217,map__53217__$1,msg,msg_name,_,map__53211,map__53211__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__53214,seq__53215,first__53216,seq__53215__$1,map__53217,map__53217__$1,msg,msg_name,_,map__53211,map__53211__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__53211,map__53211__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__53219){
var vec__53220 = p__53219;
var seq__53221 = cljs.core.seq.call(null,vec__53220);
var first__53222 = cljs.core.first.call(null,seq__53221);
var seq__53221__$1 = cljs.core.next.call(null,seq__53221);
var map__53223 = first__53222;
var map__53223__$1 = ((((!((map__53223 == null)))?((((map__53223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53223):map__53223);
var msg = map__53223__$1;
var msg_name = cljs.core.get.call(null,map__53223__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__53221__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__53225){
var map__53226 = p__53225;
var map__53226__$1 = ((((!((map__53226 == null)))?((((map__53226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53226):map__53226);
var on_compile_warning = cljs.core.get.call(null,map__53226__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__53226__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__53226,map__53226__$1,on_compile_warning,on_compile_fail){
return (function (p__53228){
var vec__53229 = p__53228;
var seq__53230 = cljs.core.seq.call(null,vec__53229);
var first__53231 = cljs.core.first.call(null,seq__53230);
var seq__53230__$1 = cljs.core.next.call(null,seq__53230);
var map__53232 = first__53231;
var map__53232__$1 = ((((!((map__53232 == null)))?((((map__53232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53232):map__53232);
var msg = map__53232__$1;
var msg_name = cljs.core.get.call(null,map__53232__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__53230__$1;
var pred__53234 = cljs.core._EQ_;
var expr__53235 = msg_name;
if(cljs.core.truth_(pred__53234.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__53235))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__53234.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__53235))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__53226,map__53226__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__49012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49012__auto__,msg_hist,msg_names,msg){
return (function (){
var f__49013__auto__ = (function (){var switch__48924__auto__ = ((function (c__49012__auto__,msg_hist,msg_names,msg){
return (function (state_53324){
var state_val_53325 = (state_53324[(1)]);
if((state_val_53325 === (7))){
var inst_53244 = (state_53324[(2)]);
var state_53324__$1 = state_53324;
if(cljs.core.truth_(inst_53244)){
var statearr_53326_53373 = state_53324__$1;
(statearr_53326_53373[(1)] = (8));

} else {
var statearr_53327_53374 = state_53324__$1;
(statearr_53327_53374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (20))){
var inst_53318 = (state_53324[(2)]);
var state_53324__$1 = state_53324;
var statearr_53328_53375 = state_53324__$1;
(statearr_53328_53375[(2)] = inst_53318);

(statearr_53328_53375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (27))){
var inst_53314 = (state_53324[(2)]);
var state_53324__$1 = state_53324;
var statearr_53329_53376 = state_53324__$1;
(statearr_53329_53376[(2)] = inst_53314);

(statearr_53329_53376[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (1))){
var inst_53237 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_53324__$1 = state_53324;
if(cljs.core.truth_(inst_53237)){
var statearr_53330_53377 = state_53324__$1;
(statearr_53330_53377[(1)] = (2));

} else {
var statearr_53331_53378 = state_53324__$1;
(statearr_53331_53378[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (24))){
var inst_53316 = (state_53324[(2)]);
var state_53324__$1 = state_53324;
var statearr_53332_53379 = state_53324__$1;
(statearr_53332_53379[(2)] = inst_53316);

(statearr_53332_53379[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (4))){
var inst_53322 = (state_53324[(2)]);
var state_53324__$1 = state_53324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53324__$1,inst_53322);
} else {
if((state_val_53325 === (15))){
var inst_53320 = (state_53324[(2)]);
var state_53324__$1 = state_53324;
var statearr_53333_53380 = state_53324__$1;
(statearr_53333_53380[(2)] = inst_53320);

(statearr_53333_53380[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (21))){
var inst_53273 = (state_53324[(2)]);
var inst_53274 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53275 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53274);
var state_53324__$1 = (function (){var statearr_53334 = state_53324;
(statearr_53334[(7)] = inst_53273);

return statearr_53334;
})();
var statearr_53335_53381 = state_53324__$1;
(statearr_53335_53381[(2)] = inst_53275);

(statearr_53335_53381[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (31))){
var inst_53303 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_53324__$1 = state_53324;
if(cljs.core.truth_(inst_53303)){
var statearr_53336_53382 = state_53324__$1;
(statearr_53336_53382[(1)] = (34));

} else {
var statearr_53337_53383 = state_53324__$1;
(statearr_53337_53383[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (32))){
var inst_53312 = (state_53324[(2)]);
var state_53324__$1 = state_53324;
var statearr_53338_53384 = state_53324__$1;
(statearr_53338_53384[(2)] = inst_53312);

(statearr_53338_53384[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (33))){
var inst_53299 = (state_53324[(2)]);
var inst_53300 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53301 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53300);
var state_53324__$1 = (function (){var statearr_53339 = state_53324;
(statearr_53339[(8)] = inst_53299);

return statearr_53339;
})();
var statearr_53340_53385 = state_53324__$1;
(statearr_53340_53385[(2)] = inst_53301);

(statearr_53340_53385[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (13))){
var inst_53258 = figwheel.client.heads_up.clear.call(null);
var state_53324__$1 = state_53324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53324__$1,(16),inst_53258);
} else {
if((state_val_53325 === (22))){
var inst_53279 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53280 = figwheel.client.heads_up.append_warning_message.call(null,inst_53279);
var state_53324__$1 = state_53324;
var statearr_53341_53386 = state_53324__$1;
(statearr_53341_53386[(2)] = inst_53280);

(statearr_53341_53386[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (36))){
var inst_53310 = (state_53324[(2)]);
var state_53324__$1 = state_53324;
var statearr_53342_53387 = state_53324__$1;
(statearr_53342_53387[(2)] = inst_53310);

(statearr_53342_53387[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (29))){
var inst_53290 = (state_53324[(2)]);
var inst_53291 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53292 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53291);
var state_53324__$1 = (function (){var statearr_53343 = state_53324;
(statearr_53343[(9)] = inst_53290);

return statearr_53343;
})();
var statearr_53344_53388 = state_53324__$1;
(statearr_53344_53388[(2)] = inst_53292);

(statearr_53344_53388[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (6))){
var inst_53239 = (state_53324[(10)]);
var state_53324__$1 = state_53324;
var statearr_53345_53389 = state_53324__$1;
(statearr_53345_53389[(2)] = inst_53239);

(statearr_53345_53389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (28))){
var inst_53286 = (state_53324[(2)]);
var inst_53287 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53288 = figwheel.client.heads_up.display_warning.call(null,inst_53287);
var state_53324__$1 = (function (){var statearr_53346 = state_53324;
(statearr_53346[(11)] = inst_53286);

return statearr_53346;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53324__$1,(29),inst_53288);
} else {
if((state_val_53325 === (25))){
var inst_53284 = figwheel.client.heads_up.clear.call(null);
var state_53324__$1 = state_53324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53324__$1,(28),inst_53284);
} else {
if((state_val_53325 === (34))){
var inst_53305 = figwheel.client.heads_up.flash_loaded.call(null);
var state_53324__$1 = state_53324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53324__$1,(37),inst_53305);
} else {
if((state_val_53325 === (17))){
var inst_53264 = (state_53324[(2)]);
var inst_53265 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53266 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53265);
var state_53324__$1 = (function (){var statearr_53347 = state_53324;
(statearr_53347[(12)] = inst_53264);

return statearr_53347;
})();
var statearr_53348_53390 = state_53324__$1;
(statearr_53348_53390[(2)] = inst_53266);

(statearr_53348_53390[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (3))){
var inst_53256 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_53324__$1 = state_53324;
if(cljs.core.truth_(inst_53256)){
var statearr_53349_53391 = state_53324__$1;
(statearr_53349_53391[(1)] = (13));

} else {
var statearr_53350_53392 = state_53324__$1;
(statearr_53350_53392[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (12))){
var inst_53252 = (state_53324[(2)]);
var state_53324__$1 = state_53324;
var statearr_53351_53393 = state_53324__$1;
(statearr_53351_53393[(2)] = inst_53252);

(statearr_53351_53393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (2))){
var inst_53239 = (state_53324[(10)]);
var inst_53239__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_53324__$1 = (function (){var statearr_53352 = state_53324;
(statearr_53352[(10)] = inst_53239__$1);

return statearr_53352;
})();
if(cljs.core.truth_(inst_53239__$1)){
var statearr_53353_53394 = state_53324__$1;
(statearr_53353_53394[(1)] = (5));

} else {
var statearr_53354_53395 = state_53324__$1;
(statearr_53354_53395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (23))){
var inst_53282 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_53324__$1 = state_53324;
if(cljs.core.truth_(inst_53282)){
var statearr_53355_53396 = state_53324__$1;
(statearr_53355_53396[(1)] = (25));

} else {
var statearr_53356_53397 = state_53324__$1;
(statearr_53356_53397[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (35))){
var state_53324__$1 = state_53324;
var statearr_53357_53398 = state_53324__$1;
(statearr_53357_53398[(2)] = null);

(statearr_53357_53398[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (19))){
var inst_53277 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_53324__$1 = state_53324;
if(cljs.core.truth_(inst_53277)){
var statearr_53358_53399 = state_53324__$1;
(statearr_53358_53399[(1)] = (22));

} else {
var statearr_53359_53400 = state_53324__$1;
(statearr_53359_53400[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (11))){
var inst_53248 = (state_53324[(2)]);
var state_53324__$1 = state_53324;
var statearr_53360_53401 = state_53324__$1;
(statearr_53360_53401[(2)] = inst_53248);

(statearr_53360_53401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (9))){
var inst_53250 = figwheel.client.heads_up.clear.call(null);
var state_53324__$1 = state_53324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53324__$1,(12),inst_53250);
} else {
if((state_val_53325 === (5))){
var inst_53241 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_53324__$1 = state_53324;
var statearr_53361_53402 = state_53324__$1;
(statearr_53361_53402[(2)] = inst_53241);

(statearr_53361_53402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (14))){
var inst_53268 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_53324__$1 = state_53324;
if(cljs.core.truth_(inst_53268)){
var statearr_53362_53403 = state_53324__$1;
(statearr_53362_53403[(1)] = (18));

} else {
var statearr_53363_53404 = state_53324__$1;
(statearr_53363_53404[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (26))){
var inst_53294 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_53324__$1 = state_53324;
if(cljs.core.truth_(inst_53294)){
var statearr_53364_53405 = state_53324__$1;
(statearr_53364_53405[(1)] = (30));

} else {
var statearr_53365_53406 = state_53324__$1;
(statearr_53365_53406[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (16))){
var inst_53260 = (state_53324[(2)]);
var inst_53261 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53262 = figwheel.client.heads_up.display_exception.call(null,inst_53261);
var state_53324__$1 = (function (){var statearr_53366 = state_53324;
(statearr_53366[(13)] = inst_53260);

return statearr_53366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53324__$1,(17),inst_53262);
} else {
if((state_val_53325 === (30))){
var inst_53296 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53297 = figwheel.client.heads_up.display_warning.call(null,inst_53296);
var state_53324__$1 = state_53324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53324__$1,(33),inst_53297);
} else {
if((state_val_53325 === (10))){
var inst_53254 = (state_53324[(2)]);
var state_53324__$1 = state_53324;
var statearr_53367_53407 = state_53324__$1;
(statearr_53367_53407[(2)] = inst_53254);

(statearr_53367_53407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (18))){
var inst_53270 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53271 = figwheel.client.heads_up.display_exception.call(null,inst_53270);
var state_53324__$1 = state_53324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53324__$1,(21),inst_53271);
} else {
if((state_val_53325 === (37))){
var inst_53307 = (state_53324[(2)]);
var state_53324__$1 = state_53324;
var statearr_53368_53408 = state_53324__$1;
(statearr_53368_53408[(2)] = inst_53307);

(statearr_53368_53408[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53325 === (8))){
var inst_53246 = figwheel.client.heads_up.flash_loaded.call(null);
var state_53324__$1 = state_53324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53324__$1,(11),inst_53246);
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
});})(c__49012__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__48924__auto__,c__49012__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48925__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48925__auto____0 = (function (){
var statearr_53369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53369[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48925__auto__);

(statearr_53369[(1)] = (1));

return statearr_53369;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48925__auto____1 = (function (state_53324){
while(true){
var ret_value__48926__auto__ = (function (){try{while(true){
var result__48927__auto__ = switch__48924__auto__.call(null,state_53324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48927__auto__;
}
break;
}
}catch (e53370){if((e53370 instanceof Object)){
var ex__48928__auto__ = e53370;
var statearr_53371_53409 = state_53324;
(statearr_53371_53409[(5)] = ex__48928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53410 = state_53324;
state_53324 = G__53410;
continue;
} else {
return ret_value__48926__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48925__auto__ = function(state_53324){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48925__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48925__auto____1.call(this,state_53324);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48925__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48925__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48925__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48925__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48925__auto__;
})()
;})(switch__48924__auto__,c__49012__auto__,msg_hist,msg_names,msg))
})();
var state__49014__auto__ = (function (){var statearr_53372 = f__49013__auto__.call(null);
(statearr_53372[(6)] = c__49012__auto__);

return statearr_53372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49014__auto__);
});})(c__49012__auto__,msg_hist,msg_names,msg))
);

return c__49012__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__49012__auto___53439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49012__auto___53439,ch){
return (function (){
var f__49013__auto__ = (function (){var switch__48924__auto__ = ((function (c__49012__auto___53439,ch){
return (function (state_53425){
var state_val_53426 = (state_53425[(1)]);
if((state_val_53426 === (1))){
var state_53425__$1 = state_53425;
var statearr_53427_53440 = state_53425__$1;
(statearr_53427_53440[(2)] = null);

(statearr_53427_53440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (2))){
var state_53425__$1 = state_53425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53425__$1,(4),ch);
} else {
if((state_val_53426 === (3))){
var inst_53423 = (state_53425[(2)]);
var state_53425__$1 = state_53425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53425__$1,inst_53423);
} else {
if((state_val_53426 === (4))){
var inst_53413 = (state_53425[(7)]);
var inst_53413__$1 = (state_53425[(2)]);
var state_53425__$1 = (function (){var statearr_53428 = state_53425;
(statearr_53428[(7)] = inst_53413__$1);

return statearr_53428;
})();
if(cljs.core.truth_(inst_53413__$1)){
var statearr_53429_53441 = state_53425__$1;
(statearr_53429_53441[(1)] = (5));

} else {
var statearr_53430_53442 = state_53425__$1;
(statearr_53430_53442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (5))){
var inst_53413 = (state_53425[(7)]);
var inst_53415 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_53413);
var state_53425__$1 = state_53425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53425__$1,(8),inst_53415);
} else {
if((state_val_53426 === (6))){
var state_53425__$1 = state_53425;
var statearr_53431_53443 = state_53425__$1;
(statearr_53431_53443[(2)] = null);

(statearr_53431_53443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (7))){
var inst_53421 = (state_53425[(2)]);
var state_53425__$1 = state_53425;
var statearr_53432_53444 = state_53425__$1;
(statearr_53432_53444[(2)] = inst_53421);

(statearr_53432_53444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (8))){
var inst_53417 = (state_53425[(2)]);
var state_53425__$1 = (function (){var statearr_53433 = state_53425;
(statearr_53433[(8)] = inst_53417);

return statearr_53433;
})();
var statearr_53434_53445 = state_53425__$1;
(statearr_53434_53445[(2)] = null);

(statearr_53434_53445[(1)] = (2));


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
});})(c__49012__auto___53439,ch))
;
return ((function (switch__48924__auto__,c__49012__auto___53439,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__48925__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__48925__auto____0 = (function (){
var statearr_53435 = [null,null,null,null,null,null,null,null,null];
(statearr_53435[(0)] = figwheel$client$heads_up_plugin_$_state_machine__48925__auto__);

(statearr_53435[(1)] = (1));

return statearr_53435;
});
var figwheel$client$heads_up_plugin_$_state_machine__48925__auto____1 = (function (state_53425){
while(true){
var ret_value__48926__auto__ = (function (){try{while(true){
var result__48927__auto__ = switch__48924__auto__.call(null,state_53425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48927__auto__;
}
break;
}
}catch (e53436){if((e53436 instanceof Object)){
var ex__48928__auto__ = e53436;
var statearr_53437_53446 = state_53425;
(statearr_53437_53446[(5)] = ex__48928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53447 = state_53425;
state_53425 = G__53447;
continue;
} else {
return ret_value__48926__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__48925__auto__ = function(state_53425){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__48925__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__48925__auto____1.call(this,state_53425);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__48925__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__48925__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__48925__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__48925__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__48925__auto__;
})()
;})(switch__48924__auto__,c__49012__auto___53439,ch))
})();
var state__49014__auto__ = (function (){var statearr_53438 = f__49013__auto__.call(null);
(statearr_53438[(6)] = c__49012__auto___53439);

return statearr_53438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49014__auto__);
});})(c__49012__auto___53439,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__49012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49012__auto__){
return (function (){
var f__49013__auto__ = (function (){var switch__48924__auto__ = ((function (c__49012__auto__){
return (function (state_53453){
var state_val_53454 = (state_53453[(1)]);
if((state_val_53454 === (1))){
var inst_53448 = cljs.core.async.timeout.call(null,(3000));
var state_53453__$1 = state_53453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53453__$1,(2),inst_53448);
} else {
if((state_val_53454 === (2))){
var inst_53450 = (state_53453[(2)]);
var inst_53451 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_53453__$1 = (function (){var statearr_53455 = state_53453;
(statearr_53455[(7)] = inst_53450);

return statearr_53455;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53453__$1,inst_53451);
} else {
return null;
}
}
});})(c__49012__auto__))
;
return ((function (switch__48924__auto__,c__49012__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__48925__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__48925__auto____0 = (function (){
var statearr_53456 = [null,null,null,null,null,null,null,null];
(statearr_53456[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__48925__auto__);

(statearr_53456[(1)] = (1));

return statearr_53456;
});
var figwheel$client$enforce_project_plugin_$_state_machine__48925__auto____1 = (function (state_53453){
while(true){
var ret_value__48926__auto__ = (function (){try{while(true){
var result__48927__auto__ = switch__48924__auto__.call(null,state_53453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48927__auto__;
}
break;
}
}catch (e53457){if((e53457 instanceof Object)){
var ex__48928__auto__ = e53457;
var statearr_53458_53460 = state_53453;
(statearr_53458_53460[(5)] = ex__48928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53461 = state_53453;
state_53453 = G__53461;
continue;
} else {
return ret_value__48926__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__48925__auto__ = function(state_53453){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__48925__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__48925__auto____1.call(this,state_53453);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__48925__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__48925__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__48925__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__48925__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__48925__auto__;
})()
;})(switch__48924__auto__,c__49012__auto__))
})();
var state__49014__auto__ = (function (){var statearr_53459 = f__49013__auto__.call(null);
(statearr_53459[(6)] = c__49012__auto__);

return statearr_53459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49014__auto__);
});})(c__49012__auto__))
);

return c__49012__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__49012__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49012__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__49013__auto__ = (function (){var switch__48924__auto__ = ((function (c__49012__auto__,figwheel_version,temp__4657__auto__){
return (function (state_53468){
var state_val_53469 = (state_53468[(1)]);
if((state_val_53469 === (1))){
var inst_53462 = cljs.core.async.timeout.call(null,(2000));
var state_53468__$1 = state_53468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53468__$1,(2),inst_53462);
} else {
if((state_val_53469 === (2))){
var inst_53464 = (state_53468[(2)]);
var inst_53465 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_53466 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_53465);
var state_53468__$1 = (function (){var statearr_53470 = state_53468;
(statearr_53470[(7)] = inst_53464);

return statearr_53470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53468__$1,inst_53466);
} else {
return null;
}
}
});})(c__49012__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__48924__auto__,c__49012__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48925__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48925__auto____0 = (function (){
var statearr_53471 = [null,null,null,null,null,null,null,null];
(statearr_53471[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48925__auto__);

(statearr_53471[(1)] = (1));

return statearr_53471;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48925__auto____1 = (function (state_53468){
while(true){
var ret_value__48926__auto__ = (function (){try{while(true){
var result__48927__auto__ = switch__48924__auto__.call(null,state_53468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48927__auto__;
}
break;
}
}catch (e53472){if((e53472 instanceof Object)){
var ex__48928__auto__ = e53472;
var statearr_53473_53475 = state_53468;
(statearr_53473_53475[(5)] = ex__48928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53476 = state_53468;
state_53468 = G__53476;
continue;
} else {
return ret_value__48926__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48925__auto__ = function(state_53468){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48925__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48925__auto____1.call(this,state_53468);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48925__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48925__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48925__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48925__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48925__auto__;
})()
;})(switch__48924__auto__,c__49012__auto__,figwheel_version,temp__4657__auto__))
})();
var state__49014__auto__ = (function (){var statearr_53474 = f__49013__auto__.call(null);
(statearr_53474[(6)] = c__49012__auto__);

return statearr_53474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49014__auto__);
});})(c__49012__auto__,figwheel_version,temp__4657__auto__))
);

return c__49012__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__53477){
var map__53478 = p__53477;
var map__53478__$1 = ((((!((map__53478 == null)))?((((map__53478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53478):map__53478);
var file = cljs.core.get.call(null,map__53478__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__53478__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__53478__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__53480 = "";
var G__53480__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53480),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__53480);
var G__53480__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53480__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__53480__$1);
if(cljs.core.truth_((function (){var and__40180__auto__ = line;
if(cljs.core.truth_(and__40180__auto__)){
return column;
} else {
return and__40180__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53480__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__53480__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__53481){
var map__53482 = p__53481;
var map__53482__$1 = ((((!((map__53482 == null)))?((((map__53482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53482):map__53482);
var ed = map__53482__$1;
var formatted_exception = cljs.core.get.call(null,map__53482__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__53482__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__53482__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__53484_53488 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__53485_53489 = null;
var count__53486_53490 = (0);
var i__53487_53491 = (0);
while(true){
if((i__53487_53491 < count__53486_53490)){
var msg_53492 = cljs.core._nth.call(null,chunk__53485_53489,i__53487_53491);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_53492);

var G__53493 = seq__53484_53488;
var G__53494 = chunk__53485_53489;
var G__53495 = count__53486_53490;
var G__53496 = (i__53487_53491 + (1));
seq__53484_53488 = G__53493;
chunk__53485_53489 = G__53494;
count__53486_53490 = G__53495;
i__53487_53491 = G__53496;
continue;
} else {
var temp__4657__auto___53497 = cljs.core.seq.call(null,seq__53484_53488);
if(temp__4657__auto___53497){
var seq__53484_53498__$1 = temp__4657__auto___53497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53484_53498__$1)){
var c__41026__auto___53499 = cljs.core.chunk_first.call(null,seq__53484_53498__$1);
var G__53500 = cljs.core.chunk_rest.call(null,seq__53484_53498__$1);
var G__53501 = c__41026__auto___53499;
var G__53502 = cljs.core.count.call(null,c__41026__auto___53499);
var G__53503 = (0);
seq__53484_53488 = G__53500;
chunk__53485_53489 = G__53501;
count__53486_53490 = G__53502;
i__53487_53491 = G__53503;
continue;
} else {
var msg_53504 = cljs.core.first.call(null,seq__53484_53498__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_53504);

var G__53505 = cljs.core.next.call(null,seq__53484_53498__$1);
var G__53506 = null;
var G__53507 = (0);
var G__53508 = (0);
seq__53484_53488 = G__53505;
chunk__53485_53489 = G__53506;
count__53486_53490 = G__53507;
i__53487_53491 = G__53508;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__53509){
var map__53510 = p__53509;
var map__53510__$1 = ((((!((map__53510 == null)))?((((map__53510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53510):map__53510);
var w = map__53510__$1;
var message = cljs.core.get.call(null,map__53510__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__40180__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__40180__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__40180__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__53512 = cljs.core.seq.call(null,plugins);
var chunk__53513 = null;
var count__53514 = (0);
var i__53515 = (0);
while(true){
if((i__53515 < count__53514)){
var vec__53516 = cljs.core._nth.call(null,chunk__53513,i__53515);
var k = cljs.core.nth.call(null,vec__53516,(0),null);
var plugin = cljs.core.nth.call(null,vec__53516,(1),null);
if(cljs.core.truth_(plugin)){
var pl_53522 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__53512,chunk__53513,count__53514,i__53515,pl_53522,vec__53516,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_53522.call(null,msg_hist);
});})(seq__53512,chunk__53513,count__53514,i__53515,pl_53522,vec__53516,k,plugin))
);
} else {
}

var G__53523 = seq__53512;
var G__53524 = chunk__53513;
var G__53525 = count__53514;
var G__53526 = (i__53515 + (1));
seq__53512 = G__53523;
chunk__53513 = G__53524;
count__53514 = G__53525;
i__53515 = G__53526;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__53512);
if(temp__4657__auto__){
var seq__53512__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53512__$1)){
var c__41026__auto__ = cljs.core.chunk_first.call(null,seq__53512__$1);
var G__53527 = cljs.core.chunk_rest.call(null,seq__53512__$1);
var G__53528 = c__41026__auto__;
var G__53529 = cljs.core.count.call(null,c__41026__auto__);
var G__53530 = (0);
seq__53512 = G__53527;
chunk__53513 = G__53528;
count__53514 = G__53529;
i__53515 = G__53530;
continue;
} else {
var vec__53519 = cljs.core.first.call(null,seq__53512__$1);
var k = cljs.core.nth.call(null,vec__53519,(0),null);
var plugin = cljs.core.nth.call(null,vec__53519,(1),null);
if(cljs.core.truth_(plugin)){
var pl_53531 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__53512,chunk__53513,count__53514,i__53515,pl_53531,vec__53519,k,plugin,seq__53512__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_53531.call(null,msg_hist);
});})(seq__53512,chunk__53513,count__53514,i__53515,pl_53531,vec__53519,k,plugin,seq__53512__$1,temp__4657__auto__))
);
} else {
}

var G__53532 = cljs.core.next.call(null,seq__53512__$1);
var G__53533 = null;
var G__53534 = (0);
var G__53535 = (0);
seq__53512 = G__53532;
chunk__53513 = G__53533;
count__53514 = G__53534;
i__53515 = G__53535;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__53537 = arguments.length;
switch (G__53537) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__53538_53543 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__53539_53544 = null;
var count__53540_53545 = (0);
var i__53541_53546 = (0);
while(true){
if((i__53541_53546 < count__53540_53545)){
var msg_53547 = cljs.core._nth.call(null,chunk__53539_53544,i__53541_53546);
figwheel.client.socket.handle_incoming_message.call(null,msg_53547);

var G__53548 = seq__53538_53543;
var G__53549 = chunk__53539_53544;
var G__53550 = count__53540_53545;
var G__53551 = (i__53541_53546 + (1));
seq__53538_53543 = G__53548;
chunk__53539_53544 = G__53549;
count__53540_53545 = G__53550;
i__53541_53546 = G__53551;
continue;
} else {
var temp__4657__auto___53552 = cljs.core.seq.call(null,seq__53538_53543);
if(temp__4657__auto___53552){
var seq__53538_53553__$1 = temp__4657__auto___53552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53538_53553__$1)){
var c__41026__auto___53554 = cljs.core.chunk_first.call(null,seq__53538_53553__$1);
var G__53555 = cljs.core.chunk_rest.call(null,seq__53538_53553__$1);
var G__53556 = c__41026__auto___53554;
var G__53557 = cljs.core.count.call(null,c__41026__auto___53554);
var G__53558 = (0);
seq__53538_53543 = G__53555;
chunk__53539_53544 = G__53556;
count__53540_53545 = G__53557;
i__53541_53546 = G__53558;
continue;
} else {
var msg_53559 = cljs.core.first.call(null,seq__53538_53553__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_53559);

var G__53560 = cljs.core.next.call(null,seq__53538_53553__$1);
var G__53561 = null;
var G__53562 = (0);
var G__53563 = (0);
seq__53538_53543 = G__53560;
chunk__53539_53544 = G__53561;
count__53540_53545 = G__53562;
i__53541_53546 = G__53563;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__41363__auto__ = [];
var len__41356__auto___53568 = arguments.length;
var i__41357__auto___53569 = (0);
while(true){
if((i__41357__auto___53569 < len__41356__auto___53568)){
args__41363__auto__.push((arguments[i__41357__auto___53569]));

var G__53570 = (i__41357__auto___53569 + (1));
i__41357__auto___53569 = G__53570;
continue;
} else {
}
break;
}

var argseq__41364__auto__ = ((((0) < args__41363__auto__.length))?(new cljs.core.IndexedSeq(args__41363__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__41364__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__53565){
var map__53566 = p__53565;
var map__53566__$1 = ((((!((map__53566 == null)))?((((map__53566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53566):map__53566);
var opts = map__53566__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq53564){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53564));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e53571){if((e53571 instanceof Error)){
var e = e53571;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e53571;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__53572){
var map__53573 = p__53572;
var map__53573__$1 = ((((!((map__53573 == null)))?((((map__53573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53573):map__53573);
var msg_name = cljs.core.get.call(null,map__53573__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1502518470088
