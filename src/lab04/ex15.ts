/**
 * 
 * @param matrix entry matrix 
 * @returns returns true if the matrix is square or false if it isn't
 */

export function checkIfMatrixIsSquare(matrix: any[][]): boolean {

    let matrixIsSquare: boolean = false;

    for (let i = 0; i != matrix.length && matrix.length == matrix[i].length; i++) {
        if (i == matrix.length - 1)
            matrixIsSquare = true;
    }

    return matrixIsSquare;
}