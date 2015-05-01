/// <reference path="../../../typings/react/react.d.ts" />

var TodoForm = require('./TodoForm.react.js');
var TodoList = require('./TodoList.react.js');
var React = require('react');

module.exports = React.createClass({
  render: function () {
    /**
     * JSX syntax:
     *   <div className="todo-app>
     *     <h2>TodoApp build in React and Flux</h2>
     *     <TodoForm />
     *     <TodoList />
     *   </div>   
     */
    return React.createElement('div', {
             className: 'todo-app'
           }, React.createElement('h2', null, 'TodoApp build in React and Flux'),
              React.createElement(TodoForm, null),
              React.createElement(TodoList, null)
           );
    }
});