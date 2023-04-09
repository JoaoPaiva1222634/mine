import { getSumOfEvenDigitsOfNumber } from "./ex08e";
import { getNumberOfEvenDigits } from "./ex08b";

export function getAverageOfEvenDigitsOfNumber(value: number): number {
    if (!Number.isInteger(value))
        throw new RangeError('Number must be integer');

    let sumOfEvenDigits: number = getSumOfEvenDigitsOfNumber(value);
    let numberOfEvenDigits: number = getNumberOfEvenDigits(value);
    let evenDigitsAverage: number = sumOfEvenDigits / numberOfEvenDigits;

    return evenDigitsAverage;
}