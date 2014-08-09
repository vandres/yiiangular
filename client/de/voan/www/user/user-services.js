angular.module('de.voan.www.user.services', [])
    .config([
        "$provide",
        function ($provide) {
            $provide.decorator("CommonService",
                function ($delegate) {
                    return {
                        doSomethingCommon: function () {
                            return $delegate.doSomethingCommon() + ' overwritten by user module';
                        }
                    };
                }
            );
        }
    ]);
