import { getNumberOfDigits } from "./ex08a";

export function checkIfValueIsAnArmstrongNumber(value: number) {
    
    let numberOfDigits: number = getNumberOfDigits(value);
    let sumOfDigitsToThePower: number = 0;
    let result: boolean = false;

    for (let i = 0; i < numberOfDigits; i++) {
        let digit: number = Math.trunc(value / 10 ** i) % 10;
        sumOfDigitsToThePower += Math.pow(digit, numberOfDigits);

        if (sumOfDigitsToThePower == value)
            result = true;
    }

    return result;
}