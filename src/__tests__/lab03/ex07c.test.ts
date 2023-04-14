import { getSumOfOddNumbersInInterval } from "../../lab03/ex07c";

describe('testing function getSumOfOddNumbersInInterval', () => {
    test('testing for 1 to 9 is 25', () => {
        //Arrange
        const intervalStart: number = 1;
        const intervalEnd: number = 9;
        const expectedsSumOfOddNumbersInInterval: number = 25;

        //Act
        let sumOfOddNumbersInInterval: number = getSumOfOddNumbersInInterval(intervalStart, intervalEnd);

        //Assert
        expect(sumOfOddNumbersInInterval).toBe(expectedsSumOfOddNumbersInInterval);
    });
});