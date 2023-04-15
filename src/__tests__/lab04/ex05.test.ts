import { getOddNumbersOfArray } from "../../lab04/ex05";

describe('testing function getOddNumbersOfArray', () => {
    test('testing if for [3,6,7,8,1] result is [3,7,1]', () => {
        //Arrange
        const array: number[] = [3, 6, 7, 8, 1];
        const expectedOddNumbersOfArray: number[] = [3, 7, 1];

        //Act
        let oddNumbersOfArray: number[] = getOddNumbersOfArray(array);

        //Assert
        for (let i = 0; i != expectedOddNumbersOfArray.length; i++)
            expect(oddNumbersOfArray[i]).toBe(expectedOddNumbersOfArray[i])
    });

    test('testing if for [2,6,8] result is []', () => {
        //Arrange
        const array: number[] = [2, 6, 8];
        const expectedOddNumbersOfArray: number[] = [];

        //Act
        let oddNumbersOfArray: number[] = getOddNumbersOfArray(array);

        //Assert
        for (let i = 0; i != expectedOddNumbersOfArray.length; i++)
            expect(oddNumbersOfArray[i]).toBe(expectedOddNumbersOfArray[i])
    });
});