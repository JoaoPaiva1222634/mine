import { getSumOfOddDigitsOfNumber } from "../../lab04/ex07";

describe('testing function getSumOfOddDigitsOfNumber', () => {
    test('testing if for 36781 reult is 11', () => {
        //Arrange
        const value: number = 36781;
        const expectedSumOfOddDigitsOfNumber: number = 11;

        //Act
        let sumOfOddDigitsOfNumber: number = getSumOfOddDigitsOfNumber(value);

        //Assert
        expect(sumOfOddDigitsOfNumber).toBe(expectedSumOfOddDigitsOfNumber);
    });
});