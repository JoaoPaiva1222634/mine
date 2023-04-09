import { getSumOfEvenDigitsOfNumber } from "../../lab03/ex08e";

describe('testing function getSumOfEvenDigitsOfNumber', () => {
    test('testing if for 206 returns 8', () => {
        //Arrange
        const value: number = 206;
        const expectedSum: number = 8;

        //Act
        let sum: number = getSumOfEvenDigitsOfNumber(value);

        //Assert
        expect(sum).toBe(expectedSum);
    });

    test('testing if for -2016 returns 8', () => {
        //Arrange
        const value: number = -206;
        const expectedSum: number = 8;

        //Act
        let sum: number = getSumOfEvenDigitsOfNumber(value);

        //Assert
        expect(sum).toBe(expectedSum);
    });

    test('testing if for 137 returns 0', () => {
        //Arrange
        const value: number = 137;
        const expectedSum: number = 0;

        //Act
        let sum: number = getSumOfEvenDigitsOfNumber(value);

        //Assert
        expect(sum).toBe(expectedSum);
    });

    test('testing if for -137 returns 0', () => {
        //Arrange
        const value: number = -137;
        const expectedSum: number = 0;

        //Act
        let sum: number = getSumOfEvenDigitsOfNumber(value);

        //Assert
        expect(sum).toBe(expectedSum);
    });

    test('testing if for 13726 returns 8', () => {
        //Arrange
        const value: number = 13726;
        const expectedSum: number = 8;

        //Act
        let sum: number = getSumOfEvenDigitsOfNumber(value);

        //Assert
        expect(sum).toBe(expectedSum);
    });

    test('testing if for -13726 returns 8', () => {
        //Arrange
        const value: number = -13726;
        const expectedSum: number = 8;

        //Act
        let sum: number = getSumOfEvenDigitsOfNumber(value);

        //Assert
        expect(sum).toBe(expectedSum);
    });

    test('For non integers should throw error', () => {
        expect(() => {
            getSumOfEvenDigitsOfNumber(1.5);
        }).toThrow('Number must be integer');
    });
});