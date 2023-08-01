(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~Vtfacturefrscab~affectation_conge~alimentation~alimentationCaisse~app~archiveV1~cb_fabricati~499f945d"],{

/***/ "./node_modules/ladda/js/ladda.js":
/*!****************************************!*\
  !*** ./node_modules/ladda/js/ladda.js ***!
  \****************************************/
/*! exports provided: create, bind, stopAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopAll", function() { return stopAll; });
/* harmony import */ var spin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! spin.js */ "./node_modules/spin.js/spin.js");
/*!
 * Ladda
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2018 Hakim El Hattab, http://hakim.se
 */



// All currently instantiated instances of Ladda
var ALL_INSTANCES = [];

/**
 * Creates a new instance of Ladda which wraps the
 * target button element.
 *
 * @return An API object that can be used to control
 * the loading animation state.
 */
function create(button) {
    if (typeof button === 'undefined') {
        console.warn("Ladda button target must be defined.");
        return;
    }

    // The button must have the class "ladda-button"
    if (!button.classList.contains('ladda-button')) {
        button.classList.add('ladda-button');
    }

    // Style is required, default to "expand-right"
    if (!button.hasAttribute('data-style')) {
        button.setAttribute('data-style', 'expand-right');
    }

    // The text contents must be wrapped in a ladda-label
    // element, create one if it doesn't already exist
    if (!button.querySelector('.ladda-label')) {
        var laddaLabel = document.createElement('span');
        laddaLabel.className = 'ladda-label';
        wrapContent(button, laddaLabel);
    }

    // The spinner component
    var spinnerWrapper = button.querySelector('.ladda-spinner');

    // Wrapper element for the spinner
    if (!spinnerWrapper) {
        spinnerWrapper = document.createElement('span');
        spinnerWrapper.className = 'ladda-spinner';
    }

    button.appendChild(spinnerWrapper);

    // Timer used to delay starting/stopping
    var timer;
    var spinner;

    var instance = {
        /**
         * Enter the loading state.
         */
        start: function() {
            // Create the spinner if it doesn't already exist
            if (!spinner) {
                spinner = createSpinner(button);
            }

            button.disabled = true;
            button.setAttribute('data-loading', '');

            clearTimeout(timer);
            spinner.spin(spinnerWrapper);

            this.setProgress(0);

            return this; // chain
        },

        /**
         * Enter the loading state, after a delay.
         */
        startAfter: function(delay) {
            clearTimeout(timer);
            timer = setTimeout(function() { instance.start(); }, delay);

            return this; // chain
        },

        /**
         * Exit the loading state.
         */
        stop: function() {
            if (instance.isLoading()) {
                button.disabled = false;
                button.removeAttribute('data-loading');   
            }

            // Kill the animation after a delay to make sure it
            // runs for the duration of the button transition
            clearTimeout(timer);

            if (spinner) {
                timer = setTimeout(function() { spinner.stop(); }, 1000);
            }

            return this; // chain
        },

        /**
         * Toggle the loading state on/off.
         */
        toggle: function() {
            return this.isLoading() ? this.stop() : this.start();
        },

        /**
         * Sets the width of the visual progress bar inside of
         * this Ladda button
         *
         * @param {number} progress in the range of 0-1
         */
        setProgress: function(progress) {
            // Cap it
            progress = Math.max(Math.min(progress, 1), 0);

            var progressElement = button.querySelector('.ladda-progress');

            // Remove the progress bar if we're at 0 progress
            if (progress === 0 && progressElement && progressElement.parentNode) {
                progressElement.parentNode.removeChild(progressElement);
            } else {
                if (!progressElement) {
                    progressElement = document.createElement('div');
                    progressElement.className = 'ladda-progress';
                    button.appendChild(progressElement);
                }

                progressElement.style.width = ((progress || 0) * button.offsetWidth) + 'px';
            }
        },

        isLoading: function() {
            return button.hasAttribute('data-loading');
        },

        remove: function() {
            clearTimeout(timer);
            button.disabled = false;
            button.removeAttribute('data-loading');

            if (spinner) {
                spinner.stop();
                spinner = null;
            }

            ALL_INSTANCES.splice(ALL_INSTANCES.indexOf(instance), 1);
        }
    };

    ALL_INSTANCES.push(instance);

    return instance;
}

/**
 * Binds the target buttons to automatically enter the
 * loading state when clicked.
 *
 * @param target Either an HTML element or a CSS selector.
 * @param options
 *          - timeout Number of milliseconds to wait before
 *            automatically cancelling the animation.
 *          - callback A function to be called with the Ladda
 *            instance when a target button is clicked.
 */
function bind(target, options) {
    var targets;

    if (typeof target === 'string') {
        targets = document.querySelectorAll(target);
    } else if (typeof target === 'object') {
        targets = [target];
    } else {
        throw new Error('target must be string or object');
    }

    options = options || {};

    for (var i = 0; i < targets.length; i++) {
        bindElement(targets[i], options);
    }
}

/**
 * Stops ALL current loading animations.
 */
function stopAll() {
    for (var i = 0, len = ALL_INSTANCES.length; i < len; i++) {
        ALL_INSTANCES[i].stop();
    }
}

