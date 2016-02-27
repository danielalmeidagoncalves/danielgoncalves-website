define(function(require, exports, module) {
  var React = require("react");
  var TopMenu = require("jsx!components/menu/TopMenu");
  var HeadCard = require("jsx!components/header/HeadCard");
  var i18n = require("i18n");
  //var I18ner = require("jsx!components/i18n/I18ner");

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
          {i18n.gettext( "Somewhat a try to make something different" )}
        </h2>
        </div>
      );
    }
  });
});
