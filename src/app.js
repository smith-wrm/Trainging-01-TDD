class FizzBuzz {
    printFizzBuzz() {
        const input = [...Array(100).keys()]
        const result = input.map(item => this.printSingleNumber(item + 1))
        return result.join(' ')
    }

    printSingleNumber(input) {
        if(this.isMultipleThree(input) && this.isMultipleFive(input)) {
            return 'FizzBuzz'
        }
        if(this.isMultipleThree(input)) {
            return 'Fizz'
        }
        if (this.isMultipleFive(input)) {
            return 'Buzz'
        }
        return `${input}`
    }

    validateInputNumber(input) {
        if(input > 100 || input < 1) {
            throw new Error(`entered number is [${input}], which does not meet rule, entered number should be between 1 to 100.`)
        }
    }

    isMultipleThree(input) {
        return input % 3 === 0
    }

    isMultipleFive(input) {
        return input % 5 === 0
    }
}

module.exports = FizzBuzz