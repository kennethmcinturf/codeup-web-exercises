"use strict";
var solutionArray = [];
var userInputArray = [];
var myScore = document.getElementById("round-counter");



$(document).ready(function () {
    // function disableButton(){
    //     if (solutionArray.length > 0){
    //         return ("button[id=playSimon]").attr('disabled','disabled');
    //     }
    // }
    $("#playSimon").click(function () {
        function randomMovement() {
           var random = Math.floor((Math.random() * 4) + 1);
           solutionArray.push(random);
           myScore.innerHTML = solutionArray.length;
           solutionArray.forEach(function (element,index,array) {
               setTimeout(function(){
                       if (element === 1){
                           $("#top-left > img")
                               .fadeIn()
                               .fadeOut();
                       }else if (element === 2){
                           $("#top-right > img")
                               .fadeIn()
                               .fadeOut();
                       }else if (element === 3) {
                           $("#bottom-left > img")
                               .fadeIn()
                               .fadeOut();
                       }else {
                           $("#bottom-right> img")
                               .fadeIn()
                               .fadeOut();
                       }
                   }, 1000 * index);
           })
       }
       randomMovement();
        // disableButton();
       function checkForWinner(input) {
           var isWinner = true;
           if (input.length === solutionArray.length){
               input.forEach(function (element,index,array) {
                   if (element !== solutionArray[index]){
                       isWinner = false;
                   }
               });
               if (isWinner === true){
                   alert("Great job, lets add one more input");
                   userInputArray = [];
                   randomMovement();
               }else {
                   alert('sorry, but please try again');
                   $("#playSimon").off('click');

               }
           }
       }
       $('#top-left').click(function () {
           userInputArray.push(1);
           checkForWinner(userInputArray);
       });
       $('#top-right').click(function () {
           userInputArray.push(2);
           checkForWinner(userInputArray);
       });
       $('#bottom-left').click(function () {
           userInputArray.push(3);
           checkForWinner(userInputArray);
       });
       $('#bottom-right').click(function () {
           userInputArray.push(4);
           checkForWinner(userInputArray);
       });
   });
    $('#restart').click(function () {
        location.reload();
    })
});