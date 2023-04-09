import { getNumberOfDigits } from "./ex08a";

export function getSumOfOddDigitsOfNumber(value: number): number {
    if (!Number.isInteger(value))
        throw new RangeError('Number must be integer');

    let numberOfDigits: number = getNumberOfDigits(value);
    let sumOfOddDigits: number = 0;

    for (let i = 0; i < numberOfDigits; i++) {

        let digit: number = Math.abs(Math.trunc((value / 10 ** i) % 10));

        if (digit % 2 != 0)
            sumOfOddDigits += digit;
    }

    return sumOfOddDigits;
}