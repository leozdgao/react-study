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

	var _uploader = __webpack_require__(3);

	var _uploader2 = _interopRequireDefault(_uploader);

	var _cssInfoCss = __webpack_require__(5);

	var _cssInfoCss2 = _interopRequireDefault(_cssInfoCss);

	console.log(_cssInfoCss2['default']);

	var App = _react2['default'].createClass({
	  displayName: 'App',

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _reactRouter.Link,
	        { to: "info" },
	        'Info'
	      ),
	      _react2['default'].createElement(
	        _reactRouter.Link,
	        { to: "about" },
	        'About'
	      ),
	      _react2['default'].createElement(_reactRouter.RouteHandler, null)
	    );
	  }
	});

	// import './info.less';
	// import './about.less';

	var Info = _react2['default'].createClass({
	  displayName: 'Info',

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'h1',
	        null,
	        'Test'
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: _cssInfoCss2['default'].title },
	        _react2['default'].createElement(
	          'span',
	          { className: ".name" },
	          'AA'
	        ),
	        'Info'
	      ),
	      _react2['default'].createElement(
	        'a',
	        { href: "#aa" },
	        'aa'
	      ),
	      _react2['default'].createElement(
	        'ul',
	        null,
	        _react2['default'].createElement(_uploader2['default'], null)
	      ),
	      _react2['default'].createElement(
	        _reactRouter.Link,
	        { to: "about" },
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
	        { href: "info#aa" },
	        'aa'
	      ),
	      _react2['default'].createElement(
	        _reactRouter.Link,
	        { to: "info" },
	        'Info'
	      )
	    );
	  }
	});

	var routes = _react2['default'].createElement(
	  _reactRouter.Route,
	  { handler: App },
	  _react2['default'].createElement(_reactRouter.Route, { name: "info", path: "", handler: Info }),
	  _react2['default'].createElement(_reactRouter.Route, { name: "about", path: "about", handler: About })
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _badge = __webpack_require__(4);

	var _badge2 = _interopRequireDefault(_badge);

	exports['default'] = _react2['default'].createClass({
	  displayName: 'uploader',

	  componentDidMount: function componentDidMount() {
	    this.uploader = this.refs.uploader.getDOMNode();
	  },
	  getInitialState: function getInitialState() {
	    return {
	      fileList: [],
	      panelShowed: false
	    };
	  },
	  render: function render() {
	    var count = this.state.fileList.length;
	    var files = this.state.fileList.map(function (file) {
	      return _react2['default'].createElement(
	        'li',
	        { className: "file-entry" },
	        file.name
	      );
	    });

	    return _react2['default'].createElement(
	      'li',
	      { className: "tb-btn" },
	      _react2['default'].createElement(
	        'a',
	        { title: "Attachments", onClick: this._addAttachments },
	        _react2['default'].createElement('i', { className: "fa fa-paperclip" }),
	        count > 0 ? _react2['default'].createElement(_badge2['default'], { value: count }) : null
	      ),
	      _react2['default'].createElement('input', { ref: "uploader", type: "file", name: "attachments", onChange: this._fileChange }),
	      _react2['default'].createElement(
	        'div',
	        { className: "file-container", style: this.state.panelShowed ? { display: 'block' } : { display: 'none' } },
	        _react2['default'].createElement('div', { className: "pad", onClick: this._togglePanel, style: this.state.panelShowed ? { display: 'block' } : { display: 'none' } }),
	        _react2['default'].createElement(
	          'ul',
	          { className: "file-list" },
	          files
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: "file-footer" },
	          _react2['default'].createElement(
	            'a',
	            { className: "file-add", onClick: this._showInput },
	            _react2['default'].createElement('i', { className: "fa fa-plus" }),
	            ' Add'
	          )
	        )
	      )
	    );
	  },
	  _togglePanel: function _togglePanel(e) {
	    var showed = this.state.panelShowed;
	    if (showed) this.setState({ panelShowed: false });
	  },
	  _addAttachments: function _addAttachments(e) {
	    e.stopPropagation();

	    if (this.state.fileList.length <= 0) this._showInput();else {
	      this.setState({ panelShowed: true });
	    }
	  },
	  _showInput: function _showInput() {
	    this.uploader.click();
	  },
	  _fileChange: function _fileChange() {
	    console.log('file change');
	    var files = Array.prototype.slice.call(this.uploader.files);
	    var fileList = this.state.fileList.concat(files);
	    if (fileList.length > 0) {
	      // update state here
	      this.setState({ fileList: fileList, panelShowed: true });
	    }
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	//
	//  Componennts to display a badge which should has numberic value.
	//  Use it like this:
	//
	//      <Badge value={num} />
	//

	var _react2 = _interopRequireDefault(_react);

	exports["default"] = _react2["default"].createClass({
	  displayName: "badge",

	  render: function render() {
	    return _react2["default"].createElement(
	      "i",
	      _extends({ className: "badge" }, this.props),
	      this.props.value
	    );
	  }
	});
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"title":"_3dpOqNNJl6oyjYpdDHCFD9","name":"_2EewWCvw4WTQtPAVAcaIq8"};

/***/ }
/******/ ]);