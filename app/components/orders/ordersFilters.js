/**
 * Created by mbitson on 2/14/2015.
 */
app.filter('orderName', function() {
    return function(collection) {
        var output = [];
        var searchstr = jQuery('#filterName').val();

        angular.forEach(collection, function(item) {
            var accepted = false;
            // Check that the first name is set. If it is set, and it has a value, check for our string. If found, accept.
            if(
                typeof item.first_name != 'undefined' &&
                item.first_name != '' &&
                item.first_name.toLowerCase().indexOf(searchstr.toLowerCase()) != -1
            ){
                accepted = true;
            }

            // Check that the last name is set. If it is set, and it has a value, check for our string. If found, accept.
            if(
                typeof item.last_name != 'undefined' &&
                item.last_name != '' &&
                item.last_name.toLowerCase().indexOf(searchstr.toLowerCase()) != -1
            ){
                accepted = true;
            }

            if(accepted === true){
                output.push(item);
            }
        });

        return output;
    };
}).filter('orderState', function() {
    return function(collection) {
        var output = [];
        var archived = jQuery('#filterArchived').attr('aria-checked');

        angular.forEach(collection, function(item) {
            var accepted = false;

            if(typeof archived != 'undefined' && archived == "true"){
                accepted = true;
            }else if(
                item.state == 1
            ){
                accepted = true;
            }

            if(accepted === true){
                output.push(item);
            }
        });

        return output;
    };
});