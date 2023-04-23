export function getAverageValueOfElementsOfMatrix(matrix: number[][]): number {

    let sumOfValuesOfMatrix: number = 0;
    let numberOfElementsOfMatrix: number = 0;

    for (let i = 0; i != matrix.length; i++) {
        for (let j = 0; j != matrix[i].length; j++) {
            sumOfValuesOfMatrix = sumOfValuesOfMatrix + matrix[i][j];
            numberOfElementsOfMatrix++;
        }
    }

    let averageValueOfElementsOfMatrix: number = sumOfValuesOfMatrix / numberOfElementsOfMatrix

    return averageValueOfElementsOfMatrix;
}