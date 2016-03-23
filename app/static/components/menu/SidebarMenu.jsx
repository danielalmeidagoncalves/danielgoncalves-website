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
    render: function() {
      return (
        <div className="ui vertical inverted sidebar menu">
          <a className="active item" href="#unsplash">
            {i18n.gettext("Home")}
          </a>
          <a className="item" href="#latest-shares">
            {i18n.gettext("Latest Shares")}
          </a>
          <a className="item" href="#contacts">
            {i18n.gettext("Contacts")}
          </a>
        </div>
      );
    }
  });
});
