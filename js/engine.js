let score = 20;
let highScore = 0;
const lowText = 'Too Low!';
const highText = 'Too high!';
let gameIsEnd = false;

const correctNumber = document.getElementById("correctNumber");
const check = document.getElementById("check");
const hint = document.getElementById("hint");
const scoreTag = document.getElementById("score");
const highScoreTag = document.getElementById("highScore");
const inputValue = document.getElementById("value");
const playAgainBtn = document.getElementById("playAgain");
const congratulation = document.getElementById("congratulation");

const private = {
    number: Math.floor(Math.random() * 19) + 1,

};

console.log(private.number + "     this is my private number");

check.addEventListener("click", () => {
    if(!gameIsEnd){
        let value = inputValue.value;
        if(value == private.number){
            winMessage();
        }else{
            loseScore(value);
        }
    }
});

let loseScore = (value) => {
    if(value > private.number){
        hint.innerHTML = highText;
    }else{
        hint.innerHTML = lowText;
    }

    if(score > 1){
        score--;
        scoreTag.innerHTML = score;
    }else{
        loseMessage();

    }
}

let winMessage = () => {
    correctNumber.innerHTML = private.number;
    document.getElementById("body").style.background = "#2fc842";
    if(score > highScore){
        highScore = score;
        highScoreTag.innerHTML = highScore;
        hint.innerHTML = "Correct Number!";
        congratulation.style.display = "block";
    }

    gameIsEnd = true;
}

playAgainBtn.addEventListener("click", () => {
   
        playAgain();
    
});

let playAgain = () => {
    document.getElementById("body").style.background = "#202124";
    correctNumber.innerHTML = "?";
    hint.innerHTML = "Start guessing...";
    congratulation.style.display = "none";
    value.value = '';
    score = 20;
    scoreTag.innerHTML = 20;
    private.number = Math.floor(Math.random() * 19) + 1;
    if(gameIsEnd){
        gameIsEnd = !gameIsEnd;
    }
}


let loseMessage = () => {
    gameIsEnd = true;
    document.getElementById("body").style.background = "rgb(214 31 31)";
    hint.innerHTML = "YOU LOSE !";
    scoreTag.innerHTML = "0";

}

value.addEventListener("keyup", (event) => {
    if(event.keyCode === 13){
        check.click();
    }
})