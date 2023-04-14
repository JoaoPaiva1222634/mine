import { getNumberOfDigits } from "../lab03/ex08a";

export function getNumberOfDigitsLab4(value: number): number {

    if (value < 0)
        throw new RangeError('Number must be positive');

    let numberOfDigitsLab4: number = getNumberOfDigits(value);

    return numberOfDigitsLab4;
}