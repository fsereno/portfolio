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

/***/ "./app/app_reactRedux/src/app.js":
/*!***************************************!*\
  !*** ./app/app_reactRedux/src/app.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./app/app_reactRedux/sass/styles.scss\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _typeScript_Utils_keyGeneratorUtil_dist_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../typeScript/Utils/keyGeneratorUtil/dist/index */ \"./app/typeScript/Utils/keyGeneratorUtil/dist/index.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var redux_undo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-undo */ \"./node_modules/redux-undo/lib/index.js\");\n/* harmony import */ var _formComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formComponent */ \"./app/app_reactRedux/src/formComponent.js\");\n\"use strict;\";\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n\nvar _addToDo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__.createAction)(\"ADD_TODO\");\n\nvar _removeToDo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__.createAction)(\"REMOVE_TODO\");\n\nvar _todoReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__.createReducer)([], {\n  ADD_TODO: function ADD_TODO(state, action) {\n    state.push(action.payload);\n  },\n  REMOVE_TODO: function REMOVE_TODO(state, action) {\n    state.splice(action.payload, 1);\n  }\n});\n\nvar _undoableTodoReducer = (0,redux_undo__WEBPACK_IMPORTED_MODULE_4__.default)(_todoReducer);\n\nvar _store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__.configureStore)({\n  reducer: _undoableTodoReducer\n});\n\nvar ToDoListForm = /*#__PURE__*/function (_React$Component) {\n  _inherits(ToDoListForm, _React$Component);\n\n  var _super = _createSuper(ToDoListForm);\n\n  function ToDoListForm(props) {\n    var _this;\n\n    _classCallCheck(this, ToDoListForm);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      value: '',\n      counterLimit: 10,\n      counter: 0\n    };\n    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    _this.handleDelete = _this.handleDelete.bind(_assertThisInitialized(_this));\n    _this.handleUndo = _this.handleUndo.bind(_assertThisInitialized(_this));\n    _this.handleRedo = _this.handleRedo.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(ToDoListForm, [{\n    key: \"handleChange\",\n    value: function handleChange(event) {\n      this.setState({\n        value: event.target.value\n      });\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(event) {\n      event.preventDefault();\n\n      if (this.state.counter < this.state.counterLimit) {\n        var action = _addToDo();\n\n        action = _addToDo(this.state.value);\n\n        _store.dispatch(action);\n\n        this.setState({\n          value: \"\",\n          counter: _store.getState().present.length\n        });\n      }\n    }\n  }, {\n    key: \"handleDelete\",\n    value: function handleDelete(event) {\n      event.preventDefault();\n      var index = Number(event.target.dataset.index);\n\n      var action = _removeToDo();\n\n      action = _removeToDo(index);\n\n      _store.dispatch(action);\n\n      this.setState({\n        counter: _store.getState().present.length\n      });\n    }\n  }, {\n    key: \"handleUndo\",\n    value: function handleUndo() {\n      _store.dispatch(redux_undo__WEBPACK_IMPORTED_MODULE_4__.ActionCreators.undo());\n\n      this.setState({\n        counter: _store.getState().present.length\n      });\n    }\n  }, {\n    key: \"handleRedo\",\n    value: function handleRedo() {\n      _store.dispatch(redux_undo__WEBPACK_IMPORTED_MODULE_4__.ActionCreators.redo());\n\n      this.setState({\n        counter: _store.getState().present.length\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n        className: \"row splitter\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n        className: \"col-lg-4\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h3\", null, \"Result:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"ul\", {\n        id: \"toDoList\",\n        className: \"list-group\"\n      }, _store.getState().present.map(function (item, index) {\n        var key = _typeScript_Utils_keyGeneratorUtil_dist_index__WEBPACK_IMPORTED_MODULE_3__.KeyGeneratorUtil.generate(item);\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"li\", {\n          key: key,\n          className: \"list-group-item d-flex justify-content-between align-items-center\"\n        }, item, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"a\", {\n          href: \"#\",\n          className: \"badge badge-danger delete\",\n          \"data-index\": index,\n          onClick: _this2.handleDelete\n        }, \"Delete\"));\n      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n        className: \"row splitter\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n        className: \"col-lg-12\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", null, \"Items: \", this.state.counter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", null, \"Item to add: \", this.state.value))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n        className: \"col-lg-6\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_formComponent__WEBPACK_IMPORTED_MODULE_5__.FormComponent, {\n        value: this.state.value,\n        onChange: this.handleChange,\n        handleSubmit: this.handleSubmit,\n        items: _store.getState().present,\n        handleUndo: this.handleUndo,\n        handleRedo: this.handleRedo\n      }))));\n    }\n  }]);\n\n  return ToDoListForm;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n\nreact_dom__WEBPACK_IMPORTED_MODULE_2__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ToDoListForm, null), document.getElementById('result'));\n\n//# sourceURL=webpack://portfolio/./app/app_reactRedux/src/app.js?");

