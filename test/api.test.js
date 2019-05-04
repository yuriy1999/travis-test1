const assert = require('chai').assert;

describe("Test Api", function() {

    it("Success test", function() {
      assert.equal(Math.pow(2, 3), 8);
    });

    it("Fail test in furure ", function() {
        assert.equal(Math.pow(3,3), 27)
    })
  
    it("Simple asserting of strings!", function() {
      assert.equal('qwe', 'qwe1')
    })

});