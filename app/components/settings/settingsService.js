/**
 * Settings service for managing settings through FireBase.
 * Created by mbitson on 2/13/2015.
 */
app.factory('settingsService', [ "$firebase", function settingsFirebaseService($firebase)
{
    // Connect to firebase
    var ref = new Firebase("https://shining-heat-9147.firebaseio.com/");
    var _ref = ref.child('settings');
    var references = {
        'entrees':_ref.child('entrees'),
        'beverages':_ref.child('beverages'),
        'sides':_ref.child('sides')
    };

    // Create a sync of the reference
    var settingsSync = $firebase(_ref);
    var entreesSync = $firebase(references.entrees);
    var beveragesSync = $firebase(references.beverages);
    var sidesSync = $firebase(references.sides);

    var syncArrays = {
        'entrees': entreesSync.$asArray(),
        'beverages': beveragesSync.$asArray(),
        'sides': sidesSync.$asArray()
    };



    // Return the corresponding function...
    return {

        /*
         * Method to assign
         * all settings to the scope.
         */
        init: function($scope) {
            $scope.options={
                'entrees':syncArrays.entrees,
                'beverages':syncArrays.beverages,
                'sides':syncArrays.sides
            };
        },

        /*
         * Method to save
         */
        save: function($scope){
            $.each(references, function(reference){
                var tmpObject = {};
                $.each(syncArrays[reference], function(index, value){
                    var id = value.$id;
                    tmpObject[id] = {
                        enabled: value.enabled,
                        name: value.name
                    };
                });
                settingsSync.$update(reference, tmpObject);
            });
        },

        /*
         * Method to delete a specific child node by ID
         */
        delete: function(childNode, keyToDelete){
            if(typeof references[childNode] != 'undefined'){
                var childSync = $firebase(references[childNode].child(keyToDelete));
                childSync.$remove();
            }
        },

        /*
         * Method to add an object to a child node
         */
        addChild: function(childNode, data) {
            if(typeof references[childNode] != 'undefined'){
                var childSync = $firebase(references[childNode]);
                childSync.$push(data);
            }
        }
    };
}]);