/*export function getFirstNNumbersOfAnArray(array: number[], n: number): number[] {

    let nArray: number[] = [];

    for (let i = 0; i < n; i++) {

        nArray[i] = array[i];
    }

    return nArray;
}*/

/**
 * 
 * @param array Entry array
 * @param n Number of values of entry array to return
 * @returns Array with first n number of values of entry array
 */

export function getFirstNNumbersOfAnArray(array: number[], n: number): number[] {

    let nArray: number[] = new Array(n); //defines length of array

    for (let i = 0; i < nArray.length; i++) {

        nArray[i] = array[i];
    }

    return nArray;
}