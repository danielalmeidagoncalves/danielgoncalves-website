define(function(require, exports, module) {
  var React = require("react");
  module.exports = React.createClass({
    componentDidMount: function() {
      $(this.refs.close)
      .on('click', function() {
        $(this)
        .closest('.message')
        .transition('fade')
        ;
      });
    },
    render: function() {
      return (
        <div className="ui container">
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="eight wide column">
              <img
                className="ui fluid image"
                src="/static/imgs/waldo.png" />
            </div>
            <div className="eight wide column">
              <form className="ui form">
                <div className="field">
                  <div className="ui info message">
                    <i className="close icon" ref="close">
                    </i>
                    <div className="header">
                      No need to find wally to contact me :) just send a message
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <input
                      type="text"
                      placeholder="Your Name" />
                    <i className="user icon">
                    </i>
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <input
                      type="text"
                      placeholder="you@youremail.etc" />
                    <i className="mail icon">
                    </i>
                  </div>
                </div>
                <div className="field">
                  <div className="ui tall stacked segment">
                    <a className="ui red ribbon label">
                      Let the words fly!
                    </a>
                    <textarea>
                    </textarea>
                  </div>
                </div>
                <div>
                  <div className="field">
                    <div
                      className="ui fluid positive animated fade button"
                      tabIndex="0">
                      <div className="visible content">
                        Say Hello
                      </div>
                      <div className="hidden content">
                        Send
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  });
});
