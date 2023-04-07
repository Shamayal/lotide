const eqArrays = function(firstArray, secondArray) {
  let output = true;
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] === secondArray[i]) {
        output = output && true;
      } else {
        output = output && false;
      }
    }
  } else {
    output = false;
  }
  return output;
};

const assertArraysEqual = function(firstArray, secondArray) {
  let actual = eqArrays(firstArray, secondArray);
  if (actual === true) {
    console.log("equal");
  } else {
    console.log("not equal");
  }
};

const without = function(sourceArray, itemsToRemove) {
  let newArray = sourceArray;
  for (let i = 0; i < sourceArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (sourceArray[i] === itemsToRemove[j]) {
        newArray.splice(i, 1);
      }
    }
  } return newArray;
};

// TEST CODE

assertArraysEqual(without([1, 2, 3], [1]),[2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
assertArraysEqual(without([1, 2, 3], [1, 3]),[2]); // => [2, 3]
assertArraysEqual(without(["hi", "hola", "salut"], [""]),["hi", "hola", "salut"]); // => ["hi", "hola", "salut"]
assertArraysEqual(without(["hi", "hola", "salut"], ["hey", "hola", "Salut"]), ["hi", "salut"]); // => ["hi", "salut"]