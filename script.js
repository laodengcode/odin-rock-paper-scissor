function getComputerChoice() {
    let choice = Math.round(Math.random() * 10) % 3;

    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let result = document.querySelector('#results');
    if (result === null) {
        console.log('no result container');
        return;
    }
    let text = document.createTextNode('Even!');
    switch (humanChoice) {
        case "rock":
            if (computerChoice !== 'rock') {
                if (computerChoice === 'paper') {
                    computerScore++;
                    text = document.createTextNode(`You lose! ${computerChoice} beats ${humanChoice}`);
                } else {
                    humanScore++;
                    text = document.createTextNode(`You win! ${humanChoice} beats ${computerChoice}`);
                }
            }
            break;
        case 'paper':
            if (computerChoice !== 'paper') {
                if (computerChoice === 'scissors') {
                    computerScore++;
                    text = document.createTextNode(`You lose! ${computerChoice} beats ${humanChoice}`);
                } else {
                    humanScore++;
                    text = document.createTextNode(`You win! ${humanChoice} beats ${computerChoice}`);
                }
            }
            break;
        case 'scissors':
            if (computerChoice !== 'scissors') {
                if (computerChoice === 'rock') {
                    computerScore++;
                    text = document.createTextNode(`You lose! ${computerChoice} beats ${humanChoice}`);
                } else {
                    humanScore++;
                    text = document.createTextNode(`You win! ${humanChoice} beats ${computerChoice}`);
                }
            }
            break;

        default:
            computerScore++;
            text = document.createTextNode(`You lose! Your input is invalid!`);
            break;
    }

    result.appendChild(text);
    result.appendChild(document.createElement('br'));
}


let root = document.querySelector('body');

root.addEventListener('click', (e) => {
    if (e.target.id !== 'rock' && e.target.id !== 'paper' && e.target.id !== 'scissors') {
        console.log(e.target.id);
        return;
    }

    playRound(e.target.id, getComputerChoice());
    let result = document.querySelector('#results');
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            result.textContent = `You win! result: ${humanScore}:${computerScore}`;
        } else if (humanScore < computerScore) {
            result.textContent = `You lose! result: ${humanScore}:${computerScore}`;
        } else {
            result.textContent = `Even. result: ${humanScore}:${computerScore}`;
        }

        humanScore = 0;
        computerScore = 0;
    }
    result.appendChild(document.createElement('br'));
})

