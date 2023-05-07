import { getSecondaryDiagonalOfMatrix } from "../../lab04/ex17h";

describe('testing function getSecondaryDiagonalOfMatrix', () => {
    test('testing for an empty matrix', () => {
        //Arrange
        const matrix: number[][] = [[]];
        const expectedSecondaryDiagonalOfMatrix: number[] = [];

        //Act
        let secondaryDiagonalOfMatrix: number[] = getSecondaryDiagonalOfMatrix(matrix);

        //Assert
        expect(secondaryDiagonalOfMatrix.length).toBe(expectedSecondaryDiagonalOfMatrix.length);

        for (let i = 0; i < secondaryDiagonalOfMatrix.length; i++)
            expect(secondaryDiagonalOfMatrix[i]).toBe(expectedSecondaryDiagonalOfMatrix[i])
    });

    test('testing for a matrix neither square nor rectangular', () => {
        //Arrange
        const matrix: number[][] = [[1], [2, 3], [4, 5, 6]];
        const expectedSecondaryDiagonalOfMatrix: number[] = [];

        //Act
        let secondaryDiagonalOfMatrix: number[] = getSecondaryDiagonalOfMatrix(matrix);

        //Assert
        expect(secondaryDiagonalOfMatrix.length).toBe(expectedSecondaryDiagonalOfMatrix.length);

        for (let i = 0; i < secondaryDiagonalOfMatrix.length; i++)
            expect(secondaryDiagonalOfMatrix[i]).toBe(expectedSecondaryDiagonalOfMatrix[i])
    });

    test('testing for a square matrix', () => {
        //Arrange
        const matrix: number[][] = [[1, 2, 3], [4, 2, 3], [4, 5, 6]];
        const expectedSecondaryDiagonalOfMatrix: number[] = [3, 2, 4];

        //Act
        let secondaryDiagonalOfMatrix: number[] = getSecondaryDiagonalOfMatrix(matrix);

        //Assert
        expect(secondaryDiagonalOfMatrix.length).toBe(expectedSecondaryDiagonalOfMatrix.length);

        for (let i = 0; i < secondaryDiagonalOfMatrix.length; i++)
            expect(secondaryDiagonalOfMatrix[i]).toBe(expectedSecondaryDiagonalOfMatrix[i])
    });

    test('testing for a rectangular matrix', () => {
        //Arrange
        const matrix: number[][] = [[1, 2], [4, 2], [4, 5]];
        const expectedSecondaryDiagonalOfMatrix: number[] = [2, 4];

        //Act
        let secondaryDiagonalOfMatrix: number[] = getSecondaryDiagonalOfMatrix(matrix);

        //Assert
        expect(secondaryDiagonalOfMatrix.length).toBe(expectedSecondaryDiagonalOfMatrix.length);

        for (let i = 0; i < secondaryDiagonalOfMatrix.length; i++)
            expect(secondaryDiagonalOfMatrix[i]).toBe(expectedSecondaryDiagonalOfMatrix[i])
    });
});