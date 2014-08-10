angular.module('de.voan.www.user.services', [
        'de.voan.common.package1.services'
    ])
    .config(function ($provide) {
        $provide.decorator("CommonService",
            function ($delegate) {
                /**
                 * @class CommonService
                 */
                return {
                    doSomethingCommon: function () {
                        return $delegate.doSomethingCommon() + ' overwritten by user module';
                    }
                };
            }
        );
    });
