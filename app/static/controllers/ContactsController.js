define(function(require, exports, module) {

  var ContactsController = {
    captchaSatisfied: false,
    setCaptchaSatisfied: function(value) {
      this.captchaSatisfied = value;
    },
    getCaptchaSatisfied: function(){
      return this.captchaSatisfied;
    }
  };

  module.exports = ContactsController;
});
