module de.voan.www.user {
    import services = de.voan.www.user.services;

    angular.module('de.voan.www.user', [
            'ngRoute',
            'de.voan.www.user.services'
        ])

        .config(function ($routeProvider) {
            $routeProvider.when('/user', {
                controller: 'de.voan.www.user.index',
                templateUrl: 'de/voan/www/user/user-index.html'
            });
        })

        .controller('de.voan.www.user.index', function ($scope, UserService:services.IUserResource) {
            $scope.header = 'user.IndexController';
            $scope.users = UserService.query();
            $scope.newuser = '';
            $scope.save = function(username) {
                UserService.save({name: username}, function() {
                    $scope.newuser = '';
                    $scope.users = UserService.query();
                });
            };
            $scope.delete = function(user) {
                UserService.delete({id: user.id}, function() {
                    $scope.users = UserService.query();
                });
            };
        });
}
