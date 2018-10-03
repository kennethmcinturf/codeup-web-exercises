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
    output = input === 
    return output;
}