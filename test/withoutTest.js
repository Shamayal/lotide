const assert = require('chai').assert;
const without   = require('../without');

describe("#without", () => {
  it("returns [2, 3] for [1, 2, 3] with [1] removed", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns ['1', '2'] for ['1', '2', '3'] with [1, 2, '3'] removed", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("returns [2] for [1, 2, 3] with [1, 2] removed", () => {
    assert.deepEqual(without([1, 2, 3], [1, 3]), [2]);
  });

  it("returns ['hi', 'hola', 'salut'] for ['hi', 'hola', 'salut'] with [''] removed", () => {
    assert.deepEqual(without(["hi", "hola", "salut"], [""]), ["hi", "hola", "salut"]);
  });

  it("returns ['hi', 'salut'] for ['hi', 'hola', 'salut'] with ['hey', 'hola', 'Salut'] removed", () => {
    assert.deepEqual(without(["hi", "hola", "salut"], ["hey", "hola", "Salut"]), ["hi", "salut"]);
  });

});