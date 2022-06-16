function computerTurn() {
    const randomNumber = Math.floor((Math.random()*3))
    switch(randomNumber) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function playerTrun() {
    const playerSign = prompt("Type your sign: ")
    return playerSign.toLowerCase().trim()
}