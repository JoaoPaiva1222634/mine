import { getLowestNumberOfArray } from "../../lab04/ex13a";

describe('testing function getLowestNumberOfArray', () => {

    test('testing if for [3, 6, 2, 7, 9, 8, 7] result is 2', () => {
        //Arrange
        const array: number[] = [3, 6, 2, 7, 9, 8, 7];
        const expectedLowestNumber: number = 2;

        //Act 
        let lowestNumber: number = getLowestNumberOfArray(array);

        //Assert
        expect(lowestNumber).toBe(expectedLowestNumber);
    });

    test('testing if for [2, 2, 2] result is 2', () => {
        //Arrange
        const array: number[] = [2, 2, 2];
        const expectedLowestNumber: number = 2;

        //Act 
        let lowestNumber: number = getLowestNumberOfArray(array);

        //Assert
        expect(lowestNumber).toBe(expectedLowestNumber);
    });

    test('testing if for [2] result is 2', () => {
        //Arrange
        const array: number[] = [2];
        const expectedLowestNumber: number = 2;

        //Act 
        let lowestNumber: number = getLowestNumberOfArray(array);

        //Assert
        expect(lowestNumber).toBe(expectedLowestNumber);
    });

    test('testing if for [-1, 0, 1, 2] result is -1', () => {
        //Arrange
        const array: number[] = [-1, 0, 1, 2];
        const expectedLowestNumber: number = -1;

        //Act 
        let lowestNumber: number = getLowestNumberOfArray(array);

        //Assert
        expect(lowestNumber).toBe(expectedLowestNumber);
    });

    test('testing if for [3, 2, 1, 0, -1] result is -1', () => {
        //Arrange
        const array: number[] = [3, 2, 1, 0, -1];
        const expectedLowestNumber: number = -1;

        //Act 
        let lowestNumber: number = getLowestNumberOfArray(array);

        //Assert
        expect(lowestNumber).toBe(expectedLowestNumber);
    });

    test('testing if for [-1, -2, -3, -4] result is -1', () => {
        //Arrange
        const array: number[] = [-1, -2, -3, -4];
        const expectedLowestNumber: number = -4;

        //Act 
        let lowestNumber: number = getLowestNumberOfArray(array);

        //Assert
        expect(lowestNumber).toBe(expectedLowestNumber);
    });

    test('testing if for [0, 0, 0, 0] result is 0', () => {
        //Arrange
        const array: number[] = [0, 0, 0, 0];
        const expectedLowestNumber: number = 0;

        //Act 
        let lowestNumber: number = getLowestNumberOfArray(array);

        //Assert
        expect(lowestNumber).toBe(expectedLowestNumber);
    });

    test('For [] should throw error', () => {
        //Arrange
        const array: number[] = [];

        //Act

        //Assert
        expect(() => {
            getLowestNumberOfArray(array);
        }).toThrow('Array must have at least one value');
    });
});