describe("Dashboard Controller -> ", function() {
  var a, vm;

  beforeEach(function(){
    angular.mock.module("weather-now");
         
    angular.mock.inject(function($controller, $rootScope) {
        $scope = $rootScope.$new();
             
        vm = $controller("DashboardCtrl", {
            $scope : $scope
        });
    });
	});

	it("should start weathers empty", function() {
    expect(vm.weather.length).toEqual(0);
  });

  it("color weather should give correct color", function() {
  	var cold = vm.colorWeather(0);
		var normal = vm.colorWeather(12);
		var hot = vm.colorWeather(38);
    expect(cold).toEqual('weather-cold');
    expect(normal).toEqual('weather-normal');
    expect(hot).toEqual('weather-hot');
  });

  it("should if it does not have cached data it makes requests to the time API", function() {
    vm.init();
    console.log(vm.weather);
    expect(vm.weather.length).not.toEqual(0);
  });

  it("should if you have cached data it displays", function() {
    vm.init();
    console.log(vm.weather);
    expect(vm.weather.length).not.toEqual(0);
  });

  it("should update the data every 10 minutes", function() {
  	//TODO
  });
});
