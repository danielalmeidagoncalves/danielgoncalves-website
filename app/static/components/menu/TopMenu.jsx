define(function(require, exports, module) {
  var React = require("react");
  var i18n = require("i18n");
  module.exports = React.createClass({
    componentDidMount: function() {
      $(this.refs.languagetop).dropdown();
      this.initMenu();
    },
    initMenu: function() {
      $('.top.menu a:not(.toc)').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
        }, 1500);
        event.preventDefault();
      });
    },
    goBackActive: function(goback) {
      if (goback === "true") {
        return {display: 'block'};
      }
      return {display: 'none'};
    },
    goBackOthersInactive: function(goback) {
      if (goback === "true") {
        return {display: 'none'};
      }
      return {display: 'block'};
    },
    render: function() {
      return (
        <div className="ui large secondary inverted top pointing menu">
          <a className="toc item">
            <i className="sidebar icon">
            </i>
          </a>
          <a className="item image active" href="/" style={this.goBackActive(this.props['data-goback'])}>
            <i className="arrow circle outline left icon"></i>
            {i18n.gettext("Go Home")}
          </a>
          <a className="active item" href="#unsplash" style={this.goBackOthersInactive(this.props['data-goback'])}>
            {i18n.gettext("Home")}
          </a>
          <a className="item" href="#latest-shares" style={this.goBackOthersInactive(this.props['data-goback'])}>
            {i18n.gettext("Latest Shares")}
          </a>
          <a className="item" href="#contacts" style={this.goBackOthersInactive(this.props['data-goback'])}>
            {i18n.gettext("Contacts")}
          </a>
          <div className="right item">
          </div>
        </div>
      );
    }
  });
});
