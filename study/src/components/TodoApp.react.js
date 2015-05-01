/// <reference path="../../../typings/react/react.d.ts" />

var TodoForm = require('./TodoForm.react.js');
var TodoList = require('./TodoList.react.js');
var React = require('react');

module.exports = React.createClass({
  render: function () {
    return React.createElement('div', {
             className: 'todo-list'
           }, React.createElement(TodoForm, null),
              React.createElement(TodoList, null)
           );
    }
});