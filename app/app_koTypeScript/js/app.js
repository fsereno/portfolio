/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/app_koTypeScript/typeScript/Enums/StatusLiterals.ts":
/*!*****************************************************************!*\
  !*** ./app/app_koTypeScript/typeScript/Enums/StatusLiterals.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.StatusLiterals = void 0;\nvar StatusLiterals;\n(function (StatusLiterals) {\n    StatusLiterals[\"Inactive\"] = \"Inactive\";\n    StatusLiterals[\"Pending\"] = \"Pending\";\n    StatusLiterals[\"Active\"] = \"Active\";\n})(StatusLiterals = exports.StatusLiterals || (exports.StatusLiterals = {}));\n\n\n//# sourceURL=webpack://portfolio/./app/app_koTypeScript/typeScript/Enums/StatusLiterals.ts?");

/***/ }),

/***/ "./app/app_koTypeScript/typeScript/Models/UserModel.ts":
/*!*************************************************************!*\
  !*** ./app/app_koTypeScript/typeScript/Models/UserModel.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserModel = void 0;\nvar UserModel = /** @class */ (function () {\n    function UserModel(name, age, active, status) {\n        this.name = name;\n        this.age = age;\n        this.active = active;\n        this.status = status;\n    }\n    return UserModel;\n}());\nexports.UserModel = UserModel;\n\n\n//# sourceURL=webpack://portfolio/./app/app_koTypeScript/typeScript/Models/UserModel.ts?");

/***/ }),

/***/ "./app/app_koTypeScript/typeScript/Models/UserViewModel.ts":
/*!*****************************************************************!*\
  !*** ./app/app_koTypeScript/typeScript/Models/UserViewModel.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserViewModel = void 0;\nvar UserModel_1 = __webpack_require__(/*! ./UserModel */ \"./app/app_koTypeScript/typeScript/Models/UserModel.ts\");\nvar StatusLiterals_1 = __webpack_require__(/*! ../Enums/StatusLiterals */ \"./app/app_koTypeScript/typeScript/Enums/StatusLiterals.ts\");\nvar UserViewModel = /** @class */ (function () {\n    function UserViewModel(formId, editModalId, addModalId) {\n        var _this = this;\n        this.remove = function (item) { return _this.context = item; };\n        this.removeConfirm = function () {\n            if (_this.usersCollection.indexOf(_this.context) > -1) {\n                _this.usersCollection.remove(_this.context);\n            }\n        };\n        this.populateEdit = function (item) {\n            _this.context = item;\n            _this.name(item.name);\n            _this.age(item.age);\n            _this.active(item.active);\n            _this.status(item.status);\n        };\n        this.clear = function () {\n            _this.name(\"\");\n            _this.age(0);\n            _this.active(false);\n            _this.status(StatusLiterals_1.StatusLiterals.Inactive);\n        };\n        this.close = function (id) {\n            var modalId = \"#\" + id;\n            jQuery(modalId).modal(\"hide\");\n        };\n        this.closeEdit = function () {\n            _this.close(_this.editModalId);\n        };\n        this.closeAdd = function () {\n            _this.close(_this.addModalId);\n        };\n        this.toggleStatus = function (item) {\n            _this.populateEdit(item);\n            _this.update();\n        };\n        this.update = function () {\n            if (jQuery(\"#\" + _this.formId).valid()) {\n                if (_this.usersCollection.indexOf(_this.context) > -1\n                    && _this.name().length > 0 && _this.age() > 0) {\n                    var replace = new UserModel_1.UserModel(_this.name(), _this.age(), _this.active(), _this.status());\n                    _this.usersCollection.replace(_this.context, replace);\n                    _this.closeEdit();\n                }\n            }\n        };\n        this.add = function () {\n            if (jQuery(\"#\" + _this.formId).valid()) {\n                if (_this.name().length > 0 && _this.age() > 0) {\n                    _this.usersCollection.push(new UserModel_1.UserModel(_this.name(), _this.age(), _this.active(), _this.status()));\n                    _this.closeAdd();\n                }\n            }\n        };\n        this.formId = formId;\n        this.editModalId = editModalId;\n        this.addModalId = addModalId;\n        this.context = null;\n        this.usersCollection = ko.observableArray(new Array());\n        this.statusCollection = ko.observableArray(new Array());\n        this.name = ko.observable(\"\");\n        this.age = ko.observable(0);\n        this.active = ko.observable(false);\n        this.status = ko.observable(StatusLiterals_1.StatusLiterals.Inactive);\n        this.getUsers();\n        this.getStatus();\n    }\n    UserViewModel.prototype.getUsers = function () {\n        this.usersCollection.push(new UserModel_1.UserModel(\"James Bond\", 23, false, StatusLiterals_1.StatusLiterals.Inactive));\n        this.usersCollection.push(new UserModel_1.UserModel(\"Joe Bloggs\", 34, false, StatusLiterals_1.StatusLiterals.Inactive));\n    };\n    UserViewModel.prototype.getStatus = function () {\n        this.statusCollection.push(StatusLiterals_1.StatusLiterals.Inactive);\n        this.statusCollection.push(StatusLiterals_1.StatusLiterals.Pending);\n        this.statusCollection.push(StatusLiterals_1.StatusLiterals.Active);\n    };\n    return UserViewModel;\n}());\nexports.UserViewModel = UserViewModel;\n\n\n//# sourceURL=webpack://portfolio/./app/app_koTypeScript/typeScript/Models/UserViewModel.ts?");

