define(function(require, exports, module) {
  var React = require("react");
  var FollowingMenu = require("jsx!components/menu/FollowingMenu");
  var SidebarMenu = require("jsx!components/menu/SidebarMenu");
  var TopMenu = require("jsx!components/menu/TopMenu");
  var ShareRootItem = require("jsx!components/content/ShareRootItem");
  var Footer = require("jsx!components/footer/FooterAck");

  var SharesActions = require("sharesactions");
  var sharesList = [];
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

      var anchor = window.location.hash;
      if (typeof anchor !== undefined && anchor !== '') {
        $('html, body').stop().animate({
          scrollTop: $(anchor).offset().top
        }, 1500);
      }
    },
    componentWillMount: function() {
      //SharesActions.getAllShares(this.afterGetShares);
    },
    afterGetShares: function(shares, status) {
      sharesList = shares;
      // let change the state
      this.setState({wrapperStates: "mounted"});
    },
    renderShares: function() {
      var sharesTmpl = [];
      for (var share in sharesList) {
        if (sharesList.hasOwnProperty(share)) {
          sharesTmpl.push(
            <ShareRootItem key={sharesList[share]._rev} data-author={sharesList[share].author} data-title={sharesList[share].title} data-resume={sharesList[share].resume} data-slug={sharesList[share].slug} data-createdat={sharesList[share].created_at} data-tags={sharesList[share].tags.join(",")}></ShareRootItem>
          );
        }
      }

      return sharesTmpl;
    },
    render: function() {
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
              DGoncalves
              <div className="detail">2016-01-03</div>
            </a>
            </div>

            <div id="unsplash" ref="unsplashImage" className="ui center aligned basic segment">
              <img className="" src="https://source.unsplash.com/category/technology"/>
            </div>

            <div className="ui center huge header aligned basic segment">
              Huge Header
            </div>

            <div className="ui center sub header aligned basic segment">
              Huge Header
            </div>

            <div className="ui vertical stripe gray segment">
              <div className="ui middle aligned stackable grid container">
                Share Single
              </div>
              <div className="ui middle aligned stackable grid container">
                <div className="ui label">
                  Fun
                </div>
                <div className="ui label">
                  Happy
                </div>
                <div className="ui label">
                  Smart
                </div>
                <div className="ui label">
                  Witty
                </div>
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
