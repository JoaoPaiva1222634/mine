import { getSumOfDigitsOfArray } from "../../lab04/ex03";

describe('testing function getSumOfDigitsOfArray', () => {
    test('testing for [3,6,7,8,1] result is 25', () => {
        //Arrange
        const array: number[] = [3, 6, 7, 8, 1];
        const expectedSumOfDigitsOfArray: number = 25;

        //Act
        let sumOfDigitsOfArray: number = getSumOfDigitsOfArray(array);

        //Assert

        expect(sumOfDigitsOfArray).toBe(expectedSumOfDigitsOfArray);
    });
});