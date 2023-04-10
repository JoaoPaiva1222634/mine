import { getSumOfOddDigitsOfNumber } from "./ex08f";
import { getNumberOfOddDigits } from "./ex08c";

export function getAverageOfOddDigitsOfNumber(value: number): number {


    let numberOfOddDigits: number = getNumberOfOddDigits(value);

    if (numberOfOddDigits == 0)
        return 0;

    let sumOfOddDigits: number = getSumOfOddDigitsOfNumber(value);
    let oddDigitsAverage: number = sumOfOddDigits / numberOfOddDigits;

    return oddDigitsAverage;
}