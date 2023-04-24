/* eslint-disable */

import {Game} from '../js/Game.js';
import {Jugador} from '../js/jugador.js';
import {Deck} from '../js/deck.js';
import {Card} from '../js/card.js';

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
  test('computerTurn test, computer score between 7.5 and 5 cards', () => {
    const deck = new Deck();
    const player = new Jugador();
    const computer = new Jugador();
    const game = new Game(deck, player, computer);

    // Add cards to computer
    computer.addCard(new Card('oros', {name: 'Siete', value: 7} ));
    computer.addCard(new Card('oros', {name: 'Caballo', value: 0.5} ));

    game.computerTurn();

    expect(game.computer.score).toBeGreaterThanOrEqual(7.5);
    expect(game.computer.score).toBeLessThanOrEqual(7.5);
    expect(game.computer.cards.length).toBeGreaterThanOrEqual(2);
    expect(game.computer.cards.length).toBeLessThan(6);
  });


  test('Hit test', () =>{
    const deck = new Deck();
    const player = new Jugador();
    const game = new Game(deck, player);
    game.hit(player);
    expect(player.cards.length).toBe(1);
  });
  test('getResult test, Jugador pierde en caso de que su puntuacion sea menor a 7.5', () => {
    const deck = new Deck();
    const player = new Jugador();
    const computer = new Jugador();

    const game = new Game(deck, player, computer);
    player.addCard(new Card('oros', {name: 'Cinco', value: 5} ));
    player.addCard(new Card('oros', {name: 'As', value: 1} ));
    computer.addCard(new Card('oros', {name: 'Cinco', value: 5} ));
    computer.addCard(new Card('oros', {name: 'Dos', value: 2} ));
    const result = game.getResult();
    expect(result.value).toBe('El jugador pierde');
  });
  test('getResult test, Jugador gana en caso de que la puntuacion de la maquina sea menor a 7.5', () => {
    const deck = new Deck();
    const player = new Jugador();
    const computer = new Jugador();

    const game = new Game(deck, player, computer);
    player.addCard(new Card('oros', {name: 'Cinco', value: 5} ));
    player.addCard(new Card('oros', {name: 'Dos', value: 2} ));
    computer.addCard(new Card('oros', {name: 'Cinco', value: 5} ));
    computer.addCard(new Card('oros', {name: 'As', value: 1} ));
    const result = game.getResult();
    expect(result.value).toBe('El jugador gana');
  });

  test('getResult test, Jugador pierde en caso de que su puntuacion sea menor al de la maquina', () => {
    const deck = new Deck();
    const player = new Jugador();
    const computer = new Jugador();

    const game = new Game(deck, player, computer);
    player.addCard(new Card('oros', {name: 'Cinco', value: 5} ));
    player.addCard(new Card('oros', {name: 'As', value: 1} ));
    computer.addCard(new Card('oros', {name: 'Seis', value: 6} ));
    computer.addCard(new Card('oros', {name: 'As', value: 1} ));
    const result = game.getResult();
    expect(result.value).toBe('El jugador pierde');
  });
  test('getResult test, Empate', () => {
    const deck = new Deck();
    const player = new Jugador();
    const computer = new Jugador();

    const game = new Game(deck, player, computer);
    player.addCard(new Card('oros', {name: 'Cinco', value: 5} ));
    player.addCard(new Card('oros', {name: 'As', value: 1} ));
    computer.addCard(new Card('oros', {name: 'Cinco', value: 5} ));
    computer.addCard(new Card('oros', {name: 'As', value: 1} ));
    const result = game.getResult();
    expect(result.value).toBe('EMPATE');
  });
  test('getResult test, Empate', () => {
    const deck = new Deck();
    const player = new Jugador();

    const game = new Game(deck, player);
    player.addCard(new Card('oros', {name: 'Siete', value: 7} ));
    player.addCard(new Card('oros', {name: 'Dos', value: 2} ));
    const result = game.getResult();
    expect(result.value).toBe('El jugador pierde');
  });
  test('getHTML test', () => {
    const card = new Card('oros', {name: 'Cinco', value: 5});
    const expectedHTML = `
    <div class="card Oros animate_animated animate__bounceIn">
      <p>Cinco</p>
      <i class="fa-solid fa-coins"></i>
    </div>
  `;
    expect(card.getHTML().length).toBe(expectedHTML.length);
  });

});

