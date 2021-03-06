/**
 * Orders service for managing orders through FireBase.
 * Created by mbitson on 2/13/2015.
 */
app.factory('ordersService', [ "$firebase", function ordersFirebaseService($firebase)
{
    // Connect to firebase
    var ref = new Firebase("https://shining-heat-9147.firebaseio.com/");
    var _ref = ref.child('orders');

    // Create a sync of the reference
    var sync = $firebase(_ref);

    // Create three-way data binding on object using $asObject()
    var orders = sync.$asArray();

    // Return the corresponding function...
    return {

        /*
         * Method to assign
         * all orders to the scope.
         */
        init: function($scope) {
            $scope.orders = orders;
        },

        /*
         * Method to add a single
         * order to FireBase
         */
        add: function(data) {
            sync.$push(data);
        },

        /*
         * Update a particular column of a particular order
         */
        updateField: function(field, id, value){
            _ref.child(id).child(field).set(value);
        },

        /*
         * Method to delete an order
         */
        remove: function(id){
            _ref.child(id).remove();
        }
    };
}]);