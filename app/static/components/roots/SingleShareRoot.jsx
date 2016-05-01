define(function(require, exports, module) {
  var React = require("react");
  var FollowingMenu = require("jsx!components/menu/FollowingMenu");
  var SidebarMenu = require("jsx!components/menu/SidebarMenu");
  var TopMenu = require("jsx!components/menu/TopMenu");
  var ShareRootItem = require("jsx!components/content/ShareRootItem");
  var Footer = require("jsx!components/footer/FooterAck");
  var Tag = require("jsx!components/content/Tag");
  var SHORTNAME = "danielalmeidagoncalves";
  var WEBSITE_URL = "http://www.danielgoncalves.pt";

  var SharesActions = require("sharesactions");
  var sharePost = {
    author:"DGoncalves",
    title:"Hello",
    slug:"hello",
    body:"Be nice to people",
    createdat:"07-10-1984",
    tags:[
      "hello"
    ],
    resume:"Be nice"
  };
  module.exports = React.createClass({
    getInitialState: function() {
      return {wrapperStates: "umounted"};
    },
    componentDidMount: function() {
      // fix menu when passed
      $(this.refs.header).visibility({
        once: false,
        onBottomPassed: function() {
          $("body").prepend($('.fixed.menu').clone());
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function() {
          $("body").find(".fixed.menu:first").remove();
          $('.fixed.menu').transition('fade out');
        }
      });

      this.renderDisqus();
    },
    componentDidUpdate: function() {
      this.renderDisqus();
    },
    componentWillMount: function() {
      var urlPath = new URL(window.location);
      var paths = urlPath.pathname.split("/");
      SharesActions.getShareBySlug(paths[paths.length-1],this.afterGetShares);
    },
    afterGetShares: function(shares, status) {
      sharePost.author = shares[0].author;
      sharePost.title = shares[0].title;
      sharePost.slug = shares[0].slug;
      sharePost.body = shares[0].body;
      sharePost.createdat = shares[0].created_at;
      sharePost.resume = shares[0].resume;
      sharePost.tags = shares[0].tags;
      // let change the state
      this.setState({wrapperStates: "mounted"});
    },
    parseMarkdown: function(markdown){
      var showdown  = require('showdown');
      var converter = new showdown.Converter();
      return { __html:   converter.makeHtml(markdown) };
    },
    getProperty: function(prop){
        if(sharePost.hasOwnProperty(prop)){
          return sharePost[prop];
        }

        return "Not Available";
    },
    parseCreatedAt: function(createdAt) {
      var moment = require("vendors/moment/moment");
      return moment(createdAt, "DD-MM-YYYY").fromNow();
    },
    renderTags: function(){
      var tagsTmpl = [];
      for (var tag in this.getProperty("tags")) {
        if (this.getProperty("tags").hasOwnProperty(tag)) {
          tagsTmpl.push(
            <Tag key={"tag_"+tag}data-tag={this.getProperty("tags")[tag]}>
            </Tag>
          );
        }
      }

      return tagsTmpl;
    },
    parseUnsplashTopic: function(){
      if(this.getProperty("tags").length > 0){
          return "https://source.unsplash.com/category/"+this.getProperty("tags")[0];
      }

      return "https://source.unsplash.com/random";
    },
    renderDisqus: function(){
        if (window.DISQUS === undefined) {
          var script = document.createElement('script');
          script.async = true;
          script.src = 'https://' + SHORTNAME + '.disqus.com/embed.js';
          document.getElementsByTagName('head')[0].appendChild(script);
        } else {
          window.DISQUS.reset({reload: true});
        }
    },
    render: function() {
     window.disqus_shortname = SHORTNAME;
     window.disqus_identifier = this.getProperty("slug");
     window.disqus_title = this.getProperty("title");
     window.disqus_url = WEBSITE_URL + "/post/"+this.getProperty("slug");
      return (
        <div id="app-wrapper">
          <FollowingMenu data-goback="true"></FollowingMenu>
          <SidebarMenu data-goback="true"></SidebarMenu>
          <div className="pusher">
            <div ref="header" className="ui content top header">
              <div className="ui inverted vertical center aligned segment">
                <div className="ui container">
                  <TopMenu data-goback="true"></TopMenu>
                </div>
              </div>
            </div>

            <div className="ui middle aligned stackable container">
              <a className="ui large circular gray image label">
              <img className="ui right spaced avatar image" src="/static/imgs/logo_post.png" />
              {this.getProperty("author")}
              <div className="detail">{this.parseCreatedAt(this.getProperty("createdat"))}</div>
            </a>
            </div>

            <div id="unsplash" ref="unsplashImage" className="ui center aligned basic segment">
              <img src={this.parseUnsplashTopic()}/>
            </div>

            <div className="ui center huge header aligned basic segment">
              <div dangerouslySetInnerHTML={this.parseMarkdown(this.getProperty("title"))}>
              </div>
            </div>

            <div className="ui center sub header aligned basic segment">
              <div dangerouslySetInnerHTML={this.parseMarkdown(this.getProperty("resume"))}>
              </div>
            </div>

            <div className="ui vertical stripe gray segment">
              <div className="ui middle aligned stackable grid container">
                <div dangerouslySetInnerHTML={this.parseMarkdown(this.getProperty("body"))}>
                </div>
              </div>
              <div className="ui middle aligned stackable grid container">
                  {this.renderTags()}
              </div>
            </div>
            <div className="ui vertical stripe white segment">
              <div className="ui middle aligned container">
                <div id="disqus_thread"></div>
              </div>
            </div>
            <div className="ui inverted vertical footer segment">
              <Footer></Footer>
            </div>
          </div>
        </div>
      );
    }
  });

});
