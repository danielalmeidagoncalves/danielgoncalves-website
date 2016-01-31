requirejs.config({
  baseUrl: "/static/jsx",
  paths: {
    jquery: "vendors/jquery/dist/jquery",
    jsx: "vendors/jsx-requirejs-plugins/js/jsx",
    JSXTransformer: "vendors/jsx-requirejs-plugins/js/JSXTransformer",
    react: "vendors/react/react-with-addons",
    text: "vendors/requirejs-text/text",
    semantic: "vendors/semantic/dist"
  },
  jsx: {
    fileExtension: ".jsx"
  }
});
