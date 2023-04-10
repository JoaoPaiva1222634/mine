import { getNumberOfDigits } from "./ex08a";
import { getSumOfDigitsOfNumber } from "./ex08d";

export function getAverageOfDigitsOfNumber(value: number): number {

    let numberOfDigits: number = getNumberOfDigits(value);
    let sumOfDigits: number = getSumOfDigitsOfNumber(value);
    let digitsAverage: number = sumOfDigits / numberOfDigits;

    return digitsAverage;
}