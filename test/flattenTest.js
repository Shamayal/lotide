const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(flatten([]), []); 
  });

  it("returns [18, 94, 71, 36, 67, 99] for [[18], 94, [71, 36], [67, 99]]", () => {
    assert.deepEqual(flatten([[18], 94, [71, 36], [67, 99]]), [18, 94, 71, 36, 67, 99]);
  });

  it("returns [100] for an [100]", () => {
    assert.deepEqual(flatten([100]), [100]); 
  });

});