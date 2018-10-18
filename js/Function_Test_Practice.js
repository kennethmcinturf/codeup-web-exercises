// ------------- PRACTICE 1
// Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascencding order.
//     Example input: ["fred", true, 5, 3]
// Example output: [3, 5]
// Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascencding order.
//     Example input: ["fred", true, 5, 3]
// Example output: [3, 5]

function filterNubers(array) {
    var numbersArray = [];
    array.forEach(function (element,index,array) {
        if (isNaN(parseFloat(element)) === false){
            numbersArray.push(element);
        }
    });
    return numbersArray.sort(function(a, b){return a - b});
}

// ------------- PRACTICE 2
// Write a function, getOlder() that takes in array of dog objects and increases the value of the age properties by 1.
// var dogs = [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 7
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 4
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 10
//     }
// ];
// Example output: [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 8
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 5
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 11
//     }
// ];

function getOlder(dogs) {
    dogs.forEach(function (element,index,array) {
        element.age += 1;
    })
}

// ------------- PRACTICE 3
// Write a function, washCars() that takes in a array of car objects and sets the boolean properties of isDirty to false
// var cars = [
//     {
//         make: 'Volvo',
//         color: 'red',
//         year: 1996,
//         isDirty: true
//     },
//     {
//         make: 'Toyota',
//         color: 'black',
//         year: 2004,
//         isDirty: false
//     },
//     {
//         make: 'Ford',
//         color: 'white',
//         year: 2007,
//         isDirty: true
//     }
// ];
// Example output:
//     [
//         {
//             make: 'Volvo',
//             color: 'red',
//             year: 1996,
//             isDirty: false // changed to false
//         },
//         {
//             make: 'Toyota',
//             color: 'black',
//             year: 2004,
//             isDirty: false // stays the same
//         },
//         {
//             make: 'Ford',
//             color: 'white',
//             year: 2007,
//             isDirty: false // changed to false
//         }
//     ]

function washCars(cars) {
    cars.forEach(function (element,index,array) {
        element.isDirty = false;
    })
}

// ------------- PRACTICE 4
// Write a function, adminList() that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
 var users = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
];
// Example Output (before refactor): 2
// Example Output (after 1st refactor): [
//     'user1@email.com',
//     'user2@email.com'
// ]
// Example Output (after 2nd refactor): [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     }
// ]

function adminList(users) {
    var admin = [];
    users.forEach(function (element,index,array) {
        if (element.isAdmin === true){
            admin.push(element.email);
        }
    });
    return admin.length
}

function adminListTwo(users) {
    var admin = [];
    users.forEach(function (element,index,array) {
        if (element.isAdmin === true){
            admin.push(element.email);
        }
    });
    return admin
}

function adminListThree(users) {
    var admin = [];
    users.forEach(function (element,index,array) {
        if (element.isAdmin === true){
            admin.push(element);
        }
    });
    return admin
}

// ------------- PRACTICE 5
// Create a function, makeSandwhichObjects() that takes in two array of strings, breads and fillings and returns an array of sandwhichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
//     Example Input:
var breads  = [
        "white",
        "wheat",
        "rhy",
        "white"
    ];
var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];
// makeSandwhichObjects(breads, fillings) // example call to the function
// Example Output: [
//     {
//         bread: "white,
//         filling: "pb&j"
//     },
//     {
//         bread: "wheat",
//         filling: "ham"
//     },
//     {
//         bread: "rhy",
//         filling: "cheese steak"
//     },
//     {
//         bread: "white",
//         filling: "tuna"
//     }
// ]

function makeSandwichObjects(bread,fillings) {
    var sandwich = [];
    for (var i = 0; i < bread.length; i++){
        sandwich.push({bread: bread[i],filling: fillings[i]});
    }
    return sandwich;
}

// Return the number (count) of vowels in the given string.
//
//     We will consider a, e, i, o, and u as vowels for this Kata.
//
//     The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    var vowelsCount = [];
    for (var i = 0; i < str.length; i++){
        if (str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u'){
            vowelsCount.push(str.charAt(i));
        }
    }
    return vowelsCount.length;
}

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
// You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function countBits(n) {
   var binary = (n >>> 0).toString(2);
   var oneArray = [];
   for (var i = 0; i < binary.length; i++){
       if (binary.charAt(i) === "1"){
           oneArray.push(binary.charAt(i));
       }
   }
   return oneArray.length;
}

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without
// any elements with the same value next to each other and preserving the original order of elements.

function uniqueInOrder(iterable) {
    var uniqueArray = [];
    if (typeof(iterable) === "object" ){
        uniqueArray.push(iterable);
    }else if(typeof (iterable) === "string"){
        for (var i = 0; i < iterable.length; i++){
            uniqueArray.push(iterable.charAt(i));
        }
    }else {
        var iterableString = iterable.toString();
        for (var i = 0; i < iterableString.length; i++){
            uniqueArray.push(iterableString.charAt(i));
        }
    }
    console.log(uniqueArray);
    // var uniqueArray2 = [];
    // uniqueArray.forEach(function (element,array,index) {
    //     if (index.indexOf(element) === -1){
    //         uniqueArray2.push(element);
    //     }
    // });
    // return uniqueArray2;
}


