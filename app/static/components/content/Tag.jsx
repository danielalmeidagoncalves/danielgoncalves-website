define(function(require, exports, module) {
  var React = require("react");
  var i18n = require("i18n");
  module.exports = React.createClass({
    getInitialState: function() {
      return {shareState: "umounted"};
    },
    componentDidMount: function() {

    },
    displayName: "Tag",
    render: function() {
      return (
        <div className="ui label">
          {this.props["data-tag"]}
        </div>
      );
    }
  });
});
