import { getNumberOfDigits } from "../lab03/ex08a";

/**
 * 
 * @param value Entry value number
 * @returns The number of digits of the entry value
 */

export function getNumberOfDigitsLab4(value: number): number {

    if (!Number.isInteger(value) || value < 0)
        throw new RangeError('Number must be a positive integer');

    let numberOfDigitsLab4: number = getNumberOfDigits(value);

    return numberOfDigitsLab4;
}