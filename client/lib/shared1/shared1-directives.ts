module library.shared1.directives {
    interface ISharedDirectivesScope extends ng.IScope {
        shared: any;
    }

    angular.module('library.shared1.directives', [])
        .directive('shared1', function (SharedService) {
            return {
                'template': '{{shared}}',
                'restrict': 'EA',
                link: function (scope:ISharedDirectivesScope) {
                    scope.shared = SharedService.doSomethingShared();
                }
            };
        });
}
