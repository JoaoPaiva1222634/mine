/*import { getNumberOfDigits } from "./ex08a";

export function getSumOfEvenDigitsOfNumber(value: number): number {
    
    let numberOfDigits: number = getNumberOfDigits(value);
    let sumOfEvenDigits: number = 0;

    for (let i = 0; i < numberOfDigits; i++) {

        let digit: number = Math.trunc((value / 10 ** i) % 10);

        if (digit % 2 == 0)
            sumOfEvenDigits += digit;
    }

    return sumOfEvenDigits;
}
*/

//ALTERNATIVE SOLUTION TO IMPROVE MUTATION SCORE

export function getSumOfEvenDigitsOfNumber(value: number): number {

    if (!Number.isInteger(value))
        throw new RangeError('Number must be integer');

    let valueDividedByTen: number = value;
    let sumOfEvenDigits: number = 0;
    let digit: number = 0;

    for (let i = 0; valueDividedByTen != 0; i++) {

        digit = Math.trunc((value / 10 ** i) % 10);
        valueDividedByTen = Math.trunc(valueDividedByTen / 10);

        if (digit % 2 == 0)
            sumOfEvenDigits += digit;
    }

    return sumOfEvenDigits;
}