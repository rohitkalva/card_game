import {RoundWinner} from './app'
import { expect } from 'chai';
import 'mocha';
//Task 3 Test 1
describe('First test',
    () => {
        it('Compare two cards', () => {
            const winner = RoundWinner(10,9);
            expect(winner).equal(true)
        });
    });

    describe('Second test',
    () => {
        it('Compare two cards', () => {
            const winner = RoundWinner(5,6);
            expect(winner).equal(false)
        });
    });
