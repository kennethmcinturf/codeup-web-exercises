// "use strict";
//
// var inputString = prompt("Please Insert a string here");
//
// do {
//     var inputString = prompt("Please Insert a string here");
//
// } while (inputString === "" || isNaN(inputString) === true);
//
//
// alert("This is the string you inputted" + " " + inputString);
// alert("The lenght of your string was" + " " + inputString.length);
//
// var noun = prompt("Please enter a noun");
// var verb = prompt("Please enter a verb");
// var adjective = prompt("Please enter a adjective");
// var adverb = prompt("Please enter a adverb");
// alert("The" + " " + noun + " " + verb + " " + adjective + " " + adverb);
//
// var firstNumber = prompt("What is the first number?");
// var secondNumber = prompt("What is the second number?");
// var sumNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
// var subNumber = firstNumber - secondNumber;
// var dividNumber = firstNumber / secondNumber;
// var multiNumber = firstNumber * secondNumber;
//
// alert(firstNumber + " + " + secondNumber + " = " + sumNumber);
// alert(firstNumber + " - " + secondNumber + " = " + subNumber);
// alert(firstNumber + " / " + secondNumber + " = " + dividNumber);
// alert(firstNumber + " * " + secondNumber + " = " + multiNumber);
//
// var roomLength = prompt("What is the length of the room in feet?");
// var roomWidth = prompt("What is the width of the room in feet?");
// var roomAreaImperial = (roomLength * roomWidth);
// const notPi = 0.09290304
// var roomAreaMetric = (roomAreaImperial) * notPi;
// // var roomAreaMetricSquared = roomAreaMetric / roomAreaMetric;
// alert("You entered dimensions of " + roomLength + " by " + roomWidth);
// alert("The area of the room is " + (roomAreaImperial) + " in Imperial");
// alert("The area of the room is " + (roomAreaMetric) + " in Metric");
//
// var peopleAtParty = prompt("How many people are at the party?");
// var howManyPizzaAtParty = prompt("How many pizzas do you have for this here party?");
// alert("You have " + parseFloat(peopleAtParty) + " people at the party and " + parseFloat(howManyPizzaAtParty) + " Pizzas" );
// var piecesPerPizza = prompt("How many pieces of pizza are there in each pizza?");
// var piecesAtParty = (piecesPerPizza * howManyPizzaAtParty);
// var piecesPerPerson =  piecesAtParty / parseFloat(peopleAtParty);
// alert("You have " + parseInt(piecesPerPerson) + " slices per person at the party");
// var totalPiecesOfPizza = parseInt(piecesPerPerson) * peopleAtParty;
// var leftoverPizza = (piecesAtParty - totalPiecesOfPizza);
// alert("You have " + leftoverPizza + " leftover pieces.");
//
// var ceilingLenght = prompt("What is the length of the ceiling?");
// var ceilingWidth = prompt("What is the width of the ceiling?");
// var ceilingOfRoom = ceilingLenght * ceilingWidth;
// const paintPerFt = 350;
// var needPaintDeci = ceilingOfRoom / paintPerFt;
// var needPaintWhole = parseInt(needPaintDeci) + 1;
// alert("You will need to buy " + needPaintWhole);


// var amountEuro = prompt("How many Euros do you have?");
// var exchangeRateEuro = prompt("How many euro do you get per dollar?");
// var amountDollarsNotRounded = amountEuro * exchangeRateEuro;
// var amountDollarsToTwo = amountDollarsNotRounded.toFixed(2);
// alert("You have " + amountDollarsToTwo + " dollars.");

// var principalLoan = prompt("What is the starting amount invested?");
//
// do {
//     var principalLoan = prompt("What is the starting amount invested?");
//
// } while (principalLoan === "" || isNaN(principalLoan) === true);
//
//
// var rateLoan = prompt("What is the rate of return on the investment?");
//
// do {
//     var rateLoan = prompt("What is the rate of return on the investment?");
//
// } while (rateLoan === "" || isNaN(rateLoan) === true);
//
// var yearLoan = prompt("What is the term of the investment?");
//
// do {
//     var yearLoan = prompt("What is the rate of return on the investment?");
//
// } while (yearLoan === "" || isNaN(yearLoan) === true);
//
// var rateLoanPercent = parseFloat(rateLoan)/100;
// var amountEndOfInvest = (parseFloat(principalLoan))*(1 + (rateLoanPercent*(parseFloat(yearLoan))));
// alert("After " + yearLoan + " at " + parseFloat(rateLoan) + " %, the investment will be worth $" + amountEndOfInvest);







