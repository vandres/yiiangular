angular.module('library.shared1.directives', [])
    .directive('shared1', function (SharedService) {
        return {
            'template': '{{shared}}',
            'restrict': 'EA',
            link: function (scope) {
                scope.shared = SharedService.doSomethingShared();
            }
        };
    });
