"use strict";

// function returnTwo() {
//     return 2;
// }

const returnTwo = () => 2;

// console.log(returnTwo());

// function returnName() {
//     return "KC";
// }

const returnName  = () => 'KC';

// console.log(returnName());

// function addThree(number) {
//    return number + 3;
// }

const addThree = number => number + 3;

// console.log(addThree(5));

// function sayString(stringPassed) {
//     return stringPassed;
// }

const sayString = string => string

// console.log(sayString("howdy"))

// function sayHowdy() {
//     return console.log("Howdy");
// }

const sayHowdy = () => 'Howdy';

//Challenge Functions

// function identity(input) {
//     return input;
// }

const whatIsIt = input => typeof input;

// function getRandomNumber(min,max) {
//     return Math.floor(Math.random() * max) + min;
// }

const getRandomNumber = (min,max) => (Math.floor(Math.random() * max) + min);

// function first(input) {
//     return input.substring(0,1);
// }

const first = input => input.substring(0,1);

// function last(input) {
//     var lengthOfString = input.length;
//     return ((input.substring(lengthOfString - 1))),(input.substring(lengthOfString-1));
// }

const last = input => ((input.substring(input.length - 1)));

// function rest(input) {
//     var lenghtOfString = input.length;
//     return (input.substring(0,lenghtOfString-1));
// }

const rest = input => input.substring(1,(input.length - 1));

// function reverse(input) {
//     var splitString = input.split("");
//     var reverseArray = splitString.reverse();
//     return reverseArray.join("");
// }

const reverse = string => string.split('').reverse().join('');

// function isNumeric(input) {
//     return isNaN(input) === false;
// }
const isNumerics = input => isNaN(input) === false;

// function count(input) {
//     var noWhitespace = input.trim();
//     return noWhitespace.length;
// }

const count = input => input.trim().length;

// function add(a,b) {
//     return parseFloat(a) + parseFloat(b);
// }

const add = (a,b) => parseFloat(a) + parseFloat(b);

// function subtract(a,b) {
//     return a - b;
// }

const subtract = (a,b) => a - b;

// function multiply(a,b) {
//     return a * b;
// }

const multiply = (a,b) => a * b;

// function divide(numerator, denominator) {
//     return numerator / denominator;
// }

const divide = (a,b) => a / b;

// function remainder(number, divisor) {
//     return number % divisor;
// }

const remainder = (number,divisor) => number % divisor;

// function square(a) {
//     return a * a;
// }

const square = a => a**2;

// function sumOfSquares(a,b) {
//     return add(square(a),square(b));
// }

const sumOfSquares = (a,b) => (a**2) + (b**2);

// function doMath(operator,a,b) {
//     return operator(a,b);
// }

const doMath = (operator,a,b) => operator(a,b);

// function isOdd(number) {
//     return (number % 2 === 1);
// }

const isOdd = number => number % 2 ===1;

// function isEven(number) {
//     return (number % 2 === 0);
// }

const isOdd = number => number % 2 === 0;

// function isFive(input) {
//     return input === 5;
// }

const isFive = input => input === 5;

// function addFive(input) {
//     return (input + 5);
// }

const addFive = input => input + 5;

// function isMultipleOfFive(input) {
//     return input % 5 === 0;
// }

const isMultipleOfFive = input => input % 5 === 0;

function isThree(input) {
    return input === 3;
}

function isMultipleOThree(input) {
    return input % 3 === 0;
}

function isMultipleOThreeAndFive(input) {
    return input % 3 === 0 || input % 5 === 0;
}

function isTrue(input) {
    return input === true;
}

function isFalse(input) {
    return input === false;
}

function isTruthy(input){
    return Boolean(input) === true;
}

function isFalsy(input) {
    return Boolean(input) === false;
}

function isVowel(letter) {
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
    return letter === letter.toUpperCase();
}

function isLowerCase(letter) {
    return letter === letter.toLowerCase();
}

// function hasLowerCase(string) {
//     return ['a', 'e', 'i', 'o', 'u'].indexOf(string.toLowerCase()) === -1;
// }

function hasLowerCase(input) {
    return input !== input.toUpperCase();
}

function isSpace(letter) {
    return letter.indexOf(' ') !== -1;
}

function isZero(number) {
    return number === 0;
}

function notZero(number) {
    return number !== 0;
}

function lowerCase(input) {
    return input.toLowerCase();
}

function double(n) {
    return n * 2;
}

function triple(n) {
    return n * 3;
}

function quadruple(n) {
    return n * 4;
}

function half(n) {
    return n / 2;
}

function subtract(a,b) {
    return a - b;
}

function modulo(a,b) {
    var numbersDivided = a / b;
    return numbersDivided - numbersDivided.toFixed();
}

function cube(n) {
    return n * n * n
}

function squareRoot(n) {
    return n * n;
}

function cubeRoot(n) {
    return n * n * n;
}

function invertSign(number) {
    if (isNaN(number) === true){
        return false;
    } else{
    return -(number);
    }
}

function degreesToRadians(number) {
    const pi = 3.14;
    return number * (pi/180);
}

function radiansToDegree(number) {
    const pi = 3.14;
    return number * (180/pi);
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
    return input.trim();
}

function areEqual(x,y) {
    return x == y;
}


function areIdentical(x,y) {
    return x === y;
}

function not(x) {
   if (Boolean(x) === true){
       return false;
   } else {
       return true;
   }
}

function notNot(x) {
    return -(-(x));
}

function and(x,y) {
    return Boolean(x) && Boolean(y);
}

function or(x,y) {
    return Boolean(x) || Boolean(y);
}

function reverseString(input) {
    var output = "string";
    var splitString = input.split("");
    var reverseArray = splitString.reverse();
    return reverseArray.join("");
}

function absoluteValue(number) {
    return Math.abs(number);
}

function rollDice(sides) {
    return Math.floor(Math.random() * (sides) + 1);
}

function howManyWhitesSpaces(input) {
    return (input.length) - ((input.trim()).length);
}

function secondFromFirst(x,y) {
    if (x.search(y)){
        return x.replace(y," ");
    }else{
        return x;
    }
}

function stringEndsWithA(input) {
    if (input.substring(input.length-1) === "a"){
        return true;
    } else{
        return false;
    }
}

function whiteSpacesAtBeginning(input) {
    return input.match(/^\s+/)[0].length
}

function returnTrueMessage() {
    return  "Hey, it's true";
}

function returnFalseMessage() {
    return  "Hey, it's false";
}

function returnMessage(input) {
    if (Boolean(input) === true) {
        return returnTrueMessage();
    } else{
        return returnFalseMessage();
    }
}

// var username = prompt("Please enter a username");
// var password = prompt("Please enter a password");
// var age = prompt("Please enter your age");
// var admin = username === "Bobby";
// function willLoginUser(username,password,age,admin) {
//     if (username === password){
//         return alert("Password and Username cannot match");
//     }else if(parseFloat(age) < 18 && username !== "Bobby"){
//         return alert("users must be 18 or older!!");
//     }else{
//         return alert("Welcome to the website!");
//     }
// }

// console.log((willLoginUser(username, password, age, admin)));

