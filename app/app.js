// Declare app level module which depends on views, and components
var app = angular.module('ordering', [
  'ngRoute',
  'ngMaterial',
  'ngAnimate',
  'ngMdIcons',
  'firebase'
]);
app.config(function ($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('nit-dark', 'default')
        .primaryPalette('pink');
    $mdThemingProvider.theme('nit-success', 'default')
        .primaryPalette('green');
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('deep-purple');
});
