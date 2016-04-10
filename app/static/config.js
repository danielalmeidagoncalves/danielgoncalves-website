requirejs.config({
  baseUrl: "/static",
  urlArgs: "bust=" + (new Date()).getTime(),
  paths: {
    jquery: "vendors/jquery/dist/jquery",
    jsx: "vendors/jsx-requirejs-plugin/js/jsx",
    JSXTransformer: "vendors/jsx-requirejs-plugin/js/JSXTransformer",
    react: "vendors/react/react-with-addons",
    reactdom: "vendors/react/react-dom",
    text: "vendors/requirejs-text/text",
    semantic: "vendors/semantic/dist/semantic",
    jed: "vendors/jed/jed",
    i18n: "i18n/translation",
    fetch: "vendors/fetch/fetch",
    sharesactions: "actions/SharesActions",
    contactsactions: "actions/ContactsActions",
    moment: "vendors/moment/moment",
    showdown: "vendors/showdown/dist/showdown"
  },
  shim: {
	  'semantic': {
		  exports: 'semantic',
		  deps: ['jquery']
	  }
  },
  jsx: {
    fileExtension: ".jsx"
  },
  config: {
        moment: {
            noGlobal: false
        },
        showdown: {
            noGlobal: false
        }
    }
});
