import { EncapsulatedMatrix } from "../../lab05/ex02b";

describe('testing ex02d', () => {

    //Arrange
    const happyPath = [
        { matrix: new EncapsulatedMatrix([[]]), expectedResult: true },
        { matrix: new EncapsulatedMatrix([[], [], []]), expectedResult: true },
        { matrix: new EncapsulatedMatrix([[1]]), expectedResult: false },
        { matrix: new EncapsulatedMatrix([[1, 2], [3, 4], [5]]), expectedResult: false },
        { matrix: new EncapsulatedMatrix([[1, 2, 7], [3, 4, 8], [5, 3, 9]]), expectedResult: false },
        { matrix: new EncapsulatedMatrix([[1, 2, 3], [3, 4, 5]]), expectedResult: false }
    ];

    //Act
    test.each(happyPath)(
        'return true if matrix is empty and false if it is not',

        ({ matrix, expectedResult }) => {

            matrix.checkIfMatrixIsEmpty()
            let result: boolean = matrix.checkIfMatrixIsEmpty();

            //Assert
            expect(result).toBe(expectedResult);
        });
});