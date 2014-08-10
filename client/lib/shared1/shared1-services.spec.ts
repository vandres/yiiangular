describe('shared services', function () {
    beforeEach(module('library.shared1.services'));

    it('should return something shared', inject(function (SharedService) {
        expect(SharedService.doSomethingShared()).toBe('shared');
    }));
});
