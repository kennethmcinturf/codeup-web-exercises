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

let clickCounter = 0;
let roundCounter = 0;
let amountOfCards = parseInt($("#amountOfCards").val());
let score = $('#round-counter').val();
let numberCorrect = $('#container .correct').length;

if (localStorage.highscoretwelve === undefined){
    localStorage.setItem("highscoretwelve", "1000")
}else if (localStorage.highscoreten === undefined){
    localStorage.setItem("highscoreten", "1000")
}else if (localStorage.highscoreeight === undefined){
    localStorage.setItem("highscoreeight", "1000")
}else if (localStorage.highscoresix === undefined){
    localStorage.setItem("highscoresix", "1000")
}else if (localStorage.highscorefour === undefined){
    localStorage.setItem("highscorefour", "1000")
}

if (localStorage.highscore === "1000"){
    $('#highScore').val(0);
}else {
    $('#highScore').val(localStorage.highscore);
}

checkIfMatch = () => {
    if($(".clickedOne").css("background-image") === $(".clickedTwo").css("background-image")){
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
    if (numberCorrect === amountOfCards){
        score = $('#round-counter').val();
        let storageHighScore;
        if (numberCorrect === 12){
            storageHighScore = localStorage.highscoretwelve
        }else if(numberCorrect === 10){
            storageHighScore = localStorage.highscoreten;
        }else if(numberCorrect === 8){
            storageHighScore = localStorage.highscoreeight;
        }else if(numberCorrect === 6){
            storageHighScore = localStorage.highscoresix;
        }else if(numberCorrect === 4){
            storageHighScore = localStorage.highscorefour;
        }
        if (score < parseInt(storageHighScore)) {
            localStorage.setItem("highscore", score);
            $('#highScore').val(localStorage.highscore);
        }
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
            checkIfMatch();
        }, 500)
    }
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
    }else if(theAmountOfCards === "10"){
        $("#card-twelve").hide();
        $("#card-eleven").hide();
        $("#card-ten").show();
        $("#card-nine").show();
        $("#card-eight").show();
        $("#card-seven").show();
        $("#card-six").show();
        $("#card-five").show();
    }else if(theAmountOfCards === "8"){
        $("#card-twelve").hide();
        $("#card-eleven").hide();
        $("#card-ten").hide();
        $("#card-nine").hide();
        $("#card-eight").show();
        $("#card-seven").show();
        $("#card-six").show();
        $("#card-five").show();
    }else if(theAmountOfCards === "6"){
        $("#card-twelve").hide();
        $("#card-eleven").hide();
        $("#card-ten").hide();
        $("#card-nine").hide();
        $("#card-eight").hide();
        $("#card-seven").hide();
        $("#card-six").show();
        $("#card-five").show();
    }else if(theAmountOfCards === "4"){
        $("#card-twelve").hide();
        $("#card-eleven").hide();
        $("#card-ten").hide();
        $("#card-nine").hide();
        $("#card-eight").hide();
        $("#card-seven").hide();
        $("#card-six").hide();
        $("#card-five").hide();
    }
    resetGame(parseInt(theAmountOfCards));
})

