"use strict";angular.module("chessStories").controller("shareDlgController",["$rootScope","$scope","$state","$stateParams","$location","$window","$timeout","i18nService","shareService",function(e,t,o,n,s,a,r,i,h){var c=this;t.share_dlg=c;var l,d,u=i.phrases;c.show=function(){$(".share-dlg").removeClass("ng-hide")},c.hide=function(){$(".share-dlg").addClass("ng-hide"),o.go("index")},c.onShare=function(e,o){e.stopPropagation();var n=null,s=encodeURIComponent(c.url);if("facebook"==o)t.ga("share","web-facebook",""),n="https://www.facebook.com/sharer.php?u="+s;else if("twitter"==o){t.ga("share","web-twitter","");var i=encodeURIComponent("DecodeChess");n="https://twitter.com/intent/tweet?url="+s+"&text="+encodeURIComponent(u.twitter_text)+",&hashtags="+i}else if("linkedin"==o){t.ga("share","web-linkedin","");encodeURIComponent("DecodeChess");n="https://www.linkedin.com/shareArticle?mini=true&url="+s+"&title=DecodeChess&summary="+encodeURIComponent(u.twitter_text)+"&source=DecodeChess"}n&&a.open(n,"_blank"),r(function(){c.hide()},1)},c.onCopy=function(e){e&&e.stopPropagation();var o=document.getElementById("the-share-url");o.select(),o.setSelectionRange&&o.setSelectionRange(0,99999),document.execCommand("copy"),t.ga("share","web-copyurl","")},c.onClose=function(e){c.hide()},l=n.tab,d=l.to_share(),h.create(d,function(e){if("ok"!=e.status)t.popupMsg.showText("Oops! Something went wrong. Try again later."),o.go("index");else{var n=s.absUrl(),a=s.url(),r=s.absUrl().substr(0,n.length-a.length)+"/shared?k="+e.share_key;if(_.isFunction(navigator.share))try{var i={title:"DecodeChess",text:"See this explanation in DecodeChess!",url:r};return navigator.share(i),t.ga("share","native",""),void o.go("index")}catch(e){}c.url=r,t.share_url=r,c.show()}})}]);