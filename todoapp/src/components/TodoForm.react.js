/// <reference path="../../../typings/react/react.d.ts" />

var React = require('react');
var TodoActions = require('../actions/TodoActions');

module.exports = React.createClass({
  render: function () {
    /**
     * JSX syntax:
     *   <div class="input-group">
     *     <input class="form-control" ref="task" placeholder="Add a task..." onKeyPress="{this._onKeyPress}">
     *     <span class="input-group-btn">
     *       <input type="button" value="Submit" onClick="{this._onClick}">
     *     </span>
     *   </div>
     */
    return React.DOM.div({
             className: 'input-group'
           }, React.DOM.input({
                className: 'form-control',
                ref: "task",
                placeholder: "Add a task...",
                onKeyPress: this._onKeyPress
              }),
              React.DOM.span({
                className: 'input-group-btn'
              }, React.DOM.button({
                   className: 'btn btn-default',
                   type: 'button',
                   onClick: this._onClick
                 }, 'Submit')
              )
           );
  },
  _onClick: function (e) {
    this._addTask();
  },
  _onKeyPress: function (e) {
    if (e.key === 'Enter') {
      this._addTask();
    }
  },
  _addTask: function () {
    var task = React.findDOMNode(this.refs.task);
    if (task.value.trim()) {
      TodoActions.add(task.value);
      task.value = '';
    }
  }
});