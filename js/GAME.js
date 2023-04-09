import { Deck } from './deck.js';
import { Player } from './jugador.js';

class Game {
  constructor(deck, player, computer) {
    this.deck = deck;
    this.player = player;
    this.computer = computer;
  }
  
  start() {
    this.deck.shuffle();
    this.player.reset();
    this.computer.reset();
    for (let i = 0; i < 1; i++) {
      this.player.addCard(this.deck.pop());
      this.computer.addCard(this.deck.pop());
    }
  }
  
  hit(player) {
    player.addCard(this.deck.pop());
  }
  
  computerTurn() {
    while (this.computer.score < 7.5 && this.computer.cards.length < 5) {
      if (this.computer.score < 5.5) {
        this.hit(this.computer);
      } else if (this.computer.score >= 5.5 && this.computer.score < 7.5 && this.computer.cards.length === 2) {
        this.hit(this.computer);
      } else if (this.computer.score >= 5.5 && this.computer.score < 7.5) {
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
  
  
  getResult() {
    if (this.player.score > 7.5) {
      return 'El jugador pierde';
    } else if (this.computer.score > 7.5) {
      return 'El jugador gana';
    } else if (this.player.score > this.computer.score) {
      return 'El jugador gana';
    } else if (this.player.score < this.computer.score) {
      return 'El jugador pierde';
    } else {
      return 'Empate';
    }
  }
}

export { Game };
