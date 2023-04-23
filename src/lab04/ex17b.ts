/**
 * 
 * @param matrix entry matrix
 * @returns the highest number of the matrix
 */

export function getHighestNumberOfMatrix(matrix: number[][]): number {

    let highestNumberOfMatrix: number = matrix[0][0];

    for (let i = 0; i != matrix.length; i++) {
        for (let j = 0; j != matrix[i].length; j++)
            if (matrix[i][j] > highestNumberOfMatrix)
                highestNumberOfMatrix = matrix[i][j];
    }


    return highestNumberOfMatrix;
}