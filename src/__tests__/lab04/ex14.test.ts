import { checkIfAllColumnsAreEqual } from "../../lab04/ex14";

describe('testing function checkIfAllColumnsAreEqual', () => {
    test('testing for empty matrix', () => {
        //Arrange
        const matrix: number[][] = [[]];
        const expectedNumberOfColumns: number = -1;

        //Act
        let numberOfColumns: number = checkIfAllColumnsAreEqual(matrix);

        //Assert
        expect(numberOfColumns).toBe(expectedNumberOfColumns);
    });

    test('testing for matrix with columns all equal', () => {
        //Arrange
        const matrix: number[][] = [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]];
        const expectedNumberOfColumns: number = 3;

        //Act
        let numberOfColumns: number = checkIfAllColumnsAreEqual(matrix);

        //Assert
        expect(numberOfColumns).toBe(expectedNumberOfColumns);
    });

    test('testing for matrix with columns all are different', () => {
        //Arrange
        const matrix: number[][] = [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]];
        const expectedNumberOfColumns: number = -1;

        //Act
        let numberOfColumns: number = checkIfAllColumnsAreEqual(matrix);

        //Assert
        expect(numberOfColumns).toBe(expectedNumberOfColumns);
    });

    test('testing for matrix with first column different and all the others equal', () => {
        //Arrange
        const matrix: number[][] = [[1, 2], [1, 2, 3], [1, 2, 3], [1, 2, 3]];
        const expectedNumberOfColumns: number = -1;

        //Act
        let numberOfColumns: number = checkIfAllColumnsAreEqual(matrix);

        //Assert
        expect(numberOfColumns).toBe(expectedNumberOfColumns);
    });

    test('testing for matrix with only the last column different', () => {
        //Arrange
        const matrix: number[][] = [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2]];
        const expectedNumberOfColumns: number = -1;

        //Act
        let numberOfColumns: number = checkIfAllColumnsAreEqual(matrix);

        //Assert
        expect(numberOfColumns).toBe(expectedNumberOfColumns);
    });
});