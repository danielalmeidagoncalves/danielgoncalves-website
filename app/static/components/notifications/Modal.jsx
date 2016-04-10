define(function(require, exports, module) {
  var React = require("react");
  var i18n = require("i18n");

  module.exports = React.createClass({
    componentDidMount: function() {
      $('.ui.basic.modal').modal({blurring: true});
    },
    setDescription: function(description){
      $(this.refs.description).html(description);
    },
    setTitle: function(title){
      $(this.refs.header).html(title);
    },
    render: function() {
      return (
        <div className="ui basic modal">
          <i className="close icon"></i>
          <div className="header" ref="header">
            {this.props.title}
          </div>
          <div className="image content">
            <div className="description" ref="description">
              {this.props.description}
            </div>
          </div>
          <div className="actions">
            <div className="ui button">{i18n.gettext("OK")}</div>
          </div>
        </div>
      );
    }
  });
});
