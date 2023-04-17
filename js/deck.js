import { Card } from './card.js';

class Deck {
  constructor() {
    this.cards = [];
    const suits = [
      { name: 'Oros', icon: 'fa-coins' },
      { name: 'Copas', icon: 'fa-glass-martini-alt' },
      { name: 'Espadas', icon: 'fa-utensils' },
      { name: 'Bastos', icon: 'fa-pause' }
    ];

    const ranks = [
      { name: 'As', value: 1 },
      { name: 'Dos', value: 2 },
      { name: 'Tres', value: 3 },
      { name: 'Cuatro', value: 4 },
      { name: 'Cinco', value: 5 },
      { name: 'Seis', value: 6 },
      { name: 'Siete', value: 7 },
      { name: 'Sota', value: 0.5 },
      { name: 'Caballo', value: 0.5 },
      { name: 'Rey', value: 0.5 }
    ];

    for (let suit of suits) {
      for (let rank of ranks) {
        this.cards.push(new Card(suit.name, rank, suit.icon));
      }
    }
  }


  pop() {
    return this.cards.pop();
  }

  push(card) {
    this.cards.push(card);
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}

export { Deck };
