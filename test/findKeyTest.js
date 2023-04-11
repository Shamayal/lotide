const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {

  const test1 = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  const resultTest1 = findKey(test1, x => x.stars === 2);

  it("returns 'noma' for test1", () => {
    assert.deepEqual(resultTest1, "noma");
  });

  const resultTest2 = findKey(test1, x => x.stars === 3);

  it("returns 'Akaleri' for test1", () => {
    assert.deepEqual(resultTest2, "Akaleri");
  });

});