/**
* Get the first ancestor node from an element, having a
* certain type.
*
* @param elem An HTML element
* @param type an HTML tag type (uppercased)
*
* @return An HTML element
*/
function getAncestorOfTagType(elem, type) {
    while (elem.parentNode && elem.tagName !== type) {
        elem = elem.parentNode;
    }

    return (type === elem.tagName) ? elem : undefined;
}

function createSpinner(button) {
    var height = button.offsetHeight,
        spinnerColor,
        spinnerLines;

    if (height === 0) {
        // We may have an element that is not visible so
        // we attempt to get the height in a different way
        height = parseFloat(window.getComputedStyle(button).height);
    }

    // If the button is tall we can afford some padding
    if (height > 32) {
        height *= 0.8;
    }

    // Prefer an explicit height if one is defined
    if (button.hasAttribute('data-spinner-size')) {
        height = parseInt(button.getAttribute('data-spinner-size'), 10);
    }

    // Allow buttons to specify the color of the spinner element
    if (button.hasAttribute('data-spinner-color')) {
        spinnerColor = button.getAttribute('data-spinner-color');
    }

    // Allow buttons to specify the number of lines of the spinner
    if (button.hasAttribute('data-spinner-lines')) {
        spinnerLines = parseInt(button.getAttribute('data-spinner-lines'), 10);
    }

    var radius = height * 0.2,
        length = radius * 0.6,
        width = radius < 7 ? 2 : 3;

    return new spin_js__WEBPACK_IMPORTED_MODULE_0__["Spinner"]({
        color: spinnerColor || '#fff',
        lines: spinnerLines || 12,
        radius: radius,
        length: length,
        width: width,
        animation: 'ladda-spinner-line-fade',
        zIndex: 'auto',
        top: 'auto',
        left: 'auto',
        className: ''
    });
}

function wrapContent(node, wrapper) {
    var r = document.createRange();
    r.selectNodeContents(node);
    r.surroundContents(wrapper);
    node.appendChild(wrapper);
}

function bindElement(element, options) {
    if (typeof element.addEventListener !== 'function') {
        return;
    }

    var instance = create(element);
    var timeout = -1;

    element.addEventListener('click', function() {
        // If the button belongs to a form, make sure all the
        // fields in that form are filled out
        var valid = true;
        var form = getAncestorOfTagType(element, 'FORM');

        if (typeof form !== 'undefined' && !form.hasAttribute('novalidate')) {
            // Modern form validation
            if (typeof form.checkValidity === 'function') {
                valid = form.checkValidity();
            }
        }

        if (valid) {
            // This is asynchronous to avoid an issue where disabling
            // the button prevents forms from submitting
            instance.startAfter(1);

            // Set a loading timeout if one is specified
            if (typeof options.timeout === 'number') {
                clearTimeout(timeout);
                timeout = setTimeout(instance.stop, options.timeout);
            }

            // Invoke callbacks
            if (typeof options.callback === 'function') {
                options.callback.apply(null, [instance]);
            }
        }

    }, false);
}


/***/ }),

/***/ "./node_modules/spin.js/spin.js":
/*!**************************************!*\
  !*** ./node_modules/spin.js/spin.js ***!
  \**************************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var defaults = {
    lines: 12,
    length: 7,
    width: 5,
    radius: 10,
    scale: 1.0,
    corners: 1,
    color: '#000',
    fadeColor: 'transparent',
    animation: 'spinner-line-fade-default',
    rotate: 0,
    direction: 1,
    speed: 1,
    zIndex: 2e9,
    className: 'spinner',
    top: '50%',
    left: '50%',
    shadow: '0 0 1px transparent',
    position: 'absolute',
};
var Spinner = /** @class */ (function () {
    function Spinner(opts) {
        if (opts === void 0) { opts = {}; }
        this.opts = __assign(__assign({}, defaults), opts);
    }
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target by calling
     * stop() internally.
     */
    Spinner.prototype.spin = function (target) {
        this.stop();
        this.el = document.createElement('div');
        this.el.className = this.opts.className;
        this.el.setAttribute('role', 'progressbar');
        css(this.el, {
            position: this.opts.position,
            width: 0,
            zIndex: this.opts.zIndex,
            left: this.opts.left,
            top: this.opts.top,
            transform: "scale(" + this.opts.scale + ")",
        });
        if (target) {
            target.insertBefore(this.el, target.firstChild || null);
        }
        drawLines(this.el, this.opts);
        return this;
    };
    /**
     * Stops and removes the Spinner.
     * Stopped spinners may be reused by calling spin() again.
     */
    Spinner.prototype.stop = function () {
        if (this.el) {
            if (typeof requestAnimationFrame !== 'undefined') {
                cancelAnimationFrame(this.animateId);
            }
            else {
                clearTimeout(this.animateId);
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
            this.el = undefined;
        }
        return this;
    };
    return Spinner;
}());

/**
 * Sets multiple style properties at once.
 */
function css(el, props) {
    for (var prop in props) {
        el.style[prop] = props[prop];
    }
    return el;
}
/**
 * Returns the line color from the given string or array.
 */
function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length];
}
/**
 * Internal method that draws the individual lines.
 */
