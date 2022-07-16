let options = ["rock", "paper", "scissors"];
function computerPlay () {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection,computerSelection) {
    let player = 0;
    let computer = 0;
    let input = prompt("Please enter rock, paper or scissors.");
    playerSelection = input.trim().toLowerCase();
    if (playerSelection === computerSelection) {
        return console.log(`IT'S A TIE, Computer chose ${computerSelection} and You chose ${playerSelection}`);
    }else if (playerSelection === "rock" && computerSelection === "paper")  {
        return console.log(`You Lose!! Computer chose ${computerSelection} and You chose ${playerSelection}`);
    }else if (playerSelection === "paper" && computerSelection === "scissors")  {
        return console.log(`You Lose!! Computer chose ${computerSelection} and You chose ${playerSelection}`);
    }else if (playerSelection === "scissors" && computerSelection === "rock") {
        return console.log(`You Lose!! Computer chose ${computerSelection} and You chose ${playerSelection}`);
    }else if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        return console.log("Please enter rock, paper or scissors only!!");
    }else {
        return console.log(`You Win!!! Computer chose ${computerSelection} and You chose ${playerSelection}`);
    }
}

const playerSelection = " ";
const computerSelection = computerPlay();
playRound(playerSelection,computerSelection);

function game () {
    for (let i=0; i < 4; i++) {
        playRound(playerSelection,computerSelection);
    }
}
game();
