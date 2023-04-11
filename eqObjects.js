const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const eqObjects = function(object1, object2) {
  let array1 = [];
  let array2 = [];
  let result = true;
  for (let obj1 in object1) {
    array1.push(obj1);
  }
  for (let obj2 in object2) {
    array2.push(obj2);
  }
  if (array1.length === array2.length) {
    for (let key1 of array1) {
      if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
        if (eqArrays(object1[key1], object2[key1])) {
          result = result && true;
        } else {
          result = result && false;
        }
      } else if (object1[key1] === object2[key1]) {
        result = result && true;
      } else {
        result = result && false;
      }
    }
  } else {
    result = false;
  }
  return result;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);

const dessert = { summer: ["ice-cream", "sorbet"], autumn: ["pumpkin pie", "apple pie"]};
const anotherDessert = { summer: ["ice-cream"], autumn: ["pumpkin pie", "apple pie"]};

assertEqual(eqObjects(dessert  , anotherDessert), false);

const cake = { flavours: ["vanilla", "chocolate", "red velvet"], buttercream: ["cream cheese", "strawberry"]};
const anotherCake = { flavours: ["vanilla", "chocolate", "red velvet"], buttercream: ["creamcheese", "strawberry"]};

assertEqual(eqObjects(cake  , anotherCake), false);

module.exports = eqObjects;