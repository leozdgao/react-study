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
    return React.DOM.li({
              className: 'list-group-item'
           }, React.DOM.div({
                className: 'checkbox'
              }, React.DOM.label({
                
                 }, React.DOM.input({
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