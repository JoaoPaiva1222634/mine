import { getNumberOfDigits } from "./ex08a";
import { getReverseOfNumber } from "./ex08j";

function getNumberOfPalindromesOfInterval(intervalStart: number, intervalEnd: number): number {
    if (intervalStart > -11 && intervalEnd < 11)
        throw new RangeError('Interval must contain at least one palindrome')

    let numberOfPalindromes: number = 0;

    for (let i = intervalStart; i <= intervalEnd; i++) {
        let reversedNumber: number = getReverseOfNumber(i);

        if (i == reversedNumber && getNumberOfDigits(i) > 1) {
            numberOfPalindromes++
        }
    }

    return numberOfPalindromes;
}