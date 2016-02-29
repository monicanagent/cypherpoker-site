var React = require('react');

module.exports = React.createClass({
  render: function() {
    return(
      <section className={this.props.sectionClassName}>
          <div className="container">
              <div className="row">
                  {this.props.children}
              </div>
          </div>
      </section>
    )
  }
});
