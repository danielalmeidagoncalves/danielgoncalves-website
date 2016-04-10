define(function(require, exports, module) {
  var React = require("react");
  var i18n = require("i18n");
  var Modal = require("jsx!components/notifications/Modal");
  module.exports = React.createClass({
    componentDidMount: function() {
      var postMessageCallback = this.onPostMessageSuccess;
      $(this.refs.close).on('click', function() {
        $(this).closest('.message').transition('fade');
      });

      $(this.refs.send).on("click", function() {
        $('.ui.form').form('validate form');
      });

      $('.ui.form').form({
        onFailure: function(formErrors, fields) {
          console.log("failure");
        },
        onSuccess: function(event, fields) {
          var ContactsActions = require("contactsactions");
          ContactsActions.postMessage($('.ui.form').form('get value', 'name'), $('.ui.form').form('get value', 'email'), $('.ui.form').form('get value', 'message'), postMessageCallback);
        },
        inline: true,
        fields: {
          name: {
            rules: [
              {
                type: 'empty',
                prompt: 'Dont be shy tell me your name'
              }
            ]
          },
          email: {
            rules: [
              {
                type: 'email',
                prompt: 'Common!! I promise I will not spam you with photos of cute cats'
              }
            ]
          },
          message: {
            rules: [
              {
                type: 'empty',
                prompt: 'Sending me a message without a message, that is a new kind of stuff!!'
              }
            ]
          }
        }
      });

    },
    onPostMessageSuccess: function() {
      debugger;
      console.log(Modal);
      this.refs.modal.setTitle("Success");
      this.refs.modal.setDescription("Success");
      $('.ui.basic.modal').modal('show');
    },
    render: function() {
      return (
        <div id="contacts" className="ui container">
          <Modal ref="modal"></Modal>
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="eight wide column">
              <img className="ui fluid image" src="/static/imgs/waldo.png"/>
            </div>
            <div className="eight wide column">
              <form className="ui form">
                <div className="field">
                  <div className="ui info message">
                    <i className="close icon" ref="close"></i>
                    <div className="header">
                      {i18n.gettext("No need to find wally to contact me :) just send a message")}
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <input type="text" placeholder="Your Name" name="name"/>
                    <i className="user icon"></i>
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <input type="text" placeholder="you@youremail.etc" name="email"/>
                    <i className="mail icon"></i>
                  </div>
                </div>
                <div className="field">
                  <div className="ui tall stacked segment">
                    <a className="ui red ribbon label">
                      {i18n.gettext("Let the words fly!")}
                    </a>
                    <textarea name="message"></textarea>
                  </div>
                </div>
                <div>
                  <div className="field">
                    <div className="ui fluid positive animated fade button" tabIndex="0" ref="send">
                      <div className="visible content">
                        {i18n.gettext("Say Hello")}
                      </div>
                      <div className="hidden content">
                        {i18n.gettext("Send")}
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
