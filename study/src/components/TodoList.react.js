/// <reference path="../../../typings/react/react.d.ts" />

var React = require('react');
var TodoItem = require('./TodoItem.react.js');
var TodoStore = require('../stores/TodoStore');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      tasks: TodoStore.getAllTask()
    };
  },
  componentDidMount: function () {
    TodoStore.on('change', this._onChange);
  },
  componentWillUnmount: function () {
    TodoStore.removeListener('change', this._onChange);
  },
  render: function () {
    /**
     * JSX syntax:
     *   <ul className="todo-list">
     *     <TodoItem data={}/>
     *     ...
     *   </ul>
     */
    var items = this.state.tasks.map(function(item) {
      return React.createElement(TodoItem, { data: item });
    });
    
    return React.createElement('ul', {
      	     className: 'todo-list'  
           }, items);
  },
  _onChange: function () {
    this.setState({ tasks: TodoStore.getAllTask() });
  }
});