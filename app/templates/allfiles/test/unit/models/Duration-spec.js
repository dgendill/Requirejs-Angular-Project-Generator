describe('Duration', function() {

    var Duration, duration;

    beforeEach(function(done) {

        jasmine.addMatchers({
            toBeCloseTo : function(util) {
                return {
                    compare : function(actual, expected, margin) {
                        var result = {};
                        if (Math.abs(actual - expected) <= margin) {
                            result.pass = true;
                            result.message = actual + ' is +-' + margin + ' to ' + expected + ".";
                        } else {
                            result.pass = false;
                            result.message = actual + ' not +-' + margin + ' to ' + expected + ".";
                        }
                        return result;
                    }
                };
            }
        });


        require(['Duration'], function(d) {
            Duration = d;
            duration = new Duration();
            done();
            // console.log("Duration set", duration);
        });
    });

    it('should be close to 2000ms after 2000ms wait.', function(done) {

        window.setTimeout(function() {
            duration.stop();
            console.log(duration.length());
            // expect(false).toEqual(true);
            expect(duration.length()).toBeCloseTo(2000, 3);
            done();
        }, 2000);

    });

});
