import { getReverseOfNumber } from "./ex08j";
import { getNumberOfDigits } from "./ex08a";

export function getFirstPalindromOfInterval(intervalStart: number, intervalEnd: number): number {

    let firstPalindrome: number = 0;

    if (intervalStart <= -11 || intervalEnd >= 11) {

        for (let i = intervalStart; i <= intervalEnd; i++) {
            let reversedNumber: number = getReverseOfNumber(i);

            if (i == reversedNumber && getNumberOfDigits(i) > 1) {
                firstPalindrome = i;
                break;
            }
        }
    } else {
        return -1;
    }

    return firstPalindrome;
}