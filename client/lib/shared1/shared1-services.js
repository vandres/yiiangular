angular.module('library.shared1.services', [])
    .factory('SharedService', function () {
        /**
         * @class SharedService
         */
        return {
            doSomethingShared: function () {
                return 'shared';
            }
        }
    })
