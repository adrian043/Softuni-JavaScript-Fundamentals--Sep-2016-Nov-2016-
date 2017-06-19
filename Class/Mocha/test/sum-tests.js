let expect = require("chai").expect;
let sum = require("../sum-nums").sum;

describe("sum(arr) - sum array of numbers", function() {
    it("should return 3 for [1, 2]", function () {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it("should return 3 for [1, 2]", function () {
        expect(sum([1, 2, 5, 2])).to.be.equal(10);
    });
});

