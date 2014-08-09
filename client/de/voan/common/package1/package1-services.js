angular.module('de.voan.common.package1.services', [])
    .factory('CommonService', function () {
        /**
         * @var CommonService
         */
        return {
            doSomethingCommon: function () {
                return 'common';
            }
        }
    })
