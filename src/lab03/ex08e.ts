export function getSumOfEvenDigitsOfNumber(value: number): number {
    if (value != Math.trunc(value))
        throw new RangeError('Number must be integer');

    let valueAsString: string = value.toString();
    let numberOfDigits: number = value.toString().length;
    let sumOfEvenDigits: number = 0;

    for (let i = 0; i < numberOfDigits; i++) {

        let digit: number = parseInt(valueAsString[i]);

        if (digit % 2 == 0)
            sumOfEvenDigits += digit;
    }

    return sumOfEvenDigits;
}