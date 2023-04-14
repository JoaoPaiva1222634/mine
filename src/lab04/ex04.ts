export function getEvenNumbersOfArray(array: number[]): number[] {

    let evenNumbersOfArray: number[] = [];
    let index: number = 0;

    for (let i = 0; i != array.length; i++) {
        if (array[i] % 2 == 0) {
            evenNumbersOfArray[index] = array[i];
            index++
        }
    }

    return evenNumbersOfArray;
}