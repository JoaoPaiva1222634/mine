import { EncapsulatedMatrix } from "../../lab05/ex02b";

describe('testing ex02d', () => {

    //Arrange
    const happyPath = [
        { matrix: new EncapsulatedMatrix([[]]), expectedResult: undefined },
        { matrix: new EncapsulatedMatrix([[], [], []]), expectedResult: undefined },
        { matrix: new EncapsulatedMatrix([[1]]), expectedResult: 1 },
        { matrix: new EncapsulatedMatrix([[1, 2], [3, 4], [5]]), expectedResult: 5 },
        { matrix: new EncapsulatedMatrix([[1, 2, 7], [3, 4, 8], [5, 3, 9]]), expectedResult: 9 },
        { matrix: new EncapsulatedMatrix([[1, 2, 3], [3, 4, 5]]), expectedResult: 5 }
    ];

    //Act
    test.each(happyPath)(
        'returns the biggest element of the matrix',

        ({ matrix, expectedResult }) => {

            let result: number = matrix.getBiggestElementOfMatrix();

            //Assert
            expect(result).toBe(expectedResult);
        });
});