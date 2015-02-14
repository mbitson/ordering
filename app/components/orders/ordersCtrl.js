/**
 * Created by mbitson on 2/13/2015.
 */
var ordering = angular.module('ordering');
ordering.controller('ordersCtrl', ["$scope", "$firebase", function ($scope, $firebase) {
    var ref = new Firebase("https://shining-heat-9147.firebaseio.com/");
    var ordersRef = ref.child("orders");
    var sync = $firebase(ordersRef);
    var syncObject = sync.$asObject();
    syncObject.$bindTo($scope, "orders");

    $scope.data = {
        first_name: 'John',
        last_name: 'Doe',
        entree: 'Salmon',
        side: 'Vegetables',
        beverage: 'Pepsi'
    };
    $scope.orders = {};
    $scope.resetOrder = function(){
        $scope.data = {};
    };
    $scope.submitOrder = function(){
        ordersRef.push($scope.data);
    }
}])