define(function(require, exports, module) {
  var React = require("react");
  var FollowingMenu = require("jsx!components/menu/FollowingMenu");
  var SidebarMenu = require("jsx!components/menu/SidebarMenu");
  var MastHead = require("jsx!components/header/MastHead");
  var UnsplashHeader = require("jsx!components/header/UnsplashHeader");
  var SharesWrapper = require("jsx!components/content/SharesWrapper");
  var Contact = require("jsx!components/footer/Contact");
  module.exports = React.createClass({
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
    render: function() {
      return (
        <div id="app-wrapper">
          <FollowingMenu></FollowingMenu>
          <SidebarMenu></SidebarMenu>
          <div className="pusher">
            <div ref="header" className="ui content top header">
              <MastHead></MastHead>
              <UnsplashHeader></UnsplashHeader>
            </div>
            <div className="ui vertical stripe segment">
              <div className="ui middle aligned stackable grid container">
                <SharesWrapper></SharesWrapper>
              </div>
            </div>
            <div className="ui inverted vertical footer segment">
              <Contact></Contact>
            </div>
          </div>
        </div>
      );
    }
  });

});
