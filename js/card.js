/**
 * Representem la clase Card.
 */
class Card {
  /**
   * Es crea un constructor amb els seguent parametres.
   * @param {string} suit - El pal de la carta.
   * @param {object} rank - El rank de la carta.
   * @param {string} icon - L'icone de la carta.
   */
  constructor(suit, rank, icon) {
    this.suit = suit;
    this.rank = rank;
    this.icon = icon;
  }
  /**
   *Retornem la carta renderitzada per poder mostrarla en la pagina web.
   * @return {string} - Es retorna la carta en format HTML().
   */
  getHTML() {
    return `
      <div class="card ${this.suit} animate_animated animate__bounceIn">
      <i class="fa-solid ${this.icon}"></i>
      <p>${this.rank.name}</p>
    </div>
    `;
  }
}
export { Card };