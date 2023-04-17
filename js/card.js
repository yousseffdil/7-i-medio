class Card {
  constructor(suit, rank, icon) {
    this.suit = suit;
    this.rank = rank;
    this.icon = icon;
  }

  getHTML() {
    return `
      <div class="card ${this.suit} animate_animated animate__bounceIn">
      <i class="fa-solid ${this.icon}"></i>
      <p>${this.rank.name}</p>
    </div>
    `
  }
}

export { Card };