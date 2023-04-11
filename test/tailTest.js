const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("returns an empty array for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns an empty array for [123]", () => {
    assert.deepEqual(tail([123]), []);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });

  it("returns ['Lemon Tart', {Pie: ['apple', 'blueberry'], numPies: 2}] for ['Croissants', 'Lemon Tart', {Pie: ['apple', 'blueberry'], numPies: 2}]", () => {
    assert.deepEqual(tail(["Croissants", "Lemon Tart", {Pie: ["apple", "blueberry"], numPies: 2}]), ["Lemon Tart", {Pie: ["apple", "blueberry"], numPies: 2}]);
  });

  it("returns [3, 4] for [[1, 2], 3, 4]", () => {
    assert.deepEqual(tail([[1, 2], 3, 4]), [3, 4]);
  });

});