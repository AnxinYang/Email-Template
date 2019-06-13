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

    index.setupContentSection(mainContainer);
    index.setupListSection(mainContainer);
};

index.setupListSection = function (container) {
    var listContainer = container.add('section').addClass('container').bind('currentTemp', function (d) {
        d ? this.addClass('list-transform') : this.removeClass('list-transform');
    });

    var listHeader = listContainer.add('div').addClass('list-header');
    listHeader.add('input').addClass('input-search').attr('placeholder', 'Search...');

    var list = listContainer.add('div').addClass('list');

    // GENERATE SOME MOCKUP;
    for (var i = 0; i < 32; i++) {
        var temp = list.add('div');
        temp.add('strong').content('Topic');
        temp.add('p').content('Something blah blah blah blah blah blah blah blah blah blah blah').on('click', function () {
            _npmCcjsAy2.default.setValue('currentTemp', true);
        });
    }
};

index.setupContentSection = function (container) {
    var contentContainer = container.add('section').addClass('container').bind('currentTemp', function (d) {});
    var contentHeader = contentContainer.add('div').addClass('list-header');
    contentHeader.add('input').addClass('input-title').attr('placeholder', 'Title...');

    var textDiv = contentHeader.add('div').css({
        position: 'relative'
    });

    textDiv.add('textarea').addClass('textarea').attr('placeholder', 'Email content').on('keyup', function () {
        var regex = /--.+--/g;
        var escape = /<.+>.*<\/.+>|<.+>|<\/.+>/g;
        var vars = {};
        var bgText = this.value;
        bgText = bgText.replace(/<|>/g, '~');
        // (bgText.match(escape) || []).forEach(function (str) {
        //     bgText = bgText.replace(/<|>/g, '~');
        // });
        (bgText.match(regex) || []).forEach(function (str) {
            vars[str.replace(/--/g, '')] = '';
            bgText = bgText.replace(str, '<span class="var-str">' + str + '</span>');
        });
        console.log(vars);
        textBg.innerHTML = bgText;
        _npmCcjsAy2.default.setValue('fields', vars);
    });
    var textBg = textDiv.add('pre').addClass('textarea-background');

    contentHeader.add('div', 'fields').bind('fields', function (d) {
        var self = this;
        self.removeAllChildren();
        var div = self.add('table');
        _npmCcjsAy2.default.utils.objectforEach(d, function (data, key, obj) {
            var tr = div.add('tr').addClass('field-div');
            tr.add('td').content(key);
            tr.add('td').add('input');
        });
    });
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
            console.log('Service worker is registered.');
        } catch (e) {
            console.error('Failed to register service worker.', e);
        }
    } else {
        console.error('Service worker is not supported.');
    }
}

