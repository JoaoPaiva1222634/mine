import { getTransposedMatrix } from "../../lab04/ex17k";

describe('testing function getTransposedMatrix', () => {
    test('testing for an empty matrix', () => {
        //Arrange
        const matrix: number[][] = [[]];
        const expectedTransposedMatrix: number[][] = [[]];

        //Act
        let transposedMatrix: number[][] = getTransposedMatrix(matrix);

        //Assert
        expect(transposedMatrix.length).toBe(expectedTransposedMatrix.length)
    });

    test('testing for a matrix with columns of different sizes', () => {
        //Arrange
        const matrix: number[][] = [[1, 2], [3, 4, 5], [6]];
        const expectedTransposedMatrix: number[][] = [[]];

        //Act
        let transposedMatrix: number[][] = getTransposedMatrix(matrix);

        //Assert
        expect(transposedMatrix.length).toBe(expectedTransposedMatrix.length)
    });

    test('testing for a 2x3 matrix', () => {
        //Arrange
        const matrix: number[][] = [[1, 2, 3], [4, 5, 6]];
        const expectedTransposedMatrix: number[][] = [[1, 4], [2, 5], [3, 6]];

        //Act
        let transposedMatrix: number[][] = getTransposedMatrix(matrix);

        //Assert
        expect(transposedMatrix.length).toBe(expectedTransposedMatrix.length);
        expect(transposedMatrix[0].length).toBe(expectedTransposedMatrix[0].length)

        for (let i = 0; i < transposedMatrix.length; i++)
            for (let j = 0; j < transposedMatrix[0].length; j++)
                expect(transposedMatrix[i][j]).toBe(expectedTransposedMatrix[i][j]);
    });

    test('testing for a 3x2 matrix', () => {
        //Arrange
        const matrix: number[][] = [[1, 2], [3, 4], [5, 6]];
        const expectedTransposedMatrix: number[][] = [[1, 3, 5], [2, 4, 6]];

        //Act
        let transposedMatrix: number[][] = getTransposedMatrix(matrix);

        //Assert
        expect(transposedMatrix.length).toBe(expectedTransposedMatrix.length);
        expect(transposedMatrix[0].length).toBe(expectedTransposedMatrix[0].length)

        for (let i = 0; i < transposedMatrix.length; i++)
            for (let j = 0; j < transposedMatrix[0].length; j++)
                expect(transposedMatrix[i][j]).toBe(expectedTransposedMatrix[i][j]);
    });

    test('testing for a 3x3 matrix', () => {
        //Arrange
        const matrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const expectedTransposedMatrix: number[][] = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];

        //Act
        let transposedMatrix: number[][] = getTransposedMatrix(matrix);

        //Assert
        expect(transposedMatrix.length).toBe(expectedTransposedMatrix.length);
        expect(transposedMatrix[0].length).toBe(expectedTransposedMatrix[0].length)

        for (let i = 0; i < transposedMatrix.length; i++)
            for (let j = 0; j < transposedMatrix[0].length; j++)
                expect(transposedMatrix[i][j]).toBe(expectedTransposedMatrix[i][j]);
    });
});