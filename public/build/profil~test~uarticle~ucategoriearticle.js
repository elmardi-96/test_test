(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profil~test~uarticle~ucategoriearticle"],{

/***/ "./assets/js/ManagementErrors/index.js":
/*!*********************************************!*\
  !*** ./assets/js/ManagementErrors/index.js ***!
  \*********************************************/
/*! exports provided: ShowFormErrors, ShowFormErrorsWithParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowFormErrors", function() { return ShowFormErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowFormErrorsWithParam", function() { return ShowFormErrorsWithParam; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8__);








var routes = __webpack_require__(/*! ../../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_8___default.a.setRoutingData(routes);
var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
var swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-white btn-xs sySweetStyle',
    cancelButton: 'btn btn-warning btn-xs sySweetStyle'
  },
  buttonsStyling: false
});
function ShowFormErrors(selector, form_name, errors) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var isGroupe = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  $('.errors-list').remove();
  jQuery.each(errors.violations, function (i, val) {
    var columnName = "";
    var x = val.propertyPath;
    if (isGroupe == true) {
      columnName = x;
    } else {
      if (x.search('\\[') != -1 && x.search('\\]') != -1) {
        var separators = ['\\]', '\\['];
        var arr = x.split(new RegExp(separators.join('|')));
        var columnName = arr[1];
      }
      if (x.search('data.') != -1) {
        var arr = x.split('.');
        var columnName = arr[1];
      }
    }
    //console.log(x)

    /*vérifier s'il s'agit d'une formulaire avec un champ type file */
    if (!jQuery("#" + form_name + "_" + columnName).length > 0) {
      columnName = columnName + '_file';
    }
    if (id) {
      columnName = id;
    }
    console.log(columnName);
    if (columnName != "") {
      console.log("#" + form_name + "_" + columnName);
      selector.find("#" + form_name + "_" + columnName).parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + val.title + "</span></span></span>");
    }
  });
}
function ShowFormErrorsWithParam(selector, form_name, errors) {
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var isGroupe = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  $('.errors-list').remove();
  $("#" + selector).parent().append("<span class='  error-class-tab  errors-list invalid-feedback d-block'><span class='d-block'> <span class='form-error-icon badge badge-danger text-uppercase'>Erreur</span> <span class='form-error-message'>" + errors + "</span></span></span>");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/plugins/blueimp-gallery/js/blueimp-gallery-video.js":
/*!***********************************************************************!*\
  !*** ./assets/js/plugins/blueimp-gallery/js/blueimp-gallery-video.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * blueimp Gallery Video Factory JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define */

;
(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./blueimp-helper */ "./assets/js/plugins/blueimp-gallery/js/blueimp-helper.js"), __webpack_require__(/*! ./blueimp-gallery */ "./assets/js/plugins/blueimp-gallery/js/blueimp-gallery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($, Gallery) {
  'use strict';

  $.extend(Gallery.prototype.options, {
    // The class for video content elements:
    videoContentClass: 'video-content',
    // The class for video when it is loading:
    videoLoadingClass: 'video-loading',
    // The class for video when it is playing:
    videoPlayingClass: 'video-playing',
    // The list object property (or data attribute) for the video poster URL:
    videoPosterProperty: 'poster',
    // The list object property (or data attribute) for the video sources array:
    videoSourcesProperty: 'sources'
  });
  var _handleSlide = Gallery.prototype.handleSlide;
  $.extend(Gallery.prototype, {
    handleSlide: function handleSlide(index) {
      _handleSlide.call(this, index);
      if (this.playingVideo) {
        this.playingVideo.pause();
      }
    },
    videoFactory: function videoFactory(obj, callback, videoInterface) {
      var that = this;
      var options = this.options;
      var videoContainerNode = this.elementPrototype.cloneNode(false);
      var videoContainer = $(videoContainerNode);
      var errorArgs = [{
        type: 'error',
        target: videoContainerNode
      }];
      var video = videoInterface || document.createElement('video');
      var url = this.getItemProperty(obj, options.urlProperty);
      var type = this.getItemProperty(obj, options.typeProperty);
      var title = this.getItemProperty(obj, options.titleProperty);
      var altText = this.getItemProperty(obj, this.options.altTextProperty) || title;
      var posterUrl = this.getItemProperty(obj, options.videoPosterProperty);
      var posterImage;
      var sources = this.getItemProperty(obj, options.videoSourcesProperty);
      var source;
      var playMediaControl;
      var isLoading;
      var hasControls;
      videoContainer.addClass(options.videoContentClass);
      if (title) {
        videoContainerNode.title = title;
      }
      if (video.canPlayType) {
        if (url && type && video.canPlayType(type)) {
          video.src = url;
        } else if (sources) {
          while (sources.length) {
            source = sources.shift();
            url = this.getItemProperty(source, options.urlProperty);
            type = this.getItemProperty(source, options.typeProperty);
            if (url && type && video.canPlayType(type)) {
              video.src = url;
              break;
            }
          }
        }
      }
      if (posterUrl) {
        video.poster = posterUrl;
        posterImage = this.imagePrototype.cloneNode(false);
        $(posterImage).addClass(options.toggleClass);
        posterImage.src = posterUrl;
        posterImage.draggable = false;
        posterImage.alt = altText;
        videoContainerNode.appendChild(posterImage);
      }
      playMediaControl = document.createElement('a');
      playMediaControl.setAttribute('target', '_blank');
      if (!videoInterface) {
        playMediaControl.setAttribute('download', title);
      }
      playMediaControl.href = url;
      if (video.src) {
        video.controls = true;
        (videoInterface || $(video)).on('error', function () {
          that.setTimeout(callback, errorArgs);
        }).on('pause', function () {
          if (video.seeking) return;
          isLoading = false;
          videoContainer.removeClass(that.options.videoLoadingClass).removeClass(that.options.videoPlayingClass);
          if (hasControls) {
            that.container.addClass(that.options.controlsClass);
          }
          delete that.playingVideo;
          if (that.interval) {
            that.play();
          }
        }).on('playing', function () {
          isLoading = false;
          videoContainer.removeClass(that.options.videoLoadingClass).addClass(that.options.videoPlayingClass);
          if (that.container.hasClass(that.options.controlsClass)) {
            hasControls = true;
            that.container.removeClass(that.options.controlsClass);
          } else {
            hasControls = false;
          }
        }).on('play', function () {
          window.clearTimeout(that.timeout);
          isLoading = true;
          videoContainer.addClass(that.options.videoLoadingClass);
          that.playingVideo = video;
        });
        $(playMediaControl).on('click', function (event) {
          that.preventDefault(event);
          if (isLoading) {
            video.pause();
          } else {
            video.play();
          }
        });
        videoContainerNode.appendChild(videoInterface && videoInterface.element || video);
      }
      videoContainerNode.appendChild(playMediaControl);
      this.setTimeout(callback, [{
        type: 'load',
        target: videoContainerNode
      }]);
      return videoContainerNode;
    }
  });
  return Gallery;
});

/***/ }),

/***/ "./assets/js/plugins/blueimp-gallery/js/blueimp-gallery.js":
/*!*****************************************************************!*\
  !*** ./assets/js/plugins/blueimp-gallery/js/blueimp-gallery.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/*
 * blueimp Gallery JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Swipe implementation based on
 * https://github.com/bradbirdsall/Swipe
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, DocumentTouch */

/* eslint-disable no-param-reassign */

;
(function (factory) {
  'use strict';

  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./blueimp-helper */ "./assets/js/plugins/blueimp-gallery/js/blueimp-helper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  'use strict';

  /**
   * Gallery constructor
   *
   * @class
   * @param {Array|NodeList} list Gallery content
   * @param {object} [options] Gallery options
   * @returns {object} Gallery object
   */
  function Gallery(list, options) {
    if (document.body.style.maxHeight === undefined) {
      // document.body.style.maxHeight is undefined on IE6 and lower
      return null;
    }
    if (!this || this.options !== Gallery.prototype.options) {
      // Called as function instead of as constructor,
      // so we simply return a new instance:
      return new Gallery(list, options);
    }
    if (!list || !list.length) {
      this.console.log('blueimp Gallery: No or empty list provided as first argument.', list);
      return;
    }
    this.list = list;
    this.num = list.length;
    this.initOptions(options);
    this.initialize();
  }
  $.extend(Gallery.prototype, {
    options: {
      // The Id, element or querySelector of the gallery widget:
      container: '#blueimp-gallery',
      // The tag name, Id, element or querySelector of the slides container:
      slidesContainer: 'div',
      // The tag name, Id, element or querySelector of the title element:
      titleElement: 'h3',
      // The class to add when the gallery is visible:
      displayClass: 'blueimp-gallery-display',
      // The class to add when the gallery controls are visible:
      controlsClass: 'blueimp-gallery-controls',
      // The class to add when the gallery only displays one element:
      singleClass: 'blueimp-gallery-single',
      // The class to add when the left edge has been reached:
      leftEdgeClass: 'blueimp-gallery-left',
      // The class to add when the right edge has been reached:
      rightEdgeClass: 'blueimp-gallery-right',
      // The class to add when the automatic slideshow is active:
      playingClass: 'blueimp-gallery-playing',
      // The class for all slides:
      slideClass: 'slide',
      // The slide class for loading elements:
      slideLoadingClass: 'slide-loading',
      // The slide class for elements that failed to load:
      slideErrorClass: 'slide-error',
      // The class for the content element loaded into each slide:
      slideContentClass: 'slide-content',
      // The class for the "toggle" control:
      toggleClass: 'toggle',
      // The class for the "prev" control:
      prevClass: 'prev',
      // The class for the "next" control:
      nextClass: 'next',
      // The class for the "close" control:
      closeClass: 'close',
      // The class for the "play-pause" toggle control:
      playPauseClass: 'play-pause',
      // The list object property (or data attribute) with the object type:
      typeProperty: 'type',
      // The list object property (or data attribute) with the object title:
      titleProperty: 'title',
      // The list object property (or data attribute) with the object alt text:
      altTextProperty: 'alt',
      // The list object property (or data attribute) with the object URL:
      urlProperty: 'href',
      // The list object property (or data attribute) with the object srcset URL(s):
      srcsetProperty: 'urlset',
      // The gallery listens for transitionend events before triggering the
      // opened and closed events, unless the following option is set to false:
      displayTransition: true,
      // Defines if the gallery slides are cleared from the gallery modal,
      // or reused for the next gallery initialization:
      clearSlides: true,
      // Defines if images should be stretched to fill the available space,
      // while maintaining their aspect ratio (will only be enabled for browsers
      // supporting background-size="contain", which excludes IE < 9).
      // Set to "cover", to make images cover all available space (requires
      // support for background-size="cover", which excludes IE < 9):
      stretchImages: false,
      // Toggle the controls on pressing the Return key:
      toggleControlsOnReturn: true,
      // Toggle the controls on slide click:
      toggleControlsOnSlideClick: true,
      // Toggle the automatic slideshow interval on pressing the Space key:
      toggleSlideshowOnSpace: true,
      // Navigate the gallery by pressing left and right on the keyboard:
      enableKeyboardNavigation: true,
      // Close the gallery on pressing the Esc key:
      closeOnEscape: true,
      // Close the gallery when clicking on an empty slide area:
      closeOnSlideClick: true,
      // Close the gallery by swiping up or down:
      closeOnSwipeUpOrDown: true,
      // Emulate touch events on mouse-pointer devices such as desktop browsers:
      emulateTouchEvents: true,
      // Stop touch events from bubbling up to ancestor elements of the Gallery:
      stopTouchEventsPropagation: false,
      // Hide the page scrollbars:
      hidePageScrollbars: true,
      // Stops any touches on the container from scrolling the page:
      disableScroll: true,
      // Carousel mode (shortcut for carousel specific options):
      carousel: false,
      // Allow continuous navigation, moving from last to first
      // and from first to last slide:
      continuous: true,
      // Remove elements outside of the preload range from the DOM:
      unloadElements: true,
      // Start with the automatic slideshow:
      startSlideshow: false,
      // Delay in milliseconds between slides for the automatic slideshow:
      slideshowInterval: 5000,
      // The direction the slides are moving: ltr=LeftToRight or rtl=RightToLeft
      slideshowDirection: 'ltr',
      // The starting index as integer.
      // Can also be an object of the given list,
      // or an equal object with the same url property:
      index: 0,
      // The number of elements to load around the current index:
      preloadRange: 2,
      // The transition speed between slide changes in milliseconds:
      transitionSpeed: 400,
      // The transition speed for automatic slide changes, set to an integer
      // greater 0 to override the default transition speed:
      slideshowTransitionSpeed: undefined,
      // The event object for which the default action will be canceled
      // on Gallery initialization (e.g. the click event to open the Gallery):
      event: undefined,
      // Callback function executed when the Gallery is initialized.
      // Is called with the gallery instance as "this" object:
      onopen: undefined,
      // Callback function executed when the Gallery has been initialized
      // and the initialization transition has been completed.
      // Is called with the gallery instance as "this" object:
      onopened: undefined,
      // Callback function executed on slide change.
      // Is called with the gallery instance as "this" object and the
      // current index and slide as arguments:
      onslide: undefined,
      // Callback function executed after the slide change transition.
      // Is called with the gallery instance as "this" object and the
      // current index and slide as arguments:
      onslideend: undefined,
      // Callback function executed on slide content load.
      // Is called with the gallery instance as "this" object and the
      // slide index and slide element as arguments:
      onslidecomplete: undefined,
      // Callback function executed when the Gallery is about to be closed.
      // Is called with the gallery instance as "this" object:
      onclose: undefined,
      // Callback function executed when the Gallery has been closed
      // and the closing transition has been completed.
      // Is called with the gallery instance as "this" object:
      onclosed: undefined
    },
    carouselOptions: {
      hidePageScrollbars: false,
      toggleControlsOnReturn: false,
      toggleSlideshowOnSpace: false,
      enableKeyboardNavigation: false,
      closeOnEscape: false,
      closeOnSlideClick: false,
      closeOnSwipeUpOrDown: false,
      disableScroll: false,
      startSlideshow: true
    },
    console: window.console && typeof window.console.log === 'function' ? window.console : {
      log: function log() {}
    },
    // Detect touch, transition, transform and background-size support:
    support: function (element) {
      var support = {
        touch: window.ontouchstart !== undefined || window.DocumentTouch && document instanceof DocumentTouch
      };
      var transitions = {
        webkitTransition: {
          end: 'webkitTransitionEnd',
          prefix: '-webkit-'
        },
        MozTransition: {
          end: 'transitionend',
          prefix: '-moz-'
        },
        OTransition: {
          end: 'otransitionend',
          prefix: '-o-'
        },
        transition: {
          end: 'transitionend',
          prefix: ''
        }
      };
      var prop;
      for (prop in transitions) {
        if (Object.prototype.hasOwnProperty.call(transitions, prop) && element.style[prop] !== undefined) {
          support.transition = transitions[prop];
          support.transition.name = prop;
          break;
        }
      }
      /**
       * Tests browser support
       */
      function elementTests() {
        var transition = support.transition;
        var prop;
        var translateZ;
        document.body.appendChild(element);
        if (transition) {
          prop = transition.name.slice(0, -9) + 'ransform';
          if (element.style[prop] !== undefined) {
            element.style[prop] = 'translateZ(0)';
            translateZ = window.getComputedStyle(element).getPropertyValue(transition.prefix + 'transform');
            support.transform = {
              prefix: transition.prefix,
              name: prop,
              translate: true,
              translateZ: !!translateZ && translateZ !== 'none'
            };
          }
        }
        if (element.style.backgroundSize !== undefined) {
          support.backgroundSize = {};
          element.style.backgroundSize = 'contain';
          support.backgroundSize.contain = window.getComputedStyle(element).getPropertyValue('background-size') === 'contain';
          element.style.backgroundSize = 'cover';
          support.backgroundSize.cover = window.getComputedStyle(element).getPropertyValue('background-size') === 'cover';
        }
        document.body.removeChild(element);
      }
      if (document.body) {
        elementTests();
      } else {
        $(document).on('DOMContentLoaded', elementTests);
      }
      return support;
      // Test element, has to be standard HTML and must not be hidden
      // for the CSS3 tests using window.getComputedStyle to be applicable:
    }(document.createElement('div')),
    requestAnimationFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame,
    cancelAnimationFrame: window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame,
    initialize: function initialize() {
      this.initStartIndex();
      if (this.initWidget() === false) {
        return false;
      }
      this.initEventListeners();
      // Load the slide at the given index:
      this.onslide(this.index);
      // Manually trigger the slideend event for the initial slide:
      this.ontransitionend();
      // Start the automatic slideshow if applicable:
      if (this.options.startSlideshow) {
        this.play();
      }
    },
    slide: function slide(to, speed) {
      window.clearTimeout(this.timeout);
      var index = this.index;
      var direction;
      var naturalDirection;
      var diff;
      if (index === to || this.num === 1) {
        return;
      }
      if (!speed) {
        speed = this.options.transitionSpeed;
      }
      if (this.support.transform) {
        if (!this.options.continuous) {
          to = this.circle(to);
        }
        // 1: backward, -1: forward:
        direction = Math.abs(index - to) / (index - to);
        // Get the actual position of the slide:
        if (this.options.continuous) {
          naturalDirection = direction;
          direction = -this.positions[this.circle(to)] / this.slideWidth;
          // If going forward but to < index, use to = slides.length + to
          // If going backward but to > index, use to = -slides.length + to
          if (direction !== naturalDirection) {
            to = -direction * this.num + to;
          }
        }
        diff = Math.abs(index - to) - 1;
        // Move all the slides between index and to in the right direction:
        while (diff) {
          diff -= 1;
          this.move(this.circle((to > index ? to : index) - diff - 1), this.slideWidth * direction, 0);
        }
        to = this.circle(to);
        this.move(index, this.slideWidth * direction, speed);
        this.move(to, 0, speed);
        if (this.options.continuous) {
          this.move(this.circle(to - direction), -(this.slideWidth * direction), 0);
        }
      } else {
        to = this.circle(to);
        this.animate(index * -this.slideWidth, to * -this.slideWidth, speed);
      }
      this.onslide(to);
    },
    getIndex: function getIndex() {
      return this.index;
    },
    getNumber: function getNumber() {
      return this.num;
    },
    prev: function prev() {
      if (this.options.continuous || this.index) {
        this.slide(this.index - 1);
      }
    },
    next: function next() {
      if (this.options.continuous || this.index < this.num - 1) {
        this.slide(this.index + 1);
      }
    },
    play: function play(time) {
      var that = this;
      var nextIndex = this.index + (this.options.slideshowDirection === 'rtl' ? -1 : 1);
      window.clearTimeout(this.timeout);
      this.interval = time || this.options.slideshowInterval;
      if (this.elements[this.index] > 1) {
        this.timeout = this.setTimeout(!this.requestAnimationFrame && this.slide || function (to, speed) {
          that.animationFrameId = that.requestAnimationFrame.call(window, function () {
            that.slide(to, speed);
          });
        }, [nextIndex, this.options.slideshowTransitionSpeed], this.interval);
      }
      this.container.addClass(this.options.playingClass);
    },
    pause: function pause() {
      window.clearTimeout(this.timeout);
      this.interval = null;
      if (this.cancelAnimationFrame) {
        this.cancelAnimationFrame.call(window, this.animationFrameId);
        this.animationFrameId = null;
      }
      this.container.removeClass(this.options.playingClass);
    },
    add: function add(list) {
      var i;
      if (!list.concat) {
        // Make a real array out of the list to add:
        list = Array.prototype.slice.call(list);
      }
      if (!this.list.concat) {
        // Make a real array out of the Gallery list:
        this.list = Array.prototype.slice.call(this.list);
      }
      this.list = this.list.concat(list);
      this.num = this.list.length;
      if (this.num > 2 && this.options.continuous === null) {
        this.options.continuous = true;
        this.container.removeClass(this.options.leftEdgeClass);
      }
      this.container.removeClass(this.options.rightEdgeClass).removeClass(this.options.singleClass);
      for (i = this.num - list.length; i < this.num; i += 1) {
        this.addSlide(i);
        this.positionSlide(i);
      }
      this.positions.length = this.num;
      this.initSlides(true);
    },
    resetSlides: function resetSlides() {
      this.slidesContainer.empty();
      this.unloadAllSlides();
      this.slides = [];
    },
    handleClose: function handleClose() {
      var options = this.options;
      this.destroyEventListeners();
      // Cancel the slideshow:
      this.pause();
      this.container[0].style.display = 'none';
      this.container.removeClass(options.displayClass).removeClass(options.singleClass).removeClass(options.leftEdgeClass).removeClass(options.rightEdgeClass);
      if (options.hidePageScrollbars) {
        document.body.style.overflow = this.bodyOverflowStyle;
      }
      if (this.options.clearSlides) {
        this.resetSlides();
      }
      if (this.options.onclosed) {
        this.options.onclosed.call(this);
      }
    },
    close: function close() {
      var that = this;
      /**
       * Close handler
       *
       * @param {event} event Close event
       */
      function closeHandler(event) {
        if (event.target === that.container[0]) {
          that.container.off(that.support.transition.end, closeHandler);
          that.handleClose();
        }
      }
      if (this.options.onclose) {
        this.options.onclose.call(this);
      }
      if (this.support.transition && this.options.displayTransition) {
        this.container.on(this.support.transition.end, closeHandler);
        this.container.removeClass(this.options.displayClass);
      } else {
        this.handleClose();
      }
    },
    circle: function circle(index) {
      // Always return a number inside of the slides index range:
      return (this.num + index % this.num) % this.num;
    },
    move: function move(index, dist, speed) {
      this.translateX(index, dist, speed);
      this.positions[index] = dist;
    },
    translate: function translate(index, x, y, speed) {
      if (!this.slides[index]) return;
      var style = this.slides[index].style;
      var transition = this.support.transition;
      var transform = this.support.transform;
      style[transition.name + 'Duration'] = speed + 'ms';
      style[transform.name] = 'translate(' + x + 'px, ' + y + 'px)' + (transform.translateZ ? ' translateZ(0)' : '');
    },
    translateX: function translateX(index, x, speed) {
      this.translate(index, x, 0, speed);
    },
    translateY: function translateY(index, y, speed) {
      this.translate(index, 0, y, speed);
    },
    animate: function animate(from, to, speed) {
      if (!speed) {
        this.slidesContainer[0].style.left = to + 'px';
        return;
      }
      var that = this;
      var start = new Date().getTime();
      var timer = window.setInterval(function () {
        var timeElap = new Date().getTime() - start;
        if (timeElap > speed) {
          that.slidesContainer[0].style.left = to + 'px';
          that.ontransitionend();
          window.clearInterval(timer);
          return;
        }
        that.slidesContainer[0].style.left = (to - from) * (Math.floor(timeElap / speed * 100) / 100) + from + 'px';
      }, 4);
    },
    preventDefault: function preventDefault(event) {
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    },
    stopPropagation: function stopPropagation(event) {
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    },
    onresize: function onresize() {
      this.initSlides(true);
    },
    onmousedown: function onmousedown(event) {
      // Trigger on clicks of the left mouse button only
      // and exclude video & audio elements:
      if (event.which && event.which === 1 && event.target.nodeName !== 'VIDEO' && event.target.nodeName !== 'AUDIO') {
        // Preventing the default mousedown action is required
        // to make touch emulation work with Firefox:
        event.preventDefault();
        (event.originalEvent || event).touches = [{
          pageX: event.pageX,
          pageY: event.pageY
        }];
        this.ontouchstart(event);
      }
    },
    onmousemove: function onmousemove(event) {
      if (this.touchStart) {
        ;
        (event.originalEvent || event).touches = [{
          pageX: event.pageX,
          pageY: event.pageY
        }];
        this.ontouchmove(event);
      }
    },
    onmouseup: function onmouseup(event) {
      if (this.touchStart) {
        this.ontouchend(event);
        delete this.touchStart;
      }
    },
    onmouseout: function onmouseout(event) {
      if (this.touchStart) {
        var target = event.target;
        var related = event.relatedTarget;
        if (!related || related !== target && !$.contains(target, related)) {
          this.onmouseup(event);
        }
      }
    },
    ontouchstart: function ontouchstart(event) {
      if (this.options.stopTouchEventsPropagation) {
        this.stopPropagation(event);
      }
      // jQuery doesn't copy touch event properties by default,
      // so we have to access the originalEvent object:
      var touches = (event.originalEvent || event).touches[0];
      this.touchStart = {
        // Remember the initial touch coordinates:
        x: touches.pageX,
        y: touches.pageY,
        // Store the time to determine touch duration:
        time: Date.now()
      };
      // Helper variable to detect scroll movement:
      this.isScrolling = undefined;
      // Reset delta values:
      this.touchDelta = {};
    },
    ontouchmove: function ontouchmove(event) {
      if (this.options.stopTouchEventsPropagation) {
        this.stopPropagation(event);
      }
      // jQuery doesn't copy touch event properties by default,
      // so we have to access the originalEvent object:
      var touches = (event.originalEvent || event).touches[0];
      var scale = (event.originalEvent || event).scale;
      var index = this.index;
      var touchDeltaX;
      var indices;
      // Ensure this is a one touch swipe and not, e.g. a pinch:
      if (touches.length > 1 || scale && scale !== 1) {
        return;
      }
      if (this.options.disableScroll) {
        event.preventDefault();
      }
      // Measure change in x and y coordinates:
      this.touchDelta = {
        x: touches.pageX - this.touchStart.x,
        y: touches.pageY - this.touchStart.y
      };
      touchDeltaX = this.touchDelta.x;
      // Detect if this is a vertical scroll movement (run only once per touch):
      if (this.isScrolling === undefined) {
        this.isScrolling = this.isScrolling || Math.abs(touchDeltaX) < Math.abs(this.touchDelta.y);
      }
      if (!this.isScrolling) {
        // Always prevent horizontal scroll:
        event.preventDefault();
        // Stop the slideshow:
        window.clearTimeout(this.timeout);
        if (this.options.continuous) {
          indices = [this.circle(index + 1), index, this.circle(index - 1)];
        } else {
          // Increase resistance if first slide and sliding left
          // or last slide and sliding right:
          this.touchDelta.x = touchDeltaX = touchDeltaX / (!index && touchDeltaX > 0 || index === this.num - 1 && touchDeltaX < 0 ? Math.abs(touchDeltaX) / this.slideWidth + 1 : 1);
          indices = [index];
          if (index) {
            indices.push(index - 1);
          }
          if (index < this.num - 1) {
            indices.unshift(index + 1);
          }
        }
        while (indices.length) {
          index = indices.pop();
          this.translateX(index, touchDeltaX + this.positions[index], 0);
        }
      } else {
        this.translateY(index, this.touchDelta.y + this.positions[index], 0);
      }
    },
    ontouchend: function ontouchend(event) {
      if (this.options.stopTouchEventsPropagation) {
        this.stopPropagation(event);
      }
      var index = this.index;
      var speed = this.options.transitionSpeed;
      var slideWidth = this.slideWidth;
      var isShortDuration = Number(Date.now() - this.touchStart.time) < 250;
      // Determine if slide attempt triggers next/prev slide:
      var isValidSlide = isShortDuration && Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.x) > slideWidth / 2;
      // Determine if slide attempt is past start or end:
      var isPastBounds = !index && this.touchDelta.x > 0 || index === this.num - 1 && this.touchDelta.x < 0;
      var isValidClose = !isValidSlide && this.options.closeOnSwipeUpOrDown && (isShortDuration && Math.abs(this.touchDelta.y) > 20 || Math.abs(this.touchDelta.y) > this.slideHeight / 2);
      var direction;
      var indexForward;
      var indexBackward;
      var distanceForward;
      var distanceBackward;
      if (this.options.continuous) {
        isPastBounds = false;
      }
      // Determine direction of swipe (true: right, false: left):
      direction = this.touchDelta.x < 0 ? -1 : 1;
      if (!this.isScrolling) {
        if (isValidSlide && !isPastBounds) {
          indexForward = index + direction;
          indexBackward = index - direction;
          distanceForward = slideWidth * direction;
          distanceBackward = -slideWidth * direction;
          if (this.options.continuous) {
            this.move(this.circle(indexForward), distanceForward, 0);
            this.move(this.circle(index - 2 * direction), distanceBackward, 0);
          } else if (indexForward >= 0 && indexForward < this.num) {
            this.move(indexForward, distanceForward, 0);
          }
          this.move(index, this.positions[index] + distanceForward, speed);
          this.move(this.circle(indexBackward), this.positions[this.circle(indexBackward)] + distanceForward, speed);
          index = this.circle(indexBackward);
          this.onslide(index);
        } else {
          // Move back into position
          if (this.options.continuous) {
            this.move(this.circle(index - 1), -slideWidth, speed);
            this.move(index, 0, speed);
            this.move(this.circle(index + 1), slideWidth, speed);
          } else {
            if (index) {
              this.move(index - 1, -slideWidth, speed);
            }
            this.move(index, 0, speed);
            if (index < this.num - 1) {
              this.move(index + 1, slideWidth, speed);
            }
          }
        }
      } else {
        if (isValidClose) {
          this.close();
        } else {
          // Move back into position
          this.translateY(index, 0, speed);
        }
      }
    },
    ontouchcancel: function ontouchcancel(event) {
      if (this.touchStart) {
        this.ontouchend(event);
        delete this.touchStart;
      }
    },
    ontransitionend: function ontransitionend(event) {
      var slide = this.slides[this.index];
      if (!event || slide === event.target) {
        if (this.interval) {
          this.play();
        }
        this.setTimeout(this.options.onslideend, [this.index, slide]);
      }
    },
    oncomplete: function oncomplete(event) {
      var target = event.target || event.srcElement;
      var parent = target && target.parentNode;
      var index;
      if (!target || !parent) {
        return;
      }
      index = this.getNodeIndex(parent);
      $(parent).removeClass(this.options.slideLoadingClass);
      if (event.type === 'error') {
        $(parent).addClass(this.options.slideErrorClass);
        this.elements[index] = 3; // Fail
      } else {
        this.elements[index] = 2; // Done
      }
      // Fix for IE7's lack of support for percentage max-height:
      if (target.clientHeight > this.container[0].clientHeight) {
        target.style.maxHeight = this.container[0].clientHeight;
      }
      if (this.interval && this.slides[this.index] === parent) {
        this.play();
      }
      this.setTimeout(this.options.onslidecomplete, [index, parent]);
    },
    onload: function onload(event) {
      this.oncomplete(event);
    },
    onerror: function onerror(event) {
      this.oncomplete(event);
    },
    onkeydown: function onkeydown(event) {
      switch (event.which || event.keyCode) {
        case 13:
          // Return
          if (this.options.toggleControlsOnReturn) {
            this.preventDefault(event);
            this.toggleControls();
          }
          break;
        case 27:
          // Esc
          if (this.options.closeOnEscape) {
            this.close();
            // prevent Esc from closing other things
            event.stopImmediatePropagation();
          }
          break;
        case 32:
          // Space
          if (this.options.toggleSlideshowOnSpace) {
            this.preventDefault(event);
            this.toggleSlideshow();
          }
          break;
        case 37:
          // Left
          if (this.options.enableKeyboardNavigation) {
            this.preventDefault(event);
            this.prev();
          }
          break;
        case 39:
          // Right
          if (this.options.enableKeyboardNavigation) {
            this.preventDefault(event);
            this.next();
          }
          break;
      }
    },
    handleClick: function handleClick(event) {
      var options = this.options;
      var target = event.target || event.srcElement;
      var parent = target.parentNode;
      /**
       * Checks if the target from the close has the given class
       *
       * @param {string} className Class name
       * @returns {boolean} Returns true if the target has the class name
       */
      function isTarget(className) {
        return $(target).hasClass(className) || $(parent).hasClass(className);
      }
      if (isTarget(options.toggleClass)) {
        // Click on "toggle" control
        this.preventDefault(event);
        this.toggleControls();
      } else if (isTarget(options.prevClass)) {
        // Click on "prev" control
        this.preventDefault(event);
        this.prev();
      } else if (isTarget(options.nextClass)) {
        // Click on "next" control
        this.preventDefault(event);
        this.next();
      } else if (isTarget(options.closeClass)) {
        // Click on "close" control
        this.preventDefault(event);
        this.close();
      } else if (isTarget(options.playPauseClass)) {
        // Click on "play-pause" control
        this.preventDefault(event);
        this.toggleSlideshow();
      } else if (parent === this.slidesContainer[0]) {
        // Click on slide background
        if (options.closeOnSlideClick) {
          this.preventDefault(event);
          this.close();
        } else if (options.toggleControlsOnSlideClick) {
          this.preventDefault(event);
          this.toggleControls();
        }
      } else if (parent.parentNode && parent.parentNode === this.slidesContainer[0]) {
        // Click on displayed element
        if (options.toggleControlsOnSlideClick) {
          this.preventDefault(event);
          this.toggleControls();
        }
      }
    },
    onclick: function onclick(event) {
      if (this.options.emulateTouchEvents && this.touchDelta && (Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.y) > 20)) {
        delete this.touchDelta;
        return;
      }
      return this.handleClick(event);
    },
    updateEdgeClasses: function updateEdgeClasses(index) {
      if (!index) {
        this.container.addClass(this.options.leftEdgeClass);
      } else {
        this.container.removeClass(this.options.leftEdgeClass);
      }
      if (index === this.num - 1) {
        this.container.addClass(this.options.rightEdgeClass);
      } else {
        this.container.removeClass(this.options.rightEdgeClass);
      }
    },
    handleSlide: function handleSlide(index) {
      if (!this.options.continuous) {
        this.updateEdgeClasses(index);
      }
      this.loadElements(index);
      if (this.options.unloadElements) {
        this.unloadElements(index);
      }
      this.setTitle(index);
    },
    onslide: function onslide(index) {
      this.index = index;
      this.handleSlide(index);
      this.setTimeout(this.options.onslide, [index, this.slides[index]]);
    },
    setTitle: function setTitle(index) {
      var firstChild = this.slides[index].firstChild;
      var text = firstChild.title || firstChild.alt;
      var titleElement = this.titleElement;
      if (titleElement.length) {
        this.titleElement.empty();
        if (text) {
          titleElement[0].appendChild(document.createTextNode(text));
        }
      }
    },
    setTimeout: function setTimeout(func, args, wait) {
      var that = this;
      return func && window.setTimeout(function () {
        func.apply(that, args || []);
      }, wait || 0);
    },
    imageFactory: function imageFactory(obj, callback) {
      var that = this;
      var img = this.imagePrototype.cloneNode(false);
      var url = obj;
      var backgroundSize = this.options.stretchImages;
      var called;
      var element;
      var title;
      var altText;
      /**
       * Wraps the callback function for the load/error event
       *
       * @param {event} event load/error event
       * @returns {number} timeout ID
       */
      function callbackWrapper(event) {
        if (!called) {
          event = {
            type: event.type,
            target: element
          };
          if (!element.parentNode) {
            // Fix for IE7 firing the load event for
            // cached images before the element could
            // be added to the DOM:
            return that.setTimeout(callbackWrapper, [event]);
          }
          called = true;
          $(img).off('load error', callbackWrapper);
          if (backgroundSize) {
            if (event.type === 'load') {
              element.style.background = 'url("' + url + '") center no-repeat';
              element.style.backgroundSize = backgroundSize;
            }
          }
          callback(event);
        }
      }
      if (typeof url !== 'string') {
        url = this.getItemProperty(obj, this.options.urlProperty);
        title = this.getItemProperty(obj, this.options.titleProperty);
        altText = this.getItemProperty(obj, this.options.altTextProperty) || title;
      }
      if (backgroundSize === true) {
        backgroundSize = 'contain';
      }
      backgroundSize = this.support.backgroundSize && this.support.backgroundSize[backgroundSize] && backgroundSize;
      if (backgroundSize) {
        element = this.elementPrototype.cloneNode(false);
      } else {
        element = img;
        img.draggable = false;
      }
      if (title) {
        element.title = title;
      }
      if (altText) {
        element.alt = altText;
      }
      $(img).on('load error', callbackWrapper);
      img.src = url;
      return element;
    },
    createElement: function createElement(obj, callback) {
      var type = obj && this.getItemProperty(obj, this.options.typeProperty);
      var factory = type && this[type.split('/')[0] + 'Factory'] || this.imageFactory;
      var element = obj && factory.call(this, obj, callback);
      var srcset = this.getItemProperty(obj, this.options.srcsetProperty);
      if (!element) {
        element = this.elementPrototype.cloneNode(false);
        this.setTimeout(callback, [{
          type: 'error',
          target: element
        }]);
      }
      if (srcset) {
        element.setAttribute('srcset', srcset);
      }
      $(element).addClass(this.options.slideContentClass);
      return element;
    },
    loadElement: function loadElement(index) {
      if (!this.elements[index]) {
        if (this.slides[index].firstChild) {
          this.elements[index] = $(this.slides[index]).hasClass(this.options.slideErrorClass) ? 3 : 2;
        } else {
          this.elements[index] = 1; // Loading
          $(this.slides[index]).addClass(this.options.slideLoadingClass);
          this.slides[index].appendChild(this.createElement(this.list[index], this.proxyListener));
        }
      }
    },
    loadElements: function loadElements(index) {
      var limit = Math.min(this.num, this.options.preloadRange * 2 + 1);
      var j = index;
      var i;
      for (i = 0; i < limit; i += 1) {
        // First load the current slide element (0),
        // then the next one (+1),
        // then the previous one (-2),
        // then the next after next (+2), etc.:
        j += i * (i % 2 === 0 ? -1 : 1);
        // Connect the ends of the list to load slide elements for
        // continuous navigation:
        j = this.circle(j);
        this.loadElement(j);
      }
    },
    unloadElements: function unloadElements(index) {
      var i, diff;
      for (i in this.elements) {
        if (Object.prototype.hasOwnProperty.call(this.elements, i)) {
          diff = Math.abs(index - i);
          if (diff > this.options.preloadRange && diff + this.options.preloadRange < this.num) {
            this.unloadSlide(i);
            delete this.elements[i];
          }
        }
      }
    },
    addSlide: function addSlide(index) {
      var slide = this.slidePrototype.cloneNode(false);
      slide.setAttribute('data-index', index);
      this.slidesContainer[0].appendChild(slide);
      this.slides.push(slide);
    },
    positionSlide: function positionSlide(index) {
      var slide = this.slides[index];
      slide.style.width = this.slideWidth + 'px';
      if (this.support.transform) {
        slide.style.left = index * -this.slideWidth + 'px';
        this.move(index, this.index > index ? -this.slideWidth : this.index < index ? this.slideWidth : 0, 0);
      }
    },
    initSlides: function initSlides(reload) {
      var clearSlides, i;
      if (!reload) {
        this.positions = [];
        this.positions.length = this.num;
        this.elements = {};
        this.imagePrototype = document.createElement('img');
        this.elementPrototype = document.createElement('div');
        this.slidePrototype = document.createElement('div');
        $(this.slidePrototype).addClass(this.options.slideClass);
        this.slides = this.slidesContainer[0].children;
        clearSlides = this.options.clearSlides || this.slides.length !== this.num;
      }
      this.slideWidth = this.container[0].clientWidth;
      this.slideHeight = this.container[0].clientHeight;
      this.slidesContainer[0].style.width = this.num * this.slideWidth + 'px';
      if (clearSlides) {
        this.resetSlides();
      }
      for (i = 0; i < this.num; i += 1) {
        if (clearSlides) {
          this.addSlide(i);
        }
        this.positionSlide(i);
      }
      // Reposition the slides before and after the given index:
      if (this.options.continuous && this.support.transform) {
        this.move(this.circle(this.index - 1), -this.slideWidth, 0);
        this.move(this.circle(this.index + 1), this.slideWidth, 0);
      }
      if (!this.support.transform) {
        this.slidesContainer[0].style.left = this.index * -this.slideWidth + 'px';
      }
    },
    unloadSlide: function unloadSlide(index) {
      var slide, firstChild;
      slide = this.slides[index];
      firstChild = slide.firstChild;
      if (firstChild !== null) {
        slide.removeChild(firstChild);
      }
    },
    unloadAllSlides: function unloadAllSlides() {
      var i, len;
      for (i = 0, len = this.slides.length; i < len; i++) {
        this.unloadSlide(i);
      }
    },
    toggleControls: function toggleControls() {
      var controlsClass = this.options.controlsClass;
      if (this.container.hasClass(controlsClass)) {
        this.container.removeClass(controlsClass);
      } else {
        this.container.addClass(controlsClass);
      }
    },
    toggleSlideshow: function toggleSlideshow() {
      if (!this.interval) {
        this.play();
      } else {
        this.pause();
      }
    },
    getNodeIndex: function getNodeIndex(element) {
      return parseInt(element.getAttribute('data-index'), 10);
    },
    getNestedProperty: function getNestedProperty(obj, property) {
      property.replace(
      // Matches native JavaScript notation in a String,
      // e.g. '["doubleQuoteProp"].dotProp[2]'
      // eslint-disable-next-line no-useless-escape
      /\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g, function (str, singleQuoteProp, doubleQuoteProp, arrayIndex, dotProp) {
        var prop = dotProp || singleQuoteProp || doubleQuoteProp || arrayIndex && parseInt(arrayIndex, 10);
        if (str && obj) {
          obj = obj[prop];
        }
      });
      return obj;
    },
    getDataProperty: function getDataProperty(obj, property) {
      var key;
      var prop;
      if (obj.dataset) {
        key = property.replace(/-([a-z])/g, function (_, b) {
          return b.toUpperCase();
        });
        prop = obj.dataset[key];
      } else if (obj.getAttribute) {
        prop = obj.getAttribute('data-' + property.replace(/([A-Z])/g, '-$1').toLowerCase());
      }
      if (typeof prop === 'string') {
        // eslint-disable-next-line no-useless-escape
        if (/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(prop)) {
          try {
            return $.parseJSON(prop);
          } catch (ignore) {
            // ignore JSON parsing errors
          }
        }
        return prop;
      }
    },
    getItemProperty: function getItemProperty(obj, property) {
      var prop = this.getDataProperty(obj, property);
      if (prop === undefined) {
        prop = obj[property];
      }
      if (prop === undefined) {
        prop = this.getNestedProperty(obj, property);
      }
      return prop;
    },
    initStartIndex: function initStartIndex() {
      var index = this.options.index;
      var urlProperty = this.options.urlProperty;
      var i;
      // Check if the index is given as a list object:
      if (index && typeof index !== 'number') {
        for (i = 0; i < this.num; i += 1) {
          if (this.list[i] === index || this.getItemProperty(this.list[i], urlProperty) === this.getItemProperty(index, urlProperty)) {
            index = i;
            break;
          }
        }
      }
      // Make sure the index is in the list range:
      this.index = this.circle(parseInt(index, 10) || 0);
    },
    initEventListeners: function initEventListeners() {
      var that = this;
      var slidesContainer = this.slidesContainer;
      /**
       * Proxy listener
       *
       * @param {event} event original event
       */
      function proxyListener(event) {
        var type = that.support.transition && that.support.transition.end === event.type ? 'transitionend' : event.type;
        that['on' + type](event);
      }
      $(window).on('resize', proxyListener);
      $(document.body).on('keydown', proxyListener);
      this.container.on('click', proxyListener);
      if (this.support.touch) {
        slidesContainer.on('touchstart touchmove touchend touchcancel', proxyListener);
      } else if (this.options.emulateTouchEvents && this.support.transition) {
        slidesContainer.on('mousedown mousemove mouseup mouseout', proxyListener);
      }
      if (this.support.transition) {
        slidesContainer.on(this.support.transition.end, proxyListener);
      }
      this.proxyListener = proxyListener;
    },
    destroyEventListeners: function destroyEventListeners() {
      var slidesContainer = this.slidesContainer;
      var proxyListener = this.proxyListener;
      $(window).off('resize', proxyListener);
      $(document.body).off('keydown', proxyListener);
      this.container.off('click', proxyListener);
      if (this.support.touch) {
        slidesContainer.off('touchstart touchmove touchend touchcancel', proxyListener);
      } else if (this.options.emulateTouchEvents && this.support.transition) {
        slidesContainer.off('mousedown mousemove mouseup mouseout', proxyListener);
      }
      if (this.support.transition) {
        slidesContainer.off(this.support.transition.end, proxyListener);
      }
    },
    handleOpen: function handleOpen() {
      if (this.options.onopened) {
        this.options.onopened.call(this);
      }
    },
    initWidget: function initWidget() {
      var that = this;
      /**
       * Open handler
       *
       * @param {event} event Gallery open event
       */
      function openHandler(event) {
        if (event.target === that.container[0]) {
          that.container.off(that.support.transition.end, openHandler);
          that.handleOpen();
        }
      }
      this.container = $(this.options.container);
      if (!this.container.length) {
        this.console.log('blueimp Gallery: Widget container not found.', this.options.container);
        return false;
      }
      this.slidesContainer = this.container.find(this.options.slidesContainer).first();
      if (!this.slidesContainer.length) {
        this.console.log('blueimp Gallery: Slides container not found.', this.options.slidesContainer);
        return false;
      }
      this.titleElement = this.container.find(this.options.titleElement).first();
      if (this.num === 1) {
        this.container.addClass(this.options.singleClass);
      }
      if (this.options.onopen) {
        this.options.onopen.call(this);
      }
      if (this.support.transition && this.options.displayTransition) {
        this.container.on(this.support.transition.end, openHandler);
      } else {
        this.handleOpen();
      }
      if (this.options.hidePageScrollbars) {
        // Hide the page scrollbars:
        this.bodyOverflowStyle = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      }
      this.container[0].style.display = 'block';
      this.initSlides();
      this.container.addClass(this.options.displayClass);
    },
    initOptions: function initOptions(options) {
      // Create a copy of the prototype options:
      this.options = $.extend({}, this.options);
      // Check if carousel mode is enabled:
      if (options && options.carousel || this.options.carousel && (!options || options.carousel !== false)) {
        $.extend(this.options, this.carouselOptions);
      }
      // Override any given options:
      $.extend(this.options, options);
      if (this.num < 3) {
        // 1 or 2 slides cannot be displayed continuous,
        // remember the original option by setting to null instead of false:
        this.options.continuous = this.options.continuous ? null : false;
      }
      if (!this.support.transition) {
        this.options.emulateTouchEvents = false;
      }
      if (this.options.event) {
        this.preventDefault(this.options.event);
      }
    }
  });
  return Gallery;
});

/***/ }),

/***/ "./assets/js/plugins/blueimp-gallery/js/blueimp-helper.js":
/*!****************************************************************!*\
  !*** ./assets/js/plugins/blueimp-gallery/js/blueimp-helper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/*
 * blueimp helper JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define */

/* eslint-disable no-param-reassign */

;
(function () {
  'use strict';

  /**
   * Object.assign polyfill
   *
   * @param {object} obj1 First object
   * @param {object} obj2 Second object
   * @returns {object} Merged object
   */
  function extend(obj1, obj2) {
    var prop;
    for (prop in obj2) {
      if (Object.prototype.hasOwnProperty.call(obj2, prop)) {
        obj1[prop] = obj2[prop];
      }
    }
    return obj1;
  }
  /**
   * Helper constructor
   *
   * @class
   * @param {*} query jQuery type query argument
   */
  function Helper(query) {
    if (!this || this.find !== Helper.prototype.find) {
      // Called as function instead of as constructor,
      // so we simply return a new instance:
      return new Helper(query);
    }
    this.length = 0;
    if (query) {
      if (typeof query === 'string') {
        query = this.find(query);
      }
      if (query.nodeType || query === query.window) {
        // Single HTML element
        this.length = 1;
        this[0] = query;
      } else {
        // HTML element collection
        var i = query.length;
        this.length = i;
        while (i) {
          i -= 1;
          this[i] = query[i];
        }
      }
    }
  }
  Helper.extend = extend;
  Helper.contains = function (container, element) {
    do {
      element = element.parentNode;
      if (element === container) {
        return true;
      }
    } while (element);
    return false;
  };
  Helper.parseJSON = function (string) {
    return window.JSON && JSON.parse(string);
  };
  extend(Helper.prototype, {
    find: function find(query) {
      var container = this[0] || document;
      if (typeof query === 'string') {
        if (container.querySelectorAll) {
          query = container.querySelectorAll(query);
        } else if (query.charAt(0) === '#') {
          query = container.getElementById(query.slice(1));
        } else {
          query = container.getElementsByTagName(query);
        }
      }
      return new Helper(query);
    },
    hasClass: function hasClass(className) {
      if (!this[0]) {
        return false;
      }
      return new RegExp('(^|\\s+)' + className + '(\\s+|$)').test(this[0].className);
    },
    addClass: function addClass(className) {
      var i = this.length;
      var element;
      while (i) {
        i -= 1;
        element = this[i];
        if (!element.className) {
          element.className = className;
          return this;
        }
        if (this.hasClass(className)) {
          return this;
        }
        element.className += ' ' + className;
      }
      return this;
    },
    removeClass: function removeClass(className) {
      var regexp = new RegExp('(^|\\s+)' + className + '(\\s+|$)');
      var i = this.length;
      var element;
      while (i) {
        i -= 1;
        element = this[i];
        element.className = element.className.replace(regexp, ' ');
      }
      return this;
    },
    on: function on(eventName, handler) {
      var eventNames = eventName.split(/\s+/);
      var i;
      var element;
      while (eventNames.length) {
        eventName = eventNames.shift();
        i = this.length;
        while (i) {
          i -= 1;
          element = this[i];
          if (element.addEventListener) {
            element.addEventListener(eventName, handler, false);
          } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, handler);
          }
        }
      }
      return this;
    },
    off: function off(eventName, handler) {
      var eventNames = eventName.split(/\s+/);
      var i;
      var element;
      while (eventNames.length) {
        eventName = eventNames.shift();
        i = this.length;
        while (i) {
          i -= 1;
          element = this[i];
          if (element.removeEventListener) {
            element.removeEventListener(eventName, handler, false);
          } else if (element.detachEvent) {
            element.detachEvent('on' + eventName, handler);
          }
        }
      }
      return this;
    },
    empty: function empty() {
      var i = this.length;
      var element;
      while (i) {
        i -= 1;
        element = this[i];
        while (element.hasChildNodes()) {
          element.removeChild(element.lastChild);
        }
      }
      return this;
    },
    first: function first() {
      return new Helper(this[0]);
    }
  });
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Helper;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),

/***/ "./assets/js/plugins/blueimp-gallery/js/jquery.blueimp-gallery.min.js":
/*!****************************************************************************!*\
  !*** ./assets/js/plugins/blueimp-gallery/js/jquery.blueimp-gallery.min.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
!function (t) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./blueimp-helper */ "./assets/js/plugins/blueimp-gallery/js/blueimp-helper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
}(function (d) {
  "use strict";

  function i(t, e) {
    return void 0 === document.body.style.maxHeight ? null : this && this.options === i.prototype.options ? void (t && t.length ? (this.list = t, this.num = t.length, this.initOptions(e), this.initialize()) : this.console.log("blueimp Gallery: No or empty list provided as first argument.", t)) : new i(t, e);
  }
  return d.extend(i.prototype, {
    options: {
      container: "#blueimp-gallery",
      slidesContainer: "div",
      titleElement: "h3",
      displayClass: "blueimp-gallery-display",
      controlsClass: "blueimp-gallery-controls",
      singleClass: "blueimp-gallery-single",
      leftEdgeClass: "blueimp-gallery-left",
      rightEdgeClass: "blueimp-gallery-right",
      playingClass: "blueimp-gallery-playing",
      slideClass: "slide",
      slideLoadingClass: "slide-loading",
      slideErrorClass: "slide-error",
      slideContentClass: "slide-content",
      toggleClass: "toggle",
      prevClass: "prev",
      nextClass: "next",
      closeClass: "close",
      playPauseClass: "play-pause",
      typeProperty: "type",
      titleProperty: "title",
      altTextProperty: "alt",
      urlProperty: "href",
      srcsetProperty: "urlset",
      displayTransition: !0,
      clearSlides: !0,
      stretchImages: !1,
      toggleControlsOnReturn: !0,
      toggleControlsOnSlideClick: !0,
      toggleSlideshowOnSpace: !0,
      enableKeyboardNavigation: !0,
      closeOnEscape: !0,
      closeOnSlideClick: !0,
      closeOnSwipeUpOrDown: !0,
      emulateTouchEvents: !0,
      stopTouchEventsPropagation: !1,
      hidePageScrollbars: !0,
      disableScroll: !0,
      carousel: !1,
      continuous: !0,
      unloadElements: !0,
      startSlideshow: !1,
      slideshowInterval: 5e3,
      slideshowDirection: "ltr",
      index: 0,
      preloadRange: 2,
      transitionSpeed: 400,
      slideshowTransitionSpeed: void 0,
      event: void 0,
      onopen: void 0,
      onopened: void 0,
      onslide: void 0,
      onslideend: void 0,
      onslidecomplete: void 0,
      onclose: void 0,
      onclosed: void 0
    },
    carouselOptions: {
      hidePageScrollbars: !1,
      toggleControlsOnReturn: !1,
      toggleSlideshowOnSpace: !1,
      enableKeyboardNavigation: !1,
      closeOnEscape: !1,
      closeOnSlideClick: !1,
      closeOnSwipeUpOrDown: !1,
      disableScroll: !1,
      startSlideshow: !0
    },
    console: window.console && "function" == typeof window.console.log ? window.console : {
      log: function log() {}
    },
    support: function (s) {
      var t,
        o = {
          touch: void 0 !== window.ontouchstart || window.DocumentTouch && document instanceof DocumentTouch
        },
        e = {
          webkitTransition: {
            end: "webkitTransitionEnd",
            prefix: "-webkit-"
          },
          MozTransition: {
            end: "transitionend",
            prefix: "-moz-"
          },
          OTransition: {
            end: "otransitionend",
            prefix: "-o-"
          },
          transition: {
            end: "transitionend",
            prefix: ""
          }
        };
      for (t in e) if (Object.prototype.hasOwnProperty.call(e, t) && void 0 !== s.style[t]) {
        o.transition = e[t], o.transition.name = t;
        break;
      }
      function i() {
        var t,
          e,
          i = o.transition;
        document.body.appendChild(s), i && (t = i.name.slice(0, -9) + "ransform", void 0 !== s.style[t] && (s.style[t] = "translateZ(0)", e = window.getComputedStyle(s).getPropertyValue(i.prefix + "transform"), o.transform = {
          prefix: i.prefix,
          name: t,
          translate: !0,
          translateZ: !!e && "none" !== e
        })), void 0 !== s.style.backgroundSize && (o.backgroundSize = {}, s.style.backgroundSize = "contain", o.backgroundSize.contain = "contain" === window.getComputedStyle(s).getPropertyValue("background-size"), s.style.backgroundSize = "cover", o.backgroundSize.cover = "cover" === window.getComputedStyle(s).getPropertyValue("background-size")), document.body.removeChild(s);
      }
      return document.body ? i() : d(document).on("DOMContentLoaded", i), o;
    }(document.createElement("div")),
    requestAnimationFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame,
    cancelAnimationFrame: window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame,
    initialize: function initialize() {
      if (this.initStartIndex(), !1 === this.initWidget()) return !1;
      this.initEventListeners(), this.onslide(this.index), this.ontransitionend(), this.options.startSlideshow && this.play();
    },
    slide: function slide(t, e) {
      window.clearTimeout(this.timeout);
      var i,
        s,
        o,
        n = this.index;
      if (n !== t && 1 !== this.num) {
        if (e = e || this.options.transitionSpeed, this.support.transform) {
          for (this.options.continuous || (t = this.circle(t)), i = Math.abs(n - t) / (n - t), this.options.continuous && (s = i, (i = -this.positions[this.circle(t)] / this.slideWidth) !== s && (t = -i * this.num + t)), o = Math.abs(n - t) - 1; o;) o -= 1, this.move(this.circle((n < t ? t : n) - o - 1), this.slideWidth * i, 0);
          t = this.circle(t), this.move(n, this.slideWidth * i, e), this.move(t, 0, e), this.options.continuous && this.move(this.circle(t - i), -this.slideWidth * i, 0);
        } else t = this.circle(t), this.animate(n * -this.slideWidth, t * -this.slideWidth, e);
        this.onslide(t);
      }
    },
    getIndex: function getIndex() {
      return this.index;
    },
    getNumber: function getNumber() {
      return this.num;
    },
    prev: function prev() {
      (this.options.continuous || this.index) && this.slide(this.index - 1);
    },
    next: function next() {
      (this.options.continuous || this.index < this.num - 1) && this.slide(this.index + 1);
    },
    play: function play(t) {
      var i = this,
        e = this.index + ("rtl" === this.options.slideshowDirection ? -1 : 1);
      window.clearTimeout(this.timeout), this.interval = t || this.options.slideshowInterval, 1 < this.elements[this.index] && (this.timeout = this.setTimeout(!this.requestAnimationFrame && this.slide || function (t, e) {
        i.animationFrameId = i.requestAnimationFrame.call(window, function () {
          i.slide(t, e);
        });
      }, [e, this.options.slideshowTransitionSpeed], this.interval)), this.container.addClass(this.options.playingClass);
    },
    pause: function pause() {
      window.clearTimeout(this.timeout), this.interval = null, this.cancelAnimationFrame && (this.cancelAnimationFrame.call(window, this.animationFrameId), this.animationFrameId = null), this.container.removeClass(this.options.playingClass);
    },
    add: function add(t) {
      var e;
      for (t.concat || (t = Array.prototype.slice.call(t)), this.list.concat || (this.list = Array.prototype.slice.call(this.list)), this.list = this.list.concat(t), this.num = this.list.length, 2 < this.num && null === this.options.continuous && (this.options.continuous = !0, this.container.removeClass(this.options.leftEdgeClass)), this.container.removeClass(this.options.rightEdgeClass).removeClass(this.options.singleClass), e = this.num - t.length; e < this.num; e += 1) this.addSlide(e), this.positionSlide(e);
      this.positions.length = this.num, this.initSlides(!0);
    },
    resetSlides: function resetSlides() {
      this.slidesContainer.empty(), this.unloadAllSlides(), this.slides = [];
    },
    handleClose: function handleClose() {
      var t = this.options;
      this.destroyEventListeners(), this.pause(), this.container[0].style.display = "none", this.container.removeClass(t.displayClass).removeClass(t.singleClass).removeClass(t.leftEdgeClass).removeClass(t.rightEdgeClass), t.hidePageScrollbars && (document.body.style.overflow = this.bodyOverflowStyle), this.options.clearSlides && this.resetSlides(), this.options.onclosed && this.options.onclosed.call(this);
    },
    close: function close() {
      var i = this;
      this.options.onclose && this.options.onclose.call(this), this.support.transition && this.options.displayTransition ? (this.container.on(this.support.transition.end, function t(e) {
        e.target === i.container[0] && (i.container.off(i.support.transition.end, t), i.handleClose());
      }), this.container.removeClass(this.options.displayClass)) : this.handleClose();
    },
    circle: function circle(t) {
      return (this.num + t % this.num) % this.num;
    },
    move: function move(t, e, i) {
      this.translateX(t, e, i), this.positions[t] = e;
    },
    translate: function translate(t, e, i, s) {
      if (this.slides[t]) {
        var o = this.slides[t].style,
          n = this.support.transition,
          a = this.support.transform;
        o[n.name + "Duration"] = s + "ms", o[a.name] = "translate(" + e + "px, " + i + "px)" + (a.translateZ ? " translateZ(0)" : "");
      }
    },
    translateX: function translateX(t, e, i) {
      this.translate(t, e, 0, i);
    },
    translateY: function translateY(t, e, i) {
      this.translate(t, 0, e, i);
    },
    animate: function animate(e, i, s) {
      if (s) var o = this,
        n = new Date().getTime(),
        a = window.setInterval(function () {
          var t = new Date().getTime() - n;
          if (s < t) return o.slidesContainer[0].style.left = i + "px", o.ontransitionend(), void window.clearInterval(a);
          o.slidesContainer[0].style.left = (i - e) * (Math.floor(t / s * 100) / 100) + e + "px";
        }, 4);else this.slidesContainer[0].style.left = i + "px";
    },
    preventDefault: function preventDefault(t) {
      t.preventDefault ? t.preventDefault() : t.returnValue = !1;
    },
    stopPropagation: function stopPropagation(t) {
      t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
    },
    onresize: function onresize() {
      this.initSlides(!0);
    },
    onmousedown: function onmousedown(t) {
      t.which && 1 === t.which && "VIDEO" !== t.target.nodeName && "AUDIO" !== t.target.nodeName && (t.preventDefault(), (t.originalEvent || t).touches = [{
        pageX: t.pageX,
        pageY: t.pageY
      }], this.ontouchstart(t));
    },
    onmousemove: function onmousemove(t) {
      this.touchStart && ((t.originalEvent || t).touches = [{
        pageX: t.pageX,
        pageY: t.pageY
      }], this.ontouchmove(t));
    },
    onmouseup: function onmouseup(t) {
      this.touchStart && (this.ontouchend(t), delete this.touchStart);
    },
    onmouseout: function onmouseout(t) {
      if (this.touchStart) {
        var e = t.target,
          i = t.relatedTarget;
        i && (i === e || d.contains(e, i)) || this.onmouseup(t);
      }
    },
    ontouchstart: function ontouchstart(t) {
      this.options.stopTouchEventsPropagation && this.stopPropagation(t);
      var e = (t.originalEvent || t).touches[0];
      this.touchStart = {
        x: e.pageX,
        y: e.pageY,
        time: Date.now()
      }, this.isScrolling = void 0, this.touchDelta = {};
    },
    ontouchmove: function ontouchmove(t) {
      this.options.stopTouchEventsPropagation && this.stopPropagation(t);
      var e,
        i,
        s = (t.originalEvent || t).touches[0],
        o = (t.originalEvent || t).scale,
        n = this.index;
      if (!(1 < s.length || o && 1 !== o)) if (this.options.disableScroll && t.preventDefault(), this.touchDelta = {
        x: s.pageX - this.touchStart.x,
        y: s.pageY - this.touchStart.y
      }, e = this.touchDelta.x, void 0 === this.isScrolling && (this.isScrolling = this.isScrolling || Math.abs(e) < Math.abs(this.touchDelta.y)), this.isScrolling) this.translateY(n, this.touchDelta.y + this.positions[n], 0);else for (t.preventDefault(), window.clearTimeout(this.timeout), this.options.continuous ? i = [this.circle(n + 1), n, this.circle(n - 1)] : (this.touchDelta.x = e /= !n && 0 < e || n === this.num - 1 && e < 0 ? Math.abs(e) / this.slideWidth + 1 : 1, i = [n], n && i.push(n - 1), n < this.num - 1 && i.unshift(n + 1)); i.length;) n = i.pop(), this.translateX(n, e + this.positions[n], 0);
    },
    ontouchend: function ontouchend(t) {
      this.options.stopTouchEventsPropagation && this.stopPropagation(t);
      var e,
        i,
        s,
        o,
        n,
        a = this.index,
        l = this.options.transitionSpeed,
        r = this.slideWidth,
        h = Number(Date.now() - this.touchStart.time) < 250,
        d = h && 20 < Math.abs(this.touchDelta.x) || Math.abs(this.touchDelta.x) > r / 2,
        c = !a && 0 < this.touchDelta.x || a === this.num - 1 && this.touchDelta.x < 0,
        p = !d && this.options.closeOnSwipeUpOrDown && (h && 20 < Math.abs(this.touchDelta.y) || Math.abs(this.touchDelta.y) > this.slideHeight / 2);
      this.options.continuous && (c = !1), e = this.touchDelta.x < 0 ? -1 : 1, this.isScrolling ? p ? this.close() : this.translateY(a, 0, l) : d && !c ? (i = a + e, s = a - e, o = r * e, n = -r * e, this.options.continuous ? (this.move(this.circle(i), o, 0), this.move(this.circle(a - 2 * e), n, 0)) : 0 <= i && i < this.num && this.move(i, o, 0), this.move(a, this.positions[a] + o, l), this.move(this.circle(s), this.positions[this.circle(s)] + o, l), a = this.circle(s), this.onslide(a)) : this.options.continuous ? (this.move(this.circle(a - 1), -r, l), this.move(a, 0, l), this.move(this.circle(a + 1), r, l)) : (a && this.move(a - 1, -r, l), this.move(a, 0, l), a < this.num - 1 && this.move(a + 1, r, l));
    },
    ontouchcancel: function ontouchcancel(t) {
      this.touchStart && (this.ontouchend(t), delete this.touchStart);
    },
    ontransitionend: function ontransitionend(t) {
      var e = this.slides[this.index];
      t && e !== t.target || (this.interval && this.play(), this.setTimeout(this.options.onslideend, [this.index, e]));
    },
    oncomplete: function oncomplete(t) {
      var e,
        i = t.target || t.srcElement,
        s = i && i.parentNode;
      i && s && (e = this.getNodeIndex(s), d(s).removeClass(this.options.slideLoadingClass), "error" === t.type ? (d(s).addClass(this.options.slideErrorClass), this.elements[e] = 3) : this.elements[e] = 2, i.clientHeight > this.container[0].clientHeight && (i.style.maxHeight = this.container[0].clientHeight), this.interval && this.slides[this.index] === s && this.play(), this.setTimeout(this.options.onslidecomplete, [e, s]));
    },
    onload: function onload(t) {
      this.oncomplete(t);
    },
    onerror: function onerror(t) {
      this.oncomplete(t);
    },
    onkeydown: function onkeydown(t) {
      switch (t.which || t.keyCode) {
        case 13:
          this.options.toggleControlsOnReturn && (this.preventDefault(t), this.toggleControls());
          break;
        case 27:
          this.options.closeOnEscape && (this.close(), t.stopImmediatePropagation());
          break;
        case 32:
          this.options.toggleSlideshowOnSpace && (this.preventDefault(t), this.toggleSlideshow());
          break;
        case 37:
          this.options.enableKeyboardNavigation && (this.preventDefault(t), this.prev());
          break;
        case 39:
          this.options.enableKeyboardNavigation && (this.preventDefault(t), this.next());
      }
    },
    handleClick: function handleClick(t) {
      var e = this.options,
        i = t.target || t.srcElement,
        s = i.parentNode;
      function o(t) {
        return d(i).hasClass(t) || d(s).hasClass(t);
      }
      o(e.toggleClass) ? (this.preventDefault(t), this.toggleControls()) : o(e.prevClass) ? (this.preventDefault(t), this.prev()) : o(e.nextClass) ? (this.preventDefault(t), this.next()) : o(e.closeClass) ? (this.preventDefault(t), this.close()) : o(e.playPauseClass) ? (this.preventDefault(t), this.toggleSlideshow()) : s === this.slidesContainer[0] ? e.closeOnSlideClick ? (this.preventDefault(t), this.close()) : e.toggleControlsOnSlideClick && (this.preventDefault(t), this.toggleControls()) : s.parentNode && s.parentNode === this.slidesContainer[0] && e.toggleControlsOnSlideClick && (this.preventDefault(t), this.toggleControls());
    },
    onclick: function onclick(t) {
      if (!(this.options.emulateTouchEvents && this.touchDelta && (20 < Math.abs(this.touchDelta.x) || 20 < Math.abs(this.touchDelta.y)))) return this.handleClick(t);
      delete this.touchDelta;
    },
    updateEdgeClasses: function updateEdgeClasses(t) {
      t ? this.container.removeClass(this.options.leftEdgeClass) : this.container.addClass(this.options.leftEdgeClass), t === this.num - 1 ? this.container.addClass(this.options.rightEdgeClass) : this.container.removeClass(this.options.rightEdgeClass);
    },
    handleSlide: function handleSlide(t) {
      this.options.continuous || this.updateEdgeClasses(t), this.loadElements(t), this.options.unloadElements && this.unloadElements(t), this.setTitle(t);
    },
    onslide: function onslide(t) {
      this.index = t, this.handleSlide(t), this.setTimeout(this.options.onslide, [t, this.slides[t]]);
    },
    setTitle: function setTitle(t) {
      var e = this.slides[t].firstChild,
        i = e.title || e.alt,
        s = this.titleElement;
      s.length && (this.titleElement.empty(), i && s[0].appendChild(document.createTextNode(i)));
    },
    setTimeout: function setTimeout(t, e, i) {
      var s = this;
      return t && window.setTimeout(function () {
        t.apply(s, e || []);
      }, i || 0);
    },
    imageFactory: function imageFactory(t, i) {
      var s,
        o,
        e,
        n,
        a = this,
        l = this.imagePrototype.cloneNode(!1),
        r = t,
        h = this.options.stretchImages;
      return "string" != typeof r && (r = this.getItemProperty(t, this.options.urlProperty), e = this.getItemProperty(t, this.options.titleProperty), n = this.getItemProperty(t, this.options.altTextProperty) || e), !0 === h && (h = "contain"), (h = this.support.backgroundSize && this.support.backgroundSize[h] && h) ? o = this.elementPrototype.cloneNode(!1) : (o = l).draggable = !1, e && (o.title = e), n && (o.alt = n), d(l).on("load error", function t(e) {
        if (!s) {
          if (e = {
            type: e.type,
            target: o
          }, !o.parentNode) return a.setTimeout(t, [e]);
          s = !0, d(l).off("load error", t), h && "load" === e.type && (o.style.background = 'url("' + r + '") center no-repeat', o.style.backgroundSize = h), i(e);
        }
      }), l.src = r, o;
    },
    createElement: function createElement(t, e) {
      var i = t && this.getItemProperty(t, this.options.typeProperty),
        s = i && this[i.split("/")[0] + "Factory"] || this.imageFactory,
        o = t && s.call(this, t, e),
        n = this.getItemProperty(t, this.options.srcsetProperty);
      return o || (o = this.elementPrototype.cloneNode(!1), this.setTimeout(e, [{
        type: "error",
        target: o
      }])), n && o.setAttribute("srcset", n), d(o).addClass(this.options.slideContentClass), o;
    },
    loadElement: function loadElement(t) {
      this.elements[t] || (this.slides[t].firstChild ? this.elements[t] = d(this.slides[t]).hasClass(this.options.slideErrorClass) ? 3 : 2 : (this.elements[t] = 1, d(this.slides[t]).addClass(this.options.slideLoadingClass), this.slides[t].appendChild(this.createElement(this.list[t], this.proxyListener))));
    },
    loadElements: function loadElements(t) {
      var e,
        i = Math.min(this.num, 2 * this.options.preloadRange + 1),
        s = t;
      for (e = 0; e < i; e += 1) s += e * (e % 2 == 0 ? -1 : 1), s = this.circle(s), this.loadElement(s);
    },
    unloadElements: function unloadElements(t) {
      var e, i;
      for (e in this.elements) Object.prototype.hasOwnProperty.call(this.elements, e) && (i = Math.abs(t - e)) > this.options.preloadRange && i + this.options.preloadRange < this.num && (this.unloadSlide(e), delete this.elements[e]);
    },
    addSlide: function addSlide(t) {
      var e = this.slidePrototype.cloneNode(!1);
      e.setAttribute("data-index", t), this.slidesContainer[0].appendChild(e), this.slides.push(e);
    },
    positionSlide: function positionSlide(t) {
      var e = this.slides[t];
      e.style.width = this.slideWidth + "px", this.support.transform && (e.style.left = t * -this.slideWidth + "px", this.move(t, this.index > t ? -this.slideWidth : this.index < t ? this.slideWidth : 0, 0));
    },
    initSlides: function initSlides(t) {
      var e, i;
      for (t || (this.positions = [], this.positions.length = this.num, this.elements = {}, this.imagePrototype = document.createElement("img"), this.elementPrototype = document.createElement("div"), this.slidePrototype = document.createElement("div"), d(this.slidePrototype).addClass(this.options.slideClass), this.slides = this.slidesContainer[0].children, e = this.options.clearSlides || this.slides.length !== this.num), this.slideWidth = this.container[0].clientWidth, this.slideHeight = this.container[0].clientHeight, this.slidesContainer[0].style.width = this.num * this.slideWidth + "px", e && this.resetSlides(), i = 0; i < this.num; i += 1) e && this.addSlide(i), this.positionSlide(i);
      this.options.continuous && this.support.transform && (this.move(this.circle(this.index - 1), -this.slideWidth, 0), this.move(this.circle(this.index + 1), this.slideWidth, 0)), this.support.transform || (this.slidesContainer[0].style.left = this.index * -this.slideWidth + "px");
    },
    unloadSlide: function unloadSlide(t) {
      var e, i;
      null !== (i = (e = this.slides[t]).firstChild) && e.removeChild(i);
    },
    unloadAllSlides: function unloadAllSlides() {
      var t, e;
      for (t = 0, e = this.slides.length; t < e; t++) this.unloadSlide(t);
    },
    toggleControls: function toggleControls() {
      var t = this.options.controlsClass;
      this.container.hasClass(t) ? this.container.removeClass(t) : this.container.addClass(t);
    },
    toggleSlideshow: function toggleSlideshow() {
      this.interval ? this.pause() : this.play();
    },
    getNodeIndex: function getNodeIndex(t) {
      return parseInt(t.getAttribute("data-index"), 10);
    },
    getNestedProperty: function getNestedProperty(a, t) {
      return t.replace(/\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g, function (t, e, i, s, o) {
        var n = o || e || i || s && parseInt(s, 10);
        t && a && (a = a[n]);
      }), a;
    },
    getDataProperty: function getDataProperty(t, e) {
      var i, s;
      if (t.dataset ? (i = e.replace(/-([a-z])/g, function (t, e) {
        return e.toUpperCase();
      }), s = t.dataset[i]) : t.getAttribute && (s = t.getAttribute("data-" + e.replace(/([A-Z])/g, "-$1").toLowerCase())), "string" == typeof s) {
        if (/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(s)) try {
          return d.parseJSON(s);
        } catch (t) {}
        return s;
      }
    },
    getItemProperty: function getItemProperty(t, e) {
      var i = this.getDataProperty(t, e);
      return void 0 === i && (i = t[e]), void 0 === i && (i = this.getNestedProperty(t, e)), i;
    },
    initStartIndex: function initStartIndex() {
      var t,
        e = this.options.index,
        i = this.options.urlProperty;
      if (e && "number" != typeof e) for (t = 0; t < this.num; t += 1) if (this.list[t] === e || this.getItemProperty(this.list[t], i) === this.getItemProperty(e, i)) {
        e = t;
        break;
      }
      this.index = this.circle(parseInt(e, 10) || 0);
    },
    initEventListeners: function initEventListeners() {
      var i = this,
        t = this.slidesContainer;
      function e(t) {
        var e = i.support.transition && i.support.transition.end === t.type ? "transitionend" : t.type;
        i["on" + e](t);
      }
      d(window).on("resize", e), d(document.body).on("keydown", e), this.container.on("click", e), this.support.touch ? t.on("touchstart touchmove touchend touchcancel", e) : this.options.emulateTouchEvents && this.support.transition && t.on("mousedown mousemove mouseup mouseout", e), this.support.transition && t.on(this.support.transition.end, e), this.proxyListener = e;
    },
    destroyEventListeners: function destroyEventListeners() {
      var t = this.slidesContainer,
        e = this.proxyListener;
      d(window).off("resize", e), d(document.body).off("keydown", e), this.container.off("click", e), this.support.touch ? t.off("touchstart touchmove touchend touchcancel", e) : this.options.emulateTouchEvents && this.support.transition && t.off("mousedown mousemove mouseup mouseout", e), this.support.transition && t.off(this.support.transition.end, e);
    },
    handleOpen: function handleOpen() {
      this.options.onopened && this.options.onopened.call(this);
    },
    initWidget: function initWidget() {
      var i = this;
      return this.container = d(this.options.container), this.container.length ? (this.slidesContainer = this.container.find(this.options.slidesContainer).first(), this.slidesContainer.length ? (this.titleElement = this.container.find(this.options.titleElement).first(), 1 === this.num && this.container.addClass(this.options.singleClass), this.options.onopen && this.options.onopen.call(this), this.support.transition && this.options.displayTransition ? this.container.on(this.support.transition.end, function t(e) {
        e.target === i.container[0] && (i.container.off(i.support.transition.end, t), i.handleOpen());
      }) : this.handleOpen(), this.options.hidePageScrollbars && (this.bodyOverflowStyle = document.body.style.overflow, document.body.style.overflow = "hidden"), this.container[0].style.display = "block", this.initSlides(), void this.container.addClass(this.options.displayClass)) : (this.console.log("blueimp Gallery: Slides container not found.", this.options.slidesContainer), !1)) : (this.console.log("blueimp Gallery: Widget container not found.", this.options.container), !1);
    },
    initOptions: function initOptions(t) {
      this.options = d.extend({}, this.options), (t && t.carousel || this.options.carousel && (!t || !1 !== t.carousel)) && d.extend(this.options, this.carouselOptions), d.extend(this.options, t), this.num < 3 && (this.options.continuous = !!this.options.continuous && null), this.support.transition || (this.options.emulateTouchEvents = !1), this.options.event && this.preventDefault(this.options.event);
    }
  }), i;
}), function (t) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./blueimp-helper */ "./assets/js/plugins/blueimp-gallery/js/blueimp-helper.js"), __webpack_require__(/*! ./blueimp-gallery */ "./assets/js/plugins/blueimp-gallery/js/blueimp-gallery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (t, e) {
  "use strict";

  t.extend(e.prototype.options, {
    fullScreen: !1
  });
  var i = e.prototype.initialize,
    s = e.prototype.close;
  return t.extend(e.prototype, {
    getFullScreenElement: function getFullScreenElement() {
      return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    },
    requestFullScreen: function requestFullScreen(t) {
      t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen();
    },
    exitFullScreen: function exitFullScreen() {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen();
    },
    initialize: function initialize() {
      i.call(this), this.options.fullScreen && !this.getFullScreenElement() && this.requestFullScreen(this.container[0]);
    },
    close: function close() {
      this.getFullScreenElement() === this.container[0] && this.exitFullScreen(), s.call(this);
    }
  }), e;
}), function (t) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./blueimp-helper */ "./assets/js/plugins/blueimp-gallery/js/blueimp-helper.js"), __webpack_require__(/*! ./blueimp-gallery */ "./assets/js/plugins/blueimp-gallery/js/blueimp-gallery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a, t) {
  "use strict";

  a.extend(t.prototype.options, {
    indicatorContainer: "ol",
    activeIndicatorClass: "active",
    thumbnailProperty: "thumbnail",
    thumbnailIndicators: !0
  });
  var e = t.prototype.initSlides,
    i = t.prototype.addSlide,
    s = t.prototype.resetSlides,
    o = t.prototype.handleClick,
    n = t.prototype.handleSlide,
    l = t.prototype.handleClose;
  return a.extend(t.prototype, {
    createIndicator: function createIndicator(t) {
      var e,
        i,
        s = this.indicatorPrototype.cloneNode(!1),
        o = this.getItemProperty(t, this.options.titleProperty),
        n = this.options.thumbnailProperty;
      return this.options.thumbnailIndicators && (n && (e = this.getItemProperty(t, n)), void 0 === e && (i = t.getElementsByTagName && a(t).find("img")[0]) && (e = i.src), e && (s.style.backgroundImage = 'url("' + e + '")')), o && (s.title = o), s;
    },
    addIndicator: function addIndicator(t) {
      if (this.indicatorContainer.length) {
        var e = this.createIndicator(this.list[t]);
        e.setAttribute("data-index", t), this.indicatorContainer[0].appendChild(e), this.indicators.push(e);
      }
    },
    setActiveIndicator: function setActiveIndicator(t) {
      this.indicators && (this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), this.activeIndicator = a(this.indicators[t]), this.activeIndicator.addClass(this.options.activeIndicatorClass));
    },
    initSlides: function initSlides(t) {
      t || (this.indicatorContainer = this.container.find(this.options.indicatorContainer), this.indicatorContainer.length && (this.indicatorPrototype = document.createElement("li"), this.indicators = this.indicatorContainer[0].children)), e.call(this, t);
    },
    addSlide: function addSlide(t) {
      i.call(this, t), this.addIndicator(t);
    },
    resetSlides: function resetSlides() {
      s.call(this), this.indicatorContainer.empty(), this.indicators = [];
    },
    handleClick: function handleClick(t) {
      var e = t.target || t.srcElement,
        i = e.parentNode;
      if (i === this.indicatorContainer[0]) this.preventDefault(t), this.slide(this.getNodeIndex(e));else {
        if (i.parentNode !== this.indicatorContainer[0]) return o.call(this, t);
        this.preventDefault(t), this.slide(this.getNodeIndex(i));
      }
    },
    handleSlide: function handleSlide(t) {
      n.call(this, t), this.setActiveIndicator(t);
    },
    handleClose: function handleClose() {
      this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), l.call(this);
    }
  }), t;
}), function (t) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./blueimp-helper */ "./assets/js/plugins/blueimp-gallery/js/blueimp-helper.js"), __webpack_require__(/*! ./blueimp-gallery */ "./assets/js/plugins/blueimp-gallery/js/blueimp-gallery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (w, t) {
  "use strict";

  w.extend(t.prototype.options, {
    videoContentClass: "video-content",
    videoLoadingClass: "video-loading",
    videoPlayingClass: "video-playing",
    videoPosterProperty: "poster",
    videoSourcesProperty: "sources"
  });
  var e = t.prototype.handleSlide;
  return w.extend(t.prototype, {
    handleSlide: function handleSlide(t) {
      e.call(this, t), this.playingVideo && this.playingVideo.pause();
    },
    videoFactory: function videoFactory(t, e, i) {
      var s,
        o,
        n,
        a,
        l,
        r = this,
        h = this.options,
        d = this.elementPrototype.cloneNode(!1),
        c = w(d),
        p = [{
          type: "error",
          target: d
        }],
        u = i || document.createElement("video"),
        m = this.getItemProperty(t, h.urlProperty),
        y = this.getItemProperty(t, h.typeProperty),
        f = this.getItemProperty(t, h.titleProperty),
        g = this.getItemProperty(t, this.options.altTextProperty) || f,
        v = this.getItemProperty(t, h.videoPosterProperty),
        C = this.getItemProperty(t, h.videoSourcesProperty);
      if (c.addClass(h.videoContentClass), f && (d.title = f), u.canPlayType) if (m && y && u.canPlayType(y)) u.src = m;else if (C) for (; C.length;) if (o = C.shift(), m = this.getItemProperty(o, h.urlProperty), y = this.getItemProperty(o, h.typeProperty), m && y && u.canPlayType(y)) {
        u.src = m;
        break;
      }
      return v && (u.poster = v, s = this.imagePrototype.cloneNode(!1), w(s).addClass(h.toggleClass), s.src = v, s.draggable = !1, s.alt = g, d.appendChild(s)), (n = document.createElement("a")).setAttribute("target", "_blank"), i || n.setAttribute("download", f), n.href = m, u.src && (u.controls = !0, (i || w(u)).on("error", function () {
        r.setTimeout(e, p);
      }).on("pause", function () {
        u.seeking || (a = !1, c.removeClass(r.options.videoLoadingClass).removeClass(r.options.videoPlayingClass), l && r.container.addClass(r.options.controlsClass), delete r.playingVideo, r.interval && r.play());
      }).on("playing", function () {
        a = !1, c.removeClass(r.options.videoLoadingClass).addClass(r.options.videoPlayingClass), r.container.hasClass(r.options.controlsClass) ? (l = !0, r.container.removeClass(r.options.controlsClass)) : l = !1;
      }).on("play", function () {
        window.clearTimeout(r.timeout), a = !0, c.addClass(r.options.videoLoadingClass), r.playingVideo = u;
      }), w(n).on("click", function (t) {
        r.preventDefault(t), a ? u.pause() : u.play();
      }), d.appendChild(i && i.element || u)), d.appendChild(n), this.setTimeout(e, [{
        type: "load",
        target: d
      }]), d;
    }
  }), t;
}), function (t) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./blueimp-helper */ "./assets/js/plugins/blueimp-gallery/js/blueimp-helper.js"), __webpack_require__(/*! ./blueimp-gallery-video */ "./assets/js/plugins/blueimp-gallery/js/blueimp-gallery-video.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (l, t) {
  "use strict";

  if (!window.postMessage) return t;
  l.extend(t.prototype.options, {
    vimeoVideoIdProperty: "vimeo",
    vimeoPlayerUrl: "//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID",
    vimeoPlayerIdPrefix: "vimeo-player-",
    vimeoClickToPlay: !0
  });
  function o(t, e, i, s) {
    this.url = t, this.videoId = e, this.playerId = i, this.clickToPlay = s, this.element = document.createElement("div"), this.listeners = {};
  }
  var n = t.prototype.textFactory || t.prototype.imageFactory,
    a = 0;
  return l.extend(o.prototype, {
    canPlayType: function canPlayType() {
      return !0;
    },
    on: function on(t, e) {
      return this.listeners[t] = e, this;
    },
    loadAPI: function loadAPI() {
      var t,
        e,
        i = this,
        s = "//f.vimeocdn.com/js/froogaloop2.min.js",
        o = document.getElementsByTagName("script"),
        n = o.length;
      function a() {
        !e && i.playOnReady && i.play(), e = !0;
      }
      for (; n;) if (o[n -= 1].src === s) {
        t = o[n];
        break;
      }
      t || ((t = document.createElement("script")).src = s), l(t).on("load", a), o[0].parentNode.insertBefore(t, o[0]), /loaded|complete/.test(t.readyState) && a();
    },
    onReady: function onReady() {
      var t = this;
      this.ready = !0, this.player.addEvent("play", function () {
        t.hasPlayed = !0, t.onPlaying();
      }), this.player.addEvent("pause", function () {
        t.onPause();
      }), this.player.addEvent("finish", function () {
        t.onPause();
      }), this.playOnReady && this.play();
    },
    onPlaying: function onPlaying() {
      this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2);
    },
    onPause: function onPause() {
      this.listeners.pause(), delete this.playStatus;
    },
    insertIframe: function insertIframe() {
      var t = document.createElement("iframe");
      t.src = this.url.replace("VIDEO_ID", this.videoId).replace("PLAYER_ID", this.playerId), t.id = this.playerId, this.element.parentNode.replaceChild(t, this.element), this.element = t;
    },
    play: function play() {
      var t = this;
      this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.api("play") : (this.playOnReady = !0, window.$f ? this.player || (this.insertIframe(), this.player = $f(this.element), this.player.addEvent("ready", function () {
        t.onReady();
      })) : this.loadAPI());
    },
    pause: function pause() {
      this.ready ? this.player.api("pause") : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus);
    }
  }), l.extend(t.prototype, {
    VimeoPlayer: o,
    textFactory: function textFactory(t, e) {
      var i = this.options,
        s = this.getItemProperty(t, i.vimeoVideoIdProperty);
      return s ? (void 0 === this.getItemProperty(t, i.urlProperty) && (t[i.urlProperty] = "//vimeo.com/" + s), a += 1, this.videoFactory(t, e, new o(i.vimeoPlayerUrl, s, i.vimeoPlayerIdPrefix + a, i.vimeoClickToPlay))) : n.call(this, t, e);
    }
  }), t;
}), function (t) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./blueimp-helper */ "./assets/js/plugins/blueimp-gallery/js/blueimp-helper.js"), __webpack_require__(/*! ./blueimp-gallery-video */ "./assets/js/plugins/blueimp-gallery/js/blueimp-gallery-video.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (t, e) {
  "use strict";

  if (!window.postMessage) return e;
  t.extend(e.prototype.options, {
    youTubeVideoIdProperty: "youtube",
    youTubePlayerVars: {
      wmode: "transparent"
    },
    youTubeClickToPlay: !0
  });
  function o(t, e, i) {
    this.videoId = t, this.playerVars = e, this.clickToPlay = i, this.element = document.createElement("div"), this.listeners = {};
  }
  var n = e.prototype.textFactory || e.prototype.imageFactory;
  return t.extend(o.prototype, {
    canPlayType: function canPlayType() {
      return !0;
    },
    on: function on(t, e) {
      return this.listeners[t] = e, this;
    },
    loadAPI: function loadAPI() {
      var t,
        e = this,
        i = window.onYouTubeIframeAPIReady,
        s = "//www.youtube.com/iframe_api",
        o = document.getElementsByTagName("script"),
        n = o.length;
      for (window.onYouTubeIframeAPIReady = function () {
        i && i.apply(this), e.playOnReady && e.play();
      }; n;) if (o[n -= 1].src === s) return;
      (t = document.createElement("script")).src = s, o[0].parentNode.insertBefore(t, o[0]);
    },
    onReady: function onReady() {
      this.ready = !0, this.playOnReady && this.play();
    },
    onPlaying: function onPlaying() {
      this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2);
    },
    onPause: function onPause() {
      e.prototype.setTimeout.call(this, this.checkSeek, null, 2e3);
    },
    checkSeek: function checkSeek() {
      this.stateChange !== YT.PlayerState.PAUSED && this.stateChange !== YT.PlayerState.ENDED || (this.listeners.pause(), delete this.playStatus);
    },
    onStateChange: function onStateChange(t) {
      switch (t.data) {
        case YT.PlayerState.PLAYING:
          this.hasPlayed = !0, this.onPlaying();
          break;
        case YT.PlayerState.PAUSED:
        case YT.PlayerState.ENDED:
          this.onPause();
      }
      this.stateChange = t.data;
    },
    onError: function onError(t) {
      this.listeners.error(t);
    },
    play: function play() {
      var e = this;
      this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.playVideo() : (this.playOnReady = !0, window.YT && YT.Player ? this.player || (this.player = new YT.Player(this.element, {
        videoId: this.videoId,
        playerVars: this.playerVars,
        events: {
          onReady: function onReady() {
            e.onReady();
          },
          onStateChange: function onStateChange(t) {
            e.onStateChange(t);
          },
          onError: function onError(t) {
            e.onError(t);
          }
        }
      })) : this.loadAPI());
    },
    pause: function pause() {
      this.ready ? this.player.pauseVideo() : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus);
    }
  }), t.extend(e.prototype, {
    YouTubePlayer: o,
    textFactory: function textFactory(t, e) {
      var i = this.options,
        s = this.getItemProperty(t, i.youTubeVideoIdProperty);
      return s ? (void 0 === this.getItemProperty(t, i.urlProperty) && (t[i.urlProperty] = "//www.youtube.com/watch?v=" + s), void 0 === this.getItemProperty(t, i.videoPosterProperty) && (t[i.videoPosterProperty] = "//img.youtube.com/vi/" + s + "/maxresdefault.jpg"), this.videoFactory(t, e, new o(s, i.youTubePlayerVars, i.youTubeClickToPlay))) : n.call(this, t, e);
    }
  }), e;
}), function (t) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./blueimp-gallery */ "./assets/js/plugins/blueimp-gallery/js/blueimp-gallery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (l, r) {
  "use strict";

  l(document).on("click", "[data-gallery]", function (t) {
    var e = l(this).data("gallery"),
      i = l(e),
      s = i.length && i || l(r.prototype.options.container),
      o = {
        onopen: function onopen() {
          s.data("gallery", this).trigger("open");
        },
        onopened: function onopened() {
          s.trigger("opened");
        },
        onslide: function onslide() {
          s.trigger("slide", arguments);
        },
        onslideend: function onslideend() {
          s.trigger("slideend", arguments);
        },
        onslidecomplete: function onslidecomplete() {
          s.trigger("slidecomplete", arguments);
        },
        onclose: function onclose() {
          s.trigger("close");
        },
        onclosed: function onclosed() {
          s.trigger("closed").removeData("gallery");
        }
      },
      n = l.extend(s.data(), {
        container: s[0],
        index: this,
        event: t
      }, o),
      a = l(this).closest("[data-gallery-group], body").find('[data-gallery="' + e + '"]');
    return n.filter && (a = a.filter(n.filter)), new r(a, n);
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFuYWdlbWVudEVycm9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGx1Z2lucy9ibHVlaW1wLWdhbGxlcnkvanMvYmx1ZWltcC1nYWxsZXJ5LXZpZGVvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL2JsdWVpbXAtZ2FsbGVyeS9qcy9ibHVlaW1wLWdhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvYmx1ZWltcC1nYWxsZXJ5L2pzL2JsdWVpbXAtaGVscGVyLmpzIiwid2VicGFjazovLy9ibHVlaW1wLWdhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vL2JsdWVpbXAtZ2FsbGVyeS1mdWxsc2NyZWVuLmpzIiwid2VicGFjazovLy9ibHVlaW1wLWdhbGxlcnktaW5kaWNhdG9yLmpzIiwid2VicGFjazovLy9ibHVlaW1wLWdhbGxlcnktdmlkZW8uanMiLCJ3ZWJwYWNrOi8vL2JsdWVpbXAtZ2FsbGVyeS12aW1lby5qcyIsIndlYnBhY2s6Ly8vYmx1ZWltcC1nYWxsZXJ5LXlvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vL2pxdWVyeS5ibHVlaW1wLWdhbGxlcnkuanMiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsIlJvdXRpbmciLCJzZXRSb3V0aW5nRGF0YSIsIlN3YWwiLCJzd2FsV2l0aEJvb3RzdHJhcEJ1dHRvbnMiLCJtaXhpbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiU2hvd0Zvcm1FcnJvcnMiLCJzZWxlY3RvciIsImZvcm1fbmFtZSIsImVycm9ycyIsImlkIiwiaXNHcm91cGUiLCIkIiwicmVtb3ZlIiwialF1ZXJ5IiwiZWFjaCIsInZpb2xhdGlvbnMiLCJpIiwidmFsIiwiY29sdW1uTmFtZSIsIngiLCJwcm9wZXJ0eVBhdGgiLCJzZWFyY2giLCJzZXBhcmF0b3JzIiwiYXJyIiwic3BsaXQiLCJSZWdFeHAiLCJqb2luIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImZpbmQiLCJwYXJlbnQiLCJhcHBlbmQiLCJ0aXRsZSIsIlNob3dGb3JtRXJyb3JzV2l0aFBhcmFtIiwiZmFjdG9yeSIsImRlZmluZSIsIkdhbGxlcnkiLCJleHRlbmQiLCJwcm90b3R5cGUiLCJvcHRpb25zIiwidmlkZW9Db250ZW50Q2xhc3MiLCJ2aWRlb0xvYWRpbmdDbGFzcyIsInZpZGVvUGxheWluZ0NsYXNzIiwidmlkZW9Qb3N0ZXJQcm9wZXJ0eSIsInZpZGVvU291cmNlc1Byb3BlcnR5IiwiaGFuZGxlU2xpZGUiLCJpbmRleCIsImNhbGwiLCJwbGF5aW5nVmlkZW8iLCJwYXVzZSIsInZpZGVvRmFjdG9yeSIsIm9iaiIsImNhbGxiYWNrIiwidmlkZW9JbnRlcmZhY2UiLCJ0aGF0IiwidmlkZW9Db250YWluZXJOb2RlIiwiZWxlbWVudFByb3RvdHlwZSIsImNsb25lTm9kZSIsInZpZGVvQ29udGFpbmVyIiwiZXJyb3JBcmdzIiwidHlwZSIsInRhcmdldCIsInZpZGVvIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidXJsIiwiZ2V0SXRlbVByb3BlcnR5IiwidXJsUHJvcGVydHkiLCJ0eXBlUHJvcGVydHkiLCJ0aXRsZVByb3BlcnR5IiwiYWx0VGV4dCIsImFsdFRleHRQcm9wZXJ0eSIsInBvc3RlclVybCIsInBvc3RlckltYWdlIiwic291cmNlcyIsInNvdXJjZSIsInBsYXlNZWRpYUNvbnRyb2wiLCJpc0xvYWRpbmciLCJoYXNDb250cm9scyIsImFkZENsYXNzIiwiY2FuUGxheVR5cGUiLCJzcmMiLCJzaGlmdCIsInBvc3RlciIsImltYWdlUHJvdG90eXBlIiwidG9nZ2xlQ2xhc3MiLCJkcmFnZ2FibGUiLCJhbHQiLCJhcHBlbmRDaGlsZCIsInNldEF0dHJpYnV0ZSIsImhyZWYiLCJjb250cm9scyIsIm9uIiwic2V0VGltZW91dCIsInNlZWtpbmciLCJyZW1vdmVDbGFzcyIsImNvbnRhaW5lciIsImNvbnRyb2xzQ2xhc3MiLCJpbnRlcnZhbCIsInBsYXkiLCJoYXNDbGFzcyIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsInRpbWVvdXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZWxlbWVudCIsImxpc3QiLCJib2R5Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJ1bmRlZmluZWQiLCJudW0iLCJpbml0T3B0aW9ucyIsImluaXRpYWxpemUiLCJzbGlkZXNDb250YWluZXIiLCJ0aXRsZUVsZW1lbnQiLCJkaXNwbGF5Q2xhc3MiLCJzaW5nbGVDbGFzcyIsImxlZnRFZGdlQ2xhc3MiLCJyaWdodEVkZ2VDbGFzcyIsInBsYXlpbmdDbGFzcyIsInNsaWRlQ2xhc3MiLCJzbGlkZUxvYWRpbmdDbGFzcyIsInNsaWRlRXJyb3JDbGFzcyIsInNsaWRlQ29udGVudENsYXNzIiwicHJldkNsYXNzIiwibmV4dENsYXNzIiwiY2xvc2VDbGFzcyIsInBsYXlQYXVzZUNsYXNzIiwic3Jjc2V0UHJvcGVydHkiLCJkaXNwbGF5VHJhbnNpdGlvbiIsImNsZWFyU2xpZGVzIiwic3RyZXRjaEltYWdlcyIsInRvZ2dsZUNvbnRyb2xzT25SZXR1cm4iLCJ0b2dnbGVDb250cm9sc09uU2xpZGVDbGljayIsInRvZ2dsZVNsaWRlc2hvd09uU3BhY2UiLCJlbmFibGVLZXlib2FyZE5hdmlnYXRpb24iLCJjbG9zZU9uRXNjYXBlIiwiY2xvc2VPblNsaWRlQ2xpY2siLCJjbG9zZU9uU3dpcGVVcE9yRG93biIsImVtdWxhdGVUb3VjaEV2ZW50cyIsInN0b3BUb3VjaEV2ZW50c1Byb3BhZ2F0aW9uIiwiaGlkZVBhZ2VTY3JvbGxiYXJzIiwiZGlzYWJsZVNjcm9sbCIsImNhcm91c2VsIiwiY29udGludW91cyIsInVubG9hZEVsZW1lbnRzIiwic3RhcnRTbGlkZXNob3ciLCJzbGlkZXNob3dJbnRlcnZhbCIsInNsaWRlc2hvd0RpcmVjdGlvbiIsInByZWxvYWRSYW5nZSIsInRyYW5zaXRpb25TcGVlZCIsInNsaWRlc2hvd1RyYW5zaXRpb25TcGVlZCIsIm9ub3BlbiIsIm9ub3BlbmVkIiwib25zbGlkZSIsIm9uc2xpZGVlbmQiLCJvbnNsaWRlY29tcGxldGUiLCJvbmNsb3NlIiwib25jbG9zZWQiLCJjYXJvdXNlbE9wdGlvbnMiLCJzdXBwb3J0IiwidG91Y2giLCJvbnRvdWNoc3RhcnQiLCJEb2N1bWVudFRvdWNoIiwidHJhbnNpdGlvbnMiLCJ3ZWJraXRUcmFuc2l0aW9uIiwiZW5kIiwicHJlZml4IiwiTW96VHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsInByb3AiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsIm5hbWUiLCJlbGVtZW50VGVzdHMiLCJ0cmFuc2xhdGVaIiwic2xpY2UiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInRyYW5zZm9ybSIsInRyYW5zbGF0ZSIsImJhY2tncm91bmRTaXplIiwiY29udGFpbiIsImNvdmVyIiwicmVtb3ZlQ2hpbGQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIndlYmtpdENhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpbml0U3RhcnRJbmRleCIsImluaXRXaWRnZXQiLCJpbml0RXZlbnRMaXN0ZW5lcnMiLCJvbnRyYW5zaXRpb25lbmQiLCJzbGlkZSIsInRvIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJuYXR1cmFsRGlyZWN0aW9uIiwiZGlmZiIsImNpcmNsZSIsIk1hdGgiLCJhYnMiLCJwb3NpdGlvbnMiLCJzbGlkZVdpZHRoIiwibW92ZSIsImFuaW1hdGUiLCJnZXRJbmRleCIsImdldE51bWJlciIsInByZXYiLCJuZXh0IiwidGltZSIsIm5leHRJbmRleCIsImVsZW1lbnRzIiwiYW5pbWF0aW9uRnJhbWVJZCIsImFkZCIsImNvbmNhdCIsIkFycmF5IiwiYWRkU2xpZGUiLCJwb3NpdGlvblNsaWRlIiwiaW5pdFNsaWRlcyIsInJlc2V0U2xpZGVzIiwiZW1wdHkiLCJ1bmxvYWRBbGxTbGlkZXMiLCJzbGlkZXMiLCJoYW5kbGVDbG9zZSIsImRlc3Ryb3lFdmVudExpc3RlbmVycyIsImRpc3BsYXkiLCJvdmVyZmxvdyIsImJvZHlPdmVyZmxvd1N0eWxlIiwiY2xvc2UiLCJjbG9zZUhhbmRsZXIiLCJvZmYiLCJkaXN0IiwidHJhbnNsYXRlWCIsInkiLCJ0cmFuc2xhdGVZIiwiZnJvbSIsImxlZnQiLCJzdGFydCIsIkRhdGUiLCJnZXRUaW1lIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsInRpbWVFbGFwIiwiY2xlYXJJbnRlcnZhbCIsImZsb29yIiwicmV0dXJuVmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJjYW5jZWxCdWJibGUiLCJvbnJlc2l6ZSIsIm9ubW91c2Vkb3duIiwid2hpY2giLCJub2RlTmFtZSIsIm9yaWdpbmFsRXZlbnQiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIm9ubW91c2Vtb3ZlIiwidG91Y2hTdGFydCIsIm9udG91Y2htb3ZlIiwib25tb3VzZXVwIiwib250b3VjaGVuZCIsIm9ubW91c2VvdXQiLCJyZWxhdGVkIiwicmVsYXRlZFRhcmdldCIsImNvbnRhaW5zIiwibm93IiwiaXNTY3JvbGxpbmciLCJ0b3VjaERlbHRhIiwic2NhbGUiLCJ0b3VjaERlbHRhWCIsImluZGljZXMiLCJwdXNoIiwidW5zaGlmdCIsInBvcCIsImlzU2hvcnREdXJhdGlvbiIsIk51bWJlciIsImlzVmFsaWRTbGlkZSIsImlzUGFzdEJvdW5kcyIsImlzVmFsaWRDbG9zZSIsInNsaWRlSGVpZ2h0IiwiaW5kZXhGb3J3YXJkIiwiaW5kZXhCYWNrd2FyZCIsImRpc3RhbmNlRm9yd2FyZCIsImRpc3RhbmNlQmFja3dhcmQiLCJvbnRvdWNoY2FuY2VsIiwib25jb21wbGV0ZSIsInNyY0VsZW1lbnQiLCJwYXJlbnROb2RlIiwiZ2V0Tm9kZUluZGV4IiwiY2xpZW50SGVpZ2h0Iiwib25sb2FkIiwib25lcnJvciIsIm9ua2V5ZG93biIsImtleUNvZGUiLCJ0b2dnbGVDb250cm9scyIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInRvZ2dsZVNsaWRlc2hvdyIsImhhbmRsZUNsaWNrIiwiaXNUYXJnZXQiLCJjbGFzc05hbWUiLCJvbmNsaWNrIiwidXBkYXRlRWRnZUNsYXNzZXMiLCJsb2FkRWxlbWVudHMiLCJzZXRUaXRsZSIsImZpcnN0Q2hpbGQiLCJ0ZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJmdW5jIiwiYXJncyIsIndhaXQiLCJhcHBseSIsImltYWdlRmFjdG9yeSIsImltZyIsImNhbGxlZCIsImNhbGxiYWNrV3JhcHBlciIsImJhY2tncm91bmQiLCJzcmNzZXQiLCJsb2FkRWxlbWVudCIsInByb3h5TGlzdGVuZXIiLCJsaW1pdCIsIm1pbiIsImoiLCJ1bmxvYWRTbGlkZSIsInNsaWRlUHJvdG90eXBlIiwid2lkdGgiLCJyZWxvYWQiLCJjaGlsZHJlbiIsImNsaWVudFdpZHRoIiwibGVuIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJnZXROZXN0ZWRQcm9wZXJ0eSIsInByb3BlcnR5IiwicmVwbGFjZSIsInN0ciIsInNpbmdsZVF1b3RlUHJvcCIsImRvdWJsZVF1b3RlUHJvcCIsImFycmF5SW5kZXgiLCJkb3RQcm9wIiwiZ2V0RGF0YVByb3BlcnR5Iiwia2V5IiwiZGF0YXNldCIsIl8iLCJiIiwidG9VcHBlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsInRlc3QiLCJwYXJzZUpTT04iLCJpZ25vcmUiLCJoYW5kbGVPcGVuIiwib3BlbkhhbmRsZXIiLCJmaXJzdCIsIm9iajEiLCJvYmoyIiwiSGVscGVyIiwicXVlcnkiLCJub2RlVHlwZSIsInN0cmluZyIsIkpTT04iLCJwYXJzZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGFyQXQiLCJnZXRFbGVtZW50QnlJZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicmVnZXhwIiwiZXZlbnROYW1lIiwiaGFuZGxlciIsImV2ZW50TmFtZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGV0YWNoRXZlbnQiLCJoYXNDaGlsZE5vZGVzIiwibGFzdENoaWxkIiwiYW1kIiwidGhpcyIsImZ1bGxTY3JlZW4iLCJnZXRGdWxsU2NyZWVuRWxlbWVudCIsImZ1bGxzY3JlZW5FbGVtZW50Iiwid2Via2l0RnVsbHNjcmVlbkVsZW1lbnQiLCJtb3pGdWxsU2NyZWVuRWxlbWVudCIsIm1zRnVsbHNjcmVlbkVsZW1lbnQiLCJyZXF1ZXN0RnVsbFNjcmVlbiIsInJlcXVlc3RGdWxsc2NyZWVuIiwid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4iLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIm1zUmVxdWVzdEZ1bGxzY3JlZW4iLCJleGl0RnVsbFNjcmVlbiIsImV4aXRGdWxsc2NyZWVuIiwid2Via2l0Q2FuY2VsRnVsbFNjcmVlbiIsIm1vekNhbmNlbEZ1bGxTY3JlZW4iLCJtc0V4aXRGdWxsc2NyZWVuIiwiaW5kaWNhdG9yQ29udGFpbmVyIiwiYWN0aXZlSW5kaWNhdG9yQ2xhc3MiLCJ0aHVtYm5haWxQcm9wZXJ0eSIsInRodW1ibmFpbEluZGljYXRvcnMiLCJjcmVhdGVJbmRpY2F0b3IiLCJ0aHVtYm5haWxVcmwiLCJ0aHVtYm5haWwiLCJpbmRpY2F0b3IiLCJpbmRpY2F0b3JQcm90b3R5cGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGRJbmRpY2F0b3IiLCJpbmRpY2F0b3JzIiwic2V0QWN0aXZlSW5kaWNhdG9yIiwiYWN0aXZlSW5kaWNhdG9yIiwicG9zdE1lc3NhZ2UiLCJ2aW1lb1ZpZGVvSWRQcm9wZXJ0eSIsInZpbWVvUGxheWVyVXJsIiwidmltZW9QbGF5ZXJJZFByZWZpeCIsInZpbWVvQ2xpY2tUb1BsYXkiLCJWaW1lb1BsYXllciIsInZpZGVvSWQiLCJwbGF5ZXJJZCIsImNsaWNrVG9QbGF5IiwibGlzdGVuZXJzIiwidGV4dEZhY3RvcnkiLCJjb3VudGVyIiwibG9hZEFQSSIsInNjcmlwdFRhZyIsImFwaVVybCIsInNjcmlwdFRhZ3MiLCJwbGF5T25SZWFkeSIsImluc2VydEJlZm9yZSIsInJlYWR5U3RhdGUiLCJvblJlYWR5IiwicmVhZHkiLCJwbGF5ZXIiLCJhZGRFdmVudCIsImhhc1BsYXllZCIsIm9uUGxheWluZyIsIm9uUGF1c2UiLCJwbGF5U3RhdHVzIiwicGxheWluZyIsImluc2VydElmcmFtZSIsImlmcmFtZSIsInJlcGxhY2VDaGlsZCIsIm5hdmlnYXRvciIsInBsYXRmb3JtIiwiYXBpIiwiJGYiLCJ5b3VUdWJlVmlkZW9JZFByb3BlcnR5IiwieW91VHViZVBsYXllclZhcnMiLCJ3bW9kZSIsInlvdVR1YmVDbGlja1RvUGxheSIsIllvdVR1YmVQbGF5ZXIiLCJwbGF5ZXJWYXJzIiwib25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkiLCJjaGVja1NlZWsiLCJzdGF0ZUNoYW5nZSIsIllUIiwiUGxheWVyU3RhdGUiLCJQQVVTRUQiLCJFTkRFRCIsIm9uU3RhdGVDaGFuZ2UiLCJkYXRhIiwiUExBWUlORyIsIm9uRXJyb3IiLCJlcnJvciIsInBsYXlWaWRlbyIsIlBsYXllciIsImV2ZW50cyIsInBhdXNlVmlkZW8iLCJ3aWRnZXQiLCJjYWxsYmFja3MiLCJ0cmlnZ2VyIiwiYXJndW1lbnRzIiwicmVtb3ZlRGF0YSIsImxpbmtzIiwiY2xvc2VzdCIsImZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDZFQUF1QyxDQUFDO0FBQzJDO0FBQzFHQyxrSEFBTyxDQUFDQyxjQUFjLENBQUNILE1BQU0sQ0FBQztBQUM5QixJQUFNSSxJQUFJLEdBQUdILG1CQUFPLENBQUMsdUVBQWEsQ0FBQztBQUNuQyxJQUFNSSx3QkFBd0IsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUM7RUFDeENDLFdBQVcsRUFBRTtJQUNUQyxhQUFhLEVBQUUsbUNBQW1DO0lBQ2xEQyxZQUFZLEVBQUU7RUFDbEIsQ0FBQztFQUNEQyxjQUFjLEVBQUU7QUFDcEIsQ0FBQyxDQUFDO0FBRU0sU0FBU0MsY0FBYyxDQUFDQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUEyQjtFQUFBLElBQTFCQyxFQUFFLHVFQUFDLElBQUk7RUFBQSxJQUFDQyxRQUFRLHVFQUFHLEtBQUs7RUFDaEZDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsTUFBTSxFQUFFO0VBQzFCQyxNQUFNLENBQUNDLElBQUksQ0FBQ04sTUFBTSxDQUFDTyxVQUFVLEVBQUUsVUFBVUMsQ0FBQyxFQUFFQyxHQUFHLEVBQUU7SUFDN0MsSUFBSUMsVUFBVSxHQUFHLEVBQUU7SUFDbkIsSUFBSUMsQ0FBQyxHQUFHRixHQUFHLENBQUNHLFlBQVk7SUFDeEIsSUFBR1YsUUFBUSxJQUFJLElBQUksRUFBQztNQUNoQlEsVUFBVSxHQUFHQyxDQUFDO0lBQ2xCLENBQUMsTUFBSTtNQUNMLElBQUlBLENBQUMsQ0FBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJRixDQUFDLENBQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNoRCxJQUFJQyxVQUFVLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQy9CLElBQUlDLEdBQUcsR0FBR0osQ0FBQyxDQUFDSyxLQUFLLENBQUMsSUFBSUMsTUFBTSxDQUFDSCxVQUFVLENBQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUlSLFVBQVUsR0FBR0ssR0FBRyxDQUFDLENBQUMsQ0FBQztNQUMzQjtNQUNBLElBQUlKLENBQUMsQ0FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ3pCLElBQUlFLEdBQUcsR0FBR0osQ0FBQyxDQUFDSyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3RCLElBQUlOLFVBQVUsR0FBR0ssR0FBRyxDQUFDLENBQUMsQ0FBQztNQUMzQjtJQUNKO0lBQ0k7O0lBRVI7SUFDUSxJQUFJLENBQUNWLE1BQU0sQ0FBQyxHQUFHLEdBQUdOLFNBQVMsR0FBRyxHQUFHLEdBQUdXLFVBQVUsQ0FBQyxDQUFDUyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ3hEVCxVQUFVLEdBQUdBLFVBQVUsR0FBRyxPQUFPO0lBQ3JDO0lBQ0EsSUFBR1QsRUFBRSxFQUFDO01BQ0ZTLFVBQVUsR0FBR1QsRUFBRTtJQUNuQjtJQUNBbUIsT0FBTyxDQUFDQyxHQUFHLENBQUNYLFVBQVUsQ0FBQztJQUN2QixJQUFJQSxVQUFVLElBQUksRUFBRSxFQUFFO01BQ2xCVSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxHQUFHLEdBQUd0QixTQUFTLEdBQUcsR0FBRyxHQUFHVyxVQUFVLENBQUM7TUFDL0NaLFFBQVEsQ0FBQ3dCLElBQUksQ0FBQyxHQUFHLEdBQUd2QixTQUFTLEdBQUcsR0FBRyxHQUFHVyxVQUFVLENBQUMsQ0FBQ2EsTUFBTSxFQUFFLENBQUNDLE1BQU0sQ0FBRSw4TUFBOE0sR0FBR2YsR0FBRyxDQUFDZ0IsS0FBSyxHQUFHLHVCQUF1QixDQUFFO0lBQzdUO0VBQ0osQ0FBQyxDQUFDO0FBQ047QUFHUSxTQUFTQyx1QkFBdUIsQ0FBQzVCLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQTJCO0VBQUEsSUFBMUJDLEVBQUUsdUVBQUMsSUFBSTtFQUFBLElBQUNDLFFBQVEsdUVBQUcsS0FBSztFQUVqRkMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxNQUFNLEVBQUU7RUFDMUJELENBQUMsQ0FBQyxHQUFHLEdBQUNMLFFBQVEsQ0FBQyxDQUFDeUIsTUFBTSxFQUFFLENBQUNDLE1BQU0sQ0FBRSw4TUFBOE0sR0FBR3hCLE1BQU0sR0FBRyx1QkFBdUIsQ0FBRTtBQUVoUyxDOzs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFBQyxDQUFDLFVBQVMyQixPQUFPLEVBQUU7RUFDbEIsWUFBWTs7RUFDWixJQUFJLElBQTBDLEVBQUU7SUFDOUM7SUFDQUMsaUNBQU8sQ0FBQyx1R0FBa0IsRUFBRSx5R0FBbUIsQ0FBQyxvQ0FBRUQsT0FBTztBQUFBO0FBQUE7QUFBQSxvR0FBQztFQUM1RCxDQUFDLE1BQU0sRUFHTjtBQUNILENBQUMsRUFBRSxVQUFTeEIsQ0FBQyxFQUFFMEIsT0FBTyxFQUFFO0VBQ3RCLFlBQVk7O0VBRVoxQixDQUFDLENBQUMyQixNQUFNLENBQUNELE9BQU8sQ0FBQ0UsU0FBUyxDQUFDQyxPQUFPLEVBQUU7SUFDbEM7SUFDQUMsaUJBQWlCLEVBQUUsZUFBZTtJQUNsQztJQUNBQyxpQkFBaUIsRUFBRSxlQUFlO0lBQ2xDO0lBQ0FDLGlCQUFpQixFQUFFLGVBQWU7SUFDbEM7SUFDQUMsbUJBQW1CLEVBQUUsUUFBUTtJQUM3QjtJQUNBQyxvQkFBb0IsRUFBRTtFQUN4QixDQUFDLENBQUM7RUFFRixJQUFJQyxZQUFXLEdBQUdULE9BQU8sQ0FBQ0UsU0FBUyxDQUFDTyxXQUFXO0VBRS9DbkMsQ0FBQyxDQUFDMkIsTUFBTSxDQUFDRCxPQUFPLENBQUNFLFNBQVMsRUFBRTtJQUMxQk8sV0FBVyxFQUFFLHFCQUFTQyxLQUFLLEVBQUU7TUFDM0JELFlBQVcsQ0FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRUQsS0FBSyxDQUFDO01BQzdCLElBQUksSUFBSSxDQUFDRSxZQUFZLEVBQUU7UUFDckIsSUFBSSxDQUFDQSxZQUFZLENBQUNDLEtBQUssRUFBRTtNQUMzQjtJQUNGLENBQUM7SUFFREMsWUFBWSxFQUFFLHNCQUFTQyxHQUFHLEVBQUVDLFFBQVEsRUFBRUMsY0FBYyxFQUFFO01BQ3BELElBQUlDLElBQUksR0FBRyxJQUFJO01BQ2YsSUFBSWYsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTztNQUMxQixJQUFJZ0Isa0JBQWtCLEdBQUcsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0MsU0FBUyxDQUFDLEtBQUssQ0FBQztNQUMvRCxJQUFJQyxjQUFjLEdBQUdoRCxDQUFDLENBQUM2QyxrQkFBa0IsQ0FBQztNQUMxQyxJQUFJSSxTQUFTLEdBQUcsQ0FDZDtRQUNFQyxJQUFJLEVBQUUsT0FBTztRQUNiQyxNQUFNLEVBQUVOO01BQ1YsQ0FBQyxDQUNGO01BQ0QsSUFBSU8sS0FBSyxHQUFHVCxjQUFjLElBQUlVLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztNQUM3RCxJQUFJQyxHQUFHLEdBQUcsSUFBSSxDQUFDQyxlQUFlLENBQUNmLEdBQUcsRUFBRVosT0FBTyxDQUFDNEIsV0FBVyxDQUFDO01BQ3hELElBQUlQLElBQUksR0FBRyxJQUFJLENBQUNNLGVBQWUsQ0FBQ2YsR0FBRyxFQUFFWixPQUFPLENBQUM2QixZQUFZLENBQUM7TUFDMUQsSUFBSXBDLEtBQUssR0FBRyxJQUFJLENBQUNrQyxlQUFlLENBQUNmLEdBQUcsRUFBRVosT0FBTyxDQUFDOEIsYUFBYSxDQUFDO01BQzVELElBQUlDLE9BQU8sR0FDVCxJQUFJLENBQUNKLGVBQWUsQ0FBQ2YsR0FBRyxFQUFFLElBQUksQ0FBQ1osT0FBTyxDQUFDZ0MsZUFBZSxDQUFDLElBQUl2QyxLQUFLO01BQ2xFLElBQUl3QyxTQUFTLEdBQUcsSUFBSSxDQUFDTixlQUFlLENBQUNmLEdBQUcsRUFBRVosT0FBTyxDQUFDSSxtQkFBbUIsQ0FBQztNQUN0RSxJQUFJOEIsV0FBVztNQUNmLElBQUlDLE9BQU8sR0FBRyxJQUFJLENBQUNSLGVBQWUsQ0FBQ2YsR0FBRyxFQUFFWixPQUFPLENBQUNLLG9CQUFvQixDQUFDO01BQ3JFLElBQUkrQixNQUFNO01BQ1YsSUFBSUMsZ0JBQWdCO01BQ3BCLElBQUlDLFNBQVM7TUFDYixJQUFJQyxXQUFXO01BQ2ZwQixjQUFjLENBQUNxQixRQUFRLENBQUN4QyxPQUFPLENBQUNDLGlCQUFpQixDQUFDO01BQ2xELElBQUlSLEtBQUssRUFBRTtRQUNUdUIsa0JBQWtCLENBQUN2QixLQUFLLEdBQUdBLEtBQUs7TUFDbEM7TUFDQSxJQUFJOEIsS0FBSyxDQUFDa0IsV0FBVyxFQUFFO1FBQ3JCLElBQUlmLEdBQUcsSUFBSUwsSUFBSSxJQUFJRSxLQUFLLENBQUNrQixXQUFXLENBQUNwQixJQUFJLENBQUMsRUFBRTtVQUMxQ0UsS0FBSyxDQUFDbUIsR0FBRyxHQUFHaEIsR0FBRztRQUNqQixDQUFDLE1BQU0sSUFBSVMsT0FBTyxFQUFFO1VBQ2xCLE9BQU9BLE9BQU8sQ0FBQ2hELE1BQU0sRUFBRTtZQUNyQmlELE1BQU0sR0FBR0QsT0FBTyxDQUFDUSxLQUFLLEVBQUU7WUFDeEJqQixHQUFHLEdBQUcsSUFBSSxDQUFDQyxlQUFlLENBQUNTLE1BQU0sRUFBRXBDLE9BQU8sQ0FBQzRCLFdBQVcsQ0FBQztZQUN2RFAsSUFBSSxHQUFHLElBQUksQ0FBQ00sZUFBZSxDQUFDUyxNQUFNLEVBQUVwQyxPQUFPLENBQUM2QixZQUFZLENBQUM7WUFDekQsSUFBSUgsR0FBRyxJQUFJTCxJQUFJLElBQUlFLEtBQUssQ0FBQ2tCLFdBQVcsQ0FBQ3BCLElBQUksQ0FBQyxFQUFFO2NBQzFDRSxLQUFLLENBQUNtQixHQUFHLEdBQUdoQixHQUFHO2NBQ2Y7WUFDRjtVQUNGO1FBQ0Y7TUFDRjtNQUNBLElBQUlPLFNBQVMsRUFBRTtRQUNiVixLQUFLLENBQUNxQixNQUFNLEdBQUdYLFNBQVM7UUFDeEJDLFdBQVcsR0FBRyxJQUFJLENBQUNXLGNBQWMsQ0FBQzNCLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDbEQvQyxDQUFDLENBQUMrRCxXQUFXLENBQUMsQ0FBQ00sUUFBUSxDQUFDeEMsT0FBTyxDQUFDOEMsV0FBVyxDQUFDO1FBQzVDWixXQUFXLENBQUNRLEdBQUcsR0FBR1QsU0FBUztRQUMzQkMsV0FBVyxDQUFDYSxTQUFTLEdBQUcsS0FBSztRQUM3QmIsV0FBVyxDQUFDYyxHQUFHLEdBQUdqQixPQUFPO1FBQ3pCZixrQkFBa0IsQ0FBQ2lDLFdBQVcsQ0FBQ2YsV0FBVyxDQUFDO01BQzdDO01BQ0FHLGdCQUFnQixHQUFHYixRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7TUFDOUNZLGdCQUFnQixDQUFDYSxZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztNQUNqRCxJQUFJLENBQUNwQyxjQUFjLEVBQUU7UUFDbkJ1QixnQkFBZ0IsQ0FBQ2EsWUFBWSxDQUFDLFVBQVUsRUFBRXpELEtBQUssQ0FBQztNQUNsRDtNQUNBNEMsZ0JBQWdCLENBQUNjLElBQUksR0FBR3pCLEdBQUc7TUFDM0IsSUFBSUgsS0FBSyxDQUFDbUIsR0FBRyxFQUFFO1FBQ2JuQixLQUFLLENBQUM2QixRQUFRLEdBQUcsSUFBSTtRQUNwQixDQUFDdEMsY0FBYyxJQUFJM0MsQ0FBQyxDQUFDb0QsS0FBSyxDQUFDLEVBQ3pCOEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXO1VBQ3RCdEMsSUFBSSxDQUFDdUMsVUFBVSxDQUFDekMsUUFBUSxFQUFFTyxTQUFTLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQ0RpQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7VUFDdEIsSUFBSTlCLEtBQUssQ0FBQ2dDLE9BQU8sRUFBRTtVQUNuQmpCLFNBQVMsR0FBRyxLQUFLO1VBQ2pCbkIsY0FBYyxDQUNYcUMsV0FBVyxDQUFDekMsSUFBSSxDQUFDZixPQUFPLENBQUNFLGlCQUFpQixDQUFDLENBQzNDc0QsV0FBVyxDQUFDekMsSUFBSSxDQUFDZixPQUFPLENBQUNHLGlCQUFpQixDQUFDO1VBQzlDLElBQUlvQyxXQUFXLEVBQUU7WUFDZnhCLElBQUksQ0FBQzBDLFNBQVMsQ0FBQ2pCLFFBQVEsQ0FBQ3pCLElBQUksQ0FBQ2YsT0FBTyxDQUFDMEQsYUFBYSxDQUFDO1VBQ3JEO1VBQ0EsT0FBTzNDLElBQUksQ0FBQ04sWUFBWTtVQUN4QixJQUFJTSxJQUFJLENBQUM0QyxRQUFRLEVBQUU7WUFDakI1QyxJQUFJLENBQUM2QyxJQUFJLEVBQUU7VUFDYjtRQUNGLENBQUMsQ0FBQyxDQUNEUCxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVc7VUFDeEJmLFNBQVMsR0FBRyxLQUFLO1VBQ2pCbkIsY0FBYyxDQUNYcUMsV0FBVyxDQUFDekMsSUFBSSxDQUFDZixPQUFPLENBQUNFLGlCQUFpQixDQUFDLENBQzNDc0MsUUFBUSxDQUFDekIsSUFBSSxDQUFDZixPQUFPLENBQUNHLGlCQUFpQixDQUFDO1VBQzNDLElBQUlZLElBQUksQ0FBQzBDLFNBQVMsQ0FBQ0ksUUFBUSxDQUFDOUMsSUFBSSxDQUFDZixPQUFPLENBQUMwRCxhQUFhLENBQUMsRUFBRTtZQUN2RG5CLFdBQVcsR0FBRyxJQUFJO1lBQ2xCeEIsSUFBSSxDQUFDMEMsU0FBUyxDQUFDRCxXQUFXLENBQUN6QyxJQUFJLENBQUNmLE9BQU8sQ0FBQzBELGFBQWEsQ0FBQztVQUN4RCxDQUFDLE1BQU07WUFDTG5CLFdBQVcsR0FBRyxLQUFLO1VBQ3JCO1FBQ0YsQ0FBQyxDQUFDLENBQ0RjLEVBQUUsQ0FBQyxNQUFNLEVBQUUsWUFBVztVQUNyQlMsTUFBTSxDQUFDQyxZQUFZLENBQUNoRCxJQUFJLENBQUNpRCxPQUFPLENBQUM7VUFDakMxQixTQUFTLEdBQUcsSUFBSTtVQUNoQm5CLGNBQWMsQ0FBQ3FCLFFBQVEsQ0FBQ3pCLElBQUksQ0FBQ2YsT0FBTyxDQUFDRSxpQkFBaUIsQ0FBQztVQUN2RGEsSUFBSSxDQUFDTixZQUFZLEdBQUdjLEtBQUs7UUFDM0IsQ0FBQyxDQUFDO1FBQ0pwRCxDQUFDLENBQUNrRSxnQkFBZ0IsQ0FBQyxDQUFDZ0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTWSxLQUFLLEVBQUU7VUFDOUNsRCxJQUFJLENBQUNtRCxjQUFjLENBQUNELEtBQUssQ0FBQztVQUMxQixJQUFJM0IsU0FBUyxFQUFFO1lBQ2JmLEtBQUssQ0FBQ2IsS0FBSyxFQUFFO1VBQ2YsQ0FBQyxNQUFNO1lBQ0xhLEtBQUssQ0FBQ3FDLElBQUksRUFBRTtVQUNkO1FBQ0YsQ0FBQyxDQUFDO1FBQ0Y1QyxrQkFBa0IsQ0FBQ2lDLFdBQVcsQ0FDM0JuQyxjQUFjLElBQUlBLGNBQWMsQ0FBQ3FELE9BQU8sSUFBSzVDLEtBQUssQ0FDcEQ7TUFDSDtNQUNBUCxrQkFBa0IsQ0FBQ2lDLFdBQVcsQ0FBQ1osZ0JBQWdCLENBQUM7TUFDaEQsSUFBSSxDQUFDaUIsVUFBVSxDQUFDekMsUUFBUSxFQUFFLENBQ3hCO1FBQ0VRLElBQUksRUFBRSxNQUFNO1FBQ1pDLE1BQU0sRUFBRU47TUFDVixDQUFDLENBQ0YsQ0FBQztNQUNGLE9BQU9BLGtCQUFrQjtJQUMzQjtFQUNGLENBQUMsQ0FBQztFQUVGLE9BQU9uQixPQUFPO0FBQ2hCLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hLRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUFDLENBQUMsVUFBU0YsT0FBTyxFQUFFO0VBQ2xCLFlBQVk7O0VBQ1osSUFBSSxJQUEwQyxFQUFFO0lBQzlDO0lBQ0FDLGlDQUFPLENBQUMsdUdBQWtCLENBQUMsb0NBQUVELE9BQU87QUFBQTtBQUFBO0FBQUEsb0dBQUM7RUFDdkMsQ0FBQyxNQUFNLEVBSU47QUFDSCxDQUFDLEVBQUUsVUFBU3hCLENBQUMsRUFBRTtFQUNiLFlBQVk7O0VBRVo7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFLFNBQVMwQixPQUFPLENBQUN1RSxJQUFJLEVBQUVwRSxPQUFPLEVBQUU7SUFDOUIsSUFBSXdCLFFBQVEsQ0FBQzZDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxTQUFTLEtBQUtDLFNBQVMsRUFBRTtNQUMvQztNQUNBLE9BQU8sSUFBSTtJQUNiO0lBQ0EsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUN4RSxPQUFPLEtBQUtILE9BQU8sQ0FBQ0UsU0FBUyxDQUFDQyxPQUFPLEVBQUU7TUFDdkQ7TUFDQTtNQUNBLE9BQU8sSUFBSUgsT0FBTyxDQUFDdUUsSUFBSSxFQUFFcEUsT0FBTyxDQUFDO0lBQ25DO0lBQ0EsSUFBSSxDQUFDb0UsSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQ2pGLE1BQU0sRUFBRTtNQUN6QixJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUNkLCtEQUErRCxFQUMvRCtFLElBQUksQ0FDTDtNQUNEO0lBQ0Y7SUFDQSxJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNLLEdBQUcsR0FBR0wsSUFBSSxDQUFDakYsTUFBTTtJQUN0QixJQUFJLENBQUN1RixXQUFXLENBQUMxRSxPQUFPLENBQUM7SUFDekIsSUFBSSxDQUFDMkUsVUFBVSxFQUFFO0VBQ25CO0VBRUF4RyxDQUFDLENBQUMyQixNQUFNLENBQUNELE9BQU8sQ0FBQ0UsU0FBUyxFQUFFO0lBQzFCQyxPQUFPLEVBQUU7TUFDUDtNQUNBeUQsU0FBUyxFQUFFLGtCQUFrQjtNQUM3QjtNQUNBbUIsZUFBZSxFQUFFLEtBQUs7TUFDdEI7TUFDQUMsWUFBWSxFQUFFLElBQUk7TUFDbEI7TUFDQUMsWUFBWSxFQUFFLHlCQUF5QjtNQUN2QztNQUNBcEIsYUFBYSxFQUFFLDBCQUEwQjtNQUN6QztNQUNBcUIsV0FBVyxFQUFFLHdCQUF3QjtNQUNyQztNQUNBQyxhQUFhLEVBQUUsc0JBQXNCO01BQ3JDO01BQ0FDLGNBQWMsRUFBRSx1QkFBdUI7TUFDdkM7TUFDQUMsWUFBWSxFQUFFLHlCQUF5QjtNQUN2QztNQUNBQyxVQUFVLEVBQUUsT0FBTztNQUNuQjtNQUNBQyxpQkFBaUIsRUFBRSxlQUFlO01BQ2xDO01BQ0FDLGVBQWUsRUFBRSxhQUFhO01BQzlCO01BQ0FDLGlCQUFpQixFQUFFLGVBQWU7TUFDbEM7TUFDQXhDLFdBQVcsRUFBRSxRQUFRO01BQ3JCO01BQ0F5QyxTQUFTLEVBQUUsTUFBTTtNQUNqQjtNQUNBQyxTQUFTLEVBQUUsTUFBTTtNQUNqQjtNQUNBQyxVQUFVLEVBQUUsT0FBTztNQUNuQjtNQUNBQyxjQUFjLEVBQUUsWUFBWTtNQUM1QjtNQUNBN0QsWUFBWSxFQUFFLE1BQU07TUFDcEI7TUFDQUMsYUFBYSxFQUFFLE9BQU87TUFDdEI7TUFDQUUsZUFBZSxFQUFFLEtBQUs7TUFDdEI7TUFDQUosV0FBVyxFQUFFLE1BQU07TUFDbkI7TUFDQStELGNBQWMsRUFBRSxRQUFRO01BQ3hCO01BQ0E7TUFDQUMsaUJBQWlCLEVBQUUsSUFBSTtNQUN2QjtNQUNBO01BQ0FDLFdBQVcsRUFBRSxJQUFJO01BQ2pCO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQUMsYUFBYSxFQUFFLEtBQUs7TUFDcEI7TUFDQUMsc0JBQXNCLEVBQUUsSUFBSTtNQUM1QjtNQUNBQywwQkFBMEIsRUFBRSxJQUFJO01BQ2hDO01BQ0FDLHNCQUFzQixFQUFFLElBQUk7TUFDNUI7TUFDQUMsd0JBQXdCLEVBQUUsSUFBSTtNQUM5QjtNQUNBQyxhQUFhLEVBQUUsSUFBSTtNQUNuQjtNQUNBQyxpQkFBaUIsRUFBRSxJQUFJO01BQ3ZCO01BQ0FDLG9CQUFvQixFQUFFLElBQUk7TUFDMUI7TUFDQUMsa0JBQWtCLEVBQUUsSUFBSTtNQUN4QjtNQUNBQywwQkFBMEIsRUFBRSxLQUFLO01BQ2pDO01BQ0FDLGtCQUFrQixFQUFFLElBQUk7TUFDeEI7TUFDQUMsYUFBYSxFQUFFLElBQUk7TUFDbkI7TUFDQUMsUUFBUSxFQUFFLEtBQUs7TUFDZjtNQUNBO01BQ0FDLFVBQVUsRUFBRSxJQUFJO01BQ2hCO01BQ0FDLGNBQWMsRUFBRSxJQUFJO01BQ3BCO01BQ0FDLGNBQWMsRUFBRSxLQUFLO01BQ3JCO01BQ0FDLGlCQUFpQixFQUFFLElBQUk7TUFDdkI7TUFDQUMsa0JBQWtCLEVBQUUsS0FBSztNQUN6QjtNQUNBO01BQ0E7TUFDQXhHLEtBQUssRUFBRSxDQUFDO01BQ1I7TUFDQXlHLFlBQVksRUFBRSxDQUFDO01BQ2Y7TUFDQUMsZUFBZSxFQUFFLEdBQUc7TUFDcEI7TUFDQTtNQUNBQyx3QkFBd0IsRUFBRTFDLFNBQVM7TUFDbkM7TUFDQTtNQUNBUCxLQUFLLEVBQUVPLFNBQVM7TUFDaEI7TUFDQTtNQUNBMkMsTUFBTSxFQUFFM0MsU0FBUztNQUNqQjtNQUNBO01BQ0E7TUFDQTRDLFFBQVEsRUFBRTVDLFNBQVM7TUFDbkI7TUFDQTtNQUNBO01BQ0E2QyxPQUFPLEVBQUU3QyxTQUFTO01BQ2xCO01BQ0E7TUFDQTtNQUNBOEMsVUFBVSxFQUFFOUMsU0FBUztNQUNyQjtNQUNBO01BQ0E7TUFDQStDLGVBQWUsRUFBRS9DLFNBQVM7TUFDMUI7TUFDQTtNQUNBZ0QsT0FBTyxFQUFFaEQsU0FBUztNQUNsQjtNQUNBO01BQ0E7TUFDQWlELFFBQVEsRUFBRWpEO0lBQ1osQ0FBQztJQUVEa0QsZUFBZSxFQUFFO01BQ2ZsQixrQkFBa0IsRUFBRSxLQUFLO01BQ3pCVCxzQkFBc0IsRUFBRSxLQUFLO01BQzdCRSxzQkFBc0IsRUFBRSxLQUFLO01BQzdCQyx3QkFBd0IsRUFBRSxLQUFLO01BQy9CQyxhQUFhLEVBQUUsS0FBSztNQUNwQkMsaUJBQWlCLEVBQUUsS0FBSztNQUN4QkMsb0JBQW9CLEVBQUUsS0FBSztNQUMzQkksYUFBYSxFQUFFLEtBQUs7TUFDcEJJLGNBQWMsRUFBRTtJQUNsQixDQUFDO0lBRUR6SCxPQUFPLEVBQ0wwRSxNQUFNLENBQUMxRSxPQUFPLElBQUksT0FBTzBFLE1BQU0sQ0FBQzFFLE9BQU8sQ0FBQ0MsR0FBRyxLQUFLLFVBQVUsR0FDdER5RSxNQUFNLENBQUMxRSxPQUFPLEdBQ2Q7TUFBRUMsR0FBRyxFQUFFLGVBQVcsQ0FBQztJQUFFLENBQUM7SUFFNUI7SUFDQXNJLE9BQU8sRUFBRyxVQUFTeEQsT0FBTyxFQUFFO01BQzFCLElBQUl3RCxPQUFPLEdBQUc7UUFDWkMsS0FBSyxFQUNIOUQsTUFBTSxDQUFDK0QsWUFBWSxLQUFLckQsU0FBUyxJQUNoQ1YsTUFBTSxDQUFDZ0UsYUFBYSxJQUFJdEcsUUFBUSxZQUFZc0c7TUFDakQsQ0FBQztNQUNELElBQUlDLFdBQVcsR0FBRztRQUNoQkMsZ0JBQWdCLEVBQUU7VUFDaEJDLEdBQUcsRUFBRSxxQkFBcUI7VUFDMUJDLE1BQU0sRUFBRTtRQUNWLENBQUM7UUFDREMsYUFBYSxFQUFFO1VBQ2JGLEdBQUcsRUFBRSxlQUFlO1VBQ3BCQyxNQUFNLEVBQUU7UUFDVixDQUFDO1FBQ0RFLFdBQVcsRUFBRTtVQUNYSCxHQUFHLEVBQUUsZ0JBQWdCO1VBQ3JCQyxNQUFNLEVBQUU7UUFDVixDQUFDO1FBQ0RHLFVBQVUsRUFBRTtVQUNWSixHQUFHLEVBQUUsZUFBZTtVQUNwQkMsTUFBTSxFQUFFO1FBQ1Y7TUFDRixDQUFDO01BQ0QsSUFBSUksSUFBSTtNQUNSLEtBQUtBLElBQUksSUFBSVAsV0FBVyxFQUFFO1FBQ3hCLElBQ0VRLE1BQU0sQ0FBQ3hJLFNBQVMsQ0FBQ3lJLGNBQWMsQ0FBQ2hJLElBQUksQ0FBQ3VILFdBQVcsRUFBRU8sSUFBSSxDQUFDLElBQ3ZEbkUsT0FBTyxDQUFDRyxLQUFLLENBQUNnRSxJQUFJLENBQUMsS0FBSzlELFNBQVMsRUFDakM7VUFDQW1ELE9BQU8sQ0FBQ1UsVUFBVSxHQUFHTixXQUFXLENBQUNPLElBQUksQ0FBQztVQUN0Q1gsT0FBTyxDQUFDVSxVQUFVLENBQUNJLElBQUksR0FBR0gsSUFBSTtVQUM5QjtRQUNGO01BQ0Y7TUFDQTtBQUNOO0FBQ0E7TUFDTSxTQUFTSSxZQUFZLEdBQUc7UUFDdEIsSUFBSUwsVUFBVSxHQUFHVixPQUFPLENBQUNVLFVBQVU7UUFDbkMsSUFBSUMsSUFBSTtRQUNSLElBQUlLLFVBQVU7UUFDZG5ILFFBQVEsQ0FBQzZDLElBQUksQ0FBQ3BCLFdBQVcsQ0FBQ2tCLE9BQU8sQ0FBQztRQUNsQyxJQUFJa0UsVUFBVSxFQUFFO1VBQ2RDLElBQUksR0FBR0QsVUFBVSxDQUFDSSxJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVO1VBQ2hELElBQUl6RSxPQUFPLENBQUNHLEtBQUssQ0FBQ2dFLElBQUksQ0FBQyxLQUFLOUQsU0FBUyxFQUFFO1lBQ3JDTCxPQUFPLENBQUNHLEtBQUssQ0FBQ2dFLElBQUksQ0FBQyxHQUFHLGVBQWU7WUFDckNLLFVBQVUsR0FBRzdFLE1BQU0sQ0FDaEIrRSxnQkFBZ0IsQ0FBQzFFLE9BQU8sQ0FBQyxDQUN6QjJFLGdCQUFnQixDQUFDVCxVQUFVLENBQUNILE1BQU0sR0FBRyxXQUFXLENBQUM7WUFDcERQLE9BQU8sQ0FBQ29CLFNBQVMsR0FBRztjQUNsQmIsTUFBTSxFQUFFRyxVQUFVLENBQUNILE1BQU07Y0FDekJPLElBQUksRUFBRUgsSUFBSTtjQUNWVSxTQUFTLEVBQUUsSUFBSTtjQUNmTCxVQUFVLEVBQUUsQ0FBQyxDQUFDQSxVQUFVLElBQUlBLFVBQVUsS0FBSztZQUM3QyxDQUFDO1VBQ0g7UUFDRjtRQUNBLElBQUl4RSxPQUFPLENBQUNHLEtBQUssQ0FBQzJFLGNBQWMsS0FBS3pFLFNBQVMsRUFBRTtVQUM5Q21ELE9BQU8sQ0FBQ3NCLGNBQWMsR0FBRyxDQUFDLENBQUM7VUFDM0I5RSxPQUFPLENBQUNHLEtBQUssQ0FBQzJFLGNBQWMsR0FBRyxTQUFTO1VBQ3hDdEIsT0FBTyxDQUFDc0IsY0FBYyxDQUFDQyxPQUFPLEdBQzVCcEYsTUFBTSxDQUNIK0UsZ0JBQWdCLENBQUMxRSxPQUFPLENBQUMsQ0FDekIyRSxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLFNBQVM7VUFDdEQzRSxPQUFPLENBQUNHLEtBQUssQ0FBQzJFLGNBQWMsR0FBRyxPQUFPO1VBQ3RDdEIsT0FBTyxDQUFDc0IsY0FBYyxDQUFDRSxLQUFLLEdBQzFCckYsTUFBTSxDQUNIK0UsZ0JBQWdCLENBQUMxRSxPQUFPLENBQUMsQ0FDekIyRSxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLE9BQU87UUFDdEQ7UUFDQXRILFFBQVEsQ0FBQzZDLElBQUksQ0FBQytFLFdBQVcsQ0FBQ2pGLE9BQU8sQ0FBQztNQUNwQztNQUNBLElBQUkzQyxRQUFRLENBQUM2QyxJQUFJLEVBQUU7UUFDakJxRSxZQUFZLEVBQUU7TUFDaEIsQ0FBQyxNQUFNO1FBQ0x2SyxDQUFDLENBQUNxRCxRQUFRLENBQUMsQ0FBQzZCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRXFGLFlBQVksQ0FBQztNQUNsRDtNQUNBLE9BQU9mLE9BQU87TUFDZDtNQUNBO0lBQ0YsQ0FBQyxDQUFFbkcsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakM0SCxxQkFBcUIsRUFDbkJ2RixNQUFNLENBQUN1RixxQkFBcUIsSUFDNUJ2RixNQUFNLENBQUN3RiwyQkFBMkIsSUFDbEN4RixNQUFNLENBQUN5Rix3QkFBd0I7SUFFakNDLG9CQUFvQixFQUNsQjFGLE1BQU0sQ0FBQzBGLG9CQUFvQixJQUMzQjFGLE1BQU0sQ0FBQzJGLGlDQUFpQyxJQUN4QzNGLE1BQU0sQ0FBQzRGLDBCQUEwQixJQUNqQzVGLE1BQU0sQ0FBQzZGLHVCQUF1QjtJQUVoQ2hGLFVBQVUsRUFBRSxzQkFBVztNQUNyQixJQUFJLENBQUNpRixjQUFjLEVBQUU7TUFDckIsSUFBSSxJQUFJLENBQUNDLFVBQVUsRUFBRSxLQUFLLEtBQUssRUFBRTtRQUMvQixPQUFPLEtBQUs7TUFDZDtNQUNBLElBQUksQ0FBQ0Msa0JBQWtCLEVBQUU7TUFDekI7TUFDQSxJQUFJLENBQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDOUcsS0FBSyxDQUFDO01BQ3hCO01BQ0EsSUFBSSxDQUFDd0osZUFBZSxFQUFFO01BQ3RCO01BQ0EsSUFBSSxJQUFJLENBQUMvSixPQUFPLENBQUM2RyxjQUFjLEVBQUU7UUFDL0IsSUFBSSxDQUFDakQsSUFBSSxFQUFFO01BQ2I7SUFDRixDQUFDO0lBRURvRyxLQUFLLEVBQUUsZUFBU0MsRUFBRSxFQUFFQyxLQUFLLEVBQUU7TUFDekJwRyxNQUFNLENBQUNDLFlBQVksQ0FBQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztNQUNqQyxJQUFJekQsS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSztNQUN0QixJQUFJNEosU0FBUztNQUNiLElBQUlDLGdCQUFnQjtNQUNwQixJQUFJQyxJQUFJO01BQ1IsSUFBSTlKLEtBQUssS0FBSzBKLEVBQUUsSUFBSSxJQUFJLENBQUN4RixHQUFHLEtBQUssQ0FBQyxFQUFFO1FBQ2xDO01BQ0Y7TUFDQSxJQUFJLENBQUN5RixLQUFLLEVBQUU7UUFDVkEsS0FBSyxHQUFHLElBQUksQ0FBQ2xLLE9BQU8sQ0FBQ2lILGVBQWU7TUFDdEM7TUFDQSxJQUFJLElBQUksQ0FBQ1UsT0FBTyxDQUFDb0IsU0FBUyxFQUFFO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMvSSxPQUFPLENBQUMyRyxVQUFVLEVBQUU7VUFDNUJzRCxFQUFFLEdBQUcsSUFBSSxDQUFDSyxNQUFNLENBQUNMLEVBQUUsQ0FBQztRQUN0QjtRQUNBO1FBQ0FFLFNBQVMsR0FBR0ksSUFBSSxDQUFDQyxHQUFHLENBQUNqSyxLQUFLLEdBQUcwSixFQUFFLENBQUMsSUFBSTFKLEtBQUssR0FBRzBKLEVBQUUsQ0FBQztRQUMvQztRQUNBLElBQUksSUFBSSxDQUFDakssT0FBTyxDQUFDMkcsVUFBVSxFQUFFO1VBQzNCeUQsZ0JBQWdCLEdBQUdELFNBQVM7VUFDNUJBLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQ00sU0FBUyxDQUFDLElBQUksQ0FBQ0gsTUFBTSxDQUFDTCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ1MsVUFBVTtVQUM5RDtVQUNBO1VBQ0EsSUFBSVAsU0FBUyxLQUFLQyxnQkFBZ0IsRUFBRTtZQUNsQ0gsRUFBRSxHQUFHLENBQUNFLFNBQVMsR0FBRyxJQUFJLENBQUMxRixHQUFHLEdBQUd3RixFQUFFO1VBQ2pDO1FBQ0Y7UUFDQUksSUFBSSxHQUFHRSxJQUFJLENBQUNDLEdBQUcsQ0FBQ2pLLEtBQUssR0FBRzBKLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDL0I7UUFDQSxPQUFPSSxJQUFJLEVBQUU7VUFDWEEsSUFBSSxJQUFJLENBQUM7VUFDVCxJQUFJLENBQUNNLElBQUksQ0FDUCxJQUFJLENBQUNMLE1BQU0sQ0FBQyxDQUFDTCxFQUFFLEdBQUcxSixLQUFLLEdBQUcwSixFQUFFLEdBQUcxSixLQUFLLElBQUk4SixJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQ2pELElBQUksQ0FBQ0ssVUFBVSxHQUFHUCxTQUFTLEVBQzNCLENBQUMsQ0FDRjtRQUNIO1FBQ0FGLEVBQUUsR0FBRyxJQUFJLENBQUNLLE1BQU0sQ0FBQ0wsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQ1UsSUFBSSxDQUFDcEssS0FBSyxFQUFFLElBQUksQ0FBQ21LLFVBQVUsR0FBR1AsU0FBUyxFQUFFRCxLQUFLLENBQUM7UUFDcEQsSUFBSSxDQUFDUyxJQUFJLENBQUNWLEVBQUUsRUFBRSxDQUFDLEVBQUVDLEtBQUssQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQ2xLLE9BQU8sQ0FBQzJHLFVBQVUsRUFBRTtVQUMzQixJQUFJLENBQUNnRSxJQUFJLENBQ1AsSUFBSSxDQUFDTCxNQUFNLENBQUNMLEVBQUUsR0FBR0UsU0FBUyxDQUFDLEVBQzNCLEVBQUUsSUFBSSxDQUFDTyxVQUFVLEdBQUdQLFNBQVMsQ0FBQyxFQUM5QixDQUFDLENBQ0Y7UUFDSDtNQUNGLENBQUMsTUFBTTtRQUNMRixFQUFFLEdBQUcsSUFBSSxDQUFDSyxNQUFNLENBQUNMLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUNXLE9BQU8sQ0FBQ3JLLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQ21LLFVBQVUsRUFBRVQsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDUyxVQUFVLEVBQUVSLEtBQUssQ0FBQztNQUN0RTtNQUNBLElBQUksQ0FBQzdDLE9BQU8sQ0FBQzRDLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRURZLFFBQVEsRUFBRSxvQkFBVztNQUNuQixPQUFPLElBQUksQ0FBQ3RLLEtBQUs7SUFDbkIsQ0FBQztJQUVEdUssU0FBUyxFQUFFLHFCQUFXO01BQ3BCLE9BQU8sSUFBSSxDQUFDckcsR0FBRztJQUNqQixDQUFDO0lBRURzRyxJQUFJLEVBQUUsZ0JBQVc7TUFDZixJQUFJLElBQUksQ0FBQy9LLE9BQU8sQ0FBQzJHLFVBQVUsSUFBSSxJQUFJLENBQUNwRyxLQUFLLEVBQUU7UUFDekMsSUFBSSxDQUFDeUosS0FBSyxDQUFDLElBQUksQ0FBQ3pKLEtBQUssR0FBRyxDQUFDLENBQUM7TUFDNUI7SUFDRixDQUFDO0lBRUR5SyxJQUFJLEVBQUUsZ0JBQVc7TUFDZixJQUFJLElBQUksQ0FBQ2hMLE9BQU8sQ0FBQzJHLFVBQVUsSUFBSSxJQUFJLENBQUNwRyxLQUFLLEdBQUcsSUFBSSxDQUFDa0UsR0FBRyxHQUFHLENBQUMsRUFBRTtRQUN4RCxJQUFJLENBQUN1RixLQUFLLENBQUMsSUFBSSxDQUFDekosS0FBSyxHQUFHLENBQUMsQ0FBQztNQUM1QjtJQUNGLENBQUM7SUFFRHFELElBQUksRUFBRSxjQUFTcUgsSUFBSSxFQUFFO01BQ25CLElBQUlsSyxJQUFJLEdBQUcsSUFBSTtNQUNmLElBQUltSyxTQUFTLEdBQ1gsSUFBSSxDQUFDM0ssS0FBSyxJQUFJLElBQUksQ0FBQ1AsT0FBTyxDQUFDK0csa0JBQWtCLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUNuRWpELE1BQU0sQ0FBQ0MsWUFBWSxDQUFDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO01BQ2pDLElBQUksQ0FBQ0wsUUFBUSxHQUFHc0gsSUFBSSxJQUFJLElBQUksQ0FBQ2pMLE9BQU8sQ0FBQzhHLGlCQUFpQjtNQUN0RCxJQUFJLElBQUksQ0FBQ3FFLFFBQVEsQ0FBQyxJQUFJLENBQUM1SyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDakMsSUFBSSxDQUFDeUQsT0FBTyxHQUFHLElBQUksQ0FBQ1YsVUFBVSxDQUMzQixDQUFDLElBQUksQ0FBQytGLHFCQUFxQixJQUFJLElBQUksQ0FBQ1csS0FBSyxJQUN4QyxVQUFTQyxFQUFFLEVBQUVDLEtBQUssRUFBRTtVQUNsQm5KLElBQUksQ0FBQ3FLLGdCQUFnQixHQUFHckssSUFBSSxDQUFDc0kscUJBQXFCLENBQUM3SSxJQUFJLENBQ3JEc0QsTUFBTSxFQUNOLFlBQVc7WUFDVC9DLElBQUksQ0FBQ2lKLEtBQUssQ0FBQ0MsRUFBRSxFQUFFQyxLQUFLLENBQUM7VUFDdkIsQ0FBQyxDQUNGO1FBQ0gsQ0FBQyxFQUNILENBQUNnQixTQUFTLEVBQUUsSUFBSSxDQUFDbEwsT0FBTyxDQUFDa0gsd0JBQXdCLENBQUMsRUFDbEQsSUFBSSxDQUFDdkQsUUFBUSxDQUNkO01BQ0g7TUFDQSxJQUFJLENBQUNGLFNBQVMsQ0FBQ2pCLFFBQVEsQ0FBQyxJQUFJLENBQUN4QyxPQUFPLENBQUNrRixZQUFZLENBQUM7SUFDcEQsQ0FBQztJQUVEeEUsS0FBSyxFQUFFLGlCQUFXO01BQ2hCb0QsTUFBTSxDQUFDQyxZQUFZLENBQUMsSUFBSSxDQUFDQyxPQUFPLENBQUM7TUFDakMsSUFBSSxDQUFDTCxRQUFRLEdBQUcsSUFBSTtNQUNwQixJQUFJLElBQUksQ0FBQzZGLG9CQUFvQixFQUFFO1FBQzdCLElBQUksQ0FBQ0Esb0JBQW9CLENBQUNoSixJQUFJLENBQUNzRCxNQUFNLEVBQUUsSUFBSSxDQUFDc0gsZ0JBQWdCLENBQUM7UUFDN0QsSUFBSSxDQUFDQSxnQkFBZ0IsR0FBRyxJQUFJO01BQzlCO01BQ0EsSUFBSSxDQUFDM0gsU0FBUyxDQUFDRCxXQUFXLENBQUMsSUFBSSxDQUFDeEQsT0FBTyxDQUFDa0YsWUFBWSxDQUFDO0lBQ3ZELENBQUM7SUFFRG1HLEdBQUcsRUFBRSxhQUFTakgsSUFBSSxFQUFFO01BQ2xCLElBQUk1RixDQUFDO01BQ0wsSUFBSSxDQUFDNEYsSUFBSSxDQUFDa0gsTUFBTSxFQUFFO1FBQ2hCO1FBQ0FsSCxJQUFJLEdBQUdtSCxLQUFLLENBQUN4TCxTQUFTLENBQUM2SSxLQUFLLENBQUNwSSxJQUFJLENBQUM0RCxJQUFJLENBQUM7TUFDekM7TUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDQSxJQUFJLENBQUNrSCxNQUFNLEVBQUU7UUFDckI7UUFDQSxJQUFJLENBQUNsSCxJQUFJLEdBQUdtSCxLQUFLLENBQUN4TCxTQUFTLENBQUM2SSxLQUFLLENBQUNwSSxJQUFJLENBQUMsSUFBSSxDQUFDNEQsSUFBSSxDQUFDO01BQ25EO01BQ0EsSUFBSSxDQUFDQSxJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJLENBQUNrSCxNQUFNLENBQUNsSCxJQUFJLENBQUM7TUFDbEMsSUFBSSxDQUFDSyxHQUFHLEdBQUcsSUFBSSxDQUFDTCxJQUFJLENBQUNqRixNQUFNO01BQzNCLElBQUksSUFBSSxDQUFDc0YsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUN6RSxPQUFPLENBQUMyRyxVQUFVLEtBQUssSUFBSSxFQUFFO1FBQ3BELElBQUksQ0FBQzNHLE9BQU8sQ0FBQzJHLFVBQVUsR0FBRyxJQUFJO1FBQzlCLElBQUksQ0FBQ2xELFNBQVMsQ0FBQ0QsV0FBVyxDQUFDLElBQUksQ0FBQ3hELE9BQU8sQ0FBQ2dGLGFBQWEsQ0FBQztNQUN4RDtNQUNBLElBQUksQ0FBQ3ZCLFNBQVMsQ0FDWEQsV0FBVyxDQUFDLElBQUksQ0FBQ3hELE9BQU8sQ0FBQ2lGLGNBQWMsQ0FBQyxDQUN4Q3pCLFdBQVcsQ0FBQyxJQUFJLENBQUN4RCxPQUFPLENBQUMrRSxXQUFXLENBQUM7TUFDeEMsS0FBS3ZHLENBQUMsR0FBRyxJQUFJLENBQUNpRyxHQUFHLEdBQUdMLElBQUksQ0FBQ2pGLE1BQU0sRUFBRVgsQ0FBQyxHQUFHLElBQUksQ0FBQ2lHLEdBQUcsRUFBRWpHLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDckQsSUFBSSxDQUFDZ04sUUFBUSxDQUFDaE4sQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQ2lOLGFBQWEsQ0FBQ2pOLENBQUMsQ0FBQztNQUN2QjtNQUNBLElBQUksQ0FBQ2lNLFNBQVMsQ0FBQ3RMLE1BQU0sR0FBRyxJQUFJLENBQUNzRixHQUFHO01BQ2hDLElBQUksQ0FBQ2lILFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVEQyxXQUFXLEVBQUUsdUJBQVc7TUFDdEIsSUFBSSxDQUFDL0csZUFBZSxDQUFDZ0gsS0FBSyxFQUFFO01BQzVCLElBQUksQ0FBQ0MsZUFBZSxFQUFFO01BQ3RCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7SUFDbEIsQ0FBQztJQUVEQyxXQUFXLEVBQUUsdUJBQVc7TUFDdEIsSUFBSS9MLE9BQU8sR0FBRyxJQUFJLENBQUNBLE9BQU87TUFDMUIsSUFBSSxDQUFDZ00scUJBQXFCLEVBQUU7TUFDNUI7TUFDQSxJQUFJLENBQUN0TCxLQUFLLEVBQUU7TUFDWixJQUFJLENBQUMrQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNhLEtBQUssQ0FBQzJILE9BQU8sR0FBRyxNQUFNO01BQ3hDLElBQUksQ0FBQ3hJLFNBQVMsQ0FDWEQsV0FBVyxDQUFDeEQsT0FBTyxDQUFDOEUsWUFBWSxDQUFDLENBQ2pDdEIsV0FBVyxDQUFDeEQsT0FBTyxDQUFDK0UsV0FBVyxDQUFDLENBQ2hDdkIsV0FBVyxDQUFDeEQsT0FBTyxDQUFDZ0YsYUFBYSxDQUFDLENBQ2xDeEIsV0FBVyxDQUFDeEQsT0FBTyxDQUFDaUYsY0FBYyxDQUFDO01BQ3RDLElBQUlqRixPQUFPLENBQUN3RyxrQkFBa0IsRUFBRTtRQUM5QmhGLFFBQVEsQ0FBQzZDLElBQUksQ0FBQ0MsS0FBSyxDQUFDNEgsUUFBUSxHQUFHLElBQUksQ0FBQ0MsaUJBQWlCO01BQ3ZEO01BQ0EsSUFBSSxJQUFJLENBQUNuTSxPQUFPLENBQUM2RixXQUFXLEVBQUU7UUFDNUIsSUFBSSxDQUFDOEYsV0FBVyxFQUFFO01BQ3BCO01BQ0EsSUFBSSxJQUFJLENBQUMzTCxPQUFPLENBQUN5SCxRQUFRLEVBQUU7UUFDekIsSUFBSSxDQUFDekgsT0FBTyxDQUFDeUgsUUFBUSxDQUFDakgsSUFBSSxDQUFDLElBQUksQ0FBQztNQUNsQztJQUNGLENBQUM7SUFFRDRMLEtBQUssRUFBRSxpQkFBVztNQUNoQixJQUFJckwsSUFBSSxHQUFHLElBQUk7TUFDZjtBQUNOO0FBQ0E7QUFDQTtBQUNBO01BQ00sU0FBU3NMLFlBQVksQ0FBQ3BJLEtBQUssRUFBRTtRQUMzQixJQUFJQSxLQUFLLENBQUMzQyxNQUFNLEtBQUtQLElBQUksQ0FBQzBDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUN0QzFDLElBQUksQ0FBQzBDLFNBQVMsQ0FBQzZJLEdBQUcsQ0FBQ3ZMLElBQUksQ0FBQzRHLE9BQU8sQ0FBQ1UsVUFBVSxDQUFDSixHQUFHLEVBQUVvRSxZQUFZLENBQUM7VUFDN0R0TCxJQUFJLENBQUNnTCxXQUFXLEVBQUU7UUFDcEI7TUFDRjtNQUNBLElBQUksSUFBSSxDQUFDL0wsT0FBTyxDQUFDd0gsT0FBTyxFQUFFO1FBQ3hCLElBQUksQ0FBQ3hILE9BQU8sQ0FBQ3dILE9BQU8sQ0FBQ2hILElBQUksQ0FBQyxJQUFJLENBQUM7TUFDakM7TUFDQSxJQUFJLElBQUksQ0FBQ21ILE9BQU8sQ0FBQ1UsVUFBVSxJQUFJLElBQUksQ0FBQ3JJLE9BQU8sQ0FBQzRGLGlCQUFpQixFQUFFO1FBQzdELElBQUksQ0FBQ25DLFNBQVMsQ0FBQ0osRUFBRSxDQUFDLElBQUksQ0FBQ3NFLE9BQU8sQ0FBQ1UsVUFBVSxDQUFDSixHQUFHLEVBQUVvRSxZQUFZLENBQUM7UUFDNUQsSUFBSSxDQUFDNUksU0FBUyxDQUFDRCxXQUFXLENBQUMsSUFBSSxDQUFDeEQsT0FBTyxDQUFDOEUsWUFBWSxDQUFDO01BQ3ZELENBQUMsTUFBTTtRQUNMLElBQUksQ0FBQ2lILFdBQVcsRUFBRTtNQUNwQjtJQUNGLENBQUM7SUFFRHpCLE1BQU0sRUFBRSxnQkFBUy9KLEtBQUssRUFBRTtNQUN0QjtNQUNBLE9BQU8sQ0FBQyxJQUFJLENBQUNrRSxHQUFHLEdBQUlsRSxLQUFLLEdBQUcsSUFBSSxDQUFDa0UsR0FBSSxJQUFJLElBQUksQ0FBQ0EsR0FBRztJQUNuRCxDQUFDO0lBRURrRyxJQUFJLEVBQUUsY0FBU3BLLEtBQUssRUFBRWdNLElBQUksRUFBRXJDLEtBQUssRUFBRTtNQUNqQyxJQUFJLENBQUNzQyxVQUFVLENBQUNqTSxLQUFLLEVBQUVnTSxJQUFJLEVBQUVyQyxLQUFLLENBQUM7TUFDbkMsSUFBSSxDQUFDTyxTQUFTLENBQUNsSyxLQUFLLENBQUMsR0FBR2dNLElBQUk7SUFDOUIsQ0FBQztJQUVEdkQsU0FBUyxFQUFFLG1CQUFTekksS0FBSyxFQUFFNUIsQ0FBQyxFQUFFOE4sQ0FBQyxFQUFFdkMsS0FBSyxFQUFFO01BQ3RDLElBQUksQ0FBQyxJQUFJLENBQUM0QixNQUFNLENBQUN2TCxLQUFLLENBQUMsRUFBRTtNQUN6QixJQUFJK0QsS0FBSyxHQUFHLElBQUksQ0FBQ3dILE1BQU0sQ0FBQ3ZMLEtBQUssQ0FBQyxDQUFDK0QsS0FBSztNQUNwQyxJQUFJK0QsVUFBVSxHQUFHLElBQUksQ0FBQ1YsT0FBTyxDQUFDVSxVQUFVO01BQ3hDLElBQUlVLFNBQVMsR0FBRyxJQUFJLENBQUNwQixPQUFPLENBQUNvQixTQUFTO01BQ3RDekUsS0FBSyxDQUFDK0QsVUFBVSxDQUFDSSxJQUFJLEdBQUcsVUFBVSxDQUFDLEdBQUd5QixLQUFLLEdBQUcsSUFBSTtNQUNsRDVGLEtBQUssQ0FBQ3lFLFNBQVMsQ0FBQ04sSUFBSSxDQUFDLEdBQ25CLFlBQVksR0FDWjlKLENBQUMsR0FDRCxNQUFNLEdBQ044TixDQUFDLEdBQ0QsS0FBSyxJQUNKMUQsU0FBUyxDQUFDSixVQUFVLEdBQUcsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRDZELFVBQVUsRUFBRSxvQkFBU2pNLEtBQUssRUFBRTVCLENBQUMsRUFBRXVMLEtBQUssRUFBRTtNQUNwQyxJQUFJLENBQUNsQixTQUFTLENBQUN6SSxLQUFLLEVBQUU1QixDQUFDLEVBQUUsQ0FBQyxFQUFFdUwsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFFRHdDLFVBQVUsRUFBRSxvQkFBU25NLEtBQUssRUFBRWtNLENBQUMsRUFBRXZDLEtBQUssRUFBRTtNQUNwQyxJQUFJLENBQUNsQixTQUFTLENBQUN6SSxLQUFLLEVBQUUsQ0FBQyxFQUFFa00sQ0FBQyxFQUFFdkMsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFFRFUsT0FBTyxFQUFFLGlCQUFTK0IsSUFBSSxFQUFFMUMsRUFBRSxFQUFFQyxLQUFLLEVBQUU7TUFDakMsSUFBSSxDQUFDQSxLQUFLLEVBQUU7UUFDVixJQUFJLENBQUN0RixlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUNOLEtBQUssQ0FBQ3NJLElBQUksR0FBRzNDLEVBQUUsR0FBRyxJQUFJO1FBQzlDO01BQ0Y7TUFDQSxJQUFJbEosSUFBSSxHQUFHLElBQUk7TUFDZixJQUFJOEwsS0FBSyxHQUFHLElBQUlDLElBQUksRUFBRSxDQUFDQyxPQUFPLEVBQUU7TUFDaEMsSUFBSUMsS0FBSyxHQUFHbEosTUFBTSxDQUFDbUosV0FBVyxDQUFDLFlBQVc7UUFDeEMsSUFBSUMsUUFBUSxHQUFHLElBQUlKLElBQUksRUFBRSxDQUFDQyxPQUFPLEVBQUUsR0FBR0YsS0FBSztRQUMzQyxJQUFJSyxRQUFRLEdBQUdoRCxLQUFLLEVBQUU7VUFDcEJuSixJQUFJLENBQUM2RCxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUNOLEtBQUssQ0FBQ3NJLElBQUksR0FBRzNDLEVBQUUsR0FBRyxJQUFJO1VBQzlDbEosSUFBSSxDQUFDZ0osZUFBZSxFQUFFO1VBQ3RCakcsTUFBTSxDQUFDcUosYUFBYSxDQUFDSCxLQUFLLENBQUM7VUFDM0I7UUFDRjtRQUNBak0sSUFBSSxDQUFDNkQsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDTixLQUFLLENBQUNzSSxJQUFJLEdBQ2hDLENBQUMzQyxFQUFFLEdBQUcwQyxJQUFJLEtBQUtwQyxJQUFJLENBQUM2QyxLQUFLLENBQUVGLFFBQVEsR0FBR2hELEtBQUssR0FBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FDMUR5QyxJQUFJLEdBQ0osSUFBSTtNQUNSLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUR6SSxjQUFjLEVBQUUsd0JBQVNELEtBQUssRUFBRTtNQUM5QixJQUFJQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtRQUN4QkQsS0FBSyxDQUFDQyxjQUFjLEVBQUU7TUFDeEIsQ0FBQyxNQUFNO1FBQ0xELEtBQUssQ0FBQ29KLFdBQVcsR0FBRyxLQUFLO01BQzNCO0lBQ0YsQ0FBQztJQUVEQyxlQUFlLEVBQUUseUJBQVNySixLQUFLLEVBQUU7TUFDL0IsSUFBSUEsS0FBSyxDQUFDcUosZUFBZSxFQUFFO1FBQ3pCckosS0FBSyxDQUFDcUosZUFBZSxFQUFFO01BQ3pCLENBQUMsTUFBTTtRQUNMckosS0FBSyxDQUFDc0osWUFBWSxHQUFHLElBQUk7TUFDM0I7SUFDRixDQUFDO0lBRURDLFFBQVEsRUFBRSxvQkFBVztNQUNuQixJQUFJLENBQUM5QixVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCtCLFdBQVcsRUFBRSxxQkFBU3hKLEtBQUssRUFBRTtNQUMzQjtNQUNBO01BQ0EsSUFDRUEsS0FBSyxDQUFDeUosS0FBSyxJQUNYekosS0FBSyxDQUFDeUosS0FBSyxLQUFLLENBQUMsSUFDakJ6SixLQUFLLENBQUMzQyxNQUFNLENBQUNxTSxRQUFRLEtBQUssT0FBTyxJQUNqQzFKLEtBQUssQ0FBQzNDLE1BQU0sQ0FBQ3FNLFFBQVEsS0FBSyxPQUFPLEVBQ2pDO1FBQ0E7UUFDQTtRQUNBMUosS0FBSyxDQUFDQyxjQUFjLEVBQUU7UUFDckIsQ0FBQ0QsS0FBSyxDQUFDMkosYUFBYSxJQUFJM0osS0FBSyxFQUFFNEosT0FBTyxHQUFHLENBQ3hDO1VBQ0VDLEtBQUssRUFBRTdKLEtBQUssQ0FBQzZKLEtBQUs7VUFDbEJDLEtBQUssRUFBRTlKLEtBQUssQ0FBQzhKO1FBQ2YsQ0FBQyxDQUNGO1FBQ0QsSUFBSSxDQUFDbEcsWUFBWSxDQUFDNUQsS0FBSyxDQUFDO01BQzFCO0lBQ0YsQ0FBQztJQUVEK0osV0FBVyxFQUFFLHFCQUFTL0osS0FBSyxFQUFFO01BQzNCLElBQUksSUFBSSxDQUFDZ0ssVUFBVSxFQUFFO1FBQ25CO1FBQUMsQ0FBQ2hLLEtBQUssQ0FBQzJKLGFBQWEsSUFBSTNKLEtBQUssRUFBRTRKLE9BQU8sR0FBRyxDQUN4QztVQUNFQyxLQUFLLEVBQUU3SixLQUFLLENBQUM2SixLQUFLO1VBQ2xCQyxLQUFLLEVBQUU5SixLQUFLLENBQUM4SjtRQUNmLENBQUMsQ0FDRjtRQUNELElBQUksQ0FBQ0csV0FBVyxDQUFDakssS0FBSyxDQUFDO01BQ3pCO0lBQ0YsQ0FBQztJQUVEa0ssU0FBUyxFQUFFLG1CQUFTbEssS0FBSyxFQUFFO01BQ3pCLElBQUksSUFBSSxDQUFDZ0ssVUFBVSxFQUFFO1FBQ25CLElBQUksQ0FBQ0csVUFBVSxDQUFDbkssS0FBSyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDZ0ssVUFBVTtNQUN4QjtJQUNGLENBQUM7SUFFREksVUFBVSxFQUFFLG9CQUFTcEssS0FBSyxFQUFFO01BQzFCLElBQUksSUFBSSxDQUFDZ0ssVUFBVSxFQUFFO1FBQ25CLElBQUkzTSxNQUFNLEdBQUcyQyxLQUFLLENBQUMzQyxNQUFNO1FBQ3pCLElBQUlnTixPQUFPLEdBQUdySyxLQUFLLENBQUNzSyxhQUFhO1FBQ2pDLElBQUksQ0FBQ0QsT0FBTyxJQUFLQSxPQUFPLEtBQUtoTixNQUFNLElBQUksQ0FBQ25ELENBQUMsQ0FBQ3FRLFFBQVEsQ0FBQ2xOLE1BQU0sRUFBRWdOLE9BQU8sQ0FBRSxFQUFFO1VBQ3BFLElBQUksQ0FBQ0gsU0FBUyxDQUFDbEssS0FBSyxDQUFDO1FBQ3ZCO01BQ0Y7SUFDRixDQUFDO0lBRUQ0RCxZQUFZLEVBQUUsc0JBQVM1RCxLQUFLLEVBQUU7TUFDNUIsSUFBSSxJQUFJLENBQUNqRSxPQUFPLENBQUN1RywwQkFBMEIsRUFBRTtRQUMzQyxJQUFJLENBQUMrRyxlQUFlLENBQUNySixLQUFLLENBQUM7TUFDN0I7TUFDQTtNQUNBO01BQ0EsSUFBSTRKLE9BQU8sR0FBRyxDQUFDNUosS0FBSyxDQUFDMkosYUFBYSxJQUFJM0osS0FBSyxFQUFFNEosT0FBTyxDQUFDLENBQUMsQ0FBQztNQUN2RCxJQUFJLENBQUNJLFVBQVUsR0FBRztRQUNoQjtRQUNBdFAsQ0FBQyxFQUFFa1AsT0FBTyxDQUFDQyxLQUFLO1FBQ2hCckIsQ0FBQyxFQUFFb0IsT0FBTyxDQUFDRSxLQUFLO1FBQ2hCO1FBQ0E5QyxJQUFJLEVBQUU2QixJQUFJLENBQUMyQixHQUFHO01BQ2hCLENBQUM7TUFDRDtNQUNBLElBQUksQ0FBQ0MsV0FBVyxHQUFHbEssU0FBUztNQUM1QjtNQUNBLElBQUksQ0FBQ21LLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVEVCxXQUFXLEVBQUUscUJBQVNqSyxLQUFLLEVBQUU7TUFDM0IsSUFBSSxJQUFJLENBQUNqRSxPQUFPLENBQUN1RywwQkFBMEIsRUFBRTtRQUMzQyxJQUFJLENBQUMrRyxlQUFlLENBQUNySixLQUFLLENBQUM7TUFDN0I7TUFDQTtNQUNBO01BQ0EsSUFBSTRKLE9BQU8sR0FBRyxDQUFDNUosS0FBSyxDQUFDMkosYUFBYSxJQUFJM0osS0FBSyxFQUFFNEosT0FBTyxDQUFDLENBQUMsQ0FBQztNQUN2RCxJQUFJZSxLQUFLLEdBQUcsQ0FBQzNLLEtBQUssQ0FBQzJKLGFBQWEsSUFBSTNKLEtBQUssRUFBRTJLLEtBQUs7TUFDaEQsSUFBSXJPLEtBQUssR0FBRyxJQUFJLENBQUNBLEtBQUs7TUFDdEIsSUFBSXNPLFdBQVc7TUFDZixJQUFJQyxPQUFPO01BQ1g7TUFDQSxJQUFJakIsT0FBTyxDQUFDMU8sTUFBTSxHQUFHLENBQUMsSUFBS3lQLEtBQUssSUFBSUEsS0FBSyxLQUFLLENBQUUsRUFBRTtRQUNoRDtNQUNGO01BQ0EsSUFBSSxJQUFJLENBQUM1TyxPQUFPLENBQUN5RyxhQUFhLEVBQUU7UUFDOUJ4QyxLQUFLLENBQUNDLGNBQWMsRUFBRTtNQUN4QjtNQUNBO01BQ0EsSUFBSSxDQUFDeUssVUFBVSxHQUFHO1FBQ2hCaFEsQ0FBQyxFQUFFa1AsT0FBTyxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDRyxVQUFVLENBQUN0UCxDQUFDO1FBQ3BDOE4sQ0FBQyxFQUFFb0IsT0FBTyxDQUFDRSxLQUFLLEdBQUcsSUFBSSxDQUFDRSxVQUFVLENBQUN4QjtNQUNyQyxDQUFDO01BQ0RvQyxXQUFXLEdBQUcsSUFBSSxDQUFDRixVQUFVLENBQUNoUSxDQUFDO01BQy9CO01BQ0EsSUFBSSxJQUFJLENBQUMrUCxXQUFXLEtBQUtsSyxTQUFTLEVBQUU7UUFDbEMsSUFBSSxDQUFDa0ssV0FBVyxHQUNkLElBQUksQ0FBQ0EsV0FBVyxJQUNoQm5FLElBQUksQ0FBQ0MsR0FBRyxDQUFDcUUsV0FBVyxDQUFDLEdBQUd0RSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNtRSxVQUFVLENBQUNsQyxDQUFDLENBQUM7TUFDdkQ7TUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDaUMsV0FBVyxFQUFFO1FBQ3JCO1FBQ0F6SyxLQUFLLENBQUNDLGNBQWMsRUFBRTtRQUN0QjtRQUNBSixNQUFNLENBQUNDLFlBQVksQ0FBQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQ2hFLE9BQU8sQ0FBQzJHLFVBQVUsRUFBRTtVQUMzQm1JLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQ3hFLE1BQU0sQ0FBQy9KLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRUEsS0FBSyxFQUFFLElBQUksQ0FBQytKLE1BQU0sQ0FBQy9KLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRSxDQUFDLE1BQU07VUFDTDtVQUNBO1VBQ0EsSUFBSSxDQUFDb08sVUFBVSxDQUFDaFEsQ0FBQyxHQUFHa1EsV0FBVyxHQUM3QkEsV0FBVyxJQUNULENBQUN0TyxLQUFLLElBQUlzTyxXQUFXLEdBQUcsQ0FBQyxJQUMxQnRPLEtBQUssS0FBSyxJQUFJLENBQUNrRSxHQUFHLEdBQUcsQ0FBQyxJQUFJb0ssV0FBVyxHQUFHLENBQUUsR0FDdkN0RSxJQUFJLENBQUNDLEdBQUcsQ0FBQ3FFLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQ25FLFVBQVUsR0FBRyxDQUFDLEdBQzNDLENBQUMsQ0FBQztVQUNSb0UsT0FBTyxHQUFHLENBQUN2TyxLQUFLLENBQUM7VUFDakIsSUFBSUEsS0FBSyxFQUFFO1lBQ1R1TyxPQUFPLENBQUNDLElBQUksQ0FBQ3hPLEtBQUssR0FBRyxDQUFDLENBQUM7VUFDekI7VUFDQSxJQUFJQSxLQUFLLEdBQUcsSUFBSSxDQUFDa0UsR0FBRyxHQUFHLENBQUMsRUFBRTtZQUN4QnFLLE9BQU8sQ0FBQ0UsT0FBTyxDQUFDek8sS0FBSyxHQUFHLENBQUMsQ0FBQztVQUM1QjtRQUNGO1FBQ0EsT0FBT3VPLE9BQU8sQ0FBQzNQLE1BQU0sRUFBRTtVQUNyQm9CLEtBQUssR0FBR3VPLE9BQU8sQ0FBQ0csR0FBRyxFQUFFO1VBQ3JCLElBQUksQ0FBQ3pDLFVBQVUsQ0FBQ2pNLEtBQUssRUFBRXNPLFdBQVcsR0FBRyxJQUFJLENBQUNwRSxTQUFTLENBQUNsSyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEU7TUFDRixDQUFDLE1BQU07UUFDTCxJQUFJLENBQUNtTSxVQUFVLENBQUNuTSxLQUFLLEVBQUUsSUFBSSxDQUFDb08sVUFBVSxDQUFDbEMsQ0FBQyxHQUFHLElBQUksQ0FBQ2hDLFNBQVMsQ0FBQ2xLLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUN0RTtJQUNGLENBQUM7SUFFRDZOLFVBQVUsRUFBRSxvQkFBU25LLEtBQUssRUFBRTtNQUMxQixJQUFJLElBQUksQ0FBQ2pFLE9BQU8sQ0FBQ3VHLDBCQUEwQixFQUFFO1FBQzNDLElBQUksQ0FBQytHLGVBQWUsQ0FBQ3JKLEtBQUssQ0FBQztNQUM3QjtNQUNBLElBQUkxRCxLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLO01BQ3RCLElBQUkySixLQUFLLEdBQUcsSUFBSSxDQUFDbEssT0FBTyxDQUFDaUgsZUFBZTtNQUN4QyxJQUFJeUQsVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVTtNQUNoQyxJQUFJd0UsZUFBZSxHQUFHQyxNQUFNLENBQUNyQyxJQUFJLENBQUMyQixHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUNSLFVBQVUsQ0FBQ2hELElBQUksQ0FBQyxHQUFHLEdBQUc7TUFDckU7TUFDQSxJQUFJbUUsWUFBWSxHQUNiRixlQUFlLElBQUkzRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNtRSxVQUFVLENBQUNoUSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQ3BENEwsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDbUUsVUFBVSxDQUFDaFEsQ0FBQyxDQUFDLEdBQUcrTCxVQUFVLEdBQUcsQ0FBQztNQUM5QztNQUNBLElBQUkyRSxZQUFZLEdBQ2IsQ0FBQzlPLEtBQUssSUFBSSxJQUFJLENBQUNvTyxVQUFVLENBQUNoUSxDQUFDLEdBQUcsQ0FBQyxJQUMvQjRCLEtBQUssS0FBSyxJQUFJLENBQUNrRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQ2tLLFVBQVUsQ0FBQ2hRLENBQUMsR0FBRyxDQUFFO01BQ25ELElBQUkyUSxZQUFZLEdBQ2QsQ0FBQ0YsWUFBWSxJQUNiLElBQUksQ0FBQ3BQLE9BQU8sQ0FBQ3FHLG9CQUFvQixLQUMvQjZJLGVBQWUsSUFBSTNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ21FLFVBQVUsQ0FBQ2xDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFDbkRsQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNtRSxVQUFVLENBQUNsQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM4QyxXQUFXLEdBQUcsQ0FBQyxDQUFDO01BQ3ZELElBQUlwRixTQUFTO01BQ2IsSUFBSXFGLFlBQVk7TUFDaEIsSUFBSUMsYUFBYTtNQUNqQixJQUFJQyxlQUFlO01BQ25CLElBQUlDLGdCQUFnQjtNQUNwQixJQUFJLElBQUksQ0FBQzNQLE9BQU8sQ0FBQzJHLFVBQVUsRUFBRTtRQUMzQjBJLFlBQVksR0FBRyxLQUFLO01BQ3RCO01BQ0E7TUFDQWxGLFNBQVMsR0FBRyxJQUFJLENBQUN3RSxVQUFVLENBQUNoUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7TUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQytQLFdBQVcsRUFBRTtRQUNyQixJQUFJVSxZQUFZLElBQUksQ0FBQ0MsWUFBWSxFQUFFO1VBQ2pDRyxZQUFZLEdBQUdqUCxLQUFLLEdBQUc0SixTQUFTO1VBQ2hDc0YsYUFBYSxHQUFHbFAsS0FBSyxHQUFHNEosU0FBUztVQUNqQ3VGLGVBQWUsR0FBR2hGLFVBQVUsR0FBR1AsU0FBUztVQUN4Q3dGLGdCQUFnQixHQUFHLENBQUNqRixVQUFVLEdBQUdQLFNBQVM7VUFDMUMsSUFBSSxJQUFJLENBQUNuSyxPQUFPLENBQUMyRyxVQUFVLEVBQUU7WUFDM0IsSUFBSSxDQUFDZ0UsSUFBSSxDQUFDLElBQUksQ0FBQ0wsTUFBTSxDQUFDa0YsWUFBWSxDQUFDLEVBQUVFLGVBQWUsRUFBRSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDL0UsSUFBSSxDQUFDLElBQUksQ0FBQ0wsTUFBTSxDQUFDL0osS0FBSyxHQUFHLENBQUMsR0FBRzRKLFNBQVMsQ0FBQyxFQUFFd0YsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1VBQ3BFLENBQUMsTUFBTSxJQUFJSCxZQUFZLElBQUksQ0FBQyxJQUFJQSxZQUFZLEdBQUcsSUFBSSxDQUFDL0ssR0FBRyxFQUFFO1lBQ3ZELElBQUksQ0FBQ2tHLElBQUksQ0FBQzZFLFlBQVksRUFBRUUsZUFBZSxFQUFFLENBQUMsQ0FBQztVQUM3QztVQUNBLElBQUksQ0FBQy9FLElBQUksQ0FBQ3BLLEtBQUssRUFBRSxJQUFJLENBQUNrSyxTQUFTLENBQUNsSyxLQUFLLENBQUMsR0FBR21QLGVBQWUsRUFBRXhGLEtBQUssQ0FBQztVQUNoRSxJQUFJLENBQUNTLElBQUksQ0FDUCxJQUFJLENBQUNMLE1BQU0sQ0FBQ21GLGFBQWEsQ0FBQyxFQUMxQixJQUFJLENBQUNoRixTQUFTLENBQUMsSUFBSSxDQUFDSCxNQUFNLENBQUNtRixhQUFhLENBQUMsQ0FBQyxHQUFHQyxlQUFlLEVBQzVEeEYsS0FBSyxDQUNOO1VBQ0QzSixLQUFLLEdBQUcsSUFBSSxDQUFDK0osTUFBTSxDQUFDbUYsYUFBYSxDQUFDO1VBQ2xDLElBQUksQ0FBQ3BJLE9BQU8sQ0FBQzlHLEtBQUssQ0FBQztRQUNyQixDQUFDLE1BQU07VUFDTDtVQUNBLElBQUksSUFBSSxDQUFDUCxPQUFPLENBQUMyRyxVQUFVLEVBQUU7WUFDM0IsSUFBSSxDQUFDZ0UsSUFBSSxDQUFDLElBQUksQ0FBQ0wsTUFBTSxDQUFDL0osS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUNtSyxVQUFVLEVBQUVSLEtBQUssQ0FBQztZQUNyRCxJQUFJLENBQUNTLElBQUksQ0FBQ3BLLEtBQUssRUFBRSxDQUFDLEVBQUUySixLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDUyxJQUFJLENBQUMsSUFBSSxDQUFDTCxNQUFNLENBQUMvSixLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUVtSyxVQUFVLEVBQUVSLEtBQUssQ0FBQztVQUN0RCxDQUFDLE1BQU07WUFDTCxJQUFJM0osS0FBSyxFQUFFO2NBQ1QsSUFBSSxDQUFDb0ssSUFBSSxDQUFDcEssS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDbUssVUFBVSxFQUFFUixLQUFLLENBQUM7WUFDMUM7WUFDQSxJQUFJLENBQUNTLElBQUksQ0FBQ3BLLEtBQUssRUFBRSxDQUFDLEVBQUUySixLQUFLLENBQUM7WUFDMUIsSUFBSTNKLEtBQUssR0FBRyxJQUFJLENBQUNrRSxHQUFHLEdBQUcsQ0FBQyxFQUFFO2NBQ3hCLElBQUksQ0FBQ2tHLElBQUksQ0FBQ3BLLEtBQUssR0FBRyxDQUFDLEVBQUVtSyxVQUFVLEVBQUVSLEtBQUssQ0FBQztZQUN6QztVQUNGO1FBQ0Y7TUFDRixDQUFDLE1BQU07UUFDTCxJQUFJb0YsWUFBWSxFQUFFO1VBQ2hCLElBQUksQ0FBQ2xELEtBQUssRUFBRTtRQUNkLENBQUMsTUFBTTtVQUNMO1VBQ0EsSUFBSSxDQUFDTSxVQUFVLENBQUNuTSxLQUFLLEVBQUUsQ0FBQyxFQUFFMkosS0FBSyxDQUFDO1FBQ2xDO01BQ0Y7SUFDRixDQUFDO0lBRUQwRixhQUFhLEVBQUUsdUJBQVMzTCxLQUFLLEVBQUU7TUFDN0IsSUFBSSxJQUFJLENBQUNnSyxVQUFVLEVBQUU7UUFDbkIsSUFBSSxDQUFDRyxVQUFVLENBQUNuSyxLQUFLLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUNnSyxVQUFVO01BQ3hCO0lBQ0YsQ0FBQztJQUVEbEUsZUFBZSxFQUFFLHlCQUFTOUYsS0FBSyxFQUFFO01BQy9CLElBQUkrRixLQUFLLEdBQUcsSUFBSSxDQUFDOEIsTUFBTSxDQUFDLElBQUksQ0FBQ3ZMLEtBQUssQ0FBQztNQUNuQyxJQUFJLENBQUMwRCxLQUFLLElBQUkrRixLQUFLLEtBQUsvRixLQUFLLENBQUMzQyxNQUFNLEVBQUU7UUFDcEMsSUFBSSxJQUFJLENBQUNxQyxRQUFRLEVBQUU7VUFDakIsSUFBSSxDQUFDQyxJQUFJLEVBQUU7UUFDYjtRQUNBLElBQUksQ0FBQ04sVUFBVSxDQUFDLElBQUksQ0FBQ3RELE9BQU8sQ0FBQ3NILFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQy9HLEtBQUssRUFBRXlKLEtBQUssQ0FBQyxDQUFDO01BQy9EO0lBQ0YsQ0FBQztJQUVENkYsVUFBVSxFQUFFLG9CQUFTNUwsS0FBSyxFQUFFO01BQzFCLElBQUkzQyxNQUFNLEdBQUcyQyxLQUFLLENBQUMzQyxNQUFNLElBQUkyQyxLQUFLLENBQUM2TCxVQUFVO01BQzdDLElBQUl2USxNQUFNLEdBQUcrQixNQUFNLElBQUlBLE1BQU0sQ0FBQ3lPLFVBQVU7TUFDeEMsSUFBSXhQLEtBQUs7TUFDVCxJQUFJLENBQUNlLE1BQU0sSUFBSSxDQUFDL0IsTUFBTSxFQUFFO1FBQ3RCO01BQ0Y7TUFDQWdCLEtBQUssR0FBRyxJQUFJLENBQUN5UCxZQUFZLENBQUN6USxNQUFNLENBQUM7TUFDakNwQixDQUFDLENBQUNvQixNQUFNLENBQUMsQ0FBQ2lFLFdBQVcsQ0FBQyxJQUFJLENBQUN4RCxPQUFPLENBQUNvRixpQkFBaUIsQ0FBQztNQUNyRCxJQUFJbkIsS0FBSyxDQUFDNUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtRQUMxQmxELENBQUMsQ0FBQ29CLE1BQU0sQ0FBQyxDQUFDaUQsUUFBUSxDQUFDLElBQUksQ0FBQ3hDLE9BQU8sQ0FBQ3FGLGVBQWUsQ0FBQztRQUNoRCxJQUFJLENBQUM4RixRQUFRLENBQUM1SyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUM7TUFDM0IsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDNEssUUFBUSxDQUFDNUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDO01BQzNCO01BQ0E7TUFDQSxJQUFJZSxNQUFNLENBQUMyTyxZQUFZLEdBQUcsSUFBSSxDQUFDeE0sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDd00sWUFBWSxFQUFFO1FBQ3hEM08sTUFBTSxDQUFDZ0QsS0FBSyxDQUFDQyxTQUFTLEdBQUcsSUFBSSxDQUFDZCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUN3TSxZQUFZO01BQ3pEO01BQ0EsSUFBSSxJQUFJLENBQUN0TSxRQUFRLElBQUksSUFBSSxDQUFDbUksTUFBTSxDQUFDLElBQUksQ0FBQ3ZMLEtBQUssQ0FBQyxLQUFLaEIsTUFBTSxFQUFFO1FBQ3ZELElBQUksQ0FBQ3FFLElBQUksRUFBRTtNQUNiO01BQ0EsSUFBSSxDQUFDTixVQUFVLENBQUMsSUFBSSxDQUFDdEQsT0FBTyxDQUFDdUgsZUFBZSxFQUFFLENBQUNoSCxLQUFLLEVBQUVoQixNQUFNLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQyUSxNQUFNLEVBQUUsZ0JBQVNqTSxLQUFLLEVBQUU7TUFDdEIsSUFBSSxDQUFDNEwsVUFBVSxDQUFDNUwsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRGtNLE9BQU8sRUFBRSxpQkFBU2xNLEtBQUssRUFBRTtNQUN2QixJQUFJLENBQUM0TCxVQUFVLENBQUM1TCxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVEbU0sU0FBUyxFQUFFLG1CQUFTbk0sS0FBSyxFQUFFO01BQ3pCLFFBQVFBLEtBQUssQ0FBQ3lKLEtBQUssSUFBSXpKLEtBQUssQ0FBQ29NLE9BQU87UUFDbEMsS0FBSyxFQUFFO1VBQUU7VUFDUCxJQUFJLElBQUksQ0FBQ3JRLE9BQU8sQ0FBQytGLHNCQUFzQixFQUFFO1lBQ3ZDLElBQUksQ0FBQzdCLGNBQWMsQ0FBQ0QsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQ3FNLGNBQWMsRUFBRTtVQUN2QjtVQUNBO1FBQ0YsS0FBSyxFQUFFO1VBQUU7VUFDUCxJQUFJLElBQUksQ0FBQ3RRLE9BQU8sQ0FBQ21HLGFBQWEsRUFBRTtZQUM5QixJQUFJLENBQUNpRyxLQUFLLEVBQUU7WUFDWjtZQUNBbkksS0FBSyxDQUFDc00sd0JBQXdCLEVBQUU7VUFDbEM7VUFDQTtRQUNGLEtBQUssRUFBRTtVQUFFO1VBQ1AsSUFBSSxJQUFJLENBQUN2USxPQUFPLENBQUNpRyxzQkFBc0IsRUFBRTtZQUN2QyxJQUFJLENBQUMvQixjQUFjLENBQUNELEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUN1TSxlQUFlLEVBQUU7VUFDeEI7VUFDQTtRQUNGLEtBQUssRUFBRTtVQUFFO1VBQ1AsSUFBSSxJQUFJLENBQUN4USxPQUFPLENBQUNrRyx3QkFBd0IsRUFBRTtZQUN6QyxJQUFJLENBQUNoQyxjQUFjLENBQUNELEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUM4RyxJQUFJLEVBQUU7VUFDYjtVQUNBO1FBQ0YsS0FBSyxFQUFFO1VBQUU7VUFDUCxJQUFJLElBQUksQ0FBQy9LLE9BQU8sQ0FBQ2tHLHdCQUF3QixFQUFFO1lBQ3pDLElBQUksQ0FBQ2hDLGNBQWMsQ0FBQ0QsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQytHLElBQUksRUFBRTtVQUNiO1VBQ0E7TUFBSztJQUVYLENBQUM7SUFFRHlGLFdBQVcsRUFBRSxxQkFBU3hNLEtBQUssRUFBRTtNQUMzQixJQUFJakUsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTztNQUMxQixJQUFJc0IsTUFBTSxHQUFHMkMsS0FBSyxDQUFDM0MsTUFBTSxJQUFJMkMsS0FBSyxDQUFDNkwsVUFBVTtNQUM3QyxJQUFJdlEsTUFBTSxHQUFHK0IsTUFBTSxDQUFDeU8sVUFBVTtNQUM5QjtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7TUFDTSxTQUFTVyxRQUFRLENBQUNDLFNBQVMsRUFBRTtRQUMzQixPQUFPeFMsQ0FBQyxDQUFDbUQsTUFBTSxDQUFDLENBQUN1QyxRQUFRLENBQUM4TSxTQUFTLENBQUMsSUFBSXhTLENBQUMsQ0FBQ29CLE1BQU0sQ0FBQyxDQUFDc0UsUUFBUSxDQUFDOE0sU0FBUyxDQUFDO01BQ3ZFO01BQ0EsSUFBSUQsUUFBUSxDQUFDMVEsT0FBTyxDQUFDOEMsV0FBVyxDQUFDLEVBQUU7UUFDakM7UUFDQSxJQUFJLENBQUNvQixjQUFjLENBQUNELEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUNxTSxjQUFjLEVBQUU7TUFDdkIsQ0FBQyxNQUFNLElBQUlJLFFBQVEsQ0FBQzFRLE9BQU8sQ0FBQ3VGLFNBQVMsQ0FBQyxFQUFFO1FBQ3RDO1FBQ0EsSUFBSSxDQUFDckIsY0FBYyxDQUFDRCxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDOEcsSUFBSSxFQUFFO01BQ2IsQ0FBQyxNQUFNLElBQUkyRixRQUFRLENBQUMxUSxPQUFPLENBQUN3RixTQUFTLENBQUMsRUFBRTtRQUN0QztRQUNBLElBQUksQ0FBQ3RCLGNBQWMsQ0FBQ0QsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQytHLElBQUksRUFBRTtNQUNiLENBQUMsTUFBTSxJQUFJMEYsUUFBUSxDQUFDMVEsT0FBTyxDQUFDeUYsVUFBVSxDQUFDLEVBQUU7UUFDdkM7UUFDQSxJQUFJLENBQUN2QixjQUFjLENBQUNELEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUNtSSxLQUFLLEVBQUU7TUFDZCxDQUFDLE1BQU0sSUFBSXNFLFFBQVEsQ0FBQzFRLE9BQU8sQ0FBQzBGLGNBQWMsQ0FBQyxFQUFFO1FBQzNDO1FBQ0EsSUFBSSxDQUFDeEIsY0FBYyxDQUFDRCxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDdU0sZUFBZSxFQUFFO01BQ3hCLENBQUMsTUFBTSxJQUFJalIsTUFBTSxLQUFLLElBQUksQ0FBQ3FGLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUM3QztRQUNBLElBQUk1RSxPQUFPLENBQUNvRyxpQkFBaUIsRUFBRTtVQUM3QixJQUFJLENBQUNsQyxjQUFjLENBQUNELEtBQUssQ0FBQztVQUMxQixJQUFJLENBQUNtSSxLQUFLLEVBQUU7UUFDZCxDQUFDLE1BQU0sSUFBSXBNLE9BQU8sQ0FBQ2dHLDBCQUEwQixFQUFFO1VBQzdDLElBQUksQ0FBQzlCLGNBQWMsQ0FBQ0QsS0FBSyxDQUFDO1VBQzFCLElBQUksQ0FBQ3FNLGNBQWMsRUFBRTtRQUN2QjtNQUNGLENBQUMsTUFBTSxJQUNML1EsTUFBTSxDQUFDd1EsVUFBVSxJQUNqQnhRLE1BQU0sQ0FBQ3dRLFVBQVUsS0FBSyxJQUFJLENBQUNuTCxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQzdDO1FBQ0E7UUFDQSxJQUFJNUUsT0FBTyxDQUFDZ0csMEJBQTBCLEVBQUU7VUFDdEMsSUFBSSxDQUFDOUIsY0FBYyxDQUFDRCxLQUFLLENBQUM7VUFDMUIsSUFBSSxDQUFDcU0sY0FBYyxFQUFFO1FBQ3ZCO01BQ0Y7SUFDRixDQUFDO0lBRURNLE9BQU8sRUFBRSxpQkFBUzNNLEtBQUssRUFBRTtNQUN2QixJQUNFLElBQUksQ0FBQ2pFLE9BQU8sQ0FBQ3NHLGtCQUFrQixJQUMvQixJQUFJLENBQUNxSSxVQUFVLEtBQ2RwRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNtRSxVQUFVLENBQUNoUSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUk0TCxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNtRSxVQUFVLENBQUNsQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFDdEU7UUFDQSxPQUFPLElBQUksQ0FBQ2tDLFVBQVU7UUFDdEI7TUFDRjtNQUNBLE9BQU8sSUFBSSxDQUFDOEIsV0FBVyxDQUFDeE0sS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRDRNLGlCQUFpQixFQUFFLDJCQUFTdFEsS0FBSyxFQUFFO01BQ2pDLElBQUksQ0FBQ0EsS0FBSyxFQUFFO1FBQ1YsSUFBSSxDQUFDa0QsU0FBUyxDQUFDakIsUUFBUSxDQUFDLElBQUksQ0FBQ3hDLE9BQU8sQ0FBQ2dGLGFBQWEsQ0FBQztNQUNyRCxDQUFDLE1BQU07UUFDTCxJQUFJLENBQUN2QixTQUFTLENBQUNELFdBQVcsQ0FBQyxJQUFJLENBQUN4RCxPQUFPLENBQUNnRixhQUFhLENBQUM7TUFDeEQ7TUFDQSxJQUFJekUsS0FBSyxLQUFLLElBQUksQ0FBQ2tFLEdBQUcsR0FBRyxDQUFDLEVBQUU7UUFDMUIsSUFBSSxDQUFDaEIsU0FBUyxDQUFDakIsUUFBUSxDQUFDLElBQUksQ0FBQ3hDLE9BQU8sQ0FBQ2lGLGNBQWMsQ0FBQztNQUN0RCxDQUFDLE1BQU07UUFDTCxJQUFJLENBQUN4QixTQUFTLENBQUNELFdBQVcsQ0FBQyxJQUFJLENBQUN4RCxPQUFPLENBQUNpRixjQUFjLENBQUM7TUFDekQ7SUFDRixDQUFDO0lBRUQzRSxXQUFXLEVBQUUscUJBQVNDLEtBQUssRUFBRTtNQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDUCxPQUFPLENBQUMyRyxVQUFVLEVBQUU7UUFDNUIsSUFBSSxDQUFDa0ssaUJBQWlCLENBQUN0USxLQUFLLENBQUM7TUFDL0I7TUFDQSxJQUFJLENBQUN1USxZQUFZLENBQUN2USxLQUFLLENBQUM7TUFDeEIsSUFBSSxJQUFJLENBQUNQLE9BQU8sQ0FBQzRHLGNBQWMsRUFBRTtRQUMvQixJQUFJLENBQUNBLGNBQWMsQ0FBQ3JHLEtBQUssQ0FBQztNQUM1QjtNQUNBLElBQUksQ0FBQ3dRLFFBQVEsQ0FBQ3hRLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQ4RyxPQUFPLEVBQUUsaUJBQVM5RyxLQUFLLEVBQUU7TUFDdkIsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7TUFDbEIsSUFBSSxDQUFDRCxXQUFXLENBQUNDLEtBQUssQ0FBQztNQUN2QixJQUFJLENBQUMrQyxVQUFVLENBQUMsSUFBSSxDQUFDdEQsT0FBTyxDQUFDcUgsT0FBTyxFQUFFLENBQUM5RyxLQUFLLEVBQUUsSUFBSSxDQUFDdUwsTUFBTSxDQUFDdkwsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUR3USxRQUFRLEVBQUUsa0JBQVN4USxLQUFLLEVBQUU7TUFDeEIsSUFBSXlRLFVBQVUsR0FBRyxJQUFJLENBQUNsRixNQUFNLENBQUN2TCxLQUFLLENBQUMsQ0FBQ3lRLFVBQVU7TUFDOUMsSUFBSUMsSUFBSSxHQUFHRCxVQUFVLENBQUN2UixLQUFLLElBQUl1UixVQUFVLENBQUNoTyxHQUFHO01BQzdDLElBQUk2QixZQUFZLEdBQUcsSUFBSSxDQUFDQSxZQUFZO01BQ3BDLElBQUlBLFlBQVksQ0FBQzFGLE1BQU0sRUFBRTtRQUN2QixJQUFJLENBQUMwRixZQUFZLENBQUMrRyxLQUFLLEVBQUU7UUFDekIsSUFBSXFGLElBQUksRUFBRTtVQUNScE0sWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDNUIsV0FBVyxDQUFDekIsUUFBUSxDQUFDMFAsY0FBYyxDQUFDRCxJQUFJLENBQUMsQ0FBQztRQUM1RDtNQUNGO0lBQ0YsQ0FBQztJQUVEM04sVUFBVSxFQUFFLG9CQUFTNk4sSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRTtNQUNyQyxJQUFJdFEsSUFBSSxHQUFHLElBQUk7TUFDZixPQUNFb1EsSUFBSSxJQUNKck4sTUFBTSxDQUFDUixVQUFVLENBQUMsWUFBVztRQUMzQjZOLElBQUksQ0FBQ0csS0FBSyxDQUFDdlEsSUFBSSxFQUFFcVEsSUFBSSxJQUFJLEVBQUUsQ0FBQztNQUM5QixDQUFDLEVBQUVDLElBQUksSUFBSSxDQUFDLENBQUM7SUFFakIsQ0FBQztJQUVERSxZQUFZLEVBQUUsc0JBQVMzUSxHQUFHLEVBQUVDLFFBQVEsRUFBRTtNQUNwQyxJQUFJRSxJQUFJLEdBQUcsSUFBSTtNQUNmLElBQUl5USxHQUFHLEdBQUcsSUFBSSxDQUFDM08sY0FBYyxDQUFDM0IsU0FBUyxDQUFDLEtBQUssQ0FBQztNQUM5QyxJQUFJUSxHQUFHLEdBQUdkLEdBQUc7TUFDYixJQUFJcUksY0FBYyxHQUFHLElBQUksQ0FBQ2pKLE9BQU8sQ0FBQzhGLGFBQWE7TUFDL0MsSUFBSTJMLE1BQU07TUFDVixJQUFJdE4sT0FBTztNQUNYLElBQUkxRSxLQUFLO01BQ1QsSUFBSXNDLE9BQU87TUFDWDtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7TUFDTSxTQUFTMlAsZUFBZSxDQUFDek4sS0FBSyxFQUFFO1FBQzlCLElBQUksQ0FBQ3dOLE1BQU0sRUFBRTtVQUNYeE4sS0FBSyxHQUFHO1lBQ041QyxJQUFJLEVBQUU0QyxLQUFLLENBQUM1QyxJQUFJO1lBQ2hCQyxNQUFNLEVBQUU2QztVQUNWLENBQUM7VUFDRCxJQUFJLENBQUNBLE9BQU8sQ0FBQzRMLFVBQVUsRUFBRTtZQUN2QjtZQUNBO1lBQ0E7WUFDQSxPQUFPaFAsSUFBSSxDQUFDdUMsVUFBVSxDQUFDb08sZUFBZSxFQUFFLENBQUN6TixLQUFLLENBQUMsQ0FBQztVQUNsRDtVQUNBd04sTUFBTSxHQUFHLElBQUk7VUFDYnRULENBQUMsQ0FBQ3FULEdBQUcsQ0FBQyxDQUFDbEYsR0FBRyxDQUFDLFlBQVksRUFBRW9GLGVBQWUsQ0FBQztVQUN6QyxJQUFJekksY0FBYyxFQUFFO1lBQ2xCLElBQUloRixLQUFLLENBQUM1QyxJQUFJLEtBQUssTUFBTSxFQUFFO2NBQ3pCOEMsT0FBTyxDQUFDRyxLQUFLLENBQUNxTixVQUFVLEdBQUcsT0FBTyxHQUFHalEsR0FBRyxHQUFHLHFCQUFxQjtjQUNoRXlDLE9BQU8sQ0FBQ0csS0FBSyxDQUFDMkUsY0FBYyxHQUFHQSxjQUFjO1lBQy9DO1VBQ0Y7VUFDQXBJLFFBQVEsQ0FBQ29ELEtBQUssQ0FBQztRQUNqQjtNQUNGO01BQ0EsSUFBSSxPQUFPdkMsR0FBRyxLQUFLLFFBQVEsRUFBRTtRQUMzQkEsR0FBRyxHQUFHLElBQUksQ0FBQ0MsZUFBZSxDQUFDZixHQUFHLEVBQUUsSUFBSSxDQUFDWixPQUFPLENBQUM0QixXQUFXLENBQUM7UUFDekRuQyxLQUFLLEdBQUcsSUFBSSxDQUFDa0MsZUFBZSxDQUFDZixHQUFHLEVBQUUsSUFBSSxDQUFDWixPQUFPLENBQUM4QixhQUFhLENBQUM7UUFDN0RDLE9BQU8sR0FDTCxJQUFJLENBQUNKLGVBQWUsQ0FBQ2YsR0FBRyxFQUFFLElBQUksQ0FBQ1osT0FBTyxDQUFDZ0MsZUFBZSxDQUFDLElBQUl2QyxLQUFLO01BQ3BFO01BQ0EsSUFBSXdKLGNBQWMsS0FBSyxJQUFJLEVBQUU7UUFDM0JBLGNBQWMsR0FBRyxTQUFTO01BQzVCO01BQ0FBLGNBQWMsR0FDWixJQUFJLENBQUN0QixPQUFPLENBQUNzQixjQUFjLElBQzNCLElBQUksQ0FBQ3RCLE9BQU8sQ0FBQ3NCLGNBQWMsQ0FBQ0EsY0FBYyxDQUFDLElBQzNDQSxjQUFjO01BQ2hCLElBQUlBLGNBQWMsRUFBRTtRQUNsQjlFLE9BQU8sR0FBRyxJQUFJLENBQUNsRCxnQkFBZ0IsQ0FBQ0MsU0FBUyxDQUFDLEtBQUssQ0FBQztNQUNsRCxDQUFDLE1BQU07UUFDTGlELE9BQU8sR0FBR3FOLEdBQUc7UUFDYkEsR0FBRyxDQUFDek8sU0FBUyxHQUFHLEtBQUs7TUFDdkI7TUFDQSxJQUFJdEQsS0FBSyxFQUFFO1FBQ1QwRSxPQUFPLENBQUMxRSxLQUFLLEdBQUdBLEtBQUs7TUFDdkI7TUFDQSxJQUFJc0MsT0FBTyxFQUFFO1FBQ1hvQyxPQUFPLENBQUNuQixHQUFHLEdBQUdqQixPQUFPO01BQ3ZCO01BQ0E1RCxDQUFDLENBQUNxVCxHQUFHLENBQUMsQ0FBQ25PLEVBQUUsQ0FBQyxZQUFZLEVBQUVxTyxlQUFlLENBQUM7TUFDeENGLEdBQUcsQ0FBQzlPLEdBQUcsR0FBR2hCLEdBQUc7TUFDYixPQUFPeUMsT0FBTztJQUNoQixDQUFDO0lBRUQxQyxhQUFhLEVBQUUsdUJBQVNiLEdBQUcsRUFBRUMsUUFBUSxFQUFFO01BQ3JDLElBQUlRLElBQUksR0FBR1QsR0FBRyxJQUFJLElBQUksQ0FBQ2UsZUFBZSxDQUFDZixHQUFHLEVBQUUsSUFBSSxDQUFDWixPQUFPLENBQUM2QixZQUFZLENBQUM7TUFDdEUsSUFBSWxDLE9BQU8sR0FDUjBCLElBQUksSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQ3JDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSyxJQUFJLENBQUN1UyxZQUFZO01BQ3JFLElBQUlwTixPQUFPLEdBQUd2RCxHQUFHLElBQUlqQixPQUFPLENBQUNhLElBQUksQ0FBQyxJQUFJLEVBQUVJLEdBQUcsRUFBRUMsUUFBUSxDQUFDO01BQ3RELElBQUkrUSxNQUFNLEdBQUcsSUFBSSxDQUFDalEsZUFBZSxDQUFDZixHQUFHLEVBQUUsSUFBSSxDQUFDWixPQUFPLENBQUMyRixjQUFjLENBQUM7TUFDbkUsSUFBSSxDQUFDeEIsT0FBTyxFQUFFO1FBQ1pBLE9BQU8sR0FBRyxJQUFJLENBQUNsRCxnQkFBZ0IsQ0FBQ0MsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUNoRCxJQUFJLENBQUNvQyxVQUFVLENBQUN6QyxRQUFRLEVBQUUsQ0FDeEI7VUFDRVEsSUFBSSxFQUFFLE9BQU87VUFDYkMsTUFBTSxFQUFFNkM7UUFDVixDQUFDLENBQ0YsQ0FBQztNQUNKO01BQ0EsSUFBSXlOLE1BQU0sRUFBRTtRQUNWek4sT0FBTyxDQUFDakIsWUFBWSxDQUFDLFFBQVEsRUFBRTBPLE1BQU0sQ0FBQztNQUN4QztNQUNBelQsQ0FBQyxDQUFDZ0csT0FBTyxDQUFDLENBQUMzQixRQUFRLENBQUMsSUFBSSxDQUFDeEMsT0FBTyxDQUFDc0YsaUJBQWlCLENBQUM7TUFDbkQsT0FBT25CLE9BQU87SUFDaEIsQ0FBQztJQUVEME4sV0FBVyxFQUFFLHFCQUFTdFIsS0FBSyxFQUFFO01BQzNCLElBQUksQ0FBQyxJQUFJLENBQUM0SyxRQUFRLENBQUM1SyxLQUFLLENBQUMsRUFBRTtRQUN6QixJQUFJLElBQUksQ0FBQ3VMLE1BQU0sQ0FBQ3ZMLEtBQUssQ0FBQyxDQUFDeVEsVUFBVSxFQUFFO1VBQ2pDLElBQUksQ0FBQzdGLFFBQVEsQ0FBQzVLLEtBQUssQ0FBQyxHQUFHcEMsQ0FBQyxDQUFDLElBQUksQ0FBQzJOLE1BQU0sQ0FBQ3ZMLEtBQUssQ0FBQyxDQUFDLENBQUNzRCxRQUFRLENBQ25ELElBQUksQ0FBQzdELE9BQU8sQ0FBQ3FGLGVBQWUsQ0FDN0IsR0FDRyxDQUFDLEdBQ0QsQ0FBQztRQUNQLENBQUMsTUFBTTtVQUNMLElBQUksQ0FBQzhGLFFBQVEsQ0FBQzVLLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQztVQUN6QnBDLENBQUMsQ0FBQyxJQUFJLENBQUMyTixNQUFNLENBQUN2TCxLQUFLLENBQUMsQ0FBQyxDQUFDaUMsUUFBUSxDQUFDLElBQUksQ0FBQ3hDLE9BQU8sQ0FBQ29GLGlCQUFpQixDQUFDO1VBQzlELElBQUksQ0FBQzBHLE1BQU0sQ0FBQ3ZMLEtBQUssQ0FBQyxDQUFDMEMsV0FBVyxDQUM1QixJQUFJLENBQUN4QixhQUFhLENBQUMsSUFBSSxDQUFDMkMsSUFBSSxDQUFDN0QsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDdVIsYUFBYSxDQUFDLENBQ3pEO1FBQ0g7TUFDRjtJQUNGLENBQUM7SUFFRGhCLFlBQVksRUFBRSxzQkFBU3ZRLEtBQUssRUFBRTtNQUM1QixJQUFJd1IsS0FBSyxHQUFHeEgsSUFBSSxDQUFDeUgsR0FBRyxDQUFDLElBQUksQ0FBQ3ZOLEdBQUcsRUFBRSxJQUFJLENBQUN6RSxPQUFPLENBQUNnSCxZQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUNqRSxJQUFJaUwsQ0FBQyxHQUFHMVIsS0FBSztNQUNiLElBQUkvQixDQUFDO01BQ0wsS0FBS0EsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHdVQsS0FBSyxFQUFFdlQsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUM3QjtRQUNBO1FBQ0E7UUFDQTtRQUNBeVQsQ0FBQyxJQUFJelQsQ0FBQyxJQUFJQSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0I7UUFDQTtRQUNBeVQsQ0FBQyxHQUFHLElBQUksQ0FBQzNILE1BQU0sQ0FBQzJILENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUNKLFdBQVcsQ0FBQ0ksQ0FBQyxDQUFDO01BQ3JCO0lBQ0YsQ0FBQztJQUVEckwsY0FBYyxFQUFFLHdCQUFTckcsS0FBSyxFQUFFO01BQzlCLElBQUkvQixDQUFDLEVBQUU2TCxJQUFJO01BQ1gsS0FBSzdMLENBQUMsSUFBSSxJQUFJLENBQUMyTSxRQUFRLEVBQUU7UUFDdkIsSUFBSTVDLE1BQU0sQ0FBQ3hJLFNBQVMsQ0FBQ3lJLGNBQWMsQ0FBQ2hJLElBQUksQ0FBQyxJQUFJLENBQUMySyxRQUFRLEVBQUUzTSxDQUFDLENBQUMsRUFBRTtVQUMxRDZMLElBQUksR0FBR0UsSUFBSSxDQUFDQyxHQUFHLENBQUNqSyxLQUFLLEdBQUcvQixDQUFDLENBQUM7VUFDMUIsSUFDRTZMLElBQUksR0FBRyxJQUFJLENBQUNySyxPQUFPLENBQUNnSCxZQUFZLElBQ2hDcUQsSUFBSSxHQUFHLElBQUksQ0FBQ3JLLE9BQU8sQ0FBQ2dILFlBQVksR0FBRyxJQUFJLENBQUN2QyxHQUFHLEVBQzNDO1lBQ0EsSUFBSSxDQUFDeU4sV0FBVyxDQUFDMVQsQ0FBQyxDQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDMk0sUUFBUSxDQUFDM00sQ0FBQyxDQUFDO1VBQ3pCO1FBQ0Y7TUFDRjtJQUNGLENBQUM7SUFFRGdOLFFBQVEsRUFBRSxrQkFBU2pMLEtBQUssRUFBRTtNQUN4QixJQUFJeUosS0FBSyxHQUFHLElBQUksQ0FBQ21JLGNBQWMsQ0FBQ2pSLFNBQVMsQ0FBQyxLQUFLLENBQUM7TUFDaEQ4SSxLQUFLLENBQUM5RyxZQUFZLENBQUMsWUFBWSxFQUFFM0MsS0FBSyxDQUFDO01BQ3ZDLElBQUksQ0FBQ3FFLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQzNCLFdBQVcsQ0FBQytHLEtBQUssQ0FBQztNQUMxQyxJQUFJLENBQUM4QixNQUFNLENBQUNpRCxJQUFJLENBQUMvRSxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVEeUIsYUFBYSxFQUFFLHVCQUFTbEwsS0FBSyxFQUFFO01BQzdCLElBQUl5SixLQUFLLEdBQUcsSUFBSSxDQUFDOEIsTUFBTSxDQUFDdkwsS0FBSyxDQUFDO01BQzlCeUosS0FBSyxDQUFDMUYsS0FBSyxDQUFDOE4sS0FBSyxHQUFHLElBQUksQ0FBQzFILFVBQVUsR0FBRyxJQUFJO01BQzFDLElBQUksSUFBSSxDQUFDL0MsT0FBTyxDQUFDb0IsU0FBUyxFQUFFO1FBQzFCaUIsS0FBSyxDQUFDMUYsS0FBSyxDQUFDc0ksSUFBSSxHQUFHck0sS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDbUssVUFBVSxHQUFHLElBQUk7UUFDbEQsSUFBSSxDQUFDQyxJQUFJLENBQ1BwSyxLQUFLLEVBQ0wsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUssR0FDZCxDQUFDLElBQUksQ0FBQ21LLFVBQVUsR0FDaEIsSUFBSSxDQUFDbkssS0FBSyxHQUFHQSxLQUFLLEdBQ2xCLElBQUksQ0FBQ21LLFVBQVUsR0FDZixDQUFDLEVBQ0wsQ0FBQyxDQUNGO01BQ0g7SUFDRixDQUFDO0lBRURnQixVQUFVLEVBQUUsb0JBQVMyRyxNQUFNLEVBQUU7TUFDM0IsSUFBSXhNLFdBQVcsRUFBRXJILENBQUM7TUFDbEIsSUFBSSxDQUFDNlQsTUFBTSxFQUFFO1FBQ1gsSUFBSSxDQUFDNUgsU0FBUyxHQUFHLEVBQUU7UUFDbkIsSUFBSSxDQUFDQSxTQUFTLENBQUN0TCxNQUFNLEdBQUcsSUFBSSxDQUFDc0YsR0FBRztRQUNoQyxJQUFJLENBQUMwRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQ3RJLGNBQWMsR0FBR3JCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNuRCxJQUFJLENBQUNSLGdCQUFnQixHQUFHTyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDckQsSUFBSSxDQUFDMFEsY0FBYyxHQUFHM1EsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ25EdEQsQ0FBQyxDQUFDLElBQUksQ0FBQ2dVLGNBQWMsQ0FBQyxDQUFDM1AsUUFBUSxDQUFDLElBQUksQ0FBQ3hDLE9BQU8sQ0FBQ21GLFVBQVUsQ0FBQztRQUN4RCxJQUFJLENBQUMyRyxNQUFNLEdBQUcsSUFBSSxDQUFDbEgsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDME4sUUFBUTtRQUM5Q3pNLFdBQVcsR0FDVCxJQUFJLENBQUM3RixPQUFPLENBQUM2RixXQUFXLElBQUksSUFBSSxDQUFDaUcsTUFBTSxDQUFDM00sTUFBTSxLQUFLLElBQUksQ0FBQ3NGLEdBQUc7TUFDL0Q7TUFDQSxJQUFJLENBQUNpRyxVQUFVLEdBQUcsSUFBSSxDQUFDakgsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOE8sV0FBVztNQUMvQyxJQUFJLENBQUNoRCxXQUFXLEdBQUcsSUFBSSxDQUFDOUwsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDd00sWUFBWTtNQUNqRCxJQUFJLENBQUNyTCxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUNOLEtBQUssQ0FBQzhOLEtBQUssR0FBRyxJQUFJLENBQUMzTixHQUFHLEdBQUcsSUFBSSxDQUFDaUcsVUFBVSxHQUFHLElBQUk7TUFDdkUsSUFBSTdFLFdBQVcsRUFBRTtRQUNmLElBQUksQ0FBQzhGLFdBQVcsRUFBRTtNQUNwQjtNQUNBLEtBQUtuTixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDaUcsR0FBRyxFQUFFakcsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNoQyxJQUFJcUgsV0FBVyxFQUFFO1VBQ2YsSUFBSSxDQUFDMkYsUUFBUSxDQUFDaE4sQ0FBQyxDQUFDO1FBQ2xCO1FBQ0EsSUFBSSxDQUFDaU4sYUFBYSxDQUFDak4sQ0FBQyxDQUFDO01BQ3ZCO01BQ0E7TUFDQSxJQUFJLElBQUksQ0FBQ3dCLE9BQU8sQ0FBQzJHLFVBQVUsSUFBSSxJQUFJLENBQUNnQixPQUFPLENBQUNvQixTQUFTLEVBQUU7UUFDckQsSUFBSSxDQUFDNEIsSUFBSSxDQUFDLElBQUksQ0FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQy9KLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQ21LLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDL0osS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ21LLFVBQVUsRUFBRSxDQUFDLENBQUM7TUFDNUQ7TUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDL0MsT0FBTyxDQUFDb0IsU0FBUyxFQUFFO1FBQzNCLElBQUksQ0FBQ25FLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQ04sS0FBSyxDQUFDc0ksSUFBSSxHQUNoQyxJQUFJLENBQUNyTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUNtSyxVQUFVLEdBQUcsSUFBSTtNQUN4QztJQUNGLENBQUM7SUFFRHdILFdBQVcsRUFBRSxxQkFBUzNSLEtBQUssRUFBRTtNQUMzQixJQUFJeUosS0FBSyxFQUFFZ0gsVUFBVTtNQUNyQmhILEtBQUssR0FBRyxJQUFJLENBQUM4QixNQUFNLENBQUN2TCxLQUFLLENBQUM7TUFDMUJ5USxVQUFVLEdBQUdoSCxLQUFLLENBQUNnSCxVQUFVO01BQzdCLElBQUlBLFVBQVUsS0FBSyxJQUFJLEVBQUU7UUFDdkJoSCxLQUFLLENBQUNaLFdBQVcsQ0FBQzRILFVBQVUsQ0FBQztNQUMvQjtJQUNGLENBQUM7SUFFRG5GLGVBQWUsRUFBRSwyQkFBVztNQUMxQixJQUFJck4sQ0FBQyxFQUFFZ1UsR0FBRztNQUNWLEtBQUtoVSxDQUFDLEdBQUcsQ0FBQyxFQUFFZ1UsR0FBRyxHQUFHLElBQUksQ0FBQzFHLE1BQU0sQ0FBQzNNLE1BQU0sRUFBRVgsQ0FBQyxHQUFHZ1UsR0FBRyxFQUFFaFUsQ0FBQyxFQUFFLEVBQUU7UUFDbEQsSUFBSSxDQUFDMFQsV0FBVyxDQUFDMVQsQ0FBQyxDQUFDO01BQ3JCO0lBQ0YsQ0FBQztJQUVEOFIsY0FBYyxFQUFFLDBCQUFXO01BQ3pCLElBQUk1TSxhQUFhLEdBQUcsSUFBSSxDQUFDMUQsT0FBTyxDQUFDMEQsYUFBYTtNQUM5QyxJQUFJLElBQUksQ0FBQ0QsU0FBUyxDQUFDSSxRQUFRLENBQUNILGFBQWEsQ0FBQyxFQUFFO1FBQzFDLElBQUksQ0FBQ0QsU0FBUyxDQUFDRCxXQUFXLENBQUNFLGFBQWEsQ0FBQztNQUMzQyxDQUFDLE1BQU07UUFDTCxJQUFJLENBQUNELFNBQVMsQ0FBQ2pCLFFBQVEsQ0FBQ2tCLGFBQWEsQ0FBQztNQUN4QztJQUNGLENBQUM7SUFFRDhNLGVBQWUsRUFBRSwyQkFBVztNQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDN00sUUFBUSxFQUFFO1FBQ2xCLElBQUksQ0FBQ0MsSUFBSSxFQUFFO01BQ2IsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDbEQsS0FBSyxFQUFFO01BQ2Q7SUFDRixDQUFDO0lBRURzUCxZQUFZLEVBQUUsc0JBQVM3TCxPQUFPLEVBQUU7TUFDOUIsT0FBT3NPLFFBQVEsQ0FBQ3RPLE9BQU8sQ0FBQ3VPLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDekQsQ0FBQztJQUVEQyxpQkFBaUIsRUFBRSwyQkFBUy9SLEdBQUcsRUFBRWdTLFFBQVEsRUFBRTtNQUN6Q0EsUUFBUSxDQUFDQyxPQUFPO01BQ2Q7TUFDQTtNQUNBO01BQ0EsMkRBQTJELEVBQzNELFVBQVNDLEdBQUcsRUFBRUMsZUFBZSxFQUFFQyxlQUFlLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFO1FBQ25FLElBQUk1SyxJQUFJLEdBQ040SyxPQUFPLElBQ1BILGVBQWUsSUFDZkMsZUFBZSxJQUNkQyxVQUFVLElBQUlSLFFBQVEsQ0FBQ1EsVUFBVSxFQUFFLEVBQUUsQ0FBRTtRQUMxQyxJQUFJSCxHQUFHLElBQUlsUyxHQUFHLEVBQUU7VUFDZEEsR0FBRyxHQUFHQSxHQUFHLENBQUMwSCxJQUFJLENBQUM7UUFDakI7TUFDRixDQUFDLENBQ0Y7TUFDRCxPQUFPMUgsR0FBRztJQUNaLENBQUM7SUFFRHVTLGVBQWUsRUFBRSx5QkFBU3ZTLEdBQUcsRUFBRWdTLFFBQVEsRUFBRTtNQUN2QyxJQUFJUSxHQUFHO01BQ1AsSUFBSTlLLElBQUk7TUFDUixJQUFJMUgsR0FBRyxDQUFDeVMsT0FBTyxFQUFFO1FBQ2ZELEdBQUcsR0FBR1IsUUFBUSxDQUFDQyxPQUFPLENBQUMsV0FBVyxFQUFFLFVBQVNTLENBQUMsRUFBRUMsQ0FBQyxFQUFFO1VBQ2pELE9BQU9BLENBQUMsQ0FBQ0MsV0FBVyxFQUFFO1FBQ3hCLENBQUMsQ0FBQztRQUNGbEwsSUFBSSxHQUFHMUgsR0FBRyxDQUFDeVMsT0FBTyxDQUFDRCxHQUFHLENBQUM7TUFDekIsQ0FBQyxNQUFNLElBQUl4UyxHQUFHLENBQUM4UixZQUFZLEVBQUU7UUFDM0JwSyxJQUFJLEdBQUcxSCxHQUFHLENBQUM4UixZQUFZLENBQ3JCLE9BQU8sR0FBR0UsUUFBUSxDQUFDQyxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDWSxXQUFXLEVBQUUsQ0FDNUQ7TUFDSDtNQUNBLElBQUksT0FBT25MLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDNUI7UUFDQSxJQUNFLDJEQUEyRCxDQUFDb0wsSUFBSSxDQUFDcEwsSUFBSSxDQUFDLEVBQ3RFO1VBQ0EsSUFBSTtZQUNGLE9BQU9uSyxDQUFDLENBQUN3VixTQUFTLENBQUNyTCxJQUFJLENBQUM7VUFDMUIsQ0FBQyxDQUFDLE9BQU9zTCxNQUFNLEVBQUU7WUFDZjtVQUFBO1FBRUo7UUFDQSxPQUFPdEwsSUFBSTtNQUNiO0lBQ0YsQ0FBQztJQUVEM0csZUFBZSxFQUFFLHlCQUFTZixHQUFHLEVBQUVnUyxRQUFRLEVBQUU7TUFDdkMsSUFBSXRLLElBQUksR0FBRyxJQUFJLENBQUM2SyxlQUFlLENBQUN2UyxHQUFHLEVBQUVnUyxRQUFRLENBQUM7TUFDOUMsSUFBSXRLLElBQUksS0FBSzlELFNBQVMsRUFBRTtRQUN0QjhELElBQUksR0FBRzFILEdBQUcsQ0FBQ2dTLFFBQVEsQ0FBQztNQUN0QjtNQUNBLElBQUl0SyxJQUFJLEtBQUs5RCxTQUFTLEVBQUU7UUFDdEI4RCxJQUFJLEdBQUcsSUFBSSxDQUFDcUssaUJBQWlCLENBQUMvUixHQUFHLEVBQUVnUyxRQUFRLENBQUM7TUFDOUM7TUFDQSxPQUFPdEssSUFBSTtJQUNiLENBQUM7SUFFRHNCLGNBQWMsRUFBRSwwQkFBVztNQUN6QixJQUFJckosS0FBSyxHQUFHLElBQUksQ0FBQ1AsT0FBTyxDQUFDTyxLQUFLO01BQzlCLElBQUlxQixXQUFXLEdBQUcsSUFBSSxDQUFDNUIsT0FBTyxDQUFDNEIsV0FBVztNQUMxQyxJQUFJcEQsQ0FBQztNQUNMO01BQ0EsSUFBSStCLEtBQUssSUFBSSxPQUFPQSxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQ3RDLEtBQUsvQixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDaUcsR0FBRyxFQUFFakcsQ0FBQyxJQUFJLENBQUMsRUFBRTtVQUNoQyxJQUNFLElBQUksQ0FBQzRGLElBQUksQ0FBQzVGLENBQUMsQ0FBQyxLQUFLK0IsS0FBSyxJQUN0QixJQUFJLENBQUNvQixlQUFlLENBQUMsSUFBSSxDQUFDeUMsSUFBSSxDQUFDNUYsQ0FBQyxDQUFDLEVBQUVvRCxXQUFXLENBQUMsS0FDN0MsSUFBSSxDQUFDRCxlQUFlLENBQUNwQixLQUFLLEVBQUVxQixXQUFXLENBQUMsRUFDMUM7WUFDQXJCLEtBQUssR0FBRy9CLENBQUM7WUFDVDtVQUNGO1FBQ0Y7TUFDRjtNQUNBO01BQ0EsSUFBSSxDQUFDK0IsS0FBSyxHQUFHLElBQUksQ0FBQytKLE1BQU0sQ0FBQ21JLFFBQVEsQ0FBQ2xTLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVEdUosa0JBQWtCLEVBQUUsOEJBQVc7TUFDN0IsSUFBSS9JLElBQUksR0FBRyxJQUFJO01BQ2YsSUFBSTZELGVBQWUsR0FBRyxJQUFJLENBQUNBLGVBQWU7TUFDMUM7QUFDTjtBQUNBO0FBQ0E7QUFDQTtNQUNNLFNBQVNrTixhQUFhLENBQUM3TixLQUFLLEVBQUU7UUFDNUIsSUFBSTVDLElBQUksR0FDTk4sSUFBSSxDQUFDNEcsT0FBTyxDQUFDVSxVQUFVLElBQUl0SCxJQUFJLENBQUM0RyxPQUFPLENBQUNVLFVBQVUsQ0FBQ0osR0FBRyxLQUFLaEUsS0FBSyxDQUFDNUMsSUFBSSxHQUNqRSxlQUFlLEdBQ2Y0QyxLQUFLLENBQUM1QyxJQUFJO1FBQ2hCTixJQUFJLENBQUMsSUFBSSxHQUFHTSxJQUFJLENBQUMsQ0FBQzRDLEtBQUssQ0FBQztNQUMxQjtNQUNBOUYsQ0FBQyxDQUFDMkYsTUFBTSxDQUFDLENBQUNULEVBQUUsQ0FBQyxRQUFRLEVBQUV5TyxhQUFhLENBQUM7TUFDckMzVCxDQUFDLENBQUNxRCxRQUFRLENBQUM2QyxJQUFJLENBQUMsQ0FBQ2hCLEVBQUUsQ0FBQyxTQUFTLEVBQUV5TyxhQUFhLENBQUM7TUFDN0MsSUFBSSxDQUFDck8sU0FBUyxDQUFDSixFQUFFLENBQUMsT0FBTyxFQUFFeU8sYUFBYSxDQUFDO01BQ3pDLElBQUksSUFBSSxDQUFDbkssT0FBTyxDQUFDQyxLQUFLLEVBQUU7UUFDdEJoRCxlQUFlLENBQUN2QixFQUFFLENBQ2hCLDJDQUEyQyxFQUMzQ3lPLGFBQWEsQ0FDZDtNQUNILENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQzlSLE9BQU8sQ0FBQ3NHLGtCQUFrQixJQUFJLElBQUksQ0FBQ3FCLE9BQU8sQ0FBQ1UsVUFBVSxFQUFFO1FBQ3JFekQsZUFBZSxDQUFDdkIsRUFBRSxDQUNoQixzQ0FBc0MsRUFDdEN5TyxhQUFhLENBQ2Q7TUFDSDtNQUNBLElBQUksSUFBSSxDQUFDbkssT0FBTyxDQUFDVSxVQUFVLEVBQUU7UUFDM0J6RCxlQUFlLENBQUN2QixFQUFFLENBQUMsSUFBSSxDQUFDc0UsT0FBTyxDQUFDVSxVQUFVLENBQUNKLEdBQUcsRUFBRTZKLGFBQWEsQ0FBQztNQUNoRTtNQUNBLElBQUksQ0FBQ0EsYUFBYSxHQUFHQSxhQUFhO0lBQ3BDLENBQUM7SUFFRDlGLHFCQUFxQixFQUFFLGlDQUFXO01BQ2hDLElBQUlwSCxlQUFlLEdBQUcsSUFBSSxDQUFDQSxlQUFlO01BQzFDLElBQUlrTixhQUFhLEdBQUcsSUFBSSxDQUFDQSxhQUFhO01BQ3RDM1QsQ0FBQyxDQUFDMkYsTUFBTSxDQUFDLENBQUN3SSxHQUFHLENBQUMsUUFBUSxFQUFFd0YsYUFBYSxDQUFDO01BQ3RDM1QsQ0FBQyxDQUFDcUQsUUFBUSxDQUFDNkMsSUFBSSxDQUFDLENBQUNpSSxHQUFHLENBQUMsU0FBUyxFQUFFd0YsYUFBYSxDQUFDO01BQzlDLElBQUksQ0FBQ3JPLFNBQVMsQ0FBQzZJLEdBQUcsQ0FBQyxPQUFPLEVBQUV3RixhQUFhLENBQUM7TUFDMUMsSUFBSSxJQUFJLENBQUNuSyxPQUFPLENBQUNDLEtBQUssRUFBRTtRQUN0QmhELGVBQWUsQ0FBQzBILEdBQUcsQ0FDakIsMkNBQTJDLEVBQzNDd0YsYUFBYSxDQUNkO01BQ0gsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDOVIsT0FBTyxDQUFDc0csa0JBQWtCLElBQUksSUFBSSxDQUFDcUIsT0FBTyxDQUFDVSxVQUFVLEVBQUU7UUFDckV6RCxlQUFlLENBQUMwSCxHQUFHLENBQ2pCLHNDQUFzQyxFQUN0Q3dGLGFBQWEsQ0FDZDtNQUNIO01BQ0EsSUFBSSxJQUFJLENBQUNuSyxPQUFPLENBQUNVLFVBQVUsRUFBRTtRQUMzQnpELGVBQWUsQ0FBQzBILEdBQUcsQ0FBQyxJQUFJLENBQUMzRSxPQUFPLENBQUNVLFVBQVUsQ0FBQ0osR0FBRyxFQUFFNkosYUFBYSxDQUFDO01BQ2pFO0lBQ0YsQ0FBQztJQUVEK0IsVUFBVSxFQUFFLHNCQUFXO01BQ3JCLElBQUksSUFBSSxDQUFDN1QsT0FBTyxDQUFDb0gsUUFBUSxFQUFFO1FBQ3pCLElBQUksQ0FBQ3BILE9BQU8sQ0FBQ29ILFFBQVEsQ0FBQzVHLElBQUksQ0FBQyxJQUFJLENBQUM7TUFDbEM7SUFDRixDQUFDO0lBRURxSixVQUFVLEVBQUUsc0JBQVc7TUFDckIsSUFBSTlJLElBQUksR0FBRyxJQUFJO01BQ2Y7QUFDTjtBQUNBO0FBQ0E7QUFDQTtNQUNNLFNBQVMrUyxXQUFXLENBQUM3UCxLQUFLLEVBQUU7UUFDMUIsSUFBSUEsS0FBSyxDQUFDM0MsTUFBTSxLQUFLUCxJQUFJLENBQUMwQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDdEMxQyxJQUFJLENBQUMwQyxTQUFTLENBQUM2SSxHQUFHLENBQUN2TCxJQUFJLENBQUM0RyxPQUFPLENBQUNVLFVBQVUsQ0FBQ0osR0FBRyxFQUFFNkwsV0FBVyxDQUFDO1VBQzVEL1MsSUFBSSxDQUFDOFMsVUFBVSxFQUFFO1FBQ25CO01BQ0Y7TUFDQSxJQUFJLENBQUNwUSxTQUFTLEdBQUd0RixDQUFDLENBQUMsSUFBSSxDQUFDNkIsT0FBTyxDQUFDeUQsU0FBUyxDQUFDO01BQzFDLElBQUksQ0FBQyxJQUFJLENBQUNBLFNBQVMsQ0FBQ3RFLE1BQU0sRUFBRTtRQUMxQixJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUNkLDhDQUE4QyxFQUM5QyxJQUFJLENBQUNXLE9BQU8sQ0FBQ3lELFNBQVMsQ0FDdkI7UUFDRCxPQUFPLEtBQUs7TUFDZDtNQUNBLElBQUksQ0FBQ21CLGVBQWUsR0FBRyxJQUFJLENBQUNuQixTQUFTLENBQ2xDbkUsSUFBSSxDQUFDLElBQUksQ0FBQ1UsT0FBTyxDQUFDNEUsZUFBZSxDQUFDLENBQ2xDbVAsS0FBSyxFQUFFO01BQ1YsSUFBSSxDQUFDLElBQUksQ0FBQ25QLGVBQWUsQ0FBQ3pGLE1BQU0sRUFBRTtRQUNoQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUNkLDhDQUE4QyxFQUM5QyxJQUFJLENBQUNXLE9BQU8sQ0FBQzRFLGVBQWUsQ0FDN0I7UUFDRCxPQUFPLEtBQUs7TUFDZDtNQUNBLElBQUksQ0FBQ0MsWUFBWSxHQUFHLElBQUksQ0FBQ3BCLFNBQVMsQ0FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUNVLE9BQU8sQ0FBQzZFLFlBQVksQ0FBQyxDQUFDa1AsS0FBSyxFQUFFO01BQzFFLElBQUksSUFBSSxDQUFDdFAsR0FBRyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUNoQixTQUFTLENBQUNqQixRQUFRLENBQUMsSUFBSSxDQUFDeEMsT0FBTyxDQUFDK0UsV0FBVyxDQUFDO01BQ25EO01BQ0EsSUFBSSxJQUFJLENBQUMvRSxPQUFPLENBQUNtSCxNQUFNLEVBQUU7UUFDdkIsSUFBSSxDQUFDbkgsT0FBTyxDQUFDbUgsTUFBTSxDQUFDM0csSUFBSSxDQUFDLElBQUksQ0FBQztNQUNoQztNQUNBLElBQUksSUFBSSxDQUFDbUgsT0FBTyxDQUFDVSxVQUFVLElBQUksSUFBSSxDQUFDckksT0FBTyxDQUFDNEYsaUJBQWlCLEVBQUU7UUFDN0QsSUFBSSxDQUFDbkMsU0FBUyxDQUFDSixFQUFFLENBQUMsSUFBSSxDQUFDc0UsT0FBTyxDQUFDVSxVQUFVLENBQUNKLEdBQUcsRUFBRTZMLFdBQVcsQ0FBQztNQUM3RCxDQUFDLE1BQU07UUFDTCxJQUFJLENBQUNELFVBQVUsRUFBRTtNQUNuQjtNQUNBLElBQUksSUFBSSxDQUFDN1QsT0FBTyxDQUFDd0csa0JBQWtCLEVBQUU7UUFDbkM7UUFDQSxJQUFJLENBQUMyRixpQkFBaUIsR0FBRzNLLFFBQVEsQ0FBQzZDLElBQUksQ0FBQ0MsS0FBSyxDQUFDNEgsUUFBUTtRQUNyRDFLLFFBQVEsQ0FBQzZDLElBQUksQ0FBQ0MsS0FBSyxDQUFDNEgsUUFBUSxHQUFHLFFBQVE7TUFDekM7TUFDQSxJQUFJLENBQUN6SSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNhLEtBQUssQ0FBQzJILE9BQU8sR0FBRyxPQUFPO01BQ3pDLElBQUksQ0FBQ1AsVUFBVSxFQUFFO01BQ2pCLElBQUksQ0FBQ2pJLFNBQVMsQ0FBQ2pCLFFBQVEsQ0FBQyxJQUFJLENBQUN4QyxPQUFPLENBQUM4RSxZQUFZLENBQUM7SUFDcEQsQ0FBQztJQUVESixXQUFXLEVBQUUscUJBQVMxRSxPQUFPLEVBQUU7TUFDN0I7TUFDQSxJQUFJLENBQUNBLE9BQU8sR0FBRzdCLENBQUMsQ0FBQzJCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNFLE9BQU8sQ0FBQztNQUN6QztNQUNBLElBQ0dBLE9BQU8sSUFBSUEsT0FBTyxDQUFDMEcsUUFBUSxJQUMzQixJQUFJLENBQUMxRyxPQUFPLENBQUMwRyxRQUFRLEtBQUssQ0FBQzFHLE9BQU8sSUFBSUEsT0FBTyxDQUFDMEcsUUFBUSxLQUFLLEtBQUssQ0FBRSxFQUNuRTtRQUNBdkksQ0FBQyxDQUFDMkIsTUFBTSxDQUFDLElBQUksQ0FBQ0UsT0FBTyxFQUFFLElBQUksQ0FBQzBILGVBQWUsQ0FBQztNQUM5QztNQUNBO01BQ0F2SixDQUFDLENBQUMyQixNQUFNLENBQUMsSUFBSSxDQUFDRSxPQUFPLEVBQUVBLE9BQU8sQ0FBQztNQUMvQixJQUFJLElBQUksQ0FBQ3lFLEdBQUcsR0FBRyxDQUFDLEVBQUU7UUFDaEI7UUFDQTtRQUNBLElBQUksQ0FBQ3pFLE9BQU8sQ0FBQzJHLFVBQVUsR0FBRyxJQUFJLENBQUMzRyxPQUFPLENBQUMyRyxVQUFVLEdBQUcsSUFBSSxHQUFHLEtBQUs7TUFDbEU7TUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDZ0IsT0FBTyxDQUFDVSxVQUFVLEVBQUU7UUFDNUIsSUFBSSxDQUFDckksT0FBTyxDQUFDc0csa0JBQWtCLEdBQUcsS0FBSztNQUN6QztNQUNBLElBQUksSUFBSSxDQUFDdEcsT0FBTyxDQUFDaUUsS0FBSyxFQUFFO1FBQ3RCLElBQUksQ0FBQ0MsY0FBYyxDQUFDLElBQUksQ0FBQ2xFLE9BQU8sQ0FBQ2lFLEtBQUssQ0FBQztNQUN6QztJQUNGO0VBQ0YsQ0FBQyxDQUFDO0VBRUYsT0FBT3BFLE9BQU87QUFDaEIsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzN0NGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQUMsQ0FBQyxZQUFXO0VBQ1gsWUFBWTs7RUFFWjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFLFNBQVNDLE1BQU0sQ0FBQ2tVLElBQUksRUFBRUMsSUFBSSxFQUFFO0lBQzFCLElBQUkzTCxJQUFJO0lBQ1IsS0FBS0EsSUFBSSxJQUFJMkwsSUFBSSxFQUFFO01BQ2pCLElBQUkxTCxNQUFNLENBQUN4SSxTQUFTLENBQUN5SSxjQUFjLENBQUNoSSxJQUFJLENBQUN5VCxJQUFJLEVBQUUzTCxJQUFJLENBQUMsRUFBRTtRQUNwRDBMLElBQUksQ0FBQzFMLElBQUksQ0FBQyxHQUFHMkwsSUFBSSxDQUFDM0wsSUFBSSxDQUFDO01BQ3pCO0lBQ0Y7SUFDQSxPQUFPMEwsSUFBSTtFQUNiO0VBQ0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsU0FBU0UsTUFBTSxDQUFDQyxLQUFLLEVBQUU7SUFDckIsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM3VSxJQUFJLEtBQUs0VSxNQUFNLENBQUNuVSxTQUFTLENBQUNULElBQUksRUFBRTtNQUNoRDtNQUNBO01BQ0EsT0FBTyxJQUFJNFUsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFDMUI7SUFDQSxJQUFJLENBQUNoVixNQUFNLEdBQUcsQ0FBQztJQUNmLElBQUlnVixLQUFLLEVBQUU7TUFDVCxJQUFJLE9BQU9BLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDN0JBLEtBQUssR0FBRyxJQUFJLENBQUM3VSxJQUFJLENBQUM2VSxLQUFLLENBQUM7TUFDMUI7TUFDQSxJQUFJQSxLQUFLLENBQUNDLFFBQVEsSUFBSUQsS0FBSyxLQUFLQSxLQUFLLENBQUNyUSxNQUFNLEVBQUU7UUFDNUM7UUFDQSxJQUFJLENBQUMzRSxNQUFNLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR2dWLEtBQUs7TUFDakIsQ0FBQyxNQUFNO1FBQ0w7UUFDQSxJQUFJM1YsQ0FBQyxHQUFHMlYsS0FBSyxDQUFDaFYsTUFBTTtRQUNwQixJQUFJLENBQUNBLE1BQU0sR0FBR1gsQ0FBQztRQUNmLE9BQU9BLENBQUMsRUFBRTtVQUNSQSxDQUFDLElBQUksQ0FBQztVQUNOLElBQUksQ0FBQ0EsQ0FBQyxDQUFDLEdBQUcyVixLQUFLLENBQUMzVixDQUFDLENBQUM7UUFDcEI7TUFDRjtJQUNGO0VBQ0Y7RUFFQTBWLE1BQU0sQ0FBQ3BVLE1BQU0sR0FBR0EsTUFBTTtFQUV0Qm9VLE1BQU0sQ0FBQzFGLFFBQVEsR0FBRyxVQUFTL0ssU0FBUyxFQUFFVSxPQUFPLEVBQUU7SUFDN0MsR0FBRztNQUNEQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQzRMLFVBQVU7TUFDNUIsSUFBSTVMLE9BQU8sS0FBS1YsU0FBUyxFQUFFO1FBQ3pCLE9BQU8sSUFBSTtNQUNiO0lBQ0YsQ0FBQyxRQUFRVSxPQUFPO0lBQ2hCLE9BQU8sS0FBSztFQUNkLENBQUM7RUFFRCtQLE1BQU0sQ0FBQ1AsU0FBUyxHQUFHLFVBQVNVLE1BQU0sRUFBRTtJQUNsQyxPQUFPdlEsTUFBTSxDQUFDd1EsSUFBSSxJQUFJQSxJQUFJLENBQUNDLEtBQUssQ0FBQ0YsTUFBTSxDQUFDO0VBQzFDLENBQUM7RUFFRHZVLE1BQU0sQ0FBQ29VLE1BQU0sQ0FBQ25VLFNBQVMsRUFBRTtJQUN2QlQsSUFBSSxFQUFFLGNBQVM2VSxLQUFLLEVBQUU7TUFDcEIsSUFBSTFRLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUlqQyxRQUFRO01BQ25DLElBQUksT0FBTzJTLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDN0IsSUFBSTFRLFNBQVMsQ0FBQytRLGdCQUFnQixFQUFFO1VBQzlCTCxLQUFLLEdBQUcxUSxTQUFTLENBQUMrUSxnQkFBZ0IsQ0FBQ0wsS0FBSyxDQUFDO1FBQzNDLENBQUMsTUFBTSxJQUFJQSxLQUFLLENBQUNNLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7VUFDbENOLEtBQUssR0FBRzFRLFNBQVMsQ0FBQ2lSLGNBQWMsQ0FBQ1AsS0FBSyxDQUFDdkwsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsTUFBTTtVQUNMdUwsS0FBSyxHQUFHMVEsU0FBUyxDQUFDa1Isb0JBQW9CLENBQUNSLEtBQUssQ0FBQztRQUMvQztNQUNGO01BQ0EsT0FBTyxJQUFJRCxNQUFNLENBQUNDLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUR0USxRQUFRLEVBQUUsa0JBQVM4TSxTQUFTLEVBQUU7TUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNaLE9BQU8sS0FBSztNQUNkO01BQ0EsT0FBTyxJQUFJMVIsTUFBTSxDQUFDLFVBQVUsR0FBRzBSLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQytDLElBQUksQ0FDekQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDL0MsU0FBUyxDQUNsQjtJQUNILENBQUM7SUFFRG5PLFFBQVEsRUFBRSxrQkFBU21PLFNBQVMsRUFBRTtNQUM1QixJQUFJblMsQ0FBQyxHQUFHLElBQUksQ0FBQ1csTUFBTTtNQUNuQixJQUFJZ0YsT0FBTztNQUNYLE9BQU8zRixDQUFDLEVBQUU7UUFDUkEsQ0FBQyxJQUFJLENBQUM7UUFDTjJGLE9BQU8sR0FBRyxJQUFJLENBQUMzRixDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDMkYsT0FBTyxDQUFDd00sU0FBUyxFQUFFO1VBQ3RCeE0sT0FBTyxDQUFDd00sU0FBUyxHQUFHQSxTQUFTO1VBQzdCLE9BQU8sSUFBSTtRQUNiO1FBQ0EsSUFBSSxJQUFJLENBQUM5TSxRQUFRLENBQUM4TSxTQUFTLENBQUMsRUFBRTtVQUM1QixPQUFPLElBQUk7UUFDYjtRQUNBeE0sT0FBTyxDQUFDd00sU0FBUyxJQUFJLEdBQUcsR0FBR0EsU0FBUztNQUN0QztNQUNBLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRG5OLFdBQVcsRUFBRSxxQkFBU21OLFNBQVMsRUFBRTtNQUMvQixJQUFJaUUsTUFBTSxHQUFHLElBQUkzVixNQUFNLENBQUMsVUFBVSxHQUFHMFIsU0FBUyxHQUFHLFVBQVUsQ0FBQztNQUM1RCxJQUFJblMsQ0FBQyxHQUFHLElBQUksQ0FBQ1csTUFBTTtNQUNuQixJQUFJZ0YsT0FBTztNQUNYLE9BQU8zRixDQUFDLEVBQUU7UUFDUkEsQ0FBQyxJQUFJLENBQUM7UUFDTjJGLE9BQU8sR0FBRyxJQUFJLENBQUMzRixDQUFDLENBQUM7UUFDakIyRixPQUFPLENBQUN3TSxTQUFTLEdBQUd4TSxPQUFPLENBQUN3TSxTQUFTLENBQUNrQyxPQUFPLENBQUMrQixNQUFNLEVBQUUsR0FBRyxDQUFDO01BQzVEO01BQ0EsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVEdlIsRUFBRSxFQUFFLFlBQVN3UixTQUFTLEVBQUVDLE9BQU8sRUFBRTtNQUMvQixJQUFJQyxVQUFVLEdBQUdGLFNBQVMsQ0FBQzdWLEtBQUssQ0FBQyxLQUFLLENBQUM7TUFDdkMsSUFBSVIsQ0FBQztNQUNMLElBQUkyRixPQUFPO01BQ1gsT0FBTzRRLFVBQVUsQ0FBQzVWLE1BQU0sRUFBRTtRQUN4QjBWLFNBQVMsR0FBR0UsVUFBVSxDQUFDcFMsS0FBSyxFQUFFO1FBQzlCbkUsQ0FBQyxHQUFHLElBQUksQ0FBQ1csTUFBTTtRQUNmLE9BQU9YLENBQUMsRUFBRTtVQUNSQSxDQUFDLElBQUksQ0FBQztVQUNOMkYsT0FBTyxHQUFHLElBQUksQ0FBQzNGLENBQUMsQ0FBQztVQUNqQixJQUFJMkYsT0FBTyxDQUFDNlEsZ0JBQWdCLEVBQUU7WUFDNUI3USxPQUFPLENBQUM2USxnQkFBZ0IsQ0FBQ0gsU0FBUyxFQUFFQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1VBQ3JELENBQUMsTUFBTSxJQUFJM1EsT0FBTyxDQUFDOFEsV0FBVyxFQUFFO1lBQzlCOVEsT0FBTyxDQUFDOFEsV0FBVyxDQUFDLElBQUksR0FBR0osU0FBUyxFQUFFQyxPQUFPLENBQUM7VUFDaEQ7UUFDRjtNQUNGO01BQ0EsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVEeEksR0FBRyxFQUFFLGFBQVN1SSxTQUFTLEVBQUVDLE9BQU8sRUFBRTtNQUNoQyxJQUFJQyxVQUFVLEdBQUdGLFNBQVMsQ0FBQzdWLEtBQUssQ0FBQyxLQUFLLENBQUM7TUFDdkMsSUFBSVIsQ0FBQztNQUNMLElBQUkyRixPQUFPO01BQ1gsT0FBTzRRLFVBQVUsQ0FBQzVWLE1BQU0sRUFBRTtRQUN4QjBWLFNBQVMsR0FBR0UsVUFBVSxDQUFDcFMsS0FBSyxFQUFFO1FBQzlCbkUsQ0FBQyxHQUFHLElBQUksQ0FBQ1csTUFBTTtRQUNmLE9BQU9YLENBQUMsRUFBRTtVQUNSQSxDQUFDLElBQUksQ0FBQztVQUNOMkYsT0FBTyxHQUFHLElBQUksQ0FBQzNGLENBQUMsQ0FBQztVQUNqQixJQUFJMkYsT0FBTyxDQUFDK1EsbUJBQW1CLEVBQUU7WUFDL0IvUSxPQUFPLENBQUMrUSxtQkFBbUIsQ0FBQ0wsU0FBUyxFQUFFQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1VBQ3hELENBQUMsTUFBTSxJQUFJM1EsT0FBTyxDQUFDZ1IsV0FBVyxFQUFFO1lBQzlCaFIsT0FBTyxDQUFDZ1IsV0FBVyxDQUFDLElBQUksR0FBR04sU0FBUyxFQUFFQyxPQUFPLENBQUM7VUFDaEQ7UUFDRjtNQUNGO01BQ0EsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVEbEosS0FBSyxFQUFFLGlCQUFXO01BQ2hCLElBQUlwTixDQUFDLEdBQUcsSUFBSSxDQUFDVyxNQUFNO01BQ25CLElBQUlnRixPQUFPO01BQ1gsT0FBTzNGLENBQUMsRUFBRTtRQUNSQSxDQUFDLElBQUksQ0FBQztRQUNOMkYsT0FBTyxHQUFHLElBQUksQ0FBQzNGLENBQUMsQ0FBQztRQUNqQixPQUFPMkYsT0FBTyxDQUFDaVIsYUFBYSxFQUFFLEVBQUU7VUFDOUJqUixPQUFPLENBQUNpRixXQUFXLENBQUNqRixPQUFPLENBQUNrUixTQUFTLENBQUM7UUFDeEM7TUFDRjtNQUNBLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRHRCLEtBQUssRUFBRSxpQkFBVztNQUNoQixPQUFPLElBQUlHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUI7RUFDRixDQUFDLENBQUM7RUFFRixJQUFJLElBQTBDLEVBQUU7SUFDOUN0VSxtQ0FBTyxZQUFXO01BQ2hCLE9BQU9zVSxNQUFNO0lBQ2YsQ0FBQztBQUFBLG9HQUFDO0VBQ0osQ0FBQyxNQUFNLEVBR047QUFDSCxDQUFDLEdBQUcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDekxILFVBQVV2VTtFQUNUOztFQUNzQixLQUFxQjJWLEdBRXpDMVYsaUNBQU8sQ0FBQyw0SUFBcUJEO0FBQUFBO0FBQUFBO0FBQUFBLHdHQUc3Qm1FLFNBQ2lFekY7QUFBQUEsQ0FScEUsQ0FVRSxVQUFTRjtFQUNWOztFQVVBLFNBQVMwQixFQUFRdUUsR0FBTXBFO0lBQ3JCLFlBQXNDd0UsTUFBbENoRCxTQUFTNkMsS0FBS0MsTUFBTUMsWUFFZixPQUVKZ1IsUUFBUUEsS0FBS3ZWLFlBQVlILEVBQVFFLFVBQVVDLGdCQUszQ29FLEtBQVNBLEVBQUtqRixVQU9uQm9XLEtBQUtuUixPQUFPQSxHQUNabVIsS0FBSzlRLE1BQU1MLEVBQUtqRixRQUNoQm9XLEtBQUs3USxZQUFZMUUsSUFDakJ1VixLQUFLNVEsZ0JBVEg0USxLQUFLblcsUUFBUUMsSUFDWCxpRUFDQStFLE1BTEssSUFBSXZFLEVBQVF1RSxHQUFNcEU7RUFBQUE7RUEyNEM3QixPQTUzQ0E3QixFQUFFMkIsT0FBT0QsRUFBUUUsV0FBVztJQUMxQkMsU0FBUztNQUVQeUQsV0FBVztNQUVYbUIsaUJBQWlCO01BRWpCQyxjQUFjO01BRWRDLGNBQWM7TUFFZHBCLGVBQWU7TUFFZnFCLGFBQWE7TUFFYkMsZUFBZTtNQUVmQyxnQkFBZ0I7TUFFaEJDLGNBQWM7TUFFZEMsWUFBWTtNQUVaQyxtQkFBbUI7TUFFbkJDLGlCQUFpQjtNQUVqQkMsbUJBQW1CO01BRW5CeEMsYUFBYTtNQUVieUMsV0FBVztNQUVYQyxXQUFXO01BRVhDLFlBQVk7TUFFWkMsZ0JBQWdCO01BRWhCN0QsY0FBYztNQUVkQyxlQUFlO01BRWZFLGlCQUFpQjtNQUVqQkosYUFBYTtNQUViK0QsZ0JBQWdCO01BR2hCQyxvQkFBbUI7TUFHbkJDLGNBQWE7TUFNYkMsZ0JBQWU7TUFFZkMseUJBQXdCO01BRXhCQyw2QkFBNEI7TUFFNUJDLHlCQUF3QjtNQUV4QkMsMkJBQTBCO01BRTFCQyxnQkFBZTtNQUVmQyxvQkFBbUI7TUFFbkJDLHVCQUFzQjtNQUV0QkMscUJBQW9CO01BRXBCQyw2QkFBNEI7TUFFNUJDLHFCQUFvQjtNQUVwQkMsZ0JBQWU7TUFFZkMsV0FBVTtNQUdWQyxhQUFZO01BRVpDLGlCQUFnQjtNQUVoQkMsaUJBQWdCO01BRWhCQyxtQkFBbUI7TUFFbkJDLG9CQUFvQjtNQUlwQnhHLE9BQU87TUFFUHlHLGNBQWM7TUFFZEMsaUJBQWlCO01BR2pCQywrQkFBMEIxQztNQUcxQlAsWUFBT087TUFHUDJDLGFBQVEzQztNQUlSNEMsZUFBVTVDO01BSVY2QyxjQUFTN0M7TUFJVDhDLGlCQUFZOUM7TUFJWitDLHNCQUFpQi9DO01BR2pCZ0QsY0FBU2hEO01BSVRpRCxlQUFVakQ7SUFBQUE7SUFHWmtELGlCQUFpQjtNQUNmbEIscUJBQW9CO01BQ3BCVCx5QkFBd0I7TUFDeEJFLHlCQUF3QjtNQUN4QkMsMkJBQTBCO01BQzFCQyxnQkFBZTtNQUNmQyxvQkFBbUI7TUFDbkJDLHVCQUFzQjtNQUN0QkksZ0JBQWU7TUFDZkksaUJBQWdCO0lBQUE7SUFHbEJ6SCxTQUNFMEUsT0FBTzFFLFdBQXlDLHFCQUF2QjBFLE9BQU8xRSxRQUFRQyxNQUNwQ3lFLE9BQU8xRSxVQUNQO01BQUVDLEtBQUs7SUFBQTtJQUdic0ksU0FBUyxVQUFVeEQ7TUFDakIsSUF1QkltRTtRQXZCQVgsSUFBVTtVQUNaQyxZQUMwQnBELE1BQXhCVixPQUFPK0QsZ0JBQ04vRCxPQUFPZ0UsaUJBQWlCdEcsb0JBQW9Cc0c7UUFBQUE7UUFFN0NDLElBQWM7VUFDaEJDLGtCQUFrQjtZQUNoQkMsS0FBSztZQUNMQyxRQUFRO1VBQUE7VUFFVkMsZUFBZTtZQUNiRixLQUFLO1lBQ0xDLFFBQVE7VUFBQTtVQUVWRSxhQUFhO1lBQ1hILEtBQUs7WUFDTEMsUUFBUTtVQUFBO1VBRVZHLFlBQVk7WUFDVkosS0FBSztZQUNMQyxRQUFRO1VBQUE7UUFBQTtNQUlaLEtBQUtJLEtBQVFQLEdBQ1gsSUFDRVEsT0FBT3hJLFVBQVV5SSxlQUFlaEksS0FBS3VILEdBQWFPLFdBQzFCOUQsTUFBeEJMLEVBQVFHLE1BQU1nRSxJQUNkO1FBQ0FYLEVBQVFVLGFBQWFOLEVBQVlPLElBQ2pDWCxFQUFRVSxXQUFXSSxPQUFPSDtRQUMxQjtNQUFBO01BTUosU0FBU0k7UUFDUCxJQUNJSjtVQUNBSztVQUZBTixJQUFhVixFQUFRVTtRQUd6QjdHLFNBQVM2QyxLQUFLcEIsWUFBWWtCLElBQ3RCa0UsTUFDRkMsSUFBT0QsRUFBV0ksS0FBS0csTUFBTSxJQUFJLEtBQUssaUJBQ1ZwRSxNQUF4QkwsRUFBUUcsTUFBTWdFLE9BQ2hCbkUsRUFBUUcsTUFBTWdFLEtBQVEsaUJBQ3RCSyxJQUFhN0UsT0FDVitFLGlCQUFpQjFFLEdBQ2pCMkUsaUJBQWlCVCxFQUFXSCxTQUFTLGNBQ3hDUCxFQUFRb0IsWUFBWTtVQUNsQmIsUUFBUUcsRUFBV0g7VUFDbkJPLE1BQU1IO1VBQ05VLFlBQVc7VUFDWEwsY0FBY0EsS0FBNkIsV0FBZkE7UUFBQUEsVUFJR25FLE1BQWpDTCxFQUFRRyxNQUFNMkUsbUJBQ2hCdEIsRUFBUXNCLGlCQUFpQixJQUN6QjlFLEVBQVFHLE1BQU0yRSxpQkFBaUIsV0FDL0J0QixFQUFRc0IsZUFBZUMsVUFHc0IsY0FGM0NwRixPQUNHK0UsaUJBQWlCMUUsR0FDakIyRSxpQkFBaUIsb0JBQ3RCM0UsRUFBUUcsTUFBTTJFLGlCQUFpQixTQUMvQnRCLEVBQVFzQixlQUFlRSxRQUdzQixZQUYzQ3JGLE9BQ0crRSxpQkFBaUIxRSxHQUNqQjJFLGlCQUFpQixxQkFFeEJ0SCxTQUFTNkMsS0FBSytFLFlBQVlqRjtNQUFBQTtNQU81QixPQUxJM0MsU0FBUzZDLE9BQ1hxRSxNQUVBdkssRUFBRXFELFVBQVU2QixHQUFHLG9CQUFvQnFGLElBRTlCZjtJQUFBQSxDQTlFQSxDQWlGTm5HLFNBQVNDLGNBQWM7SUFFMUI0SCx1QkFDRXZGLE9BQU91Rix5QkFDUHZGLE9BQU93RiwrQkFDUHhGLE9BQU95RjtJQUVUQyxzQkFDRTFGLE9BQU8wRix3QkFDUDFGLE9BQU8yRixxQ0FDUDNGLE9BQU80Riw4QkFDUDVGLE9BQU82RjtJQUVUaEYsWUFBWTtNQUVWLElBREE0USxLQUFLM0wsbUJBQ3FCLE1BQXRCMkwsS0FBSzFMLGNBQ1AsUUFBTztNQUVUMEwsS0FBS3pMLHNCQUVMeUwsS0FBS2xPLFFBQVFrTyxLQUFLaFYsUUFFbEJnVixLQUFLeEwsbUJBRUR3TCxLQUFLdlYsUUFBUTZHLGtCQUNmME8sS0FBSzNSO0lBQUFBO0lBSVRvRyxPQUFPLGVBQVNDLEdBQUlDO01BQ2xCcEcsT0FBT0MsYUFBYXdSLEtBQUt2UjtNQUN6QixJQUNJbUc7UUFDQUM7UUFDQUM7UUFIQTlKLElBQVFnVixLQUFLaFY7TUFJakIsSUFBSUEsTUFBVTBKLEtBQW1CLE1BQWJzTCxLQUFLOVEsS0FBekI7UUFNQSxJQUZFeUYsSUFER0EsS0FDS3FMLEtBQUt2VixRQUFRaUgsaUJBRW5Cc08sS0FBSzVOLFFBQVFvQixXQUFXO1VBa0IxQixLQWpCS3dNLEtBQUt2VixRQUFRMkcsZUFDaEJzRCxJQUFLc0wsS0FBS2pMLE9BQU9MLEtBR25CRSxJQUFZSSxLQUFLQyxJQUFJakssSUFBUTBKLE1BQU8xSixJQUFRMEosSUFFeENzTCxLQUFLdlYsUUFBUTJHLGVBQ2Z5RCxJQUFtQkQsSUFDbkJBLEtBQWFvTCxLQUFLOUssVUFBVThLLEtBQUtqTCxPQUFPTCxNQUFPc0wsS0FBSzdLLGdCQUdsQ04sTUFDaEJILEtBQU1FLElBQVlvTCxLQUFLOVEsTUFBTXdGLEtBR2pDSSxJQUFPRSxLQUFLQyxJQUFJakssSUFBUTBKLEtBQU0sR0FFdkJJLElBQ0xBLEtBQVEsR0FDUmtMLEtBQUs1SyxLQUNINEssS0FBS2pMLFFBQWEvSixJQUFMMEosSUFBYUEsSUFBSzFKLEtBQVM4SixJQUFPLElBQy9Da0wsS0FBSzdLLGFBQWFQLEdBQ2xCO1VBR0pGLElBQUtzTCxLQUFLakwsT0FBT0wsSUFDakJzTCxLQUFLNUssS0FBS3BLLEdBQU9nVixLQUFLN0ssYUFBYVAsR0FBV0QsSUFDOUNxTCxLQUFLNUssS0FBS1YsR0FBSSxHQUFHQyxJQUNicUwsS0FBS3ZWLFFBQVEyRyxjQUNmNE8sS0FBSzVLLEtBQ0g0SyxLQUFLakwsT0FBT0wsSUFBS0UsS0FDZm9MLEtBQUs3SyxhQUFhUCxHQUNwQjtRQUFBLE9BSUpGLElBQUtzTCxLQUFLakwsT0FBT0wsSUFDakJzTCxLQUFLM0ssUUFBUXJLLEtBQVNnVixLQUFLN0ssWUFBWVQsS0FBTXNMLEtBQUs3SyxZQUFZUjtRQUVoRXFMLEtBQUtsTyxRQUFRNEM7TUFBQUE7SUFBQUE7SUFHZlksVUFBVTtNQUNSLE9BQU8wSyxLQUFLaFY7SUFBQUE7SUFHZHVLLFdBQVc7TUFDVCxPQUFPeUssS0FBSzlRO0lBQUFBO0lBR2RzRyxNQUFNO01BQUEsQ0FDQXdLLEtBQUt2VixRQUFRMkcsY0FBYzRPLEtBQUtoVixVQUNsQ2dWLEtBQUt2TCxNQUFNdUwsS0FBS2hWLFFBQVE7SUFBQTtJQUk1QnlLLE1BQU07TUFBQSxDQUNBdUssS0FBS3ZWLFFBQVEyRyxjQUFjNE8sS0FBS2hWLFFBQVFnVixLQUFLOVEsTUFBTSxNQUNyRDhRLEtBQUt2TCxNQUFNdUwsS0FBS2hWLFFBQVE7SUFBQTtJQUk1QnFELE1BQU0sY0FBU3FIO01BQ2IsSUFBSWxLLElBQU93VTtRQUNQckssSUFDRnFLLEtBQUtoVixTQUE2QyxVQUFwQ2dWLEtBQUt2VixRQUFRK0csc0JBQWdDLElBQUk7TUFDakVqRCxPQUFPQyxhQUFhd1IsS0FBS3ZSLFVBQ3pCdVIsS0FBSzVSLFdBQVdzSCxLQUFRc0ssS0FBS3ZWLFFBQVE4RyxtQkFDTCxJQUE1QnlPLEtBQUtwSyxTQUFTb0ssS0FBS2hWLFdBQ3JCZ1YsS0FBS3ZSLFVBQVV1UixLQUFLalMsWUFDaEJpUyxLQUFLbE0seUJBQXlCa00sS0FBS3ZMLFNBQ25DLFVBQVNDLEdBQUlDO1FBQ1huSixFQUFLcUssbUJBQW1CckssRUFBS3NJLHNCQUFzQjdJLEtBQ2pEc0QsUUFDQTtVQUNFL0MsRUFBS2lKLE1BQU1DLEdBQUlDO1FBQUFBO01BQUFBLEdBSXZCLENBQUNnQixHQUFXcUssS0FBS3ZWLFFBQVFrSCwyQkFDekJxTyxLQUFLNVIsWUFHVDRSLEtBQUs5UixVQUFVakIsU0FBUytTLEtBQUt2VixRQUFRa0Y7SUFBQUE7SUFHdkN4RSxPQUFPO01BQ0xvRCxPQUFPQyxhQUFhd1IsS0FBS3ZSLFVBQ3pCdVIsS0FBSzVSLFdBQVcsTUFDWjRSLEtBQUsvTCx5QkFDUCtMLEtBQUsvTCxxQkFBcUJoSixLQUFLc0QsUUFBUXlSLEtBQUtuSyxtQkFDNUNtSyxLQUFLbkssbUJBQW1CLE9BRTFCbUssS0FBSzlSLFVBQVVELFlBQVkrUixLQUFLdlYsUUFBUWtGO0lBQUFBO0lBRzFDbUcsS0FBSyxhQUFTakg7TUFDWixJQUFJNUY7TUFrQkosS0FqQks0RixFQUFLa0gsV0FFUmxILElBQU9tSCxNQUFNeEwsVUFBVTZJLE1BQU1wSSxLQUFLNEQsS0FFL0JtUixLQUFLblIsS0FBS2tILFdBRWJpSyxLQUFLblIsT0FBT21ILE1BQU14TCxVQUFVNkksTUFBTXBJLEtBQUsrVSxLQUFLblIsUUFFOUNtUixLQUFLblIsT0FBT21SLEtBQUtuUixLQUFLa0gsT0FBT2xILElBQzdCbVIsS0FBSzlRLE1BQU04USxLQUFLblIsS0FBS2pGLFFBQ04sSUFBWG9XLEtBQUs5USxPQUF1QyxTQUE1QjhRLEtBQUt2VixRQUFRMkcsZUFDL0I0TyxLQUFLdlYsUUFBUTJHLGNBQWEsR0FDMUI0TyxLQUFLOVIsVUFBVUQsWUFBWStSLEtBQUt2VixRQUFRZ0YsaUJBRTFDdVEsS0FBSzlSLFVBQ0ZELFlBQVkrUixLQUFLdlYsUUFBUWlGLGdCQUN6QnpCLFlBQVkrUixLQUFLdlYsUUFBUStFLGNBQ3ZCdkcsSUFBSStXLEtBQUs5USxNQUFNTCxFQUFLakYsUUFBUVgsSUFBSStXLEtBQUs5USxLQUFLakcsS0FBSyxHQUNsRCtXLEtBQUsvSixTQUFTaE4sSUFDZCtXLEtBQUs5SixjQUFjak47TUFFckIrVyxLQUFLOUssVUFBVXRMLFNBQVNvVyxLQUFLOVEsS0FDN0I4USxLQUFLN0osWUFBVztJQUFBO0lBR2xCQyxhQUFhO01BQ1g0SixLQUFLM1EsZ0JBQWdCZ0gsU0FDckIySixLQUFLMUosbUJBQ0wwSixLQUFLekosU0FBUztJQUFBO0lBR2hCQyxhQUFhO01BQ1gsSUFBSS9MLElBQVV1VixLQUFLdlY7TUFDbkJ1VixLQUFLdkoseUJBRUx1SixLQUFLN1UsU0FDTDZVLEtBQUs5UixVQUFVLEdBQUdhLE1BQU0ySCxVQUFVLFFBQ2xDc0osS0FBSzlSLFVBQ0ZELFlBQVl4RCxFQUFROEUsY0FDcEJ0QixZQUFZeEQsRUFBUStFLGFBQ3BCdkIsWUFBWXhELEVBQVFnRixlQUNwQnhCLFlBQVl4RCxFQUFRaUYsaUJBQ25CakYsRUFBUXdHLHVCQUNWaEYsU0FBUzZDLEtBQUtDLE1BQU00SCxXQUFXcUosS0FBS3BKLG9CQUVsQ29KLEtBQUt2VixRQUFRNkYsZUFDZjBQLEtBQUs1SixlQUVINEosS0FBS3ZWLFFBQVF5SCxZQUNmOE4sS0FBS3ZWLFFBQVF5SCxTQUFTakgsS0FBSytVO0lBQUFBO0lBSS9CbkosT0FBTztNQUNMLElBQUlyTCxJQUFPd1U7TUFZUEEsS0FBS3ZWLFFBQVF3SCxXQUNmK04sS0FBS3ZWLFFBQVF3SCxRQUFRaEgsS0FBSytVLE9BRXhCQSxLQUFLNU4sUUFBUVUsY0FBY2tOLEtBQUt2VixRQUFRNEYscUJBQzFDMlAsS0FBSzlSLFVBQVVKLEdBQUdrUyxLQUFLNU4sUUFBUVUsV0FBV0osS0FWNUMsU0FBU29FLEVBQWFwSTtRQUNoQkEsRUFBTTNDLFdBQVdQLEVBQUswQyxVQUFVLE9BQ2xDMUMsRUFBSzBDLFVBQVU2SSxJQUFJdkwsRUFBSzRHLFFBQVFVLFdBQVdKLEtBQUtvRSxJQUNoRHRMLEVBQUtnTDtNQUFBQSxJQVFQd0osS0FBSzlSLFVBQVVELFlBQVkrUixLQUFLdlYsUUFBUThFLGlCQUV4Q3lRLEtBQUt4SjtJQUFBQTtJQUlUekIsUUFBUSxnQkFBUy9KO01BRWYsUUFBUWdWLEtBQUs5USxNQUFPbEUsSUFBUWdWLEtBQUs5USxPQUFROFEsS0FBSzlRO0lBQUFBO0lBR2hEa0csTUFBTSxjQUFTcEssR0FBT2dNLEdBQU1yQztNQUMxQnFMLEtBQUsvSSxXQUFXak0sR0FBT2dNLEdBQU1yQyxJQUM3QnFMLEtBQUs5SyxVQUFVbEssS0FBU2dNO0lBQUFBO0lBRzFCdkQsV0FBVyxtQkFBU3pJLEdBQU81QixHQUFHOE4sR0FBR3ZDO01BQy9CLElBQUtxTCxLQUFLekosT0FBT3ZMLElBQWpCO1FBQ0EsSUFBSStELElBQVFpUixLQUFLekosT0FBT3ZMLEdBQU8rRDtVQUMzQitELElBQWFrTixLQUFLNU4sUUFBUVU7VUFDMUJVLElBQVl3TSxLQUFLNU4sUUFBUW9CO1FBQzdCekUsRUFBTStELEVBQVdJLE9BQU8sY0FBY3lCLElBQVEsTUFDOUM1RixFQUFNeUUsRUFBVU4sUUFDZCxlQUNBOUosSUFDQSxTQUNBOE4sSUFDQSxTQUNDMUQsRUFBVUosYUFBYSxtQkFBbUI7TUFBQTtJQUFBO0lBRy9DNkQsWUFBWSxvQkFBU2pNLEdBQU81QixHQUFHdUw7TUFDN0JxTCxLQUFLdk0sVUFBVXpJLEdBQU81QixHQUFHLEdBQUd1TDtJQUFBQTtJQUc5QndDLFlBQVksb0JBQVNuTSxHQUFPa00sR0FBR3ZDO01BQzdCcUwsS0FBS3ZNLFVBQVV6SSxHQUFPLEdBQUdrTSxHQUFHdkM7SUFBQUE7SUFHOUJVLFNBQVMsaUJBQVMrQixHQUFNMUMsR0FBSUM7TUFDMUIsSUFBS0EsR0FJTCxJQUFJbkosSUFBT3dVO1FBQ1AxSSxJQUFRLElBQUlDLE9BQU9DO1FBQ25CQyxJQUFRbEosT0FBT21KLFlBQVk7VUFDN0IsSUFBSUMsSUFBVyxJQUFJSixPQUFPQyxZQUFZRjtVQUN0QyxJQUFlM0MsSUFBWGdELEdBSUYsT0FIQW5NLEVBQUs2RCxnQkFBZ0IsR0FBR04sTUFBTXNJLE9BQU8zQyxJQUFLLE1BQzFDbEosRUFBS2dKLHdCQUNMakcsT0FBT3FKLGNBQWNIO1VBR3ZCak0sRUFBSzZELGdCQUFnQixHQUFHTixNQUFNc0ksUUFDM0IzQyxJQUFLMEMsTUFBU3BDLEtBQUs2QyxNQUFPRixJQUFXaEQsSUFBUyxPQUFPLE9BQ3REeUMsSUFDQTtRQUFBLEdBQ0QsUUFqQkQ0SSxLQUFLM1EsZ0JBQWdCLEdBQUdOLE1BQU1zSSxPQUFPM0MsSUFBSztJQUFBO0lBb0I5Qy9GLGdCQUFnQix3QkFBU0Q7TUFDbkJBLEVBQU1DLGlCQUNSRCxFQUFNQyxtQkFFTkQsRUFBTW9KLGVBQWM7SUFBQTtJQUl4QkMsaUJBQWlCLHlCQUFTcko7TUFDcEJBLEVBQU1xSixrQkFDUnJKLEVBQU1xSixvQkFFTnJKLEVBQU1zSixnQkFBZTtJQUFBO0lBSXpCQyxVQUFVO01BQ1IrSCxLQUFLN0osWUFBVztJQUFBO0lBR2xCK0IsYUFBYSxxQkFBU3hKO01BSWxCQSxFQUFNeUosU0FDVSxNQUFoQnpKLEVBQU15SixTQUNvQixZQUExQnpKLEVBQU0zQyxPQUFPcU0sWUFDYSxZQUExQjFKLEVBQU0zQyxPQUFPcU0sYUFJYjFKLEVBQU1DLG1CQUNKRCxFQUFNMkosaUJBQWlCM0osR0FBTzRKLFVBQVUsQ0FDeEM7UUFDRUMsT0FBTzdKLEVBQU02SjtRQUNiQyxPQUFPOUosRUFBTThKO01BQUFBLElBR2pCd0gsS0FBSzFOLGFBQWE1RDtJQUFBQTtJQUl0QitKLGFBQWEscUJBQVMvSjtNQUNoQnNSLEtBQUt0SCxnQkFDTGhLLEVBQU0ySixpQkFBaUIzSixHQUFPNEosVUFBVSxDQUN4QztRQUNFQyxPQUFPN0osRUFBTTZKO1FBQ2JDLE9BQU85SixFQUFNOEo7TUFBQUEsSUFHakJ3SCxLQUFLckgsWUFBWWpLO0lBQUFBO0lBSXJCa0ssV0FBVyxtQkFBU2xLO01BQ2RzUixLQUFLdEgsZUFDUHNILEtBQUtuSCxXQUFXbkssV0FDVHNSLEtBQUt0SDtJQUFBQTtJQUloQkksWUFBWSxvQkFBU3BLO01BQ25CLElBQUlzUixLQUFLdEgsWUFBWTtRQUNuQixJQUFJM00sSUFBUzJDLEVBQU0zQztVQUNmZ04sSUFBVXJLLEVBQU1zSztRQUNmRCxNQUFZQSxNQUFZaE4sS0FBV25ELEVBQUVxUSxTQUFTbE4sR0FBUWdOLE9BQ3pEaUgsS0FBS3BILFVBQVVsSztNQUFBQTtJQUFBQTtJQUtyQjRELGNBQWMsc0JBQVM1RDtNQUNqQnNSLEtBQUt2VixRQUFRdUcsOEJBQ2ZnUCxLQUFLakksZ0JBQWdCcko7TUFJdkIsSUFBSTRKLEtBQVc1SixFQUFNMkosaUJBQWlCM0osR0FBTzRKLFFBQVE7TUFDckQwSCxLQUFLdEgsYUFBYTtRQUVoQnRQLEdBQUdrUCxFQUFRQztRQUNYckIsR0FBR29CLEVBQVFFO1FBRVg5QyxNQUFNNkIsS0FBSzJCO01BQUFBLEdBR2I4RyxLQUFLN0csbUJBQWNsSyxHQUVuQitRLEtBQUs1RyxhQUFhO0lBQUE7SUFHcEJULGFBQWEscUJBQVNqSztNQUNoQnNSLEtBQUt2VixRQUFRdUcsOEJBQ2ZnUCxLQUFLakksZ0JBQWdCcko7TUFJdkIsSUFHSTRLO1FBQ0FDO1FBSkFqQixLQUFXNUosRUFBTTJKLGlCQUFpQjNKLEdBQU80SixRQUFRO1FBQ2pEZSxLQUFTM0ssRUFBTTJKLGlCQUFpQjNKLEdBQU8ySztRQUN2Q3JPLElBQVFnVixLQUFLaFY7TUFJakIsTUFBcUIsSUFBakJzTixFQUFRMU8sVUFBZXlQLEtBQW1CLE1BQVZBLElBa0JwQyxJQWZJMkcsS0FBS3ZWLFFBQVF5RyxpQkFDZnhDLEVBQU1DLGtCQUdScVIsS0FBSzVHLGFBQWE7UUFDaEJoUSxHQUFHa1AsRUFBUUMsUUFBUXlILEtBQUt0SCxXQUFXdFA7UUFDbkM4TixHQUFHb0IsRUFBUUUsUUFBUXdILEtBQUt0SCxXQUFXeEI7TUFBQUEsR0FFckNvQyxJQUFjMEcsS0FBSzVHLFdBQVdoUSxRQUVMNkYsTUFBckIrUSxLQUFLN0csZ0JBQ1A2RyxLQUFLN0csY0FDSDZHLEtBQUs3RyxlQUNMbkUsS0FBS0MsSUFBSXFFLEtBQWV0RSxLQUFLQyxJQUFJK0ssS0FBSzVHLFdBQVdsQyxLQUVoRDhJLEtBQUs3RyxhQTZCUjZHLEtBQUs3SSxXQUFXbk0sR0FBT2dWLEtBQUs1RyxXQUFXbEMsSUFBSThJLEtBQUs5SyxVQUFVbEssSUFBUSxRQUxsRSxLQXRCQTBELEVBQU1DLGtCQUVOSixPQUFPQyxhQUFhd1IsS0FBS3ZSLFVBQ3JCdVIsS0FBS3ZWLFFBQVEyRyxhQUNmbUksSUFBVSxDQUFDeUcsS0FBS2pMLE9BQU8vSixJQUFRLElBQUlBLEdBQU9nVixLQUFLakwsT0FBTy9KLElBQVEsT0FJOURnVixLQUFLNUcsV0FBV2hRLElBQUlrUSxNQUVmdE8sS0FBdUIsSUFBZHNPLEtBQ1h0TyxNQUFVZ1YsS0FBSzlRLE1BQU0sS0FBS29LLElBQWMsSUFDckN0RSxLQUFLQyxJQUFJcUUsS0FBZTBHLEtBQUs3SyxhQUFhLElBQzFDLEdBQ05vRSxJQUFVLENBQUN2TyxJQUNQQSxLQUNGdU8sRUFBUUMsS0FBS3hPLElBQVEsSUFFbkJBLElBQVFnVixLQUFLOVEsTUFBTSxLQUNyQnFLLEVBQVFFLFFBQVF6TyxJQUFRLEtBR3JCdU8sRUFBUTNQLFNBQ2JvQixJQUFRdU8sRUFBUUcsT0FDaEJzRyxLQUFLL0ksV0FBV2pNLEdBQU9zTyxJQUFjMEcsS0FBSzlLLFVBQVVsSyxJQUFRO0lBQUE7SUFPbEU2TixZQUFZLG9CQUFTbks7TUFDZnNSLEtBQUt2VixRQUFRdUcsOEJBQ2ZnUCxLQUFLakksZ0JBQWdCcko7TUFFdkIsSUFpQklrRztRQUNBcUY7UUFDQUM7UUFDQUM7UUFDQUM7UUFyQkFwUCxJQUFRZ1YsS0FBS2hWO1FBQ2IySixJQUFRcUwsS0FBS3ZWLFFBQVFpSDtRQUNyQnlELElBQWE2SyxLQUFLN0s7UUFDbEJ3RSxJQUFrQkMsT0FBT3JDLEtBQUsyQixRQUFROEcsS0FBS3RILFdBQVdoRCxRQUFRO1FBRTlEbUUsSUFDREYsS0FBaUQsS0FBOUIzRSxLQUFLQyxJQUFJK0ssS0FBSzVHLFdBQVdoUSxNQUM3QzRMLEtBQUtDLElBQUkrSyxLQUFLNUcsV0FBV2hRLEtBQUsrTCxJQUFhO1FBRXpDMkUsS0FDQTlPLEtBQTZCLElBQXBCZ1YsS0FBSzVHLFdBQVdoUSxLQUMxQjRCLE1BQVVnVixLQUFLOVEsTUFBTSxLQUFLOFEsS0FBSzVHLFdBQVdoUSxJQUFJO1FBQzdDMlEsS0FDREYsS0FDRG1HLEtBQUt2VixRQUFRcUcseUJBQ1g2SSxLQUFpRCxLQUE5QjNFLEtBQUtDLElBQUkrSyxLQUFLNUcsV0FBV2xDLE1BQzVDbEMsS0FBS0MsSUFBSStLLEtBQUs1RyxXQUFXbEMsS0FBSzhJLEtBQUtoRyxjQUFjO01BTWpEZ0csS0FBS3ZWLFFBQVEyRyxlQUNmMEksS0FBZSxJQUdqQmxGLElBQVlvTCxLQUFLNUcsV0FBV2hRLElBQUksS0FBSyxJQUFJLEdBQ3BDNFcsS0FBSzdHLGNBcUNKWSxJQUNGaUcsS0FBS25KLFVBR0xtSixLQUFLN0ksV0FBV25NLEdBQU8sR0FBRzJKLEtBeEN4QmtGLE1BQWlCQyxLQUNuQkcsSUFBZWpQLElBQVE0SixHQUN2QnNGLElBQWdCbFAsSUFBUTRKLEdBQ3hCdUYsSUFBa0JoRixJQUFhUCxHQUMvQndGLEtBQW9CakYsSUFBYVAsR0FDN0JvTCxLQUFLdlYsUUFBUTJHLGNBQ2Y0TyxLQUFLNUssS0FBSzRLLEtBQUtqTCxPQUFPa0YsSUFBZUUsR0FBaUIsSUFDdEQ2RixLQUFLNUssS0FBSzRLLEtBQUtqTCxPQUFPL0osSUFBUSxJQUFJNEosSUFBWXdGLEdBQWtCLE1BQ3ZDLEtBQWhCSCxLQUFxQkEsSUFBZStGLEtBQUs5USxPQUNsRDhRLEtBQUs1SyxLQUFLNkUsR0FBY0UsR0FBaUIsSUFFM0M2RixLQUFLNUssS0FBS3BLLEdBQU9nVixLQUFLOUssVUFBVWxLLEtBQVNtUCxHQUFpQnhGLElBQzFEcUwsS0FBSzVLLEtBQ0g0SyxLQUFLakwsT0FBT21GLElBQ1o4RixLQUFLOUssVUFBVThLLEtBQUtqTCxPQUFPbUYsTUFBa0JDLEdBQzdDeEYsSUFFRjNKLElBQVFnVixLQUFLakwsT0FBT21GLElBQ3BCOEYsS0FBS2xPLFFBQVE5RyxNQUdUZ1YsS0FBS3ZWLFFBQVEyRyxjQUNmNE8sS0FBSzVLLEtBQUs0SyxLQUFLakwsT0FBTy9KLElBQVEsS0FBS21LLEdBQVlSLElBQy9DcUwsS0FBSzVLLEtBQUtwSyxHQUFPLEdBQUcySixJQUNwQnFMLEtBQUs1SyxLQUFLNEssS0FBS2pMLE9BQU8vSixJQUFRLElBQUltSyxHQUFZUixPQUUxQzNKLEtBQ0ZnVixLQUFLNUssS0FBS3BLLElBQVEsSUFBSW1LLEdBQVlSLElBRXBDcUwsS0FBSzVLLEtBQUtwSyxHQUFPLEdBQUcySixJQUNoQjNKLElBQVFnVixLQUFLOVEsTUFBTSxLQUNyQjhRLEtBQUs1SyxLQUFLcEssSUFBUSxHQUFHbUssR0FBWVI7SUFBQUE7SUFjM0MwRixlQUFlLHVCQUFTM0w7TUFDbEJzUixLQUFLdEgsZUFDUHNILEtBQUtuSCxXQUFXbkssV0FDVHNSLEtBQUt0SDtJQUFBQTtJQUloQmxFLGlCQUFpQix5QkFBUzlGO01BQ3hCLElBQUkrRixJQUFRdUwsS0FBS3pKLE9BQU95SixLQUFLaFY7TUFDeEIwRCxLQUFTK0YsTUFBVS9GLEVBQU0zQyxXQUN4QmlVLEtBQUs1UixZQUNQNFIsS0FBSzNSLFFBRVAyUixLQUFLalMsV0FBV2lTLEtBQUt2VixRQUFRc0gsWUFBWSxDQUFDaU8sS0FBS2hWLE9BQU95SjtJQUFBQTtJQUkxRDZGLFlBQVksb0JBQVM1TDtNQUNuQixJQUVJMUQ7UUFGQWUsSUFBUzJDLEVBQU0zQyxVQUFVMkMsRUFBTTZMO1FBQy9CdlEsSUFBUytCLEtBQVVBLEVBQU95TztNQUV6QnpPLEtBQVcvQixNQUdoQmdCLElBQVFnVixLQUFLdkYsYUFBYXpRLElBQzFCcEIsRUFBRW9CLEdBQVFpRSxZQUFZK1IsS0FBS3ZWLFFBQVFvRixvQkFDaEIsWUFBZm5CLEVBQU01QyxRQUNSbEQsRUFBRW9CLEdBQVFpRCxTQUFTK1MsS0FBS3ZWLFFBQVFxRixrQkFDaENrUSxLQUFLcEssU0FBUzVLLEtBQVMsS0FFdkJnVixLQUFLcEssU0FBUzVLLEtBQVMsR0FHckJlLEVBQU8yTyxlQUFlc0YsS0FBSzlSLFVBQVUsR0FBR3dNLGlCQUMxQzNPLEVBQU9nRCxNQUFNQyxZQUFZZ1IsS0FBSzlSLFVBQVUsR0FBR3dNLGVBRXpDc0YsS0FBSzVSLFlBQVk0UixLQUFLekosT0FBT3lKLEtBQUtoVixXQUFXaEIsS0FDL0NnVyxLQUFLM1IsUUFFUDJSLEtBQUtqUyxXQUFXaVMsS0FBS3ZWLFFBQVF1SCxpQkFBaUIsQ0FBQ2hILEdBQU9oQjtJQUFBQTtJQUd4RDJRLFFBQVEsZ0JBQVNqTTtNQUNmc1IsS0FBSzFGLFdBQVc1TDtJQUFBQTtJQUdsQmtNLFNBQVMsaUJBQVNsTTtNQUNoQnNSLEtBQUsxRixXQUFXNUw7SUFBQUE7SUFHbEJtTSxXQUFXLG1CQUFTbk07TUFDbEIsUUFBUUEsRUFBTXlKLFNBQVN6SixFQUFNb007UUFDM0IsS0FBSztVQUNDa0YsS0FBS3ZWLFFBQVErRiwyQkFDZndQLEtBQUtyUixlQUFlRCxJQUNwQnNSLEtBQUtqRjtVQUVQO1FBQ0YsS0FBSztVQUNDaUYsS0FBS3ZWLFFBQVFtRyxrQkFDZm9QLEtBQUtuSixTQUVMbkksRUFBTXNNO1VBRVI7UUFDRixLQUFLO1VBQ0NnRixLQUFLdlYsUUFBUWlHLDJCQUNmc1AsS0FBS3JSLGVBQWVELElBQ3BCc1IsS0FBSy9FO1VBRVA7UUFDRixLQUFLO1VBQ0MrRSxLQUFLdlYsUUFBUWtHLDZCQUNmcVAsS0FBS3JSLGVBQWVELElBQ3BCc1IsS0FBS3hLO1VBRVA7UUFDRixLQUFLO1VBQ0N3SyxLQUFLdlYsUUFBUWtHLDZCQUNmcVAsS0FBS3JSLGVBQWVELElBQ3BCc1IsS0FBS3ZLO01BQUFBO0lBQUFBO0lBTWJ5RixhQUFhLHFCQUFTeE07TUFDcEIsSUFBSWpFLElBQVV1VixLQUFLdlY7UUFDZnNCLElBQVMyQyxFQUFNM0MsVUFBVTJDLEVBQU02TDtRQUMvQnZRLElBQVMrQixFQUFPeU87TUFPcEIsU0FBU1csRUFBU0M7UUFDaEIsT0FBT3hTLEVBQUVtRCxHQUFRdUMsU0FBUzhNLE1BQWN4UyxFQUFFb0IsR0FBUXNFLFNBQVM4TTtNQUFBQTtNQUV6REQsRUFBUzFRLEVBQVE4QyxnQkFFbkJ5UyxLQUFLclIsZUFBZUQsSUFDcEJzUixLQUFLakYsb0JBQ0lJLEVBQVMxUSxFQUFRdUYsY0FFMUJnUSxLQUFLclIsZUFBZUQsSUFDcEJzUixLQUFLeEssVUFDSTJGLEVBQVMxUSxFQUFRd0YsY0FFMUIrUCxLQUFLclIsZUFBZUQsSUFDcEJzUixLQUFLdkssVUFDSTBGLEVBQVMxUSxFQUFReUYsZUFFMUI4UCxLQUFLclIsZUFBZUQsSUFDcEJzUixLQUFLbkosV0FDSXNFLEVBQVMxUSxFQUFRMEYsbUJBRTFCNlAsS0FBS3JSLGVBQWVELElBQ3BCc1IsS0FBSy9FLHFCQUNJalIsTUFBV2dXLEtBQUszUSxnQkFBZ0IsS0FFckM1RSxFQUFRb0cscUJBQ1ZtUCxLQUFLclIsZUFBZUQsSUFDcEJzUixLQUFLbkosV0FDSXBNLEVBQVFnRywrQkFDakJ1UCxLQUFLclIsZUFBZUQsSUFDcEJzUixLQUFLakYsb0JBR1AvUSxFQUFPd1EsY0FDUHhRLEVBQU93USxlQUFld0YsS0FBSzNRLGdCQUFnQixNQUd2QzVFLEVBQVFnRywrQkFDVnVQLEtBQUtyUixlQUFlRCxJQUNwQnNSLEtBQUtqRjtJQUFBQTtJQUtYTSxTQUFTLGlCQUFTM007TUFDaEIsTUFDRXNSLEtBQUt2VixRQUFRc0csc0JBQ2JpUCxLQUFLNUcsZUFDMEIsS0FBOUJwRSxLQUFLQyxJQUFJK0ssS0FBSzVHLFdBQVdoUSxNQUF5QyxLQUE5QjRMLEtBQUtDLElBQUkrSyxLQUFLNUcsV0FBV2xDLE1BS2hFLE9BQU84SSxLQUFLOUUsWUFBWXhNO01BQUFBLE9BSGZzUixLQUFLNUc7SUFBQUE7SUFNaEJrQyxtQkFBbUIsMkJBQVN0UTtNQUNyQkEsSUFHSGdWLEtBQUs5UixVQUFVRCxZQUFZK1IsS0FBS3ZWLFFBQVFnRixpQkFGeEN1USxLQUFLOVIsVUFBVWpCLFNBQVMrUyxLQUFLdlYsUUFBUWdGLGdCQUluQ3pFLE1BQVVnVixLQUFLOVEsTUFBTSxJQUN2QjhRLEtBQUs5UixVQUFVakIsU0FBUytTLEtBQUt2VixRQUFRaUYsa0JBRXJDc1EsS0FBSzlSLFVBQVVELFlBQVkrUixLQUFLdlYsUUFBUWlGO0lBQUFBO0lBSTVDM0UsYUFBYSxxQkFBU0M7TUFDZmdWLEtBQUt2VixRQUFRMkcsY0FDaEI0TyxLQUFLMUUsa0JBQWtCdFEsSUFFekJnVixLQUFLekUsYUFBYXZRLElBQ2RnVixLQUFLdlYsUUFBUTRHLGtCQUNmMk8sS0FBSzNPLGVBQWVyRyxJQUV0QmdWLEtBQUt4RSxTQUFTeFE7SUFBQUE7SUFHaEI4RyxTQUFTLGlCQUFTOUc7TUFDaEJnVixLQUFLaFYsUUFBUUEsR0FDYmdWLEtBQUtqVixZQUFZQyxJQUNqQmdWLEtBQUtqUyxXQUFXaVMsS0FBS3ZWLFFBQVFxSCxTQUFTLENBQUM5RyxHQUFPZ1YsS0FBS3pKLE9BQU92TDtJQUFBQTtJQUc1RHdRLFVBQVUsa0JBQVN4UTtNQUNqQixJQUFJeVEsSUFBYXVFLEtBQUt6SixPQUFPdkwsR0FBT3lRO1FBQ2hDQyxJQUFPRCxFQUFXdlIsU0FBU3VSLEVBQVdoTztRQUN0QzZCLElBQWUwUSxLQUFLMVE7TUFDcEJBLEVBQWExRixXQUNmb1csS0FBSzFRLGFBQWErRyxTQUNkcUYsS0FDRnBNLEVBQWEsR0FBRzVCLFlBQVl6QixTQUFTMFAsZUFBZUQ7SUFBQUE7SUFLMUQzTixZQUFZLG9CQUFTNk4sR0FBTUMsR0FBTUM7TUFDL0IsSUFBSXRRLElBQU93VTtNQUNYLE9BQ0VwRSxLQUNBck4sT0FBT1IsV0FBVztRQUNoQjZOLEVBQUtHLE1BQU12USxHQUFNcVEsS0FBUTtNQUFBLEdBQ3hCQyxLQUFRO0lBQUE7SUFJZkUsY0FBYyxzQkFBUzNRLEdBQUtDO01BQzFCLElBSUk0UTtRQUNBdE47UUFDQTFFO1FBQ0FzQztRQVBBaEIsSUFBT3dVO1FBQ1AvRCxJQUFNK0QsS0FBSzFTLGVBQWUzQixXQUFVO1FBQ3BDUSxJQUFNZDtRQUNOcUksSUFBaUJzTSxLQUFLdlYsUUFBUThGO01BNkRsQyxPQTNCbUIsbUJBQVJwRSxNQUNUQSxJQUFNNlQsS0FBSzVULGdCQUFnQmYsR0FBSzJVLEtBQUt2VixRQUFRNEIsY0FDN0NuQyxJQUFROFYsS0FBSzVULGdCQUFnQmYsR0FBSzJVLEtBQUt2VixRQUFROEIsZ0JBQy9DQyxJQUNFd1QsS0FBSzVULGdCQUFnQmYsR0FBSzJVLEtBQUt2VixRQUFRZ0Msb0JBQW9CdkMsS0FFeEMsTUFBbkJ3SixNQUNGQSxJQUFpQixhQUVuQkEsSUFDRXNNLEtBQUs1TixRQUFRc0Isa0JBQ2JzTSxLQUFLNU4sUUFBUXNCLGVBQWVBLE1BQzVCQSxLQUVBOUUsSUFBVW9SLEtBQUt0VSxpQkFBaUJDLFdBQVUsTUFFMUNpRCxJQUFVcU4sR0FDTnpPLGFBQVksR0FFZHRELE1BQ0YwRSxFQUFRMUUsUUFBUUEsSUFFZHNDLE1BQ0ZvQyxFQUFRbkIsTUFBTWpCLElBRWhCNUQsRUFBRXFULEdBQUtuTyxHQUFHLGNBaERWLFNBQVNxTyxFQUFnQnpOO1FBQ3ZCLEtBQUt3TixHQUFRO1VBS1gsSUFKQXhOLElBQVE7WUFDTjVDLE1BQU00QyxFQUFNNUM7WUFDWkMsUUFBUTZDO1VBQUFBLElBRUxBLEVBQVE0TCxZQUlYLE9BQU9oUCxFQUFLdUMsV0FBV29PLEdBQWlCLENBQUN6TjtVQUUzQ3dOLEtBQVMsR0FDVHRULEVBQUVxVCxHQUFLbEYsSUFBSSxjQUFjb0YsSUFDckJ6SSxLQUNpQixXQUFmaEYsRUFBTTVDLFNBQ1I4QyxFQUFRRyxNQUFNcU4sYUFBYSxVQUFValEsSUFBTSx1QkFDM0N5QyxFQUFRRyxNQUFNMkUsaUJBQWlCQSxJQUduQ3BJLEVBQVNvRDtRQUFBQTtNQUFBQSxJQTZCYnVOLEVBQUk5TyxNQUFNaEIsR0FDSHlDO0lBQUFBO0lBR1QxQyxlQUFlLHVCQUFTYixHQUFLQztNQUMzQixJQUFJUSxJQUFPVCxLQUFPMlUsS0FBSzVULGdCQUFnQmYsR0FBSzJVLEtBQUt2VixRQUFRNkI7UUFDckRsQyxJQUNEMEIsS0FBUWtVLEtBQUtsVSxFQUFLckMsTUFBTSxLQUFLLEtBQUssY0FBZXVXLEtBQUtoRTtRQUNyRHBOLElBQVV2RCxLQUFPakIsRUFBUWEsS0FBSytVLE1BQU0zVSxHQUFLQztRQUN6QytRLElBQVMyRCxLQUFLNVQsZ0JBQWdCZixHQUFLMlUsS0FBS3ZWLFFBQVEyRjtNQWNwRCxPQWJLeEIsTUFDSEEsSUFBVW9SLEtBQUt0VSxpQkFBaUJDLFdBQVUsSUFDMUNxVSxLQUFLalMsV0FBV3pDLEdBQVUsQ0FDeEI7UUFDRVEsTUFBTTtRQUNOQyxRQUFRNkM7TUFBQUEsTUFJVnlOLEtBQ0Z6TixFQUFRakIsYUFBYSxVQUFVME8sSUFFakN6VCxFQUFFZ0csR0FBUzNCLFNBQVMrUyxLQUFLdlYsUUFBUXNGLG9CQUMxQm5CO0lBQUFBO0lBR1QwTixhQUFhLHFCQUFTdFI7TUFDZmdWLEtBQUtwSyxTQUFTNUssT0FDYmdWLEtBQUt6SixPQUFPdkwsR0FBT3lRLGFBQ3JCdUUsS0FBS3BLLFNBQVM1SyxLQUFTcEMsRUFBRW9YLEtBQUt6SixPQUFPdkwsSUFBUXNELFNBQzNDMFIsS0FBS3ZWLFFBQVFxRixtQkFFWCxJQUNBLEtBRUprUSxLQUFLcEssU0FBUzVLLEtBQVMsR0FDdkJwQyxFQUFFb1gsS0FBS3pKLE9BQU92TCxJQUFRaUMsU0FBUytTLEtBQUt2VixRQUFRb0Ysb0JBQzVDbVEsS0FBS3pKLE9BQU92TCxHQUFPMEMsWUFDakJzUyxLQUFLOVQsY0FBYzhULEtBQUtuUixLQUFLN0QsSUFBUWdWLEtBQUt6RDtJQUFBQTtJQU1sRGhCLGNBQWMsc0JBQVN2UTtNQUNyQixJQUVJL0I7UUFGQXVULElBQVF4SCxLQUFLeUgsSUFBSXVELEtBQUs5USxLQUFpQyxJQUE1QjhRLEtBQUt2VixRQUFRZ0gsZUFBbUI7UUFDM0RpTCxJQUFJMVI7TUFFUixLQUFLL0IsSUFBSSxHQUFHQSxJQUFJdVQsR0FBT3ZULEtBQUssR0FLMUJ5VCxLQUFLelQsS0FBS0EsSUFBSSxLQUFNLEtBQUssSUFBSSxJQUc3QnlULElBQUlzRCxLQUFLakwsT0FBTzJILElBQ2hCc0QsS0FBSzFELFlBQVlJO0lBQUFBO0lBSXJCckwsZ0JBQWdCLHdCQUFTckc7TUFDdkIsSUFBSS9CLEdBQUc2TDtNQUNQLEtBQUs3TCxLQUFLK1csS0FBS3BLLFVBQ1Q1QyxPQUFPeEksVUFBVXlJLGVBQWVoSSxLQUFLK1UsS0FBS3BLLFVBQVUzTSxPQUN0RDZMLElBQU9FLEtBQUtDLElBQUlqSyxJQUFRL0IsTUFFZitXLEtBQUt2VixRQUFRZ0gsZ0JBQ3BCcUQsSUFBT2tMLEtBQUt2VixRQUFRZ0gsZUFBZXVPLEtBQUs5USxRQUV4QzhRLEtBQUtyRCxZQUFZMVQsV0FDVitXLEtBQUtwSyxTQUFTM007SUFBQUE7SUFNN0JnTixVQUFVLGtCQUFTakw7TUFDakIsSUFBSXlKLElBQVF1TCxLQUFLcEQsZUFBZWpSLFdBQVU7TUFDMUM4SSxFQUFNOUcsYUFBYSxjQUFjM0MsSUFDakNnVixLQUFLM1EsZ0JBQWdCLEdBQUczQixZQUFZK0csSUFDcEN1TCxLQUFLekosT0FBT2lELEtBQUsvRTtJQUFBQTtJQUduQnlCLGVBQWUsdUJBQVNsTDtNQUN0QixJQUFJeUosSUFBUXVMLEtBQUt6SixPQUFPdkw7TUFDeEJ5SixFQUFNMUYsTUFBTThOLFFBQVFtRCxLQUFLN0ssYUFBYSxNQUNsQzZLLEtBQUs1TixRQUFRb0IsY0FDZmlCLEVBQU0xRixNQUFNc0ksT0FBT3JNLEtBQVNnVixLQUFLN0ssYUFBYSxNQUM5QzZLLEtBQUs1SyxLQUNIcEssR0FDQWdWLEtBQUtoVixRQUFRQSxLQUNSZ1YsS0FBSzdLLGFBQ042SyxLQUFLaFYsUUFBUUEsSUFDYmdWLEtBQUs3SyxhQUNMLEdBQ0o7SUFBQTtJQUtOZ0IsWUFBWSxvQkFBUzJHO01BQ25CLElBQUl4TSxHQUFhckg7TUFtQmpCLEtBbEJLNlQsTUFDSGtELEtBQUs5SyxZQUFZLElBQ2pCOEssS0FBSzlLLFVBQVV0TCxTQUFTb1csS0FBSzlRLEtBQzdCOFEsS0FBS3BLLFdBQVcsSUFDaEJvSyxLQUFLMVMsaUJBQWlCckIsU0FBU0MsY0FBYyxRQUM3QzhULEtBQUt0VSxtQkFBbUJPLFNBQVNDLGNBQWMsUUFDL0M4VCxLQUFLcEQsaUJBQWlCM1EsU0FBU0MsY0FBYyxRQUM3Q3RELEVBQUVvWCxLQUFLcEQsZ0JBQWdCM1AsU0FBUytTLEtBQUt2VixRQUFRbUYsYUFDN0NvUSxLQUFLekosU0FBU3lKLEtBQUszUSxnQkFBZ0IsR0FBRzBOLFVBQ3RDek0sSUFDRTBQLEtBQUt2VixRQUFRNkYsZUFBZTBQLEtBQUt6SixPQUFPM00sV0FBV29XLEtBQUs5USxNQUU1RDhRLEtBQUs3SyxhQUFhNkssS0FBSzlSLFVBQVUsR0FBRzhPLGFBQ3BDZ0QsS0FBS2hHLGNBQWNnRyxLQUFLOVIsVUFBVSxHQUFHd00sY0FDckNzRixLQUFLM1EsZ0JBQWdCLEdBQUdOLE1BQU04TixRQUFRbUQsS0FBSzlRLE1BQU04USxLQUFLN0ssYUFBYSxNQUMvRDdFLEtBQ0YwUCxLQUFLNUosZUFFRm5OLElBQUksR0FBR0EsSUFBSStXLEtBQUs5USxLQUFLakcsS0FBSyxHQUN6QnFILEtBQ0YwUCxLQUFLL0osU0FBU2hOLElBRWhCK1csS0FBSzlKLGNBQWNqTjtNQUdqQitXLEtBQUt2VixRQUFRMkcsY0FBYzRPLEtBQUs1TixRQUFRb0IsY0FDMUN3TSxLQUFLNUssS0FBSzRLLEtBQUtqTCxPQUFPaUwsS0FBS2hWLFFBQVEsS0FBS2dWLEtBQUs3SyxZQUFZLElBQ3pENkssS0FBSzVLLEtBQUs0SyxLQUFLakwsT0FBT2lMLEtBQUtoVixRQUFRLElBQUlnVixLQUFLN0ssWUFBWSxLQUVyRDZLLEtBQUs1TixRQUFRb0IsY0FDaEJ3TSxLQUFLM1EsZ0JBQWdCLEdBQUdOLE1BQU1zSSxPQUM1QjJJLEtBQUtoVixTQUFTZ1YsS0FBSzdLLGFBQWE7SUFBQTtJQUl0Q3dILGFBQWEscUJBQVMzUjtNQUNwQixJQUFJeUosR0FBT2dIO01BR1EsVUFEbkJBLEtBREFoSCxJQUFRdUwsS0FBS3pKLE9BQU92TCxJQUNEeVEsZUFFakJoSCxFQUFNWixZQUFZNEg7SUFBQUE7SUFJdEJuRixpQkFBaUI7TUFDZixJQUFJck4sR0FBR2dVO01BQ1AsS0FBS2hVLElBQUksR0FBR2dVLElBQU0rQyxLQUFLekosT0FBTzNNLFFBQVFYLElBQUlnVSxHQUFLaFUsS0FDN0MrVyxLQUFLckQsWUFBWTFUO0lBQUFBO0lBSXJCOFIsZ0JBQWdCO01BQ2QsSUFBSTVNLElBQWdCNlIsS0FBS3ZWLFFBQVEwRDtNQUM3QjZSLEtBQUs5UixVQUFVSSxTQUFTSCxLQUMxQjZSLEtBQUs5UixVQUFVRCxZQUFZRSxLQUUzQjZSLEtBQUs5UixVQUFVakIsU0FBU2tCO0lBQUFBO0lBSTVCOE0saUJBQWlCO01BQ1YrRSxLQUFLNVIsV0FHUjRSLEtBQUs3VSxVQUZMNlUsS0FBSzNSO0lBQUFBO0lBTVRvTSxjQUFjLHNCQUFTN0w7TUFDckIsT0FBT3NPLFNBQVN0TyxFQUFRdU8sYUFBYSxlQUFlO0lBQUE7SUFHdERDLG1CQUFtQiwyQkFBUy9SLEdBQUtnUztNQWlCL0IsT0FoQkFBLEVBQVNDLFFBSVAsNkRBQ0EsVUFBU0MsR0FBS0MsR0FBaUJDLEdBQWlCQyxHQUFZQztRQUMxRCxJQUFJNUssSUFDRjRLLEtBQ0FILEtBQ0FDLEtBQ0NDLEtBQWNSLFNBQVNRLEdBQVk7UUFDbENILEtBQU9sUyxNQUNUQSxJQUFNQSxFQUFJMEg7TUFBQUEsSUFJVDFIO0lBQUFBO0lBR1R1UyxpQkFBaUIseUJBQVN2UyxHQUFLZ1M7TUFDN0IsSUFBSVEsR0FDQTlLO01BV0osSUFWSTFILEVBQUl5UyxXQUNORCxJQUFNUixFQUFTQyxRQUFRLGFBQWEsVUFBU1MsR0FBR0M7UUFDOUMsT0FBT0EsRUFBRUM7TUFBQUEsSUFFWGxMLElBQU8xSCxFQUFJeVMsUUFBUUQsTUFDVnhTLEVBQUk4UixpQkFDYnBLLElBQU8xSCxFQUFJOFIsYUFDVCxVQUFVRSxFQUFTQyxRQUFRLFlBQVksT0FBT1ksaUJBRzlCLG1CQUFUbkwsR0FBbUI7UUFFNUIsSUFDRSw0REFBNERvTCxLQUFLcEwsSUFFakU7VUFDRSxPQUFPbkssRUFBRXdWLFVBQVVyTDtRQUFBQSxDQUNuQixRQUFPc0w7UUFJWCxPQUFPdEw7TUFBQUE7SUFBQUE7SUFJWDNHLGlCQUFpQix5QkFBU2YsR0FBS2dTO01BQzdCLElBQUl0SyxJQUFPaU4sS0FBS3BDLGdCQUFnQnZTLEdBQUtnUztNQU9yQyxZQU5hcE8sTUFBVDhELE1BQ0ZBLElBQU8xSCxFQUFJZ1MsVUFFQXBPLE1BQVQ4RCxNQUNGQSxJQUFPaU4sS0FBSzVDLGtCQUFrQi9SLEdBQUtnUyxLQUU5QnRLO0lBQUFBO0lBR1RzQixnQkFBZ0I7TUFDZCxJQUVJcEw7UUFGQStCLElBQVFnVixLQUFLdlYsUUFBUU87UUFDckJxQixJQUFjMlQsS0FBS3ZWLFFBQVE0QjtNQUcvQixJQUFJckIsS0FBMEIsbUJBQVZBLEdBQ2xCLEtBQUsvQixJQUFJLEdBQUdBLElBQUkrVyxLQUFLOVEsS0FBS2pHLEtBQUssR0FDN0IsSUFDRStXLEtBQUtuUixLQUFLNUYsT0FBTytCLEtBQ2pCZ1YsS0FBSzVULGdCQUFnQjRULEtBQUtuUixLQUFLNUYsSUFBSW9ELE9BQ2pDMlQsS0FBSzVULGdCQUFnQnBCLEdBQU9xQixJQUM5QjtRQUNBckIsSUFBUS9CO1FBQ1I7TUFBQTtNQUtOK1csS0FBS2hWLFFBQVFnVixLQUFLakwsT0FBT21JLFNBQVNsUyxHQUFPLE9BQU87SUFBQTtJQUdsRHVKLG9CQUFvQjtNQUNsQixJQUFJL0ksSUFBT3dVO1FBQ1AzUSxJQUFrQjJRLEtBQUszUTtNQU0zQixTQUFTa04sRUFBYzdOO1FBQ3JCLElBQUk1QyxJQUNGTixFQUFLNEcsUUFBUVUsY0FBY3RILEVBQUs0RyxRQUFRVSxXQUFXSixRQUFRaEUsRUFBTTVDLE9BQzdELGtCQUNBNEMsRUFBTTVDO1FBQ1pOLEVBQUssT0FBT00sR0FBTTRDO01BQUFBO01BRXBCOUYsRUFBRTJGLFFBQVFULEdBQUcsVUFBVXlPLElBQ3ZCM1QsRUFBRXFELFNBQVM2QyxNQUFNaEIsR0FBRyxXQUFXeU8sSUFDL0J5RCxLQUFLOVIsVUFBVUosR0FBRyxTQUFTeU8sSUFDdkJ5RCxLQUFLNU4sUUFBUUMsUUFDZmhELEVBQWdCdkIsR0FDZCw2Q0FDQXlPLEtBRU95RCxLQUFLdlYsUUFBUXNHLHNCQUFzQmlQLEtBQUs1TixRQUFRVSxjQUN6RHpELEVBQWdCdkIsR0FDZCx3Q0FDQXlPLElBR0F5RCxLQUFLNU4sUUFBUVUsY0FDZnpELEVBQWdCdkIsR0FBR2tTLEtBQUs1TixRQUFRVSxXQUFXSixLQUFLNkosSUFFbER5RCxLQUFLekQsZ0JBQWdCQTtJQUFBQTtJQUd2QjlGLHVCQUF1QjtNQUNyQixJQUFJcEgsSUFBa0IyUSxLQUFLM1E7UUFDdkJrTixJQUFnQnlELEtBQUt6RDtNQUN6QjNULEVBQUUyRixRQUFRd0ksSUFBSSxVQUFVd0YsSUFDeEIzVCxFQUFFcUQsU0FBUzZDLE1BQU1pSSxJQUFJLFdBQVd3RixJQUNoQ3lELEtBQUs5UixVQUFVNkksSUFBSSxTQUFTd0YsSUFDeEJ5RCxLQUFLNU4sUUFBUUMsUUFDZmhELEVBQWdCMEgsSUFDZCw2Q0FDQXdGLEtBRU95RCxLQUFLdlYsUUFBUXNHLHNCQUFzQmlQLEtBQUs1TixRQUFRVSxjQUN6RHpELEVBQWdCMEgsSUFDZCx3Q0FDQXdGLElBR0F5RCxLQUFLNU4sUUFBUVUsY0FDZnpELEVBQWdCMEgsSUFBSWlKLEtBQUs1TixRQUFRVSxXQUFXSixLQUFLNko7SUFBQUE7SUFJckQrQixZQUFZO01BQ04wQixLQUFLdlYsUUFBUW9ILFlBQ2ZtTyxLQUFLdlYsUUFBUW9ILFNBQVM1RyxLQUFLK1U7SUFBQUE7SUFJL0IxTCxZQUFZO01BQ1YsSUFBSTlJLElBQU93VTtNQWFYLE9BREFBLEtBQUs5UixZQUFZdEYsRUFBRW9YLEtBQUt2VixRQUFReUQsWUFDM0I4UixLQUFLOVIsVUFBVXRFLFVBT3BCb1csS0FBSzNRLGtCQUFrQjJRLEtBQUs5UixVQUN6Qm5FLEtBQUtpVyxLQUFLdlYsUUFBUTRFLGlCQUNsQm1QLFNBQ0V3QixLQUFLM1EsZ0JBQWdCekYsVUFPMUJvVyxLQUFLMVEsZUFBZTBRLEtBQUs5UixVQUFVbkUsS0FBS2lXLEtBQUt2VixRQUFRNkUsY0FBY2tQLFNBQ2xELE1BQWJ3QixLQUFLOVEsT0FDUDhRLEtBQUs5UixVQUFVakIsU0FBUytTLEtBQUt2VixRQUFRK0UsY0FFbkN3USxLQUFLdlYsUUFBUW1ILFVBQ2ZvTyxLQUFLdlYsUUFBUW1ILE9BQU8zRyxLQUFLK1UsT0FFdkJBLEtBQUs1TixRQUFRVSxjQUFja04sS0FBS3ZWLFFBQVE0RixvQkFDMUMyUCxLQUFLOVIsVUFBVUosR0FBR2tTLEtBQUs1TixRQUFRVSxXQUFXSixLQWhDNUMsU0FBUzZMLEVBQVk3UDtRQUNmQSxFQUFNM0MsV0FBV1AsRUFBSzBDLFVBQVUsT0FDbEMxQyxFQUFLMEMsVUFBVTZJLElBQUl2TCxFQUFLNEcsUUFBUVUsV0FBV0osS0FBSzZMLElBQ2hEL1MsRUFBSzhTO01BQUFBLEtBK0JQMEIsS0FBSzFCLGNBRUgwQixLQUFLdlYsUUFBUXdHLHVCQUVmK08sS0FBS3BKLG9CQUFvQjNLLFNBQVM2QyxLQUFLQyxNQUFNNEgsVUFDN0MxSyxTQUFTNkMsS0FBS0MsTUFBTTRILFdBQVcsV0FFakNxSixLQUFLOVIsVUFBVSxHQUFHYSxNQUFNMkgsVUFBVSxTQUNsQ3NKLEtBQUs3SixtQkFDTDZKLEtBQUs5UixVQUFVakIsU0FBUytTLEtBQUt2VixRQUFROEUsa0JBekJuQ3lRLEtBQUtuVyxRQUFRQyxJQUNYLGdEQUNBa1csS0FBS3ZWLFFBQVE0RSxtQkFFUixPQWRQMlEsS0FBS25XLFFBQVFDLElBQ1gsZ0RBQ0FrVyxLQUFLdlYsUUFBUXlELGFBRVI7SUFBQTtJQWtDWGlCLGFBQWEscUJBQVMxRTtNQUVwQnVWLEtBQUt2VixVQUFVN0IsRUFBRTJCLE9BQU8sSUFBSXlWLEtBQUt2VixXQUc5QkEsS0FBV0EsRUFBUTBHLFlBQ25CNk8sS0FBS3ZWLFFBQVEwRyxjQUFjMUcsTUFBZ0MsTUFBckJBLEVBQVEwRyxjQUUvQ3ZJLEVBQUUyQixPQUFPeVYsS0FBS3ZWLFNBQVN1VixLQUFLN04sa0JBRzlCdkosRUFBRTJCLE9BQU95VixLQUFLdlYsU0FBU0EsSUFDbkJ1VixLQUFLOVEsTUFBTSxNQUdiOFEsS0FBS3ZWLFFBQVEyRyxlQUFhNE8sS0FBS3ZWLFFBQVEyRyxjQUFhLE9BRWpENE8sS0FBSzVOLFFBQVFVLGVBQ2hCa04sS0FBS3ZWLFFBQVFzRyxzQkFBcUIsSUFFaENpUCxLQUFLdlYsUUFBUWlFLFNBQ2ZzUixLQUFLclIsZUFBZXFSLEtBQUt2VixRQUFRaUU7SUFBQUE7RUFBQUEsSUFLaENwRTtBQUFBQSxJQzc2Q1IsVUFBVUY7RUFDVDs7RUFDc0IsS0FBcUIyVixHQUV6QzFWLGlDQUFPLENBQUMseUdBQW9CLDhJQUFzQkQ7QUFBQUE7QUFBQUE7QUFBQUEsdUdBR2xEQSxTQUErREU7QUFBQUEsQ0FQbEUsQ0FTRSxVQUFTMUIsR0FBRzBCO0VBQ2I7O0VBRUExQixFQUFFMkIsT0FBT0QsRUFBUUUsVUFBVUMsU0FBUztJQUVsQ3dWLGFBQVk7RUFBQTtFQUdkLElBQUk3USxJQUFhOUUsRUFBUUUsVUFBVTRFO0lBQy9CeUgsSUFBUXZNLEVBQVFFLFVBQVVxTTtFQW1EOUIsT0FqREFqTyxFQUFFMkIsT0FBT0QsRUFBUUUsV0FBVztJQUMxQjBWLHNCQUFzQjtNQUNwQixPQUNFalUsU0FBU2tVLHFCQUNUbFUsU0FBU21VLDJCQUNUblUsU0FBU29VLHdCQUNUcFUsU0FBU3FVO0lBQUFBO0lBSWJDLG1CQUFtQiwyQkFBUzNSO01BQ3RCQSxFQUFRNFIsb0JBQ1Y1UixFQUFRNFIsc0JBQ0M1UixFQUFRNlIsMEJBQ2pCN1IsRUFBUTZSLDRCQUNDN1IsRUFBUThSLHVCQUNqQjlSLEVBQVE4Uix5QkFDQzlSLEVBQVErUix1QkFDakIvUixFQUFRK1I7SUFBQUE7SUFJWkMsZ0JBQWdCO01BQ1YzVSxTQUFTNFUsaUJBQ1g1VSxTQUFTNFUsbUJBQ0E1VSxTQUFTNlUseUJBQ2xCN1UsU0FBUzZVLDJCQUNBN1UsU0FBUzhVLHNCQUNsQjlVLFNBQVM4VSx3QkFDQTlVLFNBQVMrVSxvQkFDbEIvVSxTQUFTK1U7SUFBQUE7SUFJYjVSLFlBQVk7TUFDVkEsRUFBV25FLEtBQUsrVSxPQUNaQSxLQUFLdlYsUUFBUXdWLGVBQWVELEtBQUtFLDBCQUNuQ0YsS0FBS08sa0JBQWtCUCxLQUFLOVIsVUFBVTtJQUFBO0lBSTFDMkksT0FBTztNQUNEbUosS0FBS0UsMkJBQTJCRixLQUFLOVIsVUFBVSxNQUNqRDhSLEtBQUtZLGtCQUVQL0osRUFBTTVMLEtBQUsrVTtJQUFBQTtFQUFBQSxJQUlSMVY7QUFBQUEsSUNyRVIsVUFBVUY7RUFDVDs7RUFDc0IsS0FBcUIyVixHQUV6QzFWLGlDQUFPLENBQUMseUdBQW9CLDhJQUFzQkQ7QUFBQUE7QUFBQUE7QUFBQUEsdUdBR2xEQSxTQUErREU7QUFBQUEsQ0FQbEUsQ0FTRSxVQUFTMUIsR0FBRzBCO0VBQ2I7O0VBRUExQixFQUFFMkIsT0FBT0QsRUFBUUUsVUFBVUMsU0FBUztJQUVsQ3dXLG9CQUFvQjtJQUVwQkMsc0JBQXNCO0lBR3RCQyxtQkFBbUI7SUFFbkJDLHNCQUFxQjtFQUFBO0VBR3ZCLElBQUlqTCxJQUFhN0wsRUFBUUUsVUFBVTJMO0lBQy9CRixJQUFXM0wsRUFBUUUsVUFBVXlMO0lBQzdCRyxJQUFjOUwsRUFBUUUsVUFBVTRMO0lBQ2hDOEUsSUFBYzVRLEVBQVFFLFVBQVUwUTtJQUNoQ25RLElBQWNULEVBQVFFLFVBQVVPO0lBQ2hDeUwsSUFBY2xNLEVBQVFFLFVBQVVnTTtFQXFHcEMsT0FuR0E1TixFQUFFMkIsT0FBT0QsRUFBUUUsV0FBVztJQUMxQjZXLGlCQUFpQix5QkFBU2hXO01BQ3hCLElBR0lpVztRQUNBQztRQUpBQyxJQUFZeEIsS0FBS3lCLG1CQUFtQjlWLFdBQVU7UUFDOUN6QixJQUFROFYsS0FBSzVULGdCQUFnQmYsR0FBSzJVLEtBQUt2VixRQUFROEI7UUFDL0M0VSxJQUFvQm5CLEtBQUt2VixRQUFRMFc7TUFvQnJDLE9BakJJbkIsS0FBS3ZWLFFBQVEyVyx3QkFDWEQsTUFDRkcsSUFBZXRCLEtBQUs1VCxnQkFBZ0JmLEdBQUs4VixVQUV0QmxTLE1BQWpCcVMsTUFDRkMsSUFBWWxXLEVBQUkrVCx3QkFBd0J4VyxFQUFFeUMsR0FBS3RCLEtBQUssT0FBTyxRQUV6RHVYLElBQWVDLEVBQVVwVSxNQUd6Qm1VLE1BQ0ZFLEVBQVV6UyxNQUFNMlMsa0JBQWtCLFVBQVVKLElBQWUsUUFHM0RwWCxNQUNGc1gsRUFBVXRYLFFBQVFBLElBRWJzWDtJQUFBQTtJQUdURyxjQUFjLHNCQUFTM1c7TUFDckIsSUFBSWdWLEtBQUtpQixtQkFBbUJyWCxRQUFRO1FBQ2xDLElBQUk0WCxJQUFZeEIsS0FBS3FCLGdCQUFnQnJCLEtBQUtuUixLQUFLN0Q7UUFDL0N3VyxFQUFVN1QsYUFBYSxjQUFjM0MsSUFDckNnVixLQUFLaUIsbUJBQW1CLEdBQUd2VCxZQUFZOFQsSUFDdkN4QixLQUFLNEIsV0FBV3BJLEtBQUtnSTtNQUFBQTtJQUFBQTtJQUl6Qkssb0JBQW9CLDRCQUFTN1c7TUFDdkJnVixLQUFLNEIsZUFDSDVCLEtBQUs4QixtQkFDUDlCLEtBQUs4QixnQkFBZ0I3VCxZQUFZK1IsS0FBS3ZWLFFBQVF5Vyx1QkFFaERsQixLQUFLOEIsa0JBQWtCbFosRUFBRW9YLEtBQUs0QixXQUFXNVcsS0FDekNnVixLQUFLOEIsZ0JBQWdCN1UsU0FBUytTLEtBQUt2VixRQUFReVc7SUFBQUE7SUFJL0MvSyxZQUFZLG9CQUFTMkc7TUFDZEEsTUFDSGtELEtBQUtpQixxQkFBcUJqQixLQUFLOVIsVUFBVW5FLEtBQ3ZDaVcsS0FBS3ZWLFFBQVF3VyxxQkFFWGpCLEtBQUtpQixtQkFBbUJyWCxXQUMxQm9XLEtBQUt5QixxQkFBcUJ4VixTQUFTQyxjQUFjLE9BQ2pEOFQsS0FBSzRCLGFBQWE1QixLQUFLaUIsbUJBQW1CLEdBQUdsRSxZQUdqRDVHLEVBQVdsTCxLQUFLK1UsTUFBTWxEO0lBQUFBO0lBR3hCN0csVUFBVSxrQkFBU2pMO01BQ2pCaUwsRUFBU2hMLEtBQUsrVSxNQUFNaFYsSUFDcEJnVixLQUFLMkIsYUFBYTNXO0lBQUFBO0lBR3BCb0wsYUFBYTtNQUNYQSxFQUFZbkwsS0FBSytVLE9BQ2pCQSxLQUFLaUIsbUJBQW1CNUssU0FDeEIySixLQUFLNEIsYUFBYTtJQUFBO0lBR3BCMUcsYUFBYSxxQkFBU3hNO01BQ3BCLElBQUkzQyxJQUFTMkMsRUFBTTNDLFVBQVUyQyxFQUFNNkw7UUFDL0J2USxJQUFTK0IsRUFBT3lPO01BQ3BCLElBQUl4USxNQUFXZ1csS0FBS2lCLG1CQUFtQixJQUVyQ2pCLEtBQUtyUixlQUFlRCxJQUNwQnNSLEtBQUt2TCxNQUFNdUwsS0FBS3ZGLGFBQWExTyxTQUN4QjtRQUFBLElBQUkvQixFQUFPd1EsZUFBZXdGLEtBQUtpQixtQkFBbUIsSUFLdkQsT0FBTy9GLEVBQVlqUSxLQUFLK1UsTUFBTXRSO1FBSDlCc1IsS0FBS3JSLGVBQWVELElBQ3BCc1IsS0FBS3ZMLE1BQU11TCxLQUFLdkYsYUFBYXpRO01BQUFBO0lBQUFBO0lBTWpDZSxhQUFhLHFCQUFTQztNQUNwQkQsRUFBWUUsS0FBSytVLE1BQU1oVixJQUN2QmdWLEtBQUs2QixtQkFBbUI3VztJQUFBQTtJQUcxQndMLGFBQWE7TUFDUHdKLEtBQUs4QixtQkFDUDlCLEtBQUs4QixnQkFBZ0I3VCxZQUFZK1IsS0FBS3ZWLFFBQVF5Vyx1QkFFaEQxSyxFQUFZdkwsS0FBSytVO0lBQUFBO0VBQUFBLElBSWQxVjtBQUFBQSxJQ2xJUixVQUFVRjtFQUNUOztFQUNzQixLQUFxQjJWLEdBRXpDMVYsaUNBQU8sQ0FBQyx5R0FBb0IsOElBQXNCRDtBQUFBQTtBQUFBQTtBQUFBQSx1R0FHbERBLFNBQStERTtBQUFBQSxDQVBsRSxDQVNFLFVBQVMxQixHQUFHMEI7RUFDYjs7RUFFQTFCLEVBQUUyQixPQUFPRCxFQUFRRSxVQUFVQyxTQUFTO0lBRWxDQyxtQkFBbUI7SUFFbkJDLG1CQUFtQjtJQUVuQkMsbUJBQW1CO0lBRW5CQyxxQkFBcUI7SUFFckJDLHNCQUFzQjtFQUFBO0VBR3hCLElBQUlDLElBQWNULEVBQVFFLFVBQVVPO0VBaUlwQyxPQS9IQW5DLEVBQUUyQixPQUFPRCxFQUFRRSxXQUFXO0lBQzFCTyxhQUFhLHFCQUFTQztNQUNwQkQsRUFBWUUsS0FBSytVLE1BQU1oVixJQUNuQmdWLEtBQUs5VSxnQkFDUDhVLEtBQUs5VSxhQUFhQztJQUFBQTtJQUl0QkMsY0FBYyxzQkFBU0MsR0FBS0MsR0FBVUM7TUFDcEMsSUFpQklvQjtRQUVBRTtRQUNBQztRQUNBQztRQUNBQztRQXRCQXhCLElBQU93VTtRQUNQdlYsSUFBVXVWLEtBQUt2VjtRQUNmZ0IsSUFBcUJ1VSxLQUFLdFUsaUJBQWlCQyxXQUFVO1FBQ3JEQyxJQUFpQmhELEVBQUU2QztRQUNuQkksSUFBWSxDQUNkO1VBQ0VDLE1BQU07VUFDTkMsUUFBUU47UUFBQUE7UUFHUk8sSUFBUVQsS0FBa0JVLFNBQVNDLGNBQWM7UUFDakRDLElBQU02VCxLQUFLNVQsZ0JBQWdCZixHQUFLWixFQUFRNEI7UUFDeENQLElBQU9rVSxLQUFLNVQsZ0JBQWdCZixHQUFLWixFQUFRNkI7UUFDekNwQyxJQUFROFYsS0FBSzVULGdCQUFnQmYsR0FBS1osRUFBUThCO1FBQzFDQyxJQUNGd1QsS0FBSzVULGdCQUFnQmYsR0FBSzJVLEtBQUt2VixRQUFRZ0Msb0JBQW9CdkM7UUFDekR3QyxJQUFZc1QsS0FBSzVULGdCQUFnQmYsR0FBS1osRUFBUUk7UUFFOUMrQixJQUFVb1QsS0FBSzVULGdCQUFnQmYsR0FBS1osRUFBUUs7TUFTaEQsSUFKQWMsRUFBZXFCLFNBQVN4QyxFQUFRQyxvQkFDNUJSLE1BQ0Z1QixFQUFtQnZCLFFBQVFBLElBRXpCOEIsRUFBTWtCLGFBQ1IsSUFBSWYsS0FBT0wsS0FBUUUsRUFBTWtCLFlBQVlwQixJQUNuQ0UsRUFBTW1CLE1BQU1oQixPQUNQLElBQUlTLEdBQ1QsT0FBT0EsRUFBUWhELFNBSWIsSUFIQWlELElBQVNELEVBQVFRLFNBQ2pCakIsSUFBTTZULEtBQUs1VCxnQkFBZ0JTLEdBQVFwQyxFQUFRNEIsY0FDM0NQLElBQU9rVSxLQUFLNVQsZ0JBQWdCUyxHQUFRcEMsRUFBUTZCLGVBQ3hDSCxLQUFPTCxLQUFRRSxFQUFNa0IsWUFBWXBCLElBQU87UUFDMUNFLEVBQU1tQixNQUFNaEI7UUFDWjtNQUFBO01BNkVSLE9BeEVJTyxNQUNGVixFQUFNcUIsU0FBU1gsR0FDZkMsSUFBY3FULEtBQUsxUyxlQUFlM0IsV0FBVSxJQUM1Qy9DLEVBQUUrRCxHQUFhTSxTQUFTeEMsRUFBUThDLGNBQ2hDWixFQUFZUSxNQUFNVCxHQUNsQkMsRUFBWWEsYUFBWSxHQUN4QmIsRUFBWWMsTUFBTWpCLEdBQ2xCZixFQUFtQmlDLFlBQVlmLE1BRWpDRyxJQUFtQmIsU0FBU0MsY0FBYyxNQUN6QnlCLGFBQWEsVUFBVSxXQUNuQ3BDLEtBQ0h1QixFQUFpQmEsYUFBYSxZQUFZekQsSUFFNUM0QyxFQUFpQmMsT0FBT3pCLEdBQ3BCSCxFQUFNbUIsUUFDUm5CLEVBQU02QixZQUFXLElBQ2Z0QyxLQUFrQjNDLEVBQUVvRCxJQUNuQjhCLEdBQUcsU0FBUztRQUNYdEMsRUFBS3VDLFdBQVd6QyxHQUFVTztNQUFBQSxHQUUzQmlDLEdBQUcsU0FBUztRQUNQOUIsRUFBTWdDLFlBQ1ZqQixLQUFZLEdBQ1puQixFQUNHcUMsWUFBWXpDLEVBQUtmLFFBQVFFLG1CQUN6QnNELFlBQVl6QyxFQUFLZixRQUFRRyxvQkFDeEJvQyxLQUNGeEIsRUFBSzBDLFVBQVVqQixTQUFTekIsRUFBS2YsUUFBUTBELHVCQUVoQzNDLEVBQUtOLGNBQ1JNLEVBQUs0QyxZQUNQNUMsRUFBSzZDO01BQUFBLEdBR1JQLEdBQUcsV0FBVztRQUNiZixLQUFZLEdBQ1puQixFQUNHcUMsWUFBWXpDLEVBQUtmLFFBQVFFLG1CQUN6QnNDLFNBQVN6QixFQUFLZixRQUFRRyxvQkFDckJZLEVBQUswQyxVQUFVSSxTQUFTOUMsRUFBS2YsUUFBUTBELGtCQUN2Q25CLEtBQWMsR0FDZHhCLEVBQUswQyxVQUFVRCxZQUFZekMsRUFBS2YsUUFBUTBELGtCQUV4Q25CLEtBQWM7TUFBQSxHQUdqQmMsR0FBRyxRQUFRO1FBQ1ZTLE9BQU9DLGFBQWFoRCxFQUFLaUQsVUFDekIxQixLQUFZLEdBQ1puQixFQUFlcUIsU0FBU3pCLEVBQUtmLFFBQVFFLG9CQUNyQ2EsRUFBS04sZUFBZWM7TUFBQUEsSUFFeEJwRCxFQUFFa0UsR0FBa0JnQixHQUFHLFNBQVMsVUFBU1k7UUFDdkNsRCxFQUFLbUQsZUFBZUQsSUFDaEIzQixJQUNGZixFQUFNYixVQUVOYSxFQUFNcUM7TUFBQUEsSUFHVjVDLEVBQW1CaUMsWUFDaEJuQyxLQUFrQkEsRUFBZXFELFdBQVk1QyxLQUdsRFAsRUFBbUJpQyxZQUFZWixJQUMvQmtULEtBQUtqUyxXQUFXekMsR0FBVSxDQUN4QjtRQUNFUSxNQUFNO1FBQ05DLFFBQVFOO01BQUFBLEtBR0xBO0lBQUFBO0VBQUFBLElBSUpuQjtBQUFBQSxJQzFKUixVQUFVRjtFQUNUOztFQUNzQixLQUFxQjJWLEdBRXpDMVYsaUNBQU8sQ0FBQyx5R0FBb0IsMEpBQTRCRDtBQUFBQTtBQUFBQTtBQUFBQSx1R0FHeERBLFNBQStERTtBQUFBQSxDQVBsRSxDQVNFLFVBQVMxQixHQUFHMEI7RUFDYjs7RUFFQSxLQUFLaUUsT0FBT3dULGFBQ1YsT0FBT3pYO0VBR1QxQixFQUFFMkIsT0FBT0QsRUFBUUUsVUFBVUMsU0FBUztJQUVsQ3VYLHNCQUFzQjtJQUd0QkMsZ0JBQ0U7SUFFRkMscUJBQXFCO0lBRXJCQyxtQkFBa0I7RUFBQTtFQUtGLFNBQWRDLEVBQXVCalcsR0FBS2tXLEdBQVNDLEdBQVVDO0lBQ2pEdkMsS0FBSzdULE1BQU1BLEdBQ1g2VCxLQUFLcUMsVUFBVUEsR0FDZnJDLEtBQUtzQyxXQUFXQSxHQUNoQnRDLEtBQUt1QyxjQUFjQSxHQUNuQnZDLEtBQUtwUixVQUFVM0MsU0FBU0MsY0FBYyxRQUN0QzhULEtBQUt3QyxZQUFZO0VBQUE7RUFSbkIsSUFBSUMsSUFDRm5ZLEVBQVFFLFVBQVVpWSxlQUFlblksRUFBUUUsVUFBVXdSO0lBU2pEMEcsSUFBVTtFQStKZCxPQTdKQTlaLEVBQUUyQixPQUFPNlgsRUFBWTVYLFdBQVc7SUFDOUIwQyxhQUFhO01BQ1gsUUFBTztJQUFBO0lBR1RZLElBQUksWUFBU2hDLEdBQU04UDtNQUVqQixPQURBb0UsS0FBS3dDLFVBQVUxVyxLQUFROFAsR0FDaEJvRTtJQUFBQTtJQUdUMkMsU0FBUztNQUNQLElBSUlDO1FBQ0ExRztRQUxBMVEsSUFBT3dVO1FBQ1A2QyxJQUFTO1FBQ1RDLElBQWE3VyxTQUFTbVQscUJBQXFCO1FBQzNDblcsSUFBSTZaLEVBQVdsWjtNQU1uQixTQUFTMEI7UUFBQUEsQ0FDRjRRLEtBQVUxUSxFQUFLdVgsZUFDbEJ2WCxFQUFLNkMsUUFFUDZOLEtBQVM7TUFBQTtNQUVYLE9BQU9qVCxJQUVMLElBQUk2WixFQURKN1osS0FBSyxHQUNha0UsUUFBUTBWLEdBQVE7UUFDaENELElBQVlFLEVBQVc3WjtRQUN2QjtNQUFBO01BR0MyWixPQUNIQSxJQUFZM1csU0FBU0MsY0FBYyxXQUN6QmlCLE1BQU0wVixJQUVsQmphLEVBQUVnYSxHQUFXOVUsR0FBRyxRQUFReEMsSUFDeEJ3WCxFQUFXLEdBQUd0SSxXQUFXd0ksYUFBYUosR0FBV0UsRUFBVyxLQUV4RCxrQkFBa0IzRSxLQUFLeUUsRUFBVUssZUFDbkMzWDtJQUFBQTtJQUlKNFgsU0FBUztNQUNQLElBQUkxWCxJQUFPd1U7TUFDWEEsS0FBS21ELFNBQVEsR0FDYm5ELEtBQUtvRCxPQUFPQyxTQUFTLFFBQVE7UUFDM0I3WCxFQUFLOFgsYUFBWSxHQUNqQjlYLEVBQUsrWDtNQUFBQSxJQUVQdkQsS0FBS29ELE9BQU9DLFNBQVMsU0FBUztRQUM1QjdYLEVBQUtnWTtNQUFBQSxJQUVQeEQsS0FBS29ELE9BQU9DLFNBQVMsVUFBVTtRQUM3QjdYLEVBQUtnWTtNQUFBQSxJQUVIeEQsS0FBSytDLGVBQ1AvQyxLQUFLM1I7SUFBQUE7SUFJVGtWLFdBQVc7TUFDTHZELEtBQUt5RCxhQUFhLE1BQ3BCekQsS0FBS3dDLFVBQVVrQixXQUNmMUQsS0FBS3lELGFBQWE7SUFBQTtJQUl0QkQsU0FBUztNQUNQeEQsS0FBS3dDLFVBQVVyWCxnQkFDUjZVLEtBQUt5RDtJQUFBQTtJQUdkRSxjQUFjO01BQ1osSUFBSUMsSUFBUzNYLFNBQVNDLGNBQWM7TUFDcEMwWCxFQUFPelcsTUFBTTZTLEtBQUs3VCxJQUNmbVIsUUFBUSxZQUFZMEMsS0FBS3FDLFNBQ3pCL0UsUUFBUSxhQUFhMEMsS0FBS3NDLFdBQzdCc0IsRUFBT2xiLEtBQUtzWCxLQUFLc0MsVUFDakJ0QyxLQUFLcFIsUUFBUTRMLFdBQVdxSixhQUFhRCxHQUFRNUQsS0FBS3BSLFVBQ2xEb1IsS0FBS3BSLFVBQVVnVjtJQUFBQTtJQUdqQnZWLE1BQU07TUFDSixJQUFJN0MsSUFBT3dVO01BQ05BLEtBQUt5RCxlQUNSekQsS0FBS3dDLFVBQVVuVSxRQUNmMlIsS0FBS3lELGFBQWEsSUFFaEJ6RCxLQUFLbUQsU0FFSm5ELEtBQUtzRCxjQUNMdEQsS0FBS3VDLGVBQ0hoVSxPQUFPdVYsYUFDTixpQkFBaUIzRixLQUFLNVAsT0FBT3VWLFVBQVVDLGFBTTNDL0QsS0FBS3VELGNBRUx2RCxLQUFLb0QsT0FBT1ksSUFBSSxXQUdsQmhFLEtBQUsrQyxlQUFjLEdBQ2R4VSxPQUFPMFYsS0FFQWpFLEtBQUtvRCxXQUNmcEQsS0FBSzJELGdCQUNMM0QsS0FBS29ELFNBQVNhLEdBQUdqRSxLQUFLcFIsVUFDdEJvUixLQUFLb0QsT0FBT0MsU0FBUyxTQUFTO1FBQzVCN1gsRUFBSzBYO01BQUFBLE1BTFBsRCxLQUFLMkM7SUFBQUE7SUFXWHhYLE9BQU87TUFDRDZVLEtBQUttRCxRQUNQbkQsS0FBS29ELE9BQU9ZLElBQUksV0FDUGhFLEtBQUt5RCxzQkFDUHpELEtBQUsrQyxhQUNaL0MsS0FBS3dDLFVBQVVyWCxnQkFDUjZVLEtBQUt5RDtJQUFBQTtFQUFBQSxJQUtsQjdhLEVBQUUyQixPQUFPRCxFQUFRRSxXQUFXO0lBQzFCNFgsYUFBYUE7SUFFYkssYUFBYSxxQkFBU3BYLEdBQUtDO01BQ3pCLElBQUliLElBQVV1VixLQUFLdlY7UUFDZjRYLElBQVVyQyxLQUFLNVQsZ0JBQWdCZixHQUFLWixFQUFRdVg7TUFDaEQsT0FBSUssVUFDcURwVCxNQUFuRCtRLEtBQUs1VCxnQkFBZ0JmLEdBQUtaLEVBQVE0QixpQkFDcENoQixFQUFJWixFQUFRNEIsZUFBZSxpQkFBaUJnVyxJQUU5Q0ssS0FBVyxHQUNKMUMsS0FBSzVVLGFBQ1ZDLEdBQ0FDLEdBQ0EsSUFBSThXLEVBQ0YzWCxFQUFRd1gsZ0JBQ1JJLEdBQ0E1WCxFQUFReVgsc0JBQXNCUSxHQUM5QmpZLEVBQVEwWCxzQkFJUE0sRUFBWXhYLEtBQUsrVSxNQUFNM1UsR0FBS0M7SUFBQUE7RUFBQUEsSUFJaENoQjtBQUFBQSxJQ3RNUixVQUFVRjtFQUNUOztFQUNzQixLQUFxQjJWLEdBRXpDMVYsaUNBQU8sQ0FBQyx5R0FBb0IsMEpBQTRCRDtBQUFBQTtBQUFBQTtBQUFBQSx1R0FHeERBLFNBQStERTtBQUFBQSxDQVBsRSxDQVNFLFVBQVMxQixHQUFHMEI7RUFDYjs7RUFFQSxLQUFLaUUsT0FBT3dULGFBQ1YsT0FBT3pYO0VBR1QxQixFQUFFMkIsT0FBT0QsRUFBUUUsVUFBVUMsU0FBUztJQUVsQ3laLHdCQUF3QjtJQUd4QkMsbUJBQW1CO01BQ2pCQyxPQUFPO0lBQUE7SUFHVEMscUJBQW9CO0VBQUE7RUFLRixTQUFoQkMsRUFBeUJqQyxHQUFTa0MsR0FBWWhDO0lBQ2hEdkMsS0FBS3FDLFVBQVVBLEdBQ2ZyQyxLQUFLdUUsYUFBYUEsR0FDbEJ2RSxLQUFLdUMsY0FBY0EsR0FDbkJ2QyxLQUFLcFIsVUFBVTNDLFNBQVNDLGNBQWMsUUFDdEM4VCxLQUFLd0MsWUFBWTtFQUFBO0VBUG5CLElBQUlDLElBQ0ZuWSxFQUFRRSxVQUFVaVksZUFBZW5ZLEVBQVFFLFVBQVV3UjtFQW1MckQsT0ExS0FwVCxFQUFFMkIsT0FBTytaLEVBQWM5WixXQUFXO0lBQ2hDMEMsYUFBYTtNQUNYLFFBQU87SUFBQTtJQUdUWSxJQUFJLFlBQVNoQyxHQUFNOFA7TUFFakIsT0FEQW9FLEtBQUt3QyxVQUFVMVcsS0FBUThQLEdBQ2hCb0U7SUFBQUE7SUFHVDJDLFNBQVM7TUFDUCxJQUtJQztRQUxBcFgsSUFBT3dVO1FBQ1B3RSxJQUEwQmpXLE9BQU9pVztRQUNqQzNCLElBQVM7UUFDVEMsSUFBYTdXLFNBQVNtVCxxQkFBcUI7UUFDM0NuVyxJQUFJNlosRUFBV2xaO01BVW5CLEtBUkEyRSxPQUFPaVcsMEJBQTBCO1FBQzNCQSxLQUNGQSxFQUF3QnpJLE1BQU1pRSxPQUU1QnhVLEVBQUt1WCxlQUNQdlgsRUFBSzZDO01BQUFBLEdBR0ZwRixJQUVMLElBQUk2WixFQURKN1osS0FBSyxHQUNha0UsUUFBUTBWLEdBQ3hCO01BQUEsQ0FHSkQsSUFBWTNXLFNBQVNDLGNBQWMsV0FDekJpQixNQUFNMFYsR0FDaEJDLEVBQVcsR0FBR3RJLFdBQVd3SSxhQUFhSixHQUFXRSxFQUFXO0lBQUE7SUFHOURJLFNBQVM7TUFDUGxELEtBQUttRCxTQUFRLEdBQ1RuRCxLQUFLK0MsZUFDUC9DLEtBQUszUjtJQUFBQTtJQUlUa1YsV0FBVztNQUNMdkQsS0FBS3lELGFBQWEsTUFDcEJ6RCxLQUFLd0MsVUFBVWtCLFdBQ2YxRCxLQUFLeUQsYUFBYTtJQUFBO0lBSXRCRCxTQUFTO01BQ1BsWixFQUFRRSxVQUFVdUQsV0FBVzlDLEtBQUsrVSxNQUFNQSxLQUFLeUUsV0FBVyxNQUFNO0lBQUE7SUFHaEVBLFdBQVc7TUFFUHpFLEtBQUswRSxnQkFBZ0JDLEdBQUdDLFlBQVlDLFVBQ3BDN0UsS0FBSzBFLGdCQUFnQkMsR0FBR0MsWUFBWUUsVUFHcEM5RSxLQUFLd0MsVUFBVXJYLGdCQUNSNlUsS0FBS3lEO0lBQUFBO0lBSWhCc0IsZUFBZSx1QkFBU3JXO01BQ3RCLFFBQVFBLEVBQU1zVztRQUNaLEtBQUtMLEdBQUdDLFlBQVlLO1VBQ2xCakYsS0FBS3NELGFBQVksR0FDakJ0RCxLQUFLdUQ7VUFDTDtRQUNGLEtBQUtvQixHQUFHQyxZQUFZQztRQUNwQixLQUFLRixHQUFHQyxZQUFZRTtVQUNsQjlFLEtBQUt3RDtNQUFBQTtNQUlUeEQsS0FBSzBFLGNBQWNoVyxFQUFNc1c7SUFBQUE7SUFHM0JFLFNBQVMsaUJBQVN4VztNQUNoQnNSLEtBQUt3QyxVQUFVMkMsTUFBTXpXO0lBQUFBO0lBR3ZCTCxNQUFNO01BQ0osSUFBSTdDLElBQU93VTtNQUNOQSxLQUFLeUQsZUFDUnpELEtBQUt3QyxVQUFVblUsUUFDZjJSLEtBQUt5RCxhQUFhLElBRWhCekQsS0FBS21ELFNBRUpuRCxLQUFLc0QsY0FDTHRELEtBQUt1QyxlQUNIaFUsT0FBT3VWLGFBQ04saUJBQWlCM0YsS0FBSzVQLE9BQU91VixVQUFVQyxhQU0zQy9ELEtBQUt1RCxjQUVMdkQsS0FBS29ELE9BQU9nQyxlQUdkcEYsS0FBSytDLGVBQWMsR0FDYnhVLE9BQU9vVyxNQUFNQSxHQUFHVSxTQUVWckYsS0FBS29ELFdBQ2ZwRCxLQUFLb0QsU0FBUyxJQUFJdUIsR0FBR1UsT0FBT3JGLEtBQUtwUixTQUFTO1FBQ3hDeVQsU0FBU3JDLEtBQUtxQztRQUNka0MsWUFBWXZFLEtBQUt1RTtRQUNqQmUsUUFBUTtVQUNOcEMsU0FBUztZQUNQMVgsRUFBSzBYO1VBQUFBO1VBRVA2QixlQUFlLHVCQUFTclc7WUFDdEJsRCxFQUFLdVosY0FBY3JXO1VBQUFBO1VBRXJCd1csU0FBUyxpQkFBU3hXO1lBQ2hCbEQsRUFBSzBaLFFBQVF4VztVQUFBQTtRQUFBQTtNQUFBQSxNQWJuQnNSLEtBQUsyQztJQUFBQTtJQXFCWHhYLE9BQU87TUFDRDZVLEtBQUttRCxRQUNQbkQsS0FBS29ELE9BQU9tQyxlQUNIdkYsS0FBS3lELHNCQUNQekQsS0FBSytDLGFBQ1ovQyxLQUFLd0MsVUFBVXJYLGdCQUNSNlUsS0FBS3lEO0lBQUFBO0VBQUFBLElBS2xCN2EsRUFBRTJCLE9BQU9ELEVBQVFFLFdBQVc7SUFDMUI4WixlQUFlQTtJQUVmN0IsYUFBYSxxQkFBU3BYLEdBQUtDO01BQ3pCLElBQUliLElBQVV1VixLQUFLdlY7UUFDZjRYLElBQVVyQyxLQUFLNVQsZ0JBQWdCZixHQUFLWixFQUFReVo7TUFDaEQsT0FBSTdCLFVBQ3FEcFQsTUFBbkQrUSxLQUFLNVQsZ0JBQWdCZixHQUFLWixFQUFRNEIsaUJBQ3BDaEIsRUFBSVosRUFBUTRCLGVBQWUsK0JBQStCZ1csU0FHQ3BULE1BQTNEK1EsS0FBSzVULGdCQUFnQmYsR0FBS1osRUFBUUkseUJBRWxDUSxFQUFJWixFQUFRSSx1QkFDViwwQkFBMEJ3WCxJQUFVLHVCQUVqQ3JDLEtBQUs1VSxhQUNWQyxHQUNBQyxHQUNBLElBQUlnWixFQUNGakMsR0FDQTVYLEVBQVEwWixtQkFDUjFaLEVBQVE0Wix3QkFJUDVCLEVBQVl4WCxLQUFLK1UsTUFBTTNVLEdBQUtDO0lBQUFBO0VBQUFBLElBSWhDaEI7QUFBQUEsSUNoTlIsVUFBVUY7RUFDVDs7RUFDc0IsS0FBcUIyVixHQUN6QzFWLGlDQUFPLENBQUMsMkVBQVUsOElBQXNCRDtBQUFBQTtBQUFBQTtBQUFBQSx1R0FFeENBLFNBQXNDRTtBQUFBQSxDQUx6QyxDQU9FLFVBQVMxQixHQUFHMEI7RUFDYjs7RUFJQTFCLEVBQUVxRCxVQUFVNkIsR0FBRyxTQUFTLGtCQUFrQixVQUFTWTtJQUVqRCxJQUFJaEcsSUFBS0UsRUFBRW9YLE1BQU1nRixLQUFLO01BQ2xCUSxJQUFTNWMsRUFBRUY7TUFDWHdGLElBQ0RzWCxFQUFPNWIsVUFBVTRiLEtBQVc1YyxFQUFFMEIsRUFBUUUsVUFBVUMsUUFBUXlEO01BQ3ZEdVgsSUFBWTtRQUNkN1QsUUFBUTtVQUNOMUQsRUFBVThXLEtBQUssV0FBV2hGLE1BQU0wRixRQUFRO1FBQUE7UUFFMUM3VCxVQUFVO1VBQ1IzRCxFQUFVd1gsUUFBUTtRQUFBO1FBRXBCNVQsU0FBUztVQUNQNUQsRUFBVXdYLFFBQVEsU0FBU0M7UUFBQUE7UUFFN0I1VCxZQUFZO1VBQ1Y3RCxFQUFVd1gsUUFBUSxZQUFZQztRQUFBQTtRQUVoQzNULGlCQUFpQjtVQUNmOUQsRUFBVXdYLFFBQVEsaUJBQWlCQztRQUFBQTtRQUVyQzFULFNBQVM7VUFDUC9ELEVBQVV3WCxRQUFRO1FBQUE7UUFFcEJ4VCxVQUFVO1VBQ1JoRSxFQUFVd1gsUUFBUSxVQUFVRSxXQUFXO1FBQUE7TUFBQTtNQUd2Q25iLElBQVU3QixFQUFFMkIsT0FHZDJELEVBQVU4VyxRQUNWO1FBQ0U5VyxXQUFXQSxFQUFVO1FBQ3JCbEQsT0FBT2dWO1FBQ1B0UixPQUFPQTtNQUFBQSxHQUVUK1c7TUFHRUksSUFBUWpkLEVBQUVvWCxNQUNYOEYsUUFBUSw4QkFDUi9iLEtBQUssb0JBQW9CckIsSUFBSztJQUlqQyxPQUhJK0IsRUFBUXNiLFdBQ1ZGLElBQVFBLEVBQU1FLE9BQU90YixFQUFRc2IsVUFFeEIsSUFBSXpiLEVBQVF1YixHQUFPcGI7RUFBQUE7QUFBQUEsRyIsImZpbGUiOiJwcm9maWx+dGVzdH51YXJ0aWNsZX51Y2F0ZWdvcmllYXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcclxuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xyXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XHJcbmNvbnN0IFN3YWwgPSByZXF1aXJlKCdzd2VldGFsZXJ0MicpXHJcbmNvbnN0IHN3YWxXaXRoQm9vdHN0cmFwQnV0dG9ucyA9IFN3YWwubWl4aW4oe1xyXG4gICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13aGl0ZSBidG4teHMgc3lTd2VldFN0eWxlJyxcclxuICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLXdhcm5pbmcgYnRuLXhzIHN5U3dlZXRTdHlsZSdcclxuICAgIH0sXHJcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxufSlcclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gU2hvd0Zvcm1FcnJvcnMoc2VsZWN0b3IsIGZvcm1fbmFtZSwgZXJyb3JzLGlkPW51bGwsaXNHcm91cGUgPSBmYWxzZSkge1xyXG4gICAgJCgnLmVycm9ycy1saXN0JykucmVtb3ZlKCk7XHJcbiAgICBqUXVlcnkuZWFjaChlcnJvcnMudmlvbGF0aW9ucywgZnVuY3Rpb24gKGksIHZhbCkge1xyXG4gICAgICAgIHZhciBjb2x1bW5OYW1lID0gXCJcIjtcclxuICAgICAgICB2YXIgeCA9IHZhbC5wcm9wZXJ0eVBhdGg7XHJcbiAgICAgICAgaWYoaXNHcm91cGUgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSB4O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIGlmICh4LnNlYXJjaCgnXFxcXFsnKSAhPSAtMSAmJiB4LnNlYXJjaCgnXFxcXF0nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9ycyA9IFsnXFxcXF0nLCAnXFxcXFsnXTtcclxuICAgICAgICAgICAgdmFyIGFyciA9IHguc3BsaXQobmV3IFJlZ0V4cChzZXBhcmF0b3JzLmpvaW4oJ3wnKSkpO1xyXG4gICAgICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGFyclsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHguc2VhcmNoKCdkYXRhLicpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSB4LnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5OYW1lID0gYXJyWzFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHgpXHJcblxyXG4vKnbDqXJpZmllciBzJ2lsIHMnYWdpdCBkJ3VuZSBmb3JtdWxhaXJlIGF2ZWMgdW4gY2hhbXAgdHlwZSBmaWxlICovXHJcbiAgICAgICAgaWYgKCFqUXVlcnkoXCIjXCIgKyBmb3JtX25hbWUgKyBcIl9cIiArIGNvbHVtbk5hbWUpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29sdW1uTmFtZSA9IGNvbHVtbk5hbWUgKyAnX2ZpbGUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCl7XHJcbiAgICAgICAgICAgIGNvbHVtbk5hbWUgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY29sdW1uTmFtZSk7XHJcbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZSlcclxuICAgICAgICAgICAgc2VsZWN0b3IuZmluZChcIiNcIiArIGZvcm1fbmFtZSArIFwiX1wiICsgY29sdW1uTmFtZSkucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgdmFsLnRpdGxlICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBTaG93Rm9ybUVycm9yc1dpdGhQYXJhbShzZWxlY3RvciwgZm9ybV9uYW1lLCBlcnJvcnMsaWQ9bnVsbCxpc0dyb3VwZSA9IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcuZXJyb3JzLWxpc3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNcIitzZWxlY3RvcikucGFyZW50KCkuYXBwZW5kKChcIjxzcGFuIGNsYXNzPScgIGVycm9yLWNsYXNzLXRhYiAgZXJyb3JzLWxpc3QgaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrJz48c3BhbiBjbGFzcz0nZC1ibG9jayc+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLWljb24gYmFkZ2UgYmFkZ2UtZGFuZ2VyIHRleHQtdXBwZXJjYXNlJz5FcnJldXI8L3NwYW4+IDxzcGFuIGNsYXNzPSdmb3JtLWVycm9yLW1lc3NhZ2UnPlwiICsgZXJyb3JzICsgXCI8L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIikpO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8qXHJcbiAqIGJsdWVpbXAgR2FsbGVyeSBWaWRlbyBGYWN0b3J5IEpTXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0dhbGxlcnlcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTMsIFNlYmFzdGlhbiBUc2NoYW5cclxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XHJcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiAqL1xyXG5cclxuLyogZ2xvYmFsIGRlZmluZSAqL1xyXG5cclxuOyhmdW5jdGlvbihmYWN0b3J5KSB7XHJcbiAgJ3VzZSBzdHJpY3QnXHJcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgLy8gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIEFNRCBtb2R1bGU6XHJcbiAgICBkZWZpbmUoWycuL2JsdWVpbXAtaGVscGVyJywgJy4vYmx1ZWltcC1nYWxsZXJ5J10sIGZhY3RvcnkpXHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIEJyb3dzZXIgZ2xvYmFsczpcclxuICAgIGZhY3Rvcnkod2luZG93LmJsdWVpbXAuaGVscGVyIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdy5ibHVlaW1wLkdhbGxlcnkpXHJcbiAgfVxyXG59KShmdW5jdGlvbigkLCBHYWxsZXJ5KSB7XHJcbiAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gICQuZXh0ZW5kKEdhbGxlcnkucHJvdG90eXBlLm9wdGlvbnMsIHtcclxuICAgIC8vIFRoZSBjbGFzcyBmb3IgdmlkZW8gY29udGVudCBlbGVtZW50czpcclxuICAgIHZpZGVvQ29udGVudENsYXNzOiAndmlkZW8tY29udGVudCcsXHJcbiAgICAvLyBUaGUgY2xhc3MgZm9yIHZpZGVvIHdoZW4gaXQgaXMgbG9hZGluZzpcclxuICAgIHZpZGVvTG9hZGluZ0NsYXNzOiAndmlkZW8tbG9hZGluZycsXHJcbiAgICAvLyBUaGUgY2xhc3MgZm9yIHZpZGVvIHdoZW4gaXQgaXMgcGxheWluZzpcclxuICAgIHZpZGVvUGxheWluZ0NsYXNzOiAndmlkZW8tcGxheWluZycsXHJcbiAgICAvLyBUaGUgbGlzdCBvYmplY3QgcHJvcGVydHkgKG9yIGRhdGEgYXR0cmlidXRlKSBmb3IgdGhlIHZpZGVvIHBvc3RlciBVUkw6XHJcbiAgICB2aWRlb1Bvc3RlclByb3BlcnR5OiAncG9zdGVyJyxcclxuICAgIC8vIFRoZSBsaXN0IG9iamVjdCBwcm9wZXJ0eSAob3IgZGF0YSBhdHRyaWJ1dGUpIGZvciB0aGUgdmlkZW8gc291cmNlcyBhcnJheTpcclxuICAgIHZpZGVvU291cmNlc1Byb3BlcnR5OiAnc291cmNlcydcclxuICB9KVxyXG5cclxuICB2YXIgaGFuZGxlU2xpZGUgPSBHYWxsZXJ5LnByb3RvdHlwZS5oYW5kbGVTbGlkZVxyXG5cclxuICAkLmV4dGVuZChHYWxsZXJ5LnByb3RvdHlwZSwge1xyXG4gICAgaGFuZGxlU2xpZGU6IGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgIGhhbmRsZVNsaWRlLmNhbGwodGhpcywgaW5kZXgpXHJcbiAgICAgIGlmICh0aGlzLnBsYXlpbmdWaWRlbykge1xyXG4gICAgICAgIHRoaXMucGxheWluZ1ZpZGVvLnBhdXNlKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB2aWRlb0ZhY3Rvcnk6IGZ1bmN0aW9uKG9iaiwgY2FsbGJhY2ssIHZpZGVvSW50ZXJmYWNlKSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpc1xyXG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uc1xyXG4gICAgICB2YXIgdmlkZW9Db250YWluZXJOb2RlID0gdGhpcy5lbGVtZW50UHJvdG90eXBlLmNsb25lTm9kZShmYWxzZSlcclxuICAgICAgdmFyIHZpZGVvQ29udGFpbmVyID0gJCh2aWRlb0NvbnRhaW5lck5vZGUpXHJcbiAgICAgIHZhciBlcnJvckFyZ3MgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgIHRhcmdldDogdmlkZW9Db250YWluZXJOb2RlXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICAgIHZhciB2aWRlbyA9IHZpZGVvSW50ZXJmYWNlIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJylcclxuICAgICAgdmFyIHVybCA9IHRoaXMuZ2V0SXRlbVByb3BlcnR5KG9iaiwgb3B0aW9ucy51cmxQcm9wZXJ0eSlcclxuICAgICAgdmFyIHR5cGUgPSB0aGlzLmdldEl0ZW1Qcm9wZXJ0eShvYmosIG9wdGlvbnMudHlwZVByb3BlcnR5KVxyXG4gICAgICB2YXIgdGl0bGUgPSB0aGlzLmdldEl0ZW1Qcm9wZXJ0eShvYmosIG9wdGlvbnMudGl0bGVQcm9wZXJ0eSlcclxuICAgICAgdmFyIGFsdFRleHQgPVxyXG4gICAgICAgIHRoaXMuZ2V0SXRlbVByb3BlcnR5KG9iaiwgdGhpcy5vcHRpb25zLmFsdFRleHRQcm9wZXJ0eSkgfHwgdGl0bGVcclxuICAgICAgdmFyIHBvc3RlclVybCA9IHRoaXMuZ2V0SXRlbVByb3BlcnR5KG9iaiwgb3B0aW9ucy52aWRlb1Bvc3RlclByb3BlcnR5KVxyXG4gICAgICB2YXIgcG9zdGVySW1hZ2VcclxuICAgICAgdmFyIHNvdXJjZXMgPSB0aGlzLmdldEl0ZW1Qcm9wZXJ0eShvYmosIG9wdGlvbnMudmlkZW9Tb3VyY2VzUHJvcGVydHkpXHJcbiAgICAgIHZhciBzb3VyY2VcclxuICAgICAgdmFyIHBsYXlNZWRpYUNvbnRyb2xcclxuICAgICAgdmFyIGlzTG9hZGluZ1xyXG4gICAgICB2YXIgaGFzQ29udHJvbHNcclxuICAgICAgdmlkZW9Db250YWluZXIuYWRkQ2xhc3Mob3B0aW9ucy52aWRlb0NvbnRlbnRDbGFzcylcclxuICAgICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgICAgdmlkZW9Db250YWluZXJOb2RlLnRpdGxlID0gdGl0bGVcclxuICAgICAgfVxyXG4gICAgICBpZiAodmlkZW8uY2FuUGxheVR5cGUpIHtcclxuICAgICAgICBpZiAodXJsICYmIHR5cGUgJiYgdmlkZW8uY2FuUGxheVR5cGUodHlwZSkpIHtcclxuICAgICAgICAgIHZpZGVvLnNyYyA9IHVybFxyXG4gICAgICAgIH0gZWxzZSBpZiAoc291cmNlcykge1xyXG4gICAgICAgICAgd2hpbGUgKHNvdXJjZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxyXG4gICAgICAgICAgICB1cmwgPSB0aGlzLmdldEl0ZW1Qcm9wZXJ0eShzb3VyY2UsIG9wdGlvbnMudXJsUHJvcGVydHkpXHJcbiAgICAgICAgICAgIHR5cGUgPSB0aGlzLmdldEl0ZW1Qcm9wZXJ0eShzb3VyY2UsIG9wdGlvbnMudHlwZVByb3BlcnR5KVxyXG4gICAgICAgICAgICBpZiAodXJsICYmIHR5cGUgJiYgdmlkZW8uY2FuUGxheVR5cGUodHlwZSkpIHtcclxuICAgICAgICAgICAgICB2aWRlby5zcmMgPSB1cmxcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChwb3N0ZXJVcmwpIHtcclxuICAgICAgICB2aWRlby5wb3N0ZXIgPSBwb3N0ZXJVcmxcclxuICAgICAgICBwb3N0ZXJJbWFnZSA9IHRoaXMuaW1hZ2VQcm90b3R5cGUuY2xvbmVOb2RlKGZhbHNlKVxyXG4gICAgICAgICQocG9zdGVySW1hZ2UpLmFkZENsYXNzKG9wdGlvbnMudG9nZ2xlQ2xhc3MpXHJcbiAgICAgICAgcG9zdGVySW1hZ2Uuc3JjID0gcG9zdGVyVXJsXHJcbiAgICAgICAgcG9zdGVySW1hZ2UuZHJhZ2dhYmxlID0gZmFsc2VcclxuICAgICAgICBwb3N0ZXJJbWFnZS5hbHQgPSBhbHRUZXh0XHJcbiAgICAgICAgdmlkZW9Db250YWluZXJOb2RlLmFwcGVuZENoaWxkKHBvc3RlckltYWdlKVxyXG4gICAgICB9XHJcbiAgICAgIHBsYXlNZWRpYUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgICAgcGxheU1lZGlhQ29udHJvbC5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKVxyXG4gICAgICBpZiAoIXZpZGVvSW50ZXJmYWNlKSB7XHJcbiAgICAgICAgcGxheU1lZGlhQ29udHJvbC5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgdGl0bGUpXHJcbiAgICAgIH1cclxuICAgICAgcGxheU1lZGlhQ29udHJvbC5ocmVmID0gdXJsXHJcbiAgICAgIGlmICh2aWRlby5zcmMpIHtcclxuICAgICAgICB2aWRlby5jb250cm9scyA9IHRydWVcclxuICAgICAgICA7KHZpZGVvSW50ZXJmYWNlIHx8ICQodmlkZW8pKVxyXG4gICAgICAgICAgLm9uKCdlcnJvcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGF0LnNldFRpbWVvdXQoY2FsbGJhY2ssIGVycm9yQXJncylcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAub24oJ3BhdXNlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh2aWRlby5zZWVraW5nKSByZXR1cm5cclxuICAgICAgICAgICAgaXNMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgdmlkZW9Db250YWluZXJcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3ModGhhdC5vcHRpb25zLnZpZGVvTG9hZGluZ0NsYXNzKVxyXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGF0Lm9wdGlvbnMudmlkZW9QbGF5aW5nQ2xhc3MpXHJcbiAgICAgICAgICAgIGlmIChoYXNDb250cm9scykge1xyXG4gICAgICAgICAgICAgIHRoYXQuY29udGFpbmVyLmFkZENsYXNzKHRoYXQub3B0aW9ucy5jb250cm9sc0NsYXNzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGF0LnBsYXlpbmdWaWRlb1xyXG4gICAgICAgICAgICBpZiAodGhhdC5pbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgIHRoYXQucGxheSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAub24oJ3BsYXlpbmcnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgdmlkZW9Db250YWluZXJcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3ModGhhdC5vcHRpb25zLnZpZGVvTG9hZGluZ0NsYXNzKVxyXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyh0aGF0Lm9wdGlvbnMudmlkZW9QbGF5aW5nQ2xhc3MpXHJcbiAgICAgICAgICAgIGlmICh0aGF0LmNvbnRhaW5lci5oYXNDbGFzcyh0aGF0Lm9wdGlvbnMuY29udHJvbHNDbGFzcykpIHtcclxuICAgICAgICAgICAgICBoYXNDb250cm9scyA9IHRydWVcclxuICAgICAgICAgICAgICB0aGF0LmNvbnRhaW5lci5yZW1vdmVDbGFzcyh0aGF0Lm9wdGlvbnMuY29udHJvbHNDbGFzcylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBoYXNDb250cm9scyA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAub24oJ3BsYXknLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGF0LnRpbWVvdXQpXHJcbiAgICAgICAgICAgIGlzTG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgdmlkZW9Db250YWluZXIuYWRkQ2xhc3ModGhhdC5vcHRpb25zLnZpZGVvTG9hZGluZ0NsYXNzKVxyXG4gICAgICAgICAgICB0aGF0LnBsYXlpbmdWaWRlbyA9IHZpZGVvXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICQocGxheU1lZGlhQ29udHJvbCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgIHRoYXQucHJldmVudERlZmF1bHQoZXZlbnQpXHJcbiAgICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHZpZGVvLnBhdXNlKClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdmlkZW9Db250YWluZXJOb2RlLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgKHZpZGVvSW50ZXJmYWNlICYmIHZpZGVvSW50ZXJmYWNlLmVsZW1lbnQpIHx8IHZpZGVvXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICAgIHZpZGVvQ29udGFpbmVyTm9kZS5hcHBlbmRDaGlsZChwbGF5TWVkaWFDb250cm9sKVxyXG4gICAgICB0aGlzLnNldFRpbWVvdXQoY2FsbGJhY2ssIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAnbG9hZCcsXHJcbiAgICAgICAgICB0YXJnZXQ6IHZpZGVvQ29udGFpbmVyTm9kZVxyXG4gICAgICAgIH1cclxuICAgICAgXSlcclxuICAgICAgcmV0dXJuIHZpZGVvQ29udGFpbmVyTm9kZVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBHYWxsZXJ5XHJcbn0pXHJcbiIsIi8qXHJcbiAqIGJsdWVpbXAgR2FsbGVyeSBKU1xyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9HYWxsZXJ5XHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDEzLCBTZWJhc3RpYW4gVHNjaGFuXHJcbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcclxuICpcclxuICogU3dpcGUgaW1wbGVtZW50YXRpb24gYmFzZWQgb25cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2JyYWRiaXJkc2FsbC9Td2lwZVxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XHJcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiAqL1xyXG5cclxuLyogZ2xvYmFsIGRlZmluZSwgRG9jdW1lbnRUb3VjaCAqL1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuXHJcbjsoZnVuY3Rpb24oZmFjdG9yeSkge1xyXG4gICd1c2Ugc3RyaWN0J1xyXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgIC8vIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBBTUQgbW9kdWxlOlxyXG4gICAgZGVmaW5lKFsnLi9ibHVlaW1wLWhlbHBlciddLCBmYWN0b3J5KVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBCcm93c2VyIGdsb2JhbHM6XHJcbiAgICB3aW5kb3cuYmx1ZWltcCA9IHdpbmRvdy5ibHVlaW1wIHx8IHt9XHJcbiAgICB3aW5kb3cuYmx1ZWltcC5HYWxsZXJ5ID0gZmFjdG9yeSh3aW5kb3cuYmx1ZWltcC5oZWxwZXIgfHwgd2luZG93LmpRdWVyeSlcclxuICB9XHJcbn0pKGZ1bmN0aW9uKCQpIHtcclxuICAndXNlIHN0cmljdCdcclxuXHJcbiAgLyoqXHJcbiAgICogR2FsbGVyeSBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQGNsYXNzXHJcbiAgICogQHBhcmFtIHtBcnJheXxOb2RlTGlzdH0gbGlzdCBHYWxsZXJ5IGNvbnRlbnRcclxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIEdhbGxlcnkgb3B0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IEdhbGxlcnkgb2JqZWN0XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gR2FsbGVyeShsaXN0LCBvcHRpb25zKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5zdHlsZS5tYXhIZWlnaHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyBkb2N1bWVudC5ib2R5LnN0eWxlLm1heEhlaWdodCBpcyB1bmRlZmluZWQgb24gSUU2IGFuZCBsb3dlclxyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzIHx8IHRoaXMub3B0aW9ucyAhPT0gR2FsbGVyeS5wcm90b3R5cGUub3B0aW9ucykge1xyXG4gICAgICAvLyBDYWxsZWQgYXMgZnVuY3Rpb24gaW5zdGVhZCBvZiBhcyBjb25zdHJ1Y3RvcixcclxuICAgICAgLy8gc28gd2Ugc2ltcGx5IHJldHVybiBhIG5ldyBpbnN0YW5jZTpcclxuICAgICAgcmV0dXJuIG5ldyBHYWxsZXJ5KGxpc3QsIG9wdGlvbnMpXHJcbiAgICB9XHJcbiAgICBpZiAoIWxpc3QgfHwgIWxpc3QubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuY29uc29sZS5sb2coXHJcbiAgICAgICAgJ2JsdWVpbXAgR2FsbGVyeTogTm8gb3IgZW1wdHkgbGlzdCBwcm92aWRlZCBhcyBmaXJzdCBhcmd1bWVudC4nLFxyXG4gICAgICAgIGxpc3RcclxuICAgICAgKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMubGlzdCA9IGxpc3RcclxuICAgIHRoaXMubnVtID0gbGlzdC5sZW5ndGhcclxuICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucylcclxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpXHJcbiAgfVxyXG5cclxuICAkLmV4dGVuZChHYWxsZXJ5LnByb3RvdHlwZSwge1xyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAvLyBUaGUgSWQsIGVsZW1lbnQgb3IgcXVlcnlTZWxlY3RvciBvZiB0aGUgZ2FsbGVyeSB3aWRnZXQ6XHJcbiAgICAgIGNvbnRhaW5lcjogJyNibHVlaW1wLWdhbGxlcnknLFxyXG4gICAgICAvLyBUaGUgdGFnIG5hbWUsIElkLCBlbGVtZW50IG9yIHF1ZXJ5U2VsZWN0b3Igb2YgdGhlIHNsaWRlcyBjb250YWluZXI6XHJcbiAgICAgIHNsaWRlc0NvbnRhaW5lcjogJ2RpdicsXHJcbiAgICAgIC8vIFRoZSB0YWcgbmFtZSwgSWQsIGVsZW1lbnQgb3IgcXVlcnlTZWxlY3RvciBvZiB0aGUgdGl0bGUgZWxlbWVudDpcclxuICAgICAgdGl0bGVFbGVtZW50OiAnaDMnLFxyXG4gICAgICAvLyBUaGUgY2xhc3MgdG8gYWRkIHdoZW4gdGhlIGdhbGxlcnkgaXMgdmlzaWJsZTpcclxuICAgICAgZGlzcGxheUNsYXNzOiAnYmx1ZWltcC1nYWxsZXJ5LWRpc3BsYXknLFxyXG4gICAgICAvLyBUaGUgY2xhc3MgdG8gYWRkIHdoZW4gdGhlIGdhbGxlcnkgY29udHJvbHMgYXJlIHZpc2libGU6XHJcbiAgICAgIGNvbnRyb2xzQ2xhc3M6ICdibHVlaW1wLWdhbGxlcnktY29udHJvbHMnLFxyXG4gICAgICAvLyBUaGUgY2xhc3MgdG8gYWRkIHdoZW4gdGhlIGdhbGxlcnkgb25seSBkaXNwbGF5cyBvbmUgZWxlbWVudDpcclxuICAgICAgc2luZ2xlQ2xhc3M6ICdibHVlaW1wLWdhbGxlcnktc2luZ2xlJyxcclxuICAgICAgLy8gVGhlIGNsYXNzIHRvIGFkZCB3aGVuIHRoZSBsZWZ0IGVkZ2UgaGFzIGJlZW4gcmVhY2hlZDpcclxuICAgICAgbGVmdEVkZ2VDbGFzczogJ2JsdWVpbXAtZ2FsbGVyeS1sZWZ0JyxcclxuICAgICAgLy8gVGhlIGNsYXNzIHRvIGFkZCB3aGVuIHRoZSByaWdodCBlZGdlIGhhcyBiZWVuIHJlYWNoZWQ6XHJcbiAgICAgIHJpZ2h0RWRnZUNsYXNzOiAnYmx1ZWltcC1nYWxsZXJ5LXJpZ2h0JyxcclxuICAgICAgLy8gVGhlIGNsYXNzIHRvIGFkZCB3aGVuIHRoZSBhdXRvbWF0aWMgc2xpZGVzaG93IGlzIGFjdGl2ZTpcclxuICAgICAgcGxheWluZ0NsYXNzOiAnYmx1ZWltcC1nYWxsZXJ5LXBsYXlpbmcnLFxyXG4gICAgICAvLyBUaGUgY2xhc3MgZm9yIGFsbCBzbGlkZXM6XHJcbiAgICAgIHNsaWRlQ2xhc3M6ICdzbGlkZScsXHJcbiAgICAgIC8vIFRoZSBzbGlkZSBjbGFzcyBmb3IgbG9hZGluZyBlbGVtZW50czpcclxuICAgICAgc2xpZGVMb2FkaW5nQ2xhc3M6ICdzbGlkZS1sb2FkaW5nJyxcclxuICAgICAgLy8gVGhlIHNsaWRlIGNsYXNzIGZvciBlbGVtZW50cyB0aGF0IGZhaWxlZCB0byBsb2FkOlxyXG4gICAgICBzbGlkZUVycm9yQ2xhc3M6ICdzbGlkZS1lcnJvcicsXHJcbiAgICAgIC8vIFRoZSBjbGFzcyBmb3IgdGhlIGNvbnRlbnQgZWxlbWVudCBsb2FkZWQgaW50byBlYWNoIHNsaWRlOlxyXG4gICAgICBzbGlkZUNvbnRlbnRDbGFzczogJ3NsaWRlLWNvbnRlbnQnLFxyXG4gICAgICAvLyBUaGUgY2xhc3MgZm9yIHRoZSBcInRvZ2dsZVwiIGNvbnRyb2w6XHJcbiAgICAgIHRvZ2dsZUNsYXNzOiAndG9nZ2xlJyxcclxuICAgICAgLy8gVGhlIGNsYXNzIGZvciB0aGUgXCJwcmV2XCIgY29udHJvbDpcclxuICAgICAgcHJldkNsYXNzOiAncHJldicsXHJcbiAgICAgIC8vIFRoZSBjbGFzcyBmb3IgdGhlIFwibmV4dFwiIGNvbnRyb2w6XHJcbiAgICAgIG5leHRDbGFzczogJ25leHQnLFxyXG4gICAgICAvLyBUaGUgY2xhc3MgZm9yIHRoZSBcImNsb3NlXCIgY29udHJvbDpcclxuICAgICAgY2xvc2VDbGFzczogJ2Nsb3NlJyxcclxuICAgICAgLy8gVGhlIGNsYXNzIGZvciB0aGUgXCJwbGF5LXBhdXNlXCIgdG9nZ2xlIGNvbnRyb2w6XHJcbiAgICAgIHBsYXlQYXVzZUNsYXNzOiAncGxheS1wYXVzZScsXHJcbiAgICAgIC8vIFRoZSBsaXN0IG9iamVjdCBwcm9wZXJ0eSAob3IgZGF0YSBhdHRyaWJ1dGUpIHdpdGggdGhlIG9iamVjdCB0eXBlOlxyXG4gICAgICB0eXBlUHJvcGVydHk6ICd0eXBlJyxcclxuICAgICAgLy8gVGhlIGxpc3Qgb2JqZWN0IHByb3BlcnR5IChvciBkYXRhIGF0dHJpYnV0ZSkgd2l0aCB0aGUgb2JqZWN0IHRpdGxlOlxyXG4gICAgICB0aXRsZVByb3BlcnR5OiAndGl0bGUnLFxyXG4gICAgICAvLyBUaGUgbGlzdCBvYmplY3QgcHJvcGVydHkgKG9yIGRhdGEgYXR0cmlidXRlKSB3aXRoIHRoZSBvYmplY3QgYWx0IHRleHQ6XHJcbiAgICAgIGFsdFRleHRQcm9wZXJ0eTogJ2FsdCcsXHJcbiAgICAgIC8vIFRoZSBsaXN0IG9iamVjdCBwcm9wZXJ0eSAob3IgZGF0YSBhdHRyaWJ1dGUpIHdpdGggdGhlIG9iamVjdCBVUkw6XHJcbiAgICAgIHVybFByb3BlcnR5OiAnaHJlZicsXHJcbiAgICAgIC8vIFRoZSBsaXN0IG9iamVjdCBwcm9wZXJ0eSAob3IgZGF0YSBhdHRyaWJ1dGUpIHdpdGggdGhlIG9iamVjdCBzcmNzZXQgVVJMKHMpOlxyXG4gICAgICBzcmNzZXRQcm9wZXJ0eTogJ3VybHNldCcsXHJcbiAgICAgIC8vIFRoZSBnYWxsZXJ5IGxpc3RlbnMgZm9yIHRyYW5zaXRpb25lbmQgZXZlbnRzIGJlZm9yZSB0cmlnZ2VyaW5nIHRoZVxyXG4gICAgICAvLyBvcGVuZWQgYW5kIGNsb3NlZCBldmVudHMsIHVubGVzcyB0aGUgZm9sbG93aW5nIG9wdGlvbiBpcyBzZXQgdG8gZmFsc2U6XHJcbiAgICAgIGRpc3BsYXlUcmFuc2l0aW9uOiB0cnVlLFxyXG4gICAgICAvLyBEZWZpbmVzIGlmIHRoZSBnYWxsZXJ5IHNsaWRlcyBhcmUgY2xlYXJlZCBmcm9tIHRoZSBnYWxsZXJ5IG1vZGFsLFxyXG4gICAgICAvLyBvciByZXVzZWQgZm9yIHRoZSBuZXh0IGdhbGxlcnkgaW5pdGlhbGl6YXRpb246XHJcbiAgICAgIGNsZWFyU2xpZGVzOiB0cnVlLFxyXG4gICAgICAvLyBEZWZpbmVzIGlmIGltYWdlcyBzaG91bGQgYmUgc3RyZXRjaGVkIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZSxcclxuICAgICAgLy8gd2hpbGUgbWFpbnRhaW5pbmcgdGhlaXIgYXNwZWN0IHJhdGlvICh3aWxsIG9ubHkgYmUgZW5hYmxlZCBmb3IgYnJvd3NlcnNcclxuICAgICAgLy8gc3VwcG9ydGluZyBiYWNrZ3JvdW5kLXNpemU9XCJjb250YWluXCIsIHdoaWNoIGV4Y2x1ZGVzIElFIDwgOSkuXHJcbiAgICAgIC8vIFNldCB0byBcImNvdmVyXCIsIHRvIG1ha2UgaW1hZ2VzIGNvdmVyIGFsbCBhdmFpbGFibGUgc3BhY2UgKHJlcXVpcmVzXHJcbiAgICAgIC8vIHN1cHBvcnQgZm9yIGJhY2tncm91bmQtc2l6ZT1cImNvdmVyXCIsIHdoaWNoIGV4Y2x1ZGVzIElFIDwgOSk6XHJcbiAgICAgIHN0cmV0Y2hJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAvLyBUb2dnbGUgdGhlIGNvbnRyb2xzIG9uIHByZXNzaW5nIHRoZSBSZXR1cm4ga2V5OlxyXG4gICAgICB0b2dnbGVDb250cm9sc09uUmV0dXJuOiB0cnVlLFxyXG4gICAgICAvLyBUb2dnbGUgdGhlIGNvbnRyb2xzIG9uIHNsaWRlIGNsaWNrOlxyXG4gICAgICB0b2dnbGVDb250cm9sc09uU2xpZGVDbGljazogdHJ1ZSxcclxuICAgICAgLy8gVG9nZ2xlIHRoZSBhdXRvbWF0aWMgc2xpZGVzaG93IGludGVydmFsIG9uIHByZXNzaW5nIHRoZSBTcGFjZSBrZXk6XHJcbiAgICAgIHRvZ2dsZVNsaWRlc2hvd09uU3BhY2U6IHRydWUsXHJcbiAgICAgIC8vIE5hdmlnYXRlIHRoZSBnYWxsZXJ5IGJ5IHByZXNzaW5nIGxlZnQgYW5kIHJpZ2h0IG9uIHRoZSBrZXlib2FyZDpcclxuICAgICAgZW5hYmxlS2V5Ym9hcmROYXZpZ2F0aW9uOiB0cnVlLFxyXG4gICAgICAvLyBDbG9zZSB0aGUgZ2FsbGVyeSBvbiBwcmVzc2luZyB0aGUgRXNjIGtleTpcclxuICAgICAgY2xvc2VPbkVzY2FwZTogdHJ1ZSxcclxuICAgICAgLy8gQ2xvc2UgdGhlIGdhbGxlcnkgd2hlbiBjbGlja2luZyBvbiBhbiBlbXB0eSBzbGlkZSBhcmVhOlxyXG4gICAgICBjbG9zZU9uU2xpZGVDbGljazogdHJ1ZSxcclxuICAgICAgLy8gQ2xvc2UgdGhlIGdhbGxlcnkgYnkgc3dpcGluZyB1cCBvciBkb3duOlxyXG4gICAgICBjbG9zZU9uU3dpcGVVcE9yRG93bjogdHJ1ZSxcclxuICAgICAgLy8gRW11bGF0ZSB0b3VjaCBldmVudHMgb24gbW91c2UtcG9pbnRlciBkZXZpY2VzIHN1Y2ggYXMgZGVza3RvcCBicm93c2VyczpcclxuICAgICAgZW11bGF0ZVRvdWNoRXZlbnRzOiB0cnVlLFxyXG4gICAgICAvLyBTdG9wIHRvdWNoIGV2ZW50cyBmcm9tIGJ1YmJsaW5nIHVwIHRvIGFuY2VzdG9yIGVsZW1lbnRzIG9mIHRoZSBHYWxsZXJ5OlxyXG4gICAgICBzdG9wVG91Y2hFdmVudHNQcm9wYWdhdGlvbjogZmFsc2UsXHJcbiAgICAgIC8vIEhpZGUgdGhlIHBhZ2Ugc2Nyb2xsYmFyczpcclxuICAgICAgaGlkZVBhZ2VTY3JvbGxiYXJzOiB0cnVlLFxyXG4gICAgICAvLyBTdG9wcyBhbnkgdG91Y2hlcyBvbiB0aGUgY29udGFpbmVyIGZyb20gc2Nyb2xsaW5nIHRoZSBwYWdlOlxyXG4gICAgICBkaXNhYmxlU2Nyb2xsOiB0cnVlLFxyXG4gICAgICAvLyBDYXJvdXNlbCBtb2RlIChzaG9ydGN1dCBmb3IgY2Fyb3VzZWwgc3BlY2lmaWMgb3B0aW9ucyk6XHJcbiAgICAgIGNhcm91c2VsOiBmYWxzZSxcclxuICAgICAgLy8gQWxsb3cgY29udGludW91cyBuYXZpZ2F0aW9uLCBtb3ZpbmcgZnJvbSBsYXN0IHRvIGZpcnN0XHJcbiAgICAgIC8vIGFuZCBmcm9tIGZpcnN0IHRvIGxhc3Qgc2xpZGU6XHJcbiAgICAgIGNvbnRpbnVvdXM6IHRydWUsXHJcbiAgICAgIC8vIFJlbW92ZSBlbGVtZW50cyBvdXRzaWRlIG9mIHRoZSBwcmVsb2FkIHJhbmdlIGZyb20gdGhlIERPTTpcclxuICAgICAgdW5sb2FkRWxlbWVudHM6IHRydWUsXHJcbiAgICAgIC8vIFN0YXJ0IHdpdGggdGhlIGF1dG9tYXRpYyBzbGlkZXNob3c6XHJcbiAgICAgIHN0YXJ0U2xpZGVzaG93OiBmYWxzZSxcclxuICAgICAgLy8gRGVsYXkgaW4gbWlsbGlzZWNvbmRzIGJldHdlZW4gc2xpZGVzIGZvciB0aGUgYXV0b21hdGljIHNsaWRlc2hvdzpcclxuICAgICAgc2xpZGVzaG93SW50ZXJ2YWw6IDUwMDAsXHJcbiAgICAgIC8vIFRoZSBkaXJlY3Rpb24gdGhlIHNsaWRlcyBhcmUgbW92aW5nOiBsdHI9TGVmdFRvUmlnaHQgb3IgcnRsPVJpZ2h0VG9MZWZ0XHJcbiAgICAgIHNsaWRlc2hvd0RpcmVjdGlvbjogJ2x0cicsXHJcbiAgICAgIC8vIFRoZSBzdGFydGluZyBpbmRleCBhcyBpbnRlZ2VyLlxyXG4gICAgICAvLyBDYW4gYWxzbyBiZSBhbiBvYmplY3Qgb2YgdGhlIGdpdmVuIGxpc3QsXHJcbiAgICAgIC8vIG9yIGFuIGVxdWFsIG9iamVjdCB3aXRoIHRoZSBzYW1lIHVybCBwcm9wZXJ0eTpcclxuICAgICAgaW5kZXg6IDAsXHJcbiAgICAgIC8vIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gbG9hZCBhcm91bmQgdGhlIGN1cnJlbnQgaW5kZXg6XHJcbiAgICAgIHByZWxvYWRSYW5nZTogMixcclxuICAgICAgLy8gVGhlIHRyYW5zaXRpb24gc3BlZWQgYmV0d2VlbiBzbGlkZSBjaGFuZ2VzIGluIG1pbGxpc2Vjb25kczpcclxuICAgICAgdHJhbnNpdGlvblNwZWVkOiA0MDAsXHJcbiAgICAgIC8vIFRoZSB0cmFuc2l0aW9uIHNwZWVkIGZvciBhdXRvbWF0aWMgc2xpZGUgY2hhbmdlcywgc2V0IHRvIGFuIGludGVnZXJcclxuICAgICAgLy8gZ3JlYXRlciAwIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHRyYW5zaXRpb24gc3BlZWQ6XHJcbiAgICAgIHNsaWRlc2hvd1RyYW5zaXRpb25TcGVlZDogdW5kZWZpbmVkLFxyXG4gICAgICAvLyBUaGUgZXZlbnQgb2JqZWN0IGZvciB3aGljaCB0aGUgZGVmYXVsdCBhY3Rpb24gd2lsbCBiZSBjYW5jZWxlZFxyXG4gICAgICAvLyBvbiBHYWxsZXJ5IGluaXRpYWxpemF0aW9uIChlLmcuIHRoZSBjbGljayBldmVudCB0byBvcGVuIHRoZSBHYWxsZXJ5KTpcclxuICAgICAgZXZlbnQ6IHVuZGVmaW5lZCxcclxuICAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gZXhlY3V0ZWQgd2hlbiB0aGUgR2FsbGVyeSBpcyBpbml0aWFsaXplZC5cclxuICAgICAgLy8gSXMgY2FsbGVkIHdpdGggdGhlIGdhbGxlcnkgaW5zdGFuY2UgYXMgXCJ0aGlzXCIgb2JqZWN0OlxyXG4gICAgICBvbm9wZW46IHVuZGVmaW5lZCxcclxuICAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gZXhlY3V0ZWQgd2hlbiB0aGUgR2FsbGVyeSBoYXMgYmVlbiBpbml0aWFsaXplZFxyXG4gICAgICAvLyBhbmQgdGhlIGluaXRpYWxpemF0aW9uIHRyYW5zaXRpb24gaGFzIGJlZW4gY29tcGxldGVkLlxyXG4gICAgICAvLyBJcyBjYWxsZWQgd2l0aCB0aGUgZ2FsbGVyeSBpbnN0YW5jZSBhcyBcInRoaXNcIiBvYmplY3Q6XHJcbiAgICAgIG9ub3BlbmVkOiB1bmRlZmluZWQsXHJcbiAgICAgIC8vIENhbGxiYWNrIGZ1bmN0aW9uIGV4ZWN1dGVkIG9uIHNsaWRlIGNoYW5nZS5cclxuICAgICAgLy8gSXMgY2FsbGVkIHdpdGggdGhlIGdhbGxlcnkgaW5zdGFuY2UgYXMgXCJ0aGlzXCIgb2JqZWN0IGFuZCB0aGVcclxuICAgICAgLy8gY3VycmVudCBpbmRleCBhbmQgc2xpZGUgYXMgYXJndW1lbnRzOlxyXG4gICAgICBvbnNsaWRlOiB1bmRlZmluZWQsXHJcbiAgICAgIC8vIENhbGxiYWNrIGZ1bmN0aW9uIGV4ZWN1dGVkIGFmdGVyIHRoZSBzbGlkZSBjaGFuZ2UgdHJhbnNpdGlvbi5cclxuICAgICAgLy8gSXMgY2FsbGVkIHdpdGggdGhlIGdhbGxlcnkgaW5zdGFuY2UgYXMgXCJ0aGlzXCIgb2JqZWN0IGFuZCB0aGVcclxuICAgICAgLy8gY3VycmVudCBpbmRleCBhbmQgc2xpZGUgYXMgYXJndW1lbnRzOlxyXG4gICAgICBvbnNsaWRlZW5kOiB1bmRlZmluZWQsXHJcbiAgICAgIC8vIENhbGxiYWNrIGZ1bmN0aW9uIGV4ZWN1dGVkIG9uIHNsaWRlIGNvbnRlbnQgbG9hZC5cclxuICAgICAgLy8gSXMgY2FsbGVkIHdpdGggdGhlIGdhbGxlcnkgaW5zdGFuY2UgYXMgXCJ0aGlzXCIgb2JqZWN0IGFuZCB0aGVcclxuICAgICAgLy8gc2xpZGUgaW5kZXggYW5kIHNsaWRlIGVsZW1lbnQgYXMgYXJndW1lbnRzOlxyXG4gICAgICBvbnNsaWRlY29tcGxldGU6IHVuZGVmaW5lZCxcclxuICAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gZXhlY3V0ZWQgd2hlbiB0aGUgR2FsbGVyeSBpcyBhYm91dCB0byBiZSBjbG9zZWQuXHJcbiAgICAgIC8vIElzIGNhbGxlZCB3aXRoIHRoZSBnYWxsZXJ5IGluc3RhbmNlIGFzIFwidGhpc1wiIG9iamVjdDpcclxuICAgICAgb25jbG9zZTogdW5kZWZpbmVkLFxyXG4gICAgICAvLyBDYWxsYmFjayBmdW5jdGlvbiBleGVjdXRlZCB3aGVuIHRoZSBHYWxsZXJ5IGhhcyBiZWVuIGNsb3NlZFxyXG4gICAgICAvLyBhbmQgdGhlIGNsb3NpbmcgdHJhbnNpdGlvbiBoYXMgYmVlbiBjb21wbGV0ZWQuXHJcbiAgICAgIC8vIElzIGNhbGxlZCB3aXRoIHRoZSBnYWxsZXJ5IGluc3RhbmNlIGFzIFwidGhpc1wiIG9iamVjdDpcclxuICAgICAgb25jbG9zZWQ6IHVuZGVmaW5lZFxyXG4gICAgfSxcclxuXHJcbiAgICBjYXJvdXNlbE9wdGlvbnM6IHtcclxuICAgICAgaGlkZVBhZ2VTY3JvbGxiYXJzOiBmYWxzZSxcclxuICAgICAgdG9nZ2xlQ29udHJvbHNPblJldHVybjogZmFsc2UsXHJcbiAgICAgIHRvZ2dsZVNsaWRlc2hvd09uU3BhY2U6IGZhbHNlLFxyXG4gICAgICBlbmFibGVLZXlib2FyZE5hdmlnYXRpb246IGZhbHNlLFxyXG4gICAgICBjbG9zZU9uRXNjYXBlOiBmYWxzZSxcclxuICAgICAgY2xvc2VPblNsaWRlQ2xpY2s6IGZhbHNlLFxyXG4gICAgICBjbG9zZU9uU3dpcGVVcE9yRG93bjogZmFsc2UsXHJcbiAgICAgIGRpc2FibGVTY3JvbGw6IGZhbHNlLFxyXG4gICAgICBzdGFydFNsaWRlc2hvdzogdHJ1ZVxyXG4gICAgfSxcclxuXHJcbiAgICBjb25zb2xlOlxyXG4gICAgICB3aW5kb3cuY29uc29sZSAmJiB0eXBlb2Ygd2luZG93LmNvbnNvbGUubG9nID09PSAnZnVuY3Rpb24nXHJcbiAgICAgICAgPyB3aW5kb3cuY29uc29sZVxyXG4gICAgICAgIDogeyBsb2c6IGZ1bmN0aW9uKCkge30gfSxcclxuXHJcbiAgICAvLyBEZXRlY3QgdG91Y2gsIHRyYW5zaXRpb24sIHRyYW5zZm9ybSBhbmQgYmFja2dyb3VuZC1zaXplIHN1cHBvcnQ6XHJcbiAgICBzdXBwb3J0OiAoZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgc3VwcG9ydCA9IHtcclxuICAgICAgICB0b3VjaDpcclxuICAgICAgICAgIHdpbmRvdy5vbnRvdWNoc3RhcnQgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgKHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaClcclxuICAgICAgfVxyXG4gICAgICB2YXIgdHJhbnNpdGlvbnMgPSB7XHJcbiAgICAgICAgd2Via2l0VHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgZW5kOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXHJcbiAgICAgICAgICBwcmVmaXg6ICctd2Via2l0LSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIE1velRyYW5zaXRpb246IHtcclxuICAgICAgICAgIGVuZDogJ3RyYW5zaXRpb25lbmQnLFxyXG4gICAgICAgICAgcHJlZml4OiAnLW1vei0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBPVHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgZW5kOiAnb3RyYW5zaXRpb25lbmQnLFxyXG4gICAgICAgICAgcHJlZml4OiAnLW8tJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgZW5kOiAndHJhbnNpdGlvbmVuZCcsXHJcbiAgICAgICAgICBwcmVmaXg6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHZhciBwcm9wXHJcbiAgICAgIGZvciAocHJvcCBpbiB0cmFuc2l0aW9ucykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0cmFuc2l0aW9ucywgcHJvcCkgJiZcclxuICAgICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgc3VwcG9ydC50cmFuc2l0aW9uID0gdHJhbnNpdGlvbnNbcHJvcF1cclxuICAgICAgICAgIHN1cHBvcnQudHJhbnNpdGlvbi5uYW1lID0gcHJvcFxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLyoqXHJcbiAgICAgICAqIFRlc3RzIGJyb3dzZXIgc3VwcG9ydFxyXG4gICAgICAgKi9cclxuICAgICAgZnVuY3Rpb24gZWxlbWVudFRlc3RzKCkge1xyXG4gICAgICAgIHZhciB0cmFuc2l0aW9uID0gc3VwcG9ydC50cmFuc2l0aW9uXHJcbiAgICAgICAgdmFyIHByb3BcclxuICAgICAgICB2YXIgdHJhbnNsYXRlWlxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudClcclxuICAgICAgICBpZiAodHJhbnNpdGlvbikge1xyXG4gICAgICAgICAgcHJvcCA9IHRyYW5zaXRpb24ubmFtZS5zbGljZSgwLCAtOSkgKyAncmFuc2Zvcm0nXHJcbiAgICAgICAgICBpZiAoZWxlbWVudC5zdHlsZVtwcm9wXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSAndHJhbnNsYXRlWigwKSdcclxuICAgICAgICAgICAgdHJhbnNsYXRlWiA9IHdpbmRvd1xyXG4gICAgICAgICAgICAgIC5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgLmdldFByb3BlcnR5VmFsdWUodHJhbnNpdGlvbi5wcmVmaXggKyAndHJhbnNmb3JtJylcclxuICAgICAgICAgICAgc3VwcG9ydC50cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgICAgICAgcHJlZml4OiB0cmFuc2l0aW9uLnByZWZpeCxcclxuICAgICAgICAgICAgICBuYW1lOiBwcm9wLFxyXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICB0cmFuc2xhdGVaOiAhIXRyYW5zbGF0ZVogJiYgdHJhbnNsYXRlWiAhPT0gJ25vbmUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFNpemUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgc3VwcG9ydC5iYWNrZ3JvdW5kU2l6ZSA9IHt9XHJcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nXHJcbiAgICAgICAgICBzdXBwb3J0LmJhY2tncm91bmRTaXplLmNvbnRhaW4gPVxyXG4gICAgICAgICAgICB3aW5kb3dcclxuICAgICAgICAgICAgICAuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxyXG4gICAgICAgICAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLXNpemUnKSA9PT0gJ2NvbnRhaW4nXHJcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJ1xyXG4gICAgICAgICAgc3VwcG9ydC5iYWNrZ3JvdW5kU2l6ZS5jb3ZlciA9XHJcbiAgICAgICAgICAgIHdpbmRvd1xyXG4gICAgICAgICAgICAgIC5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtc2l6ZScpID09PSAnY292ZXInXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudClcclxuICAgICAgfVxyXG4gICAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgIGVsZW1lbnRUZXN0cygpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ0RPTUNvbnRlbnRMb2FkZWQnLCBlbGVtZW50VGVzdHMpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN1cHBvcnRcclxuICAgICAgLy8gVGVzdCBlbGVtZW50LCBoYXMgdG8gYmUgc3RhbmRhcmQgSFRNTCBhbmQgbXVzdCBub3QgYmUgaGlkZGVuXHJcbiAgICAgIC8vIGZvciB0aGUgQ1NTMyB0ZXN0cyB1c2luZyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSB0byBiZSBhcHBsaWNhYmxlOlxyXG4gICAgfSkoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLFxyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZTpcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXHJcblxyXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWU6XHJcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUsXHJcblxyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuaW5pdFN0YXJ0SW5kZXgoKVxyXG4gICAgICBpZiAodGhpcy5pbml0V2lkZ2V0KCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKVxyXG4gICAgICAvLyBMb2FkIHRoZSBzbGlkZSBhdCB0aGUgZ2l2ZW4gaW5kZXg6XHJcbiAgICAgIHRoaXMub25zbGlkZSh0aGlzLmluZGV4KVxyXG4gICAgICAvLyBNYW51YWxseSB0cmlnZ2VyIHRoZSBzbGlkZWVuZCBldmVudCBmb3IgdGhlIGluaXRpYWwgc2xpZGU6XHJcbiAgICAgIHRoaXMub250cmFuc2l0aW9uZW5kKClcclxuICAgICAgLy8gU3RhcnQgdGhlIGF1dG9tYXRpYyBzbGlkZXNob3cgaWYgYXBwbGljYWJsZTpcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGFydFNsaWRlc2hvdykge1xyXG4gICAgICAgIHRoaXMucGxheSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2xpZGU6IGZ1bmN0aW9uKHRvLCBzcGVlZCkge1xyXG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcclxuICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleFxyXG4gICAgICB2YXIgZGlyZWN0aW9uXHJcbiAgICAgIHZhciBuYXR1cmFsRGlyZWN0aW9uXHJcbiAgICAgIHZhciBkaWZmXHJcbiAgICAgIGlmIChpbmRleCA9PT0gdG8gfHwgdGhpcy5udW0gPT09IDEpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBpZiAoIXNwZWVkKSB7XHJcbiAgICAgICAgc3BlZWQgPSB0aGlzLm9wdGlvbnMudHJhbnNpdGlvblNwZWVkXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc3VwcG9ydC50cmFuc2Zvcm0pIHtcclxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5jb250aW51b3VzKSB7XHJcbiAgICAgICAgICB0byA9IHRoaXMuY2lyY2xlKHRvKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAxOiBiYWNrd2FyZCwgLTE6IGZvcndhcmQ6XHJcbiAgICAgICAgZGlyZWN0aW9uID0gTWF0aC5hYnMoaW5kZXggLSB0bykgLyAoaW5kZXggLSB0bylcclxuICAgICAgICAvLyBHZXQgdGhlIGFjdHVhbCBwb3NpdGlvbiBvZiB0aGUgc2xpZGU6XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb250aW51b3VzKSB7XHJcbiAgICAgICAgICBuYXR1cmFsRGlyZWN0aW9uID0gZGlyZWN0aW9uXHJcbiAgICAgICAgICBkaXJlY3Rpb24gPSAtdGhpcy5wb3NpdGlvbnNbdGhpcy5jaXJjbGUodG8pXSAvIHRoaXMuc2xpZGVXaWR0aFxyXG4gICAgICAgICAgLy8gSWYgZ29pbmcgZm9yd2FyZCBidXQgdG8gPCBpbmRleCwgdXNlIHRvID0gc2xpZGVzLmxlbmd0aCArIHRvXHJcbiAgICAgICAgICAvLyBJZiBnb2luZyBiYWNrd2FyZCBidXQgdG8gPiBpbmRleCwgdXNlIHRvID0gLXNsaWRlcy5sZW5ndGggKyB0b1xyXG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiAhPT0gbmF0dXJhbERpcmVjdGlvbikge1xyXG4gICAgICAgICAgICB0byA9IC1kaXJlY3Rpb24gKiB0aGlzLm51bSArIHRvXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpZmYgPSBNYXRoLmFicyhpbmRleCAtIHRvKSAtIDFcclxuICAgICAgICAvLyBNb3ZlIGFsbCB0aGUgc2xpZGVzIGJldHdlZW4gaW5kZXggYW5kIHRvIGluIHRoZSByaWdodCBkaXJlY3Rpb246XHJcbiAgICAgICAgd2hpbGUgKGRpZmYpIHtcclxuICAgICAgICAgIGRpZmYgLT0gMVxyXG4gICAgICAgICAgdGhpcy5tb3ZlKFxyXG4gICAgICAgICAgICB0aGlzLmNpcmNsZSgodG8gPiBpbmRleCA/IHRvIDogaW5kZXgpIC0gZGlmZiAtIDEpLFxyXG4gICAgICAgICAgICB0aGlzLnNsaWRlV2lkdGggKiBkaXJlY3Rpb24sXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgdG8gPSB0aGlzLmNpcmNsZSh0bylcclxuICAgICAgICB0aGlzLm1vdmUoaW5kZXgsIHRoaXMuc2xpZGVXaWR0aCAqIGRpcmVjdGlvbiwgc3BlZWQpXHJcbiAgICAgICAgdGhpcy5tb3ZlKHRvLCAwLCBzcGVlZClcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRpbnVvdXMpIHtcclxuICAgICAgICAgIHRoaXMubW92ZShcclxuICAgICAgICAgICAgdGhpcy5jaXJjbGUodG8gLSBkaXJlY3Rpb24pLFxyXG4gICAgICAgICAgICAtKHRoaXMuc2xpZGVXaWR0aCAqIGRpcmVjdGlvbiksXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG8gPSB0aGlzLmNpcmNsZSh0bylcclxuICAgICAgICB0aGlzLmFuaW1hdGUoaW5kZXggKiAtdGhpcy5zbGlkZVdpZHRoLCB0byAqIC10aGlzLnNsaWRlV2lkdGgsIHNwZWVkKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25zbGlkZSh0bylcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0SW5kZXg6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pbmRleFxyXG4gICAgfSxcclxuXHJcbiAgICBnZXROdW1iZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5udW1cclxuICAgIH0sXHJcblxyXG4gICAgcHJldjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGludW91cyB8fCB0aGlzLmluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZSh0aGlzLmluZGV4IC0gMSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBuZXh0OiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb250aW51b3VzIHx8IHRoaXMuaW5kZXggPCB0aGlzLm51bSAtIDEpIHtcclxuICAgICAgICB0aGlzLnNsaWRlKHRoaXMuaW5kZXggKyAxKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXk6IGZ1bmN0aW9uKHRpbWUpIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzXHJcbiAgICAgIHZhciBuZXh0SW5kZXggPVxyXG4gICAgICAgIHRoaXMuaW5kZXggKyAodGhpcy5vcHRpb25zLnNsaWRlc2hvd0RpcmVjdGlvbiA9PT0gJ3J0bCcgPyAtMSA6IDEpXHJcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KVxyXG4gICAgICB0aGlzLmludGVydmFsID0gdGltZSB8fCB0aGlzLm9wdGlvbnMuc2xpZGVzaG93SW50ZXJ2YWxcclxuICAgICAgaWYgKHRoaXMuZWxlbWVudHNbdGhpcy5pbmRleF0gPiAxKSB7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gdGhpcy5zZXRUaW1lb3V0KFxyXG4gICAgICAgICAgKCF0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSAmJiB0aGlzLnNsaWRlKSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbih0bywgc3BlZWQpIHtcclxuICAgICAgICAgICAgICB0aGF0LmFuaW1hdGlvbkZyYW1lSWQgPSB0aGF0LnJlcXVlc3RBbmltYXRpb25GcmFtZS5jYWxsKFxyXG4gICAgICAgICAgICAgICAgd2luZG93LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoYXQuc2xpZGUodG8sIHNwZWVkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIFtuZXh0SW5kZXgsIHRoaXMub3B0aW9ucy5zbGlkZXNob3dUcmFuc2l0aW9uU3BlZWRdLFxyXG4gICAgICAgICAgdGhpcy5pbnRlcnZhbFxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcyh0aGlzLm9wdGlvbnMucGxheWluZ0NsYXNzKVxyXG4gICAgfSxcclxuXHJcbiAgICBwYXVzZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KVxyXG4gICAgICB0aGlzLmludGVydmFsID0gbnVsbFxyXG4gICAgICBpZiAodGhpcy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xyXG4gICAgICAgIHRoaXMuY2FuY2VsQW5pbWF0aW9uRnJhbWUuY2FsbCh3aW5kb3csIHRoaXMuYW5pbWF0aW9uRnJhbWVJZClcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lSWQgPSBudWxsXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnBsYXlpbmdDbGFzcylcclxuICAgIH0sXHJcblxyXG4gICAgYWRkOiBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICAgIHZhciBpXHJcbiAgICAgIGlmICghbGlzdC5jb25jYXQpIHtcclxuICAgICAgICAvLyBNYWtlIGEgcmVhbCBhcnJheSBvdXQgb2YgdGhlIGxpc3QgdG8gYWRkOlxyXG4gICAgICAgIGxpc3QgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaXN0KVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5saXN0LmNvbmNhdCkge1xyXG4gICAgICAgIC8vIE1ha2UgYSByZWFsIGFycmF5IG91dCBvZiB0aGUgR2FsbGVyeSBsaXN0OlxyXG4gICAgICAgIHRoaXMubGlzdCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMubGlzdClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpc3QgPSB0aGlzLmxpc3QuY29uY2F0KGxpc3QpXHJcbiAgICAgIHRoaXMubnVtID0gdGhpcy5saXN0Lmxlbmd0aFxyXG4gICAgICBpZiAodGhpcy5udW0gPiAyICYmIHRoaXMub3B0aW9ucy5jb250aW51b3VzID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmNvbnRpbnVvdXMgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxlZnRFZGdlQ2xhc3MpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb250YWluZXJcclxuICAgICAgICAucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnJpZ2h0RWRnZUNsYXNzKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuc2luZ2xlQ2xhc3MpXHJcbiAgICAgIGZvciAoaSA9IHRoaXMubnVtIC0gbGlzdC5sZW5ndGg7IGkgPCB0aGlzLm51bTsgaSArPSAxKSB7XHJcbiAgICAgICAgdGhpcy5hZGRTbGlkZShpKVxyXG4gICAgICAgIHRoaXMucG9zaXRpb25TbGlkZShpKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucG9zaXRpb25zLmxlbmd0aCA9IHRoaXMubnVtXHJcbiAgICAgIHRoaXMuaW5pdFNsaWRlcyh0cnVlKVxyXG4gICAgfSxcclxuXHJcbiAgICByZXNldFNsaWRlczogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuc2xpZGVzQ29udGFpbmVyLmVtcHR5KClcclxuICAgICAgdGhpcy51bmxvYWRBbGxTbGlkZXMoKVxyXG4gICAgICB0aGlzLnNsaWRlcyA9IFtdXHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZUNsb3NlOiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcclxuICAgICAgdGhpcy5kZXN0cm95RXZlbnRMaXN0ZW5lcnMoKVxyXG4gICAgICAvLyBDYW5jZWwgdGhlIHNsaWRlc2hvdzpcclxuICAgICAgdGhpcy5wYXVzZSgpXHJcbiAgICAgIHRoaXMuY29udGFpbmVyWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgdGhpcy5jb250YWluZXJcclxuICAgICAgICAucmVtb3ZlQ2xhc3Mob3B0aW9ucy5kaXNwbGF5Q2xhc3MpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKG9wdGlvbnMuc2luZ2xlQ2xhc3MpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKG9wdGlvbnMubGVmdEVkZ2VDbGFzcylcclxuICAgICAgICAucmVtb3ZlQ2xhc3Mob3B0aW9ucy5yaWdodEVkZ2VDbGFzcylcclxuICAgICAgaWYgKG9wdGlvbnMuaGlkZVBhZ2VTY3JvbGxiYXJzKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IHRoaXMuYm9keU92ZXJmbG93U3R5bGVcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNsZWFyU2xpZGVzKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldFNsaWRlcygpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5vbmNsb3NlZCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5vbmNsb3NlZC5jYWxsKHRoaXMpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgdGhhdCA9IHRoaXNcclxuICAgICAgLyoqXHJcbiAgICAgICAqIENsb3NlIGhhbmRsZXJcclxuICAgICAgICpcclxuICAgICAgICogQHBhcmFtIHtldmVudH0gZXZlbnQgQ2xvc2UgZXZlbnRcclxuICAgICAgICovXHJcbiAgICAgIGZ1bmN0aW9uIGNsb3NlSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoYXQuY29udGFpbmVyWzBdKSB7XHJcbiAgICAgICAgICB0aGF0LmNvbnRhaW5lci5vZmYodGhhdC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLCBjbG9zZUhhbmRsZXIpXHJcbiAgICAgICAgICB0aGF0LmhhbmRsZUNsb3NlKClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5vbmNsb3NlKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLm9uY2xvc2UuY2FsbCh0aGlzKVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnN1cHBvcnQudHJhbnNpdGlvbiAmJiB0aGlzLm9wdGlvbnMuZGlzcGxheVRyYW5zaXRpb24pIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5vbih0aGlzLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsIGNsb3NlSGFuZGxlcilcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZGlzcGxheUNsYXNzKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2UoKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNpcmNsZTogZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgLy8gQWx3YXlzIHJldHVybiBhIG51bWJlciBpbnNpZGUgb2YgdGhlIHNsaWRlcyBpbmRleCByYW5nZTpcclxuICAgICAgcmV0dXJuICh0aGlzLm51bSArIChpbmRleCAlIHRoaXMubnVtKSkgJSB0aGlzLm51bVxyXG4gICAgfSxcclxuXHJcbiAgICBtb3ZlOiBmdW5jdGlvbihpbmRleCwgZGlzdCwgc3BlZWQpIHtcclxuICAgICAgdGhpcy50cmFuc2xhdGVYKGluZGV4LCBkaXN0LCBzcGVlZClcclxuICAgICAgdGhpcy5wb3NpdGlvbnNbaW5kZXhdID0gZGlzdFxyXG4gICAgfSxcclxuXHJcbiAgICB0cmFuc2xhdGU6IGZ1bmN0aW9uKGluZGV4LCB4LCB5LCBzcGVlZCkge1xyXG4gICAgICBpZiAoIXRoaXMuc2xpZGVzW2luZGV4XSkgcmV0dXJuXHJcbiAgICAgIHZhciBzdHlsZSA9IHRoaXMuc2xpZGVzW2luZGV4XS5zdHlsZVxyXG4gICAgICB2YXIgdHJhbnNpdGlvbiA9IHRoaXMuc3VwcG9ydC50cmFuc2l0aW9uXHJcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSB0aGlzLnN1cHBvcnQudHJhbnNmb3JtXHJcbiAgICAgIHN0eWxlW3RyYW5zaXRpb24ubmFtZSArICdEdXJhdGlvbiddID0gc3BlZWQgKyAnbXMnXHJcbiAgICAgIHN0eWxlW3RyYW5zZm9ybS5uYW1lXSA9XHJcbiAgICAgICAgJ3RyYW5zbGF0ZSgnICtcclxuICAgICAgICB4ICtcclxuICAgICAgICAncHgsICcgK1xyXG4gICAgICAgIHkgK1xyXG4gICAgICAgICdweCknICtcclxuICAgICAgICAodHJhbnNmb3JtLnRyYW5zbGF0ZVogPyAnIHRyYW5zbGF0ZVooMCknIDogJycpXHJcbiAgICB9LFxyXG5cclxuICAgIHRyYW5zbGF0ZVg6IGZ1bmN0aW9uKGluZGV4LCB4LCBzcGVlZCkge1xyXG4gICAgICB0aGlzLnRyYW5zbGF0ZShpbmRleCwgeCwgMCwgc3BlZWQpXHJcbiAgICB9LFxyXG5cclxuICAgIHRyYW5zbGF0ZVk6IGZ1bmN0aW9uKGluZGV4LCB5LCBzcGVlZCkge1xyXG4gICAgICB0aGlzLnRyYW5zbGF0ZShpbmRleCwgMCwgeSwgc3BlZWQpXHJcbiAgICB9LFxyXG5cclxuICAgIGFuaW1hdGU6IGZ1bmN0aW9uKGZyb20sIHRvLCBzcGVlZCkge1xyXG4gICAgICBpZiAoIXNwZWVkKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXNDb250YWluZXJbMF0uc3R5bGUubGVmdCA9IHRvICsgJ3B4J1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpc1xyXG4gICAgICB2YXIgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICB2YXIgdGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHRpbWVFbGFwID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFxyXG4gICAgICAgIGlmICh0aW1lRWxhcCA+IHNwZWVkKSB7XHJcbiAgICAgICAgICB0aGF0LnNsaWRlc0NvbnRhaW5lclswXS5zdHlsZS5sZWZ0ID0gdG8gKyAncHgnXHJcbiAgICAgICAgICB0aGF0Lm9udHJhbnNpdGlvbmVuZCgpXHJcbiAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcilcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGF0LnNsaWRlc0NvbnRhaW5lclswXS5zdHlsZS5sZWZ0ID1cclxuICAgICAgICAgICh0byAtIGZyb20pICogKE1hdGguZmxvb3IoKHRpbWVFbGFwIC8gc3BlZWQpICogMTAwKSAvIDEwMCkgK1xyXG4gICAgICAgICAgZnJvbSArXHJcbiAgICAgICAgICAncHgnXHJcbiAgICAgIH0sIDQpXHJcbiAgICB9LFxyXG5cclxuICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9ucmVzaXplOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5pbml0U2xpZGVzKHRydWUpXHJcbiAgICB9LFxyXG5cclxuICAgIG9ubW91c2Vkb3duOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAvLyBUcmlnZ2VyIG9uIGNsaWNrcyBvZiB0aGUgbGVmdCBtb3VzZSBidXR0b24gb25seVxyXG4gICAgICAvLyBhbmQgZXhjbHVkZSB2aWRlbyAmIGF1ZGlvIGVsZW1lbnRzOlxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZXZlbnQud2hpY2ggJiZcclxuICAgICAgICBldmVudC53aGljaCA9PT0gMSAmJlxyXG4gICAgICAgIGV2ZW50LnRhcmdldC5ub2RlTmFtZSAhPT0gJ1ZJREVPJyAmJlxyXG4gICAgICAgIGV2ZW50LnRhcmdldC5ub2RlTmFtZSAhPT0gJ0FVRElPJ1xyXG4gICAgICApIHtcclxuICAgICAgICAvLyBQcmV2ZW50aW5nIHRoZSBkZWZhdWx0IG1vdXNlZG93biBhY3Rpb24gaXMgcmVxdWlyZWRcclxuICAgICAgICAvLyB0byBtYWtlIHRvdWNoIGVtdWxhdGlvbiB3b3JrIHdpdGggRmlyZWZveDpcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgOyhldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50KS50b3VjaGVzID0gW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYWdlWDogZXZlbnQucGFnZVgsXHJcbiAgICAgICAgICAgIHBhZ2VZOiBldmVudC5wYWdlWVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICB0aGlzLm9udG91Y2hzdGFydChldmVudClcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbm1vdXNlbW92ZTogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgaWYgKHRoaXMudG91Y2hTdGFydCkge1xyXG4gICAgICAgIDsoZXZlbnQub3JpZ2luYWxFdmVudCB8fCBldmVudCkudG91Y2hlcyA9IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGFnZVg6IGV2ZW50LnBhZ2VYLFxyXG4gICAgICAgICAgICBwYWdlWTogZXZlbnQucGFnZVlcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgdGhpcy5vbnRvdWNobW92ZShldmVudClcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbm1vdXNldXA6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLnRvdWNoU3RhcnQpIHtcclxuICAgICAgICB0aGlzLm9udG91Y2hlbmQoZXZlbnQpXHJcbiAgICAgICAgZGVsZXRlIHRoaXMudG91Y2hTdGFydFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9ubW91c2VvdXQ6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLnRvdWNoU3RhcnQpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XHJcbiAgICAgICAgdmFyIHJlbGF0ZWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XHJcbiAgICAgICAgaWYgKCFyZWxhdGVkIHx8IChyZWxhdGVkICE9PSB0YXJnZXQgJiYgISQuY29udGFpbnModGFyZ2V0LCByZWxhdGVkKSkpIHtcclxuICAgICAgICAgIHRoaXMub25tb3VzZXVwKGV2ZW50KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbnRvdWNoc3RhcnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RvcFRvdWNoRXZlbnRzUHJvcGFnYXRpb24pIHtcclxuICAgICAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbihldmVudClcclxuICAgICAgfVxyXG4gICAgICAvLyBqUXVlcnkgZG9lc24ndCBjb3B5IHRvdWNoIGV2ZW50IHByb3BlcnRpZXMgYnkgZGVmYXVsdCxcclxuICAgICAgLy8gc28gd2UgaGF2ZSB0byBhY2Nlc3MgdGhlIG9yaWdpbmFsRXZlbnQgb2JqZWN0OlxyXG4gICAgICB2YXIgdG91Y2hlcyA9IChldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50KS50b3VjaGVzWzBdXHJcbiAgICAgIHRoaXMudG91Y2hTdGFydCA9IHtcclxuICAgICAgICAvLyBSZW1lbWJlciB0aGUgaW5pdGlhbCB0b3VjaCBjb29yZGluYXRlczpcclxuICAgICAgICB4OiB0b3VjaGVzLnBhZ2VYLFxyXG4gICAgICAgIHk6IHRvdWNoZXMucGFnZVksXHJcbiAgICAgICAgLy8gU3RvcmUgdGhlIHRpbWUgdG8gZGV0ZXJtaW5lIHRvdWNoIGR1cmF0aW9uOlxyXG4gICAgICAgIHRpbWU6IERhdGUubm93KClcclxuICAgICAgfVxyXG4gICAgICAvLyBIZWxwZXIgdmFyaWFibGUgdG8gZGV0ZWN0IHNjcm9sbCBtb3ZlbWVudDpcclxuICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IHVuZGVmaW5lZFxyXG4gICAgICAvLyBSZXNldCBkZWx0YSB2YWx1ZXM6XHJcbiAgICAgIHRoaXMudG91Y2hEZWx0YSA9IHt9XHJcbiAgICB9LFxyXG5cclxuICAgIG9udG91Y2htb3ZlOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN0b3BUb3VjaEV2ZW50c1Byb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oZXZlbnQpXHJcbiAgICAgIH1cclxuICAgICAgLy8galF1ZXJ5IGRvZXNuJ3QgY29weSB0b3VjaCBldmVudCBwcm9wZXJ0aWVzIGJ5IGRlZmF1bHQsXHJcbiAgICAgIC8vIHNvIHdlIGhhdmUgdG8gYWNjZXNzIHRoZSBvcmlnaW5hbEV2ZW50IG9iamVjdDpcclxuICAgICAgdmFyIHRvdWNoZXMgPSAoZXZlbnQub3JpZ2luYWxFdmVudCB8fCBldmVudCkudG91Y2hlc1swXVxyXG4gICAgICB2YXIgc2NhbGUgPSAoZXZlbnQub3JpZ2luYWxFdmVudCB8fCBldmVudCkuc2NhbGVcclxuICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleFxyXG4gICAgICB2YXIgdG91Y2hEZWx0YVhcclxuICAgICAgdmFyIGluZGljZXNcclxuICAgICAgLy8gRW5zdXJlIHRoaXMgaXMgYSBvbmUgdG91Y2ggc3dpcGUgYW5kIG5vdCwgZS5nLiBhIHBpbmNoOlxyXG4gICAgICBpZiAodG91Y2hlcy5sZW5ndGggPiAxIHx8IChzY2FsZSAmJiBzY2FsZSAhPT0gMSkpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVTY3JvbGwpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIH1cclxuICAgICAgLy8gTWVhc3VyZSBjaGFuZ2UgaW4geCBhbmQgeSBjb29yZGluYXRlczpcclxuICAgICAgdGhpcy50b3VjaERlbHRhID0ge1xyXG4gICAgICAgIHg6IHRvdWNoZXMucGFnZVggLSB0aGlzLnRvdWNoU3RhcnQueCxcclxuICAgICAgICB5OiB0b3VjaGVzLnBhZ2VZIC0gdGhpcy50b3VjaFN0YXJ0LnlcclxuICAgICAgfVxyXG4gICAgICB0b3VjaERlbHRhWCA9IHRoaXMudG91Y2hEZWx0YS54XHJcbiAgICAgIC8vIERldGVjdCBpZiB0aGlzIGlzIGEgdmVydGljYWwgc2Nyb2xsIG1vdmVtZW50IChydW4gb25seSBvbmNlIHBlciB0b3VjaCk6XHJcbiAgICAgIGlmICh0aGlzLmlzU2Nyb2xsaW5nID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID1cclxuICAgICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgfHxcclxuICAgICAgICAgIE1hdGguYWJzKHRvdWNoRGVsdGFYKSA8IE1hdGguYWJzKHRoaXMudG91Y2hEZWx0YS55KVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5pc1Njcm9sbGluZykge1xyXG4gICAgICAgIC8vIEFsd2F5cyBwcmV2ZW50IGhvcml6b250YWwgc2Nyb2xsOlxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAvLyBTdG9wIHRoZSBzbGlkZXNob3c6XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb250aW51b3VzKSB7XHJcbiAgICAgICAgICBpbmRpY2VzID0gW3RoaXMuY2lyY2xlKGluZGV4ICsgMSksIGluZGV4LCB0aGlzLmNpcmNsZShpbmRleCAtIDEpXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBJbmNyZWFzZSByZXNpc3RhbmNlIGlmIGZpcnN0IHNsaWRlIGFuZCBzbGlkaW5nIGxlZnRcclxuICAgICAgICAgIC8vIG9yIGxhc3Qgc2xpZGUgYW5kIHNsaWRpbmcgcmlnaHQ6XHJcbiAgICAgICAgICB0aGlzLnRvdWNoRGVsdGEueCA9IHRvdWNoRGVsdGFYID1cclxuICAgICAgICAgICAgdG91Y2hEZWx0YVggL1xyXG4gICAgICAgICAgICAoKCFpbmRleCAmJiB0b3VjaERlbHRhWCA+IDApIHx8XHJcbiAgICAgICAgICAgIChpbmRleCA9PT0gdGhpcy5udW0gLSAxICYmIHRvdWNoRGVsdGFYIDwgMClcclxuICAgICAgICAgICAgICA/IE1hdGguYWJzKHRvdWNoRGVsdGFYKSAvIHRoaXMuc2xpZGVXaWR0aCArIDFcclxuICAgICAgICAgICAgICA6IDEpXHJcbiAgICAgICAgICBpbmRpY2VzID0gW2luZGV4XVxyXG4gICAgICAgICAgaWYgKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGluZGljZXMucHVzaChpbmRleCAtIDEpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaW5kZXggPCB0aGlzLm51bSAtIDEpIHtcclxuICAgICAgICAgICAgaW5kaWNlcy51bnNoaWZ0KGluZGV4ICsgMSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGluZGljZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpbmRleCA9IGluZGljZXMucG9wKClcclxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlWChpbmRleCwgdG91Y2hEZWx0YVggKyB0aGlzLnBvc2l0aW9uc1tpbmRleF0sIDApXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlWShpbmRleCwgdGhpcy50b3VjaERlbHRhLnkgKyB0aGlzLnBvc2l0aW9uc1tpbmRleF0sIDApXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb250b3VjaGVuZDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdG9wVG91Y2hFdmVudHNQcm9wYWdhdGlvbikge1xyXG4gICAgICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uKGV2ZW50KVxyXG4gICAgICB9XHJcbiAgICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXhcclxuICAgICAgdmFyIHNwZWVkID0gdGhpcy5vcHRpb25zLnRyYW5zaXRpb25TcGVlZFxyXG4gICAgICB2YXIgc2xpZGVXaWR0aCA9IHRoaXMuc2xpZGVXaWR0aFxyXG4gICAgICB2YXIgaXNTaG9ydER1cmF0aW9uID0gTnVtYmVyKERhdGUubm93KCkgLSB0aGlzLnRvdWNoU3RhcnQudGltZSkgPCAyNTBcclxuICAgICAgLy8gRGV0ZXJtaW5lIGlmIHNsaWRlIGF0dGVtcHQgdHJpZ2dlcnMgbmV4dC9wcmV2IHNsaWRlOlxyXG4gICAgICB2YXIgaXNWYWxpZFNsaWRlID1cclxuICAgICAgICAoaXNTaG9ydER1cmF0aW9uICYmIE1hdGguYWJzKHRoaXMudG91Y2hEZWx0YS54KSA+IDIwKSB8fFxyXG4gICAgICAgIE1hdGguYWJzKHRoaXMudG91Y2hEZWx0YS54KSA+IHNsaWRlV2lkdGggLyAyXHJcbiAgICAgIC8vIERldGVybWluZSBpZiBzbGlkZSBhdHRlbXB0IGlzIHBhc3Qgc3RhcnQgb3IgZW5kOlxyXG4gICAgICB2YXIgaXNQYXN0Qm91bmRzID1cclxuICAgICAgICAoIWluZGV4ICYmIHRoaXMudG91Y2hEZWx0YS54ID4gMCkgfHxcclxuICAgICAgICAoaW5kZXggPT09IHRoaXMubnVtIC0gMSAmJiB0aGlzLnRvdWNoRGVsdGEueCA8IDApXHJcbiAgICAgIHZhciBpc1ZhbGlkQ2xvc2UgPVxyXG4gICAgICAgICFpc1ZhbGlkU2xpZGUgJiZcclxuICAgICAgICB0aGlzLm9wdGlvbnMuY2xvc2VPblN3aXBlVXBPckRvd24gJiZcclxuICAgICAgICAoKGlzU2hvcnREdXJhdGlvbiAmJiBNYXRoLmFicyh0aGlzLnRvdWNoRGVsdGEueSkgPiAyMCkgfHxcclxuICAgICAgICAgIE1hdGguYWJzKHRoaXMudG91Y2hEZWx0YS55KSA+IHRoaXMuc2xpZGVIZWlnaHQgLyAyKVxyXG4gICAgICB2YXIgZGlyZWN0aW9uXHJcbiAgICAgIHZhciBpbmRleEZvcndhcmRcclxuICAgICAgdmFyIGluZGV4QmFja3dhcmRcclxuICAgICAgdmFyIGRpc3RhbmNlRm9yd2FyZFxyXG4gICAgICB2YXIgZGlzdGFuY2VCYWNrd2FyZFxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRpbnVvdXMpIHtcclxuICAgICAgICBpc1Bhc3RCb3VuZHMgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIC8vIERldGVybWluZSBkaXJlY3Rpb24gb2Ygc3dpcGUgKHRydWU6IHJpZ2h0LCBmYWxzZTogbGVmdCk6XHJcbiAgICAgIGRpcmVjdGlvbiA9IHRoaXMudG91Y2hEZWx0YS54IDwgMCA/IC0xIDogMVxyXG4gICAgICBpZiAoIXRoaXMuaXNTY3JvbGxpbmcpIHtcclxuICAgICAgICBpZiAoaXNWYWxpZFNsaWRlICYmICFpc1Bhc3RCb3VuZHMpIHtcclxuICAgICAgICAgIGluZGV4Rm9yd2FyZCA9IGluZGV4ICsgZGlyZWN0aW9uXHJcbiAgICAgICAgICBpbmRleEJhY2t3YXJkID0gaW5kZXggLSBkaXJlY3Rpb25cclxuICAgICAgICAgIGRpc3RhbmNlRm9yd2FyZCA9IHNsaWRlV2lkdGggKiBkaXJlY3Rpb25cclxuICAgICAgICAgIGRpc3RhbmNlQmFja3dhcmQgPSAtc2xpZGVXaWR0aCAqIGRpcmVjdGlvblxyXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb250aW51b3VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLmNpcmNsZShpbmRleEZvcndhcmQpLCBkaXN0YW5jZUZvcndhcmQsIDApXHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLmNpcmNsZShpbmRleCAtIDIgKiBkaXJlY3Rpb24pLCBkaXN0YW5jZUJhY2t3YXJkLCAwKVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChpbmRleEZvcndhcmQgPj0gMCAmJiBpbmRleEZvcndhcmQgPCB0aGlzLm51bSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUoaW5kZXhGb3J3YXJkLCBkaXN0YW5jZUZvcndhcmQsIDApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLm1vdmUoaW5kZXgsIHRoaXMucG9zaXRpb25zW2luZGV4XSArIGRpc3RhbmNlRm9yd2FyZCwgc3BlZWQpXHJcbiAgICAgICAgICB0aGlzLm1vdmUoXHJcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlKGluZGV4QmFja3dhcmQpLFxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uc1t0aGlzLmNpcmNsZShpbmRleEJhY2t3YXJkKV0gKyBkaXN0YW5jZUZvcndhcmQsXHJcbiAgICAgICAgICAgIHNwZWVkXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICBpbmRleCA9IHRoaXMuY2lyY2xlKGluZGV4QmFja3dhcmQpXHJcbiAgICAgICAgICB0aGlzLm9uc2xpZGUoaW5kZXgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIE1vdmUgYmFjayBpbnRvIHBvc2l0aW9uXHJcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRpbnVvdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlKHRoaXMuY2lyY2xlKGluZGV4IC0gMSksIC1zbGlkZVdpZHRoLCBzcGVlZClcclxuICAgICAgICAgICAgdGhpcy5tb3ZlKGluZGV4LCAwLCBzcGVlZClcclxuICAgICAgICAgICAgdGhpcy5tb3ZlKHRoaXMuY2lyY2xlKGluZGV4ICsgMSksIHNsaWRlV2lkdGgsIHNwZWVkKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5tb3ZlKGluZGV4IC0gMSwgLXNsaWRlV2lkdGgsIHNwZWVkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubW92ZShpbmRleCwgMCwgc3BlZWQpXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA8IHRoaXMubnVtIC0gMSkge1xyXG4gICAgICAgICAgICAgIHRoaXMubW92ZShpbmRleCArIDEsIHNsaWRlV2lkdGgsIHNwZWVkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChpc1ZhbGlkQ2xvc2UpIHtcclxuICAgICAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBNb3ZlIGJhY2sgaW50byBwb3NpdGlvblxyXG4gICAgICAgICAgdGhpcy50cmFuc2xhdGVZKGluZGV4LCAwLCBzcGVlZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb250b3VjaGNhbmNlbDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgaWYgKHRoaXMudG91Y2hTdGFydCkge1xyXG4gICAgICAgIHRoaXMub250b3VjaGVuZChldmVudClcclxuICAgICAgICBkZWxldGUgdGhpcy50b3VjaFN0YXJ0XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb250cmFuc2l0aW9uZW5kOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICB2YXIgc2xpZGUgPSB0aGlzLnNsaWRlc1t0aGlzLmluZGV4XVxyXG4gICAgICBpZiAoIWV2ZW50IHx8IHNsaWRlID09PSBldmVudC50YXJnZXQpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbCkge1xyXG4gICAgICAgICAgdGhpcy5wbGF5KClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRUaW1lb3V0KHRoaXMub3B0aW9ucy5vbnNsaWRlZW5kLCBbdGhpcy5pbmRleCwgc2xpZGVdKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uY29tcGxldGU6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudFxyXG4gICAgICB2YXIgcGFyZW50ID0gdGFyZ2V0ICYmIHRhcmdldC5wYXJlbnROb2RlXHJcbiAgICAgIHZhciBpbmRleFxyXG4gICAgICBpZiAoIXRhcmdldCB8fCAhcGFyZW50KSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgaW5kZXggPSB0aGlzLmdldE5vZGVJbmRleChwYXJlbnQpXHJcbiAgICAgICQocGFyZW50KS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuc2xpZGVMb2FkaW5nQ2xhc3MpXHJcbiAgICAgIGlmIChldmVudC50eXBlID09PSAnZXJyb3InKSB7XHJcbiAgICAgICAgJChwYXJlbnQpLmFkZENsYXNzKHRoaXMub3B0aW9ucy5zbGlkZUVycm9yQ2xhc3MpXHJcbiAgICAgICAgdGhpcy5lbGVtZW50c1tpbmRleF0gPSAzIC8vIEZhaWxcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzW2luZGV4XSA9IDIgLy8gRG9uZVxyXG4gICAgICB9XHJcbiAgICAgIC8vIEZpeCBmb3IgSUU3J3MgbGFjayBvZiBzdXBwb3J0IGZvciBwZXJjZW50YWdlIG1heC1oZWlnaHQ6XHJcbiAgICAgIGlmICh0YXJnZXQuY2xpZW50SGVpZ2h0ID4gdGhpcy5jb250YWluZXJbMF0uY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLm1heEhlaWdodCA9IHRoaXMuY29udGFpbmVyWzBdLmNsaWVudEhlaWdodFxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmludGVydmFsICYmIHRoaXMuc2xpZGVzW3RoaXMuaW5kZXhdID09PSBwYXJlbnQpIHtcclxuICAgICAgICB0aGlzLnBsYXkoKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0VGltZW91dCh0aGlzLm9wdGlvbnMub25zbGlkZWNvbXBsZXRlLCBbaW5kZXgsIHBhcmVudF0pXHJcbiAgICB9LFxyXG5cclxuICAgIG9ubG9hZDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgdGhpcy5vbmNvbXBsZXRlKGV2ZW50KVxyXG4gICAgfSxcclxuXHJcbiAgICBvbmVycm9yOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICB0aGlzLm9uY29tcGxldGUoZXZlbnQpXHJcbiAgICB9LFxyXG5cclxuICAgIG9ua2V5ZG93bjogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgc3dpdGNoIChldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgY2FzZSAxMzogLy8gUmV0dXJuXHJcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvZ2dsZUNvbnRyb2xzT25SZXR1cm4pIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudClcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVDb250cm9scygpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgMjc6IC8vIEVzY1xyXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jbG9zZU9uRXNjYXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgICAgICAgICAvLyBwcmV2ZW50IEVzYyBmcm9tIGNsb3Npbmcgb3RoZXIgdGhpbmdzXHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgMzI6IC8vIFNwYWNlXHJcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvZ2dsZVNsaWRlc2hvd09uU3BhY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudClcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVTbGlkZXNob3coKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIDM3OiAvLyBMZWZ0XHJcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZUtleWJvYXJkTmF2aWdhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0KGV2ZW50KVxyXG4gICAgICAgICAgICB0aGlzLnByZXYoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIDM5OiAvLyBSaWdodFxyXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVLZXlib2FyZE5hdmlnYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudClcclxuICAgICAgICAgICAgdGhpcy5uZXh0KClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zXHJcbiAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudFxyXG4gICAgICB2YXIgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcclxuICAgICAgLyoqXHJcbiAgICAgICAqIENoZWNrcyBpZiB0aGUgdGFyZ2V0IGZyb20gdGhlIGNsb3NlIGhhcyB0aGUgZ2l2ZW4gY2xhc3NcclxuICAgICAgICpcclxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBDbGFzcyBuYW1lXHJcbiAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIHRhcmdldCBoYXMgdGhlIGNsYXNzIG5hbWVcclxuICAgICAgICovXHJcbiAgICAgIGZ1bmN0aW9uIGlzVGFyZ2V0KGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHJldHVybiAkKHRhcmdldCkuaGFzQ2xhc3MoY2xhc3NOYW1lKSB8fCAkKHBhcmVudCkuaGFzQ2xhc3MoY2xhc3NOYW1lKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc1RhcmdldChvcHRpb25zLnRvZ2dsZUNsYXNzKSkge1xyXG4gICAgICAgIC8vIENsaWNrIG9uIFwidG9nZ2xlXCIgY29udHJvbFxyXG4gICAgICAgIHRoaXMucHJldmVudERlZmF1bHQoZXZlbnQpXHJcbiAgICAgICAgdGhpcy50b2dnbGVDb250cm9scygpXHJcbiAgICAgIH0gZWxzZSBpZiAoaXNUYXJnZXQob3B0aW9ucy5wcmV2Q2xhc3MpKSB7XHJcbiAgICAgICAgLy8gQ2xpY2sgb24gXCJwcmV2XCIgY29udHJvbFxyXG4gICAgICAgIHRoaXMucHJldmVudERlZmF1bHQoZXZlbnQpXHJcbiAgICAgICAgdGhpcy5wcmV2KClcclxuICAgICAgfSBlbHNlIGlmIChpc1RhcmdldChvcHRpb25zLm5leHRDbGFzcykpIHtcclxuICAgICAgICAvLyBDbGljayBvbiBcIm5leHRcIiBjb250cm9sXHJcbiAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudClcclxuICAgICAgICB0aGlzLm5leHQoKVxyXG4gICAgICB9IGVsc2UgaWYgKGlzVGFyZ2V0KG9wdGlvbnMuY2xvc2VDbGFzcykpIHtcclxuICAgICAgICAvLyBDbGljayBvbiBcImNsb3NlXCIgY29udHJvbFxyXG4gICAgICAgIHRoaXMucHJldmVudERlZmF1bHQoZXZlbnQpXHJcbiAgICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICAgIH0gZWxzZSBpZiAoaXNUYXJnZXQob3B0aW9ucy5wbGF5UGF1c2VDbGFzcykpIHtcclxuICAgICAgICAvLyBDbGljayBvbiBcInBsYXktcGF1c2VcIiBjb250cm9sXHJcbiAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudClcclxuICAgICAgICB0aGlzLnRvZ2dsZVNsaWRlc2hvdygpXHJcbiAgICAgIH0gZWxzZSBpZiAocGFyZW50ID09PSB0aGlzLnNsaWRlc0NvbnRhaW5lclswXSkge1xyXG4gICAgICAgIC8vIENsaWNrIG9uIHNsaWRlIGJhY2tncm91bmRcclxuICAgICAgICBpZiAob3B0aW9ucy5jbG9zZU9uU2xpZGVDbGljaykge1xyXG4gICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudClcclxuICAgICAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50b2dnbGVDb250cm9sc09uU2xpZGVDbGljaykge1xyXG4gICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudClcclxuICAgICAgICAgIHRoaXMudG9nZ2xlQ29udHJvbHMoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBwYXJlbnQucGFyZW50Tm9kZSAmJlxyXG4gICAgICAgIHBhcmVudC5wYXJlbnROb2RlID09PSB0aGlzLnNsaWRlc0NvbnRhaW5lclswXVxyXG4gICAgICApIHtcclxuICAgICAgICAvLyBDbGljayBvbiBkaXNwbGF5ZWQgZWxlbWVudFxyXG4gICAgICAgIGlmIChvcHRpb25zLnRvZ2dsZUNvbnRyb2xzT25TbGlkZUNsaWNrKSB7XHJcbiAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0KGV2ZW50KVxyXG4gICAgICAgICAgdGhpcy50b2dnbGVDb250cm9scygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uY2xpY2s6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZW11bGF0ZVRvdWNoRXZlbnRzICYmXHJcbiAgICAgICAgdGhpcy50b3VjaERlbHRhICYmXHJcbiAgICAgICAgKE1hdGguYWJzKHRoaXMudG91Y2hEZWx0YS54KSA+IDIwIHx8IE1hdGguYWJzKHRoaXMudG91Y2hEZWx0YS55KSA+IDIwKVxyXG4gICAgICApIHtcclxuICAgICAgICBkZWxldGUgdGhpcy50b3VjaERlbHRhXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ2xpY2soZXZlbnQpXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZUVkZ2VDbGFzc2VzOiBmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICBpZiAoIWluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmxlZnRFZGdlQ2xhc3MpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxlZnRFZGdlQ2xhc3MpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluZGV4ID09PSB0aGlzLm51bSAtIDEpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcyh0aGlzLm9wdGlvbnMucmlnaHRFZGdlQ2xhc3MpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnJpZ2h0RWRnZUNsYXNzKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZVNsaWRlOiBmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5jb250aW51b3VzKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGdlQ2xhc3NlcyhpbmRleClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvYWRFbGVtZW50cyhpbmRleClcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy51bmxvYWRFbGVtZW50cykge1xyXG4gICAgICAgIHRoaXMudW5sb2FkRWxlbWVudHMoaW5kZXgpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRUaXRsZShpbmRleClcclxuICAgIH0sXHJcblxyXG4gICAgb25zbGlkZTogZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgdGhpcy5pbmRleCA9IGluZGV4XHJcbiAgICAgIHRoaXMuaGFuZGxlU2xpZGUoaW5kZXgpXHJcbiAgICAgIHRoaXMuc2V0VGltZW91dCh0aGlzLm9wdGlvbnMub25zbGlkZSwgW2luZGV4LCB0aGlzLnNsaWRlc1tpbmRleF1dKVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXRUaXRsZTogZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgdmFyIGZpcnN0Q2hpbGQgPSB0aGlzLnNsaWRlc1tpbmRleF0uZmlyc3RDaGlsZFxyXG4gICAgICB2YXIgdGV4dCA9IGZpcnN0Q2hpbGQudGl0bGUgfHwgZmlyc3RDaGlsZC5hbHRcclxuICAgICAgdmFyIHRpdGxlRWxlbWVudCA9IHRoaXMudGl0bGVFbGVtZW50XHJcbiAgICAgIGlmICh0aXRsZUVsZW1lbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZUVsZW1lbnQuZW1wdHkoKVxyXG4gICAgICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgICB0aXRsZUVsZW1lbnRbMF0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNldFRpbWVvdXQ6IGZ1bmN0aW9uKGZ1bmMsIGFyZ3MsIHdhaXQpIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgZnVuYyAmJlxyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgZnVuYy5hcHBseSh0aGF0LCBhcmdzIHx8IFtdKVxyXG4gICAgICAgIH0sIHdhaXQgfHwgMClcclxuICAgICAgKVxyXG4gICAgfSxcclxuXHJcbiAgICBpbWFnZUZhY3Rvcnk6IGZ1bmN0aW9uKG9iaiwgY2FsbGJhY2spIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzXHJcbiAgICAgIHZhciBpbWcgPSB0aGlzLmltYWdlUHJvdG90eXBlLmNsb25lTm9kZShmYWxzZSlcclxuICAgICAgdmFyIHVybCA9IG9ialxyXG4gICAgICB2YXIgYmFja2dyb3VuZFNpemUgPSB0aGlzLm9wdGlvbnMuc3RyZXRjaEltYWdlc1xyXG4gICAgICB2YXIgY2FsbGVkXHJcbiAgICAgIHZhciBlbGVtZW50XHJcbiAgICAgIHZhciB0aXRsZVxyXG4gICAgICB2YXIgYWx0VGV4dFxyXG4gICAgICAvKipcclxuICAgICAgICogV3JhcHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciB0aGUgbG9hZC9lcnJvciBldmVudFxyXG4gICAgICAgKlxyXG4gICAgICAgKiBAcGFyYW0ge2V2ZW50fSBldmVudCBsb2FkL2Vycm9yIGV2ZW50XHJcbiAgICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IHRpbWVvdXQgSURcclxuICAgICAgICovXHJcbiAgICAgIGZ1bmN0aW9uIGNhbGxiYWNrV3JhcHBlcihldmVudCkge1xyXG4gICAgICAgIGlmICghY2FsbGVkKSB7XHJcbiAgICAgICAgICBldmVudCA9IHtcclxuICAgICAgICAgICAgdHlwZTogZXZlbnQudHlwZSxcclxuICAgICAgICAgICAgdGFyZ2V0OiBlbGVtZW50XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAvLyBGaXggZm9yIElFNyBmaXJpbmcgdGhlIGxvYWQgZXZlbnQgZm9yXHJcbiAgICAgICAgICAgIC8vIGNhY2hlZCBpbWFnZXMgYmVmb3JlIHRoZSBlbGVtZW50IGNvdWxkXHJcbiAgICAgICAgICAgIC8vIGJlIGFkZGVkIHRvIHRoZSBET006XHJcbiAgICAgICAgICAgIHJldHVybiB0aGF0LnNldFRpbWVvdXQoY2FsbGJhY2tXcmFwcGVyLCBbZXZlbnRdKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FsbGVkID0gdHJ1ZVxyXG4gICAgICAgICAgJChpbWcpLm9mZignbG9hZCBlcnJvcicsIGNhbGxiYWNrV3JhcHBlcilcclxuICAgICAgICAgIGlmIChiYWNrZ3JvdW5kU2l6ZSkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnKSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybChcIicgKyB1cmwgKyAnXCIpIGNlbnRlciBuby1yZXBlYXQnXHJcbiAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IGJhY2tncm91bmRTaXplXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICB1cmwgPSB0aGlzLmdldEl0ZW1Qcm9wZXJ0eShvYmosIHRoaXMub3B0aW9ucy51cmxQcm9wZXJ0eSlcclxuICAgICAgICB0aXRsZSA9IHRoaXMuZ2V0SXRlbVByb3BlcnR5KG9iaiwgdGhpcy5vcHRpb25zLnRpdGxlUHJvcGVydHkpXHJcbiAgICAgICAgYWx0VGV4dCA9XHJcbiAgICAgICAgICB0aGlzLmdldEl0ZW1Qcm9wZXJ0eShvYmosIHRoaXMub3B0aW9ucy5hbHRUZXh0UHJvcGVydHkpIHx8IHRpdGxlXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJhY2tncm91bmRTaXplID09PSB0cnVlKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZFNpemUgPSAnY29udGFpbidcclxuICAgICAgfVxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZSA9XHJcbiAgICAgICAgdGhpcy5zdXBwb3J0LmJhY2tncm91bmRTaXplICYmXHJcbiAgICAgICAgdGhpcy5zdXBwb3J0LmJhY2tncm91bmRTaXplW2JhY2tncm91bmRTaXplXSAmJlxyXG4gICAgICAgIGJhY2tncm91bmRTaXplXHJcbiAgICAgIGlmIChiYWNrZ3JvdW5kU2l6ZSkge1xyXG4gICAgICAgIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRQcm90b3R5cGUuY2xvbmVOb2RlKGZhbHNlKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQgPSBpbWdcclxuICAgICAgICBpbWcuZHJhZ2dhYmxlID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgICBpZiAodGl0bGUpIHtcclxuICAgICAgICBlbGVtZW50LnRpdGxlID0gdGl0bGVcclxuICAgICAgfVxyXG4gICAgICBpZiAoYWx0VGV4dCkge1xyXG4gICAgICAgIGVsZW1lbnQuYWx0ID0gYWx0VGV4dFxyXG4gICAgICB9XHJcbiAgICAgICQoaW1nKS5vbignbG9hZCBlcnJvcicsIGNhbGxiYWNrV3JhcHBlcilcclxuICAgICAgaW1nLnNyYyA9IHVybFxyXG4gICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbihvYmosIGNhbGxiYWNrKSB7XHJcbiAgICAgIHZhciB0eXBlID0gb2JqICYmIHRoaXMuZ2V0SXRlbVByb3BlcnR5KG9iaiwgdGhpcy5vcHRpb25zLnR5cGVQcm9wZXJ0eSlcclxuICAgICAgdmFyIGZhY3RvcnkgPVxyXG4gICAgICAgICh0eXBlICYmIHRoaXNbdHlwZS5zcGxpdCgnLycpWzBdICsgJ0ZhY3RvcnknXSkgfHwgdGhpcy5pbWFnZUZhY3RvcnlcclxuICAgICAgdmFyIGVsZW1lbnQgPSBvYmogJiYgZmFjdG9yeS5jYWxsKHRoaXMsIG9iaiwgY2FsbGJhY2spXHJcbiAgICAgIHZhciBzcmNzZXQgPSB0aGlzLmdldEl0ZW1Qcm9wZXJ0eShvYmosIHRoaXMub3B0aW9ucy5zcmNzZXRQcm9wZXJ0eSlcclxuICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudCA9IHRoaXMuZWxlbWVudFByb3RvdHlwZS5jbG9uZU5vZGUoZmFsc2UpXHJcbiAgICAgICAgdGhpcy5zZXRUaW1lb3V0KGNhbGxiYWNrLCBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRhcmdldDogZWxlbWVudFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0pXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNyY3NldCkge1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBzcmNzZXQpXHJcbiAgICAgIH1cclxuICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuc2xpZGVDb250ZW50Q2xhc3MpXHJcbiAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWRFbGVtZW50OiBmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICBpZiAoIXRoaXMuZWxlbWVudHNbaW5kZXhdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2xpZGVzW2luZGV4XS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2luZGV4XSA9ICQodGhpcy5zbGlkZXNbaW5kZXhdKS5oYXNDbGFzcyhcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNsaWRlRXJyb3JDbGFzc1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgICA/IDNcclxuICAgICAgICAgICAgOiAyXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZWxlbWVudHNbaW5kZXhdID0gMSAvLyBMb2FkaW5nXHJcbiAgICAgICAgICAkKHRoaXMuc2xpZGVzW2luZGV4XSkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnNsaWRlTG9hZGluZ0NsYXNzKVxyXG4gICAgICAgICAgdGhpcy5zbGlkZXNbaW5kZXhdLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQodGhpcy5saXN0W2luZGV4XSwgdGhpcy5wcm94eUxpc3RlbmVyKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkRWxlbWVudHM6IGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgIHZhciBsaW1pdCA9IE1hdGgubWluKHRoaXMubnVtLCB0aGlzLm9wdGlvbnMucHJlbG9hZFJhbmdlICogMiArIDEpXHJcbiAgICAgIHZhciBqID0gaW5kZXhcclxuICAgICAgdmFyIGlcclxuICAgICAgZm9yIChpID0gMDsgaSA8IGxpbWl0OyBpICs9IDEpIHtcclxuICAgICAgICAvLyBGaXJzdCBsb2FkIHRoZSBjdXJyZW50IHNsaWRlIGVsZW1lbnQgKDApLFxyXG4gICAgICAgIC8vIHRoZW4gdGhlIG5leHQgb25lICgrMSksXHJcbiAgICAgICAgLy8gdGhlbiB0aGUgcHJldmlvdXMgb25lICgtMiksXHJcbiAgICAgICAgLy8gdGhlbiB0aGUgbmV4dCBhZnRlciBuZXh0ICgrMiksIGV0Yy46XHJcbiAgICAgICAgaiArPSBpICogKGkgJSAyID09PSAwID8gLTEgOiAxKVxyXG4gICAgICAgIC8vIENvbm5lY3QgdGhlIGVuZHMgb2YgdGhlIGxpc3QgdG8gbG9hZCBzbGlkZSBlbGVtZW50cyBmb3JcclxuICAgICAgICAvLyBjb250aW51b3VzIG5hdmlnYXRpb246XHJcbiAgICAgICAgaiA9IHRoaXMuY2lyY2xlKGopXHJcbiAgICAgICAgdGhpcy5sb2FkRWxlbWVudChqKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVubG9hZEVsZW1lbnRzOiBmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICB2YXIgaSwgZGlmZlxyXG4gICAgICBmb3IgKGkgaW4gdGhpcy5lbGVtZW50cykge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5lbGVtZW50cywgaSkpIHtcclxuICAgICAgICAgIGRpZmYgPSBNYXRoLmFicyhpbmRleCAtIGkpXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGRpZmYgPiB0aGlzLm9wdGlvbnMucHJlbG9hZFJhbmdlICYmXHJcbiAgICAgICAgICAgIGRpZmYgKyB0aGlzLm9wdGlvbnMucHJlbG9hZFJhbmdlIDwgdGhpcy5udW1cclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnVubG9hZFNsaWRlKGkpXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmVsZW1lbnRzW2ldXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZFNsaWRlOiBmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICB2YXIgc2xpZGUgPSB0aGlzLnNsaWRlUHJvdG90eXBlLmNsb25lTm9kZShmYWxzZSlcclxuICAgICAgc2xpZGUuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpXHJcbiAgICAgIHRoaXMuc2xpZGVzQ29udGFpbmVyWzBdLmFwcGVuZENoaWxkKHNsaWRlKVxyXG4gICAgICB0aGlzLnNsaWRlcy5wdXNoKHNsaWRlKVxyXG4gICAgfSxcclxuXHJcbiAgICBwb3NpdGlvblNsaWRlOiBmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICB2YXIgc2xpZGUgPSB0aGlzLnNsaWRlc1tpbmRleF1cclxuICAgICAgc2xpZGUuc3R5bGUud2lkdGggPSB0aGlzLnNsaWRlV2lkdGggKyAncHgnXHJcbiAgICAgIGlmICh0aGlzLnN1cHBvcnQudHJhbnNmb3JtKSB7XHJcbiAgICAgICAgc2xpZGUuc3R5bGUubGVmdCA9IGluZGV4ICogLXRoaXMuc2xpZGVXaWR0aCArICdweCdcclxuICAgICAgICB0aGlzLm1vdmUoXHJcbiAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgIHRoaXMuaW5kZXggPiBpbmRleFxyXG4gICAgICAgICAgICA/IC10aGlzLnNsaWRlV2lkdGhcclxuICAgICAgICAgICAgOiB0aGlzLmluZGV4IDwgaW5kZXhcclxuICAgICAgICAgICAgPyB0aGlzLnNsaWRlV2lkdGhcclxuICAgICAgICAgICAgOiAwLFxyXG4gICAgICAgICAgMFxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0U2xpZGVzOiBmdW5jdGlvbihyZWxvYWQpIHtcclxuICAgICAgdmFyIGNsZWFyU2xpZGVzLCBpXHJcbiAgICAgIGlmICghcmVsb2FkKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbnMgPSBbXVxyXG4gICAgICAgIHRoaXMucG9zaXRpb25zLmxlbmd0aCA9IHRoaXMubnVtXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IHt9XHJcbiAgICAgICAgdGhpcy5pbWFnZVByb3RvdHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgdGhpcy5lbGVtZW50UHJvdG90eXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0aGlzLnNsaWRlUHJvdG90eXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAkKHRoaXMuc2xpZGVQcm90b3R5cGUpLmFkZENsYXNzKHRoaXMub3B0aW9ucy5zbGlkZUNsYXNzKVxyXG4gICAgICAgIHRoaXMuc2xpZGVzID0gdGhpcy5zbGlkZXNDb250YWluZXJbMF0uY2hpbGRyZW5cclxuICAgICAgICBjbGVhclNsaWRlcyA9XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuY2xlYXJTbGlkZXMgfHwgdGhpcy5zbGlkZXMubGVuZ3RoICE9PSB0aGlzLm51bVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2xpZGVXaWR0aCA9IHRoaXMuY29udGFpbmVyWzBdLmNsaWVudFdpZHRoXHJcbiAgICAgIHRoaXMuc2xpZGVIZWlnaHQgPSB0aGlzLmNvbnRhaW5lclswXS5jbGllbnRIZWlnaHRcclxuICAgICAgdGhpcy5zbGlkZXNDb250YWluZXJbMF0uc3R5bGUud2lkdGggPSB0aGlzLm51bSAqIHRoaXMuc2xpZGVXaWR0aCArICdweCdcclxuICAgICAgaWYgKGNsZWFyU2xpZGVzKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldFNsaWRlcygpXHJcbiAgICAgIH1cclxuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubnVtOyBpICs9IDEpIHtcclxuICAgICAgICBpZiAoY2xlYXJTbGlkZXMpIHtcclxuICAgICAgICAgIHRoaXMuYWRkU2xpZGUoaSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblNsaWRlKGkpXHJcbiAgICAgIH1cclxuICAgICAgLy8gUmVwb3NpdGlvbiB0aGUgc2xpZGVzIGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIGdpdmVuIGluZGV4OlxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRpbnVvdXMgJiYgdGhpcy5zdXBwb3J0LnRyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMubW92ZSh0aGlzLmNpcmNsZSh0aGlzLmluZGV4IC0gMSksIC10aGlzLnNsaWRlV2lkdGgsIDApXHJcbiAgICAgICAgdGhpcy5tb3ZlKHRoaXMuY2lyY2xlKHRoaXMuaW5kZXggKyAxKSwgdGhpcy5zbGlkZVdpZHRoLCAwKVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5zdXBwb3J0LnRyYW5zZm9ybSkge1xyXG4gICAgICAgIHRoaXMuc2xpZGVzQ29udGFpbmVyWzBdLnN0eWxlLmxlZnQgPVxyXG4gICAgICAgICAgdGhpcy5pbmRleCAqIC10aGlzLnNsaWRlV2lkdGggKyAncHgnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdW5sb2FkU2xpZGU6IGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgIHZhciBzbGlkZSwgZmlyc3RDaGlsZFxyXG4gICAgICBzbGlkZSA9IHRoaXMuc2xpZGVzW2luZGV4XVxyXG4gICAgICBmaXJzdENoaWxkID0gc2xpZGUuZmlyc3RDaGlsZFxyXG4gICAgICBpZiAoZmlyc3RDaGlsZCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHNsaWRlLnJlbW92ZUNoaWxkKGZpcnN0Q2hpbGQpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdW5sb2FkQWxsU2xpZGVzOiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGksIGxlblxyXG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSB0aGlzLnNsaWRlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIHRoaXMudW5sb2FkU2xpZGUoaSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVDb250cm9sczogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBjb250cm9sc0NsYXNzID0gdGhpcy5vcHRpb25zLmNvbnRyb2xzQ2xhc3NcclxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyLmhhc0NsYXNzKGNvbnRyb2xzQ2xhc3MpKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2xhc3MoY29udHJvbHNDbGFzcylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcyhjb250cm9sc0NsYXNzKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHRvZ2dsZVNsaWRlc2hvdzogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICghdGhpcy5pbnRlcnZhbCkge1xyXG4gICAgICAgIHRoaXMucGxheSgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wYXVzZSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0Tm9kZUluZGV4OiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpLCAxMClcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0TmVzdGVkUHJvcGVydHk6IGZ1bmN0aW9uKG9iaiwgcHJvcGVydHkpIHtcclxuICAgICAgcHJvcGVydHkucmVwbGFjZShcclxuICAgICAgICAvLyBNYXRjaGVzIG5hdGl2ZSBKYXZhU2NyaXB0IG5vdGF0aW9uIGluIGEgU3RyaW5nLFxyXG4gICAgICAgIC8vIGUuZy4gJ1tcImRvdWJsZVF1b3RlUHJvcFwiXS5kb3RQcm9wWzJdJ1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxyXG4gICAgICAgIC9cXFsoPzonKFteJ10rKSd8XCIoW15cIl0rKVwifChcXGQrKSlcXF18KD86KD86XnxcXC4pKFteXFwuXFxbXSspKS9nLFxyXG4gICAgICAgIGZ1bmN0aW9uKHN0ciwgc2luZ2xlUXVvdGVQcm9wLCBkb3VibGVRdW90ZVByb3AsIGFycmF5SW5kZXgsIGRvdFByb3ApIHtcclxuICAgICAgICAgIHZhciBwcm9wID1cclxuICAgICAgICAgICAgZG90UHJvcCB8fFxyXG4gICAgICAgICAgICBzaW5nbGVRdW90ZVByb3AgfHxcclxuICAgICAgICAgICAgZG91YmxlUXVvdGVQcm9wIHx8XHJcbiAgICAgICAgICAgIChhcnJheUluZGV4ICYmIHBhcnNlSW50KGFycmF5SW5kZXgsIDEwKSlcclxuICAgICAgICAgIGlmIChzdHIgJiYgb2JqKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IG9ialtwcm9wXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICByZXR1cm4gb2JqXHJcbiAgICB9LFxyXG5cclxuICAgIGdldERhdGFQcm9wZXJ0eTogZnVuY3Rpb24ob2JqLCBwcm9wZXJ0eSkge1xyXG4gICAgICB2YXIga2V5XHJcbiAgICAgIHZhciBwcm9wXHJcbiAgICAgIGlmIChvYmouZGF0YXNldCkge1xyXG4gICAgICAgIGtleSA9IHByb3BlcnR5LnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uKF8sIGIpIHtcclxuICAgICAgICAgIHJldHVybiBiLnRvVXBwZXJDYXNlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHByb3AgPSBvYmouZGF0YXNldFtrZXldXHJcbiAgICAgIH0gZWxzZSBpZiAob2JqLmdldEF0dHJpYnV0ZSkge1xyXG4gICAgICAgIHByb3AgPSBvYmouZ2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgJ2RhdGEtJyArIHByb3BlcnR5LnJlcGxhY2UoLyhbQS1aXSkvZywgJy0kMScpLnRvTG93ZXJDYXNlKClcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIC9eKHRydWV8ZmFsc2V8bnVsbHwtP1xcZCsoXFwuXFxkKyk/fFxce1tcXHNcXFNdKlxcfXxcXFtbXFxzXFxTXSpcXF0pJC8udGVzdChwcm9wKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuICQucGFyc2VKU09OKHByb3ApXHJcbiAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHtcclxuICAgICAgICAgICAgLy8gaWdub3JlIEpTT04gcGFyc2luZyBlcnJvcnNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByb3BcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRJdGVtUHJvcGVydHk6IGZ1bmN0aW9uKG9iaiwgcHJvcGVydHkpIHtcclxuICAgICAgdmFyIHByb3AgPSB0aGlzLmdldERhdGFQcm9wZXJ0eShvYmosIHByb3BlcnR5KVxyXG4gICAgICBpZiAocHJvcCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcHJvcCA9IG9ialtwcm9wZXJ0eV1cclxuICAgICAgfVxyXG4gICAgICBpZiAocHJvcCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcHJvcCA9IHRoaXMuZ2V0TmVzdGVkUHJvcGVydHkob2JqLCBwcm9wZXJ0eSlcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcHJvcFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0U3RhcnRJbmRleDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBpbmRleCA9IHRoaXMub3B0aW9ucy5pbmRleFxyXG4gICAgICB2YXIgdXJsUHJvcGVydHkgPSB0aGlzLm9wdGlvbnMudXJsUHJvcGVydHlcclxuICAgICAgdmFyIGlcclxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGluZGV4IGlzIGdpdmVuIGFzIGEgbGlzdCBvYmplY3Q6XHJcbiAgICAgIGlmIChpbmRleCAmJiB0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubnVtOyBpICs9IDEpIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5saXN0W2ldID09PSBpbmRleCB8fFxyXG4gICAgICAgICAgICB0aGlzLmdldEl0ZW1Qcm9wZXJ0eSh0aGlzLmxpc3RbaV0sIHVybFByb3BlcnR5KSA9PT1cclxuICAgICAgICAgICAgICB0aGlzLmdldEl0ZW1Qcm9wZXJ0eShpbmRleCwgdXJsUHJvcGVydHkpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgaW5kZXggPSBpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaW5kZXggaXMgaW4gdGhlIGxpc3QgcmFuZ2U6XHJcbiAgICAgIHRoaXMuaW5kZXggPSB0aGlzLmNpcmNsZShwYXJzZUludChpbmRleCwgMTApIHx8IDApXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRFdmVudExpc3RlbmVyczogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpc1xyXG4gICAgICB2YXIgc2xpZGVzQ29udGFpbmVyID0gdGhpcy5zbGlkZXNDb250YWluZXJcclxuICAgICAgLyoqXHJcbiAgICAgICAqIFByb3h5IGxpc3RlbmVyXHJcbiAgICAgICAqXHJcbiAgICAgICAqIEBwYXJhbSB7ZXZlbnR9IGV2ZW50IG9yaWdpbmFsIGV2ZW50XHJcbiAgICAgICAqL1xyXG4gICAgICBmdW5jdGlvbiBwcm94eUxpc3RlbmVyKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHR5cGUgPVxyXG4gICAgICAgICAgdGhhdC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgdGhhdC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kID09PSBldmVudC50eXBlXHJcbiAgICAgICAgICAgID8gJ3RyYW5zaXRpb25lbmQnXHJcbiAgICAgICAgICAgIDogZXZlbnQudHlwZVxyXG4gICAgICAgIHRoYXRbJ29uJyArIHR5cGVdKGV2ZW50KVxyXG4gICAgICB9XHJcbiAgICAgICQod2luZG93KS5vbigncmVzaXplJywgcHJveHlMaXN0ZW5lcilcclxuICAgICAgJChkb2N1bWVudC5ib2R5KS5vbigna2V5ZG93bicsIHByb3h5TGlzdGVuZXIpXHJcbiAgICAgIHRoaXMuY29udGFpbmVyLm9uKCdjbGljaycsIHByb3h5TGlzdGVuZXIpXHJcbiAgICAgIGlmICh0aGlzLnN1cHBvcnQudG91Y2gpIHtcclxuICAgICAgICBzbGlkZXNDb250YWluZXIub24oXHJcbiAgICAgICAgICAndG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWwnLFxyXG4gICAgICAgICAgcHJveHlMaXN0ZW5lclxyXG4gICAgICAgIClcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuZW11bGF0ZVRvdWNoRXZlbnRzICYmIHRoaXMuc3VwcG9ydC50cmFuc2l0aW9uKSB7XHJcbiAgICAgICAgc2xpZGVzQ29udGFpbmVyLm9uKFxyXG4gICAgICAgICAgJ21vdXNlZG93biBtb3VzZW1vdmUgbW91c2V1cCBtb3VzZW91dCcsXHJcbiAgICAgICAgICBwcm94eUxpc3RlbmVyXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnN1cHBvcnQudHJhbnNpdGlvbikge1xyXG4gICAgICAgIHNsaWRlc0NvbnRhaW5lci5vbih0aGlzLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsIHByb3h5TGlzdGVuZXIpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wcm94eUxpc3RlbmVyID0gcHJveHlMaXN0ZW5lclxyXG4gICAgfSxcclxuXHJcbiAgICBkZXN0cm95RXZlbnRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgc2xpZGVzQ29udGFpbmVyID0gdGhpcy5zbGlkZXNDb250YWluZXJcclxuICAgICAgdmFyIHByb3h5TGlzdGVuZXIgPSB0aGlzLnByb3h5TGlzdGVuZXJcclxuICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplJywgcHJveHlMaXN0ZW5lcilcclxuICAgICAgJChkb2N1bWVudC5ib2R5KS5vZmYoJ2tleWRvd24nLCBwcm94eUxpc3RlbmVyKVxyXG4gICAgICB0aGlzLmNvbnRhaW5lci5vZmYoJ2NsaWNrJywgcHJveHlMaXN0ZW5lcilcclxuICAgICAgaWYgKHRoaXMuc3VwcG9ydC50b3VjaCkge1xyXG4gICAgICAgIHNsaWRlc0NvbnRhaW5lci5vZmYoXHJcbiAgICAgICAgICAndG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWwnLFxyXG4gICAgICAgICAgcHJveHlMaXN0ZW5lclxyXG4gICAgICAgIClcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuZW11bGF0ZVRvdWNoRXZlbnRzICYmIHRoaXMuc3VwcG9ydC50cmFuc2l0aW9uKSB7XHJcbiAgICAgICAgc2xpZGVzQ29udGFpbmVyLm9mZihcclxuICAgICAgICAgICdtb3VzZWRvd24gbW91c2Vtb3ZlIG1vdXNldXAgbW91c2VvdXQnLFxyXG4gICAgICAgICAgcHJveHlMaXN0ZW5lclxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5zdXBwb3J0LnRyYW5zaXRpb24pIHtcclxuICAgICAgICBzbGlkZXNDb250YWluZXIub2ZmKHRoaXMuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCwgcHJveHlMaXN0ZW5lcilcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVPcGVuOiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5vbm9wZW5lZCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5vbm9wZW5lZC5jYWxsKHRoaXMpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdFdpZGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpc1xyXG4gICAgICAvKipcclxuICAgICAgICogT3BlbiBoYW5kbGVyXHJcbiAgICAgICAqXHJcbiAgICAgICAqIEBwYXJhbSB7ZXZlbnR9IGV2ZW50IEdhbGxlcnkgb3BlbiBldmVudFxyXG4gICAgICAgKi9cclxuICAgICAgZnVuY3Rpb24gb3BlbkhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGF0LmNvbnRhaW5lclswXSkge1xyXG4gICAgICAgICAgdGhhdC5jb250YWluZXIub2ZmKHRoYXQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCwgb3BlbkhhbmRsZXIpXHJcbiAgICAgICAgICB0aGF0LmhhbmRsZU9wZW4oKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNvbnRhaW5lciA9ICQodGhpcy5vcHRpb25zLmNvbnRhaW5lcilcclxuICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lci5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgJ2JsdWVpbXAgR2FsbGVyeTogV2lkZ2V0IGNvbnRhaW5lciBub3QgZm91bmQuJyxcclxuICAgICAgICAgIHRoaXMub3B0aW9ucy5jb250YWluZXJcclxuICAgICAgICApXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zbGlkZXNDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lclxyXG4gICAgICAgIC5maW5kKHRoaXMub3B0aW9ucy5zbGlkZXNDb250YWluZXIpXHJcbiAgICAgICAgLmZpcnN0KClcclxuICAgICAgaWYgKCF0aGlzLnNsaWRlc0NvbnRhaW5lci5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgJ2JsdWVpbXAgR2FsbGVyeTogU2xpZGVzIGNvbnRhaW5lciBub3QgZm91bmQuJyxcclxuICAgICAgICAgIHRoaXMub3B0aW9ucy5zbGlkZXNDb250YWluZXJcclxuICAgICAgICApXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50aXRsZUVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5maW5kKHRoaXMub3B0aW9ucy50aXRsZUVsZW1lbnQpLmZpcnN0KClcclxuICAgICAgaWYgKHRoaXMubnVtID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnNpbmdsZUNsYXNzKVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMub25vcGVuKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLm9ub3Blbi5jYWxsKHRoaXMpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc3VwcG9ydC50cmFuc2l0aW9uICYmIHRoaXMub3B0aW9ucy5kaXNwbGF5VHJhbnNpdGlvbikge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLm9uKHRoaXMuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCwgb3BlbkhhbmRsZXIpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVPcGVuKClcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmhpZGVQYWdlU2Nyb2xsYmFycykge1xyXG4gICAgICAgIC8vIEhpZGUgdGhlIHBhZ2Ugc2Nyb2xsYmFyczpcclxuICAgICAgICB0aGlzLmJvZHlPdmVyZmxvd1N0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY29udGFpbmVyWzBdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgIHRoaXMuaW5pdFNsaWRlcygpXHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZENsYXNzKHRoaXMub3B0aW9ucy5kaXNwbGF5Q2xhc3MpXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRPcHRpb25zOiBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgIC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIHByb3RvdHlwZSBvcHRpb25zOlxyXG4gICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zKVxyXG4gICAgICAvLyBDaGVjayBpZiBjYXJvdXNlbCBtb2RlIGlzIGVuYWJsZWQ6XHJcbiAgICAgIGlmIChcclxuICAgICAgICAob3B0aW9ucyAmJiBvcHRpb25zLmNhcm91c2VsKSB8fFxyXG4gICAgICAgICh0aGlzLm9wdGlvbnMuY2Fyb3VzZWwgJiYgKCFvcHRpb25zIHx8IG9wdGlvbnMuY2Fyb3VzZWwgIT09IGZhbHNlKSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgJC5leHRlbmQodGhpcy5vcHRpb25zLCB0aGlzLmNhcm91c2VsT3B0aW9ucylcclxuICAgICAgfVxyXG4gICAgICAvLyBPdmVycmlkZSBhbnkgZ2l2ZW4gb3B0aW9uczpcclxuICAgICAgJC5leHRlbmQodGhpcy5vcHRpb25zLCBvcHRpb25zKVxyXG4gICAgICBpZiAodGhpcy5udW0gPCAzKSB7XHJcbiAgICAgICAgLy8gMSBvciAyIHNsaWRlcyBjYW5ub3QgYmUgZGlzcGxheWVkIGNvbnRpbnVvdXMsXHJcbiAgICAgICAgLy8gcmVtZW1iZXIgdGhlIG9yaWdpbmFsIG9wdGlvbiBieSBzZXR0aW5nIHRvIG51bGwgaW5zdGVhZCBvZiBmYWxzZTpcclxuICAgICAgICB0aGlzLm9wdGlvbnMuY29udGludW91cyA9IHRoaXMub3B0aW9ucy5jb250aW51b3VzID8gbnVsbCA6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnN1cHBvcnQudHJhbnNpdGlvbikge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5lbXVsYXRlVG91Y2hFdmVudHMgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0KHRoaXMub3B0aW9ucy5ldmVudClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBHYWxsZXJ5XHJcbn0pXHJcbiIsIi8qXHJcbiAqIGJsdWVpbXAgaGVscGVyIEpTXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0dhbGxlcnlcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTMsIFNlYmFzdGlhbiBUc2NoYW5cclxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XHJcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbiAqL1xyXG5cclxuLyogZ2xvYmFsIGRlZmluZSAqL1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuXHJcbjsoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gIC8qKlxyXG4gICAqIE9iamVjdC5hc3NpZ24gcG9seWZpbGxcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmoxIEZpcnN0IG9iamVjdFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmoyIFNlY29uZCBvYmplY3RcclxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBNZXJnZWQgb2JqZWN0XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZXh0ZW5kKG9iajEsIG9iajIpIHtcclxuICAgIHZhciBwcm9wXHJcbiAgICBmb3IgKHByb3AgaW4gb2JqMikge1xyXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iajIsIHByb3ApKSB7XHJcbiAgICAgICAgb2JqMVtwcm9wXSA9IG9iajJbcHJvcF1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iajFcclxuICB9XHJcbiAgLyoqXHJcbiAgICogSGVscGVyIGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAY2xhc3NcclxuICAgKiBAcGFyYW0geyp9IHF1ZXJ5IGpRdWVyeSB0eXBlIHF1ZXJ5IGFyZ3VtZW50XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gSGVscGVyKHF1ZXJ5KSB7XHJcbiAgICBpZiAoIXRoaXMgfHwgdGhpcy5maW5kICE9PSBIZWxwZXIucHJvdG90eXBlLmZpbmQpIHtcclxuICAgICAgLy8gQ2FsbGVkIGFzIGZ1bmN0aW9uIGluc3RlYWQgb2YgYXMgY29uc3RydWN0b3IsXHJcbiAgICAgIC8vIHNvIHdlIHNpbXBseSByZXR1cm4gYSBuZXcgaW5zdGFuY2U6XHJcbiAgICAgIHJldHVybiBuZXcgSGVscGVyKHF1ZXJ5KVxyXG4gICAgfVxyXG4gICAgdGhpcy5sZW5ndGggPSAwXHJcbiAgICBpZiAocXVlcnkpIHtcclxuICAgICAgaWYgKHR5cGVvZiBxdWVyeSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBxdWVyeSA9IHRoaXMuZmluZChxdWVyeSlcclxuICAgICAgfVxyXG4gICAgICBpZiAocXVlcnkubm9kZVR5cGUgfHwgcXVlcnkgPT09IHF1ZXJ5LndpbmRvdykge1xyXG4gICAgICAgIC8vIFNpbmdsZSBIVE1MIGVsZW1lbnRcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IDFcclxuICAgICAgICB0aGlzWzBdID0gcXVlcnlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBIVE1MIGVsZW1lbnQgY29sbGVjdGlvblxyXG4gICAgICAgIHZhciBpID0gcXVlcnkubGVuZ3RoXHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBpXHJcbiAgICAgICAgd2hpbGUgKGkpIHtcclxuICAgICAgICAgIGkgLT0gMVxyXG4gICAgICAgICAgdGhpc1tpXSA9IHF1ZXJ5W2ldXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBIZWxwZXIuZXh0ZW5kID0gZXh0ZW5kXHJcblxyXG4gIEhlbHBlci5jb250YWlucyA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgZWxlbWVudCkge1xyXG4gICAgZG8ge1xyXG4gICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXHJcbiAgICAgIGlmIChlbGVtZW50ID09PSBjb250YWluZXIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IHdoaWxlIChlbGVtZW50KVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBIZWxwZXIucGFyc2VKU09OID0gZnVuY3Rpb24oc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gd2luZG93LkpTT04gJiYgSlNPTi5wYXJzZShzdHJpbmcpXHJcbiAgfVxyXG5cclxuICBleHRlbmQoSGVscGVyLnByb3RvdHlwZSwge1xyXG4gICAgZmluZDogZnVuY3Rpb24ocXVlcnkpIHtcclxuICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXNbMF0gfHwgZG9jdW1lbnRcclxuICAgICAgaWYgKHR5cGVvZiBxdWVyeSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBpZiAoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwpIHtcclxuICAgICAgICAgIHF1ZXJ5ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpXHJcbiAgICAgICAgfSBlbHNlIGlmIChxdWVyeS5jaGFyQXQoMCkgPT09ICcjJykge1xyXG4gICAgICAgICAgcXVlcnkgPSBjb250YWluZXIuZ2V0RWxlbWVudEJ5SWQocXVlcnkuc2xpY2UoMSkpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHF1ZXJ5ID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKHF1ZXJ5KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3IEhlbHBlcihxdWVyeSlcclxuICAgIH0sXHJcblxyXG4gICAgaGFzQ2xhc3M6IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xyXG4gICAgICBpZiAoIXRoaXNbMF0pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKF58XFxcXHMrKScgKyBjbGFzc05hbWUgKyAnKFxcXFxzK3wkKScpLnRlc3QoXHJcbiAgICAgICAgdGhpc1swXS5jbGFzc05hbWVcclxuICAgICAgKVxyXG4gICAgfSxcclxuXHJcbiAgICBhZGRDbGFzczogZnVuY3Rpb24oY2xhc3NOYW1lKSB7XHJcbiAgICAgIHZhciBpID0gdGhpcy5sZW5ndGhcclxuICAgICAgdmFyIGVsZW1lbnRcclxuICAgICAgd2hpbGUgKGkpIHtcclxuICAgICAgICBpIC09IDFcclxuICAgICAgICBlbGVtZW50ID0gdGhpc1tpXVxyXG4gICAgICAgIGlmICghZWxlbWVudC5jbGFzc05hbWUpIHtcclxuICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lXHJcbiAgICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5oYXNDbGFzcyhjbGFzc05hbWUpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWVcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVDbGFzczogZnVuY3Rpb24oY2xhc3NOYW1lKSB7XHJcbiAgICAgIHZhciByZWdleHAgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyspJyArIGNsYXNzTmFtZSArICcoXFxcXHMrfCQpJylcclxuICAgICAgdmFyIGkgPSB0aGlzLmxlbmd0aFxyXG4gICAgICB2YXIgZWxlbWVudFxyXG4gICAgICB3aGlsZSAoaSkge1xyXG4gICAgICAgIGkgLT0gMVxyXG4gICAgICAgIGVsZW1lbnQgPSB0aGlzW2ldXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlZ2V4cCwgJyAnKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9LFxyXG5cclxuICAgIG9uOiBmdW5jdGlvbihldmVudE5hbWUsIGhhbmRsZXIpIHtcclxuICAgICAgdmFyIGV2ZW50TmFtZXMgPSBldmVudE5hbWUuc3BsaXQoL1xccysvKVxyXG4gICAgICB2YXIgaVxyXG4gICAgICB2YXIgZWxlbWVudFxyXG4gICAgICB3aGlsZSAoZXZlbnROYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICBldmVudE5hbWUgPSBldmVudE5hbWVzLnNoaWZ0KClcclxuICAgICAgICBpID0gdGhpcy5sZW5ndGhcclxuICAgICAgICB3aGlsZSAoaSkge1xyXG4gICAgICAgICAgaSAtPSAxXHJcbiAgICAgICAgICBlbGVtZW50ID0gdGhpc1tpXVxyXG4gICAgICAgICAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBmYWxzZSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5hdHRhY2hFdmVudCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGhhbmRsZXIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9LFxyXG5cclxuICAgIG9mZjogZnVuY3Rpb24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XHJcbiAgICAgIHZhciBldmVudE5hbWVzID0gZXZlbnROYW1lLnNwbGl0KC9cXHMrLylcclxuICAgICAgdmFyIGlcclxuICAgICAgdmFyIGVsZW1lbnRcclxuICAgICAgd2hpbGUgKGV2ZW50TmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgZXZlbnROYW1lID0gZXZlbnROYW1lcy5zaGlmdCgpXHJcbiAgICAgICAgaSA9IHRoaXMubGVuZ3RoXHJcbiAgICAgICAgd2hpbGUgKGkpIHtcclxuICAgICAgICAgIGkgLT0gMVxyXG4gICAgICAgICAgZWxlbWVudCA9IHRoaXNbaV1cclxuICAgICAgICAgIGlmIChlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgZmFsc2UpXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZGV0YWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBoYW5kbGVyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfSxcclxuXHJcbiAgICBlbXB0eTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBpID0gdGhpcy5sZW5ndGhcclxuICAgICAgdmFyIGVsZW1lbnRcclxuICAgICAgd2hpbGUgKGkpIHtcclxuICAgICAgICBpIC09IDFcclxuICAgICAgICBlbGVtZW50ID0gdGhpc1tpXVxyXG4gICAgICAgIHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH0sXHJcblxyXG4gICAgZmlyc3Q6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gbmV3IEhlbHBlcih0aGlzWzBdKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgIGRlZmluZShmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIEhlbHBlclxyXG4gICAgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgd2luZG93LmJsdWVpbXAgPSB3aW5kb3cuYmx1ZWltcCB8fCB7fVxyXG4gICAgd2luZG93LmJsdWVpbXAuaGVscGVyID0gSGVscGVyXHJcbiAgfVxyXG59KSgpXHJcbiIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sInNvdXJjZVJvb3QiOiIifQ==