var React = require('react');

module.exports = React.createClass({
  render: function() {
    return(
      <footer>
          <div className="container">
              <div className="row">
                  <div className="col-md-5">
                  <h5>About</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                  <div className="col-md-2 col-md-offset-1">
                      <h5>Team</h5>
                  	<ul className="list-unstyled">
                  		<li><a href="services">Services</a></li>
                  	</ul>
                  </div>
                  <div className="col-md-2">
                      <h5>Careers</h5>
                      <ul className="list-unstyled">
                  		<li><a href="careers">Careers</a></li>
                  	</ul>
                  </div>
                  <div className="col-md-2">
                      <h5>Follow Us</h5>
                      <ul className="list-unstyled">
                  		<li><a href="https://twitter.com/{this.props.projectName}"><i class="fa fa-twitter"></i>Twitter</a></li>
                  	</ul>
                  </div>
              </div>
              <div className="row">
              	<div className="col-md-12 text-muted">
                  	<p className="small">Copyright {this.props.projectName}, 2015. All Rights Reserved.</p>
                  </div>
              </div>
          </div>
      </footer>
    )
  }
});
