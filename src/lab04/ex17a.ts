/**
 * 
 * @param matrix entry matrix
 * @returns returns the lowest value in the matrix
 */

export function getLowestNumberOfMatrix(matrix: number[][]): number {

    let lowestNumberOfMatrix: number = matrix[0][0];

    for (let i = 0; i != matrix.length; i++) {
        for (let j = 0; j != matrix[i].length; j++)
            if (matrix[i][j] < lowestNumberOfMatrix)
                lowestNumberOfMatrix = matrix[i][j];
    }

    return lowestNumberOfMatrix;
}