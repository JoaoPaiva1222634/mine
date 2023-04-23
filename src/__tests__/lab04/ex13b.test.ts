import { getHighestNumberOfArray } from "../../lab04/ex13b";

describe('test function getHighestNumberOfArray', () => {
    test('For [] should throw error', () => {
        //Arrange
        const array: number[] = [];

        //Act

        //Assert
        expect(() => {
            getHighestNumberOfArray(array);
        }).toThrow('Array must have at least one value');
    });

    test('testing if for [3] result is 3', () => {
        //Arrange
        const array: number[] = [3];
        const expectedHighestNumber: number = 3;

        //Act 
        let highestNumber: number = getHighestNumberOfArray(array);

        //Assert
        expect(highestNumber).toBe(expectedHighestNumber);
    });

    test('testing if for [3, 6, 2, 7, 9, 8, 7] result is 9', () => {
        //Arrange
        const array: number[] = [3, 6, 2, 7, 9, 8, 7];
        const expectedHighestNumber: number = 9;

        //Act 
        let highestNumber: number = getHighestNumberOfArray(array);

        //Assert
        expect(highestNumber).toBe(expectedHighestNumber);
    });

    test('testing if for [3, 3, 3, 3, 3, 3, 3] result is 9', () => {
        //Arrange
        const array: number[] = [3, 3, 3, 3, 3, 3, 3];
        const expectedHighestNumber: number = 3;

        //Act 
        let highestNumber: number = getHighestNumberOfArray(array);

        //Assert
        expect(highestNumber).toBe(expectedHighestNumber);
    });

    test('testing if for [1,2,3,3,4] result is 9', () => {
        //Arrange
        const array: number[] = [1, 2, 3, 3, 4];
        const expectedHighestNumber: number = 4;

        //Act 
        let highestNumber: number = getHighestNumberOfArray(array);

        //Assert
        expect(highestNumber).toBe(expectedHighestNumber);
    });

    test('testing for an array of negative numbers', () => {
        //Arrange
        const array: number[] = [-5, -3, -10, -1, -7];
        const expectedHighestNumber: number = -1;

        //Act 
        let highestNumber: number = getHighestNumberOfArray(array);

        //Assert
        expect(highestNumber).toBe(expectedHighestNumber);
    });

    test('testing for an array with decimal numbers', () => {
        //Arrange
        const array: number[] = [2.5, 7.1, 1.9, 5.5, 4.8];
        const expectedHighestNumber: number = 7.1;

        //Act 
        let highestNumber: number = getHighestNumberOfArray(array);

        //Assert
        expect(highestNumber).toBe(expectedHighestNumber);
    });

    test('testing for an array of positive and negative numbers', () => {
        //Arrange
        const array: number[] = [10, -7, 5, -12, 8, -3];
        const expectedHighestNumber: number = 10;

        //Act 
        let highestNumber: number = getHighestNumberOfArray(array);

        //Assert
        expect(highestNumber).toBe(expectedHighestNumber);
    });

    test('testing for an array with NaN', () => {
        //Arrange
        const array: number[] = [5, 3, NaN, 2, 4];
        const expectedHighestNumber: number = 5;

        //Act 
        let highestNumber: number = getHighestNumberOfArray(array);

        //Assert
        expect(highestNumber).toBe(expectedHighestNumber);
    });

    test('testing for an array with Infinity', () => {
        //Arrange
        const array: number[] = [5, 3, Infinity, 2, 4];
        const expectedHighestNumber: number = Infinity;

        //Act 
        let highestNumber: number = getHighestNumberOfArray(array);

        //Assert
        expect(highestNumber).toBe(expectedHighestNumber);
    });
});