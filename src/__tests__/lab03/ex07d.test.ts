import { getNumberOfOddNumbersOfInterval } from "../../lab03/ex07d";

describe('testing function getNumberOfOddNumbersOfInterval', () => {
    test('testing if for 1 to 7 is 3', () => { 
        //Arrange
        const intervalStart: number = 1;
        const intervalEnd: number = 7;
        const expectedOdd: number = 4;

        //Act
        let odd: number = getNumberOfOddNumbersOfInterval(intervalStart, intervalEnd);

        //Assert
        expect(odd).toBe(expectedOdd);
    });
});