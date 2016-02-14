define(function(require, exports, module) {
  var React = require("react");
  var TopMenu = require("jsx!components/menu/TopMenu");
  var HeadCard = require("jsx!components/header/HeadCard");
  module.exports = React.createClass({
    componentDidMount: function() {

    },
    render: function() {
      return (
        <div className="ui inverted vertical masthead center aligned segment">
          <div className="ui container">
            <TopMenu>
            </TopMenu>
          </div>

          <div className="ui text container">
            <HeadCard>
            </HeadCard>
          </div>

        <h2 className="ui center aligned header">
            Somewhat a try to make something different
        </h2>
        </div>
      );
    }
  });
});
