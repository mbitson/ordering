/**
 * Orders Controller for frontend of ordering sample app.
 * Created by mbitson on 2/13/2015.
 */
app.controller('ordersCtrl', [
    "$scope",
    "$firebase",
    "ordersService",
    "settingsService",
    "$timeout",
    "$mdDialog",
    function (
        $scope,
        $firebase,
        ordersService,
        settingsService,
        $timeout,
        $mdDialog
    )
{
    // Init variables (set any defaults)
    $scope.order = {
        status: 'Pending',
        state: '1'
    };
    $scope.data = {
        icon: 'send'
    };

    // Init order service from FireBase
    ordersService.init($scope);
    settingsService.init($scope);

    /*
     * Function to reset all order data
     */
    $scope.resetOrder = function(){
        $scope.order = {};
    };

    /*
     * Function to submit this order to the firebase service
     */
    $scope.submitOrder = function(){
        ordersService.add($scope.order);
        $timeout(iconRestore, 2000);
        showThankYou();
    };
    $scope.setState = function(status, state, id){
        ordersService.updateField('status', id, status);
        ordersService.updateField('state', id, state);
    };
    $scope.remove = function(id){
        ordersService.remove(id);
    };

    /*
     * Function to thank the user with a modal
     */
    function showThankYou(){
        $mdDialog.show({
            controller: ordersThankYouCtrl,
            templateUrl: '/app/components/orders/dialogs/thankyou/view.tmpl.html'
        })
            .then(function(answer) {
                if(answer == 'list'){
                    $scope.selectedIndex = 0;
                }else{
                    $scope.order = {};
                }
            }, function() {
            });
    }

    /*
     * Settings Icon Functions
     */
    $scope.icons = {
        done: 'check_circle',
        do: 'send'
    };
    $scope.iconEnter = function(){
        if($scope.data.icon !== $scope.icons.done){
            $scope.data.icon = $scope.icons.do;
        }
    };
    $scope.iconLeave = function(){
        if($scope.data.icon !== $scope.icons.done){
            $scope.data.icon = $scope.icons.do;
        }
    };
    $scope.iconClick = function(){
        $scope.data.icon = $scope.icons.done;
    };
    var iconRestore = function(){
        $scope.data.icon = $scope.icons.do;
    };
}]);