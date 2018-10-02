var billAmount = prompt("How much was the bill");
var amountOfBillTip = prompt("How much would you like to tip?");
var amountOfTip = (parseFloat(billAmount))*(parseFloat((parseFloat(amountOfBillTip)/100)));
alert("The amount tipped will be" + " " + "$" + amountOfTip)
var totalBill = amountOfTip + parseFloat(billAmount);
alert("The total bill will be" + " " + "$" + totalBill );