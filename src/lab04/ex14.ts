/*function checkIfAllColumnsAreEqual(array: number[][]): number {

    let numberOfColumns: number = -1;
    let allColumnsAreEqual: boolean = true;

    for (let i = 0, j = 1; j < array.length && allColumnsAreEqual == true; i++, j++) {
        if (array[i].length == array[j].length) {
            if (j == array.length - 1)
                numberOfColumns = array[i].length;
        } else {
            allColumnsAreEqual = false;
        }
    }

    return numberOfColumns;
}*/

/**
 * 
 * @param matrix entry matrix of numbers
 * @returns the number of columns if they all have the same number or -1 if they have different lengths
 */

export function checkIfAllColumnsAreEqual(matrix: number[][]): number {

    let numberOfColumns: number = -1;

    for (let i = 0, j = 1; j < matrix.length && matrix[i].length == matrix[j].length; i++, j++) {

        if (j == matrix.length - 1) {
            numberOfColumns = matrix[i].length;
        }
    }

    return numberOfColumns;
}