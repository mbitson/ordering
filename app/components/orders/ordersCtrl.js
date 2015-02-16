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
    // Init variables
    $scope.orders = [];
    $scope.entrees = [];
    $scope.beverages = [];
    $scope.sides = [];
    $scope.order = {
        first_name: '',
        last_name: '',
        entree: '',
        beverage: '',
        side: ''
    };
    $scope.data = {
        icon: 'send',
        filters: {
            name: '',
            number: ''
        }
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

    /*
     * Function to thank the user with a modal
     */
    function showThankYou(){
        $mdDialog.show({
            controller: ordersThankYouCtrl,
            templateUrl: '/app/components/orders/dialogs/thankyou/view.tmpl.html'
        })
            .then(function(answer) {
                console.log(answer);
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