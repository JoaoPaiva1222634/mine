/**
 * 
 * @param matrix entry matrix 
 * @returns returns true if the matrix is square or false if it isn't
 */

export function checkIfMatrixIsSquare(matrix: number[][]): boolean {

    let matrixIsSquare: boolean = false;

    for (let i = 0, j = 1; j < matrix.length && matrix[i].length == matrix[j].length; i++, j++) {
        if (j == matrix.length - 1 && matrix.length == matrix[0].length)
            matrixIsSquare = true;
    }

    return matrixIsSquare;
}