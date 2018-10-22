"use strict";

var clickCounter = 0;


$(document).ready(function () {
   $('.box').click(function () {
       clickCounter = clickCounter + 1;
       if (clickCounter % 2 === 1){
           $(this).find('.Xs').css("display",'inline-block');
           $('#playerO').css("display",'initial');
           $('#playerX').css("display",'none');
           $(this).off();
       } else {
           $(this).find('.Ys').css("display",'inline-block');
           $('#playerX').css("display",'initial');
           $('#playerO').css("display",'none');
           $(this).off();
       }
   });
   function checkForWinner() {
       var spaceOne = $('#top-left');
       var spaceTwo = $('#top-center');
       var spaceThree = $('#top-right');
       var spaceFour = $('#center-left');
       var spaceFive = $('#center-center');
       var spaceSix = $('#center-right');
       var spaceSeven = $('#bottom-left');
       var spaceEight = $('#bottom-center');
       var spaceNine = $('#bottom-right');
   }
});