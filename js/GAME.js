/**
 * Es representa una classe anomenada Game.
 * */
class Game {
  constructor(deck, player, computer, Main) {
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
      if (this.computer.score < 7.5) {
        this.hit(this.computer);
      } else if (this.computer.score >= 7.5 && this.computer.score < 7.5 && this.computer.cards.length === 2) {
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


  getResult() {
    if (this.player.score > 7.5) {
      const text = 'El jugador pierde';
      Swal.fire(text);
      return {value: text};
    } else if (this.computer.score > 7.5) {
      const text = 'El jugador gana';
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
