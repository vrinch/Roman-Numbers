function run(n) {
    // Define Roman numeral symbols and their values
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    // Initialize the result string
    let result = '';

    // Iterate over the Roman numeral values and symbols
    for (const { value, symbol } of romanNumerals) {
        // Determine how many times the symbol can be used
        while (n >= value) {
            result += symbol;
            n -= value;
        }
    }

    return result;
}

module.exports = { run };
