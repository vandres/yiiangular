module de.voan.common.package1.services {
    export interface ICommonService {
        doSomethingCommon():string;
    }

    class CommonService implements ICommonService {
        doSomethingCommon():string {
            return 'common';
        }
    }

    angular.module('de.voan.common.package1.services', [])
        .service('CommonService', CommonService);
}
