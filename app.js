const hands = [ 'rock', 'paper', 'scissors' ]

function computerPlay () {
    const hand = hands[Math.floor(Math.random() * hands.length)]
    return hand
}

let playerPoints = 0
let computerPoints = 0

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if(playerSelection === computerSelection) {
        return 'Draw'
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        playerPoints += 1
        return 'You win!'
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        computerPoints += 1
        return 'You lose!'
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        playerPoints += 1
        return 'You win!'
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        computerPoints += 1
        return 'You lose!'
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        computerPoints += 1
        return 'You lose!'
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        playerPoints += 1
        return 'You win!'
    }
}

function game() {
    let i = 0
    do {
        let playerSelection = prompt('Choose your hand')
        let computerSelection = computerPlay()
        computerSelection
        console.log(playRound(playerSelection, computerSelection))
        
        i++
    } while(i < 5)
        

    if(playerPoints > computerPoints){
        return 'The Player is the winner!'
    } else if(playerPoints === computerPoints) {
        return 'It is a draw!'
    } else {
        return 'The Computer is the winner!'
    }
}

console.log(game())