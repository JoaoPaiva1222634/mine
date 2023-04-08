import { getSumOfMultiplesOfTwoNumbersInInterval } from "../../lab03/ex06e";

describe('testing function getSumOfMultiplesOfTwoNumbersInInterval', () => {
    test('testing for numbers 3 and 5 from 0 to 15 is 98', () => {
        //Arrange
        const num1: number = 3;
        const num2: number = 5;
        const intervalStart: number = 0;
        const intervalEnd: number = 20;
        const expectedNumberOfMultiples: number = 98;

        //Act
        let numberOfMultiples: number = getSumOfMultiplesOfTwoNumbersInInterval(num1, num2, intervalStart, intervalEnd);

        //Assert
        expect(numberOfMultiples).toBe(expectedNumberOfMultiples);
    });

    test('testing from 1 to 15 is 1', () => {
        //Arrange
        const num1: number = 3;
        const num2: number = 5;
        const intervalStart: number = 1;
        const intervalEnd: number = 15;
        const expectedNumberOfMultiples: number = 60;

        //Act
        let numberOfMultiples: number = getSumOfMultiplesOfTwoNumbersInInterval(num1, num2, intervalStart, intervalEnd);

        //Assert
        expect(numberOfMultiples).toBe(expectedNumberOfMultiples);
    });

    test('negative interval start should throw error', () => {
        expect(() => {
            getSumOfMultiplesOfTwoNumbersInInterval(3, 5, -1, 15);
        }).toThrow('Interval start must not be negative');
    });

    test('decimal numbers should throw error', () => {
        expect(() => {
            getSumOfMultiplesOfTwoNumbersInInterval(1.5, 5, 0, 15);
        }).toThrow('Numbers must be integers');
    });

    test('decimal numbers should throw error', () => {
        expect(() => {
            getSumOfMultiplesOfTwoNumbersInInterval(1, 5.2, 0, 15);
        }).toThrow('Numbers must be integers');
    });

    test('if numbers are equal should throw error', () => {
        expect(() => {
            getSumOfMultiplesOfTwoNumbersInInterval(5, 5, 0, 15);
        }).toThrow('numbers must be different from each other');
    });
});