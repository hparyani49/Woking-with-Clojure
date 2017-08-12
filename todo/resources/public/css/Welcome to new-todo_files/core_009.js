// Compiled by ClojureScript 1.9.854 {}
goog.provide('new_todo.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('markdown.core');
goog.require('ajax.core');
goog.require('new_todo.ajax');
goog.require('new_todo.handlers');
goog.require('new_todo.subscriptions');
goog.require('goog.History');
new_todo.core.log = (function new_todo$core$log(var_args){
var args__41363__auto__ = [];
var len__41356__auto___47198 = arguments.length;
var i__41357__auto___47199 = (0);
while(true){
if((i__41357__auto___47199 < len__41356__auto___47198)){
args__41363__auto__.push((arguments[i__41357__auto___47199]));

var G__47200 = (i__41357__auto___47199 + (1));
i__41357__auto___47199 = G__47200;
continue;
} else {
}
break;
}

var argseq__41364__auto__ = ((((0) < args__41363__auto__.length))?(new cljs.core.IndexedSeq(args__41363__auto__.slice((0)),(0),null)):null);
return new_todo.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__41364__auto__);
});

new_todo.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return console.log(cljs.core.apply.call(null,cljs.core.str,params));
});

new_todo.core.log.cljs$lang$maxFixedArity = (0);

new_todo.core.log.cljs$lang$applyTo = (function (seq47197){
return new_todo.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47197));
});

new_todo.core.get_value = (function new_todo$core$get_value(id){
return document.getElementById(id).value;
});
new_todo.core.server = "http://localhost:3000/";
new_todo.core.error_handler = (function new_todo$core$error_handler(params){
return new_todo.core.log.call(null,"###########",params);
});
new_todo.core.nav_link = (function new_todo$core$nav_link(uri,title,page,collapsed_QMARK_){
var selected_page = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397)], null));
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_page),new cljs.core.Keyword(null,"update","update",1045576396))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-count","reset-count",-738707320)], null));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,page,cljs.core.deref.call(null,selected_page)))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),uri,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_page){
return (function (){
return cljs.core.reset_BANG_.call(null,collapsed_QMARK_,true);
});})(selected_page))
], null),title], null)], null);
});
new_todo.core.navbar = (function new_todo$core$navbar(){
var with_let47201 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let47201","with-let47201",-566927643));
var temp__4661__auto___47203 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___47203 == null)){
} else {
var c__41859__auto___47204 = temp__4661__auto___47203;
if((with_let47201.generation === c__41859__auto___47204.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let47201.generation = c__41859__auto___47204.ratomGeneration;
}


var init47202 = (with_let47201.length === (0));
var collapsed_QMARK_ = ((init47202)?(with_let47201[(0)] = reagent.core.atom.call(null,true)):(with_let47201[(0)]));
var res__41860__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.navbar-dark.bg-primary","nav.navbar.navbar-dark.bg-primary",-441649164),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.navbar-toggler.hidden-sm-up","button.navbar-toggler.hidden-sm-up",-398271905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init47202,collapsed_QMARK_,with_let47201){
return (function (){
return cljs.core.swap_BANG_.call(null,collapsed_QMARK_,cljs.core.not);
});})(init47202,collapsed_QMARK_,with_let47201))
], null),"\u2630"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.collapse.navbar-toggleable-xs","div.collapse.navbar-toggleable-xs",-474131623),(cljs.core.truth_(cljs.core.deref.call(null,collapsed_QMARK_))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"in"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"Pinboard"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_todo.core.nav_link,"#/","Home",new cljs.core.Keyword(null,"home","home",-74557309),collapsed_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_todo.core.nav_link,"#/about","About",new cljs.core.Keyword(null,"about","about",1423892543),collapsed_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_todo.core.nav_link,"#/update","Update",new cljs.core.Keyword(null,"update","update",1045576396),collapsed_QMARK_], null)], null)], null)], null);

