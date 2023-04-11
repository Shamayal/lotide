const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("returns an empty array for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns an empty array for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [[34, 82]] for [101, 73, [34, 82], 40, 91]", () => {
    assert.deepEqual(middle([101, 73, [34, 82], 40, 91]), [[34, 82]]);
  });

  it("returns ['hi'] for [[1, 2], 'hi', 'hello']", () => {
    assert.deepEqual(middle([[1, 2], 'hi', 'hello']), ['hi']);
  });

});