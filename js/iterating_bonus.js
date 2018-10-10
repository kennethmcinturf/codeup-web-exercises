"use strict";

function randomDayOfWeek() {
    var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var randomNumber = Math.floor(Math.random() * 6);
    var output = console.log("The random day of the week is " + daysOfWeek[randomNumber]);
    return output;
}


function numberLetterIsInTheAlphabet(letter) {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return (alphabet.indexOf(letter) + 1);
}

//refactor to output all numbers for a string
//refactor to do the opposite, letter that is that number of the alphabet

function returnLongestString(input) {
    var output = " ";
    for (var i = 0; i < input.length; i++){
       if (input[i].length > output.length) {
           output = input[i];
       }
    }
    return output;
}

function f() {
    
}


//make tic-tac-toe game

var ticTacToe =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

var topRow = ticTacToe[0];
var middleRow = ticTacToe[1];
var BottomRow = ticTacToe[2];
