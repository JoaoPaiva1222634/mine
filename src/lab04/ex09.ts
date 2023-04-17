export function getMultiplesOf3InInterval(intervalStart: number, intervalEnd: number): number[] {

    let multiplesOf3InInterval: number[] = [];
    let position: number = 0;

    for (let i = intervalStart; i <= intervalEnd; i++) {

        if (i % 3 == 0) {
            multiplesOf3InInterval[position] = i;
            position++
        }
    }

    return multiplesOf3InInterval;
}