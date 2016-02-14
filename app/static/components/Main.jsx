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
          <FollowingMenu>
          </FollowingMenu>
          <SidebarMenu>
          </SidebarMenu>
          <div className="pusher">
            <div className="ui content top header">
              <MastHead>
              </MastHead>
              <UnsplashHeader>
              </UnsplashHeader>
            </div>
            <div className="ui vertical stripe segment">
              <div className="ui middle aligned stackable grid container">
                Quando é que este programa acaba
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

});
