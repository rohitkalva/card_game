// Initialize deck in serial order
var VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Export class
export default class Deck {
        [x: string]: any;
        constructor(cards = CardDeck(VALUES)) {
        this.cards = cards
    }

       
    pop() {
        return this.cards.shift()
      }
      push(card: any) {
        this.cards.push(card)
      }
}

//FreshDeck function to randomize initialized deck using Math.random and Math.floor function
export function CardDeck(VALUES: any) {
    var i = VALUES.length,
        j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = VALUES[j];
        VALUES[j] = VALUES[i];
        VALUES[i] = temp;
    }
    return VALUES
}