"use strict";angular.module("chessStories").directive("appDgameDlg",["i18nService","acctService",function(o,e){return{restrict:"EA",scope:!1,templateUrl:"/static001767/app/shared/dgameDlg/dgameDlgView.html",controllerAs:"dgameDlg",controller:["$scope",function(n){var r=this;n.i18n=o.phrases,r.shown=!1,r.color="w",r.tutorMode=!1,r.showTutorInfo=!1,r.remember=!1,r.cb=null,r.show=function(o){r.shown=!0,"a"!==r.color&&(r.color=n.currTab.board_orientation[0]),r.cb=o},r.hide=function(){r.shown=!1;var o={"dg.c":null,"dg.t":null};r.remember,o["dg.c"]="a"===r.color?r.color:null,e.setUserPrefs(o)},n.$watch("currentUser.prefs",function(o){o&&(r.color=o["dg.c"]||r.color,r.tutorMode=_.isUndefined(o["dg.t"])?r.tutorMode:o["dg.t"],r.remember=_.intersection(["dg.c","dg.t"],Object.keys(o)).length>0)}),r.onColorBtn=function(o){r.color=o},r.onStartDecoding=function(){r.hide(),r.cb(r.color,r.tutorMode)},r.onClose=function(){var o=n.currTab;r.hide(),o.show_decode_card=o.game.moves.length&&!o.jobs.length},n.$on("show-dgame-dlg",function(o,e){r.show(e.dgameCb)}),n.$on("Esc",r.onClose)}],link:function(o,e){$(".dgame-dlg",e).draggable({containment:"document",cancel:".dlg-inner",scroll:!1})}}}]);
