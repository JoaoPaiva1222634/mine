export function getSecondaryDiagonalOfMatrix(matrix: number[][]): number[] {

    let secondaryDiagonalOfMatrix: number[] = [];

    for (let i = 0; i != matrix.length; i++) {
        for (let j = 0; j != matrix[i].length; j++) {

            if (i + j == matrix.length - 1)
                secondaryDiagonalOfMatrix.push(matrix[i][j])
        }
    }

    return secondaryDiagonalOfMatrix;
}