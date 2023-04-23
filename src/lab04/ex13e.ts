/**
 * 
 * @param array entry array of numbers to check 
 * @returns returns the numbers that don't repeat themselves
 

export function getNonRepeatingElementsOfArray(array: number[]): number[] {

    let nonRepeatingElementsOfArray: number[] = [];

    let count: number = 0;

    for (let j = 0; j < array.length; j++) {
        count = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] == array[j])
                count++;
        }

        if (count == 1)
            nonRepeatingElementsOfArray.push(array[j]);
    }

    return nonRepeatingElementsOfArray;
}
*/

//Alternate solution

/**
 * 
 * @param array entry array of numbers to check
 * @returns the numbers that show up only one time
 */

export function getNonRepeatingElementsOfArray(array: number[]): number[] {

    let nonRepeatingElementsOfArray: number[] = [];

    for (let i = 0; i != array.length; i++) {

        nonRepeatingElementsOfArray.push(array[i])

        for (let j = 0; j != array.length; j++) {
            if (array[j] == array[i] && j != i) {
                nonRepeatingElementsOfArray.pop();
                break;
            }
        }
    }

    return nonRepeatingElementsOfArray;
}