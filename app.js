const score = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");
const mole = document.querySelector(".mole");
const squares = document.querySelectorAll(".square");

let hitPosition;
let result=0;
let curentTime = 60;

function randomSquare(){


   squares.forEach(square => {
      square.classList.remove('mole');
   });

   
   
   let randomSquare = squares[Math.floor(Math.random()*9)];

   randomSquare.classList.add('mole');
   hitPosition = randomSquare.id

}

function moveMole() {
    timdId = setInterval(randomSquare,900);
}

moveMole();

squares.forEach(square => {
    square.addEventListener("mousedown", ()=>{
        if(square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition=null;
        }
    } );
});

function countDown() {
    currentTime--;
    timeLeft.textContent + currentTime;

    if(curentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timdId);
        alart("Game over! your final score id " + result);
    }
}


let countDownTimerId = setInterval(countDown,1000);