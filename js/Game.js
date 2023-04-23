

/**
 * Representa una classe anomenada Game.
 * @class
 */
class Game {
  /**
   * Crea una nova instància de la classe Game.
   * @constructor
   * @param {Deck} deck - La baralla de cartes que es farà servir en el joc.
   * @param {Player} player - El jugador que juga el joc.
   * @param {Computer} computer - La màquina que juga el joc.
   * @param {Main} Main - La classe principal per executar el joc.
   */
  constructor(deck, player, computer, Main) {
    this.deck = deck;
    this.player = player;
    this.computer = computer;
  }

  /**
   * Inicia el joc.
   * barrejant la baralla.
   * reiniciant les mans del jugador i de la màquina, i repartint les cartes.
   */
  start() {
    this.deck.shuffle();
    this.player.reset();
    this.computer.reset();
    for (let i = 0; i < 1; i++) {
      this.player.addCard(this.deck.pop());
      this.computer.addCard(this.deck.pop());
    }
  }

  /**
   * Afegeix una carta a la mà d'un jugador.
   * @param {Player} player - El jugador al qual s'ha d'afegir la carta.
   */
  hit(player) {
    player.addCard(this.deck.pop());
  }

  /**
   * Controla el torn de la màquina.
   * La qual seguirà agafant cartes fins que obtingui una puntuació de 7.5.
   * O fins que decideixi plantar-se.
   */
  computerTurn() {
    while (this.computer.score < 7.5 && this.computer.cards.length < 5) {
      if (this.computer.score < 7.5) {
        this.hit(this.computer);
      } else if (this.computer.score >= 7.5 && this.computer.score < 7.5) {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
          this.hit(this.computer);
        } else {
          break;
        }
      } else {
        break;
      }
    }
  }

  /**
   * Retorna el resultat final del joc.
   * @return {Object} Un objecte que conté el resultat final del joc.
   */
  getResult() {
    if (this.player.score > 7.5) {
      const text = 'El jugador pierde';
      Swal.fire(text);
      return {value: text};
    } else if (this.player.score > this.computer.score) {
      const text = 'El jugador gana';
      Swal.fire(text);
      return {value: text};
    } else if (this.player.score < this.computer.score) {
      const text = 'El jugador pierde';
      Swal.fire(text);
      return {value: text};
    } else {
      const text = 'EMPATE';
      Swal.fire(text);
      return {value: text};
    }
  }
}
export {Game};
