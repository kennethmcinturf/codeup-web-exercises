/**
 * JS Array Practice
 * Array creation, manipulation, searching etc...
 */

// Exercise 0. Write a function named first()
function first(input) {
    return input[0];
}

// Exercise 1. Write a function named secondToLast() that returns the second to last element
function secondToLast(input) {
    return input[input.length -2]
}


// Exercise 2. Write a function named rest() that takes an an array and returns an array containing everything except the first element.
function rest(input) {
    input.forEach(first());
}

// Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array
function getLongestString(input) {
    var output = " ";
    for (var i = 0; i < input.length; i++){
        if (input[i].length > output.length) {
            output = input[i];
        }
    }
    return output;
}

// Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.
function getShortestString(input) {
    var output = '                                      ';
    for (var i = 0; i < input.length; i++){
        if (input[i].length < output) {
            output = input[i];
        }
    }
    return output;
}

// Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays. The function should return a single array containing all of the elements of the first array along with all of the elements of the second array
// Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]
function addTwoArrays(inputA,inputB) {
    var stringOne = inputA.join('');
    var stringTwo = inputB.join('');
    var comboString = stringOne + stringTwo;
    var newArray = comboString.split(',');
    return newArray;
}


// Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
// Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]
function getUniqueValues(input) {
    var output = [];
    input.forEach(function(element, index, array) {
        if (input.indexOf(element) === -1){
            output.push(element)
        }
    });
    return output;
}
// Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.
function reverseArray(input) {
    var newArray = [input, input.reverse()];
    return newArray;
}
// Exercies 7. Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.
function getRandomQuote() {
    
}
// Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// The first argument should be a specific numeral or character
// The second argument should be any given string
// getIndexesOf() should return an array containing all of the indexes of that character in the string
// Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
// Example: getIndexesOf("z", "banana") should return an empty array []
function getIndexesOf() {
    
}
// Exercise 9. Write a function named removeAll.
// It should accept an array and a value
// removeAll should return an array with all of the original contents EXCEPT for the provided value
// iterate across the input array
// output array
// Example: removeAll([1, 2, 3], 2) should return [1, 3]
function removeAll() {
    
}
