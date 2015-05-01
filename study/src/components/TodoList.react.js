/// <reference path="../../../typings/react/react.d.ts" />

var React = require('react');

module.exports = React.createClass({
  render: function () {
    /**
     * JSX syntax:
     *   <ul>
     *   </ul>
     */
    return React.createElement('div', {
      	     className: 'todo-list'  
           }, "I'm Todo List.");
  }
});