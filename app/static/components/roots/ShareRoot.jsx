define(function(require, exports, module) {
  var React = require("react");
  var FollowingMenu = require("jsx!components/menu/FollowingMenu");
  var SidebarMenu = require("jsx!components/menu/SidebarMenu");
  var TopMenu = require("jsx!components/menu/TopMenu");
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
              <div className="ui inverted vertical center aligned segment">
                <div className="ui container">
                  <TopMenu></TopMenu>
                </div>
              </div>
            </div>
            <div className="ui vertical stripe gray segment">
              <div className="ui middle aligned stackable grid container">
                    <div className="ui raised very padded text container white segment">
                        <img className="ui fluid image" src="https://source.unsplash.com/random" />
                        <h1 className="ui header">
                          Babies with bronchitis and thousands struggling in northern Greece
                           <div className="sub header">By Dr Michael Kuhnel-Rouchouze…</div>
                        </h1>
                        <div className="ui bottom attached basic label">
                          <i className="comment icon"></i>
                           Veronika
                        </div>
                    </div>
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
