/**
 * Orders Controller for frontend of ordering sample app.
 * Created by mbitson on 2/13/2015.
 */
app.controller('ordersCtrl', ["$scope", "$firebase", "ordersService", function ($scope, $firebase, ordersService)
{
    // Init variables
    $scope.orders = {};
    $scope.data = {};

    // Init order service from FireBase
    ordersService.init($scope);

    /*
     * Function to reset all order data
     */
    $scope.resetOrder = function(){
        $scope.data = {};
    };

    /*
     * Function to submit this order to the firebase service
     */
    $scope.submitOrder = function(){
        ordersService.add($scope.data);
    }
}]);