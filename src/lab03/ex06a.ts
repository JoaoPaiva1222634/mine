export function getNumberOfMultiples(intervalStart: number, intervalEnd: number): number {
    if (intervalStart < 0)
        throw new RangeError('Start must be bigger than 0');

    let numberOfMultiples: number = 0;

    for (let i = intervalStart; i <= intervalEnd; i++) {
        if (i % 3 == 0 && i != 0) {
            numberOfMultiples = numberOfMultiples + 1;
        }
    }

    return numberOfMultiples;
}