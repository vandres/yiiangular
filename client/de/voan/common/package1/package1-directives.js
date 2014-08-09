angular.module('de.voan.common.package1.directives', [])
    .directive('directive1', function (Service1) {
        return {
            'template': '{{something}}',
            'restrict': 'EA',
            link: function (scope) {
                scope.something = Service1.doSomething();
            }
        };
    });
