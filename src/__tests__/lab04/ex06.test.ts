import { getSumOfEvenDigitsOfNumber } from "../../lab04/ex06";

describe('testing function getSumOfEvenDigitsOfNumber', () => {
    test('testing if for 36781 reult is 14', () => {
        //Arrange
        const value: number = 36781;
        const expectedSumOfEvenDigitsOfNumber: number = 14;

        //Act
        let sumOfEvenDigitsOfNumber: number = getSumOfEvenDigitsOfNumber(value);

        //Assert
        expect(sumOfEvenDigitsOfNumber).toBe(expectedSumOfEvenDigitsOfNumber);
    });
});