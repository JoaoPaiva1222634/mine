import { getSumOfOddDigitsOfNumber } from "../../lab03/ex08f";

describe('testing function getSumOfOddDigitsOfNumber', () => {
    test('testing if for 2016 returns 8', () => {
        //Arrange
        const value: number = 206;
        const expectedSum: number = 0;

        //Act
        let sum: number = getSumOfOddDigitsOfNumber(value);

        //Assert
        expect(sum).toBe(expectedSum);
    });

    test('testing if for -2016 returns 8', () => {
        //Arrange
        const value: number = -206;
        const expectedSum: number = 0;

        //Act
        let sum: number = getSumOfOddDigitsOfNumber(value);

        //Assert
        expect(sum).toBe(expectedSum);
    });

    test('testing if for 137 returns 11', () => {
        //Arrange
        const value: number = 137;
        const expectedSum: number = 11;

        //Act
        let sum: number = getSumOfOddDigitsOfNumber(value);

        //Assert
        expect(sum).toBe(expectedSum);
    });

    test('testing if for -137 returns 11', () => {
        //Arrange
        const value: number = -137;
        const expectedSum: number = 11;

        //Act
        let sum: number = getSumOfOddDigitsOfNumber(value);

        //Assert
        expect(sum).toBe(expectedSum);
    });

    test('testing if for 13726 returns 11', () => {
        //Arrange
        const value: number = 13726;
        const expectedSum: number = 11;

        //Act
        let sum: number = getSumOfOddDigitsOfNumber(value);

        //Assert
        expect(sum).toBe(expectedSum);
    });

    test('testing if for -13726 returns 11', () => {
        //Arrange
        const value: number = -13726;
        const expectedSum: number = 11;

        //Act
        let sum: number = getSumOfOddDigitsOfNumber(value);

        //Assert
        expect(sum).toBe(expectedSum);
    });

    test('For non integers should throw error', () => {
        expect(() => {
            getSumOfOddDigitsOfNumber(1.5);
        }).toThrow('Number must be integer');
    });
});