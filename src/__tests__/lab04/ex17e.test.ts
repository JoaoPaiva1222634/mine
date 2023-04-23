import { getNonRepeatingElementsOfMatrix } from "../../lab04/ex17e";

describe('testing function getNonRepeatingElementsOfMatrix', () => {
    test('testing for an empty matrix', () => {
        //Arrange
        const matrix: number[][] = [[]];
        const expectedNonRepeatingElementsOfMatrix: number[] = [];

        //Act
        let nonRepeatingElementsOfMatrix: number[] = getNonRepeatingElementsOfMatrix(matrix);

        //Assert
        expect(nonRepeatingElementsOfMatrix.length).toBe(expectedNonRepeatingElementsOfMatrix.length);
        for (let i = 0; i != nonRepeatingElementsOfMatrix.length; i++)
            expect(nonRepeatingElementsOfMatrix[i]).toBe(expectedNonRepeatingElementsOfMatrix[i]);
    });

    test('testing for a matrix with no repeating numbers', () => {
        //Arrange
        const matrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const expectedNonRepeatingElementsOfMatrix: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        //Act
        let nonRepeatingElementsOfMatrix: number[] = getNonRepeatingElementsOfMatrix(matrix);

        //Assert
        expect(nonRepeatingElementsOfMatrix.length).toBe(expectedNonRepeatingElementsOfMatrix.length);
        for (let i = 0; i != nonRepeatingElementsOfMatrix.length; i++)
            expect(nonRepeatingElementsOfMatrix[i]).toBe(expectedNonRepeatingElementsOfMatrix[i]);
    });

    test('testing for a matrix with just repeating numbers', () => {
        //Arrange
        const matrix: number[][] = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];
        const expectedNonRepeatingElementsOfMatrix: number[] = [];

        //Act
        let nonRepeatingElementsOfMatrix: number[] = getNonRepeatingElementsOfMatrix(matrix);

        //Assert
        expect(nonRepeatingElementsOfMatrix.length).toBe(expectedNonRepeatingElementsOfMatrix.length);
        for (let i = 0; i != nonRepeatingElementsOfMatrix.length; i++)
            expect(nonRepeatingElementsOfMatrix[i]).toBe(expectedNonRepeatingElementsOfMatrix[i]);
    });

    test('testing for a matrix with one repeating number', () => {
        //Arrange
        const matrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 1]];
        const expectedNonRepeatingElementsOfMatrix: number[] = [2, 3, 4, 5, 6, 7, 8];

        //Act
        let nonRepeatingElementsOfMatrix: number[] = getNonRepeatingElementsOfMatrix(matrix);

        //Assert
        expect(nonRepeatingElementsOfMatrix.length).toBe(expectedNonRepeatingElementsOfMatrix.length);
        for (let i = 0; i != nonRepeatingElementsOfMatrix.length; i++)
            expect(nonRepeatingElementsOfMatrix[i]).toBe(expectedNonRepeatingElementsOfMatrix[i]);
    });
});