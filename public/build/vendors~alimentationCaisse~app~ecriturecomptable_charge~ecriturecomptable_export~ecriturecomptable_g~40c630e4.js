(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/toastr/toastr.js":
/*!***************************************!*\
  !*** ./node_modules/toastr/toastr.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Toastr
 * Copyright 2012-2015
 * Authors: John Papa, Hans Fjällemark, and Tim Ferrell.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * ARIA Support: Greta Krafsig
 *
 * Project: https://github.com/CodeSeven/toastr
 */
/* global define */
(function (define) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($) {
        return (function () {
            var $container;
            var listener;
            var toastId = 0;
            var toastType = {
                error: 'error',
                info: 'info',
                success: 'success',
                warning: 'warning'
            };

            var toastr = {
                clear: clear,
                remove: remove,
                error: error,
                getContainer: getContainer,
                info: info,
                options: {},
                subscribe: subscribe,
                success: success,
                version: '2.1.4',
                warning: warning
            };

            var previousToast;

            return toastr;

            ////////////////

            function error(message, title, optionsOverride) {
                return notify({
                    type: toastType.error,
                    iconClass: getOptions().iconClasses.error,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function getContainer(options, create) {
                if (!options) { options = getOptions(); }
                $container = $('#' + options.containerId);
                if ($container.length) {
                    return $container;
                }
                if (create) {
                    $container = createContainer(options);
                }
                return $container;
            }

            function info(message, title, optionsOverride) {
                return notify({
                    type: toastType.info,
                    iconClass: getOptions().iconClasses.info,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function subscribe(callback) {
                listener = callback;
            }

            function success(message, title, optionsOverride) {
                return notify({
                    type: toastType.success,
                    iconClass: getOptions().iconClasses.success,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function warning(message, title, optionsOverride) {
                return notify({
                    type: toastType.warning,
                    iconClass: getOptions().iconClasses.warning,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function clear($toastElement, clearOptions) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if (!clearToast($toastElement, options, clearOptions)) {
                    clearContainer(options);
                }
            }

            function remove($toastElement) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if ($toastElement && $(':focus', $toastElement).length === 0) {
                    removeToast($toastElement);
                    return;
                }
                if ($container.children().length) {
                    $container.remove();
                }
            }

            // internal functions

            function clearContainer (options) {
                var toastsToClear = $container.children();
                for (var i = toastsToClear.length - 1; i >= 0; i--) {
                    clearToast($(toastsToClear[i]), options);
                }
            }

            function clearToast ($toastElement, options, clearOptions) {
                var force = clearOptions && clearOptions.force ? clearOptions.force : false;
                if ($toastElement && (force || $(':focus', $toastElement).length === 0)) {
                    $toastElement[options.hideMethod]({
                        duration: options.hideDuration,
                        easing: options.hideEasing,
                        complete: function () { removeToast($toastElement); }
                    });
                    return true;
                }
                return false;
            }

            function createContainer(options) {
                $container = $('<div/>')
                    .attr('id', options.containerId)
                    .addClass(options.positionClass);

                $container.appendTo($(options.target));
                return $container;
            }

            function getDefaults() {
                return {
                    tapToDismiss: true,
                    toastClass: 'toast',
                    containerId: 'toast-container',
                    debug: false,

                    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
                    showDuration: 300,
                    showEasing: 'swing', //swing and linear are built into jQuery
                    onShown: undefined,
                    hideMethod: 'fadeOut',
                    hideDuration: 1000,
                    hideEasing: 'swing',
                    onHidden: undefined,
                    closeMethod: false,
                    closeDuration: false,
                    closeEasing: false,
                    closeOnHover: true,

                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: 'toast-error',
                        info: 'toast-info',
                        success: 'toast-success',
                        warning: 'toast-warning'
                    },
                    iconClass: 'toast-info',
                    positionClass: 'toast-top-right',
                    timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky
                    titleClass: 'toast-title',
                    messageClass: 'toast-message',
                    escapeHtml: false,
                    target: 'body',
                    closeHtml: '<button type="button">&times;</button>',
                    closeClass: 'toast-close-button',
                    newestOnTop: true,
                    preventDuplicates: false,
                    progressBar: false,
                    progressClass: 'toast-progress',
                    rtl: false
                };
            }

            function publish(args) {
                if (!listener) { return; }
                listener(args);
            }

            function notify(map) {
                var options = getOptions();
                var iconClass = map.iconClass || options.iconClass;

                if (typeof (map.optionsOverride) !== 'undefined') {
                    options = $.extend(options, map.optionsOverride);
                    iconClass = map.optionsOverride.iconClass || iconClass;
                }

                if (shouldExit(options, map)) { return; }

                toastId++;

                $container = getContainer(options, true);

                var intervalId = null;
                var $toastElement = $('<div/>');
                var $titleElement = $('<div/>');
                var $messageElement = $('<div/>');
                var $progressElement = $('<div/>');
                var $closeElement = $(options.closeHtml);
                var progressBar = {
                    intervalId: null,
                    hideEta: null,
                    maxHideTime: null
                };
                var response = {
                    toastId: toastId,
                    state: 'visible',
                    startTime: new Date(),
                    options: options,
                    map: map
                };

                personalizeToast();

                displayToast();

                handleEvents();

                publish(response);

                if (options.debug && console) {
                    console.log(response);
                }

                return $toastElement;

                function escapeHtml(source) {
                    if (source == null) {
                        source = '';
                    }

                    return source
                        .replace(/&/g, '&amp;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&#39;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;');
                }

                function personalizeToast() {
                    setIcon();
                    setTitle();
                    setMessage();
                    setCloseButton();
                    setProgressBar();
                    setRTL();
                    setSequence();
                    setAria();
                }

                function setAria() {
                    var ariaValue = '';
                    switch (map.iconClass) {
                        case 'toast-success':
                        case 'toast-info':
                            ariaValue =  'polite';
                            break;
                        default:
                            ariaValue = 'assertive';
                    }
                    $toastElement.attr('aria-live', ariaValue);
                }

                function handleEvents() {
                    if (options.closeOnHover) {
                        $toastElement.hover(stickAround, delayedHideToast);
                    }

                    if (!options.onclick && options.tapToDismiss) {
                        $toastElement.click(hideToast);
                    }

                    if (options.closeButton && $closeElement) {
                        $closeElement.click(function (event) {
                            if (event.stopPropagation) {
                                event.stopPropagation();
                            } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
                                event.cancelBubble = true;
                            }

                            if (options.onCloseClick) {
                                options.onCloseClick(event);
                            }

                            hideToast(true);
                        });
                    }

                    if (options.onclick) {
                        $toastElement.click(function (event) {
                            options.onclick(event);
                            hideToast();
                        });
                    }
                }

                function displayToast() {
                    $toastElement.hide();

                    $toastElement[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing, complete: options.onShown}
                    );

                    if (options.timeOut > 0) {
                        intervalId = setTimeout(hideToast, options.timeOut);
                        progressBar.maxHideTime = parseFloat(options.timeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                        if (options.progressBar) {
                            progressBar.intervalId = setInterval(updateProgress, 10);
                        }
                    }
                }

                function setIcon() {
                    if (map.iconClass) {
                        $toastElement.addClass(options.toastClass).addClass(iconClass);
                    }
                }

                function setSequence() {
                    if (options.newestOnTop) {
                        $container.prepend($toastElement);
                    } else {
                        $container.append($toastElement);
                    }
                }

                function setTitle() {
                    if (map.title) {
                        var suffix = map.title;
                        if (options.escapeHtml) {
                            suffix = escapeHtml(map.title);
                        }
                        $titleElement.append(suffix).addClass(options.titleClass);
                        $toastElement.append($titleElement);
                    }
                }

                function setMessage() {
                    if (map.message) {
                        var suffix = map.message;
                        if (options.escapeHtml) {
                            suffix = escapeHtml(map.message);
                        }
                        $messageElement.append(suffix).addClass(options.messageClass);
                        $toastElement.append($messageElement);
                    }
                }

                function setCloseButton() {
                    if (options.closeButton) {
                        $closeElement.addClass(options.closeClass).attr('role', 'button');
                        $toastElement.prepend($closeElement);
                    }
                }

                function setProgressBar() {
                    if (options.progressBar) {
                        $progressElement.addClass(options.progressClass);
                        $toastElement.prepend($progressElement);
                    }
                }

                function setRTL() {
                    if (options.rtl) {
                        $toastElement.addClass('rtl');
                    }
                }

                function shouldExit(options, map) {
                    if (options.preventDuplicates) {
                        if (map.message === previousToast) {
                            return true;
                        } else {
                            previousToast = map.message;
                        }
                    }
                    return false;
                }

                function hideToast(override) {
                    var method = override && options.closeMethod !== false ? options.closeMethod : options.hideMethod;
                    var duration = override && options.closeDuration !== false ?
                        options.closeDuration : options.hideDuration;
                    var easing = override && options.closeEasing !== false ? options.closeEasing : options.hideEasing;
                    if ($(':focus', $toastElement).length && !override) {
                        return;
                    }
                    clearTimeout(progressBar.intervalId);
                    return $toastElement[method]({
                        duration: duration,
                        easing: easing,
                        complete: function () {
                            removeToast($toastElement);
                            clearTimeout(intervalId);
                            if (options.onHidden && response.state !== 'hidden') {
                                options.onHidden();
                            }
                            response.state = 'hidden';
                            response.endTime = new Date();
                            publish(response);
                        }
                    });
                }

                function delayedHideToast() {
                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                        intervalId = setTimeout(hideToast, options.extendedTimeOut);
                        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                    }
                }

                function stickAround() {
                    clearTimeout(intervalId);
                    progressBar.hideEta = 0;
                    $toastElement.stop(true, true)[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing}
                    );
                }

                function updateProgress() {
                    var percentage = ((progressBar.hideEta - (new Date().getTime())) / progressBar.maxHideTime) * 100;
                    $progressElement.width(percentage + '%');
                }
            }

            function getOptions() {
                return $.extend({}, getDefaults(), toastr.options);
            }

            function removeToast($toastElement) {
                if (!$container) { $container = getContainer(); }
                if ($toastElement.is(':visible')) {
                    return;
                }
                $toastElement.remove();
                $toastElement = null;
                if ($container.children().length === 0) {
                    $container.remove();
                    previousToast = undefined;
                }
            }

        })();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}(__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")));


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdG9hc3RyL3RvYXN0ci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpQ0FBTyxDQUFDLHlFQUFRLENBQUMsbUNBQUU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSwrQkFBK0Isd0JBQXdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyx1QkFBdUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyx1QkFBdUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNELFFBQVE7QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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aGFyZ2V+ZWNyaXR1cmVjb21wdGFibGVfZXhwb3J0fmVjcml0dXJlY29tcHRhYmxlX2d+NDBjNjMwZTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVG9hc3RyXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1XG4gKiBBdXRob3JzOiBKb2huIFBhcGEsIEhhbnMgRmrDpGxsZW1hcmssIGFuZCBUaW0gRmVycmVsbC5cbiAqIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBVc2UsIHJlcHJvZHVjdGlvbiwgZGlzdHJpYnV0aW9uLCBhbmQgbW9kaWZpY2F0aW9uIG9mIHRoaXMgY29kZSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBhbmRcbiAqIGNvbmRpdGlvbnMgb2YgdGhlIE1JVCBsaWNlbnNlLCBhdmFpbGFibGUgYXQgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAqXG4gKiBBUklBIFN1cHBvcnQ6IEdyZXRhIEtyYWZzaWdcbiAqXG4gKiBQcm9qZWN0OiBodHRwczovL2dpdGh1Yi5jb20vQ29kZVNldmVuL3RvYXN0clxuICovXG4vKiBnbG9iYWwgZGVmaW5lICovXG4oZnVuY3Rpb24gKGRlZmluZSkge1xuICAgIGRlZmluZShbJ2pxdWVyeSddLCBmdW5jdGlvbiAoJCkge1xuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkY29udGFpbmVyO1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVyO1xuICAgICAgICAgICAgdmFyIHRvYXN0SWQgPSAwO1xuICAgICAgICAgICAgdmFyIHRvYXN0VHlwZSA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICBpbmZvOiAnaW5mbycsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6ICd3YXJuaW5nJ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIHRvYXN0ciA9IHtcbiAgICAgICAgICAgICAgICBjbGVhcjogY2xlYXIsXG4gICAgICAgICAgICAgICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgIGdldENvbnRhaW5lcjogZ2V0Q29udGFpbmVyLFxuICAgICAgICAgICAgICAgIGluZm86IGluZm8sXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge30sXG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgICAgICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiAnMi4xLjQnLFxuICAgICAgICAgICAgICAgIHdhcm5pbmc6IHdhcm5pbmdcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBwcmV2aW91c1RvYXN0O1xuXG4gICAgICAgICAgICByZXR1cm4gdG9hc3RyO1xuXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm90aWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdG9hc3RUeXBlLmVycm9yLFxuICAgICAgICAgICAgICAgICAgICBpY29uQ2xhc3M6IGdldE9wdGlvbnMoKS5pY29uQ2xhc3Nlcy5lcnJvcixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc092ZXJyaWRlOiBvcHRpb25zT3ZlcnJpZGUsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRDb250YWluZXIob3B0aW9ucywgY3JlYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zKSB7IG9wdGlvbnMgPSBnZXRPcHRpb25zKCk7IH1cbiAgICAgICAgICAgICAgICAkY29udGFpbmVyID0gJCgnIycgKyBvcHRpb25zLmNvbnRhaW5lcklkKTtcbiAgICAgICAgICAgICAgICBpZiAoJGNvbnRhaW5lci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRjb250YWluZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjcmVhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcihvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICRjb250YWluZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGluZm8obWVzc2FnZSwgdGl0bGUsIG9wdGlvbnNPdmVycmlkZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub3RpZnkoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0b2FzdFR5cGUuaW5mbyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsYXNzOiBnZXRPcHRpb25zKCkuaWNvbkNsYXNzZXMuaW5mbyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc092ZXJyaWRlOiBvcHRpb25zT3ZlcnJpZGUsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lciA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzdWNjZXNzKG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zT3ZlcnJpZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm90aWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdG9hc3RUeXBlLnN1Y2Nlc3MsXG4gICAgICAgICAgICAgICAgICAgIGljb25DbGFzczogZ2V0T3B0aW9ucygpLmljb25DbGFzc2VzLnN1Y2Nlc3MsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNPdmVycmlkZTogb3B0aW9uc092ZXJyaWRlLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlLCB0aXRsZSwgb3B0aW9uc092ZXJyaWRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vdGlmeSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHRvYXN0VHlwZS53YXJuaW5nLFxuICAgICAgICAgICAgICAgICAgICBpY29uQ2xhc3M6IGdldE9wdGlvbnMoKS5pY29uQ2xhc3Nlcy53YXJuaW5nLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zT3ZlcnJpZGU6IG9wdGlvbnNPdmVycmlkZSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFyKCR0b2FzdEVsZW1lbnQsIGNsZWFyT3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gZ2V0T3B0aW9ucygpO1xuICAgICAgICAgICAgICAgIGlmICghJGNvbnRhaW5lcikgeyBnZXRDb250YWluZXIob3B0aW9ucyk7IH1cbiAgICAgICAgICAgICAgICBpZiAoIWNsZWFyVG9hc3QoJHRvYXN0RWxlbWVudCwgb3B0aW9ucywgY2xlYXJPcHRpb25zKSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckNvbnRhaW5lcihvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZSgkdG9hc3RFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBnZXRPcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgaWYgKCEkY29udGFpbmVyKSB7IGdldENvbnRhaW5lcihvcHRpb25zKTsgfVxuICAgICAgICAgICAgICAgIGlmICgkdG9hc3RFbGVtZW50ICYmICQoJzpmb2N1cycsICR0b2FzdEVsZW1lbnQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVUb2FzdCgkdG9hc3RFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoJGNvbnRhaW5lci5jaGlsZHJlbigpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaW50ZXJuYWwgZnVuY3Rpb25zXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFyQ29udGFpbmVyIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvYXN0c1RvQ2xlYXIgPSAkY29udGFpbmVyLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IHRvYXN0c1RvQ2xlYXIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUb2FzdCgkKHRvYXN0c1RvQ2xlYXJbaV0pLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFyVG9hc3QgKCR0b2FzdEVsZW1lbnQsIG9wdGlvbnMsIGNsZWFyT3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHZhciBmb3JjZSA9IGNsZWFyT3B0aW9ucyAmJiBjbGVhck9wdGlvbnMuZm9yY2UgPyBjbGVhck9wdGlvbnMuZm9yY2UgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoJHRvYXN0RWxlbWVudCAmJiAoZm9yY2UgfHwgJCgnOmZvY3VzJywgJHRvYXN0RWxlbWVudCkubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICAkdG9hc3RFbGVtZW50W29wdGlvbnMuaGlkZU1ldGhvZF0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IG9wdGlvbnMuaGlkZUR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBvcHRpb25zLmhpZGVFYXNpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkgeyByZW1vdmVUb2FzdCgkdG9hc3RFbGVtZW50KTsgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyID0gJCgnPGRpdi8+JylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2lkJywgb3B0aW9ucy5jb250YWluZXJJZClcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKG9wdGlvbnMucG9zaXRpb25DbGFzcyk7XG5cbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFwcGVuZFRvKCQob3B0aW9ucy50YXJnZXQpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJGNvbnRhaW5lcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0RGVmYXVsdHMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdGFwVG9EaXNtaXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0b2FzdENsYXNzOiAndG9hc3QnLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJJZDogJ3RvYXN0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGRlYnVnOiBmYWxzZSxcblxuICAgICAgICAgICAgICAgICAgICBzaG93TWV0aG9kOiAnZmFkZUluJywgLy9mYWRlSW4sIHNsaWRlRG93biwgYW5kIHNob3cgYXJlIGJ1aWx0IGludG8galF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIHNob3dEdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgICAgICAgICBzaG93RWFzaW5nOiAnc3dpbmcnLCAvL3N3aW5nIGFuZCBsaW5lYXIgYXJlIGJ1aWx0IGludG8galF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIG9uU2hvd246IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgaGlkZU1ldGhvZDogJ2ZhZGVPdXQnLFxuICAgICAgICAgICAgICAgICAgICBoaWRlRHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIGhpZGVFYXNpbmc6ICdzd2luZycsXG4gICAgICAgICAgICAgICAgICAgIG9uSGlkZGVuOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlTWV0aG9kOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VEdXJhdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlRWFzaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkhvdmVyOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgICAgIGV4dGVuZGVkVGltZU91dDogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsYXNzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAndG9hc3QtZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbzogJ3RvYXN0LWluZm8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogJ3RvYXN0LXN1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZzogJ3RvYXN0LXdhcm5pbmcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGljb25DbGFzczogJ3RvYXN0LWluZm8nLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNsYXNzOiAndG9hc3QtdG9wLXJpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgdGltZU91dDogNTAwMCwgLy8gU2V0IHRpbWVPdXQgYW5kIGV4dGVuZGVkVGltZU91dCB0byAwIHRvIG1ha2UgaXQgc3RpY2t5XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQ2xhc3M6ICd0b2FzdC10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VDbGFzczogJ3RvYXN0LW1lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiAnYm9keScsXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlSHRtbDogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiPiZ0aW1lczs8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgICAgICBjbG9zZUNsYXNzOiAndG9hc3QtY2xvc2UtYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgbmV3ZXN0T25Ub3A6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByZXZlbnREdXBsaWNhdGVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0NsYXNzOiAndG9hc3QtcHJvZ3Jlc3MnLFxuICAgICAgICAgICAgICAgICAgICBydGw6IGZhbHNlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcHVibGlzaChhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFsaXN0ZW5lcikgeyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBsaXN0ZW5lcihhcmdzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gbm90aWZ5KG1hcCkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gZ2V0T3B0aW9ucygpO1xuICAgICAgICAgICAgICAgIHZhciBpY29uQ2xhc3MgPSBtYXAuaWNvbkNsYXNzIHx8IG9wdGlvbnMuaWNvbkNsYXNzO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAobWFwLm9wdGlvbnNPdmVycmlkZSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZChvcHRpb25zLCBtYXAub3B0aW9uc092ZXJyaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsYXNzID0gbWFwLm9wdGlvbnNPdmVycmlkZS5pY29uQ2xhc3MgfHwgaWNvbkNsYXNzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRFeGl0KG9wdGlvbnMsIG1hcCkpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgICAgICB0b2FzdElkKys7XG5cbiAgICAgICAgICAgICAgICAkY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKG9wdGlvbnMsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGludGVydmFsSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHZhciAkdG9hc3RFbGVtZW50ID0gJCgnPGRpdi8+Jyk7XG4gICAgICAgICAgICAgICAgdmFyICR0aXRsZUVsZW1lbnQgPSAkKCc8ZGl2Lz4nKTtcbiAgICAgICAgICAgICAgICB2YXIgJG1lc3NhZ2VFbGVtZW50ID0gJCgnPGRpdi8+Jyk7XG4gICAgICAgICAgICAgICAgdmFyICRwcm9ncmVzc0VsZW1lbnQgPSAkKCc8ZGl2Lz4nKTtcbiAgICAgICAgICAgICAgICB2YXIgJGNsb3NlRWxlbWVudCA9ICQob3B0aW9ucy5jbG9zZUh0bWwpO1xuICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzc0JhciA9IHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxJZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgaGlkZUV0YTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgbWF4SGlkZVRpbWU6IG51bGxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RJZDogdG9hc3RJZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IG1hcFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBwZXJzb25hbGl6ZVRvYXN0KCk7XG5cbiAgICAgICAgICAgICAgICBkaXNwbGF5VG9hc3QoKTtcblxuICAgICAgICAgICAgICAgIGhhbmRsZUV2ZW50cygpO1xuXG4gICAgICAgICAgICAgICAgcHVibGlzaChyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kZWJ1ZyAmJiBjb25zb2xlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJHRvYXN0RWxlbWVudDtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGVzY2FwZUh0bWwoc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgJyYjMzk7JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcGVyc29uYWxpemVUb2FzdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SWNvbigpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaXRsZSgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldENsb3NlQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFByb2dyZXNzQmFyKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFJUTCgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRTZXF1ZW5jZSgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRBcmlhKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2V0QXJpYSgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyaWFWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hcC5pY29uQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RvYXN0LXN1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9hc3QtaW5mbyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYVZhbHVlID0gICdwb2xpdGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhVmFsdWUgPSAnYXNzZXJ0aXZlJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkdG9hc3RFbGVtZW50LmF0dHIoJ2FyaWEtbGl2ZScsIGFyaWFWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlRXZlbnRzKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jbG9zZU9uSG92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0b2FzdEVsZW1lbnQuaG92ZXIoc3RpY2tBcm91bmQsIGRlbGF5ZWRIaWRlVG9hc3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLm9uY2xpY2sgJiYgb3B0aW9ucy50YXBUb0Rpc21pc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0b2FzdEVsZW1lbnQuY2xpY2soaGlkZVRvYXN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmNsb3NlQnV0dG9uICYmICRjbG9zZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjbG9zZUVsZW1lbnQuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmNhbmNlbEJ1YmJsZSAhPT0gdW5kZWZpbmVkICYmIGV2ZW50LmNhbmNlbEJ1YmJsZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm9uQ2xvc2VDbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uQ2xvc2VDbGljayhldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVRvYXN0KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5vbmNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdG9hc3RFbGVtZW50LmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25jbGljayhldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVRvYXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlUb2FzdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRvYXN0RWxlbWVudC5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJHRvYXN0RWxlbWVudFtvcHRpb25zLnNob3dNZXRob2RdKFxuICAgICAgICAgICAgICAgICAgICAgICAge2R1cmF0aW9uOiBvcHRpb25zLnNob3dEdXJhdGlvbiwgZWFzaW5nOiBvcHRpb25zLnNob3dFYXNpbmcsIGNvbXBsZXRlOiBvcHRpb25zLm9uU2hvd259XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudGltZU91dCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsSWQgPSBzZXRUaW1lb3V0KGhpZGVUb2FzdCwgb3B0aW9ucy50aW1lT3V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLm1heEhpZGVUaW1lID0gcGFyc2VGbG9hdChvcHRpb25zLnRpbWVPdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuaGlkZUV0YSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgcHJvZ3Jlc3NCYXIubWF4SGlkZVRpbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5wcm9ncmVzc0Jhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh1cGRhdGVQcm9ncmVzcywgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2V0SWNvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcC5pY29uQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0b2FzdEVsZW1lbnQuYWRkQ2xhc3Mob3B0aW9ucy50b2FzdENsYXNzKS5hZGRDbGFzcyhpY29uQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2V0U2VxdWVuY2UoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm5ld2VzdE9uVG9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyLnByZXBlbmQoJHRvYXN0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFwcGVuZCgkdG9hc3RFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNldFRpdGxlKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFwLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3VmZml4ID0gbWFwLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZXNjYXBlSHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1ZmZpeCA9IGVzY2FwZUh0bWwobWFwLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICR0aXRsZUVsZW1lbnQuYXBwZW5kKHN1ZmZpeCkuYWRkQ2xhc3Mob3B0aW9ucy50aXRsZUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0b2FzdEVsZW1lbnQuYXBwZW5kKCR0aXRsZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2V0TWVzc2FnZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcC5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3VmZml4ID0gbWFwLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lc2NhcGVIdG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VmZml4ID0gZXNjYXBlSHRtbChtYXAubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUVsZW1lbnQuYXBwZW5kKHN1ZmZpeCkuYWRkQ2xhc3Mob3B0aW9ucy5tZXNzYWdlQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRvYXN0RWxlbWVudC5hcHBlbmQoJG1lc3NhZ2VFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNldENsb3NlQnV0dG9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jbG9zZUJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGNsb3NlRWxlbWVudC5hZGRDbGFzcyhvcHRpb25zLmNsb3NlQ2xhc3MpLmF0dHIoJ3JvbGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdG9hc3RFbGVtZW50LnByZXBlbmQoJGNsb3NlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXRQcm9ncmVzc0JhcigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRwcm9ncmVzc0VsZW1lbnQuYWRkQ2xhc3Mob3B0aW9ucy5wcm9ncmVzc0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0b2FzdEVsZW1lbnQucHJlcGVuZCgkcHJvZ3Jlc3NFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNldFJUTCgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucnRsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdG9hc3RFbGVtZW50LmFkZENsYXNzKCdydGwnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNob3VsZEV4aXQob3B0aW9ucywgbWFwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnByZXZlbnREdXBsaWNhdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFwLm1lc3NhZ2UgPT09IHByZXZpb3VzVG9hc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNUb2FzdCA9IG1hcC5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoaWRlVG9hc3Qob3ZlcnJpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1ldGhvZCA9IG92ZXJyaWRlICYmIG9wdGlvbnMuY2xvc2VNZXRob2QgIT09IGZhbHNlID8gb3B0aW9ucy5jbG9zZU1ldGhvZCA6IG9wdGlvbnMuaGlkZU1ldGhvZDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGR1cmF0aW9uID0gb3ZlcnJpZGUgJiYgb3B0aW9ucy5jbG9zZUR1cmF0aW9uICE9PSBmYWxzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmNsb3NlRHVyYXRpb24gOiBvcHRpb25zLmhpZGVEdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVhc2luZyA9IG92ZXJyaWRlICYmIG9wdGlvbnMuY2xvc2VFYXNpbmcgIT09IGZhbHNlID8gb3B0aW9ucy5jbG9zZUVhc2luZyA6IG9wdGlvbnMuaGlkZUVhc2luZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJzpmb2N1cycsICR0b2FzdEVsZW1lbnQpLmxlbmd0aCAmJiAhb3ZlcnJpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQocHJvZ3Jlc3NCYXIuaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkdG9hc3RFbGVtZW50W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBlYXNpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVRvYXN0KCR0b2FzdEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChpbnRlcnZhbElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5vbkhpZGRlbiAmJiByZXNwb25zZS5zdGF0ZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbkhpZGRlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5zdGF0ZSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1Ymxpc2gocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkZWxheWVkSGlkZVRvYXN0KCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50aW1lT3V0ID4gMCB8fCBvcHRpb25zLmV4dGVuZGVkVGltZU91dCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsSWQgPSBzZXRUaW1lb3V0KGhpZGVUb2FzdCwgb3B0aW9ucy5leHRlbmRlZFRpbWVPdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIubWF4SGlkZVRpbWUgPSBwYXJzZUZsb2F0KG9wdGlvbnMuZXh0ZW5kZWRUaW1lT3V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmhpZGVFdGEgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHByb2dyZXNzQmFyLm1heEhpZGVUaW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc3RpY2tBcm91bmQoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChpbnRlcnZhbElkKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuaGlkZUV0YSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICR0b2FzdEVsZW1lbnQuc3RvcCh0cnVlLCB0cnVlKVtvcHRpb25zLnNob3dNZXRob2RdKFxuICAgICAgICAgICAgICAgICAgICAgICAge2R1cmF0aW9uOiBvcHRpb25zLnNob3dEdXJhdGlvbiwgZWFzaW5nOiBvcHRpb25zLnNob3dFYXNpbmd9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3MoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwZXJjZW50YWdlID0gKChwcm9ncmVzc0Jhci5oaWRlRXRhIC0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSkgLyBwcm9ncmVzc0Jhci5tYXhIaWRlVGltZSkgKiAxMDA7XG4gICAgICAgICAgICAgICAgICAgICRwcm9ncmVzc0VsZW1lbnQud2lkdGgocGVyY2VudGFnZSArICclJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRPcHRpb25zKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAkLmV4dGVuZCh7fSwgZ2V0RGVmYXVsdHMoKSwgdG9hc3RyLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVUb2FzdCgkdG9hc3RFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkY29udGFpbmVyKSB7ICRjb250YWluZXIgPSBnZXRDb250YWluZXIoKTsgfVxuICAgICAgICAgICAgICAgIGlmICgkdG9hc3RFbGVtZW50LmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJHRvYXN0RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAkdG9hc3RFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoJGNvbnRhaW5lci5jaGlsZHJlbigpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1RvYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KSgpO1xuICAgIH0pO1xufSh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUgOiBmdW5jdGlvbiAoZGVwcywgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgeyAvL05vZGVcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cudG9hc3RyID0gZmFjdG9yeSh3aW5kb3cualF1ZXJ5KTtcbiAgICB9XG59KSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHR0aHJvdyBuZXcgRXJyb3IoXCJkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3RcIik7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==