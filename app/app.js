// Declare app level module which depends on views, and components
angular.module('ordering', [
  'ngRoute',
  'ngMaterial',
  'ngAnimate',
  'ngMdIcons',
  'firebase'
])
    .config(function ($mdThemingProvider) {
        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('nit-dark', 'default')
            .primaryPalette('pink');
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('pink');
    });
