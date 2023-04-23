/**
 * 
 * @param array entry array of numbers
 * @returns the average number in the entry array
 */

export function getProductOfNumbersInArray(array: number[]): number {

    if (array.length < 1)
        throw new RangeError('Array must have at least one value')

    let productOfNumbersInArray: number = array[0];

    for (let number of array) {

        productOfNumbersInArray *= number;
    }

    return productOfNumbersInArray;
}