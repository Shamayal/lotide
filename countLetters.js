const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  const results = {};
  sentence = sentence.toLowerCase();
  for (const letter of sentence) {
    if (letter !== " " && letter !== "," && letter !== "!" && letter !== ".") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  } return results;
};

let resultTest1 = countLetters("lighthouse in the house");
console.log(countLetters("lighthouse, in the house!"));
console.log(resultTest1);


assertEqual(resultTest1["l"], 1);
assertEqual(resultTest1["i"], 2);
assertEqual(resultTest1["g"], 1);
assertEqual(resultTest1["h"], 4);
assertEqual(resultTest1["t"], 2);
assertEqual(resultTest1["o"], 2);
assertEqual(resultTest1["u"], 2);
assertEqual(resultTest1["s"], 2);
assertEqual(resultTest1["e"], 3);
assertEqual(resultTest1["n"], 1);

module.exports = countLetters;