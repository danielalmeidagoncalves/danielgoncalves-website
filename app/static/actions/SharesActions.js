define(function(require, exports, module) {
  var refetch = require("fetch");

  var SharesActions = {
    routes:[],
    getShare: function(idShare){

    },
    getAllShares: function(afterCall){
      fetch('/shares')
      .then(function(response) {
        //check for status
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

  module.exports = SharesActions;
});
