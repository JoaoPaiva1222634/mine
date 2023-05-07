import { getPrimaryDiagonalOfMatrix } from "../../lab04/ex17g";

describe('testing function getPrimaryDiagonalOfMatrix', () => {
    test('testing for an empty matrix', () => {
        //Arrange
        const matrix: number[][] = [[]];
        const expectedPrimaryDiagonalOfMatrix: number[] = [];

        //Act
        let primaryDiagonalOfMatrix: number[] = getPrimaryDiagonalOfMatrix(matrix);

        //Assert
        expect(primaryDiagonalOfMatrix.length).toBe(expectedPrimaryDiagonalOfMatrix.length);

        for (let i = 0; i < primaryDiagonalOfMatrix.length; i++)
            expect(primaryDiagonalOfMatrix[i]).toBe(expectedPrimaryDiagonalOfMatrix[i])
    });

    test('testing for a matrix neither square nor rectangular', () => {
        //Arrange
        const matrix: number[][] = [[1], [2, 3], [4, 5, 6]];
        const expectedPrimaryDiagonalOfMatrix: number[] = [];

        //Act
        let primaryDiagonalOfMatrix: number[] = getPrimaryDiagonalOfMatrix(matrix);

        //Assert
        expect(primaryDiagonalOfMatrix.length).toBe(expectedPrimaryDiagonalOfMatrix.length);

        for (let i = 0; i < primaryDiagonalOfMatrix.length; i++)
            expect(primaryDiagonalOfMatrix[i]).toBe(expectedPrimaryDiagonalOfMatrix[i])
    });

    test('testing for a square matrix', () => {
        //Arrange
        const matrix: number[][] = [[1, 2, 3], [4, 2, 3], [4, 5, 6]];
        const expectedPrimaryDiagonalOfMatrix: number[] = [1, 2, 6];

        //Act
        let primaryDiagonalOfMatrix: number[] = getPrimaryDiagonalOfMatrix(matrix);

        //Assert
        expect(primaryDiagonalOfMatrix.length).toBe(expectedPrimaryDiagonalOfMatrix.length);

        for (let i = 0; i < primaryDiagonalOfMatrix.length; i++)
            expect(primaryDiagonalOfMatrix[i]).toBe(expectedPrimaryDiagonalOfMatrix[i])
    });

    test('testing for a rectangular matrix', () => {
        //Arrange
        const matrix: number[][] = [[1, 2], [4, 2], [4, 5]];
        const expectedPrimaryDiagonalOfMatrix: number[] = [1, 2];

        //Act
        let primaryDiagonalOfMatrix: number[] = getPrimaryDiagonalOfMatrix(matrix);

        //Assert
        expect(primaryDiagonalOfMatrix.length).toBe(expectedPrimaryDiagonalOfMatrix.length);

        for (let i = 0; i < primaryDiagonalOfMatrix.length; i++)
            expect(primaryDiagonalOfMatrix[i]).toBe(expectedPrimaryDiagonalOfMatrix[i])
    });
});