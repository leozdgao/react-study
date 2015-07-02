/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(2);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var App = _react2['default'].createClass({
	  displayName: 'App',

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _reactRouter.Link,
	        { to: 'info' },
	        'Info'
	      ),
	      _react2['default'].createElement(
	        _reactRouter.Link,
	        { to: 'about' },
	        'About'
	      ),
	      _react2['default'].createElement(_reactRouter.RouteHandler, null)
	    );
	  }
	});
	var Info = _react2['default'].createClass({
	  displayName: 'Info',

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'div',
	        null,
	        'Info'
	      ),
	      _react2['default'].createElement(
	        'a',
	        { href: '#aa' },
	        'aa'
	      ),
	      _react2['default'].createElement('br', null),
	      _react2['default'].createElement('br', null),
	      _react2['default'].createElement('br', null),
	      _react2['default'].createElement('br', null),
	      _react2['default'].createElement('br', null),
	      _react2['default'].createElement('br', null),
	      _react2['default'].createElement('br', null),
	      _react2['default'].createElement('br', null),
	      _react2['default'].createElement('br', null),
	      _react2['default'].createElement('br', null),
	      _react2['default'].createElement('br', null),
	      _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: '<h1 id="aa">Test</h1>' } }),
	      _react2['default'].createElement(
	        _reactRouter.Link,
	        { to: 'about' },
	        'About'
	      )
	    );
	  }
	});
	var About = _react2['default'].createClass({
	  displayName: 'About',

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'div',
	        null,
	        'About'
	      ),
	      _react2['default'].createElement(
	        'a',
	        { href: 'info#aa' },
	        'aa'
	      ),
	      _react2['default'].createElement(
	        _reactRouter.Link,
	        { to: 'info' },
	        'Info'
	      )
	    );
	  }
	});

	var routes = _react2['default'].createElement(
	  _reactRouter.Route,
	  { handler: App },
	  _react2['default'].createElement(_reactRouter.Route, { name: 'info', path: '', handler: Info }),
	  _react2['default'].createElement(_reactRouter.Route, { name: 'about', path: 'about', handler: About })
	);

	_reactRouter2['default'].run(routes, _reactRouter2['default'].HistoryLocation, function (Root) {
	  _react2['default'].render(_react2['default'].createElement(Root, null), document.getElementById('test-container'));
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ }
/******/ ]);