import { checkIfNumberIsPalindrome } from "../../lab03/ex09a";

describe('testing function checkIfNumberIsPalindrome', () => {
    test('check if 121 is true', () => {
        //Arrange
        const value: number = 121;
        const expectedResult: boolean = true;

        //Act
        let result: boolean = checkIfNumberIsPalindrome(value);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('check if 123 is false', () => {
        //Arrange
        const value: number = 123;
        const expectedResult: boolean = false;

        //Act
        let result: boolean = checkIfNumberIsPalindrome(value);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('check if 33 is true', () => {
        //Arrange
        const value: number = 33;
        const expectedResult: boolean = true;

        //Act
        let result: boolean = checkIfNumberIsPalindrome(value);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('For numbers with less than 2 digit should throw error', () => {
        expect(() => {
            checkIfNumberIsPalindrome(-9);
        }).toThrow('Value must be a number with at least two digits');
    });

    test('For numbers with less than 2 digit should throw error', () => {
        expect(() => {
            checkIfNumberIsPalindrome(9);
        }).toThrow('Value must be a number with at least two digits');
    });
});