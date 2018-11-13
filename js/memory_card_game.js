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
    $('.card-body').each(
        function() {
            var classes = this.classList;
            for (let i=0,len=classes.length; i<len; i++){
                if ($('body').hasClass(classes[i])){
                    $(this).removeClass('"hide-background-img"');
                    matches = true;
                }
            }
        })
};

let clickCounter = 0;


$("#1").click(() => {
    clickCounter++;
    if (clickCounter === 0){
        $("#1").removeClass("hide-background-img");
    } else if (clickCounter === 1){
        $("#1").removeClass("hide-background-img");
    }else if (clickCounter >= 3){
        checkIfMatch();
        if (matches === false){
            setTimeout(function(){
                $("#1").addClass("hide-background-img")
            }, 1000);
        }
        matches = false;
        clickCounter = 0;
}});

$("#2").click(() => {
    clickCounter++;
    if (clickCounter === 0){
        $("#2").removeClass("hide-background-img");
    } else if (clickCounter === 1){
        $("#2").removeClass("hide-background-img");
    }else if (clickCounter >= 3){
        checkIfMatch();
        if (matches === false){
            setTimeout(function(){
                $("#2").addClass("hide-background-img")
            }, 1000);
        }
        matches = false;
        clickCounter = 0;
    }});
