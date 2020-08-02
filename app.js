const buttons = document.querySelectorAll('[data-selection]')
const pScore = document.querySelector('[data-player-score]')
const cScore = document.querySelector('[data-computer-score]')
const draw = document.querySelector('[data-draw-score]')
const finalScore = document.querySelector('[data-final-score]')
const restart = document.querySelector('.restart')

const hands = [
    {
        name: 'rock',
        beats: 'scissors'
    },
    {
        name: 'paper',
        beats: 'rock'
    },
    {
        name: 'scissors',
        beats: 'paper'
    }
]

let winner = true

function computerPlay () {
    const hand = hands[Math.floor(Math.random() * hands.length)]
    return hand
}

function wins(playerSelection, computerSelection) {
    return playerSelection.beats === computerSelection.name
}

function incScore(score) {
    score.innerText = parseInt(score.innerText) + 1
}

function addWinner(winner) {
    const div = document.createElement('div')
    div.innerText = `The winner is the ${winner}!`
    finalScore.after(div)
}

 function playRound(playerSelection, computerSelection) {
    const pWin = wins(playerSelection, computerSelection)
    const cWin = wins(computerSelection, playerSelection)
    
    if (pWin) {
        incScore(pScore)
    } else if (cWin) {
        incScore(cScore)
    } else {
        incScore(draw)
    }

    if (parseInt(pScore.innerText) === 5 && winner === true ) {
        addWinner('Player') 
        winner = false
    } else if (parseInt(cScore.innerText) === 5 && winner === true) {
        addWinner('Computer')
        winner = false
    }
}

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const selectionName = button.dataset.selection
        const playerSelection = hands.find(hand => hand.name === selectionName)
        const computerSelection = computerPlay()

        playRound(playerSelection, computerSelection)
    })
})

restart.addEventListener('click', e => {
    location.reload()
})