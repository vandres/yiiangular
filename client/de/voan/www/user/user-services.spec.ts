describe('user services', function () {
    beforeEach(module('de.voan.www.user.services'));

    it('should return something common', inject(function (CommonService) {
        expect(CommonService.doSomethingCommon()).toBe('common overwritten by user module');
    }));
});
