angular.module('de.voan.www.todo', [
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider.when('/todo', {
            controller: 'de.voan.www.todo.index',
            templateUrl: 'de/voan/www/todo/todo-index.html'
        });
    })

    .controller('de.voan.www.todo.index', function ($scope) {
        $scope.header = 'todo.IndexController';
    });
