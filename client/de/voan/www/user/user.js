angular.module('de.voan.www.user', [
        'ngRoute',
        'library.shared1',
        'de.voan.common.package1',
        'de.voan.www.user.services'
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
