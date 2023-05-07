import { getProductOfMatrixByConstant } from "../../lab04/ex19a";

describe('testing function getProductOfMatrixByConstant', () => {
    test('testing for an empty matrix', () => {
        //Arrange
        const matrix: number[][] = [[]];
        const constant: number = 1;
        const expectedProductOfMatrixByConstant: number[][] = [[]];

        //Act
        let productOfMatrixByConstant: number[][] = getProductOfMatrixByConstant(matrix, constant);

        //Assert
        expect(productOfMatrixByConstant.length).toBe(expectedProductOfMatrixByConstant.length);
    });

    test('testing for 1 as constant', () => {
        //Arrange
        const matrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const constant: number = 1;
        const expectedProductOfMatrixByConstant: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

        //Act
        let productOfMatrixByConstant: number[][] = getProductOfMatrixByConstant(matrix, constant);

        //Assert
        expect(productOfMatrixByConstant.length).toBe(expectedProductOfMatrixByConstant.length);
    });

    test('testing for 0 as constant', () => {
        //Arrange
        const matrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const constant: number = 0;
        const expectedProductOfMatrixByConstant: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

        //Act
        let productOfMatrixByConstant: number[][] = getProductOfMatrixByConstant(matrix, constant);

        //Assert
        expect(productOfMatrixByConstant.length).toBe(expectedProductOfMatrixByConstant.length);
        for (let i = 0; i < productOfMatrixByConstant.length; i++) {
            expect(productOfMatrixByConstant[i].length).toBe(expectedProductOfMatrixByConstant[i].length);
            for (let j = 0; j < productOfMatrixByConstant[i].length; j++) {
                expect(productOfMatrixByConstant[i][j]).toBe(expectedProductOfMatrixByConstant[i][j]);
            }
        }
    });

    test('testing for 2 as constant', () => {
        //Arrange
        const matrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const constant: number = 2;
        const expectedProductOfMatrixByConstant: number[][] = [[2, 4, 6], [8, 10, 12], [14, 16, 18]];

        //Act
        let productOfMatrixByConstant: number[][] = getProductOfMatrixByConstant(matrix, constant);

        //Assert
        expect(productOfMatrixByConstant.length).toBe(expectedProductOfMatrixByConstant.length);
        for (let i = 0; i < productOfMatrixByConstant.length; i++) {
            expect(productOfMatrixByConstant[i].length).toBe(expectedProductOfMatrixByConstant[i].length);
            for (let j = 0; j < productOfMatrixByConstant[i].length; j++) {
                expect(productOfMatrixByConstant[i][j]).toBe(expectedProductOfMatrixByConstant[i][j]);
            }
        }
    });
});