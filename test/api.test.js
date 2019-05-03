const assert = require('chai').assert;

describe("Test Api", function() {

    it("Success test", function() {
      assert.equal(Math.pow(2, 3), 8);
    });

    it.skip("Fail test", function() {
        assert.equal(Math.pow(3,3), 28)
    })
  
});