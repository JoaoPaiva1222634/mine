import { getAverageValueOfElementsOfMatrix } from "../../lab04/ex17c";

describe('testing function getAverageValueOfElementsOfMatrix', () => {
    test('testing for an empty matrix', () => {
        //Arrange
        const matrix: number[][] = [[]];
        const expectedAverageValueOfElementsOfMatrix: number = NaN;

        //Act
        let averageValueOfElementsOfMatrix: number = getAverageValueOfElementsOfMatrix(matrix);

        //Assert
        expect(averageValueOfElementsOfMatrix).toBe(expectedAverageValueOfElementsOfMatrix);
    });

    test('testing for an empty matrix', () => {
        //Arrange
        const matrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const expectedAverageValueOfElementsOfMatrix: number = 5;

        //Act
        let averageValueOfElementsOfMatrix: number = getAverageValueOfElementsOfMatrix(matrix);

        //Assert
        expect(averageValueOfElementsOfMatrix).toBe(expectedAverageValueOfElementsOfMatrix);
    });
})