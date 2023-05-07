import { checkIfMatrixIsSquare } from "./ex15";

export function getMaskMatrix(matrix: string[][], letter: string): number[][] {

    let maskMatrix: number[][] = [[]];

    if (checkIfMatrixIsSquare(matrix)) {
        maskMatrix = new Array(matrix.length);

        for (let i = 0; i != matrix.length; i++) {

            maskMatrix[i] = new Array(matrix[i].length);

            for (let j = 0; j != matrix[i].length; j++) {

                if (matrix[i][j] == letter) {
                    maskMatrix[i][j] = 1;
                } else {
                    maskMatrix[i][j] = 0;
                }

            }
        }
    }

    return maskMatrix;
}

console.table(getMaskMatrix([['a','b','c'], ['d', 'e', 'f'], ['g', 'f', 'i']], "f"))
