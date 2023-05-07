import { getPrimeNumbersInArray } from "../../lab04/ex13g";

describe('testing function getPrimeNumbersInArray', () => {
    test('testing for an empty array', () => {
        //Arrange
        const array: number[] = [];
        const expectedPrimeNumbersOfArray: number[] = [];

        //Act
        let primeNumbersOfArray: number[] = getPrimeNumbersInArray(array);

        //Assert
        expect(primeNumbersOfArray.length).toBe(expectedPrimeNumbersOfArray.length)
        for (let i = 0; i < primeNumbersOfArray.length; i++)
            expect(primeNumbersOfArray[i]).toBe(expectedPrimeNumbersOfArray[i]);
    });

    test('testing for an array with just non prime numbers', () => {
        //Arrange
        const array: number[] = [1, 4, 6, 8, 9, 10, 12, 14];
        const expectedPrimeNumbersOfArray: number[] = [];

        //Act
        let primeNumbersOfArray: number[] = getPrimeNumbersInArray(array);

        //Assert
        expect(primeNumbersOfArray.length).toBe(expectedPrimeNumbersOfArray.length)
        for (let i = 0; i < primeNumbersOfArray.length; i++)
            expect(primeNumbersOfArray[i]).toBe(expectedPrimeNumbersOfArray[i]);
    });

    test('testing for an array with just prime numbers', () => {
        //Arrange
        const array: number[] = [2, 3, 5, 7, 11, 13, 17, 19];
        const expectedPrimeNumbersOfArray: number[] = [2, 3, 5, 7, 11, 13, 17, 19];

        //Act
        let primeNumbersOfArray: number[] = getPrimeNumbersInArray(array);

        //Assert
        expect(primeNumbersOfArray.length).toBe(expectedPrimeNumbersOfArray.length)
        for (let i = 0; i < primeNumbersOfArray.length; i++)
            expect(primeNumbersOfArray[i]).toBe(expectedPrimeNumbersOfArray[i]);
    });

    test('testing for an array with prime and non prime numbers', () => {
        //Arrange
        const array: number[] = [1, 2, 3, 4, 5, 6, 7, 9, 11];
        const expectedPrimeNumbersOfArray: number[] = [2, 3, 5, 7, 11];

        //Act
        let primeNumbersOfArray: number[] = getPrimeNumbersInArray(array);

        //Assert
        expect(primeNumbersOfArray.length).toBe(expectedPrimeNumbersOfArray.length)
        for (let i = 0; i < primeNumbersOfArray.length; i++)
            expect(primeNumbersOfArray[i]).toBe(expectedPrimeNumbersOfArray[i]);
    });

    test('testing for an array with prime and non prime numbers', () => {
        //Arrange
        const array: number[] = [97, 1, 2, 3, 4, 5, 6, 7, 9, 11, 12];
        const expectedPrimeNumbersOfArray: number[] = [97, 2, 3, 5, 7, 11];

        //Act
        let primeNumbersOfArray: number[] = getPrimeNumbersInArray(array);

        //Assert
        expect(primeNumbersOfArray.length).toBe(expectedPrimeNumbersOfArray.length)
        for (let i = 0; i < primeNumbersOfArray.length; i++)
            expect(primeNumbersOfArray[i]).toBe(expectedPrimeNumbersOfArray[i]);
    });
});