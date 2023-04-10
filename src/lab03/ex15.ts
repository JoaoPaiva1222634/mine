import { getNumberOfDigits } from "./ex08a";

function checkIfCcNumberIsValid(idNumber: number, checkNumber: number): boolean {

    if (getNumberOfDigits(idNumber) != 8)
        throw new RangeError('ID Number must have 8 digits');

    let result: boolean = false;
    let numberVerification: number = 0;

    for (let i = 0, j = 2; i <= 7; i++, j++) {
        let digit: number = Math.trunc(idNumber / (10 ** i)) % 10;
        numberVerification += digit * j;
    }

    if ((numberVerification + checkNumber) % 11 == 0)
        return true;

    return result
}