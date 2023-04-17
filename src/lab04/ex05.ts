/**
 * 
 * @param array Entry array of numbers
 * @returns Array with only the odd numbers of the entry array
 */

export function getOddNumbersOfArray(array: number[]): number[] {

    let oddNumbersOfArray: number[] = [];
    let position: number = 0;

    for (let i = 0; i != array.length; i++) {
        if (array[i] % 2 != 0) {
            oddNumbersOfArray[position] = array[i];
            position++
        }
    }

    return oddNumbersOfArray;
}