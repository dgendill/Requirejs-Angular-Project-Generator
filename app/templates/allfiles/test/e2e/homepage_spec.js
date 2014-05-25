describe('homepage', function() {

    var ptor;

    beforeEach(function() {
       // browser.get('http://127.0.0.1:8000');
       ptor = protractor.getInstance();
    });

    it('should load the homepage', function() {
        browser.get('/index.html');
        // browser.debugger();
        // element(by.css('p'));

        // expect(true).toEqual(true);
    });

});
