define(function(require, exports, module) {
  var React = require("react");
  var i18n = require("i18n");
  module.exports = React.createClass({
    getInitialState: function() {
      return {shareState: "umounted"};
    },
    componentDidMount: function() {},
    parseCreatedAt: function(createdAt) {
      var moment = require("vendors/moment/moment");
      return moment(createdAt, "DD-MM-YYYY").fromNow();
    },
    parseTags: function(tags) {
        return tags.replace(",", " ");
    },
    parseUnsplashTopic: function(tags) {
      if (tags.length > 0) {
        return "https://source.unsplash.com/" + tags.split(",")[0];
      }

      return "https://source.unsplash.com/random";
    },
    parseBodyMarkdown: function(markdown) {
      var showdown  = require('showdown');
      var converter = new showdown.Converter();
      return { __html:   converter.makeHtml(markdown) };
    },
    parsePostUrl: function(slug) {
      return "/post/" + slug;
    },
    displayName: "ShareRootItem",
    render: function() {
      return (
        <div className="ui raised very padded text container white segment">
          <img className="ui fluid image" src={this.parseUnsplashTopic(this.props['data-tags'])}/>
          <h1 className="ui header">
            {this.props["data-title"]}
            <div className="sub header" data-action-url={this.parsePostUrl(this.props["data-slug"])}>
              <p dangerouslySetInnerHTML={this.parseBodyMarkdown(this.props["data-resume"])}>
              </p>
            </div>
          </h1>
          <div className="ui bottom attached basic label">
            <i className="comment icon"></i>
            {this.parseTags(this.props["data-tags"])}
          </div>
        </div>
      );
    }
  });
});
