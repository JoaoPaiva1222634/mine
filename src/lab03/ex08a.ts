export function getNumberOfDigits(value: number): number {
    if (value != Math.trunc(value))
        throw new RangeError('Number must be integer');

    let receivedNumber = value;
    let numberOfDigits: number = 0;
    let valueDividedByTen: number = 0;

    do {
        valueDividedByTen = receivedNumber /= 10;
        numberOfDigits++;
    } while (Math.trunc(valueDividedByTen) != 0)

    return numberOfDigits;
}