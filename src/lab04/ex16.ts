import { checkIfAllColumnsAreEqual } from "./ex14";

export function checkIfMatrixIsRectangular(matrix: number[][]): boolean {

    let matrixIsRectangular: boolean = false;

    if (checkIfAllColumnsAreEqual(matrix) != -1 && matrix.length != matrix[0].length)
        matrixIsRectangular = true;

    return matrixIsRectangular;
}