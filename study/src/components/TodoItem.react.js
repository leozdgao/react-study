/// <reference path="../../../typings/react/react.d.ts" />

var React = require('react');
var TodoActions = require('../actions/TodoActions');

module.exports = React.createClass({
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
                      checked: this.props.data.fulfilled,
                      onChange: this._onClick
                    }),
                    this.props.data.text
                 )
              )
           );
  },
  _onClick: function (e) {
    TodoActions.toggle(this.props.data._id);
  }
});