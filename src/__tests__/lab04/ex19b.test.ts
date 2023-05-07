import { getSumOfTwoMatrices } from "../../lab04/ex19b";

describe('testing function getSumOfTwoMatrices', () => {
    test('testing for 2 empty matrices', () => {
        //Arrange
        const matrixA: number[][] = [[]];
        const matrixB: number[][] = [[]];
        const expectedSumOfTwoMatrices: number[][] = [[]];

        //Act
        let sumOfTwoMatrices: number[][] = getSumOfTwoMatrices(matrixA, matrixB);

        //Assert
        expect(sumOfTwoMatrices.length).toBe(expectedSumOfTwoMatrices.length);
    });

    test('testing for 2 empty matrices 2', () => {
        //Arrange
        const matrixA: number[][] = [[],[]];
        const matrixB: number[][] = [[],[]];
        const expectedSumOfTwoMatrices: number[][] = [[],[]];

        //Act
        let sumOfTwoMatrices: number[][] = getSumOfTwoMatrices(matrixA, matrixB);

        //Assert
        expect(sumOfTwoMatrices.length).toBe(expectedSumOfTwoMatrices.length);
    });

    test('testing for 2 matrices with different number of rows', () => {
        //Arrange
        const matrixA: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const matrixB: number[][] = [[1, 2, 3], [4, 5, 6]];
        const expectedSumOfTwoMatrices: number[][] = [[]];

        //Act
        let sumOfTwoMatrices: number[][] = getSumOfTwoMatrices(matrixA, matrixB);

        //Assert
        expect(sumOfTwoMatrices.length).toBe(expectedSumOfTwoMatrices.length);
    });

    test('testing for 2 matrices with different number of columns', () => {
        //Arrange
        const matrixA: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const matrixB: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8]];
        const expectedSumOfTwoMatrices: number[][] = [[]];

        //Act
        let sumOfTwoMatrices: number[][] = getSumOfTwoMatrices(matrixA, matrixB);

        //Assert
        expect(sumOfTwoMatrices.length).toBe(expectedSumOfTwoMatrices.length);
    });

    test('testing for 2 matrices with different number of columns on the first row', () => {
        //Arrange
        const matrixA: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const matrixB: number[][] = [[2, 3], [4, 5, 6], [7, 8, 9]];
        const expectedSumOfTwoMatrices: number[][] = [[]];

        //Act
        let sumOfTwoMatrices: number[][] = getSumOfTwoMatrices(matrixA, matrixB);

        //Assert
        expect(sumOfTwoMatrices.length).toBe(expectedSumOfTwoMatrices.length);
    });

    test('testing for a sum with 0s', () => {
        //Arrange
        const matrixA: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const matrixB: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        const expectedSumOfTwoMatrices: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

        //Act
        let sumOfTwoMatrices: number[][] = getSumOfTwoMatrices(matrixA, matrixB);

        //Assert
        expect(sumOfTwoMatrices.length).toBe(expectedSumOfTwoMatrices.length);
        for (let i = 0; i < sumOfTwoMatrices.length; i++) {
            expect(sumOfTwoMatrices[i].length).toBe(expectedSumOfTwoMatrices.length);
            for (let j = 0; j < sumOfTwoMatrices[i].length; j++)
                expect(sumOfTwoMatrices[i][j]).toBe(expectedSumOfTwoMatrices[i][j]);
        }
    });

    test('testing for a normal sum', () => {
        //Arrange
        const matrixA: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const matrixB: number[][] = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        const expectedSumOfTwoMatrices: number[][] = [[10, 10, 10], [10, 10, 10], [10, 10, 10]];

        //Act
        let sumOfTwoMatrices: number[][] = getSumOfTwoMatrices(matrixA, matrixB);

        //Assert
        expect(sumOfTwoMatrices.length).toBe(expectedSumOfTwoMatrices.length);
        for (let i = 0; i < sumOfTwoMatrices.length; i++) {
            expect(sumOfTwoMatrices[i].length).toBe(expectedSumOfTwoMatrices.length);
            for (let j = 0; j < sumOfTwoMatrices[i].length; j++)
                expect(sumOfTwoMatrices[i][j]).toBe(expectedSumOfTwoMatrices[i][j]);
        }
    });
});