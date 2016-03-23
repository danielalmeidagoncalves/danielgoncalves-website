requirejs(["jquery", "semantic", "react", "reactdom", "jsx!components/roots/Main", "i18n"], function($, semantic, React, ReactDOM, Main, i18n) {
  $(function() {
    ReactDOM.render(React.createElement(Main, null), document.getElementById("hello"));
  });
});
