"use strict";var newGamePanelCtrl=["$scope","$timeout",function(e,a){e.currTab&&(e.currTab.show_new_game_panel=!0),e.$on("dismiss-popups",function(a,n){e.currTab&&e.currTab.show_new_game_panel&&("hard"==n.why||"Esc"==n.why)&&(e.currTab.show_new_game_panel=!1)}),e.$watch("currTab.is_pristine",function(a){!a&&e.currTab&&(e.currTab.show_new_game_panel=!1)})}];chessStories.directive("appNewGamePanel",[function(){return{restrict:"EA",scope:!1,templateUrl:"/static001767/app/shared/newGamePanel/newGamePanelView.html",controller:newGamePanelCtrl,controllerAs:"newGamePanel",link:function(e,a,n){}}}]);
