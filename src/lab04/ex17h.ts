import { checkIfAllColumnsAreEqual } from "./ex14";

/**
 * 
 * @param matrix entry matrix
 * @returns the values of the secondary diagonal if the matrix is either square or rectangular
 */

export function getSecondaryDiagonalOfMatrix(matrix: number[][]): number[] {

    let secondaryDiagonalOfMatrix: number[] = [];

    if (checkIfAllColumnsAreEqual(matrix) != -1) {

        for (let i = 0; i != matrix.length; i++) {
            for (let j = 0; j != matrix[i].length; j++) {

                if (i + j == matrix.length - 1)
                    secondaryDiagonalOfMatrix.push(matrix[i][j])
            }
        }
    }

    return secondaryDiagonalOfMatrix;
}