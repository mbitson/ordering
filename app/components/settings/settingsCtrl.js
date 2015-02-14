/**
 * Created by mbitson on 2/13/2015.
 */
app.controller('settingsCtrl', [
    "$scope",
    "$firebase",
    "$timeout",
    "$mdSidenav",
    "settingsService",
    function (
        $scope,
        $firebase,
        $timeout,
        $mdSidenav,
        settingsService
    )
{
    // Init data array (default settings)
    $scope.settings = {};
    $scope.data = {
        icon: 'settings'
    };

    // Init order service from FireBase
    settingsService.init($scope);

    /*
     * Data interaction functions
     */
    $scope.addBlank = function (childNode){
        settingsService.addChild(childNode, {});
    };

    /*
     * SideNav Controls
     */
    $scope.close = function(){
        $mdSidenav('settings').close();
    };
    $scope.open = function(){
        $mdSidenav('settings').open();
    };


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
        $scope.open();
    };
    var iconRestore = function(){
        $scope.data.icon = 'settings';
    };
}]);