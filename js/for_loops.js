// function showMultiplicationTable(input) {
//     var multiple = 1;
//     for (multiple = 1; multiple < 11; multiple++) {
//         var multiply = input * multiple;
//         console.log(input + " x " + multiple + " = " + multiply);
//     }
// }

let numbersHere = [1,2,3,4,5,6,7,8,9,10];
let showMultiplicationTable = numbersHere.map(number => {
    let multiplicationTable = [];
    for (let i = 1; i <= 12; i++){
        multiplicationTable.push(number * i);
    }
    return multiplicationTable;
});

let listOfMultiples = '<ul>'

for (const tables of showMultiplicationTable){
    listOfMultiples += `<p>The multiples of ${tables[0]} are ${tables.join(', ')}</p>`
}

listOfMultiples += '</ul>'

$('#multiplicationTable').append(listOfMultiples);

let crazyNumbers = numbersHere.map(number => {
    return (number ** number)*number;
})

let divisibleByFifteen = crazyNumbers.filter(number => {
    return number % 12 === 0;
})

let craziestOfCrazy = crazyNumbers.reduce((accumulator,currentValue) => {
    return accumulator * currentValue
}, 1);

//
// for (var i = 1; i < 11; i++){
//     var random = Math.floor(Math.random() * 200) + 20;
//     if (random % 2 === 0){
//         console.log(random + " is even");
//     }else if (random % 2 === 1){
//         console.log(random + " is odd");
//     }
// }
// //
// for (var h = 1; h < 20; h++){
//     var string = ' ';
//     for (var p = 1; p <= h; p++){
//         string += h % 10;
//     }
//     console.log(string);
// }
//
// for (var k = 100; k > 0; k = k - 5){
//     console.log(k);
// }