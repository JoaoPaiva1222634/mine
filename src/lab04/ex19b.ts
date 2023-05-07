export function getSumOfTwoMatrices(matrixA: number[][], matrixB: number[][]): number[][] {

    let sumOfTwoMatrices: number[][] = [[]];
    let loopStop: boolean = false;

    if (matrixA.length == matrixB.length) {

        sumOfTwoMatrices = new Array(matrixA.length);

        for (let i = 0; i != matrixA.length && !loopStop; i++) {

            if (matrixA[i].length == matrixB[i].length) {

                sumOfTwoMatrices[i] = new Array(matrixA[i].length);

                for (let j = 0; j != matrixA[i].length; j++) {
                    sumOfTwoMatrices[i][j] = matrixA[i][j] + matrixB[i][j]
                }
                
            } else {

                sumOfTwoMatrices[i] = new Array();
                sumOfTwoMatrices = [[]];
                loopStop = true;
            }
        }
    }

    return sumOfTwoMatrices;
}