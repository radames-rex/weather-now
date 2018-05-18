(function() {
  'use strict';

  angular
    .module('weather-now')
    .run(mainRunBlock);

  /** @ngInject */
  function mainRunBlock($state, $rootScope) {

    /*
     * Função armazenar o nome da rota.
     */
    $rootScope.$on('$stateChangeSuccess',
      function(event, toState, toParams, fromState, fromParams) {
        $rootScope.state = toState.name;
      });

    /*
     * Função para evitar chamar jQuery em Controllers.
     */
    $rootScope.getElement = function(identifier) {
      return $(identifier);
    };

    /*
     * Função para evitar chamar state.go em Controllers.
     */
    $rootScope.goTo = function(route) {
      $state.go(route);
    };
  }

})();
