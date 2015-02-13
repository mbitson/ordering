// Declare app level module which depends on views, and components
angular.module('ordering', [
  'ngRoute',
  'ngMaterial',
  'firebase'
])
    .controller('TabController', function( $scope ) {
        $scope.selectedIndex = 0;
        $scope.next = function() {
            $scope.selectedIndex = Math.min($scope.selectedIndex + 1, 2) ;
        };
        $scope.previous = function() {
            $scope.selectedIndex = Math.max($scope.selectedIndex - 1, 0);
        };
        $scope.select = function($index){
            $scope.selectedIndex = $index;
        };
    })
    .controller('orderController', ["$scope", "$firebase", function ($scope, $firebase) {
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
    .config(function ($mdThemingProvider) {
        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('nit-dark', 'default')
            .primaryPalette('lime')
            .dark();
    });