return res__41860__auto__;
});
new_todo.core.about_page = (function new_todo$core$about_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),(function (){var pins = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-pinboard","get-pinboard",-903511389)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Your pending pins are"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),cljs.core.map.call(null,((function (pins){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Author: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(x))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Task: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(x))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Description : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(x))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assigned to: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"assign","assign",-1590426222).cljs$core$IFn$_invoke$arity$1(x))].join(''))].join('')], null);
});})(pins))
,pins)], null)], null)], null);
})()], null);
});
new_todo.core.update_page = (function new_todo$core$update_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"The total count is: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Click",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-count","set-count",-686115399)], null));
})], null)], null)], null);
});
new_todo.core.home_handler = (function new_todo$core$home_handler(response){
alert("Added to your pinboard");

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-pinboard","set-pinboard",-1040674308),response], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"about","about",1423892543)], null));
});
new_todo.core.home_page = (function new_todo$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to your Pinboard"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),"#",new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
var u = new_todo.core.get_value.call(null,"auth");
var t = new_todo.core.get_value.call(null,"tname");
var d = new_todo.core.get_value.call(null,"desc");
var a = new_todo.core.get_value.call(null,"assign");
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_todo.core.server),cljs.core.str.cljs$core$IFn$_invoke$arity$1("addpin")].join(''),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"u","u",-1156634785),u,new cljs.core.Keyword(null,"t","t",-1397832519),t,new cljs.core.Keyword(null,"d","d",1972142424),d,new cljs.core.Keyword(null,"a","a",-2123407586),a], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),new_todo.core.home_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),new_todo.core.error_handler], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Author's Name",new cljs.core.Keyword(null,"id","id",-1388402092),"auth"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Task-name",new cljs.core.Keyword(null,"id","id",-1388402092),"tname"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Task-details",new cljs.core.Keyword(null,"id","id",-1388402092),"desc"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Assigned To?",new cljs.core.Keyword(null,"id","id",-1388402092),"assign"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-success",new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Submit"], null)], null)], null)], null)], null);
});
new_todo.core.pages = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Var(function(){return new_todo.core.home_page;},new cljs.core.Symbol("new-todo.core","home-page","new-todo.core/home-page",2099348163,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"new-todo.core","new-todo.core",2132023928,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/new_todo/core.cljs",16,1,73,73,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(new_todo.core.home_page)?new_todo.core.home_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Var(function(){return new_todo.core.about_page;},new cljs.core.Symbol("new-todo.core","about-page","new-todo.core/about-page",781475703,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"new-todo.core","new-todo.core",2132023928,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/new_todo/core.cljs",17,1,51,51,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(new_todo.core.about_page)?new_todo.core.about_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Var(function(){return new_todo.core.update_page;},new cljs.core.Symbol("new-todo.core","update-page","new-todo.core/update-page",-193542318,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"new-todo.core","new-todo.core",2132023928,null),new cljs.core.Symbol(null,"update-page","update-page",1137051636,null),"src/cljs/new_todo/core.cljs",18,1,61,61,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(new_todo.core.update_page)?new_todo.core.update_page.cljs$lang$test:null)]))], null);
new_todo.core.page = (function new_todo$core$page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_todo.core.navbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_todo.core.pages.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397)], null))))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__42034__auto___47210 = (function (params__42035__auto__){
if(cljs.core.map_QMARK_.call(null,params__42035__auto__)){
var map__47205 = params__42035__auto__;
var map__47205__$1 = ((((!((map__47205 == null)))?((((map__47205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47205):map__47205);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"home","home",-74557309)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__42035__auto__)){
var vec__47207 = params__42035__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"home","home",-74557309)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__42034__auto___47210);

var action__42034__auto___47216 = (function (params__42035__auto__){
if(cljs.core.map_QMARK_.call(null,params__42035__auto__)){
var map__47211 = params__42035__auto__;
var map__47211__$1 = ((((!((map__47211 == null)))?((((map__47211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47211.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47211):map__47211);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"about","about",1423892543)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__42035__auto__)){
var vec__47213 = params__42035__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"about","about",1423892543)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__42034__auto___47216);

var action__42034__auto___47222 = (function (params__42035__auto__){
if(cljs.core.map_QMARK_.call(null,params__42035__auto__)){
var map__47217 = params__42035__auto__;
var map__47217__$1 = ((((!((map__47217 == null)))?((((map__47217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47217):map__47217);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"update","update",1045576396)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__42035__auto__)){
var vec__47219 = params__42035__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"update","update",1045576396)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/update",action__42034__auto___47222);

new_todo.core.hook_browser_navigation_BANG_ = (function new_todo$core$hook_browser_navigation_BANG_(){
var G__47223 = (new goog.History());
goog.events.listen(G__47223,goog.history.EventType.NAVIGATE,((function (G__47223){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__47223))
);

G__47223.setEnabled(true);

return G__47223;
});
new_todo.core.fetch_docs_BANG_ = (function new_todo$core$fetch_docs_BANG_(){
return ajax.core.GET.call(null,"/docs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__47224_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-docs","set-docs",405672054),p1__47224_SHARP_], null));
})], null));
});
new_todo.core.mount_components = (function new_todo$core$mount_components(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return new_todo.core.page;},new cljs.core.Symbol("new-todo.core","page","new-todo.core/page",1169430158,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"new-todo.core","new-todo.core",2132023928,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"src/cljs/new_todo/core.cljs",11,1,116,116,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(new_todo.core.page)?new_todo.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
new_todo.core.init_BANG_ = (function new_todo$core$init_BANG_(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

new_todo.ajax.load_interceptors_BANG_.call(null);

new_todo.core.fetch_docs_BANG_.call(null);

new_todo.core.hook_browser_navigation_BANG_.call(null);

return new_todo.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map?rel=1502523151935
