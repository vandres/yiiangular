describe('common services', function () {
    beforeEach(module('de.voan.common.package1.services'));

    it('should return something common', inject(function (CommonService) {
        expect(CommonService.doSomethingCommon()).toBe('common');
    }));
});
