"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardDeck = void 0;
// Initialize deck in serial order
var VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Export class
class Deck {
    constructor(cards = CardDeck(VALUES)) {
        this.cards = cards;
    }
    pop() {
        return this.cards.shift();
    }
    push(card) {
        this.cards.push(card);
    }
}
exports.default = Deck;
//FreshDeck function to randomize initialized deck using Math.random and Math.floor function
function CardDeck(VALUES) {
    var i = VALUES.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = VALUES[j];
        VALUES[j] = VALUES[i];
        VALUES[i] = temp;
    }
    return VALUES;
}
exports.CardDeck = CardDeck;
