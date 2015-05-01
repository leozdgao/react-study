/// <reference path="../../../typings/react/react.d.ts" />

var React = require('react');

module.exports = React.createClass({
  render: function () {
    /**
     * JSX syntax:
     *   <div>
     *     <input type="text">
     *     <input type="button" value="Submit">
     *   </div>
     */
    return React.createElement('div', {
             className: 'todo-form'
           }, React.createElement('input', null),
              React.createElement('input', {
                type: 'button',
                value: 'Submit'
              })
           );
  }
});