const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
assertEqual(head([5,6,7]), 5); // equal
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // equal
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hi"); // not equal
assertEqual(head([99]), "99"); // not equal
assertEqual(head([]), "Hi"); // not equal