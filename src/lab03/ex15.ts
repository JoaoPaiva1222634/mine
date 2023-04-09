function checkIfCcNumberIsValid(idNumber: number, checkNumber: number): boolean {
    let result: boolean = false;
    let numberVerification: number = 0;
    let idNumberAsString: string = idNumber.toString();

    for (let i = 0, j = 9; i <= 8 + 1; i++, j--) {
        let digit: number = parseInt(idNumberAsString[i]);
        numberVerification += digit * j;

        if ((numberVerification + checkNumber) % 11 == 0)
            return true;
    }

    return result
}