import { getAverageNumberOfArray } from "../../lab04/ex13c"; 

describe('test function getHighestNumberOfArray', () => {
    test('For [] should throw error', () => {
        //Arrange
        const array: number[] = [];

        //Act

        //Assert
        expect(() => {
            getAverageNumberOfArray(array);
        }).toThrow('Array must have at least one value');
    });

    test('testing if for [3] result is 3', () => {
        //Arrange
        const array: number[] = [3];
        const expectedHighestNumber: number = 3;

        //Act 
        let highestNumber: number = getAverageNumberOfArray(array);

        //Assert
        expect(highestNumber).toBe(expectedHighestNumber);
    });

    test('testing if for [3, 6, 2, 7, 9, 8, 7] result is 9', () => {
        //Arrange
        const array: number[] = [3, 6, 2, 7, 9, 8, 7];
        const expectedHighestNumber: number = 6;

        //Act 
        let highestNumber: number = getAverageNumberOfArray(array);

        //Assert
        expect(highestNumber).toBe(expectedHighestNumber);
    });
});