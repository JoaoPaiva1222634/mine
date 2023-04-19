/**
 * 
 * @param array Entry array of numbers
 * @returns Array with only the odd numbers of the entry array
 */

export function getOddNumbersOfArray(array: number[]): number[] {

    for (let j = 0; j != array.length; j++) {
        if (!Number.isInteger(array[j]))
            throw new RangeError('Array must have only integer numbers')
    }

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