define(function(require, exports, module) {
  // IE
  var language = "en";
  var languageObj;
  if (navigator.browserLanguage) {
    languageObj = navigator.browserLanguage;
  }
  // All other vendors
  else if (navigator.language) {
    languageObj = navigator.language;
  }
  language = (languageObj.split("-").length > 1) ? languageObj.split("-")[0] : languageObj;

  var Jed = require("jed");
  var lang = {};
  if (language === "pt") {
    lang = {
      locale_data: {
        "messages": {
          "": {
            "domain": "messages",
            "lang": "pt",
            "plural_forms": "nplurals=2; plural=(n != 1);"
          },
          "Somewhat a try to make something different": ["Tipo... Uma tentativa de fazer algo diferente"],
          "Home": ["Início"],
          "Latest Shares": ["Últimos Posts"],
          "Contacts": ["Contactos"],
          "No need to find wally to contact me :) just send a message, but before prove me that you are a human by hitting 3 times my face befor submit": ["Não é preciso encontrar o wally para me contactarem :) Enviem uma mensagem!"],
          "Let the words fly!": ["Deixa as palavras voarem!"],
          "Say Hello": ["Digam Olá"],
          "Send": ["Enviar"],
          "Read More": ["Ler Mais"],
          "Comments": ["Comentários"],
          "More Shares": ["Mais Posts"],
          "Wanna see more stuff?": ["Queres ver mais?"],
          "Howdy! My name is Daniel and this is my site.":["Olá! O meu nome é Daniel e este é o meu site."]
        }
      },
      "domain": "messages"
    };
  } else {
    lang = {
      locale_data: {
        "messages": {
          "": {
            "domain": "messages",
            "lang": "en",
            "plural_forms": "nplurals=2; plural=(n != 1);"
          },
          "Somewhat a try to make something different": ["Somewhat a try to make something different"],
          "Home": ["Home"],
          "Latest Shares": ["Latest Shares"],
          "Contacts": ["Contacts"],
          "No need to find wally to contact me :) just send a message, but before prove me that you are a human by hitting 3 times my face before submit": ["No need to find wally to contact me :) just send a message, but before prove me that you are a human by hitting 3 times my face before submit"],
          "Let the words fly!": ["Let the words fly!"],
          "Say Hello": ["Say Hello"],
          "Send": ["Send"],
          "Read More": ["Read More"],
          "Comments": ["Comments"],
          "More Shares": ["More Shares"],
          "Wanna see more stuff?": ["Wanna see more stuff?"],
          "Howdy! My name is Daniel and this is my site.":["Howdy! My name is Daniel and this is my site."]
        }
      },
      "domain": "messages"
    };
  }

  var i18n = new Jed(lang);
  module.exports = i18n;
});
