(function () {
  'use strict';

  angular
    .module('ccApp')
    .service('weatherService', weatherService);

  function weatherService($http) {
    var weatherData = {};
    var wunderApi = 'http://api.wunderground.com/api/e829ed640c298eea';
    var locationIP = wunderApi + '/geolookup/q/autoip.json';
    var userZip = '';
    var hourlyApi = wunderApi + '/hourly/q/' + userZip;

    weatherData.autoIP = function () {
      return $http.get(locationIP).then(function (response) {
        userZip = response.data.location.zip;
        weatherData.hourly();
      }, function (error) {
        console.log(error);
      });
    };

    weatherData.hourly = function () {
      return $http.get(hourlyApi).then(function (response) {
        return response;
      }, function (error) {
        console.log(error);
      });
    };
    return weatherData;
  }
})();