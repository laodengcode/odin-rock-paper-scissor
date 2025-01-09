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

function getHumanChoice() {
    let response = prompt("Your choice:");
    if (response === null || response === undefined) {
        alert('Please input your choice');
        return;
    }

    response = response.toLowerCase();
    if (response !== "rock" && response !== 'paper' && response !== 'scissors') {
        alert('You must input rock, paper or scissors');
        return;
    }
    return response;

}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        switch (humanChoice) {
            case "rock":
                if (computerChoice !== 'rock') {
                    if (computerChoice === 'paper') {
                        computerScore++;
                        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                    } else {
                        humanScore++;
                        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                    }
                }
                break;
            case 'paper':
                if (computerChoice !== 'paper') {
                    if (computerChoice === 'scissors') {
                        computerScore++;
                        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                    } else {
                        humanScore++;
                        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                    }
                }
                break;
            case 'scissors':
                if (computerChoice !== 'scissors') {
                    if (computerChoice === 'rock') {
                        computerScore++;
                        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                    } else {
                        humanScore++;
                        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                    }
                }
                break;

            default:
                computerScore++;
                console.log(`You lose! Your input is invalid!`);
                break;
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log(`You win! result: ${humanScore}:${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose! result: ${humanScore}:${computerScore}`);
    } else {
        console.log(`Even. result: ${humanScore}:${computerScore}`);
    }
}

playGame();


