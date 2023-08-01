(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./assets/js/plugins/ui/jquery-ui.js":
/*!*******************************************!*\
  !*** ./assets/js/plugins/ui/jquery-ui.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/// <reference path="../bower_components/jquery/dist/jquery.js" />
/*
jquery-resizable
Version 0.35 - 11/18/2019
© 2015-2019 Rick Strahl, West Wind Technologies
www.west-wind.com
Licensed under MIT License
*/
(function (factory, undefined) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($, undefined) {
  if ($.fn.resizableSafe) return;
  $.fn.resizableSafe = function fnResizable(options) {
    var defaultOptions = {
      // selector for handle that starts dragging
      handleSelector: null,
      // resize the width
      resizeWidth: true,
      // resize the height
      resizeHeight: true,
      // the side that the width resizing is relative to
      resizeWidthFrom: 'right',
      // the side that the height resizing is relative to
      resizeHeightFrom: 'bottom',
      // hook into start drag operation (event passed)
      onDragStart: null,
      // hook into stop drag operation (event passed)
      onDragEnd: null,
      // hook into each drag operation (event passed)
      onDrag: null,
      // disable touch-action on $handle
      // prevents browser level actions like forward back gestures
      touchActionNone: true,
      // instance id
      instanceId: null
    };
    if (_typeof(options) == "object") defaultOptions = $.extend(defaultOptions, options);
    return this.each(function () {
      var opt = $.extend({}, defaultOptions);
      if (!opt.instanceId) opt.instanceId = "rsz_" + new Date().getTime();
      var startPos, startTransition;

      // get the element to resize 
      var $el = $(this);
      var $handle;
      if (options === 'destroy') {
        opt = $el.data('resizable');
        if (!opt) return;
        $handle = getHandle(opt.handleSelector, $el);
        $handle.off("mousedown." + opt.instanceId + " touchstart." + opt.instanceId);
        if (opt.touchActionNone) $handle.css("touch-action", "");
        $el.removeClass("resizable");
        return;
      }
      $el.data('resizable', opt);

      // get the drag handle

      $handle = getHandle(opt.handleSelector, $el);
      if (opt.touchActionNone) $handle.css("touch-action", "none");
      $el.addClass("resizable");
      $handle.on("mousedown." + opt.instanceId + " touchstart." + opt.instanceId, startDragging);
      function noop(e) {
        e.stopPropagation();
        e.preventDefault();
      }
      ;
      function startDragging(e) {
        // Prevent dragging a ghost image in HTML5 / Firefox and maybe others    
        if (e.preventDefault) {
          e.preventDefault();
        }
        startPos = getMousePos(e);
        startPos.width = parseInt($el.width(), 10);
        startPos.height = parseInt($el.height(), 10);
        startTransition = $el.css("transition");
        $el.css("transition", "none");
        if (opt.onDragStart) {
          if (opt.onDragStart(e, $el, opt) === false) return;
        }
        $(document).on('mousemove.' + opt.instanceId, doDrag);
        $(document).on('mouseup.' + opt.instanceId, stopDragging);
        if (window.Touch || navigator.maxTouchPoints) {
          $(document).on('touchmove.' + opt.instanceId, doDrag);
          $(document).on('touchend.' + opt.instanceId, stopDragging);
        }
        $(document).on('selectstart.' + opt.instanceId, noop); // disable selection
        $("iframe").css("pointer-events", "none");
      }
      function doDrag(e) {
        var pos = getMousePos(e),
          newWidth,
          newHeight;
        if (opt.resizeWidthFrom === 'left') newWidth = startPos.width - pos.x + startPos.x;else newWidth = startPos.width + pos.x - startPos.x;
        if (opt.resizeHeightFrom === 'top') newHeight = startPos.height - pos.y + startPos.y;else newHeight = startPos.height + pos.y - startPos.y;
        if (!opt.onDrag || opt.onDrag(e, $el, newWidth, newHeight, opt) !== false) {
          if (opt.resizeHeight) $el.height(newHeight);
          if (opt.resizeWidth) $el.width(newWidth);
        }
      }
      function stopDragging(e) {
        e.stopPropagation();
        e.preventDefault();
        $(document).off('mousemove.' + opt.instanceId);
        $(document).off('mouseup.' + opt.instanceId);
        if (window.Touch || navigator.maxTouchPoints) {
          $(document).off('touchmove.' + opt.instanceId);
          $(document).off('touchend.' + opt.instanceId);
        }
        $(document).off('selectstart.' + opt.instanceId, noop);

        // reset changed values
        $el.css("transition", startTransition);
        $("iframe").css("pointer-events", "auto");
        if (opt.onDragEnd) opt.onDragEnd(e, $el, opt);
        return false;
      }
      function getMousePos(e) {
        var pos = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
        if (typeof e.clientX === "number") {
          pos.x = e.clientX;
          pos.y = e.clientY;
        } else if (e.originalEvent.touches) {
          pos.x = e.originalEvent.touches[0].clientX;
          pos.y = e.originalEvent.touches[0].clientY;
        } else return null;
        return pos;
      }
      function getHandle(selector, $el) {
        if (selector && selector.trim()[0] === ">") {
          selector = selector.trim().replace(/^>\s*/, "");
          return $el.find(selector);
        }

        // Search for the selector, but only in the parent element to limit the scope
        // This works for multiple objects on a page (using .class syntax most likely)
        // as long as each has a separate parent container. 
        return selector ? $el.parent().find(selector) : $el;
      }
    });
  };
  if (!$.fn.resizable) $.fn.resizable = $.fn.resizableSafe;
});

/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var PROPER_FUNCTION_NAME = __webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").PROPER;
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGx1Z2lucy91aS9qcXVlcnktdWkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy50cmltLmpzIl0sIm5hbWVzIjpbImZhY3RvcnkiLCJ1bmRlZmluZWQiLCJkZWZpbmUiLCIkIiwiZm4iLCJyZXNpemFibGVTYWZlIiwiZm5SZXNpemFibGUiLCJvcHRpb25zIiwiZGVmYXVsdE9wdGlvbnMiLCJoYW5kbGVTZWxlY3RvciIsInJlc2l6ZVdpZHRoIiwicmVzaXplSGVpZ2h0IiwicmVzaXplV2lkdGhGcm9tIiwicmVzaXplSGVpZ2h0RnJvbSIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnRW5kIiwib25EcmFnIiwidG91Y2hBY3Rpb25Ob25lIiwiaW5zdGFuY2VJZCIsImV4dGVuZCIsImVhY2giLCJvcHQiLCJEYXRlIiwiZ2V0VGltZSIsInN0YXJ0UG9zIiwic3RhcnRUcmFuc2l0aW9uIiwiJGVsIiwiJGhhbmRsZSIsImRhdGEiLCJnZXRIYW5kbGUiLCJvZmYiLCJjc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwib24iLCJzdGFydERyYWdnaW5nIiwibm9vcCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImdldE1vdXNlUG9zIiwid2lkdGgiLCJwYXJzZUludCIsImhlaWdodCIsImRvY3VtZW50IiwiZG9EcmFnIiwic3RvcERyYWdnaW5nIiwid2luZG93IiwiVG91Y2giLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsInBvcyIsIm5ld1dpZHRoIiwibmV3SGVpZ2h0IiwieCIsInkiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9yaWdpbmFsRXZlbnQiLCJ0b3VjaGVzIiwic2VsZWN0b3IiLCJ0cmltIiwicmVwbGFjZSIs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SCxRQUFRLENBQUM7UUFDN0I7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsT0FBT0EsUUFBUSxHQUFHbEMsR0FBRyxDQUFDc0MsTUFBTSxFQUFFLENBQUNELElBQUksQ0FBQ0gsUUFBUSxDQUFDLEdBQUdsQyxHQUFHO01BQ3ZEO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELElBQUksQ0FBQ3ZCLENBQUMsQ0FBQ0MsRUFBRSxDQUFDNkQsU0FBUyxFQUNmOUQsQ0FBQyxDQUFDQyxFQUFFLENBQUM2RCxTQUFTLEdBQUc5RCxDQUFDLENBQUNDLEVBQUUsQ0FBQ0MsYUFBYTtBQUMzQyxDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7QUNwTUYsMkJBQTJCLG1CQUFPLENBQUMscUZBQTRCO0FBQy9ELFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7QUFDeEMsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ2RhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxZQUFZLG1CQUFPLENBQUMsaUZBQTBCO0FBQzlDLDZCQUE2QixtQkFBTyxDQUFDLCtGQUFpQzs7QUFFdEU7QUFDQTtBQUNBLEdBQUcsd0VBQXdFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9ib3dlcl9jb21wb25lbnRzL2pxdWVyeS9kaXN0L2pxdWVyeS5qc1wiIC8+XHJcbi8qXHJcbmpxdWVyeS1yZXNpemFibGVcclxuVmVyc2lvbiAwLjM1IC0gMTEvMTgvMjAxOVxyXG7CqSAyMDE1LTIwMTkgUmljayBTdHJhaGwsIFdlc3QgV2luZCBUZWNobm9sb2dpZXNcclxud3d3Lndlc3Qtd2luZC5jb21cclxuTGljZW5zZWQgdW5kZXIgTUlUIExpY2Vuc2VcclxuKi9cclxuKGZ1bmN0aW9uKGZhY3RvcnksIHVuZGVmaW5lZCkge1xyXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRFxyXG5cdFx0ZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xyXG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSAnb2JqZWN0Jykge1xyXG5cdFx0Ly8gQ29tbW9uSlNcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdC8vIEdsb2JhbCBqUXVlcnlcclxuXHRcdGZhY3RvcnkoalF1ZXJ5KTtcclxuXHR9XHJcbn0oZnVuY3Rpb24oJCwgdW5kZWZpbmVkKSB7XHJcbiAgICBcclxuICAgIGlmICgkLmZuLnJlc2l6YWJsZVNhZmUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICQuZm4ucmVzaXphYmxlU2FmZSA9IGZ1bmN0aW9uIGZuUmVzaXphYmxlKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIC8vIHNlbGVjdG9yIGZvciBoYW5kbGUgdGhhdCBzdGFydHMgZHJhZ2dpbmdcclxuICAgICAgICAgICAgaGFuZGxlU2VsZWN0b3I6IG51bGwsXHJcbiAgICAgICAgICAgIC8vIHJlc2l6ZSB0aGUgd2lkdGhcclxuICAgICAgICAgICAgcmVzaXplV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIHJlc2l6ZSB0aGUgaGVpZ2h0XHJcbiAgICAgICAgICAgIHJlc2l6ZUhlaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gdGhlIHNpZGUgdGhhdCB0aGUgd2lkdGggcmVzaXppbmcgaXMgcmVsYXRpdmUgdG9cclxuICAgICAgICAgICAgcmVzaXplV2lkdGhGcm9tOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAvLyB0aGUgc2lkZSB0aGF0IHRoZSBoZWlnaHQgcmVzaXppbmcgaXMgcmVsYXRpdmUgdG9cclxuICAgICAgICAgICAgcmVzaXplSGVpZ2h0RnJvbTogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgIC8vIGhvb2sgaW50byBzdGFydCBkcmFnIG9wZXJhdGlvbiAoZXZlbnQgcGFzc2VkKVxyXG4gICAgICAgICAgICBvbkRyYWdTdGFydDogbnVsbCxcclxuICAgICAgICAgICAgLy8gaG9vayBpbnRvIHN0b3AgZHJhZyBvcGVyYXRpb24gKGV2ZW50IHBhc3NlZClcclxuICAgICAgICAgICAgb25EcmFnRW5kOiBudWxsLFxyXG4gICAgICAgICAgICAvLyBob29rIGludG8gZWFjaCBkcmFnIG9wZXJhdGlvbiAoZXZlbnQgcGFzc2VkKVxyXG4gICAgICAgICAgICBvbkRyYWc6IG51bGwsXHJcbiAgICAgICAgICAgIC8vIGRpc2FibGUgdG91Y2gtYWN0aW9uIG9uICRoYW5kbGVcclxuICAgICAgICAgICAgLy8gcHJldmVudHMgYnJvd3NlciBsZXZlbCBhY3Rpb25zIGxpa2UgZm9yd2FyZCBiYWNrIGdlc3R1cmVzXHJcbiAgICAgICAgICAgIHRvdWNoQWN0aW9uTm9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gaW5zdGFuY2UgaWRcclxuICAgICAgICAgICAgaW5zdGFuY2VJZDogbnVsbFxyXG4gICAgfTtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT0gXCJvYmplY3RcIilcclxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgb3B0ID0gJC5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zKTtcclxuICAgICAgICAgICAgaWYgKCFvcHQuaW5zdGFuY2VJZClcclxuICAgICAgICAgICAgICAgIG9wdC5pbnN0YW5jZUlkID0gXCJyc3pfXCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHZhciBzdGFydFBvcywgc3RhcnRUcmFuc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBlbGVtZW50IHRvIHJlc2l6ZSBcclxuICAgICAgICAgICAgdmFyICRlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciAkaGFuZGxlO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09ICdkZXN0cm95JykgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3B0ID0gJGVsLmRhdGEoJ3Jlc2l6YWJsZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvcHQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICRoYW5kbGUgPSBnZXRIYW5kbGUob3B0LmhhbmRsZVNlbGVjdG9yLCAkZWwpO1xyXG4gICAgICAgICAgICAgICAgJGhhbmRsZS5vZmYoXCJtb3VzZWRvd24uXCIgKyBvcHQuaW5zdGFuY2VJZCArIFwiIHRvdWNoc3RhcnQuXCIgKyBvcHQuaW5zdGFuY2VJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0LnRvdWNoQWN0aW9uTm9uZSlcclxuICAgICAgICAgICAgICAgICAgICAkaGFuZGxlLmNzcyhcInRvdWNoLWFjdGlvblwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICRlbC5yZW1vdmVDbGFzcyhcInJlc2l6YWJsZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICRlbC5kYXRhKCdyZXNpemFibGUnLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBkcmFnIGhhbmRsZVxyXG5cclxuICAgICAgICAgICAgJGhhbmRsZSA9IGdldEhhbmRsZShvcHQuaGFuZGxlU2VsZWN0b3IsICRlbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3B0LnRvdWNoQWN0aW9uTm9uZSlcclxuICAgICAgICAgICAgICAgICRoYW5kbGUuY3NzKFwidG91Y2gtYWN0aW9uXCIsIFwibm9uZVwiKTtcclxuXHJcbiAgICAgICAgICAgICRlbC5hZGRDbGFzcyhcInJlc2l6YWJsZVwiKTtcclxuICAgICAgICAgICAgJGhhbmRsZS5vbihcIm1vdXNlZG93bi5cIiArIG9wdC5pbnN0YW5jZUlkICsgXCIgdG91Y2hzdGFydC5cIiArIG9wdC5pbnN0YW5jZUlkLCBzdGFydERyYWdnaW5nKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG5vb3AoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0YXJ0RHJhZ2dpbmcoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCBkcmFnZ2luZyBhIGdob3N0IGltYWdlIGluIEhUTUw1IC8gRmlyZWZveCBhbmQgbWF5YmUgb3RoZXJzICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCBlLnByZXZlbnREZWZhdWx0ICkge1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHN0YXJ0UG9zID0gZ2V0TW91c2VQb3MoZSk7XHJcbiAgICAgICAgICAgICAgICBzdGFydFBvcy53aWR0aCA9IHBhcnNlSW50KCRlbC53aWR0aCgpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBzdGFydFBvcy5oZWlnaHQgPSBwYXJzZUludCgkZWwuaGVpZ2h0KCksIDEwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGFydFRyYW5zaXRpb24gPSAkZWwuY3NzKFwidHJhbnNpdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICRlbC5jc3MoXCJ0cmFuc2l0aW9uXCIsIFwibm9uZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0Lm9uRHJhZ1N0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdC5vbkRyYWdTdGFydChlLCAkZWwsIG9wdCkgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZW1vdmUuJyArIG9wdC5pbnN0YW5jZUlkLCBkb0RyYWcpO1xyXG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ21vdXNldXAuJyArIG9wdC5pbnN0YW5jZUlkLCBzdG9wRHJhZ2dpbmcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5Ub3VjaCB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vbigndG91Y2htb3ZlLicgKyBvcHQuaW5zdGFuY2VJZCwgZG9EcmFnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vbigndG91Y2hlbmQuJyArIG9wdC5pbnN0YW5jZUlkLCBzdG9wRHJhZ2dpbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ3NlbGVjdHN0YXJ0LicgKyBvcHQuaW5zdGFuY2VJZCwgbm9vcCk7IC8vIGRpc2FibGUgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAkKFwiaWZyYW1lXCIpLmNzcyhcInBvaW50ZXItZXZlbnRzXCIsXCJub25lXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkb0RyYWcoZSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gZ2V0TW91c2VQb3MoZSksIG5ld1dpZHRoLCBuZXdIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG9wdC5yZXNpemVXaWR0aEZyb20gPT09ICdsZWZ0JylcclxuICAgICAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IHN0YXJ0UG9zLndpZHRoIC0gcG9zLnggKyBzdGFydFBvcy54O1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gc3RhcnRQb3Mud2lkdGggKyBwb3MueCAtIHN0YXJ0UG9zLng7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG9wdC5yZXNpemVIZWlnaHRGcm9tID09PSAndG9wJylcclxuICAgICAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSBzdGFydFBvcy5oZWlnaHQgLSBwb3MueSArIHN0YXJ0UG9zLnk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gc3RhcnRQb3MuaGVpZ2h0ICsgcG9zLnkgLSBzdGFydFBvcy55O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghb3B0Lm9uRHJhZyB8fCBvcHQub25EcmFnKGUsICRlbCwgbmV3V2lkdGgsIG5ld0hlaWdodCwgb3B0KSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0LnJlc2l6ZUhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGVsLmhlaWdodChuZXdIZWlnaHQpOyAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHQucmVzaXplV2lkdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRlbC53aWR0aChuZXdXaWR0aCk7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc3RvcERyYWdnaW5nKGUpIHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkub2ZmKCdtb3VzZW1vdmUuJyArIG9wdC5pbnN0YW5jZUlkKTtcclxuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLm9mZignbW91c2V1cC4nICsgb3B0Lmluc3RhbmNlSWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuVG91Y2ggfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChkb2N1bWVudCkub2ZmKCd0b3VjaG1vdmUuJyArIG9wdC5pbnN0YW5jZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3RvdWNoZW5kLicgKyBvcHQuaW5zdGFuY2VJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3NlbGVjdHN0YXJ0LicgKyBvcHQuaW5zdGFuY2VJZCwgbm9vcCk7ICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IGNoYW5nZWQgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAkZWwuY3NzKFwidHJhbnNpdGlvblwiLCBzdGFydFRyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgJChcImlmcmFtZVwiKS5jc3MoXCJwb2ludGVyLWV2ZW50c1wiLFwiYXV0b1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0Lm9uRHJhZ0VuZClcclxuICAgICAgICAgICAgICAgICAgICBvcHQub25EcmFnRW5kKGUsICRlbCwgb3B0KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE1vdXNlUG9zKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3MgPSB7IHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZS5jbGllbnRYID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLnggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLnkgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUub3JpZ2luYWxFdmVudC50b3VjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLnggPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcy55ID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBwb3M7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEhhbmRsZShzZWxlY3RvciwgJGVsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IgJiYgc2VsZWN0b3IudHJpbSgpWzBdID09PSBcIj5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IudHJpbSgpLnJlcGxhY2UoL14+XFxzKi8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkZWwuZmluZChzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2VhcmNoIGZvciB0aGUgc2VsZWN0b3IsIGJ1dCBvbmx5IGluIHRoZSBwYXJlbnQgZWxlbWVudCB0byBsaW1pdCB0aGUgc2NvcGVcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgd29ya3MgZm9yIG11bHRpcGxlIG9iamVjdHMgb24gYSBwYWdlICh1c2luZyAuY2xhc3Mgc3ludGF4IG1vc3QgbGlrZWx5KVxyXG4gICAgICAgICAgICAgICAgLy8gYXMgbG9uZyBhcyBlYWNoIGhhcyBhIHNlcGFyYXRlIHBhcmVudCBjb250YWluZXIuIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yID8gJGVsLnBhcmVudCgpLmZpbmQoc2VsZWN0b3IpIDogJGVsO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoISQuZm4ucmVzaXphYmxlKVxyXG4gICAgICAgICQuZm4ucmVzaXphYmxlID0gJC5mbi5yZXNpemFibGVTYWZlO1xyXG59KSk7IiwidmFyIFBST1BFUl9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5QUk9QRVI7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgbm9uID0gJ1xcdTIwMEJcXHUwMDg1XFx1MTgwRSc7XG5cbi8vIGNoZWNrIHRoYXQgYSBtZXRob2Qgd29ya3Mgd2l0aCB0aGUgY29ycmVjdCBsaXN0XG4vLyBvZiB3aGl0ZXNwYWNlcyBhbmQgaGFzIGEgY29ycmVjdCBuYW1lXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXSgpXG4gICAgICB8fCBub25bTUVUSE9EX05BTUVdKCkgIT09IG5vblxuICAgICAgfHwgKFBST1BFUl9GVU5DVElPTl9OQU1FICYmIHdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXS5uYW1lICE9PSBNRVRIT0RfTkFNRSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICR0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciBmb3JjZWRTdHJpbmdUcmltTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltLWZvcmNlZCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCgndHJpbScpIH0sIHtcbiAgdHJpbTogZnVuY3Rpb24gdHJpbSgpIHtcbiAgICByZXR1cm4gJHRyaW0odGhpcyk7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==