/***/ }),

/***/ "./app/app_reactRedux/src/formComponent.js":
/*!*************************************************!*\
  !*** ./app/app_reactRedux/src/formComponent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormComponent\": () => (/* binding */ FormComponent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/ButtonGroup */ \"./node_modules/react-bootstrap/esm/ButtonGroup.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _typeScript_Utils_filterUtil_dist_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../typeScript/Utils/filterUtil/dist/index */ \"./app/typeScript/Utils/filterUtil/dist/index.js\");\n\"use strict;\";\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nfunction FormComponent(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      validated = _useState2[0],\n      setValidated = _useState2[1];\n\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault();\n    var form = event.currentTarget;\n    var data = new FormData(form);\n    var input = data.get(\"itemInput\");\n    var isNotUnique = !_typeScript_Utils_filterUtil_dist_index__WEBPACK_IMPORTED_MODULE_1__.FilterUtil.isUniqueInArray(props.items, input);\n\n    if (form.checkValidity() === false || isNotUnique) {\n      setValidated(true);\n      event.stopPropagation();\n    } else {\n      setValidated(false);\n      props.handleSubmit(event);\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__.default, {\n    noValidate: true,\n    validated: validated,\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__.default.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__.default.Group, {\n    as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__.default\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__.default.Label, null, \"Item to add\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__.default.Control, {\n    name: \"itemInput\",\n    id: \"itemInput\",\n    type: \"text\",\n    placeholder: \"Add to list...\",\n    required: true,\n    onChange: props.onChange,\n    value: props.value\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__.default.Control.Feedback, {\n    type: \"invalid\"\n  }, \"Please enter a value.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__.default.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_4__.default, {\n    \"aria-label\": \"Basic example\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n    id: \"submit\",\n    variant: \"dark\",\n    type: \"submit\"\n  }, \"Add item\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n    id: \"undo\",\n    variant: \"danger\",\n    type: \"button\",\n    onClick: props.handleUndo\n  }, \"Undo\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__.default, {\n    id: \"redo\",\n    variant: \"dark\",\n    type: \"button\",\n    onClick: props.handleRedo\n  }, \"Redo\")))));\n}\n\n//# sourceURL=webpack://portfolio/./app/app_reactRedux/src/formComponent.js?");

/***/ }),

/***/ "./app/typeScript/Utils/filterUtil/dist/index.js":
/*!*******************************************************!*\
  !*** ./app/typeScript/Utils/filterUtil/dist/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FilterUtil\": () => (/* binding */ FilterUtil)\n/* harmony export */ });\n\"use strict;\";\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar FilterUtil = /*#__PURE__*/function () {\n  function FilterUtil() {\n    _classCallCheck(this, FilterUtil);\n  }\n\n  _createClass(FilterUtil, null, [{\n    key: \"isUniqueInArray\",\n    value: function isUniqueInArray(collection, input) {\n      var _a;\n\n      var result = (_a = (collection === null || collection === void 0 ? void 0 : collection.filter(function (x) {\n        return x === input;\n      }).length) === 0) !== null && _a !== void 0 ? _a : true;\n      return result;\n    }\n  }]);\n\n  return FilterUtil;\n}();\n\n//# sourceURL=webpack://portfolio/./app/typeScript/Utils/filterUtil/dist/index.js?");

/***/ }),

/***/ "./app/typeScript/Utils/keyGeneratorUtil/dist/index.js":
/*!*************************************************************!*\
  !*** ./app/typeScript/Utils/keyGeneratorUtil/dist/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyGeneratorUtil\": () => (/* binding */ KeyGeneratorUtil)\n/* harmony export */ });\n\"use strict;\";\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar KeyGeneratorUtil = /*#__PURE__*/function () {\n  function KeyGeneratorUtil() {\n    _classCallCheck(this, KeyGeneratorUtil);\n  }\n\n  _createClass(KeyGeneratorUtil, null, [{\n    key: \"generate\",\n    value: function generate() {\n      var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;\n      var result = typeof field !== \"undefined\" ? field.substring(0, limit).split(\" \").join(\"\") : \"\";\n      return result;\n    }\n  }]);\n\n  return KeyGeneratorUtil;\n}();\n\n//# sourceURL=webpack://portfolio/./app/typeScript/Utils/keyGeneratorUtil/dist/index.js?");

/***/ }),

/***/ "./app/app_reactRedux/sass/styles.scss":
/*!*********************************************!*\
  !*** ./app/app_reactRedux/sass/styles.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./app/app_reactRedux/sass/styles.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./app/app_reactRedux/src/app.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;