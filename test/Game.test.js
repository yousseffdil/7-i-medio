import {Game} from '../js/Game.js';
import {Jugador} from '../js/jugador.js';
import {Deck} from '../js/deck.js';
describe('Game Unit test', () => {
  test('Start unit test', () => {
    const deck = new Deck();
    const player = new Jugador();
    const computer = new Jugador();
    const game = new Game(deck, player, computer);
    const originalDeck = [...deck.cards];
    game.start();
    expect(deck.cards).not.toEqual(originalDeck);
    expect(player.cards.length).toEqual(1);
    expect(computer.cards.length).toEqual(1);
  });
});

