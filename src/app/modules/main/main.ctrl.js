'use strict';

(function() {

  var MainCtrl = function($scope) {
    console.log("Plus Ultra!");
  };

  MainCtrl.$inject = ['$scope'];

  angular
    .module('weather-now.main')
    .controller('MainCtrl', MainCtrl);
})();
