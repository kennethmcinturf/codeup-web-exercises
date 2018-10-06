"use strict";

function returnTwo() {
    return 2;
}

// console.log(returnTwo());

function returnName() {
    return "KC";
}

// console.log(returnName());

function addThree(number) {
   return number + 3;
}

// console.log(addThree(5));

function sayString(stringPassed) {
    return stringPassed;
}

// console.log(sayString("howdy"))

function sayHowdy() {
    return console.log("Howdy");
}

//Challenge Functions

function identity(input) {
    return input;
}

function getRandomNumber(min,max) {
    return Math.floor(Math.random() * max) + min;
}

function first(input) {
    return input.substring(0,1);
}

function last(input) {
    var lengthOfString = input.length;
    return ((input.substring(lengthOfString - 1))),(input.substring(lengthOfString-1));
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
    var output = true;
    output = Boolean(input) === true;
    return output;
}

function isFalsy(input) {
    var output = true;
    output = Boolean(input) === false;
    return output;
}

function isVowel(letter) {
    var output = true;
    if (letter.toLowerCase() === "a"){
        return true
    } else if (letter.toLowerCase() === "e"){
        return true
    } else if (letter.toLowerCase() === "i"){
        return true
    } else if (letter.toLowerCase() === "o"){
        return true
    } else if (letter.toLowerCase() === "u"){
        return true
    }   else{
        return false
    }
}

function isConstinant(letter) {
    var output = true;
    if (letter.toLowerCase() === "a"){
        return false
    } else if (letter.toLowerCase() === "e"){
        return false
    } else if (letter.toLowerCase() === "i"){
        return false
    } else if (letter.toLowerCase() === "o"){
        return false
    } else if (letter.toLowerCase() === "u"){
        return false
    }   else{
        return true
    }
}

function isCapital(letter) {
    var output = true;
    output = letter === letter.toUpperCase();
    return output;
}

function isLowerCase(letter) {
    var output = true;
    output = letter === letter.toLowerCase();
    return output;
}

function hasLowerCase(string) {
    var output = true;
    output = ['a', 'e', 'i', 'o', 'u'].indexOf(string.toLowerCase()) === -1;
    return output;
}

function isSpace(letter) {
    var output = true;
    output = letter.indexOf(' ') !== -1;
    return output;
}

function isZero(number) {
    var output = true;
    output = number === 0;
    return output;
}

function notZero(number) {
    var output = true;
    output = number !== 0;
    return output;
}

function lowerCase(input) {
    var output = 0;
    output = input.toLowerCase();
    return output;
}

function double(n) {
    var output = 0;
    output = input * 2;
    return output;
}

function triple(n) {
    var output = 0;
    output = input * 3;
    return output;
}

function quadruple(n) {
    var output = 0;
    output = input * 4;
    return output;
}

function half(n) {
    var output = 0;
    output = input / 2;
    return output;
}

function subtract(a,b) {
    var output = 0;
    output = a - b;
    return output;
}

function modulo(a,b) {
    var output = 0;
    var numbersDivided = a / b;
    output = numbersDivided - numbersDivided.toFixed();
    return output;
}

function cube(n) {
    var output = 0;
    output = n * n * n;
    return output;
}

function squareRoot(n) {
    var output = 0;
    output = n * n;
    return output;
}

function cubeRoot(n) {
    var output = 0;
    output = n * n * n;
    return output;
}

function invertSign(number) {
    var output = 0;
    if (isNaN(number) === true){
        output = false;
    } else{
    output = -(number);
    }
    return output;
}

function degreesToRadians(number) {
    var output = 0;
    const pi = 3.14;
    output = number * (pi/180);
    return output;
}

function radiansToDegree(number) {
    var output = 0;
    const pi = 3.14;
    output = number * (180/pi);
    return output;
}

function isBlank(input) {
    var output = 0;
    if (!input.replace(/\s/g, '').length){
        output = true
    }else {
        output = false
    }
    return output;
}

function trim(input) {
    var output = 0;
    output = input.trim();
    return output;
}

function areEqual(x,y) {
    var output = true;
    output = x == y;
    return output;
}


function areIdentical(x,y) {
    var output = true;
    output = x === y;
    return output;
}

function not(x) {
    var output = 0;
   if (Boolean(x) === true){
       output = false;
   } else {
       output = true;
   }
    return output;
}

function notNot(x) {
    var output = 0;
    output = -(-(x));
    return output;
}

function and(x,y) {
    var output = 0;
    output = Boolean(x) && Boolean(y);
    return output;
}

function or(x,y) {
    var output = 0;
    output = Boolean(x) || Boolean(y);
    return output;
}

function reverseString(input) {
    var output = "string";
    var splitString = input.split("");
    var reverseArray = splitString.reverse();
    output = reverseArray.join("");
    return output;
}

function absoluteValue(number) {
    var output = 0;
    output = Math.abs(number);
    return output;
}

function rollDice(sides) {
    var output = 0;
    output = Math.floor(Math.random() * (sides - 1)) + 1;
    return output;
}

function howManyWhitesSpaces(input) {
    var output = 0;
    output = (input.length) - ((input.trim()).length);
    return output;
}

function secondFromFirst(x,y) {
    var output = "string";
    if (x.search(y)){
        output = x.replace(y," ");
    }else{
        output = x;
    }
    return output
}

function stringEndsWithA(input) {
    var output = true;
    if (input.substring(input.length-1) === "a"){
        output = true;
    } else{
        output = false;
    }
    return output
}

// function whiteSpacesAtBeginning(input) {
//     var regExp = s/\s+//;
//     return (input.length()) - (whitespaceBegininng.lenght);
// }

function returnTrueMessage() {
    return  "Hey, it's true";
}

function returnFalseMessage() {
    return  "Hey, it's false";
}

function returnMessage(input) {
    var output = 0;
    if (Boolean(input) === true) {
        output = returnTrueMessage();
    } else{
        output = returnFalseMessage();
    }
    return output;
}

var username = prompt("Please enter a username");
var password = prompt("Please enter a password");
var age = prompt("Please enter your age");
var admin = username === "Bobby";
function willLoginUser(username,password,age,admin) {
    if (username === password){
        return alert("Password and Username cannot match");
    }else if(parseFloat(age) < 18 && username !== "Bobby"){
        return alert("users must be 18 or older!!");
    }else{
        return alert("Welcome to the website!");
    }
}

console.log((willLoginUser(username, password, age, admin)));

