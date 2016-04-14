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
            <h2 className="ui center aligned icon header">
              <i className="announcement icon"></i>
              {this.props.title}
            </h2>
            {this.props.title}
          </div>
          <div className="image content">
            <div className="description" ref="description">
              {this.props.description}
            </div>
          </div>
        </div>
      );
    }
  });
});
