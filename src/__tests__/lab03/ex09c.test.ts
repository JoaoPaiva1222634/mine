import { getFirstPalindromOfInterval } from "../../lab03/ex09c";

describe('testing function getFirstPalindromOfInterval', () => {
    test('check if from -11 to 0 is -11', () => {
        //Arrange
        const intervalStart: number = -11;
        const intervalEnd: number = 0;
        const expectedFirstPalindrome: number = -11;

        //Act
        let firstPalindrome: number = getFirstPalindromOfInterval(intervalStart, intervalEnd);

        //Assert
        expect(firstPalindrome).toBe(expectedFirstPalindrome);
    });

    test('check if from 0 to 11 is 11', () => {
        //Arrange
        const intervalStart: number = 0;
        const intervalEnd: number = 11;
        const expectedFirstPalindrome: number = 11;

        //Act
        let firstPalindrome: number = getFirstPalindromOfInterval(intervalStart, intervalEnd);

        //Assert
        expect(firstPalindrome).toBe(expectedFirstPalindrome);
    });

    test('check if from 0 to 3 is -1', () => {
        //Arrange
        const intervalStart: number = 0;
        const intervalEnd: number = 3;
        const expectedFirstPalindrome: number = -1;

        //Act
        let firstPalindrome: number = getFirstPalindromOfInterval(intervalStart, intervalEnd);

        //Assert
        expect(firstPalindrome).toBe(expectedFirstPalindrome);
    });
});