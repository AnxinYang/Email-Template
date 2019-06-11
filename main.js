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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/npm-ccjs-ay/src/ccjs/cc.js":
/*!*************************************************!*\
  !*** ./node_modules/npm-ccjs-ay/src/ccjs/cc.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dom = __webpack_require__(/*! ./dom/dom */ "./node_modules/npm-ccjs-ay/src/ccjs/dom/dom.js");

var _dom2 = _interopRequireDefault(_dom);

var _storage = __webpack_require__(/*! ./storage/storage */ "./node_modules/npm-ccjs-ay/src/ccjs/storage/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _raf = __webpack_require__(/*! ./common/raf */ "./node_modules/npm-ccjs-ay/src/ccjs/common/raf.js");

var _raf2 = _interopRequireDefault(_raf);

var _common = __webpack_require__(/*! ./common/common */ "./node_modules/npm-ccjs-ay/src/ccjs/common/common.js");

var _common2 = _interopRequireDefault(_common);

var _xhr = __webpack_require__(/*! ./xhr/xhr */ "./node_modules/npm-ccjs-ay/src/ccjs/xhr/xhr.js");

var _xhr2 = _interopRequireDefault(_xhr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IS_WORKER = self.window === undefined;
var CONTEXT = IS_WORKER ? self : window;

var cc;
window.cc = cc = {
    utils: _common2.default,
    load: function load() {
        var addOns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    },
    select: function select(selector) {
        return _dom2.default.select(selector);
    },
    createElement: function createElement(tagName, id, options) {
        return _dom2.default.createElement(tagName, id, options);
    },
    createElementNS: function createElementNS(tagName, id) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        options.NS = true;
        return _dom2.default.createElement(tagName, id, options);
    },
    setValue: function setValue(key, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        options.reset = true;
        return _storage2.default.setValue(key, value, options);
    },
    saveArray: function saveArray(key) {
        var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var idkey = arguments[2];

        if (idkey !== undefined && idkey !== '' && key !== undefined) {
            arr.forEach(function (item) {
                cc.updateValue(item[idkey], item);
            });
        }
        return cc.setValue(key, arr);
    },
    updateValue: function updateValue(key, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return _storage2.default.setValue(key, value, options);
    },
    getValue: function getValue(key) {
        return _storage2.default.getValue(key);
    },
    setTimer: function setTimer(fn, delay) {
        return _raf2.default.requestTimeout(fn, delay);
    },
    cancelTimer: function cancelTimer(handle) {
        _raf2.default.clearRequestTimeout(handle);
    },
    request: function request() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return _xhr2.default.ajax(params);
    }

};

if (IS_WORKER) {
    delete cc.select;
    delete cc.createElement;
    delete cc.createElementNS;
} else {
    var last = 0;
    var frameTicker = function frameTicker(timestamp) {
        cc.setValue('frame', timestamp, { immediately: true });
        //console.log(timestamp - last);
        last = timestamp;
        _raf2.default.requestTimeout(frameTicker, 16);
    };
    frameTicker(0);
}

exports.default = cc;

/***/ }),

/***/ "./node_modules/npm-ccjs-ay/src/ccjs/common/common.js":
/*!************************************************************!*\
  !*** ./node_modules/npm-ccjs-ay/src/ccjs/common/common.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var IS_WORKER = self.window === undefined;
var CONTEXT = IS_WORKER ? self : window;
var common = {};

common.objectforEach = function (obj, fn) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            fn(obj[key], key, obj);
        }
    }
};

common.objectAssign = function () {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var source = arguments[1];

    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
    return target;
};

common.createId = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

common.isObject = function (item) {
    return item !== undefined && item === Object(item) && !(item instanceof Array);
};

common.getBrowser = function () {
    var isIE = false;
    var isChrome = false;
    var isOpera = false;
    if (!!CONTEXT.opr && !!opr.addons || !!CONTEXT.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
        isOpera = true;
        return 'opera';
    }
    if (typeof InstallTrigger !== 'undefined') {
        return 'firefox';
    }
    if (/constructor/i.test(CONTEXT.HTMLElement) || function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
    }(!CONTEXT['safari'] || safari.pushNotification)) {
        return 'safari';
    }
    if ( false || !!document.documentMode) {
        Object.assign = function () {
            var output = arguments[0];
            for (var i = 1; i < arguments.length; i++) {
                for (var key in arguments[i]) {
                    var obj = arguments[i];
                    if (obj.hasOwnProperty(key)) output[key] = obj[key];
                }
            }
            return output;
        };
        if (!('remove' in Element.prototype)) {
            Element.prototype.remove = function () {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            };
        }
        isIE = true;
        return 'ie';
    }
    if (!isIE && !!CONTEXT.StyleMedia) {
        return 'edge';
    }
    if (!!CONTEXT.chrome && !!CONTEXT.chrome.webstore) {
        isChrome = true;
        return 'chrome';
    }
    if ((isChrome || isOpera) && !!CONTEXT.CSS) {
        return 'blink';
    }
};

common.readValue = function (value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof value === "function") {
        return value(options);
    } else {
        return value;
    }
};

common.getUrlVar = function (key, defaultValue) {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars[key] === undefined ? defaultValue : vars[key];
};

exports.default = common;

/***/ }),

/***/ "./node_modules/npm-ccjs-ay/src/ccjs/common/raf.js":
/*!*********************************************************!*\
  !*** ./node_modules/npm-ccjs-ay/src/ccjs/common/raf.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var IS_WORKER = self.window === undefined;
var CONTEXT = IS_WORKER ? self : window;
var raf = {
    requestTimeout: function requestTimeout(fn, delay) {
        if (!CONTEXT.requestAnimationFrame) return setTimeout(fn, delay);

        var start = Date.now(),
            handle = new Object();

        function loop(timestamp) {
            Date.now() - start >= delay ? fn(timestamp) : handle.value = CONTEXT.requestAnimationFrame(loop);
        };

        handle.value = CONTEXT.requestAnimationFrame(loop);
        return handle;
    },
    clearRequestTimeout: function clearRequestTimeout(handle) {
        CONTEXT.cancelAnimationFrame ? CONTEXT.cancelAnimationFrame(handle.value) : clearTimeout(handle);
    }
};

exports.default = raf;

/***/ }),

