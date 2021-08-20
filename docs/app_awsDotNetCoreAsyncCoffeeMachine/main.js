/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/app_awsDotNetCoreAsyncCoffeeMachine/src/app.js":
/*!************************************************************!*\
  !*** ./app/app_awsDotNetCoreAsyncCoffeeMachine/src/app.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./app/app_awsDotNetCoreAsyncCoffeeMachine/sass/styles.scss\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _typeScript_Utils_keyGeneratorUtil_dist_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../typeScript/Utils/keyGeneratorUtil/dist/index */ \"./app/typeScript/Utils/keyGeneratorUtil/dist/index.js\");\n/* harmony import */ var _js_modules_react_puzzleModalComponent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/modules/react/puzzleModalComponent.js */ \"./app/js/modules/react/puzzleModalComponent.js\");\n/* harmony import */ var _js_modules_react_spinnerComponent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../js/modules/react/spinnerComponent.js */ \"./app/js/modules/react/spinnerComponent.js\");\n/* harmony import */ var _js_modules_react_errorModalComponent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../js/modules/react/errorModalComponent.js */ \"./app/js/modules/react/errorModalComponent.js\");\n/* harmony import */ var _js_modules_utils_configUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../js/modules/utils/configUtil */ \"./app/js/modules/utils/configUtil.js\");\n/* harmony import */ var _js_modules_utils_jQueryAjaxUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../js/modules/utils/jQueryAjaxUtil */ \"./app/js/modules/utils/jQueryAjaxUtil.js\");\n\"use strict;\";\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n\n\nvar PUZZLE = \"3 + 1 + 1 =\";\nvar APP_CONFIG = _js_modules_utils_configUtil__WEBPACK_IMPORTED_MODULE_7__.ConfigUtil.get(\"awsDotNetCoreAsyncCoffeeMachine\");\nvar RUN_ENDPOINT = \"\".concat(APP_CONFIG.endpoints.api, \"/\").concat(APP_CONFIG.endpoints.run);\nvar RUN_ASYNC_ENDPOINT = \"\".concat(APP_CONFIG.endpoints.api, \"/\").concat(APP_CONFIG.endpoints.runAsync);\n\nvar CoffeeMakerApp = /*#__PURE__*/function (_React$Component) {\n  _inherits(CoffeeMakerApp, _React$Component);\n\n  var _super = _createSuper(CoffeeMakerApp);\n\n  function CoffeeMakerApp(props) {\n    var _this;\n\n    _classCallCheck(this, CoffeeMakerApp);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      log: [],\n      processHeading: \"\",\n      showSpinner: false,\n      showPuzzleModal: true,\n      showErrorModal: false,\n      isPuzzleValid: false\n    };\n    _this.handleRun = _this.handleRun.bind(_assertThisInitialized(_this));\n    _this.handleRunAsync = _this.handleRunAsync.bind(_assertThisInitialized(_this));\n    _this.handleAjax = _this.handleAjax.bind(_assertThisInitialized(_this));\n    _this.handleRequest = _this.handleRequest.bind(_assertThisInitialized(_this));\n    _this.renderProcessHeading = _this.renderProcessHeading.bind(_assertThisInitialized(_this));\n    _this.handleIsPuzzleValid = _this.handleIsPuzzleValid.bind(_assertThisInitialized(_this));\n    _this.handlePuzzleModalClose = _this.handlePuzzleModalClose.bind(_assertThisInitialized(_this));\n    _this.handlePuzzleModalShow = _this.handlePuzzleModalShow.bind(_assertThisInitialized(_this));\n    _this.handleErrorModalClose = _this.handleErrorModalClose.bind(_assertThisInitialized(_this));\n    _this.handleBeforeAjax = _this.handleBeforeAjax.bind(_assertThisInitialized(_this));\n    _this.handleFailedAjax = _this.handleFailedAjax.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(CoffeeMakerApp, [{\n    key: \"handleRun\",\n    value: function handleRun() {\n      this.handleRequest(RUN_ENDPOINT);\n    }\n  }, {\n    key: \"handleRunAsync\",\n    value: function handleRunAsync() {\n      this.handleRequest(RUN_ASYNC_ENDPOINT);\n    }\n  }, {\n    key: \"handleRequest\",\n    value: function handleRequest(endpoint) {\n      var _this2 = this;\n\n      var request = {\n        url: endpoint,\n        type: \"GET\",\n        success: function success(response) {\n          _this2.setState({\n            log: response,\n            processHeading: \"Log of tasks carried out\",\n            showSpinner: false\n          });\n        }\n      };\n      this.handleAjax(request);\n    }\n  }, {\n    key: \"handleBeforeAjax\",\n    value: function handleBeforeAjax() {\n      this.setState({\n        showSpinner: true,\n        showPuzzleModal: false\n      });\n    }\n  }, {\n    key: \"handleFailedAjax\",\n    value: function handleFailedAjax() {\n      this.setState({\n        showErrorModal: true,\n        showSpinner: false\n      });\n    }\n  }, {\n    key: \"handleAjax\",\n    value: function handleAjax(request) {\n      _js_modules_utils_jQueryAjaxUtil__WEBPACK_IMPORTED_MODULE_8__.jQueryAjaxUtil.handleAjax(request, this.state.isPuzzleValid, this.handleBeforeAjax, this.handleFailedAjax, this.handlePuzzleModalShow);\n    }\n  }, {\n    key: \"renderProcessHeading\",\n    value: function renderProcessHeading() {\n      if (this.state.log.length > 0) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h3\", {\n          className: \"mb-4\"\n        }, \"Log of tasks carried out\");\n      }\n\n      return null;\n    }\n  }, {\n    key: \"handleIsPuzzleValid\",\n    value: function handleIsPuzzleValid() {\n      this.setState({\n        isPuzzleValid: true,\n        showPuzzleModal: false\n      });\n    }\n  }, {\n    key: \"handlePuzzleModalClose\",\n    value: function handlePuzzleModalClose() {\n      this.setState({\n        showPuzzleModal: false\n      });\n    }\n  }, {\n    key: \"handlePuzzleModalShow\",\n    value: function handlePuzzleModalShow() {\n      this.setState({\n        showPuzzleModal: true\n      });\n    }\n  }, {\n    key: \"handleErrorModalClose\",\n    value: function handleErrorModalClose() {\n      this.setState({\n        showErrorModal: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_js_modules_react_errorModalComponent_js__WEBPACK_IMPORTED_MODULE_6__.ErrorModalComponent, {\n        id: \"errorModal\",\n        show: this.state.showErrorModal,\n        handleClose: this.handleErrorModalClose\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_js_modules_react_spinnerComponent_js__WEBPACK_IMPORTED_MODULE_5__.SpinnerComponent, {\n        show: this.state.showSpinner\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_js_modules_react_puzzleModalComponent_js__WEBPACK_IMPORTED_MODULE_4__.PuzzleModalComponent, {\n        answer: 5,\n        puzzle: PUZZLE,\n        show: this.state.showPuzzleModal,\n        handleClose: this.handlePuzzleModalClose,\n        handleShow: this.handlePuzzleModalShow,\n        handleIsValid: this.handleIsPuzzleValid\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n        className: \"row mb-3\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n        className: \"col-lg-6\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"button\", {\n        id: \"runSync\",\n        type: \"button\",\n        className: \"btn btn-dark mr-2\",\n        onClick: this.handleRun\n      }, \"Run Sync\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"button\", {\n        id: \"runAsync\",\n        type: \"button\",\n        className: \"btn btn-dark mr-2\",\n        onClick: this.handleRunAsync\n      }, \"Run Async\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n        className: \"col-lg-6\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", {\n        className: \"text-muted\"\n      }, \"(Processing is delayed for this demonstration)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(this.renderProcessHeading, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"ul\", {\n        id: \"resultOutput\",\n        className: \"list-group\"\n      }, this.state.log.map(function (item, index) {\n        var key = _typeScript_Utils_keyGeneratorUtil_dist_index__WEBPACK_IMPORTED_MODULE_3__.KeyGeneratorUtil.generate(item.detail);\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"li\", {\n          key: key,\n          className: \"list-group-item d-flex align-items-center\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"span\", {\n          className: \"badge badge-primary badge-pill mr-3 bg-dark\"\n        }, index + 1), item.detail);\n      })))));\n    }\n  }]);\n\n  return CoffeeMakerApp;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n\nreact_dom__WEBPACK_IMPORTED_MODULE_2__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(CoffeeMakerApp, null), document.getElementById('result'));\n\n//# sourceURL=webpack://portfolio/./app/app_awsDotNetCoreAsyncCoffeeMachine/src/app.js?");

