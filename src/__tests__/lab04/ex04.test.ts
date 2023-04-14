import { getEvenNumbersOfArray } from "../../lab04/ex04";

describe('testing function getEvenNumbersOfArray', () => {
    test('testing if for [3,6,7,8,1] result is [6,8]', () => {
        //Arrange
        const array: number[] = [3, 6, 7, 8, 1];
        const expectedEvenNumbersOfArray: number[] = [6, 8];

        //Act
        let evenNumbersOfArray: number[] = getEvenNumbersOfArray(array);

        //Assert
        for (let i = 0; i != expectedEvenNumbersOfArray.length; i++)
            expect(evenNumbersOfArray[i]).toBe(expectedEvenNumbersOfArray[i])
    });
});