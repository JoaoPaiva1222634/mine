import { getSumOfEvenNumbersOfInterval } from "../../lab03/ex07a";

describe('testing function getSumOfEvenNumbersOfInterval', () => {
    test('testing for 2 to 6 is', () => {
        //Arrange
        const intervalStart: number = 2;
        const intervalEnd: number = 6;
        const expectedSumOfEvenNumberOfInterval: number = 12;

        //Act
        let sumOfEvenNumberOfInterval: number = getSumOfEvenNumbersOfInterval(intervalStart, intervalEnd);

        //Assert
        expect(sumOfEvenNumberOfInterval).toBe(expectedSumOfEvenNumberOfInterval);
    });
});