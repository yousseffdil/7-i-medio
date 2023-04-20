import {Jugador} from '../js/jugador.js';
describe('Jugador', () => {
  let jugador;

  beforeEach(() => {
    jugador = new Jugador('Juan'); // crea una instancia de Jugador antes de cada prueba
  });

  afterEach(() => {
    jugador.reset(); // reinicia el estado del jugador después de cada prueba
  });

  test('should add card and update score', () => {
    jugador.addCard({rank: 'As', suit: 'Picas', value: 1});
    expect(jugador.cards).toHaveLength(1);
    expect(jugador.score).toBe(1);
  });

  test('should calculate score correctly with one ace', () => {
    jugador.addCard({rank: 'Oros', suit: 'oros', value: 1});
    jugador.addCard({rank: 'Oros', suit: 'oros', value: 0.5});
    expect(jugador.score).toBe(11.5);
  });

  test('should calculate score correctly with multiple aces', () => {
    jugador.addCard({rank: 'Cinco', suit: 'Oros', value: 5});
    jugador.addCard({rank: 'Dos', suit: 'Bastos', value: 2});
    jugador.addCard({rank: 'Rey', suit: 'Bastos', value: 0.5});
    expect(jugador.score).toBe(7.5);
  });

  test('should reset cards and score', () => {
    jugador.addCard({rank: 'As', suit: 'Picas', value: 1});
    jugador.reset();
    expect(jugador.cards).toHaveLength(0);
    expect(jugador.score).toBe(0);
  });
});
