generateRandoms = (numberOfCards) => {
    randomArray = [];
    do {
        for (let i = 0; i < numberOfCards + 1; i++){
            number = Math.floor((Math.random() * numberOfCards) + 1);
            if (randomArray.indexOf(number) === -1){
                randomArray.push(number);
            }
        }
    }while (randomArray.length < numberOfCards);
    return randomArray;
};



addPicture = (numberOfCards) => {
    generateRandoms(numberOfCards);
    for (let i = 0; i <= randomArray.length - 1; i++){
        if (randomArray[i] === 1 || randomArray[i] === 2){
            $(`#${i}`).addClass("img-one")
        }else if (randomArray[i] === 3 || randomArray[i] === 4){
            $(`#${i}`).addClass("img-two")
        }else if (randomArray[i] === 6 || randomArray[i] === 5){
            $(`#${i}`).addClass("img-three")
        }else if (randomArray[i] === 7 || randomArray[i] === 8){
            $(`#${i}`).addClass("img-four")
        }else if (randomArray[i] === 9 || randomArray[i] === 10){
            $(`#${i}`).addClass("img-five")
        }else if (randomArray[i] === 11 || randomArray[i] === 12){
            $(`#${i}`).addClass("img-six")
        }
    } 
};

addPicture(12);
if (localStorage.highscoretwelve === "1000"){
    $('#highScore').val(0);
}else {
    $('#highScore').val(localStorage.highscoretwelve);
}

let clickCounter = 0;
let roundCounter = 0;
let score = $('#round-counter').val();
let numberCorrect = $('#container .correct').length;

if (localStorage.getItem("highscoretwelve") === null){
    localStorage.setItem("highscoretwelve", "1000")
}else if (localStorage.getItem("highscoreten") === null){
    localStorage.setItem("highscoreten", "1000")
}else if (localStorage.getItem("highscoreeight") === null){
    localStorage.setItem("highscoreeight", "1000")
}else if (localStorage.getItem("highscoresix") === null){
    localStorage.setItem("highscoresix", "1000")
}else if (localStorage.getItem("highscorefour") === null){
    localStorage.setItem("highscorefour", "1000")
}

whichHighScore = (numberOfCards, score) => {
    if (numberOfCards === 12){
        if (score < parseInt(localStorage.getItem("highscoretwelve"))){
            localStorage.setItem("highscoretwelve", score);
            $('#highScore').val(localStorage.highscoretwelve);
        }
    }else if (numberOfCards === 10){
        if (score < parseInt(localStorage.getItem("highscoreten"))){
            localStorage.setItem("highscoreten", score);
            $('#highScore').val(localStorage.highscoreten);
        }
    }else if (numberOfCards === 8){
        if (score < parseInt(localStorage.getItem("highscoreeight"))){
            localStorage.setItem("highscoreeight", score);
            $('#highScore').val(localStorage.highscoreeight);
        }
    }else if (numberOfCards === 6){
        if (score < parseInt(localStorage.getItem("highscoresix"))){
            localStorage.setItem("highscoresix", score);
            $('#highScore').val(localStorage.highscoresix);
        }
    }else if (numberOfCards === 4){
        if (score < parseInt(localStorage.getItem("highscorefour"))){
            localStorage.setItem("highscorefour", score);
            $('#highScore').val(localStorage.highscorefour);
        }
    }
};

checkIfMatch = (background) => {
    if($(".clickedOne").css(background) === $(".clickedTwo").css(background)){
        $(".clickedOne").addClass("correct");
        $(".clickedTwo").addClass("correct");
    }else {
        $(".clickedOne").addClass("hide-background-img").removeClass("disabled");
        $(".clickedTwo").addClass("hide-background-img").removeClass("disabled");
    }
    $("section").each(function () {
        $(this).removeClass("clickedOne").removeClass("clickedTwo");
    });
    clickCounter = 0;
    roundCounter++;
    $('#round-counter').val(roundCounter);
    numberCorrect = $('#container .correct').length;
    let amountOfCards = parseInt($("#amountOfCards").val());
    if (numberCorrect === amountOfCards){
      whichHighScore(amountOfCards, roundCounter);
    }
};