/***/ "./node_modules/npm-ccjs-ay/src/ccjs/dom/dom.js":
/*!******************************************************!*\
  !*** ./node_modules/npm-ccjs-ay/src/ccjs/dom/dom.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _common = __webpack_require__(/*! ../common/common */ "./node_modules/npm-ccjs-ay/src/ccjs/common/common.js");

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = {
    select: function select(selector) {
        if (selector === undefined) {
            return;
        }

        var _selector = selector.charAt(0);
        var name = selector.substring(1);
        var doms = [];
        switch (_selector) {
            case '#':
                return document.getElementById(name);
            default:
                doms = document.querySelectorAll(selector) || [];
        }

        return doms;
    },
    createElement: function createElement(tag) {
        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var element = document.createElement(tag);

        var elementId = id || tag + '_' + _common2.default.createId();
        element.setAttribute('id', elementId);

        setupElementMethods(element, options);

        return element;
    }
};

function setupElementMethods(element, options) {
    element._eventListeners = new Map();
    element._bound = new Map();
    element._memory = {};

    element.add = function (tag, id, options) {
        var child = dom.createElement(tag, id, options);
        return this.addElement(child);
    };

    element.addElement = function (child) {
        this.appendChild(child);
        return child;
    };

    element.addClass = function (className) {
        this.classList.add(className);
        return this;
    };

    element.removeClass = function (className) {
        this.classList.remove(className);
        return this;
    };

    element.getAttr = function (key) {
        return element.getAttribute(key);
    };

    element.attr = function (key, value) {
        this._setElement('attr', key, value);
        return this;
    };

    element.getMemory = function () {
        return this._memory;
    };

    element.memory = function (obj) {
        this._memory = obj;
        return this;
    };

    element.getProp = function (key) {
        return element[key];
    };

    element.prop = function (key, value) {
        this._setElement('prop', key, value);
        return this;
    };

    element.css = function (key, value) {
        this._setElement('css', key, value);
        return this;
    };

    element.bind = function (key, fn) {
        if (key) {
            var self = this;
            this._bound.set(key, fn);
            this.classList.add('storage_' + key);
        }
        return this;
    };
    element.unbind = function (key) {
        var self = this;
        this._bound.delete(key);
        this.classList.remove('storage_' + key);
        return this;
    };

    element._react = function (key, value) {
        var fn = this._bound.get(key);
        if (fn) {
            if (fn.call(this, value, this._data) === false) {
                this.unbind(key);
            }
        }
    };

    element.on = function (eventName, fn) {
        var tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

        var self = this;
        var eventTag = eventName + tag;
        var _eventHandler = element._eventListeners.get(eventTag);
        if (_eventHandler) {
            this.removeEventListener(eventName, _eventHandler);
            element._eventListeners.delete(eventTag);
        }
        if (fn) {
            _eventHandler = function eventHandler(e) {
                if (fn.call(self, e, self._data) === false) {
                    self.removeEventListener(eventName, _eventHandler);
                }
            };
            element._eventListeners.set(eventTag, _eventHandler);
            this.addEventListener(eventName, _eventHandler, false);
        }
        return self;
    };

    element.content = function (str) {
        this.innerText = str;
        return this;
    };

    element.removeSelf = function () {
        this.removeAllChildren();
        if (this.remove) {
            this.remove();
        } else {
            this.parentNode.removeChild(this);
        }
    };

    element.removeAllChildren = function () {
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
    };

    element._setElement = function (type, key, value) {
        var self = this;
        if (key === undefined) {
            return this;
        }
        if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
            _common2.default.objectforEach(key, function (item, key) {
                self[type](key, item);
            });
            return this;
        }

        var v = _common2.default.readValue(value);

        switch (type) {
            case 'prop':
                this[key] = value;
                break;
            case 'attr':
                if (value === false) {
                    this.removeAttribute(key);
                } else {
                    this.setAttribute(key, value);
                }
                break;
            case 'css':
                this.style[key] = value;
                break;
        }
        return this;
    };

    element.isInViewport = function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var offsetX = options.offsetX || 0;
        var offsetY = options.offsetY || 0;

        var _getBoundingClientRec = this.getBoundingClientRect(),
            x = _getBoundingClientRec.x,
            y = _getBoundingClientRec.y,
            width = _getBoundingClientRec.width,
            height = _getBoundingClientRec.height; //IE not support bottom right


        var x2 = x + width;
        var y2 = y + height;
        var innerWidth = window.innerWidth;
        var innerHeight = window.innerHeight;
        return !(x2 <= 0 + offsetX || x >= innerWidth - offsetX || y2 <= 0 + offsetY || y >= innerHeight - offsetY);
    };
}

exports.default = dom;

/***/ }),

/***/ "./node_modules/npm-ccjs-ay/src/ccjs/storage/storage.js":
/*!**************************************************************!*\
  !*** ./node_modules/npm-ccjs-ay/src/ccjs/storage/storage.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _common = __webpack_require__(/*! ../common/common */ "./node_modules/npm-ccjs-ay/src/ccjs/common/common.js");

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = {
    dataMap: new Map(),
    timerMap: new Map(),
    setValue: function setValue(key, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var self = this;
        var dataMap = this.dataMap;
        var reset = options.reset;

        var shouldReact = false;
        var oldValue = dataMap.get(key);
        if (_common2.default.isObject(value) && _common2.default.isObject(oldValue) && reset !== true) {
            _common2.default.objectforEach(value, function (item, key, obj) {
                if (item !== value) {
                    shouldReact = true;
                }
                obj[key] = value[key];
            });
        } else {
            shouldReact = true;
            dataMap.set(key, value);
        }

        var newValue = dataMap.get(key);

        if (shouldReact) {
            this.broadcast(key, newValue, options);
        }

        return newValue;
    },
    broadcast: function broadcast(key, newValue) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var self = this;
        var timer = this.timerMap.get(key);

        if (timer) {
            cc.cancelTimer(timer);
        }

        timer = cc.setTimer(function () {
            var doms = document.getElementsByClassName('storage_' + key) || [];
            for (var i = 0; i < doms.length; i++) {
                var dom = doms[i];
                dom._react && dom._react(key, newValue);
            }
            self.timerMap.delete(key);
        }, options.immediately ? 0 : 10);

        this.timerMap.set(key, timer);
    },
    getValue: function getValue(key) {
        return this.dataMap.get(key);
    }
};

