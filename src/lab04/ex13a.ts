/**
 * 
 * @param array entry array of numbers
 * @returns the lowest number in the entry array
 */

export function getLowestNumberOfArray(array: number[]): number {

    if (array.length < 1)
        throw new RangeError('Array must have at least one value')

    let lowestNumber: number = array[0];

    for (let number of array) {

        if (number < lowestNumber)
            lowestNumber = number;

    }

    return lowestNumber;
}