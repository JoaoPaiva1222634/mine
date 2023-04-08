export function getNumberOfMultiplesOfTwoNumbersInInterval(num1: number, num2: number, intervalStart: number, intervalEnd: number): number {
    if (intervalStart < 0)
        throw new RangeError('Interval start must not be negative');

    if (num1 != Math.trunc(num1) || num2 != Math.trunc(num2))
        throw new RangeError('Numbers must be integers');

    if (num1 == num2)
        throw new RangeError('numbers must be different from each other')

    let numberOfMultiples: number = 0;

    for (let i = intervalStart; i <= intervalEnd; i++) {
        if ((i % num1 == 0 || i % num2 == 0) && i != 0) {
            numberOfMultiples = numberOfMultiples + 1;
        }
    }

    return numberOfMultiples;
}