import { getNumberOfDigitsLab4 } from "./ex01";

export function getSumOfDigitsOfArray(array: number[]): number {

    let sumOfDigitsOfArray: number = 0;

    for (let i = 0; i != array.length; i++) {
        sumOfDigitsOfArray += array[i];
    }

    return sumOfDigitsOfArray;
}