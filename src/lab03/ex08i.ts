import { getSumOfOddDigitsOfNumber } from "./ex08f";
import { getNumberOfOddDigits } from "./ex08c";

export function getAverageOfOddDigitsOfNumber(value: number): number {
    if (!Number.isInteger(value))
        throw new RangeError('Number must be integer');

    let sumOfOddDigits: number = getSumOfOddDigitsOfNumber(value);
    let numberOfOddDigits: number = getNumberOfOddDigits(value);
    let oddDigitsAverage: number = sumOfOddDigits / numberOfOddDigits;

    return oddDigitsAverage;
}