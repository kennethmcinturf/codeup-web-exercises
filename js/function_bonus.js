function makeJustinMessage(input) {
    var output = 0;
    if (input === "justin"){
        output = "It's Justin!";
    }else {
        output = "It's not Justin";
    }
    return output;
}

function trafficLight(color) {
    var output = 0;
    if (String(color) === "Green" || String(color) === "green"){
        output = "Go!";
    }else if(String(color) === "Yellow" || String(color) === "yellow"){
        output = "Use your best judgement! Probs should stop though.";
    }else {
        output = "Stop";
    }
    return output;
}

function outputIsInput(input) {
    var output = 0;
    if (input === " " || input === undefined){
        output = "no input provided";
    } else{
        output = input.toString();
    }
    return output;
}

// function numberMessage(number) {
//     var output = 0;
//     switch (number) {
//         case 1:
//             output = "1 is a super cool number!";
//             break;
//         case 2:
//             output = "2 is a super cool number!";
//             break;
//         case 3:
//             output = "3 is a super cool number!";
//             break;
//         case 4:
//             output = "4 is a super cool number!";
//             break;
//         case 5:
//             output = "5 is a super cool number!";
//             break;
//         case 6:
//             output = "6 is a super cool number!";
//             break;
//         case 7:
//             output = "7 is a super cool number!";
//             break;
//         case 8:
//             output = "8 is a super cool number!";
//             break;
//         case 9:
//             output = "9 is a super cool number!";
//             break;
//         case :
//             output = "invalid input";
//             break;
//         default:
//             output = "too many digits";
//             break;
//     }
//     return output;
// }

function numberMessage(number) {
    var output = 0;
    if (number <= 9){
        output = number + " is a super cool number";
    }else if(number > 9){
        output = "That number is to big."
    }else{
        output = "Invalid Input"
    }
    return output;
}

function favoriteDayOfWeek(day) {
    var output = "String";
    if (day === "Monday" || day === "monday" || day === "Mon"|| day === "mon"){
        output = alert("Monday is a pretty cool day!");
    }else if (day === "Tuesday" || day === "tuesday" || day === "Tues"|| day === "tues"){
        output = alert("Monday is a pretty cool day!");
    }else if (day === "Tuesday" || day === "tuesday" || day === "Tues"|| day === "tues"){
        output = alert("Tuesday is a pretty cool day!");
    }else if (day === "Wednesday" || day === "wednesday" || day === "Wed"|| day === "wed"){
        output = alert("Wednesday is a pretty cool day!");
    }else if (day === "Thursday" || day === "thursday" || day === "Thurs"|| day === "thurs"){
        output = alert("Thursday is a pretty cool day!");
    }else if (day === "Friday" || day === "friday" || day === "Fri"|| day === "fri"){
        output = alert("Friday is a pretty cool day!");
    }else if (day === "Saturday" || day === "saturday" || day === "Sat"|| day === "sat"){
        output = alert("Saturday is a pretty cool day!");
    }else if (day === "Sunday" || day === "sunday" || day === "Sun"|| day === "sun"){
        output = alert("Sunday is a pretty cool day!");
    }else{
        output = alert("That aint a day of the week, silly!");
    }
    return output;
}

// var input = prompt("Enter an input");
// function isANumber(input) {
//     var output = 0;
//     if (isNaN(input) === true){
//         output = alert("This is not a number.");
//     } else{
//         output = alert("This is a number.");
//     }
//     return output;
// }
// alert(isANumber(input));

function isANumber(input) {
    var output = 0;
    isNaN(input) === true ? output = "Input is not a number" : output = "Input is a number";
    return output;
}

function seasonEntered(season) {
    var output = 0;
    if (season.toLowerCase() === "autumn" || season.toLowerCase() === "aut" || season.toLowerCase() === "fall"){
        output = "Months in Autumn are: September, October, and November."
    }else if (season.toLowerCase() === "winter" || season.toLowerCase() === "wintr") {
        output = "Months in Winter are: December, January, and February."
    }else if (season.toLowerCase() === "summer" || season.toLowerCase() === "sum") {
        output = "Months in Summer are: June, July, and August."
    }else if (season.toLowerCase() === "spring" || season.toLowerCase() === "spg") {
        output = "Months in Spring are: March, April, and May."
    }else{
        output = "That's not a valid output."
    }
    return output;
}


//lightyears,miles,feet,inches
function distanceUnitConversion(x,value,y) {
    var output = 0;
    switch (x) {
        case "lightyear":
            switch (y) {
                case "lightyear":
                    alert(value + " lightyears = " + value +" lightyears");
                    break;
                case "mile":
                    var lightyearsToMile = value * 5.879e+12;
                    alert(value + " Lightyears is " + lightyearsToMile + " miles.");
                    break;
                case "feet":
                    var lightyearsToFeet = value * 3.104e+16;
                    alert(value + " Lightyears is " + lightyearsToFeet + " feet.");
                    break;
                case "inch":
                    var lightyearsToInches = value * 3.725e+17;
                    alert(value + " Lightyears is " + lightyearsToInches + " inches.");
                    break;
                default:
                    alert("That is not a valid input");
                    break;
            }
            break;
        case "mile":
            switch (y) {
                case "lightyear":
                    var mileToLightyear = value / 5.879e+12;
                    alert(value + " miles is " + mileToLightyear + " lightyears.");
                    break;
                case "mile":
                    alert(value + " miles = " + value +" miles.");
                    break;
                case "feet":
                    var mileToFeet = value * 5280;
                    alert(value + " miles is " + mileToFeet + " feet.");
                    break;
                case "inch":
                    var mileToInch = value * 63360;
                    alert(value + " miles is " + mileToInch + " inches.");
                    break;
                default:
                    alert("That is not a valid input");
                    break;
            }
            break;
        case "feet":
            switch (y) {
                case "lightyear":
                    var feetToLightyear = value / 3.104e+16;
                    alert(value + " feet is " + feetToLightyear + " lightyears.");
                    break;
                case "mile":
                    var feetToMiles = value / 5280;
                    alert(value + " feet is " + feetToMiles + " miles.");
                    break;
                case "feet":
                    alert(value + " feet = " + value + " feet.");
                    break;
                case "inch":
                    var feetToInch = value * 12;
                    alert(value + " feet is " + feetToInch + " inches.");
                    break;
                default:
                    alert("That is not a valid input");
                    break;
            }
            break;
        case "inch":
            switch (y) {
                case "lightyear":
                    var inchesToLightyear = value / 3.725e+17;
                    alert(value + " inches is " + inchesToLightyear + " lightyears.");
                    break;
                case "mile":
                    var inchesToMiles = value / 63360;
                    alert(value + " inches is " + inchesToMiles + " miles.");
                    break;
                case "feet":
                    var inchesToFeet = value / 12;
                    alert(value + " inches is " + inchesToFeet + " feet.");
                    break;
                case "inch":
                    alert(value + " inches = " + value + " inches.");
                    break;
                default:
                    alert("That is not a valid input");
                    break;
            }
            break;
        default:
            alert("That is not a valid input");
            break;
    }
    return output;
}


