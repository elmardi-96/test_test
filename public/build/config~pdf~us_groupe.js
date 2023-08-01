(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./assets/css/plugins/switchery/switchery.css":
/*!****************************************************!*\
  !*** ./assets/css/plugins/switchery/switchery.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/plugins/switchery/switchery.js":
/*!**************************************************!*\
  !*** ./assets/js/plugins/switchery/switchery.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.string.sub.js */ "./node_modules/core-js/modules/es.string.sub.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
(function () {
  function require(name) {
    var module = require.modules[name];
    if (!module) throw new Error('failed to require "' + name + '"');
    if (!("exports" in module) && typeof module.definition === "function") {
      module.client = module.component = true;
      module.definition.call(this, module.exports = {}, module);
      delete module.definition;
    }
    return module.exports;
  }
  require.loader = "component";
  require.helper = {};
  require.helper.semVerSort = function (a, b) {
    var aArray = a.version.split(".");
    var bArray = b.version.split(".");
    for (var i = 0; i < aArray.length; ++i) {
      var aInt = parseInt(aArray[i], 10);
      var bInt = parseInt(bArray[i], 10);
      if (aInt === bInt) {
        var aLex = aArray[i].substr(("" + aInt).length);
        var bLex = bArray[i].substr(("" + bInt).length);
        if (aLex === "" && bLex !== "") return 1;
        if (aLex !== "" && bLex === "") return -1;
        if (aLex !== "" && bLex !== "") return aLex > bLex ? 1 : -1;
        continue;
      } else if (aInt > bInt) {
        return 1;
      } else {
        return -1;
      }
    }
    return 0;
  };
  require.latest = function (name, returnPath) {
    function showError(name) {
      throw new Error('failed to find latest module of "' + name + '"');
    }
    var versionRegexp = /(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/;
    var remoteRegexp = /(.*)~(.*)/;
    if (!remoteRegexp.test(name)) showError(name);
    var moduleNames = Object.keys(require.modules);
    var semVerCandidates = [];
    var otherCandidates = [];
    for (var i = 0; i < moduleNames.length; i++) {
      var moduleName = moduleNames[i];
      if (new RegExp(name + "@").test(moduleName)) {
        var version = moduleName.substr(name.length + 1);
        var semVerMatch = versionRegexp.exec(moduleName);
        if (semVerMatch != null) {
          semVerCandidates.push({
            version: version,
            name: moduleName
          });
        } else {
          otherCandidates.push({
            version: version,
            name: moduleName
          });
        }
      }
    }
    if (semVerCandidates.concat(otherCandidates).length === 0) {
      showError(name);
    }
    if (semVerCandidates.length > 0) {
      var module = semVerCandidates.sort(require.helper.semVerSort).pop().name;
      if (returnPath === true) {
        return module;
      }
      return require(module);
    }
    var module = otherCandidates.sort(function (a, b) {
      return a.name > b.name;
    })[0].name;
    if (returnPath === true) {
      return module;
    }
    return require(module);
  };
  require.modules = {};
  require.register = function (name, definition) {
    require.modules[name] = {
      definition: definition
    };
  };
  require.define = function (name, exports) {
    require.modules[name] = {
      exports: exports
    };
  };
  require.register("abpetkov~transitionize@0.0.3", function (exports, module) {
    module.exports = Transitionize;
    function Transitionize(element, props) {
      if (!(this instanceof Transitionize)) return new Transitionize(element, props);
      this.element = element;
      this.props = props || {};
      this.init();
    }
    Transitionize.prototype.isSafari = function () {
      return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    };
    Transitionize.prototype.init = function () {
      var transitions = [];
      for (var key in this.props) {
        transitions.push(key + " " + this.props[key]);
      }
      this.element.style.transition = transitions.join(", ");
      if (this.isSafari()) this.element.style.webkitTransition = transitions.join(", ");
    };
  });
  require.register("ftlabs~fastclick@v0.6.11", function (exports, module) {
    function FastClick(layer) {
      "use strict";

      var oldOnClick,
        self = this;
      this.trackingClick = false;
      this.trackingClickStart = 0;
      this.targetElement = null;
      this.touchStartX = 0;
      this.touchStartY = 0;
      this.lastTouchIdentifier = 0;
      this.touchBoundary = 10;
      this.layer = layer;
      if (!layer || !layer.nodeType) {
        throw new TypeError("Layer must be a document node");
      }
      this.onClick = function () {
        return FastClick.prototype.onClick.apply(self, arguments);
      };
      this.onMouse = function () {
        return FastClick.prototype.onMouse.apply(self, arguments);
      };
      this.onTouchStart = function () {
        return FastClick.prototype.onTouchStart.apply(self, arguments);
      };
      this.onTouchMove = function () {
        return FastClick.prototype.onTouchMove.apply(self, arguments);
      };
      this.onTouchEnd = function () {
        return FastClick.prototype.onTouchEnd.apply(self, arguments);
      };
      this.onTouchCancel = function () {
        return FastClick.prototype.onTouchCancel.apply(self, arguments);
      };
      if (FastClick.notNeeded(layer)) {
        return;
      }
      if (this.deviceIsAndroid) {
        layer.addEventListener("mouseover", this.onMouse, true);
        layer.addEventListener("mousedown", this.onMouse, true);
        layer.addEventListener("mouseup", this.onMouse, true);
      }
      layer.addEventListener("click", this.onClick, true);
      layer.addEventListener("touchstart", this.onTouchStart, false);
      layer.addEventListener("touchmove", this.onTouchMove, false);
      layer.addEventListener("touchend", this.onTouchEnd, false);
      layer.addEventListener("touchcancel", this.onTouchCancel, false);
      if (!Event.prototype.stopImmediatePropagation) {
        layer.removeEventListener = function (type, callback, capture) {
          var rmv = Node.prototype.removeEventListener;
          if (type === "click") {
            rmv.call(layer, type, callback.hijacked || callback, capture);
          } else {
            rmv.call(layer, type, callback, capture);
          }
        };
        layer.addEventListener = function (type, callback, capture) {
          var adv = Node.prototype.addEventListener;
          if (type === "click") {
            adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
              if (!event.propagationStopped) {
                callback(event);
              }
            }), capture);
          } else {
            adv.call(layer, type, callback, capture);
          }
        };
      }
      if (typeof layer.onclick === "function") {
        oldOnClick = layer.onclick;
        layer.addEventListener("click", function (event) {
          oldOnClick(event);
        }, false);
        layer.onclick = null;
      }
    }
    FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0;
    FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);
    FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);
    FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
    FastClick.prototype.needsClick = function (target) {
      "use strict";

      switch (target.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
          if (target.disabled) {
            return true;
          }
          break;
        case "input":
          if (this.deviceIsIOS && target.type === "file" || target.disabled) {
            return true;
          }
          break;
        case "label":
        case "video":
          return true;
      }
      return /\bneedsclick\b/.test(target.className);
    };
    FastClick.prototype.needsFocus = function (target) {
      "use strict";

      switch (target.nodeName.toLowerCase()) {
        case "textarea":
          return true;
        case "select":
          return !this.deviceIsAndroid;
        case "input":
          switch (target.type) {
            case "button":
            case "checkbox":
            case "file":
            case "image":
            case "radio":
            case "submit":
              return false;
          }
          return !target.disabled && !target.readOnly;
        default:
          return /\bneedsfocus\b/.test(target.className);
      }
    };
    FastClick.prototype.sendClick = function (targetElement, event) {
      "use strict";

      var clickEvent, touch;
      if (document.activeElement && document.activeElement !== targetElement) {
        document.activeElement.blur();
      }
      touch = event.changedTouches[0];
      clickEvent = document.createEvent("MouseEvents");
      clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
      clickEvent.forwardedTouchEvent = true;
      targetElement.dispatchEvent(clickEvent);
    };
    FastClick.prototype.determineEventType = function (targetElement) {
      "use strict";

      if (this.deviceIsAndroid && targetElement.tagName.toLowerCase() === "select") {
        return "mousedown";
      }
      return "click";
    };
    FastClick.prototype.focus = function (targetElement) {
      "use strict";

      var length;
      if (this.deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf("date") !== 0 && targetElement.type !== "time") {
        length = targetElement.value.length;
        targetElement.setSelectionRange(length, length);
      } else {
        targetElement.focus();
      }
    };
    FastClick.prototype.updateScrollParent = function (targetElement) {
      "use strict";

      var scrollParent, parentElement;
      scrollParent = targetElement.fastClickScrollParent;
      if (!scrollParent || !scrollParent.contains(targetElement)) {
        parentElement = targetElement;
        do {
          if (parentElement.scrollHeight > parentElement.offsetHeight) {
            scrollParent = parentElement;
            targetElement.fastClickScrollParent = parentElement;
            break;
          }
          parentElement = parentElement.parentElement;
        } while (parentElement);
      }
      if (scrollParent) {
        scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
      }
    };
    FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {
      "use strict";

      if (eventTarget.nodeType === Node.TEXT_NODE) {
        return eventTarget.parentNode;
      }
      return eventTarget;
    };
    FastClick.prototype.onTouchStart = function (event) {
      "use strict";

      var targetElement, touch, selection;
      if (event.targetTouches.length > 1) {
        return true;
      }
      targetElement = this.getTargetElementFromEventTarget(event.target);
      touch = event.targetTouches[0];
      if (this.deviceIsIOS) {
        selection = window.getSelection();
        if (selection.rangeCount && !selection.isCollapsed) {
          return true;
        }
        if (!this.deviceIsIOS4) {
          if (touch.identifier === this.lastTouchIdentifier) {
            event.preventDefault();
            return false;
          }
          this.lastTouchIdentifier = touch.identifier;
          this.updateScrollParent(targetElement);
        }
      }
      this.trackingClick = true;
      this.trackingClickStart = event.timeStamp;
      this.targetElement = targetElement;
      this.touchStartX = touch.pageX;
      this.touchStartY = touch.pageY;
      if (event.timeStamp - this.lastClickTime < 200) {
        event.preventDefault();
      }
      return true;
    };
    FastClick.prototype.touchHasMoved = function (event) {
      "use strict";

      var touch = event.changedTouches[0],
        boundary = this.touchBoundary;
      if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
        return true;
      }
      return false;
    };
    FastClick.prototype.onTouchMove = function (event) {
      "use strict";

      if (!this.trackingClick) {
        return true;
      }
      if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
        this.trackingClick = false;
        this.targetElement = null;
      }
      return true;
    };
    FastClick.prototype.findControl = function (labelElement) {
      "use strict";

      if (labelElement.control !== undefined) {
        return labelElement.control;
      }
      if (labelElement.htmlFor) {
        return document.getElementById(labelElement.htmlFor);
      }
      return labelElement.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
    };
    FastClick.prototype.onTouchEnd = function (event) {
      "use strict";

      var forElement,
        trackingClickStart,
        targetTagName,
        scrollParent,
        touch,
        targetElement = this.targetElement;
      if (!this.trackingClick) {
        return true;
      }
      if (event.timeStamp - this.lastClickTime < 200) {
        this.cancelNextClick = true;
        return true;
      }
      this.cancelNextClick = false;
      this.lastClickTime = event.timeStamp;
      trackingClickStart = this.trackingClickStart;
      this.trackingClick = false;
      this.trackingClickStart = 0;
      if (this.deviceIsIOSWithBadTarget) {
        touch = event.changedTouches[0];
        targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
        targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
      }
      targetTagName = targetElement.tagName.toLowerCase();
      if (targetTagName === "label") {
        forElement = this.findControl(targetElement);
        if (forElement) {
          this.focus(targetElement);
          if (this.deviceIsAndroid) {
            return false;
          }
          targetElement = forElement;
        }
      } else if (this.needsFocus(targetElement)) {
        if (event.timeStamp - trackingClickStart > 100 || this.deviceIsIOS && window.top !== window && targetTagName === "input") {
          this.targetElement = null;
          return false;
        }
        this.focus(targetElement);
        if (!this.deviceIsIOS4 || targetTagName !== "select") {
          this.targetElement = null;
          event.preventDefault();
        }
        return false;
      }
      if (this.deviceIsIOS && !this.deviceIsIOS4) {
        scrollParent = targetElement.fastClickScrollParent;
        if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
          return true;
        }
      }
      if (!this.needsClick(targetElement)) {
        event.preventDefault();
        this.sendClick(targetElement, event);
      }
      return false;
    };
    FastClick.prototype.onTouchCancel = function () {
      "use strict";

      this.trackingClick = false;
      this.targetElement = null;
    };
    FastClick.prototype.onMouse = function (event) {
      "use strict";

      if (!this.targetElement) {
        return true;
      }
      if (event.forwardedTouchEvent) {
        return true;
      }
      if (!event.cancelable) {
        return true;
      }
      if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
        if (event.stopImmediatePropagation) {
          event.stopImmediatePropagation();
        } else {
          event.propagationStopped = true;
        }
        event.stopPropagation();
        event.preventDefault();
        return false;
      }
      return true;
    };
    FastClick.prototype.onClick = function (event) {
      "use strict";

      var permitted;
      if (this.trackingClick) {
        this.targetElement = null;
        this.trackingClick = false;
        return true;
      }
      if (event.target.type === "submit" && event.detail === 0) {
        return true;
      }
      permitted = this.onMouse(event);
      if (!permitted) {
        this.targetElement = null;
      }
      return permitted;
    };
    FastClick.prototype.destroy = function () {
      "use strict";

      var layer = this.layer;
      if (this.deviceIsAndroid) {
        layer.removeEventListener("mouseover", this.onMouse, true);
        layer.removeEventListener("mousedown", this.onMouse, true);
        layer.removeEventListener("mouseup", this.onMouse, true);
      }
      layer.removeEventListener("click", this.onClick, true);
      layer.removeEventListener("touchstart", this.onTouchStart, false);
      layer.removeEventListener("touchmove", this.onTouchMove, false);
      layer.removeEventListener("touchend", this.onTouchEnd, false);
      layer.removeEventListener("touchcancel", this.onTouchCancel, false);
    };
    FastClick.notNeeded = function (layer) {
      "use strict";

      var metaViewport;
      var chromeVersion;
      if (typeof window.ontouchstart === "undefined") {
        return true;
      }
      chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
      if (chromeVersion) {
        if (FastClick.prototype.deviceIsAndroid) {
          metaViewport = document.querySelector("meta[name=viewport]");
          if (metaViewport) {
            if (metaViewport.content.indexOf("user-scalable=no") !== -1) {
              return true;
            }
            if (chromeVersion > 31 && window.innerWidth <= window.screen.width) {
              return true;
            }
          }
        } else {
          return true;
        }
      }
      if (layer.style.msTouchAction === "none") {
        return true;
      }
      return false;
    };
    FastClick.attach = function (layer) {
      "use strict";

      return new FastClick(layer);
    };
    if (true) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        "use strict";

        return FastClick;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
  });
  require.register("component~indexof@0.0.3", function (exports, module) {
    module.exports = function (arr, obj) {
      if (arr.indexOf) return arr.indexOf(obj);
      for (var i = 0; i < arr.length; ++i) {
        if (arr[i] === obj) return i;
      }
      return -1;
    };
  });
  require.register("component~classes@1.2.1", function (exports, module) {
    var index = require("component~indexof@0.0.3");
    var re = /\s+/;
    var toString = Object.prototype.toString;
    module.exports = function (el) {
      return new ClassList(el);
    };
    function ClassList(el) {
      if (!el) throw new Error("A DOM element reference is required");
      this.el = el;
      this.list = el.classList;
    }
    ClassList.prototype.add = function (name) {
      if (this.list) {
        this.list.add(name);
        return this;
      }
      var arr = this.array();
      var i = index(arr, name);
      if (!~i) arr.push(name);
      this.el.className = arr.join(" ");
      return this;
    };
    ClassList.prototype.remove = function (name) {
      if ("[object RegExp]" == toString.call(name)) {
        return this.removeMatching(name);
      }
      if (this.list) {
        this.list.remove(name);
        return this;
      }
      var arr = this.array();
      var i = index(arr, name);
      if (~i) arr.splice(i, 1);
      this.el.className = arr.join(" ");
      return this;
    };
    ClassList.prototype.removeMatching = function (re) {
      var arr = this.array();
      for (var i = 0; i < arr.length; i++) {
        if (re.test(arr[i])) {
          this.remove(arr[i]);
        }
      }
      return this;
    };
    ClassList.prototype.toggle = function (name, force) {
      if (this.list) {
        if ("undefined" !== typeof force) {
          if (force !== this.list.toggle(name, force)) {
            this.list.toggle(name);
          }
        } else {
          this.list.toggle(name);
        }
        return this;
      }
      if ("undefined" !== typeof force) {
        if (!force) {
          this.remove(name);
        } else {
          this.add(name);
        }
      } else {
        if (this.has(name)) {
          this.remove(name);
        } else {
          this.add(name);
        }
      }
      return this;
    };
    ClassList.prototype.array = function () {
      var str = this.el.className.replace(/^\s+|\s+$/g, "");
      var arr = str.split(re);
      if ("" === arr[0]) arr.shift();
      return arr;
    };
    ClassList.prototype.has = ClassList.prototype.contains = function (name) {
      return this.list ? this.list.contains(name) : !!~index(this.array(), name);
    };
  });
  require.register("component~event@0.1.4", function (exports, module) {
    var bind = window.addEventListener ? "addEventListener" : "attachEvent",
      unbind = window.removeEventListener ? "removeEventListener" : "detachEvent",
      prefix = bind !== "addEventListener" ? "on" : "";
    exports.bind = function (el, type, fn, capture) {
      el[bind](prefix + type, fn, capture || false);
      return fn;
    };
    exports.unbind = function (el, type, fn, capture) {
      el[unbind](prefix + type, fn, capture || false);
      return fn;
    };
  });
  require.register("component~query@0.0.3", function (exports, module) {
    function one(selector, el) {
      return el.querySelector(selector);
    }
    exports = module.exports = function (selector, el) {
      el = el || document;
      return one(selector, el);
    };
    exports.all = function (selector, el) {
      el = el || document;
      return el.querySelectorAll(selector);
    };
    exports.engine = function (obj) {
      if (!obj.one) throw new Error(".one callback required");
      if (!obj.all) throw new Error(".all callback required");
      one = obj.one;
      exports.all = obj.all;
      return exports;
    };
  });
  require.register("component~matches-selector@0.1.5", function (exports, module) {
    var query = require("component~query@0.0.3");
    var proto = Element.prototype;
    var vendor = proto.matches || proto.webkitMatchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector;
    module.exports = match;
    function match(el, selector) {
      if (!el || el.nodeType !== 1) return false;
      if (vendor) return vendor.call(el, selector);
      var nodes = query.all(selector, el.parentNode);
      for (var i = 0; i < nodes.length; ++i) {
        if (nodes[i] == el) return true;
      }
      return false;
    }
  });
  require.register("component~closest@0.1.4", function (exports, module) {
    var matches = require("component~matches-selector@0.1.5");
    module.exports = function (element, selector, checkYoSelf, root) {
      element = checkYoSelf ? {
        parentNode: element
      } : element;
      root = root || document;
      while ((element = element.parentNode) && element !== document) {
        if (matches(element, selector)) return element;
        if (element === root) return;
      }
    };
  });
  require.register("component~delegate@0.2.3", function (exports, module) {
    var closest = require("component~closest@0.1.4"),
      event = require("component~event@0.1.4");
    exports.bind = function (el, selector, type, fn, capture) {
      return event.bind(el, type, function (e) {
        var target = e.target || e.srcElement;
        e.delegateTarget = closest(target, selector, true, el);
        if (e.delegateTarget) fn.call(el, e);
      }, capture);
    };
    exports.unbind = function (el, type, fn, capture) {
      event.unbind(el, type, fn, capture);
    };
  });
  require.register("component~events@1.0.9", function (exports, module) {
    var events = require("component~event@0.1.4");
    var delegate = require("component~delegate@0.2.3");
    module.exports = Events;
    function Events(el, obj) {
      if (!(this instanceof Events)) return new Events(el, obj);
      if (!el) throw new Error("element required");
      if (!obj) throw new Error("object required");
      this.el = el;
      this.obj = obj;
      this._events = {};
    }
    Events.prototype.sub = function (event, method, cb) {
      this._events[event] = this._events[event] || {};
      this._events[event][method] = cb;
    };
    Events.prototype.bind = function (event, method) {
      var e = parse(event);
      var el = this.el;
      var obj = this.obj;
      var name = e.name;
      var method = method || "on" + name;
      var args = [].slice.call(arguments, 2);
      function cb() {
        var a = [].slice.call(arguments).concat(args);
        obj[method].apply(obj, a);
      }
      if (e.selector) {
        cb = delegate.bind(el, e.selector, name, cb);
      } else {
        events.bind(el, name, cb);
      }
      this.sub(name, method, cb);
      return cb;
    };
    Events.prototype.unbind = function (event, method) {
      if (0 == arguments.length) return this.unbindAll();
      if (1 == arguments.length) return this.unbindAllOf(event);
      var bindings = this._events[event];
      if (!bindings) return;
      var cb = bindings[method];
      if (!cb) return;
      events.unbind(this.el, event, cb);
    };
    Events.prototype.unbindAll = function () {
      for (var event in this._events) {
        this.unbindAllOf(event);
      }
    };
    Events.prototype.unbindAllOf = function (event) {
      var bindings = this._events[event];
      if (!bindings) return;
      for (var method in bindings) {
        this.unbind(event, method);
      }
    };
    function parse(event) {
      var parts = event.split(/ +/);
      return {
        name: parts.shift(),
        selector: parts.join(" ")
      };
    }
  });
  require.register("switchery", function (exports, module) {
    var transitionize = require("abpetkov~transitionize@0.0.3"),
      fastclick = require("ftlabs~fastclick@v0.6.11"),
      classes = require("component~classes@1.2.1"),
      events = require("component~events@1.0.9");
    module.exports = Switchery;
    var defaults = {
      color: "#64bd63",
      secondaryColor: "#dfdfdf",
      jackColor: "#fff",
      jackSecondaryColor: null,
      className: "switchery",
      disabled: false,
      disabledOpacity: .5,
      speed: "0.4s",
      size: "default"
    };
    function Switchery(element, options) {
      if (!(this instanceof Switchery)) return new Switchery(element, options);
      this.element = element;
      this.options = options || {};
      for (var i in defaults) {
        if (this.options[i] == null) {
          this.options[i] = defaults[i];
        }
      }
      if (this.element != null && this.element.type == "checkbox") this.init();
      if (this.isDisabled() === true) this.disable();
    }
    Switchery.prototype.hide = function () {
      this.element.style.display = "none";
    };
    Switchery.prototype.show = function () {
      var switcher = this.create();
      this.insertAfter(this.element, switcher);
    };
    Switchery.prototype.create = function () {
      this.switcher = document.createElement("span");
      this.jack = document.createElement("small");
      this.switcher.appendChild(this.jack);
      this.switcher.className = this.options.className;
      this.events = events(this.switcher, this);
      return this.switcher;
    };
    Switchery.prototype.insertAfter = function (reference, target) {
      reference.parentNode.insertBefore(target, reference.nextSibling);
    };
    Switchery.prototype.setPosition = function (clicked) {
      var checked = this.isChecked(),
        switcher = this.switcher,
        jack = this.jack;
      if (clicked && checked) checked = false;else if (clicked && !checked) checked = true;
      if (checked === true) {
        this.element.checked = true;
        if (window.getComputedStyle) jack.style.left = parseInt(window.getComputedStyle(switcher).width) - parseInt(window.getComputedStyle(jack).width) + "px";else jack.style.left = parseInt(switcher.currentStyle["width"]) - parseInt(jack.currentStyle["width"]) + "px";
        if (this.options.color) this.colorize();
        this.setSpeed();
      } else {
        jack.style.left = 0;
        this.element.checked = false;
        this.switcher.style.boxShadow = "inset 0 0 0 0 " + this.options.secondaryColor;
        this.switcher.style.borderColor = this.options.secondaryColor;
        this.switcher.style.backgroundColor = this.options.secondaryColor !== defaults.secondaryColor ? this.options.secondaryColor : "#fff";
        this.jack.style.backgroundColor = this.options.jackSecondaryColor !== this.options.jackColor ? this.options.jackSecondaryColor : this.options.jackColor;
        this.setSpeed();
      }
    };
    Switchery.prototype.setSpeed = function () {
      var switcherProp = {},
        jackProp = {
          "background-color": this.options.speed,
          left: this.options.speed.replace(/[a-z]/, "") / 2 + "s"
        };
      if (this.isChecked()) {
        switcherProp = {
          border: this.options.speed,
          "box-shadow": this.options.speed,
          "background-color": this.options.speed.replace(/[a-z]/, "") * 3 + "s"
        };
      } else {
        switcherProp = {
          border: this.options.speed,
          "box-shadow": this.options.speed
        };
      }
      transitionize(this.switcher, switcherProp);
      transitionize(this.jack, jackProp);
    };
    Switchery.prototype.setSize = function () {
      var small = "switchery-small",
        normal = "switchery-default",
        large = "switchery-large";
      switch (this.options.size) {
        case "small":
          classes(this.switcher).add(small);
          break;
        case "large":
          classes(this.switcher).add(large);
          break;
        default:
          classes(this.switcher).add(normal);
          break;
      }
    };
    Switchery.prototype.colorize = function () {
      var switcherHeight = this.switcher.offsetHeight / 2;
      this.switcher.style.backgroundColor = this.options.color;
      this.switcher.style.borderColor = this.options.color;
      this.switcher.style.boxShadow = "inset 0 0 0 " + switcherHeight + "px " + this.options.color;
      this.jack.style.backgroundColor = this.options.jackColor;
    };
    Switchery.prototype.handleOnchange = function (state) {
      if (document.dispatchEvent) {
        var event = document.createEvent("HTMLEvents");
        event.initEvent("change", true, true);
        this.element.dispatchEvent(event);
      } else {
        this.element.fireEvent("onchange");
      }
    };
    Switchery.prototype.handleChange = function () {
      var self = this,
        el = this.element;
      if (el.addEventListener) {
        el.addEventListener("change", function () {
          self.setPosition();
        });
      } else {
        el.attachEvent("onchange", function () {
          self.setPosition();
        });
      }
    };
    Switchery.prototype.handleClick = function () {
      var switcher = this.switcher;
      fastclick(switcher);
      this.events.bind("click", "bindClick");
    };
    Switchery.prototype.bindClick = function () {
      var parent = this.element.parentNode.tagName.toLowerCase(),
        labelParent = parent === "label" ? false : true;
      this.setPosition(labelParent);
      this.handleOnchange(this.element.checked);
    };
    Switchery.prototype.markAsSwitched = function () {
      this.element.setAttribute("data-switchery", true);
    };
    Switchery.prototype.markedAsSwitched = function () {
      return this.element.getAttribute("data-switchery");
    };
    Switchery.prototype.init = function () {
      this.hide();
      this.show();
      this.setSize();
      this.setPosition();
      this.markAsSwitched();
      this.handleChange();
      this.handleClick();
    };
    Switchery.prototype.isChecked = function () {
      return this.element.checked;
    };
    Switchery.prototype.isDisabled = function () {
      return this.options.disabled || this.element.disabled || this.element.readOnly;
    };
    Switchery.prototype.destroy = function () {
      this.events.unbind();
    };
    Switchery.prototype.enable = function () {
      if (!this.options.disabled) return;
      if (this.options.disabled) this.options.disabled = false;
      if (this.element.disabled) this.element.disabled = false;
      if (this.element.readOnly) this.element.readOnly = false;
      this.switcher.style.opacity = 1;
      this.events.bind("click", "bindClick");
    };
    Switchery.prototype.disable = function () {
      if (this.options.disabled) return;
      if (!this.options.disabled) this.options.disabled = true;
      if (!this.element.disabled) this.element.disabled = true;
      if (!this.element.readOnly) this.element.readOnly = true;
      this.switcher.style.opacity = this.options.disabledOpacity;
      this.destroy();
    };
  });
  if (( false ? undefined : _typeof(exports)) == "object") {
    module.exports = require("switchery");
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return require("switchery");
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3BsdWdpbnMvc3dpdGNoZXJ5L3N3aXRjaGVyeS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvc3dpdGNoZXJ5L3N3aXRjaGVyeS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwibmFtZSIsIm1vZHVsZSIsIm1vZHVsZXMiLCJFcnJvciIsImRlZmluaXRpb24iLCJjbGllbnQiLCJjb21wb25lbnQiLCJjYWxsIiwiZXhwb3J0cyIsImxvYWRlciIsImhlbHBlciIsInNlbVZlclNvcnQiLCJhIiwiYiIsImFBcnJheSIsInZlcnNpb24iLCJzcGxpdCIsImJBcnJheSIsImkiLCJsZW5ndGgiLCJhSW50IiwicGFyc2VJbnQiLCJiSW50IiwiYUxleCIsInN1YnN0ciIsImJMZXgiLCJsYXRlc3QiLCJyZXR1cm5QYXRoIiwic2hvd0Vycm9yIiwidmVyc2lvblJlZ2V4cCIsInJlbW90ZVJlZ2V4cCIsInRlc3QiLCJtb2R1bGVOYW1lcyIsIk9iamVjdCIsImtleXMiLCJzZW1WZXJDYW5kaWRhdGVzIiwib3RoZXJDYW5kaWRhdGVzIiwibW9kdWxlTmFtZSIsIlJlZ0V4cCIsInNlbVZlck1hdGNoIiwiZXhlYyIsInB1c2giLCJjb25jYXQiLCJzb3J0IiwicG9wIiwicmVnaXN0ZXIiLCJkZWZpbmUiLCJUcmFuc2l0aW9uaXplIiwiZWxlbWVudCIsInByb3BzIiwiaW5pdCIsInByb3RvdHlwZSIsImlzU2FmYXJpIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidmVuZG9yIiwidHJhbnNpdGlvbnMiLCJrZXkiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJqb2luIiwid2Via2l0VHJhbnNpdGlvbiIsIkZhc3RDbGljayIsImxheWVyIiwib2xkT25DbGljayIsInNlbGYiLCJ0cmFja2luZ0NsaWNrIiwidHJhY2tpbmdDbGlja1N0YXJ0IiwidGFyZ2V0RWxlbWVudCIsInRvdWNoU3RhcnRYIiwidG91Y2hTdGFydFkiLCJsYXN0VG91Y2hJZGVudGlmaWVyIiwidG91Y2hCb3VuZGFyeSIsIm5vZGVUeXBlIiwiVHlwZUVycm9yIiwib25DbGljayIsImFwcGx5IiwiYXJndW1lbnRzIiwib25Nb3VzZSIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaEVuZCIsIm9uVG91Y2hDYW5jZWwiLCJub3ROZWVkZWQiLCJkZXZpY2VJc0FuZHJvaWQiLCJhZGRFdmVudExpc3RlbmVyIiwiRXZlbnQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidHlwZSIsImNhbGxiYWNrIiwiY2FwdHVyZSIsInJtdiIsIk5vZGUiLCJoaWphY2tlZCIsImFkdiIsImV2ZW50IiwicHJvcGFnYXRpb25TdG9wcGVkIiwib25jbGljayIsImluZGV4T2YiLCJkZXZpY2VJc0lPUyIsImRldmljZUlzSU9TNCIsImRldmljZUlzSU9TV2l0aEJhZFRhcmdldCIsIm5lZWRzQ2xpY2siLCJ0YXJnZXQiLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwiZGlzYWJsZWQiLCJjbGFzc05hbWUiLCJuZWVkc0ZvY3VzIiwicmVhZE9ubHkiLCJzZW5kQ2xpY2siLCJjbGlja0V2ZW50IiwidG91Y2giLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwiY2hhbmdlZFRvdWNoZXMiLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50IiwiZGV0ZXJtaW5lRXZlbnRUeXBlIiwid2luZG93Iiwic2NyZWVuWCIsInNjcmVlblkiLCJjbGllbnRYIiwiY2xpZW50WSIsImZvcndhcmRlZFRvdWNoRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwidGFnTmFtZSIsImZvY3VzIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJ2YWx1ZSIsInVwZGF0ZVNjcm9sbFBhcmVudCIsInNjcm9sbFBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJmYXN0Q2xpY2tTY3JvbGxQYXJlbnQiLCJjb250YWlucyIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImZhc3RDbGlja0xhc3RTY3JvbGxUb3AiLCJzY3JvbGxUb3AiLCJnZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0IiwiZXZlbnRUYXJnZXQiLCJURVhUX05PREUiLCJwYXJlbnROb2RlIiwic2VsZWN0aW9uIiwidGFyZ2V0VG91Y2hlcyIsImdldFNlbGVjdGlvbiIsInJhbmdlQ291bnQiLCJpc0NvbGxhcHNlZCIsImlkZW50aWZpZXIiLCJwcmV2ZW50RGVmYXVsdCIsInRpbWVTdGFtcCIsInBhZ2VYIiwicGFnZVkiLCJsYXN0Q2xpY2tUaW1lIiwidG91Y2hIYXNNb3ZlZCIsImJvdW5kYXJ5IiwiTWF0aCIsImFicyIsImZpbmRDb250cm9sIiwibGFiZWxFbGVtZW50IiwiY29udHJvbCIsInVuZGVmaW5lZCIsImh0bWxGb3IiLCJnZXRFbGVtZW50QnlJZCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFbGVtZW50IiwidGFyZ2V0VGFnTmFtZSIsImNhbmNlbE5leHRDbGljayIsImVsZW1lbnRGcm9tUG9pbnQiLCJwYWdlWE9mZnNldCIsInBhZ2VZT2Zmc2V0IiwidG9wIiwiY2FuY2VsYWJsZSIsInN0b3BQcm9wYWdhdGlvbiIsInBlcm1pdHRlZCIsImRldGFpbCIsImRlc3Ryb3kiLCJtZXRhVmlld3BvcnQiLCJjaHJvbWVWZXJzaW9uIiwib250b3VjaHN0YXJ0IiwiY29udGVudCIsImlubmVyV2lkdGgiLCJzY3JlZW4iLCJ3aWR0aCIsIm1zVG91Y2hBY3Rpb24iLCJhdHRhY2giLCJhcnIiLCJvYmoiLCJpbmRleCIsInJlIiwidG9TdHJpbmciLCJlbCIsIkNsYXNzTGlzdCIsImxpc3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcnJheSIsInJlbW92ZSIsInJlbW92ZU1hdGNoaW5nIiwic3BsaWNlIiwidG9nZ2xlIiwiZm9yY2UiLCJoYXMiLCJzdHIiLCJyZXBsYWNlIiwic2hpZnQiLCJiaW5kIiwidW5iaW5kIiwicHJlZml4IiwiZm4iLCJvbmUiLCJzZWxlY3RvciIsImFsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbmdpbmUiLCJxdWVyeSIsInByb3RvIiwiRWxlbWVudCIsIm1hdGNoZXMiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJtYXRjaCIsIm5vZGVzIiwiY2hlY2tZb1NlbGYiLCJyb290IiwiY2xvc2VzdCIsImUiLCJzcmNFbGVtZW50IiwiZGVsZWdhdGVUYXJnZXQiLCJldmVudHMiLCJkZWxlZ2F0ZSIsIkV2ZW50cyIsIl9ldmVudHMiLCJzdWIiLCJtZXRob2QiLCJjYiIsInBhcnNlIiwiYXJncyIsInNsaWNlIiwidW5iaW5kQWxsIiwidW5iaW5kQWxsT2YiLCJiaW5kaW5ncyIsInBhcnRzIiwidHJhbnNpdGlvbml6ZSIsImZhc3RjbGljayIsImNsYXNzZXMiLCJTd2l0Y2hlcnkiLCJkZWZhdWx0cyIsImNvbG9yIiwic2Vjb25kYXJ5Q29sb3IiLCJqYWNrQ29sb3IiLCJqYWNrU2Vjb25kYXJ5Q29sb3IiLCJkaXNhYmxlZE9wYWNpdHkiLCJzcGVlZCIsInNpemUiLCJvcHRpb25zIiwiaXNEaXNhYmxlZCIsImRpc2FibGUiLCJoaWRlIiwiZGlzcGxheSIsInNob3ciLCJzd2l0Y2hlciIsImNyZWF0ZSIsImluc2VydEFmdGVyIiwiY3JlYXRlRWxlbWVudCIsImphY2siLCJhcHBlbmRDaGlsZCIsInJlZmVyZW5jZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwic2V0UG9zaXRpb24iLCJjbGlja2VkIiwiY2hlY2tlZCIsImlzQ2hlY2tlZCIsImdldENvbXB1dGVkU3R5bGUiLCJsZWZ0IiwiY3VycmVudFN0eWxlIiwiY29sb3JpemUiLCJzZXRTcGVlZCIsImJveFNoYWRvdyIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwic3dpdGNoZXJQcm9wIiwiamFja1Byb3AiLCJib3JkZXIiLCJzZXRTaXplIiwic21hbGwiLCJub3JtYWwiLCJsYXJnZSIsInN3aXRjaGVySGVpZ2h0IiwiaGFuZGxlT25jaGFuZ2UiLCJzdGF0ZSIsImluaXRFdmVudCIsImZpcmVFdmVudCIsImhhbmRsZUNoYW5nZSIsImF0dGFjaEV2ZW50IiwiaGFuZGxlQ2xpY2siLCJiaW5kQ2xpY2siLCJwYXJlbnQiLCJsYWJlbFBhcmVudCIsIm1hcmtBc1N3aXRjaGVkIiwic2V0QXR0cmlidXRlIiwibWFya2VkQXNTd2l0Y2hlZCIsImdldEF0dHJpYnV0ZSIsImVuYWJsZSIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLENBQUMsWUFBVTtFQUFDLFNBQVNBLE9BQU8sQ0FBQ0MsSUFBSSxFQUFDO0lBQUMsSUFBSUMsTUFBTSxHQUFDRixPQUFPLENBQUNHLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDO0lBQUMsSUFBRyxDQUFDQyxNQUFNLEVBQUMsTUFBTSxJQUFJRSxLQUFLLENBQUMscUJBQXFCLEdBQUNILElBQUksR0FBQyxHQUFHLENBQUM7SUFBQyxJQUFHLEVBQUUsU0FBUyxJQUFHQyxNQUFNLENBQUMsSUFBRSxPQUFPQSxNQUFNLENBQUNHLFVBQVUsS0FBRyxVQUFVLEVBQUM7TUFBQ0gsTUFBTSxDQUFDSSxNQUFNLEdBQUNKLE1BQU0sQ0FBQ0ssU0FBUyxHQUFDLElBQUk7TUFBQ0wsTUFBTSxDQUFDRyxVQUFVLENBQUNHLElBQUksQ0FBQyxJQUFJLEVBQUNOLE1BQU0sQ0FBQ08sT0FBTyxHQUFDLENBQUMsQ0FBQyxFQUFDUCxNQUFNLENBQUM7TUFBQyxPQUFPQSxNQUFNLENBQUNHLFVBQVU7SUFBQTtJQUFDLE9BQU9ILE1BQU0sQ0FBQ08sT0FBTztFQUFBO0VBQUNULE9BQU8sQ0FBQ1UsTUFBTSxHQUFDLFdBQVc7RUFBQ1YsT0FBTyxDQUFDVyxNQUFNLEdBQUMsQ0FBQyxDQUFDO0VBQUNYLE9BQU8sQ0FBQ1csTUFBTSxDQUFDQyxVQUFVLEdBQUMsVUFBU0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7SUFBQyxJQUFJQyxNQUFNLEdBQUNGLENBQUMsQ0FBQ0csT0FBTyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQUMsSUFBSUMsTUFBTSxHQUFDSixDQUFDLENBQUNFLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUFDLEtBQUksSUFBSUUsQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDSixNQUFNLENBQUNLLE1BQU0sRUFBQyxFQUFFRCxDQUFDLEVBQUM7TUFBQyxJQUFJRSxJQUFJLEdBQUNDLFFBQVEsQ0FBQ1AsTUFBTSxDQUFDSSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7TUFBQyxJQUFJSSxJQUFJLEdBQUNELFFBQVEsQ0FBQ0osTUFBTSxDQUFDQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7TUFBQyxJQUFHRSxJQUFJLEtBQUdFLElBQUksRUFBQztRQUFDLElBQUlDLElBQUksR0FBQ1QsTUFBTSxDQUFDSSxDQUFDLENBQUMsQ0FBQ00sTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFDSixJQUFJLEVBQUVELE1BQU0sQ0FBQztRQUFDLElBQUlNLElBQUksR0FBQ1IsTUFBTSxDQUFDQyxDQUFDLENBQUMsQ0FBQ00sTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFDRixJQUFJLEVBQUVILE1BQU0sQ0FBQztRQUFDLElBQUdJLElBQUksS0FBRyxFQUFFLElBQUVFLElBQUksS0FBRyxFQUFFLEVBQUMsT0FBTyxDQUFDO1FBQUMsSUFBR0YsSUFBSSxLQUFHLEVBQUUsSUFBRUUsSUFBSSxLQUFHLEVBQUUsRUFBQyxPQUFNLENBQUMsQ0FBQztRQUFDLElBQUdGLElBQUksS0FBRyxFQUFFLElBQUVFLElBQUksS0FBRyxFQUFFLEVBQUMsT0FBT0YsSUFBSSxHQUFDRSxJQUFJLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUFDO01BQVEsQ0FBQyxNQUFLLElBQUdMLElBQUksR0FBQ0UsSUFBSSxFQUFDO1FBQUMsT0FBTyxDQUFDO01BQUEsQ0FBQyxNQUFJO1FBQUMsT0FBTSxDQUFDLENBQUM7TUFBQTtJQUFDO0lBQUMs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R0FBQyxJQUFJLENBQUNsRCxPQUFPLENBQUNILGVBQWU7TUFBQyxJQUFJLENBQUM5RSxPQUFPLEVBQUU7SUFBQSxDQUFDO0VBQUEsQ0FBQyxDQUFDO0VBQUMsSUFBRyxPQUFjLHVCQUFQMUssT0FBTyxNQUFFLFFBQVEsRUFBQztJQUFDUCxNQUFNLENBQUNPLE9BQU8sR0FBQ1QsT0FBTyxDQUFDLFdBQVcsQ0FBQztFQUFBLENBQUMsTUFBSyxJQUFHLElBQXFDLEVBQUM7SUFBQytDLGlDQUFtQixFQUFFLG1DQUFDLFlBQVU7TUFBQyxPQUFPL0MsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUFBLENBQUM7QUFBQSxvR0FBQztFQUFBLENBQUMsTUFBSSxFQUFrRDtBQUFBLENBQUMsR0FBRyxDIiwiZmlsZSI6ImNvbmZpZ35wZGZ+dXNfZ3JvdXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcmVxdWlyZShuYW1lKXt2YXIgbW9kdWxlPXJlcXVpcmUubW9kdWxlc1tuYW1lXTtpZighbW9kdWxlKXRocm93IG5ldyBFcnJvcignZmFpbGVkIHRvIHJlcXVpcmUgXCInK25hbWUrJ1wiJyk7aWYoIShcImV4cG9ydHNcImluIG1vZHVsZSkmJnR5cGVvZiBtb2R1bGUuZGVmaW5pdGlvbj09PVwiZnVuY3Rpb25cIil7bW9kdWxlLmNsaWVudD1tb2R1bGUuY29tcG9uZW50PXRydWU7bW9kdWxlLmRlZmluaXRpb24uY2FsbCh0aGlzLG1vZHVsZS5leHBvcnRzPXt9LG1vZHVsZSk7ZGVsZXRlIG1vZHVsZS5kZWZpbml0aW9ufXJldHVybiBtb2R1bGUuZXhwb3J0c31yZXF1aXJlLmxvYWRlcj1cImNvbXBvbmVudFwiO3JlcXVpcmUuaGVscGVyPXt9O3JlcXVpcmUuaGVscGVyLnNlbVZlclNvcnQ9ZnVuY3Rpb24oYSxiKXt2YXIgYUFycmF5PWEudmVyc2lvbi5zcGxpdChcIi5cIik7dmFyIGJBcnJheT1iLnZlcnNpb24uc3BsaXQoXCIuXCIpO2Zvcih2YXIgaT0wO2k8YUFycmF5Lmxlbmd0aDsrK2kpe3ZhciBhSW50PXBhcnNlSW50KGFBcnJheVtpXSwxMCk7dmFyIGJJbnQ9cGFyc2VJbnQoYkFycmF5W2ldLDEwKTtpZihhSW50PT09YkludCl7dmFyIGFMZXg9YUFycmF5W2ldLnN1YnN0cigoXCJcIithSW50KS5sZW5ndGgpO3ZhciBiTGV4PWJBcnJheVtpXS5zdWJzdHIoKFwiXCIrYkludCkubGVuZ3RoKTtpZihhTGV4PT09XCJcIiYmYkxleCE9PVwiXCIpcmV0dXJuIDE7aWYoYUxleCE9PVwiXCImJmJMZXg9PT1cIlwiKXJldHVybi0xO2lmKGFMZXghPT1cIlwiJiZiTGV4IT09XCJcIilyZXR1cm4gYUxleD5iTGV4PzE6LTE7Y29udGludWV9ZWxzZSBpZihhSW50PmJJbnQpe3JldHVybiAxfWVsc2V7cmV0dXJuLTF9fXJldHVybiAwfTtyZXF1aXJlLmxhdGVzdD1mdW5jdGlvbihuYW1lLHJldHVyblBhdGgpe2Z1bmN0aW9uIHNob3dFcnJvcihuYW1lKXt0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBmaW5kIGxhdGVzdCBtb2R1bGUgb2YgXCInK25hbWUrJ1wiJyl9dmFyIHZlcnNpb25SZWdleHA9LyguKil+KC4qKUB2PyhcXGQrXFwuXFxkK1xcLlxcZCtbXlxcL10qKSQvO3ZhciByZW1vdGVSZWdleHA9LyguKil+KC4qKS87aWYoIXJlbW90ZVJlZ2V4cC50ZXN0KG5hbWUpKXNob3dFcnJvcihuYW1lKTt2YXIgbW9kdWxlTmFtZXM9T2JqZWN0LmtleXMocmVxdWlyZS5tb2R1bGVzKTt2YXIgc2VtVmVyQ2FuZGlkYXRlcz1bXTt2YXIgb3RoZXJDYW5kaWRhdGVzPVtdO2Zvcih2YXIgaT0wO2k8bW9kdWxlTmFtZXMubGVuZ3RoO2krKyl7dmFyIG1vZHVsZU5hbWU9bW9kdWxlTmFtZXNbaV07aWYobmV3IFJlZ0V4cChuYW1lK1wiQFwiKS50ZXN0KG1vZHVsZU5hbWUpKXt2YXIgdmVyc2lvbj1tb2R1bGVOYW1lLnN1YnN0cihuYW1lLmxlbmd0aCsxKTt2YXIgc2VtVmVyTWF0Y2g9dmVyc2lvblJlZ2V4cC5leGVjKG1vZHVsZU5hbWUpO2lmKHNlbVZlck1hdGNoIT1udWxsKXtzZW1WZXJDYW5kaWRhdGVzLnB1c2goe3ZlcnNpb246dmVyc2lvbixuYW1lOm1vZHVsZU5hbWV9KX1lbHNle290aGVyQ2FuZGlkYXRlcy5wdXNoKHt2ZXJzaW9uOnZlcnNpb24sbmFtZTptb2R1bGVOYW1lfSl9fX1pZihzZW1WZXJDYW5kaWRhdGVzLmNvbmNhdChvdGhlckNhbmRpZGF0ZXMpLmxlbmd0aD09PTApe3Nob3dFcnJvcihuYW1lKX1pZihzZW1WZXJDYW5kaWRhdGVzLmxlbmd0aD4wKXt2YXIgbW9kdWxlPXNlbVZlckNhbmRpZGF0ZXMuc29ydChyZXF1aXJlLmhlbHBlci5zZW1WZXJTb3J0KS5wb3AoKS5uYW1lO2lmKHJldHVyblBhdGg9PT10cnVlKXtyZXR1cm4gbW9kdWxlfXJldHVybiByZXF1aXJlKG1vZHVsZSl9dmFyIG1vZHVsZT1vdGhlckNhbmRpZGF0ZXMuc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBhLm5hbWU+Yi5uYW1lfSlbMF0ubmFtZTtpZihyZXR1cm5QYXRoPT09dHJ1ZSl7cmV0dXJuIG1vZHVsZX1yZXR1cm4gcmVxdWlyZShtb2R1bGUpfTtyZXF1aXJlLm1vZHVsZXM9e307cmVxdWlyZS5yZWdpc3Rlcj1mdW5jdGlvbihuYW1lLGRlZmluaXRpb24pe3JlcXVpcmUubW9kdWxlc1tuYW1lXT17ZGVmaW5pdGlvbjpkZWZpbml0aW9ufX07cmVxdWlyZS5kZWZpbmU9ZnVuY3Rpb24obmFtZSxleHBvcnRzKXtyZXF1aXJlLm1vZHVsZXNbbmFtZV09e2V4cG9ydHM6ZXhwb3J0c319O3JlcXVpcmUucmVnaXN0ZXIoXCJhYnBldGtvdn50cmFuc2l0aW9uaXplQDAuMC4zXCIsZnVuY3Rpb24oZXhwb3J0cyxtb2R1bGUpe21vZHVsZS5leHBvcnRzPVRyYW5zaXRpb25pemU7ZnVuY3Rpb24gVHJhbnNpdGlvbml6ZShlbGVtZW50LHByb3BzKXtpZighKHRoaXMgaW5zdGFuY2VvZiBUcmFuc2l0aW9uaXplKSlyZXR1cm4gbmV3IFRyYW5zaXRpb25pemUoZWxlbWVudCxwcm9wcyk7dGhpcy5lbGVtZW50PWVsZW1lbnQ7dGhpcy5wcm9wcz1wcm9wc3x8e307dGhpcy5pbml0KCl9VHJhbnNpdGlvbml6ZS5wcm90b3R5cGUuaXNTYWZhcmk9ZnVuY3Rpb24oKXtyZXR1cm4vU2FmYXJpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYvQXBwbGUgQ29tcHV0ZXIvLnRlc3QobmF2aWdhdG9yLnZlbmRvcil9O1RyYW5zaXRpb25pemUucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oKXt2YXIgdHJhbnNpdGlvbnM9W107Zm9yKHZhciBrZXkgaW4gdGhpcy5wcm9wcyl7dHJhbnNpdGlvbnMucHVzaChrZXkrXCIgXCIrdGhpcy5wcm9wc1trZXldKX10aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbj10cmFuc2l0aW9ucy5qb2luKFwiLCBcIik7aWYodGhpcy5pc1NhZmFyaSgpKXRoaXMuZWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPXRyYW5zaXRpb25zLmpvaW4oXCIsIFwiKX19KTtyZXF1aXJlLnJlZ2lzdGVyKFwiZnRsYWJzfmZhc3RjbGlja0B2MC42LjExXCIsZnVuY3Rpb24oZXhwb3J0cyxtb2R1bGUpe2Z1bmN0aW9uIEZhc3RDbGljayhsYXllcil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG9sZE9uQ2xpY2ssc2VsZj10aGlzO3RoaXMudHJhY2tpbmdDbGljaz1mYWxzZTt0aGlzLnRyYWNraW5nQ2xpY2tTdGFydD0wO3RoaXMudGFyZ2V0RWxlbWVudD1udWxsO3RoaXMudG91Y2hTdGFydFg9MDt0aGlzLnRvdWNoU3RhcnRZPTA7dGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyPTA7dGhpcy50b3VjaEJvdW5kYXJ5PTEwO3RoaXMubGF5ZXI9bGF5ZXI7aWYoIWxheWVyfHwhbGF5ZXIubm9kZVR5cGUpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJMYXllciBtdXN0IGJlIGEgZG9jdW1lbnQgbm9kZVwiKX10aGlzLm9uQ2xpY2s9ZnVuY3Rpb24oKXtyZXR1cm4gRmFzdENsaWNrLnByb3RvdHlwZS5vbkNsaWNrLmFwcGx5KHNlbGYsYXJndW1lbnRzKX07dGhpcy5vbk1vdXNlPWZ1bmN0aW9uKCl7cmV0dXJuIEZhc3RDbGljay5wcm90b3R5cGUub25Nb3VzZS5hcHBseShzZWxmLGFyZ3VtZW50cyl9O3RoaXMub25Ub3VjaFN0YXJ0PWZ1bmN0aW9uKCl7cmV0dXJuIEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaFN0YXJ0LmFwcGx5KHNlbGYsYXJndW1lbnRzKX07dGhpcy5vblRvdWNoTW92ZT1mdW5jdGlvbigpe3JldHVybiBGYXN0Q2xpY2sucHJvdG90eXBlLm9uVG91Y2hNb3ZlLmFwcGx5KHNlbGYsYXJndW1lbnRzKX07dGhpcy5vblRvdWNoRW5kPWZ1bmN0aW9uKCl7cmV0dXJuIEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaEVuZC5hcHBseShzZWxmLGFyZ3VtZW50cyl9O3RoaXMub25Ub3VjaENhbmNlbD1mdW5jdGlvbigpe3JldHVybiBGYXN0Q2xpY2sucHJvdG90eXBlLm9uVG91Y2hDYW5jZWwuYXBwbHkoc2VsZixhcmd1bWVudHMpfTtpZihGYXN0Q2xpY2subm90TmVlZGVkKGxheWVyKSl7cmV0dXJufWlmKHRoaXMuZGV2aWNlSXNBbmRyb2lkKXtsYXllci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsdGhpcy5vbk1vdXNlLHRydWUpO2xheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm9uTW91c2UsdHJ1ZSk7bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm9uTW91c2UsdHJ1ZSl9bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5vbkNsaWNrLHRydWUpO2xheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy5vblRvdWNoU3RhcnQsZmFsc2UpO2xheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLm9uVG91Y2hNb3ZlLGZhbHNlKTtsYXllci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLm9uVG91Y2hFbmQsZmFsc2UpO2xheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLHRoaXMub25Ub3VjaENhbmNlbCxmYWxzZSk7aWYoIUV2ZW50LnByb3RvdHlwZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24pe2xheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24odHlwZSxjYWxsYmFjayxjYXB0dXJlKXt2YXIgcm12PU5vZGUucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7aWYodHlwZT09PVwiY2xpY2tcIil7cm12LmNhbGwobGF5ZXIsdHlwZSxjYWxsYmFjay5oaWphY2tlZHx8Y2FsbGJhY2ssY2FwdHVyZSl9ZWxzZXtybXYuY2FsbChsYXllcix0eXBlLGNhbGxiYWNrLGNhcHR1cmUpfX07bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGNhbGxiYWNrLGNhcHR1cmUpe3ZhciBhZHY9Tm9kZS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtpZih0eXBlPT09XCJjbGlja1wiKXthZHYuY2FsbChsYXllcix0eXBlLGNhbGxiYWNrLmhpamFja2VkfHwoY2FsbGJhY2suaGlqYWNrZWQ9ZnVuY3Rpb24oZXZlbnQpe2lmKCFldmVudC5wcm9wYWdhdGlvblN0b3BwZWQpe2NhbGxiYWNrKGV2ZW50KX19KSxjYXB0dXJlKX1lbHNle2Fkdi5jYWxsKGxheWVyLHR5cGUsY2FsbGJhY2ssY2FwdHVyZSl9fX1pZih0eXBlb2YgbGF5ZXIub25jbGljaz09PVwiZnVuY3Rpb25cIil7b2xkT25DbGljaz1sYXllci5vbmNsaWNrO2xheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGV2ZW50KXtvbGRPbkNsaWNrKGV2ZW50KX0sZmFsc2UpO2xheWVyLm9uY2xpY2s9bnVsbH19RmFzdENsaWNrLnByb3RvdHlwZS5kZXZpY2VJc0FuZHJvaWQ9bmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQW5kcm9pZFwiKT4wO0Zhc3RDbGljay5wcm90b3R5cGUuZGV2aWNlSXNJT1M9L2lQKGFkfGhvbmV8b2QpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO0Zhc3RDbGljay5wcm90b3R5cGUuZGV2aWNlSXNJT1M0PUZhc3RDbGljay5wcm90b3R5cGUuZGV2aWNlSXNJT1MmJi9PUyA0X1xcZChfXFxkKT8vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7RmFzdENsaWNrLnByb3RvdHlwZS5kZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQ9RmFzdENsaWNrLnByb3RvdHlwZS5kZXZpY2VJc0lPUyYmL09TIChbNi05XXxcXGR7Mn0pX1xcZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtGYXN0Q2xpY2sucHJvdG90eXBlLm5lZWRzQ2xpY2s9ZnVuY3Rpb24odGFyZ2V0KXtcInVzZSBzdHJpY3RcIjtzd2l0Y2godGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpe2Nhc2VcImJ1dHRvblwiOmNhc2VcInNlbGVjdFwiOmNhc2VcInRleHRhcmVhXCI6aWYodGFyZ2V0LmRpc2FibGVkKXtyZXR1cm4gdHJ1ZX1icmVhaztjYXNlXCJpbnB1dFwiOmlmKHRoaXMuZGV2aWNlSXNJT1MmJnRhcmdldC50eXBlPT09XCJmaWxlXCJ8fHRhcmdldC5kaXNhYmxlZCl7cmV0dXJuIHRydWV9YnJlYWs7Y2FzZVwibGFiZWxcIjpjYXNlXCJ2aWRlb1wiOnJldHVybiB0cnVlfXJldHVybi9cXGJuZWVkc2NsaWNrXFxiLy50ZXN0KHRhcmdldC5jbGFzc05hbWUpfTtGYXN0Q2xpY2sucHJvdG90eXBlLm5lZWRzRm9jdXM9ZnVuY3Rpb24odGFyZ2V0KXtcInVzZSBzdHJpY3RcIjtzd2l0Y2godGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpe2Nhc2VcInRleHRhcmVhXCI6cmV0dXJuIHRydWU7Y2FzZVwic2VsZWN0XCI6cmV0dXJuIXRoaXMuZGV2aWNlSXNBbmRyb2lkO2Nhc2VcImlucHV0XCI6c3dpdGNoKHRhcmdldC50eXBlKXtjYXNlXCJidXR0b25cIjpjYXNlXCJjaGVja2JveFwiOmNhc2VcImZpbGVcIjpjYXNlXCJpbWFnZVwiOmNhc2VcInJhZGlvXCI6Y2FzZVwic3VibWl0XCI6cmV0dXJuIGZhbHNlfXJldHVybiF0YXJnZXQuZGlzYWJsZWQmJiF0YXJnZXQucmVhZE9ubHk7ZGVmYXVsdDpyZXR1cm4vXFxibmVlZHNmb2N1c1xcYi8udGVzdCh0YXJnZXQuY2xhc3NOYW1lKX19O0Zhc3RDbGljay5wcm90b3R5cGUuc2VuZENsaWNrPWZ1bmN0aW9uKHRhcmdldEVsZW1lbnQsZXZlbnQpe1widXNlIHN0cmljdFwiO3ZhciBjbGlja0V2ZW50LHRvdWNoO2lmKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQmJmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQhPT10YXJnZXRFbGVtZW50KXtkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKX10b3VjaD1ldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtjbGlja0V2ZW50PWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7Y2xpY2tFdmVudC5pbml0TW91c2VFdmVudCh0aGlzLmRldGVybWluZUV2ZW50VHlwZSh0YXJnZXRFbGVtZW50KSx0cnVlLHRydWUsd2luZG93LDEsdG91Y2guc2NyZWVuWCx0b3VjaC5zY3JlZW5ZLHRvdWNoLmNsaWVudFgsdG91Y2guY2xpZW50WSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSwwLG51bGwpO2NsaWNrRXZlbnQuZm9yd2FyZGVkVG91Y2hFdmVudD10cnVlO3RhcmdldEVsZW1lbnQuZGlzcGF0Y2hFdmVudChjbGlja0V2ZW50KX07RmFzdENsaWNrLnByb3RvdHlwZS5kZXRlcm1pbmVFdmVudFR5cGU9ZnVuY3Rpb24odGFyZ2V0RWxlbWVudCl7XCJ1c2Ugc3RyaWN0XCI7aWYodGhpcy5kZXZpY2VJc0FuZHJvaWQmJnRhcmdldEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpPT09XCJzZWxlY3RcIil7cmV0dXJuXCJtb3VzZWRvd25cIn1yZXR1cm5cImNsaWNrXCJ9O0Zhc3RDbGljay5wcm90b3R5cGUuZm9jdXM9ZnVuY3Rpb24odGFyZ2V0RWxlbWVudCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGxlbmd0aDtpZih0aGlzLmRldmljZUlzSU9TJiZ0YXJnZXRFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlJiZ0YXJnZXRFbGVtZW50LnR5cGUuaW5kZXhPZihcImRhdGVcIikhPT0wJiZ0YXJnZXRFbGVtZW50LnR5cGUhPT1cInRpbWVcIil7bGVuZ3RoPXRhcmdldEVsZW1lbnQudmFsdWUubGVuZ3RoO3RhcmdldEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UobGVuZ3RoLGxlbmd0aCl9ZWxzZXt0YXJnZXRFbGVtZW50LmZvY3VzKCl9fTtGYXN0Q2xpY2sucHJvdG90eXBlLnVwZGF0ZVNjcm9sbFBhcmVudD1mdW5jdGlvbih0YXJnZXRFbGVtZW50KXtcInVzZSBzdHJpY3RcIjt2YXIgc2Nyb2xsUGFyZW50LHBhcmVudEVsZW1lbnQ7c2Nyb2xsUGFyZW50PXRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50O2lmKCFzY3JvbGxQYXJlbnR8fCFzY3JvbGxQYXJlbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCkpe3BhcmVudEVsZW1lbnQ9dGFyZ2V0RWxlbWVudDtkb3tpZihwYXJlbnRFbGVtZW50LnNjcm9sbEhlaWdodD5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCl7c2Nyb2xsUGFyZW50PXBhcmVudEVsZW1lbnQ7dGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQ9cGFyZW50RWxlbWVudDticmVha31wYXJlbnRFbGVtZW50PXBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudH13aGlsZShwYXJlbnRFbGVtZW50KX1pZihzY3JvbGxQYXJlbnQpe3Njcm9sbFBhcmVudC5mYXN0Q2xpY2tMYXN0U2Nyb2xsVG9wPXNjcm9sbFBhcmVudC5zY3JvbGxUb3B9fTtGYXN0Q2xpY2sucHJvdG90eXBlLmdldFRhcmdldEVsZW1lbnRGcm9tRXZlbnRUYXJnZXQ9ZnVuY3Rpb24oZXZlbnRUYXJnZXQpe1widXNlIHN0cmljdFwiO2lmKGV2ZW50VGFyZ2V0Lm5vZGVUeXBlPT09Tm9kZS5URVhUX05PREUpe3JldHVybiBldmVudFRhcmdldC5wYXJlbnROb2RlfXJldHVybiBldmVudFRhcmdldH07RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoU3RhcnQ9ZnVuY3Rpb24oZXZlbnQpe1widXNlIHN0cmljdFwiO3ZhciB0YXJnZXRFbGVtZW50LHRvdWNoLHNlbGVjdGlvbjtpZihldmVudC50YXJnZXRUb3VjaGVzLmxlbmd0aD4xKXtyZXR1cm4gdHJ1ZX10YXJnZXRFbGVtZW50PXRoaXMuZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldChldmVudC50YXJnZXQpO3RvdWNoPWV2ZW50LnRhcmdldFRvdWNoZXNbMF07aWYodGhpcy5kZXZpY2VJc0lPUyl7c2VsZWN0aW9uPXdpbmRvdy5nZXRTZWxlY3Rpb24oKTtpZihzZWxlY3Rpb24ucmFuZ2VDb3VudCYmIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCl7cmV0dXJuIHRydWV9aWYoIXRoaXMuZGV2aWNlSXNJT1M0KXtpZih0b3VjaC5pZGVudGlmaWVyPT09dGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyKXtldmVudC5wcmV2ZW50RGVmYXVsdCgpO3JldHVybiBmYWxzZX10aGlzLmxhc3RUb3VjaElkZW50aWZpZXI9dG91Y2guaWRlbnRpZmllcjt0aGlzLnVwZGF0ZVNjcm9sbFBhcmVudCh0YXJnZXRFbGVtZW50KX19dGhpcy50cmFja2luZ0NsaWNrPXRydWU7dGhpcy50cmFja2luZ0NsaWNrU3RhcnQ9ZXZlbnQudGltZVN0YW1wO3RoaXMudGFyZ2V0RWxlbWVudD10YXJnZXRFbGVtZW50O3RoaXMudG91Y2hTdGFydFg9dG91Y2gucGFnZVg7dGhpcy50b3VjaFN0YXJ0WT10b3VjaC5wYWdlWTtpZihldmVudC50aW1lU3RhbXAtdGhpcy5sYXN0Q2xpY2tUaW1lPDIwMCl7ZXZlbnQucHJldmVudERlZmF1bHQoKX1yZXR1cm4gdHJ1ZX07RmFzdENsaWNrLnByb3RvdHlwZS50b3VjaEhhc01vdmVkPWZ1bmN0aW9uKGV2ZW50KXtcInVzZSBzdHJpY3RcIjt2YXIgdG91Y2g9ZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0sYm91bmRhcnk9dGhpcy50b3VjaEJvdW5kYXJ5O2lmKE1hdGguYWJzKHRvdWNoLnBhZ2VYLXRoaXMudG91Y2hTdGFydFgpPmJvdW5kYXJ5fHxNYXRoLmFicyh0b3VjaC5wYWdlWS10aGlzLnRvdWNoU3RhcnRZKT5ib3VuZGFyeSl7cmV0dXJuIHRydWV9cmV0dXJuIGZhbHNlfTtGYXN0Q2xpY2sucHJvdG90eXBlLm9uVG91Y2hNb3ZlPWZ1bmN0aW9uKGV2ZW50KXtcInVzZSBzdHJpY3RcIjtpZighdGhpcy50cmFja2luZ0NsaWNrKXtyZXR1cm4gdHJ1ZX1pZih0aGlzLnRhcmdldEVsZW1lbnQhPT10aGlzLmdldFRhcmdldEVsZW1lbnRGcm9tRXZlbnRUYXJnZXQoZXZlbnQudGFyZ2V0KXx8dGhpcy50b3VjaEhhc01vdmVkKGV2ZW50KSl7dGhpcy50cmFja2luZ0NsaWNrPWZhbHNlO3RoaXMudGFyZ2V0RWxlbWVudD1udWxsfXJldHVybiB0cnVlfTtGYXN0Q2xpY2sucHJvdG90eXBlLmZpbmRDb250cm9sPWZ1bmN0aW9uKGxhYmVsRWxlbWVudCl7XCJ1c2Ugc3RyaWN0XCI7aWYobGFiZWxFbGVtZW50LmNvbnRyb2whPT11bmRlZmluZWQpe3JldHVybiBsYWJlbEVsZW1lbnQuY29udHJvbH1pZihsYWJlbEVsZW1lbnQuaHRtbEZvcil7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxhYmVsRWxlbWVudC5odG1sRm9yKX1yZXR1cm4gbGFiZWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24sIGlucHV0Om5vdChbdHlwZT1oaWRkZW5dKSwga2V5Z2VuLCBtZXRlciwgb3V0cHV0LCBwcm9ncmVzcywgc2VsZWN0LCB0ZXh0YXJlYVwiKX07RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoRW5kPWZ1bmN0aW9uKGV2ZW50KXtcInVzZSBzdHJpY3RcIjt2YXIgZm9yRWxlbWVudCx0cmFja2luZ0NsaWNrU3RhcnQsdGFyZ2V0VGFnTmFtZSxzY3JvbGxQYXJlbnQsdG91Y2gsdGFyZ2V0RWxlbWVudD10aGlzLnRhcmdldEVsZW1lbnQ7aWYoIXRoaXMudHJhY2tpbmdDbGljayl7cmV0dXJuIHRydWV9aWYoZXZlbnQudGltZVN0YW1wLXRoaXMubGFzdENsaWNrVGltZTwyMDApe3RoaXMuY2FuY2VsTmV4dENsaWNrPXRydWU7cmV0dXJuIHRydWV9dGhpcy5jYW5jZWxOZXh0Q2xpY2s9ZmFsc2U7dGhpcy5sYXN0Q2xpY2tUaW1lPWV2ZW50LnRpbWVTdGFtcDt0cmFja2luZ0NsaWNrU3RhcnQ9dGhpcy50cmFja2luZ0NsaWNrU3RhcnQ7dGhpcy50cmFja2luZ0NsaWNrPWZhbHNlO3RoaXMudHJhY2tpbmdDbGlja1N0YXJ0PTA7aWYodGhpcy5kZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQpe3RvdWNoPWV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO3RhcmdldEVsZW1lbnQ9ZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0b3VjaC5wYWdlWC13aW5kb3cucGFnZVhPZmZzZXQsdG91Y2gucGFnZVktd2luZG93LnBhZ2VZT2Zmc2V0KXx8dGFyZ2V0RWxlbWVudDt0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudD10aGlzLnRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50fXRhcmdldFRhZ05hbWU9dGFyZ2V0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7aWYodGFyZ2V0VGFnTmFtZT09PVwibGFiZWxcIil7Zm9yRWxlbWVudD10aGlzLmZpbmRDb250cm9sKHRhcmdldEVsZW1lbnQpO2lmKGZvckVsZW1lbnQpe3RoaXMuZm9jdXModGFyZ2V0RWxlbWVudCk7aWYodGhpcy5kZXZpY2VJc0FuZHJvaWQpe3JldHVybiBmYWxzZX10YXJnZXRFbGVtZW50PWZvckVsZW1lbnR9fWVsc2UgaWYodGhpcy5uZWVkc0ZvY3VzKHRhcmdldEVsZW1lbnQpKXtpZihldmVudC50aW1lU3RhbXAtdHJhY2tpbmdDbGlja1N0YXJ0PjEwMHx8dGhpcy5kZXZpY2VJc0lPUyYmd2luZG93LnRvcCE9PXdpbmRvdyYmdGFyZ2V0VGFnTmFtZT09PVwiaW5wdXRcIil7dGhpcy50YXJnZXRFbGVtZW50PW51bGw7cmV0dXJuIGZhbHNlfXRoaXMuZm9jdXModGFyZ2V0RWxlbWVudCk7aWYoIXRoaXMuZGV2aWNlSXNJT1M0fHx0YXJnZXRUYWdOYW1lIT09XCJzZWxlY3RcIil7dGhpcy50YXJnZXRFbGVtZW50PW51bGw7ZXZlbnQucHJldmVudERlZmF1bHQoKX1yZXR1cm4gZmFsc2V9aWYodGhpcy5kZXZpY2VJc0lPUyYmIXRoaXMuZGV2aWNlSXNJT1M0KXtzY3JvbGxQYXJlbnQ9dGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQ7aWYoc2Nyb2xsUGFyZW50JiZzY3JvbGxQYXJlbnQuZmFzdENsaWNrTGFzdFNjcm9sbFRvcCE9PXNjcm9sbFBhcmVudC5zY3JvbGxUb3Ape3JldHVybiB0cnVlfX1pZighdGhpcy5uZWVkc0NsaWNrKHRhcmdldEVsZW1lbnQpKXtldmVudC5wcmV2ZW50RGVmYXVsdCgpO3RoaXMuc2VuZENsaWNrKHRhcmdldEVsZW1lbnQsZXZlbnQpfXJldHVybiBmYWxzZX07RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoQ2FuY2VsPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dGhpcy50cmFja2luZ0NsaWNrPWZhbHNlO3RoaXMudGFyZ2V0RWxlbWVudD1udWxsfTtGYXN0Q2xpY2sucHJvdG90eXBlLm9uTW91c2U9ZnVuY3Rpb24oZXZlbnQpe1widXNlIHN0cmljdFwiO2lmKCF0aGlzLnRhcmdldEVsZW1lbnQpe3JldHVybiB0cnVlfWlmKGV2ZW50LmZvcndhcmRlZFRvdWNoRXZlbnQpe3JldHVybiB0cnVlfWlmKCFldmVudC5jYW5jZWxhYmxlKXtyZXR1cm4gdHJ1ZX1pZighdGhpcy5uZWVkc0NsaWNrKHRoaXMudGFyZ2V0RWxlbWVudCl8fHRoaXMuY2FuY2VsTmV4dENsaWNrKXtpZihldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24pe2V2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpfWVsc2V7ZXZlbnQucHJvcGFnYXRpb25TdG9wcGVkPXRydWV9ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7ZXZlbnQucHJldmVudERlZmF1bHQoKTtyZXR1cm4gZmFsc2V9cmV0dXJuIHRydWV9O0Zhc3RDbGljay5wcm90b3R5cGUub25DbGljaz1mdW5jdGlvbihldmVudCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHBlcm1pdHRlZDtpZih0aGlzLnRyYWNraW5nQ2xpY2spe3RoaXMudGFyZ2V0RWxlbWVudD1udWxsO3RoaXMudHJhY2tpbmdDbGljaz1mYWxzZTtyZXR1cm4gdHJ1ZX1pZihldmVudC50YXJnZXQudHlwZT09PVwic3VibWl0XCImJmV2ZW50LmRldGFpbD09PTApe3JldHVybiB0cnVlfXBlcm1pdHRlZD10aGlzLm9uTW91c2UoZXZlbnQpO2lmKCFwZXJtaXR0ZWQpe3RoaXMudGFyZ2V0RWxlbWVudD1udWxsfXJldHVybiBwZXJtaXR0ZWR9O0Zhc3RDbGljay5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBsYXllcj10aGlzLmxheWVyO2lmKHRoaXMuZGV2aWNlSXNBbmRyb2lkKXtsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsdGhpcy5vbk1vdXNlLHRydWUpO2xheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm9uTW91c2UsdHJ1ZSk7bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm9uTW91c2UsdHJ1ZSl9bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5vbkNsaWNrLHRydWUpO2xheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy5vblRvdWNoU3RhcnQsZmFsc2UpO2xheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLm9uVG91Y2hNb3ZlLGZhbHNlKTtsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLm9uVG91Y2hFbmQsZmFsc2UpO2xheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLHRoaXMub25Ub3VjaENhbmNlbCxmYWxzZSl9O0Zhc3RDbGljay5ub3ROZWVkZWQ9ZnVuY3Rpb24obGF5ZXIpe1widXNlIHN0cmljdFwiO3ZhciBtZXRhVmlld3BvcnQ7dmFyIGNocm9tZVZlcnNpb247aWYodHlwZW9mIHdpbmRvdy5vbnRvdWNoc3RhcnQ9PT1cInVuZGVmaW5lZFwiKXtyZXR1cm4gdHJ1ZX1jaHJvbWVWZXJzaW9uPSsoL0Nocm9tZVxcLyhbMC05XSspLy5leGVjKG5hdmlnYXRvci51c2VyQWdlbnQpfHxbLDBdKVsxXTtpZihjaHJvbWVWZXJzaW9uKXtpZihGYXN0Q2xpY2sucHJvdG90eXBlLmRldmljZUlzQW5kcm9pZCl7bWV0YVZpZXdwb3J0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW25hbWU9dmlld3BvcnRdXCIpO2lmKG1ldGFWaWV3cG9ydCl7aWYobWV0YVZpZXdwb3J0LmNvbnRlbnQuaW5kZXhPZihcInVzZXItc2NhbGFibGU9bm9cIikhPT0tMSl7cmV0dXJuIHRydWV9aWYoY2hyb21lVmVyc2lvbj4zMSYmd2luZG93LmlubmVyV2lkdGg8PXdpbmRvdy5zY3JlZW4ud2lkdGgpe3JldHVybiB0cnVlfX19ZWxzZXtyZXR1cm4gdHJ1ZX19aWYobGF5ZXIuc3R5bGUubXNUb3VjaEFjdGlvbj09PVwibm9uZVwiKXtyZXR1cm4gdHJ1ZX1yZXR1cm4gZmFsc2V9O0Zhc3RDbGljay5hdHRhY2g9ZnVuY3Rpb24obGF5ZXIpe1widXNlIHN0cmljdFwiO3JldHVybiBuZXcgRmFzdENsaWNrKGxheWVyKX07aWYodHlwZW9mIGRlZmluZSE9PVwidW5kZWZpbmVkXCImJmRlZmluZS5hbWQpe2RlZmluZShmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3JldHVybiBGYXN0Q2xpY2t9KX1lbHNlIGlmKHR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiJiZtb2R1bGUuZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9RmFzdENsaWNrLmF0dGFjaDttb2R1bGUuZXhwb3J0cy5GYXN0Q2xpY2s9RmFzdENsaWNrfWVsc2V7d2luZG93LkZhc3RDbGljaz1GYXN0Q2xpY2t9fSk7cmVxdWlyZS5yZWdpc3RlcihcImNvbXBvbmVudH5pbmRleG9mQDAuMC4zXCIsZnVuY3Rpb24oZXhwb3J0cyxtb2R1bGUpe21vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGFycixvYmope2lmKGFyci5pbmRleE9mKXJldHVybiBhcnIuaW5kZXhPZihvYmopO2Zvcih2YXIgaT0wO2k8YXJyLmxlbmd0aDsrK2kpe2lmKGFycltpXT09PW9iailyZXR1cm4gaX1yZXR1cm4tMX19KTtyZXF1aXJlLnJlZ2lzdGVyKFwiY29tcG9uZW50fmNsYXNzZXNAMS4yLjFcIixmdW5jdGlvbihleHBvcnRzLG1vZHVsZSl7dmFyIGluZGV4PXJlcXVpcmUoXCJjb21wb25lbnR+aW5kZXhvZkAwLjAuM1wiKTt2YXIgcmU9L1xccysvO3ZhciB0b1N0cmluZz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO21vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGVsKXtyZXR1cm4gbmV3IENsYXNzTGlzdChlbCl9O2Z1bmN0aW9uIENsYXNzTGlzdChlbCl7aWYoIWVsKXRocm93IG5ldyBFcnJvcihcIkEgRE9NIGVsZW1lbnQgcmVmZXJlbmNlIGlzIHJlcXVpcmVkXCIpO3RoaXMuZWw9ZWw7dGhpcy5saXN0PWVsLmNsYXNzTGlzdH1DbGFzc0xpc3QucHJvdG90eXBlLmFkZD1mdW5jdGlvbihuYW1lKXtpZih0aGlzLmxpc3Qpe3RoaXMubGlzdC5hZGQobmFtZSk7cmV0dXJuIHRoaXN9dmFyIGFycj10aGlzLmFycmF5KCk7dmFyIGk9aW5kZXgoYXJyLG5hbWUpO2lmKCF+aSlhcnIucHVzaChuYW1lKTt0aGlzLmVsLmNsYXNzTmFtZT1hcnIuam9pbihcIiBcIik7cmV0dXJuIHRoaXN9O0NsYXNzTGlzdC5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKG5hbWUpe2lmKFwiW29iamVjdCBSZWdFeHBdXCI9PXRvU3RyaW5nLmNhbGwobmFtZSkpe3JldHVybiB0aGlzLnJlbW92ZU1hdGNoaW5nKG5hbWUpfWlmKHRoaXMubGlzdCl7dGhpcy5saXN0LnJlbW92ZShuYW1lKTtyZXR1cm4gdGhpc312YXIgYXJyPXRoaXMuYXJyYXkoKTt2YXIgaT1pbmRleChhcnIsbmFtZSk7aWYofmkpYXJyLnNwbGljZShpLDEpO3RoaXMuZWwuY2xhc3NOYW1lPWFyci5qb2luKFwiIFwiKTtyZXR1cm4gdGhpc307Q2xhc3NMaXN0LnByb3RvdHlwZS5yZW1vdmVNYXRjaGluZz1mdW5jdGlvbihyZSl7dmFyIGFycj10aGlzLmFycmF5KCk7Zm9yKHZhciBpPTA7aTxhcnIubGVuZ3RoO2krKyl7aWYocmUudGVzdChhcnJbaV0pKXt0aGlzLnJlbW92ZShhcnJbaV0pfX1yZXR1cm4gdGhpc307Q2xhc3NMaXN0LnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24obmFtZSxmb3JjZSl7aWYodGhpcy5saXN0KXtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGZvcmNlKXtpZihmb3JjZSE9PXRoaXMubGlzdC50b2dnbGUobmFtZSxmb3JjZSkpe3RoaXMubGlzdC50b2dnbGUobmFtZSl9fWVsc2V7dGhpcy5saXN0LnRvZ2dsZShuYW1lKX1yZXR1cm4gdGhpc31pZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGZvcmNlKXtpZighZm9yY2Upe3RoaXMucmVtb3ZlKG5hbWUpfWVsc2V7dGhpcy5hZGQobmFtZSl9fWVsc2V7aWYodGhpcy5oYXMobmFtZSkpe3RoaXMucmVtb3ZlKG5hbWUpfWVsc2V7dGhpcy5hZGQobmFtZSl9fXJldHVybiB0aGlzfTtDbGFzc0xpc3QucHJvdG90eXBlLmFycmF5PWZ1bmN0aW9uKCl7dmFyIHN0cj10aGlzLmVsLmNsYXNzTmFtZS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLFwiXCIpO3ZhciBhcnI9c3RyLnNwbGl0KHJlKTtpZihcIlwiPT09YXJyWzBdKWFyci5zaGlmdCgpO3JldHVybiBhcnJ9O0NsYXNzTGlzdC5wcm90b3R5cGUuaGFzPUNsYXNzTGlzdC5wcm90b3R5cGUuY29udGFpbnM9ZnVuY3Rpb24obmFtZSl7cmV0dXJuIHRoaXMubGlzdD90aGlzLmxpc3QuY29udGFpbnMobmFtZSk6ISF+aW5kZXgodGhpcy5hcnJheSgpLG5hbWUpfX0pO3JlcXVpcmUucmVnaXN0ZXIoXCJjb21wb25lbnR+ZXZlbnRAMC4xLjRcIixmdW5jdGlvbihleHBvcnRzLG1vZHVsZSl7dmFyIGJpbmQ9d2luZG93LmFkZEV2ZW50TGlzdGVuZXI/XCJhZGRFdmVudExpc3RlbmVyXCI6XCJhdHRhY2hFdmVudFwiLHVuYmluZD13aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcj9cInJlbW92ZUV2ZW50TGlzdGVuZXJcIjpcImRldGFjaEV2ZW50XCIscHJlZml4PWJpbmQhPT1cImFkZEV2ZW50TGlzdGVuZXJcIj9cIm9uXCI6XCJcIjtleHBvcnRzLmJpbmQ9ZnVuY3Rpb24oZWwsdHlwZSxmbixjYXB0dXJlKXtlbFtiaW5kXShwcmVmaXgrdHlwZSxmbixjYXB0dXJlfHxmYWxzZSk7cmV0dXJuIGZufTtleHBvcnRzLnVuYmluZD1mdW5jdGlvbihlbCx0eXBlLGZuLGNhcHR1cmUpe2VsW3VuYmluZF0ocHJlZml4K3R5cGUsZm4sY2FwdHVyZXx8ZmFsc2UpO3JldHVybiBmbn19KTtyZXF1aXJlLnJlZ2lzdGVyKFwiY29tcG9uZW50fnF1ZXJ5QDAuMC4zXCIsZnVuY3Rpb24oZXhwb3J0cyxtb2R1bGUpe2Z1bmN0aW9uIG9uZShzZWxlY3RvcixlbCl7cmV0dXJuIGVsLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpfWV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oc2VsZWN0b3IsZWwpe2VsPWVsfHxkb2N1bWVudDtyZXR1cm4gb25lKHNlbGVjdG9yLGVsKX07ZXhwb3J0cy5hbGw9ZnVuY3Rpb24oc2VsZWN0b3IsZWwpe2VsPWVsfHxkb2N1bWVudDtyZXR1cm4gZWwucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcil9O2V4cG9ydHMuZW5naW5lPWZ1bmN0aW9uKG9iail7aWYoIW9iai5vbmUpdGhyb3cgbmV3IEVycm9yKFwiLm9uZSBjYWxsYmFjayByZXF1aXJlZFwiKTtpZighb2JqLmFsbCl0aHJvdyBuZXcgRXJyb3IoXCIuYWxsIGNhbGxiYWNrIHJlcXVpcmVkXCIpO29uZT1vYmoub25lO2V4cG9ydHMuYWxsPW9iai5hbGw7cmV0dXJuIGV4cG9ydHN9fSk7cmVxdWlyZS5yZWdpc3RlcihcImNvbXBvbmVudH5tYXRjaGVzLXNlbGVjdG9yQDAuMS41XCIsZnVuY3Rpb24oZXhwb3J0cyxtb2R1bGUpe3ZhciBxdWVyeT1yZXF1aXJlKFwiY29tcG9uZW50fnF1ZXJ5QDAuMC4zXCIpO3ZhciBwcm90bz1FbGVtZW50LnByb3RvdHlwZTt2YXIgdmVuZG9yPXByb3RvLm1hdGNoZXN8fHByb3RvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8cHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yfHxwcm90by5tc01hdGNoZXNTZWxlY3Rvcnx8cHJvdG8ub01hdGNoZXNTZWxlY3Rvcjttb2R1bGUuZXhwb3J0cz1tYXRjaDtmdW5jdGlvbiBtYXRjaChlbCxzZWxlY3Rvcil7aWYoIWVsfHxlbC5ub2RlVHlwZSE9PTEpcmV0dXJuIGZhbHNlO2lmKHZlbmRvcilyZXR1cm4gdmVuZG9yLmNhbGwoZWwsc2VsZWN0b3IpO3ZhciBub2Rlcz1xdWVyeS5hbGwoc2VsZWN0b3IsZWwucGFyZW50Tm9kZSk7Zm9yKHZhciBpPTA7aTxub2Rlcy5sZW5ndGg7KytpKXtpZihub2Rlc1tpXT09ZWwpcmV0dXJuIHRydWV9cmV0dXJuIGZhbHNlfX0pO3JlcXVpcmUucmVnaXN0ZXIoXCJjb21wb25lbnR+Y2xvc2VzdEAwLjEuNFwiLGZ1bmN0aW9uKGV4cG9ydHMsbW9kdWxlKXt2YXIgbWF0Y2hlcz1yZXF1aXJlKFwiY29tcG9uZW50fm1hdGNoZXMtc2VsZWN0b3JAMC4xLjVcIik7bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oZWxlbWVudCxzZWxlY3RvcixjaGVja1lvU2VsZixyb290KXtlbGVtZW50PWNoZWNrWW9TZWxmP3twYXJlbnROb2RlOmVsZW1lbnR9OmVsZW1lbnQ7cm9vdD1yb290fHxkb2N1bWVudDt3aGlsZSgoZWxlbWVudD1lbGVtZW50LnBhcmVudE5vZGUpJiZlbGVtZW50IT09ZG9jdW1lbnQpe2lmKG1hdGNoZXMoZWxlbWVudCxzZWxlY3RvcikpcmV0dXJuIGVsZW1lbnQ7aWYoZWxlbWVudD09PXJvb3QpcmV0dXJufX19KTtyZXF1aXJlLnJlZ2lzdGVyKFwiY29tcG9uZW50fmRlbGVnYXRlQDAuMi4zXCIsZnVuY3Rpb24oZXhwb3J0cyxtb2R1bGUpe3ZhciBjbG9zZXN0PXJlcXVpcmUoXCJjb21wb25lbnR+Y2xvc2VzdEAwLjEuNFwiKSxldmVudD1yZXF1aXJlKFwiY29tcG9uZW50fmV2ZW50QDAuMS40XCIpO2V4cG9ydHMuYmluZD1mdW5jdGlvbihlbCxzZWxlY3Rvcix0eXBlLGZuLGNhcHR1cmUpe3JldHVybiBldmVudC5iaW5kKGVsLHR5cGUsZnVuY3Rpb24oZSl7dmFyIHRhcmdldD1lLnRhcmdldHx8ZS5zcmNFbGVtZW50O2UuZGVsZWdhdGVUYXJnZXQ9Y2xvc2VzdCh0YXJnZXQsc2VsZWN0b3IsdHJ1ZSxlbCk7aWYoZS5kZWxlZ2F0ZVRhcmdldClmbi5jYWxsKGVsLGUpfSxjYXB0dXJlKX07ZXhwb3J0cy51bmJpbmQ9ZnVuY3Rpb24oZWwsdHlwZSxmbixjYXB0dXJlKXtldmVudC51bmJpbmQoZWwsdHlwZSxmbixjYXB0dXJlKX19KTtyZXF1aXJlLnJlZ2lzdGVyKFwiY29tcG9uZW50fmV2ZW50c0AxLjAuOVwiLGZ1bmN0aW9uKGV4cG9ydHMsbW9kdWxlKXt2YXIgZXZlbnRzPXJlcXVpcmUoXCJjb21wb25lbnR+ZXZlbnRAMC4xLjRcIik7dmFyIGRlbGVnYXRlPXJlcXVpcmUoXCJjb21wb25lbnR+ZGVsZWdhdGVAMC4yLjNcIik7bW9kdWxlLmV4cG9ydHM9RXZlbnRzO2Z1bmN0aW9uIEV2ZW50cyhlbCxvYmope2lmKCEodGhpcyBpbnN0YW5jZW9mIEV2ZW50cykpcmV0dXJuIG5ldyBFdmVudHMoZWwsb2JqKTtpZighZWwpdGhyb3cgbmV3IEVycm9yKFwiZWxlbWVudCByZXF1aXJlZFwiKTtpZighb2JqKXRocm93IG5ldyBFcnJvcihcIm9iamVjdCByZXF1aXJlZFwiKTt0aGlzLmVsPWVsO3RoaXMub2JqPW9iajt0aGlzLl9ldmVudHM9e319RXZlbnRzLnByb3RvdHlwZS5zdWI9ZnVuY3Rpb24oZXZlbnQsbWV0aG9kLGNiKXt0aGlzLl9ldmVudHNbZXZlbnRdPXRoaXMuX2V2ZW50c1tldmVudF18fHt9O3RoaXMuX2V2ZW50c1tldmVudF1bbWV0aG9kXT1jYn07RXZlbnRzLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGV2ZW50LG1ldGhvZCl7dmFyIGU9cGFyc2UoZXZlbnQpO3ZhciBlbD10aGlzLmVsO3ZhciBvYmo9dGhpcy5vYmo7dmFyIG5hbWU9ZS5uYW1lO3ZhciBtZXRob2Q9bWV0aG9kfHxcIm9uXCIrbmFtZTt2YXIgYXJncz1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cywyKTtmdW5jdGlvbiBjYigpe3ZhciBhPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5jb25jYXQoYXJncyk7b2JqW21ldGhvZF0uYXBwbHkob2JqLGEpfWlmKGUuc2VsZWN0b3Ipe2NiPWRlbGVnYXRlLmJpbmQoZWwsZS5zZWxlY3RvcixuYW1lLGNiKX1lbHNle2V2ZW50cy5iaW5kKGVsLG5hbWUsY2IpfXRoaXMuc3ViKG5hbWUsbWV0aG9kLGNiKTtyZXR1cm4gY2J9O0V2ZW50cy5wcm90b3R5cGUudW5iaW5kPWZ1bmN0aW9uKGV2ZW50LG1ldGhvZCl7aWYoMD09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy51bmJpbmRBbGwoKTtpZigxPT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLnVuYmluZEFsbE9mKGV2ZW50KTt2YXIgYmluZGluZ3M9dGhpcy5fZXZlbnRzW2V2ZW50XTtpZighYmluZGluZ3MpcmV0dXJuO3ZhciBjYj1iaW5kaW5nc1ttZXRob2RdO2lmKCFjYilyZXR1cm47ZXZlbnRzLnVuYmluZCh0aGlzLmVsLGV2ZW50LGNiKX07RXZlbnRzLnByb3RvdHlwZS51bmJpbmRBbGw9ZnVuY3Rpb24oKXtmb3IodmFyIGV2ZW50IGluIHRoaXMuX2V2ZW50cyl7dGhpcy51bmJpbmRBbGxPZihldmVudCl9fTtFdmVudHMucHJvdG90eXBlLnVuYmluZEFsbE9mPWZ1bmN0aW9uKGV2ZW50KXt2YXIgYmluZGluZ3M9dGhpcy5fZXZlbnRzW2V2ZW50XTtpZighYmluZGluZ3MpcmV0dXJuO2Zvcih2YXIgbWV0aG9kIGluIGJpbmRpbmdzKXt0aGlzLnVuYmluZChldmVudCxtZXRob2QpfX07ZnVuY3Rpb24gcGFyc2UoZXZlbnQpe3ZhciBwYXJ0cz1ldmVudC5zcGxpdCgvICsvKTtyZXR1cm57bmFtZTpwYXJ0cy5zaGlmdCgpLHNlbGVjdG9yOnBhcnRzLmpvaW4oXCIgXCIpfX19KTtyZXF1aXJlLnJlZ2lzdGVyKFwic3dpdGNoZXJ5XCIsZnVuY3Rpb24oZXhwb3J0cyxtb2R1bGUpe3ZhciB0cmFuc2l0aW9uaXplPXJlcXVpcmUoXCJhYnBldGtvdn50cmFuc2l0aW9uaXplQDAuMC4zXCIpLGZhc3RjbGljaz1yZXF1aXJlKFwiZnRsYWJzfmZhc3RjbGlja0B2MC42LjExXCIpLGNsYXNzZXM9cmVxdWlyZShcImNvbXBvbmVudH5jbGFzc2VzQDEuMi4xXCIpLGV2ZW50cz1yZXF1aXJlKFwiY29tcG9uZW50fmV2ZW50c0AxLjAuOVwiKTttb2R1bGUuZXhwb3J0cz1Td2l0Y2hlcnk7dmFyIGRlZmF1bHRzPXtjb2xvcjpcIiM2NGJkNjNcIixzZWNvbmRhcnlDb2xvcjpcIiNkZmRmZGZcIixqYWNrQ29sb3I6XCIjZmZmXCIsamFja1NlY29uZGFyeUNvbG9yOm51bGwsY2xhc3NOYW1lOlwic3dpdGNoZXJ5XCIsZGlzYWJsZWQ6ZmFsc2UsZGlzYWJsZWRPcGFjaXR5Oi41LHNwZWVkOlwiMC40c1wiLHNpemU6XCJkZWZhdWx0XCJ9O2Z1bmN0aW9uIFN3aXRjaGVyeShlbGVtZW50LG9wdGlvbnMpe2lmKCEodGhpcyBpbnN0YW5jZW9mIFN3aXRjaGVyeSkpcmV0dXJuIG5ldyBTd2l0Y2hlcnkoZWxlbWVudCxvcHRpb25zKTt0aGlzLmVsZW1lbnQ9ZWxlbWVudDt0aGlzLm9wdGlvbnM9b3B0aW9uc3x8e307Zm9yKHZhciBpIGluIGRlZmF1bHRzKXtpZih0aGlzLm9wdGlvbnNbaV09PW51bGwpe3RoaXMub3B0aW9uc1tpXT1kZWZhdWx0c1tpXX19aWYodGhpcy5lbGVtZW50IT1udWxsJiZ0aGlzLmVsZW1lbnQudHlwZT09XCJjaGVja2JveFwiKXRoaXMuaW5pdCgpO2lmKHRoaXMuaXNEaXNhYmxlZCgpPT09dHJ1ZSl0aGlzLmRpc2FibGUoKX1Td2l0Y2hlcnkucHJvdG90eXBlLmhpZGU9ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIn07U3dpdGNoZXJ5LnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKCl7dmFyIHN3aXRjaGVyPXRoaXMuY3JlYXRlKCk7dGhpcy5pbnNlcnRBZnRlcih0aGlzLmVsZW1lbnQsc3dpdGNoZXIpfTtTd2l0Y2hlcnkucHJvdG90eXBlLmNyZWF0ZT1mdW5jdGlvbigpe3RoaXMuc3dpdGNoZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5qYWNrPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzbWFsbFwiKTt0aGlzLnN3aXRjaGVyLmFwcGVuZENoaWxkKHRoaXMuamFjayk7dGhpcy5zd2l0Y2hlci5jbGFzc05hbWU9dGhpcy5vcHRpb25zLmNsYXNzTmFtZTt0aGlzLmV2ZW50cz1ldmVudHModGhpcy5zd2l0Y2hlcix0aGlzKTtyZXR1cm4gdGhpcy5zd2l0Y2hlcn07U3dpdGNoZXJ5LnByb3RvdHlwZS5pbnNlcnRBZnRlcj1mdW5jdGlvbihyZWZlcmVuY2UsdGFyZ2V0KXtyZWZlcmVuY2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFyZ2V0LHJlZmVyZW5jZS5uZXh0U2libGluZyl9O1N3aXRjaGVyeS5wcm90b3R5cGUuc2V0UG9zaXRpb249ZnVuY3Rpb24oY2xpY2tlZCl7dmFyIGNoZWNrZWQ9dGhpcy5pc0NoZWNrZWQoKSxzd2l0Y2hlcj10aGlzLnN3aXRjaGVyLGphY2s9dGhpcy5qYWNrO2lmKGNsaWNrZWQmJmNoZWNrZWQpY2hlY2tlZD1mYWxzZTtlbHNlIGlmKGNsaWNrZWQmJiFjaGVja2VkKWNoZWNrZWQ9dHJ1ZTtpZihjaGVja2VkPT09dHJ1ZSl7dGhpcy5lbGVtZW50LmNoZWNrZWQ9dHJ1ZTtpZih3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSlqYWNrLnN0eWxlLmxlZnQ9cGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoc3dpdGNoZXIpLndpZHRoKS1wYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShqYWNrKS53aWR0aCkrXCJweFwiO2Vsc2UgamFjay5zdHlsZS5sZWZ0PXBhcnNlSW50KHN3aXRjaGVyLmN1cnJlbnRTdHlsZVtcIndpZHRoXCJdKS1wYXJzZUludChqYWNrLmN1cnJlbnRTdHlsZVtcIndpZHRoXCJdKStcInB4XCI7aWYodGhpcy5vcHRpb25zLmNvbG9yKXRoaXMuY29sb3JpemUoKTt0aGlzLnNldFNwZWVkKCl9ZWxzZXtqYWNrLnN0eWxlLmxlZnQ9MDt0aGlzLmVsZW1lbnQuY2hlY2tlZD1mYWxzZTt0aGlzLnN3aXRjaGVyLnN0eWxlLmJveFNoYWRvdz1cImluc2V0IDAgMCAwIDAgXCIrdGhpcy5vcHRpb25zLnNlY29uZGFyeUNvbG9yO3RoaXMuc3dpdGNoZXIuc3R5bGUuYm9yZGVyQ29sb3I9dGhpcy5vcHRpb25zLnNlY29uZGFyeUNvbG9yO3RoaXMuc3dpdGNoZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yPXRoaXMub3B0aW9ucy5zZWNvbmRhcnlDb2xvciE9PWRlZmF1bHRzLnNlY29uZGFyeUNvbG9yP3RoaXMub3B0aW9ucy5zZWNvbmRhcnlDb2xvcjpcIiNmZmZcIjt0aGlzLmphY2suc3R5bGUuYmFja2dyb3VuZENvbG9yPXRoaXMub3B0aW9ucy5qYWNrU2Vjb25kYXJ5Q29sb3IhPT10aGlzLm9wdGlvbnMuamFja0NvbG9yP3RoaXMub3B0aW9ucy5qYWNrU2Vjb25kYXJ5Q29sb3I6dGhpcy5vcHRpb25zLmphY2tDb2xvcjt0aGlzLnNldFNwZWVkKCl9fTtTd2l0Y2hlcnkucHJvdG90eXBlLnNldFNwZWVkPWZ1bmN0aW9uKCl7dmFyIHN3aXRjaGVyUHJvcD17fSxqYWNrUHJvcD17XCJiYWNrZ3JvdW5kLWNvbG9yXCI6dGhpcy5vcHRpb25zLnNwZWVkLGxlZnQ6dGhpcy5vcHRpb25zLnNwZWVkLnJlcGxhY2UoL1thLXpdLyxcIlwiKS8yK1wic1wifTtpZih0aGlzLmlzQ2hlY2tlZCgpKXtzd2l0Y2hlclByb3A9e2JvcmRlcjp0aGlzLm9wdGlvbnMuc3BlZWQsXCJib3gtc2hhZG93XCI6dGhpcy5vcHRpb25zLnNwZWVkLFwiYmFja2dyb3VuZC1jb2xvclwiOnRoaXMub3B0aW9ucy5zcGVlZC5yZXBsYWNlKC9bYS16XS8sXCJcIikqMytcInNcIn19ZWxzZXtzd2l0Y2hlclByb3A9e2JvcmRlcjp0aGlzLm9wdGlvbnMuc3BlZWQsXCJib3gtc2hhZG93XCI6dGhpcy5vcHRpb25zLnNwZWVkfX10cmFuc2l0aW9uaXplKHRoaXMuc3dpdGNoZXIsc3dpdGNoZXJQcm9wKTt0cmFuc2l0aW9uaXplKHRoaXMuamFjayxqYWNrUHJvcCl9O1N3aXRjaGVyeS5wcm90b3R5cGUuc2V0U2l6ZT1mdW5jdGlvbigpe3ZhciBzbWFsbD1cInN3aXRjaGVyeS1zbWFsbFwiLG5vcm1hbD1cInN3aXRjaGVyeS1kZWZhdWx0XCIsbGFyZ2U9XCJzd2l0Y2hlcnktbGFyZ2VcIjtzd2l0Y2godGhpcy5vcHRpb25zLnNpemUpe2Nhc2VcInNtYWxsXCI6Y2xhc3Nlcyh0aGlzLnN3aXRjaGVyKS5hZGQoc21hbGwpO2JyZWFrO2Nhc2VcImxhcmdlXCI6Y2xhc3Nlcyh0aGlzLnN3aXRjaGVyKS5hZGQobGFyZ2UpO2JyZWFrO2RlZmF1bHQ6Y2xhc3Nlcyh0aGlzLnN3aXRjaGVyKS5hZGQobm9ybWFsKTticmVha319O1N3aXRjaGVyeS5wcm90b3R5cGUuY29sb3JpemU9ZnVuY3Rpb24oKXt2YXIgc3dpdGNoZXJIZWlnaHQ9dGhpcy5zd2l0Y2hlci5vZmZzZXRIZWlnaHQvMjt0aGlzLnN3aXRjaGVyLnN0eWxlLmJhY2tncm91bmRDb2xvcj10aGlzLm9wdGlvbnMuY29sb3I7dGhpcy5zd2l0Y2hlci5zdHlsZS5ib3JkZXJDb2xvcj10aGlzLm9wdGlvbnMuY29sb3I7dGhpcy5zd2l0Y2hlci5zdHlsZS5ib3hTaGFkb3c9XCJpbnNldCAwIDAgMCBcIitzd2l0Y2hlckhlaWdodCtcInB4IFwiK3RoaXMub3B0aW9ucy5jb2xvcjt0aGlzLmphY2suc3R5bGUuYmFja2dyb3VuZENvbG9yPXRoaXMub3B0aW9ucy5qYWNrQ29sb3J9O1N3aXRjaGVyeS5wcm90b3R5cGUuaGFuZGxlT25jaGFuZ2U9ZnVuY3Rpb24oc3RhdGUpe2lmKGRvY3VtZW50LmRpc3BhdGNoRXZlbnQpe3ZhciBldmVudD1kb2N1bWVudC5jcmVhdGVFdmVudChcIkhUTUxFdmVudHNcIik7ZXZlbnQuaW5pdEV2ZW50KFwiY2hhbmdlXCIsdHJ1ZSx0cnVlKTt0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCl9ZWxzZXt0aGlzLmVsZW1lbnQuZmlyZUV2ZW50KFwib25jaGFuZ2VcIil9fTtTd2l0Y2hlcnkucHJvdG90eXBlLmhhbmRsZUNoYW5nZT1mdW5jdGlvbigpe3ZhciBzZWxmPXRoaXMsZWw9dGhpcy5lbGVtZW50O2lmKGVsLmFkZEV2ZW50TGlzdGVuZXIpe2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixmdW5jdGlvbigpe3NlbGYuc2V0UG9zaXRpb24oKX0pfWVsc2V7ZWwuYXR0YWNoRXZlbnQoXCJvbmNoYW5nZVwiLGZ1bmN0aW9uKCl7c2VsZi5zZXRQb3NpdGlvbigpfSl9fTtTd2l0Y2hlcnkucHJvdG90eXBlLmhhbmRsZUNsaWNrPWZ1bmN0aW9uKCl7dmFyIHN3aXRjaGVyPXRoaXMuc3dpdGNoZXI7ZmFzdGNsaWNrKHN3aXRjaGVyKTt0aGlzLmV2ZW50cy5iaW5kKFwiY2xpY2tcIixcImJpbmRDbGlja1wiKX07U3dpdGNoZXJ5LnByb3RvdHlwZS5iaW5kQ2xpY2s9ZnVuY3Rpb24oKXt2YXIgcGFyZW50PXRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSxsYWJlbFBhcmVudD1wYXJlbnQ9PT1cImxhYmVsXCI/ZmFsc2U6dHJ1ZTt0aGlzLnNldFBvc2l0aW9uKGxhYmVsUGFyZW50KTt0aGlzLmhhbmRsZU9uY2hhbmdlKHRoaXMuZWxlbWVudC5jaGVja2VkKX07U3dpdGNoZXJ5LnByb3RvdHlwZS5tYXJrQXNTd2l0Y2hlZD1mdW5jdGlvbigpe3RoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN3aXRjaGVyeVwiLHRydWUpfTtTd2l0Y2hlcnkucHJvdG90eXBlLm1hcmtlZEFzU3dpdGNoZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtc3dpdGNoZXJ5XCIpfTtTd2l0Y2hlcnkucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oKXt0aGlzLmhpZGUoKTt0aGlzLnNob3coKTt0aGlzLnNldFNpemUoKTt0aGlzLnNldFBvc2l0aW9uKCk7dGhpcy5tYXJrQXNTd2l0Y2hlZCgpO3RoaXMuaGFuZGxlQ2hhbmdlKCk7dGhpcy5oYW5kbGVDbGljaygpfTtTd2l0Y2hlcnkucHJvdG90eXBlLmlzQ2hlY2tlZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVsZW1lbnQuY2hlY2tlZH07U3dpdGNoZXJ5LnByb3RvdHlwZS5pc0Rpc2FibGVkPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub3B0aW9ucy5kaXNhYmxlZHx8dGhpcy5lbGVtZW50LmRpc2FibGVkfHx0aGlzLmVsZW1lbnQucmVhZE9ubHl9O1N3aXRjaGVyeS5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMuZXZlbnRzLnVuYmluZCgpfTtTd2l0Y2hlcnkucHJvdG90eXBlLmVuYWJsZT1mdW5jdGlvbigpe2lmKCF0aGlzLm9wdGlvbnMuZGlzYWJsZWQpcmV0dXJuO2lmKHRoaXMub3B0aW9ucy5kaXNhYmxlZCl0aGlzLm9wdGlvbnMuZGlzYWJsZWQ9ZmFsc2U7aWYodGhpcy5lbGVtZW50LmRpc2FibGVkKXRoaXMuZWxlbWVudC5kaXNhYmxlZD1mYWxzZTtpZih0aGlzLmVsZW1lbnQucmVhZE9ubHkpdGhpcy5lbGVtZW50LnJlYWRPbmx5PWZhbHNlO3RoaXMuc3dpdGNoZXIuc3R5bGUub3BhY2l0eT0xO3RoaXMuZXZlbnRzLmJpbmQoXCJjbGlja1wiLFwiYmluZENsaWNrXCIpfTtTd2l0Y2hlcnkucHJvdG90eXBlLmRpc2FibGU9ZnVuY3Rpb24oKXtpZih0aGlzLm9wdGlvbnMuZGlzYWJsZWQpcmV0dXJuO2lmKCF0aGlzLm9wdGlvbnMuZGlzYWJsZWQpdGhpcy5vcHRpb25zLmRpc2FibGVkPXRydWU7aWYoIXRoaXMuZWxlbWVudC5kaXNhYmxlZCl0aGlzLmVsZW1lbnQuZGlzYWJsZWQ9dHJ1ZTtpZighdGhpcy5lbGVtZW50LnJlYWRPbmx5KXRoaXMuZWxlbWVudC5yZWFkT25seT10cnVlO3RoaXMuc3dpdGNoZXIuc3R5bGUub3BhY2l0eT10aGlzLm9wdGlvbnMuZGlzYWJsZWRPcGFjaXR5O3RoaXMuZGVzdHJveSgpfX0pO2lmKHR5cGVvZiBleHBvcnRzPT1cIm9iamVjdFwiKXttb2R1bGUuZXhwb3J0cz1yZXF1aXJlKFwic3dpdGNoZXJ5XCIpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoXCJTd2l0Y2hlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiByZXF1aXJlKFwic3dpdGNoZXJ5XCIpfSl9ZWxzZXsodGhpc3x8d2luZG93KVtcIlN3aXRjaGVyeVwiXT1yZXF1aXJlKFwic3dpdGNoZXJ5XCIpfX0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==