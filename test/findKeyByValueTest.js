const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {

  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("returns 'drama' for 'The Wire' in bestTvShowsByGenre", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined for 'That '70s Show' in bestTvShowsByGenre", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  const bestDessertByMonth = {
    December: "gingerbread cookies",
    July: "ice-cream",
    May: "lemon tart",
    August: "ice-cream",
    October: "pumpkin pie"
  };

  it("returns 'October' for 'pumpkin pie' in bestDessertByMonth", () => {
    assert.deepEqual(findKeyByValue(bestDessertByMonth, "pumpkin pie"), "October");
  });

  it("returns undefined for 'cinnamon rolls' in bestDessertByMonth", () => {
    assert.deepEqual(findKeyByValue(bestDessertByMonth, "cinnamon rolls"), undefined);
  });

  it("returns 'May' for 'lemon tart' in bestDessertByMonth", () => {
    assert.deepEqual(findKeyByValue(bestDessertByMonth, "lemon tart"), "May");
  });

  it("returns 'July' for 'ice-cream' in bestDessertByMonth", () => {
    assert.deepEqual(findKeyByValue(bestDessertByMonth, "ice-cream"), "July");
  });

});
