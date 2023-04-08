export function getNumberOfDigits(value: number): number {
    if (value != Math.trunc(value))
        throw new RangeError('Number must be integer');

    let numberOfDigits: number = value.toString().length;

    return numberOfDigits;
}