/***/ }),

/***/ "./app/js/modules/react/errorModalComponent.js":
/*!*****************************************************!*\
  !*** ./app/js/modules/react/errorModalComponent.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ErrorModalComponent\": () => (/* binding */ ErrorModalComponent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _modalComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalComponent */ \"./app/js/modules/react/modalComponent.js\");\n\"use strict;\";\n\n\n\nfunction ErrorModalComponent(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modalComponent__WEBPACK_IMPORTED_MODULE_1__.ModalComponent, {\n    id: props.id,\n    show: props.show,\n    onHide: props.handleClose,\n    handleClose: props.handleClose,\n    title: props.title || \"We have a problem!\",\n    body: props.body || \"An error has occurred. Please try again.\",\n    bodyClass: \"text-danger\"\n  });\n}\n\n//# sourceURL=webpack://portfolio/./app/js/modules/react/errorModalComponent.js?");

/***/ }),

/***/ "./app/js/modules/react/modalComponent.js":
/*!************************************************!*\
  !*** ./app/js/modules/react/modalComponent.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModalComponent\": () => (/* binding */ ModalComponent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n\"use strict;\";\n\n\n\n\nfunction ModalComponent(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default, {\n    id: props.id,\n    show: props.show,\n    onHide: props.handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default.Title, {\n    className: \"display-4\"\n  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__.default, {\n    variant: \"link\",\n    className: \"close\",\n    onClick: props.handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"lr\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"rl\"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"lead px-2 \".concat(props.bodyClass)\n  }, props.body)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__.default, {\n    variant: \"dark\",\n    onClick: props.handleClose\n  }, \"Close\")));\n}\n\n//# sourceURL=webpack://portfolio/./app/js/modules/react/modalComponent.js?");

