var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main.jsx');

ReactDOM.render(

  <Router>
    <Route path="/" component={Main}></Route>
  </Router>

, document.getElementById('main'));
