import { checkIfDigitsAreDecreasing } from "../../lab03/ex08j";
import { getReverseOfNumber } from "../../lab03/ex08j";
import { getReverseOfDecreasingNumber } from "../../lab03/ex08j";

describe('testing function checkingIfDigitsAreDecreasing', () => {
    test('testing if for 977 is true', () => {
        //Arrange
        const value: number = 977;
        const expectedResult: boolean = false;

        //Act
        let result: boolean = checkIfDigitsAreDecreasing(value);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if for 976 is true', () => {
        //Arrange
        const value: number = 976;
        const expectedResult: boolean = true;

        //Act
        let result: boolean = checkIfDigitsAreDecreasing(value);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if for 123 is false', () => {
        //Arrange
        const value: number = 123;
        const expectedResult: boolean = false;

        //Act
        let result: boolean = checkIfDigitsAreDecreasing(value);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if for 231 is false', () => {
        //Arrange
        const value: number = 231;
        const expectedResult: boolean = false;

        //Act
        let result: boolean = checkIfDigitsAreDecreasing(value);

        //Assert
        expect(result).toBe(expectedResult);
    });
});

describe('testing function getReverseOfNumber', () => {
    test('testing if for 976 is 679', () => {
        //Arrange
        const value: number = 976;
        const expectedReversedNumber: number = 679;

        //Act
        let reversedNumber: number = getReverseOfNumber(value);

        //Assert
        expect(reversedNumber).toBe(expectedReversedNumber);
    });
});

describe('testing function getReverseOfDecreasingNumber', () => {
    test('testing if for 76 is 67', () => {
        //Arrange
        const value: number = 76;
        const expectedReverseOfDecreasingNumber: number = 67;

        //Act
        let reverseOfDecreasingNumber: number = getReverseOfDecreasingNumber(value);

        //Assert
        expect(reverseOfDecreasingNumber).toBe(expectedReverseOfDecreasingNumber);
    });

    test('testing if for 123 is 0', () => {
        //Arrange
        const value: number = 123;
        const expectedReverseOfDecreasingNumber: number = 0;

        //Act
        let reverseOfDecreasingNumber: number = getReverseOfDecreasingNumber(value);

        //Assert
        expect(reverseOfDecreasingNumber).toBe(expectedReverseOfDecreasingNumber);
    });
    
    test('testing if for 976 is 679', () => {
        //Arrange
        const value: number = 976;
        const expectedReverseOfDecreasingNumber: number = 679;

        //Act
        let reverseOfDecreasingNumber: number = getReverseOfDecreasingNumber(value);

        //Assert
        expect(reverseOfDecreasingNumber).toBe(expectedReverseOfDecreasingNumber);
    });

    test('For numbers with less than 2 digit should throw error', () => {
        expect(() => {
            getReverseOfDecreasingNumber(-9);
        }).toThrow('Number must have at least two digits');
    });

    test('For numbers with less than 2 digit should throw error', () => {
        expect(() => {
            getReverseOfDecreasingNumber(-9);
        }).toThrow('Number must have at least two digits');
    });
});