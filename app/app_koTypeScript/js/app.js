!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=new(n(5).ValidatorService);new o.Component(i).init()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=function(){function t(t){this.validatorService=t}return t.prototype.init=function(){var t=this;jQuery((function(){t.validateForm(),t.bind()}))},t.prototype.validateForm=function(){this.validatorService.ValidateForm(this.formId,null)},t.prototype.bind=function(){ko.applyBindings(new o.UserViewModel("editForm","editModal","addModal"))},t}();e.Component=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=n(4),r=function(){function t(t,e,n){var r=this;this.remove=function(t){return r.context=t},this.removeConfirm=function(){r.usersCollection.indexOf(r.context)>-1&&r.usersCollection.remove(r.context)},this.populateEdit=function(t){r.context=t,r.name(t.name),r.age(t.age),r.active(t.active),r.status(t.status)},this.clear=function(){r.name(""),r.age(0),r.active(!1),r.status(i.StatusLiterals.Inactive)},this.close=function(t){jQuery("#"+t).modal("hide")},this.closeEdit=function(){r.close(r.editModalId)},this.closeAdd=function(){r.close(r.addModalId)},this.toggleStatus=function(t){r.populateEdit(t),r.update()},this.update=function(){if(jQuery("#"+r.formId).valid()&&r.usersCollection.indexOf(r.context)>-1&&r.name().length>0&&r.age()>0){var t=new o.userModel(r.name(),r.age(),r.active(),r.status());r.usersCollection.replace(r.context,t),r.closeEdit()}},this.add=function(){jQuery("#"+r.formId).valid()&&r.name().length>0&&r.age()>0&&(r.usersCollection.push(new o.userModel(r.name(),r.age(),r.active(),r.status())),r.closeAdd())},this.formId=t,this.editModalId=e,this.addModalId=n,this.context=null,this.usersCollection=ko.observableArray(new Array),this.statusCollection=ko.observableArray(new Array),this.name=ko.observable(""),this.age=ko.observable(0),this.active=ko.observable(!1),this.status=ko.observable(i.StatusLiterals.Inactive),this.getUsers(),this.getStatus()}return t.prototype.getUsers=function(){this.usersCollection.push(new o.userModel("James Bond",23,!1,i.StatusLiterals.Inactive)),this.usersCollection.push(new o.userModel("Joe Bloggs",34,!1,i.StatusLiterals.Inactive))},t.prototype.getStatus=function(){this.statusCollection.push(i.StatusLiterals.Inactive),this.statusCollection.push(i.StatusLiterals.Pending),this.statusCollection.push(i.StatusLiterals.Active)},t}();e.UserViewModel=r},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e,n,o){this.name=t,this.age=e,this.active=n,this.status=o};e.userModel=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.Inactive="Inactive",t.Pending="Pending",t.Active="Active"}(e.StatusLiterals||(e.StatusLiterals={}))},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){jQuery.validator.addMethod("nonNumeric",(function(t,e){return this.optional(e)||isNaN(Number(t))}))}return t.prototype.ValidateForm=function(t,e){return jQuery("#"+t).validate(e)},t}();e.ValidatorService=n}]);