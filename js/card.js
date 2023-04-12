
class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;

  }

  getHTML() {
    return `<div class="card  ${this.suit} animate__animated animate__fadeIn">
      ${this.suit}  
      ${this.rank.name}
        <div class="suit-icon"></div>
      </div>`;

  }
}

export { Card };