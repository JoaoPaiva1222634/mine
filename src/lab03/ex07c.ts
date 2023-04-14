export function getSumOfOddNumbersInInterval(intervalStart: number, intervalEnd: number): number {
    let sumOfOddNumbersInInterval: number = 0;

    for (let i = intervalStart; i <= intervalEnd; i++) {

        if (i % 2 != 0)
            sumOfOddNumbersInInterval = sumOfOddNumbersInInterval + i;
    }

    return sumOfOddNumbersInInterval;
}