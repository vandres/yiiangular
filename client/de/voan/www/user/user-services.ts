module de.voan.www.user.services {
    import common = de.voan.common.package1.services;

    class UserCommonService implements common.ICommonService {
        delegate:common.ICommonService;

        constructor($delegate:common.ICommonService) {
            this.delegate = $delegate;
        }

        doSomethingCommon() {
            return this.delegate.doSomethingCommon() + ' overwritten by user module';
        }
    }

    angular.module('de.voan.www.user.services', [
            'de.voan.common.package1.services'
        ])
        .config(function ($provide) {
            $provide.decorator("CommonService", function ($delegate:common.ICommonService) {
                return new UserCommonService($delegate);
            });
        });
}
