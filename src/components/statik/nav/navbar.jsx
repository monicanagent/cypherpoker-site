var React = require('react');

module.exports = React.createClass({
  render: function() {
    return(
      <nav className="navbar">
        <div className="container">
        <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">&#9776;</button>
          <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
            <div className="nav navbar-nav">
              <a className="navbar-brand" href="#">{this.props.projectName}</a>

              <form className="form-inline pull-md-right">
                <a className="btn btn-success-outline" type="submit">{this.props.callToAction}</a>
              </form>
            </div>
          </div>
        </div>
      </nav>
    )
  }
});
