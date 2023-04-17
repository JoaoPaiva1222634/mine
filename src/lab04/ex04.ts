/**
 * 
 * @param array Entry array of numbers
 * @returns Array with only the even numbers of entry array
 */

export function getEvenNumbersOfArray(array: number[]): number[] {

    let evenNumbersOfArray: number[] = [];
    let position: number = 0;

    for (let i = 0; i != array.length; i++) {
        if (array[i] % 2 == 0) {
            evenNumbersOfArray[position] = array[i];
            position++
        }
    }

    return evenNumbersOfArray;
}