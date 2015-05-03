/// <reference path="../../typings/react/react.d.ts" />

var TodoApp = require('./components/TodoApp.react.js');
var React = require('react');

React.render(
	React.createElement(TodoApp, null),
	document.getElementById('todo-app')
);
