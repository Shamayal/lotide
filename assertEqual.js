// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳🎉🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😢❌😢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Hello", "Hello");
assertEqual("Hello", "hello");
assertEqual(24, 24);
assertEqual(24, 99);