exports.default = storage;

/***/ }),

/***/ "./node_modules/npm-ccjs-ay/src/ccjs/xhr/xhr.js":
/*!******************************************************!*\
  !*** ./node_modules/npm-ccjs-ay/src/ccjs/xhr/xhr.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var xhr = {
    ajax: function ajax() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var promise = new Promise(function (resolve, reject) {
            var _ref = params || {},
                url = _ref.url,
                method = _ref.method,
                data = _ref.data,
                async = _ref.async,
                xhr = _ref.xhr,
                contentType = _ref.contentType,
                dataType = _ref.dataType,
                done = _ref.done,
                fail = _ref.fail;

            var header = params.header,
                onProgress = params.onProgress,
                beforeSend = params.beforeSend;

            var request = new XMLHttpRequest();
            request.open(method || 'GET', url, async === undefined ? true : async);

            for (var key in header || {}) {
                if ((header || {}).hasOwnProperty(key)) {
                    request.setRequestHeader(key, header[key]);
                }
            }
            if (cc.getValue('Authorization')) {
                request.setRequestHeader('Authorization', cc.getValue('Authorization'));
            }
            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    done && done(parseData(request.responseText), request);
                    resolve(parseData(request.responseText), request);
                } else {
                    fail && fail(parseData(request.responseText), request);
                    reject(parseData(request.responseText));
                }
            };

            request.onerror = function () {
                fail && fail(parseData(request.responseText), request);
                reject(parseData(request.responseText));
            };

            request.upload.onprogress = function (e) {
                var p = Math.floor(e.loaded / e.total * 100);
                onProgress && onProgress(p, e);
            };

            var _data = void 0;
            switch (dataType) {
                case 'file':
                    _data = data;
                    break;
                case 'json':
                default:
                    request.setRequestHeader('Content-Type', contentType === undefined ? "application/json; charset=utf-8" : contentType);
                    _data = JSON.stringify(data);
            }

            beforeSend && beforeSend(request);

            request.send(_data);
        });

        return promise;
    }
};

function parseData(data) {
    try {
        return JSON.parse(data || '');
    } catch (e) {
        return undefined;
    }
}

exports.default = xhr;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _serviceWorker = __webpack_require__(/*! ./lib/serviceWorker */ "./src/lib/serviceWorker.js");

var _serviceWorker2 = _interopRequireDefault(_serviceWorker);

var _index = __webpack_require__(/*! ./app/index */ "./src/app/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

(0, _serviceWorker2.default)();
(0, _index2.default)();

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _npmCcjsAy = __webpack_require__(/*! npm-ccjs-ay */ "./node_modules/npm-ccjs-ay/src/ccjs/cc.js");

var _npmCcjsAy2 = _interopRequireDefault(_npmCcjsAy);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function index() {
    index.setupEnv();
    index.setupRootElement();
}

index.setupEnv = function () {
    _npmCcjsAy2.default.setValue('viewport', { width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', function () {
        _npmCcjsAy2.default.updateValue('viewport', { width: window.innerWidth, height: window.innerHeight });
    });
};

index.setupRootElement = function () {
    var root = _npmCcjsAy2.default.select('#body');
    var mainContainer = _npmCcjsAy2.default.createElement('div', 'test').addClass('main-container');
    root.appendChild(mainContainer);

    mainContainer.add('h2').content('Thank you').addClass('header');
};

exports.default = index;

/***/ }),

