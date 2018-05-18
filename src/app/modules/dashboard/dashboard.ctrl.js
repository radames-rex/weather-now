'use strict';

(function() {

  var DashboardCtrl = function($scope, $timeout, DashboardService) {
  	var vm = this;

  	// ID respectivos => Nuuk, Urubici, Nairobi
  	var citiesIDs = '3421319,3445709,184745';

  	vm.weather = [];

  	$timeout(function() {

  	});

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
  		DashboardService.getWeather(citiesIDs).then(function(response) {
  			if (response.data && response.data.list && response.data.list.length > 0) {
  				_.forEach(response.data.list, function(location) {
  					vm.weather.push({
  						city			: location.name,
  						country   : location.sys.country,
  						temp			: location.main.temp ? Math.ceil(location.main.temp) : '',
  						humidity  : location.main.humidity ? Math.ceil(location.main.humidity) : '',
  						pressure  : location.main.pressure ? Math.ceil(location.main.pressure) : '',
  						updatedAt : moment(new Date()).format('HH:mm:ss A'),
  						tempColor : colorWeather(location.main.temp)
  					});
  				});
  			}
  		});
  	}
  };

  DashboardCtrl.$inject = ['$scope', '$timeout', 'DashboardService'];

  angular
    .module('weather-now.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);
})();
