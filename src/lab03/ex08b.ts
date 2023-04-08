export function getNumberOfEvenDigits(value: number): number {
    if (value != Math.trunc(value)) {
        throw new RangeError('Number must be integer');
    }

    let valueAsString: string = value.toString();
    let numberOfDigits: number = value.toString().length;
    let digit: number = 0;
    let even: number = 0;

    for (let i = 0; i < numberOfDigits; i++) {
        digit = parseInt(valueAsString[i]);

        if (digit % 2 == 0) {
            even++;
        }
    }

    return even;
}