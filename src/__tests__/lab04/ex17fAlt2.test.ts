import { getPrimeNumbersInMatrix2 } from "../../lab04/ex17fAlt2";

describe('testing function getPrimeNumbersOfMatrix', () => {
    test('testing for an empty matrix', () => {
        //Arrange
        const matrix: number[][] = [[]];
        const expectedPrimeNumbersOfMatrix: number[] = [];

        //Act
        let primeNumbersOfMatrix: number[] = getPrimeNumbersInMatrix2(matrix);

        //Assert
        expect(primeNumbersOfMatrix.length).toBe(expectedPrimeNumbersOfMatrix.length);
        for (let i = 0; i != primeNumbersOfMatrix.length; i++)
            expect(primeNumbersOfMatrix[i]).toBe(expectedPrimeNumbersOfMatrix[i]);
    });

    test('testing for a matrix with just non prime numbers', () => {
        //Arrange
        const matrix: number[][] = [[1, 4, 6], [8, 9, 10], [12, 14]];
        const expectedPrimeNumbersOfMatrix: number[] = [];

        //Act
        let primeNumbersOfMatrix: number[] = getPrimeNumbersInMatrix2(matrix);

        //Assert
        expect(primeNumbersOfMatrix.length).toBe(expectedPrimeNumbersOfMatrix.length);
        for (let i = 0; i != primeNumbersOfMatrix.length; i++)
            expect(primeNumbersOfMatrix[i]).toBe(expectedPrimeNumbersOfMatrix[i]);
    });

    test('testing for a matrix with just prime numbers', () => {
        //Arrange
        const matrix: number[][] = [[2, 3, 5], [7, 11, 13], [17, 19]];
        const expectedPrimeNumbersOfMatrix: number[] = [2, 3, 5, 7, 11, 13, 17, 19];

        //Act
        let primeNumbersOfMatrix: number[] = getPrimeNumbersInMatrix2(matrix);

        //Assert
        expect(primeNumbersOfMatrix.length).toBe(expectedPrimeNumbersOfMatrix.length);
        for (let i = 0; i != primeNumbersOfMatrix.length; i++)
            expect(primeNumbersOfMatrix[i]).toBe(expectedPrimeNumbersOfMatrix[i]);
    });

    test('testing for a matrix with prime and non prime numbers', () => {
        //Arrange
        const matrix: number[][] = [[97, 1, 2], [3, 4, 5], [6, 7, 8], [11]];
        const expectedPrimeNumbersOfMatrix: number[] = [97, 2, 3, 5, 7, 11];

        //Act
        let primeNumbersOfMatrix: number[] = getPrimeNumbersInMatrix2(matrix);

        //Assert
        expect(primeNumbersOfMatrix.length).toBe(expectedPrimeNumbersOfMatrix.length);
        for (let i = 0; i != primeNumbersOfMatrix.length; i++)
            expect(primeNumbersOfMatrix[i]).toBe(expectedPrimeNumbersOfMatrix[i]);
    });
});