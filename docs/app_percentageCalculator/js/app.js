!function o(u,c,a){function p(t,e){if(!c[t]){if(!u[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(l)return l(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var i=c[t]={exports:{}};u[t][0].call(i.exports,function(e){return p(u[t][1][e]||e)},i,i.exports,o,u,c,a)}return c[t].exports}for(var l="function"==typeof require&&require,e=0;e<a.length;e++)p(a[e]);return p}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("./components/component"),i=e("../../typeScript/Services/validatorService"),o=e("../../typeScript/Services/calculatorService"),u=new i.ValidatorService,c=new o.CalculatorService;new n.Component(u,c).init()},{"../../typeScript/Services/calculatorService":3,"../../typeScript/Services/validatorService":4,"./components/component":2}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,t){this.validatorService=e,this.calculatorService=t,this.result=jQuery("#result"),this.percentageInput=jQuery("#percentageInput"),this.percentageOfInput=jQuery("#percentageOfInput"),this.formId="percentageCalculatorForm"}return e.prototype.init=function(){var e=this;jQuery(function(){e.validateForm()})},e.prototype.validateForm=function(){var o=this,e={submitHandler:function(e){var t=jQuery(e).valid(),r=Number(o.percentageInput.val()),n=Number(o.percentageOfInput.val());if(t){var i=o.calculatorService.PercentageOf(r,n);o.result.text(i.toString())}}};this.validatorService.ValidateForm(this.formId,e)},e}();r.Component=n},{}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.Add=function(e,t){return e+t},e.prototype.PercentageOf=function(e,t){return Number(e)/100*Number(t)},e}();r.CalculatorService=n},{}],4:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(){jQuery.validator.addMethod("nonNumeric",function(e,t){return this.optional(t)||isNaN(Number(e))})}return e.prototype.ValidateForm=function(e,t){return jQuery("#"+e).validate(t)},e}();r.ValidatorService=n},{}]},{},[1]);