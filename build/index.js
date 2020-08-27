(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/componets/feed.js":
/*!*******************************!*\
  !*** ./src/componets/feed.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feed; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Component = wp.element.Component;

var Feed = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Feed, _Component);

  var _super = _createSuper(Feed);

  function Feed(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Feed);

    _this = _super.apply(this, arguments);
    _this.props = props;
    _this.results = [];

    if (_this.props.results) {
      _this.results = _this.props.results;
    }

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Feed, [{
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, this.results.map(function (item, i) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          className: "randomItem",
          key: i
        }, item.thumbnail !== "self" && item.thumbnail !== "" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
          src: item.thumbnail
        }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEXz9Pa5vsq2u8jN0dnV2N/o6u7w8fTi5OnFydO+ws3f4ee6v8vY2+H29/jy9Pbu7/LJztbCx9HR1ty/NMEIAAACq0lEQVR42u3cYXaqMBBA4cyEgEAi4P4X+34oLSra9IA9E979FtDj7SAJUOocAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAqrQ3Y311iH5fsaktBTYn3d/Y2JljlM/orAR2IsdOHNqPFbY2TqKdXj/Orl/C24/sLHwV0ygiIv2466n0+kNlNFHYiohotfNyWKmIyKm2U9jsffqyU+gopLDMwiGE+sCFjRdV1SkOxyw8X2Rer6cNe2e7hfVJv3ddGg9YeNHlxrIPhyvs9GHvXB+sMJ2eLoDSsQrDwwhF/cFm+HiQikxvP+Prk63RwhSfCtt3i6J/fbK1Wlj9qvCiIjEd9yg9e32zZFotHPLPNOd55VyfotnVYsq9XVZ7fbvxsbviZx6kZ7+Y9toU7e7a/P1x+mI5qP3doRyLuraYlokxY4LrUzRcOPj56knaxmVMcP1XYfkKODW+VVWZqiHlTXBtisbvYgwhhKF22RNcmWLBd6JWJ/g8xXIL64u+eg5zl1huodfXj5riAQrPF333NG0xxVILvb5/YBhLKxzC8+XSD4mpqMLQt2F59hj158e+saDCFFrRacj9Dj5MsYTC0IuIfk9xzAoU7QopTKG93dq/7d3yJiiiVSqjMPTzJ25Dcu6cOUERjUUUzhP8mmLuBIsp/Jrg9Soq+OzAMgqXE7wm/uKvhIoovJ/gLxVQ+DTBwxVummABhRsnWEDhxgmaL9w8QfOFmydovTDlb11KLawopJBCCimk8E8Kbd+nGcJ2Q9F39fNRSKH5wtSZeyvI7/sm8O053MnCCOc/C/7Iu2vexIuyn3z/sLEQ6Orp4O+QOtf0HwrsGyOFrhP9QJ+qmUDnwtju/jp+PwZT/1chdNW+YuMAAAAAAAAAAAAAAAAAAAAAAAAAAACA/9s/LTI30XlcBHoAAAAASUVORK5CYII="
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
          href: item.url,
          target: "_blank"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h4", null, item.title)));
      }));
    }
  }]);

  return Feed;
}(Component);



/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _componets_feed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componets/feed */ "./src/componets/feed.js");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */




var buildItem = function buildItem(item) {
  var object = {
    title: item.title,
    thumbnail: item.thumbnail,
    url: item.url,
    author: item.author
  };
  return object;
};
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */


