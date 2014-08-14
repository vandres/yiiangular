module library.shared1.services {
    interface ISharedService {
        doSomethingShared():string;
    }

    class SharedService implements ISharedService {
        doSomethingShared():string {
            return 'shared';
        }
    }

    angular.module('library.shared1.services', [])
        .service('SharedService', SharedService);
}
