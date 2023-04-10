import { getNumberOfDigits } from "./ex08a";

export function getSumOfDigitsOfNumber(value: number): number {

    let numberOfDigits: number = getNumberOfDigits(value);
    let sumOfDigitsOfNumber: number = 0;

    for (let i = 0; i < numberOfDigits; i++) {

        let digit: number = Math.trunc((value / 10 ** i) % 10);
        sumOfDigitsOfNumber += digit
    }

    return sumOfDigitsOfNumber;
}