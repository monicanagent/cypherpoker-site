var React = require('react');

module.exports = React.createClass({
  render: function() {
    return(
      <section className={this.props.sectionClassName}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
              <img className="card-img-top img-fluid" src="https://placehold.it/800x400" alt="Card image cap" />
                <div className="card-block">
                  <h4 className="card-title">{this.props.cardOneTitle}</h4>
                  <p className="card-text">{this.props.cardOneParagraph}</p>
                  <a href="#" className="btn btn-primary">Button</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
              <img className="card-img-top img-fluid" src="https://placehold.it/800x400" alt="Card image cap" />
                <div className="card-block">
                  <h4 className="card-title">{this.props.cardTwoTitle}</h4>
                  <p className="card-text">{this.props.cardTwoParagraph}</p>
                  <a href="#" className="btn btn-primary">Button</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
              <img className="card-img-top img-fluid" src="https://placehold.it/800x400" alt="Card image cap" />
                <div className="card-block">
                  <h4 className="card-title">{this.props.cardThreeTitle}</h4>
                  <p className="card-text">{this.props.cardThreeParagraph}</p>
                  <a href="#" className="btn btn-primary">Button</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
});
