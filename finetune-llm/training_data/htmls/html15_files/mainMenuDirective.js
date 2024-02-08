"use strict";var mainMenuCtrl=["$scope","$rootScope","$timeout","authService","$location","$state","$stateParams","acctService","websiteService","i18nService",function(o,n,e,s,t,i,l,r,a,p){var u=this;u.show_menu="",u.collapsed=!1,u.mobile_shown=!1,u.skeleDlgFor={},o.websiteUrl=a.get_base_url(),u.onCollapser=function(){u.collapsed=!u.collapsed,u.collapsed?r.setUserPrefs({mmnarr:!0},null):r.setUserPrefs({mmnarr:null},null),o.ga("menu-collapse")},u.onUserBtn=function(n){!o.currentUser.login_name||o.app&&"admin"!==o.currentUser.level?u.show_login():u.onMenuBtn(n,"user")},u.versionClick=function(o){o.ctrlKey&&$("#topcontainer").parent().toggleClass("show-innards")},u.onMenuBtn=function(n,e){n.stopPropagation(),u.show_menu==e?(u.show_menu="",o.mobile&&(u.mobile_shown=!1)):(o.dismiss_popups("hard",n),u.show_menu=e)},o.$on("dismiss-popups",function(o,n){u.show_menu=""}),u.dismiss_popups=function(n){o.dismiss_popups("hard",n),o.mobile&&(u.mobile_shown=!1)},u.onPrefs=function(n){n&&n.stopPropagation(),o.mobile&&(u.mobile_shown=!1),o.prefs.show()},u.onPlayBtn=function(n,e,s){n&&n.stopPropagation(),"c"!=e&&o.selectTab(o.getPristineTab()),o.mobile&&(u.mobile_shown=!1),i.go("index.playoptions",{c:e,sd:s})},u.onPlay=function(n){var s=10;if(o.board_initialized&&o.currTab&&o.currTab.play_mode){var t=l;if("play"!=o.currTab.play_mode.mode||1!=t.resume){if(o.dismiss_popups("hard"),"1"!=t.sd)return o.playOptions.onOptions(null,"init"),void("function"==typeof n&&n());var i=t.c;"c"==i&&(i=o.curr_fen.split(" ")[1]),"b"!=i&&(i="w"),o.currTab.board_orientation="b"==i[0]?"black":"white",o.ga("play-start",i,""),o.currTab.play_mode.switch_mode("play",o.curr_fen,i),"function"==typeof n&&n()}}else{if(s>500)return;e(function(){u.onPlay(n)},s*=2)}},u.onSetUpBtn=function(n,e){function s(){var n=o.setUp.shown;e?(o.currTab.is_pristine||o.addTab(),o.currTab.show_new_game_panel=!1,o.enterSetUpMode()):n||(o.currTab.show_new_game_panel=!1,o.enterSetUpMode())}n.stopPropagation(),u.dismiss_popups(n),o.setUp?s():u.showSkeleDlg("setUp",s)},u.showOpenDlg=function(n,e){function s(){o.show_open_dlg=!0,"examples"===n?o.open.openExamplesDlg(e&&e.ctrlKey):o.open.openImportDlg()}e.stopPropagation(),u.dismiss_popups(e),o.setUp&&o.setUp.hide(),u.openDlgClass="examples"===n?"show-examples":"show-import",o.open?s():u.showSkeleDlg("open",s)},u.onImportBtn=function(o){u.showOpenDlg("import",o)},u.onExamplesBtn=function(o){u.showOpenDlg("examples",o)},u.onHistoryBtn=function(n){u.dismiss_popups(n);var e=o.key_focus;o.key_focus="",o.history2_openDlg(function(){o.key_focus=e})},u.clickContact=function(n,e){n.stopPropagation(),o.dismiss_popups("hard",null),o.mobile&&(u.mobile_shown=!1),o.intro&&o.intro.step(0),u.contactDlgVariant=e,o.show_contact_us_dlg=!0},u.clickLogo=function(){o.dismiss_popups("hard",null)},u.onDarkMode=function(n){n.stopPropagation(),u.dismiss_popups(null),o.$broadcast("mainmenu-darkmode")},u.clickSignUp=function(n,e,s){e&&(e.stopPropagation(),e.preventDefault()),u.dismiss_popups(null),o.auto_pop_signup=!1,s?a.go("free_signup_page"):o.show_website_frame=!0,o.ga("goto signup frame",n,"")},u.clickPricing=function(n,e){e&&(e.stopPropagation(),e.preventDefault()),o.ga("goto","pricing page",n),o.dismiss_popups("hard",null),a.go("pricing",!0)},u.clickUpgrade=function(n,e){e&&(e.stopPropagation(),e.preventDefault()),u.dismiss_popups(null),a.go("subscription_chg"),o.ga("goto","subscription page",n)},u.onLang=function(e,s){n.currentUser.lang=s;n.currentUser.login_name;r.uploadPrefs({lang:s},function(n){n&&o.popupMsg.showText(n,!1,4500)})},u.showSkeleDlg=function(n,e,s){u.skeleDlgFor={who:n,onLoad:e,onCancel:s},o.show_skele_dlg=!0},u.hideSkeleDlg=function(){u.skeleDlgFor&&"function"==typeof u.skeleDlgFor.onCancel&&u.skeleDlgFor.onCancel(),u.skeleDlgFor={},o.show_skele_dlg=!1},o.$watch("currentUser.prefs.mmnarr",o=>u.collapsed=o),n.$watch("i18n_dir",function(o){var n=$("BODY");n.removeClass("ltr rtl"),"ltr"!=o&&"rtl"!=o||n.addClass(o)}),o.$on("lazy-loaded",function(o,n){u.skeleDlgFor&&u.skeleDlgFor.who===n.module&&(u.skeleDlgFor.onLoad&&u.skeleDlgFor.onLoad(),u.hideSkeleDlg())}),u.logout=function(o){o&&o.stopPropagation(),u.dismiss_popups(null),s.logout().then(function(o){i.go("login")})},u.show_login=function(){o.setUp&&o.setUp.hide(),o.mainMenu.show_menu="",o.auto_pop_signup=!1,s.logout().then(function(o){i.go("login")})}}];chessStories.directive("appMainMenu",[function(){return{restrict:"EA",scope:!1,templateUrl:"/static001767/app/shared/mainMenu/mainMenuView.html",controllerAs:"mainMenu",link:function(o,n,e){var s=$(".main-menu-cont"),t=s[0];t=$(".main-menu-cont .import .btn-name")[0],n.on("transitionend",".main-menu-cont",n=>{"max-width"===n.originalEvent.propertyName&&n.target===t&&o.$broadcast("size-changed")}),n.removeClass("loading"),s.removeClass("dead")},controller:mainMenuCtrl}}]),angular.module("chessStories").controller("playController",["$scope","$timeout","$location",function(o,n,e){var s=10;!function e(){if(o.mainMenu&&o.mainMenu.onPlay)o.mainMenu.onPlay();else{if((s*=2)>500)return;n(function(){e()},s)}}()}]),angular.module("chessStories").controller("playOptionsController",["$scope","$timeout","$state","$stateParams",function(o,n,e,s){var t=10;!function i(){if(o.currTab&&o.currTab.play_mode){var l,r,a,p;l=e.current.name,r=o.currTab,a=r.play_mode,p=a.game,a.user_color=["w","b","r","c"].includes(s.c)?s.c:"w",["1","2","3","4","5","6","7","8","9"].includes(s.l)||(s.l="5"),a.level=parseInt(s.l),o.dismiss_popups("hard",null),"index.playoptions"==l&&(a.opts_initial=!0),s.sd?("c"==a.user_color&&p.curr_move&&(r.board_orientation="b"!=p.curr_move.color?"black":"white"),a.paused=!1,a.paused_at_move=null,e.go("index.play",{c:a.user_color,l:a.level,sd:1})):a.options_shown=!0}else{if((t*=2)>500)return;n(function(){i()},t)}}()}]);