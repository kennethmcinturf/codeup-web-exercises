// "use strict"
//
// console.log("Hello from External JS");
//
// alert("Welcome to my Website!");
//
// var userFavColor = prompt("What is your favorite color?");
//
// alert("Great" + " " + userFavColor + " " + "is my favorite color too!");

var liitleMermaid =  prompt("How many days did you rent 'The Little Mermaid' for?");
var brotherBear =  prompt("How many days did you rent 'Brother Bear' for?");
var hercules =  prompt("How many days did you rent 'Hercules' for?");
var pricePerDay = prompt("What is the price of a rental per day?");
var totalPrice = (parseFloat(liitleMermaid) * parseFloat(pricePerDay)) +  (parseFloat(brotherBear) * parseFloat(pricePerDay)) + (parseFloat(hercules) * parseFloat(pricePerDay));
alert("The total price of your rentals is" + " " + "$" + totalPrice.toFixed(2));

var facebookPay = prompt("How much are you paid per hour for working on Facebook assignments?");
var facebookHours = prompt("How many hours did you work for Facebook?");
var googlePay = prompt("How much are you paid per hour for working on Google assignments?");
var googleHours = prompt("How many hours did you work for Google?");
var amazonPay = prompt("How much are you paid per hour for working on Amazon assignments?");
var amazonHours = prompt("How many hours did you work for Amazon?");
var weeklyPay = (parseFloat(facebookHours)* parseFloat(facebookPay)) + (parseFloat(googleHours)*parseFloat(googlePay)) + (parseFloat(amazonHours)*parseFloat(amazonPay));
alert("Your total weekly pay is" + " " + "$" + weeklyPay.toFixed(2));

var classFull = confirm("Does the class have any openings");
var scheduleConflict = confirm("Does the student have a class at the same time as this class?");
var enrollElidgble = (classFull) && (!scheduleConflict);
alert("The student can enroll in the class:" + " " + enrollElidgble);

if (!classFull){
    alert("Sorry, you cannot enroll in this class");
} else if (!scheduleConflict){
    alert("Sorry, you cannot enroll in this class");
} else{
    alert("You can enroll in this class!")
}

var productBasket = prompt("How many items are in the basket?");
var offerExpired = confirm("Is the offer expiration date in the future?");
var premiumMember = confirm("Is customer a premium member?");
var offerValid = (premiumMember || (parseFloat(productBasket) > 2)) && offerExpired;
alert("The offer can be applied:" + " " + offerValid);

if ((parseFloat(productBasket) > 2) && (offerExpired)) {
    alert("You can get the offer!");
} else if(premiumMember){
    alert("You can get the offer!");
} else{
    alert("Sorry, you can't get none of this offer");
}