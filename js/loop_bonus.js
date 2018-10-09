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

function numberEqualLength(input) {
    var lengthOfString = input.length;
    for (var i = 0; i < input.length; i++)
        if (i === parseFloat(input)){

        }
}