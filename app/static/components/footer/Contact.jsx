define(function(require, exports, module) {
  var React = require("react");
  module.exports = React.createClass({
    componentDidMount: function() {
      $('.fluid.card .image').dimmer({
        on: 'hover'
      });
    },
    render: function() {
      return (
          <div className="ui container">
            <div className="ui stackable inverted divided equal height stackable grid">
              <div className="eight wide column">
                <img className="ui fluid image" src="/static/imgs/waldo.png" />
              </div>
              <div className="seven wide column">
                <h4 className="ui inverted header">
                  Footer Header
                </h4>
                <p>
                  Extra space for a call to action inside the footer that could help re-engage users.
                </p>
              </div>
            </div>
          </div>
      );
    }
  });
});
