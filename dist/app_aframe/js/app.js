!function r(a,c,u){function v(t,e){if(!c[t]){if(!a[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(s)return s(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var i=c[t]={exports:{}};a[t][0].call(i.exports,function(e){return v(a[t][1][e]||e)},i,i.exports,r,a,c,u)}return c[t].exports}for(var s="function"==typeof require&&require,e=0;e<u.length;e++)v(u[e]);return v}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){this.object=e,this.navigateService=t}return e.prototype.init=function(){var n=this;AFRAME.registerComponent("navigate-component",{init:function(){var t=this;n.object.onEvents.forEach(function(e){t.el.addEventListener(e,function(e){n.object.event=e,n.navigateService.init(n.object)})})}})},e}();n.NavigateComponent=o},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e){this.cursorNavigateComponent=e}return e.prototype.init=function(){this.cursorNavigateComponent.init()},e}();n.IndexController=o},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(e,t,n){this.cameraId=e,this.yConstraint=t,this.onEvents=n};n.NavigateComponentModel=o},{}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(){}return e.prototype.init=function(e){var t=document.querySelector("#"+e.cameraId);if(null!==t){var n=e.event.detail.intersection.point,o=n.x,i=e.yConstraint?0:n.y,r=n.z+.7;t.setAttribute("animation","property: position; dir: alternate; dur: 2000; easing: easeInOutSine; startEvents: navigate-animate; to:"+o+" "+i+" "+r+";"),t.emit("navigate-animate"),t.emit("navigate-navigated")}},e}();n.NavigateComponentService=o},{}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("./Services/NavigateComponentService"),i=e("./Components/NavigateComponent"),r=e("./Controllers/IndexController"),a=e("./Models/NavigateComponentModel"),c=new o.NavigateComponentService,u=new a.NavigateComponentModel("camera",!1,["click"]),v=new i.NavigateComponent(u,c);new r.IndexController(v).init()},{"./Components/NavigateComponent":1,"./Controllers/IndexController":2,"./Models/NavigateComponentModel":3,"./Services/NavigateComponentService":4}]},{},[5]);