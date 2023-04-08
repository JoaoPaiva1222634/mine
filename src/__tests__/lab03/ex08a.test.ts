import { getNumberOfDigits } from "../../lab03/ex08a";

describe('Testing function getNumberOfDigits', () => {
    test('testing if 637 returns 3', () => {
        //Arrange
        const num: number = 637;
        const expectedNumberOfDigits: number = 3;

        //Act
        let numberOfDigits: number = getNumberOfDigits(num);

        //Assert
        expect(numberOfDigits).toBe(expectedNumberOfDigits);
    });

    test('For decimals should throw error', () => {
        expect(() => {
            getNumberOfDigits(1.5);
        }).toThrow('Number must be integer');
    });
});