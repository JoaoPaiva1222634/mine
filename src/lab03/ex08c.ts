export function getNumberOfOddDigits(value: number): number {
    if (value != Math.trunc(value))
        throw new RangeError('Number must be integer');

    let valueAsString: string = value.toString();
    let numberOfDigits: number = value.toString().length;
    let digit: number = 0;
    let odd: number = 0;

    for (let i = 0; i < numberOfDigits; i++) {

        digit = parseInt(valueAsString[i]);

        if (digit % 2 != 0) {
            odd++;
        }
    }

    return odd;
}