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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_js_info_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_vue_app_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_vue_app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_vue_app_vue__);
const { add, mul } = __webpack_require__(3)

__webpack_require__(5)


const app = new __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */]({

    el:'#app',
    template:'<App></App>',
    components:{
        App: __WEBPACK_IMPORTED_MODULE_2__src_vue_app_vue__["default"]
    }
   
})
console.log(add(20, 30));

console.log(mul(20, 30));
console.log(__WEBPACK_IMPORTED_MODULE_0__src_js_info_js__["a" /* name */]);






/***/ }),
/* 3 */
/***/ (function(module, exports) {

function add(num1, num2) {
    return num1 + num2
}
function mul(num1, num2) {
    return num1 * num2
}
module.exports = {
    add, mul
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return name; });
let name="123"

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(6);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(10)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// Imports
var getUrl = __webpack_require__(8);
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(9));
// Module
exports.push([module.i, "body{\r\nbackground: url(" + ___CSS_LOADER_URL___0___ + ");\r\n}", ""]);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : null;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (process.env.NODE_ENV !== 'production' && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    process.env.NODE_ENV !== 'production' &&
    // skip validation for weex recycle-list child component props
    !(false)
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (process.env.NODE_ENV !== 'production') {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (process.env.NODE_ENV !== 'production') {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (process.env.NODE_ENV !== 'production' && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (process.env.NODE_ENV !== 'production') {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (process.env.NODE_ENV !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production' && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                process.env.NODE_ENV !== 'production'
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (process.env.NODE_ENV !== 'production' && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (process.env.NODE_ENV !== 'production') {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (process.env.NODE_ENV !== 'production') {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (process.env.NODE_ENV !== 'production') {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (process.env.NODE_ENV !== 'production') {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */



/* eslint-disable no-unused-vars */
function baseWarn (msg, range) {
  console.error(("[Vue compiler]: " + msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

function addAttr (el, name, value, range, dynamic) {
  var attrs = dynamic
    ? (el.dynamicAttrs || (el.dynamicAttrs = []))
    : (el.attrs || (el.attrs = []));
  attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker (symbol, name, dynamic) {
  return dynamic
    ? ("_p(" + name + ",\"" + symbol + "\")")
    : symbol + name // mark the event as captured
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    process.env.NODE_ENV !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.',
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr (
  el,
  name
) {
  return el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

function getAndRemoveAttrByRegex (
  el,
  name
) {
  var list = el.attrsList;
  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr
    }
  }
}

function rangeSetItem (
  item,
  range
) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (process.env.NODE_ENV !== 'production') {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead.",
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (process.env.NODE_ENV !== 'production') {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (process.env.NODE_ENV !== 'production') {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        process.env.NODE_ENV !== 'production' &&
        process.env.NODE_ENV !== 'test'
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (process.env.NODE_ENV !== 'production' &&
      process.env.NODE_ENV !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (process.env.NODE_ENV !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap['class']
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap['style']
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (process.env.NODE_ENV !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
      if (process.env.NODE_ENV !== 'production' && options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (process.env.NODE_ENV !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
            { start: stack[i].start, end: stack[i].end }
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;

var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

var slotRE = /^v-slot(:|$)|^#/;

var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /\s+/g;

var invalidAttributeRE = /[\s"'<>\/=]/;

var decodeHTMLCached = cached(he.decode);

var emptySlotScopeToken = "_empty_";

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement (element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        if (process.env.NODE_ENV !== 'production') {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else if (process.env.NODE_ENV !== 'production') {
        warnOnce(
          "Component template should contain exactly one root element. " +
          "If you are using v-if on multiple elements, " +
          "use v-else-if to chain them instead.",
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter(function (c) { return !(c).slotScope; });
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace (el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints (el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        "Cannot use <" + (el.tag) + "> as component root element because it may " +
        'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
        'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start (tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (process.env.NODE_ENV !== 'production') {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated
          }, {});
        }
        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2(
              "Invalid dynamic argument expression: attribute names cannot contain " +
              "spaces, quotes, <, >, / or =.",
              {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        process.env.NODE_ENV !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.',
          { start: element.start }
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        if (process.env.NODE_ENV !== 'production') {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end (tag, start, end$1) {
      var element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if (process.env.NODE_ENV !== 'production' && options.outputSourceRange) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars (text, start, end) {
      if (!currentParent) {
        if (process.env.NODE_ENV !== 'production') {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start: start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored."),
              { start: start }
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }
        var res;
        var child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }
        if (child) {
          if (process.env.NODE_ENV !== 'production' && options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment (text, start, end) {
      // adding anyting as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };
        if (process.env.NODE_ENV !== 'production' && options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var list = el.attrsList;
  var len = list.length;
  if (len) {
    var attrs = el.attrs = new Array(len);
    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (
  element,
  options
) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = (
    !element.key &&
    !element.scopedSlots &&
    !element.attrsList.length
  );

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (process.env.NODE_ENV !== 'production') {
      if (el.tag === 'template') {
        warn$2(
          "<template> cannot be keyed. Place the key on real elements instead.",
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys.",
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (process.env.NODE_ENV !== 'production') {
      warn$2(
        ("Invalid v-for expression: " + exp),
        el.rawAttrsMap['v-for']
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if.",
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (process.env.NODE_ENV !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored.",
          children[i]
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent (el) {
  var slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && slotScope) {
      warn$2(
        "the \"scope\" attribute for scoped slots have been deprecated and " +
        "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
        "can also be used on plain elements in addition to <template> to " +
        "denote scoped slots.",
        el.rawAttrsMap['scope'],
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && el.attrsMap['v-for']) {
      warn$2(
        "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
        "(v-for takes higher priority). Use a wrapper <template> for the " +
        "scoped slot to make it clearer.",
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  var slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        if (process.env.NODE_ENV !== 'production') {
          if (el.slotTarget || el.slotScope) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$2(
              "<template v-slot> can only appear at the root level inside " +
              "the receiving the component",
              el
            );
          }
        }
        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        if (process.env.NODE_ENV !== 'production') {
          if (!maybeComponent(el)) {
            warn$2(
              "v-slot can only be used on components or <template>.",
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.scopedSlots) {
            warn$2(
              "To avoid scope ambiguity, the default slot should also use " +
              "<template> syntax when there are other named slots.",
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName (binding) {
  var name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else if (process.env.NODE_ENV !== 'production') {
      warn$2(
        "v-slot shorthand syntax requires a slot name.",
        binding
      );
    }
  }
  return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true }
    // static name
    : { name: ("\"" + name + "\""), dynamic: false }
}

// handle <slot/> outlets
function processSlotOutlet (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (process.env.NODE_ENV !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead.",
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
          process.env.NODE_ENV !== 'production' &&
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");
            if (!isDynamic) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                syncGen,
                null,
                false,
                warn$2,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  ("update:" + (hyphenate(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                ("\"update:\"+(" + name + ")"),
                syncGen,
                null,
                false,
                warn$2,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if ((modifiers && modifiers.prop) || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
        if (process.env.NODE_ENV !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (process.env.NODE_ENV !== 'production') {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      process.env.NODE_ENV !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead.",
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";
  for (var name in events) {
    var handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }
  staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
  } else {
    return prefix + staticHandlers
  }
}

function genHandler (handler) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : isFunctionInvocation
          ? ("return " + (handler.value))
          : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    (keys.map(genFilterCode).join('&&')) + ")return null;"
  )
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (process.env.NODE_ENV !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      process.env.NODE_ENV !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. ",
        el.rawAttrsMap['v-once']
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (process.env.NODE_ENV !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:" + (genProps(el.attrs)) + ",";
  }
  // DOM props
  if (el.props) {
    data += "domProps:" + (genProps(el.props)) + ",";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (process.env.NODE_ENV !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  el,
  slots,
  state
) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return (
      slot.slotTargetDynamic ||
      slot.if ||
      slot.for ||
      containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  var needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    var parent = el.parent;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots)
    .map(function (key) { return genScopedSlot(slots[key], state); })
    .join(',');

  return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
}

function hash(str) {
  var hash = 5381;
  var i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function containsSlotChild (el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}

function genScopedSlot (
  el,
  state
) {
  var isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null")
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot)
  }
  var slotScope = el.slotScope === emptySlotScopeToken
    ? ""
    : String(el.slotScope);
  var fn = "function(" + slotScope + "){" +
    "return " + (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  // reverse proxy v-slot without scope on this.$slots
  var reverseProxy = slotScope ? "" : ",proxy:true";
  return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      }); }))
    : null;
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var staticProps = "";
  var dynamicProps = "";
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += (prop.name) + "," + value + ",";
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ",";
    }
  }
  staticProps = "{" + (staticProps.slice(0, -1)) + "}";
  if (dynamicProps) {
    return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
  } else {
    return staticProps
  }
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode (node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent (exp, text, warn, range) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor (node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier (
  ident,
  type,
  text,
  warn,
  range
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
    }
  }
}

function checkExpression (exp, text, warn, range) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
        range
      );
    } else {
      warn(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }
}

/*  */

var range = 2;

function generateCodeFrame (
  source,
  start,
  end
) {
  if ( start === void 0 ) start = 0;
  if ( end === void 0 ) end = source.length;

  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];
  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) { continue }
        res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
        var lineLength = lines[j].length;
        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }
          count += lineLength + 1;
        }
      }
      break
    }
  }
  return res.join('\n')
}

function repeat$1 (str, n) {
  var result = '';
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) { result += str; }
      n >>>= 1;
      if (n <= 0) { break }
      str += str;
    }
  }
  return result
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (process.env.NODE_ENV !== 'production') {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1(
              "Error compiling template:\n\n" + (e.msg) + "\n\n" +
              generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
        } else {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if (process.env.NODE_ENV !== 'production' && options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = { msg: msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      var compiled = baseCompile(template.trim(), finalOptions);
      if (process.env.NODE_ENV !== 'production') {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: process.env.NODE_ENV !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["a"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1), __webpack_require__(0), __webpack_require__(12).setImmediate))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(13);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(1)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module 'webpack/lib/RuleSet'\nRequire stack:\n- d:\\js全栈\\javascript_fullstack\\vue\\前端模块化\\配置\\node_modules\\vue-loader\\lib\\plugin.js\n- d:\\js全栈\\javascript_fullstack\\vue\\前端模块化\\配置\\node_modules\\vue-loader\\lib\\index.js\n- C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\loadLoader.js\n- C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js\n- C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\lib\\NormalModule.js\n- C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\lib\\NormalModuleFactory.js\n- C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\lib\\Compiler.js\n- C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\lib\\webpack.js\n- C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\bin\\webpack.js\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:794:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:687:27)\n    at Module.require (internal/modules/cjs/loader.js:849:19)\n    at require (internal/modules/cjs/helpers.js:74:18)\n    at Object.<anonymous> (d:\\js全栈\\javascript_fullstack\\vue\\前端模块化\\配置\\node_modules\\vue-loader\\lib\\plugin.js:2:17)\n    at Module._compile (internal/modules/cjs/loader.js:956:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)\n    at Module.load (internal/modules/cjs/loader.js:812:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:724:14)\n    at Module.require (internal/modules/cjs/loader.js:849:19)\n    at require (internal/modules/cjs/helpers.js:74:18)\n    at Object.<anonymous> (d:\\js全栈\\javascript_fullstack\\vue\\前端模块化\\配置\\node_modules\\vue-loader\\lib\\index.js:4:16)\n    at Module._compile (internal/modules/cjs/loader.js:956:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)\n    at Module.load (internal/modules/cjs/loader.js:812:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:724:14)\n    at Module.require (internal/modules/cjs/loader.js:849:19)\n    at require (internal/modules/cjs/helpers.js:74:18)\n    at loadLoader (C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\loadLoader.js:18:17)\n    at iteratePitchingLoaders (C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:365:2)\n    at NormalModule.doBuild (C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\lib\\NormalModule.js:182:3)\n    at NormalModule.build (C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\lib\\NormalModule.js:275:15)\n    at Compilation.buildModule (C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\lib\\Compilation.js:149:10)\n    at factoryCallback (C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\lib\\Compilation.js:337:12)\n    at C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\lib\\NormalModuleFactory.js:241:5\n    at C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\lib\\NormalModuleFactory.js:94:13\n    at C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\tapable\\lib\\Tapable.js:268:11\n    at NormalModuleFactory.<anonymous> (C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\lib\\CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\tapable\\lib\\Tapable.js:272:13)");

/***/ })
/******/ ]);