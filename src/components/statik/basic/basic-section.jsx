var React = require('react');

module.exports = React.createClass({
  render: function() {
    return(
      <section className={this.props.sectionClassName}>
          <div className="container">
              <div className="row">
                  <div className={this.props.mirror ? "col-md-6 col-md-offset-6" : "col-md-6"}>
                      <div>
                          <h2>{this.props.headline}</h2>
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
