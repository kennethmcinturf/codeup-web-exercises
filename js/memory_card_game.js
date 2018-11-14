generateRandoms = () => {
    randomArray = [];
    do {
        for (let i = 0; i < 13; i++){
            number = Math.floor((Math.random() * 12) + 1);
            if (randomArray.indexOf(number) === -1){
                randomArray.push(number);
            }
        }
    }while (randomArray.length < 12);
    return randomArray;
};



addPicture = () => {
    generateRandoms();
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

addPicture();

let matches = false;

checkIfMatch = () => {
    if($(".clickedOne").css("background-image") === $(".clickedTwo").css("background-image")){
        $(".clickedOne").addClass("correct");
        $(".clickedTwo").addClass("correct");
        $("section").each(function () {
            $(this).removeClass("clickedOne").removeClass("clickedTwo");
        })
    }else {
        $(".clickedOne").addClass("hide-background-img");
        $(".clickedTwo").addClass("hide-background-img");
        $("section").each(function () {
            $(this).removeClass("clickedOne").removeClass("clickedTwo");
        })
    }
    clickCounter = 0;
};

let clickCounter = 0;

$("#1").click(function () {
    clickCounter++;
    if (clickCounter === 1){
        $("#1").removeClass("hide-background-img").addClass("clickedOne");
    }else if (clickCounter === 2){
        $("#1").removeClass("hide-background-img").addClass("clickedTwo");
        setTimeout(function () {
            checkIfMatch();
        }, 1000)
    }
});

$("#0").click(function () {
    clickCounter++;
    if (clickCounter === 1){
        $("#0").removeClass("hide-background-img").addClass("clickedOne");
    }else if (clickCounter === 2){
        $("#0").removeClass("hide-background-img").addClass("clickedTwo");
        setTimeout(function () {
            checkIfMatch();
        }, 1000)
    }
});

$("#2").click(function () {
    clickCounter++;
    if (clickCounter === 1){
        $("#2").removeClass("hide-background-img").addClass("clickedOne");
    }else if (clickCounter === 2){
        $("#2").removeClass("hide-background-img").addClass("clickedTwo");
        setTimeout(function () {
            checkIfMatch();
        }, 1000)
    }
});

$("#3").click(function () {
    clickCounter++;
    if (clickCounter === 1){
        $("#3").removeClass("hide-background-img").addClass("clickedOne");
    }else if (clickCounter === 2){
        $("#3").removeClass("hide-background-img").addClass("clickedTwo");
        setTimeout(function () {
            checkIfMatch();
        }, 1000)
    }
});

$("#4").click(function () {
    clickCounter++;
    if (clickCounter === 1){
        $("#4").removeClass("hide-background-img").addClass("clickedOne");
    }else if (clickCounter === 2){
        $("#4").removeClass("hide-background-img").addClass("clickedTwo");
        setTimeout(function () {
            checkIfMatch();
        }, 1000)
    }
});

$("#5").click(function () {
    clickCounter++;
    if (clickCounter === 1){
        $("#5").removeClass("hide-background-img").addClass("clickedOne");
    }else if (clickCounter === 2){
        $("#5").removeClass("hide-background-img").addClass("clickedTwo");
        setTimeout(function () {
            checkIfMatch();
        }, 1000)
    }
});

$("#6").click(function () {
    clickCounter++;
    if (clickCounter === 1){
        $("#6").removeClass("hide-background-img").addClass("clickedOne");
    }else if (clickCounter === 2){
        $("#6").removeClass("hide-background-img").addClass("clickedTwo");
        setTimeout(function () {
            checkIfMatch();
        }, 1000)
    }
});

$("#7").click(function () {
    clickCounter++;
    if (clickCounter === 1){
        $("#7").removeClass("hide-background-img").addClass("clickedOne");
    }else if (clickCounter === 2){
        $("#7").removeClass("hide-background-img").addClass("clickedTwo");
        setTimeout(function () {
            checkIfMatch();
        }, 1000)
    }
});

$("#8").click(function () {
    clickCounter++;
    if (clickCounter === 1){
        $("#8").removeClass("hide-background-img").addClass("clickedOne");
    }else if (clickCounter === 2){
        $("#8").removeClass("hide-background-img").addClass("clickedTwo");
        setTimeout(function () {
            checkIfMatch();
        }, 1000)
    }
});

$("#9").click(function () {
    clickCounter++;
    if (clickCounter === 1){
        $("#9").removeClass("hide-background-img").addClass("clickedOne");
    }else if (clickCounter === 2){
        $("#9").removeClass("hide-background-img").addClass("clickedTwo");
        setTimeout(function () {
            checkIfMatch();
        }, 1000)
    }
});

$("#10").click(function () {
    clickCounter++;
    if (clickCounter === 1){
        $("#10").removeClass("hide-background-img").addClass("clickedOne");
    }else if (clickCounter === 2){
        $("#10").removeClass("hide-background-img").addClass("clickedTwo");
        setTimeout(function () {
            checkIfMatch();
        }, 1000)
    }
});

$("#11").click(function () {
    clickCounter++;
    if (clickCounter === 1){
        $("#11").removeClass("hide-background-img").addClass("clickedOne");
    }else if (clickCounter === 2){
        $("#11").removeClass("hide-background-img").addClass("clickedTwo");
        setTimeout(function () {
            checkIfMatch();
        }, 1000)
    }
});
