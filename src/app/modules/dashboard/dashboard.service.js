'use strict';

(function() {

  var DashboardService = function($log) {

  };

  DashboardService.$inject = ['$log'];

  angular
    .module('weather-now.dashboard')
    .service('DashboardService', DashboardService);
})();
