import { checkIfMatrixIsSquare } from "../../lab04/ex15";

describe('testing function checkIfMatrixIsSquare', () => {
    test('testing for empty array', () => {
        //Arrange
        const matrix: number[][] = [[]];
        const expectedMatrixIsSquare: boolean = false;

        //Act
        let matrixIsSquare: boolean = checkIfMatrixIsSquare(matrix);

        //Assert
        expect(matrixIsSquare).toBe(expectedMatrixIsSquare);
    });

    test('testing for square array with 2 columns', () => {
        //Arrange
        const matrix: number[][] = [[1, 2], [1, 2]];
        const expectedMatrixIsSquare: boolean = true;

        //Act
        let matrixIsSquare: boolean = checkIfMatrixIsSquare(matrix);

        //Assert
        expect(matrixIsSquare).toBe(expectedMatrixIsSquare);
    });

    test('testing for non square array with 2 columns', () => {
        //Arrange
        const matrix: number[][] = [[1, 2], [1, 2, 3]];
        const expectedMatrixIsSquare: boolean = false;

        //Act
        let matrixIsSquare: boolean = checkIfMatrixIsSquare(matrix);

        //Assert
        expect(matrixIsSquare).toBe(expectedMatrixIsSquare);
    });

    test('testing for non square array with 3 columns', () => {
        //Arrange
        const matrix: number[][] = [[1, 2], [1, 2, 3], [1, 2, 3]];
        const expectedMatrixIsSquare: boolean = false;

        //Act
        let matrixIsSquare: boolean = checkIfMatrixIsSquare(matrix);

        //Assert
        expect(matrixIsSquare).toBe(expectedMatrixIsSquare);
    });

    test('testing for non square array with 3 columns', () => {
        //Arrange
        const matrix: number[][] = [[1, 2, 3], [1, 2, 3], [1, 2]];
        const expectedMatrixIsSquare: boolean = false;

        //Act
        let matrixIsSquare: boolean = checkIfMatrixIsSquare(matrix);

        //Assert
        expect(matrixIsSquare).toBe(expectedMatrixIsSquare);
    });

    test('testing for square array with 3 columns', () => {
        //Arrange
        const matrix: number[][] = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
        const expectedMatrixIsSquare: boolean = true;

        //Act
        let matrixIsSquare: boolean = checkIfMatrixIsSquare(matrix);

        //Assert
        expect(matrixIsSquare).toBe(expectedMatrixIsSquare);
    });

    test('testing for non square array with 3 columns', () => {
        //Arrange
        const matrix: number[][] = [[1, 2, 3], [1, 2], [1, 2, 3]];
        const expectedMatrixIsSquare: boolean = false;

        //Act
        let matrixIsSquare: boolean = checkIfMatrixIsSquare(matrix);

        //Assert
        expect(matrixIsSquare).toBe(expectedMatrixIsSquare);
    });

    test('testing for non square array with 3 columns', () => {
        //Arrange
        const matrix: number[][] = [[1, 2], [1, 2], [1, 2]];
        const expectedMatrixIsSquare: boolean = false;

        //Act
        let matrixIsSquare: boolean = checkIfMatrixIsSquare(matrix);

        //Assert
        expect(matrixIsSquare).toBe(expectedMatrixIsSquare);
    });
});