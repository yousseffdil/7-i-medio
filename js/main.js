import {Deck} from './deck.js';
import {Jugador} from './jugador.js';
import {Game} from './Game.js';
import {Vista} from './vista.js';

const deck = new Deck();
const player = new Jugador();
const computer = new Jugador();
const game = new Game(deck, player, computer);
const view = new Vista(game);

view.init();
