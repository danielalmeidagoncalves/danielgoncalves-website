define(function(require, exports, module) {
  var refetch = require("fetch");

  var ContactsActions = {
    postMessage: function(who,contact,nicewords,afterCall) {
      fetch('/message', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: who,
          email: contact,
          message:nicewords
        })
      }).then(function(response) {
        // go on with the data
        return response.json();
      }).then(function(json) {
        // get all the nice things
        // so lets call the thing and say everything is right
        afterCall(json,"success");
      }).catch(function(ex) {
        // somenone maked coco
        afterCall(ex,"error");
      });

    }
  };

  module.exports = ContactsActions;
});
