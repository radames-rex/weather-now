(function() {
  'use strict';

  angular
    .module('weather-now')
    .constant('ENV', {
      api: {
        url : 'https://api.openweathermap.org/',
        token : '122131231'
      }
    })
})();
