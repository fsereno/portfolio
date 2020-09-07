!function o(s,u,c){function p(e,t){if(!u[e]){if(!s[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(a)return a(e,!0);var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}var n=u[e]={exports:{}};s[e][0].call(n.exports,function(t){return p(s[e][1][t]||t)},n,n.exports,o,s,u,c)}return u[e].exports}for(var a="function"==typeof require&&require,t=0;t<c.length;t++)p(c[t]);return p}({1:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=t("../../typeScript/Repositories/StringRepository"),n=t("./components/component"),o=t("../../typeScript/Services/StringService"),s=t("../../typeScript/Services/validatorService"),u=new i.StringRepository,c=new o.StringService(u),p=new s.ValidatorService;new n.Component(c,p).init()},{"../../typeScript/Repositories/StringRepository":3,"../../typeScript/Services/StringService":4,"../../typeScript/Services/validatorService":5,"./components/component":2}],2:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function t(t,e){this.stringService=t,this.validatorService=e,this.result=jQuery("#result"),this.findInput=jQuery("#findInput"),this.replaceInput=jQuery("#replaceInput"),this.formId="findReplaceForm"}return t.prototype.init=function(){var t=this;jQuery(function(){t.validateForm()})},t.prototype.validateForm=function(){var s=this,t={submitHandler:function(t){var e=jQuery(t).valid(),r=s.findInput.val().toString(),i=s.result.text(),n=s.replaceInput.val().toString();if(e){var o=s.stringService.FindReplace(r,i,n);jQuery("#result").text(o)}}};this.validatorService.ValidateForm(this.formId,t)},t}();r.Component=i},{}],3:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=function(){this.Alphas="ABCDEFGHIJKLMNOPQRSTUVWXYZ",this.Numerics="0123456789",this.Constonants="BCDFGHJKLMNPQRSTVXZWY",this.Vowels="AEIOU"};r.StringRepository=i},{}],4:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function t(t){this.stringRepository=t,this.Alphas=this.stringRepository.Alphas,this.Numerics=this.stringRepository.Numerics,this.Vowels=this.stringRepository.Vowels,this.Constonants=this.stringRepository.Constonants}return t.prototype.Concat=function(t,e){if(void 0===t||void 0===e)throw new Error("Undefined Parameter");return t+" "+e},t.prototype.FindReplace=function(t,e,r){for(var i=new RegExp(t,"g"),n=new RegExp("\\b"+t+"\\b"),o=(e.match(i)||[]).length,s=0;s<o;s++)e=e.replace(n,r);return e},t.prototype.ToArray=function(t){for(var e=[],r=0;r<t.length;r++)e.push(t[r]);return e},t}();r.StringService=i},{}],5:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function t(){jQuery.validator.addMethod("nonNumeric",function(t,e){return this.optional(e)||isNaN(Number(t))})}return t.prototype.ValidateForm=function(t,e){return jQuery("#"+t).validate(e)},t}();r.ValidatorService=i},{}]},{},[1]);