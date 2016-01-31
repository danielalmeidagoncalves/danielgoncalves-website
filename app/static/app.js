requirejs(["jquery", "react","reactdom","jsx!components/main"], function($, React,ReactDOM, Main) {
  $(function() {
    ReactDOM.render(React.createElement(Main, null), document.getElementById("app"));
  });
});
