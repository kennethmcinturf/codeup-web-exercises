"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const userThreeLanguage = users.filter(user =>{
   return user.languages.length >= 3
});

const emails = users.map(user => {
    return user.email
})

const yearsOfExperience = users.reduce((accumulator,user) => {
    return user.yearsOfExperience + accumulator;
}, 0);

const longestEmail = users.reduce((accumulator,user) =>{
    if (accumulator.length < (user.email).length){
        return user.email
    }else {
        return accumulator
    }
}, '');

// const singleName = users.reduce((accumulator,user) => {
//     let names = accumulator + user.name;
//     let namesWithSentence = `${names}, `;
//     console.log(namesWithSentence);
//     return namesWithSentence.substring(0,namesWithSentence - 2);
// }, 'Your instructors are ');
//
// console.log(singleName);

// let intialValue = '';
// users.forEach(user => {
//     intialValue += user.name + ',';
// })
//
// intialValue = intialValue.substring(0,intialValue.length - 1) + '.'
//
// console.log(intialValue);

let initialValue = '';
let nameString = users.reduce((prev,curr) =>{
    return prev + curr.name + ', ';
}, initialValue)

nameString = nameString.substring(0,nameString.length - 2) + '.'
nameString = `Your intructors are ${nameString}`
console.log(nameString);

let langauges = users.reduce((prev,curr) =>{
    curr.languages.map(language => {
        prev.push(language);
    });
    return prev

}, []);

langauges = new Set(langauges)
console.log(langauges);
// const uniqueLangaugaes = users.reduce((accumulator,user) =>{
//     return `${accumulator},${user.languages}`
// }, '')
//
// let uniqueLangauages2 = uniqueLangaugaes.replace(',','').split(',')
//
//
// console.log(uniqueLangauages2);
//
// const theFinalString = uniqueLangauages2.filter((language, index) =>{
//     return uniqueLangauages2.indexOf(language) == index;
// })

// ======= BONUS 1 Problems
const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];
// *** hints for these problems and additional bonuses are below
// PROBLEM 1 - create an array of the first letters of each fruit
const firstLetter = fruits.map(fruit => {
    return fruit.charAt(0);
});

// console.log(firstLetter);

// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)
const nameAndAge = customers.map(customer => {
    return {name: customer.name, age: customer.age}
});

// console.log(nameAndAge);

// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects
let civilServant = customers.filter(customer => {
    return ['Police Officer','Teacher'].includes(customer.occupation)
})
///try reseting the value of the variable here
console.log(civilServant);
// PROBLEM 4 - determine the average age of customers
const totalAge = customers.reduce((accumulator,customer) =>{
    return accumulator + customer.age
}, 0)
const averageAge = totalAge / customers.length;
console.log(averageAge);
//            PROBLEM 1 HINT - use .map()
//            PROBLEM 2 HINT - use .map()
//            PROBLEM 3 HINT - use .filter()
//            PROBLEM 4 HINT - use .reduce()
// ======= BONUS 2 Problems
// Given the following array...
const names = ["John", "Max", "Ronald"];
// complete the bonuses below...
// - Create an array where all names are given a last name of Smith.
const lastName = names.map(name => {
    return `${name} Smith`
})
// console.log(lastName);
// - Create an array where each word is in all caps
const caps = names.map(name => {
    return name.toUpperCase()
})

// console.log(caps);
// - Create an array where all names have more than 3 letters
const threeLetter = names.filter(name => {
    return name.length > 3
})

// console.log(threeLetter);
// - Create an array of names with only the last two letters of each name
const lastTwoLetter = names.map(name => {
    return name.substring(name.length - 2, name.length)
});

// console.log(lastTwoLetter);
// - Create a total count of all letter
const countLetters = names.reduce((prev,curr) =>{
    return prev + curr.length;
}, 0)

// console.log(countLetters);
// - Create a string of all letters in alphabetical order
const letterString = names.reduce((prev,curr) => {
    return prev + curr
}, '')

// console.log(letterString);
// - Create an array of word objects with properties of wordLength, firstLetter, lastLetter

// - Create a string of all vowels in the entire array of names
// - Create a single object with properties
// ======= BONUS 3 Problems
// Given the following array...
const family = [
    {
        name: "Karen",
        gender: "female",
        age: 29,
    },
    {
        name: "Summer",
        gender: "female",
        age: 10,
    },
    {
        name: "Bob",
        gender: "male",
        age: 32,
    },
];
// complete the bonuses below...
// - Calculate the average age of family members
// - Create an array of family objects without the age property
// - Create an array of all minors
// - Calculate the total age combined of family members
// - Create an array of only female family member objects
// - Create a single object with properties containing arrays of all names, genders, and ages

