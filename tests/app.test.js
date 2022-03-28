const FizzBuzz = require('../src/app')
const expect = require('chai').expect

describe('TDD Test', () => {
    const EXPECTD = '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz Fizz 52 53 Fizz Buzz 56 Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz Buzz 71 Fizz 73 74 FizzBuzz 76 77 Fizz 79 Buzz Fizz 82 83 Fizz Buzz 86 Fizz 88 89 FizzBuzz 91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz'
    let fizzBuzz

    beforeEach(() => {
        fizzBuzz = new FizzBuzz()
    })

    it('can test fizz', () => {
        expect(fizzBuzz.printFizzBuzz()).to.equal(EXPECTD)
    })

    it('can test single number', () => {
        const testCase = [
            {args: 1, result: "1"},
            {args: 3, result: "Fizz"},
            {args: 5, result: "Buzz"},
            {args: 15, result: "FizzBuzz"},
            {args: 30, result: "FizzBuzz"}
        ]
        testCase.forEach(item => {
            expect(fizzBuzz.printSingleNumber(item.args)).to.equal(item.result)
        })
    })

    it('can throw argument exception when supplied number does not meet rule', () => {
        const testCase = [-1, 101, 0]
        testCase.forEach(item => {
            expect(() => fizzBuzz.validateInputNumber(item)).to.throw(`entered number is [${item}], which does not meet rule, entered number should be between 1 to 100.`)
        })
    })
})