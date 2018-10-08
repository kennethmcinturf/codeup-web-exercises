// var i = 2;
//
// while (i <= 65536){
//     console.log(i);
//     i = i * 2;
// }

// var i = 2;
//
// do {
//     console.log(i);
//     i = i * 2;
// } while (i <= 65536);

var allCones = Math.floor(Math.random() * 50) + 50;
var cones = Math.floor(Math.random() * 5) + 1;
do{
    if (allCones > cones){
        allCones = allCones - cones;
        console.log("Sold " + cones + " cones");
    } else if (allCones < cones){
        console.log("I dont have that many cones.");
    } else {
        console.log("Thats all the cones I have.");
    }
} while (allCones > 0);
