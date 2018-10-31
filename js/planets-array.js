(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
    let planetsListedOut = '<ol>'
    planets.forEach(planet => {
        planetsListedOut += `<li>${planet}</li>`
    })
    planetsListedOut += '</ol>'

    $("#planetList").append(planetsListedOut)

    let planetSentence = planets.map(planet =>{
        return `This planet is ${planet}`
    })
    console.log(planetSentence);

    let planetStartWithVowel = planets.filter(planet => {
        var firstLetter = planet.charAt(0);
        return ['a','e','i','o','u'].includes(firstLetter);
    })
    console.log(planetStartWithVowel);

    // console.log('Adding "The Sun" to the beginning of the planets array.');
    // planets.unshift("The Sun");
    // console.log(planets);
    //
    //
    // console.log('Adding "Pluto" to the end of the planets array.');
    // planets.push("Pluto");
    // console.log(planets);
    //
    // console.log('Removing "The Sun" from the beginning of the planets array.');
    // planets.shift();
    // console.log(planets);
    //
    // console.log('Removing "Pluto" from the end of the planets array.');
    // planets.pop();
    // console.log(planets);
    //
    // console.log('Finding and logging the index of "Earth" in the planets array.');
    // var indexEarth = planets.indexOf("Earth");
    // console.log(indexEarth);
    //
    // console.log("Reversing the order of the planets array.");
    // planets.reverse();
    // console.log(planets);
    //
    // console.log("Sorting the planets array.");
    // planets.sort();
    // console.log(planets);
})();
