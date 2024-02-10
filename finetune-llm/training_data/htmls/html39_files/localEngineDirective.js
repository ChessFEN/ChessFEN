"use strict";angular.module("chessStories").directive("appLocalEngine",[function(){return{restrict:"EA",scope:!1,templateUrl:"/static001767/app/shared/localEngine/localEngineView.html",controllerAs:"engine",controller:["$scope","$timeout","localStorageService","engPool","Kbd","i18nService","fenService","gameService","scoresService",function(e,n,t,r,i,s,o,a,l){var v=this,u=s.phrases,p=null;new Chess;function c(e){if(!e||!e.length)return[{content:""}];var n=[];e[0].ply%2&&n.push({css_class:"movenum",content:(e[0].ply+1)/2+"..."});for(var t=0;t<e.length;t++){var r=e[t];r.ply%2==0&&n.push({css_class:"movenum",content:r.ply/2+1+"."});var i=t+1<e.length?Game.mv2uci(e[t+1]):"";n.push({css_class:"mov clk "+r.color,fena:r.fen_after,from:r.from,to:r.to,nmuci:i,content:r.san})}return n}function f(t,r,i,s){if(v.error=!1,v.stale_display=!1,v.engine_done=!1,_.each(v.pvLinesShown,function(e){e.pre_html&&e.pre_html.splice(0,e.pre_html.length),e.score=void 0}),v.savedLines.splice(0,v.savedLines.length),$(".engine-output-body.error").removeClass("linger"),null===i||!o.is_valid_pos(i))return v.error=!0,t.engine_best={fen:"",move:null},v.pvLinesShown.splice(0,v.pvLinesShown.length),void n(function(){$(".engine-output-body.error").addClass("linger")},10);var a=new Array(v.pvLinesShown.length);_.each(a,function(e,n){a[n]=[]});var p={depth:s,multipv:v.pvLinesShown.length},f=t.game.idx_from_fen(i);r.analyze(i,p,function(r,s){if("result"==r){if(!v.stale_display&&i!==e.curr_fen)return;var o=s.score;if(1e5==o)o=u.White_has_won;else if(-1e5==o)o=u.Black_has_won;else{if(v.new_analysis){if(1!==s.depth)return;v.new_analysis=!1}s.mate_in&&(o=(o=s.mate_in>0?u.White_wins_in:u.Black_wins_in)+" "+Math.abs(s.mate_in))}var p=s.pvnum-1,_=function(e,n){function t(e,n){if(e.length>=n.length)return!1;for(var t=0;t<e.length;t++)if(r=e[t],i=n[t],r.from!=i.from||r.to!=i.to||r.promotion!=i.promotion)return!1;var r,i;return!0}if(e.moves.length>5)return e;for(var r=n.length-1;r>=0;r--)if(t(e.moves,n[r].moves))return n[r];return e}(s,a[p]);_===s&&a[p].push(s),0==p&&(t.engine_best={fen:i,move:_.moves.length>0?_.moves[0]:null},v.moveScore=o,v.moveScoreDepth=s.depth,null!==f&&l.add_score_local(t.game,f,s)),p<v.pvLinesShown.length&&(v.pvLinesShown[p]={score:o,depth:s.depth,pre_html:c(_.moves)},n(function(){"engine"==e.key_focus&&n(S,50)}),v.savePVLinesTimer&&n.cancel(v.savePVLinesTimer),v.savePVLinesTimer=n(function(){v.store_pv_lines(i,s.depth,v.pvLinesShown),v.savePVLinesTimer=null},500))}else"done"==r&&(n(function(){},1),v.new_analysis||(v.engine_done=!0))})}v.error=!1,v.pvLinesShown=[],v.savedLines=[],v.onlyDepth=!1,v.maxPvLineCount=7,v.moveScore=null,v.moveScoreDepth=null,v.new_analysis=!1,v.active_el=null,v.stale_display=!1,v.engine_done=!0,v.savePVLinesTimer=null,v.maxPVLinesStored=200,v.nPVLinesStored=0;var h=e.currentUser.login_name+".pvs.",m=h.replaceAll(".","\\.");v.store_pv_lines=function(n,r,i){if(t.isSupported&&e.currentUser&&e.currentUser.login_name){var s=h+v.last_fen,o=t.get(s+".d");(!o||r>o)&&(t.set(s+".p",i),t.set(s+".d",r),t.set(s+".t",Date.now())),o||(v.nPVLinesStored>=v.maxPVLinesStored&&v.evict_pv_lines(),v.nPVLinesStored++)}},v.fetch_pv_lines=function(n){if(t.isSupported&&e.currentUser&&e.currentUser.login_name){var r=h+n,i=t.get(r+".p");return i?(t.set(r+".t",Date.now()),i):void 0}},v.evict_pv_lines=function(){var e=t.keys(),n=RegExp(m+".*.t");if((e=e.filter(e=>n.test(e))).length){var r,i=null,s=1/0;e.forEach(function(e){(r=t.get(e))<s&&(i=e,s=r)}),t.remove(i),i=i.substr(0,i.length-1),t.remove(i+"p"),t.remove(i+"d"),v.nPVLinesStored--}};var g=RegExp(m+".*.p");t.keys().forEach(function(e){g.test(e)&&v.nPVLinesStored++}),v.last_fen="",v.auto_run=!1;var d=20;function w(n){if(v.active_el&&v.active_el.removeClass("active"),v.active_el=n,n&&n.length){n.addClass("active");var t=n.hasClass("sentinel"),r=n.attr("data-fena");e.setFen(r);var i,s=e.currTab,o=s.game.mv_from_fen(r);Game.is_move(o)||(o=null),i=t?o?o.san:u.job_name_setup:n.text(),s.setjp("p",e.curr_fen,n.attr("data-nmuci"),null,i,""),function(e,n,t){if(e.last_move_arrow=null,n.hasClass("sentinel"))t&&Game.is_move(t)&&(e.last_move_arrow="lastmove,10,"+t.from+" "+t.to+",");else{var r=n.attr("data-from"),i=n.attr("data-to");e.last_move_arrow="lastmove,10,"+r+" "+i+","}}(s,n,o),e.key_focus="engine";var a=n.parents(".pvline");e.scrollIntoView(a,t?a.find(".scordep"):n,!0,null)}}function L(e){var n=$(".pvline:has(.mov.active)");if(!(0===n.length||"up"===e&&!n.hasClass("multipv")||"down"===e&&n.hasClass("last"))){var t=$(".pvline:has(.active) .mov").index(v.active_el),r=$(".pvline").index(n);if("up"===e)r-=1;else{if("down"!==e)return;r+=1}var i=$(".pvline:eq("+r+")").find(".mov");t=Math.min(t,i.length-1),w(i.eq(t))}}function S(){var n=e.curr_fen;w($('.engine-output .mov[data-fena="'+n+'"]'))}v.onRun=function(){var n=e.curr_fen;n=o.fix_fen(n);var t=e.currTab;if(v.prepareFirstRun(),v.auto_run)return p.stop(),v.auto_run=!1,v.engine_done=!0,void(d=20);n===v.last_fen?(d=99,v.auto_run=!0,v.new_analysis=!0):d=20,v.last_fen=n,f(t,p,n,d)},v.prepareFirstRun=function(){p||(p=r.get_engine()),0===v.pvLinesShown.length&&v.pvLinesShown.push({})},v.onLineAdd=function(){if(v.pvLinesShown.length!==v.maxPvLineCount){0===v.pvLinesShown.length&&(v.onlyDepth=!1);var n={},t=!1;!v.auto_run&&v.savedLines.length>0&&(n=v.savedLines.pop(),t=!0),v.pvLinesShown.push(n),$(".local-engine").attr("pv-lines-shown",v.pvLinesShown.length),!t&&p&&(p.stop(),v.new_analysis=!0,f(e.currTab,p,e.curr_fen,d))}},v.onLineDel=function(){if(0!==v.pvLinesShown.length){1===v.pvLinesShown.length&&(v.onlyDepth=!0);var e=v.pvLinesShown.pop();v.auto_run||v.savedLines.push(e),$(".local-engine").attr("pv-lines-shown",v.pvLinesShown.length)}},e.$watch("curr_fen",function(n){var t=v.fetch_pv_lines(n);v.auto_run&&p?(v.last_fen=n,v.new_analysis=!0,f(e.currTab,p,n,d)):t?(v.pvLinesShown=t.slice(0,v.pvLinesShown.length),v.stale_display=!1):!v.last_fen||n===v.last_fen||v.active_el&&n===v.active_el.attr("data-fena")?v.stale_display=!1:(v.stale_display=!0,w(null))}),e.$watch("foldable_sections_shown.local_engine",function(n){n?e.curr_fen!==v.last_fen&&(v.last_fen=e.curr_fen,v.prepareFirstRun(),v.new_analysis=!0,f(e.currTab,p,e.curr_fen,d)):(p&&(p.stop(),v.engine_done=!0),v.auto_run=!1)}),e.engine_area_on_key=function(e){var n=e.keyCode;if(n==i.LEFT)return e.preventDefault(),e.stopPropagation(),void function(){var e=v.active_el;for(e=$(e).first().prev();e.length&&!e.hasClass("mov");e=e.prev());e.length&&w(e)}();if(n==i.RIGHT)return e.preventDefault(),e.stopPropagation(),void function(){var e=v.active_el;for(e=$(e).first().next();e.length&&!e.hasClass("mov");e=e.next());e.length&&w(e)}();if(n==i.UP)e.preventDefault(),e.stopPropagation(),L("up");else if(n==i.DOWN)e.preventDefault(),e.stopPropagation(),L("down");else{if(n==i.HOME)return void(void w($(".pvline:has(.mov.active) .mov").first())&&e.preventDefault());if(n==i.END)return void(void w($(".pvline:has(.mov.active) .mov").last())&&e.preventDefault())}},$(".engine-output").on("click",".mov",function(n){var t=$(this);e.key_focus="engine",v.stale_display=!1,w(t),e.currTab.is_pristine=!1}),v.onWheel=function(e,n,t,r){if(e.preventDefault(),n){var i=$(e.target).closest(".pvline");if(i&&i.length){var s={left:(n>0?"-":"+")+"=50px",top:"+=0px"};i.finish().scrollTo(s,250)}}}}]}}]);
