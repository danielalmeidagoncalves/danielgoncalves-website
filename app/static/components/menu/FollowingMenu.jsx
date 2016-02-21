define(function(require, exports, module) {
  var React = require("react");

  module.exports = React.createClass({
    render: function() {
      return (
        <div className="ui large top fixed hidden menu">
          <div className="ui container">
            <a className="active item">Home</a>
            <a className="item">
              Lastest Shares
            </a>
            <a className="item">Contact</a>
            <div className="right menu">

            </div>
          </div>
        </div>
      );
    }
  });
});
