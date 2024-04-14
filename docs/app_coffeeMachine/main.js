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

/***/ "./app/app_coffeeMachine/src/app.js":
/*!******************************************!*\
  !*** ./app/app_coffeeMachine/src/app.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _coffeeMakerApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coffeeMakerApp */ \"./app/app_coffeeMachine/src/coffeeMakerApp.js\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/styles.scss */ \"./app/app_coffeeMachine/sass/styles.scss\");\n\"use strict;\";\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coffeeMakerApp__WEBPACK_IMPORTED_MODULE_2__.default, null), document.getElementById('result'));\n\n//# sourceURL=webpack://portfolio/./app/app_coffeeMachine/src/app.js?");

/***/ }),

/***/ "./app/app_coffeeMachine/src/coffeeMakerApp.js":
/*!*****************************************************!*\
  !*** ./app/app_coffeeMachine/src/coffeeMakerApp.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CoffeeMakerApp)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _js_modules_react_spinnerComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/modules/react/spinnerComponent.js */ \"./app/js/modules/react/spinnerComponent.js\");\n/* harmony import */ var _js_modules_react_errorModalComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/modules/react/errorModalComponent.js */ \"./app/js/modules/react/errorModalComponent.js\");\n/* harmony import */ var _coffeeMakerComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coffeeMakerComponent */ \"./app/app_coffeeMachine/src/coffeeMakerComponent.js\");\n/* harmony import */ var _js_modules_utils_configUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/modules/utils/configUtil */ \"./app/js/modules/utils/configUtil.js\");\n/* harmony import */ var _js_modules_utils_jQueryAjaxUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../js/modules/utils/jQueryAjaxUtil */ \"./app/js/modules/utils/jQueryAjaxUtil.js\");\n/* harmony import */ var _js_modules_react_deploymentModalComponent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../js/modules/react/deploymentModalComponent.js */ \"./app/js/modules/react/deploymentModalComponent.js\");\n/* harmony import */ var _js_modules_utils_deploymentUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../js/modules/utils/deploymentUtil */ \"./app/js/modules/utils/deploymentUtil.js\");\n\"use strict;\";\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n\nvar CONFIG = _js_modules_utils_configUtil__WEBPACK_IMPORTED_MODULE_4__.ConfigUtil.get();\nvar APP_CONFIG = _js_modules_utils_configUtil__WEBPACK_IMPORTED_MODULE_4__.ConfigUtil.get(\"coffeeMachine\");\nvar RUN_ENDPOINT = \"\".concat(CONFIG.apiRoot).concat(APP_CONFIG.endpoints.run);\nvar RUN_ASYNC_ENDPOINT = \"\".concat(CONFIG.apiRoot).concat(APP_CONFIG.endpoints.runAsync);\n\nvar CoffeeMakerApp = /*#__PURE__*/function (_React$Component) {\n  _inherits(CoffeeMakerApp, _React$Component);\n\n  var _super = _createSuper(CoffeeMakerApp);\n\n  function CoffeeMakerApp(props) {\n    var _this;\n\n    _classCallCheck(this, CoffeeMakerApp);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      log: [],\n      showSpinner: false,\n      showDeploymentModal: _js_modules_utils_deploymentUtil__WEBPACK_IMPORTED_MODULE_7__.DeploymentUtil.isNotCloud(),\n      showErrorModal: false\n    };\n    _this.handleErrorModalClose = _this.handleErrorModalClose.bind(_assertThisInitialized(_this));\n    _this.handleBeforeAjax = _this.handleBeforeAjax.bind(_assertThisInitialized(_this));\n    _this.handleFailedAjax = _this.handleFailedAjax.bind(_assertThisInitialized(_this));\n    _this.handleRun = _this.handleRun.bind(_assertThisInitialized(_this));\n    _this.handleRunAsync = _this.handleRunAsync.bind(_assertThisInitialized(_this));\n    _this.handleAjax = _this.handleAjax.bind(_assertThisInitialized(_this));\n    _this.handleRequest = _this.handleRequest.bind(_assertThisInitialized(_this));\n    _this.handleDeploymentModalClose = _this.handleDeploymentModalClose.bind(_assertThisInitialized(_this));\n    _this.handleDeploymentModalShow = _this.handleDeploymentModalShow.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(CoffeeMakerApp, [{\n    key: \"handleRun\",\n    value: function handleRun() {\n      this.handleRequest(RUN_ENDPOINT);\n    }\n  }, {\n    key: \"handleRunAsync\",\n    value: function handleRunAsync() {\n      this.handleRequest(RUN_ASYNC_ENDPOINT);\n    }\n  }, {\n    key: \"handleRequest\",\n    value: function handleRequest(endpoint) {\n      var _this2 = this;\n\n      var request = {\n        url: endpoint,\n        type: \"GET\",\n        success: function success(response) {\n          _this2.setState({\n            log: response,\n            processHeading: \"Log of tasks carried out\",\n            showSpinner: false\n          });\n        }\n      };\n      this.handleAjax(request);\n    }\n  }, {\n    key: \"handleAjax\",\n    value: function handleAjax(request) {\n      _js_modules_utils_jQueryAjaxUtil__WEBPACK_IMPORTED_MODULE_5__.jQueryAjaxUtil.handleAjax(request, _js_modules_utils_deploymentUtil__WEBPACK_IMPORTED_MODULE_7__.DeploymentUtil.isCloud(), this.handleBeforeAjax, this.handleFailedAjax, this.handleDeploymentModalShow);\n    }\n  }, {\n    key: \"handleBeforeAjax\",\n    value: function handleBeforeAjax() {\n      this.setState({\n        showSpinner: true\n      });\n    }\n  }, {\n    key: \"handleFailedAjax\",\n    value: function handleFailedAjax() {\n      this.setState({\n        showErrorModal: true,\n        showSpinner: false\n      });\n    }\n  }, {\n    key: \"handleErrorModalClose\",\n    value: function handleErrorModalClose() {\n      this.setState({\n        showErrorModal: false\n      });\n    }\n  }, {\n    key: \"handleDeploymentModalClose\",\n    value: function handleDeploymentModalClose() {\n      this.setState({\n        showDeploymentModal: false\n      });\n    }\n  }, {\n    key: \"handleDeploymentModalShow\",\n    value: function handleDeploymentModalShow() {\n      this.setState({\n        showDeploymentModal: true\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_js_modules_react_errorModalComponent_js__WEBPACK_IMPORTED_MODULE_2__.ErrorModalComponent, {\n        id: \"errorModal\",\n        show: this.state.showErrorModal,\n        handleClose: this.handleErrorModalClose\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_js_modules_react_spinnerComponent_js__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, {\n        show: this.state.showSpinner\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_js_modules_react_deploymentModalComponent_js__WEBPACK_IMPORTED_MODULE_6__.DeploymentModalComponent, {\n        show: this.state.showDeploymentModal,\n        handleClose: this.handleDeploymentModalClose\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_coffeeMakerComponent__WEBPACK_IMPORTED_MODULE_3__.default, {\n        log: this.state.log,\n        handleRun: this.handleRun,\n        handleRunAsync: this.handleRunAsync\n      }));\n    }\n  }]);\n\n  return CoffeeMakerApp;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n\n//# sourceURL=webpack://portfolio/./app/app_coffeeMachine/src/coffeeMakerApp.js?");

