import { checkIfIsIdentityMatrix } from "../../lab04/ex17i";

describe('testing function checkIfIsIdentityMatrix', () => {
    test('testing for an empty matrix', () => {
        //Arrange
        const matrix: number[][] = [[]];
        const expectedIsIdentityMatrix: boolean = false;

        //Act
        let isIdentityMatrix: boolean = checkIfIsIdentityMatrix(matrix);

        //Assert
        expect(isIdentityMatrix).toBe(expectedIsIdentityMatrix);
    });

    test('testing for a non square matrix', () => {
        //Arrange
        const matrix: number[][] = [[1, 2], [3, 1], [5, 6]];
        const expectedIsIdentityMatrix: boolean = false;

        //Act
        let isIdentityMatrix: boolean = checkIfIsIdentityMatrix(matrix);

        //Assert
        expect(isIdentityMatrix).toBe(expectedIsIdentityMatrix);
    });

    test('testing for square matrix not identity', () => {
        //Arrange
        const matrix: number[][] = [[1, 0], [0, 2]];
        const expectedIsIdentityMatrix: boolean = false;

        //Act
        let isIdentityMatrix: boolean = checkIfIsIdentityMatrix(matrix);

        //Assert
        expect(isIdentityMatrix).toBe(expectedIsIdentityMatrix);
    });

    test('testing for a 1x1 non identity matrix', () => {
        //Arrange
        const matrix: number[][] = [[0]];
        const expectedIsIdentityMatrix: boolean = false;

        //Act
        let isIdentityMatrix: boolean = checkIfIsIdentityMatrix(matrix);

        //Assert
        expect(isIdentityMatrix).toBe(expectedIsIdentityMatrix);
    });

    test('testing for an identity matrix', () => {
        //Arrange
        const matrix: number[][] = [[1, 0], [0, 1]];
        const expectedIsIdentityMatrix: boolean = true;

        //Act
        let isIdentityMatrix: boolean = checkIfIsIdentityMatrix(matrix);

        //Assert
        expect(isIdentityMatrix).toBe(expectedIsIdentityMatrix);
    });

    test('testing for a non identity matrix', () => {
        //Arrange
        const matrix: number[][] = [[1, 3, 0], [0, 1, 1], [0, 0, 1]];
        const expectedIsIdentityMatrix: boolean = false;

        //Act
        let isIdentityMatrix: boolean = checkIfIsIdentityMatrix(matrix);

        //Assert
        expect(isIdentityMatrix).toBe(expectedIsIdentityMatrix);
    });

    test('testing for a non identity matrix with last value wrong', () => {
        //Arrange
        const matrix: number[][] = [[1, 0, 0], [0, 1, 0], [0, 0, 2]];
        const expectedIsIdentityMatrix: boolean = false;

        //Act
        let isIdentityMatrix: boolean = checkIfIsIdentityMatrix(matrix);

        //Assert
        expect(isIdentityMatrix).toBe(expectedIsIdentityMatrix);
    });

    test('testing for a non identity matrix with second tp last value wrong', () => {
        //Arrange
        const matrix: number[][] = [[1, 0, 0], [0, 1, 0], [0, 2, 1]];
        const expectedIsIdentityMatrix: boolean = false;

        //Act
        let isIdentityMatrix: boolean = checkIfIsIdentityMatrix(matrix);

        //Assert
        expect(isIdentityMatrix).toBe(expectedIsIdentityMatrix);
    });

    test('testing for a non identity matrix with just 0', () => {
        //Arrange
        const matrix: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        const expectedIsIdentityMatrix: boolean = false;

        //Act
        let isIdentityMatrix: boolean = checkIfIsIdentityMatrix(matrix);

        //Assert
        expect(isIdentityMatrix).toBe(expectedIsIdentityMatrix);
    });
});