function computerTurn() {
    const randomNumber = Math.floor((Math.random() * 3))
    switch (randomNumber) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function playerTurn() {
    const playerSign = prompt("Type your sign: ")
    return playerSign.toLowerCase().trim()
}

function playRound(playerSign, computerSign) {
    switch (playerSign) {
        case "rock":
            switch (computerSign) {
                case "paper":
                    console.log(`%c Your answer is ${playerSign} but computer's is ${computerSign} - YOU LOSE`, `color: red`)
                    break
                case "rock":
                    console.log(`%c Your answer is ${playerSign}, computer's is also ${computerSign} - DRAFT`, `color: gray`)
                    break
                case "scissors":
                    console.log(`%c Your answer is ${playerSign} and computer's is ${computerSign} - YOU WIN`, `color: green`)
                    break
            }
            break
        case "paper":
            switch (computerSign) {
                case "scissors":
                    console.log(`%c Your answer is ${playerSign} but computer's is ${computerSign} - YOU LOSE`, `color: red`)
                    break
                case "paper":
                    console.log(`%c Your answer is ${playerSign}, computer's is also ${computerSign} - DRAFT`, `color: gray`)
                    break
                case "rock":
                    console.log(`%c Your answer is ${playerSign} and computer's is ${computerSign} - YOU WIN`, `color: green`)
                    break
            }
            break
        case "scissors":
            switch (computerSign) {
                case "rock":
                    console.log(`%c Your answer is ${playerSign} but computer's is ${computerSign} - YOU LOSE`, `color: red`)
                    break
                case "scissors":
                    console.log(`%c Your answer is ${playerSign}, computer's is also ${computerSign} - DRAFT`, `color: gray`)
                    break
                case "paper":
                    console.log(`%c Your answer is ${playerSign} and computer's is ${computerSign} - YOU WIN`, `color: green`)
                    break
            }
            break
        default:
            console.log("Sorry, your sign is not valid.")
            break
    }
}

playRound(playerTurn(), computerTurn())