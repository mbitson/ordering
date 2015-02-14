/**
 * Created by mbitson on 2/13/2015.
 */
app.factory('ordersService', function myServiceInit(angularFire) {
    var _ref = new Firebase("https://shining-heat-9147.firebaseio.com/orders/");
    return {
        init: function(scope) {
            angularFire(_ref, scope, 'orders');
        },
        add: function(data) {
            _ref.push(data);
        }
    };
});