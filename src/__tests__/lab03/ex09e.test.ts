import { getNumberOfPalindromesOfInterval } from "../../lab03/ex09e"; 

describe('testing function getNumberOfPalindromesOfInterval', () => {
    test('check if from -11 to 0 is 1', () => {
        //Arrange
        const intervalStart: number = -11;
        const intervalEnd: number = 0;
        const expectedNumberOfPalindromes: number = 1;

        //Act
        let numberOfPalindromes: number = getNumberOfPalindromesOfInterval(intervalStart, intervalEnd);

        //Assert
        expect(numberOfPalindromes).toBe(expectedNumberOfPalindromes);
    });

    test('check if from 0 to 11 is 1', () => {
        //Arrange
        const intervalStart: number = 0;
        const intervalEnd: number = 11;
        const expectedNumberOfPalindromes: number = 1;

        //Act
        let numberOfPalindromes: number = getNumberOfPalindromesOfInterval(intervalStart, intervalEnd);

        //Assert
        expect(numberOfPalindromes).toBe(expectedNumberOfPalindromes);
    });

    test('check if from -10 to 10 is 0', () => {
        //Arrange
        const intervalStart: number = -10;
        const intervalEnd: number = 10;
        const expectedNumberOfPalindromes: number = 0;

        //Act
        let numberOfPalindromes: number = getNumberOfPalindromesOfInterval(intervalStart, intervalEnd);

        //Assert
        expect(numberOfPalindromes).toBe(expectedNumberOfPalindromes);
    });

    test('check if from 43 to 45 is 1', () => {
        //Arrange
        const intervalStart: number = 43;
        const intervalEnd: number = 45;
        const expectedNumberOfPalindromes: number = 1;

        //Act
        let numberOfPalindromes: number = getNumberOfPalindromesOfInterval(intervalStart, intervalEnd);

        //Assert
        expect(numberOfPalindromes).toBe(expectedNumberOfPalindromes);
    });
});