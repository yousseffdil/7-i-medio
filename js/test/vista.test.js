import {Card} from '../js/card';
test('La function init agrega los listeners correctos', () => {
  const game = {start: jest.fn(), player: {}, computer: {}};
  const view = new Vista(game);

  view.init();

  expect(game.start).toHaveBeenCalled();
  expect(view.startButton.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));
  expect(view.hitButton.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));
  expect(view.standButton.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));
  expect(view.reset).toHaveBeenCalled();
});

test('La función renderGame muestra las cartas del jugador y su puntuación', () => {
  const game = {
    player: {cards: [new Card('as'), new Card('rey')], score: 12},
    computer: {cards: [new Card('a'), new Card('10')], score: 5},
  };
  const view = new Vista(game);

  view.renderGame();

  expect(view.playerCards.innerHTML).toContain('as<br>king<br>');
  expect(view.playerScore.textContent).toEqual('12');
  expect(view.computerCards.innerHTML).toContain('a<br>10<br>');
  expect(view.computerScore.textContent).toEqual('5');
});
