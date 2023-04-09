import { getNumberOfDigits } from "./ex08a";

export function getNumberOfOddDigits(value: number): number {
    if (!Number.isInteger(value))
        throw new RangeError('Number must be integer');

    let numberOfDigits: number = getNumberOfDigits(value);
    let digit: number = 0;
    let odd: number = 0;

    for (let i = 0; i < numberOfDigits; i++) {

        digit = Math.trunc((value / 10**i) % 10);

        if (digit % 2 != 0) {
            odd++;
        }
    }

    return odd;
}