!function i(a,u,s){function c(t,n){if(!u[t]){if(!a[t]){var e="function"==typeof require&&require;if(!n&&e)return e(t,!0);if(p)return p(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var r=u[t]={exports:{}};a[t][0].call(r.exports,function(n){return c(a[t][1][n]||n)},r,r.exports,i,a,u,s)}return u[t].exports}for(var p="function"==typeof require&&require,n=0;n<s.length;n++)c(s[n]);return c}({1:[function(n,t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(){}return n.prototype.init=function(){AFRAME.registerComponent("cursor-color-change",{init:function(){var t=-1,e=["red","green","blue"];this.el.addEventListener("navigate-navigated",function(n){t=(t+1)%e.length,this.setAttribute("color",e[t])})}})},n}();e.CursorColourChangeComponent=o},{}],2:[function(n,t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,t,e){this.cameraId=n,this.onEvent=t,this.yConstraint=e}return n.prototype.init=function(){var a=this;AFRAME.registerComponent("navigate",{init:function(){this.el.addEventListener(a.onEvent,function(n){var t=document.querySelector("#"+a.cameraId);if(null!==t){var e=n.detail.intersection.point,o=e.x,r=a.yConstraint?0:e.y,i=e.z+.7;t.setAttribute("animation","property: position; dir: alternate; dur: 2000; easing: easeInOutSine; startEvents: navigate-animate; to:"+o+" "+r+" "+i+";"),t.emit("navigate-animate"),t.emit("navigate-navigated")}})}})},n}();e.NavigatorComponent=o},{}],3:[function(n,t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(){}return n.prototype.init=function(){AFRAME.registerComponent("trackpad-listener",{init:function(){console.log("trackpad-listener"),this.el.addEventListener("trackpaddown",function(n){alert("track down again")})}})},n}();e.TrackPadListenerComponent=o},{}],4:[function(n,t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,t,e){this.trackPadListenerComponent=n,this.navigateComponent=t,this.cursorColourChangeComponent=e}return n.prototype.init=function(){this.trackPadListenerComponent.init(),this.navigateComponent.init(),this.cursorColourChangeComponent.init()},n}();e.IndexController=o},{}],5:[function(n,t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("./Controllers/IndexController"),r=n("./Components/TrackPadListenerComponent"),i=n("./Components/NavigateComponent"),a=n("./Components/CursorColourChangeComponent"),u=new r.TrackPadListenerComponent,s=new i.NavigatorComponent("camera","click",!1),c=new a.CursorColourChangeComponent;new o.IndexController(u,s,c).init()},{"./Components/CursorColourChangeComponent":1,"./Components/NavigateComponent":2,"./Components/TrackPadListenerComponent":3,"./Controllers/IndexController":4}]},{},[5]);