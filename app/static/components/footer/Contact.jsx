define(function(require, exports, module) {
  var React = require("react");
  var i18n = require("i18n");
  var Modal = require("jsx!components/notifications/Modal");
  var FooterAck = require("jsx!components/footer/FooterAck");

  module.exports = React.createClass({
    componentDidMount: function() {
      var postMessageCallback = this.onPostMessageSuccess;
      var component = this;
      $(this.refs.close).on('click', function() {
        $(this).closest('.message').transition('fade');
      });

      $(this.refs.send).on("click", function() {
        $('.ui.form').form('validate form');
      });

      $('.devicons').popup();

      $('.ui.form').form({
        onFailure: function(formErrors, fields) {
          console.log("failure");
        },
        onSuccess: function(event, fields) {
          var ContactsActions = require("contactsactions");
          var ContactsController = require("contactscontroller");
          if(ContactsController.getCaptchaSatisfied()){
              ContactsActions.postMessage($('.ui.form').form('get value', 'name'), $('.ui.form').form('get value', 'email'), $('.ui.form').form('get value', 'message'), postMessageCallback);

          } else {
            component.refs.modal.setTitle(i18n.gettext("Prove that you are not a machine like a vacuum cleaner."));
            component.refs.modal.setDescription(i18n.gettext("You must first hit 3 times (you may hit much more times if you wish :) ) before sending a message."));
            $('.ui.basic.modal').modal('show');
          }
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
      this.refs.modal.setTitle(i18n.gettext("Thanks Mate!"));
      this.refs.modal.setDescription(i18n.gettext("Thank you for the message, hope I can reply to you as soon as I can."));
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
                      {i18n.gettext("No need to find wally to contact me :) just send a message, but before prove me that you are a human by hitting 3 times my face before submit")}
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
          <div className="ui inverted section divider"></div>
          <FooterAck></FooterAck>
        </div>
      );
    }
  });
});
