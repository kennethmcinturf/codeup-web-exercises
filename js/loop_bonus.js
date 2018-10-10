function toggle(input) {
    var stringSplit = input.split('');
    for (var i = 0; i < input.length; i++){
        if (stringSplit[i] === stringSplit[i].toLowerCase()){
            stringSplit[i] = stringSplit[i].toUpperCase();
        }else if (stringSplit[i] === stringSplit[i].toUpperCase()){
            stringSplit[i] = stringSplit[i].toLowerCase();
        }
    }
    return stringSplit.join('');
}

//Elephant10

function numberEqualToStringLength(input) {
    var reverseString = input.split("").reverse().join("");
    var getNumber = reverseString.replace(/\D/g,'');
    var numberToString = getNumber + "";
    var reverseNumberString =  numberToString.split("").reverse().join("");
    var backToNumber = parseFloat(reverseNumberString);
    if (backToNumber === input.length){
        return "yes";
    }else {
        return "no";
    }
}


function getVowelsCheat(input) {
    var m = input.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
}

function getVowels(str) {
    var vowelsCount = 0;
    var string = str.toString();
    for (var i = 0; i <= string.length - 1; i++) {
        if (string.charAt(i).toLowerCase() == "a" ||
            string.charAt(i).toLowerCase() == "e" ||
            string.charAt(i).toLowerCase() == "i" ||
            string.charAt(i).toLowerCase() == "o" ||
            string.charAt(i).toLowerCase() == "u") {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}

function countNine(str) {
    var nineCount = 0;
    var string = str.toString();
    for (var i = 0; i <= string.length - 1; i++) {
        if (string.charAt(i) == "9"){
            nineCount += 1;
        }
    }
    return nineCount;
}

function integersOneThroughHundred() {
    var output = 0;
    for (var i = 1; i < 101; i++){
        output = output + i;
    }
    return output;
}

// var word = "beers";
//
// for (var i = 99; i > 0; i--){
//     if(i === 1){
//         word = "beer";
//     }
//     console.log(i + " " + word + " on the wall,");
//     console.log(i + " " + word + " on the wall,");
//     console.log("take one down, pass it around,");
//     if (i === 2){
//         word = "beer";
//     }
//     if (i === 1){
//         console.log("No beer left on the wall,");
//     }else {
//         console.log((i - 1) + " " + word + " on the wall.");
//     }
// }




