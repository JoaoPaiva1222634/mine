import { getNumberOfDigits } from "./ex08a";
import { getReverseOfNumber } from "./ex08j";

export function getNumberOfPalindromesOfInterval(intervalStart: number, intervalEnd: number): number {

    let numberOfPalindromes: number = 0;

    for (let i = intervalStart; i <= intervalEnd; i++) {
        let reversedNumber: number = getReverseOfNumber(i);

        if (i == reversedNumber && getNumberOfDigits(i) > 1) {
            numberOfPalindromes++
        }
    }

    return numberOfPalindromes;
}