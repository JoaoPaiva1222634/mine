export function getProductOfMatrixByConstant(matrix: number[][], constant: number): number[][] {

    let productOfMatrixByConstant: number[][] = [];
    let matrixRow: number[] = [];

    for (let i = 0; i != matrix.length; i++) {

        matrixRow = [];

        for (let j = 0; j != matrix[i].length; j++) {

            matrixRow[j] = matrix[i][j] * constant;
        }
        productOfMatrixByConstant[i] = matrixRow;
    }

    return productOfMatrixByConstant;
}