import { getPrimeNumbersInArray } from "./ex13g";

export function getPrimeNumbersInMatrix2(matrix: number[][]): number[][] {

    let primeNumbers: number[][] = [];

    for (let line: number = 0; line < matrix.length; line++) {

        let isPrime: number[] = getPrimeNumbersInArray(matrix[line])

        primeNumbers.push(isPrime);
    }
   
    return primeNumbers
}