function Edit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected;

  var onChangeURL = /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(value) {
      var sanitizedValue;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              sanitizedValue = value.toLowerCase();
              setAttributes({
                message: sanitizedValue
              });
              _context.next = 4;
              return getResults(sanitizedValue);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onChangeURL(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getResults = /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(source) {
      var response, data, results, _iterator, _step, child;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(source.length < 4)) {
                _context2.next = 3;
                break;
              }

              setAttributes({
                results: []
              });
              return _context2.abrupt("return");

            case 3:
              _context2.next = 5;
              return fetch("https://www.reddit.com/r/".concat(source, "/rising.json"), {
                cache: 'no-cache',
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'user-agent': 'MakeItRandomBlock (1.0)',
                  'content-type': 'application/json'
                },
                method: 'GET',
                redirect: 'follow',
                referrer: 'no-referrer'
              }).then(function (returned) {
                if (returned.ok) return returned;
                throw new Error('Network response was not ok.');
              });

            case 5:
              response = _context2.sent;
              _context2.next = 8;
              return response.json();

            case 8:
              data = _context2.sent;
              data = data.data.children;
              results = [];
              _iterator = _createForOfIteratorHelper(data);

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  child = _step.value;
                  results.push(buildItem(child.data));
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              setAttributes({
                results: results
              });

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getResults(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: className
  }, attributes.message && !isSelected ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", null, "posts from: ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("b", null, "/r/", attributes.message.toLowerCase())), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_componets_feed__WEBPACK_IMPORTED_MODULE_6__["default"], {
    results: attributes.results
  })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], {
    label: "Add a subrredit category",
    instructions: "Example: tech"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Your reddit', 'create-block'),
    value: attributes.message || '',
    onChange: onChangeURL
  })));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var RandomIcon = function RandomIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    height: 512,
    viewBox: "0 0 512 512",
    width: 512
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    clipRule: "evenodd",
    d: "M311.992 165.258c1.727 0 3.375.348 4.922.852 35.555 7.176 67.453 20.461 93.484 38.168C420.969 196.578 433.922 192 448 192c35.336 0 64 28.645 64 64 0 23.93-13.148 44.758-32.578 55.734.195 2.758.578 5.477.578 8.266 0 88.359-100.305 160-224 160-123.711 0-224-71.641-224-160 0-2.789.391-5.508.586-8.266C13.148 300.758 0 279.93 0 256c0-35.355 28.648-64 64-64 14.062 0 27.039 4.578 37.609 12.277 32.734-22.305 74.859-37.449 121.773-42.34.172-.133.328-.309.617-.328 12.297-1.164 23.141-9.484 27.25-21.703l17.32-64.641c8.109-22.457 31.531-35.547 55.039-30.504l26.453 7.098c.023.02-.023.078.023.078C369.57 56.961 384 74.668 384 95.746c0 .039.023.059.023.098 0 .059-.023.098-.023.156 0 17.668 14.312 32 32 32 17.672 0 32-14.332 32-32 0-5.875-1.688-11.309-4.461-16.039l.117-.059c-1.336-2.348-2.172-5.023-2.172-7.914 0-8.824 7.18-15.996 16-15.996 5.859 0 10.898 3.16 13.695 7.852l.078-.039C476.781 73.27 480 84.246 480 96c0 35.355-28.664 64-64 64-35.352 0-64-28.645-64-64 0-5.934-3.758-10.938-9-12.918l-25.672-6.883c-8.055-1.844-16.141 2.715-18.719 10.551l-16.68 62.312c-7.68 24.551-28.836 41.348-53.078 44.371C135.719 202.258 64 255.477 64 320c0 70.688 85.953 128 192 128 106.031 0 192-57.312 192-128 0-58.359-58.625-107.48-138.703-122.898l.016-.117c-7.562-1.262-13.32-7.816-13.32-15.73-.001-8.841 7.155-15.997 15.999-15.997zM74.961 226.055C71.523 224.797 67.859 224 64 224c-17.688 0-32 14.332-32 32 0 8.227 3.18 15.648 8.305 21.336 7.25-18.719 19.078-36 34.656-51.281zm396.742 51.281C476.82 271.648 480 264.227 480 256c0-17.668-14.328-32-32-32-3.875 0-7.539.797-10.977 2.055 15.579 15.281 27.422 32.562 34.68 51.281zM305.125 288c0-17.047 13.812-30.875 30.875-30.875 17.047 0 30.859 13.828 30.859 30.875S353.047 318.875 336 318.875c-17.062 0-30.875-13.828-30.875-30.875zm-160 0c0-17.047 13.812-30.875 30.875-30.875 17.047 0 30.859 13.828 30.859 30.875S193.047 318.875 176 318.875c-17.062 0-30.875-13.828-30.875-30.875zm170.008 78.523l.039.023c2.914-3.938 7.547-6.539 12.82-6.539 8.844 0 16 7.156 16 16v.062c0 .172-.055.344-.055.523-.039.945-.117 1.898-.312 2.789C339.82 399.906 302.086 416 256 416c-44.953 0-81.883-15.344-87.172-35.125-.508-1.547-.836-3.156-.836-4.867 0-8.844 7.156-16 16-16 5.82 0 10.82 3.141 13.633 7.758l.156-.055C206.023 377.172 228.945 384 256 384c28.164 0 51.844-7.406 59.133-17.477zM416 64c-8.844 0-16-7.156-16-16s7.156-16 16-16c8.828 0 16 7.156 16 16s-7.172 16-16 16z",
    fillRule: "evenodd"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M176 320c-17.688 0-32-14.336-32-32s14.312-32 32-32c17.672 0 32 14.336 32 32s-14.328 32-32 32zm160 0c-17.688 0-32-14.336-32-32s14.312-32 32-32c17.672 0 32 14.336 32 32s-14.328 32-32 32z",
    fill: "#F32"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RandomIcon);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('create-block/make-it-random-block', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Make It Random Block', 'create-block'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Example block written with ESNext standard and JSX support – build step required.', 'create-block'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'widgets',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: true
  },
  attributes: {
    message: {
      type: 'string',
      source: 'text',
      selector: 'div'
    }
  },

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _componets_feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componets/feed */ "./src/componets/feed.js");


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_componets_feed__WEBPACK_IMPORTED_MODULE_2__["default"], {
    results: attributes.results
  }));
}

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map