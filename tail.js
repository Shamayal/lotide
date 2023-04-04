// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳🎉🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😰❌😰 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arrayElements) {
  let tailArray = arrayElements.slice(1);
  return tailArray;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const oneElement = tail([1234]);
assertEqual(oneElement.length, 0); // should be empty
assertEqual(oneElement[0], "hi");

const empty = tail([]);
assertEqual(empty.length, 0); // should be empty
assertEqual(empty[0], "hi");