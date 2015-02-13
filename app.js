'use strict';

// Declare app level module which depends on views, and components
angular.module('ordering', [
  'ngRoute',
  'ngMaterial'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/orders'});
}])
.controller('AppCtrl', function( $scope ) {
        $scope.selectedIndex = 0;
});
