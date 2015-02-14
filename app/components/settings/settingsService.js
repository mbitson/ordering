/**
 * Settings service for managing settings through FireBase.
 * Created by mbitson on 2/13/2015.
 */
app.factory('settingsService', [ "$firebase", function settingsFirebaseService($firebase)
{
    // Connect to firebase
    var _ref = new Firebase("https://shining-heat-9147.firebaseio.com/settings/");

    // Create a sync of the reference
    var sync = $firebase(_ref);

    // Create three-way data binding on object using $asObject()
    var settings = sync.$asObject();

    // Return the corresponding function...
    return {

        /*
         * Method to assign
         * all settings to the scope.
         */
        init: function($scope) {
            settings.$bindTo($scope, "settings");
        },

        /*
         * Method to add a single
         * order to FireBase
         */
        add: function(data) {
            sync.$push(data);
        }
    };
}]);