define(function(require, exports, module) {
  var React = require("react");
  var i18n = require("i18n");
  module.exports = React.createClass({
    componentDidMount: function() {
      $('.fluid.card .image').dimmer({on: 'hover'});
      $(this.refs.more).on("click",function(){
        window.location = "/posts";
      });

    },
    displayName: "Share",
    render: function() {
      return (
        <div className="column">
          <div className="ui fluid card">
            <div className="blurring dimmable image">
              <div className="ui dimmer">
                <div className="content">
                  <div className="center">
                    <div
                      className="ui inverted button" ref="more"
                      data-action-url="/posts"
                      >
                      {i18n.gettext("More Shares")}
                    </div>
                  </div>
                </div>
              </div>
            <div className="ui embed">
              <iframe src="//giphy.com/embed/hcpVSCSwDcKju?html5=true" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/the-end-hcpVSCSwDcKju"></a></p>
            </div>
            </div>
            <div className="content">
              <div className="meta">
                <span className="right floated time">Via GIPHY</span>
              </div>
            </div>
            <div className="extra content">
              <div className="description">
                  {i18n.gettext("Wanna see more stuff?")}
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
});
