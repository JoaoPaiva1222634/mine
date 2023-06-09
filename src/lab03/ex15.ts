import { getNumberOfDigits } from "./ex08a";

export function checkIfCcNumberIsValid(idNumber: number, checkNumber: number): boolean {

    if (getNumberOfDigits(idNumber) != 8)
        throw new RangeError('ID Number must have 8 digits');

    let result: boolean = false;
    let numberVerification: number = 0;
    let valueDividedByTen: number = idNumber;
    let digit: number = 0;

    for (let i = 0, j = 2; i != 8; i++, j++) {
        valueDividedByTen = valueDividedByTen / 10**i;
        digit = Math.trunc(valueDividedByTen % 10);
        numberVerification += digit * j;
    }

    if ((numberVerification + checkNumber) % 11 == 0)
        result = true;

    return result
}