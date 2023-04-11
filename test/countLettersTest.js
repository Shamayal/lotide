const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {

  const test1 = "lighthouse in the house";
  const test2 = "lighthouse, in the house!";

  it("returns object for test1", () => {
    assert.deepEqual(countLetters(test1), {
      "l": 1,
      "i": 2,
      "g": 1,
      "h": 4,
      "t": 2,
      "o": 2,
      "u": 2,
      "s": 2,
      "e": 3,
      "n": 1
    });
  });

  it("returns object for test2", () => {
    assert.deepEqual(countLetters(test2), {
      "l": 1,
      "i": 2,
      "g": 1,
      "h": 4,
      "t": 2,
      "o": 2,
      "u": 2,
      "s": 2,
      "e": 3,
      "n": 1
    });
  });

  let resultTest1 = countLetters(test1);

  it("returns 1 for test1['l']", () => {
    assert.strictEqual(resultTest1["l"], 1);
  });

  it("returns 4 for test1['h']", () => {
    assert.deepEqual(resultTest1["h"], 4);
  });

  it("returns undefined for test1['z']", () => {
    assert.deepEqual(resultTest1["z"], undefined);
  });

});