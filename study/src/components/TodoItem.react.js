/// <reference path="../../../typings/react/react.d.ts" />

var React = require('react');
var TodoActions = require('../actions/TodoActions');
var TodoStore = require('../stores/TodoStore');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      checked: this.props.data.fulfilled
    };
  },
  componentDidMount: function () {
    TodoStore.on('change_check', this._onChange);
  },
  componentWillUnmount: function () {
    TodoStore.removeListener('change_check', this._onChange);
  },
  render: function () {
    /**
     * JSX syntax:
     *   <li className="list-group-item">
     *     <div className="checkbox">
     *       <label>
     *         <input type="checkbox" onClick="{this._onClick}">
     *         text here...
     *       </label>
     *     </div>
     *   </li>
     */
    return React.createElement('li', {
              className: 'list-group-item'
           }, React.createElement('div', {
                className: 'checkbox'
              }, React.createElement('label', {
                
                 }, React.createElement('input', {
                      type: 'checkbox',
                      checked: this.state.checked,
                      onChange: this._onClick
                    }),
                    this.props.data.text
                 )
              )
           );
  },
  _onClick: function (e) {
    TodoActions.toggle(this.props.data._id);
  },
  _onChange: function (id) {
    if (id === this.props.data._id) {
      this.setState({ checked: TodoStore.getTaskState(id) });
    }
  }
});