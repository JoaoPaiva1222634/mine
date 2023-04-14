import { getAverageOfMultiplesOfXOrYInInterval } from "../../lab03/ex07h";

describe('testing function getAverageOfMultiplesOfXOrYInInterval', () => {
    test('test if for 2, 4 and 2, 3 result is 3', () => {
        //Arrange
        const numberA: number = 2;
        const numberB: number = 4;
        const numberX: number = 2;
        const numberY: number = 3;
        const expectedAverageOfMultiplesOfXOrYInInterval = 3;

        //Act
        let averageOfMultiplesOfXOrYInInterval: number = getAverageOfMultiplesOfXOrYInInterval(numberA, numberB, numberX, numberY);

        //Assert
        expect(averageOfMultiplesOfXOrYInInterval).toBe(expectedAverageOfMultiplesOfXOrYInInterval);
    });

    test('test if for 4, 2 and 2, 3 result is 3', () => {
        //Arrange
        const numberA: number = 4;
        const numberB: number = 2;
        const numberX: number = 2;
        const numberY: number = 3;
        const expectedAverageOfMultiplesOfXOrYInInterval = 3;

        //Act
        let averageOfMultiplesOfXOrYInInterval: number = getAverageOfMultiplesOfXOrYInInterval(numberA, numberB, numberX, numberY);

        //Assert
        expect(averageOfMultiplesOfXOrYInInterval).toBe(expectedAverageOfMultiplesOfXOrYInInterval);
    });

    test('test if for 1, 3 and 4, 3 result is 3', () => {
        //Arrange
        const numberA: number = 1;
        const numberB: number = 3;
        const numberX: number = 4;
        const numberY: number = 3;
        const expectedAverageOfMultiplesOfXOrYInInterval = 3;

        //Act
        let averageOfMultiplesOfXOrYInInterval: number = getAverageOfMultiplesOfXOrYInInterval(numberA, numberB, numberX, numberY);

        //Assert
        expect(averageOfMultiplesOfXOrYInInterval).toBe(expectedAverageOfMultiplesOfXOrYInInterval);
    });

    test('test if for 1, 3 and 3, 4 result is 3', () => {
        //Arrange
        const numberA: number = 1;
        const numberB: number = 3;
        const numberX: number = 3;
        const numberY: number = 4;
        const expectedAverageOfMultiplesOfXOrYInInterval = 3;

        //Act
        let averageOfMultiplesOfXOrYInInterval: number = getAverageOfMultiplesOfXOrYInInterval(numberA, numberB, numberX, numberY);

        //Assert
        expect(averageOfMultiplesOfXOrYInInterval).toBe(expectedAverageOfMultiplesOfXOrYInInterval);
    });

    test('when there are 0 multiples in interval should throw error', () => {
        expect(() => {
            getAverageOfMultiplesOfXOrYInInterval(4, 2, 5, 8);
        }).toThrow('There are 0 multiples in interval, a number is not divisible by 0');
    });
});