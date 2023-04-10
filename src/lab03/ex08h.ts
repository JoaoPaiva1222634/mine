import { getSumOfEvenDigitsOfNumber } from "./ex08e";
import { getNumberOfEvenDigits } from "./ex08b";

export function getAverageOfEvenDigitsOfNumber(value: number): number {

    let numberOfEvenDigits: number = getNumberOfEvenDigits(value);

    if (numberOfEvenDigits == 0)
        return 0;

    let sumOfEvenDigits: number = getSumOfEvenDigitsOfNumber(value);
    let evenDigitsAverage: number = sumOfEvenDigits / numberOfEvenDigits;

    return evenDigitsAverage;
}