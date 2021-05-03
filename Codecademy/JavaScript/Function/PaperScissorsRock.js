const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log("Error?");
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock'
        case 2:
            return 'paper'
        case 3:
            return 'scissors'
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'its a tie~';
    }
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return 'loser';
        } else {
            return 'Winner winner chicken dinner'
        };
    }
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return 'loser';
        } else {
            return 'Winner winner chicken dinner';
        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return 'loser';
        } else {
            return 'Winner winner chicken dinner';
        }
    }
}

const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('your hands is in ' + userChoice + ' shape');
    console.log('computer is in ' + computerChoice + ' shape');
    console.log(determineWinner(userChoice, computerChoice));
};

playGame()