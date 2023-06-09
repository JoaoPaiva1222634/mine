import { getDigitsOfNumberIntoArray } from "./ex02";
import { getOddNumbersOfArray } from "./ex05";

/**
 * 
 * @param value Entry value
 * @returns Sum of the odd digits of entry value
 */

export function getSumOfOddDigitsOfNumber(value: number): number {

    let sumOfOddDigitsOfNumber: number = 0;
    let oddDigits: number[] = getOddNumbersOfArray(getDigitsOfNumberIntoArray(value));
    let digit: number = 0;

    for (let i = 0; i != oddDigits.length; i++) {

        digit = oddDigits[i];
        sumOfOddDigitsOfNumber += digit;
    }

    return sumOfOddDigitsOfNumber;
}