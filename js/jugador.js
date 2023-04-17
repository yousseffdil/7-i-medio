/**
 * Classe que representa un jugador.
 */
class Jugador {
  /**
   * Crea un objecte Jugador amb el nom donat.
   * @param {string} name - El nom del jugador.
   */
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.score = 0;
  }

  /**
   * Afegeix una carta a la mà del jugador i actualitza la seva puntuació.
   * @param {object} card - L'objecte carta a afegir a la mà del jugador.
   */
  addCard(card) {
    this.cards.push(card);
    this.score = this.getScore();
  }

  /**
   * Calcula la puntuació del jugador basada en les cartes que té.
   * Els asos valen 1 o 11 punts.
   * @return {number} - La puntuació actual del jugador.
   */
  getScore() {
    let score = 0;
    let aces = 0;
    for (const card of this.cards) {
      score += (card.rank.value);
    }
    while (aces > 0 && score < 7.5) {
      score += 0.5;
      aces--;
    }
    return score;
  }

  /**
   * Reinicia la mà i la puntuació del jugador a buides i zero respectivament.
   */
  reset() {
    this.cards = [];
    this.score = 0;
  }
}

export {Jugador};
