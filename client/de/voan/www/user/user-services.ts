module de.voan.www.user.services {
    export interface User extends ng.resource.IResource<User> {
        id:number;
        name:string;
    }

    export interface IUserResource extends ng.resource.IResourceClass<User> {
    }

    angular.module('de.voan.www.user.services', ['ngResource'])
        .factory('UserService', function ($resource:ng.resource.IResourceService) {
            return <IUserResource> $resource('/api/index.php/users/:id');
        });
}
