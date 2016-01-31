requirejs.config({
  baseUrl: "/static",
  paths: {
    jquery: "vendors/jquery/dist/jquery",
    jsx: "vendors/jsx-requirejs-plugin/js/jsx",
    JSXTransformer: "vendors/jsx-requirejs-plugin/js/JSXTransformer",
    react: "vendors/react/react-with-addons",
    reactdom: "vendors/react/react-dom",
    text: "vendors/requirejs-text/text",
    semantic: "vendors/semantic/dist/semantic.min"
  },
  jsx: {
    fileExtension: ".jsx"
  }
});
