"use strict";


var people = [
    {
        name: "Fred",
        favColor: "red"
    },
    {
        name: "Sally",
        favColor: "blue"
    },
    {
        name: "Tom",
        favColor: "yellow"
    }
];

function buildHtml(people) {
    var totalHTMl = "<ul>";
    people.forEach(function (person) {
        totalHTMl += '<li>';
        totalHTMl += person.name;
    });
    totalHTMl += "</ul>";
    return totalHTMl
}


$(document).ready(function () {
   $('#add-names-btn').click(function () {
       $('#names-list').html(buildHtml(people));
       function colorBonus(peopleObject) {
           $('li').each(function (i,e) {
               $(this).css('color',peopleObject[i].favColor)
           })
       }
       colorBonus(people);
   });
});