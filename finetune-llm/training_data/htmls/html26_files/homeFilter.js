var filter_module=angular.module("chessFilters",[]),EMAIL_REX=/^([^@]+)@[^.]+\..+$/;filter_module.filter("username",function(){return function(e){var n=e.fullname||e.login_name;return n?n=n.replace(EMAIL_REX,"$1"):""}}),filter_module.filter("lang",function(){return function(e){return e&&e.lang?e.lang:"english"}}),filter_module.filter("langname",function(){return function(e){return e&&{english:"English",spanish:"Español",portuguese:"Português",french:"Français",german:"Deutsch",russian:"Русский",norwegian:"Norsk",dutch:"Nederlands",italian:"Italiano",hebrew:"עברית"}[e]||"English"}}),filter_module.filter("langcode",function(){return function(e){return e&&{english:"En",spanish:"Es",portuguese:"Pt",french:"Fr",german:"De",russian:"Ru",norwegian:"No",dutch:"Nl",italian:"It",hebrew:"He"}[e]||"En"}}),filter_module.filter("usermail",function(){return function(e){var n=e.login_name;return n&&n.match(EMAIL_REX)?n:e.email?e.email:""}}),filter_module.filter("active",function(){return function(e){return[(e=e.filter(function(e){return e.active}))[0]]}}),filter_module.filter("complete",function(){return function(e){return(e=e.filter(function(e){return"complete"==e.state}))[0]}}),filter_module.filter("id",function(){return function(e,n){return(e=e.filter(function(e){return e.CSId==n}))[0]}}),filter_module.filter("score",function(){return function(e){if(!isFinite(e))return"";if(Math.abs(e)>99e3){if(e>99e3)return 1e5==e?"+#":"+#"+Math.floor((100001-e)/2);if(e<-99e3)return-1e5==e?"-#":"-#"+Math.floor((100001+e)/2)}var n=parseFloat(e/100).toFixed(2);return"-"!=n[0]&&"0.00"!=n&&(n="+"+n),n}}),filter_module.filter("qual_ch",function(){return function(e){if(!(e&&"loss"in e&&null!==e.loss))return"";var n=e.loss;return n>200?"??":n>90?"?":e.opname?"":n>48?"?!":n>9?"":"ace"in e&&e.ace&&e.ace>100?"!":""}});
