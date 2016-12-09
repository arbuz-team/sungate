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
	
	var _wydarzenia = __webpack_require__(7);
	
	var page_controller = _interopRequireWildcard(_wydarzenia);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * Created by mrskull on 24.11.16.
	 */
	
	page_controller.start();
	
	// import './autosize-master/dist/autosize';

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	/*    JavaScript    */
	
	/*---------------- Interfejs funkcji standardowych ----------------*/
	
	/*Object.prototype.Dziedzicz_Po = function( rodzic )
	{
	  var dziecko = function() {};
	  dziecko.prototype = rodzic;
	  return new dziecko();
	}*/
	
	Function.prototype.add_method = function (name, callback) {
	  this.prototype[name] = callback;
	  return this;
	};
	
	$.prototype.add_data = function (name, value) {
	  $(this).attr('data-' + name, value);
	  $(this).data(name, value);
	  return this;
	};
	
	$.prototype.delete_data = function (name) {
	  $(this).removeAttr('data-' + name);
	  $(this).removeData(name);
	  return this;
	};
	
	Array.prototype.delete_empty = function () {
	  var url_array = [];
	
	  for (var j = 0, i = 0; this.length > i; i++) {
	    if (this[i]) {
	      url_array[j] = this[i];
	      j++;
	    }
	  }
	
	  return url_array;
	};
	
	/*
	Function.Dodaj_Metode( 'inherits', function( Parent )
	{
	  this.prototype = new Parent();
	  return this;
	})
	*/

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.start = exports.Form_Controller_Events = exports.Menu_Controller_Events = exports.EVENTS = exports.Content_Controller_Events = undefined;
	
	var _podstawa = __webpack_require__(8);
	
	Object.defineProperty(exports, 'Content_Controller_Events', {
	  enumerable: true,
	  get: function get() {
	    return _podstawa.Content_Controller_Events;
	  }
	});
	Object.defineProperty(exports, 'EVENTS', {
	  enumerable: true,
	  get: function get() {
	    return _podstawa.EVENTS;
	  }
	});
	
	var _podstawa2 = __webpack_require__(12);
	
	Object.defineProperty(exports, 'Menu_Controller_Events', {
	  enumerable: true,
	  get: function get() {
	    return _podstawa2.Menu_Controller_Events;
	  }
	});
	
	var _podstawa3 = __webpack_require__(14);
	
	Object.defineProperty(exports, 'Form_Controller_Events', {
	  enumerable: true,
	  get: function get() {
	    return _podstawa3.Form_Controller_Events;
	  }
	});
	
	
	/*---------------- Wydarzenia na stronie ----------------*/
	
	var content_controller_events = new _podstawa.Content_Controller_Events(),
	    menu_controller_events = new _podstawa2.Menu_Controller_Events(),
	    form_controller_events = new _podstawa3.Form_Controller_Events();
	
	var define = function define() {
	  // Usuń wszystkie wydarzenia ze wszystkich elementów
	  $('*').off();
	
	  content_controller_events.define();
	  menu_controller_events.define();
	  form_controller_events.define();
	};
	
	var start = exports.start = function start() {
	  define();
	
	  window.addEventListener('define', define, false);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EVENTS = exports.data_controller = undefined;
	
	var _podstawa = __webpack_require__(9);
	
	Object.defineProperty(exports, 'data_controller', {
	  enumerable: true,
	  get: function get() {
	    return _podstawa.data_controller;
	  }
	});
	Object.defineProperty(exports, 'EVENTS', {
	  enumerable: true,
	  get: function get() {
	    return _podstawa.EVENTS;
	  }
	});
	exports.Content_Controller_Events = Content_Controller_Events;
	
	
	var content_controller = new _podstawa.Content_Controller();
	
	/*---------------- Wydarzenia Kontrolera Treści ----------------*/
	
	function Content_Controller_Events() {
	
	  this.define = function () {
	    $('a').click(start_link);
	
	    window.addEventListener('popstate', back_url);
	
	    window.addEventListener('change_url', change_url, false);
	
	    window.onload = function () {
	      content_controller.start();
	    };
	  };
	
	  //////////////////////////////////////////////////////////
	
	  var start_link = function start_link(event) {
	    event.preventDefault();
	    var url = $(this).attr('href');
	
	    if (event.which === 1) {
	      if (_podstawa.data_controller.get('path') !== url) content_controller.change_content(url);
	    }
	  };
	
	  var change_url = function change_url() {
	    var url = _podstawa.data_controller.prepare_url_to_change();
	    content_controller.change_content(url);
	  };
	
	  var back_url = function back_url() {
	    event.preventDefault();
	    content_controller.start();
	  };
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EVENTS = exports.data_controller = undefined;
	
	var _struktura = __webpack_require__(10);
	
	Object.defineProperty(exports, 'data_controller', {
	  enumerable: true,
	  get: function get() {
	    return _struktura.data_controller;
	  }
	});
	Object.defineProperty(exports, 'EVENTS', {
	  enumerable: true,
	  get: function get() {
	    return _struktura.EVENTS;
	  }
	});
	exports.Content_Controller = Content_Controller;
	
	
	/*---------------- Kontroler Treści ----------------*/
	
	function Content_Controller() {
	
	  ///////////////////////////////////////////////////////////////////////////
	
	  var _refresh_data = function _refresh_data() {
	    _struktura.data_controller.reset();
	  };
	
	  var _refresh_events = function _refresh_events() {
	    window.dispatchEvent(_struktura.EVENTS.define);
	  };
	
	  var _show_content = function _show_content(response, status, error) {
	    var $kontener = $(_struktura.data_controller.get('container') + ' > div > .tresc');
	
	    if (error === 'yes') {
	      if (status !== 'success') {
	        $kontener.html('An error has occurred while connecting to server. Please, refresh website.');
	      }
	    } else {
	      if (status !== 'success') {
	        _download_content('/statement/404/', 'yes');
	        return false;
	      }
	    }
	
	    _refresh_events();
	
	    $kontener.animate({ opacity: 1 }, 150, function () {
	      if (window.APP) paste_data(window.APP);
	    });
	  };
	
	  var _download_content = function _download_content(url, error) {
	    url = _preprocess_url(url);
	    var post_data = _struktura.data_controller.get('post_data');
	
	    $(_struktura.data_controller.get('container')).load(url, post_data, function (response, status) {
	      if (error) _show_content(response, status, error);else _show_content(response, status);
	    }).add_data('url', url);
	  };
	
	  var _hide_content = function _hide_content() {
	    $(_struktura.data_controller.get('container') + ' > div > .tresc').animate({ opacity: 0.4 }, 100, function () {
	      _download_content();
	    });
	  };
	
	  ///////////////////////////////////////////////////////////////////////////
	
	  this.change_content = function (url, post_data) {
	    url = _preprocess_url(url);
	    _change_url(url);
	    _refresh_data();
	
	    post_data = _prepare_post_data(post_data);
	    _struktura.data_controller.change('post_data', post_data);
	
	    _hide_content();
	  };
	
	  this.start = function () {
	    _refresh_data();
	
	    var post_data = _prepare_post_data();
	    _struktura.data_controller.change('post_data', post_data);
	
	    _hide_content();
	  };
	
	  ///////////////////////////////////////////////////////////////////////////
	
	  var _preprocess_url = function _preprocess_url(url) {
	    if (!url) url = _struktura.data_controller.get('path');
	
	    return url;
	  };
	
	  var _prepare_post_data = function _prepare_post_data(object) {
	    if (!object) object = {};
	
	    object.__content__ = 'true';
	    object.csrfmiddlewaretoken = _struktura.data_controller.get('csrf_token');
	
	    return object;
	  };
	
	  var paste_data = function paste_data(object) {
	    _struktura.data_controller.change_much(object);
	
	    $('title').html(_struktura.data_controller.get('title'));
	    $('meta[ name="description" ]').attr('content', _struktura.data_controller.get('description'));
	  };
	
	  var _change_url = function _change_url(url) {
	    history.pushState('', url, url);
	  };
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.data_controller = exports.EVENTS = undefined;
	
	var _kreator_wydarzen = __webpack_require__(11);
	
	Object.defineProperty(exports, 'EVENTS', {
	  enumerable: true,
	  get: function get() {
	    return _kreator_wydarzen.EVENTS;
	  }
	});
	
	
	/*---------------- Struktura Dane_Strony ----------------*/
	
	var Data_Controller = function Data_Controller() {
	  var private_data = void 0,
	      public_data = void 0;
	
	  this.reset = function () {
	    private_data = {
	      protocol: location.protocol,
	      host_name: location.hostname,
	      all_hosta_name: location.host,
	      port: location.port,
	      domena: location.protocol + '://' + location.host,
	      path: location.pathname,
	      all_url: location.href,
	      history: [],
	      csrf_token: $('input[ name=csrfmiddlewaretoken ]').val() || ''
	    };
	
	    public_data = {
	      url_to_change: '',
	      page_name: 'Spasungate',
	      title: 'Loading... - Spasungate',
	      description: 'This page is shop, which is ownership Spasungate.',
	      statement_content: 'Empty statement.',
	      container: '#TRESC',
	      post_data: {}
	    };
	  };
	
	  this.reset();
	
	  this.get = function (name) {
	    if (typeof private_data[name] !== 'undefined') return private_data[name];else if (typeof public_data[name] !== 'undefined') return public_data[name];else {
	      console.warn('Wrong call! Veriable with this name doesn\'t exist.');
	      console.trace();
	    }
	  };
	
	  this.change = function (name, wartosc) {
	    if (typeof public_data[name] !== 'undefined') public_data[name] = wartosc;else if (typeof private_data[name] !== 'undefined') {
	      console.warn('Wrong call! Veriable with this name doesn\'t exist.');
	      console.trace();
	    } else {
	      console.warn('Wrong call! Veriable with this name doesn\'t exist.');
	      console.trace();
	    }
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
	
	  this.prepare_url_to_change = function () {
	    if (public_data.url_to_change !== '') return public_data.url_to_change;else return '/';
	  };
	};
	
	var data = new Data_Controller();
	
	exports.data_controller = data;

/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Created by mrskull on 24.11.16.
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EVENTS = exports.EVENTS = {
	  define: new Event('define'),
	  change_url: new Event('change_url')
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EVENTS = exports.data_controller = undefined;
	
	var _podstawa = __webpack_require__(13);
	
	Object.defineProperty(exports, 'data_controller', {
	  enumerable: true,
	  get: function get() {
	    return _podstawa.data_controller;
	  }
	});
	Object.defineProperty(exports, 'EVENTS', {
	  enumerable: true,
	  get: function get() {
	    return _podstawa.EVENTS;
	  }
	});
	exports.Menu_Controller_Events = Menu_Controller_Events;
	
	
	/*---------------- Wydarzenia kontrolera Menu ----------------*/
	
	function Menu_Controller_Events() {
	
	  this.define = function () {
	    $('.guzik_menu').click(this.show_hide_menu);
	    $('#MENU .nakladka').click(this.show_hide_menu);
	    $('#MENU > .menu a').click(this.show_hide_menu);
	
	    window.addEventListener('changed_url', _podstawa.menu_controller.select_overlap(), false);
	  };
	
	  var is_exist = function is_exist(element) {
	    if ($(element).length) return true;
	
	    return false;
	  };
	
	  var check_atribute_data = function check_atribute_data(element, name, value) {
	    if (is_exist(element)) {
	      return $(element).data(name) === value;
	    }
	
	    return false;
	  };
	
	  this.show_hide_menu = function (event) {
	    if (event.which === 1) {
	      var menu = '#MENU';
	
	      if (check_atribute_data(menu, 'wysuniete', 'nie')) _podstawa.menu_controller.show();else if (check_atribute_data(menu, 'wysuniete', 'tak')) _podstawa.menu_controller.hide();
	
	      return false;
	    }
	  };
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.menu_controller = exports.EVENTS = exports.data_controller = undefined;
	
	var _struktura = __webpack_require__(10);
	
	Object.defineProperty(exports, 'data_controller', {
	  enumerable: true,
	  get: function get() {
	    return _struktura.data_controller;
	  }
	});
	Object.defineProperty(exports, 'EVENTS', {
	  enumerable: true,
	  get: function get() {
	    return _struktura.EVENTS;
	  }
	});
	
	
	/*---------------- Kontroler Menu ----------------*/
	
	function Menu_Controller() {
	  var $menu = $('#MENU'),
	      $overlay = $menu.children('.overlay');
	
	  this.show = function () {
	    $menu.animate({ 'right': '0px' }, 200);
	    $overlay.show();
	    $menu.add_data('wysuniete', 'tak');
	  };
	
	  this.hide = function () {
	    $overlay.hide();
	
	    $menu.animate({ right: '-250px' }, 200);
	    $menu.add_data('wysuniete', 'nie');
	  };
	
	  this.select_overlap = function () {
	    var url = _struktura.data_controller.get('all_url'),
	        $overlap = $('.menu > li > a');
	
	    $overlap.removeClass('wybrany');
	
	    for (var i = 0; $overlap.length > i; ++i) {
	      if ($overlap[i].href === url) $overlap.eq(i).addClass('wybrany');
	    }
	  };
	}
	
	var menu_controller = new Menu_Controller();
	
	exports.menu_controller = menu_controller;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Form_Controller_Events = Form_Controller_Events;
	
	var _podstawa = __webpack_require__(15);
	
	var _views = __webpack_require__(16);
	
	var validator = _interopRequireWildcard(_views);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/*    JavaScript    */
	
	var form_controller = new _podstawa.Form_Controller();
	
	function Form_Controller_Events() {
	
	  this.define = function () {
	    $('form').submit(prepare_form_to_send);
	
	    validator.define();
	  };
	
	  //////////////////////////////////////////////////////////
	
	  var get_form_fields = function get_form_fields(element) {
	    var $fields = $(element).serializeArray(),
	        form_object = {};
	
	    $.each($fields, function (i, field) {
	      form_object[field.name] = field.value;
	    });
	
	    return form_object;
	  };
	
	  var prepare_form_to_send = function prepare_form_to_send(event) {
	    event.preventDefault();
	
	    var url = $(this).attr('action'),
	        form_object = get_form_fields(this);
	
	    if (typeof url === 'undefined' || url === '') url = _podstawa.data_controller.get('path');
	
	    form_controller.send(url, form_object);
	  };
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EVENTS = exports.data_controller = undefined;
	
	var _struktura = __webpack_require__(10);
	
	Object.defineProperty(exports, 'data_controller', {
	  enumerable: true,
	  get: function get() {
	    return _struktura.data_controller;
	  }
	});
	Object.defineProperty(exports, 'EVENTS', {
	  enumerable: true,
	  get: function get() {
	    return _struktura.EVENTS;
	  }
	});
	exports.Form_Controller = Form_Controller;
	function Form_Controller() {
	
	  var _prepare_post_data = function _prepare_post_data(object) {
	    if (!object) return {};
	
	    object.__form__ = 'true';
	    object.csrfmiddlewaretoken = _struktura.data_controller.get('csrf_token');
	
	    return object;
	  };
	
	  var _preprocess_url = function _preprocess_url(url) {
	    if (!url) url = _struktura.data_controller.get('path');
	
	    return url;
	  };
	
	  var _show_statement = function _show_statement(data) {
	    if (data.__url__) {
	      _struktura.data_controller.change('url_to_change', data.__url__);
	      window.dispatchEvent(_struktura.EVENTS.change_url);
	    }
	  };
	
	  this.send = function (url, data_post) {
	    url = _preprocess_url(url);
	    data_post = _prepare_post_data(data_post);
	
	    $.post(url, data_post).done(_show_statement);
	  };
	
	  /////////////////   SPRAWDZANIE PÓL   ///////////////////
	
	  // let $form
	  //   , field_name
	  //   , field_value;
	  //
	  //
	  // let _preprocess_post_data = function( object )
	  // {
	  //   if( !object )
	  //     object = {};
	  //
	  //   object.__istnieje__ = 'true';
	  //   object.csrfmiddlewaretoken = data_controller.get( 'csrf_token' );
	  //
	  //   return object;
	  // };
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.define = undefined;
	
	var _checkers = __webpack_require__(17);
	
	var Validators = {};
	
	var define = exports.define = function define() {
	
	  $('form[data-test=yes]').each(function () {
	    var name = $(this).data('form');
	    Validators[name] = new _checkers.Constructor_Validator(name);
	  });
	
	  $('.test').keyup(function () {
	    validate(this);
	  });
	
	  $('.show_password').change(function () {
	    if ($(this).is(':checked')) show_password(this);else hide_password(this);
	  });
	};
	
	//////////////////////////////   VIEWS VALIDATOR   ///////////////////////////////////
	
	var validate = function validate(field) {
	  var form_name = $(field).parents('form').data('form'),
	      Validator = Validators[form_name],
	      name = $(field).attr('name'),
	      value = $(field).val(),
	      results = Validator.field(name, value),
	      test_form = Validator.check_list_field();
	
	  show_status(field, results);
	  change_status_blockade(form_name, test_form);
	};
	
	var show_status = function show_status(field, result) {
	  if (result) {
	    var $field = $(field),
	        $status = $field.parent().find('.status');
	
	    var bool = result.bool,
	        message = result.message,
	        correction = result.correction;
	
	    if ($field.val() != correction && correction != '' && correction) $field.val(correction);
	
	    if (bool) {
	      $field.removeClass('form_error');
	      $status.html(message).fadeOut(200);
	    } else {
	      $field.addClass('form_error');
	      $status.html(message).fadeIn(200);
	    }
	  }
	};
	
	var change_status_blockade = function change_status_blockade(form_name, test_form) {
	  if (typeof test_form === 'boolean') {
	    var $form = $('form[data-form=' + form_name + ']'),
	        $button = $form.find('*[type=submit]');
	
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Constructor_Validator = undefined;
	
	var _validator = __webpack_require__(18);
	
	Object.defineProperty(exports, 'Constructor_Validator', {
		enumerable: true,
		get: function get() {
			return _validator.Constructor_Validator;
		}
	});
	
	
	/////////////////////////////  Prepare checkers  ///////////////////////////////
	
	_validator.Constructor_Validator.prototype.types = {};
	
	var create_checker = function create_checker(name, callback) {
		_validator.Constructor_Validator.prototype.types[name] = {
			validate: callback
		};
	};
	
	var Types_Veriable = function Types_Veriable() {
		var array_result = [];
		this.bool = true;
		this.message = '';
		this.correction = '';
	
		this.add = function () {
			var object = {
				bool: this.bool,
				message: this.message,
				correction: this.correction
			};
	
			array_result.push(object);
	
			return true;
		};
	
		this.get_all = function () {
			return array_result;
		};
	};
	
	/////////////////////////////  Checkers  ///////////////////////////////
	
	create_checker('email', function (value) {
		var Results = new Types_Veriable(),
		    re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
		Results.bool = re.test(value);
		if (!Results.bool) Results.message = 'It\'s not email.';
	
		Results.add();
	
		return Results.get_all();
	});
	
	create_checker('password', function (value) {
		var Results = new Types_Veriable();
	
		Results.bool = value.length >= 8;
		if (!Results.bool) Results.message = 'The password is too short.';
	
		Results.add();
	
		return Results.get_all();
	});
	
	create_checker('proper_name', function (value) {
		var Results = new Types_Veriable();
	
		value = value.charAt(0).toUpperCase() + value.slice(1);
	
		Results.bool = value.length >= 3;
		if (!Results.bool) Results.message = 'The name is too short.';
	
		Results.correction = value;
		Results.add();
	
		return Results.get_all();
	});
	
	create_checker('length', function (value) {
		var Results = new Types_Veriable();
	
		Results.bool = value.length >= 3;
		if (!Results.bool) Results.message = 'It\'s too short.';
	
		Results.add();
	
		return Results.get_all();
	});
	
	create_checker('number', function (value) {
		var Results = new Types_Veriable();
	
		value = value.replace(/\s/g, '');
	
		Results.bool = value.length === 9;
		if (!Results.bool) Results.message = 'Number length is 9 digits.';
		Results.add();
	
		Results.bool = !isNaN(value);
		if (!Results.bool) Results.message = 'The number must consist of digits.';
		Results.add();
	
		return Results.get_all();
	});
	
	////////////////////////////////////////////

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Constructor_Validator = undefined;
	
	var _config = __webpack_require__(19);
	
	var Constructor_Validator = exports.Constructor_Validator = function Constructor_Validator(form_name) {
		this.types = Constructor_Validator.prototype.types;
		this.config = _config.list_configs[form_name];
	
		////////////////////////////////////////////////////
	
		var prepare_list_fields = function prepare_list_fields(fields_of_form) {
			var obj = {},
			    i = void 0,
			    length = fields_of_form.length;
			for (i = 0; i < length; ++i) {
				obj[fields_of_form[i].name] = false;
			}return obj;
		};
	
		this.change_field = function (name, value) {
			if (typeof fields_of_form[name] === 'boolean') {
				if (typeof value === 'boolean') fields_of_form[name] = value;else throw {
					name: 'Validation Error',
					message: 'Invalid value in the field ' + value + '.'
				};
			} else throw {
				name: 'Validation Error',
				message: 'No manual for the field ' + name + '.'
			};
		};
	
		this.check_list_field = function () {
			for (var key in fields_of_form) {
				if (fields_of_form.hasOwnProperty(key)) if (fields_of_form[key] === false) return false;
			}return true;
		};
	
		var fields_of_form = prepare_list_fields($('form[data-form=' + form_name + ']').serializeArray());
	
		////////////////////////////////////////////////////
	
		this.hasErrors = function () {
			return this.messages.length !== 0;
		};
	
		this.field = function (name, value) {
			var last_result = false,
			    results = [];
	
			if (name && value) {
				var msg = void 0,
				    type = void 0,
				    checker = void 0;
	
				this.messages = [];
	
				type = this.config[name];
				checker = this.types[type];
	
				if (!checker) throw {
					name: 'Validation Error',
					message: 'No manual for the key ' + name + '.'
				};
	
				results = checker.validate(value);
			} else if (value != '') {
				var Results = new this.Types_veriable();
				Results.bool = false;
				Results.message = "Incorrect value " + name;
				Results.add();
				results = Results.get_all();
			} else results = false;
			//////////////////////////////////
	
			if (results) {
				for (var i = 0; i < results.length; ++i) {
					if (results[i].bool === false) last_result = results[i];
				}if (!last_result) last_result = results[results.length - 1];
	
				this.change_field(name, last_result.bool);
			} else this.change_field(name, false);
	
			return last_result;
		};
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var list_configs = exports.list_configs = {};
	
	list_configs.register = {
		email: 'email',
		password: 'password',
		first_name: 'proper_name',
		last_name: 'proper_name',
		mobile_phone: 'number'
	};
	
	list_configs.login = {
		email_or_username: 'length',
		password: 'password'
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map