/***/ }),

/***/ "./app/app_coffeeMachine/src/coffeeMakerComponent.js":
/*!***********************************************************!*\
  !*** ./app/app_coffeeMachine/src/coffeeMakerComponent.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CoffeeMakerComponent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _typeScript_Utils_keyGeneratorUtil_dist_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../typeScript/Utils/keyGeneratorUtil/dist/index */ \"./app/typeScript/Utils/keyGeneratorUtil/dist/index.js\");\n\"use strict;\";\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar CoffeeMakerComponent = /*#__PURE__*/function (_React$Component) {\n  _inherits(CoffeeMakerComponent, _React$Component);\n\n  var _super = _createSuper(CoffeeMakerComponent);\n\n  function CoffeeMakerComponent(props) {\n    var _this;\n\n    _classCallCheck(this, CoffeeMakerComponent);\n\n    _this = _super.call(this, props);\n    _this.renderProcessHeading = _this.renderProcessHeading.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(CoffeeMakerComponent, [{\n    key: \"renderProcessHeading\",\n    value: function renderProcessHeading() {\n      if (this.props.log.length > 0) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n          className: \"mb-4\"\n        }, \"Log of tasks carried out\");\n      }\n\n      return null;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"row mb-3\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"col-lg-6\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        id: \"runSync\",\n        type: \"button\",\n        className: \"btn btn-dark mr-2\",\n        onClick: this.props.handleRun\n      }, \"Run Sync\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        id: \"runAsync\",\n        type: \"button\",\n        className: \"btn btn-dark mr-2\",\n        onClick: this.props.handleRunAsync\n      }, \"Run Async\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"col-lg-6\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n        className: \"text-muted\"\n      }, \"(Processing is delayed for this demonstration)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.renderProcessHeading, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n        id: \"resultOutput\",\n        className: \"list-group\"\n      }, this.props.log.map(function (item, index) {\n        var key = _typeScript_Utils_keyGeneratorUtil_dist_index__WEBPACK_IMPORTED_MODULE_1__.KeyGeneratorUtil.generate(item.detail);\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n          key: key,\n          className: \"list-group-item d-flex align-items-center\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n          className: \"badge badge-primary badge-pill mr-3 bg-dark\"\n        }, index + 1), item.detail);\n      })))));\n    }\n  }]);\n\n  return CoffeeMakerComponent;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n\n//# sourceURL=webpack://portfolio/./app/app_coffeeMachine/src/coffeeMakerComponent.js?");