function drawLines(el, opts) {
    var borderRadius = (Math.round(opts.corners * opts.width * 500) / 1000) + 'px';
    var shadow = 'none';
    if (opts.shadow === true) {
        shadow = '0 2px 4px #000'; // default shadow
    }
    else if (typeof opts.shadow === 'string') {
        shadow = opts.shadow;
    }
    var shadows = parseBoxShadow(shadow);
    for (var i = 0; i < opts.lines; i++) {
        var degrees = ~~(360 / opts.lines * i + opts.rotate);
        var backgroundLine = css(document.createElement('div'), {
            position: 'absolute',
            top: -opts.width / 2 + "px",
            width: (opts.length + opts.width) + 'px',
            height: opts.width + 'px',
            background: getColor(opts.fadeColor, i),
            borderRadius: borderRadius,
            transformOrigin: 'left',
            transform: "rotate(" + degrees + "deg) translateX(" + opts.radius + "px)",
        });
        var delay = i * opts.direction / opts.lines / opts.speed;
        delay -= 1 / opts.speed; // so initial animation state will include trail
        var line = css(document.createElement('div'), {
            width: '100%',
            height: '100%',
            background: getColor(opts.color, i),
            borderRadius: borderRadius,
            boxShadow: normalizeShadow(shadows, degrees),
            animation: 1 / opts.speed + "s linear " + delay + "s infinite " + opts.animation,
        });
        backgroundLine.appendChild(line);
        el.appendChild(backgroundLine);
    }
}
function parseBoxShadow(boxShadow) {
    var regex = /^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/;
    var shadows = [];
    for (var _i = 0, _a = boxShadow.split(','); _i < _a.length; _i++) {
        var shadow = _a[_i];
        var matches = shadow.match(regex);
        if (matches === null) {
            continue; // invalid syntax
        }
        var x = +matches[2];
        var y = +matches[5];
        var xUnits = matches[4];
        var yUnits = matches[7];
        if (x === 0 && !xUnits) {
            xUnits = yUnits;
        }
        if (y === 0 && !yUnits) {
            yUnits = xUnits;
        }
        if (xUnits !== yUnits) {
            continue; // units must match to use as coordinates
        }
        shadows.push({
            prefix: matches[1] || '',
            x: x,
            y: y,
            xUnits: xUnits,
            yUnits: yUnits,
            end: matches[8],
        });
    }
    return shadows;
}
/**
 * Modify box-shadow x/y offsets to counteract rotation
 */
