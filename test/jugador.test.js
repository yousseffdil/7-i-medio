import {Jugador} from '../js/jugador.js';
import {Card} from '../js/card';
describe('Jugador', () => {
  let jugador = new Jugador();
  beforeEach(() => {
    jugador = new Jugador();
  });
  test('Reset cards and score', () => {
    jugador.addCard({rank: 'As', suit: 'Espadas', value: 1});
    jugador.reset();
    expect(jugador.cards).toHaveLength(0);
    expect(jugador.score).toBe(0);
  });
  test('getScore', () => {
    const card = new Card('oros', {name: 'As', value: 1});
    const card2 = new Card('oros', {name: 'Dos', value: 2} );
    jugador.addCard(card);
    jugador.addCard(card2);

    expect(jugador.cards).toHaveLength(2);
    expect(jugador.getScore()).toBe(3);
  });
});
