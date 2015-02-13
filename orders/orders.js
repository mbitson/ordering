'use strict';

angular.module('ordering.orders', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/orders', {
    templateUrl: 'orders/orders.html',
    controller: 'OrdersCtrl'
  });
}])

.controller('OrdersCtrl', [function() {

}]);