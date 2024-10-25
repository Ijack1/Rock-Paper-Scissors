function playerInput(input) {
    
    if (input == "") {
        console.log("Error! Refresh Game!");
        return;
    }

    return input.at(0).toUpperCase() + input.substring(1).toLowerCase();
};

function aiTurn() {

    let randomNumber = Math.random() * 3;
    randomNumber = Math.floor(randomNumber);

    switch(randomNumber) {
        case 0:

            return "Rock";
        break;
        case 1:

            return "Paper";
        break;
        case 2:

            return "Scissors";
        break;
    } 
}

let round = 0;
let playerScore = 0;
let aiScore = 0

while(round != 5) {

    let input = prompt("Please select one of the following: Rock - Paper - Scissors.");

    const aiChoice = aiTurn();
    const playerChoice = playerInput(input)

    console.log(`The Ai choose ${aiChoice}`)
    console.log(`You choose ${playerChoice}`)

    if (playerChoice === "Rock" && aiChoice === "Rock") {

        round ++;
        console.log(`Tie! Your Score:${playerScore} - Ai Score:${aiScore} and you are on rond: ${round}`);

    } else if (playerChoice === "Rock" && aiChoice === "Paper") {

        aiScore ++;
        round ++;
        console.log(`Loser! Your Score:${playerScore} - Ai Score:${aiScore} and you are on rond: ${round}`);

    } else if (playerChoice === "Rock" && aiChoice === "Scissors") {

        playerScore ++;
        round ++;
        console.log(`Winner! Your Score:${playerScore} - Ai Score:${aiScore} and you are on rond: ${round}`);

    } else if (playerChoice === "Paper" && aiChoice === "Rock") {

        playerScore ++;
        round ++;
        console.log(`Winner! Your Score:${playerScore} - Ai Score:${aiScore} and you are on rond: ${round}`);

    } else if (playerChoice === "Paper" && aiChoice === "Paper") {

        round ++;
        console.log(`Tie! Your Score:${playerScore} - Ai Score:${aiScore} and you are on rond: ${round}`);

    } else if (playerChoice === "Paper" && aiChoice === "Scissors") {

        aiScore ++;
        round ++;
        console.log(`Loser! Your Score:${playerScore} - Ai Score:${aiScore} and you are on rond: ${round}`);

    } else if (playerChoice === "Scissors" && aiChoice === "Rock") {

        aiScore ++;
        round ++;
        console.log(`Loser! Your Score:${playerScore} - Ai Score:${aiScore} and you are on rond: ${round}`);

    } else if (playerChoice === "Scissors" && aiChoice === "Paper") {

        playerScore ++;
        round ++;
        console.log(`Winner! Your Score:${playerScore} - Ai Score:${aiScore} and you are on rond: ${round}`);

    } else if (playerChoice === "Scissors" && aiChoice === "Scissors") {

        round ++;
        console.log(`Tie! Your Score:${playerScore} - Ai Score:${aiScore} and you are on rond: ${round}`);

    } 
};

if (playerScore > aiScore) {

    console.log("Congratulations You Win!!");
} else if (playerScore < aiScore) {

    console.log("Hahha You Stink!!");
} else {

    console.log("Tie");
}
