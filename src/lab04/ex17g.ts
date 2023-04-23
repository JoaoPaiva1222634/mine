export function getPrimaryDiagonalOfMatrix(matrix: number[][]): number[] {

    let primaryDiagonalOfMatrix: number[] = [];

    for (let i = 0; i != matrix.length; i++) {
        for (let j = 0; j != matrix[i].length; j++) {

            if (i == j)
                primaryDiagonalOfMatrix.push(matrix[i][j])
        }
    }

    return primaryDiagonalOfMatrix;
}