/***/ "./src/lib/serviceWorker.js":
/*!**********************************!*\
  !*** ./src/lib/serviceWorker.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function setupServiceWorker() {
    if ('serviceWorker' in navigator) {
        console.log('Service worker supported!');
        try {
            navigator.serviceWorker.register('service.js');
            console.log('Service worker registered.');
        } catch (e) {
            console.log('Service worker failed to register. - WTH!?');
        }
    } else {
        console.log('Service worker not supported! - Dude, buy a new phone.');
    }
}

exports.default = setupServiceWorker;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25wbS1jY2pzLWF5L3NyYy9jY2pzL2NjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9jb21tb24vY29tbW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9jb21tb24vcmFmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9kb20vZG9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9zdG9yYWdlL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25wbS1jY2pzLWF5L3NyYy9jY2pzL3hoci94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvc2VydmljZVdvcmtlci5qcyJdLCJuYW1lcyI6WyJJU19XT1JLRVIiLCJzZWxmIiwid2luZG93IiwidW5kZWZpbmVkIiwiQ09OVEVYVCIsImNjIiwidXRpbHMiLCJjb21tb24iLCJsb2FkIiwiYWRkT25zIiwib3B0aW9ucyIsInNlbGVjdCIsInNlbGVjdG9yIiwiZG9tIiwiY3JlYXRlRWxlbWVudCIsInRhZ05hbWUiLCJpZCIsImNyZWF0ZUVsZW1lbnROUyIsIk5TIiwic2V0VmFsdWUiLCJrZXkiLCJ2YWx1ZSIsInJlc2V0Iiwic3RvcmFnZSIsInNhdmVBcnJheSIsImFyciIsImlka2V5IiwiZm9yRWFjaCIsIml0ZW0iLCJ1cGRhdGVWYWx1ZSIsImdldFZhbHVlIiwic2V0VGltZXIiLCJmbiIsImRlbGF5IiwicmFmIiwicmVxdWVzdFRpbWVvdXQiLCJjYW5jZWxUaW1lciIsImhhbmRsZSIsImNsZWFyUmVxdWVzdFRpbWVvdXQiLCJyZXF1ZXN0IiwicGFyYW1zIiwieGhyIiwiYWpheCIsImxhc3QiLCJmcmFtZVRpY2tlciIsInRpbWVzdGFtcCIsImltbWVkaWF0ZWx5Iiwib2JqZWN0Zm9yRWFjaCIsIm9iaiIsImhhc093blByb3BlcnR5Iiwib2JqZWN0QXNzaWduIiwidGFyZ2V0Iiwic291cmNlIiwiY3JlYXRlSWQiLCJzNCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiaXNPYmplY3QiLCJPYmplY3QiLCJBcnJheSIsImdldEJyb3dzZXIiLCJpc0lFIiwiaXNDaHJvbWUiLCJpc09wZXJhIiwib3ByIiwiYWRkb25zIiwib3BlcmEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiSW5zdGFsbFRyaWdnZXIiLCJ0ZXN0IiwiSFRNTEVsZW1lbnQiLCJwIiwic2FmYXJpIiwicHVzaE5vdGlmaWNhdGlvbiIsImRvY3VtZW50IiwiZG9jdW1lbnRNb2RlIiwiYXNzaWduIiwib3V0cHV0IiwiYXJndW1lbnRzIiwiaSIsImxlbmd0aCIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJTdHlsZU1lZGlhIiwiY2hyb21lIiwid2Vic3RvcmUiLCJDU1MiLCJyZWFkVmFsdWUiLCJnZXRVcmxWYXIiLCJkZWZhdWx0VmFsdWUiLCJ2YXJzIiwicGFydHMiLCJsb2NhdGlvbiIsImhyZWYiLCJyZXBsYWNlIiwibSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJsb29wIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJfc2VsZWN0b3IiLCJjaGFyQXQiLCJuYW1lIiwiZG9tcyIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvckFsbCIsInRhZyIsImVsZW1lbnQiLCJlbGVtZW50SWQiLCJzZXRBdHRyaWJ1dGUiLCJzZXR1cEVsZW1lbnRNZXRob2RzIiwiX2V2ZW50TGlzdGVuZXJzIiwiTWFwIiwiX2JvdW5kIiwiX21lbW9yeSIsImFkZCIsImNoaWxkIiwiYWRkRWxlbWVudCIsImFwcGVuZENoaWxkIiwiYWRkQ2xhc3MiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmVDbGFzcyIsImdldEF0dHIiLCJnZXRBdHRyaWJ1dGUiLCJhdHRyIiwiX3NldEVsZW1lbnQiLCJnZXRNZW1vcnkiLCJtZW1vcnkiLCJnZXRQcm9wIiwicHJvcCIsImNzcyIsImJpbmQiLCJzZXQiLCJ1bmJpbmQiLCJkZWxldGUiLCJfcmVhY3QiLCJnZXQiLCJjYWxsIiwiX2RhdGEiLCJvbiIsImV2ZW50TmFtZSIsImV2ZW50VGFnIiwiZXZlbnRIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImUiLCJhZGRFdmVudExpc3RlbmVyIiwiY29udGVudCIsInN0ciIsImlubmVyVGV4dCIsInJlbW92ZVNlbGYiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImZpcnN0Q2hpbGQiLCJ0eXBlIiwidiIsInJlbW92ZUF0dHJpYnV0ZSIsInN0eWxlIiwiaXNJblZpZXdwb3J0Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwieDIiLCJ5MiIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRhdGFNYXAiLCJ0aW1lck1hcCIsInNob3VsZFJlYWN0Iiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsImJyb2FkY2FzdCIsInRpbWVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJhc3luYyIsImNvbnRlbnRUeXBlIiwiZGF0YVR5cGUiLCJkb25lIiwiZmFpbCIsImhlYWRlciIsIm9uUHJvZ3Jlc3MiLCJiZWZvcmVTZW5kIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ubG9hZCIsInN0YXR1cyIsInBhcnNlRGF0YSIsInJlc3BvbnNlVGV4dCIsIm9uZXJyb3IiLCJ1cGxvYWQiLCJvbnByb2dyZXNzIiwibG9hZGVkIiwidG90YWwiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZCIsInBhcnNlIiwiaW5kZXgiLCJyb290IiwibWFpbkNvbnRhaW5lciIsImNvbnNvbGUiLCJzZXR1cFNlcnZpY2VXb3JrZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsS0FBS0MsTUFBTCxLQUFnQkMsU0FBbEM7QUFDQSxJQUFNQyxVQUFVSixZQUFZQyxJQUFaLEdBQW1CQyxNQUFuQzs7QUFFQSxJQUFJRyxFQUFKO0FBQ0FILE9BQU9HLEVBQVAsR0FBWUEsS0FBSztBQUNiQyxXQUFPQyxnQkFETTtBQUVi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RGEsQ0FBZDs7QUFrREEsZUFBT3NDLE9BQVA7QUFDSDtBQXJETyxDQUFaOztBQXdEQSxTQUFTb0IsU0FBVCxDQUFtQmQsSUFBbkIsRUFBeUI7QUFDckIsUUFBRztBQUNDLGVBQU9xQixLQUFLRyxLQUFMLENBQVd4QixRQUFRLEVBQW5CLENBQVA7QUFDSCxLQUZELENBRUMsT0FBT3RDLENBQVAsRUFBVTtBQUNQLGVBQU8xSixTQUFQO0FBQ0g7QUFDSjs7a0JBRWNzQyxHOzs7Ozs7Ozs7Ozs7OztBQ2hFZjs7OztBQUNBOzs7Ozs7OztBQUdBO0FBQ0EsdUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBOzs7Ozs7OztBQUVBLGlCQUFpQjtBQUNibUw7QUFDQUE7QUFDSDs7QUFHREEsaUJBQWlCLFlBQVc7QUFDeEJ2Tiw2Q0FBd0IsRUFBQzBLLE9BQU83SyxPQUFSLFlBQTJCOEssUUFBUTlLLE9BQTNERyxXQUF3QixFQUF4QkE7QUFDQUgsc0NBQWtDLFlBQVk7QUFDMUNHLG9EQUEyQixFQUFDMEssT0FBTzdLLE9BQVIsWUFBMkI4SyxRQUFROUssT0FBOURHLFdBQTJCLEVBQTNCQTtBQURKSDtBQUZKME47O0FBUUFBLHlCQUF5QixZQUFZO0FBQ2pDLFFBQUlDLE9BQU94TiwyQkFBWCxPQUFXQSxDQUFYO0FBQ0EsUUFBSXlOLGdCQUFnQnpOLDBEQUFwQixnQkFBb0JBLENBQXBCO0FBRUF3Tjs7QUFFQUM7QUFOSkY7O2tCQVNlQSxLOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZiw4QkFBOEI7QUFDMUIsUUFBRyxtQkFBSCxXQUFpQztBQUM3Qkc7QUFDQSxZQUFJO0FBQ0F6SjtBQUNBeUo7QUFGSixVQUdFLFVBQVU7QUFDUkE7QUFDSDtBQVBMLFdBUUs7QUFDREE7QUFDSDtBQUNKOztrQkFFY0Msa0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsImltcG9ydCBkb20gZnJvbSAnLi9kb20vZG9tJztcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlL3N0b3JhZ2UnO1xyXG5pbXBvcnQgcmFmIGZyb20gJy4vY29tbW9uL3JhZic7XHJcbmltcG9ydCBjb21tb24gZnJvbSAnLi9jb21tb24vY29tbW9uJztcclxuaW1wb3J0IHhociBmcm9tICcuL3hoci94aHInO1xyXG5cclxuY29uc3QgSVNfV09SS0VSID0gc2VsZi53aW5kb3cgPT09IHVuZGVmaW5lZDtcclxuY29uc3QgQ09OVEVYVCA9IElTX1dPUktFUiA/IHNlbGYgOiB3aW5kb3c7XHJcblxyXG52YXIgY2M7XHJcbndpbmRvdy5jYyA9IGNjID0ge1xyXG4gICAgdXRpbHM6IGNvbW1vbixcclxuICAgIGxvYWQ6IGZ1bmN0aW9uKGFkZE9ucyA9IFtdLCBvcHRpb25zID0ge30pe1xyXG5cclxuICAgIH0sXHJcbiAgICBzZWxlY3Q6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcclxuICAgICAgICByZXR1cm4gZG9tLnNlbGVjdChzZWxlY3RvcilcclxuICAgIH0sXHJcbiAgICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAodGFnTmFtZSwgaWQsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gZG9tLmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgaWQsIG9wdGlvbnMpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlRWxlbWVudE5TOiBmdW5jdGlvbiAodGFnTmFtZSwgaWQsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIG9wdGlvbnMuTlMgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBkb20uY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBpZCwgb3B0aW9ucylcclxuICAgIH0sXHJcbiAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleSwgdmFsdWUsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIG9wdGlvbnMucmVzZXQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlLnNldFZhbHVlKGtleSwgdmFsdWUsIG9wdGlvbnMpXHJcbiAgICB9LFxyXG4gICAgc2F2ZUFycmF5OiBmdW5jdGlvbihrZXksIGFyciA9IFtdLCBpZGtleSl7XHJcbiAgICAgICAgaWYoaWRrZXkgIT09IHVuZGVmaW5lZCAmJiBpZGtleSAhPT0gJycgJiYga2V5ICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgY2MudXBkYXRlVmFsdWUoaXRlbVtpZGtleV0sIGl0ZW0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2Muc2V0VmFsdWUoa2V5LCBhcnIpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVZhbHVlOiBmdW5jdGlvbihrZXksIHZhbHVlLCBvcHRpb25zID0ge30pe1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlLnNldFZhbHVlKGtleSwgdmFsdWUsIG9wdGlvbnMpXHJcbiAgICB9LFxyXG4gICAgZ2V0VmFsdWU6ICBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2UuZ2V0VmFsdWUoa2V5KTtcclxuICAgIH0sXHJcbiAgICBzZXRUaW1lcjogZnVuY3Rpb24gKGZuLCBkZWxheSkge1xyXG4gICAgICAgIHJldHVybiByYWYucmVxdWVzdFRpbWVvdXQoZm4sIGRlbGF5KVxyXG4gICAgfSxcclxuICAgIGNhbmNlbFRpbWVyOiBmdW5jdGlvbiAoaGFuZGxlKSB7XHJcbiAgICAgICAgcmFmLmNsZWFyUmVxdWVzdFRpbWVvdXQoaGFuZGxlKTtcclxuICAgIH0sXHJcbiAgICByZXF1ZXN0OiBmdW5jdGlvbiAocGFyYW1zID0ge30pIHtcclxuICAgICAgICByZXR1cm4geGhyLmFqYXgocGFyYW1zKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5pZihJU19XT1JLRVIpe1xyXG4gICAgZGVsZXRlIGNjLnNlbGVjdDtcclxuICAgIGRlbGV0ZSBjYy5jcmVhdGVFbGVtZW50O1xyXG4gICAgZGVsZXRlIGNjLmNyZWF0ZUVsZW1lbnROUztcclxufWVsc2V7XHJcbiAgICBsZXQgbGFzdCA9IDBcclxuICAgIGxldCBmcmFtZVRpY2tlciA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcclxuICAgICAgICBjYy5zZXRWYWx1ZSgnZnJhbWUnLCB0aW1lc3RhbXAsIHtpbW1lZGlhdGVseTogdHJ1ZX0pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGltZXN0YW1wIC0gbGFzdCk7XHJcbiAgICAgICAgbGFzdCA9IHRpbWVzdGFtcDtcclxuICAgICAgICByYWYucmVxdWVzdFRpbWVvdXQoZnJhbWVUaWNrZXIsIDE2KVxyXG4gICAgfTtcclxuICAgIGZyYW1lVGlja2VyKDApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2M7IiwiY29uc3QgSVNfV09SS0VSID0gc2VsZi53aW5kb3cgPT09IHVuZGVmaW5lZDtcclxuY29uc3QgQ09OVEVYVCA9IElTX1dPUktFUiA/IHNlbGYgOiB3aW5kb3c7XHJcbmNvbnN0IGNvbW1vbiA9IHt9O1xyXG5cclxuY29tbW9uLm9iamVjdGZvckVhY2ggPSBmdW5jdGlvbihvYmosZm4pe1xyXG4gICAgZm9yKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIGZuKG9ialtrZXldLCBrZXksIG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuY29tbW9uLm9iamVjdEFzc2lnbiA9IGZ1bmN0aW9uKHRhcmdldCA9IHt9LCBzb3VyY2Upe1xyXG4gICAgZm9yKGxldCBrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59O1xyXG5cclxuY29tbW9uLmNyZWF0ZUlkID0gZnVuY3Rpb24oKXtcclxuICAgIGZ1bmN0aW9uIHM0KCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG4gICAgICAgICAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XHJcbn07XHJcblxyXG5jb21tb24uaXNPYmplY3QgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgcmV0dXJuIChpdGVtIT09dW5kZWZpbmVkICYmIGl0ZW0gPT09IE9iamVjdChpdGVtKSAmJiAhKGl0ZW0gaW5zdGFuY2VvZiBBcnJheSkpXHJcbn07XHJcblxyXG5jb21tb24uZ2V0QnJvd3NlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGlzSUUgPSBmYWxzZTtcclxuICAgIGxldCBpc0Nocm9tZSA9IGZhbHNlO1xyXG4gICAgbGV0IGlzT3BlcmEgPSBmYWxzZTtcclxuICAgIGlmICgoISFDT05URVhULm9wciAmJiAhIW9wci5hZGRvbnMpIHx8ICEhQ09OVEVYVC5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMCkge1xyXG4gICAgICAgIGlzT3BlcmEgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiAnb3BlcmEnO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xyXG4gICAgfVxyXG4gICAgaWYgKC9jb25zdHJ1Y3Rvci9pLnRlc3QoQ09OVEVYVC5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgcmV0dXJuIHAudG9TdHJpbmcoKSA9PT0gXCJbb2JqZWN0IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbl1cIjtcclxuICAgIH0pKCFDT05URVhUWydzYWZhcmknXSB8fCBzYWZhcmkucHVzaE5vdGlmaWNhdGlvbikpIHtcclxuICAgICAgICByZXR1cm4gJ3NhZmFyaSc7XHJcbiAgICB9XHJcbiAgICBpZiAoZmFsc2UgfHwgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoISgncmVtb3ZlJyBpbiBFbGVtZW50LnByb3RvdHlwZSkpIHtcclxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNJRSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzSUUgJiYgISFDT05URVhULlN0eWxlTWVkaWEpIHtcclxuICAgICAgICByZXR1cm4gJ2VkZ2UnO1xyXG4gICAgfVxyXG4gICAgaWYgKCEhQ09OVEVYVC5jaHJvbWUgJiYgISFDT05URVhULmNocm9tZS53ZWJzdG9yZSkge1xyXG4gICAgICAgIGlzQ2hyb21lID0gdHJ1ZVxyXG4gICAgICAgIHJldHVybiAnY2hyb21lJztcclxuICAgIH1cclxuICAgIGlmICgoaXNDaHJvbWUgfHwgaXNPcGVyYSkgJiYgISFDT05URVhULkNTUykge1xyXG4gICAgICAgIHJldHVybiAnYmxpbmsnO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29tbW9uLnJlYWRWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlLCBvcHRpb25zID0ge30pe1xyXG4gICAgaWYodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgIHJldHVybiB2YWx1ZShvcHRpb25zKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbW1vbi5nZXRVcmxWYXIgPSBmdW5jdGlvbiAoa2V5LCBkZWZhdWx0VmFsdWUpIHtcclxuICAgIHZhciB2YXJzID0ge307XHJcbiAgICB2YXIgcGFydHMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKC9bPyZdKyhbXj0mXSspPShbXiZdKikvZ2ksIGZ1bmN0aW9uIChtLCBrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyc1trZXldID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAodmFyc1trZXldID09PSB1bmRlZmluZWQ/IGRlZmF1bHRWYWx1ZTogdmFyc1trZXldKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1vbjsiLCJjb25zdCBJU19XT1JLRVIgPSBzZWxmLndpbmRvdyA9PT0gdW5kZWZpbmVkO1xyXG5jb25zdCBDT05URVhUID0gSVNfV09SS0VSID8gc2VsZiA6IHdpbmRvdztcclxudmFyIHJhZiA9IHtcclxuICAgIHJlcXVlc3RUaW1lb3V0OiBmdW5jdGlvbiAoZm4sIGRlbGF5KSB7XHJcbiAgICAgICAgaWYgKCFDT05URVhULnJlcXVlc3RBbmltYXRpb25GcmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIGRlbGF5KTtcclxuXHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgaGFuZGxlID0gbmV3IE9iamVjdCgpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBsb29wKHRpbWVzdGFtcCkge1xyXG4gICAgICAgICAgICAoRGF0ZS5ub3coKSAtIHN0YXJ0KSA+PSBkZWxheSA/IGZuKHRpbWVzdGFtcCkgOiBoYW5kbGUudmFsdWUgPSBDT05URVhULnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBoYW5kbGUudmFsdWUgPSBDT05URVhULnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfSxcclxuICAgIGNsZWFyUmVxdWVzdFRpbWVvdXQ6IGZ1bmN0aW9uIChoYW5kbGUpIHtcclxuICAgICAgICBDT05URVhULmNhbmNlbEFuaW1hdGlvbkZyYW1lID8gQ09OVEVYVC5jYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpOmNsZWFyVGltZW91dChoYW5kbGUpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmFmOyIsImltcG9ydCBjb21tb24gZnJvbSAnLi4vY29tbW9uL2NvbW1vbidcclxudmFyIGRvbSA9IHtcclxuICAgIHNlbGVjdDogZnVuY3Rpb24oc2VsZWN0b3Ipe1xyXG4gICAgICAgIGlmKHNlbGVjdG9yPT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IF9zZWxlY3RvciA9IHNlbGVjdG9yLmNoYXJBdCgwKTtcclxuICAgICAgICBsZXQgbmFtZSA9IHNlbGVjdG9yLnN1YnN0cmluZygxKTtcclxuICAgICAgICBsZXQgZG9tcyA9IFtdO1xyXG4gICAgICAgIHN3aXRjaCAoX3NlbGVjdG9yKXtcclxuICAgICAgICAgICAgY2FzZSAnIyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBkb21zID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIHx8IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRvbXM7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlRWxlbWVudDogZnVuY3Rpb24gKHRhZywgaWQgPSAnJywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50SWQgPSBpZCB8fCAodGFnICsgJ18nICsgY29tbW9uLmNyZWF0ZUlkKCkpO1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGVsZW1lbnRJZCk7XHJcblxyXG4gICAgICAgIHNldHVwRWxlbWVudE1ldGhvZHMoZWxlbWVudCwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldHVwRWxlbWVudE1ldGhvZHMoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgZWxlbWVudC5fZXZlbnRMaXN0ZW5lcnMgPSBuZXcgTWFwKCk7XHJcbiAgICBlbGVtZW50Ll9ib3VuZCA9IG5ldyBNYXAoKTtcclxuICAgIGVsZW1lbnQuX21lbW9yeSA9IHt9O1xyXG5cclxuICAgIGVsZW1lbnQuYWRkID0gZnVuY3Rpb24gKHRhZywgaWQsIG9wdGlvbnMpIHtcclxuICAgICAgICBsZXQgY2hpbGQgPSBkb20uY3JlYXRlRWxlbWVudCh0YWcsIGlkLCBvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGRFbGVtZW50KGNoaWxkKTtcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5hZGRFbGVtZW50ID0gZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkXHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuZ2V0QXR0ciA9IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuYXR0ciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0RWxlbWVudCgnYXR0cicsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmdldE1lbW9yeSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lbW9yeTtcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5tZW1vcnkgPSBmdW5jdGlvbihvYmope1xyXG4gICAgICAgIHRoaXMuX21lbW9yeSA9IG9iajtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5nZXRQcm9wID0gZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICByZXR1cm4gZWxlbWVudFtrZXldO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LnByb3AgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3NldEVsZW1lbnQoJ3Byb3AnLCBrZXksIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5jc3MgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcclxuICAgICAgICB0aGlzLl9zZXRFbGVtZW50KCdjc3MnLCBrZXksIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5iaW5kID0gZnVuY3Rpb24oa2V5LCBmbil7XHJcbiAgICAgICAgaWYoa2V5KSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5fYm91bmQuc2V0KGtleSwgZm4pO1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3N0b3JhZ2VfJyArIGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIGVsZW1lbnQudW5iaW5kID0gZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fYm91bmQuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdzdG9yYWdlXycgKyBrZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50Ll9yZWFjdCA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG4gICAgICAgIGxldCBmbiA9IHRoaXMuX2JvdW5kLmdldChrZXkpO1xyXG4gICAgICAgIGlmKGZuKXtcclxuICAgICAgICAgICAgaWYoZm4uY2FsbCh0aGlzLCB2YWx1ZSwgdGhpcy5fZGF0YSkgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kKGtleSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5vbiAgPSBmdW5jdGlvbihldmVudE5hbWUsIGZuLCB0YWcgPSAnJyl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBldmVudFRhZyA9IGV2ZW50TmFtZSArIHRhZztcclxuICAgICAgICBsZXQgZXZlbnRIYW5kbGVyID0gZWxlbWVudC5fZXZlbnRMaXN0ZW5lcnMuZ2V0KGV2ZW50VGFnKTtcclxuICAgICAgICBpZihldmVudEhhbmRsZXIpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBlbGVtZW50Ll9ldmVudExpc3RlbmVycy5kZWxldGUoZXZlbnRUYWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihmbikge1xyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYoZm4uY2FsbChzZWxmLCBlLCBzZWxmLl9kYXRhKSA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGVsZW1lbnQuX2V2ZW50TGlzdGVuZXJzLnNldChldmVudFRhZywgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZWxmO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmNvbnRlbnQgPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICAgICAgdGhpcy5pbm5lclRleHQgPSBzdHI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQucmVtb3ZlU2VsZiA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGlmKHRoaXMucmVtb3ZlKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LnJlbW92ZUFsbENoaWxkcmVuID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB3aGlsZSAodGhpcy5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuX3NldEVsZW1lbnQgPSBmdW5jdGlvbih0eXBlLCBrZXkgLCB2YWx1ZSl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGNvbW1vbi5vYmplY3Rmb3JFYWNoKGtleSAsZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZlt0eXBlXShrZXksIGl0ZW0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2ID0gY29tbW9uLnJlYWRWYWx1ZSh2YWx1ZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdwcm9wJzpcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9ICB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdhdHRyJzpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShrZXkpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY3NzJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVba2V5XSA9ICB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmlzSW5WaWV3cG9ydCA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICAgICAgICBsZXQgb2Zmc2V0WCA9IG9wdGlvbnMub2Zmc2V0WCB8fCAwO1xyXG4gICAgICAgIGxldCBvZmZzZXRZID0gb3B0aW9ucy5vZmZzZXRZIHx8IDA7XHJcbiAgICAgICAgbGV0IHt4LCB5LCB3aWR0aCwgaGVpZ2h0fSA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IC8vSUUgbm90IHN1cHBvcnQgYm90dG9tIHJpZ2h0XHJcbiAgICAgICAgbGV0IHgyID0geCArIHdpZHRoO1xyXG4gICAgICAgIGxldCB5MiA9IHkgKyBoZWlnaHQ7XHJcbiAgICAgICAgbGV0IGlubmVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBsZXQgaW5uZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuICEoeDIgPD0gKDAgKyBvZmZzZXRYKXx8IHggPj0gKGlubmVyV2lkdGggLSBvZmZzZXRYKSB8fCB5MiA8PSAoMCArIG9mZnNldFkpIHx8IHkgPj0gKGlubmVySGVpZ2h0IC0gb2Zmc2V0WSkpXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb207IiwiaW1wb3J0IGNvbW1vbiBmcm9tICcuLi9jb21tb24vY29tbW9uJztcclxuXHJcbnZhciBzdG9yYWdlID0ge1xyXG4gICAgZGF0YU1hcDogbmV3IE1hcCgpLFxyXG4gICAgdGltZXJNYXA6ICBuZXcgTWFwKCksXHJcbiAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleSwgdmFsdWUsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgZGF0YU1hcCA9IHRoaXMuZGF0YU1hcDtcclxuICAgICAgICBsZXQge3Jlc2V0fSA9IG9wdGlvbnM7XHJcbiAgICAgICAgbGV0IHNob3VsZFJlYWN0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gZGF0YU1hcC5nZXQoa2V5KTtcclxuICAgICAgICBpZihjb21tb24uaXNPYmplY3QodmFsdWUpICYmIGNvbW1vbi5pc09iamVjdChvbGRWYWx1ZSkgJiYgcmVzZXQgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgY29tbW9uLm9iamVjdGZvckVhY2godmFsdWUsIGZ1bmN0aW9uIChpdGVtLCBrZXksIG9iaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkUmVhY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSB2YWx1ZVtrZXldXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgc2hvdWxkUmVhY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICBkYXRhTWFwLnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGRhdGFNYXAuZ2V0KGtleSk7XHJcblxyXG4gICAgICAgIGlmKHNob3VsZFJlYWN0KSB7XHJcbiAgICAgICAgICAgdGhpcy5icm9hZGNhc3Qoa2V5LCBuZXdWYWx1ZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9LFxyXG4gICAgYnJvYWRjYXN0OiBmdW5jdGlvbihrZXksIG5ld1ZhbHVlLCBvcHRpb25zID0ge30pe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgdGltZXIgPSB0aGlzLnRpbWVyTWFwLmdldChrZXkpO1xyXG5cclxuICAgICAgICBpZiAodGltZXIpIHtcclxuICAgICAgICAgICAgY2MuY2FuY2VsVGltZXIodGltZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGltZXIgPSBjYy5zZXRUaW1lcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBkb21zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RvcmFnZV8nICsga2V5KSB8fCBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZG9tID0gZG9tc1tpXTtcclxuICAgICAgICAgICAgICAgIGRvbS5fcmVhY3QgJiYgZG9tLl9yZWFjdChrZXksIG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLnRpbWVyTWFwLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgIH0sIG9wdGlvbnMuaW1tZWRpYXRlbHk/IDA6IDEwKTtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lck1hcC5zZXQoa2V5LCB0aW1lcik7XHJcbiAgICB9LFxyXG4gICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhTWFwLmdldChrZXkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTsiLCJjb25zdCB4aHIgPSB7XHJcbiAgICBhamF4OiBmdW5jdGlvbiAocGFyYW1zID0ge30pIHtcclxuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgbGV0IHt1cmwsIG1ldGhvZCwgZGF0YSwgYXN5bmMsIHhociwgY29udGVudFR5cGUsIGRhdGFUeXBlLCBkb25lLCBmYWlsfSA9IHBhcmFtcyB8fCB7fTtcclxuICAgICAgICAgICAgbGV0IHtoZWFkZXIsIG9uUHJvZ3Jlc3MsIGJlZm9yZVNlbmR9ID0gcGFyYW1zO1xyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9wZW4oKG1ldGhvZCB8fCAnR0VUJyksIHVybCwgYXN5bmMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhc3luYyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gKGhlYWRlciB8fCB7fSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICgoaGVhZGVyIHx8IHt9KS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNjLmdldFZhbHVlKCdBdXRob3JpemF0aW9uJykpe1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgY2MuZ2V0VmFsdWUoJ0F1dGhvcml6YXRpb24nKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSAmJiBkb25lKHBhcnNlRGF0YShyZXF1ZXN0LnJlc3BvbnNlVGV4dCksIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocGFyc2VEYXRhKHJlcXVlc3QucmVzcG9uc2VUZXh0KSwgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZhaWwgJiYgZmFpbChwYXJzZURhdGEocmVxdWVzdC5yZXNwb25zZVRleHQpLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocGFyc2VEYXRhKHJlcXVlc3QucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBmYWlsICYmIGZhaWwocGFyc2VEYXRhKHJlcXVlc3QucmVzcG9uc2VUZXh0KSwgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QocGFyc2VEYXRhKHJlcXVlc3QucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0LnVwbG9hZC5vbnByb2dyZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwID0gTWF0aC5mbG9vcihlLmxvYWRlZCAvIGUudG90YWwgKiAxMDApO1xyXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcyAmJiBvblByb2dyZXNzKHAsIGUpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IF9kYXRhO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGRhdGFUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdmaWxlJzpcclxuICAgICAgICAgICAgICAgICAgICBfZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdqc29uJzpcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSA9PT0gdW5kZWZpbmVkID8gXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIgOiBjb250ZW50VHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2RhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYmVmb3JlU2VuZCAmJiBiZWZvcmVTZW5kKHJlcXVlc3QpO1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKF9kYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcGFyc2VEYXRhKGRhdGEpIHtcclxuICAgIHRyeXtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhIHx8ICcnKVxyXG4gICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB4aHI7XHJcbiIsImltcG9ydCBzZXJ2aWNlV29ya2VyIGZyb20gJy4vbGliL3NlcnZpY2VXb3JrZXInO1xyXG5pbXBvcnQgaW5kZXggZnJvbSAnLi9hcHAvaW5kZXgnO1xyXG5cclxuXHJcbnNlcnZpY2VXb3JrZXIoKTtcclxuaW5kZXgoKTsiLCJpbXBvcnQgY2MgZnJvbSBcIm5wbS1jY2pzLWF5XCI7XHJcblxyXG5mdW5jdGlvbiBpbmRleCgpIHtcclxuICAgIGluZGV4LnNldHVwRW52KCk7XHJcbiAgICBpbmRleC5zZXR1cFJvb3RFbGVtZW50KCk7XHJcbn1cclxuXHJcblxyXG5pbmRleC5zZXR1cEVudiA9IGZ1bmN0aW9uICgpe1xyXG4gICAgY2Muc2V0VmFsdWUoJ3ZpZXdwb3J0Jywge3dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHR9KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2MudXBkYXRlVmFsdWUoJ3ZpZXdwb3J0Jywge3dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHR9KTtcclxuICAgIH0pO1xyXG5cclxufTtcclxuXHJcbmluZGV4LnNldHVwUm9vdEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgcm9vdCA9IGNjLnNlbGVjdCgnI2JvZHknKTtcclxuICAgIGxldCBtYWluQ29udGFpbmVyID0gY2MuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3Rlc3QnKVxyXG4gICAgICAgIC5hZGRDbGFzcygnbWFpbi1jb250YWluZXInKTtcclxuICAgIHJvb3QuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XHJcblxyXG4gICAgbWFpbkNvbnRhaW5lci5hZGQoJ2gyJykuY29udGVudCgnVGhhbmsgeW91JykuYWRkQ2xhc3MoJ2hlYWRlcicpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiLCJmdW5jdGlvbiBzZXR1cFNlcnZpY2VXb3JrZXIoKSB7XHJcbiAgICBpZignc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2Ugd29ya2VyIHN1cHBvcnRlZCEnKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZS5qcycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZSB3b3JrZXIgcmVnaXN0ZXJlZC4nKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2Ugd29ya2VyIGZhaWxlZCB0byByZWdpc3Rlci4gLSBXVEghPycpXHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2Ugd29ya2VyIG5vdCBzdXBwb3J0ZWQhIC0gRHVkZSwgYnV5IGEgbmV3IHBob25lLicpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNldHVwU2VydmljZVdvcmtlcjsiXSwic291cmNlUm9vdCI6IiJ9