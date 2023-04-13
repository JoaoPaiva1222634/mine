import { getNumberOfWaysOfObtainingValue } from "../../lab03/ex13";

describe('testing function getNumberOfWaysOfObtainingValue', () => {
    test('testing for value 14 count is 4', () => {
        //Arrange
        const value: number = 14;
        const expectedCount: number = 4;

        //Act
        let count: number = getNumberOfWaysOfObtainingValue(value);

        //Assert
        expect(count).toBe(expectedCount);
    });

    test('testing for value 1 count is 1', () => {
        //Arrange
        const value: number = 1;
        const expectedCount: number = 1;

        //Act
        let count: number = getNumberOfWaysOfObtainingValue(value);

        //Assert
        expect(count).toBe(expectedCount);
    });

    test('testing for value 20 count is 1', () => {
        //Arrange
        const value: number = 20;
        const expectedCount: number = 1;

        //Act
        let count: number = getNumberOfWaysOfObtainingValue(value);

        //Assert
        expect(count).toBe(expectedCount);
    });

    test('For values bellow 1 should throw error', () => {
        expect(() => {
            getNumberOfWaysOfObtainingValue(0);
        }).toThrow('Value must be an integer between 1 and 20');
    });

    test('For values above 20 should throw error', () => {
        expect(() => {
            getNumberOfWaysOfObtainingValue(21);
        }).toThrow('Value must be an integer between 1 and 20');
    });

    test('For decimals should throw error', () => {
        expect(() => {
            getNumberOfWaysOfObtainingValue(9.1);
        }).toThrow('Value must be an integer between 1 and 20');
    });
});