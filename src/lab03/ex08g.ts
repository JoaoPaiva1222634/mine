export function getAverageOfDigitsOfNumber(value: number): number {
    if (value != Math.trunc(value))
        throw new RangeError('Number must be integer');

    let valueAsString: string = value.toString();
    let numberOfDigits: number = value.toString().length;
    let sumOfDigits: number = 0;
    let digitsAverage: number = 0

    for (let i = 0; i < numberOfDigits; i++) {

        let digit: number = parseInt(valueAsString[i]);

        sumOfDigits += digit;
        digitsAverage = sumOfDigits / numberOfDigits
    }

    return digitsAverage;
}