import { checkIfMatrixIsSquare } from "./ex15";

export function getInverseMatrix(matrix: number[][]): number[][] {

    let inverseMatrix: number[][] = [[]];

    if (checkIfMatrixIsSquare(matrix)) {

    }






    return inverseMatrix
}



function obtainMinor(matrix: string[][]): string[][] {

    let minorMatrix: string[][] = [[]];
    let index: number = 0;
    let i: number = 0;
    let j: number = 0;

    for (let k = 0; k != matrix.length; k++) {
        for (let l = 0; l != matrix[k].length; l++)
            if (i != 0 && j != i) {
                minorMatrix[index].push(matrix[k][l]);
                index++;
            }
        i++;
        j++;
    }

    return minorMatrix;
}

console.log(obtainMinor([['A00', 'A01', 'A02'], ['A10', 'A11', 'A12'], ['A20', 'A21', 'A22']]))

