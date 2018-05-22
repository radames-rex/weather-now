'use strict';

(function() {

  var DashboardService = function($http, $log, ENV) {

    /*
     * Faz a requisição para a API do tempo traz informações climáticas de determinada cidade (by ID).
     */
    this.getWeather = function(IDs) {
      return $http({
        method: 'GET',
        url: ENV.API.URL + ENV.API.VERSION + 'weather?id='+IDs+'&APPID='+ENV.API.KEY+'&units=metric',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    };
  };

  DashboardService.$inject = ['$http', '$log', 'ENV'];

  angular
    .module('weather-now.dashboard')
    .service('DashboardService', DashboardService);
})();
