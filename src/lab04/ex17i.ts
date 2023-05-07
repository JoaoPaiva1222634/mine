import { checkIfMatrixIsSquare } from "./ex15";

export function checkIfIsIdentityMatrix(matrix: number[][]): boolean {

    let isIdentityMatrix: boolean = true;
    let i: number = 0;

    if (!checkIfMatrixIsSquare(matrix))
        isIdentityMatrix = false;

    while (i != matrix.length && isIdentityMatrix) {
        for (let j = 0; j != matrix[i].length; j++) {

            if (i != j && matrix[i][j] != 0) {
                isIdentityMatrix = false;
            } else if (i == j && matrix[i][j] != 1) {
                isIdentityMatrix = false;
            }
        }
        i++;
    }

    return isIdentityMatrix;
}