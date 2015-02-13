'use strict';

// Declare app level module which depends on views, and components
angular.module('ordering', [
  'ngRoute',
  'ordering.orders',
  'ordering.order'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/orders'});
}]);
