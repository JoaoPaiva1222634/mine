import { getNumberOfDigits } from "./ex08a";

export function getReverseOfDecreasingNumber(value: number): number {

    if (getNumberOfDigits(value) < 2)
        throw new RangeError('Number must have at least two digits')

    let reverseOfIncreasingNumber: number = 0;

    if (checkIfDigitsAreDecreasing(value))
        reverseOfIncreasingNumber = getReverseOfNumber(value);

    return reverseOfIncreasingNumber;
}

//COMMENTED LINES CHANGED TO IMPROVE MUTATION SCORE

export function checkIfDigitsAreDecreasing(value: number): boolean {

    let result: boolean = true;
    //let numberOfDigits: number = getNumberOfDigits(value);
    let valueDividedByTen: number = value; //new solution
    let receivedNumber: number = value;
    let digit: number = 0; // new solution
    let nextDigit: number = 0; //new solution

    //for (let i = 0; i < numberOfDigits; i++) {
    //let digit: number = Math.trunc(value / 10 ** i) % 10;
    //let nextDigit = (Math.trunc(receivedNumber /= 10) % 10);

    for (let i = 0; valueDividedByTen != 0; i++) {
        digit = Math.trunc(value / 10 ** i) % 10;
        nextDigit = (Math.trunc(receivedNumber /= 10) % 10);
        valueDividedByTen = Math.trunc(valueDividedByTen / 10);

        //if (i < numberOfDigits - 1)
        if (valueDividedByTen > 0)
            if (digit >= nextDigit)
                result = false;
    }

    return result;
}

export function getReverseOfNumber(value: number) {

    let numberOfDigits: number = getNumberOfDigits(value);
    let reversedNumber: number = 0;

    for (let i = 0; i < numberOfDigits; i++) {
        let digit: number = Math.trunc((value / 10 ** i)) % 10;
        reversedNumber = reversedNumber * 10 + digit;
    }

    return reversedNumber;
}