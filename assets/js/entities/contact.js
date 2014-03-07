ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _){
  Entities.Contact = Backbone.Model.extend({
    defaults: {
      firstName: "",
      lastName: "",
      phoneNumber: "No phone number!"
    }
  });

  Entities.ContactCollection = Backbone.Collection.extend({
    model: Entities.Contact,
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
            return 1;
          } else {
            return -1;
          }
        }
      } else {
        if(aFirstName < bFirstName){
          return 1;
        } else {
          return -1;
        }
      }
    }
  });

  var contacts;

  var initializeContacts = function(){
    contacts = new Entities.ContactCollection([
      {id: 1, firstName: "Alice", lastName: "Arten", phoneNumber: "555-0184"},
      {id: 2, firstName: "Bob", lastName: "Brigham", phoneNumber: "555-0163"},
      {id: 3, firstName: "Charlie", lastName: "Cambell", phoneNumber:"555-0129"}
    ]);
  };

  var API = {
    getContactEntities: function(){
      if(contacts === undefined){
        initializeContacts();
      }
      return contacts;
    }
  };

  ContactManager.reqres.setHandler("contact:entities", function(){
    return API.getContactEntities();
  });
});