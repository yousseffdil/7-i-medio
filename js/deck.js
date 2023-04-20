import {Card} from './card.js';
/**
* Es representa una baralla.
* */
class Deck {
  /**
   * Es crea un constructor amb els seguents parametres.
   * @property {Card[]} cards - Las cartas de una baralla.
   * Una array que conte objectes, que representen una barrala.
   * @typedef {Object} Suit.
   * @property {string} name - El nombre del palo.
   * @property {string} icon - El icono asociado al palo.
   */
  constructor() {
    this.cards = [];
    const suits = [
      {name: 'Oros', icon: 'fa-coins'},
      {name: 'Copas', icon: 'fa-glass-martini-alt'},
      {name: 'Espadas', icon: 'fa-utensils'},
      {name: 'Bastos', icon: 'fa-pause'},
    ];

    const ranks = [
      {name: 'As', value: 1},
      {name: 'Dos', value: 2},
      {name: 'Tres', value: 3},
      {name: 'Cuatro', value: 4},
      {name: 'Cinco', value: 5},
      {name: 'Seis', value: 6},
      {name: 'Siete', value: 7},
      {name: 'Sota', value: 0.5},
      {name: 'Caballo', value: 0.5},
      {name: 'Rey', value: 0.5},
    ];

    for (const suit of suits) {
      for (const rank of ranks) {
        this.cards.push(new Card(suit.name, rank, suit.icon));
      }
    }
  }


  /**
   * Elimina i retorna la ultima carta de la baralla.
   *
   * @return {Object} Retorna la ultima carta de la baralla.
   */
  pop() {
    return this.cards.pop();
  }

  /**
   * Afegeix una carta al final de la baralla.
   *
   * @param {Object} card - La carta a afegir.
   */
  push(card) {
    this.cards.push(card);
  }


  /**
   * Un metode que el que fa es barrejar las cartas amb el metode Math.random.
   */
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}

export {Deck};