/***/ }),

/***/ "./app/js/modules/react/puzzleModalComponent.js":
/*!******************************************************!*\
  !*** ./app/js/modules/react/puzzleModalComponent.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PuzzleModalComponent\": () => (/* binding */ PuzzleModalComponent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n\"use strict;\";\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nfunction PuzzleModalComponent(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      validated = _useState2[0],\n      setValidated = _useState2[1];\n\n  var handleShow = function handleShow() {\n    return setValidated(false);\n  };\n\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault();\n    var form = event.currentTarget;\n\n    if (form.checkValidity() === false) {\n      event.stopPropagation();\n    } else {\n      props.handleIsValid();\n    }\n\n    setValidated(true);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default, {\n    id: props.id || \"puzzleModal\",\n    show: props.show,\n    onHide: props.handleClose,\n    onShow: handleShow\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default.Title, {\n    className: \"display-4\"\n  }, props.title || \"Are you a human?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__.default, {\n    variant: \"link\",\n    className: \"close\",\n    onClick: props.handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"lr\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"rl\"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__.default, {\n    noValidate: true,\n    validated: validated,\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__.default.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__.default.Group, {\n    as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__.default,\n    controlId: \"answerInput\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__.default.Label, null, \"\".concat(props.label || \"What is:\", \" \").concat(props.puzzle, \" ?\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__.default.Control, {\n    name: \"answerInput\",\n    type: \"text\",\n    placeholder: \"Answer...\",\n    pattern: props.answer,\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__.default.Control.Feedback, {\n    type: \"invalid\"\n  }, props.error || \"Incorrect answer! Please try again.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__.default.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__.default, {\n    variant: \"secondary\",\n    onClick: props.handleClose\n  }, \"Close\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__.default, {\n    id: \"submitPuzzle\",\n    variant: \"dark\",\n    type: \"submit\"\n  }, \"Submit\"))))));\n}\n\n//# sourceURL=webpack://portfolio/./app/js/modules/react/puzzleModalComponent.js?");

