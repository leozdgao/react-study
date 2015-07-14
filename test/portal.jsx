import React from 'react';

export default React.createClass({
  propTypes: {
    show: React.PropTypes.bool,
    container: React.PropTypes.element // dom element
  }
  componentDidMount: function() {
    // render overlay here
    this._overlayInstance = React.render(this.getOverlay(), mount);
  },
  componentWillReceiveProps: function(nextProps) {
    if(nextProps.show) {
      this._mountContainer(); // mount container and overlay
    }
    else {
      this._unmountContainer(); // unmount container and overlay
    }
  },
  render () {
    return null; // do not render here
  },
  _getContainerDOMNode () {
    if(!this._container) {
      if(this.props.container) this._container = React.findDOMNode(this.props.container);
      else {
        this._container = document.createElement('div');
        React.findDOMNode(this).ownerDocument.body.appendChild(this._container);
      }
    }

    return this._container;
  },
  _getOverlay () {
    return React.Children.only(this.props.children);
  }
  _mountContainer () {
    this._instance = React.render(this._getOverlay(), this._container);
  },
  _unmountContainer () {

  }
});
