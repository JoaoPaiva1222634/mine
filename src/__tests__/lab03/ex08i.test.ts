import { getAverageOfOddDigitsOfNumber } from "../../lab03/ex08i";

describe('testing function getAverageOfOddDigitsOfNumber', () => {
    test('testing if for 246 average is 0', () => {
        //Arrange
        const value: number = 246;
        const expectedOddDigitsAverage: number = 0;

        //Act
        let oddDigitsAverage: number = getAverageOfOddDigitsOfNumber(value);

        //Assert
        expect(oddDigitsAverage).toBe(expectedOddDigitsAverage);
    });

    test('testing if for -246 average is 0', () => {
        //Arrange
        const value: number = -246;
        const expectedOddDigitsAverage: number = 0;

        //Act
        let oddDigitsAverage: number = getAverageOfOddDigitsOfNumber(value);

        //Assert
        expect(oddDigitsAverage).toBe(expectedOddDigitsAverage);
    });

    test('testing if for 159 average is 5', () => {
        //Arrange
        const value: number = 159;
        const expectedOddDigitsAverage: number = 5;

        //Act
        let oddDigitsAverage: number = getAverageOfOddDigitsOfNumber(value);

        //Assert
        expect(oddDigitsAverage).toBe(expectedOddDigitsAverage);
    });

    test('testing if for -159 average is -5', () => {
        //Arrange
        const value: number = -159;
        const expectedOddDigitsAverage: number = -5;

        //Act
        let oddDigitsAverage: number = getAverageOfOddDigitsOfNumber(value);

        //Assert
        expect(oddDigitsAverage).toBe(expectedOddDigitsAverage);
    });

    test('testing if for 12589 average is 5', () => {
        //Arrange
        const value: number = 12589;
        const expectedOddDigitsAverage: number = 5;

        //Act
        let oddDigitsAverage: number = getAverageOfOddDigitsOfNumber(value);

        //Assert
        expect(oddDigitsAverage).toBe(expectedOddDigitsAverage);
    });

    test('testing if for -12589 average is -5', () => {
        //Arrange
        const value: number = -12589;
        const expectedOddDigitsAverage: number = -5;

        //Act
        let oddDigitsAverage: number = getAverageOfOddDigitsOfNumber(value);

        //Assert
        expect(oddDigitsAverage).toBe(expectedOddDigitsAverage);
    });

    test('testing if for 0 average is 0', () => {
        //Arrange
        const value: number = 0;
        const expectedOddDigitsAverage: number = 0;

        //Act
        let oddDigitsAverage: number = getAverageOfOddDigitsOfNumber(value);

        //Assert
        expect(oddDigitsAverage).toBe(expectedOddDigitsAverage);
    });
});