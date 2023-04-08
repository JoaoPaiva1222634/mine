import { getNumberOfMultiplesInterval } from "../../lab03/ex06b";

describe('testing getNumberOfMultiplesInterval function', () => {
    test('', () => {
        //Arrange
        const num: number = 5;
        const intervalStart: number = 1;
        const intervalEnd: number = 25;
        const expectedNumberOfMultiples: number = 5;

        //Act
        let numberOfMultiples: number = getNumberOfMultiplesInterval(num, intervalStart, intervalEnd);

        //Assert
        expect(numberOfMultiples).toBe(expectedNumberOfMultiples);
    })

    test('testing for 0 to 37 is 12', () => {
        //Arrange
        const num: number = 5;
        const intervalStart: number = 0;
        const intervalEnd: number = 25;
        const expectedNumberOfMultiples: number = 5;

        //Act
        let numberOfMultiples: number = getNumberOfMultiplesInterval(num, intervalStart, intervalEnd);

        //Assert
        expect(numberOfMultiples).toBe(expectedNumberOfMultiples);
    })

    test('testing if negative intervalStart throws error', () => {
        expect(() => {
            getNumberOfMultiplesInterval(5, -1, 25);
        }).toThrow('Interval start must not be negative');
    });
})