requirejs(["jquery", "react", "jsx"], function($, React, Main) {
  $(function() {
    React.render(React.createElement(Main, null), document.body);
  });
});
