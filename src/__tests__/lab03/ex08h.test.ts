import { getAverageOfEvenDigitsOfNumber } from "../../lab03/ex08h";

describe('testing function getAverageOfEvenDigitsOfNumber', () => {
    test('testing if for 246 average is 4', () => {
        //Arrange
        const value: number = 246;
        const expectedEvenDigitsAverage: number = 4;

        //Act
        let evenDigitsAverage: number = getAverageOfEvenDigitsOfNumber(value);

        //Assert
        expect(evenDigitsAverage).toBe(expectedEvenDigitsAverage);
    });

    test('testing if for -246 average is -4', () => {
        //Arrange
        const value: number = -246;
        const expectedEvenDigitsAverage: number = -4;

        //Act
        let evenDigitsAverage: number = getAverageOfEvenDigitsOfNumber(value);

        //Assert
        expect(evenDigitsAverage).toBe(expectedEvenDigitsAverage);
    });

    test('testing if for 135 average is 0', () => {
        //Arrange
        const value: number = 135;
        const expectedEvenDigitsAverage: number = 0;

        //Act
        let evenDigitsAverage: number = getAverageOfEvenDigitsOfNumber(value);

        //Assert
        expect(evenDigitsAverage).toBe(expectedEvenDigitsAverage);
    });

    test('testing if for -135 average is 0', () => {
        //Arrange
        const value: number = -135;
        const expectedEvenDigitsAverage: number = 0;

        //Act
        let evenDigitsAverage: number = getAverageOfEvenDigitsOfNumber(value);

        //Assert
        expect(evenDigitsAverage).toBe(expectedEvenDigitsAverage);
    });

    test('testing if for 12589 average is 5', () => {
        //Arrange
        const value: number = 12589;
        const expectedEvenDigitsAverage: number = 5;

        //Act
        let evenDigitsAverage: number = getAverageOfEvenDigitsOfNumber(value);

        //Assert
        expect(evenDigitsAverage).toBe(expectedEvenDigitsAverage);
    });

    test('testing if for -12589 average is -5', () => {
        //Arrange
        const value: number = -12589;
        const expectedEvenDigitsAverage: number = -5;

        //Act
        let evenDigitsAverage: number = getAverageOfEvenDigitsOfNumber(value);

        //Assert
        expect(evenDigitsAverage).toBe(expectedEvenDigitsAverage);
    });

    test('testing if for 0 average is 0', () => {
        //Arrange
        const value: number = 0;
        const expectedEvenDigitsAverage: number = 0;

        //Act
        let evenDigitsAverage: number = getAverageOfEvenDigitsOfNumber(value);

        //Assert
        expect(evenDigitsAverage).toBe(expectedEvenDigitsAverage);
    });
});