$('#round-counter').val(roundCounter);


let resetGame = (numberOfCards) => {
    $('section').removeClass("img-one img-two img-three img-four" +
        " img-five img-six correct clickedOne clickedTwo disabled")
        .addClass("hide-background-img click-event");
    addPicture(numberOfCards);
    clickCounter = 0;
    roundCounter = 0;
    $('#round-counter').val(roundCounter);
    amountOfCards = parseInt($("#amountOfCards").val());
};

$("#resetGame").click(function (e) {
    e.preventDefault();
    resetGame(amountOfCards);
});

$("#resetHighScore").click(function (e) {
    e.preventDefault();
    localStorage.highscore = 1000;
    localStorage.highscoretwelve = 1000;
    $('#highScore').val(0);
    amountOfCards = parseInt($("#amountOfCards").val());
});


$(".click-event").click(function () {
    if($(this).hasClass('disabled')){
        return;
    }
    clickCounter++;
    if (clickCounter === 1){
        $(this).removeClass("hide-background-img click-event").addClass("clickedOne disabled");
    }else if (clickCounter === 2){
        $(this).removeClass("hide-background-img click-event").addClass("clickedTwo disabled");
        setTimeout(function () {
            checkIfMatch("background");
        }, 500)
    }
});

$("#enterMovie").click(function () {
   $(".addMovie").removeClass("hide");
});

$("#addMovie").click(function () {
    $(".addMovie").addClass("hide");
});

$("#resetCards").click(function (e) {
    e.preventDefault();
    let theAmountOfCards = $("#amountOfCards").val();
    if (theAmountOfCards === "12"){
        $("#card-twelve").show();
        $("#card-eleven").show();
        $("#card-ten").show();
        $("#card-nine").show();
        $("#card-eight").show();
        $("#card-seven").show();
        $("#card-six").show();
        $("#card-five").show();
        if (localStorage.highscoretwelve === "1000"){
            $('#highScore').val(0);
        }else {
            $('#highScore').val(localStorage.highscoretwelve);
        }
    }else if(theAmountOfCards === "10"){
        $("#card-twelve").hide();
        $("#card-eleven").hide();
        $("#card-ten").show();
        $("#card-nine").show();
        $("#card-eight").show();
        $("#card-seven").show();
        $("#card-six").show();
        $("#card-five").show();
        if (localStorage.highscoreten === "1000"){
            $('#highScore').val(0);
        }else {
            $('#highScore').val(localStorage.highscoreten);
        }
    }else if(theAmountOfCards === "8"){
        $("#card-twelve").hide();
        $("#card-eleven").hide();
        $("#card-ten").hide();
        $("#card-nine").hide();
        $("#card-eight").show();
        $("#card-seven").show();
        $("#card-six").show();
        $("#card-five").show();
        if (localStorage.highscoreeight === "1000"){
            $('#highScore').val(0);
        }else {
            $('#highScore').val(localStorage.highscoreeight);
        }
    }else if(theAmountOfCards === "6"){
        $("#card-twelve").hide();
        $("#card-eleven").hide();
        $("#card-ten").hide();
        $("#card-nine").hide();
        $("#card-eight").hide();
        $("#card-seven").hide();
        $("#card-six").show();
        $("#card-five").show();
        if (localStorage.highscoresix === "1000"){
            $('#highScore').val(0);
        }else {
            $('#highScore').val(localStorage.highscoresix);
        }
    }else if(theAmountOfCards === "4"){
        $("#card-twelve").hide();
        $("#card-eleven").hide();
        $("#card-ten").hide();
        $("#card-nine").hide();
        $("#card-eight").hide();
        $("#card-seven").hide();
        $("#card-six").hide();
        $("#card-five").hide();
        if (localStorage.highscorefour === "1000"){
            $('#highScore').val(0);
        }else {
            $('#highScore').val(localStorage.highscorefour);
        }
    }
    resetGame(parseInt(theAmountOfCards));
});

