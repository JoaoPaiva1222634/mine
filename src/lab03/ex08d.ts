/*
import { getNumberOfDigits } from "./ex08a";

export function getSumOfDigitsOfNumber(value: number): number {

    let numberOfDigits: number = getNumberOfDigits(value);
    let sum: number = 0;

    for (let i = 0; i < numberOfDigits; i++) {
        let digit: number = Math.trunc((value / 10 ** i) % 10); //NEVER INITIALIZE VARIABLES INSIDE LOOPS. VARIABLE WILL INITIALIZE EVERYTIME THE LOOP RUNS.
        sum += digit;
    }

    return sum;
}*/

//Alternative code to improve mutation score

export function getSumOfDigitsOfNumber(value: number): number {

    if (!Number.isInteger(value))
        throw new RangeError('Number must be integer');

    let valueDividedByTen: number = value;
    let digit: number = 0;
    let sum: number = 0;

    do {
        digit = Math.trunc(valueDividedByTen % 10);
        valueDividedByTen = Math.trunc(valueDividedByTen / 10);
        sum += digit;
    } while (Math.trunc(valueDividedByTen) != 0)

    return sum;
}