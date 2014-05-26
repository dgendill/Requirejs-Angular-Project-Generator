describe('secondsToTime', function() {

    beforeEach(module('myappname'))

    it('should return seconds formatted as HH:mm:ss.', function() {
        inject(['$filter', function($filter) {
            expect($filter('secondsToTime')(0)).toBe('00:00:00');
            expect($filter('secondsToTime')(1)).toBe('00:00:01');
            expect($filter('secondsToTime')(9)).toBe('00:00:09');
            expect($filter('secondsToTime')(10)).toBe('00:00:10');
            expect($filter('secondsToTime')(60)).toBe('00:01:00');
        }]);
    });

});
