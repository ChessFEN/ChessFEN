"use strict";angular.module("chessStories").directive("appDecodeCandidates",[function(){return{restrict:"EA",scope:!1,templateUrl:"/static001767/app/shared/decodeCandidates/decodeCandidatesView.html",controllerAs:"dcand",controller:["$scope","$timeout","i18nService","Kbd",function(e,t,n,r){var c=n.phrases;this.Dcand=function(){this.filter="*",this.upd_count=1,this.get_cands=function(e){if(!e.game_map)return[];var t=e.game.moves||[],n=this.filter;if(t.forEach(function(e,n){e.interesting=0,e.next_san=n<t.length-1?t[n+1].name:c.suggestions_end}),t.length<10)return[];var r=_.filter(t,function(e){return e.interest_r&&0!=e.index_number&&e.interest_r>30&&("*"==n||e.color[0]==n)});return r=_.sortBy(r,function(e){return-e.interest_r}),r=_.first(r,6),r=_.map(r,function(e){var n=t[e.index_number-1];return n.interesting=e.interest_r,n})}},this.Dcand.prototype.setFilter=function(e){this.filter=e},e.decode_candidates=[],this.on_click=function(t,n){var r=e.currTab;e.selectMove(r,n.index_number),e.key_focus="dcands"},e.dcands_on_key=function(t){var n=t.keyCode;if(n==r.LEFT||n==r.RIGHT||n==r.HOME||n==r.END){var c=e.currTab,a=e.decode_candidates;if(a&&!(a.length<1)){var i=_.findIndex(a,function(t){return t.active||t.job&&t.job===e.currTab.currJob});i<0&&(i=0),n==r.LEFT?i=Math.max(i-1,0):n==r.RIGHT?i=Math.min(i+1,a.length-1):n==r.HOME?i=0:n==r.END&&(i=a.length-1),e.selectMove(c,a[i].index_number)}}},e.$watchGroup(["currTab","currTab.game.moves.length","currTab.game.moves","currTab.dcand.upd_count","currTab.dcand.filter"],function(t,n,r){e.currTab.dcand&&e.currTab.dcand.get_cands&&(e.decode_candidates=e.currTab.dcand.get_cands(e.currTab))})}]}}]);
