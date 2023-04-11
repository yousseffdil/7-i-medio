import { Deck } from './deck.js';
import { Player } from './jugador.js';
import { Game } from './GAME.js';

const startButton = document.getElementById('start');
const hitButton = document.getElementById('hit');
const standButton = document.getElementById('stand');
const resultDiv = document.getElementById('result');

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
});
// el que llegeixi aquesta part del codi es gei

standButton.addEventListener('click', () => {
    disableHitStandButtons();
    game.computerTurn();
    renderGame();
    renderResult();
});


function renderGame() {
    const playerCards = document.getElementById('player-cards');
    playerCards.innerHTML = '';
    for (let card of player.cards) {
        playerCards.innerHTML += card.getHTML();
    }
    if (player.score > 7.5) {
        alert("Mi homie te has pasado")
        disableHitStandButtons();
    }
    const playerScore = document.getElementById('player-score');
    playerScore.textContent = player.score;

    const computerCards = document.getElementById('computer-cards');
    computerCards.innerHTML = '';
    for (let card of computer.cards) {
        computerCards.innerHTML += card.getHTML();
    }

    const computerScore = document.getElementById('computer-score');
    computerScore.textContent = computer.cards.length === 2 ? '??' : computer.score;
}

function renderResult() {
    const result = game.getResult();
    resultDiv.textContent = result;
}

function disableHitStandButtons() {
    hitButton.disabled = true;
    standButton.disabled = true;
}

function enableHitStandButtons() {
    hitButton.disabled = false;
    standButton.disabled = false;
}

function disableStartButton() {
    startButton.disabled = true;
}

function enableStartButton() {
    startButton.disabled = false;
}

function reset() {
    deck.shuffle();
    player.reset();
    computer.reset();
    resultDiv.textContent = '';
    disableHitStandButtons();
    enableStartButton();
    renderGame();
}

reset();
