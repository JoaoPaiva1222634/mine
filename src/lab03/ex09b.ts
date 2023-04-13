import { getNumberOfDigits } from "./ex08a";

export function checkIfValueIsAnArmstrongNumber(value: number): boolean {

    if (value < 0)
        throw new RangeError('Number must be positive')

    let digit: number = 0;
    let valueDividedByTen: number = value;
    let numberOfDigits: number = getNumberOfDigits(value);
    let sumOfDigitsToThePower: number = 0;
    let result: boolean = false;

    for (let i = 0; valueDividedByTen != 0; i++) {
        digit = Math.trunc(value / 10 ** i) % 10;
        sumOfDigitsToThePower += Math.pow(digit, numberOfDigits);
        valueDividedByTen = Math.trunc(valueDividedByTen / 10);
    }

    if (sumOfDigitsToThePower == value)
        result = true;

    return result;
}