define(function(require, exports, module) {
  var React = require("react");
  var Share = require("jsx!components/content/Share");
  var MoreShares = require("jsx!components/content/MoreShares");
  var SharesActions = require("sharesactions");
  var latestShares = [];
  module.exports = React.createClass({
    getInitialState: function() {
      return {wrapperStates: "umounted"};
    },
    componentWillMount: function() {
      SharesActions.getAllShares(this.afterGetShares);
    },
    afterGetShares: function(shares, status) {
      latestShares = shares;
      // let change the state
      this.setState({wrapperStates: "mounted"});
    },
    renderShares: function() {
      var sharesTmpl = [];
      for (var share in latestShares) {
        if (latestShares.hasOwnProperty(share)) {
          sharesTmpl.push(
            <Share key={latestShares[share]._rev}
              data-author={latestShares[share].author}
              data-title={latestShares[share].title}
              data-resume={latestShares[share].resume}
              data-slug={latestShares[share].slug}
              data-createdat = {latestShares[share].created_at}
              data-tags= {latestShares[share].tags.join(",")}>
            </Share>
          );
        }
      }

      return sharesTmpl;
    },
    displayName: "ShareWrapper",
    render: function() {
      return (
        <div id="latest-shares" ref="latestshares" className="ui three column grid">
          {this.renderShares()}
          <MoreShares></MoreShares>
        </div>
      );
    }
  });
});
