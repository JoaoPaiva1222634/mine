export function getOddNumbersOfArray(array: number[]): number[] {

    let oddNumbersOfArray: number[] = [];
    let index: number = 0;

    for (let i = 0; i != array.length; i++) {
        if (array[i] % 2 != 0) {
            oddNumbersOfArray[index] = array[i];
            index++
        }
    }

    return oddNumbersOfArray;
}