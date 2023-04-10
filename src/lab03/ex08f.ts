import { getNumberOfDigits } from "./ex08a";

export function getSumOfOddDigitsOfNumber(value: number): number {

    let numberOfDigits: number = getNumberOfDigits(value);
    let sumOfOddDigits: number = 0;

    for (let i = 0; i < numberOfDigits; i++) {

        let digit: number = Math.trunc((value / 10 ** i) % 10);

        if (digit % 2 != 0)
            sumOfOddDigits += digit;
    }

    return sumOfOddDigits;
}