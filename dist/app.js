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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/ts/startup.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/ts/application.ts":
/*!********************************!*\
  !*** ../src/ts/application.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Application {\r\n    static async initialize() {\r\n        console.log(\"Initializing the application\");\r\n        // Application code goes here\r\n    }\r\n}\r\nexports.default = Application;\r\n\n\n//# sourceURL=webpack:///../src/ts/application.ts?");

/***/ }),

/***/ "../src/ts/initializer.ts":
/*!********************************!*\
  !*** ../src/ts/initializer.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst application_1 = __webpack_require__(/*! ./application */ \"../src/ts/application.ts\");\r\nconst canvas_1 = __webpack_require__(/*! ./services/canvas */ \"../src/ts/services/canvas.ts\");\r\nclass Initializer {\r\n    static initialize() {\r\n        console.log(\"Initializing\");\r\n        window.addEventListener(\"DOMContentLoaded\", async () => {\r\n            await canvas_1.default.initialize();\r\n            await application_1.default.initialize();\r\n            console.log(\"Initializing complete\");\r\n        });\r\n    }\r\n}\r\nexports.default = Initializer;\r\n\n\n//# sourceURL=webpack:///../src/ts/initializer.ts?");

/***/ }),

/***/ "../src/ts/services/canvas.ts":
/*!************************************!*\
  !*** ../src/ts/services/canvas.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst render_1 = __webpack_require__(/*! ./render */ \"../src/ts/services/render.ts\");\r\nclass CanvasService {\r\n    static initialize() {\r\n        console.log(\"Initializing the canvas service\");\r\n        CanvasService.element = document.createElement(\"canvas\");\r\n        CanvasService.context = CanvasService.element.getContext(\"2d\");\r\n        document.body.append(CanvasService.element);\r\n        CanvasService.onResize();\r\n        window.addEventListener(\"resize\", () => {\r\n            CanvasService.onResize();\r\n        });\r\n    }\r\n    static onResize() {\r\n        CanvasService.element.width = window.innerWidth;\r\n        CanvasService.element.height = window.innerHeight;\r\n        // The canvas gets completely wiped on resize\r\n        // So we re-render the canvas\r\n        CanvasService.render();\r\n    }\r\n    static render() {\r\n        render_1.default.render();\r\n    }\r\n}\r\nexports.default = CanvasService;\r\n\n\n//# sourceURL=webpack:///../src/ts/services/canvas.ts?");

/***/ }),

/***/ "../src/ts/services/render.ts":
/*!************************************!*\
  !*** ../src/ts/services/render.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst canvas_1 = __webpack_require__(/*! ./canvas */ \"../src/ts/services/canvas.ts\");\r\nclass RenderService {\r\n    static render() {\r\n        // Get the canvas context\r\n        const ctx = canvas_1.default.context;\r\n        // Create a path\r\n        const path = new Path2D();\r\n        this.drawCircle(path, {\r\n            x: 100,\r\n            y: 100,\r\n            radius: 50,\r\n            startAngle: 0,\r\n            endAngle: 2 * Math.PI,\r\n        });\r\n        // Draw the path\r\n        ctx.stroke(path);\r\n    }\r\n    static drawCircle(path, options = {}) {\r\n        let x = options[\"x\"] || 0;\r\n        let y = options[\"y\"] || 0;\r\n        let radius = options[\"radius\"];\r\n        let startAngle = options[\"startAngle\"];\r\n        let endAngle = options[\"endAngle\"];\r\n        if (typeof radius === \"undefined\")\r\n            throw new Error(\"Radius is undefined!\");\r\n        if (typeof startAngle === \"undefined\")\r\n            throw new Error(\"Start Angle is undefined!\");\r\n        if (typeof endAngle === \"undefined\")\r\n            throw new Error(\"End Angle is undefined!\");\r\n        // Add a circle to the path\r\n        path.arc(x, y, radius, startAngle, endAngle);\r\n        // Documentation on \"path.arc\"\r\n        // - https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc\r\n    }\r\n}\r\nexports.default = RenderService;\r\n\n\n//# sourceURL=webpack:///../src/ts/services/render.ts?");

/***/ }),

/***/ "../src/ts/startup.ts":
/*!****************************!*\
  !*** ../src/ts/startup.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst initializer_1 = __webpack_require__(/*! ./initializer */ \"../src/ts/initializer.ts\");\r\ninitializer_1.default.initialize();\r\n\n\n//# sourceURL=webpack:///../src/ts/startup.ts?");

/***/ })

/******/ });