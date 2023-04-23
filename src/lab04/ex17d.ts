export function getProductOfElementsOfMatrix(matrix: number[][]) {

    let productOfElementsOfMatrix: number = 1;

    for (let i = 0; i != matrix.length; i++) {
        for (let j = 0; j != matrix[i].length; j++) {
            productOfElementsOfMatrix *= matrix[i][j];
        }
    }

    return productOfElementsOfMatrix;
}