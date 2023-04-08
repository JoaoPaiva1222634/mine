import { getNumberOfMultiplesOF3And5InInterval } from "../../lab03/ex06c";

describe('testing function getNumberOfMultiplesOF3And5InInterval', () => {
    test('testing from 0 to 15 is 1', () => {
        //Arrange
        const intervalStart: number = 0;
        const intervalEnd: number = 15;
        const expectedNumberOfMultiples: number = 1;

        //Act
        let numberOfMultiples: number = getNumberOfMultiplesOF3And5InInterval(intervalStart, intervalEnd);

        //Assert
        expect(numberOfMultiples).toBe(expectedNumberOfMultiples);
    });

    test('testing from 1 to 15 is 1', () => {
        //Arrange
        const intervalStart: number = 1;
        const intervalEnd: number = 15;
        const expectedNumberOfMultiples: number = 1;

        //Act
        let numberOfMultiples: number = getNumberOfMultiplesOF3And5InInterval(intervalStart, intervalEnd);

        //Assert
        expect(numberOfMultiples).toBe(expectedNumberOfMultiples);
    });

    test('negative interval start should throw error', () => {
        expect(() => {
            getNumberOfMultiplesOF3And5InInterval(-1, 15);
        }).toThrow('Interval start must not be negative');
    });

});