/***/ }),

/***/ "./app/app_koTypeScript/typeScript/app.ts":
/*!************************************************!*\
  !*** ./app/app_koTypeScript/typeScript/app.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar component_1 = __webpack_require__(/*! ./components/component */ \"./app/app_koTypeScript/typeScript/components/component.ts\");\nvar ValidatorService_1 = __webpack_require__(/*! ../../typeScript/Services/ValidatorService */ \"./app/typeScript/Services/ValidatorService.ts\");\nvar validatorService = new ValidatorService_1.ValidatorService();\nvar component = new component_1.Component(validatorService);\ncomponent.init();\n\n\n//# sourceURL=webpack://portfolio/./app/app_koTypeScript/typeScript/app.ts?");

/***/ }),

/***/ "./app/app_koTypeScript/typeScript/components/component.ts":
/*!*****************************************************************!*\
  !*** ./app/app_koTypeScript/typeScript/components/component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Component = void 0;\nvar UserViewModel_1 = __webpack_require__(/*! ../Models/UserViewModel */ \"./app/app_koTypeScript/typeScript/Models/UserViewModel.ts\");\nvar Component = /** @class */ (function () {\n    function Component(validatorService) {\n        this.validatorService = validatorService;\n    }\n    Component.prototype.init = function () {\n        var _this = this;\n        jQuery(function () {\n            _this.validateForm();\n            _this.bind();\n        });\n    };\n    Component.prototype.validateForm = function () {\n        this.validatorService.ValidateForm(this.formId, null);\n    };\n    Component.prototype.bind = function () {\n        ko.applyBindings(new UserViewModel_1.UserViewModel(\"editForm\", \"editModal\", \"addModal\"));\n    };\n    return Component;\n}());\nexports.Component = Component;\n\n\n//# sourceURL=webpack://portfolio/./app/app_koTypeScript/typeScript/components/component.ts?");

/***/ }),

/***/ "./app/typeScript/Services/ValidatorService.ts":
/*!*****************************************************!*\
  !*** ./app/typeScript/Services/ValidatorService.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ValidatorService = void 0;\nvar ValidatorService = /** @class */ (function () {\n    function ValidatorService() {\n        jQuery.validator.addMethod(\"nonNumeric\", function (value, element) {\n            return this.optional(element) || isNaN(Number(value));\n        });\n    }\n    ValidatorService.prototype.ValidateForm = function (formId, options) {\n        var validator = jQuery(\"#\" + formId).validate(options);\n        return validator;\n    };\n    return ValidatorService;\n}());\nexports.ValidatorService = ValidatorService;\n\n\n//# sourceURL=webpack://portfolio/./app/typeScript/Services/ValidatorService.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/app_koTypeScript/typeScript/app.ts");
/******/ 	
/******/ })()
;