/***/ }),

/***/ "./app/js/modules/react/deploymentModalComponent.js":
/*!**********************************************************!*\
  !*** ./app/js/modules/react/deploymentModalComponent.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DeploymentModalComponent\": () => (/* binding */ DeploymentModalComponent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n/* harmony import */ var _utils_configUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/configUtil */ \"./app/js/modules/utils/configUtil.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n\n\n\n\n/**\n * DeploymentModalComponent displays a modal detailing how to request a deployment.\n * If the endpoint is not available, the modal is shown to the user.\n *\n * @param {string} id - The ID of the modal element.\n * @param {string} title - The title of the modal.\n * @param {string} endpoint - The endpoint URL to check.\n */\n\nfunction DeploymentModalComponent(_ref) {\n  var id = _ref.id,\n      title = _ref.title,\n      show = _ref.show,\n      handleClose = _ref.handleClose;\n  var config = _utils_configUtil__WEBPACK_IMPORTED_MODULE_1__.ConfigUtil.get();\n  var linkedInUrl = config.linkedInUrl;\n  var gitHubIssueUrl = config.gitHubIssuesUrl;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default, {\n    id: id || \"deploymentModal\",\n    show: show\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Title, {\n    className: \"display-4\"\n  }, title || \"Request Deployment\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__.default, {\n    variant: \"link\",\n    className: \"close\",\n    onClick: handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"lr\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"rl\"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"To conserve resources, services are not always available. To proceed, please request a full deployment of the portfolio. This will create a fully containerised environment in the cloud. Once you request the deployment, you will receive a unique URL to access the complete portfolio.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Footer, {\n    className: \"flex-box \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    className: \"btn btn-dark w-100 mb-2\",\n    href: gitHubIssueUrl,\n    target: \"_blank\"\n  }, \"Raise an Issue on GitHub\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fa fa-github ml-2\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    className: \"btn btn-dark w-100\",\n    href: linkedInUrl,\n    target: \"_blank\"\n  }, \"Make Contact on LinkedIn\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fa fa fa-linkedin ml-2\"\n  }))))));\n}\n\n//# sourceURL=webpack://portfolio/./app/js/modules/react/deploymentModalComponent.js?");

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

/***/ "./app/js/modules/utils/cookieUtil.js":
/*!********************************************!*\
  !*** ./app/js/modules/utils/cookieUtil.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CookieUtil\": () => (/* binding */ CookieUtil)\n/* harmony export */ });\n\"use strict;\";\n/**\n * Utility class for handling cookies.\n */\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CookieUtil = /*#__PURE__*/function () {\n  function CookieUtil() {\n    _classCallCheck(this, CookieUtil);\n  }\n\n  _createClass(CookieUtil, null, [{\n    key: \"get\",\n    value:\n    /**\n     * Retrieves the value of a cookie by its name.\n     * @param {string} name - The name of the cookie.\n     * @returns {string|null} The value of the cookie, or null if not found.\n     */\n    function get(name) {\n      var cookies = document.cookie;\n      var cookieString = cookies.split('; ');\n\n      for (var i = 0; i < cookieString.length; i++) {\n        var cookie = cookieString[i].split('=');\n\n        if (cookie[0] === name) {\n          return cookie[1];\n        }\n      }\n\n      return null;\n    }\n  }]);\n\n  return CookieUtil;\n}();\n\n//# sourceURL=webpack://portfolio/./app/js/modules/utils/cookieUtil.js?");

