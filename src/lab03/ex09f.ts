import { checkIfValueIsAnArmstrongNumber } from "./ex09b";

export function getFirstArmstrongNumberOfInterval(intervalStart: number, intervalEnd: number): number {
    if (intervalStart < 0 || intervalEnd < 0)
        throw new RangeError('It must be an interval of positive numbers')

    let firstArmstrongNumberOfInterval: number = 0;

    for (let i = intervalStart; i <= intervalEnd; i++) {
        if (checkIfValueIsAnArmstrongNumber(i) == true) {
            firstArmstrongNumberOfInterval = i;
            break;
        }
    }

    return firstArmstrongNumberOfInterval;
}