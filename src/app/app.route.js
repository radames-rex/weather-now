(function() {
  'use strict';

  angular
    .module('weather-now')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $translateProvider) {

    // Configuração do provider de universalização e da linguagem padrão.
    $translateProvider.useStaticFilesLoader({
      prefix: 'app/translate/messages-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en-US');
    // $translateProvider.preferredLanguage('pt-BR');
    // $translateProvider.preferredLanguage(navigator.language);

    // Configuração dos estados e rotas da aplicação
    $stateProvider
      .state('main', {
        url: '',
        abstract: true,
        templateUrl: 'app/modules/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm',
        permission: 'public'
      })
      .state('main.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/modules/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'vm',
        permission: 'public'
      });

    $urlRouterProvider.otherwise('/dashboard');
  }

})();
