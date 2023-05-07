import { getPrimeNumbersInArray } from "./ex13g";

export function getPrimeNumbersInMatrix2(matrix: number[][]): number[] {

    let primeNumbers: number[] = [];

    for (let i = 0; i < matrix.length; i++) {
        
        let isPrime: number[] = getPrimeNumbersInArray(matrix[i]);

        pushArray(primeNumbers, isPrime);
    }
    
    return primeNumbers;
}

function pushArray(target: number[], source: any[]): void {
    if (source.length > 0) {
        target.push(source.shift());
        pushArray(target, source);
    }
}