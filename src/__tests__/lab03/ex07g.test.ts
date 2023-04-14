import { getAverageOfMultiplesOfNumberInInterval } from "../../lab03/ex07g";

describe('testing function getAverageOfMultiplesOfNumberInInterval', () => {
    test('test if for 2, 4 and 2 result is 3', () => {
        //Arrange
        const numberA: number = 2;
        const numberB: number = 4;
        const numberC: number = 2;
        const expectedAverageOfMultiplesOfNumberInInterval = 3;

        //Act
        let averageOfMultiplesOfNumberInInterval: number = getAverageOfMultiplesOfNumberInInterval(numberA,numberB,numberC);

        //Assert
        expect(averageOfMultiplesOfNumberInInterval).toBe(expectedAverageOfMultiplesOfNumberInInterval);
    });

    test('test if for 4, 2 and 2 result is 3', () => {
        //Arrange
        const numberA: number = 4;
        const numberB: number = 2;
        const numberC: number = 2;
        const expectedAverageOfMultiplesOfNumberInInterval = 3;

        //Act
        let averageOfMultiplesOfNumberInInterval: number = getAverageOfMultiplesOfNumberInInterval(numberA,numberB,numberC);

        //Assert
        expect(averageOfMultiplesOfNumberInInterval).toBe(expectedAverageOfMultiplesOfNumberInInterval);
    });

    test('when there are 0 multiples in interval should throw error', () => {
        expect(() => {
            getAverageOfMultiplesOfNumberInInterval(4,2,5);
        }).toThrow('There are 0 multiples in interval, a number is not divisible by 0');
    });
});