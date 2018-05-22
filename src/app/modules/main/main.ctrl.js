'use strict';

(function() {
	/*
   * Controller para o Header e o container que encapsula a aplicação.
   */
  var MainCtrl = function($scope) {
    console.log('Plus Ultra!');
  };

  MainCtrl.$inject = ['$scope'];

  angular
    .module('weather-now.main')
    .controller('MainCtrl', MainCtrl);
})();
