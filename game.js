function computerPlay(){

        let choices = ["rock", "paper", "scissors"];

        let randomChoice = choices[Math.floor(Math.random() * choices.length)];

        console.log(randomChoice);

        return randomChoice;
        
        }

let options = document.getElementById("optns");
        
const pickRock = document.getElementById("rockHands");
const pickPaper = document.getElementById("paperHands");
const pickScissors = document.getElementById("scissorHands");

function whoWins(playerSelection, computerSelection){

        let tableScore = document.getElementById("player-score");

        computerSelection = computerPlay();

        if(playerSelection === computerSelection){
            console.log("Tie!");
        }
        else if(playerSelection === pickRock && computerSelection === "scissors"){
            console.log("You win! Rock beats Scissors!");
        }
        else if(playerSelection === pickScissors && computerSelection === "paper"){
            console.log("You win! Scissor beats Paper");
        }
        else if(playerSelection === pickPaper && computerSelection === "rock"){
            console.log("You win! Paper beats Rock");
        }
        else{
            console.log("You lose!");
    
        }
    }

if(options){
    options.addEventListener("click", whoWins);
}
