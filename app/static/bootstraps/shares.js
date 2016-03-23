requirejs(["jquery", "semantic", "react", "reactdom", "jsx!components/roots/ShareRoot", "i18n"], function($, semantic, React, ReactDOM, ShareRoot, i18n) {
  $(function() {
    ReactDOM.render(React.createElement(ShareRoot, null), document.getElementById("shares"));
  });
});
