define(function(require, exports, module) {
  var React = require("react");
  var FollowingMenu = require("jsx!components/menu/FollowingMenu");
  var SidebarMenu = require("jsx!components/menu/SidebarMenu");
  var MastHead = require("jsx!components/header/MastHead");
  var UnsplashHeader = require("jsx!components/header/UnsplashHeader");
  module.exports = React.createClass({
    render: function() {
      return (
        <div id="app-wrapper">
          <FollowingMenu></FollowingMenu>
          <SidebarMenu></SidebarMenu>
          <div className="pusher">
            <div className="ui content">
              <MastHead></MastHead>
              <UnsplashHeader></UnsplashHeader>
            </div>
          </div>
        </div>
      )
    }
  });

})
