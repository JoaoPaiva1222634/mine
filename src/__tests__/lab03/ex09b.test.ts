import { checkIfValueIsAnArmstrongNumber } from "../../lab03/ex09b";

describe('testing function checkIfValueIsAnArmstrongNunber', () => {
    test('check if 121 is false', () => {
        //Arrange
        const value: number = 121;
        const expectedResult: boolean = false;

        //Act
        let result: boolean = checkIfValueIsAnArmstrongNumber(value);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('check if 153 is true', () => {
        //Arrange
        const value: number = 153;
        const expectedResult: boolean = true;

        //Act
        let result: boolean = checkIfValueIsAnArmstrongNumber(value);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('For negative numbers should throw error', () => {
        expect(() => {
            checkIfValueIsAnArmstrongNumber(-9);
        }).toThrow('Number must be positive');
    });
});