const score = { player: 0, computer: 0, round: 1 }
const roundResultDiv = document.querySelector(".round-result")
const roundNumberDiv = document.querySelector(".round")
const figureButtons = document.querySelectorAll(".figure-button")
const resetButton = document.querySelector(".reset-button")

figureButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        game(e.target.innerText.toLowerCase())
    })
})

resetButton.addEventListener('click', () => {
    score.player = 0
    score.computer = 0
    score.round = 1
    roundNumberDiv.textContent = "Choose your weapon"
    roundResultDiv.textContent = "to start new game"
    resetButton.classList.add('hidden')
})

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

function game(playerSign) {
    roundNumberDiv.innerText = `ROUND ${score.round}`

    if (score.player !== 5 && score.computer !== 5) {

        const result = playRound(playerSign, computerTurn())

        switch (result.winner) {
            case "player":
                roundResultDiv.innerText = `You get a point! Your sign: ${playerSign.toLowerCase()}, computer's sign: ${result.computerSign}`
                score.player = score.player + 1;
                break
            case "computer":
                roundResultDiv.innerText = `Computer gets a point! Your sign: ${playerSign.toLowerCase()}, computer's sign: ${result.computerSign}`
                score.computer = score.computer + 1;
                break
            default:
                roundResultDiv.innerText = `Draft - both of you chose: ${playerSign}`
                break
        }

        score.round++
    } else {
        resetButton.classList.remove("hidden")
        if (score.player > score.computer)
            roundResultDiv.innerText = `You won with the score of ${score.player} to ${score.computer}`
        else
            roundResultDiv.innerText = `Computer won with the score of ${score.computer} to ${score.player}`

    }
}