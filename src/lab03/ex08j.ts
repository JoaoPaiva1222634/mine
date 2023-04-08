function getReverseOfDecreasingNumber(value: number) {
    if (value != Math.trunc(value))
        throw new RangeError('Value must be an integer number');

    let valueAsString: string = value.toString();
    let numberOfDigits: number = valueAsString.length;
    let valueSplitIntoArray: string[] = valueAsString.split("")
    let reversedNumber: number = -1;
    let count: number = 0;

    for (let i = 0; i < numberOfDigits - 1; i++) {

        if (valueAsString[i] > valueAsString[i + 1]) {
            count++
        }

        if (count == numberOfDigits - 1) {
            let reversedString: string[] = valueSplitIntoArray.reverse();
            reversedNumber = parseInt(reversedString.join(""));
        }
    }

    return reversedNumber;
}