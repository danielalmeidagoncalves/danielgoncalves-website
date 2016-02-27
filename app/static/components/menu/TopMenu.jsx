define(function(require, exports, module) {
  var React = require("react");
  var i18n = require("i18n");
  module.exports = React.createClass({
    componentDidMount: function() {
      $(this.refs.languagetop).dropdown();
    },
    render: function() {
      return (
        <div className="ui large secondary inverted pointing menu">
          <a className="toc item">
            <i className="sidebar icon">
            </i>
          </a>
          <a className="active item">{i18n.gettext("Home")}</a>
          <a className="item">
            {i18n.gettext("Latest Shares")}
          </a>
          <a className="item">{i18n.gettext("Contacts")}</a>
          <div className="right item">

          </div>
        </div>
      );
    }
  });
});
