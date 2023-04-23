import { getNonRepeatingElementsOfArray } from "../../lab04/ex13e";

describe('testing function getNonRepeatingElementsOfArray', () => {
    test('testing for empty array', () => {
        //Arrange
        const array: number[] = [];
        const expectedNonRepeatingElementsOfArray: number[] = [];

        //Act
        let nonRepeatingElementsOfArray: number[] = getNonRepeatingElementsOfArray(array);

        //Assert
        
        for (let i = 0; i < expectedNonRepeatingElementsOfArray.length; i++)
            expect(nonRepeatingElementsOfArray[i]).toBe(expectedNonRepeatingElementsOfArray[i]);
    });

    test('testing for array with a single element', () => {
        //Arrange
        const array: number[] = [1];
        const expectedNonRepeatingElementsOfArray: number[] = [1];

        //Act
        let nonRepeatingElementsOfArray: number[] = getNonRepeatingElementsOfArray(array);

        //Assert
        for (let i = 0; i < expectedNonRepeatingElementsOfArray.length; i++)
            expect(nonRepeatingElementsOfArray[i]).toBe(expectedNonRepeatingElementsOfArray[i]);
    });

    test('testing for array with all elements repeating', () => {
        //Arrange
        const array: number[] = [1, 1, 1, 1];
        const expectedNonRepeatingElementsOfArray: number[] = [];

        //Act
        let nonRepeatingElementsOfArray: number[] = getNonRepeatingElementsOfArray(array);

        //Assert
        for (let i = 0; i < expectedNonRepeatingElementsOfArray.length; i++)
            expect(nonRepeatingElementsOfArray[i]).toBe(expectedNonRepeatingElementsOfArray[i]);
    });

    test('testing for no repeating elements', () => {
        //Arrange
        const array: number[] = [1, 2, 3, 4];
        const expectedNonRepeatingElementsOfArray: number[] = [1, 2, 3, 4];

        //Act
        let nonRepeatingElementsOfArray: number[] = getNonRepeatingElementsOfArray(array);

        //Assert
        for (let i = 0; i < expectedNonRepeatingElementsOfArray.length; i++)
            expect(nonRepeatingElementsOfArray[i]).toBe(expectedNonRepeatingElementsOfArray[i]);
    });

    test('testing for array with some repeating elements', () => {
        //Arrange
        const array: number[] = [1, 2, 3, 2, 4, 3, 5];
        const expectedNonRepeatingElementsOfArray: number[] = [1, 4, 5];

        //Act
        let nonRepeatingElementsOfArray: number[] = getNonRepeatingElementsOfArray(array);

        //Assert
        for (let i = 0; i < expectedNonRepeatingElementsOfArray.length; i++)
            expect(nonRepeatingElementsOfArray[i]).toBe(expectedNonRepeatingElementsOfArray[i]);
    });

    test('testing for an array with an even length', () => {
        //Arrange
        const array: number[] = [1, 2, 3, 2, 4, 3];
        const expectedNonRepeatingElementsOfArray: number[] = [1, 4];

        //Act
        let nonRepeatingElementsOfArray: number[] = getNonRepeatingElementsOfArray(array);

        //Assert
        for (let i = 0; i < expectedNonRepeatingElementsOfArray.length; i++)
            expect(nonRepeatingElementsOfArray[i]).toBe(expectedNonRepeatingElementsOfArray[i]);
    });
});