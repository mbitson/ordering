/**
 * Created by mbitson on 2/15/2015.
 */
function settingsBottomSheetCtrl($scope, $mdSidenav, $mdBottomSheet){
    // Menu items and their icons
    $scope.bottomSheetItems = [
        { name: 'Menu Options', icon: 'restaurant_menu', sidenav: 'menu' },
        { name: 'Data Options', icon: 'perm_data_setting' },
        { name: 'Display Options', icon: 'settings_display' }
    ];
    $scope.listItemClick = function($index) {
        var clickedItem = $scope.bottomSheetItems[$index];
        $mdBottomSheet.hide(clickedItem);
    };
}