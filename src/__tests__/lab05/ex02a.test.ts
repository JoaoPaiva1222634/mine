import { EncapsulateMatrix } from "../../lab05/ex02a";

describe('testing ex01a', () => {

    //Arrange
    const happyPath = [
        { matrix: new EncapsulateMatrix([[]]), expectedResult: [[]] },
        { matrix: new EncapsulateMatrix([[1]]), expectedResult: [[]] },
        { matrix: new EncapsulateMatrix([[1, 2], [3, 4], [5]]), expectedResult: [[]] }
    ];

    //Act
    test.each(happyPath)(
        'get empty matrix',

        ({ matrix, expectedResult }) => {

            let result: number[][] = matrix.matrix;

            //Assert
            expect(result.length).toBe(expectedResult.length);
        });
});