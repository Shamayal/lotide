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

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.toLowerCase();
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  } return results;
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // equal
assertArraysEqual([1, 2, 3], [1]); // not equal

assertArraysEqual([1, 2, 3], [1, 2, 3]); // equal
assertArraysEqual([3, 5, 158], [1, 5, 3]); // not equal

/*
console.log(letterPositions("Hello"));
console.log(letterPositions("lighthouse in the house"));

let test = "hello";
assertArraysEqual(letterPositions(test).e, [1]);
assertArraysEqual(letterPositions(test).l, [2, 3]);

console.log(letterPositions("lighthouse in the house").h);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [3, 5, 158]);
assertArraysEqual(letterPositions("lighthouse in the house").n, [12]);
*/
/*

let answer = 
{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}; */