exports.default = setupServiceWorker;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25wbS1jY2pzLWF5L3NyYy9jY2pzL2NjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9jb21tb24vY29tbW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9jb21tb24vcmFmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9kb20vZG9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9zdG9yYWdlL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25wbS1jY2pzLWF5L3NyYy9jY2pzL3hoci94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvc2VydmljZVdvcmtlci5qcyJdLCJuYW1lcyI6WyJJU19XT1JLRVIiLCJzZWxmIiwid2luZG93IiwidW5kZWZpbmVkIiwiQ09OVEVYVCIsImNjIiwidXRpbHMiLCJjb21tb24iLCJsb2FkIiwiYWRkT25zIiwib3B0aW9ucyIsInNlbGVjdCIsInNlbGVjdG9yIiwiZG9tIiwiY3JlYXRlRWxlbWVudCIsInRhZ05hbWUiLCJpZCIsImNyZWF0ZUVsZW1lbnROUyIsIk5TIiwic2V0VmFsdWUiLCJrZXkiLCJ2YWx1ZSIsInJlc2V0Iiwic3RvcmFnZSIsInNhdmVBcnJheSIsImFyciIsImlka2V5IiwiZm9yRWFjaCIsIml0ZW0iLCJ1cGRhdGVWYWx1ZSIsImdldFZhbHVlIiwic2V0VGltZXIiLCJmbiIsImRlbGF5IiwicmFmIiwicmVxdWVzdFRpbWVvdXQiLCJjYW5jZWxUaW1lciIsImhhbmRsZSIsImNsZWFyUmVxdWVzdFRpbWVvdXQiLCJyZXF1ZXN0IiwicGFyYW1zIiwieGhyIiwiYWpheCIsImxhc3QiLCJmcmFtZVRpY2tlciIsInRpbWVzdGFtcCIsImltbWVkaWF0ZWx5Iiwib2JqZWN0Zm9yRWFjaCIsIm9iaiIsImhhc093blByb3BlcnR5Iiwib2JqZWN0QXNzaWduIiwidGFyZ2V0Iiwic291cmNlIiwiY3JlYXRlSWQiLCJzNCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiaXNPYmplY3QiLCJPYmplY3QiLCJBcnJheSIsImdldEJyb3dzZXIiLCJpc0lFIiwiaXNDaHJvbWUiLCJpc09wZXJhIiwib3ByIiwiYWRkb25zIiwib3BlcmEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiSW5zdGFsbFRyaWdnZXIiLCJ0ZXN0IiwiSFRNTEVsZW1lbnQiLCJwIiwic2FmYXJpIiwicHVzaE5vdGlmaWNhdGlvbiIsImRvY3VtZW50IiwiZG9jdW1lbnRNb2RlIiwiYXNzaWduIiwib3V0cHV0IiwiYXJndW1lbnRzIiwiaSIsImxlbmd0aCIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJTdHlsZU1lZGlhIiwiY2hyb21lIiwid2Vic3RvcmUiLCJDU1MiLCJyZWFkVmFsdWUiLCJnZXRVcmxWYXIiLCJkZWZhdWx0VmFsdWUiLCJ2YXJzIiwicGFydHMiLCJsb2NhdGlvbiIsImhyZWYiLCJyZXBsYWNlIiwibSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJsb29wIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJfc2VsZWN0b3IiLCJjaGFyQXQiLCJuYW1lIiwiZG9tcyIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvckFsbCIsInRhZyIsImVsZW1lbnQiLCJlbGVtZW50SWQiLCJzZXRBdHRyaWJ1dGUiLCJzZXR1cEVsZW1lbnRNZXRob2RzIiwiX2V2ZW50TGlzdGVuZXJzIiwiTWFwIiwiX2JvdW5kIiwiX21lbW9yeSIsImFkZCIsImNoaWxkIiwiYWRkRWxlbWVudCIsImFwcGVuZENoaWxkIiwiYWRkQ2xhc3MiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmVDbGFzcyIsImdldEF0dHIiLCJnZXRBdHRyaWJ1dGUiLCJhdHRyIiwiX3NldEVsZW1lbnQiLCJnZXRNZW1vcnkiLCJtZW1vcnkiLCJnZXRQcm9wIiwicHJvcCIsImNzcyIsImJpbmQiLCJzZXQiLCJ1bmJpbmQiLCJkZWxldGUiLCJfcmVhY3QiLCJnZXQiLCJjYWxsIiwiX2RhdGEiLCJvbiIsImV2ZW50TmFtZSIsImV2ZW50VGFnIiwiZXZlbnRIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImUiLCJhZGRFdmVudExpc3RlbmVyIiwiY29udGVudCIsInN0ciIsImlubmVyVGV4dCIsInJlbW92ZVNlbGYiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImZpcnN0Q2hpbGQiLCJ0eXBlIiwidiIsInJlbW92ZUF0dHJpYnV0ZSIsInN0eWxlIiwiaXNJblZpZXdwb3J0Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwieDIiLCJ5MiIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRhdGFNYXAiLCJ0aW1lck1hcCIsInNob3VsZFJlYWN0Iiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsImJyb2FkY2FzdCIsInRpbWVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJhc3luYyIsImNvbnRlbnRUeXBlIiwiZGF0YVR5cGUiLCJkb25lIiwiZmFpbCIsImhlYWRlciIsIm9uUHJvZ3Jlc3MiLCJiZWZvcmVTZW5kIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ubG9hZCIsInN0YXR1cyIsInBhcnNlRGF0YSIsInJlc3BvbnNlVGV4dCIsIm9uZXJyb3IiLCJ1cGxvYWQiLCJvbnByb2dyZXNzIiwibG9hZGVkIiwidG90YWwiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZCIsInBhcnNlIiwiaW5kZXgiLCJyb290IiwibWFpbkNvbnRhaW5lciIsImxpc3RDb250YWluZXIiLCJkIiwibGlzdEhlYWRlciIsImxpc3QiLCJ0ZW1wIiwiY29udGVudENvbnRhaW5lciIsImNvbnRhaW5lciIsImNvbnRlbnRIZWFkZXIiLCJ0ZXh0RGl2IiwicG9zaXRpb24iLCJyZWdleCIsImVzY2FwZSIsImJnVGV4dCIsImNvbnNvbGUiLCJ0ZXh0QmciLCJkaXYiLCJ0ciIsInNldHVwU2VydmljZVdvcmtlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7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OEI7QUFDMUIsUUFBRyxtQkFBSCxXQUFpQztBQUM3QmdCO0FBQ0EsWUFBSTtBQUNBdEs7QUFDQXNLO0FBRkosVUFHRSxVQUFVO0FBQ1JBO0FBQ0g7QUFQTCxXQVFLO0FBQ0RBO0FBQ0g7QUFDSjs7a0JBRWNJLGtCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJpbXBvcnQgZG9tIGZyb20gJy4vZG9tL2RvbSc7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlJztcclxuaW1wb3J0IHJhZiBmcm9tICcuL2NvbW1vbi9yYWYnO1xyXG5pbXBvcnQgY29tbW9uIGZyb20gJy4vY29tbW9uL2NvbW1vbic7XHJcbmltcG9ydCB4aHIgZnJvbSAnLi94aHIveGhyJztcclxuXHJcbmNvbnN0IElTX1dPUktFUiA9IHNlbGYud2luZG93ID09PSB1bmRlZmluZWQ7XHJcbmNvbnN0IENPTlRFWFQgPSBJU19XT1JLRVIgPyBzZWxmIDogd2luZG93O1xyXG5cclxudmFyIGNjO1xyXG53aW5kb3cuY2MgPSBjYyA9IHtcclxuICAgIHV0aWxzOiBjb21tb24sXHJcbiAgICBsb2FkOiBmdW5jdGlvbihhZGRPbnMgPSBbXSwgb3B0aW9ucyA9IHt9KXtcclxuXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0OiBmdW5jdGlvbihzZWxlY3Rvcil7XHJcbiAgICAgICAgcmV0dXJuIGRvbS5zZWxlY3Qoc2VsZWN0b3IpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlRWxlbWVudDogZnVuY3Rpb24gKHRhZ05hbWUsIGlkLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvbS5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIGlkLCBvcHRpb25zKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZUVsZW1lbnROUzogZnVuY3Rpb24gKHRhZ05hbWUsIGlkLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBvcHRpb25zLk5TID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZG9tLmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgaWQsIG9wdGlvbnMpXHJcbiAgICB9LFxyXG4gICAgc2V0VmFsdWU6IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBvcHRpb25zLnJlc2V0ID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZS5zZXRWYWx1ZShrZXksIHZhbHVlLCBvcHRpb25zKVxyXG4gICAgfSxcclxuICAgIHNhdmVBcnJheTogZnVuY3Rpb24oa2V5LCBhcnIgPSBbXSwgaWRrZXkpe1xyXG4gICAgICAgIGlmKGlka2V5ICE9PSB1bmRlZmluZWQgJiYgaWRrZXkgIT09ICcnICYmIGtleSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGNjLnVwZGF0ZVZhbHVlKGl0ZW1baWRrZXldLCBpdGVtKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNjLnNldFZhbHVlKGtleSwgYXJyKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVWYWx1ZTogZnVuY3Rpb24oa2V5LCB2YWx1ZSwgb3B0aW9ucyA9IHt9KXtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZS5zZXRWYWx1ZShrZXksIHZhbHVlLCBvcHRpb25zKVxyXG4gICAgfSxcclxuICAgIGdldFZhbHVlOiAgZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHJldHVybiBzdG9yYWdlLmdldFZhbHVlKGtleSk7XHJcbiAgICB9LFxyXG4gICAgc2V0VGltZXI6IGZ1bmN0aW9uIChmbiwgZGVsYXkpIHtcclxuICAgICAgICByZXR1cm4gcmFmLnJlcXVlc3RUaW1lb3V0KGZuLCBkZWxheSlcclxuICAgIH0sXHJcbiAgICBjYW5jZWxUaW1lcjogZnVuY3Rpb24gKGhhbmRsZSkge1xyXG4gICAgICAgIHJhZi5jbGVhclJlcXVlc3RUaW1lb3V0KGhhbmRsZSk7XHJcbiAgICB9LFxyXG4gICAgcmVxdWVzdDogZnVuY3Rpb24gKHBhcmFtcyA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIHhoci5hamF4KHBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuaWYoSVNfV09SS0VSKXtcclxuICAgIGRlbGV0ZSBjYy5zZWxlY3Q7XHJcbiAgICBkZWxldGUgY2MuY3JlYXRlRWxlbWVudDtcclxuICAgIGRlbGV0ZSBjYy5jcmVhdGVFbGVtZW50TlM7XHJcbn1lbHNle1xyXG4gICAgbGV0IGxhc3QgPSAwXHJcbiAgICBsZXQgZnJhbWVUaWNrZXIgPSBmdW5jdGlvbiAodGltZXN0YW1wKSB7XHJcbiAgICAgICAgY2Muc2V0VmFsdWUoJ2ZyYW1lJywgdGltZXN0YW1wLCB7aW1tZWRpYXRlbHk6IHRydWV9KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRpbWVzdGFtcCAtIGxhc3QpO1xyXG4gICAgICAgIGxhc3QgPSB0aW1lc3RhbXA7XHJcbiAgICAgICAgcmFmLnJlcXVlc3RUaW1lb3V0KGZyYW1lVGlja2VyLCAxNilcclxuICAgIH07XHJcbiAgICBmcmFtZVRpY2tlcigwKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNjOyIsImNvbnN0IElTX1dPUktFUiA9IHNlbGYud2luZG93ID09PSB1bmRlZmluZWQ7XHJcbmNvbnN0IENPTlRFWFQgPSBJU19XT1JLRVIgPyBzZWxmIDogd2luZG93O1xyXG5jb25zdCBjb21tb24gPSB7fTtcclxuXHJcbmNvbW1vbi5vYmplY3Rmb3JFYWNoID0gZnVuY3Rpb24ob2JqLGZuKXtcclxuICAgIGZvcih2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBmbihvYmpba2V5XSwga2V5LCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmNvbW1vbi5vYmplY3RBc3NpZ24gPSBmdW5jdGlvbih0YXJnZXQgPSB7fSwgc291cmNlKXtcclxuICAgIGZvcihsZXQga2V5IGluIHNvdXJjZSkge1xyXG4gICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufTtcclxuXHJcbmNvbW1vbi5jcmVhdGVJZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBmdW5jdGlvbiBzNCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcclxuICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxyXG4gICAgICAgICAgICAuc3Vic3RyaW5nKDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xyXG59O1xyXG5cclxuY29tbW9uLmlzT2JqZWN0ID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIHJldHVybiAoaXRlbSE9PXVuZGVmaW5lZCAmJiBpdGVtID09PSBPYmplY3QoaXRlbSkgJiYgIShpdGVtIGluc3RhbmNlb2YgQXJyYXkpKVxyXG59O1xyXG5cclxuY29tbW9uLmdldEJyb3dzZXIgPSBmdW5jdGlvbigpIHtcclxuICAgIGxldCBpc0lFID0gZmFsc2U7XHJcbiAgICBsZXQgaXNDaHJvbWUgPSBmYWxzZTtcclxuICAgIGxldCBpc09wZXJhID0gZmFsc2U7XHJcbiAgICBpZiAoKCEhQ09OVEVYVC5vcHIgJiYgISFvcHIuYWRkb25zKSB8fCAhIUNPTlRFWFQub3BlcmEgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCcgT1BSLycpID49IDApIHtcclxuICAgICAgICBpc09wZXJhID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gJ29wZXJhJztcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuICdmaXJlZm94JztcclxuICAgIH1cclxuICAgIGlmICgvY29uc3RydWN0b3IvaS50ZXN0KENPTlRFWFQuSFRNTEVsZW1lbnQpIHx8IChmdW5jdGlvbiAocCkge1xyXG4gICAgICAgIHJldHVybiBwLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dXCI7XHJcbiAgICB9KSghQ09OVEVYVFsnc2FmYXJpJ10gfHwgc2FmYXJpLnB1c2hOb3RpZmljYXRpb24pKSB7XHJcbiAgICAgICAgcmV0dXJuICdzYWZhcmknO1xyXG4gICAgfVxyXG4gICAgaWYgKGZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG91dHB1dCA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKCEoJ3JlbW92ZScgaW4gRWxlbWVudC5wcm90b3R5cGUpKSB7XHJcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzSUUgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiAnaWUnO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0lFICYmICEhQ09OVEVYVC5TdHlsZU1lZGlhKSB7XHJcbiAgICAgICAgcmV0dXJuICdlZGdlJztcclxuICAgIH1cclxuICAgIGlmICghIUNPTlRFWFQuY2hyb21lICYmICEhQ09OVEVYVC5jaHJvbWUud2Vic3RvcmUpIHtcclxuICAgICAgICBpc0Nocm9tZSA9IHRydWVcclxuICAgICAgICByZXR1cm4gJ2Nocm9tZSc7XHJcbiAgICB9XHJcbiAgICBpZiAoKGlzQ2hyb21lIHx8IGlzT3BlcmEpICYmICEhQ09OVEVYVC5DU1MpIHtcclxuICAgICAgICByZXR1cm4gJ2JsaW5rJztcclxuICAgIH1cclxufTtcclxuXHJcbmNvbW1vbi5yZWFkVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSwgb3B0aW9ucyA9IHt9KXtcclxuICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICByZXR1cm4gdmFsdWUob3B0aW9ucyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb21tb24uZ2V0VXJsVmFyID0gZnVuY3Rpb24gKGtleSwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICB2YXIgdmFycyA9IHt9O1xyXG4gICAgdmFyIHBhcnRzID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvWz8mXSsoW149Jl0rKT0oW14mXSopL2dpLCBmdW5jdGlvbiAobSwga2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhcnNba2V5XSA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKHZhcnNba2V5XSA9PT0gdW5kZWZpbmVkPyBkZWZhdWx0VmFsdWU6IHZhcnNba2V5XSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21tb247IiwiY29uc3QgSVNfV09SS0VSID0gc2VsZi53aW5kb3cgPT09IHVuZGVmaW5lZDtcclxuY29uc3QgQ09OVEVYVCA9IElTX1dPUktFUiA/IHNlbGYgOiB3aW5kb3c7XHJcbnZhciByYWYgPSB7XHJcbiAgICByZXF1ZXN0VGltZW91dDogZnVuY3Rpb24gKGZuLCBkZWxheSkge1xyXG4gICAgICAgIGlmICghQ09OVEVYVC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZuLCBkZWxheSk7XHJcblxyXG4gICAgICAgIHZhciBzdGFydCA9IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIGhhbmRsZSA9IG5ldyBPYmplY3QoKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbG9vcCh0aW1lc3RhbXApIHtcclxuICAgICAgICAgICAgKERhdGUubm93KCkgLSBzdGFydCkgPj0gZGVsYXkgPyBmbih0aW1lc3RhbXApIDogaGFuZGxlLnZhbHVlID0gQ09OVEVYVC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaGFuZGxlLnZhbHVlID0gQ09OVEVYVC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcclxuICAgIH0sXHJcbiAgICBjbGVhclJlcXVlc3RUaW1lb3V0OiBmdW5jdGlvbiAoaGFuZGxlKSB7XHJcbiAgICAgICAgQ09OVEVYVC5jYW5jZWxBbmltYXRpb25GcmFtZSA/IENPTlRFWFQuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlLnZhbHVlKTpjbGVhclRpbWVvdXQoaGFuZGxlKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJhZjsiLCJpbXBvcnQgY29tbW9uIGZyb20gJy4uL2NvbW1vbi9jb21tb24nXHJcbnZhciBkb20gPSB7XHJcbiAgICBzZWxlY3Q6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcclxuICAgICAgICBpZihzZWxlY3Rvcj09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBfc2VsZWN0b3IgPSBzZWxlY3Rvci5jaGFyQXQoMCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBzZWxlY3Rvci5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgbGV0IGRvbXMgPSBbXTtcclxuICAgICAgICBzd2l0Y2ggKF9zZWxlY3Rvcil7XHJcbiAgICAgICAgICAgIGNhc2UgJyMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZG9tcyA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSB8fCBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkb21zO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uICh0YWcsIGlkID0gJycsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG5cclxuICAgICAgICBsZXQgZWxlbWVudElkID0gaWQgfHwgKHRhZyArICdfJyArIGNvbW1vbi5jcmVhdGVJZCgpKTtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBlbGVtZW50SWQpO1xyXG5cclxuICAgICAgICBzZXR1cEVsZW1lbnRNZXRob2RzKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZXR1cEVsZW1lbnRNZXRob2RzKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgIGVsZW1lbnQuX2V2ZW50TGlzdGVuZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgZWxlbWVudC5fYm91bmQgPSBuZXcgTWFwKCk7XHJcbiAgICBlbGVtZW50Ll9tZW1vcnkgPSB7fTtcclxuXHJcbiAgICBlbGVtZW50LmFkZCA9IGZ1bmN0aW9uICh0YWcsIGlkLCBvcHRpb25zKSB7XHJcbiAgICAgICAgbGV0IGNoaWxkID0gZG9tLmNyZWF0ZUVsZW1lbnQodGFnLCBpZCwgb3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRWxlbWVudChjaGlsZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuYWRkRWxlbWVudCA9IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIHJldHVybiBjaGlsZFxyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmFkZENsYXNzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmdldEF0dHIgPSBmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmF0dHIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3NldEVsZW1lbnQoJ2F0dHInLCBrZXksIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5nZXRNZW1vcnkgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZW1vcnk7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQubWVtb3J5ID0gZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICB0aGlzLl9tZW1vcnkgPSBvYmo7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuZ2V0UHJvcCA9IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRba2V5XTtcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5wcm9wID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9zZXRFbGVtZW50KCdwcm9wJywga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuY3NzID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5fc2V0RWxlbWVudCgnY3NzJywga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuYmluZCA9IGZ1bmN0aW9uKGtleSwgZm4pe1xyXG4gICAgICAgIGlmKGtleSkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuX2JvdW5kLnNldChrZXksIGZuKTtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzdG9yYWdlXycgKyBrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBlbGVtZW50LnVuYmluZCA9IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2JvdW5kLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnc3RvcmFnZV8nICsga2V5KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5fcmVhY3QgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcclxuICAgICAgICBsZXQgZm4gPSB0aGlzLl9ib3VuZC5nZXQoa2V5KTtcclxuICAgICAgICBpZihmbil7XHJcbiAgICAgICAgICAgIGlmKGZuLmNhbGwodGhpcywgdmFsdWUsIHRoaXMuX2RhdGEpID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuYmluZChrZXkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQub24gID0gZnVuY3Rpb24oZXZlbnROYW1lLCBmbiwgdGFnID0gJycpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgZXZlbnRUYWcgPSBldmVudE5hbWUgKyB0YWc7XHJcbiAgICAgICAgbGV0IGV2ZW50SGFuZGxlciA9IGVsZW1lbnQuX2V2ZW50TGlzdGVuZXJzLmdldChldmVudFRhZyk7XHJcbiAgICAgICAgaWYoZXZlbnRIYW5kbGVyKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAgICAgZWxlbWVudC5fZXZlbnRMaXN0ZW5lcnMuZGVsZXRlKGV2ZW50VGFnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZm4pIHtcclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmKGZuLmNhbGwoc2VsZiwgZSwgc2VsZi5fZGF0YSkgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBlbGVtZW50Ll9ldmVudExpc3RlbmVycy5zZXQoZXZlbnRUYWcsIGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50SGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2VsZjtcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5jb250ZW50ID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgICAgIHRoaXMuaW5uZXJUZXh0ID0gc3RyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LnJlbW92ZVNlbGYgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBpZih0aGlzLnJlbW92ZSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5yZW1vdmVBbGxDaGlsZHJlbiA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50Ll9zZXRFbGVtZW50ID0gZnVuY3Rpb24odHlwZSwga2V5ICwgdmFsdWUpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBjb21tb24ub2JqZWN0Zm9yRWFjaChrZXkgLGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHNlbGZbdHlwZV0oa2V5LCBpdGVtKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdiA9IGNvbW1vbi5yZWFkVmFsdWUodmFsdWUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAncHJvcCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSAgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYXR0cic6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoa2V5KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Nzcyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlW2tleV0gPSAgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5pc0luVmlld3BvcnQgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgbGV0IG9mZnNldFggPSBvcHRpb25zLm9mZnNldFggfHwgMDtcclxuICAgICAgICBsZXQgb2Zmc2V0WSA9IG9wdGlvbnMub2Zmc2V0WSB8fCAwO1xyXG4gICAgICAgIGxldCB7eCwgeSwgd2lkdGgsIGhlaWdodH0gPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyAvL0lFIG5vdCBzdXBwb3J0IGJvdHRvbSByaWdodFxyXG4gICAgICAgIGxldCB4MiA9IHggKyB3aWR0aDtcclxuICAgICAgICBsZXQgeTIgPSB5ICsgaGVpZ2h0O1xyXG4gICAgICAgIGxldCBpbm5lcldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgbGV0IGlubmVySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiAhKHgyIDw9ICgwICsgb2Zmc2V0WCl8fCB4ID49IChpbm5lcldpZHRoIC0gb2Zmc2V0WCkgfHwgeTIgPD0gKDAgKyBvZmZzZXRZKSB8fCB5ID49IChpbm5lckhlaWdodCAtIG9mZnNldFkpKVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tOyIsImltcG9ydCBjb21tb24gZnJvbSAnLi4vY29tbW9uL2NvbW1vbic7XHJcblxyXG52YXIgc3RvcmFnZSA9IHtcclxuICAgIGRhdGFNYXA6IG5ldyBNYXAoKSxcclxuICAgIHRpbWVyTWFwOiAgbmV3IE1hcCgpLFxyXG4gICAgc2V0VmFsdWU6IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGRhdGFNYXAgPSB0aGlzLmRhdGFNYXA7XHJcbiAgICAgICAgbGV0IHtyZXNldH0gPSBvcHRpb25zO1xyXG4gICAgICAgIGxldCBzaG91bGRSZWFjdCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBvbGRWYWx1ZSA9IGRhdGFNYXAuZ2V0KGtleSk7XHJcbiAgICAgICAgaWYoY29tbW9uLmlzT2JqZWN0KHZhbHVlKSAmJiBjb21tb24uaXNPYmplY3Qob2xkVmFsdWUpICYmIHJlc2V0ICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbW1vbi5vYmplY3Rmb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAoaXRlbSwga2V5LCBvYmopIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFJlYWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9ialtrZXldID0gdmFsdWVba2V5XVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3VsZFJlYWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgZGF0YU1hcC5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbmV3VmFsdWUgPSBkYXRhTWFwLmdldChrZXkpO1xyXG5cclxuICAgICAgICBpZihzaG91bGRSZWFjdCkge1xyXG4gICAgICAgICAgIHRoaXMuYnJvYWRjYXN0KGtleSwgbmV3VmFsdWUsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfSxcclxuICAgIGJyb2FkY2FzdDogZnVuY3Rpb24oa2V5LCBuZXdWYWx1ZSwgb3B0aW9ucyA9IHt9KXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHRpbWVyID0gdGhpcy50aW1lck1hcC5nZXQoa2V5KTtcclxuXHJcbiAgICAgICAgaWYgKHRpbWVyKSB7XHJcbiAgICAgICAgICAgIGNjLmNhbmNlbFRpbWVyKHRpbWVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRpbWVyID0gY2Muc2V0VGltZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgZG9tcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0b3JhZ2VfJyArIGtleSkgfHwgW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRvbSA9IGRvbXNbaV07XHJcbiAgICAgICAgICAgICAgICBkb20uX3JlYWN0ICYmIGRvbS5fcmVhY3Qoa2V5LCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi50aW1lck1hcC5kZWxldGUoa2V5KTtcclxuICAgICAgICB9LCBvcHRpb25zLmltbWVkaWF0ZWx5PyAwOiAxMCk7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXJNYXAuc2V0KGtleSwgdGltZXIpO1xyXG4gICAgfSxcclxuICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YU1hcC5nZXQoa2V5KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2U7IiwiY29uc3QgeGhyID0ge1xyXG4gICAgYWpheDogZnVuY3Rpb24gKHBhcmFtcyA9IHt9KSB7XHJcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGxldCB7dXJsLCBtZXRob2QsIGRhdGEsIGFzeW5jLCB4aHIsIGNvbnRlbnRUeXBlLCBkYXRhVHlwZSwgZG9uZSwgZmFpbH0gPSBwYXJhbXMgfHwge307XHJcbiAgICAgICAgICAgIGxldCB7aGVhZGVyLCBvblByb2dyZXNzLCBiZWZvcmVTZW5kfSA9IHBhcmFtcztcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vcGVuKChtZXRob2QgfHwgJ0dFVCcpLCB1cmwsIGFzeW5jID09PSB1bmRlZmluZWQgPyB0cnVlIDogYXN5bmMpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIChoZWFkZXIgfHwge30pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGhlYWRlciB8fCB7fSkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcltrZXldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjYy5nZXRWYWx1ZSgnQXV0aG9yaXphdGlvbicpKXtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIGNjLmdldFZhbHVlKCdBdXRob3JpemF0aW9uJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUgJiYgZG9uZShwYXJzZURhdGEocmVxdWVzdC5yZXNwb25zZVRleHQpLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHBhcnNlRGF0YShyZXF1ZXN0LnJlc3BvbnNlVGV4dCksIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmYWlsICYmIGZhaWwocGFyc2VEYXRhKHJlcXVlc3QucmVzcG9uc2VUZXh0KSwgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHBhcnNlRGF0YShyZXF1ZXN0LnJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZmFpbCAmJiBmYWlsKHBhcnNlRGF0YShyZXF1ZXN0LnJlc3BvbnNlVGV4dCksIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHBhcnNlRGF0YShyZXF1ZXN0LnJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC51cGxvYWQub25wcm9ncmVzcyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcCA9IE1hdGguZmxvb3IoZS5sb2FkZWQgLyBlLnRvdGFsICogMTAwKTtcclxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MgJiYgb25Qcm9ncmVzcyhwLCBlKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGxldCBfZGF0YTtcclxuICAgICAgICAgICAgc3dpdGNoIChkYXRhVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZmlsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgX2RhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnanNvbic6XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgY29udGVudFR5cGUgPT09IHVuZGVmaW5lZCA/IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiIDogY29udGVudFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9kYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJlZm9yZVNlbmQgJiYgYmVmb3JlU2VuZChyZXF1ZXN0KTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZChfZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHBhcnNlRGF0YShkYXRhKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSB8fCAnJylcclxuICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgeGhyO1xyXG4iLCJpbXBvcnQgc2VydmljZVdvcmtlciBmcm9tICcuL2xpYi9zZXJ2aWNlV29ya2VyJztcclxuaW1wb3J0IGluZGV4IGZyb20gJy4vYXBwL2luZGV4JztcclxuXHJcblxyXG5zZXJ2aWNlV29ya2VyKCk7XHJcbmluZGV4KCk7IiwiaW1wb3J0IGNjIGZyb20gXCJucG0tY2Nqcy1heVwiO1xyXG5cclxuZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgICBpbmRleC5zZXR1cEVudigpO1xyXG4gICAgaW5kZXguc2V0dXBSb290RWxlbWVudCgpO1xyXG59XHJcblxyXG5cclxuaW5kZXguc2V0dXBFbnYgPSBmdW5jdGlvbiAoKXtcclxuICAgIGNjLnNldFZhbHVlKCd2aWV3cG9ydCcsIHt3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0fSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNjLnVwZGF0ZVZhbHVlKCd2aWV3cG9ydCcsIHt3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0fSk7XHJcbiAgICB9KTtcclxuXHJcbn07XHJcblxyXG5pbmRleC5zZXR1cFJvb3RFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHJvb3QgPSBjYy5zZWxlY3QoJyNib2R5Jyk7XHJcbiAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGNjLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0ZXN0JylcclxuICAgICAgICAuYWRkQ2xhc3MoJ21haW4tY29udGFpbmVyJyk7XHJcbiAgICByb290LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG5cclxuICAgIGluZGV4LnNldHVwQ29udGVudFNlY3Rpb24obWFpbkNvbnRhaW5lcik7XHJcbiAgICBpbmRleC5zZXR1cExpc3RTZWN0aW9uKG1haW5Db250YWluZXIpO1xyXG59O1xyXG5cclxuaW5kZXguc2V0dXBMaXN0U2VjdGlvbiA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcclxuICAgIGxldCBsaXN0Q29udGFpbmVyID0gY29udGFpbmVyLmFkZCgnc2VjdGlvbicpLmFkZENsYXNzKCdjb250YWluZXInKVxyXG4gICAgICAgIC5iaW5kKCdjdXJyZW50VGVtcCcsIGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgZCA/IHRoaXMuYWRkQ2xhc3MoJ2xpc3QtdHJhbnNmb3JtJyk6IHRoaXMucmVtb3ZlQ2xhc3MoJ2xpc3QtdHJhbnNmb3JtJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgbGV0IGxpc3RIZWFkZXIgPSBsaXN0Q29udGFpbmVyLmFkZCgnZGl2JykuYWRkQ2xhc3MoJ2xpc3QtaGVhZGVyJyk7XHJcbiAgICBsaXN0SGVhZGVyLmFkZCgnaW5wdXQnKS5hZGRDbGFzcygnaW5wdXQtc2VhcmNoJykuYXR0cigncGxhY2Vob2xkZXInLCAnU2VhcmNoLi4uJyk7XHJcblxyXG4gICAgbGV0IGxpc3QgPSBsaXN0Q29udGFpbmVyLmFkZCgnZGl2JykuYWRkQ2xhc3MoJ2xpc3QnKTtcclxuXHJcbiAgICAvLyBHRU5FUkFURSBTT01FIE1PQ0tVUDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzI7IGkrKykge1xyXG4gICAgICAgIGxldCB0ZW1wID0gbGlzdC5hZGQoJ2RpdicpO1xyXG4gICAgICAgIHRlbXAuYWRkKCdzdHJvbmcnKS5jb250ZW50KCdUb3BpYycpO1xyXG4gICAgICAgIHRlbXAuYWRkKCdwJykuY29udGVudCgnU29tZXRoaW5nIGJsYWggYmxhaCBibGFoIGJsYWggYmxhaCBibGFoIGJsYWggYmxhaCBibGFoIGJsYWggYmxhaCcpXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5zZXRWYWx1ZSgnY3VycmVudFRlbXAnLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5pbmRleC5zZXR1cENvbnRlbnRTZWN0aW9uID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xyXG4gICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBjb250YWluZXIuYWRkKCdzZWN0aW9uJykuYWRkQ2xhc3MoJ2NvbnRhaW5lcicpXHJcbiAgICAgICAgLmJpbmQoJ2N1cnJlbnRUZW1wJywgZnVuY3Rpb24gKGQpIHtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICBsZXQgY29udGVudEhlYWRlciA9IGNvbnRlbnRDb250YWluZXIuYWRkKCdkaXYnKS5hZGRDbGFzcygnbGlzdC1oZWFkZXInKTtcclxuICAgIGNvbnRlbnRIZWFkZXIuYWRkKCdpbnB1dCcpLmFkZENsYXNzKCdpbnB1dC10aXRsZScpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlLi4uJyk7XHJcbiAgICBcclxuICAgIGxldCB0ZXh0RGl2ID0gY29udGVudEhlYWRlci5hZGQoJ2RpdicpXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIHRleHREaXYuYWRkKCd0ZXh0YXJlYScpLmFkZENsYXNzKCd0ZXh0YXJlYScpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJ0VtYWlsIGNvbnRlbnQnKVxyXG4gICAgICAgIC5vbigna2V5dXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCByZWdleCA9IC8tLS4rLS0vZztcclxuICAgICAgICAgICAgbGV0IGVzY2FwZSA9LzwuKz4uKjxcXC8uKz58PC4rPnw8XFwvLis+L2c7XHJcbiAgICAgICAgICAgIGxldCB2YXJzID0ge307XHJcbiAgICAgICAgICAgIGxldCBiZ1RleHQgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICBiZ1RleHQgPSBiZ1RleHQucmVwbGFjZSgvPHw+L2csICd+Jyk7XHJcbiAgICAgICAgICAgIC8vIChiZ1RleHQubWF0Y2goZXNjYXBlKSB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBiZ1RleHQgPSBiZ1RleHQucmVwbGFjZSgvPHw+L2csICd+Jyk7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAoYmdUZXh0Lm1hdGNoKHJlZ2V4KSB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXJzW3N0ci5yZXBsYWNlKC8tLS9nLCAnJyldID0gJyc7XHJcbiAgICAgICAgICAgICAgICBiZ1RleHQgPSBiZ1RleHQucmVwbGFjZShzdHIsIGA8c3BhbiBjbGFzcz1cInZhci1zdHJcIj4ke3N0cn08L3NwYW4+YClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhcnMpO1xyXG4gICAgICAgICAgICB0ZXh0QmcuaW5uZXJIVE1MID0gKGJnVGV4dCk7XHJcbiAgICAgICAgICAgIGNjLnNldFZhbHVlKCdmaWVsZHMnLCB2YXJzKTtcclxuICAgICAgICB9KTtcclxuICAgIGxldCB0ZXh0QmcgPSB0ZXh0RGl2LmFkZCgncHJlJykuYWRkQ2xhc3MoJ3RleHRhcmVhLWJhY2tncm91bmQnKTtcclxuICAgIFxyXG4gICAgY29udGVudEhlYWRlci5hZGQoJ2RpdicsICdmaWVsZHMnKVxyXG4gICAgICAgIC5iaW5kKCdmaWVsZHMnLCBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgbGV0IGRpdiA9IHNlbGYuYWRkKCd0YWJsZScpO1xyXG4gICAgICAgICAgICBjYy51dGlscy5vYmplY3Rmb3JFYWNoKGQsIGZ1bmN0aW9uIChkYXRhLCBrZXksIG9iaikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRyID0gZGl2LmFkZCgndHInKS5hZGRDbGFzcygnZmllbGQtZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICB0ci5hZGQoJ3RkJykuY29udGVudChrZXkpO1xyXG4gICAgICAgICAgICAgICAgdHIuYWRkKCd0ZCcpLmFkZCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiLCJmdW5jdGlvbiBzZXR1cFNlcnZpY2VXb3JrZXIoKSB7XHJcbiAgICBpZignc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2Ugd29ya2VyIHN1cHBvcnRlZCEnKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZS5qcycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZSB3b3JrZXIgaXMgcmVnaXN0ZXJlZC4nKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHJlZ2lzdGVyIHNlcnZpY2Ugd29ya2VyLicsIGUpXHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignU2VydmljZSB3b3JrZXIgaXMgbm90IHN1cHBvcnRlZC4nKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXR1cFNlcnZpY2VXb3JrZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==