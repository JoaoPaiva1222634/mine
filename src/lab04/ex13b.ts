/**
 * 
 * @param array entry array of numbers
 * @returns the highest number in the entry array
 */

export function getHighestNumberOfArray(array: number[]): number {

    if (array.length < 1)
        throw new RangeError('Array must have at least one value')

    let highestNumber: number = array[0];

    for (let number of array) {

        if (number > highestNumber)
            highestNumber = number;

    }

    return highestNumber;
}