import { getAverageOfDigitsOfNumber } from "../../lab03/ex08g";

describe('testing function getAverageOfDigitsOfNumber', () => {
    test('testing if for 246 average is 4', () => {
        //Arrange
        const value: number = 246;
        const expectedDigitsAverage: number = 4;

        //Act
        let digitsAverage: number = getAverageOfDigitsOfNumber(value);

        //Assert
        expect(digitsAverage).toBe(expectedDigitsAverage);
    });
});