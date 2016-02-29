var React = require('react');
var Parallax = require('react-parallax');
var StripeCheckout = require('react-stripe-checkout');

module.exports = React.createClass({
  onToken: function(){

  },
  render: function() {

    return(
      <section className={this.props.sectionClassName}>
          <div className="container">
              <div className="row">
                  <div className="col-md-8 col-md-offset-2">
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
