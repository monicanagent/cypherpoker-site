var React = require('react');
var Statik = require('./statik/statik.jsx');
var Navbar = require('./statik/nav/navbar.jsx');
var EmptySection = require('./statik/basic/empty-section.jsx');
var Footer = require('./statik/footer/footer1.jsx');

module.exports = React.createClass({
  render: function() {
    return(

      <Statik>

          <Navbar projectName={"CypherPoker"} callToAction={'Join our Slack'}/>

          <EmptySection>
            <div className="col-md-4 col-md-offset-1">
              <img style={{position: 'relative', top: -5 + 'rem'}} className="img-fluid" src="img/cypher-poker-logo.jpg" />
            </div>
            <div className="col-md-offset-1 col-md-6">
              <h1>CypherPoker</h1>
              <p>Decentralized, rake-free, open-source, cryptographic Texas hold em.</p>
              <a style={{marginRight: '5px'}} className="btn btn-sm btn-primary" href="#">View on Github</a>
              <a style={{marginRight: '5px'}} className="btn btn-sm btn-primary" href="#">Join our Slack</a>
              <a className="btn btn-sm btn-primary" href="#">Watch the demo</a>
            </div>
          </EmptySection>

          <Footer projectName={"CypherPoker"} />

        </Statik>
    )
  }
});
