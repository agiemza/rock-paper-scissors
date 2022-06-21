const score = { player: 5, computer: 5, round: 1 }
const roundResultDiv = document.querySelector(".round-result")
const roundNumberDiv = document.querySelector(".round")
const figureButtons = document.querySelectorAll(".figure-button")
const resetButton = document.querySelector(".reset-button")
const controls = document.querySelector(".controls")
const circle = document.querySelector(".circle")
const playerScoreContainer = document.querySelector(".player-score")
const computerScoreContainer = document.querySelector(".computer-score")
const playerSide = document.querySelector(".player-side")
const computerSide = document.querySelector(".computer-side")

figureButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        game(button.dataset.sign)
    })
})

resetButton.addEventListener("click", resetGame)

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

function resetGame() {
    score.player = 5
    score.computer = 5
    score.round = 1
    roundNumberDiv.textContent = ""
    roundResultDiv.textContent = "Choose your weapon to start!"
    playerSide.classList.remove("show-player-figure")
    computerSide.classList.remove("show-computer-figure")
    resetButton.classList.toggle("hidden")
    controls.classList.toggle("hidden")
    showScore()
}

function showScore() {
    playerScoreContainer.innerText = score.player
    computerScoreContainer.innerText = score.computer

    if (score.player === 0 || score.computer === 0) {
        resetButton.classList.toggle("hidden")
        controls.classList.toggle("hidden")
        if (score.player > score.computer)
            roundResultDiv.innerText = `You won with  ${score.player} ${score.player === 1 ? `life` : `lives`} left`
        else
            roundResultDiv.innerText = `Computer won with ${score.computer} ${score.computer === 1 ? `life` : `lives`} left`
    }
}

function handleBattleAnimation(playerSign, computerSign) {
    playerSide.querySelectorAll('img').forEach(img => img.classList.add('hidden'))
    computerSide.querySelectorAll('img').forEach(img => img.classList.add('hidden'))

    playerSide.classList.remove("show-player-figure")
    computerSide.classList.remove("show-computer-figure")

    void playerSide.offsetWidth
    void computerSide.offsetWidth

    playerSide.classList.add("show-player-figure")
    playerSide.querySelector(`.${playerSign}`).classList.remove('hidden')

    computerSide.classList.add("show-computer-figure")
    computerSide.querySelector(`.${computerSign}`).classList.remove('hidden')
}

function game(playerSign) {

    roundNumberDiv.innerText = `ROUND ${score.round}`
    circle.classList.remove("pulse-green", "pulse-red", "pulse-gray")
    const result = playRound(playerSign, computerTurn())

    handleBattleAnimation(playerSign, result.computerSign)

    switch (result.winner) {
        case "player":
            void circle.offsetWidth
            circle.classList.add("pulse-green")
            roundResultDiv.innerText = `You win!`
            score.computer--
            break
        case "computer":
            void circle.offsetWidth
            circle.classList.add("pulse-red")
            roundResultDiv.innerText = `Computer wins!`
            score.player--
            break
        default:
            void circle.offsetWidth
            circle.classList.add("pulse-gray")
            roundResultDiv.innerText = `Draft! ${playerSign}`
            break
    }

    showScore()
    score.round++
}

resetGame()