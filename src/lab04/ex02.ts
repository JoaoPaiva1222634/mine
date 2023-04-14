import { getNumberOfDigitsLab4 } from "./ex01";

export function getDigitsOfNumberIntoArray(value: number): number[] {
    let array: number[] = [];
    let numberOfDigits: number = getNumberOfDigitsLab4(value);
    let valueDividedByTen: number = value;
    let i: number = 0;
    let digit: number = 0;
    let arrayPosition: number = numberOfDigits - 1;

    for (; i != numberOfDigits; i++) {
        valueDividedByTen = Math.trunc(value / 10 ** i)
        digit = valueDividedByTen % 10;
        array[arrayPosition] = digit;
        arrayPosition--

    }

    return array;
}