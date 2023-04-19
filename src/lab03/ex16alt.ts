//ALTERNATE SOLUTION WAS NOT SUPOSED TO USE METHODS OF ARRAYS

export function separateEvenAndOddNumbers(numberSequence: number[]): number[][] {

    let result: number[][] = [[], []];
    let even: number = 1;
    let evenIndex: number = 0;
    let odd: number = 0;
    let oddIndex: number = 0;

    for (let i = 0; i != numberSequence.length; i++) {

        if (numberSequence[i] % 2 == 0) {
            result[even][evenIndex] = numberSequence[i];
            evenIndex++
        } else {
            result[odd][oddIndex] = numberSequence[i];
            oddIndex++
        }
    }

    return result;
}