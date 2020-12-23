 function computerPlay(){

        let choices = ["rock", "paper", "scissors"];

        let randomChoice = choices[Math.floor(Math.random() * choices.length)];

        console.log(randomChoice);

        return randomChoice;
        
        }
    
let pickRock = document.getElementById("rockHands");
if(pickRock){
    pickRock.addEventListener("click", rockChosen);
}

function rockChosen(){
    return pickRock;
}

let pickPaper = document.getElementById("paperHands");
if(pickPaper){
    pickPaper.addEventListener("click", paperChosen);
}

function paperChosen(){
    return pickPaper;
}

let pickScissors = document.getElementById("scissorHands");
if(pickScissors){
    pickScissors.addEventListener("click", scissorChosen);
}

function scissorChosen(){
    return pickScissors;
}

function whoWins(playerSelection, computerSelection){

        let threwRock = rockChosen();
        let threwPaper = paperChosen();
        let threwScis = scissorChosen();

        playerSelection = [threwRock, threwPaper, threwScis];

        let tableScore = document.getElementById("player-score");

        computerSelection = computerPlay();

        if(playerSelection === computerSelection){
            console.log("Tie!");
        }
        else if(playerSelection === threwRock && computerSelection === "scissors"){
            console.log("You win! Rock beats Scissors!");
        }
        else if(playerSelection === threwScis && computerSelection === "paper"){
            console.log("You win! Scissor beats Paper");
        }
        else if(playerSelection === threwPaper && computerSelection === "rock"){
            console.log("You win! Paper beats Rock");
        }
        else{
            console.log("You lose!");
    
        }
    }

function runFor() {
    for(let  i=1; i <= 5; i++) {
        whoWins();    
        }
    }
    
    runFor();
