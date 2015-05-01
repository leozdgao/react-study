/// <reference path="../../../typings/react/react.d.ts" />

var React = require('react');
var TodoActions = require('../actions/TodoActions');

module.exports = React.createClass({
  render: function () {
    /**
     * JSX syntax:
     *   <div>
     *     <input type="text">
     *     <input type="button" value="Submit" onClick="{this._onClick}">
     *   </div>
     */
    return React.createElement('div', {
             className: 'todo-form'
           }, React.createElement('input', {
                ref: "task"
              }),
              React.createElement('input', {
                type: 'button',
                value: 'Submit',
                onClick: this._onClick
              })
           );
  },
  _onClick: function (e) {
    var task = React.findDOMNode(this.refs.task);
    if (task.value.trim()) {
      TodoActions.add(task.value);
      task.value = '';
    }
  }
});