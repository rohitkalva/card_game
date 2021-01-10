"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deck_1 = require("./deck");
const chai_1 = require("chai");
require("mocha");
const deck_cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//First Test
describe('First test', () => {
    it('Length should be equal to 40', () => {
        const result = deck_1.CardDeck(deck_cards);
        chai_1.expect(result.length).equal(40);
    });
});
//Second Test
describe('Second test', () => {
    it('Shuffle of cards in Deck', () => {
        var shufflefunc = arraysEqual(deck_1.CardDeck(deck_cards), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        chai_1.expect(shufflefunc).equal(false);
    });
});
//Function to compare deck arrays
function arraysEqual(a, b) {
    if (a.length !== b.length)
        return false;
    for (var i = a.length; i--;) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
}
