"use strict";

$(document).ready(function() {
    // $('li').css('font-size','20px');
    // $('p,li,h1').css('background-color','brown');
    // var contents = $('h1').html();
    // alert(contents);

    $('h1').click(function () {
        $(this).css('background-color','pink')
    });

    $('p').dblclick(function (e) {
        $(this).css('font-size','18px');
    });

    $('li').hover(
        function () {
            $(this).css('color','red')
        },
        function () {
            $(this).css('color','black')
        }
    );
});
