const buttons = document.querySelectorAll('[data-selection]')
const pScore = document.querySelector('[data-player-score]')
const cScore = document.querySelector('[data-computer-score]')
const draw = document.querySelector('[data-draw-score]')
const finalScore = document.querySelector('[data-final-score]')

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
}

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const selectionName = button.dataset.selection
        const hand = hands.find(hand => hand.name === selectionName)
        const computerSelection = computerPlay()
        playRound(hand, computerSelection)
    })
})