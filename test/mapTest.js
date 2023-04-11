const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {

  const desserts = ["apple pie", "vanilla cupcakes", "cinnamon rolls", "chocolate croissants", "lemon tart"];

  const resultDesserts = map(desserts, dessert => dessert[0]);

  it("returns ['a', 'v', 'c', 'c', 'l'] for resultDesserts", () => {
    assert.deepEqual(resultDesserts, ["a", "v", "c", "c", "l"]);
  });

});