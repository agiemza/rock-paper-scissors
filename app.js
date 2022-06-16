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
    if (!playerSign) {
        if (playerSign === null)
            return null
        else
            return false
    }
    else {
        return playerSign.toLowerCase().trim()
    }
}

function playRound(playerSign, computerSign) {
    switch (playerSign) {
        case "rock":
            switch (computerSign) {
                case "paper":
                    console.log(`%c Your answer is ${playerSign} but computer's is ${computerSign} - YOU LOSE`, `color: red`)
                    return "computer"
                case "rock":
                    console.log(`%c Your answer is ${playerSign}, computer's is also ${computerSign} - DRAFT`, `color: gray`)
                    return "draft"
                case "scissors":
                    console.log(`%c Your answer is ${playerSign} and computer's is ${computerSign} - YOU WIN`, `color: green`)
                    return "player"
            }
            break
        case "paper":
            switch (computerSign) {
                case "scissors":
                    console.log(`%c Your answer is ${playerSign} but computer's is ${computerSign} - YOU LOSE`, `color: red`)
                    return "computer"
                case "paper":
                    console.log(`%c Your answer is ${playerSign}, computer's is also ${computerSign} - DRAFT`, `color: gray`)
                    return "draft"
                case "rock":
                    console.log(`%c Your answer is ${playerSign} and computer's is ${computerSign} - YOU WIN`, `color: green`)
                    return "player"
            }
            break
        case "scissors":
            switch (computerSign) {
                case "rock":
                    console.log(`%c Your answer is ${playerSign} but computer's is ${computerSign} - YOU LOSE`, `color: red`)
                    return "computer"
                case "scissors":
                    console.log(`%c Your answer is ${playerSign}, computer's is also ${computerSign} - DRAFT`, `color: gray`)
                    return "draft"
                case "paper":
                    console.log(`%c Your answer is ${playerSign} and computer's is ${computerSign} - YOU WIN`, `color: green`)
                    return "player"
            }
            break
        case null:
            return null
        default:
            console.log(`Sorry, your sign is not valid. Round is off.`)
            break
    }
}

function game() {
    const score = { player: 0, computer: 0 }
    for (let i = 0; i < 5; i++) {

        console.log(`ROUND ${i + 1}`)

        const roundWinner = playRound(playerTurn(), computerTurn())
        if (roundWinner === null) {
            break
        }

        switch (roundWinner) {
            case "player":
                score.player = score.player + 1;
                break
            case "computer":
                score.computer = score.computer + 1;
                break
            default:
                break
        }

    }
    console.log(`Total score:\nComputer ${score.computer}\nYou ${score.player}`)
}

game()
