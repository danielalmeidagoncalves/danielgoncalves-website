define(function(require, exports, module) {
  var React = require("react");
  var TopMenu = require("jsx!components/menu/TopMenu");
  module.exports = React.createClass({
    componentDidMount: function() {

    },
    render: function() {
      return (
        <div className="ui inverted vertical masthead center aligned segment">
          <div className="ui container">
            <TopMenu></TopMenu>
          </div>

        <div className="ui container">
        </div>

        </div>

      )
    }
  })
})
