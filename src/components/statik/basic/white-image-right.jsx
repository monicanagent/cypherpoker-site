var React = require('react');
var Parallax = require('react-parallax');

module.exports = React.createClass({
  render: function() {

    return(
      <section className={this.props.sectionClassName}>
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <div>
                          <h1>{this.props.headline}</h1>
                          <p>{this.props.paragraph}</p>
                          <a className="btn btn-primary" href="features">{this.props.callToAction}</a>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div>
                        <img className="img-fluid" src={this.props.imageUrl} />
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
});
