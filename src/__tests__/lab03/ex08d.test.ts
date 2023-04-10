import { getSumOfDigitsOfNumber } from "../../lab03/ex08d";

describe('testing function getSumOfDigitsOfNumber', () => {
    test('testing if for 206 returns 8', () => {
        //Arrange
        const value: number = 206;
        const expectedSum: number = 8;

        //Act
        let sum: number = getSumOfDigitsOfNumber(value);

        //Assert
        expect(sum).toBe(expectedSum);
    });

    test('testing if for -206 returns -8', () => {
        //Arrange
        const value: number = -206;
        const expectedSum: number = -8;

        //Act
        let sum: number = getSumOfDigitsOfNumber(value);

        //Assert
        expect(sum).toBe(expectedSum);
    });

    test('testing if for 0 returns 0', () => {
        //Arrange
        const value: number = 0;
        const expectedSum: number = 0;

        //Act
        let sum: number = getSumOfDigitsOfNumber(value);

        //Assert
        expect(sum).toBe(expectedSum);
    });

    test('For non integers should throw error', () => {
        expect(() => {
            getSumOfDigitsOfNumber(2.05);
        }).toThrow('Number must be integer');
    });
});