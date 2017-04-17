// @flow

import assert from 'assert' /* global describe, it */

// Functions to test:
import { totalCost, totalCostDescription } from '../src/hackerrank/operators'
import { XORKey, xor } from '../src/hackerrank/xor'

// Built-in Functions:

// Tests
describe('JavaScript Built-in Functions', () => {
  describe('Array', () => {
    describe('#indexOf()', () => {
      it('should return -1 when the value is not present', () => {
        assert.equal(-1, [1, 2, 3].indexOf(4))
      })
    })
    // TODO: apply
  })

  describe('Math', () => {
    describe('#max()', () => {
      it('should return 2 when values given are 1 and 2', () => {
        assert.equal(2, Math.max(1, 2))
        assert.equal(2, Math.max(2, 1))
      })
      it('should return -1 when values given are -1 and -1', () => {
        assert.equal(-1, Math.max(-1, -1))
      })
      describe('with arrays', () => {
        it('should return 2 when value given is an reduced array [1, 2, -1]', () => {
          assert.equal(2, [1, 2, -1].reduce((acc, e) => { return Math.max(acc, e) }))
        })
        it('should return 2 when value given is an spreaded array ...[1, 2, -1]', () => {
          assert.equal(2, Math.max(...[1, 2, -1]))
        })
      })
    })
  })
})

describe('Hacker Rank', () => {
  describe('Challenge: 30 Days of Code', () => {
    describe('Day 2: Operators -  = 15 Logic #1', () => {
      it('should return 15 when inputs are (12.00, 20, 8)', () => {
        const mealCost = 12.00
        const tipPercent = 20
        const taxPercent = 8

        const expected = 15
        const actual = totalCost(mealCost, tipPercent, taxPercent)

        assert.equal(expected, actual)
      })

      it('should return a string with 15 when inputs are (12.00, 20, 8)', () => {
        const mealCost = 12.00
        const tipPercent = 20
        const taxPercent = 8

        const expected = 'The total meal cost is 15 dollars.'
        const actual = totalCostDescription(totalCost(mealCost, tipPercent, taxPercent))

        assert.equal(expected, actual)
      })

      it('should return a string with 13 when inputs are (10.25, 17, 5)', () => {
        const mealCost = 10.25
        const tipPercent = 17
        const taxPercent = 5

        const expected = 'The total meal cost is 13 dollars.'
        const actual = totalCostDescription(totalCost(mealCost, tipPercent, taxPercent))

        assert.equal(expected, actual)
      })
    })
  })

  describe('XOR key', () => {
    // describe('#xor(a, b)', () => {
    //   it('should return 21 when (2, 23) is given', () => {
    //     assert.equal(21, xor(2, 23))
    //   })
    // })

    // it('should return output array values when input value is given', () => {
    //   const input = {
    //     T: 1,
    //     tests: [{
    //       N: 15,
    //       Q: 8,
    //       seq: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    //       queries: [
    //         {a: 10, p: 6, q: 10},
    //         {a: 1023, p: 7, q: 7},
    //         {a: 33, p: 5, q: 8},
    //         {a: 182, p: 5, q: 10},
    //         {a: 181, p: 1, q: 13},
    //         {a: 5, p: 10, q: 15},
    //         {a: 99, p: 8, q: 9},
    //         {a: 33, p: 10, q: 14}
    //       ]
    //     }]
    //   }
    //   const expected = [13, 1016, 41, 191, 191, 15, 107, 47]
    //   const actual = XORKey(input.tests)
    //   assert.equal(expected, actual)
    // })
  })
})
