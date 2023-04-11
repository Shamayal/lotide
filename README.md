# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @shamayal/lotide`

**Require it:**

`const _ = require('@shamayal/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(firstArray, secondArray)`: an assert function that compares two arrays and logs a message to the console to tell us if they are a match or not
- `assertEqual(firstArray, secondArray)`: an assert function that compares two values and logs a message to the console to tell us if they are a match or not
- `assertObjectsEqual(object1, object2)`: an assert function that compares two objects and logs a message to the console to tell us if they are a match or not
- `countLetters(sentence)`: returns an objects with the count of each of the letters in a sentence
- `countOnly(allItems, itemsToCount)`: returns an object containing counts of everything from an array that the input object listed
- `eqArrays(firstArray, secondArray)`: takes in two arrays and returns true or false, based on a perfect match
- `eqObjects(object1, object2)`: takes in two objects and returns true or false, based on a perfect match
- `findKey(objectToScan, callback)`: returns the first key in an object for which the callback returns a truthy value
- `findKeyByValue(objectToSearch, valueToFind)`: takes in an object and a value and returns the first key which contains the given value
- `head(arrayElements)`: retrieves the first element of an array
- `letterPositions(sentence)`: returns an object with all the indices of the letters in a string
- `map(array, callback)`: returns a new array based on the result of the callback function
- `middle(arrayElements)`: returns an array with only the middle element(s) from the provided array
- `tail(arrayElements)`: retrieves every element except the first element of an array
- `takeUntil(array, callback)`: returns a slice of the array with elements taken from the beginning until the callback returns a truthy value
- `without(sourceArray, itemsToRemove)`: removes specified items from an array and returns a new array without those items
- `flatten(array)`: given an array with other arrays inside, it can flatten it into a single-level array
