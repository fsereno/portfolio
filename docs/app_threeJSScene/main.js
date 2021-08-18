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

/***/ "./app/app_threeJSScene/src/app.js":
/*!*****************************************!*\
  !*** ./app/app_threeJSScene/src/app.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./app/app_threeJSScene/sass/styles.scss\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/gsap-core.js\");\n\"use strict;\";\n\n\n\n\n\nvar helper = function helper() {\n  var scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\n  var camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n  var renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({\n    antialias: true\n  });\n  var cubeGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(1, 1, 1);\n  var cubeMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({\n    color: 0xF7F7F7\n  });\n  var raycaster = new three__WEBPACK_IMPORTED_MODULE_1__.Raycaster();\n  var mouse = new three__WEBPACK_IMPORTED_MODULE_1__.Vector2();\n\n  var setCameraPosition = function setCameraPosition() {\n    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n    camera.position.x = x;\n    camera.position.y = y;\n    camera.position.z = z;\n  };\n\n  var setRenderer = function setRenderer() {\n    var container = document.getElementById(\"mainContainer\");\n    renderer.setClearColor(\"#e5e5e5\");\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.shadowMap.enabled = true;\n    renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_1__.PCFSoftShadowMap;\n    container.appendChild(renderer.domElement);\n  };\n\n  var setResizeEventHandler = function setResizeEventHandler() {\n    window.addEventListener(\"resize\", function () {\n      renderer.setSize(window.innerWidth, window.innerHeight);\n      camera.aspect = window.innerWidth / window.innerHeight;\n      camera.updateProjectionMatrix();\n    });\n  };\n\n  var createCubes = function createCubes() {\n    var numberOfCubes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n\n    for (var i = 0; i < numberOfCubes; i++) {\n      var cube = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(cubeGeometry, cubeMaterial);\n      cube.position.x = (Math.random() - 0.5) * 10;\n      cube.position.y = (Math.random() - 0.5) * 10;\n      cube.position.z = (Math.random() - 0.5) * 10;\n      scene.add(cube);\n    }\n  };\n\n  var addLight = function addLight() {\n    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0xFFFFFF;\n    var intensity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n    var distance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;\n    var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n    var y = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;\n    var z = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;\n    var light = new three__WEBPACK_IMPORTED_MODULE_1__.PointLight(color, intensity, distance);\n    light.position.set(x, y, z);\n    scene.add(light);\n  };\n\n  var cubeReact = function cubeReact(event) {\n    event.preventDefault();\n    mouse.x = event.clientX / window.innerWidth * 2 - 1;\n    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;\n    raycaster.setFromCamera(mouse, camera);\n    var intersects = raycaster.intersectObjects(scene.children, true);\n\n    for (var i = 0; i < intersects.length; i++) {\n      var tl = new gsap_all__WEBPACK_IMPORTED_MODULE_2__.TimelineMax();\n      tl.to(intersects[i].object.scale, 1, {\n        x: 2,\n        ease: gsap_all__WEBPACK_IMPORTED_MODULE_2__.Expo.easeOut\n      });\n      tl.to(intersects[i].object.scale, .5, {\n        y: .5,\n        ease: gsap_all__WEBPACK_IMPORTED_MODULE_2__.Expo.easeOut\n      });\n      tl.to(intersects[i].object.position, .5, {\n        x: 2,\n        ease: gsap_all__WEBPACK_IMPORTED_MODULE_2__.Expo.easeOut\n      });\n      tl.to(intersects[i].object.position, .5, {\n        y: Math.PI * .5,\n        ease: gsap_all__WEBPACK_IMPORTED_MODULE_2__.Expo.easeOut\n      }, \"=-1.5\");\n    }\n  };\n\n  var setAnimationLoop = function setAnimationLoop() {\n    renderer.setAnimationLoop(function () {\n      renderer.render(scene, camera);\n    });\n  };\n\n  var setCubeReactEventListener = function setCubeReactEventListener() {\n    window.addEventListener(\"mousemove\", cubeReact);\n  };\n\n  var init = function init() {\n    setCameraPosition(0, 0, 5);\n    setRenderer();\n    setResizeEventHandler();\n    createCubes(15);\n    addLight();\n    addLight(0xFFFFFF, 2, 1000, 0, 0, 25);\n    setAnimationLoop();\n    setCubeReactEventListener();\n  };\n\n  return {\n    init: init\n  };\n};\n\nvar app = helper();\napp.init();\n\n//# sourceURL=webpack://portfolio/./app/app_threeJSScene/src/app.js?");

/***/ }),

/***/ "./app/app_threeJSScene/sass/styles.scss":
/*!***********************************************!*\
  !*** ./app/app_threeJSScene/sass/styles.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./app/app_threeJSScene/sass/styles.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./app/app_threeJSScene/src/app.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;