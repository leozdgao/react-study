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

	/// <reference path="../../typings/react/react.d.ts" />

	var TodoApp = __webpack_require__(2);
	var React = __webpack_require__(1);

	React.render(
		React.createElement(TodoApp, null),
		document.getElementById('todo-app')
	);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/react/react.d.ts" />

	var TodoForm = __webpack_require__(4);
	var TodoList = __webpack_require__(5);
	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  render: function () {
	    /**
	     * JSX syntax:
	     *   <div className="todo-app>
	     *     <TodoForm />
	     *     <TodoList />
	     *   </div>   
	     */
	    return React.createElement('div', {
	             className: 'todo-app'
	           }, React.createElement(TodoForm, null),
	              React.createElement(TodoList, null)
	           );
	    }
	});

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/react/react.d.ts" />

	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  render: function () {
	    /**
	     * JSX syntax:
	     *   <div>
	     *     <input type="text">
	     *     <input type="button" value="Submit">
	     *   </div>
	     */
	    return React.createElement('div', {
	             className: 'todo-form'
	           }, React.createElement('input', null),
	              React.createElement('input', {
	                type: 'button',
	                value: 'Submit'
	              })
	           );
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/react/react.d.ts" />

	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  render: function () {
	    /**
	     * JSX syntax:
	     *   <ul>
	     *   </ul>
	     */
	    return React.createElement('div', {
	      	     className: 'todo-list'  
	           }, "I'm Todo List.");
	  }
	});

/***/ }
/******/ ]);