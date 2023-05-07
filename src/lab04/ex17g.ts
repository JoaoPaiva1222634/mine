import { checkIfAllColumnsAreEqual } from "./ex14";

/**
 * 
 * @param matrix entry matrix
 * @returns returns the values of the primary diagonal if the matrix is either square or rectangular
 */

export function getPrimaryDiagonalOfMatrix(matrix: number[][]): number[] {

    let primaryDiagonalOfMatrix: number[] = [];

    if (checkIfAllColumnsAreEqual(matrix) != -1) {

        for (let i = 0; i != matrix.length; i++) {
            for (let j = 0; j != matrix[i].length; j++) {

                if (i == j)
                    primaryDiagonalOfMatrix.push(matrix[i][j])
            }
        }
    }

    return primaryDiagonalOfMatrix;
}