console.log("Hello World!")



let playerChoice = confirm('Do you wanna play Rock, Paper, Scissors?')

if (playerChoice) { for (i = 0; i < 5 ; i++) {
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
        } 
            
        }  
        
        else {alert("You didn't enter rock paper or scissors.")}}
        
        
        let playAgain = confirm("Do you wanna play again?")
            if (playAgain) {
              location.reload()  
            }
            else {"Okay then at least we had some fun :)"}
        
}

else {alert('Okay, maybe later.')
}