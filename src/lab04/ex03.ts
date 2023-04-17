/**
 * 
 * @param array Entry array of numbers
 * @returns Sum of all the numbers in the entry array
 */

export function getSumOfNumbersOfArray(array: number[]): number {

    let sumOfDigitsOfArray: number = 0;

    for (let i = 0; i != array.length; i++) {
        sumOfDigitsOfArray += array[i];
    }

    return sumOfDigitsOfArray;
}