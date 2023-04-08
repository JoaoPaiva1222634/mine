import { getNumberOfMultiplesOfTwoNumbersInInterval } from "../../lab03/ex06d";

describe('testing function getNumberOfMultiplesOfTwoNumbersInInterval', () => {
    test('testing for numbers 3 and 5 from 0 to 15 is 1', () => {
        //Arrange
        const num1: number = 3;
        const num2: number = 5;
        const intervalStart: number = 0;
        const intervalEnd: number = 20;
        const expectedNumberOfMultiples: number = 9;

        //Act
        let numberOfMultiples: number = getNumberOfMultiplesOfTwoNumbersInInterval(num1, num2, intervalStart, intervalEnd);

        //Assert
        expect(numberOfMultiples).toBe(expectedNumberOfMultiples);
    });

    test('testing from 1 to 15 is 1', () => {
        //Arrange
        const num1: number = 3;
        const num2: number = 5;
        const intervalStart: number = 1;
        const intervalEnd: number = 15;
        const expectedNumberOfMultiples: number = 7;

        //Act
        let numberOfMultiples: number = getNumberOfMultiplesOfTwoNumbersInInterval(num1, num2, intervalStart, intervalEnd);

        //Assert
        expect(numberOfMultiples).toBe(expectedNumberOfMultiples);
    });

    test('negative interval start should throw error', () => {
        expect(() => {
            getNumberOfMultiplesOfTwoNumbersInInterval(3, 5, -1, 15);
        }).toThrow('Interval start must not be negative');
    });

    test('decimal numbers should throw error', () => {
        expect(() => {
            getNumberOfMultiplesOfTwoNumbersInInterval(1.5, 5, 0, 15);
        }).toThrow('Numbers must be integers');
    });

    test('decimal numbers should throw error', () => {
        expect(() => {
            getNumberOfMultiplesOfTwoNumbersInInterval(1, 5.2, 0, 15);
        }).toThrow('Numbers must be integers');
    });

    test('if numbers are equal should throw error', () => {
        expect(() => {
            getNumberOfMultiplesOfTwoNumbersInInterval(5, 5, 0, 15);
        }).toThrow('numbers must be different from each other');
    });
});