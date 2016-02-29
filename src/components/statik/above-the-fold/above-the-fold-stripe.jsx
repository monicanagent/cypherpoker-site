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
                  <div className={this.props.mirror ? "col-md-6 col-md-offset-6" : "col-md-6"}>
                      <div>
                          <h1>{this.props.headline}</h1>
                          <p>{this.props.paragraph}</p>
                            <StripeCheckout
                              name="Newfoundland Chaga"
                              description="Big Data Stuff"
                              componentClass="div"
                              panelLabel="Give Money"
                              amount={12.50}
                              currency="CAD"
                              stripeKey="pk_test_ro46I1EOiSqSpjG9k3Cw6o1P"
                              locale="en"
                              email="animalrobot@gmail.com"
                              // Note: Enabling either address option will give the user the ability to
                              // fill out both. Addresses are sent as a second parameter in the token callback.
                              shippingAddress={true}
                              billingAddress={false}
                              // Note: enabling both zipCode checks and billing or shipping address can have
                              // unintended consequences.
                              zipCode={false}
                              alipay={true}
                              bitcoin={true}
                              allowRememberMe={false}
                              token={this.onToken}>
                              <button className="btn btn-primary btn-md">
                                <span>Click here</span>
                              </button>
                            </StripeCheckout>
                        </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
});
