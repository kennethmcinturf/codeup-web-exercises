function toggle(input) {
    var stringSplit = input.split('');
    for (var i = 0; i < input.length; i++){
        if (stringSplit[i] === stringSplit[i].toLowerCase()){
            stringSplit[i] = stringSplit[i].toUpperCase();
        }else if (stringSplit[i] === stringSplit[i].toUpperCase()){
            stringSplit[i] = stringSplit[i].toLowerCase();
        }
    }
    console.log(stringSplit.join(''))
}

//Elephant10

function numberEqualToStringLength(input) {
    var reverseString = input.split("").reverse().join("");
    var getNumber = parseFloat(reverseString);
    var numberToString = getNumber + "";
    var reverseNumberString =  numberToString.split("").reverse().join("");
    var backToNumber = parseFloat(reverseNumberString);
    if (backToNumber === input.length){
        return "yes";
    }else {
        return "no";
    }
}


//redo your own way

function getVowelsCheat(input) {
    var m = input.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
}

function getVowels(input) {
    var vowels = ['a','e','i','o','u'];
    var stringSplit = input.split('');
    var output = " ";
    for (var n = 0; n < input.length; n++){
        if (stringSplit[n] === vowels.indexOf('a')||
            stringSplit[n] === vowels.indexOf('e')||
            stringSplit[n] === vowels.indexOf('i')||
            stringSplit[n] === vowels.indexOf('o')||
            stringSplit[n] === vowels.indexOf('u')){
            output.push(stringSplit[n]);
        }
        console.log(output)
    }
}

function count9(input) {
    var stringSplit = input.split('');
    var result = 0;
    for (var i = 0; i < input.length; i++){
        if (parseInt(stringSplit[i]) == 9){
            result.push(stringSplit[i]);
        }
    }
    console.log(result)
}

function integersOneThroughHundred() {
    for (var i = 1; i < 101; i++){
        if (i = 1){
            console.log(i);
        }else{

        }
    }
}

var word = "beers";

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




