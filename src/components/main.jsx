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
            <h1>CypherPoker</h1>
            <p>Decentralized, rake-free, cryptographic Poker.</p>
            <a className="btn btn-sm btn-primary" href="#">View on Github</a>
            <a className="btn btn-sm btn-primary" href="#">Join our Slack</a>
            <a className="btn btn-sm btn-primary" href="#">Watch the demo</a>
          </EmptySection>

          <Footer projectName={"CypherPoker"} />

        </Statik>
    )
  }
});
