/**
 * JS Array Practice
 * Array creation, manipulation, searching etc...
 */

var houseArray = ["Pat","Shawn","Greg","Tim","Richard","Eric"];
var codeupArray= ["David","Steven","Pebo","Stuart","Benny","Maria"];
var repeatingArray = ["Chuckie","Chuckie","Chuckie","Chuckie"];

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
   return input.slice(1,input.length);
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
    var output = input[0];
    input.forEach(function (element,index,array) {
        if (element.length < output.length){
            output = element;
        }
    });
    return output;
}

// Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays. The function should return a single array containing all of the elements of the first array along with all of the elements of the second array
// Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]
function addTwoArrays(inputA,inputB) {
    var output = inputA;
    inputB.forEach(function (element, index, array) {
        output.push(element);
    });
    return output;
}


// Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
// Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]
function getUniqueValues(input) {
    var output = [];
    input.forEach(function (element, index, array) {
        if (output.indexOf(element) === -1){
            output.push(element);
        }
    });
    return output;
}
// Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.
function reverseArray(input) {
    return input.reverse();
}
// Exercies 7. Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.
function getRandomQuote() {
    var quoteArray = ["hey","you","yeah"];
    var randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
    return randomQuote;
}
// Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// The first argument should be a specific numeral or character
// The second argument should be any given string
// getIndexesOf() should return an array containing all of the indexes of that character in the string
// Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
// Example: getIndexesOf("z", "banana") should return an empty array []
function getIndexesOf(letter,input) {
    var output =[];
    for (var i = 0; i < input.length; i++){
        if (input.charAt(i) === letter){
            output.push(i);
        }
    }
    return output;
}
// Exercise 9. Write a function named removeAll.
// It should accept an array and a value
// removeAll should return an array with all of the original contents EXCEPT for the provided value
// iterate across the input array
// output array
// Example: removeAll([1, 2, 3], 2) should return [1, 3]
function removeAll(array, input) {
    var output = [];
    array.forEach(function (element) {
        if (element !== input){
            output.push(element);
        }
    });
    return output;
}

// Exercise 10. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers
function firstTenFibonacciNumbers() {
    var output = [1,1];
    for (var i = 0; i <= 8; i++){
        output.push(parseFloat(parseFloat(output[output.length]) + parseFloat(output[(output.length-1)])))
    }
    return output;
}


// Exercise 11. Write a function named getNFibonacci(n) that returns an array containing the first n fibonacci numbers

// Exercise 12. Write a function named moveFirstToLast() that takes in an array
// the function should return the array with the first element at the end
// Example: moveFirstToLast([1, 2, 3, 4]) should return [2, 3, 4, 1]
function firstToLast(array) {
    var output = array;
    output = array.push(array[0]);
    output = array.slice(1,array.length);
    return output;
}



// Exercise 13. Write a function named zip() that takes in two arrays with the same number of elements
// Zip returns a new array of arrays where each element is an array of the two elements at the same index
// Example: zip([1, 2, 3], [4, 5, 6]) returns [[1, 4], [2, 5], [3, 6])
// Example: zip(["a", "b", "c"], ["x", "y", "z"]) returns [["a", "x"], ["b", "y"], ["c", "z"]]
function zip(array1,array2){
    var output = [];
    array1.forEach(function (element,index,array) {
        output.push([element,array2[index]]);
    });
    return output;
}