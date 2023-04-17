import { Deck } from './deck.js';
import { Player } from './jugador.js';
import { Game } from './GAME.js';
import {
    getStartButton,
    getHitButton,
    getStandButton,
    getResultDiv,
    getPlayerCards,
    getPlayerScore,
    getComputerCards,
    getComputerScore
} from './vista.js';

const startButton = getStartButton();
const hitButton = getHitButton();
const standButton = getStandButton();
const resultDiv = getResultDiv();

const deck = new Deck();
const player = new Player();
const computer = new Player();
const game = new Game(deck, player, computer);

startButton.addEventListener('click', () => {
    game.start();
    disableHitStandButtons();
    enableHitStandButtons();
    renderGame();
});

hitButton.addEventListener('click', () => {
    game.hit(player);
    renderGame();
    game.hit();
});

standButton.addEventListener('click', () => {
    disableHitStandButtons();
    game.computerTurn();
    renderGame();
    renderResult();
});


function renderGame() {
    const playerCards = getPlayerCards();
    playerCards.innerHTML = '';
    for (let card of player.cards) {
        playerCards.innerHTML += card.getHTML();
    }
    const playerScore = getPlayerScore();
    playerScore.textContent = player.score;

    const computerCards = getComputerCards();
    computerCards.innerHTML = '';
    for (let card of computer.cards) {
        computerCards.innerHTML += card.getHTML();
    }

    const computerScore = getComputerScore();
    computerScore.textContent = computer.cards.length === 2 ? computer.score : computer.score;
}

function renderResult() {
    const result = game.getResult().value;
    resultDiv.textContent = result;
}

function disableHitStandButtons() {
    hitButton.disabled = true;
    hitButton.style.backgroundColor = "grey"
    standButton.disabled = true;
    standButton.style.backgroundColor = "grey"

}

function enableHitStandButtons() {
    hitButton.disabled = false;
    hitButton.style.backgroundColor = "#820000"
    standButton.disabled = false;
    standButton.style.backgroundColor = "#820000"

}

function disableStartButton() {
    startButton.disabled = true;
    startButton.style.backgroundColor = "grey"
}

function enableStartButton() {
    startButton.disabled = false;
}

function reset(startButton) {
    deck.shuffle();
    player.reset();
    computer.reset();
    resultDiv.textContent = '';
    disableHitStandButtons();
    enableStartButton();
    renderGame();
}

reset();
