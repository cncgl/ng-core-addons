/**
  @author
  @description
  @name {{name}}Filter
*/
'use strict';

module.exports = /* @ngInject */ function(){
  return function (input) {
    return 'filtered ' + input;
  };
}
