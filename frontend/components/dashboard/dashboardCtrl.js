(function () {
  'use strict';

  angular
    .module('ccApp')
    .controller('DashboardCtrl', DashboardCtrl);

  function DashboardCtrl(weatherService) {
    var dashboard = this;

    weatherService.autoIP()
      .then(function (data) {
        console.log(data);
      });


  }
})();