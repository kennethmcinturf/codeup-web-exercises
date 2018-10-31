/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'kc';
const email = 'kennethcmcinturf@gmail.com';
const languages = ['javascript','html','css'];

// TODO: rewrite the object literal using object property shorthand
users.push({
  name,
  email,
  languages
});



// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach((user) => emails.push(user.email));


// for (let i = 0; i < users.length; i++){
//     const addEmails =  user => emails.push(user[i].email);
//     addEmails(users)
// }

// for (const user of users){
//   emails.push(user.email);
// }

users.forEach((user) => names.push(user.name));

// for (let i = 0; i < users.length; i++){
//     const addNames =  user => names.push(user[i].name);
//     addNames(users)
// }

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(({name,email,language}) => {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;
  // const {name,email,languages} = user;

  // TODO: rewrite the assignment below to use template strings
  // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
    developers.push(`${name}'s email is ${email}, ${name} knows ${languages.join(', ')}`);
});

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
for (const developer of developers) {
  // TODO: rewrite the assignment below to use template strings
  // list += '<li>' + developer + '</li>';
    list += `<li>${developer}</li>`
};
list += '</ul>';

let packageMangers = ['npm','pip','brew','apt'];

let capatilizedString =  packageMangers.map((string) => {
    return string.toUpperCase();
})

console.log(capatilizedString);

let numbers = [1,2,3,4,5,6,7,8,9,10]

let filteredNumbers = numbers.filter((numbers) =>{
  return numbers === 3;
})

let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];

let vowelsInThere = letters.filter((letter) =>{
  return ['a','e','i','o','u'].includes(letter)
})

console.log(vowelsInThere);

let sumOfStuff = numbers.reduce((accumulator,currentValue) =>{
  return accumulator + currentValue;
},0);

console.log(sumOfStuff);

var singleString = ['banana','orange','smoothie'].reduce((accumulaotr,currentValue) => {
  return accumulaotr + currentValue;
}, '');

let multiplyBy3 = numbers.map(numbers => {
  return numbers * 3;
});

console.log(multiplyBy3);

let evenNumber = multiplyBy3.filter(number => {
  return number % 2 === 0;
});

console.log(evenNumber);

let productOfEvens = evenNumber.reduce((accumulator,currentValue) => {
  return accumulator * currentValue;
}, 1);

console.log(productOfEvens);


