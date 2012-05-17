describe("A template project", function() {
    //global variables here

    describe("Test an area", function() {
        beforeEach(function() {
            //do something every test
        });

        it("Test true is not false", function() {
            var result = true
	        var expected = false;
            expect(result).toEqual(expected);
        });
    });
});