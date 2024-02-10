"use strict";angular.module("chessStories").directive("appGameStats",["$timeout",function(a){return{restrict:"EA",scope:!1,templateUrl:"/static001767/app/shared/gameStats/gameStatsView.html",controllerAs:"game_stats",link:function(a,e,o){},controller:["$scope","$filter",function(a,e){var o=this;function s(a){a.good_moves=[],a.good_moves.idx=0,a.inaccuracies=[],a.inaccuracies.idx=0,a.mistakes=[],a.mistakes.idx=0,a.blunders=[],a.blunders.idx=0,a.avg_cp_loss=0,a.total_cp_loss=0,a.n_moves=0}o.w={},o.b={},o.fill=function(){if(s(o.w),s(o.b),a.currTab&&a.currTab.game&&a.currTab.game.moves&&a.currTab.game.moves.length){var t=a.currTab.game.moves;t.forEach(function(a){var s=a.index_number,t="w"==a.color?o.w:o.b;t.n_moves++;var r=e("qual_ch")(a);"!"==r?(t.good_moves.push(s),a.qual="good_move"):"?!"==r?(t.inaccuracies.push(s),a.qual="inaccuracy"):"?"==r?(t.mistakes.push(s),a.qual="mistake"):"??"==r?(t.blunders.push(s),a.qual="blunder"):a.qual="";var c=Math.max(a.loss||0,0);c>-5e4&&c<5e4&&(t.total_cp_loss+=c),a}),[o.w,o.b].forEach(function(a){a.avg_cp_loss=a.n_moves?Math.round(10*a.total_cp_loss/a.n_moves)/10:0})}},o.onClick=function(e,o){if(e&&e.stopPropagation(),!(o.length<1)){var s=a.currTab,t=o[o.idx];o.idx=(o.idx+1)%o.length,a.selectMove(s,t)}},a.$watchGroup(["currTab","currTab.game.moves.length"],function(){o.fill()}),a.$on("score-mv-done",function(){o.fill()}),o.fill()}]}}]);
