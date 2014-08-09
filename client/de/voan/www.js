angular.module('de.voan.www', [
        'ngRoute',
        'de.voan.www.todo',
        'de.voan.www.user'
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
