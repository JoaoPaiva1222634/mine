/**
 * 
 * @param array entry array of numbers
 * @returns the average number in the entry array
 */

export function getAverageNumberOfArray(array: number[]): number {

    if (array.length < 1)
        throw new RangeError('Array must have at least one value')

    let sumOfNumbersInArray: number = 0;

    for (let number of array) {

        sumOfNumbersInArray += number;
    }

    let averageNumberOfArray: number = sumOfNumbersInArray / array.length;

    return averageNumberOfArray;
}