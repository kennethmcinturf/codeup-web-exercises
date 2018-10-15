"use strict";
var shoplist = [];

do {
    var groceryList = prompt("What item do you need from the store?");
    shoplist.push(groceryList);
} while (groceryList !== null);

function makeList() {
    var listData = shoplist.slice(0,shoplist.length -1);
    var listContainer = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(listContainer);
    var listElement = document.createElement('ul');
    listContainer.appendChild(listElement);
    var numberOfListItems = listData.length;
    for (var i = 0; i < numberOfListItems; ++i) {
        var listItem = document.createElement('li');
        listItem.innerHTML = listData[i];
        listElement.appendChild(listItem);
    }
}

makeList();

function customStyling() {
    var usersBackgroundColor = prompt("What color would you like this page to be?");
    var usersFontColor = prompt("What color would you like the font on this page to be?");
    var usersFontFamily = prompt("What font would you like this page to use?");
    var body = document.getElementsByTagName("body");
    body[0].style.fontFamily = usersFontFamily;
    body[0].style.backgroundColor = usersBackgroundColor;
    body[0].style.color = usersFontColor;
}

customStyling();

