import { getPrimeNumbersInArray } from "./ex13g";

export function getPrimeNumbersOfMatrix(matrix: number[][]): number[] {

    let elementsOfMatrix: number[] = [];

    for (let i = 0; i != matrix.length; i++)
        for (let j = 0; j != matrix[i].length; j++)
            elementsOfMatrix.push(matrix[i][j]);

    let primeNumbersOfMatrix: number[] = getPrimeNumbersInArray(elementsOfMatrix);

    return primeNumbersOfMatrix;
}