/***/ }),

/***/ "./app/js/modules/utils/deploymentUtil.js":
/*!************************************************!*\
  !*** ./app/js/modules/utils/deploymentUtil.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DeploymentUtil\": () => (/* binding */ DeploymentUtil)\n/* harmony export */ });\n/* harmony import */ var _configUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configUtil */ \"./app/js/modules/utils/configUtil.js\");\n/* harmony import */ var _cookieUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookieUtil */ \"./app/js/modules/utils/cookieUtil.js\");\n\"use strict;\";\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar CONFIG = _configUtil__WEBPACK_IMPORTED_MODULE_0__.ConfigUtil.get();\nvar COOKIE = CONFIG.deploymentTargetCookie;\nvar DEPLOYMENT_TARGET_CLOUD = CONFIG.deploymentTargets.cloud;\n/**\n * Utility class for deployment-related operations.\n */\n\nvar DeploymentUtil = /*#__PURE__*/function () {\n  function DeploymentUtil() {\n    _classCallCheck(this, DeploymentUtil);\n  }\n\n  _createClass(DeploymentUtil, null, [{\n    key: \"isNotCloud\",\n    value:\n    /**\n     * Checks if the deployment is not on the cloud.\n     * @returns {boolean} Returns true if the deployment is not on the cloud, false otherwise.\n     */\n    function isNotCloud() {\n      return _cookieUtil__WEBPACK_IMPORTED_MODULE_1__.CookieUtil.get(COOKIE) !== DEPLOYMENT_TARGET_CLOUD;\n    }\n    /**\n     * Checks if the deployment is on the cloud.\n     * @returns {boolean} Returns true if the deployment is on the cloud, false otherwise.\n     */\n\n  }, {\n    key: \"isCloud\",\n    value: function isCloud() {\n      return _cookieUtil__WEBPACK_IMPORTED_MODULE_1__.CookieUtil.get(COOKIE) === DEPLOYMENT_TARGET_CLOUD;\n    }\n  }]);\n\n  return DeploymentUtil;\n}();\n\n//# sourceURL=webpack://portfolio/./app/js/modules/utils/deploymentUtil.js?");

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

