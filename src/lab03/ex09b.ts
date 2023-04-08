export function checkIfValueIsAnArmstrongNumber(value: number) {
    let valueIntoString: string = value.toString();
    let numberOfDigits: number = valueIntoString.length;
    let sumOfDigitsToThePower: number = 0;
    let result: boolean = false;

    for (let i = 0; i < numberOfDigits; i++) {
        let digit: number = parseInt(valueIntoString[i]);
        sumOfDigitsToThePower += Math.pow(digit, numberOfDigits);

        if (sumOfDigitsToThePower == value)
            result = true;
    }

    return result;
}