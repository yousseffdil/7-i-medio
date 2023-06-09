import {Deck} from '../js/deck.js';
import {Card} from '../js/card.js';
describe('Deck Unit test', () => {
  test('Pop unit test', () => {
    const deck = new Deck();
    const card = new Card('oros', {name: 'As', value: 1} );
    deck.push(card);
    const card2 = deck.pop();
    expect(card).toBe(card2);
  });
  test('Push test', () => {
    const deck = new Deck();
    const card1 = new Card('Oros', {name: 'As', value: 1});
    const card2 = new Card('Espadas', {name: 'As', value: 1});
    deck.push(card1);
    deck.push(card2);
    expect(deck.cards[deck.cards.length-1]).toBe(card2);
  });


  test('Shuffle unit test', () => {
    const deck = new Deck();
    const originalDeck = [...deck.cards];
    deck.shuffle();
    expect(deck.cards.length).toBe(originalDeck.length);
    for (const card of originalDeck) {
      expect(deck.cards).toContainEqual(card);
    }
    expect(deck.cards).not.toEqual(originalDeck);
  });
});

