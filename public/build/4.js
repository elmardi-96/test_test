(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./assets/js/plugins/select2/select2.full.min.js":
/*!*******************************************************!*\
  !*** ./assets/js/plugins/select2/select2.full.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
 * Select2 4.1.0-beta.1
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
;
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 = function () {
    // Restore the Select2 AMD loader so it can be used
    // Needed mostly in the language files, where the loader is not inserted
    if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
      var S2 = jQuery.fn.select2.amd;
    }
    var S2;
    (function () {
      if (!S2 || !S2.requirejs) {
        if (!S2) {
          S2 = {};
        } else {
          require = S2;
        }
        /**
         * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
         * Released under MIT license, http://github.com/requirejs/almond/LICENSE
         */
        //Going sloppy to avoid 'use strict' string cost, but strict practices should
        //be followed.
        /*global setTimeout: false */

        var requirejs, require, define;
        (function (undef) {
          var main,
            _req,
            makeMap,
            handlers,
            defined = {},
            waiting = {},
            config = {},
            defining = {},
            hasOwn = Object.prototype.hasOwnProperty,
            aps = [].slice,
            jsSuffixRegExp = /\.js$/;
          function hasProp(obj, prop) {
            return hasOwn.call(obj, prop);
          }

          /**
           * Given a relative module name, like ./something, normalize it to
           * a real name that can be mapped to a path.
           * @param {String} name the relative name
           * @param {String} baseName a real name that the name arg is relative
           * to.
           * @returns {String} normalized name
           */
          function normalize(name, baseName) {
            var nameParts,
              nameSegment,
              mapValue,
              foundMap,
              lastIndex,
              foundI,
              foundStarMap,
              starI,
              i,
              j,
              part,
              normalizedBaseParts,
              baseParts = baseName && baseName.split("/"),
              map = config.map,
              starMap = map && map['*'] || {};

            //Adjust any relative paths.
            if (name) {
              name = name.split('/');
              lastIndex = name.length - 1;

              // If wanting node ID compatibility, strip .js from end
              // of IDs. Have to do this here, and not in nameToUrl
              // because node allows either .js or non .js to map
              // to same file.
              if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
              }

              // Starts with a '.' so need the baseName
              if (name[0].charAt(0) === '.' && baseParts) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that 'directory' and not name of the baseName's
                //module. For instance, baseName of 'one/two/three', maps to
                //'one/two/three.js', but we want the directory, 'one/two' for
                //this normalization.
                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                name = normalizedBaseParts.concat(name);
              }

              //start trimDots
              for (i = 0; i < name.length; i++) {
                part = name[i];
                if (part === '.') {
                  name.splice(i, 1);
                  i -= 1;
                } else if (part === '..') {
                  // If at the start, or previous value is still ..,
                  // keep them so that when converted to a path it may
                  // still work when converted to a path, even though
                  // as an ID it is less than ideal. In larger point
                  // releases, may be better to just kick out an error.
                  if (i === 0 || i === 1 && name[2] === '..' || name[i - 1] === '..') {
                    continue;
                  } else if (i > 0) {
                    name.splice(i - 1, 2);
                    i -= 2;
                  }
                }
              }
              //end trimDots

              name = name.join('/');
            }

            //Apply map config if available.
            if ((baseParts || starMap) && map) {
              nameParts = name.split('/');
              for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");
                if (baseParts) {
                  //Find the longest baseName segment match in the config.
                  //So, do joins on the biggest to smallest lengths of baseParts.
                  for (j = baseParts.length; j > 0; j -= 1) {
                    mapValue = map[baseParts.slice(0, j).join('/')];

                    //baseName segment has  config, find if it has one for
                    //this name.
                    if (mapValue) {
                      mapValue = mapValue[nameSegment];
                      if (mapValue) {
                        //Match, update name to the new value.
                        foundMap = mapValue;
                        foundI = i;
                        break;
                      }
                    }
                  }
                }
                if (foundMap) {
                  break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                  foundStarMap = starMap[nameSegment];
                  starI = i;
                }
              }
              if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
              }
              if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
              }
            }
            return name;
          }
          function makeRequire(relName, forceSync) {
            return function () {
              //A version of a require function that passes a moduleName
              //value for items that may need to
              //look up paths relative to the moduleName
              var args = aps.call(arguments, 0);

              //If first arg is not require('string'), and there is only
              //one arg, it is the array form without a callback. Insert
              //a null so that the following concat is correct.
              if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
              }
              return _req.apply(undef, args.concat([relName, forceSync]));
            };
          }
          function makeNormalize(relName) {
            return function (name) {
              return normalize(name, relName);
            };
          }
          function makeLoad(depName) {
            return function (value) {
              defined[depName] = value;
            };
          }
          function callDep(name) {
            if (hasProp(waiting, name)) {
              var args = waiting[name];
              delete waiting[name];
              defining[name] = true;
              main.apply(undef, args);
            }
            if (!hasProp(defined, name) && !hasProp(defining, name)) {
              throw new Error('No ' + name);
            }
            return defined[name];
          }

          //Turns a plugin!resource to [plugin, resource]
          //with the plugin being undefined if the name
          //did not have a plugin prefix.
          function splitPrefix(name) {
            var prefix,
              index = name ? name.indexOf('!') : -1;
            if (index > -1) {
              prefix = name.substring(0, index);
              name = name.substring(index + 1, name.length);
            }
            return [prefix, name];
          }

          //Creates a parts array for a relName where first part is plugin ID,
          //second part is resource ID. Assumes relName has already been normalized.
          function makeRelParts(relName) {
            return relName ? splitPrefix(relName) : [];
          }

          /**
           * Makes a name map, normalizing the name, and using a plugin
           * for normalization if necessary. Grabs a ref to plugin
           * too, as an optimization.
           */
          makeMap = function makeMap(name, relParts) {
            var plugin,
              parts = splitPrefix(name),
              prefix = parts[0],
              relResourceName = relParts[1];
            name = parts[1];
            if (prefix) {
              prefix = normalize(prefix, relResourceName);
              plugin = callDep(prefix);
            }

            //Normalize according
            if (prefix) {
              if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relResourceName));
              } else {
                name = normalize(name, relResourceName);
              }
            } else {
              name = normalize(name, relResourceName);
              parts = splitPrefix(name);
              prefix = parts[0];
              name = parts[1];
              if (prefix) {
                plugin = callDep(prefix);
              }
            }

            //Using ridiculous property names for space reasons
            return {
              f: prefix ? prefix + '!' + name : name,
              //fullName
              n: name,
              pr: prefix,
              p: plugin
            };
          };
          function makeConfig(name) {
            return function () {
              return config && config.config && config.config[name] || {};
            };
          }
          handlers = {
            require: function require(name) {
              return makeRequire(name);
            },
            exports: function exports(name) {
              var e = defined[name];
              if (typeof e !== 'undefined') {
                return e;
              } else {
                return defined[name] = {};
              }
            },
            module: function module(name) {
              return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
              };
            }
          };
          main = function main(name, deps, callback, relName) {
            var cjsModule,
              depName,
              ret,
              map,
              i,
              relParts,
              args = [],
              callbackType = _typeof(callback),
              usingExports;

            //Use name if no relName
            relName = relName || name;
            relParts = makeRelParts(relName);

            //Call the callback to define the module, if necessary.
            if (callbackType === 'undefined' || callbackType === 'function') {
              //Pull out the defined dependencies and pass the ordered
              //values to the callback.
              //Default to [require, exports, module] if no deps
              deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
              for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relParts);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                  args[i] = handlers.require(name);
                } else if (depName === "exports") {
                  //CommonJS module spec 1.1
                  args[i] = handlers.exports(name);
                  usingExports = true;
                } else if (depName === "module") {
                  //CommonJS module spec 1.1
                  cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) || hasProp(waiting, depName) || hasProp(defining, depName)) {
                  args[i] = callDep(depName);
                } else if (map.p) {
                  map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                  args[i] = defined[depName];
                } else {
                  throw new Error(name + ' missing ' + depName);
                }
              }
              ret = callback ? callback.apply(defined[name], args) : undefined;
              if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef && cjsModule.exports !== defined[name]) {
                  defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                  //Use the return value from the function.
                  defined[name] = ret;
                }
              }
            } else if (name) {
              //May just be an object definition for the module. Only
              //worry about defining if have a module name.
              defined[name] = callback;
            }
          };
          requirejs = require = _req = function req(deps, callback, relName, forceSync, alt) {
            if (typeof deps === "string") {
              if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
              }
              //Just return the module wanted. In this scenario, the
              //deps arg is the module name, and second arg (if passed)
              //is just the relName.
              //Normalize module name, if it contains . or ..
              return callDep(makeMap(deps, makeRelParts(callback)).f);
            } else if (!deps.splice) {
              //deps is a config object, not an array.
              config = deps;
              if (config.deps) {
                _req(config.deps, config.callback);
              }
              if (!callback) {
                return;
              }
              if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
              } else {
                deps = undef;
              }
            }

            //Support require(['a'])
            callback = callback || function () {};

            //If relName is a function, it is an errback handler,
            //so remove it.
            if (typeof relName === 'function') {
              relName = forceSync;
              forceSync = alt;
            }

            //Simulate async callback;
            if (forceSync) {
              main(undef, deps, callback, relName);
            } else {
              //Using a non-zero value because of concern for what old browsers
              //do, and latest browsers "upgrade" to 4 if lower value is used:
              //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
              //If want a value immediately, use require('id') instead -- something
              //that works in almond on the global level, but not guaranteed and
              //unlikely to work in other AMD implementations.
              setTimeout(function () {
                main(undef, deps, callback, relName);
              }, 4);
            }
            return _req;
          };

          /**
           * Just drops the config on the floor, but returns req in case
           * the config return value is used.
           */
          _req.config = function (cfg) {
            return _req(cfg);
          };

          /**
           * Expose module registry for debugging and tooling
           */
          requirejs._defined = defined;
          define = function define(name, deps, callback) {
            if (typeof name !== 'string') {
              throw new Error('See almond README: incorrect module build, no module name');
            }

            //This module may not have dependencies
            if (!deps.splice) {
              //deps is not an array, so probably means
              //an object literal or factory function for
              //the value. Adjust args.
              callback = deps;
              deps = [];
            }
            if (!hasProp(defined, name) && !hasProp(waiting, name)) {
              waiting[name] = [name, deps, callback];
            }
          };
          define.amd = {
            jQuery: true
          };
        })();
        S2.requirejs = requirejs;
        S2.require = require;
        S2.define = define;
      }
    })();
    S2.define("almond", function () {});

    /* global jQuery:false, $:false */
    S2.define('jquery', [], function () {
      var _$ = jQuery || $;
      if (_$ == null && console && console.error) {
        console.error('Select2: An instance of jQuery or a jQuery-compatible library was not ' + 'found. Make sure that you are including jQuery before Select2 on your ' + 'web page.');
      }
      return _$;
    });
    S2.define('select2/utils', ['jquery'], function ($) {
      var Utils = {};
      Utils.Extend = function (ChildClass, SuperClass) {
        var __hasProp = {}.hasOwnProperty;
        function BaseConstructor() {
          this.constructor = ChildClass;
        }
        for (var key in SuperClass) {
          if (__hasProp.call(SuperClass, key)) {
            ChildClass[key] = SuperClass[key];
          }
        }
        BaseConstructor.prototype = SuperClass.prototype;
        ChildClass.prototype = new BaseConstructor();
        ChildClass.__super__ = SuperClass.prototype;
        return ChildClass;
      };
      function getMethods(theClass) {
        var proto = theClass.prototype;
        var methods = [];
        for (var methodName in proto) {
          var m = proto[methodName];
          if (typeof m !== 'function') {
            continue;
          }
          if (methodName === 'constructor') {
            continue;
          }
          methods.push(methodName);
        }
        return methods;
      }
      Utils.Decorate = function (SuperClass, DecoratorClass) {
        var decoratedMethods = getMethods(DecoratorClass);
        var superMethods = getMethods(SuperClass);
        function DecoratedClass() {
          var unshift = Array.prototype.unshift;
          var argCount = DecoratorClass.prototype.constructor.length;
          var calledConstructor = SuperClass.prototype.constructor;
          if (argCount > 0) {
            unshift.call(arguments, SuperClass.prototype.constructor);
            calledConstructor = DecoratorClass.prototype.constructor;
          }
          calledConstructor.apply(this, arguments);
        }
        DecoratorClass.displayName = SuperClass.displayName;
        function ctr() {
          this.constructor = DecoratedClass;
        }
        DecoratedClass.prototype = new ctr();
        for (var m = 0; m < superMethods.length; m++) {
          var superMethod = superMethods[m];
          DecoratedClass.prototype[superMethod] = SuperClass.prototype[superMethod];
        }
        var calledMethod = function calledMethod(methodName) {
          // Stub out the original method if it's not decorating an actual method
          var originalMethod = function originalMethod() {};
          if (methodName in DecoratedClass.prototype) {
            originalMethod = DecoratedClass.prototype[methodName];
          }
          var decoratedMethod = DecoratorClass.prototype[methodName];
          return function () {
            var unshift = Array.prototype.unshift;
            unshift.call(arguments, originalMethod);
            return decoratedMethod.apply(this, arguments);
          };
        };
        for (var d = 0; d < decoratedMethods.length; d++) {
          var decoratedMethod = decoratedMethods[d];
          DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
        }
        return DecoratedClass;
      };
      var Observable = function Observable() {
        this.listeners = {};
      };
      Observable.prototype.on = function (event, callback) {
        this.listeners = this.listeners || {};
        if (event in this.listeners) {
          this.listeners[event].push(callback);
        } else {
          this.listeners[event] = [callback];
        }
      };
      Observable.prototype.trigger = function (event) {
        var slice = Array.prototype.slice;
        var params = slice.call(arguments, 1);
        this.listeners = this.listeners || {};

        // Params should always come in as an array
        if (params == null) {
          params = [];
        }

        // If there are no arguments to the event, use a temporary object
        if (params.length === 0) {
          params.push({});
        }

        // Set the `_type` of the first object to the event
        params[0]._type = event;
        if (event in this.listeners) {
          this.invoke(this.listeners[event], slice.call(arguments, 1));
        }
        if ('*' in this.listeners) {
          this.invoke(this.listeners['*'], arguments);
        }
      };
      Observable.prototype.invoke = function (listeners, params) {
        for (var i = 0, len = listeners.length; i < len; i++) {
          listeners[i].apply(this, params);
        }
      };
      Utils.Observable = Observable;
      Utils.generateChars = function (length) {
        var chars = '';
        for (var i = 0; i < length; i++) {
          var randomChar = Math.floor(Math.random() * 36);
          chars += randomChar.toString(36);
        }
        return chars;
      };
      Utils.bind = function (func, context) {
        return function () {
          func.apply(context, arguments);
        };
      };
      Utils._convertData = function (data) {
        for (var originalKey in data) {
          var keys = originalKey.split('-');
          var dataLevel = data;
          if (keys.length === 1) {
            continue;
          }
          for (var k = 0; k < keys.length; k++) {
            var key = keys[k];

            // Lowercase the first letter
            // By default, dash-separated becomes camelCase
            key = key.substring(0, 1).toLowerCase() + key.substring(1);
            if (!(key in dataLevel)) {
              dataLevel[key] = {};
            }
            if (k == keys.length - 1) {
              dataLevel[key] = data[originalKey];
            }
            dataLevel = dataLevel[key];
          }
          delete data[originalKey];
        }
        return data;
      };
      Utils.hasScroll = function (index, el) {
        // Adapted from the function created by @ShadowScripter
        // and adapted by @BillBarry on the Stack Exchange Code Review website.
        // The original code can be found at
        // http://codereview.stackexchange.com/q/13338
        // and was designed to be used with the Sizzle selector engine.

        var $el = $(el);
        var overflowX = el.style.overflowX;
        var overflowY = el.style.overflowY;

        //Check both x and y declarations
        if (overflowX === overflowY && (overflowY === 'hidden' || overflowY === 'visible')) {
          return false;
        }
        if (overflowX === 'scroll' || overflowY === 'scroll') {
          return true;
        }
        return $el.innerHeight() < el.scrollHeight || $el.innerWidth() < el.scrollWidth;
      };
      Utils.escapeMarkup = function (markup) {
        var replaceMap = {
          '\\': '&#92;',
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          '\'': '&#39;',
          '/': '&#47;'
        };

        // Do not try to escape the markup if it's not a string
        if (typeof markup !== 'string') {
          return markup;
        }
        return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
          return replaceMap[match];
        });
      };

      // Cache objects in Utils.__cache instead of $.data (see #4346)
      Utils.__cache = {};
      var id = 0;
      Utils.GetUniqueElementId = function (element) {
        // Get a unique element Id. If element has no id,
        // creates a new unique number, stores it in the id
        // attribute and returns the new id with a prefix.
        // If an id already exists, it simply returns it with a prefix.

        var select2Id = element.getAttribute('data-select2-id');
        if (select2Id != null) {
          return select2Id;
        }

        // If element has id, use it.
        if (element.id) {
          select2Id = 'select2-data-' + element.id;
        } else {
          select2Id = 'select2-data-' + (++id).toString() + '-' + Utils.generateChars(4);
        }
        element.setAttribute('data-select2-id', select2Id);
        return select2Id;
      };
      Utils.StoreData = function (element, name, value) {
        // Stores an item in the cache for a specified element.
        // name is the cache key.
        var id = Utils.GetUniqueElementId(element);
        if (!Utils.__cache[id]) {
          Utils.__cache[id] = {};
        }
        Utils.__cache[id][name] = value;
      };
      Utils.GetData = function (element, name) {
        // Retrieves a value from the cache by its key (name)
        // name is optional. If no name specified, return
        // all cache items for the specified element.
        // and for a specified element.
        var id = Utils.GetUniqueElementId(element);
        if (name) {
          if (Utils.__cache[id]) {
            if (Utils.__cache[id][name] != null) {
              return Utils.__cache[id][name];
            }
            return $(element).data(name); // Fallback to HTML5 data attribs.
          }

          return $(element).data(name); // Fallback to HTML5 data attribs.
        } else {
          return Utils.__cache[id];
        }
      };
      Utils.RemoveData = function (element) {
        // Removes all cached items for a specified element.
        var id = Utils.GetUniqueElementId(element);
        if (Utils.__cache[id] != null) {
          delete Utils.__cache[id];
        }
        element.removeAttribute('data-select2-id');
      };
      Utils.copyNonInternalCssClasses = function (dest, src) {
        var classes;
        var destinationClasses = dest.getAttribute('class').trim().split(/\s+/);
        destinationClasses = destinationClasses.filter(function (clazz) {
          // Save all Select2 classes
          return clazz.indexOf('select2-') === 0;
        });
        var sourceClasses = src.getAttribute('class').trim().split(/\s+/);
        sourceClasses = sourceClasses.filter(function (clazz) {
          // Only copy non-Select2 classes
          return clazz.indexOf('select2-') !== 0;
        });
        var replacements = destinationClasses.concat(sourceClasses);
        dest.setAttribute('class', replacements.join(' '));
      };
      return Utils;
    });
    S2.define('select2/results', ['jquery', './utils'], function ($, Utils) {
      function Results($element, options, dataAdapter) {
        this.$element = $element;
        this.data = dataAdapter;
        this.options = options;
        Results.__super__.constructor.call(this);
      }
      Utils.Extend(Results, Utils.Observable);
      Results.prototype.render = function () {
        var $results = $('<ul class="select2-results__options" role="listbox"></ul>');
        if (this.options.get('multiple')) {
          $results.attr('aria-multiselectable', 'true');
        }
        this.$results = $results;
        return $results;
      };
      Results.prototype.clear = function () {
        this.$results.empty();
      };
      Results.prototype.displayMessage = function (params) {
        var escapeMarkup = this.options.get('escapeMarkup');
        this.clear();
        this.hideLoading();
        var $message = $('<li role="alert" aria-live="assertive"' + ' class="select2-results__option"></li>');
        var message = this.options.get('translations').get(params.message);
        $message.append(escapeMarkup(message(params.args)));
        $message[0].className += ' select2-results__message';
        this.$results.append($message);
      };
      Results.prototype.hideMessages = function () {
        this.$results.find('.select2-results__message').remove();
      };
      Results.prototype.append = function (data) {
        this.hideLoading();
        var $options = [];
        if (data.results == null || data.results.length === 0) {
          if (this.$results.children().length === 0) {
            this.trigger('results:message', {
              message: 'noResults'
            });
          }
          return;
        }
        data.results = this.sort(data.results);
        for (var d = 0; d < data.results.length; d++) {
          var item = data.results[d];
          var $option = this.option(item);
          $options.push($option);
        }
        this.$results.append($options);
      };
      Results.prototype.position = function ($results, $dropdown) {
        var $resultsContainer = $dropdown.find('.select2-results');
        $resultsContainer.append($results);
      };
      Results.prototype.sort = function (data) {
        var sorter = this.options.get('sorter');
        return sorter(data);
      };
      Results.prototype.highlightFirstItem = function () {
        var $options = this.$results.find('.select2-results__option--selectable');
        var $selected = $options.filter('.select2-results__option--selected');

        // Check if there are any selected options
        if ($selected.length > 0) {
          // If there are selected options, highlight the first
          $selected.first().trigger('mouseenter');
        } else {
          // If there are no selected options, highlight the first option
          // in the dropdown
          $options.first().trigger('mouseenter');
        }
        this.ensureHighlightVisible();
      };
      Results.prototype.setClasses = function () {
        var self = this;
        this.data.current(function (selected) {
          var selectedIds = selected.map(function (s) {
            return s.id.toString();
          });
          var $options = self.$results.find('.select2-results__option--selectable');
          $options.each(function () {
            var $option = $(this);
            var item = Utils.GetData(this, 'data');

            // id needs to be converted to a string when comparing
            var id = '' + item.id;
            if (item.element != null && item.element.selected || item.element == null && selectedIds.indexOf(id) > -1) {
              this.classList.add('select2-results__option--selected');
              $option.attr('aria-selected', 'true');
            } else {
              this.classList.remove('select2-results__option--selected');
              $option.attr('aria-selected', 'false');
            }
          });
        });
      };
      Results.prototype.showLoading = function (params) {
        this.hideLoading();
        var loadingMore = this.options.get('translations').get('searching');
        var loading = {
          disabled: true,
          loading: true,
          text: loadingMore(params)
        };
        var $loading = this.option(loading);
        $loading.className += ' loading-results';
        this.$results.prepend($loading);
      };
      Results.prototype.hideLoading = function () {
        this.$results.find('.loading-results').remove();
      };
      Results.prototype.option = function (data) {
        var option = document.createElement('li');
        option.classList.add('select2-results__option');
        option.classList.add('select2-results__option--selectable');
        var attrs = {
          'role': 'option'
        };
        var matches = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
        if (data.element != null && matches.call(data.element, ':disabled') || data.element == null && data.disabled) {
          attrs['aria-disabled'] = 'true';
          option.classList.remove('select2-results__option--selectable');
          option.classList.add('select2-results__option--disabled');
        }
        if (data.id == null) {
          option.classList.remove('select2-results__option--selectable');
        }
        if (data._resultId != null) {
          option.id = data._resultId;
        }
        if (data.title) {
          option.title = data.title;
        }
        if (data.children) {
          attrs.role = 'group';
          attrs['aria-label'] = data.text;
          option.classList.remove('select2-results__option--selectable');
          option.classList.add('select2-results__option--group');
        }
        for (var attr in attrs) {
          var val = attrs[attr];
          option.setAttribute(attr, val);
        }
        if (data.children) {
          var $option = $(option);
          var label = document.createElement('strong');
          label.className = 'select2-results__group';
          this.template(data, label);
          var $children = [];
          for (var c = 0; c < data.children.length; c++) {
            var child = data.children[c];
            var $child = this.option(child);
            $children.push($child);
          }
          var $childrenContainer = $('<ul></ul>', {
            'class': 'select2-results__options select2-results__options--nested'
          });
          $childrenContainer.append($children);
          $option.append(label);
          $option.append($childrenContainer);
        } else {
          this.template(data, option);
        }
        Utils.StoreData(option, 'data', data);
        return option;
      };
      Results.prototype.bind = function (container, $container) {
        var self = this;
        var id = container.id + '-results';
        this.$results.attr('id', id);
        container.on('results:all', function (params) {
          self.clear();
          self.append(params.data);
          if (container.isOpen()) {
            self.setClasses();
            self.highlightFirstItem();
          }
        });
        container.on('results:append', function (params) {
          self.append(params.data);
          if (container.isOpen()) {
            self.setClasses();
          }
        });
        container.on('query', function (params) {
          self.hideMessages();
          self.showLoading(params);
        });
        container.on('select', function () {
          if (!container.isOpen()) {
            return;
          }
          self.setClasses();
          if (self.options.get('scrollAfterSelect')) {
            self.highlightFirstItem();
          }
        });
        container.on('unselect', function () {
          if (!container.isOpen()) {
            return;
          }
          self.setClasses();
          if (self.options.get('scrollAfterSelect')) {
            self.highlightFirstItem();
          }
        });
        container.on('open', function () {
          // When the dropdown is open, aria-expended="true"
          self.$results.attr('aria-expanded', 'true');
          self.$results.attr('aria-hidden', 'false');
          self.setClasses();
          self.ensureHighlightVisible();
        });
        container.on('close', function () {
          // When the dropdown is closed, aria-expended="false"
          self.$results.attr('aria-expanded', 'false');
          self.$results.attr('aria-hidden', 'true');
          self.$results.removeAttr('aria-activedescendant');
        });
        container.on('results:toggle', function () {
          var $highlighted = self.getHighlightedResults();
          if ($highlighted.length === 0) {
            return;
          }
          $highlighted.trigger('mouseup');
        });
        container.on('results:select', function () {
          var $highlighted = self.getHighlightedResults();
          if ($highlighted.length === 0) {
            return;
          }
          var data = Utils.GetData($highlighted[0], 'data');
          if ($highlighted.hasClass('select2-results__option--selected')) {
            self.trigger('close', {});
          } else {
            self.trigger('select', {
              data: data
            });
          }
        });
        container.on('results:previous', function () {
          var $highlighted = self.getHighlightedResults();
          var $options = self.$results.find('.select2-results__option--selectable');
          var currentIndex = $options.index($highlighted);

          // If we are already at the top, don't move further
          // If no options, currentIndex will be -1
          if (currentIndex <= 0) {
            return;
          }
          var nextIndex = currentIndex - 1;

          // If none are highlighted, highlight the first
          if ($highlighted.length === 0) {
            nextIndex = 0;
          }
          var $next = $options.eq(nextIndex);
          $next.trigger('mouseenter');
          var currentOffset = self.$results.offset().top;
          var nextTop = $next.offset().top;
          var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);
          if (nextIndex === 0) {
            self.$results.scrollTop(0);
          } else if (nextTop - currentOffset < 0) {
            self.$results.scrollTop(nextOffset);
          }
        });
        container.on('results:next', function () {
          var $highlighted = self.getHighlightedResults();
          var $options = self.$results.find('.select2-results__option--selectable');
          var currentIndex = $options.index($highlighted);
          var nextIndex = currentIndex + 1;

          // If we are at the last option, stay there
          if (nextIndex >= $options.length) {
            return;
          }
          var $next = $options.eq(nextIndex);
          $next.trigger('mouseenter');
          var currentOffset = self.$results.offset().top + self.$results.outerHeight(false);
          var nextBottom = $next.offset().top + $next.outerHeight(false);
          var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;
          if (nextIndex === 0) {
            self.$results.scrollTop(0);
          } else if (nextBottom > currentOffset) {
            self.$results.scrollTop(nextOffset);
          }
        });
        container.on('results:focus', function (params) {
          params.element[0].classList.add('select2-results__option--highlighted');
          params.element[0].setAttribute('aria-selected', 'true');
        });
        container.on('results:message', function (params) {
          self.displayMessage(params);
        });
        if ($.fn.mousewheel) {
          this.$results.on('mousewheel', function (e) {
            var top = self.$results.scrollTop();
            var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;
            var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
            var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();
            if (isAtTop) {
              self.$results.scrollTop(0);
              e.preventDefault();
              e.stopPropagation();
            } else if (isAtBottom) {
              self.$results.scrollTop(self.$results.get(0).scrollHeight - self.$results.height());
              e.preventDefault();
              e.stopPropagation();
            }
          });
        }
        this.$results.on('mouseup', '.select2-results__option--selectable', function (evt) {
          var $this = $(this);
          var data = Utils.GetData(this, 'data');
          if ($this.hasClass('select2-results__option--selected')) {
            if (self.options.get('multiple')) {
              self.trigger('unselect', {
                originalEvent: evt,
                data: data
              });
            } else {
              self.trigger('close', {});
            }
            return;
          }
          self.trigger('select', {
            originalEvent: evt,
            data: data
          });
        });
        this.$results.on('mouseenter', '.select2-results__option--selectable', function (evt) {
          var data = Utils.GetData(this, 'data');
          self.getHighlightedResults().removeClass('select2-results__option--highlighted').attr('aria-selected', 'false');
          self.trigger('results:focus', {
            data: data,
            element: $(this)
          });
        });
      };
      Results.prototype.getHighlightedResults = function () {
        var $highlighted = this.$results.find('.select2-results__option--highlighted');
        return $highlighted;
      };
      Results.prototype.destroy = function () {
        this.$results.remove();
      };
      Results.prototype.ensureHighlightVisible = function () {
        var $highlighted = this.getHighlightedResults();
        if ($highlighted.length === 0) {
          return;
        }
        var $options = this.$results.find('.select2-results__option--selectable');
        var currentIndex = $options.index($highlighted);
        var currentOffset = this.$results.offset().top;
        var nextTop = $highlighted.offset().top;
        var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);
        var offsetDelta = nextTop - currentOffset;
        nextOffset -= $highlighted.outerHeight(false) * 2;
        if (currentIndex <= 2) {
          this.$results.scrollTop(0);
        } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
          this.$results.scrollTop(nextOffset);
        }
      };
      Results.prototype.template = function (result, container) {
        var template = this.options.get('templateResult');
        var escapeMarkup = this.options.get('escapeMarkup');
        var content = template(result, container);
        if (content == null) {
          container.style.display = 'none';
        } else if (typeof content === 'string') {
          container.innerHTML = escapeMarkup(content);
        } else {
          $(container).append(content);
        }
      };
      return Results;
    });
    S2.define('select2/keys', [], function () {
      var KEYS = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46
      };
      return KEYS;
    });
    S2.define('select2/selection/base', ['jquery', '../utils', '../keys'], function ($, Utils, KEYS) {
      function BaseSelection($element, options) {
        this.$element = $element;
        this.options = options;
        BaseSelection.__super__.constructor.call(this);
      }
      Utils.Extend(BaseSelection, Utils.Observable);
      BaseSelection.prototype.render = function () {
        var $selection = $('<span class="select2-selection" role="combobox" ' + ' aria-haspopup="true" aria-expanded="false">' + '</span>');
        this._tabindex = 0;
        if (Utils.GetData(this.$element[0], 'old-tabindex') != null) {
          this._tabindex = Utils.GetData(this.$element[0], 'old-tabindex');
        } else if (this.$element.attr('tabindex') != null) {
          this._tabindex = this.$element.attr('tabindex');
        }
        $selection.attr('title', this.$element.attr('title'));
        $selection.attr('tabindex', this._tabindex);
        $selection.attr('aria-disabled', 'false');
        this.$selection = $selection;
        return $selection;
      };
      BaseSelection.prototype.bind = function (container, $container) {
        var self = this;
        var resultsId = container.id + '-results';
        this.container = container;
        this.$selection.on('focus', function (evt) {
          self.trigger('focus', evt);
        });
        this.$selection.on('blur', function (evt) {
          self._handleBlur(evt);
        });
        this.$selection.on('keydown', function (evt) {
          self.trigger('keypress', evt);
          if (evt.which === KEYS.SPACE) {
            evt.preventDefault();
          }
        });
        container.on('results:focus', function (params) {
          self.$selection.attr('aria-activedescendant', params.data._resultId);
        });
        container.on('selection:update', function (params) {
          self.update(params.data);
        });
        container.on('open', function () {
          // When the dropdown is open, aria-expanded="true"
          self.$selection.attr('aria-expanded', 'true');
          self.$selection.attr('aria-owns', resultsId);
          self._attachCloseHandler(container);
        });
        container.on('close', function () {
          // When the dropdown is closed, aria-expanded="false"
          self.$selection.attr('aria-expanded', 'false');
          self.$selection.removeAttr('aria-activedescendant');
          self.$selection.removeAttr('aria-owns');
          self.$selection.trigger('focus');
          self._detachCloseHandler(container);
        });
        container.on('enable', function () {
          self.$selection.attr('tabindex', self._tabindex);
          self.$selection.attr('aria-disabled', 'false');
        });
        container.on('disable', function () {
          self.$selection.attr('tabindex', '-1');
          self.$selection.attr('aria-disabled', 'true');
        });
      };
      BaseSelection.prototype._handleBlur = function (evt) {
        var self = this;

        // This needs to be delayed as the active element is the body when the tab
        // key is pressed, possibly along with others.
        window.setTimeout(function () {
          // Don't trigger `blur` if the focus is still in the selection
          if (document.activeElement == self.$selection[0] || $.contains(self.$selection[0], document.activeElement)) {
            return;
          }
          self.trigger('blur', evt);
        }, 1);
      };
      BaseSelection.prototype._attachCloseHandler = function (container) {
        $(document.body).on('mousedown.select2.' + container.id, function (e) {
          var $target = $(e.target);
          var $select = $target.closest('.select2');
          var $all = $('.select2.select2-container--open');
          $all.each(function () {
            if (this == $select[0]) {
              return;
            }
            var $element = Utils.GetData(this, 'element');
            $element.select2('close');
          });
        });
      };
      BaseSelection.prototype._detachCloseHandler = function (container) {
        $(document.body).off('mousedown.select2.' + container.id);
      };
      BaseSelection.prototype.position = function ($selection, $container) {
        var $selectionContainer = $container.find('.selection');
        $selectionContainer.append($selection);
      };
      BaseSelection.prototype.destroy = function () {
        this._detachCloseHandler(this.container);
      };
      BaseSelection.prototype.update = function (data) {
        throw new Error('The `update` method must be defined in child classes.');
      };

      /**
       * Helper method to abstract the "enabled" (not "disabled") state of this
       * object.
       *
       * @return {true} if the instance is not disabled.
       * @return {false} if the instance is disabled.
       */
      BaseSelection.prototype.isEnabled = function () {
        return !this.isDisabled();
      };

      /**
       * Helper method to abstract the "disabled" state of this object.
       *
       * @return {true} if the disabled option is true.
       * @return {false} if the disabled option is false.
       */
      BaseSelection.prototype.isDisabled = function () {
        return this.options.get('disabled');
      };
      return BaseSelection;
    });
    S2.define('select2/selection/single', ['jquery', './base', '../utils', '../keys'], function ($, BaseSelection, Utils, KEYS) {
      function SingleSelection() {
        SingleSelection.__super__.constructor.apply(this, arguments);
      }
      Utils.Extend(SingleSelection, BaseSelection);
      SingleSelection.prototype.render = function () {
        var $selection = SingleSelection.__super__.render.call(this);
        $selection[0].classList.add('select2-selection--single');
        $selection.html('<span class="select2-selection__rendered"></span>' + '<span class="select2-selection__arrow" role="presentation">' + '<b role="presentation"></b>' + '</span>');
        return $selection;
      };
      SingleSelection.prototype.bind = function (container, $container) {
        var self = this;
        SingleSelection.__super__.bind.apply(this, arguments);
        var id = container.id + '-container';
        this.$selection.find('.select2-selection__rendered').attr('id', id).attr('role', 'textbox').attr('aria-readonly', 'true');
        this.$selection.attr('aria-labelledby', id);
        this.$selection.on('mousedown', function (evt) {
          // Only respond to left clicks
          if (evt.which !== 1) {
            return;
          }
          self.trigger('toggle', {
            originalEvent: evt
          });
        });
        this.$selection.on('focus', function (evt) {
          // User focuses on the container
        });
        this.$selection.on('blur', function (evt) {
          // User exits the container
        });
        container.on('focus', function (evt) {
          if (!container.isOpen()) {
            self.$selection.trigger('focus');
          }
        });
      };
      SingleSelection.prototype.clear = function () {
        var $rendered = this.$selection.find('.select2-selection__rendered');
        $rendered.empty();
        $rendered.removeAttr('title'); // clear tooltip on empty
      };

      SingleSelection.prototype.display = function (data, container) {
        var template = this.options.get('templateSelection');
        var escapeMarkup = this.options.get('escapeMarkup');
        return escapeMarkup(template(data, container));
      };
      SingleSelection.prototype.selectionContainer = function () {
        return $('<span></span>');
      };
      SingleSelection.prototype.update = function (data) {
        if (data.length === 0) {
          this.clear();
          return;
        }
        var selection = data[0];
        var $rendered = this.$selection.find('.select2-selection__rendered');
        var formatted = this.display(selection, $rendered);
        $rendered.empty().append(formatted);
        var title = selection.title || selection.text;
        if (title) {
          $rendered.attr('title', title);
        } else {
          $rendered.removeAttr('title');
        }
      };
      return SingleSelection;
    });
    S2.define('select2/selection/multiple', ['jquery', './base', '../utils'], function ($, BaseSelection, Utils) {
      function MultipleSelection($element, options) {
        MultipleSelection.__super__.constructor.apply(this, arguments);
      }
      Utils.Extend(MultipleSelection, BaseSelection);
      MultipleSelection.prototype.render = function () {
        var $selection = MultipleSelection.__super__.render.call(this);
        $selection[0].classList.add('select2-selection--multiple');
        $selection.html('<ul class="select2-selection__rendered"></ul>');
        return $selection;
      };
      MultipleSelection.prototype.bind = function (container, $container) {
        var self = this;
        MultipleSelection.__super__.bind.apply(this, arguments);
        var id = container.id + '-container';
        this.$selection.find('.select2-selection__rendered').attr('id', id);
        this.$selection.on('click', function (evt) {
          self.trigger('toggle', {
            originalEvent: evt
          });
        });
        this.$selection.on('click', '.select2-selection__choice__remove', function (evt) {
          // Ignore the event if it is disabled
          if (self.isDisabled()) {
            return;
          }
          var $remove = $(this);
          var $selection = $remove.parent();
          var data = Utils.GetData($selection[0], 'data');
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        });
        this.$selection.on('keydown', '.select2-selection__choice__remove', function (evt) {
          // Ignore the event if it is disabled
          if (self.isDisabled()) {
            return;
          }
          evt.stopPropagation();
        });
      };
      MultipleSelection.prototype.clear = function () {
        var $rendered = this.$selection.find('.select2-selection__rendered');
        $rendered.empty();
        $rendered.removeAttr('title');
      };
      MultipleSelection.prototype.display = function (data, container) {
        var template = this.options.get('templateSelection');
        var escapeMarkup = this.options.get('escapeMarkup');
        return escapeMarkup(template(data, container));
      };
      MultipleSelection.prototype.selectionContainer = function () {
        var $container = $('<li class="select2-selection__choice">' + '<button type="button" class="select2-selection__choice__remove" ' + 'tabindex="-1">' + '<span aria-hidden="true">&times;</span>' + '</button>' + '<span class="select2-selection__choice__display"></span>' + '</li>');
        return $container;
      };
      MultipleSelection.prototype.update = function (data) {
        this.clear();
        if (data.length === 0) {
          return;
        }
        var $selections = [];
        var selectionIdPrefix = this.$selection.find('.select2-selection__rendered').attr('id') + '-choice-';
        for (var d = 0; d < data.length; d++) {
          var selection = data[d];
          var $selection = this.selectionContainer();
          var formatted = this.display(selection, $selection);
          var selectionId = selectionIdPrefix + Utils.generateChars(4) + '-';
          if (selection.id) {
            selectionId += selection.id;
          } else {
            selectionId += Utils.generateChars(4);
          }
          $selection.find('.select2-selection__choice__display').append(formatted).attr('id', selectionId);
          var title = selection.title || selection.text;
          if (title) {
            $selection.attr('title', title);
          }
          var removeItem = this.options.get('translations').get('removeItem');
          var $remove = $selection.find('.select2-selection__choice__remove');
          $remove.attr('title', removeItem());
          $remove.attr('aria-label', removeItem());
          $remove.attr('aria-describedby', selectionId);
          Utils.StoreData($selection[0], 'data', selection);
          $selections.push($selection);
        }
        var $rendered = this.$selection.find('.select2-selection__rendered');
        $rendered.append($selections);
      };
      return MultipleSelection;
    });
    S2.define('select2/selection/placeholder', [], function () {
      function Placeholder(decorated, $element, options) {
        this.placeholder = this.normalizePlaceholder(options.get('placeholder'));
        decorated.call(this, $element, options);
      }
      Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
        if (typeof placeholder === 'string') {
          placeholder = {
            id: '',
            text: placeholder
          };
        }
        return placeholder;
      };
      Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
        var $placeholder = this.selectionContainer();
        $placeholder.html(this.display(placeholder));
        $placeholder[0].classList.add('select2-selection__placeholder');
        $placeholder[0].classList.remove('select2-selection__choice');
        return $placeholder;
      };
      Placeholder.prototype.update = function (decorated, data) {
        var singlePlaceholder = data.length == 1 && data[0].id != this.placeholder.id;
        var multipleSelections = data.length > 1;
        if (multipleSelections || singlePlaceholder) {
          return decorated.call(this, data);
        }
        this.clear();
        var $placeholder = this.createPlaceholder(this.placeholder);
        this.$selection.find('.select2-selection__rendered').append($placeholder);
      };
      return Placeholder;
    });
    S2.define('select2/selection/allowClear', ['jquery', '../keys', '../utils'], function ($, KEYS, Utils) {
      function AllowClear() {}
      AllowClear.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        if (this.placeholder == null) {
          if (this.options.get('debug') && window.console && console.error) {
            console.error('Select2: The `allowClear` option should be used in combination ' + 'with the `placeholder` option.');
          }
        }
        this.$selection.on('mousedown', '.select2-selection__clear', function (evt) {
          self._handleClear(evt);
        });
        container.on('keypress', function (evt) {
          self._handleKeyboardClear(evt, container);
        });
      };
      AllowClear.prototype._handleClear = function (_, evt) {
        // Ignore the event if it is disabled
        if (this.isDisabled()) {
          return;
        }
        var $clear = this.$selection.find('.select2-selection__clear');

        // Ignore the event if nothing has been selected
        if ($clear.length === 0) {
          return;
        }
        evt.stopPropagation();
        var data = Utils.GetData($clear[0], 'data');
        var previousVal = this.$element.val();
        this.$element.val(this.placeholder.id);
        var unselectData = {
          data: data
        };
        this.trigger('clear', unselectData);
        if (unselectData.prevented) {
          this.$element.val(previousVal);
          return;
        }
        for (var d = 0; d < data.length; d++) {
          unselectData = {
            data: data[d]
          };

          // Trigger the `unselect` event, so people can prevent it from being
          // cleared.
          this.trigger('unselect', unselectData);

          // If the event was prevented, don't clear it out.
          if (unselectData.prevented) {
            this.$element.val(previousVal);
            return;
          }
        }
        this.$element.trigger('input').trigger('change');
        this.trigger('toggle', {});
      };
      AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
        if (container.isOpen()) {
          return;
        }
        if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
          this._handleClear(evt);
        }
      };
      AllowClear.prototype.update = function (decorated, data) {
        decorated.call(this, data);
        this.$selection.find('.select2-selection__clear').remove();
        if (this.$selection.find('.select2-selection__placeholder').length > 0 || data.length === 0) {
          return;
        }
        var selectionId = this.$selection.find('.select2-selection__rendered').attr('id');
        var removeAll = this.options.get('translations').get('removeAllItems');
        var $remove = $('<button type="button" class="select2-selection__clear" tabindex="-1">' + '<span aria-hidden="true">&times;</span>' + '</button>');
        $remove.attr('title', removeAll());
        $remove.attr('aria-label', removeAll());
        $remove.attr('aria-describedby', selectionId);
        Utils.StoreData($remove[0], 'data', data);
        this.$selection.prepend($remove);
      };
      return AllowClear;
    });
    S2.define('select2/selection/search', ['jquery', '../utils', '../keys'], function ($, Utils, KEYS) {
      function Search(decorated, $element, options) {
        decorated.call(this, $element, options);
      }
      Search.prototype.render = function (decorated) {
        var $search = $('<span class="select2-search select2-search--inline ttp">' + '<input class="tt select2-search__field" type="search" tabindex="-1"' + ' autocorrect="off" autocapitalize="none"' + ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' + '</span>');
        this.$searchContainer = $search;
        this.$search = $search.find('input');
        this.$search.prop('autocomplete', this.options.get('autocomplete'));
        var $rendered = decorated.call(this);
        this._transferTabIndex();
        $rendered.append(this.$searchContainer);
        return $rendered;
      };
      Search.prototype.bind = function (decorated, container, $container) {
        var self = this;
        var resultsId = container.id + '-results';
        var selectionId = container.id + '-container';
        decorated.call(this, container, $container);
        self.$search.attr('aria-describedby', selectionId);
        container.on('open', function () {
          self.$search.attr('aria-controls', resultsId);
          self.$search.trigger('focus');
        });
        container.on('close', function () {
          self.$search.val('');
          self.resizeSearch();
          self.$search.removeAttr('aria-controls');
          self.$search.removeAttr('aria-activedescendant');
          self.$search.trigger('focus');
        });
        container.on('enable', function () {
          self.$search.prop('disabled', false);
          self._transferTabIndex();
        });
        container.on('disable', function () {
          self.$search.prop('disabled', true);
        });
        container.on('focus', function (evt) {
          self.$search.trigger('focus');
        });
        container.on('results:focus', function (params) {
          if (params.data._resultId) {
            self.$search.attr('aria-activedescendant', params.data._resultId);
          } else {
            self.$search.removeAttr('aria-activedescendant');
          }
        });
        this.$selection.on('focusin', '.select2-search--inline', function (evt) {
          self.trigger('focus', evt);
        });
        this.$selection.on('focusout', '.select2-search--inline', function (evt) {
          self._handleBlur(evt);
        });
        this.$selection.on('keydown', '.select2-search--inline', function (evt) {
          evt.stopPropagation();
          self.trigger('keypress', evt);
          self._keyUpPrevented = evt.isDefaultPrevented();
          var key = evt.which;
          if (key === KEYS.BACKSPACE && self.$search.val() === '') {
            var $previousChoice = self.$selection.find('.select2-selection__choice').last();
            if ($previousChoice.length > 0) {
              var item = Utils.GetData($previousChoice[0], 'data');
              self.searchRemoveChoice(item);
              evt.preventDefault();
            }
          }
        });
        this.$selection.on('click', '.select2-search--inline', function (evt) {
          if (self.$search.val()) {
            evt.stopPropagation();
          }
        });

        // Try to detect the IE version should the `documentMode` property that
        // is stored on the document. This is only implemented in IE and is
        // slightly cleaner than doing a user agent check.
        // This property is not available in Edge, but Edge also doesn't have
        // this bug.
        var msie = document.documentMode;
        var disableInputEvents = msie && msie <= 11;

        // Workaround for browsers which do not support the `input` event
        // This will prevent double-triggering of events for browsers which support
        // both the `keyup` and `input` events.
        this.$selection.on('input.searchcheck', '.select2-search--inline', function (evt) {
          // IE will trigger the `input` event when a placeholder is used on a
          // search box. To get around this issue, we are forced to ignore all
          // `input` events in IE and keep using `keyup`.
          if (disableInputEvents) {
            self.$selection.off('input.search input.searchcheck');
            return;
          }

          // Unbind the duplicated `keyup` event
          self.$selection.off('keyup.search');
        });
        this.$selection.on('keyup.search input.search', '.select2-search--inline', function (evt) {
          // IE will trigger the `input` event when a placeholder is used on a
          // search box. To get around this issue, we are forced to ignore all
          // `input` events in IE and keep using `keyup`.
          if (disableInputEvents && evt.type === 'input') {
            self.$selection.off('input.search input.searchcheck');
            return;
          }
          var key = evt.which;

          // We can freely ignore events from modifier keys
          if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
            return;
          }

          // Tabbing will be handled during the `keydown` phase
          if (key == KEYS.TAB) {
            return;
          }
          self.handleSearch(evt);
        });
      };

      /**
       * This method will transfer the tabindex attribute from the rendered
       * selection to the search box. This allows for the search box to be used as
       * the primary focus instead of the selection container.
       *
       * @private
       */
      Search.prototype._transferTabIndex = function (decorated) {
        this.$search.attr('tabindex', this.$selection.attr('tabindex'));
        this.$selection.attr('tabindex', '-1');
      };
      Search.prototype.createPlaceholder = function (decorated, placeholder) {
        this.$search.attr('placeholder', placeholder.text);
      };
      Search.prototype.update = function (decorated, data) {
        var searchHadFocus = this.$search[0] == document.activeElement;
        this.$search.attr('placeholder', '');
        decorated.call(this, data);
        this.resizeSearch();
        if (searchHadFocus) {
          this.$search.trigger('focus');
        }
      };
      Search.prototype.handleSearch = function () {
        this.resizeSearch();
        if (!this._keyUpPrevented) {
          var input = this.$search.val();
          this.trigger('query', {
            term: input
          });
        }
        this._keyUpPrevented = false;
      };
      Search.prototype.searchRemoveChoice = function (decorated, item) {
        this.trigger('unselect', {
          data: item
        });
        this.$search.val(item.text);
        this.handleSearch();
      };
      Search.prototype.resizeSearch = function () {
        this.$search.css('width', '25px');
        var width = '100%';
        if (this.$search.attr('placeholder') === '') {
          var minimumWidth = this.$search.val().length + 1;
          width = minimumWidth * 0.75 + 'em';
        }
        this.$search.css('width', width);
      };
      return Search;
    });
    S2.define('select2/selection/selectionCss', ['../utils'], function (Utils) {
      function SelectionCSS() {}
      SelectionCSS.prototype.render = function (decorated) {
        var $selection = decorated.call(this);
        var selectionCssClass = this.options.get('selectionCssClass') || '';
        if (selectionCssClass.indexOf(':all:') !== -1) {
          selectionCssClass = selectionCssClass.replace(':all:', '');
          Utils.copyNonInternalCssClasses($selection[0], this.$element[0]);
        }
        $selection.addClass(selectionCssClass);
        return $selection;
      };
      return SelectionCSS;
    });
    S2.define('select2/selection/eventRelay', ['jquery'], function ($) {
      function EventRelay() {}
      EventRelay.prototype.bind = function (decorated, container, $container) {
        var self = this;
        var relayEvents = ['open', 'opening', 'close', 'closing', 'select', 'selecting', 'unselect', 'unselecting', 'clear', 'clearing'];
        var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting', 'clearing'];
        decorated.call(this, container, $container);
        container.on('*', function (name, params) {
          // Ignore events that should not be relayed
          if (relayEvents.indexOf(name) === -1) {
            return;
          }

          // The parameters should always be an object
          params = params || {};

          // Generate the jQuery event for the Select2 event
          var evt = $.Event('select2:' + name, {
            params: params
          });
          self.$element.trigger(evt);

          // Only handle preventable events if it was one
          if (preventableEvents.indexOf(name) === -1) {
            return;
          }
          params.prevented = evt.isDefaultPrevented();
        });
      };
      return EventRelay;
    });
    S2.define('select2/translation', ['jquery', 'require'], function ($, require) {
      function Translation(dict) {
        this.dict = dict || {};
      }
      Translation.prototype.all = function () {
        return this.dict;
      };
      Translation.prototype.get = function (key) {
        return this.dict[key];
      };
      Translation.prototype.extend = function (translation) {
        this.dict = $.extend({}, translation.all(), this.dict);
      };

      // Static functions

      Translation._cache = {};
      Translation.loadPath = function (path) {
        if (!(path in Translation._cache)) {
          var translations = require(path);
          Translation._cache[path] = translations;
        }
        return new Translation(Translation._cache[path]);
      };
      return Translation;
    });
    S2.define('select2/diacritics', [], function () {
      var diacritics = {
        "\u24B6": 'A',
        "\uFF21": 'A',
        "\xC0": 'A',
        "\xC1": 'A',
        "\xC2": 'A',
        "\u1EA6": 'A',
        "\u1EA4": 'A',
        "\u1EAA": 'A',
        "\u1EA8": 'A',
        "\xC3": 'A',
        "\u0100": 'A',
        "\u0102": 'A',
        "\u1EB0": 'A',
        "\u1EAE": 'A',
        "\u1EB4": 'A',
        "\u1EB2": 'A',
        "\u0226": 'A',
        "\u01E0": 'A',
        "\xC4": 'A',
        "\u01DE": 'A',
        "\u1EA2": 'A',
        "\xC5": 'A',
        "\u01FA": 'A',
        "\u01CD": 'A',
        "\u0200": 'A',
        "\u0202": 'A',
        "\u1EA0": 'A',
        "\u1EAC": 'A',
        "\u1EB6": 'A',
        "\u1E00": 'A',
        "\u0104": 'A',
        "\u023A": 'A',
        "\u2C6F": 'A',
        "\uA732": 'AA',
        "\xC6": 'AE',
        "\u01FC": 'AE',
        "\u01E2": 'AE',
        "\uA734": 'AO',
        "\uA736": 'AU',
        "\uA738": 'AV',
        "\uA73A": 'AV',
        "\uA73C": 'AY',
        "\u24B7": 'B',
        "\uFF22": 'B',
        "\u1E02": 'B',
        "\u1E04": 'B',
        "\u1E06": 'B',
        "\u0243": 'B',
        "\u0182": 'B',
        "\u0181": 'B',
        "\u24B8": 'C',
        "\uFF23": 'C',
        "\u0106": 'C',
        "\u0108": 'C',
        "\u010A": 'C',
        "\u010C": 'C',
        "\xC7": 'C',
        "\u1E08": 'C',
        "\u0187": 'C',
        "\u023B": 'C',
        "\uA73E": 'C',
        "\u24B9": 'D',
        "\uFF24": 'D',
        "\u1E0A": 'D',
        "\u010E": 'D',
        "\u1E0C": 'D',
        "\u1E10": 'D',
        "\u1E12": 'D',
        "\u1E0E": 'D',
        "\u0110": 'D',
        "\u018B": 'D',
        "\u018A": 'D',
        "\u0189": 'D',
        "\uA779": 'D',
        "\u01F1": 'DZ',
        "\u01C4": 'DZ',
        "\u01F2": 'Dz',
        "\u01C5": 'Dz',
        "\u24BA": 'E',
        "\uFF25": 'E',
        "\xC8": 'E',
        "\xC9": 'E',
        "\xCA": 'E',
        "\u1EC0": 'E',
        "\u1EBE": 'E',
        "\u1EC4": 'E',
        "\u1EC2": 'E',
        "\u1EBC": 'E',
        "\u0112": 'E',
        "\u1E14": 'E',
        "\u1E16": 'E',
        "\u0114": 'E',
        "\u0116": 'E',
        "\xCB": 'E',
        "\u1EBA": 'E',
        "\u011A": 'E',
        "\u0204": 'E',
        "\u0206": 'E',
        "\u1EB8": 'E',
        "\u1EC6": 'E',
        "\u0228": 'E',
        "\u1E1C": 'E',
        "\u0118": 'E',
        "\u1E18": 'E',
        "\u1E1A": 'E',
        "\u0190": 'E',
        "\u018E": 'E',
        "\u24BB": 'F',
        "\uFF26": 'F',
        "\u1E1E": 'F',
        "\u0191": 'F',
        "\uA77B": 'F',
        "\u24BC": 'G',
        "\uFF27": 'G',
        "\u01F4": 'G',
        "\u011C": 'G',
        "\u1E20": 'G',
        "\u011E": 'G',
        "\u0120": 'G',
        "\u01E6": 'G',
        "\u0122": 'G',
        "\u01E4": 'G',
        "\u0193": 'G',
        "\uA7A0": 'G',
        "\uA77D": 'G',
        "\uA77E": 'G',
        "\u24BD": 'H',
        "\uFF28": 'H',
        "\u0124": 'H',
        "\u1E22": 'H',
        "\u1E26": 'H',
        "\u021E": 'H',
        "\u1E24": 'H',
        "\u1E28": 'H',
        "\u1E2A": 'H',
        "\u0126": 'H',
        "\u2C67": 'H',
        "\u2C75": 'H',
        "\uA78D": 'H',
        "\u24BE": 'I',
        "\uFF29": 'I',
        "\xCC": 'I',
        "\xCD": 'I',
        "\xCE": 'I',
        "\u0128": 'I',
        "\u012A": 'I',
        "\u012C": 'I',
        "\u0130": 'I',
        "\xCF": 'I',
        "\u1E2E": 'I',
        "\u1EC8": 'I',
        "\u01CF": 'I',
        "\u0208": 'I',
        "\u020A": 'I',
        "\u1ECA": 'I',
        "\u012E": 'I',
        "\u1E2C": 'I',
        "\u0197": 'I',
        "\u24BF": 'J',
        "\uFF2A": 'J',
        "\u0134": 'J',
        "\u0248": 'J',
        "\u24C0": 'K',
        "\uFF2B": 'K',
        "\u1E30": 'K',
        "\u01E8": 'K',
        "\u1E32": 'K',
        "\u0136": 'K',
        "\u1E34": 'K',
        "\u0198": 'K',
        "\u2C69": 'K',
        "\uA740": 'K',
        "\uA742": 'K',
        "\uA744": 'K',
        "\uA7A2": 'K',
        "\u24C1": 'L',
        "\uFF2C": 'L',
        "\u013F": 'L',
        "\u0139": 'L',
        "\u013D": 'L',
        "\u1E36": 'L',
        "\u1E38": 'L',
        "\u013B": 'L',
        "\u1E3C": 'L',
        "\u1E3A": 'L',
        "\u0141": 'L',
        "\u023D": 'L',
        "\u2C62": 'L',
        "\u2C60": 'L',
        "\uA748": 'L',
        "\uA746": 'L',
        "\uA780": 'L',
        "\u01C7": 'LJ',
        "\u01C8": 'Lj',
        "\u24C2": 'M',
        "\uFF2D": 'M',
        "\u1E3E": 'M',
        "\u1E40": 'M',
        "\u1E42": 'M',
        "\u2C6E": 'M',
        "\u019C": 'M',
        "\u24C3": 'N',
        "\uFF2E": 'N',
        "\u01F8": 'N',
        "\u0143": 'N',
        "\xD1": 'N',
        "\u1E44": 'N',
        "\u0147": 'N',
        "\u1E46": 'N',
        "\u0145": 'N',
        "\u1E4A": 'N',
        "\u1E48": 'N',
        "\u0220": 'N',
        "\u019D": 'N',
        "\uA790": 'N',
        "\uA7A4": 'N',
        "\u01CA": 'NJ',
        "\u01CB": 'Nj',
        "\u24C4": 'O',
        "\uFF2F": 'O',
        "\xD2": 'O',
        "\xD3": 'O',
        "\xD4": 'O',
        "\u1ED2": 'O',
        "\u1ED0": 'O',
        "\u1ED6": 'O',
        "\u1ED4": 'O',
        "\xD5": 'O',
        "\u1E4C": 'O',
        "\u022C": 'O',
        "\u1E4E": 'O',
        "\u014C": 'O',
        "\u1E50": 'O',
        "\u1E52": 'O',
        "\u014E": 'O',
        "\u022E": 'O',
        "\u0230": 'O',
        "\xD6": 'O',
        "\u022A": 'O',
        "\u1ECE": 'O',
        "\u0150": 'O',
        "\u01D1": 'O',
        "\u020C": 'O',
        "\u020E": 'O',
        "\u01A0": 'O',
        "\u1EDC": 'O',
        "\u1EDA": 'O',
        "\u1EE0": 'O',
        "\u1EDE": 'O',
        "\u1EE2": 'O',
        "\u1ECC": 'O',
        "\u1ED8": 'O',
        "\u01EA": 'O',
        "\u01EC": 'O',
        "\xD8": 'O',
        "\u01FE": 'O',
        "\u0186": 'O',
        "\u019F": 'O',
        "\uA74A": 'O',
        "\uA74C": 'O',
        "\u0152": 'OE',
        "\u01A2": 'OI',
        "\uA74E": 'OO',
        "\u0222": 'OU',
        "\u24C5": 'P',
        "\uFF30": 'P',
        "\u1E54": 'P',
        "\u1E56": 'P',
        "\u01A4": 'P',
        "\u2C63": 'P',
        "\uA750": 'P',
        "\uA752": 'P',
        "\uA754": 'P',
        "\u24C6": 'Q',
        "\uFF31": 'Q',
        "\uA756": 'Q',
        "\uA758": 'Q',
        "\u024A": 'Q',
        "\u24C7": 'R',
        "\uFF32": 'R',
        "\u0154": 'R',
        "\u1E58": 'R',
        "\u0158": 'R',
        "\u0210": 'R',
        "\u0212": 'R',
        "\u1E5A": 'R',
        "\u1E5C": 'R',
        "\u0156": 'R',
        "\u1E5E": 'R',
        "\u024C": 'R',
        "\u2C64": 'R',
        "\uA75A": 'R',
        "\uA7A6": 'R',
        "\uA782": 'R',
        "\u24C8": 'S',
        "\uFF33": 'S',
        "\u1E9E": 'S',
        "\u015A": 'S',
        "\u1E64": 'S',
        "\u015C": 'S',
        "\u1E60": 'S',
        "\u0160": 'S',
        "\u1E66": 'S',
        "\u1E62": 'S',
        "\u1E68": 'S',
        "\u0218": 'S',
        "\u015E": 'S',
        "\u2C7E": 'S',
        "\uA7A8": 'S',
        "\uA784": 'S',
        "\u24C9": 'T',
        "\uFF34": 'T',
        "\u1E6A": 'T',
        "\u0164": 'T',
        "\u1E6C": 'T',
        "\u021A": 'T',
        "\u0162": 'T',
        "\u1E70": 'T',
        "\u1E6E": 'T',
        "\u0166": 'T',
        "\u01AC": 'T',
        "\u01AE": 'T',
        "\u023E": 'T',
        "\uA786": 'T',
        "\uA728": 'TZ',
        "\u24CA": 'U',
        "\uFF35": 'U',
        "\xD9": 'U',
        "\xDA": 'U',
        "\xDB": 'U',
        "\u0168": 'U',
        "\u1E78": 'U',
        "\u016A": 'U',
        "\u1E7A": 'U',
        "\u016C": 'U',
        "\xDC": 'U',
        "\u01DB": 'U',
        "\u01D7": 'U',
        "\u01D5": 'U',
        "\u01D9": 'U',
        "\u1EE6": 'U',
        "\u016E": 'U',
        "\u0170": 'U',
        "\u01D3": 'U',
        "\u0214": 'U',
        "\u0216": 'U',
        "\u01AF": 'U',
        "\u1EEA": 'U',
        "\u1EE8": 'U',
        "\u1EEE": 'U',
        "\u1EEC": 'U',
        "\u1EF0": 'U',
        "\u1EE4": 'U',
        "\u1E72": 'U',
        "\u0172": 'U',
        "\u1E76": 'U',
        "\u1E74": 'U',
        "\u0244": 'U',
        "\u24CB": 'V',
        "\uFF36": 'V',
        "\u1E7C": 'V',
        "\u1E7E": 'V',
        "\u01B2": 'V',
        "\uA75E": 'V',
        "\u0245": 'V',
        "\uA760": 'VY',
        "\u24CC": 'W',
        "\uFF37": 'W',
        "\u1E80": 'W',
        "\u1E82": 'W',
        "\u0174": 'W',
        "\u1E86": 'W',
        "\u1E84": 'W',
        "\u1E88": 'W',
        "\u2C72": 'W',
        "\u24CD": 'X',
        "\uFF38": 'X',
        "\u1E8A": 'X',
        "\u1E8C": 'X',
        "\u24CE": 'Y',
        "\uFF39": 'Y',
        "\u1EF2": 'Y',
        "\xDD": 'Y',
        "\u0176": 'Y',
        "\u1EF8": 'Y',
        "\u0232": 'Y',
        "\u1E8E": 'Y',
        "\u0178": 'Y',
        "\u1EF6": 'Y',
        "\u1EF4": 'Y',
        "\u01B3": 'Y',
        "\u024E": 'Y',
        "\u1EFE": 'Y',
        "\u24CF": 'Z',
        "\uFF3A": 'Z',
        "\u0179": 'Z',
        "\u1E90": 'Z',
        "\u017B": 'Z',
        "\u017D": 'Z',
        "\u1E92": 'Z',
        "\u1E94": 'Z',
        "\u01B5": 'Z',
        "\u0224": 'Z',
        "\u2C7F": 'Z',
        "\u2C6B": 'Z',
        "\uA762": 'Z',
        "\u24D0": 'a',
        "\uFF41": 'a',
        "\u1E9A": 'a',
        "\xE0": 'a',
        "\xE1": 'a',
        "\xE2": 'a',
        "\u1EA7": 'a',
        "\u1EA5": 'a',
        "\u1EAB": 'a',
        "\u1EA9": 'a',
        "\xE3": 'a',
        "\u0101": 'a',
        "\u0103": 'a',
        "\u1EB1": 'a',
        "\u1EAF": 'a',
        "\u1EB5": 'a',
        "\u1EB3": 'a',
        "\u0227": 'a',
        "\u01E1": 'a',
        "\xE4": 'a',
        "\u01DF": 'a',
        "\u1EA3": 'a',
        "\xE5": 'a',
        "\u01FB": 'a',
        "\u01CE": 'a',
        "\u0201": 'a',
        "\u0203": 'a',
        "\u1EA1": 'a',
        "\u1EAD": 'a',
        "\u1EB7": 'a',
        "\u1E01": 'a',
        "\u0105": 'a',
        "\u2C65": 'a',
        "\u0250": 'a',
        "\uA733": 'aa',
        "\xE6": 'ae',
        "\u01FD": 'ae',
        "\u01E3": 'ae',
        "\uA735": 'ao',
        "\uA737": 'au',
        "\uA739": 'av',
        "\uA73B": 'av',
        "\uA73D": 'ay',
        "\u24D1": 'b',
        "\uFF42": 'b',
        "\u1E03": 'b',
        "\u1E05": 'b',
        "\u1E07": 'b',
        "\u0180": 'b',
        "\u0183": 'b',
        "\u0253": 'b',
        "\u24D2": 'c',
        "\uFF43": 'c',
        "\u0107": 'c',
        "\u0109": 'c',
        "\u010B": 'c',
        "\u010D": 'c',
        "\xE7": 'c',
        "\u1E09": 'c',
        "\u0188": 'c',
        "\u023C": 'c',
        "\uA73F": 'c',
        "\u2184": 'c',
        "\u24D3": 'd',
        "\uFF44": 'd',
        "\u1E0B": 'd',
        "\u010F": 'd',
        "\u1E0D": 'd',
        "\u1E11": 'd',
        "\u1E13": 'd',
        "\u1E0F": 'd',
        "\u0111": 'd',
        "\u018C": 'd',
        "\u0256": 'd',
        "\u0257": 'd',
        "\uA77A": 'd',
        "\u01F3": 'dz',
        "\u01C6": 'dz',
        "\u24D4": 'e',
        "\uFF45": 'e',
        "\xE8": 'e',
        "\xE9": 'e',
        "\xEA": 'e',
        "\u1EC1": 'e',
        "\u1EBF": 'e',
        "\u1EC5": 'e',
        "\u1EC3": 'e',
        "\u1EBD": 'e',
        "\u0113": 'e',
        "\u1E15": 'e',
        "\u1E17": 'e',
        "\u0115": 'e',
        "\u0117": 'e',
        "\xEB": 'e',
        "\u1EBB": 'e',
        "\u011B": 'e',
        "\u0205": 'e',
        "\u0207": 'e',
        "\u1EB9": 'e',
        "\u1EC7": 'e',
        "\u0229": 'e',
        "\u1E1D": 'e',
        "\u0119": 'e',
        "\u1E19": 'e',
        "\u1E1B": 'e',
        "\u0247": 'e',
        "\u025B": 'e',
        "\u01DD": 'e',
        "\u24D5": 'f',
        "\uFF46": 'f',
        "\u1E1F": 'f',
        "\u0192": 'f',
        "\uA77C": 'f',
        "\u24D6": 'g',
        "\uFF47": 'g',
        "\u01F5": 'g',
        "\u011D": 'g',
        "\u1E21": 'g',
        "\u011F": 'g',
        "\u0121": 'g',
        "\u01E7": 'g',
        "\u0123": 'g',
        "\u01E5": 'g',
        "\u0260": 'g',
        "\uA7A1": 'g',
        "\u1D79": 'g',
        "\uA77F": 'g',
        "\u24D7": 'h',
        "\uFF48": 'h',
        "\u0125": 'h',
        "\u1E23": 'h',
        "\u1E27": 'h',
        "\u021F": 'h',
        "\u1E25": 'h',
        "\u1E29": 'h',
        "\u1E2B": 'h',
        "\u1E96": 'h',
        "\u0127": 'h',
        "\u2C68": 'h',
        "\u2C76": 'h',
        "\u0265": 'h',
        "\u0195": 'hv',
        "\u24D8": 'i',
        "\uFF49": 'i',
        "\xEC": 'i',
        "\xED": 'i',
        "\xEE": 'i',
        "\u0129": 'i',
        "\u012B": 'i',
        "\u012D": 'i',
        "\xEF": 'i',
        "\u1E2F": 'i',
        "\u1EC9": 'i',
        "\u01D0": 'i',
        "\u0209": 'i',
        "\u020B": 'i',
        "\u1ECB": 'i',
        "\u012F": 'i',
        "\u1E2D": 'i',
        "\u0268": 'i',
        "\u0131": 'i',
        "\u24D9": 'j',
        "\uFF4A": 'j',
        "\u0135": 'j',
        "\u01F0": 'j',
        "\u0249": 'j',
        "\u24DA": 'k',
        "\uFF4B": 'k',
        "\u1E31": 'k',
        "\u01E9": 'k',
        "\u1E33": 'k',
        "\u0137": 'k',
        "\u1E35": 'k',
        "\u0199": 'k',
        "\u2C6A": 'k',
        "\uA741": 'k',
        "\uA743": 'k',
        "\uA745": 'k',
        "\uA7A3": 'k',
        "\u24DB": 'l',
        "\uFF4C": 'l',
        "\u0140": 'l',
        "\u013A": 'l',
        "\u013E": 'l',
        "\u1E37": 'l',
        "\u1E39": 'l',
        "\u013C": 'l',
        "\u1E3D": 'l',
        "\u1E3B": 'l',
        "\u017F": 'l',
        "\u0142": 'l',
        "\u019A": 'l',
        "\u026B": 'l',
        "\u2C61": 'l',
        "\uA749": 'l',
        "\uA781": 'l',
        "\uA747": 'l',
        "\u01C9": 'lj',
        "\u24DC": 'm',
        "\uFF4D": 'm',
        "\u1E3F": 'm',
        "\u1E41": 'm',
        "\u1E43": 'm',
        "\u0271": 'm',
        "\u026F": 'm',
        "\u24DD": 'n',
        "\uFF4E": 'n',
        "\u01F9": 'n',
        "\u0144": 'n',
        "\xF1": 'n',
        "\u1E45": 'n',
        "\u0148": 'n',
        "\u1E47": 'n',
        "\u0146": 'n',
        "\u1E4B": 'n',
        "\u1E49": 'n',
        "\u019E": 'n',
        "\u0272": 'n',
        "\u0149": 'n',
        "\uA791": 'n',
        "\uA7A5": 'n',
        "\u01CC": 'nj',
        "\u24DE": 'o',
        "\uFF4F": 'o',
        "\xF2": 'o',
        "\xF3": 'o',
        "\xF4": 'o',
        "\u1ED3": 'o',
        "\u1ED1": 'o',
        "\u1ED7": 'o',
        "\u1ED5": 'o',
        "\xF5": 'o',
        "\u1E4D": 'o',
        "\u022D": 'o',
        "\u1E4F": 'o',
        "\u014D": 'o',
        "\u1E51": 'o',
        "\u1E53": 'o',
        "\u014F": 'o',
        "\u022F": 'o',
        "\u0231": 'o',
        "\xF6": 'o',
        "\u022B": 'o',
        "\u1ECF": 'o',
        "\u0151": 'o',
        "\u01D2": 'o',
        "\u020D": 'o',
        "\u020F": 'o',
        "\u01A1": 'o',
        "\u1EDD": 'o',
        "\u1EDB": 'o',
        "\u1EE1": 'o',
        "\u1EDF": 'o',
        "\u1EE3": 'o',
        "\u1ECD": 'o',
        "\u1ED9": 'o',
        "\u01EB": 'o',
        "\u01ED": 'o',
        "\xF8": 'o',
        "\u01FF": 'o',
        "\u0254": 'o',
        "\uA74B": 'o',
        "\uA74D": 'o',
        "\u0275": 'o',
        "\u0153": 'oe',
        "\u01A3": 'oi',
        "\u0223": 'ou',
        "\uA74F": 'oo',
        "\u24DF": 'p',
        "\uFF50": 'p',
        "\u1E55": 'p',
        "\u1E57": 'p',
        "\u01A5": 'p',
        "\u1D7D": 'p',
        "\uA751": 'p',
        "\uA753": 'p',
        "\uA755": 'p',
        "\u24E0": 'q',
        "\uFF51": 'q',
        "\u024B": 'q',
        "\uA757": 'q',
        "\uA759": 'q',
        "\u24E1": 'r',
        "\uFF52": 'r',
        "\u0155": 'r',
        "\u1E59": 'r',
        "\u0159": 'r',
        "\u0211": 'r',
        "\u0213": 'r',
        "\u1E5B": 'r',
        "\u1E5D": 'r',
        "\u0157": 'r',
        "\u1E5F": 'r',
        "\u024D": 'r',
        "\u027D": 'r',
        "\uA75B": 'r',
        "\uA7A7": 'r',
        "\uA783": 'r',
        "\u24E2": 's',
        "\uFF53": 's',
        "\xDF": 's',
        "\u015B": 's',
        "\u1E65": 's',
        "\u015D": 's',
        "\u1E61": 's',
        "\u0161": 's',
        "\u1E67": 's',
        "\u1E63": 's',
        "\u1E69": 's',
        "\u0219": 's',
        "\u015F": 's',
        "\u023F": 's',
        "\uA7A9": 's',
        "\uA785": 's',
        "\u1E9B": 's',
        "\u24E3": 't',
        "\uFF54": 't',
        "\u1E6B": 't',
        "\u1E97": 't',
        "\u0165": 't',
        "\u1E6D": 't',
        "\u021B": 't',
        "\u0163": 't',
        "\u1E71": 't',
        "\u1E6F": 't',
        "\u0167": 't',
        "\u01AD": 't',
        "\u0288": 't',
        "\u2C66": 't',
        "\uA787": 't',
        "\uA729": 'tz',
        "\u24E4": 'u',
        "\uFF55": 'u',
        "\xF9": 'u',
        "\xFA": 'u',
        "\xFB": 'u',
        "\u0169": 'u',
        "\u1E79": 'u',
        "\u016B": 'u',
        "\u1E7B": 'u',
        "\u016D": 'u',
        "\xFC": 'u',
        "\u01DC": 'u',
        "\u01D8": 'u',
        "\u01D6": 'u',
        "\u01DA": 'u',
        "\u1EE7": 'u',
        "\u016F": 'u',
        "\u0171": 'u',
        "\u01D4": 'u',
        "\u0215": 'u',
        "\u0217": 'u',
        "\u01B0": 'u',
        "\u1EEB": 'u',
        "\u1EE9": 'u',
        "\u1EEF": 'u',
        "\u1EED": 'u',
        "\u1EF1": 'u',
        "\u1EE5": 'u',
        "\u1E73": 'u',
        "\u0173": 'u',
        "\u1E77": 'u',
        "\u1E75": 'u',
        "\u0289": 'u',
        "\u24E5": 'v',
        "\uFF56": 'v',
        "\u1E7D": 'v',
        "\u1E7F": 'v',
        "\u028B": 'v',
        "\uA75F": 'v',
        "\u028C": 'v',
        "\uA761": 'vy',
        "\u24E6": 'w',
        "\uFF57": 'w',
        "\u1E81": 'w',
        "\u1E83": 'w',
        "\u0175": 'w',
        "\u1E87": 'w',
        "\u1E85": 'w',
        "\u1E98": 'w',
        "\u1E89": 'w',
        "\u2C73": 'w',
        "\u24E7": 'x',
        "\uFF58": 'x',
        "\u1E8B": 'x',
        "\u1E8D": 'x',
        "\u24E8": 'y',
        "\uFF59": 'y',
        "\u1EF3": 'y',
        "\xFD": 'y',
        "\u0177": 'y',
        "\u1EF9": 'y',
        "\u0233": 'y',
        "\u1E8F": 'y',
        "\xFF": 'y',
        "\u1EF7": 'y',
        "\u1E99": 'y',
        "\u1EF5": 'y',
        "\u01B4": 'y',
        "\u024F": 'y',
        "\u1EFF": 'y',
        "\u24E9": 'z',
        "\uFF5A": 'z',
        "\u017A": 'z',
        "\u1E91": 'z',
        "\u017C": 'z',
        "\u017E": 'z',
        "\u1E93": 'z',
        "\u1E95": 'z',
        "\u01B6": 'z',
        "\u0225": 'z',
        "\u0240": 'z',
        "\u2C6C": 'z',
        "\uA763": 'z',
        "\u0386": "\u0391",
        "\u0388": "\u0395",
        "\u0389": "\u0397",
        "\u038A": "\u0399",
        "\u03AA": "\u0399",
        "\u038C": "\u039F",
        "\u038E": "\u03A5",
        "\u03AB": "\u03A5",
        "\u038F": "\u03A9",
        "\u03AC": "\u03B1",
        "\u03AD": "\u03B5",
        "\u03AE": "\u03B7",
        "\u03AF": "\u03B9",
        "\u03CA": "\u03B9",
        "\u0390": "\u03B9",
        "\u03CC": "\u03BF",
        "\u03CD": "\u03C5",
        "\u03CB": "\u03C5",
        "\u03B0": "\u03C5",
        "\u03CE": "\u03C9",
        "\u03C2": "\u03C3",
        "\u2019": '\''
      };
      return diacritics;
    });
    S2.define('select2/data/base', ['../utils'], function (Utils) {
      function BaseAdapter($element, options) {
        BaseAdapter.__super__.constructor.call(this);
      }
      Utils.Extend(BaseAdapter, Utils.Observable);
      BaseAdapter.prototype.current = function (callback) {
        throw new Error('The `current` method must be defined in child classes.');
      };
      BaseAdapter.prototype.query = function (params, callback) {
        throw new Error('The `query` method must be defined in child classes.');
      };
      BaseAdapter.prototype.bind = function (container, $container) {
        // Can be implemented in subclasses
      };
      BaseAdapter.prototype.destroy = function () {
        // Can be implemented in subclasses
      };
      BaseAdapter.prototype.generateResultId = function (container, data) {
        var id = container.id + '-result-';
        id += Utils.generateChars(4);
        if (data.id != null) {
          id += '-' + data.id.toString();
        } else {
          id += '-' + Utils.generateChars(4);
        }
        return id;
      };
      return BaseAdapter;
    });
    S2.define('select2/data/select', ['./base', '../utils', 'jquery'], function (BaseAdapter, Utils, $) {
      function SelectAdapter($element, options) {
        this.$element = $element;
        this.options = options;
        SelectAdapter.__super__.constructor.call(this);
      }
      Utils.Extend(SelectAdapter, BaseAdapter);
      SelectAdapter.prototype.current = function (callback) {
        var self = this;
        var data = Array.prototype.map.call(this.$element[0].querySelectorAll(':checked'), function (selectedElement) {
          return self.item($(selectedElement));
        });
        callback(data);
      };
      SelectAdapter.prototype.select = function (data) {
        var self = this;
        data.selected = true;

        // If data.element is a DOM node, use it instead
        if (data.element != null && data.element.tagName.toLowerCase() === 'option') {
          data.element.selected = true;
          this.$element.trigger('input').trigger('change');
          return;
        }
        if (this.$element.prop('multiple')) {
          this.current(function (currentData) {
            var val = [];
            data = [data];
            data.push.apply(data, currentData);
            for (var d = 0; d < data.length; d++) {
              var id = data[d].id;
              if (val.indexOf(id) === -1) {
                val.push(id);
              }
            }
            self.$element.val(val);
            self.$element.trigger('input').trigger('change');
          });
        } else {
          var val = data.id;
          this.$element.val(val);
          this.$element.trigger('input').trigger('change');
        }
      };
      SelectAdapter.prototype.unselect = function (data) {
        var self = this;
        if (!this.$element.prop('multiple')) {
          return;
        }
        data.selected = false;
        if (data.element != null && data.element.tagName.toLowerCase() === 'option') {
          data.element.selected = false;
          this.$element.trigger('input').trigger('change');
          return;
        }
        this.current(function (currentData) {
          var val = [];
          for (var d = 0; d < currentData.length; d++) {
            var id = currentData[d].id;
            if (id !== data.id && val.indexOf(id) === -1) {
              val.push(id);
            }
          }
          self.$element.val(val);
          self.$element.trigger('input').trigger('change');
        });
      };
      SelectAdapter.prototype.bind = function (container, $container) {
        var self = this;
        this.container = container;
        container.on('select', function (params) {
          self.select(params.data);
        });
        container.on('unselect', function (params) {
          self.unselect(params.data);
        });
      };
      SelectAdapter.prototype.destroy = function () {
        // Remove anything added to child elements
        this.$element.find('*').each(function () {
          // Remove any custom data set by Select2
          Utils.RemoveData(this);
        });
      };
      SelectAdapter.prototype.query = function (params, callback) {
        var data = [];
        var self = this;
        var $options = this.$element.children();
        $options.each(function () {
          if (this.tagName.toLowerCase() !== 'option' && this.tagName.toLowerCase() !== 'optgroup') {
            return;
          }
          var $option = $(this);
          var option = self.item($option);
          var matches = self.matches(params, option);
          if (matches !== null) {
            data.push(matches);
          }
        });
        callback({
          results: data
        });
      };
      SelectAdapter.prototype.addOptions = function ($options) {
        this.$element.append($options);
      };
      SelectAdapter.prototype.option = function (data) {
        var option;
        if (data.children) {
          option = document.createElement('optgroup');
          option.label = data.text;
        } else {
          option = document.createElement('option');
          if (option.textContent !== undefined) {
            option.textContent = data.text;
          } else {
            option.innerText = data.text;
          }
        }
        if (data.id !== undefined) {
          option.value = data.id;
        }
        if (data.disabled) {
          option.disabled = true;
        }
        if (data.selected) {
          option.selected = true;
        }
        if (data.title) {
          option.title = data.title;
        }
        var normalizedData = this._normalizeItem(data);
        normalizedData.element = option;

        // Override the option's data with the combined data
        Utils.StoreData(option, 'data', normalizedData);
        return $(option);
      };
      SelectAdapter.prototype.item = function ($option) {
        var data = {};
        data = Utils.GetData($option[0], 'data');
        if (data != null) {
          return data;
        }
        var option = $option[0];
        if (option.tagName.toLowerCase() === 'option') {
          data = {
            id: $option.val(),
            text: $option.text(),
            disabled: $option.prop('disabled'),
            selected: $option.prop('selected'),
            title: $option.prop('title')
          };
        } else if (option.tagName.toLowerCase() === 'optgroup') {
          data = {
            text: $option.prop('label'),
            children: [],
            title: $option.prop('title')
          };
          var $children = $option.children('option');
          var children = [];
          for (var c = 0; c < $children.length; c++) {
            var $child = $($children[c]);
            var child = this.item($child);
            children.push(child);
          }
          data.children = children;
        }
        data = this._normalizeItem(data);
        data.element = $option[0];
        Utils.StoreData($option[0], 'data', data);
        return data;
      };
      SelectAdapter.prototype._normalizeItem = function (item) {
        if (item !== Object(item)) {
          item = {
            id: item,
            text: item
          };
        }
        item = $.extend({}, {
          text: ''
        }, item);
        var defaults = {
          selected: false,
          disabled: false
        };
        if (item.id != null) {
          item.id = item.id.toString();
        }
        if (item.text != null) {
          item.text = item.text.toString();
        }
        if (item._resultId == null && item.id && this.container != null) {
          item._resultId = this.generateResultId(this.container, item);
        }
        return $.extend({}, defaults, item);
      };
      SelectAdapter.prototype.matches = function (params, data) {
        var matcher = this.options.get('matcher');
        return matcher(params, data);
      };
      return SelectAdapter;
    });
    S2.define('select2/data/array', ['./select', '../utils', 'jquery'], function (SelectAdapter, Utils, $) {
      function ArrayAdapter($element, options) {
        this._dataToConvert = options.get('data') || [];
        ArrayAdapter.__super__.constructor.call(this, $element, options);
      }
      Utils.Extend(ArrayAdapter, SelectAdapter);
      ArrayAdapter.prototype.bind = function (container, $container) {
        ArrayAdapter.__super__.bind.call(this, container, $container);
        this.addOptions(this.convertToOptions(this._dataToConvert));
      };
      ArrayAdapter.prototype.select = function (data) {
        var $option = this.$element.find('option').filter(function (i, elm) {
          return elm.value == data.id.toString();
        });
        if ($option.length === 0) {
          $option = this.option(data);
          this.addOptions($option);
        }
        ArrayAdapter.__super__.select.call(this, data);
      };
      ArrayAdapter.prototype.convertToOptions = function (data) {
        var self = this;
        var $existing = this.$element.find('option');
        var existingIds = $existing.map(function () {
          return self.item($(this)).id;
        }).get();
        var $options = [];

        // Filter out all items except for the one passed in the argument
        function onlyItem(item) {
          return function () {
            return $(this).val() == item.id;
          };
        }
        for (var d = 0; d < data.length; d++) {
          var item = this._normalizeItem(data[d]);

          // Skip items which were pre-loaded, only merge the data
          if (existingIds.indexOf(item.id) >= 0) {
            var $existingOption = $existing.filter(onlyItem(item));
            var existingData = this.item($existingOption);
            var newData = $.extend(true, {}, item, existingData);
            var $newOption = this.option(newData);
            $existingOption.replaceWith($newOption);
            continue;
          }
          var $option = this.option(item);
          if (item.children) {
            var $children = this.convertToOptions(item.children);
            $option.append($children);
          }
          $options.push($option);
        }
        return $options;
      };
      return ArrayAdapter;
    });
    S2.define('select2/data/ajax', ['./array', '../utils', 'jquery'], function (ArrayAdapter, Utils, $) {
      function AjaxAdapter($element, options) {
        this.ajaxOptions = this._applyDefaults(options.get('ajax'));
        if (this.ajaxOptions.processResults != null) {
          this.processResults = this.ajaxOptions.processResults;
        }
        AjaxAdapter.__super__.constructor.call(this, $element, options);
      }
      Utils.Extend(AjaxAdapter, ArrayAdapter);
      AjaxAdapter.prototype._applyDefaults = function (options) {
        var defaults = {
          data: function data(params) {
            return $.extend({}, params, {
              q: params.term
            });
          },
          transport: function transport(params, success, failure) {
            var $request = $.ajax(params);
            $request.then(success);
            $request.fail(failure);
            return $request;
          }
        };
        return $.extend({}, defaults, options, true);
      };
      AjaxAdapter.prototype.processResults = function (results) {
        return results;
      };
      AjaxAdapter.prototype.query = function (params, callback) {
        var matches = [];
        var self = this;
        if (this._request != null) {
          // JSONP requests cannot always be aborted
          if ($.isFunction(this._request.abort)) {
            this._request.abort();
          }
          this._request = null;
        }
        var options = $.extend({
          type: 'GET'
        }, this.ajaxOptions);
        if (typeof options.url === 'function') {
          options.url = options.url.call(this.$element, params);
        }
        if (typeof options.data === 'function') {
          options.data = options.data.call(this.$element, params);
        }
        function request() {
          var $request = options.transport(options, function (data) {
            var results = self.processResults(data, params);
            if (self.options.get('debug') && window.console && console.error) {
              // Check to make sure that the response included a `results` key.
              if (!results || !results.results || !Array.isArray(results.results)) {
                console.error('Select2: The AJAX results did not return an array in the ' + '`results` key of the response.');
              }
            }
            callback(results);
          }, function () {
            // Attempt to detect if a request was aborted
            // Only works if the transport exposes a status property
            if ('status' in $request && ($request.status === 0 || $request.status === '0')) {
              return;
            }
            self.trigger('results:message', {
              message: 'errorLoading'
            });
          });
          self._request = $request;
        }
        if (this.ajaxOptions.delay && params.term != null) {
          if (this._queryTimeout) {
            window.clearTimeout(this._queryTimeout);
          }
          this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
        } else {
          request();
        }
      };
      return AjaxAdapter;
    });
    S2.define('select2/data/tags', ['jquery'], function ($) {
      function Tags(decorated, $element, options) {
        var tags = options.get('tags');
        var createTag = options.get('createTag');
        if (createTag !== undefined) {
          this.createTag = createTag;
        }
        var insertTag = options.get('insertTag');
        if (insertTag !== undefined) {
          this.insertTag = insertTag;
        }
        decorated.call(this, $element, options);
        if (Array.isArray(tags)) {
          for (var t = 0; t < tags.length; t++) {
            var tag = tags[t];
            var item = this._normalizeItem(tag);
            var $option = this.option(item);
            this.$element.append($option);
          }
        }
      }
      Tags.prototype.query = function (decorated, params, callback) {
        var self = this;
        this._removeOldTags();
        if (params.term == null || params.page != null) {
          decorated.call(this, params, callback);
          return;
        }
        function wrapper(obj, child) {
          var data = obj.results;
          for (var i = 0; i < data.length; i++) {
            var option = data[i];
            var checkChildren = option.children != null && !wrapper({
              results: option.children
            }, true);
            var optionText = (option.text || '').toUpperCase();
            var paramsTerm = (params.term || '').toUpperCase();
            var checkText = optionText === paramsTerm;
            if (checkText || checkChildren) {
              if (child) {
                return false;
              }
              obj.data = data;
              callback(obj);
              return;
            }
          }
          if (child) {
            return true;
          }
          var tag = self.createTag(params);
          if (tag != null) {
            var $option = self.option(tag);
            $option.attr('data-select2-tag', true);
            self.addOptions([$option]);
            self.insertTag(data, tag);
          }
          obj.results = data;
          callback(obj);
        }
        decorated.call(this, params, wrapper);
      };
      Tags.prototype.createTag = function (decorated, params) {
        if (params.term == null) {
          return null;
        }
        var term = params.term.trim();
        if (term === '') {
          return null;
        }
        return {
          id: term,
          text: term
        };
      };
      Tags.prototype.insertTag = function (_, data, tag) {
        data.unshift(tag);
      };
      Tags.prototype._removeOldTags = function (_) {
        var $options = this.$element.find('option[data-select2-tag]');
        $options.each(function () {
          if (this.selected) {
            return;
          }
          $(this).remove();
        });
      };
      return Tags;
    });
    S2.define('select2/data/tokenizer', ['jquery'], function ($) {
      function Tokenizer(decorated, $element, options) {
        var tokenizer = options.get('tokenizer');
        if (tokenizer !== undefined) {
          this.tokenizer = tokenizer;
        }
        decorated.call(this, $element, options);
      }
      Tokenizer.prototype.bind = function (decorated, container, $container) {
        decorated.call(this, container, $container);
        this.$search = container.dropdown.$search || container.selection.$search || $container.find('.select2-search__field');
      };
      Tokenizer.prototype.query = function (decorated, params, callback) {
        var self = this;
        function createAndSelect(data) {
          // Normalize the data object so we can use it for checks
          var item = self._normalizeItem(data);

          // Check if the data object already exists as a tag
          // Select it if it doesn't
          var $existingOptions = self.$element.find('option').filter(function () {
            return $(this).val() === item.id;
          });

          // If an existing option wasn't found for it, create the option
          if (!$existingOptions.length) {
            var $option = self.option(item);
            $option.attr('data-select2-tag', true);
            self._removeOldTags();
            self.addOptions([$option]);
          }

          // Select the item, now that we know there is an option for it
          select(item);
        }
        function select(data) {
          self.trigger('select', {
            data: data
          });
        }
        params.term = params.term || '';
        var tokenData = this.tokenizer(params, this.options, createAndSelect);
        if (tokenData.term !== params.term) {
          // Replace the search term if we have the search box
          if (this.$search.length) {
            this.$search.val(tokenData.term);
            this.$search.trigger('focus');
          }
          params.term = tokenData.term;
        }
        decorated.call(this, params, callback);
      };
      Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
        var separators = options.get('tokenSeparators') || [];
        var term = params.term;
        var i = 0;
        var createTag = this.createTag || function (params) {
          return {
            id: params.term,
            text: params.term
          };
        };
        while (i < term.length) {
          var termChar = term[i];
          if (separators.indexOf(termChar) === -1) {
            i++;
            continue;
          }
          var part = term.substr(0, i);
          var partParams = $.extend({}, params, {
            term: part
          });
          var data = createTag(partParams);
          if (data == null) {
            i++;
            continue;
          }
          callback(data);

          // Reset the term to not include the tokenized portion
          term = term.substr(i + 1) || '';
          i = 0;
        }
        return {
          term: term
        };
      };
      return Tokenizer;
    });
    S2.define('select2/data/minimumInputLength', [], function () {
      function MinimumInputLength(decorated, $e, options) {
        this.minimumInputLength = options.get('minimumInputLength');
        decorated.call(this, $e, options);
      }
      MinimumInputLength.prototype.query = function (decorated, params, callback) {
        params.term = params.term || '';
        if (params.term.length < this.minimumInputLength) {
          this.trigger('results:message', {
            message: 'inputTooShort',
            args: {
              minimum: this.minimumInputLength,
              input: params.term,
              params: params
            }
          });
          return;
        }
        decorated.call(this, params, callback);
      };
      return MinimumInputLength;
    });
    S2.define('select2/data/maximumInputLength', [], function () {
      function MaximumInputLength(decorated, $e, options) {
        this.maximumInputLength = options.get('maximumInputLength');
        decorated.call(this, $e, options);
      }
      MaximumInputLength.prototype.query = function (decorated, params, callback) {
        params.term = params.term || '';
        if (this.maximumInputLength > 0 && params.term.length > this.maximumInputLength) {
          this.trigger('results:message', {
            message: 'inputTooLong',
            args: {
              maximum: this.maximumInputLength,
              input: params.term,
              params: params
            }
          });
          return;
        }
        decorated.call(this, params, callback);
      };
      return MaximumInputLength;
    });
    S2.define('select2/data/maximumSelectionLength', [], function () {
      function MaximumSelectionLength(decorated, $e, options) {
        this.maximumSelectionLength = options.get('maximumSelectionLength');
        decorated.call(this, $e, options);
      }
      MaximumSelectionLength.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        container.on('select', function () {
          self._checkIfMaximumSelected();
        });
      };
      MaximumSelectionLength.prototype.query = function (decorated, params, callback) {
        var self = this;
        this._checkIfMaximumSelected(function () {
          decorated.call(self, params, callback);
        });
      };
      MaximumSelectionLength.prototype._checkIfMaximumSelected = function (_, successCallback) {
        var self = this;
        this.current(function (currentData) {
          var count = currentData != null ? currentData.length : 0;
          if (self.maximumSelectionLength > 0 && count >= self.maximumSelectionLength) {
            self.trigger('results:message', {
              message: 'maximumSelected',
              args: {
                maximum: self.maximumSelectionLength
              }
            });
            return;
          }
          if (successCallback) {
            successCallback();
          }
        });
      };
      return MaximumSelectionLength;
    });
    S2.define('select2/dropdown', ['jquery', './utils'], function ($, Utils) {
      function Dropdown($element, options) {
        this.$element = $element;
        this.options = options;
        Dropdown.__super__.constructor.call(this);
      }
      Utils.Extend(Dropdown, Utils.Observable);
      Dropdown.prototype.render = function () {
        var $dropdown = $('<span class="select2-dropdown">' + '<span class="select2-results"></span>' + '</span>');
        $dropdown.attr('dir', this.options.get('dir'));
        this.$dropdown = $dropdown;
        return $dropdown;
      };
      Dropdown.prototype.bind = function () {
        // Should be implemented in subclasses
      };
      Dropdown.prototype.position = function ($dropdown, $container) {
        // Should be implemented in subclasses
      };
      Dropdown.prototype.destroy = function () {
        // Remove the dropdown from the DOM
        this.$dropdown.remove();
      };
      return Dropdown;
    });
    S2.define('select2/dropdown/search', ['jquery'], function ($) {
      function Search() {}
      Search.prototype.render = function (decorated) {
        var $rendered = decorated.call(this);
        var $search = $('<span class="select2-search select2-search--dropdown">' + '<input class="select2-search__field tt" type="search" tabindex="-1"' + ' autocorrect="off" autocapitalize="none"' + ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' + '</span>');
        this.$searchContainer = $search;
        this.$search = $search.find('input');
        this.$search.prop('autocomplete', this.options.get('autocomplete'));
        $rendered.prepend($search);
        return $rendered;
      };
      Search.prototype.bind = function (decorated, container, $container) {
        var self = this;
        var resultsId = container.id + '-results';
        decorated.call(this, container, $container);
        this.$search.on('keydown', function (evt) {
          self.trigger('keypress', evt);
          self._keyUpPrevented = evt.isDefaultPrevented();
        });

        // Workaround for browsers which do not support the `input` event
        // This will prevent double-triggering of events for browsers which support
        // both the `keyup` and `input` events.
        this.$search.on('input', function (evt) {
          // Unbind the duplicated `keyup` event
          $(this).off('keyup');
        });
        this.$search.on('keyup input', function (evt) {
          self.handleSearch(evt);
        });
        container.on('open', function () {
          self.$search.attr('tabindex', 0);
          self.$search.attr('aria-controls', resultsId);
          self.$search.trigger('focus');
          window.setTimeout(function () {
            self.$search.trigger('focus');
          }, 0);
        });
        container.on('close', function () {
          self.$search.attr('tabindex', -1);
          self.$search.removeAttr('aria-controls');
          self.$search.removeAttr('aria-activedescendant');
          self.$search.val('');
          self.$search.trigger('blur');
        });
        container.on('focus', function () {
          if (!container.isOpen()) {
            self.$search.trigger('focus');
          }
        });
        container.on('results:all', function (params) {
          if (params.query.term == null || params.query.term === '') {
            var showSearch = self.showSearch(params);
            if (showSearch) {
              //self.$searchContainer[0].classList.remove('select2-search--hide');
              self.$searchContainer[0].classList.remove('select2-search--hide');
            } else {
              self.$searchContainer[0].classList.remove('select2-search--hide');
            }
          }
        });
        container.on('results:focus', function (params) {
          if (params.data._resultId) {
            self.$search.attr('aria-activedescendant', params.data._resultId);
          } else {
            self.$search.removeAttr('aria-activedescendant');
          }
        });
      };
      Search.prototype.handleSearch = function (evt) {
        if (!this._keyUpPrevented) {
          var input = this.$search.val();
          this.trigger('query', {
            term: input
          });
        }
        this._keyUpPrevented = false;
      };
      Search.prototype.showSearch = function (_, params) {
        return true;
      };
      return Search;
    });
    S2.define('select2/dropdown/hidePlaceholder', [], function () {
      function HidePlaceholder(decorated, $element, options, dataAdapter) {
        this.placeholder = this.normalizePlaceholder(options.get('placeholder'));
        decorated.call(this, $element, options, dataAdapter);
      }
      HidePlaceholder.prototype.append = function (decorated, data) {
        data.results = this.removePlaceholder(data.results);
        decorated.call(this, data);
      };
      HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
        if (typeof placeholder === 'string') {
          placeholder = {
            id: '',
            text: placeholder
          };
        }
        return placeholder;
      };
      HidePlaceholder.prototype.removePlaceholder = function (_, data) {
        var modifiedData = data.slice(0);
        for (var d = data.length - 1; d >= 0; d--) {
          var item = data[d];
          if (this.placeholder.id === item.id) {
            modifiedData.splice(d, 1);
          }
        }
        return modifiedData;
      };
      return HidePlaceholder;
    });
    S2.define('select2/dropdown/infiniteScroll', ['jquery'], function ($) {
      function InfiniteScroll(decorated, $element, options, dataAdapter) {
        this.lastParams = {};
        decorated.call(this, $element, options, dataAdapter);
        this.$loadingMore = this.createLoadingMore();
        this.loading = false;
      }
      InfiniteScroll.prototype.append = function (decorated, data) {
        this.$loadingMore.remove();
        this.loading = false;
        decorated.call(this, data);
        if (this.showLoadingMore(data)) {
          this.$results.append(this.$loadingMore);
          this.loadMoreIfNeeded();
        }
      };
      InfiniteScroll.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        container.on('query', function (params) {
          self.lastParams = params;
          self.loading = true;
        });
        container.on('query:append', function (params) {
          self.lastParams = params;
          self.loading = true;
        });
        this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
      };
      InfiniteScroll.prototype.loadMoreIfNeeded = function () {
        var isLoadMoreVisible = $.contains(document.documentElement, this.$loadingMore[0]);
        if (this.loading || !isLoadMoreVisible) {
          return;
        }
        var currentOffset = this.$results.offset().top + this.$results.outerHeight(false);
        var loadingMoreOffset = this.$loadingMore.offset().top + this.$loadingMore.outerHeight(false);
        if (currentOffset + 50 >= loadingMoreOffset) {
          this.loadMore();
        }
      };
      InfiniteScroll.prototype.loadMore = function () {
        this.loading = true;
        var params = $.extend({}, {
          page: 1
        }, this.lastParams);
        params.page++;
        this.trigger('query:append', params);
      };
      InfiniteScroll.prototype.showLoadingMore = function (_, data) {
        return data.pagination && data.pagination.more;
      };
      InfiniteScroll.prototype.createLoadingMore = function () {
        var $option = $('<li ' + 'class="select2-results__option select2-results__option--load-more"' + 'role="option" aria-disabled="true"></li>');
        var message = this.options.get('translations').get('loadingMore');
        $option.html(message(this.lastParams));
        return $option;
      };
      return InfiniteScroll;
    });
    S2.define('select2/dropdown/attachBody', ['jquery', '../utils'], function ($, Utils) {
      function AttachBody(decorated, $element, options) {
        this.$dropdownParent = $(options.get('dropdownParent') || document.body);
        decorated.call(this, $element, options);
      }
      AttachBody.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        container.on('open', function () {
          self._showDropdown();
          self._attachPositioningHandler(container);

          // Must bind after the results handlers to ensure correct sizing
          self._bindContainerResultHandlers(container);
        });
        container.on('close', function () {
          self._hideDropdown();
          self._detachPositioningHandler(container);
        });
        this.$dropdownContainer.on('mousedown', function (evt) {
          evt.stopPropagation();
        });
      };
      AttachBody.prototype.destroy = function (decorated) {
        decorated.call(this);
        this.$dropdownContainer.remove();
      };
      AttachBody.prototype.position = function (decorated, $dropdown, $container) {
        // Clone all of the container classes
        $dropdown.attr('class', $container.attr('class'));
        $dropdown[0].classList.remove('select2');
        $dropdown[0].classList.add('select2-container--open');
        $dropdown.css({
          position: 'absolute',
          top: -999999
        });
        this.$container = $container;
      };
      AttachBody.prototype.render = function (decorated) {
        var $container = $('<span></span>');
        var $dropdown = decorated.call(this);
        $container.append($dropdown);
        this.$dropdownContainer = $container;
        return $container;
      };
      AttachBody.prototype._hideDropdown = function (decorated) {
        this.$dropdownContainer.detach();
      };
      AttachBody.prototype._bindContainerResultHandlers = function (decorated, container) {
        // These should only be bound once
        if (this._containerResultsHandlersBound) {
          return;
        }
        var self = this;
        container.on('results:all', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });
        container.on('results:append', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });
        container.on('results:message', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });
        container.on('select', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });
        container.on('unselect', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });
        this._containerResultsHandlersBound = true;
      };
      AttachBody.prototype._attachPositioningHandler = function (decorated, container) {
        var self = this;
        var scrollEvent = 'scroll.select2.' + container.id;
        var resizeEvent = 'resize.select2.' + container.id;
        var orientationEvent = 'orientationchange.select2.' + container.id;
        var $watchers = this.$container.parents().filter(Utils.hasScroll);
        $watchers.each(function () {
          Utils.StoreData(this, 'select2-scroll-position', {
            x: $(this).scrollLeft(),
            y: $(this).scrollTop()
          });
        });
        $watchers.on(scrollEvent, function (ev) {
          var position = Utils.GetData(this, 'select2-scroll-position');
          $(this).scrollTop(position.y);
        });
        $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent, function (e) {
          self._positionDropdown();
          self._resizeDropdown();
        });
      };
      AttachBody.prototype._detachPositioningHandler = function (decorated, container) {
        var scrollEvent = 'scroll.select2.' + container.id;
        var resizeEvent = 'resize.select2.' + container.id;
        var orientationEvent = 'orientationchange.select2.' + container.id;
        var $watchers = this.$container.parents().filter(Utils.hasScroll);
        $watchers.off(scrollEvent);
        $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
      };
      AttachBody.prototype._positionDropdown = function () {
        var $window = $(window);
        var isCurrentlyAbove = this.$dropdown[0].classList.contains('select2-dropdown--above');
        var isCurrentlyBelow = this.$dropdown[0].classList.contains('select2-dropdown--below');
        var newDirection = null;
        var offset = this.$container.offset();
        offset.bottom = offset.top + this.$container.outerHeight(false);
        var container = {
          height: this.$container.outerHeight(false)
        };
        container.top = offset.top;
        container.bottom = offset.top + container.height;
        var dropdown = {
          height: this.$dropdown.outerHeight(false)
        };
        var viewport = {
          top: $window.scrollTop(),
          bottom: $window.scrollTop() + $window.height()
        };
        var enoughRoomAbove = false;
        var enoughRoomBelow = true;
        var css = {
          left: offset.left,
          top: container.bottom
        };

        // Determine what the parent element is to use for calculating the offset
        var $offsetParent = this.$dropdownParent;

        // For statically positioned elements, we need to get the element
        // that is determining the offset
        if ($offsetParent.css('position') === 'static') {
          $offsetParent = $offsetParent.offsetParent();
        }
        var parentOffset = {
          top: 0,
          left: 0
        };
        if ($.contains(document.body, $offsetParent[0]) || $offsetParent[0].isConnected) {
          parentOffset = $offsetParent.offset();
        }
        css.top -= parentOffset.top;
        css.left -= parentOffset.left;
        if (!isCurrentlyAbove && !isCurrentlyBelow) {
          newDirection = 'below';
        }
        if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
          newDirection = 'above';
        } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
          newDirection = 'below';
        }
        if (newDirection == 'above' || isCurrentlyAbove && newDirection !== 'below') {
          css.top = container.top - parentOffset.top - dropdown.height;
        }
        if (newDirection != null) {
          this.$dropdown[0].classList.remove('select2-dropdown--below');
          this.$dropdown[0].classList.remove('select2-dropdown--above');
          this.$dropdown[0].classList.add('select2-dropdown--' + newDirection);
          this.$container[0].classList.remove('select2-container--below');
          this.$container[0].classList.remove('select2-container--above');
          this.$container[0].classList.add('select2-container--' + newDirection);
        }
        this.$dropdownContainer.css(css);
      };
      AttachBody.prototype._resizeDropdown = function () {
        var css = {
          width: this.$container.outerWidth(false) + 'px'
        };
        if (this.options.get('dropdownAutoWidth')) {
          css.minWidth = css.width;
          css.position = 'relative';
          css.width = 'auto';
        }
        this.$dropdown.css(css);
      };
      AttachBody.prototype._showDropdown = function (decorated) {
        this.$dropdownContainer.appendTo(this.$dropdownParent);
        this._positionDropdown();
        this._resizeDropdown();
      };
      return AttachBody;
    });
    S2.define('select2/dropdown/minimumResultsForSearch', [], function () {
      function countResults(data) {
        var count = 0;
        for (var d = 0; d < data.length; d++) {
          var item = data[d];
          if (item.children) {
            count += countResults(item.children);
          } else {
            count++;
          }
        }
        return count;
      }
      function MinimumResultsForSearch(decorated, $element, options, dataAdapter) {
        this.minimumResultsForSearch = options.get('minimumResultsForSearch');
        if (this.minimumResultsForSearch < 0) {
          this.minimumResultsForSearch = Infinity;
        }
        decorated.call(this, $element, options, dataAdapter);
      }
      MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
        if (countResults(params.data.results) < this.minimumResultsForSearch) {
          return false;
        }
        return decorated.call(this, params);
      };
      return MinimumResultsForSearch;
    });
    S2.define('select2/dropdown/selectOnClose', ['../utils'], function (Utils) {
      function SelectOnClose() {}
      SelectOnClose.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        container.on('close', function (params) {
          self._handleSelectOnClose(params);
        });
      };
      SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
        if (params && params.originalSelect2Event != null) {
          var event = params.originalSelect2Event;

          // Don't select an item if the close event was triggered from a select or
          // unselect event
          if (event._type === 'select' || event._type === 'unselect') {
            return;
          }
        }
        var $highlightedResults = this.getHighlightedResults();

        // Only select highlighted results
        if ($highlightedResults.length < 1) {
          return;
        }
        var data = Utils.GetData($highlightedResults[0], 'data');

        // Don't re-select already selected resulte
        if (data.element != null && data.element.selected || data.element == null && data.selected) {
          return;
        }
        this.trigger('select', {
          data: data
        });
      };
      return SelectOnClose;
    });
    S2.define('select2/dropdown/closeOnSelect', [], function () {
      function CloseOnSelect() {}
      CloseOnSelect.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        container.on('select', function (evt) {
          self._selectTriggered(evt);
        });
        container.on('unselect', function (evt) {
          self._selectTriggered(evt);
        });
      };
      CloseOnSelect.prototype._selectTriggered = function (_, evt) {
        var originalEvent = evt.originalEvent;

        // Don't close if the control key is being held
        if (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) {
          return;
        }
        this.trigger('close', {
          originalEvent: originalEvent,
          originalSelect2Event: evt
        });
      };
      return CloseOnSelect;
    });
    S2.define('select2/dropdown/dropdownCss', ['../utils'], function (Utils) {
      function DropdownCSS() {}
      DropdownCSS.prototype.render = function (decorated) {
        var $dropdown = decorated.call(this);
        var dropdownCssClass = this.options.get('dropdownCssClass') || '';
        if (dropdownCssClass.indexOf(':all:') !== -1) {
          dropdownCssClass = dropdownCssClass.replace(':all:', '');
          Utils.copyNonInternalCssClasses($dropdown[0], this.$element[0]);
        }
        $dropdown.addClass(dropdownCssClass);
        return $dropdown;
      };
      return DropdownCSS;
    });
    S2.define('select2/i18n/en', [], function () {
      // English
      return {
        errorLoading: function errorLoading() {
          return 'The results could not be loaded.';
        },
        inputTooLong: function inputTooLong(args) {
          var overChars = args.input.length - args.maximum;
          var message = 'Please delete ' + overChars + ' character';
          if (overChars != 1) {
            message += 's';
          }
          return message;
        },
        inputTooShort: function inputTooShort(args) {
          var remainingChars = args.minimum - args.input.length;
          var message = 'Please enter ' + remainingChars + ' or more characters';
          return message;
        },
        loadingMore: function loadingMore() {
          return 'Loading more results…';
        },
        maximumSelected: function maximumSelected(args) {
          var message = 'You can only select ' + args.maximum + ' item';
          if (args.maximum != 1) {
            message += 's';
          }
          return message;
        },
        noResults: function noResults() {
          return 'No results found';
        },
        searching: function searching() {
          return 'Searching…';
        },
        removeAllItems: function removeAllItems() {
          return 'Remove all items';
        },
        removeItem: function removeItem() {
          return 'Remove item';
        }
      };
    });
    S2.define('select2/defaults', ['jquery', './results', './selection/single', './selection/multiple', './selection/placeholder', './selection/allowClear', './selection/search', './selection/selectionCss', './selection/eventRelay', './utils', './translation', './diacritics', './data/select', './data/array', './data/ajax', './data/tags', './data/tokenizer', './data/minimumInputLength', './data/maximumInputLength', './data/maximumSelectionLength', './dropdown', './dropdown/search', './dropdown/hidePlaceholder', './dropdown/infiniteScroll', './dropdown/attachBody', './dropdown/minimumResultsForSearch', './dropdown/selectOnClose', './dropdown/closeOnSelect', './dropdown/dropdownCss', './i18n/en'], function ($, ResultsList, SingleSelection, MultipleSelection, Placeholder, AllowClear, SelectionSearch, SelectionCSS, EventRelay, Utils, Translation, DIACRITICS, SelectData, ArrayData, AjaxData, Tags, Tokenizer, MinimumInputLength, MaximumInputLength, MaximumSelectionLength, Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll, AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect, DropdownCSS, EnglishTranslation) {
      function Defaults() {
        this.reset();
      }
      Defaults.prototype.apply = function (options) {
        options = $.extend(true, {}, this.defaults, options);
        if (options.dataAdapter == null) {
          if (options.ajax != null) {
            options.dataAdapter = AjaxData;
          } else if (options.data != null) {
            options.dataAdapter = ArrayData;
          } else {
            options.dataAdapter = SelectData;
          }
          if (options.minimumInputLength > 0) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, MinimumInputLength);
          }
          if (options.maximumInputLength > 0) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumInputLength);
          }
          if (options.maximumSelectionLength > 0) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumSelectionLength);
          }
          if (options.tags) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
          }
          if (options.tokenSeparators != null || options.tokenizer != null) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, Tokenizer);
          }
        }
        if (options.resultsAdapter == null) {
          options.resultsAdapter = ResultsList;
          if (options.ajax != null) {
            options.resultsAdapter = Utils.Decorate(options.resultsAdapter, InfiniteScroll);
          }
          if (options.placeholder != null) {
            options.resultsAdapter = Utils.Decorate(options.resultsAdapter, HidePlaceholder);
          }
          if (options.selectOnClose) {
            options.resultsAdapter = Utils.Decorate(options.resultsAdapter, SelectOnClose);
          }
        }
        if (options.dropdownAdapter == null) {
          if (options.multiple) {
            options.dropdownAdapter = Dropdown;
          } else {
            var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);
            options.dropdownAdapter = SearchableDropdown;
          }
          if (options.minimumResultsForSearch !== 0) {
            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, MinimumResultsForSearch);
          }
          if (options.closeOnSelect) {
            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, CloseOnSelect);
          }
          if (options.dropdownCssClass != null) {
            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, DropdownCSS);
          }
          options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, AttachBody);
        }
        if (options.selectionAdapter == null) {
          if (options.multiple) {
            options.selectionAdapter = MultipleSelection;
          } else {
            options.selectionAdapter = SingleSelection;
          }

          // Add the placeholder mixin if a placeholder was specified
          if (options.placeholder != null) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, Placeholder);
          }
          if (options.allowClear) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, AllowClear);
          }
          if (options.multiple) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, SelectionSearch);
          }
          if (options.selectionCssClass != null) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, SelectionCSS);
          }
          options.selectionAdapter = Utils.Decorate(options.selectionAdapter, EventRelay);
        }

        // If the defaults were not previously applied from an element, it is
        // possible for the language option to have not been resolved
        options.language = this._resolveLanguage(options.language);

        // Always fall back to English since it will always be complete
        options.language.push('en');
        var uniqueLanguages = [];
        for (var l = 0; l < options.language.length; l++) {
          var language = options.language[l];
          if (uniqueLanguages.indexOf(language) === -1) {
            uniqueLanguages.push(language);
          }
        }
        options.language = uniqueLanguages;
        options.translations = this._processTranslations(options.language, options.debug);
        return options;
      };
      Defaults.prototype.reset = function () {
        function stripDiacritics(text) {
          // Used 'uni range + named function' from http://jsperf.com/diacritics/18
          function match(a) {
            return DIACRITICS[a] || a;
          }
          return text.replace(/[^\u0000-\u007E]/g, match);
        }
        function matcher(params, data) {
          // Always return the object if there is nothing to compare
          if (params.term == null || params.term.trim() === '') {
            return data;
          }

          // Do a recursive check for options with children
          if (data.children && data.children.length > 0) {
            // Clone the data object if there are children
            // This is required as we modify the object to remove any non-matches
            var match = $.extend(true, {}, data);

            // Check each child of the option
            for (var c = data.children.length - 1; c >= 0; c--) {
              var child = data.children[c];
              var matches = matcher(params, child);

              // If there wasn't a match, remove the object in the array
              if (matches == null) {
                match.children.splice(c, 1);
              }
            }

            // If any children matched, return the new object
            if (match.children.length > 0) {
              return match;
            }

            // If there were no matching children, check just the plain object
            return matcher(params, match);
          }
          var original = stripDiacritics(data.text).toUpperCase();
          var term = stripDiacritics(params.term).toUpperCase();

          // Check if the text contains the term
          if (original.indexOf(term) > -1) {
            return data;
          }

          // If it doesn't contain the term, don't return anything
          return null;
        }
        this.defaults = {
          amdLanguageBase: './i18n/',
          autocomplete: 'off',
          closeOnSelect: true,
          debug: false,
          dropdownAutoWidth: false,
          escapeMarkup: Utils.escapeMarkup,
          language: {},
          matcher: matcher,
          minimumInputLength: 0,
          maximumInputLength: 0,
          maximumSelectionLength: 0,
          minimumResultsForSearch: 0,
          selectOnClose: false,
          scrollAfterSelect: false,
          sorter: function sorter(data) {
            return data;
          },
          templateResult: function templateResult(result) {
            return result.text;
          },
          templateSelection: function templateSelection(selection) {
            return selection.text;
          },
          theme: 'default',
          width: 'resolve'
        };
      };
      Defaults.prototype.applyFromElement = function (options, $element) {
        var optionLanguage = options.language;
        var defaultLanguage = this.defaults.language;
        var elementLanguage = $element.prop('lang');
        var parentLanguage = $element.closest('[lang]').prop('lang');
        var languages = Array.prototype.concat.call(this._resolveLanguage(elementLanguage), this._resolveLanguage(optionLanguage), this._resolveLanguage(defaultLanguage), this._resolveLanguage(parentLanguage));
        options.language = languages;
        return options;
      };
      Defaults.prototype._resolveLanguage = function (language) {
        if (!language) {
          return [];
        }
        if ($.isEmptyObject(language)) {
          return [];
        }
        if ($.isPlainObject(language)) {
          return [language];
        }
        var languages;
        if (!Array.isArray(language)) {
          languages = [language];
        } else {
          languages = language;
        }
        var resolvedLanguages = [];
        for (var l = 0; l < languages.length; l++) {
          resolvedLanguages.push(languages[l]);
          if (typeof languages[l] === 'string' && languages[l].indexOf('-') > 0) {
            // Extract the region information if it is included
            var languageParts = languages[l].split('-');
            var baseLanguage = languageParts[0];
            resolvedLanguages.push(baseLanguage);
          }
        }
        return resolvedLanguages;
      };
      Defaults.prototype._processTranslations = function (languages, debug) {
        var translations = new Translation();
        for (var l = 0; l < languages.length; l++) {
          var languageData = new Translation();
          var language = languages[l];
          if (typeof language === 'string') {
            try {
              // Try to load it with the original name
              languageData = Translation.loadPath(language);
            } catch (e) {
              try {
                // If we couldn't load it, check if it wasn't the full path
                language = this.defaults.amdLanguageBase + language;
                languageData = Translation.loadPath(language);
              } catch (ex) {
                // The translation could not be loaded at all. Sometimes this is
                // because of a configuration problem, other times this can be
                // because of how Select2 helps load all possible translation files
                if (debug && window.console && console.warn) {
                  console.warn('Select2: The language file for "' + language + '" could ' + 'not be automatically loaded. A fallback will be used instead.');
                }
              }
            }
          } else if ($.isPlainObject(language)) {
            languageData = new Translation(language);
          } else {
            languageData = language;
          }
          translations.extend(languageData);
        }
        return translations;
      };
      Defaults.prototype.set = function (key, value) {
        var camelKey = $.camelCase(key);
        var data = {};
        data[camelKey] = value;
        var convertedData = Utils._convertData(data);
        $.extend(true, this.defaults, convertedData);
      };
      var defaults = new Defaults();
      return defaults;
    });
    S2.define('select2/options', ['jquery', './defaults', './utils'], function ($, Defaults, Utils) {
      function Options(options, $element) {
        this.options = options;
        if ($element != null) {
          this.fromElement($element);
        }
        if ($element != null) {
          this.options = Defaults.applyFromElement(this.options, $element);
        }
        this.options = Defaults.apply(this.options);
      }
      Options.prototype.fromElement = function ($e) {
        var excludedData = ['select2'];
        if (this.options.multiple == null) {
          this.options.multiple = $e.prop('multiple');
        }
        if (this.options.disabled == null) {
          this.options.disabled = $e.prop('disabled');
        }
        if (this.options.autocomplete == null && $e.prop('autocomplete')) {
          this.options.autocomplete = $e.prop('autocomplete');
        }
        if (this.options.dir == null) {
          if ($e.prop('dir')) {
            this.options.dir = $e.prop('dir');
          } else if ($e.closest('[dir]').prop('dir')) {
            this.options.dir = $e.closest('[dir]').prop('dir');
          } else {
            this.options.dir = 'ltr';
          }
        }
        $e.prop('disabled', this.options.disabled);
        $e.prop('multiple', this.options.multiple);
        if (Utils.GetData($e[0], 'select2Tags')) {
          if (this.options.debug && window.console && console.warn) {
            console.warn('Select2: The `data-select2-tags` attribute has been changed to ' + 'use the `data-data` and `data-tags="true"` attributes and will be ' + 'removed in future versions of Select2.');
          }
          Utils.StoreData($e[0], 'data', Utils.GetData($e[0], 'select2Tags'));
          Utils.StoreData($e[0], 'tags', true);
        }
        if (Utils.GetData($e[0], 'ajaxUrl')) {
          if (this.options.debug && window.console && console.warn) {
            console.warn('Select2: The `data-ajax-url` attribute has been changed to ' + '`data-ajax--url` and support for the old attribute will be removed' + ' in future versions of Select2.');
          }
          $e.attr('ajax--url', Utils.GetData($e[0], 'ajaxUrl'));
          Utils.StoreData($e[0], 'ajax-Url', Utils.GetData($e[0], 'ajaxUrl'));
        }
        var dataset = {};
        function upperCaseLetter(_, letter) {
          return letter.toUpperCase();
        }

        // Pre-load all of the attributes which are prefixed with `data-`
        for (var attr = 0; attr < $e[0].attributes.length; attr++) {
          var attributeName = $e[0].attributes[attr].name;
          var prefix = 'data-';
          if (attributeName.substr(0, prefix.length) == prefix) {
            // Get the contents of the attribute after `data-`
            var dataName = attributeName.substring(prefix.length);

            // Get the data contents from the consistent source
            // This is more than likely the jQuery data helper
            var dataValue = Utils.GetData($e[0], dataName);

            // camelCase the attribute name to match the spec
            var camelDataName = dataName.replace(/-([a-z])/g, upperCaseLetter);

            // Store the data attribute contents into the dataset since
            dataset[camelDataName] = dataValue;
          }
        }

        // Prefer the element's `dataset` attribute if it exists
        // jQuery 1.x does not correctly handle data attributes with multiple dashes
        if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
          dataset = $.extend(true, {}, $e[0].dataset, dataset);
        }

        // Prefer our internal data cache if it exists
        var data = $.extend(true, {}, Utils.GetData($e[0]), dataset);
        data = Utils._convertData(data);
        for (var key in data) {
          if (excludedData.indexOf(key) > -1) {
            continue;
          }
          if ($.isPlainObject(this.options[key])) {
            $.extend(this.options[key], data[key]);
          } else {
            this.options[key] = data[key];
          }
        }
        return this;
      };
      Options.prototype.get = function (key) {
        return this.options[key];
      };
      Options.prototype.set = function (key, val) {
        this.options[key] = val;
      };
      return Options;
    });
    S2.define('select2/core', ['jquery', './options', './utils', './keys'], function ($, Options, Utils, KEYS) {
      var Select2 = function Select2($element, options) {
        if (Utils.GetData($element[0], 'select2') != null) {
          Utils.GetData($element[0], 'select2').destroy();
        }
        this.$element = $element;
        this.id = this._generateId($element);
        options = options || {};
        this.options = new Options(options, $element);
        Select2.__super__.constructor.call(this);

        // Set up the tabindex

        var tabindex = $element.attr('tabindex') || 0;
        Utils.StoreData($element[0], 'old-tabindex', tabindex);
        $element.attr('tabindex', '-1');

        // Set up containers and adapters

        var DataAdapter = this.options.get('dataAdapter');
        this.dataAdapter = new DataAdapter($element, this.options);
        var $container = this.render();
        this._placeContainer($container);
        var SelectionAdapter = this.options.get('selectionAdapter');
        this.selection = new SelectionAdapter($element, this.options);
        this.$selection = this.selection.render();
        this.selection.position(this.$selection, $container);
        var DropdownAdapter = this.options.get('dropdownAdapter');
        this.dropdown = new DropdownAdapter($element, this.options);
        this.$dropdown = this.dropdown.render();
        this.dropdown.position(this.$dropdown, $container);
        var ResultsAdapter = this.options.get('resultsAdapter');
        this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
        this.$results = this.results.render();
        this.results.position(this.$results, this.$dropdown);

        // Bind events

        var self = this;

        // Bind the container to all of the adapters
        this._bindAdapters();

        // Register any DOM event handlers
        this._registerDomEvents();

        // Register any internal event handlers
        this._registerDataEvents();
        this._registerSelectionEvents();
        this._registerDropdownEvents();
        this._registerResultsEvents();
        this._registerEvents();

        // Set the initial state
        this.dataAdapter.current(function (initialData) {
          self.trigger('selection:update', {
            data: initialData
          });
        });

        // Hide the original select
        $element[0].classList.add('select2-hidden-accessible');
        $element.attr('aria-hidden', 'true');

        // Synchronize any monitored attributes
        this._syncAttributes();
        Utils.StoreData($element[0], 'select2', this);

        // Ensure backwards compatibility with $element.data('select2').
        $element.data('select2', this);
      };
      Utils.Extend(Select2, Utils.Observable);
      Select2.prototype._generateId = function ($element) {
        var id = '';
        if ($element.attr('id') != null) {
          id = $element.attr('id');
        } else if ($element.attr('name') != null) {
          id = $element.attr('name') + '-' + Utils.generateChars(2);
        } else {
          id = Utils.generateChars(4);
        }
        id = id.replace(/(:|\.|\[|\]|,)/g, '');
        id = 'select2-' + id;
        return id;
      };
      Select2.prototype._placeContainer = function ($container) {
        $container.insertAfter(this.$element);
        var width = this._resolveWidth(this.$element, this.options.get('width'));
        if (width != null) {
          $container.css('width', width);
        }
      };
      Select2.prototype._resolveWidth = function ($element, method) {
        var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
        if (method == 'resolve') {
          var styleWidth = this._resolveWidth($element, 'style');
          if (styleWidth != null) {
            return styleWidth;
          }
          return this._resolveWidth($element, 'element');
        }
        if (method == 'element') {
          var elementWidth = $element.outerWidth(false);
          if (elementWidth <= 0) {
            return 'auto';
          }
          return elementWidth + 'px';
        }
        if (method == 'style') {
          var style = $element.attr('style');
          if (typeof style !== 'string') {
            return null;
          }
          var attrs = style.split(';');
          for (var i = 0, l = attrs.length; i < l; i = i + 1) {
            var attr = attrs[i].replace(/\s/g, '');
            var matches = attr.match(WIDTH);
            if (matches !== null && matches.length >= 1) {
              return matches[1];
            }
          }
          return null;
        }
        if (method == 'computedstyle') {
          var computedStyle = window.getComputedStyle($element[0]);
          return computedStyle.width;
        }
        return method;
      };
      Select2.prototype._bindAdapters = function () {
        this.dataAdapter.bind(this, this.$container);
        this.selection.bind(this, this.$container);
        this.dropdown.bind(this, this.$container);
        this.results.bind(this, this.$container);
      };
      Select2.prototype._registerDomEvents = function () {
        var self = this;
        this.$element.on('change.select2', function () {
          self.dataAdapter.current(function (data) {
            self.trigger('selection:update', {
              data: data
            });
          });
        });
        this.$element.on('focus.select2', function (evt) {
          self.trigger('focus', evt);
        });
        this._syncA = Utils.bind(this._syncAttributes, this);
        this._syncS = Utils.bind(this._syncSubtree, this);
        this._observer = new window.MutationObserver(function (mutations) {
          self._syncA();
          self._syncS(mutations);
        });
        this._observer.observe(this.$element[0], {
          attributes: true,
          childList: true,
          subtree: false
        });
      };
      Select2.prototype._registerDataEvents = function () {
        var self = this;
        this.dataAdapter.on('*', function (name, params) {
          self.trigger(name, params);
        });
      };
      Select2.prototype._registerSelectionEvents = function () {
        var self = this;
        var nonRelayEvents = ['toggle', 'focus'];
        this.selection.on('toggle', function () {
          self.toggleDropdown();
        });
        this.selection.on('focus', function (params) {
          self.focus(params);
        });
        this.selection.on('*', function (name, params) {
          if (nonRelayEvents.indexOf(name) !== -1) {
            return;
          }
          self.trigger(name, params);
        });
      };
      Select2.prototype._registerDropdownEvents = function () {
        var self = this;
        this.dropdown.on('*', function (name, params) {
          self.trigger(name, params);
        });
      };
      Select2.prototype._registerResultsEvents = function () {
        var self = this;
        this.results.on('*', function (name, params) {
          self.trigger(name, params);
        });
      };
      Select2.prototype._registerEvents = function () {
        var self = this;
        this.on('open', function () {
          self.$container[0].classList.add('select2-container--open');
        });
        this.on('close', function () {
          self.$container[0].classList.remove('select2-container--open');
        });
        this.on('enable', function () {
          self.$container[0].classList.remove('select2-container--disabled');
        });
        this.on('disable', function () {
          self.$container[0].classList.add('select2-container--disabled');
        });
        this.on('blur', function () {
          self.$container[0].classList.remove('select2-container--focus');
        });
        this.on('query', function (params) {
          if (!self.isOpen()) {
            self.trigger('open', {});
          }
          this.dataAdapter.query(params, function (data) {
            self.trigger('results:all', {
              data: data,
              query: params
            });
          });
        });
        this.on('query:append', function (params) {
          this.dataAdapter.query(params, function (data) {
            self.trigger('results:append', {
              data: data,
              query: params
            });
          });
        });
        this.on('keypress', function (evt) {
          var key = evt.which;
          if (self.isOpen()) {
            if (key === KEYS.ESC || key === KEYS.TAB || key === KEYS.UP && evt.altKey) {
              self.close(evt);
              evt.preventDefault();
            } else if (key === KEYS.ENTER) {
              self.trigger('results:select', {});
              evt.preventDefault();
            } else if (key === KEYS.SPACE && evt.ctrlKey) {
              self.trigger('results:toggle', {});
              evt.preventDefault();
            } else if (key === KEYS.UP) {
              self.trigger('results:previous', {});
              evt.preventDefault();
            } else if (key === KEYS.DOWN) {
              self.trigger('results:next', {});
              evt.preventDefault();
            }
          } else {
            if (key === KEYS.ENTER || key === KEYS.SPACE || key === KEYS.DOWN && evt.altKey) {
              self.open();
              evt.preventDefault();
            }
          }
        });
      };
      Select2.prototype._syncAttributes = function () {
        this.options.set('disabled', this.$element.prop('disabled'));
        if (this.isDisabled()) {
          if (this.isOpen()) {
            this.close();
          }
          this.trigger('disable', {});
        } else {
          this.trigger('enable', {});
        }
      };
      Select2.prototype._isChangeMutation = function (mutations) {
        var self = this;
        if (mutations.addedNodes && mutations.addedNodes.length > 0) {
          for (var n = 0; n < mutations.addedNodes.length; n++) {
            var node = mutations.addedNodes[n];
            if (node.selected) {
              return true;
            }
          }
        } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
          return true;
        } else if (Array.isArray(mutations)) {
          return mutations.some(function (mutation) {
            return self._isChangeMutation(mutation);
          });
        }
        return false;
      };
      Select2.prototype._syncSubtree = function (mutations) {
        var changed = this._isChangeMutation(mutations);
        var self = this;

        // Only re-pull the data if we think there is a change
        if (changed) {
          this.dataAdapter.current(function (currentData) {
            self.trigger('selection:update', {
              data: currentData
            });
          });
        }
      };

      /**
       * Override the trigger method to automatically trigger pre-events when
       * there are events that can be prevented.
       */
      Select2.prototype.trigger = function (name, args) {
        var actualTrigger = Select2.__super__.trigger;
        var preTriggerMap = {
          'open': 'opening',
          'close': 'closing',
          'select': 'selecting',
          'unselect': 'unselecting',
          'clear': 'clearing'
        };
        if (args === undefined) {
          args = {};
        }
        if (name in preTriggerMap) {
          var preTriggerName = preTriggerMap[name];
          var preTriggerArgs = {
            prevented: false,
            name: name,
            args: args
          };
          actualTrigger.call(this, preTriggerName, preTriggerArgs);
          if (preTriggerArgs.prevented) {
            args.prevented = true;
            return;
          }
        }
        actualTrigger.call(this, name, args);
      };
      Select2.prototype.toggleDropdown = function () {
        if (this.isDisabled()) {
          return;
        }
        if (this.isOpen()) {
          this.close();
        } else {
          this.open();
        }
      };
      Select2.prototype.open = function () {
        if (this.isOpen()) {
          return;
        }
        if (this.isDisabled()) {
          return;
        }
        this.trigger('query', {});
      };
      Select2.prototype.close = function (evt) {
        if (!this.isOpen()) {
          return;
        }
        this.trigger('close', {
          originalEvent: evt
        });
      };

      /**
       * Helper method to abstract the "enabled" (not "disabled") state of this
       * object.
       *
       * @return {true} if the instance is not disabled.
       * @return {false} if the instance is disabled.
       */
      Select2.prototype.isEnabled = function () {
        return !this.isDisabled();
      };

      /**
       * Helper method to abstract the "disabled" state of this object.
       *
       * @return {true} if the disabled option is true.
       * @return {false} if the disabled option is false.
       */
      Select2.prototype.isDisabled = function () {
        return this.options.get('disabled');
      };
      Select2.prototype.isOpen = function () {
        return this.$container[0].classList.contains('select2-container--open');
      };
      Select2.prototype.hasFocus = function () {
        return this.$container[0].classList.contains('select2-container--focus');
      };
      Select2.prototype.focus = function (data) {
        // No need to re-trigger focus events if we are already focused
        if (this.hasFocus()) {
          return;
        }
        this.$container[0].classList.add('select2-container--focus');
        this.trigger('focus', {});
      };
      Select2.prototype.enable = function (args) {
        if (this.options.get('debug') && window.console && console.warn) {
          console.warn('Select2: The `select2("enable")` method has been deprecated and will' + ' be removed in later Select2 versions. Use $element.prop("disabled")' + ' instead.');
        }
        if (args == null || args.length === 0) {
          args = [true];
        }
        var disabled = !args[0];
        this.$element.prop('disabled', disabled);
      };
      Select2.prototype.data = function () {
        if (this.options.get('debug') && arguments.length > 0 && window.console && console.warn) {
          console.warn('Select2: Data can no longer be set using `select2("data")`. You ' + 'should consider setting the value instead using `$element.val()`.');
        }
        var data = [];
        this.dataAdapter.current(function (currentData) {
          data = currentData;
        });
        return data;
      };
      Select2.prototype.val = function (args) {
        if (this.options.get('debug') && window.console && console.warn) {
          console.warn('Select2: The `select2("val")` method has been deprecated and will be' + ' removed in later Select2 versions. Use $element.val() instead.');
        }
        if (args == null || args.length === 0) {
          return this.$element.val();
        }
        var newVal = args[0];
        if (Array.isArray(newVal)) {
          newVal = newVal.map(function (obj) {
            return obj.toString();
          });
        }
        this.$element.val(newVal).trigger('input').trigger('change');
      };
      Select2.prototype.destroy = function () {
        this.$container.remove();
        this._observer.disconnect();
        this._observer = null;
        this._syncA = null;
        this._syncS = null;
        this.$element.off('.select2');
        this.$element.attr('tabindex', Utils.GetData(this.$element[0], 'old-tabindex'));
        this.$element[0].classList.remove('select2-hidden-accessible');
        this.$element.attr('aria-hidden', 'false');
        Utils.RemoveData(this.$element[0]);
        this.$element.removeData('select2');
        this.dataAdapter.destroy();
        this.selection.destroy();
        this.dropdown.destroy();
        this.results.destroy();
        this.dataAdapter = null;
        this.selection = null;
        this.dropdown = null;
        this.results = null;
      };
      Select2.prototype.render = function () {
        var $container = $('<span class="select2 select2-container">' + '<span class="selection"></span>' + '<span class="dropdown-wrapper" aria-hidden="true"></span>' + '</span>');
        $container.attr('dir', this.options.get('dir'));
        this.$container = $container;
        this.$container[0].classList.add('select2-container--' + this.options.get('theme'));
        Utils.StoreData($container[0], 'element', this.$element);
        return $container;
      };
      return Select2;
    });
    S2.define('jquery-mousewheel', ['jquery'], function ($) {
      // Used to shim jQuery.mousewheel for non-full builds.
      return $;
    });
    S2.define('jquery.select2', ['jquery', 'jquery-mousewheel', './select2/core', './select2/defaults', './select2/utils'], function ($, _, Select2, Defaults, Utils) {
      if ($.fn.select2 == null) {
        // All methods that should return the element
        var thisMethods = ['open', 'close', 'destroy'];
        $.fn.select2 = function (options) {
          options = options || {};
          if (_typeof(options) === 'object') {
            this.each(function () {
              var instanceOptions = $.extend(true, {}, options);
              var instance = new Select2($(this), instanceOptions);
            });
            return this;
          } else if (typeof options === 'string') {
            var ret;
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
              var instance = Utils.GetData(this, 'select2');
              if (instance == null && window.console && console.error) {
                console.error('The select2(\'' + options + '\') method was called on an ' + 'element that is not using Select2.');
              }
              ret = instance[options].apply(instance, args);
            });

            // Check if we should be returning `this`
            if (thisMethods.indexOf(options) > -1) {
              return this;
            }
            return ret;
          } else {
            throw new Error('Invalid arguments for Select2: ' + options);
          }
        };
      }
      if ($.fn.select2.defaults == null) {
        $.fn.select2.defaults = Defaults;
      }
      return Select2;
    });

    // Return the AMD loader configuration so it can be used outside of this file
    return {
      define: S2.define,
      require: S2.require
    };
  }();

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGx1Z2lucy9zZWxlY3QyL3NlbGVjdDIuZnVsbC5taW4uanMiXSwibmFtZXMiOlsiZmFjdG9yeSIsImRlZmluZSIsImpRdWVyeSIsIlMyIiwiZm4iLCJzZWxlY3QyIiwiYW1kIiwicmVxdWlyZWpzIiwicmVxdWlyZSIsInVuZGVmIiwibWFpbiIsInJlcSIsIm1ha2VNYXAiLCJoYW5kbGVycyIsImRlZmluZWQiLCJ3YWl0aW5nIiwiY29uZmlnIiwiZGVmaW5pbmciLCJoYXNPd24iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImFwcyIsInNsaWNlIiwianNTdWZmaXhSZWdFeHAiLCJoYXNQcm9wIiwib2JqIiwicHJvcCIsImNhbGwiLCJub3JtYWxpemUiLCJuYW1lIiwiYmFzZU5hbWUiLCJuYW1lUGFydHMiLCJuYW1lU2VnbWVudCIsIm1hcFZhbHVlIiwiZm91bmRNYXAiLCJsYXN0SW5kZXgiLCJmb3VuZEkiLCJmb3VuZFN0YXJNYXAiLCJzdGFySSIsImkiLCJqIiwicGFydCIsIm5vcm1hbGl6ZWRCYXNlUGFydHMiLCJiYXNlUGFydHMiLCJzcGxpdCIsIm1hcCIsInN0YXJNYXAiLCJsZW5ndGgiLCJub2RlSWRDb21wYXQiLCJ0ZXN0IiwicmVwbGFjZSIsImNoYXJBdCIsImNvbmNhdCIsInNwbGljZSIsImpvaW4iLCJtYWtlUmVxdWlyZSIsInJlbE5hbWUiLCJmb3JjZVN5bmMiLCJhcmdzIiwiYXJndW1lbnRzIiwicHVzaCIsImFwcGx5IiwibWFrZU5vcm1hbGl6ZSIsIm1ha2VMb2FkIiwiZGVwTmFtZSIsInZhbHVlIiwiY2FsbERlcCIsIkVycm9yIiwic3BsaXRQcmVmaXgiLCJwcmVmaXgiLCJpbmRleCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJtYWtlUmVsUGFydHMiLCJyZWxQYXJ0cyIsInBsdWdpbiIsInBhcnRzIiwicmVsUmVzb3VyY2VOYW1lIiwiZiIsIm4iLCJwciIsInAiLCJtYWtlQ29uZmlnIiwiZXhwb3J0cyIsImUiLCJtb2R1bGUiLCJpZCIsInVyaSIsImRlcHMiLCJjYWxsYmFjayIsImNqc01vZHVsZSIsInJldCIsImNhbGxiYWNrVHlwZSIsInVzaW5nRXhwb3J0cyIsImxvYWQiLCJ1bmRlZmluZWQiLCJhbHQiLCJzZXRUaW1lb3V0IiwiY2ZnIiwiX2RlZmluZWQiLCJfJCIsIiQiLCJjb25zb2xlIiwiZXJyb3IiLCJVdGlscyIsIkV4dGVuZCIsIkNoaWxkQ2xhc3MiLCJTdXBlckNsYXNzIiwiX19oYXNQcm9wIiwiQmFzZUNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJrZXkiLCJfX3N1cGVyX18iLCJnZXRNZXRob2RzIiwidGhlQ2xhc3MiLCJwcm90byIsIm1ldGhvZHMiLCJtZXRob2ROYW1lIiwibSIsIkRlY29yYXRlIiwiRGVjb3JhdG9yQ2xhc3MiLCJkZWNvcmF0ZWRNZXRob2RzIiwic3VwZXJNZXRob2RzIiwiRGVjb3JhdGVkQ2xhc3MiLCJ1bnNoaWZ0IiwiQXJyYXkiLCJhcmdDb3VudCIsImNhbGxlZENvbnN0cnVjdG9yIiwiZGlzcGxheU5hbWUiLCJjdHIiLCJzdXBlck1ldGhvZCIsImNhbGxlZE1ldGhvZCIsIm9yaWdpbmFsTWV0aG9kIiwiZGVjb3JhdGVkTWV0aG9kIiwiZCIsIk9ic2VydmFibGUiLCJsaXN0ZW5lcnMiLCJvbiIsImV2ZW50IiwidHJpZ2dlciIsInBhcmFtcyIsIl90eXBlIiwiaW52b2tlIiwibGVuIiwiZ2VuZXJhdGVDaGFycyIsImNoYXJzIiwicmFuZG9tQ2hhciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiYmluZCIsImZ1bmMiLCJjb250ZXh0IiwiX2NvbnZlcnREYXRhIiwiZGF0YSIsIm9yaWdpbmFsS2V5Iiwia2V5cyIsImRhdGFMZXZlbCIsImsiLCJ0b0xvd2VyQ2FzZSIsImhhc1Njcm9sbCIsImVsIiwiJGVsIiwib3ZlcmZsb3dYIiwic3R5bGUiLCJvdmVyZmxvd1kiLCJpbm5lckhlaWdodCIsInNjcm9sbEhlaWdodCIsImlubmVyV2lkdGgiLCJzY3JvbGxXaWR0aCIsImVzY2FwZU1hcmt1cCIsIm1hcmt1cCIsInJlcGxhY2VNYXAiLCJTdHJpbmciLCJtYXRjaCIsIl9fY2FjaGUiLCJHZXRVbmlxdWVFbGVtZW50SWQiLCJlbGVtZW50Iiwic2VsZWN0MklkIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiU3RvcmVEYXRhIiwiR2V0RGF0YSIsIlJlbW92ZURhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb3B5Tm9uSW50ZXJuYWxDc3NDbGFzc2VzIiwiZGVzdCIsInNyYyIsImNsYXNzZXMiLCJkZXN0aW5hdGlvbkNsYXNzZXMiLCJ0cmltIiwiZmlsdGVyIiwiY2xhenoiLCJzb3VyY2VDbGFzc2VzIiwicmVwbGFjZW1lbnRzIiwiUmVzdWx0cyIsIiRlbGVtZW50Iiwib3B0aW9ucyIsImRhdGFBZGFwdGVyIiwicmVuZGVyIiwiJHJlc3VsdHMiLCJnZXQiLCJhdHRyIiwiY2xlYXIiLCJlbXB0eSIsImRpc3BsYXlNZXNzYWdlIiwiaGlkZUxvYWRpbmciLCIkbWVzc2FnZSIsIm1lc3NhZ2UiLCJhcHBlbmQiLCJjbGFzc05hbWUiLCJoaWRlTWVzc2FnZXMiLCJmaW5kIiwicmVtb3ZlIiwiJG9wdGlvbnMiLCJyZXN1bHRzIiwiY2hpbGRyZW4iLCJzb3J0IiwiaXRlbSIsIiRvcHRpb24iLCJvcHRpb24iLCJwb3NpdGlvbiIsIiRkcm9wZG93biIsIiRyZXN1bHRzQ29udGFpbmVyIiwic29ydGVyIiwiaGlnaGxpZ2h0Rmlyc3RJdGVtIiwiJHNlbGVjdGVkIiwiZmlyc3QiLCJlbnN1cmVIaWdobGlnaHRWaXNpYmxlIiwic2V0Q2xhc3NlcyIsInNlbGYiLCJjdXJyZW50Iiwic2VsZWN0ZWQiLCJzZWxlY3RlZElkcyIsInMiLCJlYWNoIiwiY2xhc3NMaXN0IiwiYWRkIiwic2hvd0xvYWRpbmciLCJsb2FkaW5nTW9yZSIsImxvYWRpbmciLCJkaXNhYmxlZCIsInRleHQiLCIkbG9hZGluZyIsInByZXBlbmQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhdHRycyIsIm1hdGNoZXMiLCJ3aW5kb3ciLCJFbGVtZW50IiwibXNNYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJfcmVzdWx0SWQiLCJ0aXRsZSIsInJvbGUiLCJ2YWwiLCJsYWJlbCIsInRlbXBsYXRlIiwiJGNoaWxkcmVuIiwiYyIsImNoaWxkIiwiJGNoaWxkIiwiJGNoaWxkcmVuQ29udGFpbmVyIiwiY29udGFpbmVyIiwiJGNvbnRhaW5lciIsImlzT3BlbiIsInJlbW92ZUF0dHIiLCIkaGlnaGxpZ2h0ZWQiLCJnZXRIaWdobGlnaHRlZFJlc3VsdHMiLCJoYXNDbGFzcyIsImN1cnJlbnRJbmRleCIsIm5leHRJbmRleCIsIiRuZXh0IiwiZXEiLCJjdXJyZW50T2Zmc2V0Iiwib2Zmc2V0IiwidG9wIiwibmV4dFRvcCIsIm5leHRPZmZzZXQiLCJzY3JvbGxUb3AiLCJvdXRlckhlaWdodCIsIm5leHRCb3R0b20iLCJtb3VzZXdoZWVsIiwiYm90dG9tIiwiZGVsdGFZIiwiaXNBdFRvcCIsImlzQXRCb3R0b20iLCJoZWlnaHQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImV2dCIsIiR0aGlzIiwib3JpZ2luYWxFdmVudCIsInJlbW92ZUNsYXNzIiwiZGVzdHJveSIsIm9mZnNldERlbHRhIiwicmVzdWx0IiwiY29udGVudCIsImRpc3BsYXkiLCJpbm5lckhUTUwiLCJLRVlTIiwiQkFDS1NQQUNFIiwiVEFCIiwiRU5URVIiLCJTSElGVCIsIkNUUkwiLCJBTFQiLCJFU0MiLCJTUEFDRSIsIlBBR0VfVVAiLCJQQUdFX0RPV04iLCJFTkQiLCJIT01FIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJET1dOIiwiREVMRVRFIiwiQmFzZVNlbGVjdGlvbiIsIiRzZWxlY3Rpb24iLCJfdGFiaW5kZXgiLCJyZXN1bHRzSWQiLCJfaGFuZGxlQmx1ciIsIndoaWNoIiwidXBkYXRlIiwiX2F0dGFjaENsb3NlSGFuZGxlciIsIl9kZXRhY2hDbG9zZUhhbmRsZXIiLCJhY3RpdmVFbGVtZW50IiwiY29udGFpbnMiLCJib2R5IiwiJHRhcmdldCIsInRhcmdldCIsIiRzZWxlY3QiLCJjbG9zZXN0IiwiJGFsbCIsIm9mZiIsIiRzZWxlY3Rpb25Db250YWluZXIiLCJpc0VuYWJsZWQiLCJpc0Rpc2FibGVkIiwiU2luZ2xlU2VsZWN0aW9uIiwiaHRtbCIsIiRyZW5kZXJlZCIsInNlbGVjdGlvbkNvbnRhaW5lciIsInNlbGVjdGlvbiIsImZvcm1hdHRlZCIsIk11bHRpcGxlU2VsZWN0aW9uIiwiJHJlbW92ZSIsInBhcmVudCIsIiRzZWxlY3Rpb25zIiwic2VsZWN0aW9uSWRQcmVmaXgiLCJzZWxlY3Rpb25JZCIsInJlbW92ZUl0ZW0iLCJQbGFjZWhvbGRlciIsImRlY29yYXRlZCIsInBsYWNlaG9sZGVyIiwibm9ybWFsaXplUGxhY2Vob2xkZXIiLCJfIiwiY3JlYXRlUGxhY2Vob2xkZXIiLCIkcGxhY2Vob2xkZXIiLCJzaW5nbGVQbGFjZWhvbGRlciIsIm11bHRpcGxlU2VsZWN0aW9ucyIsIkFsbG93Q2xlYXIiLCJfaGFuZGxlQ2xlYXIiLCJfaGFuZGxlS2V5Ym9hcmRDbGVhciIsIiRjbGVhciIsInByZXZpb3VzVmFsIiwidW5zZWxlY3REYXRhIiwicHJldmVudGVkIiwicmVtb3ZlQWxsIiwiU2VhcmNoIiwiJHNlYXJjaCIsIiRzZWFyY2hDb250YWluZXIiLCJfdHJhbnNmZXJUYWJJbmRleCIsInJlc2l6ZVNlYXJjaCIsIl9rZXlVcFByZXZlbnRlZCIsImlzRGVmYXVsdFByZXZlbnRlZCIsIiRwcmV2aW91c0Nob2ljZSIsImxhc3QiLCJzZWFyY2hSZW1vdmVDaG9pY2UiLCJtc2llIiwiZG9jdW1lbnRNb2RlIiwiZGlzYWJsZUlucHV0RXZlbnRzIiwidHlwZSIsImhhbmRsZVNlYXJjaCIsInNlYXJjaEhhZEZvY3VzIiwiaW5wdXQiLCJ0ZXJtIiwiY3NzIiwid2lkdGgiLCJtaW5pbXVtV2lkdGgiLCJTZWxlY3Rpb25DU1MiLCJzZWxlY3Rpb25Dc3NDbGFzcyIsImFkZENsYXNzIiwiRXZlbnRSZWxheSIsInJlbGF5RXZlbnRzIiwicHJldmVudGFibGVFdmVudHMiLCJFdmVudCIsIlRyYW5zbGF0aW9uIiwiZGljdCIsImFsbCIsImV4dGVuZCIsInRyYW5zbGF0aW9uIiwiX2NhY2hlIiwibG9hZFBhdGgiLCJwYXRoIiwidHJhbnNsYXRpb25zIiwiZGlhY3JpdGljcyIsIkJhc2VBZGFwdGVyIiwicXVlcnkiLCJnZW5lcmF0ZVJlc3VsdElkIiwiU2VsZWN0QWRhcHRlciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWxlY3RlZEVsZW1lbnQiLCJzZWxlY3QiLCJ0YWdOYW1lIiwiY3VycmVudERhdGEiLCJ1bnNlbGVjdCIsImFkZE9wdGlvbnMiLCJ0ZXh0Q29udGVudCIsImlubmVyVGV4dCIsIm5vcm1hbGl6ZWREYXRhIiwiX25vcm1hbGl6ZUl0ZW0iLCJkZWZhdWx0cyIsIm1hdGNoZXIiLCJBcnJheUFkYXB0ZXIiLCJfZGF0YVRvQ29udmVydCIsImNvbnZlcnRUb09wdGlvbnMiLCJlbG0iLCIkZXhpc3RpbmciLCJleGlzdGluZ0lkcyIsIm9ubHlJdGVtIiwiJGV4aXN0aW5nT3B0aW9uIiwiZXhpc3RpbmdEYXRhIiwibmV3RGF0YSIsIiRuZXdPcHRpb24iLCJyZXBsYWNlV2l0aCIsIkFqYXhBZGFwdGVyIiwiYWpheE9wdGlvbnMiLCJfYXBwbHlEZWZhdWx0cyIsInByb2Nlc3NSZXN1bHRzIiwicSIsInRyYW5zcG9ydCIsInN1Y2Nlc3MiLCJmYWlsdXJlIiwiJHJlcXVlc3QiLCJhamF4IiwidGhlbiIsImZhaWwiLCJfcmVxdWVzdCIsImlzRnVuY3Rpb24iLCJhYm9ydCIsInVybCIsInJlcXVlc3QiLCJpc0FycmF5Iiwic3RhdHVzIiwiZGVsYXkiLCJfcXVlcnlUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiVGFncyIsInRhZ3MiLCJjcmVhdGVUYWciLCJpbnNlcnRUYWciLCJ0IiwidGFnIiwiX3JlbW92ZU9sZFRhZ3MiLCJwYWdlIiwid3JhcHBlciIsImNoZWNrQ2hpbGRyZW4iLCJvcHRpb25UZXh0IiwidG9VcHBlckNhc2UiLCJwYXJhbXNUZXJtIiwiY2hlY2tUZXh0IiwiVG9rZW5pemVyIiwidG9rZW5pemVyIiwiZHJvcGRvd24iLCJjcmVhdGVBbmRTZWxlY3QiLCIkZXhpc3RpbmdPcHRpb25zIiwidG9rZW5EYXRhIiwic2VwYXJhdG9ycyIsInRlcm1DaGFyIiwic3Vic3RyIiwicGFydFBhcmFtcyIsIk1pbmltdW1JbnB1dExlbmd0aCIsIiRlIiwibWluaW11bUlucHV0TGVuZ3RoIiwibWluaW11bSIsIk1heGltdW1JbnB1dExlbmd0aCIsIm1heGltdW1JbnB1dExlbmd0aCIsIm1heGltdW0iLCJNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoIiwibWF4aW11bVNlbGVjdGlvbkxlbmd0aCIsIl9jaGVja0lmTWF4aW11bVNlbGVjdGVkIiwic3VjY2Vzc0NhbGxiYWNrIiwiY291bnQiLCJEcm9wZG93biIsInNob3dTZWFyY2giLCJIaWRlUGxhY2Vob2xkZXIiLCJyZW1vdmVQbGFjZWhvbGRlciIsIm1vZGlmaWVkRGF0YSIsIkluZmluaXRlU2Nyb2xsIiwibGFzdFBhcmFtcyIsIiRsb2FkaW5nTW9yZSIsImNyZWF0ZUxvYWRpbmdNb3JlIiwic2hvd0xvYWRpbmdNb3JlIiwibG9hZE1vcmVJZk5lZWRlZCIsImlzTG9hZE1vcmVWaXNpYmxlIiwiZG9jdW1lbnRFbGVtZW50IiwibG9hZGluZ01vcmVPZmZzZXQiLCJsb2FkTW9yZSIsInBhZ2luYXRpb24iLCJtb3JlIiwiQXR0YWNoQm9keSIsIiRkcm9wZG93blBhcmVudCIsIl9zaG93RHJvcGRvd24iLCJfYXR0YWNoUG9zaXRpb25pbmdIYW5kbGVyIiwiX2JpbmRDb250YWluZXJSZXN1bHRIYW5kbGVycyIsIl9oaWRlRHJvcGRvd24iLCJfZGV0YWNoUG9zaXRpb25pbmdIYW5kbGVyIiwiJGRyb3Bkb3duQ29udGFpbmVyIiwiZGV0YWNoIiwiX2NvbnRhaW5lclJlc3VsdHNIYW5kbGVyc0JvdW5kIiwiX3Bvc2l0aW9uRHJvcGRvd24iLCJfcmVzaXplRHJvcGRvd24iLCJzY3JvbGxFdmVudCIsInJlc2l6ZUV2ZW50Iiwib3JpZW50YXRpb25FdmVudCIsIiR3YXRjaGVycyIsInBhcmVudHMiLCJ4Iiwic2Nyb2xsTGVmdCIsInkiLCJldiIsIiR3aW5kb3ciLCJpc0N1cnJlbnRseUFib3ZlIiwiaXNDdXJyZW50bHlCZWxvdyIsIm5ld0RpcmVjdGlvbiIsInZpZXdwb3J0IiwiZW5vdWdoUm9vbUFib3ZlIiwiZW5vdWdoUm9vbUJlbG93IiwibGVmdCIsIiRvZmZzZXRQYXJlbnQiLCJvZmZzZXRQYXJlbnQiLCJwYXJlbnRPZmZzZXQiLCJpc0Nvbm5lY3RlZCIsIm91dGVyV2lkdGgiLCJtaW5XaWR0aCIsImFwcGVuZFRvIiwiY291bnRSZXN1bHRzIiwiTWluaW11bVJlc3VsdHNGb3JTZWFyY2giLCJtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCIsIkluZmluaXR5IiwiU2VsZWN0T25DbG9zZSIsIl9oYW5kbGVTZWxlY3RPbkNsb3NlIiwib3JpZ2luYWxTZWxlY3QyRXZlbnQiLCIkaGlnaGxpZ2h0ZWRSZXN1bHRzIiwiQ2xvc2VPblNlbGVjdCIsIl9zZWxlY3RUcmlnZ2VyZWQiLCJjdHJsS2V5IiwibWV0YUtleSIsIkRyb3Bkb3duQ1NTIiwiZHJvcGRvd25Dc3NDbGFzcyIsImVycm9yTG9hZGluZyIsImlucHV0VG9vTG9uZyIsIm92ZXJDaGFycyIsImlucHV0VG9vU2hvcnQiLCJyZW1haW5pbmdDaGFycyIsIm1heGltdW1TZWxlY3RlZCIsIm5vUmVzdWx0cyIsInNlYXJjaGluZyIsInJlbW92ZUFsbEl0ZW1zIiwiUmVzdWx0c0xpc3QiLCJTZWxlY3Rpb25TZWFyY2giLCJESUFDUklUSUNTIiwiU2VsZWN0RGF0YSIsIkFycmF5RGF0YSIsIkFqYXhEYXRhIiwiRHJvcGRvd25TZWFyY2giLCJFbmdsaXNoVHJhbnNsYXRpb24iLCJEZWZhdWx0cyIsInJlc2V0IiwidG9rZW5TZXBhcmF0b3JzIiwicmVzdWx0c0FkYXB0ZXIiLCJzZWxlY3RPbkNsb3NlIiwiZHJvcGRvd25BZGFwdGVyIiwibXVsdGlwbGUiLCJTZWFyY2hhYmxlRHJvcGRvd24iLCJjbG9zZU9uU2VsZWN0Iiwic2VsZWN0aW9uQWRhcHRlciIsImFsbG93Q2xlYXIiLCJsYW5ndWFnZSIsIl9yZXNvbHZlTGFuZ3VhZ2UiLCJ1bmlxdWVMYW5ndWFnZXMiLCJsIiwiX3Byb2Nlc3NUcmFuc2xhdGlvbnMiLCJkZWJ1ZyIsInN0cmlwRGlhY3JpdGljcyIsImEiLCJvcmlnaW5hbCIsImFtZExhbmd1YWdlQmFzZSIsImF1dG9jb21wbGV0ZSIsImRyb3Bkb3duQXV0b1dpZHRoIiwic2Nyb2xsQWZ0ZXJTZWxlY3QiLCJ0ZW1wbGF0ZVJlc3VsdCIsInRlbXBsYXRlU2VsZWN0aW9uIiwidGhlbWUiLCJhcHBseUZyb21FbGVtZW50Iiwib3B0aW9uTGFuZ3VhZ2UiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJlbGVtZW50TGFuZ3VhZ2UiLCJwYXJlbnRMYW5ndWFnZSIsImxhbmd1YWdlcyIsImlzRW1wdHlPYmplY3QiLCJpc1BsYWluT2JqZWN0IiwicmVzb2x2ZWRMYW5ndWFnZXMiLCJsYW5ndWFnZVBhcnRzIiwiYmFzZUxhbmd1YWdlIiwibGFuZ3VhZ2VEYXRhIiwiZXgiLCJ3YXJuIiwic2V0IiwiY2FtZWxLZXkiLCJjYW1lbENhc2UiLCJjb252ZXJ0ZWREYXRhIiwiT3B0aW9ucyIsImZyb21FbGVtZW50IiwiZXhjbHVkZWREYXRhIiwiZGlyIiwiZGF0YXNldCIsInVwcGVyQ2FzZUxldHRlciIsImxldHRlciIsImF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVOYW1lIiwiZGF0YU5hbWUiLCJkYXRhVmFsdWUiLCJjYW1lbERhdGFOYW1lIiwianF1ZXJ5IiwiU2VsZWN0MiIsIl9nZW5lcmF0ZUlkIiwidGFiaW5kZXgiLCJEYXRhQWRhcHRlciIsIl9wbGFjZUNvbnRhaW5lciIsIlNlbGVjdGlvbkFkYXB0ZXIiLCJEcm9wZG93bkFkYXB0ZXIiLCJSZXN1bHRzQWRhcHRlciIsIl9iaW5kQWRhcHRlcnMiLCJfcmVnaXN0ZXJEb21FdmVudHMiLCJfcmVnaXN0ZXJEYXRhRXZlbnRzIiwiX3JlZ2lzdGVyU2VsZWN0aW9uRXZlbnRzIiwiX3JlZ2lzdGVyRHJvcGRvd25FdmVudHMiLCJfcmVnaXN0ZXJSZXN1bHRzRXZlbnRzIiwiX3JlZ2lzdGVyRXZlbnRzIiwiaW5pdGlhbERhdGEiLCJfc3luY0F0dHJpYnV0ZXMiLCJpbnNlcnRBZnRlciIsIl9yZXNvbHZlV2lkdGgiLCJtZXRob2QiLCJXSURUSCIsInN0eWxlV2lkdGgiLCJlbGVtZW50V2lkdGgiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIl9zeW5jQSIsIl9zeW5jUyIsIl9zeW5jU3VidHJlZSIsIl9vYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsIm5vblJlbGF5RXZlbnRzIiwidG9nZ2xlRHJvcGRvd24iLCJmb2N1cyIsImFsdEtleSIsImNsb3NlIiwib3BlbiIsIl9pc0NoYW5nZU11dGF0aW9uIiwiYWRkZWROb2RlcyIsIm5vZGUiLCJyZW1vdmVkTm9kZXMiLCJzb21lIiwibXV0YXRpb24iLCJjaGFuZ2VkIiwiYWN0dWFsVHJpZ2dlciIsInByZVRyaWdnZXJNYXAiLCJwcmVUcmlnZ2VyTmFtZSIsInByZVRyaWdnZXJBcmdzIiwiaGFzRm9jdXMiLCJlbmFibGUiLCJuZXdWYWwiLCJkaXNjb25uZWN0IiwicmVtb3ZlRGF0YSIsInRoaXNNZXRob2RzIiwiaW5zdGFuY2VPcHRpb25zIiwiaW5zdGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLFdBQVNBLE9BQU8sRUFBRTtFQUNmLElBQUksSUFBMEMsRUFBRTtJQUM1QztJQUNBQyxpQ0FBTyxDQUFDLHlFQUFRLENBQUMsb0NBQUVELE9BQU87QUFBQTtBQUFBO0FBQUEsb0dBQUM7RUFDL0IsQ0FBQyxNQUFNLEVBb0JOO0FB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SXdaLFVBQVUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsTUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLE1BQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixR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QUUsQ0FBQ0s7SUFDaEIsQ0FBQztFQUNMLENBQUMsRUFBRzs7RUFFSjtFQUNBO0VBQ0EsSUFBSUgsT0FBTyxHQUFHRixFQUFFLENBQUNLLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs7RUFFMUM7RUFDQTtFQUNBO0VBQ0FOLE1BQU0sQ0FBQ0UsRUFBRSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsR0FBR0gsRUFBRTs7RUFFMUI7RUFDQSxPQUFPRSxPQUFPO0FBQ2xCLENBQUMsQ0FBQyxDIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcclxuICogU2VsZWN0MiA0LjEuMC1iZXRhLjFcclxuICogaHR0cHM6Ly9zZWxlY3QyLmdpdGh1Yi5pb1xyXG4gKlxyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICogaHR0cHM6Ly9naXRodWIuY29tL3NlbGVjdDIvc2VsZWN0Mi9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXHJcbiAqL1xyXG47XHJcbihmdW5jdGlvbihmYWN0b3J5KSB7XHJcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxyXG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcclxuICAgICAgICAvLyBOb2RlL0NvbW1vbkpTXHJcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyb290LCBqUXVlcnkpIHtcclxuICAgICAgICAgICAgaWYgKGpRdWVyeSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZXF1aXJlKCdqUXVlcnknKSByZXR1cm5zIGEgZmFjdG9yeSB0aGF0IHJlcXVpcmVzIHdpbmRvdyB0b1xyXG4gICAgICAgICAgICAgICAgLy8gYnVpbGQgYSBqUXVlcnkgaW5zdGFuY2UsIHdlIG5vcm1hbGl6ZSBob3cgd2UgdXNlIG1vZHVsZXNcclxuICAgICAgICAgICAgICAgIC8vIHRoYXQgcmVxdWlyZSB0aGlzIHBhdHRlcm4gYnV0IHRoZSB3aW5kb3cgcHJvdmlkZWQgaXMgYSBub29wXHJcbiAgICAgICAgICAgICAgICAvLyBpZiBpdCdzIGRlZmluZWQgKGhvdyBqcXVlcnkgd29ya3MpXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jykocm9vdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xyXG4gICAgICAgICAgICByZXR1cm4galF1ZXJ5O1xyXG4gICAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xyXG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcclxuICAgIH1cclxufShmdW5jdGlvbihqUXVlcnkpIHtcclxuICAgIC8vIFRoaXMgaXMgbmVlZGVkIHNvIHdlIGNhbiBjYXRjaCB0aGUgQU1EIGxvYWRlciBjb25maWd1cmF0aW9uIGFuZCB1c2UgaXRcclxuICAgIC8vIFRoZSBpbm5lciBmaWxlIHNob3VsZCBiZSB3cmFwcGVkIChieSBgYmFubmVyLnN0YXJ0LmpzYCkgaW4gYSBmdW5jdGlvbiB0aGF0XHJcbiAgICAvLyByZXR1cm5zIHRoZSBBTUQgbG9hZGVyIHJlZmVyZW5jZXMuXHJcbiAgICB2YXIgUzIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gUmVzdG9yZSB0aGUgU2VsZWN0MiBBTUQgbG9hZGVyIHNvIGl0IGNhbiBiZSB1c2VkXHJcbiAgICAgICAgLy8gTmVlZGVkIG1vc3RseSBpbiB0aGUgbGFuZ3VhZ2UgZmlsZXMsIHdoZXJlIHRoZSBsb2FkZXIgaXMgbm90IGluc2VydGVkXHJcbiAgICAgICAgaWYgKGpRdWVyeSAmJiBqUXVlcnkuZm4gJiYgalF1ZXJ5LmZuLnNlbGVjdDIgJiYgalF1ZXJ5LmZuLnNlbGVjdDIuYW1kKSB7XHJcbiAgICAgICAgICAgIHZhciBTMiA9IGpRdWVyeS5mbi5zZWxlY3QyLmFtZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIFMyO1xyXG4gICAgICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCFTMiB8fCAhUzIucmVxdWlyZWpzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVMyKSB7IFMyID0ge307IH0gZWxzZSB7IHJlcXVpcmUgPSBTMjsgfVxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBAbGljZW5zZSBhbG1vbmQgMC4zLjMgQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMuXHJcbiAgICAgICAgICAgICAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSwgaHR0cDovL2dpdGh1Yi5jb20vcmVxdWlyZWpzL2FsbW9uZC9MSUNFTlNFXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIC8vR29pbmcgc2xvcHB5IHRvIGF2b2lkICd1c2Ugc3RyaWN0JyBzdHJpbmcgY29zdCwgYnV0IHN0cmljdCBwcmFjdGljZXMgc2hvdWxkXHJcbiAgICAgICAgICAgICAgICAvL2JlIGZvbGxvd2VkLlxyXG4gICAgICAgICAgICAgICAgLypnbG9iYWwgc2V0VGltZW91dDogZmFsc2UgKi9cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWlyZWpzLCByZXF1aXJlLCBkZWZpbmU7XHJcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24odW5kZWYpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWFpbiwgcmVxLCBtYWtlTWFwLCBoYW5kbGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5lZCA9IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YWl0aW5nID0ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZyA9IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbmluZyA9IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHMgPSBbXS5zbGljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAganNTdWZmaXhSZWdFeHAgPSAvXFwuanMkLztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFzUHJvcChvYmosIHByb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhc093bi5jYWxsKG9iaiwgcHJvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBHaXZlbiBhIHJlbGF0aXZlIG1vZHVsZSBuYW1lLCBsaWtlIC4vc29tZXRoaW5nLCBub3JtYWxpemUgaXQgdG9cclxuICAgICAgICAgICAgICAgICAgICAgKiBhIHJlYWwgbmFtZSB0aGF0IGNhbiBiZSBtYXBwZWQgdG8gYSBwYXRoLlxyXG4gICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHRoZSByZWxhdGl2ZSBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGJhc2VOYW1lIGEgcmVhbCBuYW1lIHRoYXQgdGhlIG5hbWUgYXJnIGlzIHJlbGF0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICogdG8uXHJcbiAgICAgICAgICAgICAgICAgICAgICogQHJldHVybnMge1N0cmluZ30gbm9ybWFsaXplZCBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbm9ybWFsaXplKG5hbWUsIGJhc2VOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lUGFydHMsIG5hbWVTZWdtZW50LCBtYXBWYWx1ZSwgZm91bmRNYXAsIGxhc3RJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kSSwgZm91bmRTdGFyTWFwLCBzdGFySSwgaSwgaiwgcGFydCwgbm9ybWFsaXplZEJhc2VQYXJ0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VQYXJ0cyA9IGJhc2VOYW1lICYmIGJhc2VOYW1lLnNwbGl0KFwiL1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcCA9IGNvbmZpZy5tYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFyTWFwID0gKG1hcCAmJiBtYXBbJyonXSkgfHwge307XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0FkanVzdCBhbnkgcmVsYXRpdmUgcGF0aHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gbmFtZS5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gbmFtZS5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdhbnRpbmcgbm9kZSBJRCBjb21wYXRpYmlsaXR5LCBzdHJpcCAuanMgZnJvbSBlbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9mIElEcy4gSGF2ZSB0byBkbyB0aGlzIGhlcmUsIGFuZCBub3QgaW4gbmFtZVRvVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIG5vZGUgYWxsb3dzIGVpdGhlciAuanMgb3Igbm9uIC5qcyB0byBtYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIHNhbWUgZmlsZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcubm9kZUlkQ29tcGF0ICYmIGpzU3VmZml4UmVnRXhwLnRlc3QobmFtZVtsYXN0SW5kZXhdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVbbGFzdEluZGV4XSA9IG5hbWVbbGFzdEluZGV4XS5yZXBsYWNlKGpzU3VmZml4UmVnRXhwLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnRzIHdpdGggYSAnLicgc28gbmVlZCB0aGUgYmFzZU5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lWzBdLmNoYXJBdCgwKSA9PT0gJy4nICYmIGJhc2VQYXJ0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQ29udmVydCBiYXNlTmFtZSB0byBhcnJheSwgYW5kIGxvcCBvZmYgdGhlIGxhc3QgcGFydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NvIHRoYXQgLiBtYXRjaGVzIHRoYXQgJ2RpcmVjdG9yeScgYW5kIG5vdCBuYW1lIG9mIHRoZSBiYXNlTmFtZSdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tb2R1bGUuIEZvciBpbnN0YW5jZSwgYmFzZU5hbWUgb2YgJ29uZS90d28vdGhyZWUnLCBtYXBzIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8nb25lL3R3by90aHJlZS5qcycsIGJ1dCB3ZSB3YW50IHRoZSBkaXJlY3RvcnksICdvbmUvdHdvJyBmb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMgbm9ybWFsaXphdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkQmFzZVBhcnRzID0gYmFzZVBhcnRzLnNsaWNlKDAsIGJhc2VQYXJ0cy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gbm9ybWFsaXplZEJhc2VQYXJ0cy5jb25jYXQobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdGFydCB0cmltRG90c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gbmFtZVtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFydCA9PT0gJy4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIC09IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnLi4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGF0IHRoZSBzdGFydCwgb3IgcHJldmlvdXMgdmFsdWUgaXMgc3RpbGwgLi4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgdGhlbSBzbyB0aGF0IHdoZW4gY29udmVydGVkIHRvIGEgcGF0aCBpdCBtYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RpbGwgd29yayB3aGVuIGNvbnZlcnRlZCB0byBhIHBhdGgsIGV2ZW4gdGhvdWdoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFzIGFuIElEIGl0IGlzIGxlc3MgdGhhbiBpZGVhbC4gSW4gbGFyZ2VyIHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbGVhc2VzLCBtYXkgYmUgYmV0dGVyIHRvIGp1c3Qga2ljayBvdXQgYW4gZXJyb3IuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwIHx8IChpID09PSAxICYmIG5hbWVbMl0gPT09ICcuLicpIHx8IG5hbWVbaSAtIDFdID09PSAnLi4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS5zcGxpY2UoaSAtIDEsIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSAtPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lbmQgdHJpbURvdHNcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gbmFtZS5qb2luKCcvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQXBwbHkgbWFwIGNvbmZpZyBpZiBhdmFpbGFibGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYmFzZVBhcnRzIHx8IHN0YXJNYXApICYmIG1hcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVBhcnRzID0gbmFtZS5zcGxpdCgnLycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IG5hbWVQYXJ0cy5sZW5ndGg7IGkgPiAwOyBpIC09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lU2VnbWVudCA9IG5hbWVQYXJ0cy5zbGljZSgwLCBpKS5qb2luKFwiL1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2VQYXJ0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0ZpbmQgdGhlIGxvbmdlc3QgYmFzZU5hbWUgc2VnbWVudCBtYXRjaCBpbiB0aGUgY29uZmlnLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1NvLCBkbyBqb2lucyBvbiB0aGUgYmlnZ2VzdCB0byBzbWFsbGVzdCBsZW5ndGhzIG9mIGJhc2VQYXJ0cy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gYmFzZVBhcnRzLmxlbmd0aDsgaiA+IDA7IGogLT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwVmFsdWUgPSBtYXBbYmFzZVBhcnRzLnNsaWNlKDAsIGopLmpvaW4oJy8nKV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9iYXNlTmFtZSBzZWdtZW50IGhhcyAgY29uZmlnLCBmaW5kIGlmIGl0IGhhcyBvbmUgZm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMgbmFtZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFZhbHVlID0gbWFwVmFsdWVbbmFtZVNlZ21lbnRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL01hdGNoLCB1cGRhdGUgbmFtZSB0byB0aGUgbmV3IHZhbHVlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZE1hcCA9IG1hcFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZEkgPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZE1hcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgZm9yIGEgc3RhciBtYXAgbWF0Y2gsIGJ1dCBqdXN0IGhvbGQgb24gdG8gaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBhIHNob3J0ZXIgc2VnbWVudCBtYXRjaCBsYXRlciBpbiBhIG1hdGNoaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25maWcsIHRoZW4gZmF2b3Igb3ZlciB0aGlzIHN0YXIgbWFwLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZm91bmRTdGFyTWFwICYmIHN0YXJNYXAgJiYgc3Rhck1hcFtuYW1lU2VnbWVudF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRTdGFyTWFwID0gc3Rhck1hcFtuYW1lU2VnbWVudF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJJID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3VuZE1hcCAmJiBmb3VuZFN0YXJNYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZE1hcCA9IGZvdW5kU3Rhck1hcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZEkgPSBzdGFySTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmRNYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lUGFydHMuc3BsaWNlKDAsIGZvdW5kSSwgZm91bmRNYXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lUGFydHMuam9pbignLycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1ha2VSZXF1aXJlKHJlbE5hbWUsIGZvcmNlU3luYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0EgdmVyc2lvbiBvZiBhIHJlcXVpcmUgZnVuY3Rpb24gdGhhdCBwYXNzZXMgYSBtb2R1bGVOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZhbHVlIGZvciBpdGVtcyB0aGF0IG1heSBuZWVkIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2xvb2sgdXAgcGF0aHMgcmVsYXRpdmUgdG8gdGhlIG1vZHVsZU5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gYXBzLmNhbGwoYXJndW1lbnRzLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0lmIGZpcnN0IGFyZyBpcyBub3QgcmVxdWlyZSgnc3RyaW5nJyksIGFuZCB0aGVyZSBpcyBvbmx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uZSBhcmcsIGl0IGlzIHRoZSBhcnJheSBmb3JtIHdpdGhvdXQgYSBjYWxsYmFjay4gSW5zZXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2EgbnVsbCBzbyB0aGF0IHRoZSBmb2xsb3dpbmcgY29uY2F0IGlzIGNvcnJlY3QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnICYmIGFyZ3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcS5hcHBseSh1bmRlZiwgYXJncy5jb25jYXQoW3JlbE5hbWUsIGZvcmNlU3luY10pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1ha2VOb3JtYWxpemUocmVsTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuYW1lLCByZWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1ha2VMb2FkKGRlcE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbmVkW2RlcE5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjYWxsRGVwKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc1Byb3Aod2FpdGluZywgbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gd2FpdGluZ1tuYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB3YWl0aW5nW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pbmdbbmFtZV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi5hcHBseSh1bmRlZiwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzUHJvcChkZWZpbmVkLCBuYW1lKSAmJiAhaGFzUHJvcChkZWZpbmluZywgbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gJyArIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZpbmVkW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9UdXJucyBhIHBsdWdpbiFyZXNvdXJjZSB0byBbcGx1Z2luLCByZXNvdXJjZV1cclxuICAgICAgICAgICAgICAgICAgICAvL3dpdGggdGhlIHBsdWdpbiBiZWluZyB1bmRlZmluZWQgaWYgdGhlIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAvL2RpZCBub3QgaGF2ZSBhIHBsdWdpbiBwcmVmaXguXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc3BsaXRQcmVmaXgobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBuYW1lID8gbmFtZS5pbmRleE9mKCchJykgOiAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeCA9IG5hbWUuc3Vic3RyaW5nKDAsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZyhpbmRleCArIDEsIG5hbWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3ByZWZpeCwgbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL0NyZWF0ZXMgYSBwYXJ0cyBhcnJheSBmb3IgYSByZWxOYW1lIHdoZXJlIGZpcnN0IHBhcnQgaXMgcGx1Z2luIElELFxyXG4gICAgICAgICAgICAgICAgICAgIC8vc2Vjb25kIHBhcnQgaXMgcmVzb3VyY2UgSUQuIEFzc3VtZXMgcmVsTmFtZSBoYXMgYWxyZWFkeSBiZWVuIG5vcm1hbGl6ZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbWFrZVJlbFBhcnRzKHJlbE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbE5hbWUgPyBzcGxpdFByZWZpeChyZWxOYW1lKSA6IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogTWFrZXMgYSBuYW1lIG1hcCwgbm9ybWFsaXppbmcgdGhlIG5hbWUsIGFuZCB1c2luZyBhIHBsdWdpblxyXG4gICAgICAgICAgICAgICAgICAgICAqIGZvciBub3JtYWxpemF0aW9uIGlmIG5lY2Vzc2FyeS4gR3JhYnMgYSByZWYgdG8gcGx1Z2luXHJcbiAgICAgICAgICAgICAgICAgICAgICogdG9vLCBhcyBhbiBvcHRpbWl6YXRpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgbWFrZU1hcCA9IGZ1bmN0aW9uKG5hbWUsIHJlbFBhcnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwbHVnaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cyA9IHNwbGl0UHJlZml4KG5hbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4ID0gcGFydHNbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxSZXNvdXJjZU5hbWUgPSByZWxQYXJ0c1sxXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBwYXJ0c1sxXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmVmaXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeCA9IG5vcm1hbGl6ZShwcmVmaXgsIHJlbFJlc291cmNlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4gPSBjYWxsRGVwKHByZWZpeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vTm9ybWFsaXplIGFjY29yZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJlZml4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGx1Z2luICYmIHBsdWdpbi5ub3JtYWxpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gcGx1Z2luLm5vcm1hbGl6ZShuYW1lLCBtYWtlTm9ybWFsaXplKHJlbFJlc291cmNlTmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gbm9ybWFsaXplKG5hbWUsIHJlbFJlc291cmNlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gbm9ybWFsaXplKG5hbWUsIHJlbFJlc291cmNlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cyA9IHNwbGl0UHJlZml4KG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4ID0gcGFydHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gcGFydHNbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJlZml4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luID0gY2FsbERlcChwcmVmaXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1VzaW5nIHJpZGljdWxvdXMgcHJvcGVydHkgbmFtZXMgZm9yIHNwYWNlIHJlYXNvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGY6IHByZWZpeCA/IHByZWZpeCArICchJyArIG5hbWUgOiBuYW1lLCAvL2Z1bGxOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHI6IHByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHA6IHBsdWdpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1ha2VDb25maWcobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGNvbmZpZyAmJiBjb25maWcuY29uZmlnICYmIGNvbmZpZy5jb25maWdbbmFtZV0pIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmU6IGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWtlUmVxdWlyZShuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBkZWZpbmVkW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGRlZmluZWRbbmFtZV0gPSB7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGRlZmluZWRbbmFtZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBtYWtlQ29uZmlnKG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbiA9IGZ1bmN0aW9uKG5hbWUsIGRlcHMsIGNhbGxiYWNrLCByZWxOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjanNNb2R1bGUsIGRlcE5hbWUsIHJldCwgbWFwLCBpLCByZWxQYXJ0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVHlwZSA9IHR5cGVvZiBjYWxsYmFjayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzaW5nRXhwb3J0cztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vVXNlIG5hbWUgaWYgbm8gcmVsTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxOYW1lID0gcmVsTmFtZSB8fCBuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxQYXJ0cyA9IG1ha2VSZWxQYXJ0cyhyZWxOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQ2FsbCB0aGUgY2FsbGJhY2sgdG8gZGVmaW5lIHRoZSBtb2R1bGUsIGlmIG5lY2Vzc2FyeS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrVHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgY2FsbGJhY2tUeXBlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1B1bGwgb3V0IHRoZSBkZWZpbmVkIGRlcGVuZGVuY2llcyBhbmQgcGFzcyB0aGUgb3JkZXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy92YWx1ZXMgdG8gdGhlIGNhbGxiYWNrLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9EZWZhdWx0IHRvIFtyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGVdIGlmIG5vIGRlcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcHMgPSAhZGVwcy5sZW5ndGggJiYgY2FsbGJhY2subGVuZ3RoID8gWydyZXF1aXJlJywgJ2V4cG9ydHMnLCAnbW9kdWxlJ10gOiBkZXBzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRlcHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAgPSBtYWtlTWFwKGRlcHNbaV0sIHJlbFBhcnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBOYW1lID0gbWFwLmY7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vRmFzdCBwYXRoIENvbW1vbkpTIHN0YW5kYXJkIGRlcGVuZGVuY2llcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVwTmFtZSA9PT0gXCJyZXF1aXJlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnc1tpXSA9IGhhbmRsZXJzLnJlcXVpcmUobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZXBOYW1lID09PSBcImV4cG9ydHNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0NvbW1vbkpTIG1vZHVsZSBzcGVjIDEuMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzW2ldID0gaGFuZGxlcnMuZXhwb3J0cyhuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNpbmdFeHBvcnRzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRlcE5hbWUgPT09IFwibW9kdWxlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Db21tb25KUyBtb2R1bGUgc3BlYyAxLjFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2pzTW9kdWxlID0gYXJnc1tpXSA9IGhhbmRsZXJzLm1vZHVsZShuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc1Byb3AoZGVmaW5lZCwgZGVwTmFtZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzUHJvcCh3YWl0aW5nLCBkZXBOYW1lKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNQcm9wKGRlZmluaW5nLCBkZXBOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzW2ldID0gY2FsbERlcChkZXBOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hcC5wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5wLmxvYWQobWFwLm4sIG1ha2VSZXF1aXJlKHJlbE5hbWUsIHRydWUpLCBtYWtlTG9hZChkZXBOYW1lKSwge30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzW2ldID0gZGVmaW5lZFtkZXBOYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobmFtZSArICcgbWlzc2luZyAnICsgZGVwTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IGNhbGxiYWNrID8gY2FsbGJhY2suYXBwbHkoZGVmaW5lZFtuYW1lXSwgYXJncykgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0lmIHNldHRpbmcgZXhwb3J0cyB2aWEgXCJtb2R1bGVcIiBpcyBpbiBwbGF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZmF2b3IgdGhhdCBvdmVyIHJldHVybiB2YWx1ZSBhbmQgZXhwb3J0cy4gQWZ0ZXIgdGhhdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Zhdm9yIGEgbm9uLXVuZGVmaW5lZCByZXR1cm4gdmFsdWUgb3ZlciBleHBvcnRzIHVzZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2pzTW9kdWxlICYmIGNqc01vZHVsZS5leHBvcnRzICE9PSB1bmRlZiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjanNNb2R1bGUuZXhwb3J0cyAhPT0gZGVmaW5lZFtuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbmVkW25hbWVdID0gY2pzTW9kdWxlLmV4cG9ydHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXQgIT09IHVuZGVmIHx8ICF1c2luZ0V4cG9ydHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Vc2UgdGhlIHJldHVybiB2YWx1ZSBmcm9tIHRoZSBmdW5jdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5lZFtuYW1lXSA9IHJldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9NYXkganVzdCBiZSBhbiBvYmplY3QgZGVmaW5pdGlvbiBmb3IgdGhlIG1vZHVsZS4gT25seVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy93b3JyeSBhYm91dCBkZWZpbmluZyBpZiBoYXZlIGEgbW9kdWxlIG5hbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbmVkW25hbWVdID0gY2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlanMgPSByZXF1aXJlID0gcmVxID0gZnVuY3Rpb24oZGVwcywgY2FsbGJhY2ssIHJlbE5hbWUsIGZvcmNlU3luYywgYWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGVwcyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJzW2RlcHNdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jYWxsYmFjayBpbiB0aGlzIGNhc2UgaXMgcmVhbGx5IHJlbE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlcnNbZGVwc10oY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9KdXN0IHJldHVybiB0aGUgbW9kdWxlIHdhbnRlZC4gSW4gdGhpcyBzY2VuYXJpbywgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RlcHMgYXJnIGlzIHRoZSBtb2R1bGUgbmFtZSwgYW5kIHNlY29uZCBhcmcgKGlmIHBhc3NlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaXMganVzdCB0aGUgcmVsTmFtZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vTm9ybWFsaXplIG1vZHVsZSBuYW1lLCBpZiBpdCBjb250YWlucyAuIG9yIC4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbERlcChtYWtlTWFwKGRlcHMsIG1ha2VSZWxQYXJ0cyhjYWxsYmFjaykpLmYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFkZXBzLnNwbGljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kZXBzIGlzIGEgY29uZmlnIG9iamVjdCwgbm90IGFuIGFycmF5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnID0gZGVwcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuZGVwcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcShjb25maWcuZGVwcywgY29uZmlnLmNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrLnNwbGljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2FsbGJhY2sgaXMgYW4gYXJyYXksIHdoaWNoIG1lYW5zIGl0IGlzIGEgZGVwZW5kZW5jeSBsaXN0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQWRqdXN0IGFyZ3MgaWYgdGhlcmUgYXJlIGRlcGVuZGVuY2llc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcHMgPSBjYWxsYmFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IHJlbE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsTmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcHMgPSB1bmRlZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9TdXBwb3J0IHJlcXVpcmUoWydhJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vSWYgcmVsTmFtZSBpcyBhIGZ1bmN0aW9uLCBpdCBpcyBhbiBlcnJiYWNrIGhhbmRsZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc28gcmVtb3ZlIGl0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlbE5hbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbE5hbWUgPSBmb3JjZVN5bmM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVN5bmMgPSBhbHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vU2ltdWxhdGUgYXN5bmMgY2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JjZVN5bmMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW4odW5kZWYsIGRlcHMsIGNhbGxiYWNrLCByZWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVXNpbmcgYSBub24temVybyB2YWx1ZSBiZWNhdXNlIG9mIGNvbmNlcm4gZm9yIHdoYXQgb2xkIGJyb3dzZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RvLCBhbmQgbGF0ZXN0IGJyb3dzZXJzIFwidXBncmFkZVwiIHRvIDQgaWYgbG93ZXIgdmFsdWUgaXMgdXNlZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvdGltZXJzLmh0bWwjZG9tLXdpbmRvd3RpbWVycy1zZXR0aW1lb3V0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9JZiB3YW50IGEgdmFsdWUgaW1tZWRpYXRlbHksIHVzZSByZXF1aXJlKCdpZCcpIGluc3RlYWQgLS0gc29tZXRoaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoYXQgd29ya3MgaW4gYWxtb25kIG9uIHRoZSBnbG9iYWwgbGV2ZWwsIGJ1dCBub3QgZ3VhcmFudGVlZCBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdW5saWtlbHkgdG8gd29yayBpbiBvdGhlciBBTUQgaW1wbGVtZW50YXRpb25zLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluKHVuZGVmLCBkZXBzLCBjYWxsYmFjaywgcmVsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBKdXN0IGRyb3BzIHRoZSBjb25maWcgb24gdGhlIGZsb29yLCBidXQgcmV0dXJucyByZXEgaW4gY2FzZVxyXG4gICAgICAgICAgICAgICAgICAgICAqIHRoZSBjb25maWcgcmV0dXJuIHZhbHVlIGlzIHVzZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxLmNvbmZpZyA9IGZ1bmN0aW9uKGNmZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxKGNmZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogRXhwb3NlIG1vZHVsZSByZWdpc3RyeSBmb3IgZGVidWdnaW5nIGFuZCB0b29saW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWpzLl9kZWZpbmVkID0gZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lID0gZnVuY3Rpb24obmFtZSwgZGVwcywgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZWUgYWxtb25kIFJFQURNRTogaW5jb3JyZWN0IG1vZHVsZSBidWlsZCwgbm8gbW9kdWxlIG5hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9UaGlzIG1vZHVsZSBtYXkgbm90IGhhdmUgZGVwZW5kZW5jaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGVwcy5zcGxpY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGVwcyBpcyBub3QgYW4gYXJyYXksIHNvIHByb2JhYmx5IG1lYW5zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FuIG9iamVjdCBsaXRlcmFsIG9yIGZhY3RvcnkgZnVuY3Rpb24gZm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoZSB2YWx1ZS4gQWRqdXN0IGFyZ3MuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGRlcHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzUHJvcChkZWZpbmVkLCBuYW1lKSAmJiAhaGFzUHJvcCh3YWl0aW5nLCBuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FpdGluZ1tuYW1lXSA9IFtuYW1lLCBkZXBzLCBjYWxsYmFja107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZpbmUuYW1kID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnk6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBTMi5yZXF1aXJlanMgPSByZXF1aXJlanM7XHJcbiAgICAgICAgICAgICAgICBTMi5yZXF1aXJlID0gcmVxdWlyZTtcclxuICAgICAgICAgICAgICAgIFMyLmRlZmluZSA9IGRlZmluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgUzIuZGVmaW5lKFwiYWxtb25kXCIsIGZ1bmN0aW9uKCkge30pO1xyXG5cclxuICAgICAgICAvKiBnbG9iYWwgalF1ZXJ5OmZhbHNlLCAkOmZhbHNlICovXHJcbiAgICAgICAgUzIuZGVmaW5lKCdqcXVlcnknLCBbXSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBfJCA9IGpRdWVyeSB8fCAkO1xyXG5cclxuICAgICAgICAgICAgaWYgKF8kID09IG51bGwgJiYgY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgICAgICAgICAgICdTZWxlY3QyOiBBbiBpbnN0YW5jZSBvZiBqUXVlcnkgb3IgYSBqUXVlcnktY29tcGF0aWJsZSBsaWJyYXJ5IHdhcyBub3QgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZvdW5kLiBNYWtlIHN1cmUgdGhhdCB5b3UgYXJlIGluY2x1ZGluZyBqUXVlcnkgYmVmb3JlIFNlbGVjdDIgb24geW91ciAnICtcclxuICAgICAgICAgICAgICAgICAgICAnd2ViIHBhZ2UuJ1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIF8kO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTMi5kZWZpbmUoJ3NlbGVjdDIvdXRpbHMnLCBbXHJcbiAgICAgICAgICAgICdqcXVlcnknXHJcbiAgICAgICAgXSwgZnVuY3Rpb24oJCkge1xyXG4gICAgICAgICAgICB2YXIgVXRpbHMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIFV0aWxzLkV4dGVuZCA9IGZ1bmN0aW9uKENoaWxkQ2xhc3MsIFN1cGVyQ2xhc3MpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBCYXNlQ29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IENoaWxkQ2xhc3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIFN1cGVyQ2xhc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX19oYXNQcm9wLmNhbGwoU3VwZXJDbGFzcywga2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGlsZENsYXNzW2tleV0gPSBTdXBlckNsYXNzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEJhc2VDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBTdXBlckNsYXNzLnByb3RvdHlwZTtcclxuICAgICAgICAgICAgICAgIENoaWxkQ2xhc3MucHJvdG90eXBlID0gbmV3IEJhc2VDb25zdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICAgICAgQ2hpbGRDbGFzcy5fX3N1cGVyX18gPSBTdXBlckNsYXNzLnByb3RvdHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2hpbGRDbGFzcztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldE1ldGhvZHModGhlQ2xhc3MpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcm90byA9IHRoZUNsYXNzLnByb3RvdHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG1ldGhvZE5hbWUgaW4gcHJvdG8pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IHByb3RvW21ldGhvZE5hbWVdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG0gIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWV0aG9kTmFtZSA9PT0gJ2NvbnN0cnVjdG9yJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHMucHVzaChtZXRob2ROYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgVXRpbHMuRGVjb3JhdGUgPSBmdW5jdGlvbihTdXBlckNsYXNzLCBEZWNvcmF0b3JDbGFzcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlY29yYXRlZE1ldGhvZHMgPSBnZXRNZXRob2RzKERlY29yYXRvckNsYXNzKTtcclxuICAgICAgICAgICAgICAgIHZhciBzdXBlck1ldGhvZHMgPSBnZXRNZXRob2RzKFN1cGVyQ2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIERlY29yYXRlZENsYXNzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1bnNoaWZ0ID0gQXJyYXkucHJvdG90eXBlLnVuc2hpZnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdDb3VudCA9IERlY29yYXRvckNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsZWRDb25zdHJ1Y3RvciA9IFN1cGVyQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJnQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuc2hpZnQuY2FsbChhcmd1bWVudHMsIFN1cGVyQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxlZENvbnN0cnVjdG9yID0gRGVjb3JhdG9yQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGVkQ29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBEZWNvcmF0b3JDbGFzcy5kaXNwbGF5TmFtZSA9IFN1cGVyQ2xhc3MuZGlzcGxheU5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY3RyKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBEZWNvcmF0ZWRDbGFzcztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGUgPSBuZXcgY3RyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbSA9IDA7IG0gPCBzdXBlck1ldGhvZHMubGVuZ3RoOyBtKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3VwZXJNZXRob2QgPSBzdXBlck1ldGhvZHNbbV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIERlY29yYXRlZENsYXNzLnByb3RvdHlwZVtzdXBlck1ldGhvZF0gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdXBlckNsYXNzLnByb3RvdHlwZVtzdXBlck1ldGhvZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNhbGxlZE1ldGhvZCA9IGZ1bmN0aW9uKG1ldGhvZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTdHViIG91dCB0aGUgb3JpZ2luYWwgbWV0aG9kIGlmIGl0J3Mgbm90IGRlY29yYXRpbmcgYW4gYWN0dWFsIG1ldGhvZFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbE1ldGhvZCA9IGZ1bmN0aW9uKCkge307XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXRob2ROYW1lIGluIERlY29yYXRlZENsYXNzLnByb3RvdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbE1ldGhvZCA9IERlY29yYXRlZENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWNvcmF0ZWRNZXRob2QgPSBEZWNvcmF0b3JDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVuc2hpZnQgPSBBcnJheS5wcm90b3R5cGUudW5zaGlmdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuc2hpZnQuY2FsbChhcmd1bWVudHMsIG9yaWdpbmFsTWV0aG9kKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvcmF0ZWRNZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRlY29yYXRlZE1ldGhvZHMubGVuZ3RoOyBkKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVjb3JhdGVkTWV0aG9kID0gZGVjb3JhdGVkTWV0aG9kc1tkXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgRGVjb3JhdGVkQ2xhc3MucHJvdG90eXBlW2RlY29yYXRlZE1ldGhvZF0gPSBjYWxsZWRNZXRob2QoZGVjb3JhdGVkTWV0aG9kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRGVjb3JhdGVkQ2xhc3M7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIE9ic2VydmFibGUucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChldmVudCBpbiB0aGlzLmxpc3RlbmVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdID0gW2NhbGxiYWNrXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIE9ic2VydmFibGUucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFBhcmFtcyBzaG91bGQgYWx3YXlzIGNvbWUgaW4gYXMgYW4gYXJyYXlcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBhcmd1bWVudHMgdG8gdGhlIGV2ZW50LCB1c2UgYSB0ZW1wb3Jhcnkgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKHt9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGBfdHlwZWAgb2YgdGhlIGZpcnN0IG9iamVjdCB0byB0aGUgZXZlbnRcclxuICAgICAgICAgICAgICAgIHBhcmFtc1swXS5fdHlwZSA9IGV2ZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChldmVudCBpbiB0aGlzLmxpc3RlbmVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlKHRoaXMubGlzdGVuZXJzW2V2ZW50XSwgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJyonIGluIHRoaXMubGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnZva2UodGhpcy5saXN0ZW5lcnNbJyonXSwgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIE9ic2VydmFibGUucHJvdG90eXBlLmludm9rZSA9IGZ1bmN0aW9uKGxpc3RlbmVycywgcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBVdGlscy5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZTtcclxuXHJcbiAgICAgICAgICAgIFV0aWxzLmdlbmVyYXRlQ2hhcnMgPSBmdW5jdGlvbihsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGFycyA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmFuZG9tQ2hhciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDM2KTtcclxuICAgICAgICAgICAgICAgICAgICBjaGFycyArPSByYW5kb21DaGFyLnRvU3RyaW5nKDM2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hhcnM7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBVdGlscy5iaW5kID0gZnVuY3Rpb24oZnVuYywgY29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBVdGlscy5fY29udmVydERhdGEgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBvcmlnaW5hbEtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSBvcmlnaW5hbEtleS5zcGxpdCgnLScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YUxldmVsID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBrZXlzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2tdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTG93ZXJjYXNlIHRoZSBmaXJzdCBsZXR0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnkgZGVmYXVsdCwgZGFzaC1zZXBhcmF0ZWQgYmVjb21lcyBjYW1lbENhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnN1YnN0cmluZygwLCAxKS50b0xvd2VyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBkYXRhTGV2ZWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGV2ZWxba2V5XSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoayA9PSBrZXlzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMZXZlbFtrZXldID0gZGF0YVtvcmlnaW5hbEtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMZXZlbCA9IGRhdGFMZXZlbFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGFbb3JpZ2luYWxLZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgVXRpbHMuaGFzU2Nyb2xsID0gZnVuY3Rpb24oaW5kZXgsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBZGFwdGVkIGZyb20gdGhlIGZ1bmN0aW9uIGNyZWF0ZWQgYnkgQFNoYWRvd1NjcmlwdGVyXHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgYWRhcHRlZCBieSBAQmlsbEJhcnJ5IG9uIHRoZSBTdGFjayBFeGNoYW5nZSBDb2RlIFJldmlldyB3ZWJzaXRlLlxyXG4gICAgICAgICAgICAgICAgLy8gVGhlIG9yaWdpbmFsIGNvZGUgY2FuIGJlIGZvdW5kIGF0XHJcbiAgICAgICAgICAgICAgICAvLyBodHRwOi8vY29kZXJldmlldy5zdGFja2V4Y2hhbmdlLmNvbS9xLzEzMzM4XHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgd2FzIGRlc2lnbmVkIHRvIGJlIHVzZWQgd2l0aCB0aGUgU2l6emxlIHNlbGVjdG9yIGVuZ2luZS5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgJGVsID0gJChlbCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmZsb3dYID0gZWwuc3R5bGUub3ZlcmZsb3dYO1xyXG4gICAgICAgICAgICAgICAgdmFyIG92ZXJmbG93WSA9IGVsLnN0eWxlLm92ZXJmbG93WTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0NoZWNrIGJvdGggeCBhbmQgeSBkZWNsYXJhdGlvbnNcclxuICAgICAgICAgICAgICAgIGlmIChvdmVyZmxvd1ggPT09IG92ZXJmbG93WSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChvdmVyZmxvd1kgPT09ICdoaWRkZW4nIHx8IG92ZXJmbG93WSA9PT0gJ3Zpc2libGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmZsb3dYID09PSAnc2Nyb2xsJyB8fCBvdmVyZmxvd1kgPT09ICdzY3JvbGwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgkZWwuaW5uZXJIZWlnaHQoKSA8IGVsLnNjcm9sbEhlaWdodCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICRlbC5pbm5lcldpZHRoKCkgPCBlbC5zY3JvbGxXaWR0aCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBVdGlscy5lc2NhcGVNYXJrdXAgPSBmdW5jdGlvbihtYXJrdXApIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXBsYWNlTWFwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICdcXFxcJzogJyYjOTI7JyxcclxuICAgICAgICAgICAgICAgICAgICAnJic6ICcmYW1wOycsXHJcbiAgICAgICAgICAgICAgICAgICAgJzwnOiAnJmx0OycsXHJcbiAgICAgICAgICAgICAgICAgICAgJz4nOiAnJmd0OycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1wiJzogJyZxdW90OycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1xcJyc6ICcmIzM5OycsXHJcbiAgICAgICAgICAgICAgICAgICAgJy8nOiAnJiM0NzsnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERvIG5vdCB0cnkgdG8gZXNjYXBlIHRoZSBtYXJrdXAgaWYgaXQncyBub3QgYSBzdHJpbmdcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWFya3VwICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXJrdXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhtYXJrdXApLnJlcGxhY2UoL1smPD5cIidcXC9cXFxcXS9nLCBmdW5jdGlvbihtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBsYWNlTWFwW21hdGNoXTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FjaGUgb2JqZWN0cyBpbiBVdGlscy5fX2NhY2hlIGluc3RlYWQgb2YgJC5kYXRhIChzZWUgIzQzNDYpXHJcbiAgICAgICAgICAgIFV0aWxzLl9fY2FjaGUgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpZCA9IDA7XHJcbiAgICAgICAgICAgIFV0aWxzLkdldFVuaXF1ZUVsZW1lbnRJZCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCBhIHVuaXF1ZSBlbGVtZW50IElkLiBJZiBlbGVtZW50IGhhcyBubyBpZCxcclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZXMgYSBuZXcgdW5pcXVlIG51bWJlciwgc3RvcmVzIGl0IGluIHRoZSBpZFxyXG4gICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlIGFuZCByZXR1cm5zIHRoZSBuZXcgaWQgd2l0aCBhIHByZWZpeC5cclxuICAgICAgICAgICAgICAgIC8vIElmIGFuIGlkIGFscmVhZHkgZXhpc3RzLCBpdCBzaW1wbHkgcmV0dXJucyBpdCB3aXRoIGEgcHJlZml4LlxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3QySWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QyLWlkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdDJJZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdDJJZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBlbGVtZW50IGhhcyBpZCwgdXNlIGl0LlxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3QySWQgPSAnc2VsZWN0Mi1kYXRhLScgKyBlbGVtZW50LmlkO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3QySWQgPSAnc2VsZWN0Mi1kYXRhLScgKyAoKytpZCkudG9TdHJpbmcoKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICctJyArIFV0aWxzLmdlbmVyYXRlQ2hhcnMoNCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0Mi1pZCcsIHNlbGVjdDJJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdDJJZDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFV0aWxzLlN0b3JlRGF0YSA9IGZ1bmN0aW9uKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdG9yZXMgYW4gaXRlbSBpbiB0aGUgY2FjaGUgZm9yIGEgc3BlY2lmaWVkIGVsZW1lbnQuXHJcbiAgICAgICAgICAgICAgICAvLyBuYW1lIGlzIHRoZSBjYWNoZSBrZXkuXHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBVdGlscy5HZXRVbmlxdWVFbGVtZW50SWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVV0aWxzLl9fY2FjaGVbaWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMuX19jYWNoZVtpZF0gPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBVdGlscy5fX2NhY2hlW2lkXVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgVXRpbHMuR2V0RGF0YSA9IGZ1bmN0aW9uKGVsZW1lbnQsIG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIFJldHJpZXZlcyBhIHZhbHVlIGZyb20gdGhlIGNhY2hlIGJ5IGl0cyBrZXkgKG5hbWUpXHJcbiAgICAgICAgICAgICAgICAvLyBuYW1lIGlzIG9wdGlvbmFsLiBJZiBubyBuYW1lIHNwZWNpZmllZCwgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAvLyBhbGwgY2FjaGUgaXRlbXMgZm9yIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cclxuICAgICAgICAgICAgICAgIC8vIGFuZCBmb3IgYSBzcGVjaWZpZWQgZWxlbWVudC5cclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IFV0aWxzLkdldFVuaXF1ZUVsZW1lbnRJZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFV0aWxzLl9fY2FjaGVbaWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChVdGlscy5fX2NhY2hlW2lkXVtuYW1lXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVXRpbHMuX19jYWNoZVtpZF1bbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoZWxlbWVudCkuZGF0YShuYW1lKTsgLy8gRmFsbGJhY2sgdG8gSFRNTDUgZGF0YSBhdHRyaWJzLlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJChlbGVtZW50KS5kYXRhKG5hbWUpOyAvLyBGYWxsYmFjayB0byBIVE1MNSBkYXRhIGF0dHJpYnMuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBVdGlscy5fX2NhY2hlW2lkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFV0aWxzLlJlbW92ZURhdGEgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmVzIGFsbCBjYWNoZWQgaXRlbXMgZm9yIGEgc3BlY2lmaWVkIGVsZW1lbnQuXHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBVdGlscy5HZXRVbmlxdWVFbGVtZW50SWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoVXRpbHMuX19jYWNoZVtpZF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBVdGlscy5fX2NhY2hlW2lkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QyLWlkJyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBVdGlscy5jb3B5Tm9uSW50ZXJuYWxDc3NDbGFzc2VzID0gZnVuY3Rpb24oZGVzdCwgc3JjKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2xhc3NlcztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVzdGluYXRpb25DbGFzc2VzID0gZGVzdC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykudHJpbSgpLnNwbGl0KC9cXHMrLyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25DbGFzc2VzID0gZGVzdGluYXRpb25DbGFzc2VzLmZpbHRlcihmdW5jdGlvbihjbGF6eikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNhdmUgYWxsIFNlbGVjdDIgY2xhc3Nlc1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbGF6ei5pbmRleE9mKCdzZWxlY3QyLScpID09PSAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZUNsYXNzZXMgPSBzcmMuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnRyaW0oKS5zcGxpdCgvXFxzKy8pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNvdXJjZUNsYXNzZXMgPSBzb3VyY2VDbGFzc2VzLmZpbHRlcihmdW5jdGlvbihjbGF6eikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgY29weSBub24tU2VsZWN0MiBjbGFzc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsYXp6LmluZGV4T2YoJ3NlbGVjdDItJykgIT09IDA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVwbGFjZW1lbnRzID0gZGVzdGluYXRpb25DbGFzc2VzLmNvbmNhdChzb3VyY2VDbGFzc2VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkZXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCByZXBsYWNlbWVudHMuam9pbignICcpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBVdGlscztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUzIuZGVmaW5lKCdzZWxlY3QyL3Jlc3VsdHMnLCBbXHJcbiAgICAgICAgICAgICdqcXVlcnknLFxyXG4gICAgICAgICAgICAnLi91dGlscydcclxuICAgICAgICBdLCBmdW5jdGlvbigkLCBVdGlscykge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBSZXN1bHRzKCRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YUFkYXB0ZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuICAgICAgICAgICAgICAgIFJlc3VsdHMuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFV0aWxzLkV4dGVuZChSZXN1bHRzLCBVdGlscy5PYnNlcnZhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIFJlc3VsdHMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRyZXN1bHRzID0gJChcclxuICAgICAgICAgICAgICAgICAgICAnPHVsIGNsYXNzPVwic2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zXCIgcm9sZT1cImxpc3Rib3hcIj48L3VsPidcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ211bHRpcGxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkcmVzdWx0cy5hdHRyKCdhcmlhLW11bHRpc2VsZWN0YWJsZScsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVzdWx0cyA9ICRyZXN1bHRzO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAkcmVzdWx0cztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFJlc3VsdHMucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyZXN1bHRzLmVtcHR5KCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBSZXN1bHRzLnByb3RvdHlwZS5kaXNwbGF5TWVzc2FnZSA9IGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVzY2FwZU1hcmt1cCA9IHRoaXMub3B0aW9ucy5nZXQoJ2VzY2FwZU1hcmt1cCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgJG1lc3NhZ2UgPSAkKFxyXG4gICAgICAgICAgICAgICAgICAgICc8bGkgcm9sZT1cImFsZXJ0XCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCInICtcclxuICAgICAgICAgICAgICAgICAgICAnIGNsYXNzPVwic2VsZWN0Mi1yZXN1bHRzX19vcHRpb25cIj48L2xpPidcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0cmFuc2xhdGlvbnMnKS5nZXQocGFyYW1zLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICRtZXNzYWdlLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICBlc2NhcGVNYXJrdXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UocGFyYW1zLmFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkbWVzc2FnZVswXS5jbGFzc05hbWUgKz0gJyBzZWxlY3QyLXJlc3VsdHNfX21lc3NhZ2UnO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHJlc3VsdHMuYXBwZW5kKCRtZXNzYWdlKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFJlc3VsdHMucHJvdG90eXBlLmhpZGVNZXNzYWdlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVzdWx0cy5maW5kKCcuc2VsZWN0Mi1yZXN1bHRzX19tZXNzYWdlJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBSZXN1bHRzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyICRvcHRpb25zID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0cyA9PSBudWxsIHx8IGRhdGEucmVzdWx0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy4kcmVzdWx0cy5jaGlsZHJlbigpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3Jlc3VsdHM6bWVzc2FnZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdub1Jlc3VsdHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRhdGEucmVzdWx0cyA9IHRoaXMuc29ydChkYXRhLnJlc3VsdHMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGF0YS5yZXN1bHRzLmxlbmd0aDsgZCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBkYXRhLnJlc3VsdHNbZF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkb3B0aW9uID0gdGhpcy5vcHRpb24oaXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRvcHRpb25zLnB1c2goJG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVzdWx0cy5hcHBlbmQoJG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgUmVzdWx0cy5wcm90b3R5cGUucG9zaXRpb24gPSBmdW5jdGlvbigkcmVzdWx0cywgJGRyb3Bkb3duKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHJlc3VsdHNDb250YWluZXIgPSAkZHJvcGRvd24uZmluZCgnLnNlbGVjdDItcmVzdWx0cycpO1xyXG4gICAgICAgICAgICAgICAgJHJlc3VsdHNDb250YWluZXIuYXBwZW5kKCRyZXN1bHRzKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFJlc3VsdHMucHJvdG90eXBlLnNvcnQgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc29ydGVyID0gdGhpcy5vcHRpb25zLmdldCgnc29ydGVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvcnRlcihkYXRhKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFJlc3VsdHMucHJvdG90eXBlLmhpZ2hsaWdodEZpcnN0SXRlbSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRvcHRpb25zID0gdGhpcy4kcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLXNlbGVjdGFibGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgJHNlbGVjdGVkID0gJG9wdGlvbnMuZmlsdGVyKCcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLXNlbGVjdGVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBzZWxlY3RlZCBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNlbGVjdGVkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgc2VsZWN0ZWQgb3B0aW9ucywgaGlnaGxpZ2h0IHRoZSBmaXJzdFxyXG4gICAgICAgICAgICAgICAgICAgICRzZWxlY3RlZC5maXJzdCgpLnRyaWdnZXIoJ21vdXNlZW50ZXInKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIHNlbGVjdGVkIG9wdGlvbnMsIGhpZ2hsaWdodCB0aGUgZmlyc3Qgb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gdGhlIGRyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgJG9wdGlvbnMuZmlyc3QoKS50cmlnZ2VyKCdtb3VzZWVudGVyJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbnN1cmVIaWdobGlnaHRWaXNpYmxlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBSZXN1bHRzLnByb3RvdHlwZS5zZXRDbGFzc2VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmN1cnJlbnQoZnVuY3Rpb24oc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRJZHMgPSBzZWxlY3RlZC5tYXAoZnVuY3Rpb24ocykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcy5pZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgJG9wdGlvbnMgPSBzZWxmLiRyZXN1bHRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLXNlbGVjdGFibGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJG9wdGlvbnMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvcHRpb24gPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBVdGlscy5HZXREYXRhKHRoaXMsICdkYXRhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZCBuZWVkcyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBzdHJpbmcgd2hlbiBjb21wYXJpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gJycgKyBpdGVtLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChpdGVtLmVsZW1lbnQgIT0gbnVsbCAmJiBpdGVtLmVsZW1lbnQuc2VsZWN0ZWQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXRlbS5lbGVtZW50ID09IG51bGwgJiYgc2VsZWN0ZWRJZHMuaW5kZXhPZihpZCkgPiAtMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkb3B0aW9uLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0tc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRvcHRpb24uYXR0cignYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBSZXN1bHRzLnByb3RvdHlwZS5zaG93TG9hZGluZyA9IGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlTG9hZGluZygpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBsb2FkaW5nTW9yZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RyYW5zbGF0aW9ucycpLmdldCgnc2VhcmNoaW5nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGxvYWRpbmcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBsb2FkaW5nTW9yZShwYXJhbXMpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdmFyICRsb2FkaW5nID0gdGhpcy5vcHRpb24obG9hZGluZyk7XHJcbiAgICAgICAgICAgICAgICAkbG9hZGluZy5jbGFzc05hbWUgKz0gJyBsb2FkaW5nLXJlc3VsdHMnO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHJlc3VsdHMucHJlcGVuZCgkbG9hZGluZyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBSZXN1bHRzLnByb3RvdHlwZS5oaWRlTG9hZGluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVzdWx0cy5maW5kKCcubG9hZGluZy1yZXN1bHRzJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBSZXN1bHRzLnByb3RvdHlwZS5vcHRpb24gPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3QyLXJlc3VsdHNfX29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1zZWxlY3RhYmxlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGF0dHJzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ29wdGlvbidcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChkYXRhLmVsZW1lbnQgIT0gbnVsbCAmJiBtYXRjaGVzLmNhbGwoZGF0YS5lbGVtZW50LCAnOmRpc2FibGVkJykpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKGRhdGEuZWxlbWVudCA9PSBudWxsICYmIGRhdGEuZGlzYWJsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cnNbJ2FyaWEtZGlzYWJsZWQnXSA9ICd0cnVlJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1zZWxlY3RhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1kaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLXNlbGVjdGFibGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5fcmVzdWx0SWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pZCA9IGRhdGEuX3Jlc3VsdElkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRpdGxlID0gZGF0YS50aXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnJvbGUgPSAnZ3JvdXAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzWydhcmlhLWxhYmVsJ10gPSBkYXRhLnRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0tc2VsZWN0YWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0tZ3JvdXAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhdHRyIGluIGF0dHJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IGF0dHJzW2F0dHJdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKGF0dHIsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJG9wdGlvbiA9ICQob3B0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3Ryb25nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuY2xhc3NOYW1lID0gJ3NlbGVjdDItcmVzdWx0c19fZ3JvdXAnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBsYXRlKGRhdGEsIGxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjaGlsZHJlbiA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IGRhdGEuY2hpbGRyZW4ubGVuZ3RoOyBjKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gZGF0YS5jaGlsZHJlbltjXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkY2hpbGQgPSB0aGlzLm9wdGlvbihjaGlsZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkY2hpbGRyZW4ucHVzaCgkY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjaGlsZHJlbkNvbnRhaW5lciA9ICQoJzx1bD48L3VsPicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3NlbGVjdDItcmVzdWx0c19fb3B0aW9ucyBzZWxlY3QyLXJlc3VsdHNfX29wdGlvbnMtLW5lc3RlZCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGNoaWxkcmVuQ29udGFpbmVyLmFwcGVuZCgkY2hpbGRyZW4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkb3B0aW9uLmFwcGVuZChsYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJG9wdGlvbi5hcHBlbmQoJGNoaWxkcmVuQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZShkYXRhLCBvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFV0aWxzLlN0b3JlRGF0YShvcHRpb24sICdkYXRhJywgZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFJlc3VsdHMucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbihjb250YWluZXIsICRjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBjb250YWluZXIuaWQgKyAnLXJlc3VsdHMnO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHJlc3VsdHMuYXR0cignaWQnLCBpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFsbCcsIGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFwcGVuZChwYXJhbXMuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIuaXNPcGVuKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRDbGFzc2VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaGlnaGxpZ2h0Rmlyc3RJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFwcGVuZCcsIGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYXBwZW5kKHBhcmFtcy5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5pc09wZW4oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldENsYXNzZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIub24oJ3F1ZXJ5JywgZnVuY3Rpb24ocGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5oaWRlTWVzc2FnZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dMb2FkaW5nKHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIub24oJ3NlbGVjdCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29udGFpbmVyLmlzT3BlbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0Q2xhc3NlcygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmdldCgnc2Nyb2xsQWZ0ZXJTZWxlY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmhpZ2hsaWdodEZpcnN0SXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5vbigndW5zZWxlY3QnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lci5pc09wZW4oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldENsYXNzZXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5nZXQoJ3Njcm9sbEFmdGVyU2VsZWN0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5oaWdobGlnaHRGaXJzdEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIub24oJ29wZW4nLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSBkcm9wZG93biBpcyBvcGVuLCBhcmlhLWV4cGVuZGVkPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kcmVzdWx0cy5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRyZXN1bHRzLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0Q2xhc3NlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCdjbG9zZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdGhlIGRyb3Bkb3duIGlzIGNsb3NlZCwgYXJpYS1leHBlbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRyZXN1bHRzLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRyZXN1bHRzLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRyZXN1bHRzLnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOnRvZ2dsZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSBzZWxmLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJGhpZ2hsaWdodGVkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkaGlnaGxpZ2h0ZWQudHJpZ2dlcignbW91c2V1cCcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOnNlbGVjdCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSBzZWxmLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJGhpZ2hsaWdodGVkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IFV0aWxzLkdldERhdGEoJGhpZ2hsaWdodGVkWzBdLCAnZGF0YScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJGhpZ2hsaWdodGVkLmhhc0NsYXNzKCdzZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0tc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRyaWdnZXIoJ2Nsb3NlJywge30pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6cHJldmlvdXMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJGhpZ2hsaWdodGVkID0gc2VsZi5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRvcHRpb25zID0gc2VsZi4kcmVzdWx0cy5maW5kKCcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLXNlbGVjdGFibGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9ICRvcHRpb25zLmluZGV4KCRoaWdobGlnaHRlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGFyZSBhbHJlYWR5IGF0IHRoZSB0b3AsIGRvbid0IG1vdmUgZnVydGhlclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG5vIG9wdGlvbnMsIGN1cnJlbnRJbmRleCB3aWxsIGJlIC0xXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBub25lIGFyZSBoaWdobGlnaHRlZCwgaGlnaGxpZ2h0IHRoZSBmaXJzdFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkaGlnaGxpZ2h0ZWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgJG5leHQgPSAkb3B0aW9ucy5lcShuZXh0SW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkbmV4dC50cmlnZ2VyKCdtb3VzZWVudGVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gc2VsZi4kcmVzdWx0cy5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRUb3AgPSAkbmV4dC5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRPZmZzZXQgPSBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgpICsgKG5leHRUb3AgLSBjdXJyZW50T2Zmc2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRUb3AgLSBjdXJyZW50T2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcChuZXh0T2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6bmV4dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSBzZWxmLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgJG9wdGlvbnMgPSBzZWxmLiRyZXN1bHRzLmZpbmQoJy5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0tc2VsZWN0YWJsZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gJG9wdGlvbnMuaW5kZXgoJGhpZ2hsaWdodGVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGFyZSBhdCB0aGUgbGFzdCBvcHRpb24sIHN0YXkgdGhlcmVcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEluZGV4ID49ICRvcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgJG5leHQgPSAkb3B0aW9ucy5lcShuZXh0SW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkbmV4dC50cmlnZ2VyKCdtb3VzZWVudGVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gc2VsZi4kcmVzdWx0cy5vZmZzZXQoKS50b3AgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyZXN1bHRzLm91dGVySGVpZ2h0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dEJvdHRvbSA9ICRuZXh0Lm9mZnNldCgpLnRvcCArICRuZXh0Lm91dGVySGVpZ2h0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dE9mZnNldCA9IHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKCkgKyBuZXh0Qm90dG9tIC0gY3VycmVudE9mZnNldDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRCb3R0b20gPiBjdXJyZW50T2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKG5leHRPZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5vbigncmVzdWx0czpmb2N1cycsIGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5lbGVtZW50WzBdLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1oaWdobGlnaHRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5lbGVtZW50WzBdLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6bWVzc2FnZScsIGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGlzcGxheU1lc3NhZ2UocGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkLmZuLm1vdXNld2hlZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZXN1bHRzLm9uKCdtb3VzZXdoZWVsJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9wID0gc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib3R0b20gPSBzZWxmLiRyZXN1bHRzLmdldCgwKS5zY3JvbGxIZWlnaHQgLSB0b3AgKyBlLmRlbHRhWTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0F0VG9wID0gZS5kZWx0YVkgPiAwICYmIHRvcCAtIGUuZGVsdGFZIDw9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0F0Qm90dG9tID0gZS5kZWx0YVkgPCAwICYmIGJvdHRvbSA8PSBzZWxmLiRyZXN1bHRzLmhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXRUb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBdEJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcmVzdWx0cy5nZXQoMCkuc2Nyb2xsSGVpZ2h0IC0gc2VsZi4kcmVzdWx0cy5oZWlnaHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVzdWx0cy5vbignbW91c2V1cCcsICcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLXNlbGVjdGFibGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKHRoaXMsICdkYXRhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHRoaXMuaGFzQ2xhc3MoJ3NlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1zZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLmdldCgnbXVsdGlwbGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlcigndW5zZWxlY3QnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRyaWdnZXIoJ2Nsb3NlJywge30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKCdzZWxlY3QnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHJlc3VsdHMub24oJ21vdXNlZW50ZXInLCAnLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1zZWxlY3RhYmxlJyxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKHRoaXMsICdkYXRhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1oaWdobGlnaHRlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOmZvY3VzJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBSZXN1bHRzLnByb3RvdHlwZS5nZXRIaWdobGlnaHRlZFJlc3VsdHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSB0aGlzLiRyZXN1bHRzXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0taGlnaGxpZ2h0ZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJGhpZ2hsaWdodGVkO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgUmVzdWx0cy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVzdWx0cy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFJlc3VsdHMucHJvdG90eXBlLmVuc3VyZUhpZ2hsaWdodFZpc2libGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSB0aGlzLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkaGlnaGxpZ2h0ZWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciAkb3B0aW9ucyA9IHRoaXMuJHJlc3VsdHMuZmluZCgnLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1zZWxlY3RhYmxlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9ICRvcHRpb25zLmluZGV4KCRoaWdobGlnaHRlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRPZmZzZXQgPSB0aGlzLiRyZXN1bHRzLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgICAgIHZhciBuZXh0VG9wID0gJGhpZ2hsaWdodGVkLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAgICAgICAgIHZhciBuZXh0T2Zmc2V0ID0gdGhpcy4kcmVzdWx0cy5zY3JvbGxUb3AoKSArIChuZXh0VG9wIC0gY3VycmVudE9mZnNldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldERlbHRhID0gbmV4dFRvcCAtIGN1cnJlbnRPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBuZXh0T2Zmc2V0IC09ICRoaWdobGlnaHRlZC5vdXRlckhlaWdodChmYWxzZSkgKiAyO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPD0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlc3VsdHMuc2Nyb2xsVG9wKDApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvZmZzZXREZWx0YSA+IHRoaXMuJHJlc3VsdHMub3V0ZXJIZWlnaHQoKSB8fCBvZmZzZXREZWx0YSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZXN1bHRzLnNjcm9sbFRvcChuZXh0T2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFJlc3VsdHMucHJvdG90eXBlLnRlbXBsYXRlID0gZnVuY3Rpb24ocmVzdWx0LCBjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RlbXBsYXRlUmVzdWx0Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXNjYXBlTWFya3VwID0gdGhpcy5vcHRpb25zLmdldCgnZXNjYXBlTWFya3VwJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSB0ZW1wbGF0ZShyZXN1bHQsIGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gZXNjYXBlTWFya3VwKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGNvbnRhaW5lcikuYXBwZW5kKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFJlc3VsdHM7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFMyLmRlZmluZSgnc2VsZWN0Mi9rZXlzJywgW1xyXG5cclxuICAgICAgICBdLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIEtFWVMgPSB7XHJcbiAgICAgICAgICAgICAgICBCQUNLU1BBQ0U6IDgsXHJcbiAgICAgICAgICAgICAgICBUQUI6IDksXHJcbiAgICAgICAgICAgICAgICBFTlRFUjogMTMsXHJcbiAgICAgICAgICAgICAgICBTSElGVDogMTYsXHJcbiAgICAgICAgICAgICAgICBDVFJMOiAxNyxcclxuICAgICAgICAgICAgICAgIEFMVDogMTgsXHJcbiAgICAgICAgICAgICAgICBFU0M6IDI3LFxyXG4gICAgICAgICAgICAgICAgU1BBQ0U6IDMyLFxyXG4gICAgICAgICAgICAgICAgUEFHRV9VUDogMzMsXHJcbiAgICAgICAgICAgICAgICBQQUdFX0RPV046IDM0LFxyXG4gICAgICAgICAgICAgICAgRU5EOiAzNSxcclxuICAgICAgICAgICAgICAgIEhPTUU6IDM2LFxyXG4gICAgICAgICAgICAgICAgTEVGVDogMzcsXHJcbiAgICAgICAgICAgICAgICBVUDogMzgsXHJcbiAgICAgICAgICAgICAgICBSSUdIVDogMzksXHJcbiAgICAgICAgICAgICAgICBET1dOOiA0MCxcclxuICAgICAgICAgICAgICAgIERFTEVURTogNDZcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBLRVlTO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL2Jhc2UnLCBbXHJcbiAgICAgICAgICAgICdqcXVlcnknLFxyXG4gICAgICAgICAgICAnLi4vdXRpbHMnLFxyXG4gICAgICAgICAgICAnLi4va2V5cydcclxuICAgICAgICBdLCBmdW5jdGlvbigkLCBVdGlscywgS0VZUykge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBCYXNlU2VsZWN0aW9uKCRlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuICAgICAgICAgICAgICAgIEJhc2VTZWxlY3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFV0aWxzLkV4dGVuZChCYXNlU2VsZWN0aW9uLCBVdGlscy5PYnNlcnZhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRzZWxlY3Rpb24gPSAkKFxyXG4gICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uXCIgcm9sZT1cImNvbWJvYm94XCIgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl90YWJpbmRleCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFV0aWxzLkdldERhdGEodGhpcy4kZWxlbWVudFswXSwgJ29sZC10YWJpbmRleCcpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90YWJpbmRleCA9IFV0aWxzLkdldERhdGEodGhpcy4kZWxlbWVudFswXSwgJ29sZC10YWJpbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLiRlbGVtZW50LmF0dHIoJ3RhYmluZGV4JykgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RhYmluZGV4ID0gdGhpcy4kZWxlbWVudC5hdHRyKCd0YWJpbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRzZWxlY3Rpb24uYXR0cigndGl0bGUnLCB0aGlzLiRlbGVtZW50LmF0dHIoJ3RpdGxlJykpO1xyXG4gICAgICAgICAgICAgICAgJHNlbGVjdGlvbi5hdHRyKCd0YWJpbmRleCcsIHRoaXMuX3RhYmluZGV4KTtcclxuICAgICAgICAgICAgICAgICRzZWxlY3Rpb24uYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlbGVjdGlvbiA9ICRzZWxlY3Rpb247XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRzZWxlY3Rpb247XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24oY29udGFpbmVyLCAkY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdHNJZCA9IGNvbnRhaW5lci5pZCArICctcmVzdWx0cyc7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1cycsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlcignZm9jdXMnLCBldnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdibHVyJywgZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5faGFuZGxlQmx1cihldnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKCdrZXlwcmVzcycsIGV2dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldnQud2hpY2ggPT09IEtFWVMuU1BBQ0UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmZvY3VzJywgZnVuY3Rpb24ocGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIHBhcmFtcy5kYXRhLl9yZXN1bHRJZCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIub24oJ3NlbGVjdGlvbjp1cGRhdGUnLCBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZShwYXJhbXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIub24oJ29wZW4nLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSBkcm9wZG93biBpcyBvcGVuLCBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCdhcmlhLW93bnMnLCByZXN1bHRzSWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9hdHRhY2hDbG9zZUhhbmRsZXIoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5vbignY2xvc2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSBkcm9wZG93biBpcyBjbG9zZWQsIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRzZWxlY3Rpb24ucmVtb3ZlQXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2VsZWN0aW9uLnJlbW92ZUF0dHIoJ2FyaWEtb3ducycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRzZWxlY3Rpb24udHJpZ2dlcignZm9jdXMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fZGV0YWNoQ2xvc2VIYW5kbGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIub24oJ2VuYWJsZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCd0YWJpbmRleCcsIHNlbGYuX3RhYmluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRzZWxlY3Rpb24uYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCdkaXNhYmxlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5faGFuZGxlQmx1ciA9IGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgbmVlZHMgdG8gYmUgZGVsYXllZCBhcyB0aGUgYWN0aXZlIGVsZW1lbnQgaXMgdGhlIGJvZHkgd2hlbiB0aGUgdGFiXHJcbiAgICAgICAgICAgICAgICAvLyBrZXkgaXMgcHJlc3NlZCwgcG9zc2libHkgYWxvbmcgd2l0aCBvdGhlcnMuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCB0cmlnZ2VyIGBibHVyYCBpZiB0aGUgZm9jdXMgaXMgc3RpbGwgaW4gdGhlIHNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT0gc2VsZi4kc2VsZWN0aW9uWzBdKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoJC5jb250YWlucyhzZWxmLiRzZWxlY3Rpb25bMF0sIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRyaWdnZXIoJ2JsdXInLCBldnQpO1xyXG4gICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5fYXR0YWNoQ2xvc2VIYW5kbGVyID0gZnVuY3Rpb24oY29udGFpbmVyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJChkb2N1bWVudC5ib2R5KS5vbignbW91c2Vkb3duLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZCwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkc2VsZWN0ID0gJHRhcmdldC5jbG9zZXN0KCcuc2VsZWN0MicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgJGFsbCA9ICQoJy5zZWxlY3QyLnNlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRhbGwuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMgPT0gJHNlbGVjdFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGVsZW1lbnQgPSBVdGlscy5HZXREYXRhKHRoaXMsICdlbGVtZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZWxlbWVudC5zZWxlY3QyKCdjbG9zZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5fZGV0YWNoQ2xvc2VIYW5kbGVyID0gZnVuY3Rpb24oY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50LmJvZHkpLm9mZignbW91c2Vkb3duLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5wb3NpdGlvbiA9IGZ1bmN0aW9uKCRzZWxlY3Rpb24sICRjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkc2VsZWN0aW9uQ29udGFpbmVyID0gJGNvbnRhaW5lci5maW5kKCcuc2VsZWN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAkc2VsZWN0aW9uQ29udGFpbmVyLmFwcGVuZCgkc2VsZWN0aW9uKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RldGFjaENsb3NlSGFuZGxlcih0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgdXBkYXRlYCBtZXRob2QgbXVzdCBiZSBkZWZpbmVkIGluIGNoaWxkIGNsYXNzZXMuJyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogSGVscGVyIG1ldGhvZCB0byBhYnN0cmFjdCB0aGUgXCJlbmFibGVkXCIgKG5vdCBcImRpc2FibGVkXCIpIHN0YXRlIG9mIHRoaXNcclxuICAgICAgICAgICAgICogb2JqZWN0LlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0cnVlfSBpZiB0aGUgaW5zdGFuY2UgaXMgbm90IGRpc2FibGVkLlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtmYWxzZX0gaWYgdGhlIGluc3RhbmNlIGlzIGRpc2FibGVkLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuaXNFbmFibGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNEaXNhYmxlZCgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEhlbHBlciBtZXRob2QgdG8gYWJzdHJhY3QgdGhlIFwiZGlzYWJsZWRcIiBzdGF0ZSBvZiB0aGlzIG9iamVjdC5cclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogQHJldHVybiB7dHJ1ZX0gaWYgdGhlIGRpc2FibGVkIG9wdGlvbiBpcyB0cnVlLlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtmYWxzZX0gaWYgdGhlIGRpc2FibGVkIG9wdGlvbiBpcyBmYWxzZS5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLmlzRGlzYWJsZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0KCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIEJhc2VTZWxlY3Rpb247XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vc2luZ2xlJywgW1xyXG4gICAgICAgICAgICAnanF1ZXJ5JyxcclxuICAgICAgICAgICAgJy4vYmFzZScsXHJcbiAgICAgICAgICAgICcuLi91dGlscycsXHJcbiAgICAgICAgICAgICcuLi9rZXlzJ1xyXG4gICAgICAgIF0sIGZ1bmN0aW9uKCQsIEJhc2VTZWxlY3Rpb24sIFV0aWxzLCBLRVlTKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIFNpbmdsZVNlbGVjdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIFNpbmdsZVNlbGVjdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgVXRpbHMuRXh0ZW5kKFNpbmdsZVNlbGVjdGlvbiwgQmFzZVNlbGVjdGlvbik7XHJcblxyXG4gICAgICAgICAgICBTaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRzZWxlY3Rpb24gPSBTaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLnJlbmRlci5jYWxsKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICRzZWxlY3Rpb25bMF0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICRzZWxlY3Rpb24uaHRtbChcclxuICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWRcIj48L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93XCIgcm9sZT1cInByZXNlbnRhdGlvblwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8YiByb2xlPVwicHJlc2VudGF0aW9uXCI+PC9iPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8L3NwYW4+J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJHNlbGVjdGlvbjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIFNpbmdsZVNlbGVjdGlvbi5fX3N1cGVyX18uYmluZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IGNvbnRhaW5lci5pZCArICctY29udGFpbmVyJztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2lkJywgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3JvbGUnLCAndGV4dGJveCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtcmVhZG9ubHknLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsIGlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgcmVzcG9uZCB0byBsZWZ0IGNsaWNrc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldnQud2hpY2ggIT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKCd0b2dnbGUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1cycsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZXIgZm9jdXNlcyBvbiB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2JsdXInLCBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBVc2VyIGV4aXRzIHRoZSBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5vbignZm9jdXMnLCBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lci5pc09wZW4oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRzZWxlY3Rpb24udHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkcmVuZGVyZWQgPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpO1xyXG4gICAgICAgICAgICAgICAgJHJlbmRlcmVkLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICAkcmVuZGVyZWQucmVtb3ZlQXR0cigndGl0bGUnKTsgLy8gY2xlYXIgdG9vbHRpcCBvbiBlbXB0eVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5ID0gZnVuY3Rpb24oZGF0YSwgY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0ZW1wbGF0ZVNlbGVjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVzY2FwZU1hcmt1cCA9IHRoaXMub3B0aW9ucy5nZXQoJ2VzY2FwZU1hcmt1cCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBlc2NhcGVNYXJrdXAodGVtcGxhdGUoZGF0YSwgY29udGFpbmVyKSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLnNlbGVjdGlvbkNvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICQoJzxzcGFuPjwvc3Bhbj4nKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gZGF0YVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgJHJlbmRlcmVkID0gdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKTtcclxuICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZWQgPSB0aGlzLmRpc3BsYXkoc2VsZWN0aW9uLCAkcmVuZGVyZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICRyZW5kZXJlZC5lbXB0eSgpLmFwcGVuZChmb3JtYXR0ZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0aXRsZSA9IHNlbGVjdGlvbi50aXRsZSB8fCBzZWxlY3Rpb24udGV4dDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkcmVuZGVyZWQuYXR0cigndGl0bGUnLCB0aXRsZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRyZW5kZXJlZC5yZW1vdmVBdHRyKCd0aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFNpbmdsZVNlbGVjdGlvbjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9tdWx0aXBsZScsIFtcclxuICAgICAgICAgICAgJ2pxdWVyeScsXHJcbiAgICAgICAgICAgICcuL2Jhc2UnLFxyXG4gICAgICAgICAgICAnLi4vdXRpbHMnXHJcbiAgICAgICAgXSwgZnVuY3Rpb24oJCwgQmFzZVNlbGVjdGlvbiwgVXRpbHMpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gTXVsdGlwbGVTZWxlY3Rpb24oJGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIE11bHRpcGxlU2VsZWN0aW9uLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBVdGlscy5FeHRlbmQoTXVsdGlwbGVTZWxlY3Rpb24sIEJhc2VTZWxlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRzZWxlY3Rpb24gPSBNdWx0aXBsZVNlbGVjdGlvbi5fX3N1cGVyX18ucmVuZGVyLmNhbGwodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNlbGVjdGlvblswXS5jbGFzc0xpc3QuYWRkKCdzZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2VsZWN0aW9uLmh0bWwoXHJcbiAgICAgICAgICAgICAgICAgICAgJzx1bCBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZFwiPjwvdWw+J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJHNlbGVjdGlvbjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24oY29udGFpbmVyLCAkY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgTXVsdGlwbGVTZWxlY3Rpb24uX19zdXBlcl9fLmJpbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBjb250YWluZXIuaWQgKyAnLWNvbnRhaW5lcic7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpLmF0dHIoJ2lkJywgaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlbGVjdGlvbi5vbignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3RvZ2dsZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWxlY3Rpb24ub24oXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsaWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAnLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSB0aGUgZXZlbnQgaWYgaXQgaXMgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNEaXNhYmxlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkcmVtb3ZlID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRzZWxlY3Rpb24gPSAkcmVtb3ZlLnBhcmVudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKCRzZWxlY3Rpb25bMF0sICdkYXRhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Vuc2VsZWN0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlbGVjdGlvbi5vbihcclxuICAgICAgICAgICAgICAgICAgICAna2V5ZG93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgJy5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgdGhlIGV2ZW50IGlmIGl0IGlzIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzRGlzYWJsZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRyZW5kZXJlZCA9IHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJyk7XHJcbiAgICAgICAgICAgICAgICAkcmVuZGVyZWQuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICRyZW5kZXJlZC5yZW1vdmVBdHRyKCd0aXRsZScpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLmRpc3BsYXkgPSBmdW5jdGlvbihkYXRhLCBjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RlbXBsYXRlU2VsZWN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXNjYXBlTWFya3VwID0gdGhpcy5vcHRpb25zLmdldCgnZXNjYXBlTWFya3VwJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVzY2FwZU1hcmt1cCh0ZW1wbGF0ZShkYXRhLCBjb250YWluZXIpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5zZWxlY3Rpb25Db250YWluZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkY29udGFpbmVyID0gJChcclxuICAgICAgICAgICAgICAgICAgICAnPGxpIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZVwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZVwiICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleD1cIi0xXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzwvYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2VfX2Rpc3BsYXlcIj48L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzwvbGk+J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciAkc2VsZWN0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3Rpb25JZFByZWZpeCA9IHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignaWQnKSArICctY2hvaWNlLSc7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkYXRhLmxlbmd0aDsgZCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGlvbiA9IGRhdGFbZF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb25Db250YWluZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVkID0gdGhpcy5kaXNwbGF5KHNlbGVjdGlvbiwgJHNlbGVjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3Rpb25JZCA9IHNlbGVjdGlvbklkUHJlZml4ICsgVXRpbHMuZ2VuZXJhdGVDaGFycyg0KSArICctJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25JZCArPSBzZWxlY3Rpb24uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uSWQgKz0gVXRpbHMuZ2VuZXJhdGVDaGFycyg0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2VfX2Rpc3BsYXknKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKGZvcm1hdHRlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2lkJywgc2VsZWN0aW9uSWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSBzZWxlY3Rpb24udGl0bGUgfHwgc2VsZWN0aW9uLnRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2VsZWN0aW9uLmF0dHIoJ3RpdGxlJywgdGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbW92ZUl0ZW0gPSB0aGlzLm9wdGlvbnMuZ2V0KCd0cmFuc2xhdGlvbnMnKS5nZXQoJ3JlbW92ZUl0ZW0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRyZW1vdmUgPSAkc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHJlbW92ZS5hdHRyKCd0aXRsZScsIHJlbW92ZUl0ZW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHJlbW92ZS5hdHRyKCdhcmlhLWxhYmVsJywgcmVtb3ZlSXRlbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAkcmVtb3ZlLmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCBzZWxlY3Rpb25JZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLlN0b3JlRGF0YSgkc2VsZWN0aW9uWzBdLCAnZGF0YScsIHNlbGVjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzZWxlY3Rpb25zLnB1c2goJHNlbGVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyICRyZW5kZXJlZCA9IHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHJlbmRlcmVkLmFwcGVuZCgkc2VsZWN0aW9ucyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gTXVsdGlwbGVTZWxlY3Rpb247XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vcGxhY2Vob2xkZXInLCBbXHJcblxyXG4gICAgICAgIF0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBQbGFjZWhvbGRlcihkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5ub3JtYWxpemVQbGFjZWhvbGRlcihvcHRpb25zLmdldCgncGxhY2Vob2xkZXInKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBQbGFjZWhvbGRlci5wcm90b3R5cGUubm9ybWFsaXplUGxhY2Vob2xkZXIgPSBmdW5jdGlvbihfLCBwbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwbGFjZWhvbGRlciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBwbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgUGxhY2Vob2xkZXIucHJvdG90eXBlLmNyZWF0ZVBsYWNlaG9sZGVyID0gZnVuY3Rpb24oZGVjb3JhdGVkLCBwbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgICAgICAgdmFyICRwbGFjZWhvbGRlciA9IHRoaXMuc2VsZWN0aW9uQ29udGFpbmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmh0bWwodGhpcy5kaXNwbGF5KHBsYWNlaG9sZGVyKSk7XHJcbiAgICAgICAgICAgICAgICAkcGxhY2Vob2xkZXJbMF0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0Mi1zZWxlY3Rpb25fX3BsYWNlaG9sZGVyJyk7XHJcbiAgICAgICAgICAgICAgICAkcGxhY2Vob2xkZXJbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAkcGxhY2Vob2xkZXI7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBQbGFjZWhvbGRlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZGVjb3JhdGVkLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2luZ2xlUGxhY2Vob2xkZXIgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5sZW5ndGggPT0gMSAmJiBkYXRhWzBdLmlkICE9IHRoaXMucGxhY2Vob2xkZXIuaWRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXVsdGlwbGVTZWxlY3Rpb25zID0gZGF0YS5sZW5ndGggPiAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtdWx0aXBsZVNlbGVjdGlvbnMgfHwgc2luZ2xlUGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb3JhdGVkLmNhbGwodGhpcywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciAkcGxhY2Vob2xkZXIgPSB0aGlzLmNyZWF0ZVBsYWNlaG9sZGVyKHRoaXMucGxhY2Vob2xkZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlbGVjdGlvbi5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkJykuYXBwZW5kKCRwbGFjZWhvbGRlcik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUGxhY2Vob2xkZXI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vYWxsb3dDbGVhcicsIFtcclxuICAgICAgICAgICAgJ2pxdWVyeScsXHJcbiAgICAgICAgICAgICcuLi9rZXlzJyxcclxuICAgICAgICAgICAgJy4uL3V0aWxzJ1xyXG4gICAgICAgIF0sIGZ1bmN0aW9uKCQsIEtFWVMsIFV0aWxzKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEFsbG93Q2xlYXIoKSB7fVxyXG5cclxuICAgICAgICAgICAgQWxsb3dDbGVhci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGFjZWhvbGRlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ2RlYnVnJykgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NlbGVjdDI6IFRoZSBgYWxsb3dDbGVhcmAgb3B0aW9uIHNob3VsZCBiZSB1c2VkIGluIGNvbWJpbmF0aW9uICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dpdGggdGhlIGBwbGFjZWhvbGRlcmAgb3B0aW9uLidcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdtb3VzZWRvd24nLCAnLnNlbGVjdDItc2VsZWN0aW9uX19jbGVhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2hhbmRsZUNsZWFyKGV2dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2hhbmRsZUtleWJvYXJkQ2xlYXIoZXZ0LCBjb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBBbGxvd0NsZWFyLnByb3RvdHlwZS5faGFuZGxlQ2xlYXIgPSBmdW5jdGlvbihfLCBldnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSB0aGUgZXZlbnQgaWYgaXQgaXMgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgJGNsZWFyID0gdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fY2xlYXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZ25vcmUgdGhlIGV2ZW50IGlmIG5vdGhpbmcgaGFzIGJlZW4gc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgIGlmICgkY2xlYXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IFV0aWxzLkdldERhdGEoJGNsZWFyWzBdLCAnZGF0YScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c1ZhbCA9IHRoaXMuJGVsZW1lbnQudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LnZhbCh0aGlzLnBsYWNlaG9sZGVyLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdW5zZWxlY3REYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2NsZWFyJywgdW5zZWxlY3REYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmICh1bnNlbGVjdERhdGEucHJldmVudGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC52YWwocHJldmlvdXNWYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRhdGEubGVuZ3RoOyBkKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB1bnNlbGVjdERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFbZF1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSBgdW5zZWxlY3RgIGV2ZW50LCBzbyBwZW9wbGUgY2FuIHByZXZlbnQgaXQgZnJvbSBiZWluZ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsZWFyZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCd1bnNlbGVjdCcsIHVuc2VsZWN0RGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBldmVudCB3YXMgcHJldmVudGVkLCBkb24ndCBjbGVhciBpdCBvdXQuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVuc2VsZWN0RGF0YS5wcmV2ZW50ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC52YWwocHJldmlvdXNWYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignaW5wdXQnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3RvZ2dsZScsIHt9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEFsbG93Q2xlYXIucHJvdG90eXBlLl9oYW5kbGVLZXlib2FyZENsZWFyID0gZnVuY3Rpb24oXywgZXZ0LCBjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIuaXNPcGVuKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGV2dC53aGljaCA9PSBLRVlTLkRFTEVURSB8fCBldnQud2hpY2ggPT0gS0VZUy5CQUNLU1BBQ0UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVDbGVhcihldnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgQWxsb3dDbGVhci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZGVjb3JhdGVkLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19jbGVhcicpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19wbGFjZWhvbGRlcicpLmxlbmd0aCA+IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9uSWQgPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZUFsbCA9IHRoaXMub3B0aW9ucy5nZXQoJ3RyYW5zbGF0aW9ucycpLmdldCgncmVtb3ZlQWxsSXRlbXMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgJHJlbW92ZSA9ICQoXHJcbiAgICAgICAgICAgICAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX2NsZWFyXCIgdGFiaW5kZXg9XCItMVwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8L2J1dHRvbj4nXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgJHJlbW92ZS5hdHRyKCd0aXRsZScsIHJlbW92ZUFsbCgpKTtcclxuICAgICAgICAgICAgICAgICRyZW1vdmUuYXR0cignYXJpYS1sYWJlbCcsIHJlbW92ZUFsbCgpKTtcclxuICAgICAgICAgICAgICAgICRyZW1vdmUuYXR0cignYXJpYS1kZXNjcmliZWRieScsIHNlbGVjdGlvbklkKTtcclxuICAgICAgICAgICAgICAgIFV0aWxzLlN0b3JlRGF0YSgkcmVtb3ZlWzBdLCAnZGF0YScsIGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlbGVjdGlvbi5wcmVwZW5kKCRyZW1vdmUpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIEFsbG93Q2xlYXI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vc2VhcmNoJywgW1xyXG4gICAgICAgICAgICAnanF1ZXJ5JyxcclxuICAgICAgICAgICAgJy4uL3V0aWxzJyxcclxuICAgICAgICAgICAgJy4uL2tleXMnXHJcbiAgICAgICAgXSwgZnVuY3Rpb24oJCwgVXRpbHMsIEtFWVMpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gU2VhcmNoKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgU2VhcmNoLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihkZWNvcmF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkc2VhcmNoID0gJChcclxuICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlYXJjaCBzZWxlY3QyLXNlYXJjaC0taW5saW5lIHR0cFwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgY2xhc3M9XCJ0dCBzZWxlY3QyLXNlYXJjaF9fZmllbGRcIiB0eXBlPVwic2VhcmNoXCIgdGFiaW5kZXg9XCItMVwiJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyBzcGVsbGNoZWNrPVwiZmFsc2VcIiByb2xlPVwic2VhcmNoYm94XCIgYXJpYS1hdXRvY29tcGxldGU9XCJsaXN0XCIgLz4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPC9zcGFuPidcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2VhcmNoQ29udGFpbmVyID0gJHNlYXJjaDtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlYXJjaCA9ICRzZWFyY2guZmluZCgnaW5wdXQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWFyY2gucHJvcCgnYXV0b2NvbXBsZXRlJywgdGhpcy5vcHRpb25zLmdldCgnYXV0b2NvbXBsZXRlJykpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciAkcmVuZGVyZWQgPSBkZWNvcmF0ZWQuY2FsbCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2ZlclRhYkluZGV4KCk7XHJcbiAgICAgICAgICAgICAgICAkcmVuZGVyZWQuYXBwZW5kKHRoaXMuJHNlYXJjaENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRyZW5kZXJlZDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFNlYXJjaC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdHNJZCA9IGNvbnRhaW5lci5pZCArICctcmVzdWx0cyc7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9uSWQgPSBjb250YWluZXIuaWQgKyAnLWNvbnRhaW5lcic7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmLiRzZWFyY2guYXR0cignYXJpYS1kZXNjcmliZWRieScsIHNlbGVjdGlvbklkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIub24oJ29wZW4nLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRzZWFyY2guYXR0cignYXJpYS1jb250cm9scycsIHJlc3VsdHNJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2VhcmNoLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZXNpemVTZWFyY2goKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRzZWFyY2gucmVtb3ZlQXR0cignYXJpYS1jb250cm9scycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJHNlYXJjaC5yZW1vdmVBdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRzZWFyY2gudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5vbignZW5hYmxlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2VhcmNoLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl90cmFuc2ZlclRhYkluZGV4KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIub24oJ2Rpc2FibGUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRzZWFyY2gucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5vbignZm9jdXMnLCBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRzZWFyY2gudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5vbigncmVzdWx0czpmb2N1cycsIGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuZGF0YS5fcmVzdWx0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2VhcmNoLmF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIHBhcmFtcy5kYXRhLl9yZXN1bHRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2VhcmNoLnJlbW92ZUF0dHIoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlbGVjdGlvbi5vbignZm9jdXNpbicsICcuc2VsZWN0Mi1zZWFyY2gtLWlubGluZScsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlcignZm9jdXMnLCBldnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1c291dCcsICcuc2VsZWN0Mi1zZWFyY2gtLWlubGluZScsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2hhbmRsZUJsdXIoZXZ0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlbGVjdGlvbi5vbigna2V5ZG93bicsICcuc2VsZWN0Mi1zZWFyY2gtLWlubGluZScsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKCdrZXlwcmVzcycsIGV2dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2tleVVwUHJldmVudGVkID0gZXZ0LmlzRGVmYXVsdFByZXZlbnRlZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gZXZ0LndoaWNoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBLRVlTLkJBQ0tTUEFDRSAmJiBzZWxmLiRzZWFyY2gudmFsKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkcHJldmlvdXNDaG9pY2UgPSBzZWxmLiRzZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZScpLmxhc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkcHJldmlvdXNDaG9pY2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBVdGlscy5HZXREYXRhKCRwcmV2aW91c0Nob2ljZVswXSwgJ2RhdGEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlYXJjaFJlbW92ZUNob2ljZShpdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlbGVjdGlvbi5vbignY2xpY2snLCAnLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUnLCBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi4kc2VhcmNoLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUcnkgdG8gZGV0ZWN0IHRoZSBJRSB2ZXJzaW9uIHNob3VsZCB0aGUgYGRvY3VtZW50TW9kZWAgcHJvcGVydHkgdGhhdFxyXG4gICAgICAgICAgICAgICAgLy8gaXMgc3RvcmVkIG9uIHRoZSBkb2N1bWVudC4gVGhpcyBpcyBvbmx5IGltcGxlbWVudGVkIGluIElFIGFuZCBpc1xyXG4gICAgICAgICAgICAgICAgLy8gc2xpZ2h0bHkgY2xlYW5lciB0aGFuIGRvaW5nIGEgdXNlciBhZ2VudCBjaGVjay5cclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgcHJvcGVydHkgaXMgbm90IGF2YWlsYWJsZSBpbiBFZGdlLCBidXQgRWRnZSBhbHNvIGRvZXNuJ3QgaGF2ZVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBidWcuXHJcbiAgICAgICAgICAgICAgICB2YXIgbXNpZSA9IGRvY3VtZW50LmRvY3VtZW50TW9kZTtcclxuICAgICAgICAgICAgICAgIHZhciBkaXNhYmxlSW5wdXRFdmVudHMgPSBtc2llICYmIG1zaWUgPD0gMTE7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgYnJvd3NlcnMgd2hpY2ggZG8gbm90IHN1cHBvcnQgdGhlIGBpbnB1dGAgZXZlbnRcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgd2lsbCBwcmV2ZW50IGRvdWJsZS10cmlnZ2VyaW5nIG9mIGV2ZW50cyBmb3IgYnJvd3NlcnMgd2hpY2ggc3VwcG9ydFxyXG4gICAgICAgICAgICAgICAgLy8gYm90aCB0aGUgYGtleXVwYCBhbmQgYGlucHV0YCBldmVudHMuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWxlY3Rpb24ub24oXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lucHV0LnNlYXJjaGNoZWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAnLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJRSB3aWxsIHRyaWdnZXIgdGhlIGBpbnB1dGAgZXZlbnQgd2hlbiBhIHBsYWNlaG9sZGVyIGlzIHVzZWQgb24gYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWFyY2ggYm94LiBUbyBnZXQgYXJvdW5kIHRoaXMgaXNzdWUsIHdlIGFyZSBmb3JjZWQgdG8gaWdub3JlIGFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBgaW5wdXRgIGV2ZW50cyBpbiBJRSBhbmQga2VlcCB1c2luZyBga2V5dXBgLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzYWJsZUlucHV0RXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRzZWxlY3Rpb24ub2ZmKCdpbnB1dC5zZWFyY2ggaW5wdXQuc2VhcmNoY2hlY2snKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW5iaW5kIHRoZSBkdXBsaWNhdGVkIGBrZXl1cGAgZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2VsZWN0aW9uLm9mZigna2V5dXAuc2VhcmNoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWxlY3Rpb24ub24oXHJcbiAgICAgICAgICAgICAgICAgICAgJ2tleXVwLnNlYXJjaCBpbnB1dC5zZWFyY2gnLFxyXG4gICAgICAgICAgICAgICAgICAgICcuc2VsZWN0Mi1zZWFyY2gtLWlubGluZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElFIHdpbGwgdHJpZ2dlciB0aGUgYGlucHV0YCBldmVudCB3aGVuIGEgcGxhY2Vob2xkZXIgaXMgdXNlZCBvbiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlYXJjaCBib3guIFRvIGdldCBhcm91bmQgdGhpcyBpc3N1ZSwgd2UgYXJlIGZvcmNlZCB0byBpZ25vcmUgYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBpbnB1dGAgZXZlbnRzIGluIElFIGFuZCBrZWVwIHVzaW5nIGBrZXl1cGAuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXNhYmxlSW5wdXRFdmVudHMgJiYgZXZ0LnR5cGUgPT09ICdpbnB1dCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHNlbGVjdGlvbi5vZmYoJ2lucHV0LnNlYXJjaCBpbnB1dC5zZWFyY2hjaGVjaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gZXZ0LndoaWNoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2FuIGZyZWVseSBpZ25vcmUgZXZlbnRzIGZyb20gbW9kaWZpZXIga2V5c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09IEtFWVMuU0hJRlQgfHwga2V5ID09IEtFWVMuQ1RSTCB8fCBrZXkgPT0gS0VZUy5BTFQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGFiYmluZyB3aWxsIGJlIGhhbmRsZWQgZHVyaW5nIHRoZSBga2V5ZG93bmAgcGhhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PSBLRVlTLlRBQikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmhhbmRsZVNlYXJjaChldnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGhpcyBtZXRob2Qgd2lsbCB0cmFuc2ZlciB0aGUgdGFiaW5kZXggYXR0cmlidXRlIGZyb20gdGhlIHJlbmRlcmVkXHJcbiAgICAgICAgICAgICAqIHNlbGVjdGlvbiB0byB0aGUgc2VhcmNoIGJveC4gVGhpcyBhbGxvd3MgZm9yIHRoZSBzZWFyY2ggYm94IHRvIGJlIHVzZWQgYXNcclxuICAgICAgICAgICAgICogdGhlIHByaW1hcnkgZm9jdXMgaW5zdGVhZCBvZiB0aGUgc2VsZWN0aW9uIGNvbnRhaW5lci5cclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFNlYXJjaC5wcm90b3R5cGUuX3RyYW5zZmVyVGFiSW5kZXggPSBmdW5jdGlvbihkZWNvcmF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlYXJjaC5hdHRyKCd0YWJpbmRleCcsIHRoaXMuJHNlbGVjdGlvbi5hdHRyKCd0YWJpbmRleCcpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlbGVjdGlvbi5hdHRyKCd0YWJpbmRleCcsICctMScpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgU2VhcmNoLnByb3RvdHlwZS5jcmVhdGVQbGFjZWhvbGRlciA9IGZ1bmN0aW9uKGRlY29yYXRlZCwgcGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlYXJjaC5hdHRyKCdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyLnRleHQpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgU2VhcmNoLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkZWNvcmF0ZWQsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWFyY2hIYWRGb2N1cyA9IHRoaXMuJHNlYXJjaFswXSA9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlYXJjaC5hdHRyKCdwbGFjZWhvbGRlcicsICcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZVNlYXJjaCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaEhhZEZvY3VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTZWFyY2gucHJvdG90eXBlLmhhbmRsZVNlYXJjaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVTZWFyY2goKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2tleVVwUHJldmVudGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcy4kc2VhcmNoLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3F1ZXJ5Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtOiBpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2tleVVwUHJldmVudGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTZWFyY2gucHJvdG90eXBlLnNlYXJjaFJlbW92ZUNob2ljZSA9IGZ1bmN0aW9uKGRlY29yYXRlZCwgaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCd1bnNlbGVjdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBpdGVtXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWFyY2gudmFsKGl0ZW0udGV4dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaCgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgU2VhcmNoLnByb3RvdHlwZS5yZXNpemVTZWFyY2ggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlYXJjaC5jc3MoJ3dpZHRoJywgJzI1cHgnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSAnMTAwJSc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJHNlYXJjaC5hdHRyKCdwbGFjZWhvbGRlcicpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW5pbXVtV2lkdGggPSB0aGlzLiRzZWFyY2gudmFsKCkubGVuZ3RoICsgMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSAobWluaW11bVdpZHRoICogMC43NSkgKyAnZW0nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlYXJjaC5jc3MoJ3dpZHRoJywgd2lkdGgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFNlYXJjaDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9zZWxlY3Rpb25Dc3MnLCBbXHJcbiAgICAgICAgICAgICcuLi91dGlscydcclxuICAgICAgICBdLCBmdW5jdGlvbihVdGlscykge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBTZWxlY3Rpb25DU1MoKSB7fVxyXG5cclxuICAgICAgICAgICAgU2VsZWN0aW9uQ1NTLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihkZWNvcmF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkc2VsZWN0aW9uID0gZGVjb3JhdGVkLmNhbGwodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGlvbkNzc0NsYXNzID0gdGhpcy5vcHRpb25zLmdldCgnc2VsZWN0aW9uQ3NzQ2xhc3MnKSB8fCAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uQ3NzQ2xhc3MuaW5kZXhPZignOmFsbDonKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Dc3NDbGFzcyA9IHNlbGVjdGlvbkNzc0NsYXNzLnJlcGxhY2UoJzphbGw6JywgJycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVdGlscy5jb3B5Tm9uSW50ZXJuYWxDc3NDbGFzc2VzKCRzZWxlY3Rpb25bMF0sIHRoaXMuJGVsZW1lbnRbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRzZWxlY3Rpb24uYWRkQ2xhc3Moc2VsZWN0aW9uQ3NzQ2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAkc2VsZWN0aW9uO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFNlbGVjdGlvbkNTUztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9ldmVudFJlbGF5JywgW1xyXG4gICAgICAgICAgICAnanF1ZXJ5J1xyXG4gICAgICAgIF0sIGZ1bmN0aW9uKCQpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gRXZlbnRSZWxheSgpIHt9XHJcblxyXG4gICAgICAgICAgICBFdmVudFJlbGF5LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24oZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHZhciByZWxheUV2ZW50cyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAnb3BlbicsICdvcGVuaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2xvc2UnLCAnY2xvc2luZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdCcsICdzZWxlY3RpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICd1bnNlbGVjdCcsICd1bnNlbGVjdGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsZWFyJywgJ2NsZWFyaW5nJ1xyXG4gICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJldmVudGFibGVFdmVudHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ29wZW5pbmcnLCAnY2xvc2luZycsICdzZWxlY3RpbmcnLCAndW5zZWxlY3RpbmcnLCAnY2xlYXJpbmcnXHJcbiAgICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCcqJywgZnVuY3Rpb24obmFtZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIGV2ZW50cyB0aGF0IHNob3VsZCBub3QgYmUgcmVsYXllZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWxheUV2ZW50cy5pbmRleE9mKG5hbWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcGFyYW1ldGVycyBzaG91bGQgYWx3YXlzIGJlIGFuIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgdGhlIGpRdWVyeSBldmVudCBmb3IgdGhlIFNlbGVjdDIgZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXZ0ID0gJC5FdmVudCgnc2VsZWN0MjonICsgbmFtZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbGVtZW50LnRyaWdnZXIoZXZ0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT25seSBoYW5kbGUgcHJldmVudGFibGUgZXZlbnRzIGlmIGl0IHdhcyBvbmVcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldmVudGFibGVFdmVudHMuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnByZXZlbnRlZCA9IGV2dC5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIEV2ZW50UmVsYXk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFMyLmRlZmluZSgnc2VsZWN0Mi90cmFuc2xhdGlvbicsIFtcclxuICAgICAgICAgICAgJ2pxdWVyeScsXHJcbiAgICAgICAgICAgICdyZXF1aXJlJ1xyXG4gICAgICAgIF0sIGZ1bmN0aW9uKCQsIHJlcXVpcmUpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gVHJhbnNsYXRpb24oZGljdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0ID0gZGljdCB8fCB7fTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgVHJhbnNsYXRpb24ucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGljdDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFRyYW5zbGF0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpY3Rba2V5XTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFRyYW5zbGF0aW9uLnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbih0cmFuc2xhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0ID0gJC5leHRlbmQoe30sIHRyYW5zbGF0aW9uLmFsbCgpLCB0aGlzLmRpY3QpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gU3RhdGljIGZ1bmN0aW9uc1xyXG5cclxuICAgICAgICAgICAgVHJhbnNsYXRpb24uX2NhY2hlID0ge307XHJcblxyXG4gICAgICAgICAgICBUcmFuc2xhdGlvbi5sb2FkUGF0aCA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKHBhdGggaW4gVHJhbnNsYXRpb24uX2NhY2hlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbnMgPSByZXF1aXJlKHBhdGgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBUcmFuc2xhdGlvbi5fY2FjaGVbcGF0aF0gPSB0cmFuc2xhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvbihUcmFuc2xhdGlvbi5fY2FjaGVbcGF0aF0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFRyYW5zbGF0aW9uO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTMi5kZWZpbmUoJ3NlbGVjdDIvZGlhY3JpdGljcycsIFtcclxuXHJcbiAgICAgICAgXSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBkaWFjcml0aWNzID0ge1xyXG4gICAgICAgICAgICAgICAgJ1xcdTI0QjYnOiAnQScsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkYyMSc6ICdBJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMEMwJzogJ0EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwQzEnOiAnQScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDBDMic6ICdBJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUE2JzogJ0EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFQTQnOiAnQScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVBQSc6ICdBJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUE4JzogJ0EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwQzMnOiAnQScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDEwMCc6ICdBJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTAyJzogJ0EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFQjAnOiAnQScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVBRSc6ICdBJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUI0JzogJ0EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFQjInOiAnQScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIyNic6ICdBJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUUwJzogJ0EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwQzQnOiAnQScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFERSc6ICdBJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUEyJzogJ0EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwQzUnOiAnQScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFGQSc6ICdBJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUNEJzogJ0EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyMDAnOiAnQScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIwMic6ICdBJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUEwJzogJ0EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFQUMnOiAnQScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVCNic6ICdBJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTAwJzogJ0EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxMDQnOiAnQScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIzQSc6ICdBJyxcclxuICAgICAgICAgICAgICAgICdcXHUyQzZGJzogJ0EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3MzInOiAnQUEnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwQzYnOiAnQUUnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxRkMnOiAnQUUnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxRTInOiAnQUUnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3MzQnOiAnQU8nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3MzYnOiAnQVUnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3MzgnOiAnQVYnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3M0EnOiAnQVYnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3M0MnOiAnQVknLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0QjcnOiAnQicsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkYyMic6ICdCJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTAyJzogJ0InLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMDQnOiAnQicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUwNic6ICdCJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjQzJzogJ0InLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxODInOiAnQicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE4MSc6ICdCJyxcclxuICAgICAgICAgICAgICAgICdcXHUyNEI4JzogJ0MnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUZGMjMnOiAnQycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDEwNic6ICdDJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTA4JzogJ0MnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxMEEnOiAnQycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDEwQyc6ICdDJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMEM3JzogJ0MnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMDgnOiAnQycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE4Nyc6ICdDJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjNCJzogJ0MnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3M0UnOiAnQycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MjRCOSc6ICdEJyxcclxuICAgICAgICAgICAgICAgICdcXHVGRjI0JzogJ0QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMEEnOiAnRCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDEwRSc6ICdEJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTBDJzogJ0QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMTAnOiAnRCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUxMic6ICdEJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTBFJzogJ0QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxMTAnOiAnRCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE4Qic6ICdEJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMThBJzogJ0QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxODknOiAnRCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTc3OSc6ICdEJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUYxJzogJ0RaJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUM0JzogJ0RaJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUYyJzogJ0R6JyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUM1JzogJ0R6JyxcclxuICAgICAgICAgICAgICAgICdcXHUyNEJBJzogJ0UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUZGMjUnOiAnRScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDBDOCc6ICdFJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMEM5JzogJ0UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwQ0EnOiAnRScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVDMCc6ICdFJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUJFJzogJ0UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFQzQnOiAnRScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVDMic6ICdFJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUJDJzogJ0UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxMTInOiAnRScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUxNCc6ICdFJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTE2JzogJ0UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxMTQnOiAnRScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDExNic6ICdFJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMENCJzogJ0UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFQkEnOiAnRScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDExQSc6ICdFJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjA0JzogJ0UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyMDYnOiAnRScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVCOCc6ICdFJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUM2JzogJ0UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyMjgnOiAnRScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUxQyc6ICdFJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTE4JzogJ0UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMTgnOiAnRScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUxQSc6ICdFJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTkwJzogJ0UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxOEUnOiAnRScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MjRCQic6ICdGJyxcclxuICAgICAgICAgICAgICAgICdcXHVGRjI2JzogJ0YnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMUUnOiAnRicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE5MSc6ICdGJyxcclxuICAgICAgICAgICAgICAgICdcXHVBNzdCJzogJ0YnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0QkMnOiAnRycsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkYyNyc6ICdHJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUY0JzogJ0cnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxMUMnOiAnRycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUyMCc6ICdHJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTFFJzogJ0cnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxMjAnOiAnRycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFFNic6ICdHJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTIyJzogJ0cnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxRTQnOiAnRycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE5Myc6ICdHJyxcclxuICAgICAgICAgICAgICAgICdcXHVBN0EwJzogJ0cnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3N0QnOiAnRycsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTc3RSc6ICdHJyxcclxuICAgICAgICAgICAgICAgICdcXHUyNEJEJzogJ0gnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUZGMjgnOiAnSCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDEyNCc6ICdIJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTIyJzogJ0gnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMjYnOiAnSCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIxRSc6ICdIJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTI0JzogJ0gnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMjgnOiAnSCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUyQSc6ICdIJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTI2JzogJ0gnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTJDNjcnOiAnSCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MkM3NSc6ICdIJyxcclxuICAgICAgICAgICAgICAgICdcXHVBNzhEJzogJ0gnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0QkUnOiAnSScsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkYyOSc6ICdJJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMENDJzogJ0knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwQ0QnOiAnSScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDBDRSc6ICdJJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTI4JzogJ0knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxMkEnOiAnSScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDEyQyc6ICdJJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTMwJzogJ0knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwQ0YnOiAnSScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUyRSc6ICdJJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUM4JzogJ0knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxQ0YnOiAnSScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIwOCc6ICdJJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjBBJzogJ0knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFQ0EnOiAnSScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDEyRSc6ICdJJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTJDJzogJ0knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxOTcnOiAnSScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MjRCRic6ICdKJyxcclxuICAgICAgICAgICAgICAgICdcXHVGRjJBJzogJ0onLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxMzQnOiAnSicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDI0OCc6ICdKJyxcclxuICAgICAgICAgICAgICAgICdcXHUyNEMwJzogJ0snLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUZGMkInOiAnSycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUzMCc6ICdLJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUU4JzogJ0snLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMzInOiAnSycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDEzNic6ICdLJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTM0JzogJ0snLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxOTgnOiAnSycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MkM2OSc6ICdLJyxcclxuICAgICAgICAgICAgICAgICdcXHVBNzQwJzogJ0snLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3NDInOiAnSycsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTc0NCc6ICdLJyxcclxuICAgICAgICAgICAgICAgICdcXHVBN0EyJzogJ0snLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0QzEnOiAnTCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkYyQyc6ICdMJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTNGJzogJ0wnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxMzknOiAnTCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDEzRCc6ICdMJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTM2JzogJ0wnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMzgnOiAnTCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDEzQic6ICdMJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTNDJzogJ0wnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFM0EnOiAnTCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE0MSc6ICdMJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjNEJzogJ0wnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTJDNjInOiAnTCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MkM2MCc6ICdMJyxcclxuICAgICAgICAgICAgICAgICdcXHVBNzQ4JzogJ0wnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3NDYnOiAnTCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTc4MCc6ICdMJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUM3JzogJ0xKJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUM4JzogJ0xqJyxcclxuICAgICAgICAgICAgICAgICdcXHUyNEMyJzogJ00nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUZGMkQnOiAnTScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUzRSc6ICdNJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTQwJzogJ00nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNDInOiAnTScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MkM2RSc6ICdNJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTlDJzogJ00nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0QzMnOiAnTicsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkYyRSc6ICdOJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUY4JzogJ04nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNDMnOiAnTicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDBEMSc6ICdOJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTQ0JzogJ04nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNDcnOiAnTicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU0Nic6ICdOJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTQ1JzogJ04nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNEEnOiAnTicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU0OCc6ICdOJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjIwJzogJ04nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxOUQnOiAnTicsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTc5MCc6ICdOJyxcclxuICAgICAgICAgICAgICAgICdcXHVBN0E0JzogJ04nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxQ0EnOiAnTkonLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxQ0InOiAnTmonLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0QzQnOiAnTycsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkYyRic6ICdPJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMEQyJzogJ08nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwRDMnOiAnTycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDBENCc6ICdPJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUQyJzogJ08nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFRDAnOiAnTycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVENic6ICdPJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUQ0JzogJ08nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwRDUnOiAnTycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU0Qyc6ICdPJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjJDJzogJ08nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNEUnOiAnTycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE0Qyc6ICdPJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTUwJzogJ08nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNTInOiAnTycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE0RSc6ICdPJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjJFJzogJ08nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyMzAnOiAnTycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDBENic6ICdPJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjJBJzogJ08nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFQ0UnOiAnTycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE1MCc6ICdPJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUQxJzogJ08nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyMEMnOiAnTycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIwRSc6ICdPJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUEwJzogJ08nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFREMnOiAnTycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVEQSc6ICdPJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUUwJzogJ08nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFREUnOiAnTycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVFMic6ICdPJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUNDJzogJ08nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFRDgnOiAnTycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFFQSc6ICdPJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUVDJzogJ08nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwRDgnOiAnTycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFGRSc6ICdPJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTg2JzogJ08nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxOUYnOiAnTycsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTc0QSc6ICdPJyxcclxuICAgICAgICAgICAgICAgICdcXHVBNzRDJzogJ08nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNTInOiAnT0UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxQTInOiAnT0knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3NEUnOiAnT08nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyMjInOiAnT1UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0QzUnOiAnUCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkYzMCc6ICdQJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTU0JzogJ1AnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNTYnOiAnUCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFBNCc6ICdQJyxcclxuICAgICAgICAgICAgICAgICdcXHUyQzYzJzogJ1AnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3NTAnOiAnUCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTc1Mic6ICdQJyxcclxuICAgICAgICAgICAgICAgICdcXHVBNzU0JzogJ1AnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0QzYnOiAnUScsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkYzMSc6ICdRJyxcclxuICAgICAgICAgICAgICAgICdcXHVBNzU2JzogJ1EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3NTgnOiAnUScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDI0QSc6ICdRJyxcclxuICAgICAgICAgICAgICAgICdcXHUyNEM3JzogJ1InLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUZGMzInOiAnUicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE1NCc6ICdSJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTU4JzogJ1InLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNTgnOiAnUicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIxMCc6ICdSJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjEyJzogJ1InLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNUEnOiAnUicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU1Qyc6ICdSJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTU2JzogJ1InLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNUUnOiAnUicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDI0Qyc6ICdSJyxcclxuICAgICAgICAgICAgICAgICdcXHUyQzY0JzogJ1InLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3NUEnOiAnUicsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTdBNic6ICdSJyxcclxuICAgICAgICAgICAgICAgICdcXHVBNzgyJzogJ1InLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0QzgnOiAnUycsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkYzMyc6ICdTJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTlFJzogJ1MnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNUEnOiAnUycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU2NCc6ICdTJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTVDJzogJ1MnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNjAnOiAnUycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE2MCc6ICdTJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTY2JzogJ1MnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNjInOiAnUycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU2OCc6ICdTJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjE4JzogJ1MnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNUUnOiAnUycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MkM3RSc6ICdTJyxcclxuICAgICAgICAgICAgICAgICdcXHVBN0E4JzogJ1MnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3ODQnOiAnUycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MjRDOSc6ICdUJyxcclxuICAgICAgICAgICAgICAgICdcXHVGRjM0JzogJ1QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNkEnOiAnVCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE2NCc6ICdUJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTZDJzogJ1QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyMUEnOiAnVCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE2Mic6ICdUJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTcwJzogJ1QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNkUnOiAnVCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE2Nic6ICdUJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUFDJzogJ1QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxQUUnOiAnVCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIzRSc6ICdUJyxcclxuICAgICAgICAgICAgICAgICdcXHVBNzg2JzogJ1QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3MjgnOiAnVFonLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0Q0EnOiAnVScsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkYzNSc6ICdVJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMEQ5JzogJ1UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwREEnOiAnVScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDBEQic6ICdVJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTY4JzogJ1UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNzgnOiAnVScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE2QSc6ICdVJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTdBJzogJ1UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNkMnOiAnVScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDBEQyc6ICdVJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMURCJzogJ1UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxRDcnOiAnVScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFENSc6ICdVJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUQ5JzogJ1UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFRTYnOiAnVScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE2RSc6ICdVJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTcwJzogJ1UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxRDMnOiAnVScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIxNCc6ICdVJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjE2JzogJ1UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxQUYnOiAnVScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVFQSc6ICdVJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUU4JzogJ1UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFRUUnOiAnVScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVFQyc6ICdVJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUYwJzogJ1UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFRTQnOiAnVScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU3Mic6ICdVJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTcyJzogJ1UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNzYnOiAnVScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU3NCc6ICdVJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjQ0JzogJ1UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0Q0InOiAnVicsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkYzNic6ICdWJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTdDJzogJ1YnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFN0UnOiAnVicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFCMic6ICdWJyxcclxuICAgICAgICAgICAgICAgICdcXHVBNzVFJzogJ1YnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyNDUnOiAnVicsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTc2MCc6ICdWWScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MjRDQyc6ICdXJyxcclxuICAgICAgICAgICAgICAgICdcXHVGRjM3JzogJ1cnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFODAnOiAnVycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU4Mic6ICdXJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTc0JzogJ1cnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFODYnOiAnVycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU4NCc6ICdXJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTg4JzogJ1cnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTJDNzInOiAnVycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MjRDRCc6ICdYJyxcclxuICAgICAgICAgICAgICAgICdcXHVGRjM4JzogJ1gnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFOEEnOiAnWCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU4Qyc6ICdYJyxcclxuICAgICAgICAgICAgICAgICdcXHUyNENFJzogJ1knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUZGMzknOiAnWScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVGMic6ICdZJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMEREJzogJ1knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNzYnOiAnWScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVGOCc6ICdZJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjMyJzogJ1knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFOEUnOiAnWScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE3OCc6ICdZJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUY2JzogJ1knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFRjQnOiAnWScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFCMyc6ICdZJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjRFJzogJ1knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFRkUnOiAnWScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MjRDRic6ICdaJyxcclxuICAgICAgICAgICAgICAgICdcXHVGRjNBJzogJ1onLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNzknOiAnWicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU5MCc6ICdaJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTdCJzogJ1onLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxN0QnOiAnWicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU5Mic6ICdaJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTk0JzogJ1onLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxQjUnOiAnWicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIyNCc6ICdaJyxcclxuICAgICAgICAgICAgICAgICdcXHUyQzdGJzogJ1onLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTJDNkInOiAnWicsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTc2Mic6ICdaJyxcclxuICAgICAgICAgICAgICAgICdcXHUyNEQwJzogJ2EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUZGNDEnOiAnYScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU5QSc6ICdhJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMEUwJzogJ2EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwRTEnOiAnYScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDBFMic6ICdhJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUE3JzogJ2EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFQTUnOiAnYScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVBQic6ICdhJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUE5JzogJ2EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwRTMnOiAnYScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDEwMSc6ICdhJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTAzJzogJ2EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFQjEnOiAnYScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVBRic6ICdhJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUI1JzogJ2EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFQjMnOiAnYScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIyNyc6ICdhJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUUxJzogJ2EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwRTQnOiAnYScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFERic6ICdhJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUEzJzogJ2EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwRTUnOiAnYScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFGQic6ICdhJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUNFJzogJ2EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyMDEnOiAnYScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIwMyc6ICdhJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUExJzogJ2EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFQUQnOiAnYScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVCNyc6ICdhJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTAxJzogJ2EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxMDUnOiAnYScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MkM2NSc6ICdhJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjUwJzogJ2EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3MzMnOiAnYWEnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwRTYnOiAnYWUnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxRkQnOiAnYWUnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxRTMnOiAnYWUnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3MzUnOiAnYW8nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3MzcnOiAnYXUnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3MzknOiAnYXYnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3M0InOiAnYXYnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3M0QnOiAnYXknLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0RDEnOiAnYicsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkY0Mic6ICdiJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTAzJzogJ2InLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMDUnOiAnYicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUwNyc6ICdiJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTgwJzogJ2InLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxODMnOiAnYicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDI1Myc6ICdiJyxcclxuICAgICAgICAgICAgICAgICdcXHUyNEQyJzogJ2MnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUZGNDMnOiAnYycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDEwNyc6ICdjJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTA5JzogJ2MnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxMEInOiAnYycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDEwRCc6ICdjJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMEU3JzogJ2MnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMDknOiAnYycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE4OCc6ICdjJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjNDJzogJ2MnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3M0YnOiAnYycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MjE4NCc6ICdjJyxcclxuICAgICAgICAgICAgICAgICdcXHUyNEQzJzogJ2QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUZGNDQnOiAnZCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUwQic6ICdkJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTBGJzogJ2QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMEQnOiAnZCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUxMSc6ICdkJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTEzJzogJ2QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMEYnOiAnZCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDExMSc6ICdkJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMThDJzogJ2QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyNTYnOiAnZCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDI1Nyc6ICdkJyxcclxuICAgICAgICAgICAgICAgICdcXHVBNzdBJzogJ2QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxRjMnOiAnZHonLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxQzYnOiAnZHonLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0RDQnOiAnZScsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkY0NSc6ICdlJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMEU4JzogJ2UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwRTknOiAnZScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDBFQSc6ICdlJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUMxJzogJ2UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFQkYnOiAnZScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVDNSc6ICdlJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUMzJzogJ2UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFQkQnOiAnZScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDExMyc6ICdlJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTE1JzogJ2UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMTcnOiAnZScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDExNSc6ICdlJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTE3JzogJ2UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwRUInOiAnZScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVCQic6ICdlJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTFCJzogJ2UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyMDUnOiAnZScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIwNyc6ICdlJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUI5JzogJ2UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFQzcnOiAnZScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIyOSc6ICdlJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTFEJzogJ2UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxMTknOiAnZScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUxOSc6ICdlJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTFCJzogJ2UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyNDcnOiAnZScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDI1Qic6ICdlJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUREJzogJ2UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0RDUnOiAnZicsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkY0Nic6ICdmJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTFGJzogJ2YnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxOTInOiAnZicsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTc3Qyc6ICdmJyxcclxuICAgICAgICAgICAgICAgICdcXHUyNEQ2JzogJ2cnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUZGNDcnOiAnZycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFGNSc6ICdnJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTFEJzogJ2cnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMjEnOiAnZycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDExRic6ICdnJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTIxJzogJ2cnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxRTcnOiAnZycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDEyMyc6ICdnJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUU1JzogJ2cnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyNjAnOiAnZycsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTdBMSc6ICdnJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRDc5JzogJ2cnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3N0YnOiAnZycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MjRENyc6ICdoJyxcclxuICAgICAgICAgICAgICAgICdcXHVGRjQ4JzogJ2gnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxMjUnOiAnaCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUyMyc6ICdoJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTI3JzogJ2gnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyMUYnOiAnaCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUyNSc6ICdoJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTI5JzogJ2gnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMkInOiAnaCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU5Nic6ICdoJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTI3JzogJ2gnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTJDNjgnOiAnaCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MkM3Nic6ICdoJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjY1JzogJ2gnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxOTUnOiAnaHYnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0RDgnOiAnaScsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkY0OSc6ICdpJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMEVDJzogJ2knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwRUQnOiAnaScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDBFRSc6ICdpJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTI5JzogJ2knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxMkInOiAnaScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDEyRCc6ICdpJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMEVGJzogJ2knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMkYnOiAnaScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVDOSc6ICdpJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUQwJzogJ2knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyMDknOiAnaScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIwQic6ICdpJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUNCJzogJ2knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxMkYnOiAnaScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUyRCc6ICdpJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjY4JzogJ2knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxMzEnOiAnaScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MjREOSc6ICdqJyxcclxuICAgICAgICAgICAgICAgICdcXHVGRjRBJzogJ2onLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxMzUnOiAnaicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFGMCc6ICdqJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjQ5JzogJ2onLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0REEnOiAnaycsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkY0Qic6ICdrJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTMxJzogJ2snLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxRTknOiAnaycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUzMyc6ICdrJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTM3JzogJ2snLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMzUnOiAnaycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE5OSc6ICdrJyxcclxuICAgICAgICAgICAgICAgICdcXHUyQzZBJzogJ2snLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3NDEnOiAnaycsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTc0Myc6ICdrJyxcclxuICAgICAgICAgICAgICAgICdcXHVBNzQ1JzogJ2snLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3QTMnOiAnaycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MjREQic6ICdsJyxcclxuICAgICAgICAgICAgICAgICdcXHVGRjRDJzogJ2wnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNDAnOiAnbCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDEzQSc6ICdsJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTNFJzogJ2wnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFMzcnOiAnbCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUzOSc6ICdsJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTNDJzogJ2wnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFM0QnOiAnbCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUUzQic6ICdsJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTdGJzogJ2wnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNDInOiAnbCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE5QSc6ICdsJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjZCJzogJ2wnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTJDNjEnOiAnbCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTc0OSc6ICdsJyxcclxuICAgICAgICAgICAgICAgICdcXHVBNzgxJzogJ2wnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3NDcnOiAnbCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFDOSc6ICdsaicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MjREQyc6ICdtJyxcclxuICAgICAgICAgICAgICAgICdcXHVGRjREJzogJ20nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFM0YnOiAnbScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU0MSc6ICdtJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTQzJzogJ20nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyNzEnOiAnbScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDI2Ric6ICdtJyxcclxuICAgICAgICAgICAgICAgICdcXHUyNEREJzogJ24nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUZGNEUnOiAnbicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFGOSc6ICduJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTQ0JzogJ24nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwRjEnOiAnbicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU0NSc6ICduJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTQ4JzogJ24nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNDcnOiAnbicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE0Nic6ICduJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTRCJzogJ24nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNDknOiAnbicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE5RSc6ICduJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjcyJzogJ24nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNDknOiAnbicsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTc5MSc6ICduJyxcclxuICAgICAgICAgICAgICAgICdcXHVBN0E1JzogJ24nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxQ0MnOiAnbmonLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0REUnOiAnbycsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkY0Ric6ICdvJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMEYyJzogJ28nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwRjMnOiAnbycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDBGNCc6ICdvJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUQzJzogJ28nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFRDEnOiAnbycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVENyc6ICdvJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUQ1JzogJ28nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwRjUnOiAnbycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU0RCc6ICdvJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjJEJzogJ28nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNEYnOiAnbycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE0RCc6ICdvJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTUxJzogJ28nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNTMnOiAnbycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE0Ric6ICdvJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjJGJzogJ28nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyMzEnOiAnbycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDBGNic6ICdvJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjJCJzogJ28nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFQ0YnOiAnbycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE1MSc6ICdvJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUQyJzogJ28nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyMEQnOiAnbycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIwRic6ICdvJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUExJzogJ28nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFREQnOiAnbycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVEQic6ICdvJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUUxJzogJ28nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFREYnOiAnbycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVFMyc6ICdvJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUNEJzogJ28nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFRDknOiAnbycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFFQic6ICdvJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUVEJzogJ28nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwRjgnOiAnbycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFGRic6ICdvJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjU0JzogJ28nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3NEInOiAnbycsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTc0RCc6ICdvJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjc1JzogJ28nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNTMnOiAnb2UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxQTMnOiAnb2knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyMjMnOiAnb3UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3NEYnOiAnb28nLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0REYnOiAncCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkY1MCc6ICdwJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTU1JzogJ3AnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNTcnOiAncCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFBNSc6ICdwJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRDdEJzogJ3AnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3NTEnOiAncCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTc1Myc6ICdwJyxcclxuICAgICAgICAgICAgICAgICdcXHVBNzU1JzogJ3AnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0RTAnOiAncScsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkY1MSc6ICdxJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjRCJzogJ3EnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3NTcnOiAncScsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTc1OSc6ICdxJyxcclxuICAgICAgICAgICAgICAgICdcXHUyNEUxJzogJ3InLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUZGNTInOiAncicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE1NSc6ICdyJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTU5JzogJ3InLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNTknOiAncicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIxMSc6ICdyJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjEzJzogJ3InLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNUInOiAncicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU1RCc6ICdyJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTU3JzogJ3InLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNUYnOiAncicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDI0RCc6ICdyJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjdEJzogJ3InLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3NUInOiAncicsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTdBNyc6ICdyJyxcclxuICAgICAgICAgICAgICAgICdcXHVBNzgzJzogJ3InLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0RTInOiAncycsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkY1Myc6ICdzJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMERGJzogJ3MnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNUInOiAncycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU2NSc6ICdzJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTVEJzogJ3MnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNjEnOiAncycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE2MSc6ICdzJyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTY3JzogJ3MnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNjMnOiAncycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU2OSc6ICdzJyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjE5JzogJ3MnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNUYnOiAncycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIzRic6ICdzJyxcclxuICAgICAgICAgICAgICAgICdcXHVBN0E5JzogJ3MnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3ODUnOiAncycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU5Qic6ICdzJyxcclxuICAgICAgICAgICAgICAgICdcXHUyNEUzJzogJ3QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUZGNTQnOiAndCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU2Qic6ICd0JyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTk3JzogJ3QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNjUnOiAndCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU2RCc6ICd0JyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjFCJzogJ3QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNjMnOiAndCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU3MSc6ICd0JyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTZGJzogJ3QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNjcnOiAndCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFBRCc6ICd0JyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjg4JzogJ3QnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTJDNjYnOiAndCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTc4Nyc6ICd0JyxcclxuICAgICAgICAgICAgICAgICdcXHVBNzI5JzogJ3R6JyxcclxuICAgICAgICAgICAgICAgICdcXHUyNEU0JzogJ3UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUZGNTUnOiAndScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDBGOSc6ICd1JyxcclxuICAgICAgICAgICAgICAgICdcXHUwMEZBJzogJ3UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwRkInOiAndScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE2OSc6ICd1JyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTc5JzogJ3UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNkInOiAndScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU3Qic6ICd1JyxcclxuICAgICAgICAgICAgICAgICdcXHUwMTZEJzogJ3UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAwRkMnOiAndScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFEQyc6ICd1JyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUQ4JzogJ3UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxRDYnOiAndScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFEQSc6ICd1JyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUU3JzogJ3UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNkYnOiAndScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE3MSc6ICd1JyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUQ0JzogJ3UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyMTUnOiAndScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDIxNyc6ICd1JyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUIwJzogJ3UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFRUInOiAndScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVFOSc6ICd1JyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUVGJzogJ3UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFRUQnOiAndScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVGMSc6ICd1JyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUU1JzogJ3UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNzMnOiAndScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE3Myc6ICd1JyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTc3JzogJ3UnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFNzUnOiAndScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDI4OSc6ICd1JyxcclxuICAgICAgICAgICAgICAgICdcXHUyNEU1JzogJ3YnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUZGNTYnOiAndicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU3RCc6ICd2JyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTdGJzogJ3YnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyOEInOiAndicsXHJcbiAgICAgICAgICAgICAgICAnXFx1QTc1Ric6ICd2JyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjhDJzogJ3YnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUE3NjEnOiAndnknLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTI0RTYnOiAndycsXHJcbiAgICAgICAgICAgICAgICAnXFx1RkY1Nyc6ICd3JyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTgxJzogJ3cnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFODMnOiAndycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE3NSc6ICd3JyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTg3JzogJ3cnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFODUnOiAndycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU5OCc6ICd3JyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTg5JzogJ3cnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTJDNzMnOiAndycsXHJcbiAgICAgICAgICAgICAgICAnXFx1MjRFNyc6ICd4JyxcclxuICAgICAgICAgICAgICAgICdcXHVGRjU4JzogJ3gnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFOEInOiAneCcsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUU4RCc6ICd4JyxcclxuICAgICAgICAgICAgICAgICdcXHUyNEU4JzogJ3knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUZGNTknOiAneScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVGMyc6ICd5JyxcclxuICAgICAgICAgICAgICAgICdcXHUwMEZEJzogJ3knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxNzcnOiAneScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVGOSc6ICd5JyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjMzJzogJ3knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFOEYnOiAneScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDBGRic6ICd5JyxcclxuICAgICAgICAgICAgICAgICdcXHUxRUY3JzogJ3knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFOTknOiAneScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVGNSc6ICd5JyxcclxuICAgICAgICAgICAgICAgICdcXHUwMUI0JzogJ3knLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyNEYnOiAneScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MUVGRic6ICd5JyxcclxuICAgICAgICAgICAgICAgICdcXHUyNEU5JzogJ3onLFxyXG4gICAgICAgICAgICAgICAgJ1xcdUZGNUEnOiAneicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE3QSc6ICd6JyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTkxJzogJ3onLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAxN0MnOiAneicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDE3RSc6ICd6JyxcclxuICAgICAgICAgICAgICAgICdcXHUxRTkzJzogJ3onLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTFFOTUnOiAneicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDFCNic6ICd6JyxcclxuICAgICAgICAgICAgICAgICdcXHUwMjI1JzogJ3onLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAyNDAnOiAneicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MkM2Qyc6ICd6JyxcclxuICAgICAgICAgICAgICAgICdcXHVBNzYzJzogJ3onLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAzODYnOiAnXFx1MDM5MScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDM4OCc6ICdcXHUwMzk1JyxcclxuICAgICAgICAgICAgICAgICdcXHUwMzg5JzogJ1xcdTAzOTcnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAzOEEnOiAnXFx1MDM5OScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDNBQSc6ICdcXHUwMzk5JyxcclxuICAgICAgICAgICAgICAgICdcXHUwMzhDJzogJ1xcdTAzOUYnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAzOEUnOiAnXFx1MDNBNScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDNBQic6ICdcXHUwM0E1JyxcclxuICAgICAgICAgICAgICAgICdcXHUwMzhGJzogJ1xcdTAzQTknLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAzQUMnOiAnXFx1MDNCMScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDNBRCc6ICdcXHUwM0I1JyxcclxuICAgICAgICAgICAgICAgICdcXHUwM0FFJzogJ1xcdTAzQjcnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAzQUYnOiAnXFx1MDNCOScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDNDQSc6ICdcXHUwM0I5JyxcclxuICAgICAgICAgICAgICAgICdcXHUwMzkwJzogJ1xcdTAzQjknLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAzQ0MnOiAnXFx1MDNCRicsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDNDRCc6ICdcXHUwM0M1JyxcclxuICAgICAgICAgICAgICAgICdcXHUwM0NCJzogJ1xcdTAzQzUnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTAzQjAnOiAnXFx1MDNDNScsXHJcbiAgICAgICAgICAgICAgICAnXFx1MDNDRSc6ICdcXHUwM0M5JyxcclxuICAgICAgICAgICAgICAgICdcXHUwM0MyJzogJ1xcdTAzQzMnLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTIwMTknOiAnXFwnJ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRpYWNyaXRpY3M7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL2Jhc2UnLCBbXHJcbiAgICAgICAgICAgICcuLi91dGlscydcclxuICAgICAgICBdLCBmdW5jdGlvbihVdGlscykge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBCYXNlQWRhcHRlcigkZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgQmFzZUFkYXB0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFV0aWxzLkV4dGVuZChCYXNlQWRhcHRlciwgVXRpbHMuT2JzZXJ2YWJsZSk7XHJcblxyXG4gICAgICAgICAgICBCYXNlQWRhcHRlci5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgY3VycmVudGAgbWV0aG9kIG11c3QgYmUgZGVmaW5lZCBpbiBjaGlsZCBjbGFzc2VzLicpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgQmFzZUFkYXB0ZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24ocGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYHF1ZXJ5YCBtZXRob2QgbXVzdCBiZSBkZWZpbmVkIGluIGNoaWxkIGNsYXNzZXMuJyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBCYXNlQWRhcHRlci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2FuIGJlIGltcGxlbWVudGVkIGluIHN1YmNsYXNzZXNcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEJhc2VBZGFwdGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDYW4gYmUgaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3Nlc1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgQmFzZUFkYXB0ZXIucHJvdG90eXBlLmdlbmVyYXRlUmVzdWx0SWQgPSBmdW5jdGlvbihjb250YWluZXIsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IGNvbnRhaW5lci5pZCArICctcmVzdWx0LSc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWQgKz0gVXRpbHMuZ2VuZXJhdGVDaGFycyg0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQgKz0gJy0nICsgZGF0YS5pZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZCArPSAnLScgKyBVdGlscy5nZW5lcmF0ZUNoYXJzKDQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIEJhc2VBZGFwdGVyO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9zZWxlY3QnLCBbXHJcbiAgICAgICAgICAgICcuL2Jhc2UnLFxyXG4gICAgICAgICAgICAnLi4vdXRpbHMnLFxyXG4gICAgICAgICAgICAnanF1ZXJ5J1xyXG4gICAgICAgIF0sIGZ1bmN0aW9uKEJhc2VBZGFwdGVyLCBVdGlscywgJCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBTZWxlY3RBZGFwdGVyKCRlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuICAgICAgICAgICAgICAgIFNlbGVjdEFkYXB0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFV0aWxzLkV4dGVuZChTZWxlY3RBZGFwdGVyLCBCYXNlQWRhcHRlcik7XHJcblxyXG4gICAgICAgICAgICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50WzBdLnF1ZXJ5U2VsZWN0b3JBbGwoJzpjaGVja2VkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oc2VsZWN0ZWRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLml0ZW0oJChzZWxlY3RlZEVsZW1lbnQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIGRhdGEuZWxlbWVudCBpcyBhIERPTSBub2RlLCB1c2UgaXQgaW5zdGVhZFxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZWxlbWVudCAhPSBudWxsICYmIGRhdGEuZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdvcHRpb24nXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmVsZW1lbnQuc2VsZWN0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2lucHV0JykudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kZWxlbWVudC5wcm9wKCdtdWx0aXBsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50KGZ1bmN0aW9uKGN1cnJlbnREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBbZGF0YV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaC5hcHBseShkYXRhLCBjdXJyZW50RGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRhdGEubGVuZ3RoOyBkKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZCA9IGRhdGFbZF0uaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbC5pbmRleE9mKGlkKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwucHVzaChpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJGVsZW1lbnQudmFsKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJGVsZW1lbnQudHJpZ2dlcignaW5wdXQnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IGRhdGEuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQudmFsKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdpbnB1dCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUudW5zZWxlY3QgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLiRlbGVtZW50LnByb3AoJ211bHRpcGxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YS5zZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmVsZW1lbnQgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdvcHRpb24nXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmVsZW1lbnQuc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdpbnB1dCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50KGZ1bmN0aW9uKGN1cnJlbnREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IGN1cnJlbnREYXRhLmxlbmd0aDsgZCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZCA9IGN1cnJlbnREYXRhW2RdLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkICE9PSBkYXRhLmlkICYmIHZhbC5pbmRleE9mKGlkKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5wdXNoKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZWxlbWVudC52YWwodmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZWxlbWVudC50cmlnZ2VyKCdpbnB1dCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24oY29udGFpbmVyLCAkY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCdzZWxlY3QnLCBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdChwYXJhbXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIub24oJ3Vuc2VsZWN0JywgZnVuY3Rpb24ocGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi51bnNlbGVjdChwYXJhbXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbnl0aGluZyBhZGRlZCB0byBjaGlsZCBlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5maW5kKCcqJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYW55IGN1c3RvbSBkYXRhIHNldCBieSBTZWxlY3QyXHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMuUmVtb3ZlRGF0YSh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbihwYXJhbXMsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciAkb3B0aW9ucyA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkb3B0aW9ucy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdvcHRpb24nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnb3B0Z3JvdXAnXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkb3B0aW9uID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IHNlbGYuaXRlbSgkb3B0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBzZWxmLm1hdGNoZXMocGFyYW1zLCBvcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2gobWF0Y2hlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IGRhdGFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuYWRkT3B0aW9ucyA9IGZ1bmN0aW9uKCRvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LmFwcGVuZCgkb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5vcHRpb24gPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24ubGFiZWwgPSBkYXRhLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uLnRleHRDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gZGF0YS50ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBkYXRhLnRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmlkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24udGl0bGUgPSBkYXRhLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBub3JtYWxpemVkRGF0YSA9IHRoaXMuX25vcm1hbGl6ZUl0ZW0oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkRGF0YS5lbGVtZW50ID0gb3B0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE92ZXJyaWRlIHRoZSBvcHRpb24ncyBkYXRhIHdpdGggdGhlIGNvbWJpbmVkIGRhdGFcclxuICAgICAgICAgICAgICAgIFV0aWxzLlN0b3JlRGF0YShvcHRpb24sICdkYXRhJywgbm9ybWFsaXplZERhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAkKG9wdGlvbik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5pdGVtID0gZnVuY3Rpb24oJG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhID0gVXRpbHMuR2V0RGF0YSgkb3B0aW9uWzBdLCAnZGF0YScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gJG9wdGlvblswXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ29wdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJG9wdGlvbi52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJG9wdGlvbi50ZXh0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkb3B0aW9uLnByb3AoJ2Rpc2FibGVkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiAkb3B0aW9uLnByb3AoJ3NlbGVjdGVkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAkb3B0aW9uLnByb3AoJ3RpdGxlJylcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb24udGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnb3B0Z3JvdXAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJG9wdGlvbi5wcm9wKCdsYWJlbCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAkb3B0aW9uLnByb3AoJ3RpdGxlJylcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgJGNoaWxkcmVuID0gJG9wdGlvbi5jaGlsZHJlbignb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgJGNoaWxkcmVuLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkY2hpbGQgPSAkKCRjaGlsZHJlbltjXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLml0ZW0oJGNoaWxkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLl9ub3JtYWxpemVJdGVtKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5lbGVtZW50ID0gJG9wdGlvblswXTtcclxuXHJcbiAgICAgICAgICAgICAgICBVdGlscy5TdG9yZURhdGEoJG9wdGlvblswXSwgJ2RhdGEnLCBkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLl9ub3JtYWxpemVJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT09IE9iamVjdChpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtID0gJC5leHRlbmQoe30sIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJ1xyXG4gICAgICAgICAgICAgICAgfSwgaXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaWQgPSBpdGVtLmlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udGV4dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0ID0gaXRlbS50ZXh0LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uX3Jlc3VsdElkID09IG51bGwgJiYgaXRlbS5pZCAmJiB0aGlzLmNvbnRhaW5lciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5fcmVzdWx0SWQgPSB0aGlzLmdlbmVyYXRlUmVzdWx0SWQodGhpcy5jb250YWluZXIsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uKHBhcmFtcywgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdtYXRjaGVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXIocGFyYW1zLCBkYXRhKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBTZWxlY3RBZGFwdGVyO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9hcnJheScsIFtcclxuICAgICAgICAgICAgJy4vc2VsZWN0JyxcclxuICAgICAgICAgICAgJy4uL3V0aWxzJyxcclxuICAgICAgICAgICAgJ2pxdWVyeSdcclxuICAgICAgICBdLCBmdW5jdGlvbihTZWxlY3RBZGFwdGVyLCBVdGlscywgJCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBBcnJheUFkYXB0ZXIoJGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFUb0NvbnZlcnQgPSBvcHRpb25zLmdldCgnZGF0YScpIHx8IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIEFycmF5QWRhcHRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFV0aWxzLkV4dGVuZChBcnJheUFkYXB0ZXIsIFNlbGVjdEFkYXB0ZXIpO1xyXG5cclxuICAgICAgICAgICAgQXJyYXlBZGFwdGVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24oY29udGFpbmVyLCAkY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBBcnJheUFkYXB0ZXIuX19zdXBlcl9fLmJpbmQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkT3B0aW9ucyh0aGlzLmNvbnZlcnRUb09wdGlvbnModGhpcy5fZGF0YVRvQ29udmVydCkpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgQXJyYXlBZGFwdGVyLnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJG9wdGlvbiA9IHRoaXMuJGVsZW1lbnQuZmluZCgnb3B0aW9uJykuZmlsdGVyKGZ1bmN0aW9uKGksIGVsbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbG0udmFsdWUgPT0gZGF0YS5pZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRvcHRpb24ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG9wdGlvbiA9IHRoaXMub3B0aW9uKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE9wdGlvbnMoJG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQXJyYXlBZGFwdGVyLl9fc3VwZXJfXy5zZWxlY3QuY2FsbCh0aGlzLCBkYXRhKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEFycmF5QWRhcHRlci5wcm90b3R5cGUuY29udmVydFRvT3B0aW9ucyA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgJGV4aXN0aW5nID0gdGhpcy4kZWxlbWVudC5maW5kKCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ0lkcyA9ICRleGlzdGluZy5tYXAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaXRlbSgkKHRoaXMpKS5pZDtcclxuICAgICAgICAgICAgICAgIH0pLmdldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciAkb3B0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZpbHRlciBvdXQgYWxsIGl0ZW1zIGV4Y2VwdCBmb3IgdGhlIG9uZSBwYXNzZWQgaW4gdGhlIGFyZ3VtZW50XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBvbmx5SXRlbShpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS52YWwoKSA9PSBpdGVtLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkYXRhLmxlbmd0aDsgZCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLl9ub3JtYWxpemVJdGVtKGRhdGFbZF0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIGl0ZW1zIHdoaWNoIHdlcmUgcHJlLWxvYWRlZCwgb25seSBtZXJnZSB0aGUgZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ0lkcy5pbmRleE9mKGl0ZW0uaWQpID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRleGlzdGluZ09wdGlvbiA9ICRleGlzdGluZy5maWx0ZXIob25seUl0ZW0oaXRlbSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nRGF0YSA9IHRoaXMuaXRlbSgkZXhpc3RpbmdPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RGF0YSA9ICQuZXh0ZW5kKHRydWUsIHt9LCBpdGVtLCBleGlzdGluZ0RhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRuZXdPcHRpb24gPSB0aGlzLm9wdGlvbihuZXdEYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRleGlzdGluZ09wdGlvbi5yZXBsYWNlV2l0aCgkbmV3T3B0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRvcHRpb24gPSB0aGlzLm9wdGlvbihpdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRjaGlsZHJlbiA9IHRoaXMuY29udmVydFRvT3B0aW9ucyhpdGVtLmNoaWxkcmVuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRvcHRpb24uYXBwZW5kKCRjaGlsZHJlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkb3B0aW9ucy5wdXNoKCRvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAkb3B0aW9ucztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBBcnJheUFkYXB0ZXI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL2FqYXgnLCBbXHJcbiAgICAgICAgICAgICcuL2FycmF5JyxcclxuICAgICAgICAgICAgJy4uL3V0aWxzJyxcclxuICAgICAgICAgICAgJ2pxdWVyeSdcclxuICAgICAgICBdLCBmdW5jdGlvbihBcnJheUFkYXB0ZXIsIFV0aWxzLCAkKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEFqYXhBZGFwdGVyKCRlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFqYXhPcHRpb25zID0gdGhpcy5fYXBwbHlEZWZhdWx0cyhvcHRpb25zLmdldCgnYWpheCcpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5wcm9jZXNzUmVzdWx0cyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVzdWx0cyA9IHRoaXMuYWpheE9wdGlvbnMucHJvY2Vzc1Jlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQWpheEFkYXB0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBVdGlscy5FeHRlbmQoQWpheEFkYXB0ZXIsIEFycmF5QWRhcHRlcik7XHJcblxyXG4gICAgICAgICAgICBBamF4QWRhcHRlci5wcm90b3R5cGUuX2FwcGx5RGVmYXVsdHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24ocGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkLmV4dGVuZCh7fSwgcGFyYW1zLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxOiBwYXJhbXMudGVybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydDogZnVuY3Rpb24ocGFyYW1zLCBzdWNjZXNzLCBmYWlsdXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkcmVxdWVzdCA9ICQuYWpheChwYXJhbXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJlcXVlc3QudGhlbihzdWNjZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJlcXVlc3QuZmFpbChmYWlsdXJlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkcmVxdWVzdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMsIHRydWUpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgQWpheEFkYXB0ZXIucHJvdG90eXBlLnByb2Nlc3NSZXN1bHRzID0gZnVuY3Rpb24ocmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBBamF4QWRhcHRlci5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbihwYXJhbXMsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZXF1ZXN0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBKU09OUCByZXF1ZXN0cyBjYW5ub3QgYWx3YXlzIGJlIGFib3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKHRoaXMuX3JlcXVlc3QuYWJvcnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlcXVlc3QuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlcXVlc3QgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdHRVQnXHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzLmFqYXhPcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudXJsID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy51cmwgPSBvcHRpb25zLnVybC5jYWxsKHRoaXMuJGVsZW1lbnQsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmRhdGEgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmRhdGEgPSBvcHRpb25zLmRhdGEuY2FsbCh0aGlzLiRlbGVtZW50LCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlcXVlc3QoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRyZXF1ZXN0ID0gb3B0aW9ucy50cmFuc3BvcnQob3B0aW9ucywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0cyA9IHNlbGYucHJvY2Vzc1Jlc3VsdHMoZGF0YSwgcGFyYW1zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZ2V0KCdkZWJ1ZycpICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSByZXNwb25zZSBpbmNsdWRlZCBhIGByZXN1bHRzYCBrZXkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdHMgfHwgIXJlc3VsdHMucmVzdWx0cyB8fCAhQXJyYXkuaXNBcnJheShyZXN1bHRzLnJlc3VsdHMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NlbGVjdDI6IFRoZSBBSkFYIHJlc3VsdHMgZGlkIG5vdCByZXR1cm4gYW4gYXJyYXkgaW4gdGhlICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYHJlc3VsdHNgIGtleSBvZiB0aGUgcmVzcG9uc2UuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBdHRlbXB0IHRvIGRldGVjdCBpZiBhIHJlcXVlc3Qgd2FzIGFib3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT25seSB3b3JrcyBpZiB0aGUgdHJhbnNwb3J0IGV4cG9zZXMgYSBzdGF0dXMgcHJvcGVydHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdzdGF0dXMnIGluICRyZXF1ZXN0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoJHJlcXVlc3Quc3RhdHVzID09PSAwIHx8ICRyZXF1ZXN0LnN0YXR1cyA9PT0gJzAnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6bWVzc2FnZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdlcnJvckxvYWRpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9yZXF1ZXN0ID0gJHJlcXVlc3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWpheE9wdGlvbnMuZGVsYXkgJiYgcGFyYW1zLnRlcm0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9xdWVyeVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl9xdWVyeVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcXVlcnlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQocmVxdWVzdCwgdGhpcy5hamF4T3B0aW9ucy5kZWxheSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBBamF4QWRhcHRlcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvdGFncycsIFtcclxuICAgICAgICAgICAgJ2pxdWVyeSdcclxuICAgICAgICBdLCBmdW5jdGlvbigkKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIFRhZ3MoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhZ3MgPSBvcHRpb25zLmdldCgndGFncycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjcmVhdGVUYWcgPSBvcHRpb25zLmdldCgnY3JlYXRlVGFnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNyZWF0ZVRhZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVUYWcgPSBjcmVhdGVUYWc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGluc2VydFRhZyA9IG9wdGlvbnMuZ2V0KCdpbnNlcnRUYWcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0VGFnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydFRhZyA9IGluc2VydFRhZztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFncykpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRhZ3MubGVuZ3RoOyB0KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhZyA9IHRhZ3NbdF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5fbm9ybWFsaXplSXRlbSh0YWcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvcHRpb24gPSB0aGlzLm9wdGlvbihpdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKCRvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgVGFncy5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbihkZWNvcmF0ZWQsIHBhcmFtcywgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVPbGRUYWdzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy50ZXJtID09IG51bGwgfHwgcGFyYW1zLnBhZ2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcywgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB3cmFwcGVyKG9iaiwgY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IG9iai5yZXN1bHRzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRhdGFbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hlY2tDaGlsZHJlbiA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jaGlsZHJlbiAhPSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhd3JhcHBlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogb3B0aW9uLmNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvblRleHQgPSAob3B0aW9uLnRleHQgfHwgJycpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbXNUZXJtID0gKHBhcmFtcy50ZXJtIHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrVGV4dCA9IG9wdGlvblRleHQgPT09IHBhcmFtc1Rlcm07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tUZXh0IHx8IGNoZWNrQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhvYmopO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhZyA9IHNlbGYuY3JlYXRlVGFnKHBhcmFtcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9wdGlvbiA9IHNlbGYub3B0aW9uKHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRvcHRpb24uYXR0cignZGF0YS1zZWxlY3QyLXRhZycsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRPcHRpb25zKFskb3B0aW9uXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmluc2VydFRhZyhkYXRhLCB0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLnJlc3VsdHMgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhvYmopO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcywgd3JhcHBlcik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBUYWdzLnByb3RvdHlwZS5jcmVhdGVUYWcgPSBmdW5jdGlvbihkZWNvcmF0ZWQsIHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy50ZXJtID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGVybSA9IHBhcmFtcy50ZXJtLnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGVybSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0ZXJtLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRlcm1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBUYWdzLnByb3RvdHlwZS5pbnNlcnRUYWcgPSBmdW5jdGlvbihfLCBkYXRhLCB0YWcpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEudW5zaGlmdCh0YWcpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgVGFncy5wcm90b3R5cGUuX3JlbW92ZU9sZFRhZ3MgPSBmdW5jdGlvbihfKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJG9wdGlvbnMgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ29wdGlvbltkYXRhLXNlbGVjdDItdGFnXScpO1xyXG5cclxuICAgICAgICAgICAgICAgICRvcHRpb25zLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFRhZ3M7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL3Rva2VuaXplcicsIFtcclxuICAgICAgICAgICAgJ2pxdWVyeSdcclxuICAgICAgICBdLCBmdW5jdGlvbigkKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIFRva2VuaXplcihkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5pemVyID0gb3B0aW9ucy5nZXQoJ3Rva2VuaXplcicpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0b2tlbml6ZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5pemVyID0gdG9rZW5pemVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgVG9rZW5pemVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24oZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2VhcmNoID0gY29udGFpbmVyLmRyb3Bkb3duLiRzZWFyY2ggfHwgY29udGFpbmVyLnNlbGVjdGlvbi4kc2VhcmNoIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci5maW5kKCcuc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkJyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBUb2tlbml6ZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24oZGVjb3JhdGVkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlQW5kU2VsZWN0KGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBOb3JtYWxpemUgdGhlIGRhdGEgb2JqZWN0IHNvIHdlIGNhbiB1c2UgaXQgZm9yIGNoZWNrc1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gc2VsZi5fbm9ybWFsaXplSXRlbShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGRhdGEgb2JqZWN0IGFscmVhZHkgZXhpc3RzIGFzIGEgdGFnXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VsZWN0IGl0IGlmIGl0IGRvZXNuJ3RcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJGV4aXN0aW5nT3B0aW9ucyA9IHNlbGYuJGVsZW1lbnQuZmluZCgnb3B0aW9uJykuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS52YWwoKSA9PT0gaXRlbS5pZDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgYW4gZXhpc3Rpbmcgb3B0aW9uIHdhc24ndCBmb3VuZCBmb3IgaXQsIGNyZWF0ZSB0aGUgb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkZXhpc3RpbmdPcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9wdGlvbiA9IHNlbGYub3B0aW9uKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkb3B0aW9uLmF0dHIoJ2RhdGEtc2VsZWN0Mi10YWcnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3JlbW92ZU9sZFRhZ3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRPcHRpb25zKFskb3B0aW9uXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY3QgdGhlIGl0ZW0sIG5vdyB0aGF0IHdlIGtub3cgdGhlcmUgaXMgYW4gb3B0aW9uIGZvciBpdFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZWxlY3QoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnRlcm0gPSBwYXJhbXMudGVybSB8fCAnJztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5EYXRhID0gdGhpcy50b2tlbml6ZXIocGFyYW1zLCB0aGlzLm9wdGlvbnMsIGNyZWF0ZUFuZFNlbGVjdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuRGF0YS50ZXJtICE9PSBwYXJhbXMudGVybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIHNlYXJjaCB0ZXJtIGlmIHdlIGhhdmUgdGhlIHNlYXJjaCBib3hcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy4kc2VhcmNoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZWFyY2gudmFsKHRva2VuRGF0YS50ZXJtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMudGVybSA9IHRva2VuRGF0YS50ZXJtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcywgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgVG9rZW5pemVyLnByb3RvdHlwZS50b2tlbml6ZXIgPSBmdW5jdGlvbihfLCBwYXJhbXMsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VwYXJhdG9ycyA9IG9wdGlvbnMuZ2V0KCd0b2tlblNlcGFyYXRvcnMnKSB8fCBbXTtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXJtID0gcGFyYW1zLnRlcm07XHJcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNyZWF0ZVRhZyA9IHRoaXMuY3JlYXRlVGFnIHx8IGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMudGVybSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcGFyYW1zLnRlcm1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IHRlcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlcm1DaGFyID0gdGVybVtpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlcGFyYXRvcnMuaW5kZXhPZih0ZXJtQ2hhcikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSB0ZXJtLnN1YnN0cigwLCBpKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydFBhcmFtcyA9ICQuZXh0ZW5kKHt9LCBwYXJhbXMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVybTogcGFydFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IGNyZWF0ZVRhZyhwYXJ0UGFyYW1zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSB0ZXJtIHRvIG5vdCBpbmNsdWRlIHRoZSB0b2tlbml6ZWQgcG9ydGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHRlcm0gPSB0ZXJtLnN1YnN0cihpICsgMSkgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXJtOiB0ZXJtXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFRva2VuaXplcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvbWluaW11bUlucHV0TGVuZ3RoJywgW1xyXG5cclxuICAgICAgICBdLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gTWluaW11bUlucHV0TGVuZ3RoKGRlY29yYXRlZCwgJGUsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWluaW11bUlucHV0TGVuZ3RoID0gb3B0aW9ucy5nZXQoJ21pbmltdW1JbnB1dExlbmd0aCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTWluaW11bUlucHV0TGVuZ3RoLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKGRlY29yYXRlZCwgcGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnRlcm0gPSBwYXJhbXMudGVybSB8fCAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnRlcm0ubGVuZ3RoIDwgdGhpcy5taW5pbXVtSW5wdXRMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3Jlc3VsdHM6bWVzc2FnZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2lucHV0VG9vU2hvcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiB0aGlzLm1pbmltdW1JbnB1dExlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBwYXJhbXMudGVybSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcywgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIE1pbmltdW1JbnB1dExlbmd0aDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvbWF4aW11bUlucHV0TGVuZ3RoJywgW1xyXG5cclxuICAgICAgICBdLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gTWF4aW11bUlucHV0TGVuZ3RoKGRlY29yYXRlZCwgJGUsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF4aW11bUlucHV0TGVuZ3RoID0gb3B0aW9ucy5nZXQoJ21heGltdW1JbnB1dExlbmd0aCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTWF4aW11bUlucHV0TGVuZ3RoLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKGRlY29yYXRlZCwgcGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnRlcm0gPSBwYXJhbXMudGVybSB8fCAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXhpbXVtSW5wdXRMZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnRlcm0ubGVuZ3RoID4gdGhpcy5tYXhpbXVtSW5wdXRMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3Jlc3VsdHM6bWVzc2FnZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2lucHV0VG9vTG9uZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IHRoaXMubWF4aW11bUlucHV0TGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy50ZXJtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gTWF4aW11bUlucHV0TGVuZ3RoO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoJywgW1xyXG5cclxuICAgICAgICBdLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gTWF4aW11bVNlbGVjdGlvbkxlbmd0aChkZWNvcmF0ZWQsICRlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heGltdW1TZWxlY3Rpb25MZW5ndGggPSBvcHRpb25zLmdldCgnbWF4aW11bVNlbGVjdGlvbkxlbmd0aCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTWF4aW11bVNlbGVjdGlvbkxlbmd0aC5wcm90b3R5cGUuYmluZCA9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCdzZWxlY3QnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2hlY2tJZk1heGltdW1TZWxlY3RlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIE1heGltdW1TZWxlY3Rpb25MZW5ndGgucHJvdG90eXBlLnF1ZXJ5ID1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGRlY29yYXRlZCwgcGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tJZk1heGltdW1TZWxlY3RlZChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb3JhdGVkLmNhbGwoc2VsZiwgcGFyYW1zLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgTWF4aW11bVNlbGVjdGlvbkxlbmd0aC5wcm90b3R5cGUuX2NoZWNrSWZNYXhpbXVtU2VsZWN0ZWQgPVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oXywgc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQoZnVuY3Rpb24oY3VycmVudERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gY3VycmVudERhdGEgIT0gbnVsbCA/IGN1cnJlbnREYXRhLmxlbmd0aCA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm1heGltdW1TZWxlY3Rpb25MZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA+PSBzZWxmLm1heGltdW1TZWxlY3Rpb25MZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czptZXNzYWdlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdtYXhpbXVtU2VsZWN0ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogc2VsZi5tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIE1heGltdW1TZWxlY3Rpb25MZW5ndGg7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bicsIFtcclxuICAgICAgICAgICAgJ2pxdWVyeScsXHJcbiAgICAgICAgICAgICcuL3V0aWxzJ1xyXG4gICAgICAgIF0sIGZ1bmN0aW9uKCQsIFV0aWxzKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIERyb3Bkb3duKCRlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuICAgICAgICAgICAgICAgIERyb3Bkb3duLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBVdGlscy5FeHRlbmQoRHJvcGRvd24sIFV0aWxzLk9ic2VydmFibGUpO1xyXG5cclxuICAgICAgICAgICAgRHJvcGRvd24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRkcm9wZG93biA9ICQoXHJcbiAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1kcm9wZG93blwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItcmVzdWx0c1wiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPC9zcGFuPidcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGRyb3Bkb3duLmF0dHIoJ2RpcicsIHRoaXMub3B0aW9ucy5nZXQoJ2RpcicpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkcm9wZG93biA9ICRkcm9wZG93bjtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJGRyb3Bkb3duO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgRHJvcGRvd24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSBpbXBsZW1lbnRlZCBpbiBzdWJjbGFzc2VzXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBEcm9wZG93bi5wcm90b3R5cGUucG9zaXRpb24gPSBmdW5jdGlvbigkZHJvcGRvd24sICRjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSBpbXBsZW1lbnRlZCBpbiBzdWJjbGFzc2VzXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBEcm9wZG93bi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBkcm9wZG93biBmcm9tIHRoZSBET01cclxuICAgICAgICAgICAgICAgIHRoaXMuJGRyb3Bkb3duLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIERyb3Bkb3duO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vc2VhcmNoJywgW1xyXG4gICAgICAgICAgICAnanF1ZXJ5J1xyXG4gICAgICAgIF0sIGZ1bmN0aW9uKCQpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gU2VhcmNoKCkge31cclxuXHJcbiAgICAgICAgICAgIFNlYXJjaC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oZGVjb3JhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHJlbmRlcmVkID0gZGVjb3JhdGVkLmNhbGwodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyICRzZWFyY2ggPSAkKFxyXG4gICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VhcmNoIHNlbGVjdDItc2VhcmNoLS1kcm9wZG93blwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgY2xhc3M9XCJzZWxlY3QyLXNlYXJjaF9fZmllbGQgdHRcIiB0eXBlPVwic2VhcmNoXCIgdGFiaW5kZXg9XCItMVwiJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJyBzcGVsbGNoZWNrPVwiZmFsc2VcIiByb2xlPVwic2VhcmNoYm94XCIgYXJpYS1hdXRvY29tcGxldGU9XCJsaXN0XCIgLz4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPC9zcGFuPidcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2VhcmNoQ29udGFpbmVyID0gJHNlYXJjaDtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlYXJjaCA9ICRzZWFyY2guZmluZCgnaW5wdXQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWFyY2gucHJvcCgnYXV0b2NvbXBsZXRlJywgdGhpcy5vcHRpb25zLmdldCgnYXV0b2NvbXBsZXRlJykpO1xyXG5cclxuICAgICAgICAgICAgICAgICRyZW5kZXJlZC5wcmVwZW5kKCRzZWFyY2gpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAkcmVuZGVyZWQ7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTZWFyY2gucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbihkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHRzSWQgPSBjb250YWluZXIuaWQgKyAnLXJlc3VsdHMnO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2VhcmNoLm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKCdrZXlwcmVzcycsIGV2dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2tleVVwUHJldmVudGVkID0gZXZ0LmlzRGVmYXVsdFByZXZlbnRlZCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgYnJvd3NlcnMgd2hpY2ggZG8gbm90IHN1cHBvcnQgdGhlIGBpbnB1dGAgZXZlbnRcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgd2lsbCBwcmV2ZW50IGRvdWJsZS10cmlnZ2VyaW5nIG9mIGV2ZW50cyBmb3IgYnJvd3NlcnMgd2hpY2ggc3VwcG9ydFxyXG4gICAgICAgICAgICAgICAgLy8gYm90aCB0aGUgYGtleXVwYCBhbmQgYGlucHV0YCBldmVudHMuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZWFyY2gub24oJ2lucHV0JywgZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVW5iaW5kIHRoZSBkdXBsaWNhdGVkIGBrZXl1cGAgZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLm9mZigna2V5dXAnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHNlYXJjaC5vbigna2V5dXAgaW5wdXQnLCBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmhhbmRsZVNlYXJjaChldnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCdvcGVuJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2VhcmNoLmF0dHIoJ3RhYmluZGV4JywgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2VhcmNoLmF0dHIoJ2FyaWEtY29udHJvbHMnLCByZXN1bHRzSWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRzZWFyY2gudHJpZ2dlcignZm9jdXMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHNlYXJjaC50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCdjbG9zZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJHNlYXJjaC5hdHRyKCd0YWJpbmRleCcsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRzZWFyY2gucmVtb3ZlQXR0cignYXJpYS1jb250cm9scycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJHNlYXJjaC5yZW1vdmVBdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2VhcmNoLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2JsdXInKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5vbignZm9jdXMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lci5pc09wZW4oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRzZWFyY2gudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6YWxsJywgZnVuY3Rpb24ocGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5xdWVyeS50ZXJtID09IG51bGwgfHwgcGFyYW1zLnF1ZXJ5LnRlcm0gPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaG93U2VhcmNoID0gc2VsZi5zaG93U2VhcmNoKHBhcmFtcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvd1NlYXJjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZWxmLiRzZWFyY2hDb250YWluZXJbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0Mi1zZWFyY2gtLWhpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHNlYXJjaENvbnRhaW5lclswXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QyLXNlYXJjaC0taGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2VhcmNoQ29udGFpbmVyWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdDItc2VhcmNoLS1oaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6Zm9jdXMnLCBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmRhdGEuX3Jlc3VsdElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHNlYXJjaC5hdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBwYXJhbXMuZGF0YS5fcmVzdWx0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHNlYXJjaC5yZW1vdmVBdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFNlYXJjaC5wcm90b3R5cGUuaGFuZGxlU2VhcmNoID0gZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2tleVVwUHJldmVudGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcy4kc2VhcmNoLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3F1ZXJ5Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtOiBpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2tleVVwUHJldmVudGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTZWFyY2gucHJvdG90eXBlLnNob3dTZWFyY2ggPSBmdW5jdGlvbihfLCBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFNlYXJjaDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL2hpZGVQbGFjZWhvbGRlcicsIFtcclxuXHJcbiAgICAgICAgXSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEhpZGVQbGFjZWhvbGRlcihkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMubm9ybWFsaXplUGxhY2Vob2xkZXIob3B0aW9ucy5nZXQoJ3BsYWNlaG9sZGVyJykpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEhpZGVQbGFjZWhvbGRlci5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24oZGVjb3JhdGVkLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnJlc3VsdHMgPSB0aGlzLnJlbW92ZVBsYWNlaG9sZGVyKGRhdGEucmVzdWx0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVjb3JhdGVkLmNhbGwodGhpcywgZGF0YSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBIaWRlUGxhY2Vob2xkZXIucHJvdG90eXBlLm5vcm1hbGl6ZVBsYWNlaG9sZGVyID0gZnVuY3Rpb24oXywgcGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGxhY2Vob2xkZXIgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBwbGFjZWhvbGRlcjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEhpZGVQbGFjZWhvbGRlci5wcm90b3R5cGUucmVtb3ZlUGxhY2Vob2xkZXIgPSBmdW5jdGlvbihfLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9kaWZpZWREYXRhID0gZGF0YS5zbGljZSgwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBkID0gZGF0YS5sZW5ndGggLSAxOyBkID49IDA7IGQtLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gZGF0YVtkXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxhY2Vob2xkZXIuaWQgPT09IGl0ZW0uaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWREYXRhLnNwbGljZShkLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmaWVkRGF0YTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBIaWRlUGxhY2Vob2xkZXI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9pbmZpbml0ZVNjcm9sbCcsIFtcclxuICAgICAgICAgICAgJ2pxdWVyeSdcclxuICAgICAgICBdLCBmdW5jdGlvbigkKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEluZmluaXRlU2Nyb2xsKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQYXJhbXMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJGxvYWRpbmdNb3JlID0gdGhpcy5jcmVhdGVMb2FkaW5nTW9yZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihkZWNvcmF0ZWQsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGxvYWRpbmdNb3JlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVjb3JhdGVkLmNhbGwodGhpcywgZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0xvYWRpbmdNb3JlKGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVzdWx0cy5hcHBlbmQodGhpcy4kbG9hZGluZ01vcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE1vcmVJZk5lZWRlZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgSW5maW5pdGVTY3JvbGwucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbihkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCdxdWVyeScsIGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGFzdFBhcmFtcyA9IHBhcmFtcztcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCdxdWVyeTphcHBlbmQnLCBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmxhc3RQYXJhbXMgPSBwYXJhbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHJlc3VsdHMub24oJ3Njcm9sbCcsIHRoaXMubG9hZE1vcmVJZk5lZWRlZC5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5sb2FkTW9yZUlmTmVlZGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNMb2FkTW9yZVZpc2libGUgPSAkLmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRsb2FkaW5nTW9yZVswXVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2FkaW5nIHx8ICFpc0xvYWRNb3JlVmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudE9mZnNldCA9IHRoaXMuJHJlc3VsdHMub2Zmc2V0KCkudG9wICtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZXN1bHRzLm91dGVySGVpZ2h0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHZhciBsb2FkaW5nTW9yZU9mZnNldCA9IHRoaXMuJGxvYWRpbmdNb3JlLm9mZnNldCgpLnRvcCArXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbG9hZGluZ01vcmUub3V0ZXJIZWlnaHQoZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50T2Zmc2V0ICsgNTAgPj0gbG9hZGluZ01vcmVPZmZzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRNb3JlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUubG9hZE1vcmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9ICQuZXh0ZW5kKHt9LCB7IHBhZ2U6IDEgfSwgdGhpcy5sYXN0UGFyYW1zKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMucGFnZSsrO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcigncXVlcnk6YXBwZW5kJywgcGFyYW1zKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5zaG93TG9hZGluZ01vcmUgPSBmdW5jdGlvbihfLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5wYWdpbmF0aW9uICYmIGRhdGEucGFnaW5hdGlvbi5tb3JlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgSW5maW5pdGVTY3JvbGwucHJvdG90eXBlLmNyZWF0ZUxvYWRpbmdNb3JlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJG9wdGlvbiA9ICQoXHJcbiAgICAgICAgICAgICAgICAgICAgJzxsaSAnICtcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3M9XCJzZWxlY3QyLXJlc3VsdHNfX29wdGlvbiBzZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0tbG9hZC1tb3JlXCInICtcclxuICAgICAgICAgICAgICAgICAgICAncm9sZT1cIm9wdGlvblwiIGFyaWEtZGlzYWJsZWQ9XCJ0cnVlXCI+PC9saT4nXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gdGhpcy5vcHRpb25zLmdldCgndHJhbnNsYXRpb25zJykuZ2V0KCdsb2FkaW5nTW9yZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICRvcHRpb24uaHRtbChtZXNzYWdlKHRoaXMubGFzdFBhcmFtcykpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAkb3B0aW9uO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIEluZmluaXRlU2Nyb2xsO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vYXR0YWNoQm9keScsIFtcclxuICAgICAgICAgICAgJ2pxdWVyeScsXHJcbiAgICAgICAgICAgICcuLi91dGlscydcclxuICAgICAgICBdLCBmdW5jdGlvbigkLCBVdGlscykge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBBdHRhY2hCb2R5KGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGRyb3Bkb3duUGFyZW50ID0gJChvcHRpb25zLmdldCgnZHJvcGRvd25QYXJlbnQnKSB8fCBkb2N1bWVudC5ib2R5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEF0dGFjaEJvZHkucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbihkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCdvcGVuJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fc2hvd0Ryb3Bkb3duKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fYXR0YWNoUG9zaXRpb25pbmdIYW5kbGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE11c3QgYmluZCBhZnRlciB0aGUgcmVzdWx0cyBoYW5kbGVycyB0byBlbnN1cmUgY29ycmVjdCBzaXppbmdcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9iaW5kQ29udGFpbmVyUmVzdWx0SGFuZGxlcnMoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5vbignY2xvc2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9oaWRlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9kZXRhY2hQb3NpdGlvbmluZ0hhbmRsZXIoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEF0dGFjaEJvZHkucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihkZWNvcmF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgQXR0YWNoQm9keS5wcm90b3R5cGUucG9zaXRpb24gPSBmdW5jdGlvbihkZWNvcmF0ZWQsICRkcm9wZG93biwgJGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgYWxsIG9mIHRoZSBjb250YWluZXIgY2xhc3Nlc1xyXG4gICAgICAgICAgICAgICAgJGRyb3Bkb3duLmF0dHIoJ2NsYXNzJywgJGNvbnRhaW5lci5hdHRyKCdjbGFzcycpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkZHJvcGRvd25bMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0MicpO1xyXG4gICAgICAgICAgICAgICAgJGRyb3Bkb3duWzBdLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGRyb3Bkb3duLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtOTk5OTk5XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjb250YWluZXIgPSAkY29udGFpbmVyO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgQXR0YWNoQm9keS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oZGVjb3JhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGNvbnRhaW5lciA9ICQoJzxzcGFuPjwvc3Bhbj4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgJGRyb3Bkb3duID0gZGVjb3JhdGVkLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFwcGVuZCgkZHJvcGRvd24pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyID0gJGNvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEF0dGFjaEJvZHkucHJvdG90eXBlLl9oaWRlRHJvcGRvd24gPSBmdW5jdGlvbihkZWNvcmF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLmRldGFjaCgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgQXR0YWNoQm9keS5wcm90b3R5cGUuX2JpbmRDb250YWluZXJSZXN1bHRIYW5kbGVycyA9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihkZWNvcmF0ZWQsIGNvbnRhaW5lcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGVzZSBzaG91bGQgb25seSBiZSBib3VuZCBvbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lclJlc3VsdHNIYW5kbGVyc0JvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFsbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9wb3NpdGlvbkRyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3Jlc2l6ZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5vbigncmVzdWx0czphcHBlbmQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fcG9zaXRpb25Ecm9wZG93bigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9yZXNpemVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6bWVzc2FnZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9wb3NpdGlvbkRyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3Jlc2l6ZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5vbignc2VsZWN0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3Bvc2l0aW9uRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCd1bnNlbGVjdCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9wb3NpdGlvbkRyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3Jlc2l6ZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lclJlc3VsdHNIYW5kbGVyc0JvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fYXR0YWNoUG9zaXRpb25pbmdIYW5kbGVyID1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGRlY29yYXRlZCwgY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsRXZlbnQgPSAnc2Nyb2xsLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzaXplRXZlbnQgPSAncmVzaXplLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZW50YXRpb25FdmVudCA9ICdvcmllbnRhdGlvbmNoYW5nZS5zZWxlY3QyLicgKyBjb250YWluZXIuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkd2F0Y2hlcnMgPSB0aGlzLiRjb250YWluZXIucGFyZW50cygpLmZpbHRlcihVdGlscy5oYXNTY3JvbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICR3YXRjaGVycy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5TdG9yZURhdGEodGhpcywgJ3NlbGVjdDItc2Nyb2xsLXBvc2l0aW9uJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogJCh0aGlzKS5zY3JvbGxMZWZ0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAkKHRoaXMpLnNjcm9sbFRvcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkd2F0Y2hlcnMub24oc2Nyb2xsRXZlbnQsIGZ1bmN0aW9uKGV2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IFV0aWxzLkdldERhdGEodGhpcywgJ3NlbGVjdDItc2Nyb2xsLXBvc2l0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuc2Nyb2xsVG9wKHBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykub24oc2Nyb2xsRXZlbnQgKyAnICcgKyByZXNpemVFdmVudCArICcgJyArIG9yaWVudGF0aW9uRXZlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3Bvc2l0aW9uRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3Jlc2l6ZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEF0dGFjaEJvZHkucHJvdG90eXBlLl9kZXRhY2hQb3NpdGlvbmluZ0hhbmRsZXIgPVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oZGVjb3JhdGVkLCBjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsRXZlbnQgPSAnc2Nyb2xsLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzaXplRXZlbnQgPSAncmVzaXplLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZW50YXRpb25FdmVudCA9ICdvcmllbnRhdGlvbmNoYW5nZS5zZWxlY3QyLicgKyBjb250YWluZXIuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkd2F0Y2hlcnMgPSB0aGlzLiRjb250YWluZXIucGFyZW50cygpLmZpbHRlcihVdGlscy5oYXNTY3JvbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICR3YXRjaGVycy5vZmYoc2Nyb2xsRXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykub2ZmKHNjcm9sbEV2ZW50ICsgJyAnICsgcmVzaXplRXZlbnQgKyAnICcgKyBvcmllbnRhdGlvbkV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fcG9zaXRpb25Ecm9wZG93biA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGlzQ3VycmVudGx5QWJvdmUgPSB0aGlzLiRkcm9wZG93blswXS5jbGFzc0xpc3RcclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbnMoJ3NlbGVjdDItZHJvcGRvd24tLWFib3ZlJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNDdXJyZW50bHlCZWxvdyA9IHRoaXMuJGRyb3Bkb3duWzBdLmNsYXNzTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWlucygnc2VsZWN0Mi1kcm9wZG93bi0tYmVsb3cnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3RGlyZWN0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy4kY29udGFpbmVyLm9mZnNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIG9mZnNldC5ib3R0b20gPSBvZmZzZXQudG9wICsgdGhpcy4kY29udGFpbmVyLm91dGVySGVpZ2h0KGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy4kY29udGFpbmVyLm91dGVySGVpZ2h0KGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIudG9wID0gb2Zmc2V0LnRvcDtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5ib3R0b20gPSBvZmZzZXQudG9wICsgY29udGFpbmVyLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZHJvcGRvd24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLiRkcm9wZG93bi5vdXRlckhlaWdodChmYWxzZSlcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHZpZXdwb3J0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogJHdpbmRvdy5zY3JvbGxUb3AoKSxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206ICR3aW5kb3cuc2Nyb2xsVG9wKCkgKyAkd2luZG93LmhlaWdodCgpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBlbm91Z2hSb29tQWJvdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHZhciBlbm91Z2hSb29tQmVsb3cgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjc3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogb2Zmc2V0LmxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBjb250YWluZXIuYm90dG9tXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERldGVybWluZSB3aGF0IHRoZSBwYXJlbnQgZWxlbWVudCBpcyB0byB1c2UgZm9yIGNhbGN1bGF0aW5nIHRoZSBvZmZzZXRcclxuICAgICAgICAgICAgICAgIHZhciAkb2Zmc2V0UGFyZW50ID0gdGhpcy4kZHJvcGRvd25QYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRm9yIHN0YXRpY2FsbHkgcG9zaXRpb25lZCBlbGVtZW50cywgd2UgbmVlZCB0byBnZXQgdGhlIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC8vIHRoYXQgaXMgZGV0ZXJtaW5pbmcgdGhlIG9mZnNldFxyXG4gICAgICAgICAgICAgICAgaWYgKCRvZmZzZXRQYXJlbnQuY3NzKCdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xyXG4gICAgICAgICAgICAgICAgICAgICRvZmZzZXRQYXJlbnQgPSAkb2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRPZmZzZXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICQuY29udGFpbnMoZG9jdW1lbnQuYm9keSwgJG9mZnNldFBhcmVudFswXSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAkb2Zmc2V0UGFyZW50WzBdLmlzQ29ubmVjdGVkXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRPZmZzZXQgPSAkb2Zmc2V0UGFyZW50Lm9mZnNldCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNzcy50b3AgLT0gcGFyZW50T2Zmc2V0LnRvcDtcclxuICAgICAgICAgICAgICAgIGNzcy5sZWZ0IC09IHBhcmVudE9mZnNldC5sZWZ0O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaXNDdXJyZW50bHlBYm92ZSAmJiAhaXNDdXJyZW50bHlCZWxvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0RpcmVjdGlvbiA9ICdiZWxvdyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFlbm91Z2hSb29tQmVsb3cgJiYgZW5vdWdoUm9vbUFib3ZlICYmICFpc0N1cnJlbnRseUFib3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGlyZWN0aW9uID0gJ2Fib3ZlJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWVub3VnaFJvb21BYm92ZSAmJiBlbm91Z2hSb29tQmVsb3cgJiYgaXNDdXJyZW50bHlBYm92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0RpcmVjdGlvbiA9ICdiZWxvdyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5ld0RpcmVjdGlvbiA9PSAnYWJvdmUnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKGlzQ3VycmVudGx5QWJvdmUgJiYgbmV3RGlyZWN0aW9uICE9PSAnYmVsb3cnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNzcy50b3AgPSBjb250YWluZXIudG9wIC0gcGFyZW50T2Zmc2V0LnRvcCAtIGRyb3Bkb3duLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobmV3RGlyZWN0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRkcm9wZG93blswXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QyLWRyb3Bkb3duLS1iZWxvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGRyb3Bkb3duWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdDItZHJvcGRvd24tLWFib3ZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZHJvcGRvd25bMF0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0Mi1kcm9wZG93bi0tJyArIG5ld0RpcmVjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNvbnRhaW5lclswXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QyLWNvbnRhaW5lci0tYmVsb3cnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjb250YWluZXJbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0Mi1jb250YWluZXItLWFib3ZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY29udGFpbmVyWzBdLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdDItY29udGFpbmVyLS0nICsgbmV3RGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkcm9wZG93bkNvbnRhaW5lci5jc3MoY3NzKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEF0dGFjaEJvZHkucHJvdG90eXBlLl9yZXNpemVEcm9wZG93biA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNzcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy4kY29udGFpbmVyLm91dGVyV2lkdGgoZmFsc2UpICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnZHJvcGRvd25BdXRvV2lkdGgnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNzcy5taW5XaWR0aCA9IGNzcy53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBjc3MucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNzcy53aWR0aCA9ICdhdXRvJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRkcm9wZG93bi5jc3MoY3NzKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEF0dGFjaEJvZHkucHJvdG90eXBlLl9zaG93RHJvcGRvd24gPSBmdW5jdGlvbihkZWNvcmF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLmFwcGVuZFRvKHRoaXMuJGRyb3Bkb3duUGFyZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3NpdGlvbkRyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIEF0dGFjaEJvZHk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCcsIFtcclxuXHJcbiAgICAgICAgXSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvdW50UmVzdWx0cyhkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY291bnQgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGF0YS5sZW5ndGg7IGQrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gZGF0YVtkXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQgKz0gY291bnRSZXN1bHRzKGl0ZW0uY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3VudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gTWluaW11bVJlc3VsdHNGb3JTZWFyY2goZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWluaW11bVJlc3VsdHNGb3JTZWFyY2ggPSBvcHRpb25zLmdldCgnbWluaW11bVJlc3VsdHNGb3JTZWFyY2gnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoID0gSW5maW5pdHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTWluaW11bVJlc3VsdHNGb3JTZWFyY2gucHJvdG90eXBlLnNob3dTZWFyY2ggPSBmdW5jdGlvbihkZWNvcmF0ZWQsIHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50UmVzdWx0cyhwYXJhbXMuZGF0YS5yZXN1bHRzKSA8IHRoaXMubWluaW11bVJlc3VsdHNGb3JTZWFyY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gTWluaW11bVJlc3VsdHNGb3JTZWFyY2g7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9zZWxlY3RPbkNsb3NlJywgW1xyXG4gICAgICAgICAgICAnLi4vdXRpbHMnXHJcbiAgICAgICAgXSwgZnVuY3Rpb24oVXRpbHMpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gU2VsZWN0T25DbG9zZSgpIHt9XHJcblxyXG4gICAgICAgICAgICBTZWxlY3RPbkNsb3NlLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24oZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5vbignY2xvc2UnLCBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9oYW5kbGVTZWxlY3RPbkNsb3NlKHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFNlbGVjdE9uQ2xvc2UucHJvdG90eXBlLl9oYW5kbGVTZWxlY3RPbkNsb3NlID0gZnVuY3Rpb24oXywgcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5vcmlnaW5hbFNlbGVjdDJFdmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gcGFyYW1zLm9yaWdpbmFsU2VsZWN0MkV2ZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBzZWxlY3QgYW4gaXRlbSBpZiB0aGUgY2xvc2UgZXZlbnQgd2FzIHRyaWdnZXJlZCBmcm9tIGEgc2VsZWN0IG9yXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5zZWxlY3QgZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuX3R5cGUgPT09ICdzZWxlY3QnIHx8IGV2ZW50Ll90eXBlID09PSAndW5zZWxlY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyICRoaWdobGlnaHRlZFJlc3VsdHMgPSB0aGlzLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE9ubHkgc2VsZWN0IGhpZ2hsaWdodGVkIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgIGlmICgkaGlnaGxpZ2h0ZWRSZXN1bHRzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKCRoaWdobGlnaHRlZFJlc3VsdHNbMF0sICdkYXRhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcmUtc2VsZWN0IGFscmVhZHkgc2VsZWN0ZWQgcmVzdWx0ZVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIChkYXRhLmVsZW1lbnQgIT0gbnVsbCAmJiBkYXRhLmVsZW1lbnQuc2VsZWN0ZWQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKGRhdGEuZWxlbWVudCA9PSBudWxsICYmIGRhdGEuc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdzZWxlY3QnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gU2VsZWN0T25DbG9zZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL2Nsb3NlT25TZWxlY3QnLCBbXHJcblxyXG4gICAgICAgIF0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBDbG9zZU9uU2VsZWN0KCkge31cclxuXHJcbiAgICAgICAgICAgIENsb3NlT25TZWxlY3QucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbihkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLm9uKCdzZWxlY3QnLCBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9zZWxlY3RUcmlnZ2VyZWQoZXZ0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5vbigndW5zZWxlY3QnLCBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9zZWxlY3RUcmlnZ2VyZWQoZXZ0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgQ2xvc2VPblNlbGVjdC5wcm90b3R5cGUuX3NlbGVjdFRyaWdnZXJlZCA9IGZ1bmN0aW9uKF8sIGV2dCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsRXZlbnQgPSBldnQub3JpZ2luYWxFdmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBjbG9zZSBpZiB0aGUgY29udHJvbCBrZXkgaXMgYmVpbmcgaGVsZFxyXG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsRXZlbnQgJiYgKG9yaWdpbmFsRXZlbnQuY3RybEtleSB8fCBvcmlnaW5hbEV2ZW50Lm1ldGFLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignY2xvc2UnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogb3JpZ2luYWxFdmVudCxcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFNlbGVjdDJFdmVudDogZXZ0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBDbG9zZU9uU2VsZWN0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vZHJvcGRvd25Dc3MnLCBbXHJcbiAgICAgICAgICAgICcuLi91dGlscydcclxuICAgICAgICBdLCBmdW5jdGlvbihVdGlscykge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBEcm9wZG93bkNTUygpIHt9XHJcblxyXG4gICAgICAgICAgICBEcm9wZG93bkNTUy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oZGVjb3JhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGRyb3Bkb3duID0gZGVjb3JhdGVkLmNhbGwodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRyb3Bkb3duQ3NzQ2xhc3MgPSB0aGlzLm9wdGlvbnMuZ2V0KCdkcm9wZG93bkNzc0NsYXNzJykgfHwgJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duQ3NzQ2xhc3MuaW5kZXhPZignOmFsbDonKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNzc0NsYXNzID0gZHJvcGRvd25Dc3NDbGFzcy5yZXBsYWNlKCc6YWxsOicsICcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMuY29weU5vbkludGVybmFsQ3NzQ2xhc3NlcygkZHJvcGRvd25bMF0sIHRoaXMuJGVsZW1lbnRbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRkcm9wZG93bi5hZGRDbGFzcyhkcm9wZG93bkNzc0NsYXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJGRyb3Bkb3duO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIERyb3Bkb3duQ1NTO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTMi5kZWZpbmUoJ3NlbGVjdDIvaTE4bi9lbicsIFtdLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gRW5nbGlzaFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JMb2FkaW5nOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1RoZSByZXN1bHRzIGNvdWxkIG5vdCBiZSBsb2FkZWQuJztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbnB1dFRvb0xvbmc6IGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3ZlckNoYXJzID0gYXJncy5pbnB1dC5sZW5ndGggLSBhcmdzLm1heGltdW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gJ1BsZWFzZSBkZWxldGUgJyArIG92ZXJDaGFycyArICcgY2hhcmFjdGVyJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJDaGFycyAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gJ3MnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUb29TaG9ydDogZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZW1haW5pbmdDaGFycyA9IGFyZ3MubWluaW11bSAtIGFyZ3MuaW5wdXQubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9ICdQbGVhc2UgZW50ZXIgJyArIHJlbWFpbmluZ0NoYXJzICsgJyBvciBtb3JlIGNoYXJhY3RlcnMnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nTW9yZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdMb2FkaW5nIG1vcmUgcmVzdWx0c+KApic7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWF4aW11bVNlbGVjdGVkOiBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAnWW91IGNhbiBvbmx5IHNlbGVjdCAnICsgYXJncy5tYXhpbXVtICsgJyBpdGVtJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubWF4aW11bSAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gJ3MnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbm9SZXN1bHRzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ05vIHJlc3VsdHMgZm91bmQnO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNlYXJjaGluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdTZWFyY2hpbmfigKYnO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZUFsbEl0ZW1zOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1JlbW92ZSBhbGwgaXRlbXMnO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW06IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnUmVtb3ZlIGl0ZW0nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTMi5kZWZpbmUoJ3NlbGVjdDIvZGVmYXVsdHMnLCBbXHJcbiAgICAgICAgICAgICdqcXVlcnknLFxyXG5cclxuICAgICAgICAgICAgJy4vcmVzdWx0cycsXHJcblxyXG4gICAgICAgICAgICAnLi9zZWxlY3Rpb24vc2luZ2xlJyxcclxuICAgICAgICAgICAgJy4vc2VsZWN0aW9uL211bHRpcGxlJyxcclxuICAgICAgICAgICAgJy4vc2VsZWN0aW9uL3BsYWNlaG9sZGVyJyxcclxuICAgICAgICAgICAgJy4vc2VsZWN0aW9uL2FsbG93Q2xlYXInLFxyXG4gICAgICAgICAgICAnLi9zZWxlY3Rpb24vc2VhcmNoJyxcclxuICAgICAgICAgICAgJy4vc2VsZWN0aW9uL3NlbGVjdGlvbkNzcycsXHJcbiAgICAgICAgICAgICcuL3NlbGVjdGlvbi9ldmVudFJlbGF5JyxcclxuXHJcbiAgICAgICAgICAgICcuL3V0aWxzJyxcclxuICAgICAgICAgICAgJy4vdHJhbnNsYXRpb24nLFxyXG4gICAgICAgICAgICAnLi9kaWFjcml0aWNzJyxcclxuXHJcbiAgICAgICAgICAgICcuL2RhdGEvc2VsZWN0JyxcclxuICAgICAgICAgICAgJy4vZGF0YS9hcnJheScsXHJcbiAgICAgICAgICAgICcuL2RhdGEvYWpheCcsXHJcbiAgICAgICAgICAgICcuL2RhdGEvdGFncycsXHJcbiAgICAgICAgICAgICcuL2RhdGEvdG9rZW5pemVyJyxcclxuICAgICAgICAgICAgJy4vZGF0YS9taW5pbXVtSW5wdXRMZW5ndGgnLFxyXG4gICAgICAgICAgICAnLi9kYXRhL21heGltdW1JbnB1dExlbmd0aCcsXHJcbiAgICAgICAgICAgICcuL2RhdGEvbWF4aW11bVNlbGVjdGlvbkxlbmd0aCcsXHJcblxyXG4gICAgICAgICAgICAnLi9kcm9wZG93bicsXHJcbiAgICAgICAgICAgICcuL2Ryb3Bkb3duL3NlYXJjaCcsXHJcbiAgICAgICAgICAgICcuL2Ryb3Bkb3duL2hpZGVQbGFjZWhvbGRlcicsXHJcbiAgICAgICAgICAgICcuL2Ryb3Bkb3duL2luZmluaXRlU2Nyb2xsJyxcclxuICAgICAgICAgICAgJy4vZHJvcGRvd24vYXR0YWNoQm9keScsXHJcbiAgICAgICAgICAgICcuL2Ryb3Bkb3duL21pbmltdW1SZXN1bHRzRm9yU2VhcmNoJyxcclxuICAgICAgICAgICAgJy4vZHJvcGRvd24vc2VsZWN0T25DbG9zZScsXHJcbiAgICAgICAgICAgICcuL2Ryb3Bkb3duL2Nsb3NlT25TZWxlY3QnLFxyXG4gICAgICAgICAgICAnLi9kcm9wZG93bi9kcm9wZG93bkNzcycsXHJcblxyXG4gICAgICAgICAgICAnLi9pMThuL2VuJ1xyXG4gICAgICAgIF0sIGZ1bmN0aW9uKCQsXHJcblxyXG4gICAgICAgICAgICBSZXN1bHRzTGlzdCxcclxuXHJcbiAgICAgICAgICAgIFNpbmdsZVNlbGVjdGlvbiwgTXVsdGlwbGVTZWxlY3Rpb24sIFBsYWNlaG9sZGVyLCBBbGxvd0NsZWFyLFxyXG4gICAgICAgICAgICBTZWxlY3Rpb25TZWFyY2gsIFNlbGVjdGlvbkNTUywgRXZlbnRSZWxheSxcclxuXHJcbiAgICAgICAgICAgIFV0aWxzLCBUcmFuc2xhdGlvbiwgRElBQ1JJVElDUyxcclxuXHJcbiAgICAgICAgICAgIFNlbGVjdERhdGEsIEFycmF5RGF0YSwgQWpheERhdGEsIFRhZ3MsIFRva2VuaXplcixcclxuICAgICAgICAgICAgTWluaW11bUlucHV0TGVuZ3RoLCBNYXhpbXVtSW5wdXRMZW5ndGgsIE1heGltdW1TZWxlY3Rpb25MZW5ndGgsXHJcblxyXG4gICAgICAgICAgICBEcm9wZG93biwgRHJvcGRvd25TZWFyY2gsIEhpZGVQbGFjZWhvbGRlciwgSW5maW5pdGVTY3JvbGwsXHJcbiAgICAgICAgICAgIEF0dGFjaEJvZHksIE1pbmltdW1SZXN1bHRzRm9yU2VhcmNoLCBTZWxlY3RPbkNsb3NlLCBDbG9zZU9uU2VsZWN0LFxyXG4gICAgICAgICAgICBEcm9wZG93bkNTUyxcclxuXHJcbiAgICAgICAgICAgIEVuZ2xpc2hUcmFuc2xhdGlvbikge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBEZWZhdWx0cygpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgRGVmYXVsdHMucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kYXRhQWRhcHRlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYWpheCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBBamF4RGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBBcnJheURhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFNlbGVjdERhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNaW5pbXVtSW5wdXRMZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm1heGltdW1JbnB1dExlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1heGltdW1JbnB1dExlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubWF4aW11bVNlbGVjdGlvbkxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1heGltdW1TZWxlY3Rpb25MZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnRhZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKG9wdGlvbnMuZGF0YUFkYXB0ZXIsIFRhZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9rZW5TZXBhcmF0b3JzICE9IG51bGwgfHwgb3B0aW9ucy50b2tlbml6ZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9rZW5pemVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnJlc3VsdHNBZGFwdGVyID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyID0gUmVzdWx0c0xpc3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmFqYXggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5maW5pdGVTY3JvbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnBsYWNlaG9sZGVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5yZXN1bHRzQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5yZXN1bHRzQWRhcHRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpZGVQbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2VsZWN0T25DbG9zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0T25DbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gRHJvcGRvd247XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFNlYXJjaGFibGVEcm9wZG93biA9IFV0aWxzLkRlY29yYXRlKERyb3Bkb3duLCBEcm9wZG93blNlYXJjaCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9IFNlYXJjaGFibGVEcm9wZG93bjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pbmltdW1SZXN1bHRzRm9yU2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jbG9zZU9uU2VsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlT25TZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRyb3Bkb3duQ3NzQ2xhc3MgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wZG93bkNTU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF0dGFjaEJvZHlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IE11bHRpcGxlU2VsZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFNpbmdsZVNlbGVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgcGxhY2Vob2xkZXIgbWl4aW4gaWYgYSBwbGFjZWhvbGRlciB3YXMgc3BlY2lmaWVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucGxhY2Vob2xkZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5hbGxvd0NsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxsb3dDbGVhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3Rpb25TZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnNlbGVjdGlvbkNzc0NsYXNzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3Rpb25DU1NcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50UmVsYXlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBkZWZhdWx0cyB3ZXJlIG5vdCBwcmV2aW91c2x5IGFwcGxpZWQgZnJvbSBhbiBlbGVtZW50LCBpdCBpc1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zc2libGUgZm9yIHRoZSBsYW5ndWFnZSBvcHRpb24gdG8gaGF2ZSBub3QgYmVlbiByZXNvbHZlZFxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sYW5ndWFnZSA9IHRoaXMuX3Jlc29sdmVMYW5ndWFnZShvcHRpb25zLmxhbmd1YWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBbHdheXMgZmFsbCBiYWNrIHRvIEVuZ2xpc2ggc2luY2UgaXQgd2lsbCBhbHdheXMgYmUgY29tcGxldGVcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMubGFuZ3VhZ2UucHVzaCgnZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdW5pcXVlTGFuZ3VhZ2VzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBvcHRpb25zLmxhbmd1YWdlLmxlbmd0aDsgbCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhbmd1YWdlID0gb3B0aW9ucy5sYW5ndWFnZVtsXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVuaXF1ZUxhbmd1YWdlcy5pbmRleE9mKGxhbmd1YWdlKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlTGFuZ3VhZ2VzLnB1c2gobGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxhbmd1YWdlID0gdW5pcXVlTGFuZ3VhZ2VzO1xyXG5cclxuICAgICAgICAgICAgICAgIG9wdGlvbnMudHJhbnNsYXRpb25zID0gdGhpcy5fcHJvY2Vzc1RyYW5zbGF0aW9ucyhcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZGVidWdcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBEZWZhdWx0cy5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN0cmlwRGlhY3JpdGljcyh0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlZCAndW5pIHJhbmdlICsgbmFtZWQgZnVuY3Rpb24nIGZyb20gaHR0cDovL2pzcGVyZi5jb20vZGlhY3JpdGljcy8xOFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1hdGNoKGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERJQUNSSVRJQ1NbYV0gfHwgYTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1teXFx1MDAwMC1cXHUwMDdFXS9nLCBtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbWF0Y2hlcihwYXJhbXMsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBbHdheXMgcmV0dXJuIHRoZSBvYmplY3QgaWYgdGhlcmUgaXMgbm90aGluZyB0byBjb21wYXJlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy50ZXJtID09IG51bGwgfHwgcGFyYW1zLnRlcm0udHJpbSgpID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIERvIGEgcmVjdXJzaXZlIGNoZWNrIGZvciBvcHRpb25zIHdpdGggY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5jaGlsZHJlbiAmJiBkYXRhLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xvbmUgdGhlIGRhdGEgb2JqZWN0IGlmIHRoZXJlIGFyZSBjaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHJlcXVpcmVkIGFzIHdlIG1vZGlmeSB0aGUgb2JqZWN0IHRvIHJlbW92ZSBhbnkgbm9uLW1hdGNoZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gJC5leHRlbmQodHJ1ZSwge30sIGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgZWFjaCBjaGlsZCBvZiB0aGUgb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGMgPSBkYXRhLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGMgPj0gMDsgYy0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBkYXRhLmNoaWxkcmVuW2NdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzID0gbWF0Y2hlcihwYXJhbXMsIGNoaWxkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSB3YXNuJ3QgYSBtYXRjaCwgcmVtb3ZlIHRoZSBvYmplY3QgaW4gdGhlIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2guY2hpbGRyZW4uc3BsaWNlKGMsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBhbnkgY2hpbGRyZW4gbWF0Y2hlZCwgcmV0dXJuIHRoZSBuZXcgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIHdlcmUgbm8gbWF0Y2hpbmcgY2hpbGRyZW4sIGNoZWNrIGp1c3QgdGhlIHBsYWluIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlcihwYXJhbXMsIG1hdGNoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbCA9IHN0cmlwRGlhY3JpdGljcyhkYXRhLnRleHQpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlcm0gPSBzdHJpcERpYWNyaXRpY3MocGFyYW1zLnRlcm0pLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSB0ZXh0IGNvbnRhaW5zIHRoZSB0ZXJtXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsLmluZGV4T2YodGVybSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGl0IGRvZXNuJ3QgY29udGFpbiB0aGUgdGVybSwgZG9uJ3QgcmV0dXJuIGFueXRoaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0cyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhbWRMYW5ndWFnZUJhc2U6ICcuL2kxOG4vJyxcclxuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6ICdvZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT25TZWxlY3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVidWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQXV0b1dpZHRoOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlc2NhcGVNYXJrdXA6IFV0aWxzLmVzY2FwZU1hcmt1cCxcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcjogbWF0Y2hlcixcclxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtSW5wdXRMZW5ndGg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bUlucHV0TGVuZ3RoOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW1TZWxlY3Rpb25MZW5ndGg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0T25DbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsQWZ0ZXJTZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlcjogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlUmVzdWx0OiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC50ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVTZWxlY3Rpb246IGZ1bmN0aW9uKHNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0aW9uLnRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZTogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAncmVzb2x2ZSdcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBEZWZhdWx0cy5wcm90b3R5cGUuYXBwbHlGcm9tRWxlbWVudCA9IGZ1bmN0aW9uKG9wdGlvbnMsICRlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uTGFuZ3VhZ2UgPSBvcHRpb25zLmxhbmd1YWdlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRMYW5ndWFnZSA9IHRoaXMuZGVmYXVsdHMubGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudExhbmd1YWdlID0gJGVsZW1lbnQucHJvcCgnbGFuZycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudExhbmd1YWdlID0gJGVsZW1lbnQuY2xvc2VzdCgnW2xhbmddJykucHJvcCgnbGFuZycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBsYW5ndWFnZXMgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0LmNhbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZUxhbmd1YWdlKGVsZW1lbnRMYW5ndWFnZSksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZUxhbmd1YWdlKG9wdGlvbkxhbmd1YWdlKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXNvbHZlTGFuZ3VhZ2UoZGVmYXVsdExhbmd1YWdlKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXNvbHZlTGFuZ3VhZ2UocGFyZW50TGFuZ3VhZ2UpXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIG9wdGlvbnMubGFuZ3VhZ2UgPSBsYW5ndWFnZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBEZWZhdWx0cy5wcm90b3R5cGUuX3Jlc29sdmVMYW5ndWFnZSA9IGZ1bmN0aW9uKGxhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkLmlzRW1wdHlPYmplY3QobGFuZ3VhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkLmlzUGxhaW5PYmplY3QobGFuZ3VhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtsYW5ndWFnZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGxhbmd1YWdlcztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobGFuZ3VhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VzID0gW2xhbmd1YWdlXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VzID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc29sdmVkTGFuZ3VhZ2VzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBsYW5ndWFnZXMubGVuZ3RoOyBsKyspIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlZExhbmd1YWdlcy5wdXNoKGxhbmd1YWdlc1tsXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2VzW2xdID09PSAnc3RyaW5nJyAmJiBsYW5ndWFnZXNbbF0uaW5kZXhPZignLScpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IHRoZSByZWdpb24gaW5mb3JtYXRpb24gaWYgaXQgaXMgaW5jbHVkZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhbmd1YWdlUGFydHMgPSBsYW5ndWFnZXNbbF0uc3BsaXQoJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJhc2VMYW5ndWFnZSA9IGxhbmd1YWdlUGFydHNbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZExhbmd1YWdlcy5wdXNoKGJhc2VMYW5ndWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlZExhbmd1YWdlcztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIERlZmF1bHRzLnByb3RvdHlwZS5fcHJvY2Vzc1RyYW5zbGF0aW9ucyA9IGZ1bmN0aW9uKGxhbmd1YWdlcywgZGVidWcpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbnMgPSBuZXcgVHJhbnNsYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBsID0gMDsgbCA8IGxhbmd1YWdlcy5sZW5ndGg7IGwrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYW5ndWFnZURhdGEgPSBuZXcgVHJhbnNsYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhbmd1YWdlID0gbGFuZ3VhZ2VzW2xdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxhbmd1YWdlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJ5IHRvIGxvYWQgaXQgd2l0aCB0aGUgb3JpZ2luYWwgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VEYXRhID0gVHJhbnNsYXRpb24ubG9hZFBhdGgobGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGNvdWxkbid0IGxvYWQgaXQsIGNoZWNrIGlmIGl0IHdhc24ndCB0aGUgZnVsbCBwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLmRlZmF1bHRzLmFtZExhbmd1YWdlQmFzZSArIGxhbmd1YWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlRGF0YSA9IFRyYW5zbGF0aW9uLmxvYWRQYXRoKGxhbmd1YWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHRyYW5zbGF0aW9uIGNvdWxkIG5vdCBiZSBsb2FkZWQgYXQgYWxsLiBTb21ldGltZXMgdGhpcyBpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJlY2F1c2Ugb2YgYSBjb25maWd1cmF0aW9uIHByb2JsZW0sIG90aGVyIHRpbWVzIHRoaXMgY2FuIGJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmVjYXVzZSBvZiBob3cgU2VsZWN0MiBoZWxwcyBsb2FkIGFsbCBwb3NzaWJsZSB0cmFuc2xhdGlvbiBmaWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1ZyAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NlbGVjdDI6IFRoZSBsYW5ndWFnZSBmaWxlIGZvciBcIicgKyBsYW5ndWFnZSArICdcIiBjb3VsZCAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub3QgYmUgYXV0b21hdGljYWxseSBsb2FkZWQuIEEgZmFsbGJhY2sgd2lsbCBiZSB1c2VkIGluc3RlYWQuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoJC5pc1BsYWluT2JqZWN0KGxhbmd1YWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZURhdGEgPSBuZXcgVHJhbnNsYXRpb24obGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlRGF0YSA9IGxhbmd1YWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zLmV4dGVuZChsYW5ndWFnZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvbnM7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBEZWZhdWx0cy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhbWVsS2V5ID0gJC5jYW1lbENhc2Uoa2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZGF0YVtjYW1lbEtleV0gPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY29udmVydGVkRGF0YSA9IFV0aWxzLl9jb252ZXJ0RGF0YShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmV4dGVuZCh0cnVlLCB0aGlzLmRlZmF1bHRzLCBjb252ZXJ0ZWREYXRhKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkZWZhdWx0cyA9IG5ldyBEZWZhdWx0cygpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTMi5kZWZpbmUoJ3NlbGVjdDIvb3B0aW9ucycsIFtcclxuICAgICAgICAgICAgJ2pxdWVyeScsXHJcbiAgICAgICAgICAgICcuL2RlZmF1bHRzJyxcclxuICAgICAgICAgICAgJy4vdXRpbHMnXHJcbiAgICAgICAgXSwgZnVuY3Rpb24oJCwgRGVmYXVsdHMsIFV0aWxzKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIE9wdGlvbnMob3B0aW9ucywgJGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRlbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyb21FbGVtZW50KCRlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGVsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IERlZmF1bHRzLmFwcGx5RnJvbUVsZW1lbnQodGhpcy5vcHRpb25zLCAkZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gRGVmYXVsdHMuYXBwbHkodGhpcy5vcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgT3B0aW9ucy5wcm90b3R5cGUuZnJvbUVsZW1lbnQgPSBmdW5jdGlvbigkZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGV4Y2x1ZGVkRGF0YSA9IFsnc2VsZWN0MiddO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubXVsdGlwbGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tdWx0aXBsZSA9ICRlLnByb3AoJ211bHRpcGxlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRpc2FibGVkID0gJGUucHJvcCgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9jb21wbGV0ZSA9PSBudWxsICYmICRlLnByb3AoJ2F1dG9jb21wbGV0ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmF1dG9jb21wbGV0ZSA9ICRlLnByb3AoJ2F1dG9jb21wbGV0ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlyID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJGUucHJvcCgnZGlyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmRpciA9ICRlLnByb3AoJ2RpcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoJGUuY2xvc2VzdCgnW2Rpcl0nKS5wcm9wKCdkaXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGlyID0gJGUuY2xvc2VzdCgnW2Rpcl0nKS5wcm9wKCdkaXInKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGlyID0gJ2x0cic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRlLnByb3AoJ2Rpc2FibGVkJywgdGhpcy5vcHRpb25zLmRpc2FibGVkKTtcclxuICAgICAgICAgICAgICAgICRlLnByb3AoJ211bHRpcGxlJywgdGhpcy5vcHRpb25zLm11bHRpcGxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoVXRpbHMuR2V0RGF0YSgkZVswXSwgJ3NlbGVjdDJUYWdzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRlYnVnICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU2VsZWN0MjogVGhlIGBkYXRhLXNlbGVjdDItdGFnc2AgYXR0cmlidXRlIGhhcyBiZWVuIGNoYW5nZWQgdG8gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXNlIHRoZSBgZGF0YS1kYXRhYCBhbmQgYGRhdGEtdGFncz1cInRydWVcImAgYXR0cmlidXRlcyBhbmQgd2lsbCBiZSAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZW1vdmVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBTZWxlY3QyLidcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLlN0b3JlRGF0YSgkZVswXSwgJ2RhdGEnLCBVdGlscy5HZXREYXRhKCRlWzBdLCAnc2VsZWN0MlRhZ3MnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMuU3RvcmVEYXRhKCRlWzBdLCAndGFncycsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVdGlscy5HZXREYXRhKCRlWzBdLCAnYWpheFVybCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kZWJ1ZyAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NlbGVjdDI6IFRoZSBgZGF0YS1hamF4LXVybGAgYXR0cmlidXRlIGhhcyBiZWVuIGNoYW5nZWQgdG8gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYGRhdGEtYWpheC0tdXJsYCBhbmQgc3VwcG9ydCBmb3IgdGhlIG9sZCBhdHRyaWJ1dGUgd2lsbCBiZSByZW1vdmVkJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBTZWxlY3QyLidcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRlLmF0dHIoJ2FqYXgtLXVybCcsIFV0aWxzLkdldERhdGEoJGVbMF0sICdhamF4VXJsJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLlN0b3JlRGF0YSgkZVswXSwgJ2FqYXgtVXJsJywgVXRpbHMuR2V0RGF0YSgkZVswXSwgJ2FqYXhVcmwnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFzZXQgPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB1cHBlckNhc2VMZXR0ZXIoXywgbGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFByZS1sb2FkIGFsbCBvZiB0aGUgYXR0cmlidXRlcyB3aGljaCBhcmUgcHJlZml4ZWQgd2l0aCBgZGF0YS1gXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhdHRyID0gMDsgYXR0ciA8ICRlWzBdLmF0dHJpYnV0ZXMubGVuZ3RoOyBhdHRyKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlTmFtZSA9ICRlWzBdLmF0dHJpYnV0ZXNbYXR0cl0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJlZml4ID0gJ2RhdGEtJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUuc3Vic3RyKDAsIHByZWZpeC5sZW5ndGgpID09IHByZWZpeCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvbnRlbnRzIG9mIHRoZSBhdHRyaWJ1dGUgYWZ0ZXIgYGRhdGEtYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YU5hbWUgPSBhdHRyaWJ1dGVOYW1lLnN1YnN0cmluZyhwcmVmaXgubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZGF0YSBjb250ZW50cyBmcm9tIHRoZSBjb25zaXN0ZW50IHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIG1vcmUgdGhhbiBsaWtlbHkgdGhlIGpRdWVyeSBkYXRhIGhlbHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YVZhbHVlID0gVXRpbHMuR2V0RGF0YSgkZVswXSwgZGF0YU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FtZWxDYXNlIHRoZSBhdHRyaWJ1dGUgbmFtZSB0byBtYXRjaCB0aGUgc3BlY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FtZWxEYXRhTmFtZSA9IGRhdGFOYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIHVwcGVyQ2FzZUxldHRlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgZGF0YSBhdHRyaWJ1dGUgY29udGVudHMgaW50byB0aGUgZGF0YXNldCBzaW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0W2NhbWVsRGF0YU5hbWVdID0gZGF0YVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBQcmVmZXIgdGhlIGVsZW1lbnQncyBgZGF0YXNldGAgYXR0cmlidXRlIGlmIGl0IGV4aXN0c1xyXG4gICAgICAgICAgICAgICAgLy8galF1ZXJ5IDEueCBkb2VzIG5vdCBjb3JyZWN0bHkgaGFuZGxlIGRhdGEgYXR0cmlidXRlcyB3aXRoIG11bHRpcGxlIGRhc2hlc1xyXG4gICAgICAgICAgICAgICAgaWYgKCQuZm4uanF1ZXJ5ICYmICQuZm4uanF1ZXJ5LnN1YnN0cigwLCAyKSA9PSAnMS4nICYmICRlWzBdLmRhdGFzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0ID0gJC5leHRlbmQodHJ1ZSwge30sICRlWzBdLmRhdGFzZXQsIGRhdGFzZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFByZWZlciBvdXIgaW50ZXJuYWwgZGF0YSBjYWNoZSBpZiBpdCBleGlzdHNcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gJC5leHRlbmQodHJ1ZSwge30sIFV0aWxzLkdldERhdGEoJGVbMF0pLCBkYXRhc2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhID0gVXRpbHMuX2NvbnZlcnREYXRhKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkRGF0YS5pbmRleE9mKGtleSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkLmlzUGxhaW5PYmplY3QodGhpcy5vcHRpb25zW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQuZXh0ZW5kKHRoaXMub3B0aW9uc1trZXldLCBkYXRhW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1trZXldID0gZGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIE9wdGlvbnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1trZXldO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgT3B0aW9ucy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oa2V5LCB2YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1trZXldID0gdmFsO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbnM7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFMyLmRlZmluZSgnc2VsZWN0Mi9jb3JlJywgW1xyXG4gICAgICAgICAgICAnanF1ZXJ5JyxcclxuICAgICAgICAgICAgJy4vb3B0aW9ucycsXHJcbiAgICAgICAgICAgICcuL3V0aWxzJyxcclxuICAgICAgICAgICAgJy4va2V5cydcclxuICAgICAgICBdLCBmdW5jdGlvbigkLCBPcHRpb25zLCBVdGlscywgS0VZUykge1xyXG4gICAgICAgICAgICB2YXIgU2VsZWN0MiA9IGZ1bmN0aW9uKCRlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoVXRpbHMuR2V0RGF0YSgkZWxlbWVudFswXSwgJ3NlbGVjdDInKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMuR2V0RGF0YSgkZWxlbWVudFswXSwgJ3NlbGVjdDInKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLl9nZW5lcmF0ZUlkKCRlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zLCAkZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgU2VsZWN0Mi5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdXAgdGhlIHRhYmluZGV4XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRhYmluZGV4ID0gJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnKSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgVXRpbHMuU3RvcmVEYXRhKCRlbGVtZW50WzBdLCAnb2xkLXRhYmluZGV4JywgdGFiaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdXAgY29udGFpbmVycyBhbmQgYWRhcHRlcnNcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgRGF0YUFkYXB0ZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdkYXRhQWRhcHRlcicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhQWRhcHRlciA9IG5ldyBEYXRhQWRhcHRlcigkZWxlbWVudCwgdGhpcy5vcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgJGNvbnRhaW5lciA9IHRoaXMucmVuZGVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGxhY2VDb250YWluZXIoJGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIFNlbGVjdGlvbkFkYXB0ZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdzZWxlY3Rpb25BZGFwdGVyJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25BZGFwdGVyKCRlbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24ucmVuZGVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucG9zaXRpb24odGhpcy4kc2VsZWN0aW9uLCAkY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgRHJvcGRvd25BZGFwdGVyID0gdGhpcy5vcHRpb25zLmdldCgnZHJvcGRvd25BZGFwdGVyJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duID0gbmV3IERyb3Bkb3duQWRhcHRlcigkZWxlbWVudCwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGRyb3Bkb3duID0gdGhpcy5kcm9wZG93bi5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLnBvc2l0aW9uKHRoaXMuJGRyb3Bkb3duLCAkY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgUmVzdWx0c0FkYXB0ZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdyZXN1bHRzQWRhcHRlcicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRzID0gbmV3IFJlc3VsdHNBZGFwdGVyKCRlbGVtZW50LCB0aGlzLm9wdGlvbnMsIHRoaXMuZGF0YUFkYXB0ZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVzdWx0cyA9IHRoaXMucmVzdWx0cy5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdHMucG9zaXRpb24odGhpcy4kcmVzdWx0cywgdGhpcy4kZHJvcGRvd24pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEJpbmQgZXZlbnRzXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEJpbmQgdGhlIGNvbnRhaW5lciB0byBhbGwgb2YgdGhlIGFkYXB0ZXJzXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iaW5kQWRhcHRlcnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZWdpc3RlciBhbnkgRE9NIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWdpc3RlckRvbUV2ZW50cygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlZ2lzdGVyIGFueSBpbnRlcm5hbCBldmVudCBoYW5kbGVyc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJEYXRhRXZlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWdpc3RlclNlbGVjdGlvbkV2ZW50cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJEcm9wZG93bkV2ZW50cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJSZXN1bHRzRXZlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWdpc3RlckV2ZW50cygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgaW5pdGlhbCBzdGF0ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhQWRhcHRlci5jdXJyZW50KGZ1bmN0aW9uKGluaXRpYWxEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKCdzZWxlY3Rpb246dXBkYXRlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBpbml0aWFsRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSGlkZSB0aGUgb3JpZ2luYWwgc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAkZWxlbWVudFswXS5jbGFzc0xpc3QuYWRkKCdzZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAkZWxlbWVudC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3luY2hyb25pemUgYW55IG1vbml0b3JlZCBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zeW5jQXR0cmlidXRlcygpO1xyXG5cclxuICAgICAgICAgICAgICAgIFV0aWxzLlN0b3JlRGF0YSgkZWxlbWVudFswXSwgJ3NlbGVjdDInLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCAkZWxlbWVudC5kYXRhKCdzZWxlY3QyJykuXHJcbiAgICAgICAgICAgICAgICAkZWxlbWVudC5kYXRhKCdzZWxlY3QyJywgdGhpcyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBVdGlscy5FeHRlbmQoU2VsZWN0MiwgVXRpbHMuT2JzZXJ2YWJsZSk7XHJcblxyXG4gICAgICAgICAgICBTZWxlY3QyLnByb3RvdHlwZS5fZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uKCRlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGVsZW1lbnQuYXR0cignaWQnKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQgPSAkZWxlbWVudC5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkZWxlbWVudC5hdHRyKCduYW1lJykgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkID0gJGVsZW1lbnQuYXR0cignbmFtZScpICsgJy0nICsgVXRpbHMuZ2VuZXJhdGVDaGFycygyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQgPSBVdGlscy5nZW5lcmF0ZUNoYXJzKDQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlkID0gaWQucmVwbGFjZSgvKDp8XFwufFxcW3xcXF18LCkvZywgJycpO1xyXG4gICAgICAgICAgICAgICAgaWQgPSAnc2VsZWN0Mi0nICsgaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgU2VsZWN0Mi5wcm90b3R5cGUuX3BsYWNlQ29udGFpbmVyID0gZnVuY3Rpb24oJGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5pbnNlcnRBZnRlcih0aGlzLiRlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSB0aGlzLl9yZXNvbHZlV2lkdGgodGhpcy4kZWxlbWVudCwgdGhpcy5vcHRpb25zLmdldCgnd2lkdGgnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHdpZHRoICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyLmNzcygnd2lkdGgnLCB3aWR0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTZWxlY3QyLnByb3RvdHlwZS5fcmVzb2x2ZVdpZHRoID0gZnVuY3Rpb24oJGVsZW1lbnQsIG1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIFdJRFRIID0gL153aWR0aDooKFstK10/KFswLTldKlxcLik/WzAtOV0rKShweHxlbXxleHwlfGlufGNtfG1tfHB0fHBjKSkvaTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWV0aG9kID09ICdyZXNvbHZlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZVdpZHRoID0gdGhpcy5fcmVzb2x2ZVdpZHRoKCRlbGVtZW50LCAnc3R5bGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlV2lkdGggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGVXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNvbHZlV2lkdGgoJGVsZW1lbnQsICdlbGVtZW50Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PSAnZWxlbWVudCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudFdpZHRoID0gJGVsZW1lbnQub3V0ZXJXaWR0aChmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50V2lkdGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2F1dG8nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRXaWR0aCArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PSAnc3R5bGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gJGVsZW1lbnQuYXR0cignc3R5bGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZihzdHlsZSkgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJzID0gc3R5bGUuc3BsaXQoJzsnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpID0gaSArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHIgPSBhdHRyc1tpXS5yZXBsYWNlKC9cXHMvZywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IGF0dHIubWF0Y2goV0lEVEgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgIT09IG51bGwgJiYgbWF0Y2hlcy5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtZXRob2QgPT0gJ2NvbXB1dGVkc3R5bGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSgkZWxlbWVudFswXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21wdXRlZFN0eWxlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2Q7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTZWxlY3QyLnByb3RvdHlwZS5fYmluZEFkYXB0ZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFBZGFwdGVyLmJpbmQodGhpcywgdGhpcy4kY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmJpbmQodGhpcywgdGhpcy4kY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLmJpbmQodGhpcywgdGhpcy4kY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0cy5iaW5kKHRoaXMsIHRoaXMuJGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJEb21FdmVudHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKCdjaGFuZ2Uuc2VsZWN0MicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGF0YUFkYXB0ZXIuY3VycmVudChmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0aW9uOnVwZGF0ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKCdmb2N1cy5zZWxlY3QyJywgZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKCdmb2N1cycsIGV2dCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zeW5jQSA9IFV0aWxzLmJpbmQodGhpcy5fc3luY0F0dHJpYnV0ZXMsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3luY1MgPSBVdGlscy5iaW5kKHRoaXMuX3N5bmNTdWJ0cmVlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9zeW5jQSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX3N5bmNTKG11dGF0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy4kZWxlbWVudFswXSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlckRhdGFFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFBZGFwdGVyLm9uKCcqJywgZnVuY3Rpb24obmFtZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKG5hbWUsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlclNlbGVjdGlvbkV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5vblJlbGF5RXZlbnRzID0gWyd0b2dnbGUnLCAnZm9jdXMnXTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5vbigndG9nZ2xlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50b2dnbGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ub24oJ2ZvY3VzJywgZnVuY3Rpb24ocGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5mb2N1cyhwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ub24oJyonLCBmdW5jdGlvbihuYW1lLCBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9uUmVsYXlFdmVudHMuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKG5hbWUsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlckRyb3Bkb3duRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5vbignKicsIGZ1bmN0aW9uKG5hbWUsIHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlcihuYW1lLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJSZXN1bHRzRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRzLm9uKCcqJywgZnVuY3Rpb24obmFtZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKG5hbWUsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlckV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub24oJ29wZW4nLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRjb250YWluZXJbMF0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub24oJ2Nsb3NlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kY29udGFpbmVyWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKCdlbmFibGUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRjb250YWluZXJbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0Mi1jb250YWluZXItLWRpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKCdkaXNhYmxlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kY29udGFpbmVyWzBdLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdDItY29udGFpbmVyLS1kaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbignYmx1cicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGNvbnRhaW5lclswXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QyLWNvbnRhaW5lci0tZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub24oJ3F1ZXJ5JywgZnVuY3Rpb24ocGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLmlzT3BlbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlcignb3BlbicsIHt9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YUFkYXB0ZXIucXVlcnkocGFyYW1zLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czphbGwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHBhcmFtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub24oJ3F1ZXJ5OmFwcGVuZCcsIGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YUFkYXB0ZXIucXVlcnkocGFyYW1zLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czphcHBlbmQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHBhcmFtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub24oJ2tleXByZXNzJywgZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGV2dC53aGljaDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNPcGVuKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gS0VZUy5FU0MgfHwga2V5ID09PSBLRVlTLlRBQiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleSA9PT0gS0VZUy5VUCAmJiBldnQuYWx0S2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jbG9zZShldnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gS0VZUy5FTlRFUikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOnNlbGVjdCcsIHt9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoa2V5ID09PSBLRVlTLlNQQUNFICYmIGV2dC5jdHJsS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOnRvZ2dsZScsIHt9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IEtFWVMuVVApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czpwcmV2aW91cycsIHt9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IEtFWVMuRE9XTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOm5leHQnLCB7fSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBLRVlTLkVOVEVSIHx8IGtleSA9PT0gS0VZUy5TUEFDRSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleSA9PT0gS0VZUy5ET1dOICYmIGV2dC5hbHRLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9wZW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgU2VsZWN0Mi5wcm90b3R5cGUuX3N5bmNBdHRyaWJ1dGVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2V0KCdkaXNhYmxlZCcsIHRoaXMuJGVsZW1lbnQucHJvcCgnZGlzYWJsZWQnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdkaXNhYmxlJywge30pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2VuYWJsZScsIHt9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFNlbGVjdDIucHJvdG90eXBlLl9pc0NoYW5nZU11dGF0aW9uID0gZnVuY3Rpb24obXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9ucy5hZGRlZE5vZGVzICYmIG11dGF0aW9ucy5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG11dGF0aW9ucy5hZGRlZE5vZGVzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlID0gbXV0YXRpb25zLmFkZGVkTm9kZXNbbl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG11dGF0aW9ucy5yZW1vdmVkTm9kZXMgJiYgbXV0YXRpb25zLnJlbW92ZWROb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobXV0YXRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtdXRhdGlvbnMuc29tZShmdW5jdGlvbihtdXRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5faXNDaGFuZ2VNdXRhdGlvbihtdXRhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgU2VsZWN0Mi5wcm90b3R5cGUuX3N5bmNTdWJ0cmVlID0gZnVuY3Rpb24obXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hhbmdlZCA9IHRoaXMuX2lzQ2hhbmdlTXV0YXRpb24obXV0YXRpb25zKTtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHJlLXB1bGwgdGhlIGRhdGEgaWYgd2UgdGhpbmsgdGhlcmUgaXMgYSBjaGFuZ2VcclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhQWRhcHRlci5jdXJyZW50KGZ1bmN0aW9uKGN1cnJlbnREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0aW9uOnVwZGF0ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGN1cnJlbnREYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIE92ZXJyaWRlIHRoZSB0cmlnZ2VyIG1ldGhvZCB0byBhdXRvbWF0aWNhbGx5IHRyaWdnZXIgcHJlLWV2ZW50cyB3aGVuXHJcbiAgICAgICAgICAgICAqIHRoZXJlIGFyZSBldmVudHMgdGhhdCBjYW4gYmUgcHJldmVudGVkLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgU2VsZWN0Mi5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKG5hbWUsIGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhY3R1YWxUcmlnZ2VyID0gU2VsZWN0Mi5fX3N1cGVyX18udHJpZ2dlcjtcclxuICAgICAgICAgICAgICAgIHZhciBwcmVUcmlnZ2VyTWFwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICdvcGVuJzogJ29wZW5pbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbG9zZSc6ICdjbG9zaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnc2VsZWN0JzogJ3NlbGVjdGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Vuc2VsZWN0JzogJ3Vuc2VsZWN0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2xlYXInOiAnY2xlYXJpbmcnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhcmdzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmdzID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgaW4gcHJlVHJpZ2dlck1hcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmVUcmlnZ2VyTmFtZSA9IHByZVRyaWdnZXJNYXBbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZVRyaWdnZXJBcmdzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2ZW50ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBhcmdzXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsVHJpZ2dlci5jYWxsKHRoaXMsIHByZVRyaWdnZXJOYW1lLCBwcmVUcmlnZ2VyQXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVUcmlnZ2VyQXJncy5wcmV2ZW50ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wcmV2ZW50ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhY3R1YWxUcmlnZ2VyLmNhbGwodGhpcywgbmFtZSwgYXJncyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTZWxlY3QyLnByb3RvdHlwZS50b2dnbGVEcm9wZG93biA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFNlbGVjdDIucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3F1ZXJ5Jywge30pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgU2VsZWN0Mi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc09wZW4oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2Nsb3NlJywgeyBvcmlnaW5hbEV2ZW50OiBldnQgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogSGVscGVyIG1ldGhvZCB0byBhYnN0cmFjdCB0aGUgXCJlbmFibGVkXCIgKG5vdCBcImRpc2FibGVkXCIpIHN0YXRlIG9mIHRoaXNcclxuICAgICAgICAgICAgICogb2JqZWN0LlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0cnVlfSBpZiB0aGUgaW5zdGFuY2UgaXMgbm90IGRpc2FibGVkLlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtmYWxzZX0gaWYgdGhlIGluc3RhbmNlIGlzIGRpc2FibGVkLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgU2VsZWN0Mi5wcm90b3R5cGUuaXNFbmFibGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNEaXNhYmxlZCgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEhlbHBlciBtZXRob2QgdG8gYWJzdHJhY3QgdGhlIFwiZGlzYWJsZWRcIiBzdGF0ZSBvZiB0aGlzIG9iamVjdC5cclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogQHJldHVybiB7dHJ1ZX0gaWYgdGhlIGRpc2FibGVkIG9wdGlvbiBpcyB0cnVlLlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtmYWxzZX0gaWYgdGhlIGRpc2FibGVkIG9wdGlvbiBpcyBmYWxzZS5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFNlbGVjdDIucHJvdG90eXBlLmlzRGlzYWJsZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0KCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgU2VsZWN0Mi5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kY29udGFpbmVyWzBdLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFNlbGVjdDIucHJvdG90eXBlLmhhc0ZvY3VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kY29udGFpbmVyWzBdLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0Mi1jb250YWluZXItLWZvY3VzJyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTZWxlY3QyLnByb3RvdHlwZS5mb2N1cyA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gcmUtdHJpZ2dlciBmb2N1cyBldmVudHMgaWYgd2UgYXJlIGFscmVhZHkgZm9jdXNlZFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzRm9jdXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjb250YWluZXJbMF0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0Mi1jb250YWluZXItLWZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2ZvY3VzJywge30pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgU2VsZWN0Mi5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ2RlYnVnJykgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnU2VsZWN0MjogVGhlIGBzZWxlY3QyKFwiZW5hYmxlXCIpYCBtZXRob2QgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnIGJlIHJlbW92ZWQgaW4gbGF0ZXIgU2VsZWN0MiB2ZXJzaW9ucy4gVXNlICRlbGVtZW50LnByb3AoXCJkaXNhYmxlZFwiKScgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnIGluc3RlYWQuJ1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MgPT0gbnVsbCB8fCBhcmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBbdHJ1ZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRpc2FibGVkID0gIWFyZ3NbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcsIGRpc2FibGVkKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFNlbGVjdDIucHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdkZWJ1ZycpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnU2VsZWN0MjogRGF0YSBjYW4gbm8gbG9uZ2VyIGJlIHNldCB1c2luZyBgc2VsZWN0MihcImRhdGFcIilgLiBZb3UgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzaG91bGQgY29uc2lkZXIgc2V0dGluZyB0aGUgdmFsdWUgaW5zdGVhZCB1c2luZyBgJGVsZW1lbnQudmFsKClgLidcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhQWRhcHRlci5jdXJyZW50KGZ1bmN0aW9uKGN1cnJlbnREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGN1cnJlbnREYXRhO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTZWxlY3QyLnByb3RvdHlwZS52YWwgPSBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnZGVidWcnKSAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdTZWxlY3QyOiBUaGUgYHNlbGVjdDIoXCJ2YWxcIilgIG1ldGhvZCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsIGJlJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcgcmVtb3ZlZCBpbiBsYXRlciBTZWxlY3QyIHZlcnNpb25zLiBVc2UgJGVsZW1lbnQudmFsKCkgaW5zdGVhZC4nXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncyA9PSBudWxsIHx8IGFyZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZhbCA9IGFyZ3NbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmV3VmFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbCA9IG5ld1ZhbC5tYXAoZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmoudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LnZhbChuZXdWYWwpLnRyaWdnZXIoJ2lucHV0JykudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBTZWxlY3QyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjb250YWluZXIucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3N5bmNBID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N5bmNTID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50Lm9mZignLnNlbGVjdDInKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLkdldERhdGEodGhpcy4kZWxlbWVudFswXSwgJ29sZC10YWJpbmRleCcpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdDItaGlkZGVuLWFjY2Vzc2libGUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuICAgICAgICAgICAgICAgIFV0aWxzLlJlbW92ZURhdGEodGhpcy4kZWxlbWVudFswXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZURhdGEoJ3NlbGVjdDInKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFBZGFwdGVyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRzLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFBZGFwdGVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRzID0gbnVsbDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFNlbGVjdDIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRjb250YWluZXIgPSAkKFxyXG4gICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDIgc2VsZWN0Mi1jb250YWluZXJcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3Rpb25cIj48L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZHJvcGRvd24td3JhcHBlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPC9zcGFuPidcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5hdHRyKCdkaXInLCB0aGlzLm9wdGlvbnMuZ2V0KCdkaXInKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kY29udGFpbmVyID0gJGNvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjb250YWluZXJbMF0uY2xhc3NMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZCgnc2VsZWN0Mi1jb250YWluZXItLScgKyB0aGlzLm9wdGlvbnMuZ2V0KCd0aGVtZScpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBVdGlscy5TdG9yZURhdGEoJGNvbnRhaW5lclswXSwgJ2VsZW1lbnQnLCB0aGlzLiRlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBTZWxlY3QyO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTMi5kZWZpbmUoJ2pxdWVyeS1tb3VzZXdoZWVsJywgW1xyXG4gICAgICAgICAgICAnanF1ZXJ5J1xyXG4gICAgICAgIF0sIGZ1bmN0aW9uKCQpIHtcclxuICAgICAgICAgICAgLy8gVXNlZCB0byBzaGltIGpRdWVyeS5tb3VzZXdoZWVsIGZvciBub24tZnVsbCBidWlsZHMuXHJcbiAgICAgICAgICAgIHJldHVybiAkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTMi5kZWZpbmUoJ2pxdWVyeS5zZWxlY3QyJywgW1xyXG4gICAgICAgICAgICAnanF1ZXJ5JyxcclxuICAgICAgICAgICAgJ2pxdWVyeS1tb3VzZXdoZWVsJyxcclxuXHJcbiAgICAgICAgICAgICcuL3NlbGVjdDIvY29yZScsXHJcbiAgICAgICAgICAgICcuL3NlbGVjdDIvZGVmYXVsdHMnLFxyXG4gICAgICAgICAgICAnLi9zZWxlY3QyL3V0aWxzJ1xyXG4gICAgICAgIF0sIGZ1bmN0aW9uKCQsIF8sIFNlbGVjdDIsIERlZmF1bHRzLCBVdGlscykge1xyXG4gICAgICAgICAgICBpZiAoJC5mbi5zZWxlY3QyID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vIEFsbCBtZXRob2RzIHRoYXQgc2hvdWxkIHJldHVybiB0aGUgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNNZXRob2RzID0gWydvcGVuJywgJ2Nsb3NlJywgJ2Rlc3Ryb3knXTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmZuLnNlbGVjdDIgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlT3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgU2VsZWN0MigkKHRoaXMpLCBpbnN0YW5jZU9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IFV0aWxzLkdldERhdGEodGhpcywgJ3NlbGVjdDInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UgPT0gbnVsbCAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1RoZSBzZWxlY3QyKFxcJycgKyBvcHRpb25zICsgJ1xcJykgbWV0aG9kIHdhcyBjYWxsZWQgb24gYW4gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50IHRoYXQgaXMgbm90IHVzaW5nIFNlbGVjdDIuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gaW5zdGFuY2Vbb3B0aW9uc10uYXBwbHkoaW5zdGFuY2UsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlIHNob3VsZCBiZSByZXR1cm5pbmcgYHRoaXNgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzTWV0aG9kcy5pbmRleE9mKG9wdGlvbnMpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudHMgZm9yIFNlbGVjdDI6ICcgKyBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJC5mbi5zZWxlY3QyLmRlZmF1bHRzID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICQuZm4uc2VsZWN0Mi5kZWZhdWx0cyA9IERlZmF1bHRzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gU2VsZWN0MjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBBTUQgbG9hZGVyIGNvbmZpZ3VyYXRpb24gc28gaXQgY2FuIGJlIHVzZWQgb3V0c2lkZSBvZiB0aGlzIGZpbGVcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkZWZpbmU6IFMyLmRlZmluZSxcclxuICAgICAgICAgICAgcmVxdWlyZTogUzIucmVxdWlyZVxyXG4gICAgICAgIH07XHJcbiAgICB9KCkpO1xyXG5cclxuICAgIC8vIEF1dG9sb2FkIHRoZSBqUXVlcnkgYmluZGluZ3NcclxuICAgIC8vIFdlIGtub3cgdGhhdCBhbGwgb2YgdGhlIG1vZHVsZXMgZXhpc3QgYWJvdmUgdGhpcywgc28gd2UncmUgc2FmZVxyXG4gICAgdmFyIHNlbGVjdDIgPSBTMi5yZXF1aXJlKCdqcXVlcnkuc2VsZWN0MicpO1xyXG5cclxuICAgIC8vIEhvbGQgdGhlIEFNRCBtb2R1bGUgcmVmZXJlbmNlcyBvbiB0aGUgalF1ZXJ5IGZ1bmN0aW9uIHRoYXQgd2FzIGp1c3QgbG9hZGVkXHJcbiAgICAvLyBUaGlzIGFsbG93cyBTZWxlY3QyIHRvIHVzZSB0aGUgaW50ZXJuYWwgbG9hZGVyIG91dHNpZGUgb2YgdGhpcyBmaWxlLCBzdWNoXHJcbiAgICAvLyBhcyBpbiB0aGUgbGFuZ3VhZ2UgZmlsZXMuXHJcbiAgICBqUXVlcnkuZm4uc2VsZWN0Mi5hbWQgPSBTMjtcclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIFNlbGVjdDIgaW5zdGFuY2UgZm9yIGFueW9uZSB3aG8gaXMgaW1wb3J0aW5nIGl0LlxyXG4gICAgcmV0dXJuIHNlbGVjdDI7XHJcbn0pKTsiXSwic291cmNlUm9vdCI6IiJ9