/***/ "./app/app_coffeeMachine/sass/styles.scss":
/*!************************************************!*\
  !*** ./app/app_coffeeMachine/sass/styles.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./app/app_coffeeMachine/sass/styles.scss?");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"host\":\"localhost\",\"apiRoot\":\"/backend/\",\"deploymentTargetCookie\":\"fs_portfolio_deployment_target\",\"deploymentTargets\":{\"cloud\":\"cloud\",\"static\":\"static\"},\"dockerHost\":\"localhost\",\"port\":8080,\"prefix\":\"app_\",\"entry\":\"home\",\"index\":\"index.html\",\"masterTemplateDir\":\"master_react\",\"developmentDir\":\"app\",\"publishDir\":\"docs\",\"folderRoot\":\"/tree/master/app/\",\"repoRootUrl\":\"https://github.com/fsereno/portfolio\",\"linkedInUrl\":\"https://www.linkedin.com/in/fabio-sereno-6a97b986/\",\"gitHubUrl\":\"https://github.com/fsereno\",\"gitHubIssuesUrl\":\"https://github.com/fsereno/portfolio/issues\",\"title\":\"Portfolio\",\"author\":\"Fabio Sereno\",\"role\":\"Software Engineer\",\"description\":\"Portfolio By Fabio Sereno - Software Engineer\",\"thumbnail\":\"PortfolioThumbnail.png\",\"labels\":{\"JavaScript\":\"warning\",\"NodeJS\":\"success\",\"C#\":\"info\",\"Cloud\":\"danger\"},\"quickSearch\":[\"React\",\".NET\",\"Cloud\"],\"grecaptcha\":{\"active\":false,\"key\":\"\",\"endpoints\":{\"base\":\"\",\"verify\":\"verify\"}},\"applications\":[{\"name\":\"Portfolio\",\"subHeading\":\"By Fabio Sereno\",\"description\":\"Highly experienced, highly self-motivated, enthusiastic, professional Full Stack Software Engineer.\",\"folder\":\"home\",\"active\":true,\"include\":false,\"folderRoot\":\"/\",\"useWebpack\":true,\"useRoot\":true,\"isLandingPage\":true},{\"name\":\"MIT Licence\",\"subHeading\":\"MIT Licence for this repository.\",\"description\":\"\",\"folder\":\"licence\",\"useWebpack\":true,\"active\":true,\"include\":false},{\"name\":\"To-Do List (React)\",\"subHeading\":\"A basic list builder using React\",\"description\":\"Using React, with Babel and Webpack.\",\"searchTerms\":\"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"toDoReact\",\"active\":true,\"include\":true,\"useWebpack\":true,\"labels\":[\"JavaScript\"]},{\"name\":\"To-Do List (React Redux)\",\"subHeading\":\"A basic list builder using React and Redux\",\"description\":\"Using Redux with React to manage application state, implementing Undo and Redo functionality.\",\"searchTerms\":\"Docker,JavaScript,React,Redux,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"reactRedux\",\"active\":true,\"include\":true,\"useWebpack\":true,\"labels\":[\"JavaScript\"]},{\"name\":\"To-Do List (Vue)\",\"subHeading\":\"A basic list builder using Vue\",\"description\":\"Experimenting with Vue, Babel and Webpack.\",\"searchTerms\":\"Docker,JavaScript,Vue,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"toDoVue\",\"active\":true,\"include\":true,\"useWebpack\":true,\"labels\":[\"JavaScript\"]},{\"name\":\"Tic-Tac-Toe\",\"subHeading\":\"A Tic-Tac-Toe game built using React\",\"description\":\"Demonstrating React state management with immutability, allowing for \\'time travel\\' or \\'versioned\\' data.\",\"searchTerms\":\"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"ticTacToeReact\",\"active\":true,\"include\":true,\"useWebpack\":true,\"labels\":[\"JavaScript\"]},{\"name\":\"Unique Data Entry Application\",\"subHeading\":\"Unique data entry implementing IEqualityComparer to manage illegal duplicate data entries, with a React UI\",\"description\":\".NET Web API with a React UI.\",\"searchTerms\":\"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"uniqueDataEntry\",\"active\":true,\"include\":true,\"useWebpack\":true,\"masterTemplateDir\":\"master_react\",\"endpoints\":{\"canItemBeAddedAsync\":\"uniqueDataEntry/api/canItemBeAddedAsync\"},\"labels\":[\"JavaScript\",\"C#\",\"Cloud\"],\"featured\":false,\"services\":[\"uniqueDataEntry\"]},{\"name\":\"Data Structures\",\"subHeading\":\"First in, first out (FIFO) and last in, first out (LIFO) data structures implementing Queue and Stack\",\"description\":\".NET Web API with a React UI.\",\"searchTerms\":\"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"dataStructures\",\"active\":true,\"include\":true,\"useWebpack\":true,\"masterTemplateDir\":\"master_react\",\"endpoints\":{\"addQueueItem\":\"dataStructures/api/addQueueItemAsync\",\"removeQueueItem\":\"dataStructures/api/removeQueueItemAsync\",\"addStackItem\":\"dataStructures/api/addStackItemAsync\",\"removeStackItem\":\"dataStructures/api/removeStackItemAsync\"},\"labels\":[\"JavaScript\",\"C#\",\"Cloud\"],\"featured\":false,\"services\":[\"dataStructures\"]},{\"name\":\"Complex Entity Sorting Algorithm\",\"subHeading\":\"A sorting mechanism, implementing IComparable and IComparer to sort complex types\",\"description\":\".NET Web API with a React UI.\",\"searchTerms\":\"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"entitySort\",\"active\":true,\"include\":true,\"useWebpack\":true,\"masterTemplateDir\":\"master_react\",\"endpoints\":{\"sortSalaryAsc\":\"entitySort/api/sort/salary/asc\",\"sortSalaryDesc\":\"entitySort/api/sort/salary/desc\"},\"labels\":[\"JavaScript\",\"C#\",\"Cloud\"],\"featured\":false,\"services\":[\"entitySort\"]},{\"name\":\"Natural Sorting Algorithm\",\"subHeading\":\"A natural string sorting algorithm, implementing IComparer in .NET, passing in a custom comparer\",\"description\":\".NET Web API with a React UI.\",\"searchTerms\":\"Docker,Cloud,C#,dotnet,.net,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"stringSort\",\"active\":true,\"include\":true,\"useWebpack\":true,\"masterTemplateDir\":\"master_react\",\"endpoints\":{\"sort\":\"stringSort/api/sort\"},\"labels\":[\"JavaScript\",\"C#\",\"Cloud\"],\"featured\":false,\"services\":[\"stringSort\"]},{\"name\":\"Coffee Machine\",\"subHeading\":\"Demonstraiting knowledge of asynchrony, multithreading and the State Machine in .NET\",\"description\":\".NET Web API with a React UI.\",\"searchTerms\":\"Docker,Cloud,C#,dotnet,.net,Multithreading,Async,Asynchronous,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"coffeeMachine\",\"active\":true,\"include\":true,\"useWebpack\":true,\"masterTemplateDir\":\"master_react\",\"endpoints\":{\"run\":\"coffeeMachine/api/run\",\"runAsync\":\"coffeeMachine/api/runasync\"},\"labels\":[\"JavaScript\",\"C#\",\"Cloud\"],\"order\":3,\"services\":[\"coffeeMachine\"]},{\"name\":\"AFrame React Example\",\"subHeading\":\"An example AFrame application with React, allowing for user input\",\"description\":\"Exploring WebXR applications using AFrame and React. Compiled with Babel and Webpack.\",\"searchTerms\":\"Docker,JavaScript,AFrame,Babel,Webpack,PUG,HTML,CSS,SASS,VR,Virtual Reality\",\"folder\":\"aframeComplex\",\"active\":true,\"include\":true,\"useWebpack\":true,\"labels\":[\"JavaScript\"]},{\"name\":\"JS Coding Standards\",\"subHeading\":\"A JavaScript Code Style Guide\",\"description\":\"By Fabio Sereno\",\"searchTerms\":\"Docker,JavaScript,SOLID Principles,YAGNI,DRY,KISS\",\"folder\":\"jsCodingStandards\",\"active\":false,\"include\":false,\"labels\":[\"JavaScript\"]},{\"name\":\"Basic React Email Client\",\"subHeading\":\"An SPA using React and React Router. React Context and useReducer handle state. Optimised with useCallback, useMemo and React.memo\",\"description\":\"Using React, Babel and Webpack.\",\"searchTerms\":\"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"basicEmailClientReactSpa\",\"active\":true,\"include\":true,\"useWebpack\":true,\"masterTemplateDir\":\"basicSpaReact\",\"labels\":[\"JavaScript\"],\"order\":2,\"featured\":false},{\"name\":\"NodeJS, To-Do List SPA\",\"subHeading\":\"A simple To-Do list application, with user registration and authentication\",\"description\":\"NodeJS Web API with a React UI.\",\"searchTerms\":\"Docker,NodeJS,Express,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"nodeToDo\",\"active\":true,\"include\":true,\"useWebpack\":true,\"masterTemplateDir\":\"basicEmailClientReactSpa\",\"labels\":[\"JavaScript\",\"Cloud\",\"NodeJS\"],\"order\":1,\"featured\":false,\"endpoints\":{\"base\":\"nodeToDo\"},\"services\":[\"nodeToDo\"]},{\"name\":\"Master React Template\",\"subHeading\":\"Subheading\",\"description\":\"Description\",\"searchTerms\":\"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"master_react\",\"masterTemplateDir\":\"toDoReact\",\"active\":true,\"include\":false,\"useWebpack\":true,\"labels\":[\"JavaScript\"]},{\"name\":\"Test React Template\",\"subHeading\":\"Subheading\",\"description\":\"Description\",\"searchTerms\":\"Docker,JavaScript,React,Babel,Webpack,PUG,HTML,CSS,SASS\",\"folder\":\"new_react\",\"masterTemplateDir\":\"toDoReact\",\"active\":true,\"include\":false,\"useWebpack\":true,\"labels\":[\"JavaScript\"]}]}');\n\n//# sourceURL=webpack://portfolio/./config.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./app/app_coffeeMachine/src/app.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;