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

function playRound(playerSign, computerSign) {
    switch (playerSign) {
        case "rock":
            switch (computerSign) {
                case "paper":
                    return { computerSign: "paper", winner: "computer" }
                case "rock":
                    return { computerSign: "rock", winner: false }
                case "scissors":
                    return { computerSign: "scissors", winner: "player" }
            }
            break
        case "paper":
            switch (computerSign) {
                case "scissors":
                    return { computerSign: "scissors", winner: "computer" }
                case "paper":
                    return { computerSign: "paper", winner: false }
                case "rock":
                    return { computerSign: "rock", winner: "player" }
            }
            break
        case "scissors":
            switch (computerSign) {
                case "rock":
                    return { computerSign: "rock", winner: "computer" }
                case "scissors":
                    return { computerSign: "scissors", winner: false }
                case "paper":
                    return { computerSign: "paper", winner: "player" }
            }
            break
    }
}

const score = { player: 0, computer: 0, round: 1 }

function game(playerSign) {
    const roundResultDiv = document.querySelector(".round-result")
    const roundNumberDiv = document.querySelector(".round")
    roundNumberDiv.innerText = `ROUND ${score.round}/5`

    if (score.player !== 5 && score.computer !== 5) {
        const result = playRound(playerSign, computerTurn())

        switch (result.winner) {
            case "player":
                roundResultDiv.innerText = `You get a point! Your sign: ${playerSign.toLowerCase()}, computer's sign: ${result.computerSign}`
                score.player = score.player + 1;
                break
            case "computer":
                roundResultDiv.innerText = `Computer gets a poin! Your sign: ${playerSign.toLowerCase()}, computer's sign: ${result.computerSign}`
                score.computer = score.computer + 1;
                break
            default:
                roundResultDiv.innerText = `Draft - You both choose ${playerSign}`
                break
        }

        score.round++
    } else {

        if (score.player > score.computer)
            roundResultDiv.innerText = `You won with score of ${score.player} points to ${score.computer}`
        else
            roundResultDiv.innerText = `Computer won  with score of ${score.computer} points to ${score.player}`

    }
}

const figureButtons = document.querySelectorAll(".figure-button")

figureButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        game(e.target.innerText.toLowerCase())
    })
})
