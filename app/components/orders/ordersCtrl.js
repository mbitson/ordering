/**
 * Created by mbitson on 2/13/2015.
 */
app.controller('ordersCtrl', ["$scope", "$firebase", function ($scope, $firebase, ordersService) {
    ordersService.init();
    $scope.resetOrder = function(){
        $scope.data = {};
    };
    $scope.submitOrder = function(){
        ordersService.add($scope.data);
    }
}]);