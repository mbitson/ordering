/**
 * Created by mbitson on 2/14/2015.
 */
/**
 * Orders Controller for frontend of ordering sample app.
 * Created by mbitson on 2/13/2015.
 */
function ordersThankYouCtrl($scope, $mdDialog, $interval){
    $scope.icons = {
        now : 'check_circle',
        cycle : [
            'favorite',
            'check_circle'
        ]
    };
    $scope.iconloop = $interval(init, 3000, 2);
    function init(){
        var cycle = $scope.icons.cycle;
        var next = 0;
        var incremented = cycle.indexOf($scope.icons.now)+1;
        if(incremented < cycle.length){
            next = incremented;
        }
        $scope.icons.now = cycle[next];
    }

    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
        console.log(answer);
        $mdDialog.hide(answer);
    };
}