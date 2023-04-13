import { getNumberClassification } from "../../lab03/ex12";

describe('testing function getNumberClassification', () => {
    test('testing for value 100 result is 1', () => {
        //Arrange
        const value: number = 100;
        const expectedResult: number = 1;

        //Act
        let result: number = getNumberClassification(value);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing for value 23 result is -1', () => {
        //Arrange
        const value: number = 23;
        const expectedResult: number = -1;

        //Act
        let result: number = getNumberClassification(value);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing for value 0 result is 0', () => {
        //Arrange
        const value: number = 0;
        const expectedResult: number = 0;

        //Act
        let result: number = getNumberClassification(value);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing for value 6 result is 0', () => {
        //Arrange
        const value: number = 6;
        const expectedResult: number = 0;

        //Act
        let result: number = getNumberClassification(value);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('For negative numbers should throw error', () => {
        expect(() => {
            getNumberClassification(-9);
        }).toThrow('Value must be a positive number');
    });

    test('For decimals should throw error', () => {
        expect(() => {
            getNumberClassification(9.1);
        }).toThrow('Value must be an integer number');
    });
});