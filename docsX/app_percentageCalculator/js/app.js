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

/***/ "./app/app_percentageCalculator/typeScript/app.ts":
/*!********************************************************!*\
  !*** ./app/app_percentageCalculator/typeScript/app.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar component_1 = __webpack_require__(/*! ./components/component */ \"./app/app_percentageCalculator/typeScript/components/component.ts\");\nvar ValidatorService_1 = __webpack_require__(/*! ../../typeScript/Services/ValidatorService */ \"./app/typeScript/Services/ValidatorService.ts\");\nvar CalculatorService_1 = __webpack_require__(/*! ../../typeScript/Services/CalculatorService */ \"./app/typeScript/Services/CalculatorService.ts\");\nvar validatorService = new ValidatorService_1.ValidatorService();\nvar calculatorService = new CalculatorService_1.CalculatorService();\nvar component = new component_1.Component(validatorService, calculatorService);\ncomponent.init();\n\n\n//# sourceURL=webpack://portfolio/./app/app_percentageCalculator/typeScript/app.ts?");

/***/ }),

/***/ "./app/app_percentageCalculator/typeScript/components/component.ts":
/*!*************************************************************************!*\
  !*** ./app/app_percentageCalculator/typeScript/components/component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Component = void 0;\nvar Component = /** @class */ (function () {\n    function Component(validatorService, calculatorService) {\n        this.validatorService = validatorService;\n        this.calculatorService = calculatorService;\n        this.result = jQuery(\"#result\");\n        this.percentageInput = jQuery(\"#percentageInput\");\n        this.percentageOfInput = jQuery(\"#percentageOfInput\");\n        this.formId = \"percentageCalculatorForm\";\n    }\n    Component.prototype.init = function () {\n        var _this = this;\n        jQuery(function () {\n            _this.validateForm();\n        });\n    };\n    Component.prototype.validateForm = function () {\n        var _this = this;\n        var validateFormOptions = {\n            submitHandler: function (form) {\n                var valid = jQuery(form).valid();\n                var percentage = Number(_this.percentageInput.val());\n                var ofThisNumber = Number(_this.percentageOfInput.val());\n                if (valid) {\n                    var result = _this.calculatorService.PercentageOf(percentage, ofThisNumber);\n                    _this.result.text(result.toString());\n                }\n            }\n        };\n        this.validatorService.ValidateForm(this.formId, validateFormOptions);\n    };\n    return Component;\n}());\nexports.Component = Component;\n\n\n//# sourceURL=webpack://portfolio/./app/app_percentageCalculator/typeScript/components/component.ts?");

/***/ }),

/***/ "./app/typeScript/Services/CalculatorService.ts":
/*!******************************************************!*\
  !*** ./app/typeScript/Services/CalculatorService.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CalculatorService = void 0;\nvar CalculatorService = /** @class */ (function () {\n    function CalculatorService() {\n    }\n    CalculatorService.prototype.Add = function (a, b) {\n        return a + b;\n    };\n    CalculatorService.prototype.PercentageOf = function (percentage, ofThisNumber) {\n        var result = Number(percentage) / 100 * Number(ofThisNumber);\n        return result;\n    };\n    return CalculatorService;\n}());\nexports.CalculatorService = CalculatorService;\n\n\n//# sourceURL=webpack://portfolio/./app/typeScript/Services/CalculatorService.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/app_percentageCalculator/typeScript/app.ts");
/******/ 	
/******/ })()
;