export function getNumberClassification(value: number): number {
    if (value < 0)
        throw new RangeError('Value must be a positive number')

    if (!Number.isInteger(value))
        throw new RangeError('Value must be an integer number')

    let result: number = 0;
    let sumOfDivisors: number = 0;

    for (let i = 0; i < value; i++) {
        if (value % i == 0)
            sumOfDivisors += i;
    }

    if (value < sumOfDivisors) {
        result = 1;
    } else if (value > sumOfDivisors) {
        result = -1;
    }

    return result;
}