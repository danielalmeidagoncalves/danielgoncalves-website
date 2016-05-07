define(function(require, exports, module) {
  var React = require("react");
  var growl = require("semanticuigrowl");
  var i18n = require("i18n");
  module.exports = React.createClass({
    getInitialState: function() {
      return {hit: 0};
    },
    componentDidMount: function() {
      var me = $(this.refs.me);
      var side = $(this.refs.side);
      var component = this;
      var ContactsController = require("contactscontroller");
      $(me[0]).on("mouseenter", function() {
        $(this).shape("flip back");
      }).on("click", function() {
        component.setState({
          hit: component.state.hit + 1
        });
        if (component.state.hit >= 3) {
          ContactsController.setCaptchaSatisfied(true);
          $.semanticUiGrowl(i18n.gettext("Congrats!! you now can send a message :)"), {
                header: "Yeah, that's it"
          });
        }
      });
    },
    render: function() {
      return (
        <div ref="me" className="ui blurring people shape">
          <div className="ui inverted dimmer">
            <div className="content">
              <div className="center">
                <h2 className="ui icon header">
                  <i className="mail icon"></i>
                  <div className="sub header" ref="message"> {i18n.gettext("Congrats!! you now can send a message :)")}</div>
                </h2>
              </div>
            </div>
          </div>
          <div className="sides">
            <div className="ui side active">
              <img className="ui small circular centered image" src="/static/imgs/crazy_site_face.png"/>
            </div>
            <div className="ui side" ref="side">
              <img className="ui small circular centered image" src="/static/imgs/logo.png"/>
            </div>
          </div>
        </div>
      );
    }
  });
});
