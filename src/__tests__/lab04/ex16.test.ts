import { checkIfMatrixIsRectangular } from "../../lab04/ex16";

describe('testing function checkIfMatrixIsRectangular', () => {
    test('testing for an empty matrix', () => {
        //Arrange
        const matrix: number[][] = [[]];
        const expectedMatrixIsRectangular: boolean = false;

        //Act
        let matrixIsRectangular: boolean = checkIfMatrixIsRectangular(matrix);

        //Assert
        expect(matrixIsRectangular).toBe(expectedMatrixIsRectangular);
    });

    test('testing for a square matrix', () => {
        //Arrange
        const matrix: number[][] = [[1,2],[1,2]];
        const expectedMatrixIsRectangular: boolean = false;

        //Act
        let matrixIsRectangular: boolean = checkIfMatrixIsRectangular(matrix);

        //Assert
        expect(matrixIsRectangular).toBe(expectedMatrixIsRectangular);
    });

    test('testing for a rectangular matrix with 2 columns', () => {
        //Arrange
        const matrix: number[][] = [[1,2,3],[1,2,3]];
        const expectedMatrixIsRectangular: boolean = true;

        //Act
        let matrixIsRectangular: boolean = checkIfMatrixIsRectangular(matrix);

        //Assert
        expect(matrixIsRectangular).toBe(expectedMatrixIsRectangular);
    });
});