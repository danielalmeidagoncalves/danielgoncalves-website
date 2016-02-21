define(function(require, exports, module) {
  var React = require("react");
  var ReactIntl = require('reactint');
  //var IntlMixin       = ReactIntl.IntlMixin;
  //var FormattedNumber = ReactIntl.FormattedNumber;

  module.exports = React.createClass({
    componentDidMount: function() {
      $(this.refs.languagetop).dropdown();
    },
    render: function() {
      return (
        <div className="ui large secondary inverted pointing menu">
          <a className="toc item">
            <i className="sidebar icon">
            </i>
          </a>
          <a className="active item">Home</a>
          <a className="item">
            Latest Shares
          </a>
          <a className="item">Contact</a>
          <div className="right item">
            <div className="ui dropdown item" ref="languagetop">
              Language <i className="dropdown icon"></i>
            <div className="menu">
              <a className="item"><i className="us flag"></i> English</a>
              <a className="item"><i className="pt flag"></i> Portuguese</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
})
