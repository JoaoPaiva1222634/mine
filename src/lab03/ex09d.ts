import { getReverseOfNumber } from "./ex08j";
import { getNumberOfDigits } from "./ex08a";

export function getBiggestPalindromOfInterval(intervalStart: number, intervalEnd: number): number {
    
    let biggestPalindrome: number = 0;

    if (intervalStart <= -11 || intervalEnd >= 11) {

        for (let i = intervalStart; i <= intervalEnd; i++) {
            let reversedNumber: number = getReverseOfNumber(i);

            if (i == reversedNumber && getNumberOfDigits(i) > 1) {
                biggestPalindrome = i;
            }
        }
    } else {
        return -1;
    }

    return biggestPalindrome;
}