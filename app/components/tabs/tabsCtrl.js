/**
 * Created by mbitson on 2/13/2015.
 */
app.controller('tabsCtrl', ["$scope", function( $scope ) {
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
}]);