define(function(require, exports, module) {
  var React = require("react");
  module.exports = React.createClass({
    componentDidMount: function() {
      $('.fluid.card .image').dimmer({
        on: 'hover'
      });
    },
    render: function() {
      return (
        <div className="column">
          <div className="ui fluid card">
            <div className="blurring dimmable image">
              <div className="ui dimmer">
                <div className="content">
                  <div className="center">
                    <div className="ui inverted button">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
              <img src="https://source.unsplash.com/random" />
            </div>
            <div className="content">
              <div className="header">
                Something smart to be said
              </div>
              <div className="meta">
                <span className="right floated time">
                  2 days ago
                </span>
                <span className="category">Web</span>
              </div>
              <div className="description">
                <p>
                  Some nice description
                </p>
              </div>
            </div>
            <div className="extra content">
              <span className="left floated like">
                <i className="comments icon">
                </i>
                Comments
              </span>
              <div className="right floated author">
                <img
                  className="ui avatar image"
                  src="/static/imgs/logo_post.png" /> Daniel
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  });
