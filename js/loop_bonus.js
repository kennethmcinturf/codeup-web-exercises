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

//trying flipping the string

function numberEqualLength(input) {
    var lengthOfString = input.length;
    var stringSplit = input.split('');
    for (var i = 0; i < input.length; i++)
        if (stringSplit[i] === parseInt(stringSplit[i])){
            var isItSame = parseFloat(stringSplit[i]) === parseInt(lengthOfString);
        }
        console.log(isItSame);
}

//redo your own way

// function getVowels(input) {
//     var m = input.match(/[aeiou]/gi);
//     return m === null ? 0 : m.length;
// }

function getVowels(input) {
    var vowels = ['a','e','i','o','u'];
    var stringSplit = input.split('');
    var result = 0;
    for (var n = 0; n < input.length; n++){
        if (stringSplit[n] === vowels){
            result.push(stringSplit[n]);
        }
    }
    console.log()
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




