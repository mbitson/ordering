/**
 * Created by mbitson on 2/13/2015.
 */
app.controller('settingsCtrl', ["$scope", "$firebase", "$timeout", function ($scope, $firebase, $timeout)
{
    // Init data array (default settings)
    $scope.settings = {};
    $scope.data = {
        icon: 'settings'
    };

    /*
     * Settings Functions
     */

    /*
     * Settings Icon Functions
     */
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
}])