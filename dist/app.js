"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoundWinner = void 0;
const deck_1 = __importDefault(require("./deck"));
//Global variable for player deck
let deck_player1, deck_player2;
startGame();
//Start game function. Starting point of the application.
function startGame() {
    console.log("Welcome to multi player Card Game");
    console.log("The game starts now");
    console.log('\n');
    const deck = new deck_1.default();
    //Dividing the deck into equal halves and distributing it across players
    const deckMidPoint = Math.ceil(deck.cards.length / 2);
    deck_player1 = deck.cards.slice(0, deckMidPoint);
    deck_player2 = deck.cards.slice(deckMidPoint, deck.cards.length);
    for (var i = 0;; i++) {
        const status = flipCards();
        if (status == true)
            break;
        else
            continue;
    }
}
// Flipcards function where main game takes place.
function flipCards() {
    //First number in the stack
    const player1_Card = deck_player1.pop();
    const player2_Card = deck_player2.pop();
    console.log("Player 1 (" + deck_player1.length + " cards): " + player1_Card);
    console.log("Player 2 (" + deck_player2.length + " cards): " + player2_Card);
    //Checking for round winner by comparing card values.
    if (RoundWinner(player1_Card, player2_Card)) {
        console.log("Player 1 wins this round");
        console.log('\n');
        deck_player1.push(player1_Card);
        deck_player1.push(player2_Card);
    }
    else if (RoundWinner(player2_Card, player1_Card)) {
        console.log("Player 2 wins this round");
        console.log('\n');
        deck_player2.push(player1_Card);
        deck_player2.push(player2_Card);
    }
    //When cards have same value we check for score of player. Highest scorer takes 4 cards from the other player.
    else if (RoundWinner(playerScore(deck_player1), playerScore(deck_player2))) {
        console.log("No winner is this round, Player 1 has lead");
        console.log('\n');
        deck_player1.push(player1_Card);
        deck_player1.push(player2_Card);
        deck_player1.push(deck_player2.pop());
        deck_player1.push(deck_player2.pop());
        deck_player1.push(deck_player2.pop());
    }
    else {
        console.log("No winner in this round, Player 2 has lead");
        console.log('\n');
        deck_player2.push(player1_Card);
        deck_player2.push(player2_Card);
        deck_player2.push(deck_player1.pop());
        deck_player2.push(deck_player1.pop());
        deck_player2.push(deck_player1.pop());
    }
    //Condition to see if the cards are over in the player deck.
    if (GameOver(deck_player1) == true) {
        console.log("Player 2 wins the game!");
        return true;
    }
    else if (GameOver(deck_player2) == true) {
        console.log("Player 1 wins the game!");
        return true;
    }
}
//Roundwinner function
function RoundWinner(cardOne, cardTwo) {
    return cardOne > cardTwo;
}
exports.RoundWinner = RoundWinner;
//Gameover Function
function GameOver(deck) {
    if (deck.length === 0) {
        return true;
    }
    else
        return false;
}
//Function to check playerscore when game is tied
function playerScore(deck_list) {
    var sum = deck_list.reduce(function (a, b) {
        return a + b;
    }, 0);
    return sum;
}
