import { CardDeck } from './deck'
import { expect } from 'chai';
import 'mocha';
const deck_cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//First Test
describe('First test',
    () => {
        it('Length should be equal to 40', () => {
            const result = CardDeck(deck_cards);
            expect(result.length).equal(40)
        });
    });
//Second Test
describe('Second test',
    () => {
        it('Shuffle of cards in Deck', () => {
            var shufflefunc = arraysEqual(CardDeck(deck_cards), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
            expect(shufflefunc).equal(false)
        });
    });

//Function to compare deck arrays
function arraysEqual(a: any, b: any) {
    if (a.length !== b.length)
        return false;
    for (var i = a.length; i--;) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
}