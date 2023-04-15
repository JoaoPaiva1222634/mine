/*export function getFirstNNumbersOfAnArray(array: number[], n: number): number[] {

    let nArray: number[] = [];

    for (let i = 0; i < n; i++) {

        nArray[i] = array[i];
    }

    return nArray;
}*/

export function getFirstNNumbersOfAnArray(array: number[], n: number): number[] {

    let nArray: number[] = new Array(n);

    for (let i = 0; i < nArray.length; i++) {

        nArray[i] = array[i];
    }

    return nArray;
}