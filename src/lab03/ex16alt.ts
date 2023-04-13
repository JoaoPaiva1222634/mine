//ALTERNATE SOLUTION WAS NOT SUPOSED TO USE METHODS OF ARRAYS

export function separateEvenAndOddNumbers(numberSequence: number[]): number[][] {

    let result: number[][] = [[], []];
    let even: number = 0;
    let odd: number = 0;

    for (let i = 0; i != numberSequence.length; i++) {
        
        if (numberSequence[i] % 2 == 0) {
            result[1][even] = numberSequence[i];
            even++
        } else {
            result[0][odd] = numberSequence[i];
            odd++
        }
    }

    return result;
}