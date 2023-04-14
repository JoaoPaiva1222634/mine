import { getNumberOfEvenNumbersOfInterval } from "../../lab03/ex07b";

describe('testing function getNumberOfEvenNumbersOfInterval', () => {
    test('testing for 3 to 9 is 3', () => {
        //Arrange
        const intervalStart: number = 2;
        const intervalEnd: number = 8;
        const  expectedNumberOfEvenNumbersOfInterval: number = 4;

        //Act
        let numberOfEvenNumbersOfInterval: number = getNumberOfEvenNumbersOfInterval(intervalStart, intervalEnd);

        //Assert
        expect(numberOfEvenNumbersOfInterval).toBe(expectedNumberOfEvenNumbersOfInterval);
    });
});