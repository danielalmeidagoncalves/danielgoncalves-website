define(function(require, exports, module) {
  var React = require("react");

  module.exports = React.createClass({
    render: function() {
      return (
        <div className="ui large secondary inverted pointing menu">
          <a className="toc item">
            <i className="sidebar icon"></i>
          </a>
          <a className="active item">Home</a>
          <a className="item">Work</a>
          <a className="item">Company</a>
          <a className="item">Careers</a>
          <div className="right item">
        
          </div>
        </div>
      )
    }
  })
})
