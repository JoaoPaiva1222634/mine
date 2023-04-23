import { getNonRepeatingElementsOfArray } from "./ex13e";

export function getNonRepeatingElementsOfMatrix(matrix: number[][]): number[] {

    let elementsOfMatrix: number[] = [];

    for (let i = 0; i != matrix.length; i++)
        for (let j = 0; j != matrix[i].length; j++)
            elementsOfMatrix.push(matrix[i][j]);

    let nonRepeatingElementsOfMatrix: number[] = getNonRepeatingElementsOfArray(elementsOfMatrix);

    return nonRepeatingElementsOfMatrix;
}