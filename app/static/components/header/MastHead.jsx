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

        <h3 className="ui center aligned header">
          {i18n.gettext( "Howdy! My name is Daniel and this is my site." )}
        </h3>
        <h4 className="ui center aligned header">
            <a href="https://twitter.com/daniel__deeds" target="_blank"><i className="circular twitter link icon"></i></a>
            <a href="https://www.facebook.com/daniel.deeds" target="_blank"><i className="circular facebook link icon"></i></a>
            <a href="https://dribbble.com/danielgoncalves" target="_blank"><i className="circular dribbble link icon"></i></a>
            <a href="https://angel.co/daniel-goncalves" target="_blank"><i className="circular angellist link icon"></i></a>
            <a href="https://github.com/danielalmeidagoncalves" target="_blank"><i className="circular github link icon"></i></a>
            <a href="https://pt.linkedin.com/in/daniel-gonçalves-b8751a3" target="_blank"><i className="circular linkedin link icon"></i></a>
        </h4>
        </div>
      );
    }
  });
});
