/**
 * Settings service for managing settings through FireBase.
 * Created by mbitson on 2/13/2015.
 */
app.factory('settingsService', [ "$firebase", function settingsFirebaseService($firebase)
{
    // Connect to firebase
    var ref = new Firebase("https://shining-heat-9147.firebaseio.com/");
    var _ref = ref.child('settings');

    // Create a sync of the reference
    var sync = $firebase(_ref);

    // Create three-way data binding on object using $asObject()
    var settings = sync.$asArray();

    // Return the corresponding function...
    return {

        /*
         * Method to assign
         * all settings to the scope.
         */
        init: function($scope) {
            //settings.$bindTo($scope, "settings");
            $scope.settings = settings;
        },

        /*
         * Method to add a single
         * order to FireBase
         */
        add: function(data) {
            sync.$push(data);
        },

        /*
         * Method to add an object to a child node
         */
        addChild: function(childNode, data) {
            console.log(childNode);
            console.log(data);
            var childSync = $firebase(_ref.child(childNode));
            childSync.$push(data);
        }
    };
}]);