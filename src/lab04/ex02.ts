import { getNumberOfDigitsLab4 } from "./ex01";

export function getDigitsOfNumberIntoArray(value: number): number[] {

    let resultArray: number[] = [];
    let numberOfDigits: number = getNumberOfDigitsLab4(value);
    let valueDividedByTen: number = value;
    let digit: number = 0;
    let arrayPosition: number = numberOfDigits - 1;

    for (let i = 0; i != numberOfDigits; i++) {
        valueDividedByTen = Math.trunc(value / 10 ** i)
        digit = valueDividedByTen % 10;
        resultArray[arrayPosition] = digit;
        arrayPosition--

    }

    return resultArray;
}