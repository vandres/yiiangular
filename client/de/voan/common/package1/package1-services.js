angular.module('de.voan.common.package1.services', [])
    .service('CommonService', function () {
        /**
         * @class CommonService
         */
        return {
            doSomethingCommon: function () {
                return 'common';
            }
        };
    });
