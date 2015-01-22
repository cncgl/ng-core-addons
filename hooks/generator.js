var Promise = require("bluebird");
var _ = require("lodash");

module.exports = {

  init: function(ngconfig,args){
    var defer = Promise.defer();
    if(args.entity_name && args.name){
      var valid_entities = ['controller','directive','filter','service','factory','initializer'];
      if(_.contains(valid_entities,args.entity_name)){

      }else{
        console.log(args.entity_name + " is not a valid generator");
        defer.resolve();
      }
    }else{
      defer.reject('Invalid arguments to generate angular entity');
    }
    return defer.promise;
  }
}
