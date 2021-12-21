console.log("Hello World!")

/* function mathRandom(numb) { return Math.floor(Math.random() * numb) }

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
playerSelection = prompt('GO!', "Rock, Paper or Scissors")
function alerting(something) {alert(something)}


function playRound(playerSelection, computerSelection)
{ 
    
    //ROCK
if (playerSelection.toLowerCase() == "rock") { 
    if (computerSelection === "Rock") {alert (draw)}
else if (computerSelection === "Paper") {alert (lose)}
else if (computerSelection === "Scissors") {alert (win)}
}

//PAPER
else if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection === "Rock") {alert (win)}
else if (computerSelection === "Paper") {alert (draw)}
else if (computerSelection === "Scissors") {alert (lose)}
} 

//SCISSORS
else if (playerSelection.toLowerCase() == "scissors") { 
if (computerSelection === "Rock") {alert (lose)}
else if (computerSelection === "Paper") {alert (win)}
else if (computerSelection === "Scissors") {alert (draw)}
}

}

function game() {playerSelection
playRound(playerSelection, computerSelection)}
for (i = 0; i < 5; i++) {
playerSelection}


/* function game() {
    let playerSelection = prompt('Round 1', 'Rock, Paper or Scissors')
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
}
game()
console.log(roundNumber(1)) */

let playerChoice = confirm('Do you wanna play Rock, Paper, Scissors?')
if (playerChoice) {
    let playerSelection = prompt('Choose one:', 'Rock, Paper or Scissors')
    
    if (playerSelection) {
        let selection = playerSelection.trim().toLocaleLowerCase()
        if (selection === 'rock' || selection === 'paper' || selection === 'scissors') {
            let computerSelection = Math.floor(Math.random() * 3 + 1) 
            let computer = computerSelection === 1 ? "rock"
            : computerSelection === 2 ? "paper"
            : "scissors";

            if (computer === "rock" && selection === "paper" ) {alert(`Your choice was ${selection}\n Computer's choice was ${computer}\n You Win! `)}
            else if (computer === "scissors" && selection === "rock") {alert(`Your choice was ${selection}\n Computer's choice was ${computer}\n You Win! `)}
            else if (computer === "paper" && selection === "scissors") {(alert(`Your choice was ${selection}\n Computer's choice was ${computer}\n You Win! `))} 
            else if (computer === selection) {alert(`Your choice was ${selection}\n Computer's choice was ${computer}\nIt's a draw.`)}
            else {alert(`Your choice was ${selection}\n Computer's choice was ${computer}\nComputer Wins!`)}
            
            let playAgain = confirm("Do you wanna play again?")
            if (playAgain) {
              location.reload()  
            }
            else ("Okay then at least we had some fun :)")
            
        }
        else {alert("You didn't enter rock paper or scissors.")}
        }

    else {
        'Too bad you changed your mind.'
    }
}


else {alert('Okay, maybe later.')}