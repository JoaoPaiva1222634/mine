function separateEvenAndOddNumbers(numberSequence: number[]): number[][] {
    let checkNumbers: number[] = numberSequence.filter((number) => number > 9 || number < -9);
    if (checkNumbers.length != 0)
        throw new RangeError('Numbers in sequence must have only one digit');

    let oddNumbers: number[] = [];
    let evenNumbers: number[] = [];
    let result: number[][] = [oddNumbers, evenNumbers];

    for (let i = 0; i < numberSequence.length; i++) {
        if (numberSequence[i] % 2 == 0) {
            evenNumbers.push(numberSequence[i])
        } else {
            oddNumbers.push(numberSequence[i]);
        }
    }

    return result;
}