import { getProductOfElementsOfMatrix } from "../../lab04/ex17d";

describe('testing function getProductOfElementsOfMatrix', () => {
    test('testing for an empty matrix', () => {
        //Arrange
        const matrix: number[][] = [[]];
        const expectedProductOfElementsOfMatrix: number = 1;

        //Act
        let productOfElementsOfMatrix: number = getProductOfElementsOfMatrix(matrix);

        //Assert
        expect(productOfElementsOfMatrix).toBe(expectedProductOfElementsOfMatrix);
    })

    test('testing for a matrix with the value 0 in it', () => {
        //Arrange
        const matrix: number[][] = [[1, 3, 4], [3, 5, 7], [5, 7, 0]];
        const expectedProductOfElementsOfMatrix: number = 0;

        //Act
        let productOfElementsOfMatrix: number = getProductOfElementsOfMatrix(matrix);

        //Assert
        expect(productOfElementsOfMatrix).toBe(expectedProductOfElementsOfMatrix);
    })

    test('testing for a matrix with several different values', () => {
        //Arrange
        const matrix: number[][] = [[1, 3, 4], [3, 5, 7], [5, 7, 9]];
        const expectedProductOfElementsOfMatrix: number = 396900;

        //Act
        let productOfElementsOfMatrix: number = getProductOfElementsOfMatrix(matrix);

        //Assert
        expect(productOfElementsOfMatrix).toBe(expectedProductOfElementsOfMatrix);
    })
})