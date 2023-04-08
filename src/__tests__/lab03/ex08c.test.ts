import { getNumberOfOddDigits } from "../../lab03/ex08c";

describe('Testing function getNumberOfOddDigits', () => {
    test('testing if 246 returns 0', () => {
        //Arrange
        const value: number = 246;
        const expectedNumberOfOddDigits: number = 0;

        //Act
        let numberOfOddDigits: number = getNumberOfOddDigits(value);

        //Assert
        expect(numberOfOddDigits).toBe(expectedNumberOfOddDigits);
    });

    test('testing if 0 returns 0', () => {
        //Arrange
        const value: number = 0;
        const expectedNumberOfOddDigits: number = 0;

        //Act
        let numberOfOddDigits: number = getNumberOfOddDigits(value);

        //Assert
        expect(numberOfOddDigits).toBe(expectedNumberOfOddDigits);
    });

    test('testing if 531 returns 3', () => {
        //Arrange
        const value: number = 531;
        const expectedNumberOfOddDigits: number = 3;

        //Act
        let numberOfOddDigits: number = getNumberOfOddDigits(value);

        //Assert
        expect(numberOfOddDigits).toBe(expectedNumberOfOddDigits);
    });    

    test('For decimals should throw error', () => {
        expect(() => {
            getNumberOfOddDigits(1.5);
        }).toThrow('Number must be integer');
    });
});