import React from 'react/addons';
import Router, {Route, DefaultRoute, HistoryLocation, RouteHandler, Link} from 'react-router';
import Uploader from './uploader';

import styles from './css/info.css';

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup
let seed = 0
const animationTime = 1000

let App = React.createClass({
  getInitialState () {
    return {
      items: ['test'],
      val: 'test'
    }
  },
  render () {
    return (
      <div>
        <Link to="info">Info</Link>
        <Link to="about">About</Link>
        <button onClick={this._handleAdd}>Add</button>
        <button onClick={this._handleRemove}>Remove</button>
        <ul>
          <ReactCSSTransitionGroup transitionName='item'>
            {this._getItems()}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    )
  },
  _getItems () {
    return this.state.items.map((val, i) => {
      return <li key={val}>{val}</li>
    })
  },
  _handleAdd () {
    // let items = this.state.items
    // items.push('item' + seed++)
    // let val = this.state.val + seed++
    this.setState({ items: [] })

    setTimeout(() => {
      this.setState({ items: [ 'test' + seed++ ] })
    }, animationTime)
  },
  _handleRemove () {
    let items = this.state.items
    // items.pop()
    items.splice(1, 1)
    this.setState({ items })
  }
});

// import './info.less';
// import './about.less';


let Info = React.createClass({
  render() {
    return (
      <div>
        <h1>Test</h1>
        <div className={styles.title}><span className={styles.name}>AA</span>Info</div><a href="#aa">aa</a>
        <ul>
          <Uploader />
        </ul>
        <Link to="about">About</Link>
      </div>
    );
  }
});
let About = React.createClass({
  render() {
    return (
      <div>
        <div>About</div>
        <a href="info#aa">aa</a>
        <Link to="info">Info</Link>
      </div>
    );
  }
});

let routes = (
  <Route handler={App}>
    <Route name="info" path="" handler={Info} />
    <Route name="about" path="about" handler={About} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root />, document.getElementById('test-container'));
});
