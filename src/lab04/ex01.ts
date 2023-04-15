import { getNumberOfDigits } from "../lab03/ex08a";

export function getNumberOfDigitsLab4(value: number): number {

    if (!Number.isInteger(value) || value < 0)
        throw new RangeError('Number must be a positive integer');

    let numberOfDigitsLab4: number = getNumberOfDigits(value);

    return numberOfDigitsLab4;
}