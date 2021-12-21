console.log("Hello World!")

function mathRandom(numb) { return Math.floor(Math.random() * numb) }

    function computerPlay() {
    let mathRand = mathRandom(3)
    function mathRando() {return mathRand}
    console.log(mathRand)
    if (mathRand == "0") {return "Rock"}
    else if (mathRand == "1") {return "Paper"}
    else if (mathRand == "2") {return "Scissors"}
}

const win = "You Win!"
const lose = "You Lose :("
const draw = "Draw."
computerSelection = computerPlay()
function playRound(playerSelection, computerSelection)
{ 
    //ROCK
if (playerSelection == "rock") { 
    if (computerSelection === "Rock") {return draw}
else if (computerSelection === "Paper") {return lose}
else if (computerSelection === "Scissors") {return win} 
}

//PAPER
else if (playerSelection == "paper") {
    if (computerSelection === "Rock") {return win}
else if (computerSelection === "Paper") {return draw}
else if (computerSelection === "Scissors") {return lose}
} 

//SCISSORS
else if (playerSelection == "scissors") { 
if (computerSelection === "Rock") {return lose}
else if (computerSelection === "Paper") {return win}
else if (computerSelection === "Scissors") {return draw}
}

}


// let computerSelection = computerPlay()
console.log(playRound("scissors", computerSelection))
/* create a function (mathrandom()) 


/*function computerPlay() {
if ((Math.floor(Math.random() * 3)) === 0) {return "Rock"}
else if (mathRandom() === 1) {return "Paper"}
else if (mathRandom() === 2) {return "Scissors"}
}
console.log(computerPlay())*/

/*function singleRound(playerSelection, computerSelection)
{ if (computerPlay() === "rock") {return "Draw."}
else if (computerPlay() === "Paper") {return "You Lose! Paper beats Rock"}
else if (computerPlay() === "Scissors") {return "You Win!"}
}
const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(singleRound("rock", "Rock"))*/