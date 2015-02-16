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
    $scope.options={
        'entrees':{},
        'beverages':{},
        'sides':{}
    };
    $scope.activeTabs = [];
    $scope.data = {
        icon: 'settings'
    };
    $scope.icons = {
        'open': 'expand_more',
        'close': 'expand_less',
        'states': {}
    };

    // Init order service from FireBase
    settingsService.init($scope);



    /*
     * Data interaction functions
     */
    $scope.addBlank = function (childNode){
        settingsService.addChild(childNode, {enabled:true, name: ''});
    };
    $scope.save = function(){
        settingsService.save();
    };
    $scope.remove = function(childNode, $id){
        settingsService.delete(childNode, $id);
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

    /*
     * Accordion Functions
     */
    $scope.isOpenTab = function (tab) {
        //check if this tab is already in the activeTabs array
        if ($scope.activeTabs.indexOf(tab) > -1) {
            //if so, return true
            return true;
        } else {
            //if not, return false
            return false;
        }
    };
    $scope.getIcon = function(tab){
        if(typeof $scope.icons.states[tab] == 'undefined'){
            return $scope.icons.open;
        }else{
            return $scope.icons.states[tab];
        }
    };
    $scope.openTab = function (tab) {
        //check if tab is already open
        if ($scope.isOpenTab(tab)) {
            //if it is, remove it from the activeTabs array (close it)
            $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
            $scope.icons.states[tab] = $scope.icons.open;
        } else {
            //if it's not, add it! (open it)
            $scope.activeTabs.push(tab);
            $scope.icons.states[tab] = $scope.icons.close;
        }
    };

    /*
     * Utility functions
     */
    $scope.upperCase = function(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    $scope.singular = function(string){
        return string.slice(0, string.length-1);
    };
}]);