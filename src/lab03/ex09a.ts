import { getReverseOfNumber } from "./ex08j";
import { getNumberOfDigits } from "./ex08a";

export function checkIfNumberIsPalindrome(value: number): boolean {

    if (getNumberOfDigits(value) < 2)
        throw new RangeError('Value must be a number with at least two digits');

    let reversedValue: number = getReverseOfNumber(value);
    let result = false

    if (value == reversedValue)
        result = true;

    return result;
}