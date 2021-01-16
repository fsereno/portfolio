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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app_percentageCalculator/typeScript/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app_percentageCalculator/typeScript/app.ts":
/*!********************************************************!*\
  !*** ./app/app_percentageCalculator/typeScript/app.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar component_1 = __webpack_require__(/*! ./components/component */ \"./app/app_percentageCalculator/typeScript/components/component.ts\");\nvar validatorService_1 = __webpack_require__(/*! ../../typeScript/Services/validatorService */ \"./app/typeScript/Services/validatorService.ts\");\nvar calculatorService_1 = __webpack_require__(/*! ../../typeScript/Services/calculatorService */ \"./app/typeScript/Services/calculatorService.ts\");\nvar validatorService = new validatorService_1.ValidatorService();\nvar calculatorService = new calculatorService_1.CalculatorService();\nvar component = new component_1.Component(validatorService, calculatorService);\ncomponent.init();\n\n\n//# sourceURL=webpack:///./app/app_percentageCalculator/typeScript/app.ts?");

/***/ }),

/***/ "./app/app_percentageCalculator/typeScript/components/component.ts":
/*!*************************************************************************!*\
  !*** ./app/app_percentageCalculator/typeScript/components/component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Component = /** @class */ (function () {\n    function Component(validatorService, calculatorService) {\n        this.validatorService = validatorService;\n        this.calculatorService = calculatorService;\n        this.result = jQuery(\"#result\");\n        this.percentageInput = jQuery(\"#percentageInput\");\n        this.percentageOfInput = jQuery(\"#percentageOfInput\");\n        this.formId = \"percentageCalculatorForm\";\n    }\n    Component.prototype.init = function () {\n        var _this = this;\n        jQuery(function () {\n            _this.validateForm();\n        });\n    };\n    Component.prototype.validateForm = function () {\n        var _this = this;\n        var validateFormOptions = {\n            submitHandler: function (form) {\n                var valid = jQuery(form).valid();\n                var percentage = Number(_this.percentageInput.val());\n                var ofThisNumber = Number(_this.percentageOfInput.val());\n                if (valid) {\n                    var result = _this.calculatorService.PercentageOf(percentage, ofThisNumber);\n                    _this.result.text(result.toString());\n                }\n            }\n        };\n        this.validatorService.ValidateForm(this.formId, validateFormOptions);\n    };\n    return Component;\n}());\nexports.Component = Component;\n\n\n//# sourceURL=webpack:///./app/app_percentageCalculator/typeScript/components/component.ts?");

/***/ }),

/***/ "./app/typeScript/Services/calculatorService.ts":
/*!******************************************************!*\
  !*** ./app/typeScript/Services/calculatorService.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\"use strict;\";\n\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar CalculatorService = /** @class */ (function () {\n    function CalculatorService() {\n    }\n    CalculatorService.prototype.Add = function (a, b) {\n        return a + b;\n    };\n    CalculatorService.prototype.PercentageOf = function (percentage, ofThisNumber) {\n        var result = Number(percentage) / 100 * Number(ofThisNumber);\n        return result;\n    };\n    return CalculatorService;\n}());\nexports.CalculatorService = CalculatorService;\n\n\n//# sourceURL=webpack:///./app/typeScript/Services/calculatorService.ts?");

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