"use strict";

function returnTwo() {
    var output = 0;
    output = 2;
    return output;
}

// console.log(returnTwo());

function returnName() {
    var output = 0;
    output = "KC";
    return output;
}

// console.log(returnName());

function addThree(number) {
    var output = 0;
    output = number + 3;
    return output;
}

// console.log(addThree(5));

function sayString(stringPassed) {
    var output = "string";
    output = stringPassed;
    return output;
}

// console.log(sayString("howdy"))

function sayHowdy(string) {
    var output = "string";
    output = console.log("Howdy!");
    return output;
}

//Challenge Functions

function identity(input) {
    var output = 0;
    output = input;
    return output;
}

function getRandomNumber(min,max) {
    var output = 0;
    var random = Math.floor(Math.random() * max) + min;
    output = random;
    return output;
}

function first(input) {
    var output = "String";
    output = input.substring(0,1);
    return output;
}

function last(input) {
    var output = "string";
    var lengthOfString = input.length;
    output = ((input.substring(lengthOfString - 1))),(input.substring(lengthOfString-1));
    return output;
}

function rest(input) {
    var output = "string";
    var lenghtOfString = input.length;
    output = (input.substring(0,lenghtOfString-1))
    return output;
}

function reverse(input) {
    var output = "string";
    var splitString = input.split("");
    var reverseArray = splitString.reverse();
    output = reverseArray.join("");
    return output;
}

function isNumeric(input) {
    var output = false;
    output = isNaN(input) === false;
    return output;
}

//Could redo with taking out whitespace
function count(input) {
    var output = 'string';
    output = input.length;
    return output;
}

//could redo, make any input into a number
function add(a,b) {
    var output = 0;
    output = a + b;
    return output;
}

function subtract(a,b) {
    var output = 0;
    output = a - b;
    return output;
}

function multiply(a,b) {
    var output = 0;
    output = a * b;
    return output;
}

function divide(numerator, denominator) {
    var output = 0;
    output = numerator / denominator;
    return output;
}

function remainder(number, divisor) {
    var output = 0;
    output = number % divisor;
    return output;
}

function square(a) {
    var output = 0;
    output = a * a;
    return output;
}

function sumOfSquares(a,b) {
    var output = 0;
    output = add(square(a),square(b));
    return output;
}

function doMath(operator,a,b) {
    var output = 0;
    output = operator(a,b);
    return output;
}

function isOdd(number) {
    var output = true;
    output = (number % 2 === 1);
    return output;
}

function isEven(number) {
    var output = true;
    output = (number % 2 === 0);
    return output;
}

function identity(input) {
    var output = 0;
    output = input;
    return output;
}

function isFive(input) {
    var output = true;
    output = input === 5;
    return output;
}

function addFive(input) {
    var output = 0;
    output = (input + 5);
    return output;
}

function isMultipleOfFive(input) {
    var output = 0;
    output = input % 5 === 0;
    return output;
}

function isThree(input) {
    var output = true;
    output = input === 3;
    return output;
}

function isMultipleOThree(input) {
    var output = true;
    output = input % 3 === 0;
    return output;
}

function isMultipleOThreeAndFive(input) {
    var output = true;
    output = input % 3 === 0 || input % 5 === 0;
    return output;
}

function isTrue(input) {
    var output = true;
    output = input === true;
    return output;
}

function isFalse(input) {
    var output = true;
    output = input === false;
    return output;
}

function isTruthy(input) {
    var output = 0;
    output = input == ;
    return output;
}

function isFalsy(input) {
    var output = true;
    output = input == true;
    return output;
}

