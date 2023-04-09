export default class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.score = 0;
  }

  addCard(card) {
    this.cards.push(card);
    this.score = this.getScore();
  }

  getScore() {
    let score = 0;
    let aces = 0;
    for (let card of this.cards) {
      if (card.rank === 'As') {
        aces++;
        score += 1;
      } else if (card.rank === 'Sota' || card.rank === 'Caballo' || card.rank === 'Rey') {
        score += 0.5;
      } else {
        score += (card.rank);
      }
    }
    while (aces > 0 && score < 7.5) {
      score += 0.5;
      aces--;
    }
    return score;
  }
  

  reset() {
    this.cards = [];
    this.score = 0;
  }
}

export { Player };
