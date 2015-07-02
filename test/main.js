import React from 'react';
import Router, {Route, DefaultRoute, HistoryLocation, RouteHandler, Link} from 'react-router';

let App = React.createClass({
  render() {
    return (
      <div>
        <Link to="info">Info</Link>
        <Link to="about">About</Link>
        <RouteHandler />
      </div>
    );
  }
});
let Info = React.createClass({
  render() {
    return (
      <div>
        <div>Info</div><a href="#aa">aa</a>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div dangerouslySetInnerHTML={{__html: '<h1 id="aa">Test</h1>' }}></div>

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