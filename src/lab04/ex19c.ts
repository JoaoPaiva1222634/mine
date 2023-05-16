import { checkIfAllColumnsAreEqual } from "./ex14";

export function getProductOfTwoMatrices(matrixA: number[][], matrixB: number[][]): number[][] {

    let productOfTwoMatrices: number[][] = [[]];

    if (checkIfAllColumnsAreEqual(matrixB) && matrixA.length === matrixB[0].length) {

        let product: number = 0;

        productOfTwoMatrices = new Array(matrixA.length)

        for (let i = 0; i != matrixA.length; i++) {
            productOfTwoMatrices[i] = [];

            for (let j = 0; j != matrixA[i].length; j++) {
                product = multiplyRowPerColumn(product, matrixB, matrixA, i, j);

                productOfTwoMatrices[i][j] = product;
            }
        }
    }

    return productOfTwoMatrices;
}

function multiplyRowPerColumn(product: number, matrixB: number[][], matrixA: number[][], i: number, j: number) {
    product = 0;

    for (let k = 0; k < matrixB.length; k++) {
        product = product + matrixA[i][k] * matrixB[k][j];
    }
    return product;
}
