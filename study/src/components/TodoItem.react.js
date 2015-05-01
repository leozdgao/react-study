/// <reference path="../../../typings/react/react.d.ts" />

var React = require('react');
var TodoActions = require('../actions/TodoActions');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      checked: this.props.data.fulfilled
    };
  },
  render: function () {
    /**
     * JSX syntax:
     *   <li className="todo-list-item">
     *     <input type="checkbox" onClick="{this._onClick}">
     *     text here...
     *   </li>
     */
    return React.createElement('li', {
              className: 'todo-list-item'
           }, React.createElement('input', {
                type: 'checkbox',
                checked: this.state.checked,
                onClick: this._onClick
              }),
              this.props.data.text
           );
  },
  _onClick: function(e) {
    TodoActions.toggle();
  }
});