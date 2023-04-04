// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳🎉🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😰❌😰 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arrayElements) {
  let firstElement = arrayElements[0];
  return firstElement;
};

// TEST CODE 
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hi");
assertEqual(head([99]), "99");
assertEqual(head([]), "Hi");