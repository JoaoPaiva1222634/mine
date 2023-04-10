import { getReverseOfNumber } from "./ex08j";

function checkIfNumberIsPalindrome(value: number): boolean {

    if (value > -9 && value < 9)
        throw new RangeError('Value must be a number with at least two digits')

    let reversedValue: number = getReverseOfNumber(value);
    let result = false

    if (value == reversedValue)
        result = true;

    return result;
}