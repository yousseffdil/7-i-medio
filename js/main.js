import {Deck} from './deck.js';
import {Jugador} from './jugador.js';
import {Game} from './GAME.js';

/**
 * El botón para iniciar el juego.
 *
 * @type {HTMLElement}
 */
const startButton = document.getElementById('start');

/**
 * El botón para solicitar una carta adicional.
 *
 * @type {HTMLElement}
 */
const hitButton = document.getElementById('hit');

/**
 * El botón para detener la ronda actual.
 *
 * @type {HTMLElement}
 */
const standButton = document.getElementById('stand');

/**
 * El elemento donde se muestra el resultado del juego.
 *
 * @type {HTMLElement}
 */
const resultDiv = document.getElementById('result');

/**
 * La baraja del juego.
 *
 * @type {Deck}
 */
const deck = new Deck();

/**
 * El jugador humano.
 *
 * @type {Jugador}
 */
const player = new Jugador();

/**
 * El jugador controlado por la computadora.
 *
 * @type {Jugador}
 */
const computer = new Jugador();

/**
 * El juego actual.
 *
 * @type {Game}
 */
const game = new Game(deck, player, computer);

/**
 * Función que se ejecuta al hacer clic en el botón de iniciar el juego.
 */
startButton.addEventListener('click', () => {
  game.start();
  disableHitStandButtons();
  enableHitStandButtons();
  renderGame();
});

/**
 * Función que se ejecuta al hacer clic en el botón de.
 * solicitar una carta adicional.
 */
hitButton.addEventListener('click', () => {
  game.hit(player);
  renderGame();
});

/**
 * Función que se ejecuta al hacer clic en el botón de detener la ronda actual.
 */
standButton.addEventListener('click', () => {
  disableHitStandButtons();
  game.computerTurn();
  renderGame();
  renderResult();
});

/**
 * Renderiza la interfaz gráfica del juego.
 */
function renderGame() {
  const playerCards = document.getElementById('player-cards');
  playerCards.innerHTML = '';
  for (const card of player.cards) {
    playerCards.innerHTML += card.getHTML();
  }
  if (player.score > 7.5) {
    alert('Mi homie te has pasado');
    disableHitStandButtons();
  }
  const playerScore = document.getElementById('player-score');
  playerScore.textContent = player.score;

  const computerCards = document.getElementById('computer-cards');
  computerCards.innerHTML = '';
  for (const card of computer.cards) {
    computerCards.innerHTML += card.getHTML();
  }

  const computerScore = document.getElementById('computer-score');
  if (computer.cards.length === 2) {
    computerScore.textContent = computer.score;
  } else {
    computerScore.textContent = computer.score;
  }
}

/**
 * Renderiza el resultado final del juego.
 */
function renderResult() {
  const result = game.getResult();
  resultDiv.textContent = result;
}

/**
 * Deshabilita els botons de hit and stand.
 */
function disableHitStandButtons() {
  hitButton.disabled = true;
  standButton.disabled = true;
}

/**
 * Habilita els botons de stand and hit.
 */
function enableHitStandButtons() {
  hitButton.disabled = false;
  standButton.disabled = false;
}
/**
 * Habilita el boto de iniciar el joc.
 */
function enableStartButton() {
  startButton.disabled = false;
}
/**
 * Reinicia el joc
 */
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
