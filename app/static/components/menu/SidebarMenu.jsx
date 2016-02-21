define(function(require, exports, module) {
  var React = require("react");

  module.exports = React.createClass({
    componentDidMount: function() {
      var self = this;
      // create sidebar and attach to menu open
      $(document).ready(function() {
        $('.ui.sidebar').sidebar({context: $('#app-wrapper')}).sidebar('setting', 'transition', 'overlay').sidebar('attach events', '.toc.item');
      });

    },
    render: function() {
      return (
        <div className="ui vertical inverted sidebar menu">
          <a className="active item">Home</a>
          <a className="item">Latest Shares</a>
          <a className="item">Contact</a>
        </div>
      );
    }
  });
});
