import { getSumOfMultiplesOfNumberInInterval } from "../../lab03/ex07e";

describe('testing function getSumOfMultiplesOfNumberInInterval', () => {
    test('testing for 6 to 2 and 2 is 12', () => {
        //Arrange
        const numberA: number = 6;
        const numberB: number = 2;
        const numberC: number = 2;
        const expectedSumOfMultiplesOfNumberInInterval: number = 12;

        //Act
        let sumOfMultiplesOfNumberInInterval: number = getSumOfMultiplesOfNumberInInterval(numberA, numberB, numberC);

        //Assert
        expect(sumOfMultiplesOfNumberInInterval).toBe(expectedSumOfMultiplesOfNumberInInterval);
    });

    test('testing for 4 to 6 and 2 is 10', () => {
        //Arrange
        const numberA: number = 4;
        const numberB: number = 6;
        const numberC: number = 2;
        const expectedSumOfMultiplesOfNumberInInterval: number = 10;

        //Act
        let sumOfMultiplesOfNumberInInterval: number = getSumOfMultiplesOfNumberInInterval(numberA, numberB, numberC);

        //Assert
        expect(sumOfMultiplesOfNumberInInterval).toBe(expectedSumOfMultiplesOfNumberInInterval);
    });

    test('4 to 4 and 2 is 4', () => {
        //Arrange
        const numberA: number = 4;
        const numberB: number = 4;
        const numberC: number = 2;
        const expectedSumOfMultiplesOfNumberInInterval: number = 4;

        //Act
        let sumOfMultiplesOfNumberInInterval: number = getSumOfMultiplesOfNumberInInterval(numberA, numberB, numberC);

        //Assert
        expect(sumOfMultiplesOfNumberInInterval).toBe(expectedSumOfMultiplesOfNumberInInterval);
    });

    test('3 to 3 and 2 is 0', () => {
        //Arrange
        const numberA: number = 3;
        const numberB: number = 3;
        const numberC: number = 2;
        const expectedSumOfMultiplesOfNumberInInterval: number = 0;

        //Act
        let sumOfMultiplesOfNumberInInterval: number = getSumOfMultiplesOfNumberInInterval(numberA, numberB, numberC);

        //Assert
        expect(sumOfMultiplesOfNumberInInterval).toBe(expectedSumOfMultiplesOfNumberInInterval);
    });

    test('1 to 1 and 1 is 1', () => {
        //Arrange
        const numberA: number = 1;
        const numberB: number = 1;
        const numberC: number = 1;
        const expectedSumOfMultiplesOfNumberInInterval: number = 1;

        //Act
        let sumOfMultiplesOfNumberInInterval: number = getSumOfMultiplesOfNumberInInterval(numberA, numberB, numberC);

        //Assert
        expect(sumOfMultiplesOfNumberInInterval).toBe(expectedSumOfMultiplesOfNumberInInterval);
    });
});