import { getProductOfAllMultiplesOfNumberInInterval } from "../../lab03/ex07f";

describe('testing function getProductOfAllMultiplesOfNumberInInterval', () => {
    test('testing for 9 and 2 and 3 is ', () => {
        //Arrange
        const numberA: number = 9;
        const numberB: number = 2;
        const numberC: number = 3;
        const expectedProductOfAllMultiplesOfNumberInInterval: number = 162;

        //Act
        let productOfAllMultiplesOfNumberInInterval: number = getProductOfAllMultiplesOfNumberInInterval(numberA, numberB, numberC)

        //Assert
        expect(productOfAllMultiplesOfNumberInInterval).toBe(expectedProductOfAllMultiplesOfNumberInInterval);
    });

    test('testing for 2 and 9 and 3 is ', () => {
        //Arrange
        const numberA: number = 2;
        const numberB: number = 9;
        const numberC: number = 3;
        const expectedProductOfAllMultiplesOfNumberInInterval: number = 162;

        //Act
        let productOfAllMultiplesOfNumberInInterval: number = getProductOfAllMultiplesOfNumberInInterval(numberA, numberB, numberC)

        //Assert
        expect(productOfAllMultiplesOfNumberInInterval).toBe(expectedProductOfAllMultiplesOfNumberInInterval);
    });

    test('testing for 9 and 9 and 9 is ', () => {
        //Arrange
        const numberA: number = 9;
        const numberB: number = 9;
        const numberC: number = 9;
        const expectedProductOfAllMultiplesOfNumberInInterval: number = 9;

        //Act
        let productOfAllMultiplesOfNumberInInterval: number = getProductOfAllMultiplesOfNumberInInterval(numberA, numberB, numberC)

        //Assert
        expect(productOfAllMultiplesOfNumberInInterval).toBe(expectedProductOfAllMultiplesOfNumberInInterval);
    });
});