import { getNumberOfEvenDigits } from "../../lab03/ex08b";

describe('Testing function getNumberOfEvenDigits', () => {
    test('testing if 246 returns 3', () => {
        //Arrange
        const value: number = 246;
        const expectedNumberOfEvenDigits: number = 3;

        //Act
        let numberOfEvenDigits: number = getNumberOfEvenDigits(value);

        //Assert
        expect(numberOfEvenDigits).toBe(expectedNumberOfEvenDigits);
    });

    test('testing if 0 returns 1', () => {
        //Arrange
        const value: number = 0;
        const expectedNumberOfEvenDigits: number = 1;

        //Act
        let numberOfEvenDigits: number = getNumberOfEvenDigits(value);

        //Assert
        expect(numberOfEvenDigits).toBe(expectedNumberOfEvenDigits);
    });

    test('testing if 531 returns 0', () => {
        //Arrange
        const value: number = 531;
        const expectedNumberOfEvenDigits: number = 0;

        //Act
        let numberOfEvenDigits: number = getNumberOfEvenDigits(value);

        //Assert
        expect(numberOfEvenDigits).toBe(expectedNumberOfEvenDigits);
    });

    test('testing if -24 returns 2', () => {
        //Arrange
        const value: number = -24;
        const expectedNumberOfEvenDigits: number = 2;

        //Act
        let numberOfEvenDigits: number = getNumberOfEvenDigits(value);

        //Assert
        expect(numberOfEvenDigits).toBe(expectedNumberOfEvenDigits);
    });

    test('For decimals should throw error', () => {
        expect(() => {
            getNumberOfEvenDigits(1.5);
        }).toThrow('Number must be integer');
    });
});