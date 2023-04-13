export function getSumOfDigitsOfNumber(value: number): number {

    if (!Number.isInteger(value))
        throw new RangeError('Number must be integer');

    let valueDividedByTen: number = value;
    let sum: number = 0;
    let digit: number = 0;

    for (let i = 0; valueDividedByTen != 0; i++) {
        digit = Math.trunc((value / 10 ** i) % 10); //NEVER INITIALIZE VARIABLES INSIDE LOOPS. VARIABLE WILL INITIALIZE EVERYTIME THE LOOP RUNS.
        valueDividedByTen = Math.trunc(valueDividedByTen / 10);
        sum += digit;
    }

    return sum;
}