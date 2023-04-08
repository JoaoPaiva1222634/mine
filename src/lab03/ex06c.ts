export function getNumberOfMultiplesOF3And5InInterval(intervalStart: number, intervalEnd: number): number {
    if (intervalStart < 0)
        throw new RangeError('Interval start must not be negative');

    let numberOfMultiples: number = 0;

    for (let i = intervalStart; i <= intervalEnd; i++) {
        if (i % 3 == 0 && i % 5 == 0 && i != 0) {
            numberOfMultiples = numberOfMultiples + 1;
        }
    }


    return numberOfMultiples;
}