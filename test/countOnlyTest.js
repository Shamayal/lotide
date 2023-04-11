const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  it("returns object for firstNames", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { "Fang": 2, "Jason": 1});
  });

  it("returns 1 for 'Jason' in firstNames", () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })["Jason"], 1);
  });

  it("returns 2 for 'Fang' in firstNames", () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })["Fang"], 2);
  });

  it("returns undefined for 'Karima' in firstNames", () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })["Karima"], undefined);
  });

});