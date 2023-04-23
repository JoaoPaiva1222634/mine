import { getHighestNumberOfMatrix } from "../../lab04/ex17b";

describe('testing function getLowestNumberOfMatrix', () => {
    test('testing for an empty matrix', () => {
        //Arrange
        const matrix: number[][] = [[]];
        const expectedHighestNumberOfMatrix: undefined = undefined;

        //Act
        let highestNumberOfMatrix: number = getHighestNumberOfMatrix(matrix);

        //Assert
        expect(highestNumberOfMatrix).toBe(expectedHighestNumberOfMatrix);
    });

    test('testing for a matrix with just one value', () => {
        //Arrange
        const matrix: number[][] = [[1]];
        const expectedHighestNumberOfMatrix: number = 1;

        //Act
        let highestNumberOfMatrix: number = getHighestNumberOfMatrix(matrix);

        //Assert
        expect(highestNumberOfMatrix).toBe(expectedHighestNumberOfMatrix);
    });

    test('testing for a matrix with same value repeated', () => {
        //Arrange
        const matrix: number[][] = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
        const expectedHighestNumberOfMatrix: number = 1;

        //Act
        let highestNumberOfMatrix: number = getHighestNumberOfMatrix(matrix);

        //Assert
        expect(highestNumberOfMatrix).toBe(expectedHighestNumberOfMatrix);
    });

    test('testing for a matrix with all values different', () => {
        //Arrange
        const matrix: number[][] = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        const expectedHighestNumberOfMatrix: number = 9;

        //Act
        let highestNumberOfMatrix: number = getHighestNumberOfMatrix(matrix);

        //Assert
        expect(highestNumberOfMatrix).toBe(expectedHighestNumberOfMatrix);
    });

    test('testing for a matrix with same value repeated except for the las one', () => {
        //Arrange
        const matrix: number[][] = [[9, 9, 9], [9, 9, 9], [9, 9, 1]];
        const expectedHighestNumberOfMatrix: number = 9;

        //Act
        let highestNumberOfMatrix: number = getHighestNumberOfMatrix(matrix);

        //Assert
        expect(highestNumberOfMatrix).toBe(expectedHighestNumberOfMatrix);
    });

    test('testing for a matrix with same value repeated except for the first one', () => {
        //Arrange
        const matrix: number[][] = [[1, 9, 9], [9, 9, 9], [9, 9, 9]];
        const expectedHighestNumberOfMatrix: number = 9;

        //Act
        let highestNumberOfMatrix: number = getHighestNumberOfMatrix(matrix);

        //Assert
        expect(highestNumberOfMatrix).toBe(expectedHighestNumberOfMatrix);
    });
});