function normalizeShadow(shadows, degrees) {
    var normalized = [];
    for (var _i = 0, shadows_1 = shadows; _i < shadows_1.length; _i++) {
        var shadow = shadows_1[_i];
        var xy = convertOffset(shadow.x, shadow.y, degrees);
        normalized.push(shadow.prefix + xy[0] + shadow.xUnits + ' ' + xy[1] + shadow.yUnits + shadow.end);
    }
    return normalized.join(', ');
}
function convertOffset(x, y, degrees) {
    var radians = degrees * Math.PI / 180;
    var sin = Math.sin(radians);
    var cos = Math.cos(radians);
    return [
        Math.round((x * cos + y * sin) * 1000) / 1000,
        Math.round((-x * sin + y * cos) * 1000) / 1000,
    ];
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGFkZGEvanMvbGFkZGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NwaW4uanMvc3Bpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQzs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHdCQUF3QjtBQUN4QixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsa0JBQWtCLEVBQUU7O0FBRS9ELHdCQUF3QjtBQUN4QixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLGdCQUFnQixFQUFFO0FBQ2pFOztBQUVBLHdCQUF3QjtBQUN4QixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFD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QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx1QkFBdUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InZlbmRvcnN+VnRmYWN0dXJlZnJzY2FifmFmZmVjdGF0aW9uX2NvbmdlfmFsaW1lbnRhdGlvbn5hbGltZW50YXRpb25DYWlzc2V+YXBwfmFyY2hpdmVWMX5jYl9mYWJyaWNhdGl+NDk5Zjk0NWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcclxuICogTGFkZGFcclxuICogaHR0cDovL2xhYi5oYWtpbS5zZS9sYWRkYVxyXG4gKiBNSVQgbGljZW5zZWRcclxuICpcclxuICogQ29weXJpZ2h0IChDKSAyMDE4IEhha2ltIEVsIEhhdHRhYiwgaHR0cDovL2hha2ltLnNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtTcGlubmVyfSBmcm9tICdzcGluLmpzJztcclxuXHJcbi8vIEFsbCBjdXJyZW50bHkgaW5zdGFudGlhdGVkIGluc3RhbmNlcyBvZiBMYWRkYVxyXG52YXIgQUxMX0lOU1RBTkNFUyA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgTGFkZGEgd2hpY2ggd3JhcHMgdGhlXHJcbiAqIHRhcmdldCBidXR0b24gZWxlbWVudC5cclxuICpcclxuICogQHJldHVybiBBbiBBUEkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gY29udHJvbFxyXG4gKiB0aGUgbG9hZGluZyBhbmltYXRpb24gc3RhdGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKGJ1dHRvbikge1xyXG4gICAgaWYgKHR5cGVvZiBidXR0b24gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiTGFkZGEgYnV0dG9uIHRhcmdldCBtdXN0IGJlIGRlZmluZWQuXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgYnV0dG9uIG11c3QgaGF2ZSB0aGUgY2xhc3MgXCJsYWRkYS1idXR0b25cIlxyXG4gICAgaWYgKCFidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdsYWRkYS1idXR0b24nKSkge1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsYWRkYS1idXR0b24nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdHlsZSBpcyByZXF1aXJlZCwgZGVmYXVsdCB0byBcImV4cGFuZC1yaWdodFwiXHJcbiAgICBpZiAoIWJ1dHRvbi5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3R5bGUnKSkge1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3R5bGUnLCAnZXhwYW5kLXJpZ2h0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIHRleHQgY29udGVudHMgbXVzdCBiZSB3cmFwcGVkIGluIGEgbGFkZGEtbGFiZWxcclxuICAgIC8vIGVsZW1lbnQsIGNyZWF0ZSBvbmUgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0XHJcbiAgICBpZiAoIWJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcubGFkZGEtbGFiZWwnKSkge1xyXG4gICAgICAgIHZhciBsYWRkYUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGxhZGRhTGFiZWwuY2xhc3NOYW1lID0gJ2xhZGRhLWxhYmVsJztcclxuICAgICAgICB3cmFwQ29udGVudChidXR0b24sIGxhZGRhTGFiZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBzcGlubmVyIGNvbXBvbmVudFxyXG4gICAgdmFyIHNwaW5uZXJXcmFwcGVyID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5sYWRkYS1zcGlubmVyJyk7XHJcblxyXG4gICAgLy8gV3JhcHBlciBlbGVtZW50IGZvciB0aGUgc3Bpbm5lclxyXG4gICAgaWYgKCFzcGlubmVyV3JhcHBlcikge1xyXG4gICAgICAgIHNwaW5uZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHNwaW5uZXJXcmFwcGVyLmNsYXNzTmFtZSA9ICdsYWRkYS1zcGlubmVyJztcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3Bpbm5lcldyYXBwZXIpO1xyXG5cclxuICAgIC8vIFRpbWVyIHVzZWQgdG8gZGVsYXkgc3RhcnRpbmcvc3RvcHBpbmdcclxuICAgIHZhciB0aW1lcjtcclxuICAgIHZhciBzcGlubmVyO1xyXG5cclxuICAgIHZhciBpbnN0YW5jZSA9IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFbnRlciB0aGUgbG9hZGluZyBzdGF0ZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGFydDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgc3Bpbm5lciBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3RcclxuICAgICAgICAgICAgaWYgKCFzcGlubmVyKSB7XHJcbiAgICAgICAgICAgICAgICBzcGlubmVyID0gY3JlYXRlU3Bpbm5lcihidXR0b24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnLCAnJyk7XHJcblxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICBzcGlubmVyLnNwaW4oc3Bpbm5lcldyYXBwZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmVzcygwKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzOyAvLyBjaGFpblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEVudGVyIHRoZSBsb2FkaW5nIHN0YXRlLCBhZnRlciBhIGRlbGF5LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0YXJ0QWZ0ZXI6IGZ1bmN0aW9uKGRlbGF5KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHsgaW5zdGFuY2Uuc3RhcnQoKTsgfSwgZGVsYXkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7IC8vIGNoYWluXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRXhpdCB0aGUgbG9hZGluZyBzdGF0ZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzdG9wOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlLmlzTG9hZGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpOyAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBLaWxsIHRoZSBhbmltYXRpb24gYWZ0ZXIgYSBkZWxheSB0byBtYWtlIHN1cmUgaXRcclxuICAgICAgICAgICAgLy8gcnVucyBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBidXR0b24gdHJhbnNpdGlvblxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNwaW5uZXIpIHtcclxuICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHsgc3Bpbm5lci5zdG9wKCk7IH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpczsgLy8gY2hhaW5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUb2dnbGUgdGhlIGxvYWRpbmcgc3RhdGUgb24vb2ZmLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRvZ2dsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzTG9hZGluZygpID8gdGhpcy5zdG9wKCkgOiB0aGlzLnN0YXJ0KCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2V0cyB0aGUgd2lkdGggb2YgdGhlIHZpc3VhbCBwcm9ncmVzcyBiYXIgaW5zaWRlIG9mXHJcbiAgICAgICAgICogdGhpcyBMYWRkYSBidXR0b25cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcm9ncmVzcyBpbiB0aGUgcmFuZ2Ugb2YgMC0xXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2V0UHJvZ3Jlc3M6IGZ1bmN0aW9uKHByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIC8vIENhcCBpdFxyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKHByb2dyZXNzLCAxKSwgMCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3NFbGVtZW50ID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5sYWRkYS1wcm9ncmVzcycpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBwcm9ncmVzcyBiYXIgaWYgd2UncmUgYXQgMCBwcm9ncmVzc1xyXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPT09IDAgJiYgcHJvZ3Jlc3NFbGVtZW50ICYmIHByb2dyZXNzRWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0VsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwcm9ncmVzc0VsZW1lbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9ncmVzc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0VsZW1lbnQuY2xhc3NOYW1lID0gJ2xhZGRhLXByb2dyZXNzJztcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQocHJvZ3Jlc3NFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0VsZW1lbnQuc3R5bGUud2lkdGggPSAoKHByb2dyZXNzIHx8IDApICogYnV0dG9uLm9mZnNldFdpZHRoKSArICdweCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpc0xvYWRpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNwaW5uZXIpIHtcclxuICAgICAgICAgICAgICAgIHNwaW5uZXIuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgc3Bpbm5lciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEFMTF9JTlNUQU5DRVMuc3BsaWNlKEFMTF9JTlNUQU5DRVMuaW5kZXhPZihpbnN0YW5jZSksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgQUxMX0lOU1RBTkNFUy5wdXNoKGluc3RhbmNlKTtcclxuXHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCaW5kcyB0aGUgdGFyZ2V0IGJ1dHRvbnMgdG8gYXV0b21hdGljYWxseSBlbnRlciB0aGVcclxuICogbG9hZGluZyBzdGF0ZSB3aGVuIGNsaWNrZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB0YXJnZXQgRWl0aGVyIGFuIEhUTUwgZWxlbWVudCBvciBhIENTUyBzZWxlY3Rvci5cclxuICogQHBhcmFtIG9wdGlvbnNcclxuICogICAgICAgICAgLSB0aW1lb3V0IE51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmVcclxuICogICAgICAgICAgICBhdXRvbWF0aWNhbGx5IGNhbmNlbGxpbmcgdGhlIGFuaW1hdGlvbi5cclxuICogICAgICAgICAgLSBjYWxsYmFjayBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aXRoIHRoZSBMYWRkYVxyXG4gKiAgICAgICAgICAgIGluc3RhbmNlIHdoZW4gYSB0YXJnZXQgYnV0dG9uIGlzIGNsaWNrZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYmluZCh0YXJnZXQsIG9wdGlvbnMpIHtcclxuICAgIHZhciB0YXJnZXRzO1xyXG5cclxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0cyA9IFt0YXJnZXRdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RhcmdldCBtdXN0IGJlIHN0cmluZyBvciBvYmplY3QnKTtcclxuICAgIH1cclxuXHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhcmdldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBiaW5kRWxlbWVudCh0YXJnZXRzW2ldLCBvcHRpb25zKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFN0b3BzIEFMTCBjdXJyZW50IGxvYWRpbmcgYW5pbWF0aW9ucy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9wQWxsKCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IEFMTF9JTlNUQU5DRVMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBBTExfSU5TVEFOQ0VTW2ldLnN0b3AoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiogR2V0IHRoZSBmaXJzdCBhbmNlc3RvciBub2RlIGZyb20gYW4gZWxlbWVudCwgaGF2aW5nIGFcclxuKiBjZXJ0YWluIHR5cGUuXHJcbipcclxuKiBAcGFyYW0gZWxlbSBBbiBIVE1MIGVsZW1lbnRcclxuKiBAcGFyYW0gdHlwZSBhbiBIVE1MIHRhZyB0eXBlICh1cHBlcmNhc2VkKVxyXG4qXHJcbiogQHJldHVybiBBbiBIVE1MIGVsZW1lbnRcclxuKi9cclxuZnVuY3Rpb24gZ2V0QW5jZXN0b3JPZlRhZ1R5cGUoZWxlbSwgdHlwZSkge1xyXG4gICAgd2hpbGUgKGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtLnRhZ05hbWUgIT09IHR5cGUpIHtcclxuICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAodHlwZSA9PT0gZWxlbS50YWdOYW1lKSA/IGVsZW0gOiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNwaW5uZXIoYnV0dG9uKSB7XHJcbiAgICB2YXIgaGVpZ2h0ID0gYnV0dG9uLm9mZnNldEhlaWdodCxcclxuICAgICAgICBzcGlubmVyQ29sb3IsXHJcbiAgICAgICAgc3Bpbm5lckxpbmVzO1xyXG5cclxuICAgIGlmIChoZWlnaHQgPT09IDApIHtcclxuICAgICAgICAvLyBXZSBtYXkgaGF2ZSBhbiBlbGVtZW50IHRoYXQgaXMgbm90IHZpc2libGUgc29cclxuICAgICAgICAvLyB3ZSBhdHRlbXB0IHRvIGdldCB0aGUgaGVpZ2h0IGluIGEgZGlmZmVyZW50IHdheVxyXG4gICAgICAgIGhlaWdodCA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoYnV0dG9uKS5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHRoZSBidXR0b24gaXMgdGFsbCB3ZSBjYW4gYWZmb3JkIHNvbWUgcGFkZGluZ1xyXG4gICAgaWYgKGhlaWdodCA+IDMyKSB7XHJcbiAgICAgICAgaGVpZ2h0ICo9IDAuODtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcmVmZXIgYW4gZXhwbGljaXQgaGVpZ2h0IGlmIG9uZSBpcyBkZWZpbmVkXHJcbiAgICBpZiAoYnV0dG9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1zcGlubmVyLXNpemUnKSkge1xyXG4gICAgICAgIGhlaWdodCA9IHBhcnNlSW50KGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3Bpbm5lci1zaXplJyksIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBbGxvdyBidXR0b25zIHRvIHNwZWNpZnkgdGhlIGNvbG9yIG9mIHRoZSBzcGlubmVyIGVsZW1lbnRcclxuICAgIGlmIChidXR0b24uaGFzQXR0cmlidXRlKCdkYXRhLXNwaW5uZXItY29sb3InKSkge1xyXG4gICAgICAgIHNwaW5uZXJDb2xvciA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3Bpbm5lci1jb2xvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFsbG93IGJ1dHRvbnMgdG8gc3BlY2lmeSB0aGUgbnVtYmVyIG9mIGxpbmVzIG9mIHRoZSBzcGlubmVyXHJcbiAgICBpZiAoYnV0dG9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1zcGlubmVyLWxpbmVzJykpIHtcclxuICAgICAgICBzcGlubmVyTGluZXMgPSBwYXJzZUludChidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXNwaW5uZXItbGluZXMnKSwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByYWRpdXMgPSBoZWlnaHQgKiAwLjIsXHJcbiAgICAgICAgbGVuZ3RoID0gcmFkaXVzICogMC42LFxyXG4gICAgICAgIHdpZHRoID0gcmFkaXVzIDwgNyA/IDIgOiAzO1xyXG5cclxuICAgIHJldHVybiBuZXcgU3Bpbm5lcih7XHJcbiAgICAgICAgY29sb3I6IHNwaW5uZXJDb2xvciB8fCAnI2ZmZicsXHJcbiAgICAgICAgbGluZXM6IHNwaW5uZXJMaW5lcyB8fCAxMixcclxuICAgICAgICByYWRpdXM6IHJhZGl1cyxcclxuICAgICAgICBsZW5ndGg6IGxlbmd0aCxcclxuICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgYW5pbWF0aW9uOiAnbGFkZGEtc3Bpbm5lci1saW5lLWZhZGUnLFxyXG4gICAgICAgIHpJbmRleDogJ2F1dG8nLFxyXG4gICAgICAgIHRvcDogJ2F1dG8nLFxyXG4gICAgICAgIGxlZnQ6ICdhdXRvJyxcclxuICAgICAgICBjbGFzc05hbWU6ICcnXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcENvbnRlbnQobm9kZSwgd3JhcHBlcikge1xyXG4gICAgdmFyIHIgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgci5zZWxlY3ROb2RlQ29udGVudHMobm9kZSk7XHJcbiAgICByLnN1cnJvdW5kQ29udGVudHMod3JhcHBlcik7XHJcbiAgICBub2RlLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiaW5kRWxlbWVudChlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaW5zdGFuY2UgPSBjcmVhdGUoZWxlbWVudCk7XHJcbiAgICB2YXIgdGltZW91dCA9IC0xO1xyXG5cclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBJZiB0aGUgYnV0dG9uIGJlbG9uZ3MgdG8gYSBmb3JtLCBtYWtlIHN1cmUgYWxsIHRoZVxyXG4gICAgICAgIC8vIGZpZWxkcyBpbiB0aGF0IGZvcm0gYXJlIGZpbGxlZCBvdXRcclxuICAgICAgICB2YXIgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciBmb3JtID0gZ2V0QW5jZXN0b3JPZlRhZ1R5cGUoZWxlbWVudCwgJ0ZPUk0nKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBmb3JtICE9PSAndW5kZWZpbmVkJyAmJiAhZm9ybS5oYXNBdHRyaWJ1dGUoJ25vdmFsaWRhdGUnKSkge1xyXG4gICAgICAgICAgICAvLyBNb2Rlcm4gZm9ybSB2YWxpZGF0aW9uXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZm9ybS5jaGVja1ZhbGlkaXR5ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZCA9IGZvcm0uY2hlY2tWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBpcyBhc3luY2hyb25vdXMgdG8gYXZvaWQgYW4gaXNzdWUgd2hlcmUgZGlzYWJsaW5nXHJcbiAgICAgICAgICAgIC8vIHRoZSBidXR0b24gcHJldmVudHMgZm9ybXMgZnJvbSBzdWJtaXR0aW5nXHJcbiAgICAgICAgICAgIGluc3RhbmNlLnN0YXJ0QWZ0ZXIoMSk7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgYSBsb2FkaW5nIHRpbWVvdXQgaWYgb25lIGlzIHNwZWNpZmllZFxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudGltZW91dCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGluc3RhbmNlLnN0b3AsIG9wdGlvbnMudGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEludm9rZSBjYWxsYmFja3NcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmNhbGxiYWNrLmFwcGx5KG51bGwsIFtpbnN0YW5jZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIGZhbHNlKTtcclxufVxyXG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBkZWZhdWx0cyA9IHtcclxuICAgIGxpbmVzOiAxMixcclxuICAgIGxlbmd0aDogNyxcclxuICAgIHdpZHRoOiA1LFxyXG4gICAgcmFkaXVzOiAxMCxcclxuICAgIHNjYWxlOiAxLjAsXHJcbiAgICBjb3JuZXJzOiAxLFxyXG4gICAgY29sb3I6ICcjMDAwJyxcclxuICAgIGZhZGVDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIGFuaW1hdGlvbjogJ3NwaW5uZXItbGluZS1mYWRlLWRlZmF1bHQnLFxyXG4gICAgcm90YXRlOiAwLFxyXG4gICAgZGlyZWN0aW9uOiAxLFxyXG4gICAgc3BlZWQ6IDEsXHJcbiAgICB6SW5kZXg6IDJlOSxcclxuICAgIGNsYXNzTmFtZTogJ3NwaW5uZXInLFxyXG4gICAgdG9wOiAnNTAlJyxcclxuICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgc2hhZG93OiAnMCAwIDFweCB0cmFuc3BhcmVudCcsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxufTtcclxudmFyIFNwaW5uZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTcGlubmVyKG9wdHMpIHtcclxuICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxyXG4gICAgICAgIHRoaXMub3B0cyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWZhdWx0cyksIG9wdHMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHRoZSBzcGlubmVyIHRvIHRoZSBnaXZlbiB0YXJnZXQgZWxlbWVudC4gSWYgdGhpcyBpbnN0YW5jZSBpcyBhbHJlYWR5XHJcbiAgICAgKiBzcGlubmluZywgaXQgaXMgYXV0b21hdGljYWxseSByZW1vdmVkIGZyb20gaXRzIHByZXZpb3VzIHRhcmdldCBieSBjYWxsaW5nXHJcbiAgICAgKiBzdG9wKCkgaW50ZXJuYWxseS5cclxuICAgICAqL1xyXG4gICAgU3Bpbm5lci5wcm90b3R5cGUuc3BpbiA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc05hbWUgPSB0aGlzLm9wdHMuY2xhc3NOYW1lO1xyXG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3Byb2dyZXNzYmFyJyk7XHJcbiAgICAgICAgY3NzKHRoaXMuZWwsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMub3B0cy5wb3NpdGlvbixcclxuICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgIHpJbmRleDogdGhpcy5vcHRzLnpJbmRleCxcclxuICAgICAgICAgICAgbGVmdDogdGhpcy5vcHRzLmxlZnQsXHJcbiAgICAgICAgICAgIHRvcDogdGhpcy5vcHRzLnRvcCxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKFwiICsgdGhpcy5vcHRzLnNjYWxlICsgXCIpXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHRhcmdldC5maXJzdENoaWxkIHx8IG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkcmF3TGluZXModGhpcy5lbCwgdGhpcy5vcHRzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIGFuZCByZW1vdmVzIHRoZSBTcGlubmVyLlxyXG4gICAgICogU3RvcHBlZCBzcGlubmVycyBtYXkgYmUgcmV1c2VkIGJ5IGNhbGxpbmcgc3BpbigpIGFnYWluLlxyXG4gICAgICovXHJcbiAgICBTcGlubmVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVsKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlSWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0ZUlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5lbC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lbCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNwaW5uZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFNwaW5uZXIgfTtcclxuLyoqXHJcbiAqIFNldHMgbXVsdGlwbGUgc3R5bGUgcHJvcGVydGllcyBhdCBvbmNlLlxyXG4gKi9cclxuZnVuY3Rpb24gY3NzKGVsLCBwcm9wcykge1xyXG4gICAgZm9yICh2YXIgcHJvcCBpbiBwcm9wcykge1xyXG4gICAgICAgIGVsLnN0eWxlW3Byb3BdID0gcHJvcHNbcHJvcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGxpbmUgY29sb3IgZnJvbSB0aGUgZ2l2ZW4gc3RyaW5nIG9yIGFycmF5LlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Q29sb3IoY29sb3IsIGlkeCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBjb2xvciA9PSAnc3RyaW5nJyA/IGNvbG9yIDogY29sb3JbaWR4ICUgY29sb3IubGVuZ3RoXTtcclxufVxyXG4vKipcclxuICogSW50ZXJuYWwgbWV0aG9kIHRoYXQgZHJhd3MgdGhlIGluZGl2aWR1YWwgbGluZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBkcmF3TGluZXMoZWwsIG9wdHMpIHtcclxuICAgIHZhciBib3JkZXJSYWRpdXMgPSAoTWF0aC5yb3VuZChvcHRzLmNvcm5lcnMgKiBvcHRzLndpZHRoICogNTAwKSAvIDEwMDApICsgJ3B4JztcclxuICAgIHZhciBzaGFkb3cgPSAnbm9uZSc7XHJcbiAgICBpZiAob3B0cy5zaGFkb3cgPT09IHRydWUpIHtcclxuICAgICAgICBzaGFkb3cgPSAnMCAycHggNHB4ICMwMDAnOyAvLyBkZWZhdWx0IHNoYWRvd1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIG9wdHMuc2hhZG93ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHNoYWRvdyA9IG9wdHMuc2hhZG93O1xyXG4gICAgfVxyXG4gICAgdmFyIHNoYWRvd3MgPSBwYXJzZUJveFNoYWRvdyhzaGFkb3cpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRzLmxpbmVzOyBpKyspIHtcclxuICAgICAgICB2YXIgZGVncmVlcyA9IH5+KDM2MCAvIG9wdHMubGluZXMgKiBpICsgb3B0cy5yb3RhdGUpO1xyXG4gICAgICAgIHZhciBiYWNrZ3JvdW5kTGluZSA9IGNzcyhkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgdG9wOiAtb3B0cy53aWR0aCAvIDIgKyBcInB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiAob3B0cy5sZW5ndGggKyBvcHRzLndpZHRoKSArICdweCcsXHJcbiAgICAgICAgICAgIGhlaWdodDogb3B0cy53aWR0aCArICdweCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGdldENvbG9yKG9wdHMuZmFkZUNvbG9yLCBpKSxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQnLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKFwiICsgZGVncmVlcyArIFwiZGVnKSB0cmFuc2xhdGVYKFwiICsgb3B0cy5yYWRpdXMgKyBcInB4KVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBkZWxheSA9IGkgKiBvcHRzLmRpcmVjdGlvbiAvIG9wdHMubGluZXMgLyBvcHRzLnNwZWVkO1xyXG4gICAgICAgIGRlbGF5IC09IDEgLyBvcHRzLnNwZWVkOyAvLyBzbyBpbml0aWFsIGFuaW1hdGlvbiBzdGF0ZSB3aWxsIGluY2x1ZGUgdHJhaWxcclxuICAgICAgICB2YXIgbGluZSA9IGNzcyhkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZ2V0Q29sb3Iob3B0cy5jb2xvciwgaSksXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IG5vcm1hbGl6ZVNoYWRvdyhzaGFkb3dzLCBkZWdyZWVzKSxcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiAxIC8gb3B0cy5zcGVlZCArIFwicyBsaW5lYXIgXCIgKyBkZWxheSArIFwicyBpbmZpbml0ZSBcIiArIG9wdHMuYW5pbWF0aW9uLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJhY2tncm91bmRMaW5lLmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGJhY2tncm91bmRMaW5lKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBwYXJzZUJveFNoYWRvdyhib3hTaGFkb3cpIHtcclxuICAgIHZhciByZWdleCA9IC9eXFxzKihbYS16QS1aXStcXHMrKT8oLT9cXGQrKFxcLlxcZCspPykoW2EtekEtWl0qKVxccysoLT9cXGQrKFxcLlxcZCspPykoW2EtekEtWl0qKSguKikkLztcclxuICAgIHZhciBzaGFkb3dzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gYm94U2hhZG93LnNwbGl0KCcsJyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHNoYWRvdyA9IF9hW19pXTtcclxuICAgICAgICB2YXIgbWF0Y2hlcyA9IHNoYWRvdy5tYXRjaChyZWdleCk7XHJcbiAgICAgICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29udGludWU7IC8vIGludmFsaWQgc3ludGF4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB4ID0gK21hdGNoZXNbMl07XHJcbiAgICAgICAgdmFyIHkgPSArbWF0Y2hlc1s1XTtcclxuICAgICAgICB2YXIgeFVuaXRzID0gbWF0Y2hlc1s0XTtcclxuICAgICAgICB2YXIgeVVuaXRzID0gbWF0Y2hlc1s3XTtcclxuICAgICAgICBpZiAoeCA9PT0gMCAmJiAheFVuaXRzKSB7XHJcbiAgICAgICAgICAgIHhVbml0cyA9IHlVbml0cztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHkgPT09IDAgJiYgIXlVbml0cykge1xyXG4gICAgICAgICAgICB5VW5pdHMgPSB4VW5pdHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh4VW5pdHMgIT09IHlVbml0cykge1xyXG4gICAgICAgICAgICBjb250aW51ZTsgLy8gdW5pdHMgbXVzdCBtYXRjaCB0byB1c2UgYXMgY29vcmRpbmF0ZXNcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hhZG93cy5wdXNoKHtcclxuICAgICAgICAgICAgcHJlZml4OiBtYXRjaGVzWzFdIHx8ICcnLFxyXG4gICAgICAgICAgICB4OiB4LFxyXG4gICAgICAgICAgICB5OiB5LFxyXG4gICAgICAgICAgICB4VW5pdHM6IHhVbml0cyxcclxuICAgICAgICAgICAgeVVuaXRzOiB5VW5pdHMsXHJcbiAgICAgICAgICAgIGVuZDogbWF0Y2hlc1s4XSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBzaGFkb3dzO1xyXG59XHJcbi8qKlxyXG4gKiBNb2RpZnkgYm94LXNoYWRvdyB4L3kgb2Zmc2V0cyB0byBjb3VudGVyYWN0IHJvdGF0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBub3JtYWxpemVTaGFkb3coc2hhZG93cywgZGVncmVlcykge1xyXG4gICAgdmFyIG5vcm1hbGl6ZWQgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgc2hhZG93c18xID0gc2hhZG93czsgX2kgPCBzaGFkb3dzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHNoYWRvdyA9IHNoYWRvd3NfMVtfaV07XHJcbiAgICAgICAgdmFyIHh5ID0gY29udmVydE9mZnNldChzaGFkb3cueCwgc2hhZG93LnksIGRlZ3JlZXMpO1xyXG4gICAgICAgIG5vcm1hbGl6ZWQucHVzaChzaGFkb3cucHJlZml4ICsgeHlbMF0gKyBzaGFkb3cueFVuaXRzICsgJyAnICsgeHlbMV0gKyBzaGFkb3cueVVuaXRzICsgc2hhZG93LmVuZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9ybWFsaXplZC5qb2luKCcsICcpO1xyXG59XHJcbmZ1bmN0aW9uIGNvbnZlcnRPZmZzZXQoeCwgeSwgZGVncmVlcykge1xyXG4gICAgdmFyIHJhZGlhbnMgPSBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcclxuICAgIHZhciBzaW4gPSBNYXRoLnNpbihyYWRpYW5zKTtcclxuICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyYWRpYW5zKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgTWF0aC5yb3VuZCgoeCAqIGNvcyArIHkgKiBzaW4pICogMTAwMCkgLyAxMDAwLFxyXG4gICAgICAgIE1hdGgucm91bmQoKC14ICogc2luICsgeSAqIGNvcykgKiAxMDAwKSAvIDEwMDAsXHJcbiAgICBdO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=