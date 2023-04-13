import { getBiggestPalindromOfInterval } from "../../lab03/ex09d";

describe('testing function getBiggestPalindromOfInterval', () => {
    test('check if from -11 to 0 is 11', () => {
        //Arrange
        const intervalStart: number = -11;
        const intervalEnd: number = 0;
        const expectedBiggestPalindrome: number = -11;

        //Act
        let biggestPalindrome: number = getBiggestPalindromOfInterval(intervalStart, intervalEnd);

        //Assert
        expect(biggestPalindrome).toBe(expectedBiggestPalindrome);
    });

    test('check if from 0 to 11 is 11', () => {
        //Arrange
        const intervalStart: number = 0;
        const intervalEnd: number = 11;
        const expectedBiggestPalindrome: number = 11;

        //Act
        let biggestPalindrome: number = getBiggestPalindromOfInterval(intervalStart, intervalEnd);

        //Assert
        expect(biggestPalindrome).toBe(expectedBiggestPalindrome);
    });

    test('check if from -11 to 37 is 33', () => {
        //Arrange
        const intervalStart: number = -11;
        const intervalEnd: number = 37;
        const expectedBiggestPalindrome: number = 33;

        //Act
        let biggestPalindrome: number = getBiggestPalindromOfInterval(intervalStart, intervalEnd);

        //Assert
        expect(biggestPalindrome).toBe(expectedBiggestPalindrome);
    });

    test('check if from 0 to 3 is -1', () => {
        //Arrange
        const intervalStart: number = 0;
        const intervalEnd: number = 3;
        const expectedBiggestPalindrome: number = -1;

        //Act
        let biggestPalindrome: number = getBiggestPalindromOfInterval(intervalStart, intervalEnd);

        //Assert
        expect(biggestPalindrome).toBe(expectedBiggestPalindrome);
    });

    test('check if from -10 to 10 is -1', () => {
        //Arrange
        const intervalStart: number = -10;
        const intervalEnd: number = 10;
        const expectedBiggestPalindrome: number = -1;

        //Act
        let biggestPalindrome: number = getBiggestPalindromOfInterval(intervalStart, intervalEnd);

        //Assert
        expect(biggestPalindrome).toBe(expectedBiggestPalindrome);
    });
});