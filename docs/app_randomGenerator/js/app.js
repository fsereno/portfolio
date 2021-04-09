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

/***/ "./app/app_randomGenerator/typeScript/app.ts":
/*!***************************************************!*\
  !*** ./app/app_randomGenerator/typeScript/app.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar component_1 = __webpack_require__(/*! ./components/component */ \"./app/app_randomGenerator/typeScript/components/component.ts\");\nvar StringService_1 = __webpack_require__(/*! ../../typeScript/Services/StringService */ \"./app/typeScript/Services/StringService.ts\");\nvar ValidatorService_1 = __webpack_require__(/*! ../../typeScript/Services/ValidatorService */ \"./app/typeScript/Services/ValidatorService.ts\");\nvar RandomGeneratorService_1 = __webpack_require__(/*! ../../typeScript/Services/RandomGeneratorService */ \"./app/typeScript/Services/RandomGeneratorService.ts\");\nvar StringRepository_1 = __webpack_require__(/*! ../../typeScript/Repositories/StringRepository */ \"./app/typeScript/Repositories/StringRepository.ts\");\nvar stringRepository = new StringRepository_1.StringRepository();\nvar stringService = new StringService_1.StringService(stringRepository);\nvar validatorService = new ValidatorService_1.ValidatorService();\nvar randomGeneratorService = new RandomGeneratorService_1.RandomGeneratorService(stringService);\nvar component = new component_1.Component(validatorService, randomGeneratorService, stringService);\ncomponent.init();\n\n\n//# sourceURL=webpack://portfolio/./app/app_randomGenerator/typeScript/app.ts?");

/***/ }),

/***/ "./app/app_randomGenerator/typeScript/components/component.ts":
/*!********************************************************************!*\
  !*** ./app/app_randomGenerator/typeScript/components/component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Component = void 0;\nvar Component = /** @class */ (function () {\n    function Component(validatorService, randomGeneratorService, stringService) {\n        this.validatorService = validatorService;\n        this.randomGeneratorService = randomGeneratorService;\n        this.stringService = stringService;\n        this.lengthInput = jQuery(\"#lengthInput\");\n        this.result = jQuery(\"#result\");\n        this.formId = \"randomGeneratorForm\";\n    }\n    Component.prototype.init = function () {\n        var _this = this;\n        jQuery(function () {\n            _this.validateForm();\n        });\n    };\n    Component.prototype.validateForm = function () {\n        var _this = this;\n        var validateFormOptions = {\n            submitHandler: function (form) {\n                var valid = jQuery(form).valid();\n                var length = _this.lengthInput.val();\n                if (valid) {\n                    var alpha = _this.stringService.Alphas;\n                    var numeric = _this.stringService.Numerics;\n                    var criteria = [alpha, numeric];\n                    var result = _this.randomGeneratorService.GenerateRandomString(criteria, Number(length));\n                    _this.result.text(result);\n                }\n            }\n        };\n        this.validatorService.ValidateForm(this.formId, validateFormOptions);\n    };\n    return Component;\n}());\nexports.Component = Component;\n\n\n//# sourceURL=webpack://portfolio/./app/app_randomGenerator/typeScript/components/component.ts?");

/***/ }),

/***/ "./app/typeScript/Repositories/StringRepository.ts":
/*!*********************************************************!*\
  !*** ./app/typeScript/Repositories/StringRepository.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.StringRepository = void 0;\nvar StringRepository = /** @class */ (function () {\n    function StringRepository() {\n        this.Alphas = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n        this.Numerics = \"0123456789\";\n        this.Constonants = \"BCDFGHJKLMNPQRSTVXZWY\";\n        this.Vowels = \"AEIOU\";\n    }\n    return StringRepository;\n}());\nexports.StringRepository = StringRepository;\n\n\n//# sourceURL=webpack://portfolio/./app/typeScript/Repositories/StringRepository.ts?");

/***/ }),

/***/ "./app/typeScript/Services/RandomGeneratorService.ts":
/*!***********************************************************!*\
  !*** ./app/typeScript/Services/RandomGeneratorService.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.RandomGeneratorService = void 0;\nvar RandomGeneratorService = /** @class */ (function () {\n    function RandomGeneratorService(stringService) {\n        this.Generate = function (target) { return Math.floor(Math.random() * target + 1); };\n        this.stringService = stringService;\n    }\n    RandomGeneratorService.prototype.GenerateRandomString = function (criteria, length) {\n        var _this = this;\n        var output = [];\n        while (output.length < length) {\n            criteria.forEach(function (criterion) {\n                var array = _this.stringService.ToArray(criterion);\n                array.forEach(function (char, i) {\n                    var indexToPush = _this.Generate(array.length);\n                    if (i === indexToPush && output.length < length) {\n                        output.push(char);\n                    }\n                });\n            });\n        }\n        var result = output.join(\"\");\n        return result;\n    };\n    return RandomGeneratorService;\n}());\nexports.RandomGeneratorService = RandomGeneratorService;\n\n\n//# sourceURL=webpack://portfolio/./app/typeScript/Services/RandomGeneratorService.ts?");

/***/ }),

/***/ "./app/typeScript/Services/StringService.ts":
/*!**************************************************!*\
  !*** ./app/typeScript/Services/StringService.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.StringService = void 0;\nvar StringService = /** @class */ (function () {\n    function StringService(stringRepository) {\n        this.stringRepository = stringRepository;\n        this.Alphas = this.stringRepository.Alphas;\n        this.Numerics = this.stringRepository.Numerics;\n        this.Vowels = this.stringRepository.Vowels;\n        this.Constonants = this.stringRepository.Constonants;\n    }\n    StringService.prototype.Concat = function (a, b) {\n        if (a === undefined || b === undefined) {\n            throw new Error('Undefined Parameter');\n        }\n        return a + \" \" + b;\n    };\n    StringService.prototype.FindReplace = function (findThis, inThis, replaceWithThis) {\n        var searchRegex = new RegExp(findThis, \"g\");\n        var replaceRegex = new RegExp(\"\\\\b\" + findThis + \"\\\\b\");\n        var count = (inThis.match(searchRegex) || []).length;\n        for (var index = 0; index < count; index++) {\n            inThis = inThis.replace(replaceRegex, replaceWithThis);\n        }\n        return inThis;\n    };\n    StringService.prototype.ToArray = function (input) {\n        var result = [];\n        for (var i = 0; i < input.length; i++) {\n            result.push(input[i]);\n        }\n        return result;\n    };\n    return StringService;\n}());\nexports.StringService = StringService;\n\n\n//# sourceURL=webpack://portfolio/./app/typeScript/Services/StringService.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/app_randomGenerator/typeScript/app.ts");
/******/ 	
/******/ })()
;