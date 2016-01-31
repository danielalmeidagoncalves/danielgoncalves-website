requirejs(["jquery", "react","reactdom","jsx!main"], function($, React,ReactDOM, Main) {
  $(function() {
    ReactDOM.render(React.createElement(Main, null), document.body);
  });
});
