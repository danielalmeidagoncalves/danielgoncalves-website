define(function(require, exports, module) {
  var React = require("react");
  var i18n = require("i18n");
  module.exports = React.createClass({
    componentDidMount: function() {
      var self = this;
      // create sidebar and attach to menu open
      $(document).ready(function() {
        $('.ui.sidebar').sidebar({context: $('#app-wrapper')}).sidebar('setting', 'transition', 'overlay').sidebar('attach events', '.toc.item');
      });
      this.initMenu();
    },
    initMenu: function(){
      $('.sidebar.menu a:not(.toc)').bind('click', function(event) {
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
        <div className="ui vertical inverted sidebar menu">
          <a className="ui item image label" href="/" style={this.goBackActive(this.props['data-goback'])}>
            <i className="arrow circle outline left icon"></i>
            {i18n.gettext("Go Back")}
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
        </div>
      );
    }
  });
});
