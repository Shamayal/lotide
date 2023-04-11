const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {

  it("returns [12] for 'lighthouse in the house'.n", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").n, [12]);
  });

  it("returns [3, 5, 15, 18] for 'lighthouse in the house'.h", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });

  it("returns [2, 3] for 'hello'.l", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });

  it("returns [1] for 'hello'.e", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

});