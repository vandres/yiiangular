angular.module('de.voan.www', [
        'de.voan.www.user',
        'de.voan.www.todo',
        'ngRoute'
    ])

    .config(function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(false).hashPrefix('!');

        $routeProvider.when('/', {
            controller: 'de.voan.www.index',
            templateUrl: 'de/voan/www-index.html'
        }).otherwise('/');
    })

    .controller('de.voan.www.index', function ($scope) {
        $scope.header = 'www.IndexController';
    });
