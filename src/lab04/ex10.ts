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