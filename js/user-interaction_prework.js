"use strict";

// TODO: Ask the user for their name.
 var username =  prompt("Hi, What is your name?")
//       Keep asking if an empty input is provided.;
    while (username === "") {
        username =  prompt("Hi, What is your name?")
    }

     console.log(username + " " + "is a stupid name")

// TODO: Show an alert message that welcomes the user based on their input.
alert("Welcome" + " " + username)
// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
var likePizza  = confirm("Do you like Pizza?")
    if (true){
        alert("Cool, I like Pizza too!");
    } else {
        console.log("I thought everyone liked Pizza");
    }
