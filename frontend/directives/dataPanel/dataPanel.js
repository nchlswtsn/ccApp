(function() {
  'use strict';

  angular
    .module('ccApp')
    .directive('panelsData', panelsData);
    
    
    function panelsData() {
      return {
        restrict: 'EACM',
        templateUrl: './directives/dataPanel/dataPanel.html',
        replace: true
      };
    }
})();