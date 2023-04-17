
/**
 * Una classe que representa la vista del joc
 * */
export class Vista {
  /**
   * Crea un objecte vista.
   * @constructor
   * @param{Object} game -L'objecte del joc
   * */
  constructor(game) {
    this.game = game;
    this.startButton = document.getElementById('start');
    this.hitButton = document.getElementById('hit');
    this.standButton = document.getElementById('stand');
    this.resultDiv = document.getElementById('result');
    this.playerCards = document.getElementById('player-cards');
    this.playerScore = document.getElementById('player-score');
    this.computerCards = document.getElementById('computer-cards');
    this.computerScore = document.getElementById('computer-score');
  }

  /**
   * Inicialitza la vista afegint Listeners i  restablir el joc.
   * */
  init() {
    this.startButton.addEventListener('click', () => {
      this.game.start();
      this.disableHitStandButtons();
      this.enableHitStandButtons();
      this.renderGame();
    });

    this.hitButton.addEventListener('click', () => {
      this.game.hit(this.game.player);
      this.renderGame();
    });

    this.standButton.addEventListener('click', () => {
      this.disableHitStandButtons();
      this.game.computerTurn();
      this.renderGame();
      this.renderResult();
    });

    this.reset();
  }

  /**
   * Representa l'estat actual del joc en la pantalla.
   * */
  renderGame() {
    this.playerCards.innerHTML = '';
    for (const card of this.game.player.cards) {
      this.playerCards.innerHTML += card.getHTML();
    }
    if (this.game.player.score > 7.5) {
      alert('Mi homie te has pasado');
      this.disableHitStandButtons();
    }
    this.playerScore.textContent = this.game.player.score;

    this.computerCards.innerHTML = '';
    for (const card of this.game.computer.cards) {
      this.computerCards.innerHTML += card.getHTML();
    }
    this.computerScore.textContent = this.game.computer.score;
  }

  /**
   * Representa el resultat del joc a la pantalla.
   * */
  renderResult() {
    const result = this.game.getResult();
    this.resultDiv.textContent = result.value;
  }

  /**
   * Desactiva el boto 'hit' i 'stand'.
   * */
  disableHitStandButtons() {
    this.hitButton.disabled = true;
    this.hitButton.style.backgroundColor = '#808080';
    this.standButton.disabled = true;
    this.standButton.style.backgroundColor = '#808080';
  }
  /**
   * Activa el boto 'hit' i 'stand'.
   * */
  enableHitStandButtons() {
    this.hitButton.disabled = false;
    this.hitButton.style.backgroundColor = '#820000';
    this.standButton.disabled = false;
    this.standButton.style.backgroundColor = '#820000';
  }
  /**
   * Activa el boto 'start'.
   * */
  enableStartButton() {
    this.startButton.disabled = false;
  }
  /**
   * Reinicia el joc.
   * */
  reset() {
    this.game.deck.shuffle();
    this.game.player.reset();
    this.game.computer.reset();
    this.resultDiv.textContent = '';
    this.disableHitStandButtons();
    this.enableStartButton();
    this.renderGame();
  }
}
