const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // not equal
assertEqual(1, 1); // equal
assertEqual("Hello", "Hello"); // equal
assertEqual("Hello", "hello"); // not equal
assertEqual(24, 24); // equal
assertEqual(24, 99); // not equal