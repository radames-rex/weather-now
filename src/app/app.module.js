(function() {
  'use strict';

  angular
    .module('weather-now', [
      'ngCookies',
      'ngAria',
      'ui.router',
      'pascalprecht.translate',
      'toastr',

      'weather-now.components',
      'weather-now.filters',
      'weather-now.helpers',

      'weather-now.main',
      'weather-now.dashboard'
    ]);
})();
