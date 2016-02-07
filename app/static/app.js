requirejs(["jquery", "semantic","react","reactdom","jsx!components/Main"], function($,semantic,React,ReactDOM, Main) {
  $(function() {
    ReactDOM.render(React.createElement(Main, null), document.getElementById("app"));
  });
});