/***/ }),

/***/ "./app/js/modules/react/spinnerComponent.js":
/*!**************************************************!*\
  !*** ./app/js/modules/react/spinnerComponent.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SpinnerContext\": () => (/* binding */ SpinnerContext),\n/* harmony export */   \"SpinnerComponent\": () => (/* binding */ SpinnerComponent),\n/* harmony export */   \"SpinnerContextProvider\": () => (/* binding */ SpinnerContextProvider)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\"use strict;\";\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar SpinnerContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();\nfunction SpinnerComponent(props) {\n  var showSpinner = props.show || false;\n  var hideClass = !showSpinner ? \"d-none\" : \"\";\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"spinner\",\n    className: \"\".concat(hideClass, \" spinner-container overlay\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"loader\",\n    className: \"\".concat(hideClass, \" item loading\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"spinner\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle circle-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle-inner\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle circle-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"circle-inner\"\n  })))));\n}\n;\nfunction SpinnerContextProvider(_ref) {\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      show = _useState2[0],\n      setShow = _useState2[1];\n\n  var showSpinner = function showSpinner() {\n    return setShow(true);\n  };\n\n  var hideSpinner = function hideSpinner() {\n    return setShow(false);\n  };\n\n  var context = {\n    show: show,\n    setShow: setShow,\n    showSpinner: showSpinner,\n    hideSpinner: hideSpinner\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SpinnerContext.Provider, {\n    value: context\n  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SpinnerComponent, {\n    show: context.show\n  }));\n}\n\n//# sourceURL=webpack://portfolio/./app/js/modules/react/spinnerComponent.js?");

/***/ }),

/***/ "./app/js/modules/utils/configUtil.js":
/*!********************************************!*\
  !*** ./app/js/modules/utils/configUtil.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ConfigUtil\": () => (/* binding */ ConfigUtil)\n/* harmony export */ });\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config.json */ \"./config.json\");\n\"use strict;\";\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar ConfigUtil = /*#__PURE__*/function () {\n  function ConfigUtil() {\n    _classCallCheck(this, ConfigUtil);\n  }\n\n  _createClass(ConfigUtil, null, [{\n    key: \"get\",\n    value: function get(applicationFolder) {\n      var application = applicationFolder ? _config_json__WEBPACK_IMPORTED_MODULE_0__.applications.filter(function (x) {\n        return x.folder.toLowerCase() === applicationFolder.toLowerCase();\n      }) : [];\n      var result = application.length > 0 ? application[0] : _config_json__WEBPACK_IMPORTED_MODULE_0__;\n      return result;\n    }\n  }]);\n\n  return ConfigUtil;\n}();\n\n//# sourceURL=webpack://portfolio/./app/js/modules/utils/configUtil.js?");

/***/ }),

/***/ "./app/js/modules/utils/jQueryAjaxUtil.js":
/*!************************************************!*\
  !*** ./app/js/modules/utils/jQueryAjaxUtil.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"jQueryAjaxUtil\": () => (/* binding */ jQueryAjaxUtil)\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\"use strict;\";\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar jQueryAjaxUtil = /*#__PURE__*/function () {\n  function jQueryAjaxUtil() {\n    _classCallCheck(this, jQueryAjaxUtil);\n  }\n\n  _createClass(jQueryAjaxUtil, null, [{\n    key: \"handleAjax\",\n    value: function handleAjax(request, condition, conditionMetDeligate, requestFailedDeligate, conditionFailedDeligate) {\n      if (condition) {\n        if (typeof conditionMetDeligate === \"function\") {\n          conditionMetDeligate();\n        }\n\n        jquery__WEBPACK_IMPORTED_MODULE_0__.ajax(request).fail(function () {\n          if (typeof requestFailedDeligate === \"function\") {\n            requestFailedDeligate();\n          }\n        });\n      } else {\n        if (typeof conditionFailedDeligate === \"function\") {\n          conditionFailedDeligate();\n        }\n      }\n    }\n  }]);\n\n  return jQueryAjaxUtil;\n}();\n\n//# sourceURL=webpack://portfolio/./app/js/modules/utils/jQueryAjaxUtil.js?");

/***/ }),

