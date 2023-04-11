const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red" };
  const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

  it("returns true for shirtObject and anotherShirtObject", () => {
    assert.deepEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

  it("returns false for shirtObject and longSleeveShirtObject", () => {
    assert.deepEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });

  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
  const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

  it("returns true for multiColorShirtObject and anotherMultiColorShirtObject", () => {
    assert.deepEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });

  it("returns false for multiColorShirtObject and longSleeveMultiColorShirtObject", () => {
    assert.deepEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });

  const dessert = { summer: ["ice-cream", "sorbet"], autumn: ["pumpkin pie", "apple pie"]};
  const anotherDessert = { summer: ["ice-cream"], autumn: ["pumpkin pie", "apple pie"]};

  it("returns false for dessert and anotherDessert", () => {
    assert.deepEqual(eqObjects(dessert, anotherDessert), false);
  });

  const cake = { flavours: ["vanilla", "chocolate", "red velvet"], buttercream: ["cream cheese", "strawberry"]};
  const anotherCake = { flavours: ["vanilla", "chocolate", "red velvet"], buttercream: ["creamcheese", "strawberry"]};

  it("returns false for cake and anotherCake", () => {
    assert.deepEqual(eqObjects(cake, anotherCake), false);
  });

});