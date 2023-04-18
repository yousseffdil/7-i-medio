import { Card } from './card.js'
// Tests that the game ends and the result is calculated correctly. 
it('test_game_ends_and_result_is_calculated', () => {
    const deck = new Deck();
    const player = new Player();
    const computer = new Computer();
    const game = new Game(deck, player, computer);
    player.score = 8;
    computer.score = 7;
    const result = game.getResult();
    expect(result.value).toBe('El jugador pierde');
});