/***/ "./app/typeScript/Utils/keyGeneratorUtil/dist/index.js":
/*!*************************************************************!*\
  !*** ./app/typeScript/Utils/keyGeneratorUtil/dist/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyGeneratorUtil\": () => (/* binding */ KeyGeneratorUtil)\n/* harmony export */ });\n\"use strict;\";\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar KeyGeneratorUtil = /*#__PURE__*/function () {\n  function KeyGeneratorUtil() {\n    _classCallCheck(this, KeyGeneratorUtil);\n  }\n\n  _createClass(KeyGeneratorUtil, null, [{\n    key: \"generate\",\n    value: function generate() {\n      var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;\n      var result = typeof field !== \"undefined\" ? field.substring(0, limit).split(\" \").join(\"\") : \"\";\n      return result;\n    }\n  }]);\n\n  return KeyGeneratorUtil;\n}();\n\n//# sourceURL=webpack://portfolio/./app/typeScript/Utils/keyGeneratorUtil/dist/index.js?");

/***/ }),

/***/ "./app/app_awsDotNetCoreAsyncCoffeeMachine/sass/styles.scss":
/*!******************************************************************!*\
  !*** ./app/app_awsDotNetCoreAsyncCoffeeMachine/sass/styles.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./app/app_awsDotNetCoreAsyncCoffeeMachine/sass/styles.scss?");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"host\":\"localhost\",\"port\":8080,\"prefix\":\"app_\",\"entry\":\"home\",\"index\":\"index.html\",\"masterTemplateDir\":\"master_react\",\"developmentDir\":\"app\",\"publishDir\":\"docs\",\"folderRoot\":\"/tree/master/app/\",\"repoRootUrl\":\"https://github.com/fsereno/portfolio\",\"linkedInUrl\":\"https://www.linkedin.com/in/fabio-sereno-6a97b986/\",\"gitHubUrl\":\"https://github.com/fsereno\",\"title\":\"Portfolio\",\"author\":\"Fabio Sereno\",\"role\":\"Software developer\",\"description\":\"Portfolio website for Fabio Sereno - Software Developer.\",\"thumbnail\":\"PortfolioThumbnail.png\",\"labels\":[{\"name\":\"JavaScript\",\"class\":\"warning\"},{\"name\":\"C#\",\"class\":\"info\"},{\"name\":\"Cloud\",\"class\":\"danger\"}],\"quickSearch\":[\"React\",\".NET\",\"Cloud\"],\"grecaptcha\":{\"active\":true,\"key\":\"6LdFJsIaAAAAAGltxQjmncdNsjOtxAshDewjKCS3\",\"endpoints\":{\"base\":\"https://7pq7bx3nt6.execute-api.eu-west-2.amazonaws.com\",\"verify\":\"verify\"}},\"applications\":[{\"name\":\"Portfolio\",\"subHeading\":\"By Fabio Sereno\",\"description\":\"Highly experienced, highly self-motivated, enthusiastic, professional Full Stack Web Developer.\",\"folder\":\"home\",\"active\":true,\"include\":false,\"folderRoot\":\"/\",\"useWebpack\":true,\"useRoot\":true,\"isLandingPage\":true},{\"name\":\"MIT Licence\",\"subHeading\":\"MIT Licence for this repository.\",\"description\":\"\",\"folder\":\"licence\",\"useWebpack\":true,\"active\":true,\"include\":false},{\"name\":\"To-Do List (React)\",\"subHeading\":\"A basic list builder using React\",\"description\":\"Using React, with Babel and Webpack.\",\"searchTerms\":\"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"toDoReact\",\"active\":true,\"include\":true,\"useWebpack\":true,\"labels\":[0]},{\"name\":\"To-Do List (React Redux)\",\"subHeading\":\"A basic list builder using React and Redux\",\"description\":\"Using Redux with React to manage application state, implementing Undo and Redo functionality.\",\"searchTerms\":\"JavaScript,React,Redux,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"reactRedux\",\"active\":true,\"include\":true,\"useWebpack\":true,\"labels\":[0]},{\"name\":\"To-Do List (Vue)\",\"subHeading\":\"A basic list builder using Vue\",\"description\":\"Experimenting with Vue, Babel and Webpack.\",\"searchTerms\":\"JavaScript,Vue,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"toDoVue\",\"active\":true,\"include\":true,\"useWebpack\":true,\"labels\":[0]},{\"name\":\"Tic-Tac-Toe (React)\",\"subHeading\":\"A Tic-Tac-Toe game built using React\",\"description\":\"Experimenting with more complex aspects of React, Babel and Webpack.\",\"searchTerms\":\"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"ticTacToeReact\",\"active\":true,\"include\":true,\"useWebpack\":true,\"labels\":[0]},{\"name\":\"Azure Functions .NET, Unique Data Entry\",\"subHeading\":\"Unique data entry implementing IEqualityComparer to manage illegal duplicate data entries, with a React UI\",\"description\":\"Using Azure Functions serverless compute and .NET, with a React user interface.\",\"searchTerms\":\"Cloud,Azure,Azure Functions,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"AzureDotNetCoreUniqueDataEntryApi\",\"active\":true,\"include\":true,\"useWebpack\":true,\"masterTemplateDir\":\"master_react\",\"endpoints\":{\"api\":\"https://app-azure-dotnetcore-unique-data-entry-api.azurewebsites.net/api\",\"canItemBeAddedAsync\":\"canItemBeAddedAsync\"},\"labels\":[0,1,2],\"featured\":false},{\"name\":\"Azure Functions .NET, Data Structures\",\"subHeading\":\"First in, first out (FIFO) and last in, first out (LIFO) data structures implementing Queue and Stack in .NET, with a React UI\",\"description\":\"Using Azure Functions serverless compute and .NET, with a React user interface.\",\"searchTerms\":\"Cloud,Azure,Azure Functions,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"AzureDotNetCoreDataStructuresApi\",\"active\":true,\"include\":true,\"useWebpack\":true,\"masterTemplateDir\":\"master_react\",\"endpoints\":{\"api\":\"https://app-azure-dotnetcore-data-structures-api.azurewebsites.net/api\",\"addQueueItem\":\"addQueueItemAsync\",\"removeQueueItem\":\"removeQueueItemAsync\",\"addStackItem\":\"addStackItemAsync\",\"removeStackItem\":\"removeStackItemAsync\"},\"labels\":[0,1,2],\"featured\":false},{\"name\":\"AWS .NET, Complex Entity Sorting Algorithm\",\"subHeading\":\"A sorting mechanism, implementing IComparable and IComparer to sort complex types, with a React UI\",\"description\":\"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.\",\"searchTerms\":\"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"awsDotNetCoreEntitySortApi\",\"active\":true,\"include\":true,\"useWebpack\":true,\"masterTemplateDir\":\"master_react\",\"endpoints\":{\"api\":\"https://lni2f3xvgc.execute-api.eu-west-2.amazonaws.com/Prod/api/employees\",\"sortSalaryAsc\":\"sort/salary/asc\",\"sortSalaryDesc\":\"sort/salary/desc\"},\"labels\":[0,1,2],\"featured\":false},{\"name\":\"AWS .NET, Natural Sorting Algorithm\",\"subHeading\":\"A natural string sorting algorithm, implementing IComparer in .NET, passing in a custom comparer, with a React UI\",\"description\":\"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.\",\"searchTerms\":\"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"awsDotNetCoreStringSortApi\",\"active\":true,\"include\":true,\"useWebpack\":true,\"masterTemplateDir\":\"master_react\",\"endpoints\":{\"api\":\"https://t8txttdaee.execute-api.eu-west-2.amazonaws.com/Prod/api/values\",\"sort\":\"sort\"},\"labels\":[0,1,2],\"featured\":false},{\"name\":\"AWS .NET, Shopping Basket List Builder\",\"subHeading\":\"A basic shopping basket application, with data processing handled by a Serverless .NET RESTful API, with a React UI\",\"description\":\"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.\",\"searchTerms\":\"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"awsDotNetCoreShoppingCart\",\"active\":true,\"include\":true,\"useWebpack\":true,\"endpoints\":{\"api\":\"https://6pzl3f4421.execute-api.eu-west-2.amazonaws.com/Prod/api/basket\",\"get\":\"get\",\"add\":\"add\",\"delete\":\"delete\",\"update\":\"update\"},\"labels\":[0,1,2],\"order\":2},{\"name\":\"AWS .NET, Asynchronous Coffee Maker\",\"subHeading\":\"Demonstraiting knowledge of asynchrony, multithreading and the State Machine in .NET, with a React UI\",\"description\":\"AWS Lambda serverless application (SAM), using .NET along with an AWS RESTful Gateway API.\",\"searchTerms\":\"Cloud,AWS,Amazon Web Services,C#,dotnet,.net core,.netcore,Multithreading,Async,Asynchronous,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"awsDotNetCoreAsyncCoffeeMachine\",\"active\":true,\"include\":true,\"useWebpack\":true,\"masterTemplateDir\":\"master_react\",\"endpoints\":{\"api\":\"https://ro5qqsplje.execute-api.eu-west-2.amazonaws.com/Prod/api/values\",\"run\":\"run\",\"runAsync\":\"runasync\"},\"labels\":[0,1,2],\"order\":3},{\"name\":\"Three JS Scene (Basic)\",\"subHeading\":\"A basic THREE JS scene\",\"description\":\"An interactive Three JS scene, using Babel and Webpack.\",\"searchTerms\":\"JavaScript,Three JS,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"threeJSScene\",\"active\":true,\"include\":true,\"useWebpack\":true,\"labels\":[0]},{\"name\":\"AFrame React (Basic)\",\"subHeading\":\"An AFrame Hello World application with React\",\"description\":\"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.\",\"searchTerms\":\"JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality\",\"folder\":\"aframe\",\"active\":true,\"include\":true,\"useWebpack\":true,\"labels\":[0]},{\"name\":\"AFrame React (Complex)\",\"subHeading\":\"A slightly more complex AFrame application with React, allowing user input\",\"description\":\"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.\",\"searchTerms\":\"JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality\",\"folder\":\"aframeComplex\",\"active\":true,\"include\":true,\"useWebpack\":true,\"labels\":[0]},{\"name\":\"JS Coding Standards\",\"subHeading\":\"A JavaScript Code Style Guide\",\"description\":\"By Fabio Sereno\",\"searchTerms\":\"JavaScript,SOLID Principles,YAGNI,DRY,KISS\",\"folder\":\"jsCodingStandards\",\"active\":false,\"include\":false,\"labels\":[0]},{\"name\":\"Basic React Email Client\",\"subHeading\":\"An SPA using React and React Router. React Context and useReducer handle state. Optimised with useCallback, useMemo and React.memo\",\"description\":\"Using React, Babel and Webpack.\",\"searchTerms\":\"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"basicEmailClientReactSpa\",\"active\":true,\"include\":true,\"useWebpack\":true,\"masterTemplateDir\":\"basicSpaReact\",\"labels\":[0],\"order\":2,\"featured\":false},{\"name\":\"AWS Node.js, B2C API, To-Do List\",\"subHeading\":\"Authenticated with Cognito, data stored using Dynamo DB, driven by Lambda Functions and with a React UI\",\"description\":\"Built with Node.js, the AWS Serverless Framework and managed by an HTTP API Gateway.\",\"searchTerms\":\"Cloud,AWS,Amazon Web Services,Serverless Framework,Node.js,Cognito,Dynamo DB,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"awsNodeToDoApi\",\"active\":true,\"include\":true,\"useWebpack\":true,\"masterTemplateDir\":\"basicEmailClientReactSpa\",\"labels\":[0,2],\"order\":1,\"featured\":false,\"endpoints\":{\"base\":\"https://7pq7bx3nt6.execute-api.eu-west-2.amazonaws.com\",\"api\":\"todos\"}},{\"name\":\"Master React Template\",\"subHeading\":\"Subheading\",\"description\":\"Description\",\"searchTerms\":\"JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"master_react\",\"masterTemplateDir\":\"toDoReact\",\"active\":true,\"include\":false,\"useWebpack\":true,\"labels\":[0]}]}');\n\n//# sourceURL=webpack://portfolio/./config.json?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./app/app_awsDotNetCoreAsyncCoffeeMachine/src/app.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;