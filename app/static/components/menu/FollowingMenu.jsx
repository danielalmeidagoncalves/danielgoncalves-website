define(function(require, exports, module) {
  var React = require("react");
  var i18n = require("i18n");

  module.exports = React.createClass({
    render: function() {
      return (
        <div className="ui large top fixed hidden menu">
          <div className="ui container">
            <a className="active item">{i18n.gettext("Home")}</a>
            <a className="item">
              {i18n.gettext("Latest Shares")}
            </a>
            <a className="item">{i18n.gettext("Contacts")}</a>
            <div className="right menu">

            </div>
          </div>
        </div>
      );
    }
  });
});
