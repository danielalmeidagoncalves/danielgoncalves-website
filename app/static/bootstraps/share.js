requirejs(["jquery", "semantic", "react", "reactdom", "jsx!components/roots/SingleShareRoot", "i18n"], function($, semantic, React, ReactDOM, SingleShareRoot, i18n) {
  $(function() {
    ReactDOM.render(React.createElement(SingleShareRoot, null), document.getElementById("share"));
  });
});
