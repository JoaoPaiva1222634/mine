export function getReverseOfArray(array: number[]): number[] {

    let reverseOfArray: number[] = [];

    for (let i = array.length - 1; i >= 0; i--)
        reverseOfArray.push(array[i]);

        return reverseOfArray;
}