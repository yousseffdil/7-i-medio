import {Jugador} from '../js/jugador.js';
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
    jugador.addCard({rank: 'As', suit: 'Espadas', value: 1});
    jugador.addCard({rank: 'Dos', suit: 'Oros', value: 2});

    expect(jugador.cards).toHaveLength(2);

    expect(jugador.getScore()).toBe(3);
  });
});
