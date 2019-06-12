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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25wbS1jY2pzLWF5L3NyYy9jY2pzL2NjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9jb21tb24vY29tbW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9jb21tb24vcmFmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9kb20vZG9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9zdG9yYWdlL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25wbS1jY2pzLWF5L3NyYy9jY2pzL3hoci94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvc2VydmljZVdvcmtlci5qcyJdLCJuYW1lcyI6WyJJU19XT1JLRVIiLCJzZWxmIiwid2luZG93IiwidW5kZWZpbmVkIiwiQ09OVEVYVCIsImNjIiwidXRpbHMiLCJjb21tb24iLCJsb2FkIiwiYWRkT25zIiwib3B0aW9ucyIsInNlbGVjdCIsInNlbGVjdG9yIiwiZG9tIiwiY3JlYXRlRWxlbWVudCIsInRhZ05hbWUiLCJpZCIsImNyZWF0ZUVsZW1lbnROUyIsIk5TIiwic2V0VmFsdWUiLCJrZXkiLCJ2YWx1ZSIsInJlc2V0Iiwic3RvcmFnZSIsInNhdmVBcnJheSIsImFyciIsImlka2V5IiwiZm9yRWFjaCIsIml0ZW0iLCJ1cGRhdGVWYWx1ZSIsImdldFZhbHVlIiwic2V0VGltZXIiLCJmbiIsImRlbGF5IiwicmFmIiwicmVxdWVzdFRpbWVvdXQiLCJjYW5jZWxUaW1lciIsImhhbmRsZSIsImNsZWFyUmVxdWVzdFRpbWVvdXQiLCJyZXF1ZXN0IiwicGFyYW1zIiwieGhyIiwiYWpheCIsImxhc3QiLCJmcmFtZVRpY2tlciIsInRpbWVzdGFtcCIsImltbWVkaWF0ZWx5Iiwib2JqZWN0Zm9yRWFjaCIsIm9iaiIsImhhc093blByb3BlcnR5Iiwib2JqZWN0QXNzaWduIiwidGFyZ2V0Iiwic291cmNlIiwiY3JlYXRlSWQiLCJzNCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiaXNPYmplY3QiLCJPYmplY3QiLCJBcnJheSIsImdldEJyb3dzZXIiLCJpc0lFIiwiaXNDaHJvbWUiLCJpc09wZXJhIiwib3ByIiwiYWRkb25zIiwib3BlcmEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiSW5zdGFsbFRyaWdnZXIiLCJ0ZXN0IiwiSFRNTEVsZW1lbnQiLCJwIiwic2FmYXJpIiwicHVzaE5vdGlmaWNhdGlvbiIsImRvY3VtZW50IiwiZG9jdW1lbnRNb2RlIiwiYXNzaWduIiwib3V0cHV0IiwiYXJndW1lbnRzIiwiaSIsImxlbmd0aCIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJTdHlsZU1lZGlhIiwiY2hyb21lIiwid2Vic3RvcmUiLCJDU1MiLCJyZWFkVmFsdWUiLCJnZXRVcmxWYXIiLCJkZWZhdWx0VmFsdWUiLCJ2YXJzIiwicGFydHMiLCJsb2NhdGlvbiIsImhyZWYiLCJyZXBsYWNlIiwibSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJsb29wIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJfc2VsZWN0b3IiLCJjaGFyQXQiLCJuYW1lIiwiZG9tcyIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvckFsbCIsInRhZyIsImVsZW1lbnQiLCJlbGVtZW50SWQiLCJzZXRBdHRyaWJ1dGUiLCJzZXR1cEVsZW1lbnRNZXRob2RzIiwiX2V2ZW50TGlzdGVuZXJzIiwiTWFwIiwiX2JvdW5kIiwiX21lbW9yeSIsImFkZCIsImNoaWxkIiwiYWRkRWxlbWVudCIsImFwcGVuZENoaWxkIiwiYWRkQ2xhc3MiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmVDbGFzcyIsImdldEF0dHIiLCJnZXRBdHRyaWJ1dGUiLCJhdHRyIiwiX3NldEVsZW1lbnQiLCJnZXRNZW1vcnkiLCJtZW1vcnkiLCJnZXRQcm9wIiwicHJvcCIsImNzcyIsImJpbmQiLCJzZXQiLCJ1bmJpbmQiLCJkZWxldGUiLCJfcmVhY3QiLCJnZXQiLCJjYWxsIiwiX2RhdGEiLCJvbiIsImV2ZW50TmFtZSIsImV2ZW50VGFnIiwiZXZlbnRIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImUiLCJhZGRFdmVudExpc3RlbmVyIiwiY29udGVudCIsInN0ciIsImlubmVyVGV4dCIsInJlbW92ZVNlbGYiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImZpcnN0Q2hpbGQiLCJ0eXBlIiwidiIsInJlbW92ZUF0dHJpYnV0ZSIsInN0eWxlIiwiaXNJblZpZXdwb3J0Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwieDIiLCJ5MiIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRhdGFNYXAiLCJ0aW1lck1hcCIsInNob3VsZFJlYWN0Iiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsImJyb2FkY2FzdCIsInRpbWVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJhc3luYyIsImNvbnRlbnRUeXBlIiwiZGF0YVR5cGUiLCJkb25lIiwiZmFpbCIsImhlYWRlciIsIm9uUHJvZ3Jlc3MiLCJiZWZvcmVTZW5kIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ubG9hZCIsInN0YXR1cyIsInBhcnNlRGF0YSIsInJlc3BvbnNlVGV4dCIsIm9uZXJyb3IiLCJ1cGxvYWQiLCJvbnByb2dyZXNzIiwibG9hZGVkIiwidG90YWwiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZCIsInBhcnNlIiwiaW5kZXgiLCJyb290IiwibWFpbkNvbnRhaW5lciIsImxpc3RDb250YWluZXIiLCJkIiwibGlzdEhlYWRlciIsImxpc3QiLCJ0ZW1wIiwiY29udGVudENvbnRhaW5lciIsImNvbnRhaW5lciIsImNvbnRlbnRIZWFkZXIiLCJ0ZXh0RGl2IiwicG9zaXRpb24iLCJyZWdleCIsImVzY2FwZSIsImJnVGV4dCIsImNvbnNvbGUiLCJ0ZXh0QmciLCJzZXR1cFNlcnZpY2VXb3JrZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7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ZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiaW1wb3J0IGRvbSBmcm9tICcuL2RvbS9kb20nO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZSc7XHJcbmltcG9ydCByYWYgZnJvbSAnLi9jb21tb24vcmFmJztcclxuaW1wb3J0IGNvbW1vbiBmcm9tICcuL2NvbW1vbi9jb21tb24nO1xyXG5pbXBvcnQgeGhyIGZyb20gJy4veGhyL3hocic7XHJcblxyXG5jb25zdCBJU19XT1JLRVIgPSBzZWxmLndpbmRvdyA9PT0gdW5kZWZpbmVkO1xyXG5jb25zdCBDT05URVhUID0gSVNfV09SS0VSID8gc2VsZiA6IHdpbmRvdztcclxuXHJcbnZhciBjYztcclxud2luZG93LmNjID0gY2MgPSB7XHJcbiAgICB1dGlsczogY29tbW9uLFxyXG4gICAgbG9hZDogZnVuY3Rpb24oYWRkT25zID0gW10sIG9wdGlvbnMgPSB7fSl7XHJcblxyXG4gICAgfSxcclxuICAgIHNlbGVjdDogZnVuY3Rpb24oc2VsZWN0b3Ipe1xyXG4gICAgICAgIHJldHVybiBkb20uc2VsZWN0KHNlbGVjdG9yKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uICh0YWdOYW1lLCBpZCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBkb20uY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBpZCwgb3B0aW9ucylcclxuICAgIH0sXHJcbiAgICBjcmVhdGVFbGVtZW50TlM6IGZ1bmN0aW9uICh0YWdOYW1lLCBpZCwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgb3B0aW9ucy5OUyA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGRvbS5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIGlkLCBvcHRpb25zKVxyXG4gICAgfSxcclxuICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgb3B0aW9ucy5yZXNldCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0VmFsdWUoa2V5LCB2YWx1ZSwgb3B0aW9ucylcclxuICAgIH0sXHJcbiAgICBzYXZlQXJyYXk6IGZ1bmN0aW9uKGtleSwgYXJyID0gW10sIGlka2V5KXtcclxuICAgICAgICBpZihpZGtleSAhPT0gdW5kZWZpbmVkICYmIGlka2V5ICE9PSAnJyAmJiBrZXkgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBjYy51cGRhdGVWYWx1ZShpdGVtW2lka2V5XSwgaXRlbSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYy5zZXRWYWx1ZShrZXksIGFycik7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVmFsdWU6IGZ1bmN0aW9uKGtleSwgdmFsdWUsIG9wdGlvbnMgPSB7fSl7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0VmFsdWUoa2V5LCB2YWx1ZSwgb3B0aW9ucylcclxuICAgIH0sXHJcbiAgICBnZXRWYWx1ZTogIGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZS5nZXRWYWx1ZShrZXkpO1xyXG4gICAgfSxcclxuICAgIHNldFRpbWVyOiBmdW5jdGlvbiAoZm4sIGRlbGF5KSB7XHJcbiAgICAgICAgcmV0dXJuIHJhZi5yZXF1ZXN0VGltZW91dChmbiwgZGVsYXkpXHJcbiAgICB9LFxyXG4gICAgY2FuY2VsVGltZXI6IGZ1bmN0aW9uIChoYW5kbGUpIHtcclxuICAgICAgICByYWYuY2xlYXJSZXF1ZXN0VGltZW91dChoYW5kbGUpO1xyXG4gICAgfSxcclxuICAgIHJlcXVlc3Q6IGZ1bmN0aW9uIChwYXJhbXMgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiB4aHIuYWpheChwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmlmKElTX1dPUktFUil7XHJcbiAgICBkZWxldGUgY2Muc2VsZWN0O1xyXG4gICAgZGVsZXRlIGNjLmNyZWF0ZUVsZW1lbnQ7XHJcbiAgICBkZWxldGUgY2MuY3JlYXRlRWxlbWVudE5TO1xyXG59ZWxzZXtcclxuICAgIGxldCBsYXN0ID0gMFxyXG4gICAgbGV0IGZyYW1lVGlja2VyID0gZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIGNjLnNldFZhbHVlKCdmcmFtZScsIHRpbWVzdGFtcCwge2ltbWVkaWF0ZWx5OiB0cnVlfSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aW1lc3RhbXAgLSBsYXN0KTtcclxuICAgICAgICBsYXN0ID0gdGltZXN0YW1wO1xyXG4gICAgICAgIHJhZi5yZXF1ZXN0VGltZW91dChmcmFtZVRpY2tlciwgMTYpXHJcbiAgICB9O1xyXG4gICAgZnJhbWVUaWNrZXIoMCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYzsiLCJjb25zdCBJU19XT1JLRVIgPSBzZWxmLndpbmRvdyA9PT0gdW5kZWZpbmVkO1xyXG5jb25zdCBDT05URVhUID0gSVNfV09SS0VSID8gc2VsZiA6IHdpbmRvdztcclxuY29uc3QgY29tbW9uID0ge307XHJcblxyXG5jb21tb24ub2JqZWN0Zm9yRWFjaCA9IGZ1bmN0aW9uKG9iaixmbil7XHJcbiAgICBmb3IodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgZm4ob2JqW2tleV0sIGtleSwgb2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb21tb24ub2JqZWN0QXNzaWduID0gZnVuY3Rpb24odGFyZ2V0ID0ge30sIHNvdXJjZSl7XHJcbiAgICBmb3IobGV0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn07XHJcblxyXG5jb21tb24uY3JlYXRlSWQgPSBmdW5jdGlvbigpe1xyXG4gICAgZnVuY3Rpb24gczQoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcclxufTtcclxuXHJcbmNvbW1vbi5pc09iamVjdCA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICByZXR1cm4gKGl0ZW0hPT11bmRlZmluZWQgJiYgaXRlbSA9PT0gT2JqZWN0KGl0ZW0pICYmICEoaXRlbSBpbnN0YW5jZW9mIEFycmF5KSlcclxufTtcclxuXHJcbmNvbW1vbi5nZXRCcm93c2VyID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgaXNJRSA9IGZhbHNlO1xyXG4gICAgbGV0IGlzQ2hyb21lID0gZmFsc2U7XHJcbiAgICBsZXQgaXNPcGVyYSA9IGZhbHNlO1xyXG4gICAgaWYgKCghIUNPTlRFWFQub3ByICYmICEhb3ByLmFkZG9ucykgfHwgISFDT05URVhULm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignIE9QUi8nKSA+PSAwKSB7XHJcbiAgICAgICAgaXNPcGVyYSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuICdvcGVyYSc7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiAnZmlyZWZveCc7XHJcbiAgICB9XHJcbiAgICBpZiAoL2NvbnN0cnVjdG9yL2kudGVzdChDT05URVhULkhUTUxFbGVtZW50KSB8fCAoZnVuY3Rpb24gKHApIHtcclxuICAgICAgICByZXR1cm4gcC50b1N0cmluZygpID09PSBcIltvYmplY3QgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uXVwiO1xyXG4gICAgfSkoIUNPTlRFWFRbJ3NhZmFyaSddIHx8IHNhZmFyaS5wdXNoTm90aWZpY2F0aW9uKSkge1xyXG4gICAgICAgIHJldHVybiAnc2FmYXJpJztcclxuICAgIH1cclxuICAgIGlmIChmYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gb2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICghKCdyZW1vdmUnIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xyXG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0lFID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gJ2llJztcclxuICAgIH1cclxuICAgIGlmICghaXNJRSAmJiAhIUNPTlRFWFQuU3R5bGVNZWRpYSkge1xyXG4gICAgICAgIHJldHVybiAnZWRnZSc7XHJcbiAgICB9XHJcbiAgICBpZiAoISFDT05URVhULmNocm9tZSAmJiAhIUNPTlRFWFQuY2hyb21lLndlYnN0b3JlKSB7XHJcbiAgICAgICAgaXNDaHJvbWUgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgfVxyXG4gICAgaWYgKChpc0Nocm9tZSB8fCBpc09wZXJhKSAmJiAhIUNPTlRFWFQuQ1NTKSB7XHJcbiAgICAgICAgcmV0dXJuICdibGluayc7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb21tb24ucmVhZFZhbHVlID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMgPSB7fSl7XHJcbiAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlKG9wdGlvbnMpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29tbW9uLmdldFVybFZhciA9IGZ1bmN0aW9uIChrZXksIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgdmFyIHZhcnMgPSB7fTtcclxuICAgIHZhciBwYXJ0cyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1s/Jl0rKFtePSZdKyk9KFteJl0qKS9naSwgZnVuY3Rpb24gKG0sIGtleSwgdmFsdWUpIHtcclxuICAgICAgICB2YXJzW2tleV0gPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICh2YXJzW2tleV0gPT09IHVuZGVmaW5lZD8gZGVmYXVsdFZhbHVlOiB2YXJzW2tleV0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbW9uOyIsImNvbnN0IElTX1dPUktFUiA9IHNlbGYud2luZG93ID09PSB1bmRlZmluZWQ7XHJcbmNvbnN0IENPTlRFWFQgPSBJU19XT1JLRVIgPyBzZWxmIDogd2luZG93O1xyXG52YXIgcmFmID0ge1xyXG4gICAgcmVxdWVzdFRpbWVvdXQ6IGZ1bmN0aW9uIChmbiwgZGVsYXkpIHtcclxuICAgICAgICBpZiAoIUNPTlRFWFQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmbiwgZGVsYXkpO1xyXG5cclxuICAgICAgICB2YXIgc3RhcnQgPSBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICBoYW5kbGUgPSBuZXcgT2JqZWN0KCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxvb3AodGltZXN0YW1wKSB7XHJcbiAgICAgICAgICAgIChEYXRlLm5vdygpIC0gc3RhcnQpID49IGRlbGF5ID8gZm4odGltZXN0YW1wKSA6IGhhbmRsZS52YWx1ZSA9IENPTlRFWFQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGhhbmRsZS52YWx1ZSA9IENPTlRFWFQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJSZXF1ZXN0VGltZW91dDogZnVuY3Rpb24gKGhhbmRsZSkge1xyXG4gICAgICAgIENPTlRFWFQuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPyBDT05URVhULmNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZS52YWx1ZSk6Y2xlYXJUaW1lb3V0KGhhbmRsZSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByYWY7IiwiaW1wb3J0IGNvbW1vbiBmcm9tICcuLi9jb21tb24vY29tbW9uJ1xyXG52YXIgZG9tID0ge1xyXG4gICAgc2VsZWN0OiBmdW5jdGlvbihzZWxlY3Rvcil7XHJcbiAgICAgICAgaWYoc2VsZWN0b3I9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgX3NlbGVjdG9yID0gc2VsZWN0b3IuY2hhckF0KDApO1xyXG4gICAgICAgIGxldCBuYW1lID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIGxldCBkb21zID0gW107XHJcbiAgICAgICAgc3dpdGNoIChfc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGRvbXMgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgfHwgW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZG9tcztcclxuICAgIH0sXHJcbiAgICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAodGFnLCBpZCA9ICcnLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuXHJcbiAgICAgICAgbGV0IGVsZW1lbnRJZCA9IGlkIHx8ICh0YWcgKyAnXycgKyBjb21tb24uY3JlYXRlSWQoKSk7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgZWxlbWVudElkKTtcclxuXHJcbiAgICAgICAgc2V0dXBFbGVtZW50TWV0aG9kcyhlbGVtZW50LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2V0dXBFbGVtZW50TWV0aG9kcyhlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICBlbGVtZW50Ll9ldmVudExpc3RlbmVycyA9IG5ldyBNYXAoKTtcclxuICAgIGVsZW1lbnQuX2JvdW5kID0gbmV3IE1hcCgpO1xyXG4gICAgZWxlbWVudC5fbWVtb3J5ID0ge307XHJcblxyXG4gICAgZWxlbWVudC5hZGQgPSBmdW5jdGlvbiAodGFnLCBpZCwgb3B0aW9ucykge1xyXG4gICAgICAgIGxldCBjaGlsZCA9IGRvbS5jcmVhdGVFbGVtZW50KHRhZywgaWQsIG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZEVsZW1lbnQoY2hpbGQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmFkZEVsZW1lbnQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICAgICAgICByZXR1cm4gY2hpbGRcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5hZGRDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5nZXRBdHRyID0gZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5hdHRyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9zZXRFbGVtZW50KCdhdHRyJywga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuZ2V0TWVtb3J5ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVtb3J5O1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50Lm1lbW9yeSA9IGZ1bmN0aW9uKG9iail7XHJcbiAgICAgICAgdGhpcy5fbWVtb3J5ID0gb2JqO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmdldFByb3AgPSBmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50W2tleV07XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQucHJvcCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0RWxlbWVudCgncHJvcCcsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmNzcyA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG4gICAgICAgIHRoaXMuX3NldEVsZW1lbnQoJ2NzcycsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmJpbmQgPSBmdW5jdGlvbihrZXksIGZuKXtcclxuICAgICAgICBpZihrZXkpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLl9ib3VuZC5zZXQoa2V5LCBmbik7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnc3RvcmFnZV8nICsga2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgZWxlbWVudC51bmJpbmQgPSBmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLl9ib3VuZC5kZWxldGUoa2V5KTtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3N0b3JhZ2VfJyArIGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuX3JlYWN0ID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XHJcbiAgICAgICAgbGV0IGZuID0gdGhpcy5fYm91bmQuZ2V0KGtleSk7XHJcbiAgICAgICAgaWYoZm4pe1xyXG4gICAgICAgICAgICBpZihmbi5jYWxsKHRoaXMsIHZhbHVlLCB0aGlzLl9kYXRhKSA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bmJpbmQoa2V5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50Lm9uICA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZm4sIHRhZyA9ICcnKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGV2ZW50VGFnID0gZXZlbnROYW1lICsgdGFnO1xyXG4gICAgICAgIGxldCBldmVudEhhbmRsZXIgPSBlbGVtZW50Ll9ldmVudExpc3RlbmVycy5nZXQoZXZlbnRUYWcpO1xyXG4gICAgICAgIGlmKGV2ZW50SGFuZGxlcil7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuX2V2ZW50TGlzdGVuZXJzLmRlbGV0ZShldmVudFRhZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGZuKSB7XHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZihmbi5jYWxsKHNlbGYsIGUsIHNlbGYuX2RhdGEpID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZWxlbWVudC5fZXZlbnRMaXN0ZW5lcnMuc2V0KGV2ZW50VGFnLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuY29udGVudCA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IHN0cjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5yZW1vdmVTZWxmID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgaWYodGhpcy5yZW1vdmUpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQucmVtb3ZlQWxsQ2hpbGRyZW4gPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5fc2V0RWxlbWVudCA9IGZ1bmN0aW9uKHR5cGUsIGtleSAsIHZhbHVlKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgY29tbW9uLm9iamVjdGZvckVhY2goa2V5ICxmdW5jdGlvbiAoaXRlbSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmW3R5cGVdKGtleSwgaXRlbSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHYgPSBjb21tb24ucmVhZFZhbHVlKHZhbHVlKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Byb3AnOlxyXG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2F0dHInOlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGtleSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjc3MnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZVtrZXldID0gIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuaXNJblZpZXdwb3J0ID0gZnVuY3Rpb24gKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGxldCBvZmZzZXRYID0gb3B0aW9ucy5vZmZzZXRYIHx8IDA7XHJcbiAgICAgICAgbGV0IG9mZnNldFkgPSBvcHRpb25zLm9mZnNldFkgfHwgMDtcclxuICAgICAgICBsZXQge3gsIHksIHdpZHRoLCBoZWlnaHR9ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgLy9JRSBub3Qgc3VwcG9ydCBib3R0b20gcmlnaHRcclxuICAgICAgICBsZXQgeDIgPSB4ICsgd2lkdGg7XHJcbiAgICAgICAgbGV0IHkyID0geSArIGhlaWdodDtcclxuICAgICAgICBsZXQgaW5uZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGxldCBpbm5lckhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICByZXR1cm4gISh4MiA8PSAoMCArIG9mZnNldFgpfHwgeCA+PSAoaW5uZXJXaWR0aCAtIG9mZnNldFgpIHx8IHkyIDw9ICgwICsgb2Zmc2V0WSkgfHwgeSA+PSAoaW5uZXJIZWlnaHQgLSBvZmZzZXRZKSlcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbTsiLCJpbXBvcnQgY29tbW9uIGZyb20gJy4uL2NvbW1vbi9jb21tb24nO1xyXG5cclxudmFyIHN0b3JhZ2UgPSB7XHJcbiAgICBkYXRhTWFwOiBuZXcgTWFwKCksXHJcbiAgICB0aW1lck1hcDogIG5ldyBNYXAoKSxcclxuICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBkYXRhTWFwID0gdGhpcy5kYXRhTWFwO1xyXG4gICAgICAgIGxldCB7cmVzZXR9ID0gb3B0aW9ucztcclxuICAgICAgICBsZXQgc2hvdWxkUmVhY3QgPSBmYWxzZTtcclxuICAgICAgICBsZXQgb2xkVmFsdWUgPSBkYXRhTWFwLmdldChrZXkpO1xyXG4gICAgICAgIGlmKGNvbW1vbi5pc09iamVjdCh2YWx1ZSkgJiYgY29tbW9uLmlzT2JqZWN0KG9sZFZhbHVlKSAmJiByZXNldCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb21tb24ub2JqZWN0Zm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24gKGl0ZW0sIGtleSwgb2JqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG91bGRSZWFjdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvYmpba2V5XSA9IHZhbHVlW2tleV1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBzaG91bGRSZWFjdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGRhdGFNYXAuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gZGF0YU1hcC5nZXQoa2V5KTtcclxuXHJcbiAgICAgICAgaWYoc2hvdWxkUmVhY3QpIHtcclxuICAgICAgICAgICB0aGlzLmJyb2FkY2FzdChrZXksIG5ld1ZhbHVlLCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0sXHJcbiAgICBicm9hZGNhc3Q6IGZ1bmN0aW9uKGtleSwgbmV3VmFsdWUsIG9wdGlvbnMgPSB7fSl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCB0aW1lciA9IHRoaXMudGltZXJNYXAuZ2V0KGtleSk7XHJcblxyXG4gICAgICAgIGlmICh0aW1lcikge1xyXG4gICAgICAgICAgICBjYy5jYW5jZWxUaW1lcih0aW1lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aW1lciA9IGNjLnNldFRpbWVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGRvbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdG9yYWdlXycgKyBrZXkpIHx8IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBkb20gPSBkb21zW2ldO1xyXG4gICAgICAgICAgICAgICAgZG9tLl9yZWFjdCAmJiBkb20uX3JlYWN0KGtleSwgbmV3VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYudGltZXJNYXAuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgfSwgb3B0aW9ucy5pbW1lZGlhdGVseT8gMDogMTApO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyTWFwLnNldChrZXksIHRpbWVyKTtcclxuICAgIH0sXHJcbiAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFNYXAuZ2V0KGtleSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlOyIsImNvbnN0IHhociA9IHtcclxuICAgIGFqYXg6IGZ1bmN0aW9uIChwYXJhbXMgPSB7fSkge1xyXG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBsZXQge3VybCwgbWV0aG9kLCBkYXRhLCBhc3luYywgeGhyLCBjb250ZW50VHlwZSwgZGF0YVR5cGUsIGRvbmUsIGZhaWx9ID0gcGFyYW1zIHx8IHt9O1xyXG4gICAgICAgICAgICBsZXQge2hlYWRlciwgb25Qcm9ncmVzcywgYmVmb3JlU2VuZH0gPSBwYXJhbXM7XHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHJlcXVlc3Qub3BlbigobWV0aG9kIHx8ICdHRVQnKSwgdXJsLCBhc3luYyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFzeW5jKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiAoaGVhZGVyIHx8IHt9KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKChoZWFkZXIgfHwge30pLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCBoZWFkZXJba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY2MuZ2V0VmFsdWUoJ0F1dGhvcml6YXRpb24nKSl7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBjYy5nZXRWYWx1ZSgnQXV0aG9yaXphdGlvbicpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lICYmIGRvbmUocGFyc2VEYXRhKHJlcXVlc3QucmVzcG9uc2VUZXh0KSwgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwYXJzZURhdGEocmVxdWVzdC5yZXNwb25zZVRleHQpLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbCAmJiBmYWlsKHBhcnNlRGF0YShyZXF1ZXN0LnJlc3BvbnNlVGV4dCksIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChwYXJzZURhdGEocmVxdWVzdC5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGZhaWwgJiYgZmFpbChwYXJzZURhdGEocmVxdWVzdC5yZXNwb25zZVRleHQpLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChwYXJzZURhdGEocmVxdWVzdC5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3QudXBsb2FkLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHAgPSBNYXRoLmZsb29yKGUubG9hZGVkIC8gZS50b3RhbCAqIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzICYmIG9uUHJvZ3Jlc3MocCwgZSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsZXQgX2RhdGE7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZGF0YVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIF9kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2pzb24nOlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsIGNvbnRlbnRUeXBlID09PSB1bmRlZmluZWQgPyBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIiA6IGNvbnRlbnRUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICBfZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBiZWZvcmVTZW5kICYmIGJlZm9yZVNlbmQocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoX2RhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBwYXJzZURhdGEoZGF0YSkge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEgfHwgJycpXHJcbiAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHhocjtcclxuIiwiaW1wb3J0IHNlcnZpY2VXb3JrZXIgZnJvbSAnLi9saWIvc2VydmljZVdvcmtlcic7XHJcbmltcG9ydCBpbmRleCBmcm9tICcuL2FwcC9pbmRleCc7XHJcblxyXG5cclxuc2VydmljZVdvcmtlcigpO1xyXG5pbmRleCgpOyIsImltcG9ydCBjYyBmcm9tIFwibnBtLWNjanMtYXlcIjtcclxuXHJcbmZ1bmN0aW9uIGluZGV4KCkge1xyXG4gICAgaW5kZXguc2V0dXBFbnYoKTtcclxuICAgIGluZGV4LnNldHVwUm9vdEVsZW1lbnQoKTtcclxufVxyXG5cclxuXHJcbmluZGV4LnNldHVwRW52ID0gZnVuY3Rpb24gKCl7XHJcbiAgICBjYy5zZXRWYWx1ZSgndmlld3BvcnQnLCB7d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodH0pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy51cGRhdGVWYWx1ZSgndmlld3BvcnQnLCB7d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodH0pO1xyXG4gICAgfSk7XHJcblxyXG59O1xyXG5cclxuaW5kZXguc2V0dXBSb290RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCByb290ID0gY2Muc2VsZWN0KCcjYm9keScpO1xyXG4gICAgbGV0IG1haW5Db250YWluZXIgPSBjYy5jcmVhdGVFbGVtZW50KCdkaXYnLCAndGVzdCcpXHJcbiAgICAgICAgLmFkZENsYXNzKCdtYWluLWNvbnRhaW5lcicpO1xyXG4gICAgcm9vdC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcclxuXHJcbiAgICBpbmRleC5zZXR1cENvbnRlbnRTZWN0aW9uKG1haW5Db250YWluZXIpO1xyXG4gICAgaW5kZXguc2V0dXBMaXN0U2VjdGlvbihtYWluQ29udGFpbmVyKTtcclxufTtcclxuXHJcbmluZGV4LnNldHVwTGlzdFNlY3Rpb24gPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XHJcbiAgICBsZXQgbGlzdENvbnRhaW5lciA9IGNvbnRhaW5lci5hZGQoJ3NlY3Rpb24nKS5hZGRDbGFzcygnY29udGFpbmVyJylcclxuICAgICAgICAuYmluZCgnY3VycmVudFRlbXAnLCBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgIGQgPyB0aGlzLmFkZENsYXNzKCdsaXN0LXRyYW5zZm9ybScpOiB0aGlzLnJlbW92ZUNsYXNzKCdsaXN0LXRyYW5zZm9ybScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIGxldCBsaXN0SGVhZGVyID0gbGlzdENvbnRhaW5lci5hZGQoJ2RpdicpLmFkZENsYXNzKCdsaXN0LWhlYWRlcicpO1xyXG4gICAgbGlzdEhlYWRlci5hZGQoJ2lucHV0JykuYWRkQ2xhc3MoJ2lucHV0LXNlYXJjaCcpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJ1NlYXJjaC4uLicpO1xyXG5cclxuICAgIGxldCBsaXN0ID0gbGlzdENvbnRhaW5lci5hZGQoJ2RpdicpLmFkZENsYXNzKCdsaXN0Jyk7XHJcblxyXG4gICAgLy8gR0VORVJBVEUgU09NRSBNT0NLVVA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpKyspIHtcclxuICAgICAgICBsZXQgdGVtcCA9IGxpc3QuYWRkKCdkaXYnKTtcclxuICAgICAgICB0ZW1wLmFkZCgnc3Ryb25nJykuY29udGVudCgnVG9waWMnKTtcclxuICAgICAgICB0ZW1wLmFkZCgncCcpLmNvbnRlbnQoJ1NvbWV0aGluZyBibGFoIGJsYWggYmxhaCBibGFoIGJsYWggYmxhaCBibGFoIGJsYWggYmxhaCBibGFoIGJsYWgnKVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY2Muc2V0VmFsdWUoJ2N1cnJlbnRUZW1wJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuaW5kZXguc2V0dXBDb250ZW50U2VjdGlvbiA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcclxuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gY29udGFpbmVyLmFkZCgnc2VjdGlvbicpLmFkZENsYXNzKCdjb250YWluZXInKVxyXG4gICAgICAgIC5iaW5kKCdjdXJyZW50VGVtcCcsIGZ1bmN0aW9uIChkKSB7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgbGV0IGNvbnRlbnRIZWFkZXIgPSBjb250ZW50Q29udGFpbmVyLmFkZCgnZGl2JykuYWRkQ2xhc3MoJ2xpc3QtaGVhZGVyJyk7XHJcbiAgICBjb250ZW50SGVhZGVyLmFkZCgnaW5wdXQnKS5hZGRDbGFzcygnaW5wdXQtdGl0bGUnKS5hdHRyKCdwbGFjZWhvbGRlcicsICdUaXRsZS4uLicpO1xyXG4gICAgbGV0IHRleHREaXYgPSBjb250ZW50SGVhZGVyLmFkZCgnZGl2JylcclxuICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgdGV4dERpdi5hZGQoJ3RleHRhcmVhJykuYWRkQ2xhc3MoJ3RleHRhcmVhJykuYXR0cigncGxhY2Vob2xkZXInLCAnRW1haWwgY29udGVudCcpXHJcbiAgICAgICAgLm9uKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHJlZ2V4ID0gLy0tListLS9nO1xyXG4gICAgICAgICAgICBsZXQgZXNjYXBlID0vPC4rPi4qPFxcLy4rPnw8Lis+fDxcXC8uKz4vZztcclxuICAgICAgICAgICAgbGV0IHZhcnMgPSB7fTtcclxuICAgICAgICAgICAgbGV0IGJnVGV4dCA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgIGJnVGV4dCA9IGJnVGV4dC5yZXBsYWNlKC88fD4vZywgJ34nKTtcclxuICAgICAgICAgICAgLy8gKGJnVGV4dC5tYXRjaChlc2NhcGUpIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uIChzdHIpIHtcclxuICAgICAgICAgICAgLy8gICAgIGJnVGV4dCA9IGJnVGV4dC5yZXBsYWNlKC88fD4vZywgJ34nKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIChiZ1RleHQubWF0Y2gocmVnZXgpIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uIChzdHIpIHtcclxuICAgICAgICAgICAgICAgIHZhcnNbc3RyLnJlcGxhY2UoLy0tL2csICcnKV0gPSAnJztcclxuICAgICAgICAgICAgICAgIGJnVGV4dCA9IGJnVGV4dC5yZXBsYWNlKHN0ciwgYDxzcGFuIGNsYXNzPVwidmFyLXN0clwiPiR7c3RyfTwvc3Bhbj5gKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFycyk7XHJcbiAgICAgICAgICAgIHRleHRCZy5pbm5lckhUTUwgPSAoYmdUZXh0KTtcclxuICAgICAgICAgICAgY2Muc2V0VmFsdWUoJ2ZpZWxkcycsIHZhcnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgbGV0IHRleHRCZyA9IHRleHREaXYuYWRkKCdwcmUnKS5hZGRDbGFzcygndGV4dGFyZWEtYmFja2dyb3VuZCcpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiLCJmdW5jdGlvbiBzZXR1cFNlcnZpY2VXb3JrZXIoKSB7XHJcbiAgICBpZignc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2Ugd29ya2VyIHN1cHBvcnRlZCEnKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZS5qcycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZSB3b3JrZXIgaXMgcmVnaXN0ZXJlZC4nKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHJlZ2lzdGVyIHNlcnZpY2Ugd29ya2VyLicsIGUpXHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignU2VydmljZSB3b3JrZXIgaXMgbm90IHN1cHBvcnRlZC4nKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXR1cFNlcnZpY2VXb3JrZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==