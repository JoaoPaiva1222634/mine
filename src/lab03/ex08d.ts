export function getSumOfDigitsOfNumber(value: number): number {
    if (value != Math.trunc(value))
        throw new RangeError('Number must be integer');

    let valueAsString: string = value.toString();
    let numberOfDigits: number = value.toString().length;
    let sum: number = 0;

    for (let i = 0; i < numberOfDigits; i++) {

        let digit: number = parseInt(valueAsString[i]);
        sum += digit
    }

    return sum;
}