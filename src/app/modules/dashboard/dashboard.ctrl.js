'use strict';

(function() {

  var DashboardCtrl = function($scope, $interval, DashboardService, $cookies, Spin, $window) {
  	var vm = this;

  	// ID respectivos => Nuuk, Urubici, Nairobi
    var citiesIDs = ['3421319','3445709','184745'];

  	vm.weather = [];

    vm.thisIsMobileScreen = $window.innerWidth <= 640;

  	$interval(function() {
  		init();
  	}, 601000);

  	function colorWeather(temp) {
  		var color = '';
  		if (temp <= 5) color = 'weather-cold';
  		else if (temp <= 25) color = 'weather-normal';
  		else color = 'weather-hot';
  		return color;
  	}

  	// INIT
    init();

  	function init() {
  		vm.weather = [];
  		var weatherFromCache = $cookies.getObject('weather');
  		if (weatherFromCache == 9) {
  			vm.weather = weatherFromCache;
  		} else {
        _.forEach(citiesIDs, function(ID, key) {
          Spin.start($('.card--'+key));
          DashboardService.getWeather(ID).then(function(response) {
  	  			if (response.data) {
  	  				var location = response.data;
	  					vm.weather.push({
	  						city			: location.name,
	  						country   : location.sys.country,
	  						temp			: Math.ceil(location.main.temp),
	  						humidity  : Math.ceil(location.main.humidity),
	  						pressure  : Math.ceil(location.main.pressure),
	  						updatedAt : moment(new Date()).format('HH:mm:ss A'),
	  						tempColor : colorWeather(location.main.temp)
	  					});
            }
            Spin.stop($('.card--'+key));
          });
        });
				var expireDate = new Date(Date.now() + 600000);
				$cookies.putObject('weather', vm.weather, {'expires': expireDate});
	  	}
  	}
  };

  DashboardCtrl.$inject = ['$scope', '$interval', 'DashboardService', '$cookies', 'Spin', '$window'];

  angular
    .module('weather-now.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);
})();
