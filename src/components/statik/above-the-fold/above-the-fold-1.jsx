var React = require('react');
var Parallax = require('react-parallax');

module.exports = React.createClass({
  render: function() {

    return(
      <section className={this.props.sectionClassName}>
          <div className="container">
              <div className="row">
                  <div className={this.props.mirror ? "col-md-6 col-md-offset-6" : "col-md-6"}>
                      <div>
                          <h1>{this.props.headline}</h1>
                          <p>{this.props.paragraph}</p>
                          <a className="btn btn-primary" href="features">{this.props.callToAction}</a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
});
