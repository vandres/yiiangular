angular.module('de.voan.www.user', [
        'de.voan.common.package1',
        'ngRoute'
    ])

    .config(function ($routeProvider) {
        $routeProvider.when('/user', {
            controller: 'de.voan.www.user.index',
            templateUrl: 'de/voan/www/user/user-index.html'
        });
    })

    .controller('de.voan.www.user.index', function ($scope) {
        $scope.header = 'user.IndexController';
    });
