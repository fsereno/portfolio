/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app_findReplace/typeScript/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app_findReplace/typeScript/app.ts":
/*!***********************************************!*\
  !*** ./app/app_findReplace/typeScript/app.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar StringRepository_1 = __webpack_require__(/*! ../../typeScript/Repositories/StringRepository */ \"./app/typeScript/Repositories/StringRepository.ts\");\nvar component_1 = __webpack_require__(/*! ./components/component */ \"./app/app_findReplace/typeScript/components/component.ts\");\nvar StringService_1 = __webpack_require__(/*! ../../typeScript/Services/StringService */ \"./app/typeScript/Services/StringService.ts\");\nvar validatorService_1 = __webpack_require__(/*! ../../typeScript/Services/validatorService */ \"./app/typeScript/Services/validatorService.ts\");\nvar stringRepository = new StringRepository_1.StringRepository();\nvar stringService = new StringService_1.StringService(stringRepository);\nvar validatorService = new validatorService_1.ValidatorService();\nvar component = new component_1.Component(stringService, validatorService);\ncomponent.init();\n\n\n//# sourceURL=webpack:///./app/app_findReplace/typeScript/app.ts?");

/***/ }),

/***/ "./app/app_findReplace/typeScript/components/component.ts":
/*!****************************************************************!*\
  !*** ./app/app_findReplace/typeScript/components/component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Component = /** @class */ (function () {\n    function Component(stringService, validatorService) {\n        this.stringService = stringService;\n        this.validatorService = validatorService;\n        this.result = jQuery(\"#result\");\n        this.findInput = jQuery(\"#findInput\");\n        this.replaceInput = jQuery(\"#replaceInput\");\n        this.formId = \"findReplaceForm\";\n    }\n    Component.prototype.init = function () {\n        var _this = this;\n        jQuery(function () {\n            _this.validateForm();\n        });\n    };\n    Component.prototype.validateForm = function () {\n        var _this = this;\n        var validateFormOptions = {\n            submitHandler: function (form) {\n                var valid = jQuery(form).valid();\n                var findThis = _this.findInput.val().toString();\n                var inThis = _this.result.text();\n                var replaceWithThis = _this.replaceInput.val().toString();\n                if (valid) {\n                    var textReplaced = _this.stringService.FindReplace(findThis, inThis, replaceWithThis);\n                    jQuery(\"#result\").text(textReplaced);\n                }\n            }\n        };\n        this.validatorService.ValidateForm(this.formId, validateFormOptions);\n    };\n    return Component;\n}());\nexports.Component = Component;\n\n\n//# sourceURL=webpack:///./app/app_findReplace/typeScript/components/component.ts?");

/***/ }),

/***/ "./app/typeScript/Repositories/StringRepository.ts":
/*!*********************************************************!*\
  !*** ./app/typeScript/Repositories/StringRepository.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar StringRepository = /** @class */ (function () {\n    function StringRepository() {\n        this.Alphas = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n        this.Numerics = \"0123456789\";\n        this.Constonants = \"BCDFGHJKLMNPQRSTVXZWY\";\n        this.Vowels = \"AEIOU\";\n    }\n    return StringRepository;\n}());\nexports.StringRepository = StringRepository;\n\n\n//# sourceURL=webpack:///./app/typeScript/Repositories/StringRepository.ts?");

/***/ }),

/***/ "./app/typeScript/Services/StringService.ts":
/*!**************************************************!*\
  !*** ./app/typeScript/Services/StringService.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar StringService = /** @class */ (function () {\n    function StringService(stringRepository) {\n        this.stringRepository = stringRepository;\n        this.Alphas = this.stringRepository.Alphas;\n        this.Numerics = this.stringRepository.Numerics;\n        this.Vowels = this.stringRepository.Vowels;\n        this.Constonants = this.stringRepository.Constonants;\n    }\n    StringService.prototype.Concat = function (a, b) {\n        if (a === undefined || b === undefined) {\n            throw new Error('Undefined Parameter');\n        }\n        return a + \" \" + b;\n    };\n    StringService.prototype.FindReplace = function (findThis, inThis, replaceWithThis) {\n        var searchRegex = new RegExp(findThis, \"g\");\n        var replaceRegex = new RegExp(\"\\\\b\" + findThis + \"\\\\b\");\n        var count = (inThis.match(searchRegex) || []).length;\n        for (var index = 0; index < count; index++) {\n            inThis = inThis.replace(replaceRegex, replaceWithThis);\n        }\n        return inThis;\n    };\n    StringService.prototype.ToArray = function (input) {\n        var result = [];\n        for (var i = 0; i < input.length; i++) {\n            result.push(input[i]);\n        }\n        return result;\n    };\n    return StringService;\n}());\nexports.StringService = StringService;\n\n\n//# sourceURL=webpack:///./app/typeScript/Services/StringService.ts?");

/***/ }),

/***/ "./app/typeScript/Services/validatorService.ts":
/*!*****************************************************!*\
  !*** ./app/typeScript/Services/validatorService.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ValidatorService = /** @class */ (function () {\n    function ValidatorService() {\n        jQuery.validator.addMethod(\"nonNumeric\", function (value, element) {\n            return this.optional(element) || isNaN(Number(value));\n        });\n    }\n    ValidatorService.prototype.ValidateForm = function (formId, options) {\n        var validator = jQuery(\"#\" + formId).validate(options);\n        return validator;\n    };\n    return ValidatorService;\n}());\nexports.ValidatorService = ValidatorService;\n\n\n//# sourceURL=webpack:///./app/typeScript/Services/validatorService.ts?");

/***/ })

/******/ });