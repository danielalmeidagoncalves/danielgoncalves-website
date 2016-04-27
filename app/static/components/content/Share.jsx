define(function(require, exports, module) {
  var React = require("react");
  var i18n = require("i18n");
  module.exports = React.createClass({
    getInitialState: function() {
      return {shareState: "umounted"};
    },
    componentDidMount: function() {
      $('.fluid.card .image').dimmer({on: 'hover'});
    },
    parseCreatedAt: function(createdAt) {
      var moment = require("vendors/moment/moment");
      return moment(createdAt, "DD-MM-YYYY").fromNow();
    },
    parseTags: function(tags) {
      return tags.replace(",", " ");
    },
    parseUnsplashTopic: function(tags) {
      if (tags.length > 0) {
        return "https://source.unsplash.com/category/" + tags.split(",")[0];
      }

      return "https://source.unsplash.com/random";
    },
    parseBodyMarkdown: function(markdown){
      var showdown  = require('showdown');
      var converter = new showdown.Converter();
      return { __html:   converter.makeHtml(markdown) };
    },
    parsePostUrl: function(slug){
      return "/post/" + slug;
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
                      className="ui inverted button"
                      data-action-url={this.parsePostUrl(this.props["data-slug"])}
                      >
                      {i18n.gettext("Read More")}
                    </div>
                  </div>
                </div>
              </div>
              <img src={this.parseUnsplashTopic(this.props['data-tags'])}/>
            </div>
            <div className="content">
              <div className="header">
                {this.props["data-title"]}
              </div>
              <div className="meta">
                <span className="right floated time">
                  {this.parseCreatedAt(this.props["data-createdat"])}
                </span>
                <span className="category">
                  {this.parseTags(this.props["data-tags"])}
                </span>
              </div>
              <div className="description">
                <p dangerouslySetInnerHTML={this.parseBodyMarkdown(this.props["data-resume"])}>
                </p>
              </div>
            </div>
            <div className="extra content">
              <span className="left floated like">
                <i className="comments icon">
                </i>
                {i18n.gettext("Comments")}
              </span>
              <div className="right floated author">
                <img
                  className="ui avatar image"
                  src="/static/imgs/logo_post.png"/>
                {this.props["data-author"]}
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
});
