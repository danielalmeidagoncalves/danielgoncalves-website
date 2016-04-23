define(function(require, exports, module) {
  var React = require("react");
  var FollowingMenu = require("jsx!components/menu/FollowingMenu");
  var SidebarMenu = require("jsx!components/menu/SidebarMenu");
  var TopMenu = require("jsx!components/menu/TopMenu");
  var ShareRootItem = require("jsx!components/content/ShareRootItem");

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
        SharesActions.getAllShares(this.afterGetShares);
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
            <ShareRootItem key={sharesList[share]._rev}
              data-author={sharesList[share].author}
              data-title={sharesList[share].title}
              data-resume={sharesList[share].resume}
              data-slug={sharesList[share].slug}
              data-createdat = {sharesList[share].created_at}
              data-tags= {sharesList[share].tags.join(",")}>
            </ShareRootItem>
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
            <div className="ui vertical stripe gray segment">
              <div className="ui middle aligned stackable grid container">
                    {this.renderShares()}
              </div>
            </div>
            <div className="ui inverted vertical footer segment">
              FOOTER
            </div>
          </div>
        </div>
      );
    }
  });

});
