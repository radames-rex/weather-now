'use strict';

(function() {

  var DashboardCtrl = function($scope, $interval, DashboardService, $cookies) {
  	var vm = this;

  	// ID respectivos => Nuuk, Urubici, Nairobi
  	var citiesIDs = '3421319,3445709,184745';

  	vm.weather = [];

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
  		if (weatherFromCache) {
  			vm.weather = weatherFromCache;
  		} else {
	  		DashboardService.getWeather(citiesIDs).then(function(response) {
	  			if (response.data && response.data.list && response.data.list.length > 0) {
	  				_.forEach(response.data.list, function(location) {
	  					vm.weather.push({
	  						city			: location.name,
	  						country   : location.sys.country,
	  						temp			: Math.ceil(location.main.temp),
	  						humidity  : Math.ceil(location.main.humidity),
	  						pressure  : Math.ceil(location.main.pressure),
	  						updatedAt : moment(new Date()).format('HH:mm:ss A'),
	  						tempColor : colorWeather(location.main.temp)
	  					});
	  				});
	  				var expireDate = new Date(Date.now() + 600000);
	  				$cookies.putObject('weather', vm.weather, {'expires': expireDate});
	  			}
	  		});
	  	}
  	}
  };

  DashboardCtrl.$inject = ['$scope', '$interval', 'DashboardService', '$cookies'];

  angular
    .module('weather-now.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);
})();
