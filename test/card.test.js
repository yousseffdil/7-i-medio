import {Card} from '../js/card.js';
describe('Card Unit testing', () => {
  test('getHTML test', ()=>{
    const card = new Card('oros', {name: 'As', value: 1} );
    card.getHTML();
  });
});
