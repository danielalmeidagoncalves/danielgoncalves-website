define(function(require, exports, module) {
  var React = require("react");

  module.exports = React.createClass({
    render: function() {
      return (
        <div className="ui large top fixed hidden menu">
          <div className="ui container">
            <a className="active item">Home</a>
            <a className="item">Work</a>
            <a className="item">Company</a>
            <a className="item">Careers</a>
            <div className="right menu">
            
            </div>
          </div>
        </div>
      );
    }
  });
});
