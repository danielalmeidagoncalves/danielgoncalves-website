requirejs(["jquery", "semantic", "react", "reactdom", "jsx!components/Main", "i18n"], function($, semantic, React, ReactDOM, Main, i18n) {
  $(function() {
    ReactDOM.render(React.createElement(Main, null), document.getElementById("app"));
  });
});
