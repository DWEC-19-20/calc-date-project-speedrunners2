var assert = chai.assert,
    expect = chai.expect;

suite("Testing calcDate", function() {
        test("Test pasado", function() {
            expect(calcDate(new Date(2019, 10, 14),14)).to.equal("28/10/2019");
});

test("Test pasado", function() {
            expect(calcDate(new Date(2019, 10, 28),-14)).to.equal("14/10/2019");
});

test("Test pasado", function() {
            expect(calcDate(new Date(2019, 10, 10),10950)).to.equal("2/10/2049");
});

});
    
suite("Testing getDays", function() {
test("Test pasado", function() {
expect(getDays(new Date(2019, 9, 14),new Date(2019, 9, 28))).to.equal(14);
});

test("Test pasado", function() {
expect(getDays(new Date(2019, 9, 28),new Date(2019, 9, 14))).to.equal(-14);
});

test("Test pasado", function() {
expect(getDays(new Date(2019, 9, 10),new Date(2049, 9, 2))).to.equal(10950);
});

});

