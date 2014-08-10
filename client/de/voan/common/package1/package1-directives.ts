module de.voan.common.package1.directives {
    interface ICommonDirectivesScope extends ng.IScope {
        common: any;
    }

    angular.module('de.voan.common.package1.directives', [
            'de.voan.common.package1.services'
        ])
        .directive('common1', function (CommonService) {
            return {
                'template': '{{common}}',
                'restrict': 'EA',
                link: function (scope:ICommonDirectivesScope) {
                    scope.common = CommonService.doSomethingCommon();
                }
            };
        });
}
