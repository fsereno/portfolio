!function o(u,c,a){function l(r,e){if(!c[r]){if(!u[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(f)return f(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var i=c[r]={exports:{}};u[r][0].call(i.exports,function(e){return l(u[r][1][e]||e)},i,i.exports,o,u,c,a)}return c[r].exports}for(var f="function"==typeof require&&require,e=0;e<a.length;e++)l(a[e]);return l}({1:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,r){this.stringService=e,this.validatorService=r,this.result=jQuery("#result"),this.findInput=jQuery("#findInput"),this.replaceInput=jQuery("#replaceInput"),this.formId="findReplaceForm"}return e.prototype.init=function(){var e=this;jQuery(function(){e.validateForm()})},e.prototype.validateForm=function(){var u=this,e={submitHandler:function(e){var r=jQuery(e).valid(),t=u.findInput.val().toString(),n=u.result.text(),i=u.replaceInput.val().toString();if(r){var o=u.stringService.FindReplace(t,n,i);jQuery("#result").text(o)}}};u.validatorService.ValidateForm(u.formId,e)},e}();t.IndexController=n},{}],2:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("./Controllers/IndexController"),i=e("../../typeScript/Services/StringService"),o=e("../../typeScript/Services/validatorService"),u=new i.StringService,c=new o.ValidatorService;new n.IndexController(u,c).init()},{"../../typeScript/Services/StringService":3,"../../typeScript/Services/validatorService":4,"./Controllers/IndexController":1}],3:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.Concat=function(e,r){if(void 0===e||void 0===r)throw new Error("Undefined Parameter");return e+" "+r},e.prototype.FindReplace=function(e,r,t){for(var n=new RegExp(e,"g"),i=new RegExp("\\b"+e+"\\b"),o=(r.match(n)||[]).length,u=0;u<o;u++)r=r.replace(i,t);return r},e.prototype.ToArray=function(e){for(var r=[],t=0;t<e.length;t++)r.push(e[t]);return r},e}();t.StringService=n},{}],4:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){jQuery.validator.addMethod("nonNumeric",function(e,r){return this.optional(r)||isNaN(Number(e))})}return e.prototype.ValidateForm=function(e,r){return jQuery("#"+e).validate(r)},e}();t.ValidatorService=n},{}]},{},[2]);