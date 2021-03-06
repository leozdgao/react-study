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
    TodoStore.on('list_change', this._onChange);
  },
  componentWillUnmount: function () {
    TodoStore.removeListener('list_change', this._onChange);
  },
  render: function () {
    /**
     * JSX syntax:
     *   <ul className="list-group">
     *     <TodoItem key={id} data={}/>
     *     ...
     *   </ul>
     */
    var items = this.state.tasks.map(function(item) {
      return React.createElement(TodoItem, { key: item._id, data: item });
    });
    
    return React.DOM.ul({
      	     className: 'list-group'  
           }, items);
  },
  _onChange: function () {
    this.setState({ tasks: TodoStore.getAllTask() });
  }
});