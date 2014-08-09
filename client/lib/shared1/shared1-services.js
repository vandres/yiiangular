angular.module('library.shared1.services', [])
    .factory('SharedService', function () {
        /**
         * @var SharedService
         */
        return {
            doSomethingShared: function () {
                return 'shared';
            }
        }
    })
