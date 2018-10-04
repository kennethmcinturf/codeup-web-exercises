"use strict";
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var willYouEnterNumber = confirm("Would you like to enter a number?");
if (willYouEnterNumber === true){
    var enterNumber = prompt("Enter a number");
    if(isNaN(enterNumber) === true){
        alert("That is not a number.")
    } else{
        if (enterNumber % 2 === 0){
            alert("Number is even");
        } else {
            alert("Number is odd")
        }
        alert("The number plus 100 is " + (parseFloat(enterNumber) + 100));
        if (enterNumber > -1){
            alert("Number is Positive.")
        } else{
            alert("Number is Negative.")
        }
    }
}   else {
    alert("okie dokey")
}

/* ########################################################################## */

// function willEnterNumber() {
//     var output = 0;
//     var willEnterNumber = confirm("Will you enter a number");
//     if (willEnterNumber === false){
//         output = alert("Okie Dokie");
//     } else{
//         output = prompt("Please Enter Number")
//     }
// }





/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzeColor(input) {
    var output = 0;
    if (input === 'red'){
        output = "red is the color of fire.";
    }else if(input === 'orange'){
        output = "orange is the color of pumpkins.";
    }else if(input === 'yellow'){
        output = "yellow is the color of daisy.";
    }else if(input === 'green'){
        output = "green is the color of grass.";
    }else if(input === 'blue'){
        output = "blue is the color of water.";
    }else{
        output = "I dont know anything by this color.";
    }
    return output;
}


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(color) {
    var output = 0;
    switch (color) {
        case "red":
            output = "Red is the color of fire";
            break;
        case "orange":
            output = "Orange is the color of pumpkin";
            break;
        case "yellow":
            output = "Yellow is the color of schoolbus";
            break;
        case "green":
            output = "Green is the color of grass";
            break;
        case "blue":
            output = "Blue is the color of water";
            break;
        default:
            output = "I dont know anything by this color";
    }
    return output;
}


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var pickColor = prompt("Gimme a color.");
alert(analyzeColor(pickColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, price) {
    var output = 0;
    switch(luckyNumber) {
        case luckyNumber = 0:
            output = price;
            break;
        case luckyNumber = 1:
            output = price * .9;
            break;
        case luckyNumber = 2:
            output = price * .75;
            break;
        case luckyNumber = 3:
            output = price * .65;
            break;
        case luckyNumber = 4:
            output = price * .5;
            break;
        case luckyNumber = 5:
            output = 0;
            break;
        default:
            output = "That aint no number, child.";
    }
    return output;
}


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var customerBill = prompt("What was you bill today?");
alert("Your Lucky Number is " + luckyNumber);
alert("Your price before the discount is " + customerBill);
var numberCustomerBill = parseFloat(customerBill);
alert("Your price after the discount is " + (calculateTotal(luckyNumber,numberCustomerBill)));
