class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }

  getHTML() {
    return `<div class="card ${this.suit}">${this.rank}<div class="suit-icon"></div></div>`;
  }
}

export { Card };
