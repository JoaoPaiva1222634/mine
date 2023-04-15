import { getNumberOfDigitsLab4 } from "../../lab04/ex01";

describe('testing function getNumberOfDigitsLab4', () => {
    test('testing if for 36781 result is 5', () => {
        //Arrange
        const value: number = 36781;
        const expectedNumberOfDigitsLab4: number = 5;

        //Act
        let numberOfDigitsLab4: number = getNumberOfDigitsLab4(value);

        //Assert
        expect(numberOfDigitsLab4).toBe(expectedNumberOfDigitsLab4);
    });

    test('testing if for 0 result is 1', () => {
        //Arrange
        const value: number = 0;
        const expectedNumberOfDigitsLab4: number = 1;

        //Act
        let numberOfDigitsLab4: number = getNumberOfDigitsLab4(value);

        //Assert
        expect(numberOfDigitsLab4).toBe(expectedNumberOfDigitsLab4);
    });

    test('negative value should throw error', () => {
        //Arrange
        const value: number = -19;

        //Act

        //Assert
        expect(() => {
            getNumberOfDigitsLab4(value);
        }).toThrow('Number must be a positive integer');
    });
});