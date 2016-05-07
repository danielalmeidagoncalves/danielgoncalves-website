define(function(require, exports, module) {
  var React = require("react");
  var i18n = require("i18n");
  module.exports = React.createClass({
    componentDidMount: function() {
      $('.devicons').popup();
    },
    render: function() {
      return (
        <div id="acknowledgements" className="ui container">
          <div className="ui horizontal inverted small divided link list">
            <div className="header">
              <div className="text">
                <i className="favorite icon"></i>{i18n.gettext("Build with these wonderful tools: ")}
              </div>
              <span data-variation="tiny" data-content="Linux" data-position="top center" className="devicons devicons-linux"></span>
              <span data-variation="tiny" data-content="Python" data-position="top center" className="devicons devicons-python"></span>
              <span data-variation="tiny" data-content="CSS3" data-position="top center" className="devicons devicons-css3"></span>
              <span data-variation="tiny" data-content="HTML5" data-position="top center" className="devicons devicons-html5"></span>
              <span data-variation="tiny" data-content="Javascript" data-position="top center" className="devicons devicons-javascript"></span>
              <span data-variation="tiny" data-content="RequireJS" data-position="top center" className="devicons devicons-requirejs"></span>
              <span data-variation="tiny" data-content="SAAS" data-position="top center" className="devicons devicons-sass"></span>
              <span data-variation="tiny" data-content="Semantic-UI" data-position="top center" className="devicons devicons-sublime"></span>
              <span data-variation="tiny" data-content="Flask" data-position="top center" className="devicons devicons-flask"><img src="/static/imgs/flask.png" /></span>
              <span data-variation="tiny" data-content="React" data-position="top center" className="devicons devicons-react"><img src="/static/imgs/reactjs.png" /></span>
              <span data-variation="tiny" data-content="JQuery" data-position="top center" className="devicons devicons-jquery"></span>
              <span data-variation="tiny" data-content="Atom" data-position="top center" className="devicons devicons-atom"></span>
              <span data-variation="tiny" data-content="Bower" data-position="top center" className="devicons devicons-bower"></span>
              <span data-variation="tiny" data-content="Github" data-position="top center" className="devicons devicons-github_alt"></span>
              <span data-variation="tiny" data-content="Markdown" data-position="top center" className="devicons devicons-markdown"></span>
              <span data-variation="tiny" data-content="Nginx" data-position="top center" className="devicons devicons-nginx"></span>
              <span data-variation="tiny" data-content="Travis" data-position="top center" className="devicons devicons-travis"></span>
          </div>
          <div>
            <a href="//www.hotjar.com/?utm_source=badge"><img src="//static.hotjar.com/b/hotjar-badge-light.png" alt="Hotjar - Unlimited insights from your web and mobile sites" /></a>          </div>
          </div>
        </div>
      );
    }
  });
});
