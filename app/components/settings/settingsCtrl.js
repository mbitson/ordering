/**
 * Created by mbitson on 2/13/2015.
 */
var ordering = angular.module('ordering');
ordering.controller('settingsCtrl', ["$scope", "$firebase", "$timeout", function ($scope, $firebase, $timeout) {
    var ref = new Firebase("https://shining-heat-9147.firebaseio.com/");
    var ordersRef = ref.child("settings");
    var sync = $firebase(ordersRef);
    var syncObject = sync.$asObject();
    syncObject.$bindTo($scope, "settings");

    $scope.data = {
        icon: 'settings'
    };
    $scope.settings = {};
    $scope.iconEnter = function(){
        if($scope.data.icon !== 'check_circle'){
            $scope.data.icon = 'settings_applications';
        }
    };
    $scope.iconLeave = function(){
        if($scope.data.icon !== 'check_circle'){
            $scope.data.icon = 'settings';
        }
    };
    $scope.iconClick = function(){
        $scope.data.icon = 'check_circle';
        $timeout(iconRestore, 2000);
    };
    var iconRestore = function(){
        $scope.data.icon = 'settings';
    };
    //$scope.submitOrder = function(){
    //    ordersRef.push($scope.data);
    //}
}])