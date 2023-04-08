import { checkIfValueIsAnArmstrongNumber } from "./ex09b";

function getNumberOfArmstrongNumbersInInterval(intervalStart: number, intervalEnd: number): number {
    let count: number = 0;

    for (let i = intervalStart; i <= intervalEnd; i++) {
        if (checkIfValueIsAnArmstrongNumber(i) == true)
            count++
    }

    return count;
}