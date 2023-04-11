const assertEqual = require('./assertEqual');

const findKeyByValue = function(objectToSearch, valueToFind) {
  for (let objKey in objectToSearch) {
    if (objectToSearch[objKey] === valueToFind) {
      return objKey;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestDessertByMonth = {
  December: "gingerbread cookies",
  July: "ice-cream",
  May: "lemon tart",
  August: "ice-cream",
  October: "pumpkin pie"
};

assertEqual(findKeyByValue(bestDessertByMonth, "pumpkin pie"), "October");
assertEqual(findKeyByValue(bestDessertByMonth, "cinnamon rolls"), undefined);
assertEqual(findKeyByValue(bestDessertByMonth, "lemon tart"), "May");
assertEqual(findKeyByValue(bestDessertByMonth, "ice-cream"), "July");

module.exports = findKeyByValue;