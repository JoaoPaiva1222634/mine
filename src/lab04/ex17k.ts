import { checkIfAllColumnsAreEqual } from "./ex14";

export function getTransposedMatrix(matrix: number[][]): number[][] {

    let transposedMatrix: number[][] = [[]];

    if (checkIfAllColumnsAreEqual(matrix) != -1) {

        let matrixRow: number[] = [];

        for (let i = 0; i != matrix[0].length; i++) {

            matrixRow = [];

            for (let j = 0; j != matrix.length; j++) {
                matrixRow[j] = matrix[j][i];
            }
            transposedMatrix[i] = matrixRow;
        }
    }

    return transposedMatrix;
}