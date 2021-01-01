function computerPlay(){

        let choices = ["rock", "paper", "scissors"];
        let randomChoice = choices[Math.floor(Math.random() * choices.length)];

        console.log(randomChoice);

        return randomChoice;        
        }
        
let playerScore = 0;
let compScore = 0;

function playerWin(){
    playerScore++;
    let tablePointPlayer =  document.getElementById("player-score").innerHTML = playerScore;
}

function playerLose(){
    compScore++;
    let tablePointComp = document.getElementById("comp-score").innerHTML = compScore;
}
        
function game(playerSelection){
            
    let computerSelection = computerPlay();
    
    if(playerSelection == computerSelection){
        console.log("Tie!");
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You win! Rock beats Scissors!");
        playerWin();
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You win! Scissor beats Paper");
        playerWin();
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You win! Paper beats Rock");
        playerWin();
    }
    else{
        console.log("You lose!");
        playerLose();
    }
}
