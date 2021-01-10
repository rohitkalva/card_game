"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const chai_1 = require("chai");
require("mocha");
//Task 3 Test 1
describe('First test', () => {
    it('Compare two cards', () => {
        const winner = app_1.RoundWinner(10, 9);
        chai_1.expect(winner).equal(true);
    });
});
describe('Second test', () => {
    it('Compare two cards', () => {
        const winner = app_1.RoundWinner(5, 6);
        chai_1.expect(winner).equal(false);
    });
});
