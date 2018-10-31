"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let color = colors[Math.floor(Math.random()*colors.length)];

let favorite = 'blue'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.
// if (color == 'red'){
//     console.log('Red is the Color of Fire')
// } else if (color == 'orange') {
//     console.log('Orange is the Color of Syracuse')
// } else if (color == 'yellow') {
//     console.log('Yellow is the Color of Daisys')
// } else if (color == 'green') {
//     console.log('Green is the Color of Grass')
// } else if (color == 'blue') {
//     console.log('Blue is the Color of the Sky')
// } else{
//     console.log('I do not know anything by that color')
// }

// for (const color of colors){
//     if (color == 'red'){
//         console.log('Red is the Color of Fire')
//     } else if (color == 'orange') {
//         console.log('Orange is the Color of Syracuse')
//     } else if (color == 'yellow') {
//         console.log('Yellow is the Color of Daisys')
//     } else if (color == 'green') {
//         console.log('Green is the Color of Grass')
//     } else if (color == 'blue') {
//         console.log('Blue is the Color of the Sky')
//     } else{
//         console.log('I do not know anything by that color')
//     }
// }

let colorsSentence = colors.map(color => {
    return `<p>'This is the color ${color}</p>`
});

let colorFavorite = colors.filter(color => {
    return color.includes(favorite);
});

let colorAllTogether = colors.reduce((accumulator, currentValue) => {
    let colorsAdded = accumulator + currentValue
    return `All the colors together are ${colorsAdded}`
}, '');

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.
// (color == favorite) ? console.log('This is my favorite Color') : console.log('This is not my favorite Color')

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
