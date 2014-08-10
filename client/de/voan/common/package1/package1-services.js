angular.module('de.voan.common.package1.services', [])
    .factory('CommonService', function () {
        /**
         * @class CommonService
         */
        return {
            doSomethingCommon: function () {
                return 'common';
            }
        };
    });
