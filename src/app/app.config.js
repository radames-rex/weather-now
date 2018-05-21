(function() {
  'use strict';

  angular
    .module('weather-now')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $locationProvider.hashPrefix('');
  }

})();
