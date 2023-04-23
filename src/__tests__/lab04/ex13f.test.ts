import { getReverseOfArray } from "../../lab04/ex13f";

describe('testing function getReverseOfArray', () => {
    test('testing for empty array', () => {
        //Arrange
        const array: number[] = [];
        const expectedReverseOfArray: number[] = [];

        //Act
        let reverseOfArray: number[] = getReverseOfArray(array);

        //Assert
        for (let i = 0; i < expectedReverseOfArray.length; i++)
            expect(reverseOfArray[i]).toBe(expectedReverseOfArray[i])
    });

    test('testing for array with two numbers', () => {
        //Arrange
        const array: number[] = [1, 2];
        const expectedReverseOfArray: number[] = [2, 1];

        //Act
        let reverseOfArray: number[] = getReverseOfArray(array);

        //Assert
        for (let i = 0; i < expectedReverseOfArray.length; i++)
            expect(reverseOfArray[i]).toBe(expectedReverseOfArray[i])
    });
});