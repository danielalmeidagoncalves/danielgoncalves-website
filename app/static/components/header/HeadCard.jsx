define(function(require, exports, module) {
  var React = require("react");
  module.exports = React.createClass({
    getInitialState: function() {
      return {};
    },
    componentDidMount: function() {

      // fix menu when passed
    $('.top.header').visibility({
        once: false,
        onBottomPassed: function() {

          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function() {

          $('.fixed.menu').transition('fade out');
        }
      });
      var me = $(this.refs.me);
      $(me[0]).on("mouseenter",function(){
          $(this).shape("flip back");
      });
    },
    render: function() {
      return (
        <div ref="me" className="ui people shape">
          <div className="sides">
            <div className="side active">
              <img
                className="ui small circular centered image"
                src="/static/imgs/crazy_site_face.png" />
            </div>
            <div className="side">
              <img
                className="ui small circular centered image"
                src="/static/imgs/logo.png" />
            </div>
          </div>
        </div>
      );
    }
  });
});
