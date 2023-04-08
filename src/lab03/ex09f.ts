import { checkIfValueIsAnArmstrongNumber } from "./ex09b";

function getFirstArmstrongNumberOfInterval(intervalStart: number, intervalEnd: number): number {
    let result: number = -1;

    for (let i = intervalStart; i <= intervalEnd; i++) {
        if (checkIfValueIsAnArmstrongNumber(i) == true) {
            result = i;
            break;
        }
    }

    return result;
}