ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _){
  ContactManager.Contact = Backbone.Model.extend({
    defaults: {
      firstName: "",
      lastName: "",
      phoneNumber: "No phone number!"
    }
  });

  ContactManager.ContactCollection = Backbone.Collection.extend({
    model: ContactManager.Contact,
    comparator: function(a, b){
      var aFirstName = a.get("firstName");
      var bFirstName = b.get("fistName");

      if(aFirstName === bFirstName){
        var aLastName = a.get("lastName");
        var bLastName = b.get("lastName");
        if(aLastName === bLastName){
          return 0;
        } else {
          if(aLastName < bLastName){
            return -1;
          } else {
            return 1;
          }
        }
      } else {
        if(aFirstName < bFirstName){
          return -1;
        } else {
          return 1;
        }
      }
    }
  });
});