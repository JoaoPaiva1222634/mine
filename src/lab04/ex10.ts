/**
 * 
 * @param intervalStart Initial value of the interval
 * @param intervalEnd Final value of the interval
 * @param n Number to check if numbers in interval are multiples of
 * @returns Array of numbers that are multiples of n
 */

export function getMultiplesOfNInInterval(intervalStart: number, intervalEnd: number, n: number): number[] {

    let multiplesOfNInInterval: number[] = [];
    let position: number = 0;

    for (let i = intervalStart; i <= intervalEnd; i++) {

        if (i % n == 0) {
            multiplesOfNInInterval[position] = i;
            position++
        }
    }

    return multiplesOfNInInterval;
}