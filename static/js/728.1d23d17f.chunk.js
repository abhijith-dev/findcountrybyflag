/*! For license information please see 728.1d23d17f.chunk.js.LICENSE.txt */
(self.webpackChunkguess_me=self.webpackChunkguess_me||[]).push([[728],{1728:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var o=n(8152),r=n(2791),i=n(9354),a=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),c=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return a(t,e),t}(Error);function l(e,t){if(!e)throw new c(t)}function s(e){var t=Object.entries(e).filter((function(e){var t=e[1];return void 0!==t&&null!==t})).map((function(e){var t=e[0],n=e[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(String(n)))}));return t.length>0?"?".concat(t.join("&")):""}var u=n(1694),d=n.n(u),f=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),h=function(){return h=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},h.apply(this,arguments)},p=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{l(o.next(e))}catch(t){i(t)}}function c(e){try{l(o.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((o=o.apply(e,t||[])).next())}))},w=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},y=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},v=function(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then},g=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},b=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function m(e,t,n){var o=t.height,r=t.width,i=y(t,["height","width"]),a=h({height:o,width:r,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),c=window.open(e,"",Object.keys(a).map((function(e){return"".concat(e,"=").concat(a[e])})).join(", "));if(n)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),n(c))}catch(e){console.error(e)}}),1e3);return c}var x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,o=n.onShareWindowClose,r=n.windowHeight,i=void 0===r?400:r,a=n.windowPosition,c=void 0===a?"windowCenter":a,l=n.windowWidth,s=void 0===l?550:l;m(e,h({height:i,width:s},"windowCenter"===c?g(s,i):b(s,i)),o)},t.handleClick=function(e){return p(t,void 0,void 0,(function(){var t,n,o,r,i,a,c,l,s,u;return w(this,(function(d){switch(d.label){case 0:return t=this.props,n=t.beforeOnClick,o=t.disabled,r=t.networkLink,i=t.onClick,a=t.url,c=t.openShareDialogOnClick,l=t.opts,s=r(a,l),o?[2]:(e.preventDefault(),n?(u=n(),v(u)?[4,u]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return c&&this.openShareDialog(s),i&&i(e,s),[2]}}))}))},t}return f(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,o=e.disabled,i=e.disabledStyle,a=e.forwardedRef,c=(e.networkLink,e.networkName),l=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,y(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=d()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!o,disabled:!!o},n),p=h(h(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),o&&i);return r.createElement("button",h({},u,{"aria-label":u["aria-label"]||c,className:f,onClick:this.handleClick,ref:a,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(r.Component),j=x,O=function(){return O=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},O.apply(this,arguments)};var S=function(e,t,n,o){function i(i,a){var c=n(i),l=O({},i);return Object.keys(c).forEach((function(e){delete l[e]})),r.createElement(j,O({},o,l,{forwardedRef:a,networkName:e,networkLink:t,opts:n(i)}))}return i.displayName="ShareButton-".concat(e),(0,r.forwardRef)(i)};var k=S("facebook",(function(e,t){var n=t.quote,o=t.hashtag;return l(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+s({u:e,quote:n,hashtag:o})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),C=function(){return C=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},C.apply(this,arguments)},N=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};function _(e){var t=function(t){var n=t.bgStyle,o=t.borderRadius,i=t.iconFillColor,a=t.round,c=t.size,l=N(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return r.createElement("svg",C({viewBox:"0 0 64 64",width:c,height:c},l),a?r.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):r.createElement("rect",{width:"64",height:"64",rx:o,ry:o,fill:e.color,style:n}),r.createElement("path",{d:e.path,fill:i}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var P=_({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var z=S("twitter",(function(e,t){var n=t.title,o=t.via,r=t.hashtags,i=void 0===r?[]:r,a=t.related,c=void 0===a?[]:a;return l(e,"twitter.url"),l(Array.isArray(i),"twitter.hashtags is not an array"),l(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+s({url:e,text:n,via:o,hashtags:i.length>0?i.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),F=_({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var E=S("reddit",(function(e,t){var n=t.title;return l(e,"reddit.url"),"https://www.reddit.com/submit"+s({url:e,title:n})}),(function(e){return{title:e.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"}),I=_({color:"#ff4500",networkName:"reddit",path:"m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"}),M=n(184),R={Low:["You are score is too bad \ud83d\ude10\ufe0f ","Opps I think you forgot to learn geogrhphy in your school life\ud83e\udd23\ufe0f ","You are score not even having 2 digits, poor guy \ud83d\ude02\ufe0f  "],Medium:["Good try \ud83d\ude00\ufe0f , Keep it up!","You did better, do well in next attempt","Try hard, next time you will score 25 \ud83d\ude0e\ufe0f"],Good:["Nicee.. You Scored good points...\ud83d\ude0d\ufe0f","You are best \ud83e\udd29\ufe0f, try to score 25","You have Good Knowladge in geogrhphy \ud83d\ude80\ufe0f"],Full:["You are awesome \ud83c\udf8a\ufe0f\ud83d\ude0d\ufe0f","You are the best among all \ud83d\ude0e\ufe0f\ud83d\ude0d\ufe0f","You are the legend of this Quizzz \ud83c\udf8a\ufe0f\ud83e\udd29\ufe0f"]},W=function(e){var t=function(){return(0,M.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,M.jsx)("div",{children:(0,M.jsx)(k,{url:"https://findcountrybyflag.com",quote:"I have scored ".concat(null===e||void 0===e?void 0:e.finalScore," out of 25 on FindCountryFlag.com \n I'm challenging you to beat my score."),children:(0,M.jsx)(P,{size:"40px",borderRadius:10})})}),(0,M.jsx)("div",{children:(0,M.jsx)(z,{url:"https://findcountrybyflag.com",title:"I have scored ".concat(null===e||void 0===e?void 0:e.finalScore," out of 25 on FindCountryFlag.com \n I'm challenging you to beat my score."),children:(0,M.jsx)(F,{size:"40px",borderRadius:10})})}),(0,M.jsx)("div",{children:(0,M.jsx)(E,{url:"https://findcountrybyflag.com",title:"I have scored ".concat(null===e||void 0===e?void 0:e.finalScore," out of 25 on FindCountryFlag.com \n I'm challenging you to beat my score."),children:(0,M.jsx)(I,{size:"40px",borderRadius:10})})})]})},n=(0,r.useState)(""),a=(0,o.Z)(n,2),c=a[0],l=a[1],s=(0,r.useState)(!1),u=(0,o.Z)(s,2),d=u[0],f=u[1],h=function(){var t=null===e||void 0===e?void 0:e.finalScore;return"I have scored ".concat(t," out of 25 on FindCountryFlag.com \n I'm challenging you to beat my score")}();return(0,r.useEffect)((function(){if(e.finalScore>=20&&e.finalScore<25){var t=R.Good[Math.trunc(Math.random()*R.Good.length)];l(t)}else if(25===e.finalScore){var n=R.Full[Math.trunc(Math.random()*R.Full.length)];l(n)}else if(e.finalScore>=10&&e.finalScore<20){var o=R.Medium[Math.trunc(Math.random()*R.Medium.length)];l(o)}else{var r=R.Low[Math.trunc(Math.random()*R.Low.length)];l(r)}}),[]),(0,M.jsxs)("div",{className:"w-full h-[100vh] flex  text-center flex-col gap-8 mt-6 mb-3",children:[(0,M.jsxs)("div",{className:"text-[30px] font-medium",children:["Hii ",(null===e||void 0===e?void 0:e.user)||"User"," ! , you are score is here ...."]}),(0,M.jsx)("div",{className:"w-full flex justify-center items-center",children:(0,M.jsx)("img",{src:i,className:"w-[200px] h-[200px] logo-animation"})}),(0,M.jsxs)("div",{className:"text-[80px] font-bold",children:[null===e||void 0===e?void 0:e.finalScore,"/25"]}),(0,M.jsx)("h2",{className:"text-[20px] font-medium",children:c}),(0,M.jsx)("div",{children:(0,M.jsx)("button",{className:"px-6 py-2 bg-yellow-600 rounded-md hover:bg-yellow-500 capitalize",onClick:function(){null===e||void 0===e||e.setTab(0)},children:"Return Back"})}),(0,M.jsx)("div",{className:"inline-block",children:"you can share your score on social media now"}),(0,M.jsx)("div",{className:"w-full flex flex-row md:gap-3 gap-4 justify-center px-2 md:px-0",children:d?(0,M.jsx)(t,{}):(0,M.jsxs)("button",{className:"px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-500 capitalize",onClick:function(){window.innerWidth<768?window&&window.navigator&&window.navigator.share({title:"Find Country By Flag",text:h,url:"https://findcountrybyflag.com"}).then((function(){})).catch((function(){})):f(!0)},children:[(0,M.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/9533/9533051.png",className:"w-5 h-5 inline-block mr-[1px]"}),(0,M.jsx)("span",{className:"ml-2",children:"Share"})]})})]})}},1694:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=r.apply(null,n);a&&e.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)o.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},9354:function(e,t,n){"use strict";e.exports=n.p+"static/media/logo.97d246a1f53c57bb2dd9.png"}}]);
//# sourceMappingURL=728.1d23d17f.chunk.js.map