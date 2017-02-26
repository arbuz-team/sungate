/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//noinspection JSUnresolvedFunction
	__webpack_require__(1);
	
	//noinspection JSUnresolvedFunction
	window.viewability = function () {
	  return __webpack_require__(5);
	}();

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(6);
	
	__webpack_require__(8);
	
	var _controllers = __webpack_require__(11);
	
	var page_controller = _interopRequireWildcard(_controllers);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	page_controller.start(); /**
	                          * Created by mrskull on 24.11.16.
	                          */
	
	// import './autosize-master/dist/autosize';

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _base = __webpack_require__(7);
	
	/*---------------- Interfejs funkcji standardowych ----------------*/
	
	/**
	 *    Defining global veriables
	 */
	
	window.APP = {}; /*    JavaScript    */
	
	window.APP.DATA = {};
	window.APP.dictionary = new _base.Dictionary();
	
	/**
	 *    Defining global functions
	 */
	
	APP.add_own_event = function add_own_event(name, callback) {
	  window.removeEventListener(name, callback, false);
	  window.addEventListener(name, callback, false);
	};
	
	APP.throw_event = function throw_event(event) {
	  window.dispatchEvent(event);
	};
	
	$.prototype.add_data = function add_data(name, value) {
	  $(this).attr('data-' + name, value);
	  $(this).data(name, value);
	  return this;
	};
	
	$.prototype.change_data = function change_data(name, value) {
	  $(this).add_data(name, value);
	  return this;
	};
	
	$.prototype.delete_data = function delete_data(name) {
	  $(this).removeAttr('data-' + name);
	  $(this).removeData(name);
	  return this;
	};
	
	$.prototype.serialize_object = function () {
	  var fields = $(this).serializeArray(),
	      form_object = {};
	
	  // Appending normal fields to array
	  $.each(fields, function (i, field) {
	    form_object[field.name] = field.value;
	  });
	
	  return form_object;
	};
	
	Array.prototype.delete_empty = function delete_empty() {
	  var url_array = [];
	
	  for (var j = 0, i = 0; this.length > i; i++) {
	    if (this[i]) {
	      url_array[j] = this[i];
	      j++;
	    }
	  }
	  return url_array;
	};
	
	if (!String.prototype.splice) {
	  /**
	   * {JSDoc}
	   *
	   * The splice() method changes the content of a string by removing a range of
	   * characters and/or adding new characters.
	   *
	   * @this {String}
	   * @param {number} start Index at which to start changing the string.
	   * @param {number} delCount An integer indicating the number of old chars to remove.
	   * @param {string} newSubStr The String that is spliced in.
	   * @return {string} A new string with the spliced substring.
	   */
	  String.prototype.splice = function (start, delCount, newSubStr) {
	    return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
	  };
	}
	
	window.APP.add_if_isset = function (from, to, from_what, to_what) {
	  if (typeof from[from_what] !== 'undefined') if (from_what && to_what) to[to_what] = from[from_what];else if (from_what) to[from_what] = from[from_what];
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by mrskull on 20.02.17.
	 */
	
	var Dictionary = exports.Dictionary = function Dictionary() {
	  var dictionary = window.DATA.dictionary;
	
	  if (!dictionary) dictionary = {};
	
	  this.add_word = function (word, translated_word) {
	    if (typeof dictionary[word] === 'undefined') {
	      dictionary[word] = translated_word;
	      return true;
	    }
	
	    console.error('Error in Dictionary: This word is using now.');
	    return false;
	  };
	
	  this.get_word = function (word) {
	    if (typeof dictionary[word] !== 'undefined') return dictionary[word];
	
	    console.error('Error in Dictionary: This word is not exist.');
	    return false;
	  };
	
	  this.show_all = function () {
	    console.log(dictionary);
	  };
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _structure = __webpack_require__(9);
	
	/**
	 *    Defining private functions
	 */
	
	var send_post_preprocess_url = function send_post_preprocess_url(response_url) {
	  if (response_url) return response_url;else return _structure.data_controller.get('path');
	},
	    send_post_prepare = function send_post_prepare(post_data) {
	  if (!post_data) post_data = {};
	
	  post_data[_structure.data_controller.get_crsf('name')] = _structure.data_controller.get_crsf('value');
	
	  return post_data;
	},
	    create_callback = function create_callback(callback) {
	  return function (response, status) {
	    var html = response.responseText,
	        code = response.status;
	
	    callback(html, status, code);
	  };
	};
	
	/**
	 *    Defining global functions
	 */
	
	/**
	 * Created by mrskull on 20.12.16.
	 */
	
	window.APP.http_request = function (url, post_data, callback) {
	  url = send_post_preprocess_url(url);
	  post_data = send_post_prepare(post_data);
	
	  $.ajax({
	    type: 'POST',
	    url: url,
	    data: post_data,
	    complete: create_callback(callback)
	  });
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.data_controller = undefined;
	
	__webpack_require__(10);
	
	/*---------------- Struktura Dane_Strony ----------------*/
	
	var data_controller = exports.data_controller = new function Data_Controler() {
	  var private_data = void 0,
	      public_data = void 0;
	
	  this.reset = function () {
	    private_data = {
	      path: location.pathname,
	      all_url: location.href,
	      history: [],
	      csrf_token: $('input[ name=csrfmiddlewaretoken ]').val() || ''
	    };
	
	    public_data = {
	      can_do_redirect: false,
	      can_do_open_plugin: true,
	      page_name: 'Spasungate',
	      title: 'Loading... - Spasungate',
	      description: 'This page is shop, which is ownership Spasungate.',
	      statement_content: 'Empty statement.'
	    };
	  };
	
	  this.reset();
	
	  this.get = function (name) {
	    if (typeof private_data[name] !== 'undefined') return private_data[name];else if (typeof public_data[name] !== 'undefined') return public_data[name];else {
	      console.error('Data structure error: Wrong call! Veriable with this name doesn\'t exist.');
	    }
	  };
	
	  this.get_crsf = function (what) {
	    if (what === 'name') return 'csrfmiddlewaretoken';else if (what === 'value') return private_data.csrf_token;else console.error('Data structure error: Wrong call! Veriable with this name doesn\'t exist (crsf).');
	  };
	
	  this.change = function (name, wartosc) {
	    if (typeof public_data[name] !== 'undefined') public_data[name] = wartosc;else console.error('Data structure error: Wrong call! Veriable with this name doesn\'t exist. ' + name);
	  };
	
	  this.change_much = function (object) {
	    for (var name in object) {
	      if (object.hasOwnProperty(name)) {
	        if (name === 'title') {
	          if (object[name] !== '') this.change(name, object[name] + ' - ' + public_data.page_name);else this.change(name, public_data.page_name);
	        } else this.change(name, object[name]);
	      }
	    }
	  };
	}(); /**
	      * Created by mrskull on 24.11.16.
	      */

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Created by mrskull on 24.11.16.
	 */
	
	window.EVENTS = {
	  define: new Event('define'),
	  redirect: new Event('redirect'),
	
	  plugins: {
	    close: new Event('plugins_close'),
	
	    reload_sign_in: new Event('plugins_reload_sign_in'),
	
	    reload_header: new Event('plugin_header_reload'),
	    reload_navigation: new Event('plugin_navigation_reload'),
	    reload_cart: new Event('plugin_cart_reload'),
	    reload_searcher: new Event('plugin_searcher_reload'),
	    reload_ground: new Event('plugin_ground_reload')
	  },
	
	  dialog_close: new Event('dialog_close')
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.start = undefined;
	
	var _controllers = __webpack_require__(12);
	
	var searcher_controllers = _interopRequireWildcard(_controllers);
	
	var _controllers2 = __webpack_require__(34);
	
	var cart_controllers = _interopRequireWildcard(_controllers2);
	
	var _controllers3 = __webpack_require__(38);
	
	var navigation_controllers = _interopRequireWildcard(_controllers3);
	
	var _controllers4 = __webpack_require__(39);
	
	var header_controllers = _interopRequireWildcard(_controllers4);
	
	var _controllers5 = __webpack_require__(40);
	
	var dialog_controllers = _interopRequireWildcard(_controllers5);
	
	var _controllers6 = __webpack_require__(46);
	
	var ground_controllers = _interopRequireWildcard(_controllers6);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/*---------------- Wydarzenia na stronie ----------------*/
	
	/**
	 * Created by mrskull on 24.11.16.
	 */
	
	var reload_for_sign_in = function reload_for_sign_in() {
	  var delay = window.APP.DATA.delay,
	      reload = function reload() {
	    window.APP.throw_event(window.EVENTS.plugins.reload_navigation);
	    window.APP.throw_event(window.EVENTS.plugins.reload_cart);
	  };
	
	  if (delay) setTimeout(reload, delay);else reload();
	},
	    define = function define() {
	  // Usuń wszystkie wydarzenia ze wszystkich elementów
	  $('*').off();
	
	  searcher_controllers.define();
	  cart_controllers.define();
	  navigation_controllers.define();
	  header_controllers.define();
	  dialog_controllers.define();
	  ground_controllers.define();
	};
	
	var start = exports.start = function start() {
	  window.addEventListener('define', define, false);
	  window.APP.add_own_event('plugins_reload_sign_in', reload_for_sign_in);
	
	  searcher_controllers.start();
	  cart_controllers.start();
	  navigation_controllers.start();
	  header_controllers.start();
	  ground_controllers.start();
	
	  define();
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.plugin_open = exports.start = exports.define = undefined;
	
	var _controllers = __webpack_require__(13);
	
	var _controllers2 = __webpack_require__(17);
	
	var _controllers3 = __webpack_require__(20);
	
	/**
	 *    Defining private variables
	 */
	
	var config_loader = {
	  name: 'searcher',
	  url: '/searcher/',
	
	  container: '#SEARCHER > .searcher',
	
	  auto_first_loading: true
	},
	    searcher_loader_controllers = new _controllers.Plugins_Loader_Controllers(config_loader),
	    config_motion = {
	  container: '#SEARCHER',
	  content: '.searcher',
	  open: 'right',
	  can_open_by: 'width',
	  can_open_to: 1000,
	  duration_open: 200,
	  duration_close: 200
	},
	    searcher_motion_controllers = new _controllers2.Plugins_Motion_Controllers(config_motion),
	    searcher_form_controllers = new _controllers3.Form_Controllers(searcher_loader_controllers);
	
	/**
	 *    Defining public functions
	 */
	
	/**
	 * Created by mrskull on 07.01.17.
	 */
	
	var define = exports.define = function define() {
	  searcher_motion_controllers.define();
	  searcher_form_controllers.define();
	},
	    start = exports.start = function start() {
	  searcher_loader_controllers.define();
	  searcher_motion_controllers.start();
	},
	    plugin_open = exports.plugin_open = function plugin_open() {
	  searcher_motion_controllers.plugin_open();
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Plugins_Loader_Controllers = undefined;
	
	var _structure = __webpack_require__(9);
	
	var _views = __webpack_require__(14);
	
	/**
	 * Created by mrskull on 24.11.16.
	 */
	
	var Plugins_Loader_Controllers = exports.Plugins_Loader_Controllers = function Plugins_Loader_Controllers(config) {
	  var plugin_loader_views = new _views.Plugins_Loader_Views(config);
	
	  this.load = plugin_loader_views.change_content;
	  this.container = plugin_loader_views.models.settings.container;
	
	  /**
	   *    Defining private functions
	   */
	
	  this.redirect = function () {
	    var _this = this;
	
	    var url = _structure.data_controller.get('path'),
	        delay = 0,
	        variables = plugin_loader_views.models.variables;
	
	    if (typeof APP !== 'undefined' && typeof APP.DATA !== 'undefined') {
	      if (typeof APP.DATA.redirect !== 'undefined') url = APP.DATA.redirect;
	
	      if (typeof APP.DATA.delay !== 'undefined') {
	        delay = APP.DATA.delay;
	        APP.DATA.delay = undefined;
	      }
	    }
	
	    variables.can_do_redirect = true;
	    clearTimeout(variables.redirect_time_out);
	
	    variables.redirect_time_out = setTimeout(function () {
	      if (plugin_loader_views.models.variables.can_do_redirect === true) _this.load(url);
	    }, delay);
	  };
	
	  this.reload = function () {
	    var delay = window.APP.DATA.delay;
	    APP.DATA.delay = undefined;
	
	    if (typeof delay !== 'number') delay = 0;
	
	    setTimeout(plugin_loader_views.change_content, delay);
	  };
	
	  /**
	   *    Defining public functions
	   */
	
	  this.define = function () {
	    var plugin_name = plugin_loader_views.models.settings.name,
	        auto_first_loading = plugin_loader_views.models.settings.auto_first_loading;
	
	    window.APP.add_own_event('plugin_' + plugin_name + '_reload', this.reload);
	
	    if (auto_first_loading) window.APP.add_own_event('load', function () {
	      plugin_loader_views.change_content();
	    });
	  };
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Plugins_Loader_Views = undefined;
	
	var _models = __webpack_require__(15);
	
	var _img_loader = __webpack_require__(16);
	
	var img_loader = _interopRequireWildcard(_img_loader);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 *    Created by mrskull on 24.11.16.
	 */
	
	var Plugins_Loader_Views = exports.Plugins_Loader_Views = function Plugins_Loader_Views(config) {
	  var models = new _models.Plugins_Loader_Models(config),
	      external_callback = void 0;
	
	  this.models = models;
	
	  /**
	   *    Defining showing functions
	   */
	
	  var check_for_errors = function check_for_errors(status, code) {
	    var container = models.settings.container,
	        error = models.variables.error;
	
	    if (status !== 'success') if (error === true) $(container).html('An error has occurred while connecting to server. Please, refresh website or check your connect with network.');else {
	      models.variables.error = true;
	
	      models.prepare_post_data({ __content__: 'ground' });
	      models.download_content('/statement/' + code + '/', show_content);
	
	      return true;
	    }
	    return false;
	  },
	      prepare_content_to_show = function prepare_content_to_show(html, status, code) {
	    var container = models.settings.container,
	        $container = $(container),
	        url = models.variables.url,
	        error = models.variables.error;
	
	    $container.scrollTop(0);
	
	    if (check_for_errors(status, code)) return false;
	
	    if (error !== true || status === 'success') $container.html(html).add_data('url', url);
	
	    models.variables.error = false;
	    models.variables.url = '';
	
	    models.refresh_events();
	    models.refresh_scroll();
	    img_loader.define();
	  },
	      show_content = function show_content(response, status, code) {
	    prepare_content_to_show(response, status, code);
	
	    var container = models.settings.container,
	        opacity = models.settings.opacity.show,
	        duration = models.settings.duration.show;
	
	    $(container).animate({ opacity: opacity }, duration, function () {
	      if (external_callback) external_callback();
	
	      // if(models.settings.load_with_page && window.APP.DATA)
	      //   load_header_page(window.APP.DATA);
	    });
	  };
	
	  /**
	   *    Defining hidding functions
	   */
	
	  var prepare_content_to_hide = function prepare_content_to_hide(url, post_data) {
	    models.variables.can_do_redirect = false;
	
	    models.refresh_data();
	    models.prepare_url(url);
	    models.prepare_post_data(post_data);
	  },
	      hide_content = function hide_content(url, post_data, callback) {
	    external_callback = callback;
	    prepare_content_to_hide(url, post_data);
	
	    var container = models.settings.container,
	        opacity = models.settings.opacity.hide,
	        duration = models.settings.duration.hide;
	
	    $(container).animate({ opacity: opacity }, duration, function () {
	      models.download_content(models.variables.url, show_content);
	    });
	  };
	
	  /**
	   *    Defining public functions
	   */
	
	  this.change_content = hide_content;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Plugins_Loader_Models = undefined;
	
	var _structure = __webpack_require__(9);
	
	var Plugins_Loader_Models = exports.Plugins_Loader_Models = function Plugins_Loader_Models(config) {
	  var that = this;
	
	  /**
	   *    Plugin settings
	   */
	
	  this.settings = {
	    name: undefined,
	    url: undefined,
	
	    container: undefined,
	    first_element: '*',
	
	    auto_first_loading: false,
	    load_with_page: false,
	
	    duration: {
	      show: 150,
	      hide: 100
	    },
	
	    opacity: {
	      show: 1,
	      hide: 0.4
	    }
	  };
	
	  // -- Load settings
	  (function () {
	    if (typeof config !== 'undefined') {
	      // -- Name
	      if (typeof config.name !== 'undefined') that.settings.name = config.name;
	
	      // -- URL
	      if (typeof config.url !== 'undefined') that.settings.url = window.APP.dictionary.get_word(config.url);
	
	      // -- Container
	      if (typeof config.load_with_page !== 'undefined') that.settings.load_with_page = config.load_with_page;
	
	      // -- Container
	      if (typeof config.auto_first_loading !== 'undefined') that.settings.auto_first_loading = config.auto_first_loading;
	
	      // -- Load with page
	      if (typeof config.container !== 'undefined') that.settings.container = config.container;
	
	      // -- Duration
	      if (typeof config.duration !== 'undefined') {
	        var duration = config.duration;
	
	        if (typeof duration.show !== 'undefined') that.settings.duration.show = duration.show;
	
	        if (typeof duration.hide !== 'undefined') that.settings.duration.hide = duration.hide;
	      }
	
	      // -- Opacity
	      if (typeof config.opacity !== 'undefined') {
	        var opacity = config.opacity;
	
	        if (typeof opacity.show !== 'undefined') that.settings.opacity.show = opacity.show;
	
	        if (typeof opacity.hide !== 'undefined') that.settings.opacity.hide = opacity.hide;
	      }
	    }
	  })();
	
	  /**
	   *    Plugin variables
	   */
	
	  this.variables = {
	    url: undefined,
	    post_data: undefined,
	
	    error: undefined,
	    external_callback: undefined,
	
	    can_do_load: true,
	    can_do_redirect: true,
	    redirect_time_out: undefined
	  };
	
	  /**
	   *    Defining prepare functions
	   */
	
	  this.prepare_url = function (response_url) {
	    if (!response_url) if (typeof this.settings.url !== 'undefined') response_url = this.settings.url;else response_url = _structure.data_controller.get('path');
	
	    this.variables.url = response_url;
	  };
	
	  this.prepare_post_data = function (post_data) {
	    if (!post_data) post_data = {};
	
	    if (typeof post_data.__form__ === 'undefined') if (typeof post_data.__content__ === 'undefined') post_data['__content__'] = this.settings.name;
	
	    this.variables.post_data = post_data;
	  };
	
	  /**
	   *    Defining refresh functions
	   */
	
	  this.refresh_data = function () {
	    _structure.data_controller.reset();
	  };
	
	  this.refresh_events = function () {
	    APP.throw_event(window.EVENTS.define);
	  };
	
	  this.refresh_scroll = function () {
	    $(this.settings.container).parent().scrollTop(0);
	  };
	
	  /**
	   *    Defining download functions
	   */
	
	  this.download_content = function (url, callback) {
	    this.prepare_url(url);
	    window.APP.http_request(this.variables.url, this.variables.post_data, callback);
	  };
	}; /**
	    * Created by mrskull on 26.12.16.
	    */

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var $query = function $query(css_query) {
	  return document.querySelectorAll(css_query);
	};
	
	var attr = function attr(elem, name) {
	  return elem.getAttribute(name);
	};
	
	////////////////////////////////////////
	
	var define = exports.define = function define() {
	  var $images = $query('img'),
	      default_src = '/_static/img/puzzle_256.png',
	      image = new Image();
	
	  function download_img($imgs, i) {
	    if (!$imgs[i]) return false;
	
	    var downloadingImage = new Image(),
	        data_src = attr($imgs[i], 'data-src');
	
	    downloadingImage.onload = function () {
	      $imgs[i].src = this.src;
	      setTimeout(function () {
	        $imgs[i].style = 'opacity: 1;';
	        download_img($images, i + 1);
	      }, 100);
	    };
	
	    downloadingImage.onerror = function () {
	      $imgs[i].src = default_src;
	      $imgs[i].alt = 'Sorry, an error has occurred.';
	      setTimeout(function () {
	        $imgs[i].style = 'opacity: 1;';
	        $imgs[i].setAttribute('class', 'error');
	        download_img($images, i + 1);
	      }, 100);
	    };
	
	    downloadingImage.src = data_src;
	  }
	
	  image.onload = function () {
	    download_img($images, 0);
	  };
	
	  image.src = default_src;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Plugins_Motion_Controllers = undefined;
	
	var _views = __webpack_require__(18);
	
	var Plugins_Motion_Controllers = exports.Plugins_Motion_Controllers = function Plugins_Motion_Controllers(config) {
	  var plugin_motion_views = new _views.Plugins_Motion_Views(config),
	      settings = plugin_motion_views.models.settings;
	
	  this.views = plugin_motion_views;
	
	  ///////////////////////////////
	
	  var swipe_open = function swipe_open() {
	    if (plugin_motion_views.models.check_possibility_of_swipe()) plugin_motion_views.plugin_open();
	  },
	      swipe_close = function swipe_close() {
	    if (plugin_motion_views.models.check_possibility_of_swipe()) plugin_motion_views.plugin_close();
	  },
	      pre_swipe_open = function pre_swipe_open(event) {
	    var y = event.gesture.center.y - event.gesture.distance;
	
	    if (y <= 70) swipe_open();
	  },
	      pre_plugin_close = function pre_plugin_close() {
	    var container = settings.container,
	        $container = $(container),
	        $window = $(window);
	
	    if (container !== '#CART') plugin_motion_views.plugin_close();else if ($container.outerWidth() === $window.width()) plugin_motion_views.plugin_close();
	  },
	      set_start_position = function set_start_position() {
	    var $container = $(settings.container),
	        $content = $container.children(settings.content),
	        position = void 0,
	        height = $content.outerHeight(),
	        width = $content.outerWidth(),
	        direction_open = settings.direction_open,
	        direction_close = settings.direction_close;
	
	    settings.height = height;
	    settings.width = width;
	
	    if (direction_open === 'top' || direction_open === 'bottom') position = -height;else if (direction_open === 'left' || direction_open === 'right') position = -width;
	
	    if (position) $($container).css(direction_close, position);
	  },
	      stop_propagation = function stop_propagation(event) {
	    event.stopPropagation();
	  };
	
	  //////////////////////////////////////////
	
	  this.define = function () {
	    var $window = $(window),
	        $body = $('body'),
	        $container = $(settings.container),
	        $hide = $(settings.container + ' > ' + settings.hide);
	
	    // -- Swipe events
	
	    // if(settings.direction_open === 'top' || settings.direction_open === 'bottom')
	    //   $body.hammer().on(settings.swipe_open, pre_swipe_open);
	    // else
	    //   $body.hammer().on(settings.swipe_open, swipe_open);
	    //
	    // $body.hammer().on(settings.swipe_close, swipe_close);
	
	    // $body.data('hammer').get('swipe').set({ direction: Hammer.DIRECTION_ALL });
	
	
	    if (settings.container !== '#CART') {
	      // -- Other events
	
	      $body.click(plugin_motion_views.plugin_close);
	      $hide.click(plugin_motion_views.plugin_close);
	      $container.click(stop_propagation);
	
	      set_start_position();
	    } else if ($container.outerWidth() === $window.width()) set_start_position();
	
	    $window.resize(set_start_position);
	    $window.resize(plugin_motion_views.plugin_close);
	
	    window.APP.add_own_event('plugins_close', pre_plugin_close);
	    window.APP.throw_event(window.EVENTS.plugins.close);
	  };
	
	  this.start = function () {
	    set_start_position();
	  };
	
	  this.plugin_open = plugin_motion_views.plugin_open;
	  this.plugin_close = plugin_motion_views.plugin_close;
	  this.is_open = plugin_motion_views.is_open;
	}; /**
	    * Created by mrskull on 06.01.17.
	    */

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Plugins_Motion_Views = undefined;
	
	var _models = __webpack_require__(19);
	
	var Plugins_Motion_Views = exports.Plugins_Motion_Views = function Plugins_Motion_Views(config) {
	  var models = new _models.Plugins_Motion_Models(config),
	      css = {};
	
	  this.models = models;
	  this.is_open = function () {
	    return models.check_is_open();
	  };
	
	  this.plugin_open = function (event) {
	    if (models.check_possibility_of_opening()) {
	      var container = models.settings.container,
	          hide = models.settings.hide,
	          direction_close = models.settings.direction_close,
	          duration_open = models.settings.duration_open;
	
	      css[direction_close] = 0;
	
	      $(container).stop().animate(css, duration_open, function () {
	        models.change_possibility_of_opening(false);
	      }).children(hide).fadeIn(duration_open);
	
	      var width = $(container).outerWidth();
	
	      if (container === '#CART') $('#GROUND > .ground').addClass('smaller').stop().animate({ 'margin-right': width }, duration_open);
	    }
	  };
	
	  this.plugin_close = function () {
	    if (models.check_is_open()) {
	      var container = models.settings.container,
	          hide = models.settings.hide,
	          direction_open = models.settings.direction_open,
	          direction_close = models.settings.direction_close,
	          duration_close = models.settings.duration_close,
	          width = models.settings.width,
	          height = models.settings.height;
	
	      if (direction_open === 'top' || direction_open === 'bottom') css[direction_close] = -height;else if (direction_open === 'right' || direction_open === 'left') css[direction_close] = -width;
	
	      $(container).stop().animate(css, duration_close, function () {
	        models.change_possibility_of_opening(true);
	      }).children(hide).fadeOut(duration_close);
	
	      if (container === '#CART') $('#GROUND > .ground').removeClass('smaller').stop().animate({ 'margin-right': 0 }, duration_close);
	    }
	  };
	}; /**
	    * Created by mrskull on 06.01.17.
	    */

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Plugins_Motion_Models = undefined;
	
	var _structure = __webpack_require__(9);
	
	var Plugins_Motion_Models = exports.Plugins_Motion_Models = function Plugins_Motion_Models(config) {
	  var that = this;
	
	  this.settings = {
	    container: undefined,
	    content: undefined,
	    hide: '.hide',
	
	    width: undefined,
	    height: undefined,
	
	    can_open_by: undefined,
	    can_open_from: undefined,
	    can_open_to: undefined,
	
	    direction_open: undefined,
	    direction_close: undefined,
	
	    duration_open: undefined,
	    duration_close: undefined
	  };
	
	  var load_settings = function load_settings() {
	    if (typeof config !== 'undefined') {
	      // -- Container
	      if (typeof config.container !== 'undefined') that.settings.container = config.container;
	
	      // -- Children container
	      if (typeof config.content !== 'undefined') that.settings.content = config.container + ' > ' + config.content;
	
	      // -- Witdh & height
	      var $container = $(that.settings.container);
	      that.settings.width = $container.outerWidth();
	      that.settings.height = $container.outerHeight();
	
	      // -- Can open
	      if (typeof config.can_open_by !== 'undefined') that.settings.can_open_by = config.can_open_by;
	
	      if (typeof config.can_open_from !== 'undefined') that.settings.can_open_from = config.can_open_from;
	
	      if (typeof config.can_open_to !== 'undefined') that.settings.can_open_to = config.can_open_to;
	
	      // -- Duration open & close
	      if (typeof config.duration_open !== 'undefined') that.settings.duration_open = config.duration_open;
	
	      if (typeof config.duration_close !== 'undefined') that.settings.duration_close = config.duration_close;
	
	      // -- Swipe & direction
	      if (typeof config.open !== 'undefined') {
	        switch (config.open) {
	          case 'right':
	            that.settings.swipe_open = 'swiperight';
	            that.settings.swipe_close = 'swipeleft';
	            that.settings.direction_open = 'right';
	            that.settings.direction_close = 'left';
	            break;
	
	          case 'left':
	            that.settings.swipe_open = 'swipeleft';
	            that.settings.swipe_close = 'swiperight';
	            that.settings.direction_open = 'left';
	            that.settings.direction_close = 'right';
	            break;
	
	          case 'up':
	            that.settings.swipe_open = 'swipeup';
	            that.settings.swipe_close = 'swipedown';
	            that.settings.direction_open = 'top';
	            that.settings.direction_close = 'bottom';
	            break;
	
	          case 'down':
	            that.settings.swipe_open = 'swipedown';
	            that.settings.swipe_close = 'swipeup';
	            that.settings.direction_open = 'bottom';
	            that.settings.direction_close = 'top';
	            break;
	        }
	      }
	    }
	  };
	
	  load_settings();
	
	  /////////////////////////
	
	  this.state = {
	    is_open: false,
	    is_not_set: true
	  };
	
	  /////////////////////////
	
	  var check_by_sizes = function check_by_sizes() {
	    var width_window = $(window).outerWidth(),
	        height_window = $(window).outerHeight(),
	        posibility = {
	      from: that.settings.can_open_from,
	      to: that.settings.can_open_to
	    };
	
	    if (that.settings.can_open_by === 'width') {
	      if (typeof posibility.from !== 'undefined') return width_window >= posibility.from;else if (typeof posibility.to !== 'undefined') return width_window <= posibility.to;
	    } else if (that.settings.can_open_by === 'height') {
	      if (typeof posibility.from !== 'undefined') return height_window >= posibility.from;else if (typeof posibility.to !== 'undefined') return height_window <= posibility.to;
	    }
	
	    return false;
	  },
	      check_mobile_by_sizes = function check_mobile_by_sizes() {
	    var width_window = parseInt($(window).outerWidth()),
	        max_mobile_width = 1000;
	
	    return width_window < max_mobile_width;
	  };
	
	  this.check_is_open = function () {
	    return this.state.is_open;
	  };
	
	  this.check_is_close = function () {
	    return !this.state.is_open;
	  };
	
	  this.check_possibility_of_swipe = function () {
	    return check_mobile_by_sizes();
	  };
	
	  this.check_possibility_of_opening = function () {
	    if (check_by_sizes()) if (_structure.data_controller.get('can_do_open_plugin')) return this.check_is_close();else if (this.settings.container === '#CART') return this.check_is_close();
	
	    return false;
	  };
	
	  this.change_possibility_of_opening = function (bool) {
	    this.state.is_open = !bool;
	
	    if (this.settings.container !== '#CART') _structure.data_controller.change('can_do_open_plugin', bool);
	  };
	}; /**
	    * Created by mrskull on 06.01.17.
	    */

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Form_Controllers = undefined;
	
	var _models = __webpack_require__(21);
	
	var _controllers = __webpack_require__(22);
	
	var validator = _interopRequireWildcard(_controllers);
	
	var _controllers2 = __webpack_require__(26);
	
	var hide_form = _interopRequireWildcard(_controllers2);
	
	var _controllers3 = __webpack_require__(28);
	
	var auto_form = _interopRequireWildcard(_controllers3);
	
	var _controllers4 = __webpack_require__(31);
	
	var file_converter = _interopRequireWildcard(_controllers4);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// import * as post_button from './post_button/controllers'
	
	var Form_Controllers = exports.Form_Controllers = function Form_Controllers(content_loader_controllers) {
	  var form_models = new _models.Form_Models(content_loader_controllers);
	
	  /**
	   *    Defining private functions
	   */
	
	  var prepare_form_to_send = function prepare_form_to_send(event) {
	    var form_action = $(this).attr('action'),
	        protocol = void 0;
	
	    if (typeof form_action === 'string') protocol = form_action.substring(0, 4);
	
	    if (protocol !== 'http') {
	      event.preventDefault();
	
	      var form_name = $(this).data('name'),
	          url = $(this).attr('action'),
	          form_object = $(this).serialize_object();
	
	      form_models.send(form_name, url, form_object);
	    }
	  },
	      show_hide_form_address = function show_hide_form_address(event) {
	    var $element = $(this).parents('.form_block');
	    event.stopPropagation();
	
	    if ($element.hasClass('visible')) $element.removeClass('visible');else $element.addClass('visible');
	  },
	      show_form_address = function show_form_address(event) {
	    event.stopPropagation();
	
	    $(this).addClass('visible');
	  };
	
	  /**
	   *    Defining public functions
	   */
	
	  this.define = function () {
	    var $container = $(content_loader_controllers.container);
	
	    $('form', $container).submit(prepare_form_to_send);
	
	    $('.form_block', $container).click(show_form_address);
	
	    $('.form_block .title', $container).click(show_hide_form_address);
	
	    validator.define($container);
	    hide_form.define($container);
	    auto_form.define($container);
	    file_converter.define($container);
	    //post_button.define($container);
	  };
	}; /**
	    * Created by mrskull on 24.11.16.
	    */

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by mrskull on 21.01.17.
	 */
	
	var Form_Models = exports.Form_Models = function Form_Models(content_loader_controllers) {
	
	  /**
	   *    Defining settings
	   */
	
	  this.loader_controllers = content_loader_controllers;
	
	  this.variables = {
	    name: undefined
	  };
	
	  /**
	   *    Defining private functions
	   */
	
	  var prepare_post_data = function prepare_post_data(form_name, post_data) {
	    if (!post_data) post_data = {};
	
	    post_data.__form__ = form_name;
	
	    return post_data;
	  };
	
	  /**
	   *    Defining public functions
	   */
	
	  this.send = function (form_name, url, post_data) {
	    post_data = prepare_post_data(form_name, post_data);
	
	    if (typeof this.loader_controllers !== 'undefined') this.loader_controllers.load(url, post_data);else console.error('Valid config object.');
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.define = undefined;
	
	var _checkers = __webpack_require__(23);
	
	var Validators = {};
	
	window.Validators = Validators;
	
	var define = exports.define = function define($container) {
	
	  $('form[data-test=yes]', $container).each(function () {
	    var name = $(this).data('name'),
	        type = $(this).data('type');
	    if (name || type) {
	      Validators[name] = new _checkers.Constructor_Validator(name, type);
	
	      // Sprawdzanie wszystkich pól by odblokować guzik w razie ich poprawnego wypełnienia
	      var fields_of_form = Validators[name].hasErrors();
	      for (var key in fields_of_form) {
	        if (fields_of_form.hasOwnProperty(key)) {
	          var $field = $('form[data-name=' + name + '] *[name=' + key + ']');
	
	          if ($field.val()) validate($field);
	        }
	      }
	    } else console.error('Validation Error: Incorrect or empty form name/type.');
	  });
	
	  $('form[data-test=yes] .test').keyup(catch_event_validate).change(catch_event_validate);
	
	  $('.show_password').change(function () {
	    if ($(this).is(':checked')) show_password(this);else hide_password(this);
	  });
	};
	
	//////////////////////////////   VIEWS VALIDATOR   ///////////////////////////////////
	
	var running_validator = false,
	    form_name = void 0,
	    $form = void 0,
	    Validator = void 0,
	    field = void 0,
	    field_name = void 0,
	    field_value = void 0;
	
	var catch_event_validate = function catch_event_validate() {
	  validate(this);
	};
	
	var validate = function validate(response_field) {
	  if (running_validator === false) {
	    running_validator = true;
	
	    field = response_field;
	
	    form_name = $(field).parents('form').data('name');
	    $form = $('form[data-name=' + form_name + ']');
	    Validator = Validators[form_name];
	    field_name = $(field).attr('name');
	    field_value = $(field).val();
	
	    // Sprawdzanie pojedynczego pola poprzez checker przypisany do jego nazwy
	    Validator.field(field_name, field_value, show_status);
	  }
	};
	
	var show_status = function show_status(result) {
	  if (result) {
	    var $field = $(field),
	        $status = $field.parent().find('.status');
	
	    var bool = result.bool,
	        message = result.message,
	        correction = result.correction;
	
	    Validator.change_status_field(field_name, bool);
	
	    // Sprawdź czy istnieje poprawiona wartość poli i jeśli tak to przypisz do tego pola.
	    if ($field.val() != correction && typeof correction !== 'undefined' && correction !== '') $field.val(correction);
	
	    if (bool) {
	      $field.removeClass('form_error');
	      $status.html('').fadeOut(200);
	    } else if (typeof message === 'undefined') {
	      $field.addClass('form_error');
	      $status.html('').fadeOut(200);
	    } else {
	      $field.addClass('form_error');
	      $status.html(message).fadeIn(200);
	    }
	  }
	
	  var test_form = Validator.check_list_field();
	  change_status_blockade(test_form);
	
	  running_validator = false;
	};
	
	var change_status_blockade = function change_status_blockade(test_form) {
	  if (typeof test_form === 'boolean') {
	    var $button = $form.find('*[type=submit]');
	
	    if (test_form) $button.prop('disabled', false);else $button.prop('disabled', true);
	  }
	};
	
	//////////////////////////////   VIEWS - SHOW/HIDE PASSWORD   ///////////////////////////////////
	
	var show_password = function show_password(checker) {
	  var $checker = $(checker),
	      $field = $checker.parent().find('input[name=password]');
	  $field.attr('type', 'text');
	};
	
	var hide_password = function hide_password(checker) {
	  var $checker = $(checker),
	      $field = $checker.parent().find('input[name=password]');
	  $field.attr('type', 'password');
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Constructor_Validator = undefined;
	
	var _views = __webpack_require__(24);
	
	Object.defineProperty(exports, 'Constructor_Validator', {
	  enumerable: true,
	  get: function get() {
	    return _views.Constructor_Validator;
	  }
	});
	
	
	/////////////////////////////  Prepare checkers  ///////////////////////////////
	
	_views.Constructor_Validator.prototype.types = {};
	
	/////////////////////////////  Checkers  ///////////////////////////////
	
	_views.checker.create_checker('email', function (value, callback) {
	  var result = _views.checker.create_result(),
	      re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	  if (_views.checker.check_condition(re.test(value))) result = _views.checker.create_error('It\'s not email.');
	
	  callback(result);
	});
	
	_views.checker.create_checker('email_not_in_db', function (value, callback) {
	  var result = _views.checker.create_result(),
	      re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	  if (_views.checker.check_condition(re.test(value))) {
	    result = _views.checker.create_error('It\'s not email.');
	    callback(result);
	  } else {
	    _views.checker.exist_in_db('email', value, callback, 'Someone already has that email. Try another?');
	  }
	});
	
	_views.checker.create_checker('password', function (value, callback) {
	  var result = _views.checker.create_result();
	
	  if (_views.checker.check_condition(value.length >= 8)) result = _views.checker.create_error('Short passwords are easy to guess. Try one with at least 8 characters.');
	
	  callback(result);
	});
	
	_views.checker.create_checker('proper_name', function (value, callback) {
	  value = value.charAt(0).toUpperCase() + value.slice(1);
	
	  var result = _views.checker.create_result(value);
	
	  if (_views.checker.check_condition(value.length >= 3)) result = _views.checker.create_error('The name is too short.', value);
	
	  callback(result);
	});
	
	_views.checker.create_checker('number', function (value, callback) {
	  value = value.replace(/\s/g, '');
	
	  var result = _views.checker.create_result(value);
	
	  if (_views.checker.check_condition(value.length === 9)) result = _views.checker.create_error('Number length is 9 digits.', value);
	
	  if (_views.checker.check_condition(!isNaN(value))) result = _views.checker.create_error('The number must consist of digits.', value);
	
	  callback(result);
	});
	
	_views.checker.create_checker('full_name', function (value, callback) {
	  value = value.replace(/\w\S*/g, function (txt) {
	    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	  });
	  value = value.replace('  ', ' ');
	
	  var result = _views.checker.create_result(value),
	      split = value.split(' ');
	
	  if (_views.checker.check_condition(split.length >= 2 && split[0] !== '' && split[1] !== '')) result = _views.checker.create_error('Full name consists of minimum 2 word.', value);
	
	  callback(result);
	});
	
	_views.checker.create_checker('no_empty', function (value, callback) {
	  var result = _views.checker.create_result();
	
	  if (_views.checker.check_condition(value !== '')) result = _views.checker.create_error("You can't leave this empty.", value);
	
	  callback(result);
	});
	
	////////////////      LENGTH      ///////////////////
	
	_views.checker.create_checker('length_3', function (value, callback) {
	  var result = _views.checker.create_result();
	
	  if (_views.checker.check_condition(value.length >= 3)) result = _views.checker.create_error('It\'s too short.', value);
	
	  callback(result);
	});
	
	////////////////////////////////////////////

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Constructor_Validator = exports.checker = undefined;
	
	var _config = __webpack_require__(25);
	
	var _structure = __webpack_require__(9);
	
	//////////////////////////////////////////////////////
	
	var checker = exports.checker = {
	
	  create_checker: function create_checker(name, callback) {
	    Constructor_Validator.prototype.types[name] = {
	      validate: callback
	    };
	  },
	
	  check_condition: function check_condition(condition) {
	    return !condition;
	  },
	
	  create_result: function create_result(correction) {
	    var result = {
	      bool: true
	    };
	
	    if (typeof correction !== 'undefined') result.correction = correction;
	
	    return result;
	  },
	
	  create_error: function create_error(message, correction) {
	    var result = {
	      bool: false
	    };
	
	    if (typeof message !== 'undefined') result.message = message;
	
	    if (typeof correction !== 'undefined') result.correction = correction;
	
	    return result;
	  },
	
	  exist_in_db: function exist_in_db(name, value, callback, message) {
	    if (name && value) {
	      var post_data = {
	        __exist__: name,
	        value: value,
	        csrfmiddlewaretoken: _structure.data_controller.get('csrf_token')
	      };
	
	      $.post('', post_data).done(function (data) {
	        if (data.__exist__ !== 'undefined') if (data.__exist__ === 'true') callback(checker.create_error(message));else if (data.__exist__ === 'false') callback(checker.create_result());
	      }).fail(function () {
	        console.error('Something is wrong.');
	        callback(checker.create_error('Validator, don\' work. Please, refresh website.'));
	      });
	    }
	  }
	};
	
	///////////////////////////////////////////////////////////////////////////////////////
	
	var Constructor_Validator = exports.Constructor_Validator = function Constructor_Validator(form_name, form_type) {
	  // define base veriable
	
	  var fields_of_form = void 0,
	      $form = $('form[data-name=' + form_name + ']');
	  this.types = Constructor_Validator.prototype.types;
	  this.config = _config.list_configs[form_type];
	
	  if (!this.config) console.error('Validation Error: Invalid form type of list configs.');
	
	  // definitions function
	
	  this.change_status_field = function (name, value) {
	    if (typeof fields_of_form[name] === 'boolean') {
	      if (typeof value === 'boolean') fields_of_form[name] = value;else console.error('Validation Error: Invalid value in the field ' + value + '.');
	    } else console.error('Validation Error: No manual for the field ' + name + '.');
	  };
	
	  this.check_list_field = function () {
	    for (var key in fields_of_form) {
	      if (fields_of_form.hasOwnProperty(key)) if (fields_of_form[key] === false) return false;
	    }return true;
	  };
	
	  var prepare_list_fields = function prepare_list_fields() {
	    var fields = $form.serializeArray(),
	        obj = {},
	        i = void 0,
	        length = fields.length;
	
	    for (i = 0; i < length; ++i) {
	      if ($form.find('*[name=' + fields[i].name + ']').hasClass('test')) obj[fields[i].name] = false;
	    }return obj;
	  };
	
	  fields_of_form = prepare_list_fields();
	
	  ////////////////////////////////////////////////////
	
	  this.field = function (name, value, callback) {
	    if (name && value) {
	      var type = void 0,
	          _checker = void 0;
	
	      type = this.config[name];
	      _checker = this.types[type];
	
	      if (!_checker) {
	        console.error('Validation Error: No manual for the key ' + name + '.');
	        return false;
	      }
	
	      _checker.validate(value, callback);
	    } else if (value !== '') {
	      var result = checker.create_error('Incorrect value ' + name);
	      callback(result);
	    } else callback(checker.create_error());
	  };
	
	  this.hasErrors = function () {
	    return fields_of_form;
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var list_configs = exports.list_configs = {};
	
	list_configs.register = {
	  username: 'length_3',
	  password: 'password',
	  email: 'email_not_in_db'
	};
	
	list_configs.login = {
	  email: 'email',
	  password: 'password'
	};
	
	list_configs.user_address = {
	  full_name: 'full_name',
	  address_line_1: 'no_empty',
	  city: 'proper_name',
	  region: 'proper_name',
	  postcode: 'no_empty',
	  country: 'proper_name'
	};
	
	list_configs.forgot_password = {
	  email: 'email'
	};
	
	list_configs.email_contact = {
	  client: 'proper_name',
	  email: 'email',
	  message: 'no_empty'
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.define = undefined;
	
	var _views = __webpack_require__(27);
	
	var form = _interopRequireWildcard(_views);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 *    Defining events
	 */
	
	var define = exports.define = function define($container) {
	  var $otoczka_pola = $('.hide_form > .otoczka_pola', $container);
	
	  $otoczka_pola.children('div').click(edit_field);
	
	  $otoczka_pola.children('button').click(save_or_edit);
	};
	
	/**
	 *    Defining private event functions
	 */
	
	/**
	 * Created by mrskull on 17.01.17.
	 */
	
	var edit_field = function edit_field() {
	  var $div = $(this),
	      $field = $div.parent().children('input'),
	      $button = $div.parent().children('button');
	
	  // Change words to input
	  $div.fadeOut(100, function () {
	    $field.fadeIn(100, function () {
	      $(this).focus();
	    });
	    $button.html('Save');
	  });
	};
	
	var save_or_edit = function save_or_edit() {
	  var $button = $(this),
	      data_button = $button.data('type'),
	      $div = $button.parent().children('div'),
	      $field = $button.parent().children('input');
	
	  var save_data = function save_data(html, status) {
	    if (status === 'success')
	      // Change input to words
	      $field.fadeOut(100, function () {
	        $div.html($field.val());
	        $div.fadeIn(100);
	        $button.change_data('type', 'edit').html('Edit');
	      });else $button.html('Save: error');
	  };
	
	  if (data_button === 'edit')
	    // Change words to input
	    $div.fadeOut(100, function () {
	      $field.fadeIn(100, function () {
	        $(this).focus();
	      });
	      $button.change_data('type', 'save').html('Save');
	    });else if (data_button === 'save') form.send(this, save_data);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by mrskull on 17.01.17.
	 */
	
	/**
	 *    Defining private functions
	 */
	
	var send_prepare_post = function send_prepare_post(name, value) {
	  return {
	    __edit__: name,
	    value: value
	  };
	};
	
	/**
	 *    Defining public functions
	 */
	
	var send = exports.send = function send(field, callback) {
	  var $field = $(field),
	      field_name = $field.attr('name'),
	      field_value = $field.val(),
	      post_data = send_prepare_post(field_name, field_value);
	
	  window.APP.http_request(undefined, post_data, callback);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.define = undefined;
	
	var _views = __webpack_require__(29);
	
	var add_event_on_fields = function add_event_on_fields(auto_form_views) {
	  var settings = auto_form_views.models.settings,
	      $field = void 0;
	
	  settings.fields.each(function () {
	    $field = $(this);
	
	    if ($field.is(':checkbox')) $field.change(auto_form_views.send_checkbox);else if ($field.is(':text')) $field.change(auto_form_views.send_default)
	    //.keyup(auto_form_views.send_on_key_up)
	    .keydown(auto_form_views.send_on_enter);else if ($field.is('select')) $field.change(auto_form_views.send_default);
	  });
	},
	    do_nothing = function do_nothing(event) {
	  event.preventDefault();
	  return false;
	}; /**
	    * Created by mrskull on 17.01.17.
	    */
	
	var define = exports.define = function define($container) {
	  var $forms = $('form.auto_form, .auto_form form', $container);
	
	  $forms.each(function () {
	    var $form = $(this),
	        config = {
	      form: $form,
	      fields: $('.auto_field', $form)
	    },
	        auto_form_views = new _views.Auto_Form_Views(config);
	
	    $form.submit(do_nothing);
	    add_event_on_fields(auto_form_views);
	  });
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Auto_Form_Views = undefined;
	
	var _models = __webpack_require__(30);
	
	var Auto_Form_Views = exports.Auto_Form_Views = function Auto_Form_Views(config) {
	  var models = new _models.Auto_Form_Models(config);
	
	  this.models = models;
	
	  /**
	   *    Defining public functions
	   */
	
	  this.send_checkbox = function () {
	    var $field = $(this),
	        post_data = {};
	
	    post_data['__' + models.settings.origin + '__'] = $field.data('name');
	    post_data['name'] = $field.attr('name');
	
	    if ($field.is(':checked')) post_data['action'] = 'append';else post_data['action'] = 'delete';
	
	    send(post_data);
	  };
	
	  this.send_default = function () {
	    var $field = $(this),
	        post_data = {};
	
	    post_data['__' + models.settings.origin + '__'] = $field.data('name');
	    post_data['value'] = $field.val();
	
	    send(post_data);
	  };
	
	  // let check_is_key_code_printable_or_functional = function(event)
	  // {
	  //   let keycode = event.keyCode;
	  //
	  //   let valid =
	  //     (keycode > 47 && keycode < 58)   ||   // number keys
	  //     keycode === 8 || keycode === 46 ||    // backspace & delete
	  //     keycode === 32 || keycode === 13   || // spacebar & return key(s) (if you want to allow carriage returns)
	  //     (keycode > 64 && keycode < 91)   ||   // letter keys
	  //     (keycode > 95 && keycode < 112)  ||   // numpad keys
	  //     (keycode > 185 && keycode < 193) ||   // ;=,-./` (in order)
	  //     (keycode > 218 && keycode < 223);     // [\]' (in order)
	  //
	  //   return valid;
	  // };
	
	
	  // this.send_on_key_up = function(event)
	  // {
	  //   if(check_is_key_code_printable_or_functional(event))
	  //   {
	  //     let
	  //       $field = $(this),
	  //       post_data = {};
	  //
	  //     post_data['__'+ models.settings.origin +'__'] = $field.data('name');
	  //     post_data['value'] = $field.val();
	  //
	  //     send(post_data);
	  //   }
	  // };
	
	
	  var check_is_key_code_enter = function check_is_key_code_enter(event) {
	    return event.keyCode === 13;
	  };
	
	  this.send_on_enter = function (event) {
	    if (check_is_key_code_enter(event)) {
	      event.preventDefault();
	      var $field = $(this),
	          post_data = {};
	
	      post_data['__' + models.settings.origin + '__'] = $field.data('name');
	      post_data['value'] = $field.val();
	
	      models.settings.delay = 0;
	
	      send(post_data);
	    }
	  };
	
	  /**
	   *    Defining private functions
	   */
	
	  var send = function send(post_data) {
	    window.APP.http_request(models.settings.action, post_data, function () {
	      APP.DATA = {
	        redirect: '/products/'
	      };
	
	      if (typeof models.settings.delay !== 'undefined') APP.DATA.delay = models.settings.delay;else APP.DATA.delay = 1000;
	
	      APP.throw_event(window.EVENTS.redirect);
	    });
	  };
	}; /**
	    * Created by mrskull on 17.01.17.
	    */
	
	/**
	 *    Defining private functions
	 */

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by mrskull on 17.01.17.
	 */
	
	var Auto_Form_Models = exports.Auto_Form_Models = function Auto_Form_Models(config) {
	  var that = this;
	
	  this.settings = {
	    form: undefined,
	    fields: undefined,
	
	    action: undefined,
	    origin: undefined,
	    target: undefined,
	
	    delay: undefined
	  };
	
	  var load_settings = function load_settings() {
	    if (typeof config !== 'undefined') {
	      // -- Form
	      if (typeof config.form !== 'undefined') {
	        that.settings.form = config.form;
	
	        var $form = that.settings.form;
	        that.settings.action = $form.attr('action');
	        that.settings.origin = $form.data('origin');
	        that.settings.target = $form.data('target');
	      }
	
	      // -- Fields
	      if (typeof config.fields !== 'undefined') that.settings.fields = config.fields;
	    }
	  };
	
	  load_settings();
	
	  /////////////////////////
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.define = undefined;
	
	var _views = __webpack_require__(32);
	
	var image_convert_views = _interopRequireWildcard(_views);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var define = exports.define = function define($container) {
	  var views = image_convert_views,
	      settings = views.models.settings,
	      $forms = $(settings.form, $container),
	      $file_fields = $(settings.input_file, $forms);
	
	  $file_fields.each(function (i, field) {
	    $(field).change(function () {
	      if (field.files[0]) {
	        var callback = new views.Callback_Functions(field);
	
	        views.get_base64(field.files[0], callback);
	      }
	    }).parent().children(settings.button_shell).click(function () {
	      $(field).click();
	    });
	  });
	}; /**
	    * Created by mrskull on 23.01.17.
	    */

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Callback_Functions = exports.get_base64 = exports.settings = exports.models = undefined;
	
	var _models = __webpack_require__(33);
	
	var image_convert_models = _interopRequireWildcard(_models);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var models = exports.models = image_convert_models,
	    settings = exports.settings = models.settings,
	    get_base64 = exports.get_base64 = function get_base64(file, callback) {
	  callback.loading();
	
	  var reader = new FileReader();
	  reader.readAsDataURL(file);
	
	  reader.onload = function () {
	    callback.done(reader.result);
	  };
	
	  reader.onerror = function (error) {
	    callback.error(error);
	  };
	},
	    Callback_Functions = exports.Callback_Functions = function Callback_Functions(field) {
	  var $field = $(field),
	      $parent_field = $field.parent(),
	      $button_shell = $parent_field.children(settings.button_shell);
	
	  this.loading = function () {
	    $button_shell.html('Coverting...');
	  };
	
	  this.done = function (result) {
	    var hidden_input = settings.input_base64.start + field.name + settings.input_base64.end;
	
	    $(hidden_input).val(result);
	    setTimeout(function () {
	      $button_shell.html('Is ready / change');
	    }, 500);
	  };
	
	  this.error = function () {
	    setTimeout(function () {
	      $button_shell.html('Error / select again');
	    }, 500);
	  };
	}; /**
	    * Created by mrskull on 23.01.17.
	    */

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by mrskull on 23.01.17.
	 */
	
	var settings = exports.settings = {
	  form: 'form',
	  input_file: 'input[type=file]',
	  button_shell: '.file_shell button',
	  input_base64: {
	    start: 'input[name=',
	    end: '_base64]'
	  }
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reload = exports.open_or_close = exports.plugin_close = exports.plugin_open = exports.start = exports.define = undefined;
	
	var _controllers = __webpack_require__(13);
	
	var _controllers2 = __webpack_require__(17);
	
	var _controllers3 = __webpack_require__(20);
	
	var _controllers4 = __webpack_require__(35);
	
	/**
	 *    Defining private variables
	 */
	
	/**
	 * Created by mrskull on 07.01.17.
	 */
	
	var cart_loader_controllers = new _controllers.Plugins_Loader_Controllers({
	  name: 'cart',
	  url: '/cart/',
	
	  container: '#CART > .cart',
	
	  auto_first_loading: true,
	  load_with_page: false
	}),
	    cart_motion_controllers = new _controllers2.Plugins_Motion_Controllers({
	  container: '#CART',
	  content: '.cart',
	  open: 'left',
	  can_open_by: 'width',
	  can_open_from: 0,
	  duration_open: 200,
	  duration_close: 200
	}),
	    post_button_controllers = new _controllers4.Post_Button_Controllers({
	  container: '#CART > .cart',
	  callback: cart_loader_controllers.reload }),
	    cart_form_controllers = new _controllers3.Form_Controllers(cart_loader_controllers),
	    manage_key = function manage_key(event) {
	  if (event.keyCode === 27) cart_motion_controllers.plugin_close();
	
	  if (event.ctrlKey && event.shiftKey && event.keyCode === 88) {
	    event.preventDefault();
	    if (cart_motion_controllers.is_open()) cart_motion_controllers.plugin_close();else cart_motion_controllers.plugin_open();
	  }
	};
	
	/**
	 *    Defining public functions
	 */
	
	var define = exports.define = function define() {
	  cart_form_controllers.define();
	  cart_motion_controllers.define();
	  post_button_controllers.define();
	
	  $('.cart-close', $('#CART')).click(cart_motion_controllers.plugin_close);
	
	  $('body').keydown(manage_key);
	},
	    start = exports.start = function start() {
	  cart_loader_controllers.define();
	  cart_motion_controllers.start();
	},
	    plugin_open = exports.plugin_open = cart_motion_controllers.plugin_open,
	    plugin_close = exports.plugin_close = cart_motion_controllers.plugin_close,
	    open_or_close = exports.open_or_close = function open_or_close() {
	  if (cart_motion_controllers.is_open()) plugin_close();else plugin_open();
	},
	    reload = exports.reload = function reload() {
	  cart_motion_controllers.plugin_open();
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Post_Button_Controllers = undefined;
	
	var _views = __webpack_require__(36);
	
	var Post_Button_Controllers = exports.Post_Button_Controllers = function Post_Button_Controllers(config) {
	  if (typeof config === 'undefined' && typeof config.container === 'undefined') {
	    console.error('Exeption error: invalid container.');
	    return {};
	  }
	
	  var buttons_views = {},
	      manage_buttons = function manage_buttons(event) {
	    event.preventDefault();
	    event.stopPropagation();
	
	    var button_name = $(this).data('name');
	
	    if (buttons_views[button_name]) buttons_views[button_name].start();else console.error('Button "' + button_name + '" doesn\'t exsist');
	  },
	      create_button_views = function create_button_views() {
	    var button_name = $(this).data('name');
	    config.button = this;
	    config.button_name = button_name;
	    config.button_action = $(this).data('action');
	    config.button_value = $(this).data('value');
	    config.button_reload = $(this).data('reload');
	    config.button_url = $(this).data('url');
	    config.button_html = $(this).html();
	
	    buttons_views[button_name] = new _views.Post_Button_Views(config);
	  };
	
	  this.define = function () {
	    var $post_buttons = $('.post_button', config.container);
	
	    $post_buttons.each(create_button_views);
	
	    $post_buttons.click(manage_buttons);
	  };
	}; /**
	    * Created by mrskull on 17.12.16.
	    */

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Post_Button_Views = undefined;
	
	var _models = __webpack_require__(37);
	
	var Post_Button_Views = exports.Post_Button_Views = function Post_Button_Views(config) {
	  var models = new _models.Post_Button_Models(config),
	      start_loading = function start_loading() {
	    models.state.is_loading = true;
	    $(models.settings.button).html(models.settings.text_loading);
	  },
	      is_error = function is_error(JSON_response, status) {
	    if (status !== 'success') {
	      $(models.settings.button).html(models.settings.text_error);
	      return true;
	    }
	
	    var response = JSON.parse(JSON_response);
	
	    if (response.__button__ !== 'true') {
	      $(models.settings.button).html(models.settings.text_error);
	      return true;
	    }
	
	    return false;
	  },
	      reload_plugins = function reload_plugins() {
	    var plugins = models.settings.button_reload,
	        plugins_array = void 0,
	        array_length = void 0;
	
	    if (!plugins && typeof plugins === 'string') return false;
	
	    plugins_array = plugins.split(' ');
	    array_length = plugins_array.length;
	
	    for (var i = 0; i < array_length; ++i) {
	      if (plugins_array[i]) {
	        window.APP.DATA.delay = 200;
	        window.APP.throw_event(window.EVENTS.plugins['reload_' + plugins_array[i]]);
	      }
	    }
	  },
	      end_loading = function end_loading(JSON_response, status) {
	    models.state.is_loading = false;
	
	    if (is_error(JSON_response, status)) return false;
	
	    $(models.settings.button).html(models.settings.text_done);
	
	    reload_plugins();
	  };
	
	  this.start = function () {
	    if (models.is_loading()) return false;
	
	    start_loading();
	    models.send_post(end_loading);
	  };
	
	  this.models = models;
	}; /**
	    * Created by mrskull on 18.12.16.
	    */

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by mrskull on 31.01.17.
	 */
	
	var Post_Button_Models = exports.Post_Button_Models = function Post_Button_Models(config) {
	  var that = this;
	
	  this.settings = {
	    container: undefined,
	    button: undefined,
	    button_name: undefined,
	    button_action: undefined,
	    button_value: undefined,
	    button_reload: undefined,
	    button_url: undefined,
	    callback: undefined,
	
	    text_loading: 'Sending...',
	    text_done: "It's done!",
	    text_error: 'Error / Resend',
	    text_standard: undefined
	  };
	
	  var load_settings = function load_settings() {
	    if (typeof config !== 'undefined') {
	      window.APP.add_if_isset(config, that.settings, 'container');
	
	      window.APP.add_if_isset(config, that.settings, 'callback');
	
	      window.APP.add_if_isset(config, that.settings, 'button');
	
	      window.APP.add_if_isset(config, that.settings, 'button_name');
	
	      window.APP.add_if_isset(config, that.settings, 'button_action');
	
	      window.APP.add_if_isset(config, that.settings, 'button_value');
	
	      window.APP.add_if_isset(config, that.settings, 'button_reload');
	
	      window.APP.add_if_isset(config, that.settings, 'button_url');
	
	      window.APP.add_if_isset(config, that.settings, 'button_html', 'text_standard');
	    }
	  };
	
	  load_settings();
	
	  /////////////////////////
	
	  this.state = {
	    is_loading: false
	  };
	
	  this.is_loading = function () {
	    return that.state.is_loading;
	  };
	
	  /////////////////////////
	
	  var prepare_post_data = function prepare_post_data(action, value) {
	    var obj = { __button__: action };
	
	    if (value) obj.value = value;
	
	    return obj;
	  };
	
	  this.send_post = function (callback) {
	    setTimeout(function () {
	      var url = that.settings.button_url,
	          action = that.settings.button_action,
	          value = that.settings.button_value,
	          post_data = prepare_post_data(action, value);
	
	      window.APP.http_request(url, post_data, callback);
	    }, 200);
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.plugin_open = exports.start = exports.define = undefined;
	
	var _controllers = __webpack_require__(13);
	
	var _controllers2 = __webpack_require__(17);
	
	var _controllers3 = __webpack_require__(34);
	
	var cart_controllers = _interopRequireWildcard(_controllers3);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 *    Defining private variables
	 */
	
	var navigation_loader_controllers = void 0,
	    config_loader = {
	  name: 'navigation',
	  url: '/navigation/',
	
	  container: '#NAVIGATION > .navigation',
	
	  auto_first_loading: true
	},
	    navigation_motion_controllers = void 0,
	    config_motion = {
	  container: '#NAVIGATION',
	  content: '.navigation',
	  open: 'down',
	
	  can_open_by: 'width',
	  can_open_to: 650,
	
	  duration_open: 300,
	  duration_close: 100
	};
	
	/**
	 *    Defining public functions
	 */
	
	/**
	 * Created by mrskull on 24.11.16.
	 */
	
	var define = exports.define = function define() {
	  navigation_motion_controllers.define();
	
	  $('#NAVIGATION .navigation-secondary-cart > *').click(cart_controllers.open_or_close);
	},
	    start = exports.start = function start() {
	  // -- Loader configuration
	  navigation_loader_controllers = new _controllers.Plugins_Loader_Controllers(config_loader);
	  navigation_loader_controllers.define();
	
	  // -- Motion configuration
	  navigation_motion_controllers = new _controllers2.Plugins_Motion_Controllers(config_motion);
	  navigation_motion_controllers.start();
	},
	    plugin_open = exports.plugin_open = function plugin_open() {
	  navigation_motion_controllers.plugin_open();
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.start = exports.define = undefined;
	
	var _controllers = __webpack_require__(13);
	
	var _controllers2 = __webpack_require__(12);
	
	var searcher_controllers = _interopRequireWildcard(_controllers2);
	
	var _controllers3 = __webpack_require__(38);
	
	var navigation_controllers = _interopRequireWildcard(_controllers3);
	
	var _controllers4 = __webpack_require__(34);
	
	var cart_controllers = _interopRequireWildcard(_controllers4);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 *    Defining private variables
	 */
	
	/**
	 * Created by mrskull on 08.01.17.
	 */
	
	var header_loader_events = void 0,
	    config_loader = {
	  name: 'navigation',
	  url: '/navigation/',
	
	  container: '#HEADER > .header',
	
	  auto_first_loading: true
	};
	
	/**
	 *    Defining public functions
	 */
	
	var define = exports.define = function define() {
	  var $header = $('#HEADER');
	
	  $('.navigation-mobile-filter button', $header).click(searcher_controllers.plugin_open);
	
	  $('.navigation-mobile-navigation button', $header).click(navigation_controllers.plugin_open);
	
	  $('.navigation-mobile-cart button', $header).click(cart_controllers.open_or_close);
	
	  $('.navigation-secondary-searcher > *', $header).click(searcher_controllers.plugin_open);
	
	  $('.navigation-secondary-cart > *', $header).click(cart_controllers.open_or_close);
	},
	    start = exports.start = function start() {
	  header_loader_events = new _controllers.Plugins_Loader_Controllers(config_loader);
	  header_loader_events.define();
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.close = exports.open = exports.define = undefined;
	
	var _views = __webpack_require__(41);
	
	var dialog_views = _interopRequireWildcard(_views);
	
	var _controllers = __webpack_require__(43);
	
	var interior_dialog_controllers = _interopRequireWildcard(_controllers);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 *    Defining public functions
	 */
	
	/**
	 * Created by mrskull on 29.12.16.
	 */
	
	var define = exports.define = function define() {
	  var selectors = dialog_views.selectors;
	
	  $(selectors.container).click(close_with_cancel_event);
	  $(selectors.window).click(cancel_event);
	
	  $(selectors.external_buttons).click(open);
	
	  window.APP.add_own_event('dialog_close', close_with_delay);
	
	  interior_dialog_controllers.define();
	};
	
	/**
	 *    Defining events functions
	 */
	
	var close_with_cancel_event = function close_with_cancel_event(event) {
	  cancel_event(event);
	  close();
	},
	    close_with_delay = function close_with_delay() {
	  var delay = void 0;
	
	  if (window.APP.DATA.delay) delay = window.APP.DATA.delay;else delay = 2000;
	
	  setTimeout(close, delay);
	},
	    cancel_event = function cancel_event(event) {
	  event.stopPropagation();
	};
	
	/**
	 *    Defining public functions
	 */
	
	var open = exports.open = function open() {
	  var $button = $(this),
	      type = $button.data('type'),
	      name = $button.data('name'),
	      url = $button.data('url'),
	      value = $button.data('value');
	
	  dialog_views.open(type, name, url, value);
	},
	    close = exports.close = dialog_views.close;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.close = exports.open = exports.selectors = undefined;
	
	var _models = __webpack_require__(42);
	
	var dialog_models = _interopRequireWildcard(_models);
	
	var _controllers = __webpack_require__(43);
	
	var interior_dialog_controllers = _interopRequireWildcard(_controllers);
	
	var _models2 = __webpack_require__(45);
	
	var interior_dialog_models = _interopRequireWildcard(_models2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 *    Defining public functions
	 */
	
	var selectors = exports.selectors = dialog_models.selectors;
	
	/**
	 *    Defining private functions
	 */
	
	/**
	 * Created by mrskull on 29.12.16.
	 */
	
	var show = function show() {
	  $(selectors.container).fadeIn(200);
	},
	    hide = function hide() {
	  $(selectors.container).fadeOut(200, clear_data);
	},
	    clear_data = function clear_data() {
	  $(selectors.header).html('Loading...');
	
	  $(selectors.content).html('Loading...');
	},
	    save_type_and_name = function save_type_and_name(type, name, value) {
	  var result_type = void 0,
	      result_name = void 0,
	      default_type = 'alert',
	      default_name = 'default';
	
	  if (type) result_type = type;else result_type = default_type;
	
	  if (name) result_name = name;else result_name = default_name;
	
	  dialog_models.variables.type = result_type;
	  dialog_models.variables.name = result_name;
	
	  interior_dialog_models.variables.button_type = result_type;
	  interior_dialog_models.variables.button_name = result_name;
	  interior_dialog_models.variables.button_value = value;
	};
	
	///////////////////////////////////////
	
	var open = exports.open = function open(type, name, url, value) {
	  save_type_and_name(type, name, value);
	
	  interior_dialog_controllers.load(url, undefined, show);
	},
	    close = exports.close = function close() {
	  hide();
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by mrskull on 29.12.16.
	 */
	
	var settings = exports.settings = {
	  url: '/dialog/'
	},
	    variables = exports.variables = {
	  type: '',
	  name: '',
	  content: ''
	},
	    selectors = exports.selectors = {
	  container: '#DIALOG'
	};
	
	selectors.window = selectors.container + ' > .dialog';
	selectors.header = selectors.window + ' > .dialog-header';
	selectors.content = selectors.window + ' > .dialog-content';
	selectors.external_buttons = '.dialog_button';

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.define = exports.recognize_button = exports.load = undefined;
	
	var _views = __webpack_require__(44);
	
	var interior_dialog_views = _interopRequireWildcard(_views);
	
	var _controllers = __webpack_require__(40);
	
	var _controllers2 = __webpack_require__(20);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/////////////////////////////
	
	var load = exports.load = interior_dialog_views.load; /**
	                                                       * Created by mrskull on 21.01.17.
	                                                       */
	
	var selectors = interior_dialog_views.selectors,
	    variables = interior_dialog_views.variables,
	    dialog_form_controllers = new _controllers2.Form_Controllers(interior_dialog_views);
	
	var recognize_button = exports.recognize_button = function recognize_button() {
	  var $button = $(this);
	
	  variables.button_type = $button.data('type');
	  variables.button_name = $button.data('name');
	
	  switch (variables.button_name) {
	    case 'cancel':
	      (0, _controllers.close)();
	      break;
	
	    case 'send':
	      $('form', selectors.container).submit();
	      break;
	
	    default:
	      console.error('Dialog error: Don\'t recognize button.');
	  }
	},
	    define = exports.define = function define() {
	  $(selectors.buttons).click(recognize_button);
	  dialog_form_controllers.define();
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.load = exports.container = exports.variables = exports.selectors = undefined;
	
	var _models = __webpack_require__(45);
	
	var interior_dialog_models = _interopRequireWildcard(_models);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var selectors = exports.selectors = interior_dialog_models.selectors,
	    variables = exports.variables = interior_dialog_models.variables,
	    container = exports.container = selectors.container,
	    load = exports.load = interior_dialog_models.load; /**
	                                                        * Created by mrskull on 21.01.17.
	                                                        */

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.load = exports.prepare_post_data = exports.variables = exports.selectors = undefined;
	
	var _controllers = __webpack_require__(13);
	
	var _models = __webpack_require__(42);
	
	/**
	 * Created by mrskull on 21.01.17.
	 */
	
	var config_loader = {
	  name: 'dialog',
	
	  container: '#DIALOG > .dialog',
	
	  duration: {
	    show: 0,
	    hide: 0
	  }
	},
	    dialog_loader_controllers = new _controllers.Plugins_Loader_Controllers(config_loader);
	
	///////////////////////////////////////
	
	var selectors = exports.selectors = {
	  container: _models.selectors.content,
	  buttons: _models.selectors.content + ' button.dialog-content-button'
	},
	    variables = exports.variables = {
	  button_type: '',
	  button_name: '',
	  button_url: '',
	  button_value: '',
	  post_data: {}
	},
	    prepare_post_data = exports.prepare_post_data = function prepare_post_data(post_data) {
	  if (!post_data) {
	    variables.post_data = {};
	
	    variables.post_data.type = variables.button_type;
	    variables.post_data.dialog_name = variables.button_name;
	
	    if (variables.button_value) variables.post_data.value = variables.button_value;
	  } else variables.post_data = post_data;
	},
	    load = exports.load = function load(url, post_data, callback) {
	  prepare_post_data(post_data);
	  console.log(variables.post_data);
	  console.log(url);
	
	  dialog_loader_controllers.load(url, variables.post_data, callback);
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.change_content = exports.start = exports.define = undefined;
	
	var _views = __webpack_require__(47);
	
	var ground_views = _interopRequireWildcard(_views);
	
	var _controllers = __webpack_require__(13);
	
	var _controllers2 = __webpack_require__(20);
	
	var _controllers3 = __webpack_require__(35);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 *    Defining private variables
	 */
	
	/**
	 * Created by mrskull on 08.01.17.
	 */
	
	var config_loader = {
	  name: 'ground',
	
	  container: '#GROUND > .ground',
	  first_element: '.block_1',
	
	  auto_first_loading: true,
	  load_with_page: true
	},
	    ground_loader_controllers = new _controllers.Plugins_Loader_Controllers(config_loader),
	    config_post_button = {
	  container: '#GROUND > .ground',
	  callback: ground_loader_controllers.reload },
	    post_button_controllers = new _controllers3.Post_Button_Controllers(config_post_button),
	    ground_form_controllers = new _controllers2.Form_Controllers(ground_loader_controllers);
	
	/**
	 *    Defining private functions
	 */
	
	var go_to_link = function go_to_link(event) {
	  var url = $(this).attr('href'),
	      protocol = url.substring(0, 4);
	
	  if (protocol !== 'http') if (event.which === 1) {
	    event.preventDefault();
	    window.APP.throw_event(window.EVENTS.plugins.close);
	
	    ground_views.change_url(url);
	
	    ground_loader_controllers.load(url);
	  }
	},
	    redirect = function redirect(event) {
	  ground_views.change_url(window.APP.DATA.redirect);
	  ground_loader_controllers.redirect(event);
	},
	    back_url = function back_url() {
	  event.preventDefault();
	  ground_loader_controllers.load();
	},
	    change_height_content = function change_height_content() {
	  var height = {
	    window: $('#CONTAINTER').innerHeight(),
	    header: $('#HEADER').outerHeight(),
	    ground_top: $(config_loader.container).position().top
	  };
	
	  $(config_loader.container).height(height.window - height.header - height.ground_top);
	};
	
	/**
	 *    Defining public functions
	 */
	
	var define = exports.define = function define() {
	  change_height_content();
	
	  $('a').click(go_to_link);
	  window.APP.add_own_event('redirect', redirect);
	  window.APP.add_own_event('popstate', back_url);
	  $(window).resize(change_height_content);
	
	  ground_form_controllers.define();
	  post_button_controllers.define();
	},
	    start = exports.start = function start() {
	  ground_loader_controllers.define();
	},
	    change_content = exports.change_content = function change_content(url, post_data) {
	  ground_loader_controllers.load(url, post_data);
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.load_header_page = exports.change_url = undefined;
	
	var _structure = __webpack_require__(9);
	
	var change_url = exports.change_url = function change_url(url) {
	  history.pushState('', url, url);
	},
	    load_header_page = exports.load_header_page = function load_header_page(object) {
	  _structure.data_controller.change_much({
	    title: object.title,
	    description: object.description
	  });
	
	  $('title').html(_structure.data_controller.get('title'));
	  $('meta[ name="description" ]').attr('content', _structure.data_controller.get('description'));
	}; /**
	    * Created by mrskull on 09.01.17.
	    */

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map