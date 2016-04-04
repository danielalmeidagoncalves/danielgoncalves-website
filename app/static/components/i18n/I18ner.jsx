define(function(require, exports, module) {
  var React = require("react");
  var i18n = require("i18n");
  module.exports = React.createClass({
    componentDidMount: function() {
      console.log(this.props);
    },
    render: function() {
      return (
        <span></span>
      );
    }
  });
});
